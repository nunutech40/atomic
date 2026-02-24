# TRD — Technical Requirements Document
**Project:** Atomic — Interactive 3D Periodic Table  
**Version:** 2.3  
**Date:** 2026-02-24  
**Status:** Sync dengan PRD v2.5 + Backend v1.1

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
| `data/phenomenon-stories.ts` | Narasi lengkap 27 fenomena (semua kategori) | **~210KB** |
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
| `MoleculeBuilder.ts` | `/molecule` | 3D molecule builder, mode bebas, **Chemistry Deduction Engine** |
| `PhenomenaList.ts` | `/phenomena` | Grid 27 fenomena, filter kategori, search |
| `PhenomenaStory.ts` | `/phenomena/:id` | Storyteller slide per fenomena |
| `AtomHistory.ts` | `/atom-history` | 22 slide cinematic sejarah atom |
| `Nav.ts` | global | Navbar + search dropdown + bilingual toggle |
| `AuthGate.ts` | global | Login (subscriber/guest toggle) + Register + OTP verification |
| `FeedbackWidget.ts` | global | Floating 💡 Saran pill + slide panel (rating, category, message) |

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

### 3.6 Phenomena Story System

#### Interface

```typescript
type SlideType = 'hook' | 'history' | 'step' | 'scale' | 'impact';

interface HistoryEntry {
  year: string;
  event: string;
  person: string;
}

interface StorySlide {
  type: SlideType;
  title: string;
  body: string;           // HTML string (boleh <br>, <b>, <i>)
  visual: string;         // emoji representasi
  animKey?: string;       // kunci animasi CSS
  highlight?: string;     // satu baris ringkasan · dipisah interpunct
  quote?: string;         // kutipan ilmuwan
  quoteAuthor?: string;
  history?: HistoryEntry[]; // timeline kronologis
}

interface PhenomenonStory {
  id: string;             // match dengan phenomena.ts id
  slides: StorySlide[];
}
```

#### Cakupan Konten (27 Fenomena, 6 Kategori)

| Kategori | ID | Jumlah Story |
|----------|----|--------------|
| `nuclear` | nucleosynthesis, antimatter, fission, fusion, chain-reaction, radioactivity | 6 |
| `quantum` | superposition, quantum-tunneling, photoelectric | 3 |
| `everyday` | combustion, rusting, crystal-structure, stability-principle, noble-metals | 5 |
| `cosmos` | nucleosynthesis (cosmos variant) | — |
| `life` | photosynthesis, dna-atoms, human-atoms, plant-atoms, earth-atoms, sun-atoms, atom-journey | 7 |
| `fiction` | palladium-arc, vibranium, kryptonite, unobtanium, adamantium, dilithium | 6 |

#### Slide Type Guide

| Type | Fungsi | Karakteristik |
|------|--------|---------------|
| `hook` | Pembukaan dramatis | Fakta kontra-intuitif atau drama historis |
| `history` | Kisah manusia di balik penemuan | Quote ilmuwan + timeline + drama personal |
| `step` | Penjelasan mekanisme sains | Breakdown proses, analogi, data spesifik |
| `scale` | Perbandingan skala / analogi | Angka kosmik → skala manusia |
| `impact` | Dampak & relevansi hari ini | Dunia nyata, teknologi, "verdict" |

#### Storytelling Style Guide (Zack Snyder + Nolan)

Lihat detail di: `docs/PRD.md Section 1.6`

Ringkasan teknis untuk penulis konten:
- Setiap story harus punya **minimal 5 slide**
- Slide pertama (`hook`) harus memiliki `highlight` yang kompak
- Slide `history` harus punya entry `history[]` dengan ≥2 entri kronologis
- `body` HTML dirender langsung — boleh `<b>`, `<br>`, `<i>`, tapi tidak `<script>`
- `highlight` menggunakan format: `Fakta A · Fakta B · Fakta C`

#### Chemistry Deduction Engine (MoleculeBuilder.ts)

Fitur tambahan untuk mode bebas Kimia Lab:

