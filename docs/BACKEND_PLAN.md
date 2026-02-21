# Backend & Subscription Plan — SAINS Platform
**Project:** SAINS Platform (Multi-Product Learning)  
**Version:** 1.0  
**Date:** 2026-02-21  
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
| `guest` | Pengguna coba-coba | Di-generate BE (oleh admin) | 1–2 hari | 3x login | 1 session aktif |
| `subscriber` | Pengguna berbayar | Register + bayar via Xendit | Sesuai subscription | Unlimited | 1 session aktif |
| `admin` | Pengelola platform | Seeded langsung di DB | Selamanya | Unlimited | 2 session aktif |

### 1.2 Guest User — Detail

Guest user bukan daftar sendiri. Admin/operator **men-generate token guest** dari dashboard, lalu membagikan link ke teman/kenalan untuk dicoba.

```
Flow Guest:
1. Admin buka dashboard → klik "Generate Guest"
2. Admin isi: nama/label (internal), email/HP calon (opsional, untuk rekap)
3. BE buat record `guest_tokens` + link: https://sains.id/atomic?guest=<token>
4. Admin bagikan link ke calon user
5. Guest buka link → masukkan email atau no HP (untuk rekap saja, tidak diverifikasi)
6. BE validasi token guest: belum expired, login belum >3x
7. Guest dapat session 24 jam
8. Setelah 3x login ATAU sudah >48 jam sejak generate → token mati otomatis
```

**Catatan penting:** Guest tidak bisa self-register. Hanya admin yang bisa generate guest token.

### 1.3 Session Rules — Anti Multi-Account Sharing

**Aturan utama: 1 akun = 1 session aktif (subscriber). 3 login guest = habis.**

```
Login baru masuk:
  → Cek apakah ada session aktif untuk user ini
  → JA: revoke session lama + catat anomaly log
  → Buat session baru → simpan device fingerprint + IP
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

**Untuk guest:** Maksimal 3x login (bukan 3 session bersamaan, tapi total lifetime). Counter di `guest_tokens.login_count`.

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

-- ─── GUEST TOKENS ──────────────────────────────────────────────────────
CREATE TABLE guest_tokens (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token         TEXT UNIQUE NOT NULL,    -- random URL-safe token
  product_id    TEXT REFERENCES products(id),
  label         TEXT,                    -- label internal admin ("Budi - teman SMA")
  contact_info  TEXT,                    -- email/HP yang diisi saat akses (opsional)
  login_count   INTEGER DEFAULT 0,
  max_logins    INTEGER DEFAULT 2,
  expires_at    TIMESTAMPTZ NOT NULL,    -- generated_at + 48 jam
  generated_by  UUID REFERENCES users(id),  -- admin yang generate
  created_at    TIMESTAMPTZ DEFAULT now()
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
  guest_token_id       UUID REFERENCES guest_tokens(id),             -- NULL jika user biasa
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
CREATE INDEX idx_guest_tokens_token ON guest_tokens(token);
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

POST /api/auth/guest-login        → Login sebagai guest via token URL
     Body: { token: string, contact_info?: string }
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

POST /admin/guest-tokens          → Generate guest token baru
     Body: { product_id, label, contact_info?, max_logins?, expires_hours? }
GET  /admin/guest-tokens          → List semua guest tokens
DELETE /admin/guest-tokens/:id    → Revoke guest token

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
│   FRONTEND (Static)  │           BACKEND (Server)            │
│   Vercel / Netlify   │        Railway / Render / VPS         │
│                      │                                        │
│  sains.id/atomic     │  api.sains.id  → Node.js (Hono)      │
│  sains.id/energi     │                                        │
│  sains.id/pricing/*  │         DATABASE                       │
│  sains.id/admin      │        Supabase Postgres              │
│                      │                  +                     │
│                      │         EMAIL: Resend                  │
│                      │         PAYMENT: Xendit               │
└──────────────────────┴────────────────────────────────────── ┘
```

### 8.2 Environment Variables (Backend)

