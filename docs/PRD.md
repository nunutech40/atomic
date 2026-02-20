# PRD — Product Requirements Document
**Project:** Atomic — Interactive 3D Periodic Table & Atom Visualizer  
**Version:** 1.1  
**Date:** 2026-02-20  
**Status:** Phase 1 Complete · Phase 2 & 3 Planned

---

## 1. Latar Belakang & Tujuan

Atomic dibuat untuk menjawab kebutuhan alat belajar kimia yang interaktif, visual, dan menarik — khususnya untuk pelajar SMA/mahasiswa Indonesia. Bukan sekadar referensi statis, tapi pengalaman eksplorasi yang membangun intuisi.

**Tujuan utama:**
1. Membuat eksplorasi tabel periodik menjadi pengalaman visual yang menyenangkan
2. Menjelaskan cara kerja atom dengan animasi 3D yang intuitif
3. Menyediakan jalur belajar bertahap dari pemula hingga tingkat lanjut

---

## 1.5 Filosofi Desain Emosional — "Bikin Hati Bergetar Dulu"

> **Prinsip inti:** Sebelum user belajar, mereka harus merasa **kagum**. Rasa kagum adalah pintu masuk ke semangat belajar yang tulus.

Bukan sekedar platform yang "bagus secara visual". Atomic harus menjadi pengalaman yang membuat user berpikir:
> *"Wait... atom itu segini menakjubkan? Gue mau tahu lebih."*

### 🌟 Dua Jenis "Wow" yang Berbeda

| Jenis Wow | Contoh | Dampak |
|-----------|--------|--------|
| **Wow Visual** | Animasi 3D yang keren | Kesan pertama bagus, tapi dangkal |
| **Wow Eksistensial** | "Setiap atom di tubuhmu pernah berada di dalam bintang." | Mengubah cara pandang tentang diri dan alam semesta |

**Atomic mengejar Wow Eksistensial.** Visual hanyalah kendaraan — isinya adalah kisah yang menggetarkan.

### 🗺️ The Journey — Dari Kagum ke Pemahaman

Narasi yang harus dirasakan user saat menjelajahi Atomic, secara berurutan:

```
1. KAGUM dulu
   "Materi yang gue pegang adalah 99.99% ruang kosong?!"
   → User berhenti sejenak, tidak percaya

2. PENASARAN terpicu
   "Kalau begitu, apa yang 'nyata' dari meja ini?"
   → Rasa ingin tahu muncul secara organik

3. PETUALANGAN dimulai
   "Oke, gue mau pahami ini dari nol."
   → User memilih path belajar dengan motivasi internal

4. KONEKSI personal
   "Oh jadi emas di cincinku berasal dari tabrakan bintang neutron."
   → Ilmu terasa relevan dan personal

5. MAKIN DALAM
   "Terus elektron itu gimana bisa ada di 'lapisan'?"
   → User ingin tahu lebih, bukan karena harus tapi karena mau

6. BERBAGI
   "Eh, tau gak sih kalau..." → User menceritakan ke teman
   → Pembelajaran menjadi bagian dari identitas mereka
```

### ✍️ Storytelling Principles untuk Setiap Halaman

**Home page:**
- Buka dengan fakta mengejutkan yang berputar (bukan tagline produk)
- Contoh: *"Tubuhmu tersusun dari 7 oktilion atom. Setiap satu pernah berada di dalam bintang."*
- Langsung tunjukkan: "Ini bukan hafalan — ini kisah tentang dirimu sendiri."

**Element detail page:**
- Setiap elemen punya **kisah penemuan** yang dramatis (bukan sekedar "ditemukan oleh X pada tahun Y")
- Contoh Radium: "Marie Curie bekerja selama bertahun-tahun di gudang bocor atapnya, memproses ton bijih uranium untuk mendapat segelintir gram. Ia tidak tahu itu akan membunuhnya perlahan."
- Contoh Emas: "Emas di cincinmu bukan dari Bumi. Ia lahir dari tabrakan dua bintang neutron, miliaran tahun sebelum tata surya terbentuk."

