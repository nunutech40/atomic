# Backend & Subscription Plan — SAINS Platform
**Project:** SAINS Platform (Multi-Product Learning)  
**Version:** 1.1  
**Date:** 2026-02-22  
**Status:** 📋 PLANNED — Belum diimplementasi. Ini blueprint arsitektur.

---

## 0. Vision

> **SAINS bukan hanya Atomic.**

SAINS adalah **platform multi-produk pembelajaran sains**. Atomic adalah produk pertama. Besok bisa ada produk lain: Energi, Biologi, Fisika Kuantum — semuanya berbagi satu backend, satu database, satu sistem pembayaran, satu admin dashboard.

```
sains.id/                    → Landing hub semua produk
sains.id/atomic              → Produk: Atomic (tabel periodik, fenomena)
sains.id/energi              → Produk masa depan: Energi
sains.id/biologi             → Produk masa depan: Biologi
...

(Backend, DB, Auth, Billing) → SATU server, SATU database
```

---

## 1. Tipe User

### 1.1 Tabel Tipe User

| Tipe | Deskripsi | Cara Dapat | Lifetime | Login Limit | Session |
|------|-----------|-----------|---------|-------------|---------|
| `guest` | Pengguna trial via guest code | Admin generate code, user login dgn email + code | Adjustable (1–7 hari) | 2x login per email per code | 1 session aktif |
| `subscriber` | Pengguna berbayar | Register + bayar via Xendit | Sesuai subscription | Unlimited | 1 session aktif |
| `admin` | Pengelola platform | Seeded langsung di DB | Selamanya | Unlimited | 2 session aktif |

### 1.2 Guest User — Detail (Guest Code System)

Guest user bukan daftar sendiri. Admin **men-generate guest code** dari dashboard — satu kode bisa dishare ke banyak orang sekaligus.

```
Flow Guest:
1. Admin buka dashboard → klik "Generate Guest Code"
2. Admin isi: label (e.g. "Promo Februari"), durasi expired (1 hari / 2 hari / 1 minggu)
3. BE buat record `guest_codes` + code: "ATOM-A7X2" (pendek, mudah dishare)
4. Admin copy code → share ke banyak orang (WA group, IG story, poster, dll)
5. Orang buka sains.id/atomic → klik "Coba Gratis" / "Login Guest"
6. Masukkan: email sendiri + guest code
7. BE validasi:
   a. Code masih aktif & belum expired?
   b. Email ini sudah login berapa kali dengan code ini? (cek `guest_logins`)
   c. Jika login_count < max_logins_per_email (default: 2) → OK
   d. Jika sudah >= max → tolak ("Kesempatan trial sudah habis")
8. Guest dapat session 24 jam
9. Jika guest code expired → semua session guest dengan code itu mati otomatis
```

**Keunggulan model Guest Code:**
- 🎯 Satu code bisa dishare ke banyak orang sekaligus (viral-friendly)
- 🔒 Setiap email tetap punya batas (2x login per code)
- ⏱️ Admin bisa set durasi expired: 1 hari, 2 hari, atau 1 minggu
- 📊 Admin bisa lihat siapa saja yang sudah pakai code (by email)
- 🚫 Guest tidak bisa self-register. Hanya admin yang bisa generate code.

### 1.3 Session Rules — Anti Multi-Account Sharing

**Aturan utama: 1 akun = 1 session aktif (subscriber). Guest: 2 login per email per code.**

```
Login baru masuk (subscriber):
  → Cek apakah ada session aktif untuk user ini
  → JA: revoke session lama + catat anomaly log
  → Buat session baru → simpan device fingerprint + IP

Login guest:
  → Cek: code aktif & belum expired?
  → Cek: email ini sudah login berapa kali dgn code ini?
  → Jika < max → buat session 24 jam
  → Jika >= max → tolak ("Trial habis, silakan berlangganan")
```

---

## 2. Pricing Architecture

### 2.1 Filosofi Pricing

"Harga bukan seragam." Produk sama, harga berbeda per segmen. Ini legal dan umum (geo-pricing, student pricing, family pricing).

### 2.2 Segmen & Harga (Contoh Atomic)

> **Catatan:** Harga di bawah adalah contoh/draft. Bisa diubah di DB tanpa deploy ulang.

| Segmen | Target | Landing Page | Positioning |
|--------|--------|--------------|-------------|
| `global` | User luar negeri | `/pricing/global` | Premium, USD-equivalent |
| `student` | Pelajar SMA Indonesia | `/pricing/student` | Affordable, student-friendly |
| `parent` | Orang tua (FOMO untuk anak) | `/pricing/parent` | Value proposition untuk anak |

### 2.3 Tabel Harga per Segmen × Durasi

| Durasi | `global` (IDR) | `student` (IDR) | `parent` (IDR) |
|--------|----------------|-----------------|----------------|
| **Bulanan** | 150.000 | 25.000 | 89.000 |
| **3 Bulan** | 400.000 | 65.000 | 239.000 |
| **6 Bulan** | 700.000 | 110.000 | 399.000 |
| **Tahunan** | 1.200.000 | 180.000 | 699.000 |

> 💡 **Harga disimpan di tabel `pricing_plans` di DB**, bukan hardcode. Admin bisa ubah harga kapan saja dari dashboard tanpa deploy.

### 2.4 Tiga Landing Page Terpisah

Setiap landing page punya tone dan copywriting berbeda:

