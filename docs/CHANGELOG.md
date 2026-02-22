# CHANGELOG — Atomic Interactive 3D Atom Explorer

Semua perubahan signifikan didokumentasikan di sini, urutan terbaru dahulu.

---

## [2.4.0] — 2026-02-22

### Mobile Responsiveness & Navigation
- **Hamburger Menu**: Navbar disembunyikan di layar < 680px, digantikan tombol `☰`
- **Slide-in Drawer**: Drawer animasi dari kiri berisi semua nav links + lang/theme toggle
- **Overlay Dismiss**: Klik di luar drawer / tombol ✕ untuk tutup, body scroll dikunci saat open
- **Lang/Theme sync**: Drawer lang & theme button sinkron dengan navbar desktop
- **Breakpoint tambahan**: Nav search disembunyikan di < 420px untuk maximal content

### Bilingual — Learn Modules (Phase 2)
- Tambah `titleEn?`, `bodyEn?` ke interface `LearningStep`
- Tambah `qEn?`, `optionsEn?`, `explanationEn?` ke interface `QuizQuestion`
- `LearnModule.ts` render logic: graceful fallback — jika terjemahan EN belum ada, tampil konten ID
- Modul `what-is-matter` (Level 0.1): **100% bilingual** — semua steps + quiz
- Modul lain: UI chrome bilingual, konten steps/quiz masih ID (ditambah bertahap)

---

## [2.3.0] — 2026-02-21

### Phase 3 — Orbital Models
- **`OrbitalScene.ts`**: Three.js particle cloud untuk visualisasi awan probabilitas s/p/d/f
  - Parse electron config string `1s² 2s² 2p⁶...` → array orbital definitions
  - Instanced particle geometry: 800–2000 titik per orbital
  - Warna berbeda per subculit: s=hijau, p=biru, d=violet, f=amber
  - Support drag rotate + wheel zoom
- **Toggle Bohr/Orbital**: Di panel kiri `ElementDetail.ts`, tombol toggle beralih antara:
  - `AtomScene` (Bohr — orbit lingkaran)
  - `OrbitalScene` (orbital — awan probabilitas kuantum)
- **Hint text dinamis**: Berubah sesuai model aktif
- **CSS toggle**: `.model-toggle`, `.model-toggle-btn`, `.model-toggle-btn--active`

### Phase 2 — Educational Modules (selesai)
- **`/learn`**: Halaman daftar modul dengan hero, stats, level grouping
- **`/learn/:slug`**: Halaman modul individual
- **10 Modul** across 6 Level:
  | Level | Slug | Topik |
  |-------|------|-------|
  | 0 | `what-is-matter` | Apa itu Materi? |
  | 0 | `atom-evidence` | Bukti Bahwa Atom Nyata |
  | 1 | `atom-parts` | Isi Dalam Atom |
  | 1 | `atomic-number` | Nomor Atom & Isotop |
  | 2 | `electron-shells` | Kulit Elektron & Level Energi |
  | 2 | `electron-config` | Membaca Konfigurasi Elektron |
  | 3 | `periodic-table-logic` | Logika Tabel Periodik |
  | 3 | `periodic-trends` | Tren Sifat Periodik |
  | 4 | `chemical-bonds` | Mengapa Atom Bergabung? |
  | 5 | `quantum-model` | Mekanika Kuantum & Orbital |
- **22 soal kuis interaktif** dengan feedback + penjelasan
- **Scroll progress bar** real-time
- **Navigation antar modul** prev/next dalam level
- **Deep link** ke halaman relevan (explore, element detail, phenomena)
- **Level color system**: setiap level punya warna unik
- Bilingual: UI chrome (hero, buttons, labels) penuh bilingual; konten step/quiz bertahap

---

## [2.2.0] — 2026-02-20

### Explore Page Rebuild
- **Periodic Table Integration**: Tabel periodik interaktif langsung di halaman `/explore`
- **Galeri Molekul**: Famous molecules (H₂O, CO₂, NaCl, C₆H₁₂O₆, DNA, dll) dengan deskripsi
- **Banner "Cara Baca Tabel Periodik"**: Panduan visual untuk pemula
- **Atom-Molekul Bridge**: Seksi yang menjelaskan hubungan antara atom dan molekul
- **Bilingual + Responsive**: Full ID/EN support

---

## [2.1.0] — 2026-02-17

### Anatomi Atom — 5 Tab Konteks
- **5 tab**: Human Body · Earth's Crust · Sun · Plants · Universe
- **Konten per tab**: komposisi elemen, insight eksistensial, persentase massa
- **Phenomena Banner**: 5 kartu fenomena terkait di setiap tab
- **Navbar link**: "Anatomi" ditambahkan ke navigasi utama

---

## [2.0.0] — 2026-02-16

### Kimia Lab — Chemistry Deduction Engine
- **Free Mode**: Pilih 2 elemen, lihat reaksi/produk yang mungkin terjadi
- **Challenge Mode**: 10 soal deduksi kimia dengan scoring
- **Deduction Engine**: rules-based lookup 50+ kombinasi elemen
- **Lab UI**: Terminal aesthetic dengan animasi

### Sejarah Atom — Cinematic Timeline
- **22 slide**: Democritus → Dalton → Thomson → Rutherford → Bohr → Quantum
- **Cinematic transitions**: Slide animasi dengan parallax
- **Bilingual**: Full ID/EN

---

## [1.5.0] — 2026-02-14

### Element Detail — Card Expansions
- **Card Penemu**: Foto (bila ada), bio singkat, quote, tahun penemuan — semua 118 elemen
- **Card Asal Usul Kosmik**: Big Bang · Stellar Fusion · Supernova · Neutron Star Merger · Artificial — semua 118
- **Card Keberadaan di Alam**: kelimpahan di kerak bumi, tubuh manusia, lautan
- **Card Fenomena Terkait**: link ke phenomena stories yang relevan

---

## [1.0.0] — 2026-02-10 (Initial Release Foundation)

### Core Features
- **Tabel Periodik Interaktif 3D**: 118 elemen, color-coded per kategori
- **Element Detail Page**: Bohr model 3D, data lengkap (massa, titik leleh, konfigurasi elektron, dll)
- **Navigasi prev/next**: Antar elemen tanpa kembali ke tabel
- **Bilingual EN/ID**: Toggle bahasa real-time
- **Dark/Light mode**: Persistent via localStorage
- **Responsive**: Desktop + tablet (mobile nav fixed di v2.4)
- **React-free**: Vanilla TypeScript + Three.js + Vite

### Data Coverage
- `nameId`, `desc`, `funFact`: semua 118 elemen, bahasa Indonesia
- Konfigurasi elektron, titik leleh/didih, massa atom, kategori, fase
- Phenomena: 27 fenomena, 6 kategori, dengan stories lengkap
