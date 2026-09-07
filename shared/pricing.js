// Monetary amounts use the smallest currency unit: cents for EUR, kurus for TRY.
// TRY prices are converted from EUR at the fixed rate of 1 EUR = 55.87 TRY.
export const PRODUCT_PRICES = {
  "slor-air-dress": { EUR: 24000, TRY: 1340880 },
  "slor-air-dress-demo-2": { EUR: 21000, TRY: 1173270 },
  "slor-air-dress-demo-3": { EUR: 23000, TRY: 1285010 },
  "slor-air-dress-demo-4": { EUR: 28000, TRY: 1564360 },
  "skygge-belted-wool-coat": { EUR: 14300, TRY: 798941 },
  "skygge-soft-jacket": { EUR: 29000, TRY: 1620230 },
  "skygge-soft-jacket-demo-2": { EUR: 21000, TRY: 1173270 },
  "skygge-soft-jacket-demo-3": { EUR: 23000, TRY: 1285010 },
  "skygge-soft-jacket-demo-4": { EUR: 28000, TRY: 1564360 },
  "flyt-motion-top": { EUR: 18000, TRY: 1005660 },
  "flyt-motion-top-demo-2": { EUR: 21000, TRY: 1173270 },
  "flyt-motion-top-demo-3": { EUR: 23000, TRY: 1285010 },
  "flyt-motion-top-demo-4": { EUR: 28000, TRY: 1564360 },
  "skaer-motion-overshirt": { EUR: 26000, TRY: 1452620 },
  "skaer-motion-overshirt-demo-2": { EUR: 21000, TRY: 1173270 },
  "skaer-motion-overshirt-demo-3": { EUR: 23000, TRY: 1285010 },
  "skaer-motion-overshirt-demo-4": { EUR: 28000, TRY: 1564360 },
  "linje-double-breasted-blazer": { EUR: 10500, TRY: 586635 },
  "linje-tailored-trousers": { EUR: 8900, TRY: 497243 },
  "linje-no-01-leather-derby": { EUR: 18900, TRY: 1055943 },
  "linje-leather-trench-coat": { EUR: 30000, TRY: 1676100 },
  "skygge-soft-turtleneck-soft-sand": { EUR: 2656, TRY: 149000 },
  "linje-double-breasted-blazer-demo-2": { EUR: 21000, TRY: 1173270 },
  "linje-double-breasted-blazer-demo-3": { EUR: 23000, TRY: 1285010 },
  "linje-double-breasted-blazer-demo-4": { EUR: 28000, TRY: 1564360 },
  "stal-utility-jacket": { EUR: 31000, TRY: 1731970 },
  "stal-utility-jacket-demo-2": { EUR: 21000, TRY: 1173270 },
  "stal-utility-jacket-demo-3": { EUR: 23000, TRY: 1285010 },
  "stal-utility-jacket-demo-4": { EUR: 28000, TRY: 1564360 }
};

// Switch to true only after international delivery, taxes and EUR payments are operational.
export const INTERNATIONAL_CHECKOUT_ENABLED = false;

export function currencyForLanguage(language) {
  return language === "tr" ? "TRY" : "EUR";
}

export function priceForProduct(slug, currency) {
  const amount = PRODUCT_PRICES[slug]?.[currency];
  return Number.isInteger(amount) && amount >= 0 ? amount : null;
}