```
/pricing/global   → Bahasa Inggris, emphasize quality & rarity
                    "Learn chemistry like it's a cinematic experience"
                    Testimonial internasional, price in USD equivalent

/pricing/student  → Bahasa Indonesia friendly, emphasize affordability
                    "Belajar kimia yang bikin WOW, harga segelas boba"
                    Cocok untuk SMA, santai, relatable

/pricing/parent   → Bahasa Indonesia formal, emphasize outcome untuk anak
                    "Investasi terbaik untuk semangat belajar anakmu"
                    Emphasize metode, keamanan, nilai edukasi
```

Ketiga halaman ini mengarah ke **Xendit payment page yang sama**, hanya dengan `plan_id` yang berbeda.

---

## 3. Subscription System

### 3.1 Lifecycle Subscription

```
[1] User pilih plan di landing page
        │
        ▼
[2] POST /api/checkout → BE validasi → buat Xendit Invoice
    (simpan pending record di subscriptions)
        │
        ▼
[3] Redirect → Xendit Payment Page
        │
    ┌───┤ Xendit Callback
    │   │
    │   ▼ PAID
    │ [4a] POST /xendit/webhook (HMAC verified)
    │      → UPDATE subscriptions SET status='active', expires_at = now() + durasi
    │      → UPDATE users SET is_active=TRUE
    │      → Kirim welcome email (Resend)
    │
    │   ▼ EXPIRED / GAGAL
    │ [4b] UPDATE subscriptions SET status='expired'
    │      → Kirim email retry
    │
    └───────────
        │
        ▼
[5] User login → GET session
        │
[6] Middleware cek: user.is_active + subscription.expires_at > now()
        │
    ✅ Valid → Akses konten
    ❌ Expired → Redirect halaman renewal
```

### 3.2 Multi-Product Subscription

Satu user bisa subscribe ke banyak produk. Contoh:

```
User ID: abc-123
  └─ Subscription: Atomic (expires 2027-02-21)
  └─ Subscription: Energi  (expires 2026-08-21)  ← produk belum ada, tapi record bisa disiapkan
```

Di frontend, setelah login, BE mengirimkan:
```json
{
  "user": { "id": "abc-123", "email": "..." },
  "subscriptions": {
    "atomic": { "active": true, "expires": "2027-02-21" },
    "energi": { "active": false }
  }
}
```

Frontend masing-masing produk hanya cek: `subscriptions["atomic"].active`.

---

## 4. Session Security & Anti-Sharing

### 4.1 Token Architecture

```
Access Token (JWT):
  - Payload: { sub: user_id, email, product: "atomic", type: "subscriber", exp: +1jam, iat }
  - Disimpan: httpOnly cookie
  - Lifetime: 1 jam

Refresh Token:
  - Format: opaque random string (tidak JWT) → disimpan di DB sebagai hash bcrypt
  - Payload di DB: user_id, device_fingerprint, ip, user_agent, expires_at (30 hari)
  - Disimpan: httpOnly cookie (secure, SameSite=Strict)
  - Lifetime: 30 hari
```

### 4.2 Single Active Session Rule

```
Login request masuk → BE:
  1. Verifikasi kredensial (password bcrypt)
  2. Query: SELECT * FROM sessions WHERE user_id = ? AND is_active = TRUE
  3. Jika ada session aktif:
     → UPDATE sessions SET is_active=FALSE, revoked_at=now(), revoke_reason='new_login'
     → INSERT anomaly_logs (user_id, event='session_displaced', old_ip, old_device, new_ip, new_device)
  4. INSERT sessions baru (device_fp, ip, user_agent, refresh_token_hash, expires_at)
  5. Return JWT access token + set refresh token cookie
```

**Untuk guest:** Maksimal 2x login per email per guest code. Counter di `guest_logins.login_count`. Satu guest code bisa dipakai banyak orang — masing-masing dibatasi per email.

### 4.3 Device Fingerprint

Saat login, frontend mengirimkan:

```typescript
interface DeviceInfo {
  userAgent: string;          // browser + OS
  screenResolution: string;   // "1920x1080"
  timezone: string;           // "Asia/Jakarta"
  language: string;           // "id-ID"
  platform: string;           // "MacIntel"
  // Tidak pakai canvas fingerprint (privacy concern)
}
```

BE menghasilkan `device_fingerprint = sha256(userAgent + screenResolution + timezone + platform)`.

Ini disimpan per session. Bukan untuk memblokir, tapi untuk **logging dan anomaly detection**.

### 4.4 IP Logging

Setiap request yang butuh auth, middleware mencatat:
```
access_logs: user_id, endpoint, ip, timestamp, response_code
```

IP disimpan juga di `sessions.ip_at_login` untuk referensi.

---

## 5. Algoritma Dugaan Akun Dibagi (Multi-User Detection)

### 5.1 Score-Based Anomaly System

Setiap akun memiliki `anomaly_score` yang dihitung dari events berikut:

| Event | Poin | Deskripsi |
|-------|------|-----------|
| Session displaced (login baru mendorong logout session lama) | +5 | Tanda paling kuat berbagi akun |
| IP berubah dalam <1 jam setelah login | +8 | Dua lokasi berbeda, sangat cepat |
| Negara berbeda dalam 24 jam | +15 | Mustahil traveling, kemungkinan berbagi |
| Device fingerprint baru (bukan yang biasa dipakai) | +3 | Bisa ganti device, tapi harus dicermati |
| Login jam yang sangat berbeda dari pola biasa | +2 | Pola perilaku berbeda |
| >3 session displaced dalam 7 hari | +20 | Jelas berbagi |

```
Threshold Actions:
  score < 10  → Normal, tidak ada tindakan
  score 10-24 → Warning email ke user "Kami mendeteksi aktivitas tidak biasa"
  score 25-49 → Temporary lock 24 jam + notifikasi
  score ≥ 50  → Akun diblokir, butuh verifikasi manual admin
```