```bash
# Database
DATABASE_URL=postgresql://...supabase...

# Auth
JWT_SECRET=<random 64 char>
JWT_EXPIRY=1h
REFRESH_TOKEN_EXPIRY_DAYS=30

# Xendit
XENDIT_API_KEY=xk_...
XENDIT_WEBHOOK_TOKEN=...   # untuk verifikasi callback

# Resend (Email)
RESEND_API_KEY=re_...
FROM_EMAIL=noreply@sains.id

# Frontend Origins
CORS_ORIGINS=https://sains.id,https://atomic.sains.id

# Admin
ADMIN_SECRET_KEY=...       # untuk seed admin pertama
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
| Runtime | **Node.js 22+** | Stable LTS |
| Framework | **Hono** | Ringan, TypeScript-first, Cloudflare-ready |
| Database ORM | **Drizzle ORM** + Postgres | Type-safe, migration terkelola |
| Auth | `jsonwebtoken` + `bcryptjs` | Standard, battle-tested |
| Email | **Resend** | DX terbaik, reliable deliverability |
| Payment | **Xendit** | QRIS, VA BCA, OVO, GoPay, CC — coverage Indonesia |
| IP Geolocation | **ip-api.com** (free tier) atau `maxmind-geoip2` | Untuk anomaly detection negara |
| Logging | **Pino** | JSON structured logs, performa tinggi |
| Validation | **Zod** | Schema validation, compatible Hono |
| Hosting BE | **Railway** | Mudah, auto-deploy dari Git |
| Hosting DB | **Supabase** | Postgres managed, ada realtime jika butuh nanti |

---

## 10. Admin Dashboard

> Status: **Planned** — dibuat setelah backend siap. Frontend admin di `/admin` (protected route).

### 10.1 Halaman Utama Dashboard

```
┌─────── Revenue Overview ────────────────────────────────┐
│  Atomic:  Rp 12.400.000 bulan ini  (+23% vs bulan lalu) │
│  Energi:  -  (belum ada produk)                          │
│                                                          │
│  [Per Segmen]  student: 60% · parent: 30% · global: 10% │
│  [Per Durasi]  bulanan: 15% · tahunan: 55% · sisanya...  │
└──────────────────────────────────────────────────────────┘

┌──── Subscriptions Aktif ────┐  ┌──── Anomalies ──────────┐
│  Atomic: 147 aktif           │  │  5 akun flagged          │
│  Baru hari ini: 12           │  │  2 locked                │
│  Expired minggu ini: 3       │  │  [Lihat semua →]         │
└──────────────────────────────┘  └─────────────────────────┘

┌──── Guest Tokens ──────────────────────────────────────┐
│  Aktif: 8 tokens  ·  Expired: 23 tokens                 │
│  [+ Generate Guest Token]                               │
└──────────────────────────────────────────────────────────┘
```

### 10.2 Fitur Admin Dashboard

| Fitur | Deskripsi |
|-------|-----------|
| Revenue overview | Total per produk, per segmen, per durasi |
| Grafik subscriber | Daily/weekly new subscribers |
| User management | Search, filter, detail per user |
| Anomaly center | Flag, lock, kirim warning |
| Guest token management | Generate, list, revoke |
| Pricing management | Ubah harga plan tanpa deploy |
| Product management | Tambah produk baru |
| Subscription lookup | Cari subscription by email/ID |

---

## 11. Prioritas Implementasi

```
Phase BE-1: Foundation
  → Setup Hono + Drizzle + Supabase
  → Schema DB + migrations
  → Auth: register, login, refresh, logout, me
  → JWT + httpOnly cookie + single session rule
  → Basic middleware: auth, rate limit

Phase BE-2: Subscription
  → Pricing plans CRUD
  → Checkout + Xendit integration
  → Xendit webhook handler
  → Subscription access check endpoint
  → Email: welcome, renewal reminder

Phase BE-3: Guest + Security
  → Guest token generate + login flow
  → Device fingerprint logging
  → Anomaly scoring engine
  → IP geolocation logging
  → Admin: anomaly dashboard + user management

Phase BE-4: Multi-Product + Admin Dashboard
  → Products CRUD
  → Admin dashboard frontend (/admin)
  → Revenue analytics
  → Guest token management UI
  → Pricing management UI

Phase BE-5: Hardening
  → Rate limiting per endpoint
  → CORS lock down
  → Audit logs
  → Load testing
  → Monitoring (Sentry / Grafana)
```

---

## 12. Security Checklist

| Kategori | Check | Status |
|----------|-------|--------|
| **Auth** | JWT di httpOnly cookie, bukan localStorage | 📋 Planned |
| **Auth** | RT disimpan sebagai hash bcrypt, bukan plaintext | 📋 |
| **Auth** | Session displacement saat login baru | 📋 |
| **Payment** | Xendit webhook verify `X-Callback-Token` header | 📋 |
| **Payment** | Idempotency: cek `xendit_payment_id` duplikat | 📋 |
| **Rate Limit** | `/api/auth/login` max 5/menit per IP | 📋 |
| **Rate Limit** | `/api/auth/register` max 3/jam per IP | 📋 |
| **CORS** | Origin whitelist: hanya domain sains.id | 📋 |
| **Input** | Semua input divalidasi via Zod schema | 📋 |
| **SQL** | Drizzle ORM, tidak ada raw query unsanitized | 📋 |
| **Secrets** | Semua secret di env var, tidak di git | 📋 |
| **Anomaly** | Auto-lock jika score ≥ 50 | 📋 |
| **Cookie** | `Secure` + `SameSite=Strict` untuk production | 📋 |

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

**Guest user** → max **2x login** (bukan 3x), lifetime **48 jam** sejak token di-generate.

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

### Guest

| Parameter | Value |
|-----------|-------|
| Cara dapat | Admin generate via dashboard |
| Max login | **2x** |
| Lifetime token | **48 jam** sejak generate |
| Session lifetime | 24 jam per login |
| Cost | Gratis (tidak bayar) |
| Data yang dikumpulkan | Email atau no HP (opsional, untuk rekap admin) |

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
