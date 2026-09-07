import { INTERNATIONAL_CHECKOUT_ENABLED, priceForProduct } from "../shared/pricing.js";

const CATALOG = {
  "slor-air-dress": "Air Dress", "slor-air-dress-demo-2": "Layer Top", "slor-air-dress-demo-3": "Soft Trouser", "slor-air-dress-demo-4": "Quiet Jacket",
  "skygge-belted-wool-coat": "Belted Wool Coat",
  "skygge-soft-jacket": "Soft Jacket", "skygge-soft-jacket-demo-2": "Layer Top", "skygge-soft-jacket-demo-3": "Soft Trouser", "skygge-soft-jacket-demo-4": "Quiet Jacket",
  "flyt-motion-top": "Motion Top", "flyt-motion-top-demo-2": "Layer Top", "flyt-motion-top-demo-3": "Soft Trouser", "flyt-motion-top-demo-4": "Quiet Jacket",
  "skaer-motion-overshirt": "Motion Overshirt", "skaer-motion-overshirt-demo-2": "Tailored Trouser", "skaer-motion-overshirt-demo-3": "Soft Knit", "skaer-motion-overshirt-demo-4": "Utility Jacket",
  "linje-double-breasted-blazer": "Double-Breasted Blazer", "linje-double-breasted-blazer-demo-2": "Tailored Trouser", "linje-double-breasted-blazer-demo-3": "Soft Knit", "linje-double-breasted-blazer-demo-4": "Utility Jacket",
  "linje-tailored-trousers": "Tailored Trousers",
  "linje-no-01-leather-derby": "No. 01 Leather Derby",
  "linje-leather-trench-coat": "Leather Trench Coat",
  "skygge-soft-turtleneck-soft-sand": "Soft Turtleneck — Soft Sand",
  "stal-utility-jacket": "Utility Jacket", "stal-utility-jacket-demo-2": "Tailored Trouser", "stal-utility-jacket-demo-3": "Soft Knit", "stal-utility-jacket-demo-4": "Utility Jacket"
};

export default async function handler(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed." });
  if (!process.env.STRIPE_SECRET_KEY) return response.status(503).json({ error: "Payment is not configured yet." });

  const items = Array.isArray(request.body?.items) ? request.body.items : [];
  const currency = request.body?.currency;
  if (!['EUR', 'TRY'].includes(currency)) return response.status(400).json({ error: "Invalid currency." });
  if (currency === "EUR" && !INTERNATIONAL_CHECKOUT_ENABLED) {
    return response.status(403).json({ error: "International delivery is coming soon." });
  }
  if (!items.length || items.length > 20) return response.status(400).json({ error: "Your bag is empty or too large." });

  const params = new URLSearchParams();
  params.set("mode", "payment");
  params.set("payment_method_types[0]", "card");
  params.set("billing_address_collection", "required");
  params.set("phone_number_collection[enabled]", "true");
  params.set("shipping_address_collection[allowed_countries][0]", "DE");
  params.set("shipping_address_collection[allowed_countries][1]", "TR");
  params.set("shipping_address_collection[allowed_countries][2]", "AT");
  params.set("shipping_address_collection[allowed_countries][3]", "NL");
  params.set("shipping_address_collection[allowed_countries][4]", "SE");
  params.set("shipping_address_collection[allowed_countries][5]", "DK");
  const origin = `https://${request.headers.host}`;
  params.set("success_url", `${origin}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`);
  params.set("cancel_url", `${origin}/?checkout=cancelled`);

  for (const [index, item] of items.entries()) {
    const productName = CATALOG[item.slug];
    const unitAmount = priceForProduct(item.slug, currency);
    if (!productName || unitAmount === null || typeof item.size !== "string" || typeof item.color !== "string") {
      return response.status(400).json({ error: "One or more products are invalid." });
    }
    params.set(`line_items[${index}][price_data][currency]`, currency.toLowerCase());
    params.set(`line_items[${index}][price_data][unit_amount]`, String(unitAmount));
    params.set(`line_items[${index}][price_data][product_data][name]`, `${productName} · ${item.color.slice(0, 40)} / ${item.size.slice(0, 10)}`);
    params.set(`line_items[${index}][quantity]`, "1");
  }

  try {
    const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`, "Content-Type": "application/x-www-form-urlencoded" },
      body: params
    });
    const session = await stripeResponse.json();
    if (!stripeResponse.ok) return response.status(502).json({ error: session.error?.message || "Payment service error." });
    return response.status(200).json({ url: session.url });
  } catch {
    return response.status(502).json({ error: "Payment service is temporarily unavailable." });
  }
}