Anomaly score di-**decay** secara otomatis: -5 poin per 7 hari tanpa event mencurigakan.

### 5.2 Admin Dashboard — Multi-User Flags

Di dashboard admin, ada tabel "Akun Mencurigakan" yang menampilkan:
- Nama/email user
- Anomaly score saat ini
- List events terakhir (session displaced, IP changes, dll)
- Tombol: `Biarkan` | `Kirim Warning` | `Lock Akun` | `Revoke Subscription`

---

## 6. Database Schema

### 6.1 Core Tables

```sql
-- ─── PRODUCTS ─────────────────────────────────────────────────────────
CREATE TABLE products (
  id          TEXT PRIMARY KEY,          -- 'atomic', 'energi', 'biologi'
  name        TEXT NOT NULL,             -- 'Atomic — Interactive 3D Periodic Table'
  description TEXT,
  is_active   BOOLEAN DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- ─── PRICING PLANS ────────────────────────────────────────────────────
CREATE TABLE pricing_plans (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id   TEXT REFERENCES products(id),
  segment      TEXT NOT NULL,            -- 'global' | 'student' | 'parent'
  duration     TEXT NOT NULL,            -- 'monthly' | '3month' | '6month' | 'yearly'
  duration_days INT NOT NULL,            -- 30 | 90 | 180 | 365
  price_idr    INTEGER NOT NULL,         -- harga dalam rupiah
  label        TEXT,                     -- "Tahunan — Hemat 40%" (untuk UI)
  is_active    BOOLEAN DEFAULT TRUE,
  created_at   TIMESTAMPTZ DEFAULT now()
);

-- ─── USERS ─────────────────────────────────────────────────────────────
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         TEXT UNIQUE NOT NULL,
  name          TEXT,
  password_hash TEXT NOT NULL,           -- bcrypt, saltRounds=12
  role          TEXT DEFAULT 'subscriber', -- 'subscriber' | 'admin'
  is_active     BOOLEAN DEFAULT FALSE,
  anomaly_score INTEGER DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- ─── GUEST CODES ───────────────────────────────────────────────────────
-- Admin generate 1 code → bisa dishare ke banyak orang
CREATE TABLE guest_codes (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code                  TEXT UNIQUE NOT NULL,    -- short code, e.g. "ATOM-A7X2"
  product_id            TEXT REFERENCES products(id),
  label                 TEXT,                    -- label internal admin ("Promo Februari")
  max_logins_per_email  INTEGER DEFAULT 2,       -- max login per email per code
  expires_at            TIMESTAMPTZ NOT NULL,    -- adjustable: 1d / 2d / 7d
  is_active             BOOLEAN DEFAULT TRUE,
  generated_by          UUID REFERENCES users(id),  -- admin yang generate
  created_at            TIMESTAMPTZ DEFAULT now()
);

-- ─── GUEST LOGINS ──────────────────────────────────────────────────────
-- Track per-email usage per guest code
CREATE TABLE guest_logins (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_code_id   UUID REFERENCES guest_codes(id) ON DELETE CASCADE,
  email           TEXT NOT NULL,
  login_count     INTEGER DEFAULT 1,
  last_login_at   TIMESTAMPTZ DEFAULT now(),
  created_at      TIMESTAMPTZ DEFAULT now(),
  UNIQUE(guest_code_id, email)   -- 1 record per email per code
);

-- ─── SUBSCRIPTIONS ─────────────────────────────────────────────────────
CREATE TABLE subscriptions (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID REFERENCES users(id) ON DELETE CASCADE,
  product_id          TEXT REFERENCES products(id),
  plan_id             UUID REFERENCES pricing_plans(id),
  segment             TEXT NOT NULL,     -- 'global' | 'student' | 'parent'
  xendit_invoice_id   TEXT UNIQUE,
  xendit_payment_id   TEXT,
  amount_paid_idr     INTEGER,
  status              TEXT DEFAULT 'pending',  -- 'pending' | 'active' | 'expired' | 'cancelled'
  paid_at             TIMESTAMPTZ,
  starts_at           TIMESTAMPTZ,
  expires_at          TIMESTAMPTZ NOT NULL,
  created_at          TIMESTAMPTZ DEFAULT now()
);

-- ─── SESSIONS ──────────────────────────────────────────────────────────
CREATE TABLE sessions (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id              UUID REFERENCES users(id) ON DELETE CASCADE,  -- NULL jika guest
  guest_code_id        UUID REFERENCES guest_codes(id),              -- NULL jika user biasa
  guest_email          TEXT,                                          -- email guest (tracking)
  refresh_token_hash   TEXT NOT NULL,
  device_fingerprint   TEXT,
  ip_at_login          INET,
  user_agent           TEXT,
  country_code         TEXT,             -- dari IP geolocation
  is_active            BOOLEAN DEFAULT TRUE,
  revoked_at           TIMESTAMPTZ,
  revoke_reason        TEXT,             -- 'logout' | 'new_login' | 'admin' | 'expired'
  expires_at           TIMESTAMPTZ NOT NULL,
  created_at           TIMESTAMPTZ DEFAULT now()
);

-- ─── ANOMALY LOGS ──────────────────────────────────────────────────────
CREATE TABLE anomaly_logs (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID REFERENCES users(id) ON DELETE CASCADE,
  event         TEXT NOT NULL,           -- 'session_displaced' | 'country_change' | ...
  score_delta   INTEGER NOT NULL,        -- poin yang ditambahkan
  detail        JSONB,                   -- data tambahan (old_ip, new_ip, dll)
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- ─── ACCESS LOGS ───────────────────────────────────────────────────────
CREATE TABLE access_logs (
  id          BIGSERIAL PRIMARY KEY,
  user_id     UUID,
  session_id  UUID,
  ip          INET,
  endpoint    TEXT,
  method      TEXT,
  status_code INTEGER,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- ─── INDEXES ───────────────────────────────────────────────────────────
CREATE INDEX idx_subscriptions_user_product ON subscriptions(user_id, product_id);
CREATE INDEX idx_subscriptions_expires ON subscriptions(expires_at);
CREATE INDEX idx_sessions_user ON sessions(user_id) WHERE is_active = TRUE;
CREATE INDEX idx_sessions_token ON sessions(refresh_token_hash);
CREATE INDEX idx_anomaly_user ON anomaly_logs(user_id, created_at DESC);
CREATE INDEX idx_access_logs_user ON access_logs(user_id, created_at DESC);
CREATE INDEX idx_guest_codes_code ON guest_codes(code);
CREATE INDEX idx_guest_logins_code_email ON guest_logins(guest_code_id, email);
```

