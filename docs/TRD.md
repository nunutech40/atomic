# TRD — Technical Requirements Document
**Project:** Atomic — Interactive 3D Periodic Table  
**Version:** 2.0  
**Date:** 2026-02-21  
**Status:** Sync dengan PRD v2.0

---

## 1. Arsitektur Sistem

Atomic adalah **Single Page Application (SPA)** client-only. Tidak ada backend, semua data di-bundle saat build.

```
┌──────────────────────────────────────────────────────────┐
│                        Browser                            │
│                                                          │
│  ┌──────────┐   ┌──────────┐   ┌────────────────┐      │
│  │  Router  │   │   i18n   │   │   Theme        │      │
│  │  (hash)  │   │ (ID/EN)  │   │ (dark/light)   │      │
│  └────┬─────┘   └──────────┘   └────────────────┘      │
│       │                                                   │
│  ┌────▼──────────────────────────────────────────┐      │
│  │                     Views                      │      │
│  │                                                │      │
│  │  Dashboard  Explore  ElementDetail  Molecules  │      │
│  │  Phenomena  AtomHistory  DiscovererStory       │      │
│  └────┬──────────────────────────────────────────┘      │
│       │                                                   │
│  ┌────▼──────────────────────────────────────────┐      │
│  │                  Data Layer                    │      │
│  │  elements · categories · molecules · phenomena │      │
│  │  discoverers · origins · element-enrichment    │      │
│  │  phenomenon-stories                            │      │
│  └────────────────────────────────────────────────┘     │
│                                                          │
│  ┌────────────────────────────────────────────────┐     │
│  │                  Three.js Layer                │     │
│  │  atomScene.ts (Bohr Model — orbit elektron)    │     │
│  │  Explore inline renderer (molecule 3D)         │     │
│  │  MoleculeBuilder renderer                      │     │
│  └────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Tech Stack

| Layer | Teknologi | Alasan |
|-------|-----------|--------|
| Build | **Vite 7** | HMR cepat, ESM native, zero config |
| Language | **TypeScript 5** | Type safety, IDE support |
| 3D | **Three.js 0.183** | WebGL renderer, scene management |
| Routing | Custom hash router | No dependency, SPA hash-based |
| Styling | Vanilla CSS | Fleksibel, no framework overhead |
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

### 3.2 Data Layer (Implemented)

| File | Isi | Ukuran |
|------|-----|--------|
| `data/elements.ts` | 118 elemen + `nameId`, `desc`, `funFact` | ~44KB |
| `data/element-enrichment.ts` | Data tambahan per elemen | ~40KB |
| `data/categories.ts` | 11 kategori: warna, label ID/EN | ~2KB |
| `data/discoverers.ts` | Data penemu per elemen: foto, bio, Wikipedia | ~250KB |
| `data/origins.ts` | Asal usul kosmik per elemen (nukleosintesis) | ~75KB |
| `data/phenomena.ts` | 27 fenomena, 6 kategori | ~44KB |
| `data/phenomenon-stories.ts` | Narasi lengkap per fenomena | ~110KB |
| `data/molecules.ts` | Galeri molekul 3D (atom coords, bonds, desc) | ~35KB |

#### Interface Utama

```typescript
// elements.ts
interface Element {
  n: number; sym: string; name: string; nameId?: string;
  mass: string | number | number[];  // array = radioaktif
  cat: string; period: number; group: number;
  config: string; phase: string;
  density: number | null; mp: number | null; bp: number | null;
  en: number | null; ie: number | null;
  radius: number | null; year: number | string | null;
  ox: string | number | null; discovered: string | null;
  desc?: string; funFact?: string;
}

// discoverers.ts
interface Discoverer {
  sym: string; name: string; nationality: string;
  born: number; died: number | string;
  photoUrl: string; bio: string; wikipedia: string;
}

// origins.ts
interface ElementOrigin {
  sym: string; type: OriginType;
  label: string; icon: string; color: string;
  tagline: string; story: string;
}

