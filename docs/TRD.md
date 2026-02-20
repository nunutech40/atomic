# TRD — Technical Requirements Document
**Project:** Atomic — Interactive 3D Periodic Table  
**Version:** 1.1  
**Date:** 2026-02-20

---

## 1. Arsitektur Sistem

Atomic adalah **Single Page Application (SPA)** client-only. Tidak ada backend, semua data di-bundle saat build.

```
┌─────────────────────────────────────────────┐
│                  Browser                      │
│  ┌─────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Router  │  │  i18n    │  │   Theme    │  │
│  │ (hash)   │  │ (ID/EN)  │  │(dark/light)│  │
│  └────┬────┘  └──────────┘  └──────────┘  │
│       │                                       │
│  ┌────▼────────────────────────┐                │
│  │         Views             │                │
│  │  ┌───────┐ ┌───────┐ ┌─────────┐ │                │
│  │  │ Home    │ │ Detail  │ │ Phenomena│ │                │
│  │  │(Table)  │ │(Element)│ │ List/Detail│ │                │
│  │  └────┬───┘ └────┬───┘ └────┬────┘ │                │
│  └───────┬─────────┬───────┬───────┘               │
│          │           │       │                │
│  ┌───────▼───┐  ┌────▼──────────┐ ┌────▼─────────┐  │
│  │ Periodic  │  │  ElementDetail  │ │PhenomenaList│  │
│  │ Table.ts  │  │  + AtomScene   │ │+ Phenomena  │  │
│  └───────────┘  └────────────────┘ │ Detail.ts  │  │
│                                    └─────────────┘  │
│  ┌─────────────────────────────────────────┐ │
│  │             Data Layer                   │ │
│  │  elements.ts  categories.ts  phenomena.ts │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

---

## 2. Tech Stack Detail

| Layer | Teknologi | Alasan |
|-------|-----------|--------|
| Build | **Vite 7** | HMR cepat, ESM native, zero config |
| Language | **TypeScript 5** | Type safety, IDE support |
| 3D | **Three.js 0.183** | WebGL renderer, scene management |
| Data | **periodic-table** (npm) | Data terstruktur 118 elemen |
| Routing | Custom hash router | No dependency, SPA hash-based |
| Styling | Vanilla CSS | Flexibel, no framework overhead |
| Font | Google Fonts (Inter, JetBrains Mono) | |

---

## 3. Module Architecture

### 3.1 Core Modules

#### `core/router.ts`
- Hash-based router (`#/path`)
- `addRoute(pattern, handler)` — pattern support `:param`
- `navigate(path)` — push history + trigger resolve
- `setCleanup(fn)` — register cleanup saat route change
- `initRouter()` — listen `popstate`, resolve initial route

#### `core/i18n.ts`
- `t(path: string)` — dot-notation key lookup
- `getLang() / setLang() / toggleLang()`
- Persist ke `localStorage('atomic-lang')`

#### `core/theme.ts`
- `initTheme()` — restore dari localStorage, set `data-theme` attribute
- `getTheme() / toggleTheme()`
- CSS variables per `[data-theme]`

---

### 3.2 Data Layer

#### `data/elements.ts`
- `Element` interface dengan semua properti kimia
- Array 118 elemen, diurutkan berdasarkan nomor atom
- `mass` field bisa `string | number | number[]` (handled di render)

#### `data/categories.ts`
- `Category` interface: `{ id, nameEn, nameId, color, bgColor }`
- 11 kategori: alkali-metal, alkaline-earth, transition-metal, post-transition, metalloid, nonmetal, halogen, noble-gas, lanthanide, actinide, unknown

#### `data/phenomena.ts`
- `Phenomenon` interface: `{ id, icon, title, titleEn, tagline, category, atoms, desc, funFact, scale, realWorld }`
- 27 entri fenomena, dikelompokkan dalam 6 kategori:
  - `nuclear` (4), `quantum` (3), `everyday` (5), `cosmos` (2), `life` (7), `fiction` (6)
- `PHENOMENON_CATEGORIES` — map kategori ke label & warna (pink untuk fiction)
- Semua field `desc` multi-paragraf menggunakan **template literal** (backtick) dengan `\n\n`

---

### 3.3 Components

#### `components/PhenomenaList.ts`
- Render grid kartu fenomena dari data `phenomena.ts`
- Filter tab per kategori dengan count badge
- Search field untuk filter by judul/tagline/desc
- Click handler untuk navigate ke `/phenomena/:id`

---

### 3.4 Three.js AtomScene