---

## 7. API Routes

### 7.1 Auth Routes

```
POST /api/auth/register           → Daftar akun baru
POST /api/auth/login              → Login → set httpOnly cookies (AT + RT)
POST /api/auth/refresh            → AT expired → tukar RT → AT baru
POST /api/auth/logout             → Revoke RT → clear cookies
GET  /api/auth/me                 → Return user info + subscriptions aktif

POST /api/auth/guest-login        → Login sebagai guest via code + email
     Body: { code: string, email: string }
```

### 7.2 Subscription & Checkout Routes

```
GET  /api/plans?product=atomic&segment=student
     → List semua pricing plans untuk product + segment

POST /api/checkout
     Body: { plan_id, user_id? }  → Buat Xendit Invoice → return checkout_url

POST /api/xendit/webhook          → Terima Xendit callback (HMAC verified)
GET  /api/subscriptions/me        → Semua subscription user yang sedang login
```

### 7.3 Admin Routes

```
GET  /admin/users                 → List semua users + anomaly_score
GET  /admin/users/:id             → Detail user + session history + anomaly logs
GET  /admin/subscriptions         → Semua subscription (filter by product, status, segment)
GET  /admin/anomalies             → Daftar akun dengan anomaly_score > threshold

POST /admin/guest-codes           → Generate guest code baru
     Body: { product_id, label, max_logins_per_email?, expires_hours? }
GET  /admin/guest-codes           → List semua guest codes + usage stats
GET  /admin/guest-codes/:id       → Detail code + list email yang sudah pakai
DELETE /admin/guest-codes/:id     → Revoke guest code (matikan)

POST /admin/users/:id/lock        → Lock akun
POST /admin/users/:id/unlock      → Unlock akun
POST /admin/users/:id/warn        → Kirim email warning

GET  /admin/revenue               → Dashboard revenue (per produk, per segmen, per periode)
GET  /admin/products              → List semua produk
POST /admin/products              → Tambah produk baru
POST /admin/pricing-plans         → Tambah/update pricing plan (ubah harga tanpa deploy)
```

### 7.4 Content Gate

```
GET /api/access-check?product=atomic
     → 200 OK jika user punya subscription aktif untuk produk ini
     → 401/403 jika tidak
     → Response: { granted: true, expires_at: "...", product: "atomic" }
```

Frontend atomic: sebelum render konten premium, call endpoint ini.

---

## 8. Deployment Architecture

### 8.1 Separation of Concerns

```
┌─────────────────────────────────────────────────────────────┐
│                     sains.id (domain utama)                  │
├──────────────────────┬──────────────────────────────────────┤
│   FRONTEND (Static)  │        BACKEND (Go Binary)            │
│   Vercel / Netlify   │           Railway                     │
│                      │                                        │
│  sains.id/atomic     │  api.sains.id  → Go (Gin)            │
│  sains.id/energi     │                                        │
│  sains.id/pricing/*  │  /admin/*  → Templ + HTMX (embedded) │
│                      │                                        │
│                      │         DATABASE                       │
│                      │        Supabase Postgres              │
│                      │                  +                     │
│                      │         EMAIL: Resend (Go SDK)        │
│                      │         PAYMENT: Xendit (REST API)    │
└──────────────────────┴────────────────────────────────────── ┘
```

> **Admin dashboard** bukan project terpisah. Ini route HTML yang di-serve langsung dari Go binary menggunakan Templ + HTMX + Alpine.js. Static assets (CSS, JS) di-embed via `go:embed`.

### 8.2 Environment Variables (Backend)

```bash
# Database
DATABASE_URL=postgresql://...supabase...

# Auth
JWT_SECRET=<random 64 char>
JWT_EXPIRY=1h
REFRESH_TOKEN_EXPIRY_DAYS=30

# Xendit (REST API langsung, tanpa SDK)
XENDIT_API_KEY=xk_...
XENDIT_WEBHOOK_TOKEN=...   # untuk verifikasi callback
XENDIT_BASE_URL=https://api.xendit.co

# Resend (Email — Go SDK)
RESEND_API_KEY=re_...
FROM_EMAIL=noreply@sains.id

# Frontend Origins
CORS_ORIGINS=https://sains.id,https://atomic.sains.id

# Admin
ADMIN_SECRET_KEY=...       # untuk seed admin pertama

# Server
PORT=8080
GIN_MODE=release           # 'debug' untuk development
```

### 8.3 Frontend Config (per Produk)

```typescript
// atomic/src/config.ts
export const config = {
  product: 'atomic',
  apiBase: 'https://api.sains.id',
  pricingSegments: ['student', 'parent', 'global'] as const,
};
```

---