**Modul belajar:**
- Setiap modul dimulai dengan PERTANYAAN yang bikin penasaran, bukan penjelasan
- Contoh mengganti "Elektron ada di lapisan karena..." dengan "Mengapa elektron tidak jatuh ke nukleus? Ini pertanyaan yang membuat fisikawan pusing selama puluhan tahun."

**Molecule builder:**
- Bukan sekedar "H₂ + O = H₂O"
- Tapi: "Air yang kamu minum hari ini mungkin pernah melewati tubuh dinosaurus, 65 juta tahun lalu."

### 📐 Hierarki Emosi dalam UI

Setiap halaman harus menjawab 3 pertanyaan secara berurutan:
1. **"Kenapa ini penting buat gue?"** → Koneksi personal dulu
2. **"Ini keren banget, ada apa lagi?"** → Rasa ingin tahu
3. **"Oke, gue mau pelajari lebih dalam."** → Baru aksi belajar

Jika urutan ini terbalik (langsung ke materi tanpa membangun rasa kagum), user akan skip atau bosan.

---

## 2. Pengguna Target (User Persona)

| Persona | Profil | Kebutuhan Utama |
|---------|--------|----------------|
| **Pelajar SMA** | 15–18 tahun, belajar kimia dasar | Visual menarik, bahasa Indonesia, mudah dipahami |
| **Mahasiswa Kimia** | 18–22 tahun, butuh referensi | Data lengkap, konfigurasi elektron, sifat fisik/kimia |
| **Pengajar** | Guru/dosen | Alat bantu presentasi, animasi yang jelas |
| **Penasaran Umum** | Siapa pun | Eksplorasi ringan, fun, informatif |

---

## 3. Scope & Feature Matrix

### Phase 1 — Core Periodic Table (✅ Selesai)

| Feature | Status | Catatan |
|---------|--------|---------|
| Tabel periodik 118 elemen | ✅ | Grid 18 kolom, posisi akurat |
| Kode warna per kategori | ✅ | 11 kategori + legend filter |
| Tooltip hover | ✅ | Nama, simbol, massa |
| Live search | ✅ | By nama, simbol, nomor atom |
| Halaman detail unsur | ✅ | Data fisika & kimia lengkap |
| 3D atom visualizer (Model Bohr) | ✅ | Three.js, orbit elektron animasi |
| Drag to rotate + scroll to zoom | ✅ | Mouse & touch support |
| Prev/Next navigasi antar elemen | ✅ | Arrow nav di detail page |
| Label model atom | ✅ | Badge "⚛ Model Bohr" + hint |
| Badge elemen radioaktif | ✅ | Warning ☢ untuk elemen sintetis |
| Dark/Light theme | ✅ | Persisted ke localStorage |
| Bilingual ID/EN | ✅ | Toggle real-time |
| Konfigurasi elektron | ✅ | Semua 118 elemen |
| Kulit elektron (K–Q) | ✅ | Visual pills + 3D orbit |
| Total elektron summary | ✅ | Jumlah elektron + kulit |
| Graceful error handling | ✅ | Try/catch AtomScene, fallback UI |

---

---

### 🧪 Molecule Builder (🗓️ Planned — Prioritas Tinggi)

> **Konsep:** Halaman baru `/molecule` di mana user bisa **drag & drop atom** untuk membentuk molekul. Jika kombinasi atom yang dipilih cocok dengan molekul nyata, sistem otomatis menampilkan nama, info, dan visualisasi 3D molekulnya.

**Fitur Detail:**
| Fitur | Deskripsi |
|-------|-----------|
| Atom picker | Search atau pilih atom dari tabel periodik mini |
| Mixing area | Chips atom yang bisa ditambah/dikurangi (H×2, O×1, dst) |
| Auto-detect | Cocokkan komposisi dengan ~40 molekul yang dikenal |
| Hasil valid | Tampilkan nama, rumus, kategori, deskripsi molekul |
| Hasil tidak dikenal | Tampilkan "Kombinasi tidak dikenal" + tetap izinkan eksplorasi |
| 3D Molecule Scene | Visualisasi Three.js: atom (sphere berwarna CPK) + bond (silinder) |
| Info molekul | Shape, jenis ikatan, sifat fisik, fun fact |
| Contoh cepat | Tombol shortcut: "Coba Air", "Coba CO₂", "Coba Garam" |