#### Lifecycle
```
new AtomScene(canvas, colorHex)
  → build(atomicNumber)   // create geometry
  → start()               // begin animation loop
  → resize(w, h)          // handle window resize
  → destroy()             // cancel rAF, dispose renderer
```

#### Rendering Pipeline
1. **Nucleus** — `SphereGeometry`, ukuran logaritmik `log(n+1)*0.18`
2. **Glow** — sphere transparan di sekitar nukleus
3. **Orbit rings** — `TorusGeometry` per kulit, tilt rotasi berbeda
4. **Electrons** — `SphereGeometry` kecil, posisi awal evenly distributed, orbit via angle update

#### Optimasi
- Max elektron per kulit ditampilkan: **16** (untuk elemen berat)
- LOD: sphere elektron pakai segment lebih sedikit (8x8 vs 10x10)
- `renderer.setPixelRatio(min(dpr, 2))` — limit pixel ratio

#### Drag/Touch Control
- Mouse: `mousedown + mousemove` → rotate `sphereGroup`
- Wheel: zoom camera Z-axis (clamp 2–20)
- Touch: single-finger drag support

---

### 3.5 Periodic Table Grid

**Layout:** CSS Grid `18 kolom × 9 baris`
- Baris 1–7: periode reguler
- Baris 8: Lantanida (La–Lu)
- Baris 9: Aktinida (Ac–Lr)

**Posisi elemen** hardcoded di `GRID_POS` Map `{n: [row, col]}`

**Filter kategori:** toggle `dimmed/highlighted` class per sel

---

## 4. Init Sequence

```
main.ts
  → initTheme()              // set data-theme attribute
  → renderNav()              // navbar + search
  → addRoute('/')            // register home route
  → addRoute('/element/:n') // register detail route
  → addRoute('/phenomena')  // register phenomena list route
  → addRoute('/phenomena/:id') // register phenomena detail route
  → initRouter()             // resolve current hash
       ↓
  Route '/' → renderPeriodicTable()
  Route '/element/:n' → renderElementDetail(n)
  Route '/phenomena' → renderPhenomenaList()
  Route '/phenomena/:id' → renderPhenomenaDetail(id)
       ↓
  ElementDetail init:
    → ResizeObserver starts watching canvasWrap
    → On first resize event with w > 0:
        → new AtomScene(canvas, color)
        → scene.build(atomicNumber)
        → scene.start()
```

---

## 5. Known Limitations

| Masalah | Solusi |
|---------|--------|
| `atomicMass` bisa berupa `Array` untuk elemen radioaktif | Handled di `fmtMass()` |
| Elektron di kulit N/O bisa >32 | Di-cap 16 per kulit untuk visual |
| Period/Group data untuk Lantanida/Aktinida dari npm package tidak akurat | Field `period` dan `group` dari `GRID_POS` lebih akurat untuk display |
| `erasableSyntaxOnly: true` di tsconfig | TypeScript-only lint issue, tidak mempengaruhi runtime |

---

## 6. Performance Budget

| Metric | Target | Status |
|--------|--------|--------|
| Bundle size (JS) | < 500KB | Vite tree-shaking Three.js |
| First Contentful Paint | < 1.5s | ✅ |
| 3D frame rate | 60fps | ✅ (cap 2x DPR) |
| Memory (heavy element) | < 100MB | ✅ (orbit cap) |

---

## 7. Future Technical Considerations

### Phase 2 — Modul Edukasi
- Setiap topik = modul tersendiri dengan animasi custom
- Bisa pakai `<canvas>` 2D untuk animasi sederhana (lebih ringan dari Three.js)
- Router extend dengan `/learn/:topic`

### Phase 3 — Multi-level Atom Visualizer
- Level 1 (current): Bohr model — orbit circles
- Level 2: Orbital representation — lobe geometry (p, d, f orbitals)
- Level 3: Probability cloud — particle system / volumetric shader
- Toggle UI di halaman detail

### Pertimbangan Data Akurasi
- Data dari `periodic-table` npm cukup untuk edukasi umum
- Untuk data lebih akurat bisa integrate dengan API (e.g., PubChem, NIST)

---

## 8. Arsitektur Subscription & Payment (Xendit + Postgres)

> Status: **Planned — belum diimplementasikan.** Dicatat sebagai blueprint wajib sebelum implementasi.

### 8.1 Prinsip Keamanan Utama

> **Aturan nomor 1: server tidak pernah percaya client.**

Semua keputusan akses dibuat di **backend**, bukan di frontend. Frontend hanya menampilkan apa yang diizinkan server.