## 9. Tech Stack Backend

| Komponen | Pilihan | Alasan |
|----------|---------|--------|
| Language | **Go 1.23+** | Compiled, fast, single binary deploy, concurrency built-in |
| Framework | **Gin** | HTTP framework paling populer di Go, middleware ecosystem mature |
| DB Driver | **pgx** (jackc/pgx) | Driver Postgres tercepat di Go, pure Go, connection pooling built-in |
| Query Layer | **sqlc** | Tulis SQL → auto-generate Go code. Zero reflection, type-safe, compile-time check |
| Migration | **golang-migrate** | Standard, CLI + library, support Postgres |
| Auth JWT | **golang-jwt/jwt** | Battle-tested, standard Go JWT library |
| Password Hash | **golang.org/x/crypto/bcrypt** | Standard library, no third-party dependency |
| Validation | **go-playground/validator** | Struct tag validation, well-maintained |
| Email | **Resend** (Go SDK) | DX terbaik, reliable deliverability, official Go SDK tersedia |
| Payment | **Xendit** (REST API langsung) | QRIS, VA BCA, OVO, GoPay, CC — no official Go SDK, pakai `net/http` langsung |
| IP Geolocation | **ip-api.com** (free tier) atau **MaxMind GeoIP2** | Untuk anomaly detection negara |
| Logging | **zerolog** atau **slog** (stdlib) | JSON structured logs, zero-allocation (zerolog) atau built-in (slog) |
| Config | **env** / **viper** | Environment-based configuration |
| Admin Dashboard | **Templ** + **HTMX** + **Alpine.js** | Server-rendered HTML, embedded di Go binary, no separate build |
| Charting | **Chart.js** (CDN) | Revenue chart, subscriber graph — loaded di admin pages |
| Hosting BE | **Railway** | Mudah, auto-deploy dari Git, support Go, 1 binary |
| Hosting DB | **Supabase** | Postgres managed, free tier 500MB |

### 9.1 Kenapa Go + sqlc (bukan ORM)

DB schema di doc ini sudah ditulis raw SQL (7 tabel + indexes). Dengan **sqlc**:
- Tulis query SQL biasa di `db/queries/*.sql`
- `sqlc generate` → auto-generate Go struct + function
- **Zero runtime reflection** (beda dengan GORM)
- Query complex (JOIN, aggregasi revenue, anomaly scoring) lebih natural ditulis SQL
- Compile-time type check — kalau query salah, build gagal

### 9.2 Kenapa Templ + HTMX (bukan SPA terpisah)

Admin dashboard bukan project terpisah — ini **route HTML** di Go server yang sama.

```
Go Binary
├── /api/*       → JSON responses (untuk Atomic frontend)
└── /admin/*     → HTML responses (Templ + HTMX)
```

- **Templ**: compiled Go templates, type-safe, IDE autocomplete
- **HTMX**: bikin server-rendered HTML terasa kayak SPA (ajax, swap, polling) tanpa nulis JS
- **Alpine.js**: micro-interactivity (dropdown, modal, toggle)
- **Chart.js**: revenue charts, subscriber graphs
- Semua static assets di-embed ke binary via `go:embed` → deploy = 1 file

---

## 10. Admin Dashboard

> Status: **Planned** — dibuat setelah backend siap.
> Tech: **Templ + HTMX + Alpine.js + Chart.js** — embedded di Go binary, route `/admin/*`.
> Auth: Session cookie admin, middleware `requireAdmin()`.
> UI Base: **Tabler** (open-source admin template) — agar cepat dan konsisten.

### 10.1 Halaman Utama Dashboard

```
┌─────── Revenue Overview ────────────────────────────────┐
│  Atomic:  Rp 12.400.000 bulan ini  (+23% vs bulan lalu) │
│  Energi:  -  (belum ada produk)                          │
│                                                          │
│  [Per Segmen]  student: 60% · parent: 30% · global: 10% │
│  [Per Durasi]  bulanan: 15% · tahunan: 55% · sisanya...  │
│                                                          │
│  📊 Chart.js line chart — revenue 30 hari terakhir       │
└──────────────────────────────────────────────────────────┘

┌──── Subscriptions Aktif ────┐  ┌──── Anomalies ──────────┐
│  Atomic: 147 aktif           │  │  5 akun flagged          │
│  Baru hari ini: 12           │  │  2 locked                │
│  Expired minggu ini: 3       │  │  [Lihat semua →]         │
└──────────────────────────────┘  └─────────────────────────┘

┌──── Guest Codes ───────────────────────────────────────┐
│  Aktif: 8 codes  ·  Expired: 23 codes                  │
│  Total guest logins: 142  ·  Unique emails: 89         │
│  [+ Generate Guest Code]                                │
└──────────────────────────────────────────────────────────┘
```

### 10.2 Fitur Admin Dashboard

| Fitur | Deskripsi | Interaksi |
|-------|-----------|----------|
| Revenue overview | Total per produk, per segmen, per durasi | Chart.js line/bar chart |
| Grafik subscriber | Daily/weekly new subscribers | Chart.js, HTMX auto-refresh |
| User management | Search, filter, detail per user | HTMX search, Alpine.js modal |
| Anomaly center | Flag, lock, kirim warning | HTMX inline actions |
| Guest code management | Generate, list, revoke, view usage per email | HTMX form submit + swap |
| Pricing management | Ubah harga plan tanpa deploy | Alpine.js inline edit |
| Product management | Tambah produk baru | HTMX form |
| Subscription lookup | Cari subscription by email/ID | HTMX search |

### 10.3 Arsitektur Admin Dashboard

