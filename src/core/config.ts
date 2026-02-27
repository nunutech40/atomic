// ── SAINS API Configuration ──────────────────────────────────────────
// In dev:  direct to localhost:8080
// In prod: API lives on main domain (sains-atomic.web.id)

const isDev = import.meta.env.DEV;

export const config = {
  product: 'atomic',
  apiBase: isDev ? 'http://localhost:8080' : 'https://sains-atomic.web.id',
} as const;