```typescript
type DeductionLevel = 'danger' | 'warning' | 'interesting' | 'awesome' | 'curious';

interface Deduction {
  icon: string;
  level: DeductionLevel;
  id: string;    // teks Bahasa Indonesia
  en: string;    // teks Bahasa Inggris
}

// Rule categories:
// - DANGER: logam berat toksik (Pb, Hg, Cd, As, Tl, Cr)
// - WARNING: halogen kuat, alkali + air, senyawa asam kuat
// - INTERESTING: kovalen vs ionik (electronegativity diff)
// - AWESOME: reaksi energetik, logam + nonlogam alkali
// - CURIOUS: gas mulia, kombinasi tidak umum
```

Output dirender sebagai kartu berwarna di panel kanan MoleculeBuilder, per level severity.

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

## 8. Backend & Subscription Architecture

> **Status: IMPLEMENTED ✅** — Backend sudah berjalan. Detail teknis: [`../../api/docs/TRD.md`](../../api/docs/TRD.md)
>
> Section ini adalah ringkasan dari implementasi aktual.

### 8.1 Platform Architecture

**SAINS bukan hanya Atomic.** Backend satu, banyak produk.

```
┌───────────────────────────────────────────────────────────────┐
│  FRONTEND (Static — per produk, deploy terpisah)              │
│  sains.id/atomic · sains.id/energi · sains.id/biologi        │
│  sains.id/pricing/*                                          │
└───────────────────────────────┬───────────────────────────────┘
                                 │ HTTPS
                 ┌───────────────▼───────────────┐
                 │     api.sains.id               │
                 │     Go (Gin) + Templ/HTMX      │
                 │     Railway (1 binary)          │
                 └───────────────┬───────────────────────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
    ┌─────────▼──────┐  ┌───────▼───────┐  ┌──────▼──────┐
    │  Supabase      │  │  Xendit       │  │  Resend     │
    │  Postgres      │  │  Payment      │  │  Email      │
    │               │  │  (REST API)   │  │  (Go SDK)   │
    └────────────────┘  └───────────────┘  └─────────────┘
```

Setiap produk di frontend hanya mengirimkan header `X-Product: atomic` ke setiap request. Backend dan DB satu, dibedakan oleh `product_id` di tabel.

> **Admin dashboard** di-serve langsung dari Go binary sebagai route `/admin/*` menggunakan Templ + HTMX + Alpine.js. Bukan project terpisah.

### 8.2 Tipe User & Session

| Tipe | Lifetime | Session Aktif | Login Limit |
|------|---------|---------------|-------------|
| `guest` | 48 jam | 1 | Maks 3x login |
| `subscriber` | Sesuai plan | 1 | Unlimited |
| `admin` | Selamanya | 2 | Unlimited |

**Single session rule:** Login baru → session lama di-revoke otomatis + catat di `anomaly_logs`.

**Guest user:** Tidak self-register. Admin generate code via dashboard → user masukkan email + code → OTP dikirim ke email → verifikasi OTP → akses 24 jam per session.

**Admin di Atomic:** Login via mode subscriber (email + password) → `AccessCheck` bypass subscription → full access tanpa berlangganan.

### 8.3 Token Architecture

```
Access Token (JWT, httpOnly cookie, exp: 1 jam):
  Payload: { sub, email, product, type, exp, iat }

Refresh Token (opaque hash, httpOnly cookie, exp: 30 hari):
  Disimpan di DB sebagai bcrypt hash
  Field: user_id, device_fingerprint, ip, user_agent, expires_at
```

Prinsip kunci:
- JWT **tidak** di localStorage. Selalu httpOnly cookie.
- RT disimpan sebagai **hash**, bukan plaintext.
- Setiap request butuh validasi ke DB (`sessions` + `subscriptions.expires_at`).

### 8.4 Pricing \u2014 3 Segmen × 4 Durasi per Produk

```
                Bulanan  3-Bulan  6-Bulan  Tahunan
segment=global   150rb    400rb    700rb   1.200rb
segment=student   25rb     65rb    110rb     180rb
segment=parent    89rb    239rb    399rb     699rb
```