```
templates/
├── layout.templ              ← base layout (sidebar + header, pakai Tabler CSS)
├── components/
│   ├── stat_card.templ       ← reusable stat card
│   ├── data_table.templ      ← reusable table with pagination
│   └── chart.templ           ← Chart.js wrapper
├── pages/
│   ├── dashboard.templ       ← /admin/
│   ├── users.templ           ← /admin/users
│   ├── user_detail.templ     ← /admin/users/:id
│   ├── subscriptions.templ   ← /admin/subscriptions
│   ├── anomalies.templ       ← /admin/anomalies
│   ├── guest_codes.templ     ← /admin/guest-codes
│   ├── guest_code_detail.templ ← /admin/guest-codes/:id (list email users)
│   ├── pricing.templ         ← /admin/pricing
│   ├── products.templ        ← /admin/products
│   └── revenue.templ         ← /admin/revenue
└── partials/
    ├── user_row.templ        ← HTMX partial (swap per baris)
    └── guest_login_row.templ ← HTMX partial (per email usage)

static/
├── css/
│   ├── tabler.min.css        ← Tabler admin template (base styling)
│   └── admin-custom.css      ← override / custom styles
├── js/
│   ├── htmx.min.js           ← HTMX (atau CDN)
│   ├── alpine.min.js         ← Alpine.js (atau CDN)
│   └── chart.min.js          ← Chart.js (atau CDN)
└── img/                      ← logo, icons
```

> Semua file `static/` dan compiled `templates/` di-embed ke Go binary via `go:embed`. Deploy = upload 1 file binary.

---

## 11. Prioritas Implementasi

```
Phase BE-1: Foundation
  → Setup Go project (Gin + pgx + sqlc)
  → Connect Supabase Postgres
  → Schema DB + migrations (golang-migrate)
  → sqlc: tulis queries + generate Go code
  → Auth: register, login, refresh, logout, me
  → JWT (golang-jwt) + httpOnly cookie + single session rule
  → Basic middleware: auth guard, CORS, rate limit

Phase BE-2: Subscription
  → Pricing plans CRUD
  → Checkout + Xendit REST API integration
  → Xendit webhook handler (HMAC verify)
  → Subscription access check endpoint
  → Email: welcome, renewal reminder (Resend Go SDK)

Phase BE-3: Guest + Security
  → Guest code generate + guest login flow
  → Device fingerprint logging
  → Anomaly scoring engine
  → IP geolocation logging
  → Admin API: anomaly + user management

Phase BE-4: Admin Dashboard
  → Setup Templ + HTMX + Alpine.js + Tabler CSS
  → Admin layout + auth middleware (requireAdmin)
  → Dashboard halaman utama (stats + Chart.js)
  → User management pages
  → Revenue analytics pages
  → Guest code management UI
  → Pricing management UI
  → go:embed static assets + templates

Phase BE-5: Hardening
  → Rate limiting per endpoint (Gin middleware)
  → CORS lock down (production origins only)
  → Audit logs
  → Load testing
  → Monitoring (Sentry / Grafana)
  → Docker build + deploy optimization
```

---

## 12. Security Checklist

| Kategori | Check | Tool/Cara | Status |
|----------|-------|-----------|--------|
| **Auth** | JWT di httpOnly cookie, bukan localStorage | `golang-jwt/jwt` + `gin.SetCookie()` | 📋 Planned |
| **Auth** | RT disimpan sebagai hash bcrypt, bukan plaintext | `golang.org/x/crypto/bcrypt` | 📋 |
| **Auth** | Session displacement saat login baru | sqlc query: revoke old session | 📋 |
| **Payment** | Xendit webhook verify `X-Callback-Token` header | `crypto/hmac` + `crypto/sha256` | 📋 |
| **Payment** | Idempotency: cek `xendit_payment_id` duplikat | sqlc unique constraint check | 📋 |
| **Rate Limit** | `/api/auth/login` max 5/menit per IP | Gin rate limit middleware | 📋 |
| **Rate Limit** | `/api/auth/register` max 3/jam per IP | Gin rate limit middleware | 📋 |
| **CORS** | Origin whitelist: hanya domain sains.id | `gin-contrib/cors` | 📋 |
| **Input** | Semua input divalidasi via struct tags | `go-playground/validator` | 📋 |
| **SQL** | sqlc generated code, tidak ada raw query unsanitized | `sqlc` compile-time check | 📋 |
| **Secrets** | Semua secret di env var, tidak di git | `.env` + `.gitignore` | 📋 |
| **Anomaly** | Auto-lock jika score ≥ 50 | Business logic di Go service layer | 📋 |
| **Cookie** | `Secure` + `SameSite=Strict` untuk production | `gin.SetCookie()` options | 📋 |

---

## 13. Keputusan Arsitektur — Resolved ✅

Semua open questions sudah diputuskan per 2026-02-21.

| # | Pertanyaan | Keputusan | Alasan |
|---|-----------|-----------|--------|
| 1 | Email verifikasi saat register? | ❌ **Tidak** — langsung bayar | Friction minimal. Email welcome dari webhook = verifikasi natural. Format email divalidasi saja. |
| 2 | Ganti device → re-login atau OTP? | ✅ **Re-login biasa** | Single session rule sudah handle otomatis. OTP hanya untuk **Lupa Password** (via Resend, gratis). |
| 3 | Admin dashboard domain? | `sains.id/admin` | Lebih sederhana, satu domain |
| 4 | Currency USD untuk segmen global? | ✅ **Ya — IDR & USD** | Mengikuti bilingual ID/EN. Segmen `global` = USD. Segmen `student` & `parent` = IDR. Xendit support multi-currency. |
| 5 | Free tier? | ❌ **Tidak ada** | Hanya `guest` (2x login, 24-48 jam). Tidak ada akses gratis permanen. |
| 6 | Refund policy? | ⏳ **Belum diputuskan** | Prinsip: boleh refund, tapi policy spesifik belum ditentukan. Dicatat sebagai backlog. |
| 7 | Renewal otomatis? | ❌ **Tidak** — manual saja | Menghindari kompleksitas recurring billing & dispute refund. User renew sendiri sebelum expired. |

