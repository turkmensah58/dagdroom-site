import crypto from "node:crypto";
import { databaseConfigured, saveOrder } from "../server/supabase.js";

export const config = { api: { bodyParser: false } };

async function rawBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks);
}

function verifyStripeSignature(payload, header, secret) {
  const parts = Object.fromEntries((header || "").split(",").map((part) => part.split("=")));
  if (!parts.t || !parts.v1) return false;
  if (Math.abs(Date.now() / 1000 - Number(parts.t)) > 300) return false;
  const digest = crypto.createHmac("sha256", secret).update(`${parts.t}.${payload}`).digest("hex");
  return digest.length === parts.v1.length && crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(parts.v1));
}

async function stripeGet(path) {
  const response = await fetch(`https://api.stripe.com${path}`, { headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` } });
  if (!response.ok) throw new Error(`Stripe API error: ${await response.text()}`);
  return response.json();
}

async function sendEmail(to, subject, html) {
  if (!process.env.RESEND_API_KEY || !to) return;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.ORDER_FROM_EMAIL || "Dagdroom <orders@dagdroom.de>", to: [to], subject, html })
  });
  if (!response.ok) throw new Error(`Email error: ${await response.text()}`);
}

export default async function handler(request, response) {
  if (request.method !== "POST") return response.status(405).end();
  if (!process.env.STRIPE_WEBHOOK_SECRET || !process.env.STRIPE_SECRET_KEY || !databaseConfigured()) {
    return response.status(503).json({ error: "Webhook is not configured." });
  }
  const buffer = await rawBody(request);
  const payload = buffer.toString("utf8");
  if (!verifyStripeSignature(payload, request.headers["stripe-signature"], process.env.STRIPE_WEBHOOK_SECRET)) {
    return response.status(400).json({ error: "Invalid signature." });
  }

  try {
    const event = JSON.parse(payload);
    if (event.type !== "checkout.session.completed" && event.type !== "checkout.session.async_payment_succeeded") {
      return response.status(200).json({ received: true });
    }
    const session = event.data.object;
    if (session.payment_status !== "paid") return response.status(200).json({ received: true });
    const lineItems = await stripeGet(`/v1/checkout/sessions/${encodeURIComponent(session.id)}/line_items?limit=100`);
    const shipping = session.shipping_details || session.collected_information?.shipping_details || {};
    const customer = session.customer_details || {};
    const order = await saveOrder({
      stripe_session_id: session.id,
      payment_intent_id: session.payment_intent,
      status: "new",
      payment_status: session.payment_status,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_name: customer.name || shipping.name,
      customer_email: customer.email,
      customer_phone: customer.phone || shipping.phone,
      billing_address: customer.address || null,
      shipping_address: shipping.address || null,
      items: lineItems.data.map((item) => ({ name: item.description, quantity: item.quantity, amount_total: item.amount_total }))
    });
    const total = new Intl.NumberFormat("de-DE", { style: "currency", currency: (session.currency || "eur").toUpperCase() }).format(session.amount_total / 100);
    const summary = `<h2>Order ${order.id}</h2><p>${customer.name || shipping.name || "Customer"} · ${total}</p><p>${lineItems.data.map((item) => `${item.quantity} × ${item.description}`).join("<br>")}</p>`;
    await Promise.allSettled([
      sendEmail(process.env.ORDER_NOTIFICATION_EMAIL, `New Dagdroom order · ${total}`, summary),
      sendEmail(customer.email, "We received your Dagdroom order", `${summary}<p>We will email you again when your order ships.</p>`)
    ]);
    return response.status(200).json({ received: true });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
