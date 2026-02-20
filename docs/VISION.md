# VISION — Atomic: Platform Belajar Kimia Interaktif
**Version:** 1.0  
**Date:** 2026-02-20

---

## 🌟 Satu Kalimat

> **Atomic adalah tempat di mana kimia berhenti jadi hafalan dan mulai jadi petualangan.**

---

## 🎯 Masalah yang Diselesaikan

Belajar kimia hari ini punya dua masalah utama:

1. **Terlalu abstrak** — "konfigurasi elektron natrium adalah 2,8,1" — ini hafalan, bukan pemahaman
2. **Terlalu terpisah** — tabel periodik di buku, penjelasan di video lain, latihan soal di tempat berbeda

Atomic menyatukannya: **lihat, pahami, eksplorasi** — dalam satu tempat.

---

## 🗺️ Peta App — 5 Pilar

```
                        ┌──────────────┐
                        │   ⚛ ATOMIC   │
                        │   Platform   │
                        └──────┬───────┘
                               │
       ┌──────────┬────────────┼────────────┬──────────┐
       │          │            │            │          │
  ┌────▼────┐ ┌───▼───┐  ┌────▼────┐  ┌───▼────┐ ┌───▼────┐
  │🔬 Jelajah│ │🔬 Rinci│  │⚗️ Bangun│  │📚 Pelajar│ │🧪 Lab* │
  │ Tabel   │ │ Elemen │  │Molekul  │  │Kurikulum│ │Virtual │
  │Periodik │ │ Detail │  │Builder  │  │16 modul │ │        │
  └─────────┘ └────────┘  └─────────┘  └────────┘ └────────┘
   Phase 1 ✅  Phase 1 ✅   Planned       Planned    Future
```

---

## 📖 5 Pilar — Detail

### 1. 🔬 Jelajahi — Tabel Periodik Interaktif
**Route:** `/`  
**Status:** ✅ Done

Yang bisa user lakukan:
- Explore 118 elemen dalam grid visual berwarna
- Filter per kategori (logam alkali, halogen, gas mulia, dst)
- Search cepat by nama / simbol / nomor atom
- Hover tooltip: nama, massa, kategori
- Klik → masuk ke detail elemen

**Bedanya dari tabel periodik biasa:** kode warna + animasi hover + search + terintegrasi ke semua pilar lain

---

### 2. 🔬 Rinci — Element Detail
**Route:** `/element/:n`  
**Status:** ✅ Phase 1 done, Phase 1.5 in progress

Saat ini (Phase 1):
- 3D atom Model Bohr (orbit elektron animasi)
- Data fisika & kimia: massa, titik leleh/didih, densitas, EN, IE, dsb
- Konfigurasi elektron + kulit pills
- Navigasi prev/next elemen
- Badge Model Bohr + badge radioaktif untuk elemen sintetis

**Planned (Phase 1.5):**  
Tab system di right panel:
```
[Data ✅] [Deskripsi 🗓️] [Sejarah 🗓️]
```
- **Tab Deskripsi:** 2-3 kalimat sifat, kegunaan nyata, fun fact mengejutkan
- **Tab Sejarah:** Narasi siapa yang menemukan, di mana, bagaimana caranya, konteks zaman

**Planned (Phase 3):**  
Toggle model atom di atas canvas:
```
[⚛ Model Bohr] [🌫 Orbital] [🌀 Kuantum]
```

---

### 3. ⚗️ Bangun — Molecule Builder
**Route:** `/molecule`  
**Status:** 🗓️ Planned (Prioritas Tinggi)

Cara kerja:
1. User pilih atom (search atau klik tabel mini)
2. Set jumlah (H×2, O×1)
3. Tekan "Gabungkan" — sistem cocokkan dengan database ~40 molekul
4. Jika cocok: tampilkan nama, rumus, info, **3D visualisasi molekul** (atom sphere + bond silinder)
5. Jika tidak cocok: "Kombinasi belum dikenali" + tetap perlihatkan apa yang dibentuk

**Contoh yang bisa dibuat:**
- H₂ + O → H₂O (Air)
- C + O₂ → CO₂ (Karbon Dioksida)  
- Na + Cl → NaCl (Garam)  
- N + 3H → NH₃ (Amonia)
- C + 4H → CH₄ (Metana / gas alam)

**Koneksi ke pilar lain:** Tombol "Pelajari Ikatan Ini" → /learn/chemical-bonds

---

### 4. 📚 Pelajari — Kurikulum First Principles
**Route:** `/learn`, `/learn/:slug`  
**Status:** 🗓️ Planned (Phase 2)

**16 modul, 6 level** — dari "apa itu materi" sampai prinsip ketidakpastian Heisenberg.

Detail lengkap: [docs/CURRICULUM.md](./CURRICULUM.md)