- ❌ `if (localStorage.isPremium)` — bisa dimanipulasi siapapun via DevTools
- ❌ Konten premium di dalam bundle JS — bisa di-extract tanpa login
- ❌ JWT hanya dicek formatnya tanpa query DB — bisa dipalsukan
- ✅ Setiap request ke konten/API divalidasi ke Postgres setiap saat

---

### 8.2 User Journey & Flow Lengkap

```
[1] User buka atomic.com
         │
         ▼
[2] Landing Page (PUBLIK — semua bisa akses)
    • Deskripsi produk, harga, preview terbatas
    • Tombol "Daftar & Bayar"
         │
         ▼ klik Daftar
[3] Form Registrasi
    • Input: nama, email
    • Backend: INSERT user (is_active=FALSE, pending)
         │
         ▼ submit
[4] Redirect ke Xendit Payment Page
    • Backend buat invoice via Xendit API
    • User bayar (QRIS / VA BCA / GoPay / OVO / CC)
         │
    ┌────┤ Xendit callback
    │    │
    │    ▼ BAYAR SUKSES
    │ [5] Xendit kirim webhook POST ke backend
    │    • Backend verifikasi signature Xendit (WAJIB)
    │    • Backend UPDATE users SET is_active=TRUE
    │    • Backend INSERT subscriptions (expires_at = +1 tahun)
    │    • Backend kirim email via Resend:
    │         Subject: "Akun Atomic kamu aktif!"
    │         Isi: password sementara + link login
    │
    │    ▼ BAYAR GAGAL / EXPIRED
    │ [5b] Backend UPDATE pending_users SET status='expired'
    │      Kirim email "Pembayaran gagal, coba lagi"
    │
    └──────────────
         │
         ▼ user buka email
[6] User Login
    • POST /auth/login (email + password)
    • Backend: query Postgres, verifikasi bcrypt hash
    • Cek: is_active=TRUE + subscription belum expired
    • Return: JWT (expires 7 hari) + refresh token
         │
         ▼ JWT valid
[7] App Atomic Dimuat
    • gate.js cek JWT ke backend SEBELUM load app bundle
    • Backend validasi JWT + cek DB (tidak hanya decode)
    • Jika valid → inject <script src="/app.js"> secara dinamis
    • Jika tidak valid → redirect /login (app.js TIDAK pernah dikirim)
```

---

### 8.3 Database Schema (Postgres)

```sql
-- Users
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         TEXT UNIQUE NOT NULL,
  name          TEXT NOT NULL,
  password_hash TEXT NOT NULL,          -- bcrypt, saltRounds=12
  is_active     BOOLEAN DEFAULT FALSE,  -- TRUE hanya setelah bayar
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- Subscriptions
CREATE TABLE subscriptions (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID REFERENCES users(id) ON DELETE CASCADE,
  plan              TEXT NOT NULL DEFAULT 'yearly',  -- 'monthly'|'yearly'
  xendit_invoice_id TEXT UNIQUE,       -- ID invoice dari Xendit
  xendit_payment_id TEXT,              -- ID payment dari Xendit webhook
  amount_paid       INTEGER,           -- dalam rupiah
  paid_at           TIMESTAMPTZ,
  expires_at        TIMESTAMPTZ NOT NULL,
  is_active         BOOLEAN DEFAULT TRUE,
  created_at        TIMESTAMPTZ DEFAULT now()
);

-- Refresh Tokens (untuk session management)
CREATE TABLE refresh_tokens (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES users(id) ON DELETE CASCADE,
  token_hash TEXT NOT NULL,             -- hash dari token, bukan raw
  device_info TEXT,                     -- user agent / device
  expires_at TIMESTAMPTZ NOT NULL,      -- 30 hari
  revoked    BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index penting
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_expires ON subscriptions(expires_at);
CREATE INDEX idx_refresh_tokens_user   ON refresh_tokens(user_id);
```

---

### 8.4 Backend API Routes

```
POST /auth/register          → buat pending user + buat Xendit invoice
POST /auth/login             → verifikasi email+password, return JWT
POST /auth/refresh           → tukar refresh token → JWT baru
POST /auth/logout            → revoke refresh token
GET  /auth/me                → return user info (butuh JWT valid)

POST /payment/create-invoice → buat Xendit invoice untuk user
POST /xendit/webhook         → terima callback dari Xendit (HMAC verified)

GET  /app                    → serve index.html HANYA jika JWT valid di cookie
GET  /api/content/:id        → serve konten (butuh JWT valid + subscription aktif)
```

---

### 8.5 Xendit Webhook — Titik Kritis Keamanan

