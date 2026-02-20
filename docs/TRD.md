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

## 8. Catatan Arsitektur — Subscription & Monetisasi

> Ini **tidak diimplementasikan** saat ini. Dicatat untuk referensi jika akan ditambahkan.

Karena Atomic adalah **static SPA** (tidak ada server, tidak ada database), sistem subscription/paywall **tidak bisa dilakukan aman di sisi client saja** — status premium di localStorage bisa dimanipulasi user.

### Opsi yang Direkomendasikan (tanpa backend sendiri):

| Opsi | Kompleksitas | Cocok jika |
|------|-------------|------------|
| **Lemon Squeezy** | ⭐ Rendah | Jual license key, validasi via API call read-only |
| **Paddle** | ⭐⭐ Sedang | Subscription model, webhook ke serverless function |
| **Supabase (Gratis Tier)** | ⭐⭐ Sedang | Butuh backend ringan: auth + tabel `subscriptions` |
| **Cloudflare Workers + KV** | ⭐⭐ Sedang | Edge function validasi license, serverless |

### Pola Arsitektur Minimum yang Aman:

```
User bayar via Lemon Squeezy / Paddle
         ↓
  Dapat license key (email)
         ↓
  Input key di app → fetch ke Lemon Squeezy API
         ↓
  Validasi server-side (bukan client-only)
         ↓
  Simpan JWT / status di sessionStorage (bukan localStorage biasa)
         ↓
  Konten premium di-unlock selama session
```

### Yang JANGAN dilakukan:
- ❌ `if (localStorage.getItem('isPremium') === 'true')` — trivial untuk di-bypass
- ❌ Hardcode license key di client code — terlihat di source
- ❌ Sembunyikan konten premium di bundle JS — tetap bisa di-extract

### Rekomendasi untuk Atomic:
- Mulai dengan **Lemon Squeezy** (tidak perlu backend sama sekali, API key cukup)
- Konten yang di-lock: detail fenomena lanjutan, modul belajar Phase 2, dll.
- Gratis tier: semua fenomena dasar, tabel periodik 118 elemen (konten saat ini)
