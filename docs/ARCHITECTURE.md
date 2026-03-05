# Atomic App — Architecture Documentation

> Last updated: 5 March 2026

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [Data Flow](#data-flow)
- [Routing](#routing)
- [Three.js Integration](#threejs-integration)
- [Auth Flow](#auth-flow)
- [Demo Mode](#demo-mode)
- [What's Safe to Edit](#whats-safe-to-edit)
- [Quick Reference](#quick-reference)

---

## Overview

Atomic is an **interactive 3D chemistry learning app** for high school students. It lets users explore the periodic table, visualize atom structures in 3D, build molecules, and learn chemistry concepts through interactive stories.

The app is a **Single Page Application (SPA)** built with vanilla TypeScript + Three.js, bundled by Vite. It talks to the SAINS API backend for authentication and subscription access.

**Live:** https://app.sains-atomic.web.id

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Language | **TypeScript** | Type-safe frontend code |
| Build | **Vite** | Fast dev server + production bundler |
| 3D Engine | **Three.js** | Atom/molecule/orbital 3D rendering |
| Styling | **Vanilla CSS** | `global.css` with CSS custom properties |
| Routing | **Custom hash router** | `#/element/1`, `#/molecule-builder`, etc. |
| Auth | **SAINS API** | JWT-based, localStorage token |
| i18n | **Custom** | Indonesian + English, runtime toggle |
| State | **No framework** | DOM manipulation, module-level state |

**No UI framework** (no React/Vue/Svelte). Everything is vanilla TS with DOM APIs.

---

## Project Structure

```
atomic/
├── index.html                  ← Entry HTML (mounts #app)
├── package.json                ← Dependencies: vite, three, typescript
├── tsconfig.json               ← TypeScript config
├── vite.config.ts              ← Vite config (build output: dist/)
│
├── src/
│   ├── main.ts                 ← ⭐ App entry point — auth check, routing, boot
│   │
│   ├── core/                   ← Core infrastructure
│   │   ├── auth.ts             ← Auth service (login, register, guest, OTP, token)
│   │   ├── config.ts           ← API base URL configuration
│   │   ├── router.ts           ← Hash-based SPA router
│   │   ├── theme.ts            ← Dark/light mode toggle
│   │   └── i18n.ts             ← Language service (ID/EN)
│   │
│   ├── components/             ← UI Components (16 files)
│   │   ├── AuthGate.ts         ← Login/Register/OTP verification UI
│   │   ├── Nav.ts              ← Navigation bar + user badge
│   │   ├── Dashboard.ts        ← Home dashboard after login
│   │   ├── PeriodicTable.ts    ← Interactive periodic table grid
│   │   ├── ElementDetail.ts    ← Element info page (properties, 3D atom)
│   │   ├── Explore.ts          ← Explore elements with filters
│   │   ├── MoleculeBuilder.ts  ← 🧪 Molecule builder (3D drag & drop)
│   │   ├── CompositionPage.ts  ← "What's X made of?" interactive stories
│   │   ├── AtomHistory.ts      ← History/timeline of element discovery
│   │   ├── DiscovererStory.ts  ← Discoverer biography pages
│   │   ├── LearnList.ts        ← Learning module list
│   │   ├── LearnModule.ts      ← Individual learning module view
│   │   ├── PhenomenaList.ts    ← Science phenomena list
│   │   ├── PhenomenonStory.ts  ← Individual phenomenon story
│   │   ├── Onboarding.ts       ← First-time user onboarding
│   │   └── FeedbackWidget.ts   ← Floating feedback/suggestion widget
│   │
│   ├── three/                  ← Three.js 3D scenes
│   │   ├── atomScene.ts        ← 3D atom model (nucleus + electrons)
│   │   ├── orbitalScene.ts     ← 3D electron orbital visualization
│   │   └── moleculeScene.ts    ← 3D molecule structure renderer
│   │
│   ├── data/                   ← Static data (18 files)
│   │   ├── elements.ts         ← ⭐ Periodic table data (118 elements)
│   │   ├── molecules.ts        ← Molecule database (32 molecules)
│   │   ├── categories.ts       ← Element category definitions
│   │   ├── origins.ts          ← Element name origins
│   │   ├── discoverers.ts      ← Discoverer biographies
│   │   ├── element-enrichment.ts ← Extra element facts/stories
│   │   ├── elementAbundance.ts ← Element abundance data
│   │   ├── elementPhenomena.ts ← Element → phenomena mapping
│   │   ├── phenomena.ts        ← Science phenomena list
│   │   ├── phenomenon-stories.ts ← Detailed phenomena stories
│   │   ├── learnModules.ts     ← Learning module definitions
│   │   ├── composition/        ← Composition data (5 files)
│   │   │   ├── earthLayers.ts
│   │   │   ├── humanBody.ts
│   │   │   ├── plantComposition.ts
│   │   │   ├── sunComposition.ts
│   │   │   └── universeComposition.ts
│   │   └── i18n/               ← Translation strings
│   │       ├── id.ts           ← Indonesian translations
│   │       └── en.ts           ← English translations
│   │
│   ├── styles/
│   │   └── global.css          ← All CSS (custom properties, components, responsive)
│   │
│   └── utils/
│       └── (utility functions)
│
├── public/                     ← Static assets (copied to dist/)
├── dist/                       ← Build output (deployed to VPS)
└── docs/                       ← Documentation (11 files)
    ├── ARCHITECTURE.md         ← This file
    ├── PRD.md                  ← Product requirements
    ├── TRD.md                  ← Technical spec
    ├── EXECUTION_PLAN.md       ← Backend execution plan (legacy)
    ├── CONTENT_SPEC.md         ← Content specifications
    ├── CURRICULUM.md           ← Kurikulum Merdeka mapping
    ├── VISION.md               ← Product vision
    └── ...
```

---

## Component Architecture

```
main.ts
├── initTheme()           ← core/theme.ts
├── initAuth()            ← core/auth.ts (check token validity)
│   ├── NOT logged in → showGate()
│   │   └── AuthGate.ts   ← Login / Register / OTP pages
│   └── logged in → bootApp()
│       ├── Nav.ts         ← Top navigation bar
│       ├── initRouter()   ← core/router.ts
│       └── Routes:
│           ├── /                   → Dashboard.ts
│           ├── /table              → PeriodicTable.ts
│           ├── /element/:z         → ElementDetail.ts
│           ├── /explore            → Explore.ts
│           ├── /molecule-builder   → MoleculeBuilder.ts
│           ├── /composition/:id    → CompositionPage.ts
│           ├── /learn              → LearnList.ts
│           ├── /learn/:id          → LearnModule.ts
│           ├── /phenomena          → PhenomenaList.ts
│           ├── /phenomenon/:id     → PhenomenonStory.ts
│           ├── /history            → AtomHistory.ts
│           └── /discoverer/:id     → DiscovererStory.ts
│
└── Demo Mode (#/molecule-demo)
    └── MoleculeBuilder.ts (demoMode=true, restricted atoms)
```

### Component Pattern

Every component follows the same pattern:

```typescript
// components/MyComponent.ts
export function renderMyComponent(container: HTMLElement, params?: any) {
    // 1. Build HTML string
    const html = `<div class="my-component">...</div>`;
    container.innerHTML = html;

    // 2. Query DOM elements
    const btn = container.querySelector('.my-btn')!;

    // 3. Add event listeners
    btn.addEventListener('click', () => { ... });

    // 4. Optional: mount Three.js scene
    // 5. Optional: return cleanup function via setCleanup()
}
```

---

## Data Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  data/*.ts   │────▶│ components/  │────▶│    DOM       │
│  (static)    │     │ *.ts         │     │  (#app)      │
└──────────────┘     └──────┬───────┘     └──────────────┘
                            │
                     ┌──────▼───────┐
                     │  three/*.ts  │
                     │  (3D scenes) │
                     └──────┬───────┘
                            │
                     ┌──────▼───────┐
                     │  <canvas>    │
                     │  (WebGL)     │
                     └──────────────┘

Auth flow:
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  AuthGate.ts │────▶│  core/auth   │────▶│  SAINS API   │
│  (UI)        │     │  (fetch)     │     │  /api/auth/* │
└──────────────┘     └──────────────┘     └──────────────┘
```

### State Management

No global state manager. State is managed at:
1. **Module level** — variables in each component file
2. **localStorage** — auth token, theme preference, language
3. **URL hash** — current route (`#/element/6`)
4. **DOM** — UI state is in the DOM itself

---

## Routing

Hash-based SPA routing (`#/path`):

| Route | Component | Description |
|-------|-----------|-------------|
| `#/` | Dashboard | Home with stats and quick links |
| `#/table` | PeriodicTable | Interactive periodic table grid |
| `#/element/:z` | ElementDetail | Element info + 3D atom (z = atomic number) |
| `#/explore` | Explore | Browse/filter elements |
| `#/molecule-builder` | MoleculeBuilder | Build molecules in 3D |
| `#/composition/:id` | CompositionPage | "What's made of" stories |
| `#/learn` | LearnList | Learning modules list |
| `#/learn/:id` | LearnModule | Individual module |
| `#/phenomena` | PhenomenaList | Science phenomena |
| `#/phenomenon/:id` | PhenomenonStory | Phenomenon detail |
| `#/history` | AtomHistory | Element discovery timeline |
| `#/discoverer/:id` | DiscovererStory | Scientist biography |
| `#/molecule-demo` | MoleculeBuilder (demo) | ⚠️ Special: no auth, restricted |

---

## Three.js Integration

Three.js scenes are in `src/three/`:

| File | What it renders | Used by |
|------|----------------|---------|
| `atomScene.ts` | 3D atom model (nucleus + orbiting electrons) | `ElementDetail.ts` |
| `orbitalScene.ts` | Electron orbital shapes (s, p, d, f) | `ElementDetail.ts` |
| `moleculeScene.ts` | 3D molecule structures (ball & stick) | `MoleculeBuilder.ts` |

Each scene:
1. Creates a `THREE.Scene` + `PerspectiveCamera` + `WebGLRenderer`
2. Mounts into a container element
3. Runs animation loop (`requestAnimationFrame`)
4. Returns a cleanup/dispose function

**Memory management:** Every scene MUST be disposed on route change (via `setCleanup`). Failure to dispose = memory leak.

---

## Auth Flow

```
App loads
  ├── Check localStorage for token
  ├── Call /api/auth/me to validate
  │   ├── Valid → bootApp() (show full app)
  │   └── Invalid → showGate() (show login)
  │
  └── Login options:
      ├── Subscriber: email + password → POST /api/auth/login → token
      ├── Guest: email + code → POST /api/auth/guest-login → OTP sent
      │   └── Enter OTP → POST /api/auth/guest-verify → token
      └── Register: name + email + password → POST /api/auth/register
```

Token stored in `localStorage('sains_token')`, sent as `Authorization: Bearer <token>`.

---

## Paywall & Checkout Flow

> ⚠️ **STATUS:** Backend 100% done. Frontend access gate + PricingPage **BELUM diimplementasi**.
> Detail: `.agent/outputs/research/midtrans-checkout-paywall.md`

### 2 Flow Berbeda: Guest vs Subscriber

```
AuthGate.ts
  │
  ├── Tab "Guest" → Email + Code → (OTP) → Token
  │     → bootApp() → LANGSUNG akses ✅
  │     (Gak perlu access-check — token sudah di-limit oleh code expiry)
  │
  └── Tab "Subscriber"
        ├── "Login" → Email + Password → Token
        │     → bootApp() → GET /api/access-check
        │       → granted: true  → Full app ✅
        │       → granted: false → PricingPage (belum bayar / expired)
        │
        └── "Register" → Name + Email + Password → Auto-login → Token
              → bootApp() → GET /api/access-check
                → granted: false (is_active=FALSE)
                  → PricingPage → POST /api/checkout → Midtrans → Bayar
                    → Webhook → is_active=TRUE → Full app ✅
```

### Frontend Access Gate Logic (TODO)

```typescript
// Di bootApp(), setelah login berhasil:
const userType = tokenPayload.type; // 'guest' | 'subscriber' | 'admin'

if (userType === 'guest' || userType === 'admin') {
  showFullApp(); // Langsung akses
} else {
  // Subscriber → cek subscription
  const res = await fetch('/api/access-check?product=atomic', { headers: { Authorization } });
  const data = await res.json();
  if (data.data.granted) {
    showFullApp();
  } else {
    showPricingPage(); // Belum bayar / expired → tampilkan pilihan plan
  }
}
```

### Backend Endpoints (Sudah Jadi ✅)

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| `/api/plans` | GET | Public | List pricing plans |
| `/api/checkout` | POST | Bearer | Create Midtrans Snap transaction |
| `/api/midtrans/webhook` | POST | Signature | Handle payment callback |
| `/api/access-check` | GET | Bearer | Check subscription status |
| `/api/subscriptions/me` | GET | Bearer | List user's subscriptions |

### Keputusan Arsitektur
- **Gak ada free tier** — subscriber harus bayar, guest pake code
- **Register = langsung bayar** — satu flow, bukan pisah
- **`is_active` default FALSE** — TRUE setelah payment webhook
- **Gak ada email verification** — welcome email = verifikasi natural

---

## Demo Mode

Special isolated mode for landing page iframe embed:

- **URL:** `#/molecule-demo`
- **No auth required** — no login, no token
- **No router** — only MoleculeBuilder renders
- **No Nav** — no navigation bar
- **Restricted atoms:** Only H, O, C (3 out of 118)
- **Locked atoms** → clicking shows "Upgrade" overlay
- **Security:** Sandbox isolates demo from full app

---

## What's Safe to Edit

### ✅ Safe (isolated)

| Action | Impact |
|--------|--------|
| Edit any `components/*.ts` | Only affects that page |
| Edit any `data/*.ts` | Only affects data consumers |
| Add a new component | No side effects |
| Edit `global.css` classes | ⚠️ Check which components use the class |

### ⚠️ Careful (shared)

| Action | Impact |
|--------|--------|
| Edit `main.ts` | Affects app boot + all routes |
| Edit `core/router.ts` | Affects all navigation |
| Edit `core/auth.ts` | Affects login/logout everywhere |
| Edit `core/i18n.ts` | Affects all translated text |
| Edit `Nav.ts` | Visible on every page |
| Edit `global.css` custom properties (`--*`) | Affects entire app theme |

### ❌ Don't

| Action | Why |
|--------|-----|
| Edit `dist/` directly | Gets overwritten on build |
| Import from `data/` in `three/` | Keep 3D scenes pure — pass data via params |

---

## Quick Reference

### "Mau Edit X, File Apa?"

| Mau edit... | Files | Other files NOT affected |
|-------------|-------|------------------------|
| Periodic table grid | `PeriodicTable.ts`, `data/elements.ts` | Everything else ✅ |
| Element detail page | `ElementDetail.ts`, `three/atomScene.ts`, `three/orbitalScene.ts` | Everything else ✅ |
| Molecule builder | `MoleculeBuilder.ts`, `three/moleculeScene.ts`, `data/molecules.ts` | Everything else ✅ |
| Login/register UI | `AuthGate.ts`, `core/auth.ts` | Everything else ✅ |
| Navigation bar | `Nav.ts` | ⚠️ Visible on every page |
| Theme/colors | `global.css`, `core/theme.ts` | ⚠️ Affects entire app |
| Translations | `data/i18n/id.ts`, `data/i18n/en.ts`, `core/i18n.ts` | ⚠️ Affects all text |
| Add new page | Create `components/New.ts`, add route in `main.ts` | Nothing else |

### Dev Commands

```bash
# Dev server (hot reload)
cd atomic && npm run dev        # → http://localhost:5173

# Production build
cd atomic && npm run build      # → dist/

# Deploy
scp -r dist/* nunuadmin@103.181.143.73:/home/nunuadmin/sains-atomic-app/
# Then purge Cloudflare cache!
```

---

## Known Limitations

- [ ] **No lazy loading** — all components loaded upfront (OK for current size)
- [ ] **No service worker** — no offline support
- [ ] **No unit tests** — manual testing only
- [ ] **Global CSS** — all styles in one file (consider CSS modules if grows)
- [ ] **No error boundary** — runtime errors crash the whole app