Webhook dari Xendit adalah bagian yang paling kritis. **Jika tidak diverifikasi, attacker bisa kirim request palsu dan aktifkan akun gratis.**

```typescript
// Wajib: verifikasi X-Callback-Token dari Xendit
app.post('/xendit/webhook', (req, res) => {
  const callbackToken = req.headers['x-callback-token'];

  // Tolak jika token tidak cocok dengan yang ada di ENV
  if (callbackToken !== process.env.XENDIT_WEBHOOK_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { status, external_id, id } = req.body;

  if (status === 'PAID') {
    // Aktifkan user berdasarkan external_id (= user_id kita)
    await db.users.update({ is_active: true }, { where: { id: external_id } });
    await db.subscriptions.create({ user_id: external_id, xendit_payment_id: id, ... });
    await sendActivationEmail(external_id);  // kirim password ke email
  }

  res.status(200).send('OK');  // Xendit butuh 200 atau akan retry
});
```

---

### 8.6 JWT & Session Security

```
JWT Payload:
{
  sub: "user-uuid",
  email: "user@example.com",
  exp: <7 hari dari sekarang>,
  iat: <issued at>
}

JWT disimpan: httpOnly cookie (BUKAN localStorage)
  → httpOnly = tidak bisa dibaca JavaScript sama sekali
  → Secure = hanya HTTPS
  → SameSite=Strict = tidak bisa dikirim dari domain lain (anti-CSRF)
```

**Validasi JWT di setiap request:**
```typescript
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.jwt;  // dari httpOnly cookie
  if (!token) return res.status(401).redirect('/login');

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // WAJIB: query DB, jangan hanya decode JWT
    const sub = await db.subscriptions.findOne({
      where: { user_id: payload.sub, is_active: true },
    });

    // Cek expired
    if (!sub || sub.expires_at < new Date()) {
      return res.status(403).redirect('/login?reason=expired');
    }

    req.user = payload;
    next();
  } catch {
    return res.status(401).redirect('/login');
  }
};
```

---

### 8.7 Proteksi Bundle App (Gate Layer)

Ini yang memastikan bundle `app.js` **tidak bisa diakses tanpa login**:

```
                   Request ke atomic.com/app
                             │
               ┌──────────▼──────────┐
               │  Backend middleware       │
               │  cek httpOnly JWT cookie  │
               └────┬───────────┬──────┘
                    │ Valid          │ Tidak valid
                    ▼                ▼
             Serve app HTML     Redirect /login
             + inject app.js    (app.js TIDAK dikirim)
```

```typescript
// Server route — bukan static file server biasa
app.get('/app', authMiddleware, (req, res) => {
  // authMiddleware sudah cek JWT + DB subscription
  // Baru di sini HTML app dikirim ke browser
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Bundle assets juga diproteksi
app.use('/assets', authMiddleware, express.static('../dist/assets'));
```

> **Implikasi penting:** Atomic tidak bisa lagi di-deploy sebagai pure static (Netlify/Vercel drop folder). Butuh server Node.js (Hono / Express) atau setidaknya Cloudflare Workers.

---

### 8.8 Anti-Abuse Tambahan

| Ancaman | Mitigasi |
|---|---|
| Brute force login | Rate limiting: max 5 attempt/menit per IP (pakai `express-rate-limit`) |
| Sharing akun | Max 2 active session per user_id (cek `refresh_tokens` count) |
| Fake webhook Xendit | Verifikasi `X-Callback-Token` header (hardcoded secret di ENV) |
| JWT kadaluarsa dipakai | `exp` field di JWT + selalu query DB |
| Refund lalu tetap pakai | Xendit refund webhook → set `subscriptions.is_active = FALSE` |
| Inspect network untuk curi token | JWT di httpOnly cookie, tidak bisa dibaca JS |
| CORS bypass | Whitelist origin hanya `atomic.com` di backend |

---

### 8.9 Tech Stack Backend

| Komponen | Teknologi |
|---|---|
| Runtime | Node.js 20+ |
| Framework | **Hono** (ringan, bisa Cloudflare Workers) atau Express |
| Database ORM | **Drizzle ORM** + Postgres (type-safe, ringan) |
| Auth | `jsonwebtoken` + `bcryptjs` |
| Email | **Resend** (developer-friendly, murah) |
| Payment | **Xendit** (QRIS, VA, GoPay, OVO, CC — lokal Indonesia) |
| Hosting backend | Railway / Render / VPS (butuh persistent server) |
| Hosting DB | **Supabase** Postgres (gratis tier cukup untuk awal) |