**Contoh molekul yang dikenali:** H₂O, CO₂, O₂, N₂, NH₃, CH₄, NaCl, HCl, H₂O₂, C₂H₅OH, CO, H₂SO₄, NaOH, O₃, C₂H₂, CaCO₃, NO₂, SO₂, Fe₂O₃, dan ~20 lainnya.

**Route:** `/molecule`  
**File baru yang dibutuhkan:**
- `src/data/molecules.ts` — database ~40 molekul + 3D posisi atom
- `src/three/moleculeScene.ts` — Three.js renderer untuk molekul
- `src/components/MoleculeBuilder.ts` — UI builder

---

### 🏠 Home Page Redesign (🗓️ Planned)

> **Konsep:** Halaman utama tidak lagi hanya tabel periodik. Ada **hub navigasi** di atas dengan card ke semua tool yang tersedia.

**Layout yang direncanakan:**
```
┌─────────────────────────────────────────────┐
│  HERO: "Atomic — Jelajahi Kimia"            │
│  subtitle + animasi partikel                 │
├─────────────────────────────────────────────┤
│  TOOL CARDS (3 kolom):                       │
│  [🔬 Tabel Periodik]  [⚗️ Bangun Molekul]   │
│  [📚 Belajar Kimia]   [🧪 Lab Virtual*]     │
│  * = coming soon                             │
├─────────────────────────────────────────────┤
│  TABEL PERIODIK (tetap ada di bawah)        │
└─────────────────────────────────────────────┘
```

**File yang dimodifikasi:**
- `src/components/PeriodicTable.ts` — tambahkan hub section di atas tabel
- `src/styles/global.css` — CSS untuk hero, tool cards

---

### Phase 2 — Edukasi Pemula (🗓️ Planned)

> **Konsep:** Sebelum masuk ke tabel periodik yang kompleks, pemula perlu membangun fondasi. Setiap topik = modul mandiri dengan animasi + narasi + cek pemahaman.
> Lihat detail lengkap kurikulum di: [`docs/CURRICULUM.md`](./CURRICULUM.md)

**Analisis Pre-requisite — Apa yang dibutuhkan pemula:**

Seorang pemula tanpa background kimia yang masuk ke Atomic Phase 1 akan kebingungan karena perlu memahami konsep-konsep ini terlebih dahulu:

| # | Topik | Konsep Kunci | Animasi yang Dibutuhkan |
|---|-------|-------------|------------------------|
| 1 | **Apa itu Materi?** | Materi tersusun dari atom, atom tersusun dari partikel | Zoom-in dari benda ke atom |
| 2 | **Proton, Neutron, Elektron** | 3 partikel pokok, muatan, massa relatif | 3D atom sederhana bisa diklik per partikel |
| 3 | **Nomor Atom & Nomor Massa** | Z = proton, A = proton + neutron | Animasi hitung partikel dalam nukleus |
| 4 | **Mengapa Atom Stabil?** | Balans muatan positif-negatif | Animasi tarik-menarik muatan |
| 5 | **Kulit Elektron (Bohr)** | Elektron hanya boleh ada di level tertentu | Animasi elektron naik/turun kulit |
| 6 | **Cara Menulis Konfigurasi** | 2, 8, 18, 32 per kulit — Aturan Aufbau | Step-by-step pengisian kulit |
| 7 | **Valensi & Reaktivitas** | Elektron terluar menentukan sifat kimia | Highlight kulit terluar |
| 8 | **Golongan & Periode** | Kolom = valensi sama, baris = jumlah kulit | Animasi pengelompokan tabel |
| 9 | **Sifat Periodik Dasar** | Tren jari-jari, elektronegativitas | Heatmap visual di tabel |
| 10 | **Ikatan Kimia Intro** | Mengapa atom bergabung (valensi 8) | Animasi 2 atom berbagi elektron |

**Format setiap modul:**
- ⏱ Durasi baca: ~3–5 menit
- 🎬 Animasi interaktif (Canvas 2D atau Three.js ringan)
- 📖 Narasi step-by-step dalam bahasa awam
- ✅ Mini quiz 2–3 soal (multiple choice)
- 🔗 Link "Lihat di Tabel Periodik" ke elemen relevan