// molecules.ts
interface Molecule {
  formula: string; name: string; nameId: string;
  category: string; shape: string; bondType: string;
  composition: Record<string, number>;
  atoms: { sym: string; pos: [number,number,number] }[];
  bonds: { a: number; b: number; order: number }[];
  desc: string; descEn?: string;
  funFact: string; funFactEn?: string;
}
```

---

### 3.3 Components (Implemented)

| Component | Route | Deskripsi |
|-----------|-------|-----------|
| `Dashboard.ts` | `/` | Scroll-driven landing, 5 chapter, Three.js hero |
| `Explore.ts` | `/explore` | How-to-read banner + Tabel Periodik + Galeri Molekul 3D |
| `ElementDetail.ts` | `/element/:n` | 3D atom, data, Card Penemu, Card Asal Kosmik, Related |
| `DiscovererStory.ts` | `/discoverer/:sym` | Kisah penemu per elemen |
| `MoleculeBuilder.ts` | `/molecule` | 3D molecule builder, mode bebas |
| `PhenomenaList.ts` | `/phenomena` | Grid 27 fenomena, filter kategori, search |
| `PhenomenaStory.ts` | `/phenomena/:id` | Storyteller slide per fenomena |
| `AtomHistory.ts` | `/atom-history` | 22 slide cinematic sejarah atom |
| `Nav.ts` | global | Navbar + search dropdown + bilingual toggle |

---

### 3.4 Three.js — AtomScene

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
4. **Electrons** — `SphereGeometry` kecil, posisi awal evenly distributed

#### Optimasi
- Max elektron per kulit ditampilkan: **16** (untuk elemen berat)
- LOD: sphere elektron segment lebih sedikit (8×8)
- `renderer.setPixelRatio(min(dpr, 2))` — limit pixel ratio

#### Drag/Touch Control
- Mouse: `mousedown + mousemove` → rotate `sphereGroup`
- Wheel: zoom camera Z-axis (clamp 2–20)
- Touch: single-finger drag support

---

### 3.5 Periodic Table Grid

**Layout:** CSS Grid `18 kolom × 9 baris`
- Baris 1–7: periode reguler
- Baris 8: Lantanida (La–Lu), row 8 col 4–17
- Baris 9: Aktinida (Ac–Lr), row 9 col 4–17

**Posisi elemen** hardcoded di `GRID_POS` Map `{n: [row, col]}`

---

## 4. Init Sequence

```
main.ts
  → initTheme()                    // set data-theme attribute
  → renderNav()                    // navbar global
  → addRoute('/')                  // Dashboard
  → addRoute('/explore')           // Explore (tabel + molekul)
  → addRoute('/element/:n')        // Element Detail
  → addRoute('/discoverer/:sym')   // Discoverer Story
  → addRoute('/molecule')          // Kimia Lab
  → addRoute('/phenomena')         // Phenomena List
  → addRoute('/phenomena/:id')     // Phenomena Detail
  → addRoute('/atom-history')      // Atom History
  → initRouter()                   // resolve current hash
