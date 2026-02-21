# ⚛️ Atomic — Interactive 3D Periodic Table

> Jelajahi 118 unsur kimia dengan visualisasi 3D interaktif, kisah penemu, asal usul kosmik, fenomena atom, dan galeri molekul. Dibangun untuk pelajar, mahasiswa, dan siapa saja yang ingin memahami sains dengan cara yang menggerakkan hati.
>
> **Storytelling style: Zack Snyder + Christopher Nolan** — setiap cerita dimulai dari drama manusia, diakhiri dengan ironi kosmik yang mengusik pikiran.

---

## ✨ Fitur (Phase 1 — Selesai)

### 🔬 Explore & Tabel Periodik
- **Tabel Periodik 118 Elemen** — grid 18 kolom, posisi akurat, kode warna 11 kategori
- **Live Search** — cari by nama, simbol, atau nomor atom
- **Filter Kategori** — highlight per golongan (Logam Alkali, Halogen, Gas Mulia, dll)
- **Cara Baca Tabel** — banner interaktif yang menjelaskan struktur tabel periodik
- **Galeri Molekul 3D** — H₂O, CO₂, DNA, kafein, glukosa, dan banyak lagi

### ⚛️ Detail Elemen
- **3D Atom Visualizer** — Model Bohr dengan orbit elektron animasi (Three.js)
- **Drag to Rotate + Scroll to Zoom** — mouse & touch support
- **Data Lengkap** — massa, konfigurasi elektron, titik leleh/didih, densitas, dll
- **Card Penemu** — foto, biografi, link Wikipedia per elemen
- **Card Asal Usul Kosmik** — kisah nukleosintesis per elemen (Big Bang, supernova, kilonova)
- **Navigasi Prev/Next** — keyboard arrow support

### 🌌 Konten Edukasi
- **Sejarah Atom** — 22 slide cinematic, 6 babak (Democritus → Schrödinger)
- **Fenomena Atom** — 27 fenomena, 6 kategori (Nuklir, Kuantum, Sehari-hari, Kosmik, Kehidupan, Fiksi & Sains)
- **Story per Fenomena** — narasi mendalam dengan animasi CSS
- **Kisah Penemu** — halaman storytelling per elemen

### 🛠️ General
- **Bilingual** — Bahasa Indonesia & English, toggle real-time
- **Dark / Light Mode** — persisted ke localStorage
- **Kimia Lab** — molecule builder 3D mode bebas
- **Chemistry Deduction Engine** — deduksi kimia rule-based per kombinasi atom (bahaya, peringatan, menarik)

---

## 📦 Tech Stack

| Tool | Versi | Fungsi |
|------|-------|--------|
| Vite | 7.x | Build tool & dev server |
| TypeScript | 5.x | Type safety |
| Three.js | 0.183 | 3D atom & molecule renderer |

---

## 🛠️ Instalasi & Menjalankan

```bash
# Clone & install
cd atomic
npm install

# Dev server
npm run dev
# → http://localhost:5173

# Build production
npm run build
```

---

## 📁 Struktur Folder

```
atomic/
├── src/
│   ├── core/
│   │   ├── i18n.ts               # Internasionalisasi ID/EN
│   │   ├── router.ts             # Hash-based SPA router
│   │   └── theme.ts              # Dark/light theme
│   ├── data/
│   │   ├── elements.ts           # 118 elemen + desc, funFact, nameId
│   │   ├── element-enrichment.ts # Data tambahan per elemen
│   │   ├── categories.ts         # 11 kategori + warna
│   │   ├── discoverers.ts        # Data penemu (foto, bio, Wikipedia)
│   │   ├── origins.ts            # Asal usul kosmik per elemen
│   │   ├── phenomena.ts          # 27 fenomena atom
│   │   ├── phenomenon-stories.ts # Narasi lengkap per fenomena
│   │   ├── molecules.ts          # Galeri molekul 3D
│   │   └── i18n/
│   │       ├── en.ts             # Label bahasa Inggris
│   │       └── id.ts             # Label bahasa Indonesia
│   ├── components/
│   │   ├── Dashboard.ts          # Halaman utama scroll-driven
│   │   ├── Explore.ts            # Tabel periodik + galeri molekul
│   │   ├── ElementDetail.ts      # Halaman detail elemen
│   │   ├── DiscovererStory.ts    # Kisah penemu per elemen
│   │   ├── MoleculeBuilder.ts    # Kimia Lab — builder 3D
│   │   ├── PhenomenaList.ts      # Daftar fenomena
│   │   ├── PhenomenaStory.ts     # Story per fenomena
│   │   ├── AtomHistory.ts        # Sejarah atom — 22 slide
│   │   └── Nav.ts                # Navbar global
│   ├── three/
│   │   └── atomScene.ts          # Three.js Bohr Model
│   ├── utils/
│   │   └── electronConfig.ts     # Konfigurasi kulit elektron
│   ├── styles/
│   │   └── global.css            # Design system & semua CSS
│   └── main.ts                   # Entry point
├── docs/                         # Dokumentasi
│   ├── PRD.md                    # Product Requirements
│   ├── TRD.md                    # Technical Requirements
│   ├── CURRICULUM.md             # Kurikulum Phase 2
│   └── ...
├── .agent/
│   └── workflows/                # Workflow & roadmap
│       └── element-detail-roadmap.md
├── index.html
├── package.json
└── tsconfig.json
```

---

## 🗺️ Roadmap

Lihat [PRD.md](docs/PRD.md) untuk detail lengkap.

| Status | Item |
|--------|------|
| ✅ Done | Phase 1 — Core (tabel, detail, fenomena, sejarah, explore, dashboard) |
| ✅ Done | **Phenomena Stories** — 27 story narasi lengkap (Kehidupan + Fiksi & Sains) |
| ✅ Done | **Chemistry Deduction Engine** — Kimia Lab free mode |
| 🔨 Next | **Kimia Lab — Mode Tantangan** (challenge system, hint, feedback) |
| 🗓️ Planned | Card "Keberadaan di Alam" per elemen |
| 🗓️ Planned | Card "Fenomena Terkait" per elemen |
| 🗓️ Planned | Phase 2 — 10 Modul Edukasi Pemula (`/learn`) |
| 🗓️ Planned | Phase 3 — Multi-Level Visualizer (Bohr → Orbital → Kuantum) |

---

## 📖 Dokumentasi

- [PRD — Product Requirements](docs/PRD.md)
- [TRD — Technical Requirements](docs/TRD.md)
- [Backend & Subscription Plan](docs/BACKEND_PLAN.md)
- [Phenomena Stories — Dokumentasi Konten](docs/PHENOMENA_STORIES.md)
- [CURRICULUM — Kurikulum Phase 2](docs/CURRICULUM.md)
- [Element Detail Roadmap](.agent/workflows/element-detail-roadmap.md)