**Route:** `/learn` → daftar topik | `/learn/:slug` → konten modul

---

### Phase 3 — Multi-Level Atom Visualizer (🗓️ Planned — After Phase 2)

> **Konsep:** Di halaman detail setiap elemen, user bisa switch antara 3 representasi atom sesuai level pemahamannya.

| Level | Nama Model | Deskripsi Visual | Target Pengguna | Status |
|-------|-----------|-----------------|----------------|--------|
| **1** | ⚛ **Model Bohr** | Orbit lingkaran 2D-like, kulit K/L/M/... | Pemula, SMA | ✅ Sudah ada |
| **2** | 🌫 **Model Orbital** | Lobus s/p/d/f, awan probabilitas per orbital | Mahasiswa | 🗓️ Planned |
| **3** | 🌀 **Model Kuantum** | Density plot fungsi gelombang ψ², angka kuantum | Advanced/Riset | 🗓️ Planned |

**Detail per level:**

**Level 2 — Model Orbital:**
- Visualisasi bentuk orbital: s (bola), p (dumbbell), d (cloverleaf), f (kompleks)
- User bisa klik orbital individual untuk highlight
- Label n, l, ml per orbital
- Implementasi: `THREE.LatheGeometry` / custom shader untuk lobe

**Level 3 — Model Kuantum:**
- Particle system untuk visualisasi awan probabilitas
- Slider untuk set bilangan kuantum (n, l, ml)
- Color gradient intensity = probabilitas keberadaan elektron
- Implementasi: custom WebGL shader / `THREE.Points` dengan density function

**UI switch:** Toggle pill `[Bohr] [Orbital] [Kuantum]` di atas canvas

---

## 4. Improvement Struktural yang Diidentifikasi

Dari review Phase 1, beberapa hal yang bisa ditingkatkan:

| Area | Masalah | Solusi |
|------|---------|--------|
| **Data** | `nameId` (nama Indonesia) kosong untuk mayoritas elemen | Tambahkan terjemahan nama unsur dalam ID |
| **Visualisasi** | Model Bohr tidak realistis untuk elemen berat (orbital s/p/d/f tercampur) | Label disclaimer + Link ke Phase 3 |
| **Konten** | Field `desc` kosong hampir semua elemen | Tambahkan deskripsi singkat per elemen |
| **Navigasi** | Tidak ada breadcrumb atau "elemen terkait" | Tambahkan "Satu golongan" / "Satu periode" |
| **Aksesibilitas** | Keyboard navigation di tabel belum ada | `tabIndex`, `onKeyDown` per cell |
| **Mobile** | Detail page kurang optimal di layar kecil | Responsive layout improvement |
| **Fun facts** | Tidak ada | Tambahkan 1 fakta menarik per elemen |

---

## 5. Non-Functional Requirements

| Aspek | Target | Status |
|-------|--------|--------|
| Performance | First paint < 1.5s, animasi 60fps | ✅ |
| Kompatibilitas | Chrome, Firefox, Safari (2 versi terakhir) | ✅ |
| Responsive | Desktop, tablet, mobile | Partial |
| Aksesibilitas | WCAG AA contrast | ✅ |
| Bahasa | Bahasa Indonesia (default) + English | ✅ |
| Error handling | Zero white screen untuk 118 elemen | ✅ |

---

## 6. Out of Scope (v1.x)

- Login/user account
- Progress tracking & quiz score tersimpan
- Backend/database/API
- Mobile app native
- Simulasi reaksi kimia / stoikiometri

---

## 7. Success Metrics

| Metrik | Target | Status |
|--------|--------| -------|
| Zero crash untuk semua 118 elemen | ✅ done | ✅ |
| Animasi 3D berjalan di semua elemen | ✅ done | ✅ |
| Navigasi prev/next lancar | ✅ done | ✅ |
| Elemen radioaktif ditandai jelas | ✅ done | ✅ |
| Phase 2: 10 modul edukasi tersedia | 🗓️ | — |
| Phase 3: 3 level visualisasi | 🗓️ | — |