### Update dari keputusan di atas

**Guest user** → model **guest code**: admin generate 1 kode, dishare ke banyak orang. Per email: max **2x login**. Durasi code **adjustable** (1 hari, 2 hari, 1 minggu). Tracking per email via tabel `guest_logins`.

**Currency:**
```
segment=global   → USD (Xendit USD invoice)
segment=student  → IDR
segment=parent   → IDR
```

**Lupa Password flow** (pakai Resend, free):
```
[1] User klik "Lupa Password" → masukkan email
[2] POST /api/auth/forgot-password
    → Generate OTP 6 digit, expired 10 menit
    → Kirim via Resend ke email user
[3] User masukkan OTP → POST /api/auth/verify-otp
    → Jika valid → boleh set password baru
[4] POST /api/auth/reset-password
    → Hash password baru → UPDATE users SET password_hash
    → Revoke semua session aktif user (paksa login ulang)
```

**Auth Flow lengkap (no email verification):**
```
Register:
  POST /api/auth/register
    body: { email, password, name }
    → Validasi format email
    → Hash password (bcrypt, rounds=12)
    → INSERT users (is_active=FALSE)  ← belum aktif sampai bayar
    → Return: { user_id, checkout_url }  ← langsung ke Xendit

Setelah bayar (Xendit webhook):
    → UPDATE users SET is_active=TRUE
    → INSERT subscriptions (...)
    → Kirim welcome email via Resend (berisi link login)

Login:
  POST /api/auth/login
    → Cek is_active=TRUE + subscription.expires_at > now()
    → Session displacement jika ada session aktif
    → Set httpOnly cookie: AT (1 jam) + RT (30 hari)
```

---

## 14. Pricing (Final)

### IDR — Segmen Student & Parent

| Durasi | `student` | `parent` |
|--------|-----------|----------|
| Bulanan | Rp 25.000 | Rp 89.000 |
| 3 Bulan | Rp 65.000 | Rp 239.000 |
| 6 Bulan | Rp 110.000 | Rp 399.000 |
| Tahunan | Rp 180.000 | Rp 699.000 |

### USD — Segmen Global

| Durasi | `global` |
|--------|----------|
| Monthly | $9.99 |
| 3 Month | $26.99 |
| 6 Month | $44.99 |
| Yearly | $79.99 |

> Harga USD di atas adalah contoh. Disesuaikan dengan kurs dan market research sebelum launch.

### Guest Code System

| Parameter | Value |
|-----------|-------|
| Model | **1 code → banyak orang** (viral-friendly) |
| Cara dapat | Admin generate **guest code** via dashboard |
| Max login per email | **2x** per code |
| Durasi code | **Adjustable**: 1 hari, 2 hari, atau 1 minggu |
| Session per login | 24 jam |
| Cost | Gratis (tidak bayar) |
| Data yang dikumpulkan | Email (wajib, untuk tracking + batas login) |
| Admin visibility | List semua email yang sudah pakai code + jumlah login |

---

## 15. Renewal & Expiry

**Tidak ada auto-renewal.** User renew sendiri.

```
Flow ketika subscription expired:
  → Middleware /api/access-check return 403 + { reason: 'subscription_expired' }
  → Frontend redirect ke halaman renewal atau pricing
  → User beli plan baru → flow normal (checkout → Xendit → webhook)
  → BE INSERT subscription baru dengan starts_at = now() (bukan lanjut dari expired)

Email reminder (via Resend, otomatis):
  → 7 hari sebelum expired: "Langgananmu akan berakhir dalam 7 hari"
  → 1 hari sebelum expired: "Langgananmu berakhir besok"
  → Hari H expired: "Langgananmu sudah berakhir — renew sekarang"
```

---

## 16. Quota & Capacity System

> **Prinsip utama: yang bayar harus dijamin servernya nggak down.**
>
> Karena awalnya pakai VPS murah (~100rb/bulan), kita perlu sistem quota yang membatasi jumlah user aktif sesuai kapasitas server. Quota bisa dinaikkan admin seiring upgrade server.

### 16.1 Filosofi Quota

```
┌─────────────────────────────────────────────────────┐
│                   SERVER CAPACITY                    │
│                                                     │
│  ┌─────────────────────────────────────┐            │
│  │    SUBSCRIBER QUOTA (prioritas)     │ ← Dijamin  │
│  │    max: 200 (adjustable)            │            │
│  └─────────────────────────────────────┘            │
│                                                     │
│  ┌─────────────────────────────────────┐            │
│  │    GUEST QUOTA (batasan ketat)      │ ← Bisa     │
│  │    max: 50 session aktif            │   ditolak  │
│  └─────────────────────────────────────┘            │
│                                                     │
│  Subscriber SELALU bisa login (sudah bayar)         │
│  Guest dibatasi kalau server mulai penuh            │
└─────────────────────────────────────────────────────┘
```

**Prioritas akses:**
1. 🥇 **Subscriber** — selalu bisa login. Kalau subscriber quota penuh, register baru yang diblokir (bukan login existing).
2. 🥈 **Guest** — dibatasi ketat. Kalau guest quota penuh → "Kuota trial penuh, silakan berlangganan langsung."
3. ⚠️ **Register baru** — diblokir kalau mendekati subscriber quota max. Pesan: "Kapasitas penuh sementara, kami segera menambah server."