```

---

## 5. Known Limitations

| Masalah | Solusi |
|---------|--------|
| `atomicMass` bisa berupa `Array` untuk elemen radioaktif | Handled di `fmtMass()` |
| Elektron di kulit N/O bisa >32 | Di-cap 16 per kulit untuk visual |
| Period/Group Lantanida/Aktinida dari npm tidak akurat | `GRID_POS` lebih akurat untuk display |
| `erasableSyntaxOnly: true` di tsconfig | TypeScript-only lint issue, tidak mempengaruhi runtime |
| Bundle besar karena data teks | Acceptable untuk SPA edukasi; bisa split nanti |

---

## 6. Performance Budget

| Metric | Target | Status |
|--------|--------|--------|
| Bundle size (JS) | < 500KB | Vite tree-shaking Three.js |
| First Contentful Paint | < 1.5s | ✅ |
| 3D frame rate | 60fps | ✅ (cap 2× DPR) |
| Memory (heavy element) | < 100MB | ✅ (orbit cap) |

---

## 7. Backlog Teknis — Dikerjakan Setelah Sprint Aktif

### 7.1 Kimia Lab — Mode Tantangan (Sprint Aktif)

```typescript
// Tambahan di MoleculeBuilder.ts
interface Challenge {
  id: string;
  targetFormula: string;      // e.g. "H₂O"
  targetName: string;         // e.g. "Air"
  hint: string[];             // bertahap, unlock per attempt
  availableAtoms: string[];   // atom yang bisa dipilih user
}
```

- Mode selector: `Bebas | Tantangan`
- Feedback real-time: warna ✅/❌ per atom yang dipasang
- Progress bar: `X/Y atom benar`
- Hint system: unlock setelah N attempt gagal

### 7.2 Element Detail — Card Lanjutan

```typescript
// src/data/elementAbundance.ts (BARU)
interface ElementAbundance {
  sym: string;
  earthCrust: string;          // e.g. "2.82% kerak bumi"
  earthSources: string[];      // e.g. ["Hematit", "Magnetit"]
  worldLocations: string[];    // e.g. ["Australia", "Brasil"]
  universeAbundance: string;   // e.g. "0.001% alam semesta"
  solarSystemPercent: string;
  cosmicOrigin: string;
  naturalForms: string[];
}

// src/data/elementPhenomena.ts (BARU)
interface ElementPhenomena {
  sym: string;
  phenomena: {
    title: string; icon: string; description: string;
    type: 'natural' | 'industrial' | 'biological' | 'quantum';
    phenomenonId?: string;  // link ke /phenomena/:id jika ada
  }[];
}
```

### 7.3 Phase 2 — Modul Edukasi

- Router extend: `/learn` → `/learn/:slug`
- Setiap modul = komponen tersendiri dengan animasi custom
- Canvas 2D untuk animasi sederhana (lebih ringan dari Three.js)
- Data: `src/data/curriculum.ts`

### 7.4 Phase 3 — Multi-Level Visualizer

- Level 2: Orbital — `lobe geometry` untuk s/p/d/f orbital
- Level 3: Probability cloud — particle system / volumetric shader
- Toggle UI di halaman detail elemen

---

## 8. Arsitektur Subscription & Payment (Xendit + Postgres)

> Status: **Planned — belum diimplementasikan.** Dicatat sebagai blueprint untuk saat backend diperlukan.

### 8.1 Prinsip Keamanan Utama

> **Aturan nomor 1: server tidak pernah percaya client.**

Semua keputusan akses dibuat di **backend**, bukan di frontend. Frontend hanya menampilkan apa yang diizinkan server.

- ❌ `if (localStorage.isPremium)` — bisa dimanipulasi siapapun via DevTools
- ❌ Konten premium di dalam bundle JS — bisa di-extract tanpa login
- ❌ JWT hanya dicek formatnya tanpa query DB — bisa dipalsukan
- ✅ Setiap request ke konten/API divalidasi ke Postgres setiap saat

### 8.2 User Journey & Flow

```
[1] User buka atomic.com
         │
         ▼
[2] Landing Page (PUBLIK)
    • Deskripsi produk, harga, preview terbatas
    • Tombol "Daftar & Bayar"
         │
         ▼ klik Daftar
[3] Form Registrasi → Backend INSERT user (is_active=FALSE)
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
    │    • Backend verifikasi X-Callback-Token (WAJIB)
    │    • Backend UPDATE users SET is_active=TRUE
    │    • Backend INSERT subscriptions (expires_at = +1 tahun)
    │    • Backend kirim email via Resend (password sementara)
    │
    │    ▼ BAYAR GAGAL / EXPIRED
    │ [5b] UPDATE pending_users SET status='expired'
    │      Kirim email "Pembayaran gagal, coba lagi"
    └──────────────
         │
         ▼
[6] User Login → POST /auth/login → JWT (httpOnly cookie, 7 hari)
         │
         ▼
