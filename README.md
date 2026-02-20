# ⚛️ Atomic — Interactive 3D Periodic Table

> Jelajahi 118 unsur kimia dengan visualisasi atom 3D yang interaktif. Dibangun untuk pelajar, mahasiswa, dan siapa saja yang ingin memahami struktur atom dengan cara yang menarik.

![Atomic Preview](docs/preview.png)

---

## 🚀 Fitur

- **Tabel Periodik Interaktif** — 118 unsur dengan kode warna per kategori
- **Visualisasi Atom 3D** — orbit elektron beranimasi menggunakan Three.js (drag untuk rotate, scroll untuk zoom)
- **Data Lengkap** — massa atom, konfigurasi elektron, titik leleh/didih, densitas, dll
- **Filter Kategori** — highlight per golongan unsur (Logam Alkali, Halogen, Gas Mulia, dst)
- **Live Search** — cari unsur berdasarkan nama, simbol, atau nomor atom
- **Bilingual** — Bahasa Indonesia & English
- **Dark / Light Mode**

## 📦 Tech Stack

| Tool | Versi | Fungsi |
|------|-------|--------|
| Vite | 7.x | Build tool & dev server |
| TypeScript | 5.x | Type safety |
| Three.js | 0.183 | 3D atom renderer |
| periodic-table | npm | Data 118 elemen |

## 🛠️ Instalasi & Menjalankan

```bash
# Install dependencies
cd atomic
npm install

# Jalankan dev server
npm run dev
# → http://localhost:5173

# Build production
npm run build
```

## 📁 Struktur Folder

```
atomic/
├── src/
│   ├── core/
│   │   ├── i18n.ts          # Internasionalisasi (ID/EN)
│   │   ├── router.ts        # Hash-based SPA router
│   │   └── theme.ts         # Dark/light theme
│   ├── data/
│   │   ├── categories.ts    # Definisi kategori unsur + warna
│   │   ├── elements.ts      # Data 118 elemen kimia
│   │   └── i18n/
│   │       ├── en.ts        # Label bahasa Inggris
│   │       └── id.ts        # Label bahasa Indonesia
│   ├── components/
│   │   ├── ElementDetail.ts # Halaman detail unsur
│   │   ├── Nav.ts           # Navbar + search dropdown
│   │   └── PeriodicTable.ts # Grid tabel periodik
│   ├── three/
│   │   └── atomScene.ts     # Three.js atom visualizer
│   ├── utils/
│   │   └── electronConfig.ts # Konfigurasi kulit elektron
│   ├── styles/
│   │   └── global.css       # Design system & CSS
│   └── main.ts              # Entry point
├── docs/                    # Dokumentasi
├── index.html
├── package.json
└── tsconfig.json
```

## 🗺️ Roadmap

Lihat [PRD.md](docs/PRD.md) untuk detail lengkap.

**Phase 1 (Current):** Tabel periodik interaktif + 3D atom visualizer  
**Phase 2:** Materi edukasi untuk pemula step-by-step  
**Phase 3:** 3 level animasi atom (Simple → Intermediate → Advanced)

## 📖 Dokumentasi

- [PRD — Product Requirements](docs/PRD.md)
- [TRD — Technical Requirements](docs/TRD.md)
- [ERD — Data Structure](docs/ERD.md)