Harga disimpan di tabel `pricing_plans` \u2014 dapat diubah admin tanpa deploy ulang. Tiga landing page terpisah dengan copywriting per segmen, semua checkout ke Xendit yang sama.

### 8.5 Anomaly Detection \u2014 Anti Multi-User Sharing

Score-based system. Events yang meningkatkan skor:

| Event | Poin |
|-------|------|
| Session displaced (login baru) | +5 |
| IP berubah < 1 jam | +8 |
| Negara berbeda dalam 24 jam | +15 |
| > 3 displaced dalam 7 hari | +20 |

Threshold: `≥25` \u2192 warning email \u2192 `≥50` \u2192 auto-lock. Admin dapat override dari dashboard.

### 8.6 Core Database Tables

```
 ─ Per-table schema:
products           — 'atomic', 'energi', 'biologi', ...
pricing_plans      — segment × durasi × harga (bisa update tanpa deploy)
users              — subscriber + admin
guest_codes        — kode guest, max_logins, expires_at
guest_logins       — login history per email per code
guest_otps         — 6-digit OTP, 5 min expiry, rate limited
subscriptions      — per user, per product, per plan
sessions           — refresh tokens + device_fp + ip logging
anomaly_logs       — event scoring per user
access_logs        — audit trail semua request terauth
feedback           — user feedback (saran, bug, tanya)
system_config      — key-value config (quota, limits)
```

Full schema: lihat `docs/BACKEND_PLAN.md` Section 6.

### 8.7 Security Principles

> **Aturan nomor 1: server tidak pernah percaya client.**

- ❗ `if (localStorage.isPremium)` — bisa dimanipulasi DevTools
- ❗ Konten premium di bundle JS — bisa di-extract tanpa login
- ✅ Setiap request divalidasi ke DB: session aktif + subscription belum expired
- ✅ Xendit webhook: selalu verifikasi `X-Callback-Token` header (`crypto/hmac`)
- ✅ Rate limiting: login max 5/menit per IP (Gin middleware)
- ✅ Cookie: `httpOnly` + `Secure` + `SameSite=Strict`
- ✅ Input validation: struct tags + `go-playground/validator`
- ✅ SQL injection: `sqlc` generated code, zero raw query

### 8.8 Implementasi \u2014 Fase Backend

```
Phase BE-1: Foundation    → Go (Gin) + pgx + sqlc + Auth + Single session rule
Phase BE-2: Subscription  → Pricing plans + Xendit REST API + Access check endpoint
Phase BE-3: Guest + Security → Guest token flow + Anomaly engine + IP logging
Phase BE-4: Admin Dashboard → Templ + HTMX + Chart.js + Admin pages
Phase BE-5: Hardening     → Rate limit + audit + monitoring + Docker
```

### 8.9 Tech Stack Backend

| Komponen | Teknologi |
|----------|-----------|
| Language | **Go 1.23+** |
| Framework | **Gin** (middleware ecosystem, popular) |
| DB Driver | **pgx** (jackc/pgx, pure Go, connection pooling) |
| Query Layer | **sqlc** (SQL → Go code, type-safe, zero reflection) |
| Migration | **golang-migrate** |
| Auth JWT | **golang-jwt/jwt** |
| Password | **golang.org/x/crypto/bcrypt** |
| Validation | **go-playground/validator** |
| Email | **Resend** (Go SDK) |
| Payment | **Xendit** (REST API via `net/http`, no SDK) |
| Geolocation | ip-api.com (free) atau MaxMind GeoIP2 |
| Logging | **zerolog** atau **slog** (stdlib Go 1.21+) |
| Admin Dashboard | **Templ** + **HTMX** + **Alpine.js** + **Chart.js** |
| Hosting BE | **Railway** (1 binary deploy) |
| Hosting DB | **Neon** Postgres |

> **Deploy:** Go binary single file. Admin dashboard (Templ + HTMX) dan static assets di-embed via `go:embed`. Frontend Atomic tetap static SPA di Vercel/Netlify. Cookie cross-origin butuh CORS `credentials: true` + `gin-contrib/cors`.
>