[7] gate.js cek JWT ke backend SEBELUM load app bundle
    • Valid → inject <script src="/app.js">
    • Tidak valid → redirect /login (app.js TIDAK dikirim)
```

### 8.3 Database Schema (Postgres)

```sql
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         TEXT UNIQUE NOT NULL,
  name          TEXT NOT NULL,
  password_hash TEXT NOT NULL,          -- bcrypt, saltRounds=12
  is_active     BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE subscriptions (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID REFERENCES users(id) ON DELETE CASCADE,
  plan              TEXT NOT NULL DEFAULT 'yearly',
  xendit_invoice_id TEXT UNIQUE,
  xendit_payment_id TEXT,
  amount_paid       INTEGER,            -- dalam rupiah
  paid_at           TIMESTAMPTZ,
  expires_at        TIMESTAMPTZ NOT NULL,
  is_active         BOOLEAN DEFAULT TRUE,
  created_at        TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE refresh_tokens (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES users(id) ON DELETE CASCADE,
  token_hash  TEXT NOT NULL,
  device_info TEXT,
  expires_at  TIMESTAMPTZ NOT NULL,    -- 30 hari
  revoked     BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_expires ON subscriptions(expires_at);
CREATE INDEX idx_refresh_tokens_user   ON refresh_tokens(user_id);
```

### 8.4 Backend API Routes

```
POST /auth/register          → buat pending user + Xendit invoice
POST /auth/login             → verifikasi email+password, return JWT
POST /auth/refresh           → tukar refresh token → JWT baru
POST /auth/logout            → revoke refresh token
GET  /auth/me                → return user info (butuh JWT valid)

POST /payment/create-invoice → buat Xendit invoice untuk user
POST /xendit/webhook         → terima callback dari Xendit (HMAC verified)

GET  /app                    → serve index.html HANYA jika JWT valid
GET  /api/content/:id        → serve konten (butuh JWT + subscription aktif)
```

### 8.5 Xendit Webhook — Titik Kritis

```typescript
app.post('/xendit/webhook', (req, res) => {
  const callbackToken = req.headers['x-callback-token'];
  if (callbackToken !== process.env.XENDIT_WEBHOOK_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const { status, external_id, id } = req.body;
  if (status === 'PAID') {
    await db.users.update({ is_active: true }, { where: { id: external_id } });
    await db.subscriptions.create({ user_id: external_id, xendit_payment_id: id });
    await sendActivationEmail(external_id);
  }
  res.status(200).send('OK');
});
```

### 8.6 JWT & Session Security

```
JWT Payload: { sub: "uuid", email, exp: +7hari, iat }
Disimpan: httpOnly cookie (BUKAN localStorage)
  → httpOnly = tidak bisa dibaca JS
  → Secure = hanya HTTPS
  → SameSite=Strict = anti-CSRF
```

### 8.7 Anti-Abuse

| Ancaman | Mitigasi |
|---------|---------|
| Brute force login | Rate limiting: max 5 attempt/menit per IP |
| Sharing akun | Max 2 active session per user_id |
| Fake webhook Xendit | Verifikasi `X-Callback-Token` header |
| JWT kadaluarsa dipakai | `exp` field + selalu query DB |
| Refund lalu tetap pakai | Xendit refund webhook → `is_active = FALSE` |

### 8.8 Tech Stack Backend (Saat Diperlukan)

| Komponen | Teknologi |
|----------|-----------|
| Runtime | Node.js 20+ |
| Framework | **Hono** (ringan, Cloudflare Workers-ready) |
| Database ORM | **Drizzle ORM** + Postgres |
| Auth | `jsonwebtoken` + `bcryptjs` |
| Email | **Resend** |
| Payment | **Xendit** (QRIS, VA, GoPay, OVO, CC) |
| Hosting backend | Railway / Render / VPS |
| Hosting DB | **Supabase** Postgres |

> **Implikasi:** Jika backend diimplementasikan, Atomic tidak bisa lagi di-deploy sebagai pure static (Netlify/Vercel). Butuh server Node.js atau Cloudflare Workers.
