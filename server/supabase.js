const headers = () => ({
  apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
  "Content-Type": "application/json"
});

export function databaseConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function saveOrder(order) {
  const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/orders?on_conflict=stripe_session_id`, {
    method: "POST", headers: { ...headers(), Prefer: "resolution=merge-duplicates,return=representation" }, body: JSON.stringify(order)
  });
  if (!response.ok) throw new Error(`Order database error: ${await response.text()}`);
  return (await response.json())[0];
}

export async function listOrders() {
  const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/orders?select=*&order=created_at.desc`, { headers: headers() });
  if (!response.ok) throw new Error(`Order database error: ${await response.text()}`);
  return response.json();
}

export async function updateOrderStatus(id, status) {
  const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/orders?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH", headers: { ...headers(), Prefer: "return=representation" }, body: JSON.stringify({ status, updated_at: new Date().toISOString() })
  });
  if (!response.ok) throw new Error(`Order database error: ${await response.text()}`);
  return (await response.json())[0];
}
