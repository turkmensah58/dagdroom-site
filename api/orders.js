import crypto from "node:crypto";
import { databaseConfigured, listOrders, updateOrderStatus } from "../server/supabase.js";

const STATUSES = ["new", "preparing", "shipped", "delivered", "cancelled"];

function authorized(request) {
  const supplied = request.headers.authorization?.replace(/^Bearer\s+/i, "") || "";
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!supplied || !expected || supplied.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(supplied), Buffer.from(expected));
}

export default async function handler(request, response) {
  if (!authorized(request)) return response.status(401).json({ error: "Unauthorized." });
  if (!databaseConfigured()) return response.status(503).json({ error: "Order database is not configured." });
  try {
    if (request.method === "GET") return response.status(200).json({ orders: await listOrders() });
    if (request.method === "PATCH") {
      const { id, status } = request.body || {};
      if (!id || !STATUSES.includes(status)) return response.status(400).json({ error: "Invalid order update." });
      const order = await updateOrderStatus(id, status);
      const labels = { new: "received", preparing: "being prepared", shipped: "shipped", delivered: "delivered", cancelled: "cancelled" };
      if (process.env.RESEND_API_KEY && order?.customer_email) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: process.env.ORDER_FROM_EMAIL || "Dagdroom <orders@dagdroom.de>",
            to: [order.customer_email],
            subject: `Your Dagdroom order is ${labels[status]}`,
            html: `<h2>Order #${order.id}</h2><p>Your order is now <strong>${labels[status]}</strong>.</p>`
          })
        });
      }
      return response.status(200).json({ order });
    }
    return response.status(405).json({ error: "Method not allowed." });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
