import assert from 'node:assert/strict';
import { bagTotals, currencyForLanguage } from '../shared/pricing.js';
import checkout from '../api/create-checkout-session.js';

const item = { slug: 'skygge-soft-turtleneck-soft-sand', size: 'M', color: 'Soft Sand' };
assert.deepEqual(bagTotals([], 'TRY'), { subtotal: 0, shipping: 0, total: 0 });
assert.deepEqual(bagTotals([item], 'TRY'), { subtotal: 149000, shipping: 14900, total: 163900 });
assert.deepEqual(bagTotals([item, item], 'TRY'), { subtotal: 298000, shipping: 14900, total: 312900 });
assert.equal(bagTotals([{ slug: 'missing' }], 'TRY').total, null);
assert.equal(bagTotals([item], 'EUR').total, null);
for (const lang of ['tr', 'en', 'de', 'sv']) assert.equal(currencyForLanguage(lang), 'TRY');

const originalFetch = globalThis.fetch;
const originalKey = process.env.STRIPE_SECRET_KEY;
let captured;
let calls = 0;
globalThis.fetch = async (url, options) => {
  assert.equal(url, 'https://api.stripe.com/v1/checkout/sessions');
  calls++;
  captured = new URLSearchParams(options.body);
  return { ok: true, json: async () => ({ url: 'https://checkout.example.test/session' }) };
};
process.env.STRIPE_SECRET_KEY = 'shipping-test-placeholder';
async function request(body) {
  const response = { statusCode: 200, status(code) { this.statusCode = code; return this; }, json(body) { this.body = body; return this; } };
  await checkout({ method: 'POST', headers: { host: 'example.test' }, body }, response);
  return response;
}
try {
  for (const items of [[item], [item, item]]) {
    const response = await request({ currency: 'TRY', items, shipping: 0, total: 1 });
    assert.equal(response.statusCode, 200);
    assert.equal(captured.get('shipping_options[0][shipping_rate_data][fixed_amount][amount]'), '14900');
    assert.equal(captured.get('shipping_options[0][shipping_rate_data][fixed_amount][currency]'), 'try');
    assert.equal(captured.get('shipping_options[0][shipping_rate_data][tax_behavior]'), 'inclusive');
    assert.equal(captured.get('shipping_address_collection[allowed_countries][0]'), 'TR');
    assert.equal(captured.has('shipping_address_collection[allowed_countries][1]'), false);
    assert.equal(captured.has('shipping_options[1][shipping_rate_data][type]'), false);
    const subtotal = items.reduce((sum, _, i) => sum + Number(captured.get(`line_items[${i}][price_data][unit_amount]`)), 0);
    assert.equal(subtotal + 14900, bagTotals(items, 'TRY').total);
    assert.equal(captured.get('line_items[0][price_data][tax_behavior]'), 'inclusive');
  }
  const beforeInvalid = calls;
  assert.equal((await request({ currency: 'TRY', items: [] })).statusCode, 400);
  assert.equal((await request({ currency: 'TRY', items: [{ ...item, slug: 'missing' }] })).statusCode, 400);
  assert.equal((await request({ currency: 'EUR', items: [item] })).statusCode, 403);
  assert.equal(calls, beforeInvalid);
  console.log('Shipping checks passed: empty/single/multiple items, missing prices, all languages, server amount, tampered totals, domestic-only checkout. No external requests made.');
} finally {
  globalThis.fetch = originalFetch;
  if (originalKey === undefined) delete process.env.STRIPE_SECRET_KEY;
  else process.env.STRIPE_SECRET_KEY = originalKey;
}
