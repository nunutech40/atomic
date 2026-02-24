// ── SAINS API Configuration ──────────────────────────────────────────
// In dev: backend runs on localhost:8080
// In prod: change to your deployed API URL (e.g. https://api.sains.id)

export const config = {
  product: 'atomic',
  apiBase: 'http://localhost:8080',
} as const;