Format setiap modul:
- Pertanyaan pemantik (bikin penasaran dulu)
- Animasi interaktif (visual dulu, teks kemudian)
- Narasi step-by-step bahasa awam
- Fun fact
- Mini quiz 2-3 soal
- Link ke tabel periodik / elemen relevan

---

### 5. 🧪 Lab — Virtual Lab *(Future)*
**Route:** `/lab`  
**Status:** 💭 Future concept

Ide:
- Simulasi reaksi kimia sederhana (campur A + B = lihat efek visual)
- Simulasi elektrolisis, titrasi
- Tidak perlu bahan kimia nyata, tidak ada risiko

---

## 🧭 User Journey

### Journey 1 — "Pelajar yang mau ujian besok"
```
Masuk home → Cari "Natrium" di search → Langsung ke detail Na
→ Lihat 3D atom → Tab Data → Catat sifat-sifatnya
→ Scrolling, baca konfigurasi elektron → Paham "2,8,1" bukan hafalan lagi
→ Selesai dalam 5 menit ✓
```

### Journey 2 — "Yang penasaran mulai dari nol"
```
Masuk home → Klik "Belajar Kimia" → Modul 0.1: Apa itu Materi?
→ Lihat animasi zoom-in ke atom → Wow! → Baca narasi
→ Selesai modul → Lanjut ke 0.2 → dst
→ Setelah beberapa sesi, klik ke tabel periodik → Sekarang paham konteksnya
```

### Journey 3 — "Yang eksploratif"
```
Masuk home → Lihat tabel periodik → "Wah ada 118 elemen... emas itu di mana?"
→ Klik Au → Lihat 3D atom emas, baca sejarah: "Emas berasal dari tabrakan bintang neutron!"
→ "Terus emas ini bisa gabung sama apa?" → Molecule Builder
→ Coba berbagai kombinasi → Temukan AuCl₃ → "Oh ini yang bikin emas larut"
→ Penasaran: kenapa Cl bisa gabung tapi O tidak? → Tab Periodik → Golongan 17 (halogen)
→ Deep dive ke Klorin → Loop lagi
```

---

## 🎨 Prinsip Desain

| Prinsip | Manifestasi |
|---------|-------------|
| **Visual First** | Animasi 3D selalu tampil pertama, teks di bawahnya |
| **Progressive Disclosure** | Tabel periodik → detail → history → molekul → kurikulum |
| **Connected** | Setiap fitur punya link ke fitur lain yang relevan |
| **Bilingual** | Bahasa Indonesia default (target market), English toggle |
| **Instant Access** | Tidak perlu login. Buka, langsung pakai. |
| **Dark by Default** | Nyaman untuk baca lama, visual 3D lebih dramatis |
| **Mobile OK** | Responsive, tapi desktop-first untuk 3D experience |

---

## 📐 Arsitektur Navigasi

```
NAVBAR (persisten di semua halaman)
├── Logo ⚛ Atomic → /
├── Search (global, cari elemen)  
├── [🔬 Tabel] [⚗️ Molekul] [📚 Belajar]  ← Nav links
├── Toggle Bahasa (ID/EN)
└── Toggle Tema (dark/light)

HOME (/)
├── Hero strip (judul + tagline)
├── Tool Cards
│   ├── 🔬 Tabel Periodik (active)
│   ├── ⚗️ Bangun Molekul → /molecule
│   ├── 📚 Belajar Kimia → /learn  
│   └── 🧪 Lab Virtual (soon)
└── Tabel Periodik (scrollable, full width)

ELEMENT DETAIL (/element/:n)
├── Top bar: ← Back | ← Prev Element | Next Element →
├── Left panel: 3D Atom + Shell pills + Config
└── Right panel: Tabs [Data] [Deskripsi] [Sejarah]

MOLECULE BUILDER (/molecule)
├── Left: Atom picker + selection chips
├── Center: 3D molecule visualization  
└── Right: Molecule info (name, formula, bonds, desc)

LEARN (/learn)
├── Module map (progress visual)
└── /learn/:slug → module content

```

---

## 📅 Roadmap Prioritas

| Sprint | Fitur | Estimasi |
|--------|-------|---------|
| **Sprint 1 (now)** | Home Redesign (hub + hero + tool cards) | 2–3 jam |
| **Sprint 2** | Tab Deskripsi + Sejarah di element detail | 4–5 jam |
| **Sprint 3** | Molecule Builder (data + UI + 3D) | 1–2 hari |
| **Sprint 4** | Isi konten Tier 1: 15 elemen populer | 1–2 hari |
| **Sprint 5** | Learn: routing + 3 modul pertama | 2–3 hari |
| **Sprint 6** | Isi konten Tier 2: 25 elemen | 2–3 hari |
| **Sprint 7** | Learn: sisa 13 modul | 1 minggu |
| **Sprint 8** | Phase 3: Multi-level atom visualizer | 3–5 hari |

**MVP yang bisa dipakai publik:** setelah Sprint 4 (ada konten deskripsi dan sejarah, ada molecule builder dasar)