### 16.2 Quota Config (Database)

Tambahan di schema — tabel `system_config` untuk menyimpan setting yang bisa diubah admin tanpa deploy:

```sql
-- ─── SYSTEM CONFIG ────────────────────────────────────────────────────
-- Key-value store untuk konfigurasi dinamis (quota, limits, dll)
CREATE TABLE system_config (
  key         TEXT PRIMARY KEY,
  value       TEXT NOT NULL,
  description TEXT,
  updated_at  TIMESTAMPTZ DEFAULT now(),
  updated_by  UUID REFERENCES users(id)
);

-- ─── SEED DATA ────────────────────────────────────────────────────────
INSERT INTO system_config (key, value, description) VALUES
  ('max_subscribers',       '200',  'Maks total subscriber aktif'),
  ('max_active_guests',     '50',   'Maks guest session aktif bersamaan'),
  ('quota_warning_pct',     '80',   'Notifikasi admin di persentase ini'),
  ('guest_priority_mode',   'off',  'on = guest diblokir total saat > 90% subscriber quota');
```

### 16.3 Middleware Quota Check

```
Register baru masuk:
  → current_subscribers = COUNT(*) FROM subscriptions 
    WHERE status='active' AND expires_at > now()
  → max = system_config['max_subscribers']
  
  Jika current >= max:
    → 503 { error: "capacity_full", message: "Kapasitas penuh sementara" }
    → Kirim notifikasi ke admin (email/dashboard alert)
    
  Jika current >= max * warning_pct:
    → Tetap izinkan register
    → Tapi kirim warning ke admin: "Subscriber 160/200 (80%)"

Guest Login:
  → current_guests = COUNT(*) FROM sessions 
    WHERE guest_code_id IS NOT NULL AND is_active = TRUE
  → max_guests = system_config['max_active_guests']
  
  Jika current_guests >= max_guests:
    → 503 { error: "guest_quota_full", 
            message: "Kuota trial penuh. Silakan berlangganan untuk akses langsung." }

Login subscriber (existing):
  → SELALU diizinkan — dia sudah bayar, harus bisa akses
  → Tidak ada quota check untuk login subscriber yang sudah terdaftar
```

### 16.4 Admin API — Quota

```
GET  /admin/quota             → Status quota saat ini:
                                { subscribers: { current: 156, max: 200, pct: 78 },
                                  guests: { current: 32, max: 50, pct: 64 } }

PUT  /admin/system-config/:key → Update config (misal max_subscribers = 300)
     Body: { value: "300" }

GET  /admin/system-config     → List semua config key-value
```

### 16.5 Admin Dashboard — Quota Widget

```
┌──── Server Capacity ──────────────────────────────────┐
│                                                        │
│  Subscribers:  ████████████████░░░░  156/200 (78%)     │
│  Guest Active: ████████████░░░░░░░░   32/50  (64%)     │
│                                                        │
│  VPS: IDCloudHost 1vCPU/2GB (Rp 100rb/bln)            │
│  [⚙️ Adjust Quota]  [📊 Scaling Guide]                 │
│                                                        │
│  ⚠️ Warning di 80%  ·  🚫 Block di 100%               │
└────────────────────────────────────────────────────────┘
```

### 16.6 Notifikasi Otomatis ke Admin

| Kondisi | Aksi |
|---------|------|
| Subscriber > 80% quota | 📧 Email admin: "Subscriber mendekati batas (160/200)" |
| Subscriber > 95% quota | 📧 Email URGENT: "Capacity hampir habis! Upgrade server atau naikkan quota." |
| Subscriber = 100% quota | 📧 Email CRITICAL: "Register diblokir! Segera upgrade." + log di dashboard |
| Guest > 80% quota | Dashboard warning (tanpa email) |
| Guest = 100% quota | Dashboard alert |

### 16.7 Scaling Tiers — Panduan Kapan Upgrade

| Tier | VPS Spec | Biaya/bln | Max Subscriber | Max Guest | Cocok Untuk |
|------|----------|-----------|----------------|-----------|-------------|
| **Starter** | 1 vCPU, 1GB | ~60rb | 100 | 30 | Soft launch, testing |
| **Basic** | 1 vCPU, 2GB | ~100rb | 200 | 50 | 0-200 subscriber |
| **Growth** | 2 vCPU, 4GB | ~200rb | 500 | 100 | 200-500 subscriber |
| **Scale** | 4 vCPU, 8GB | ~400rb | 2000 | 300 | 500-2000 subscriber |
| **Pro** | Dedicated / Cloud | ~800rb+ | 5000+ | 500+ | 2000+ subscriber |

> 💡 **Rule of thumb:** Revenue dari subscriber harus > 2x biaya server. Kalau sudah 200 subscriber × Rp 25.000 = **Rp 5.000.000/bulan** → VPS 100rb itu cuma 2% dari revenue. Upgrade kapan aja.

### 16.8 Frontend Handling

Saat quota penuh, frontend menampilkan pesan yang berbeda:

```
Register diblokir (subscriber penuh):
  → "Maaf, kapasitas kami sedang penuh. 
     Kami sedang menambah server. Coba lagi dalam 1-2 hari.
     [🔔 Notifikasi saya saat tersedia]"

Guest diblokir (guest penuh):
  → "Kuota trial sedang penuh.
     Tapi kabar baiknya: dengan berlangganan, kamu langsung dapat akses tanpa antri!
     [💳 Berlangganan Sekarang]"
     
  → Ini jadi UPSELL moment — guest penuh = push ke subscribe
```
