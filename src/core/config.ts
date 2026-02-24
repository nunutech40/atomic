// ── SAINS API Configuration ──────────────────────────────────────────
// In dev:  Vite proxy or direct to localhost:8080
// In prod: same origin (nginx proxies /api/ → Go backend)

const isDev = import.meta.env.DEV;

export const config = {
  product: 'atomic',
  apiBase: isDev ? 'http://localhost:8080' : '',  // prod: '' = same origin
} as const;

