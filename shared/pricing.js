// Monetary amounts use the smallest currency unit: cents for EUR, kurus for TRY.
// TRY prices remain authoritative; EUR equivalents use the dated reference rate below.
// Source: https://api.frankfurter.dev/v1/2026-09-25?base=EUR&symbols=TRY
export const EUR_TRY_REFERENCE_RATE = 55.7975;
export const EUR_TRY_REFERENCE_DATE = "2026-09-25";
export const PRODUCT_PRICES = {
  "slor-wrap-top": { EUR: 6631, TRY: 370000 },
  "skygge-nord-mini-skirt": { EUR: 3943, TRY: 220000 },
  "slor-do-linje-long-sleeve": { EUR: 2704, TRY: 150849 },
  "skygge-belted-wool-coat": { EUR: 14319, TRY: 798941 },
  "skygge-soft-jacket": { EUR: 29038, TRY: 1620230 },
  "skygge-soft-jacket-demo-2": { EUR: 21027, TRY: 1173270 },
  "skygge-soft-jacket-demo-3": { EUR: 23030, TRY: 1285010 },
  "skygge-soft-jacket-demo-4": { EUR: 28036, TRY: 1564360 },
  "flyt-motion-top": { EUR: 5556, TRY: 310000 },
  "flyt-nocturne-pyjama": { EUR: 3943, TRY: 220000 },
  "flyt-ivory-linen-pyjama": { EUR: 3943, TRY: 220000 },
  "flyt-motion-top-demo-2": { EUR: 21027, TRY: 1173270 },
  "flyt-motion-top-demo-3": { EUR: 23030, TRY: 1285010 },
  "flyt-motion-top-demo-4": { EUR: 28036, TRY: 1564360 },
  "skaer-motion-overshirt": { EUR: 26034, TRY: 1452620 },
  "skaer-motion-overshirt-demo-2": { EUR: 21027, TRY: 1173270 },
  "skaer-motion-overshirt-demo-3": { EUR: 23030, TRY: 1285010 },
  "skaer-motion-overshirt-demo-4": { EUR: 28036, TRY: 1564360 },
  "linje-double-breasted-blazer": { EUR: 10514, TRY: 586635 },
  "linje-tailored-trousers": { EUR: 8912, TRY: 497243 },
  "linje-no-01-leather-derby": { EUR: 18925, TRY: 1055943 },
  "linje-leather-trench-coat": { EUR: 30039, TRY: 1676100 },
  "skygge-soft-turtleneck-soft-sand": { EUR: 2670, TRY: 149000 },
  "linje-double-breasted-blazer-demo-2": { EUR: 21027, TRY: 1173270 },
  "linje-double-breasted-blazer-demo-3": { EUR: 23030, TRY: 1285010 },
  "linje-double-breasted-blazer-demo-4": { EUR: 28036, TRY: 1564360 },
  "stal-utility-jacket": { EUR: 31040, TRY: 1731970 },
  "stal-utility-jacket-demo-2": { EUR: 21027, TRY: 1173270 },
  "stal-utility-jacket-demo-3": { EUR: 23030, TRY: 1285010 },
  "stal-utility-jacket-demo-4": { EUR: 28036, TRY: 1564360 }
};

// Switch to true only after international delivery, taxes and EUR payments are operational.
export const INTERNATIONAL_CHECKOUT_ENABLED = false;
// VAT-inclusive flat shipping fee per domestic order, in kurus.
export const DOMESTIC_SHIPPING_FEE = 14900;

export function bagTotals(items, currency) {
  if (!items.length) return { subtotal: 0, shipping: 0, total: 0 };
  const amounts = items.map((item) => priceForProduct(item.slug, currency));
  const subtotal = amounts.every((amount) => amount !== null) ? amounts.reduce((sum, amount) => sum + amount, 0) : null;
  const shipping = currency === "TRY" ? DOMESTIC_SHIPPING_FEE : null;
  return { subtotal, shipping, total: subtotal !== null && shipping !== null ? subtotal + shipping : null };
}

// EUR display restored by user request on 25 September 2026.
export const TL_ONLY_DISPLAY = false;

export function currencyForLanguage(language) {
  if (TL_ONLY_DISPLAY) return "TRY";
  return language === "tr" ? "TRY" : "EUR";
}

export function priceForProduct(slug, currency) {
  const amount = PRODUCT_PRICES[slug]?.[currency];
  return Number.isInteger(amount) && amount >= 0 ? amount : null;
}
