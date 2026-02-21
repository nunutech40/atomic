# PRD — Product Requirements Document
**Project:** Atomic — Interactive 3D Periodic Table & Atom Visualizer  
**Version:** 1.3  
**Date:** 2026-02-21  
**Status:** Phase 1 Complete · Dashboard Rebuild In Progress · Phase 2 & 3 Planned

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
| **Halaman Fenomena Atom** | ✅ | Route `/phenomena`, komponen PhenomenaList |
| **6 Kategori Fenomena** | ✅ | Nuklir, Kuantum, Sehari-hari, Kosmik, Kehidupan, Fiksi & Sains |
| **27 Entri Fenomena** | ✅ | 16 lama + 5 kategori Kehidupan + 6 kategori Fiksi & Sains |
| **Filter kategori tab** | ✅ | Filter real-time, count per kategori |
| **Storyteller modal / detail view** | ✅ | Narasi lengkap per fenomena |

---

---

## 🆕 Backlog — Sprint Aktif (2026-02-21)

> Semua item di bawah ini sudah disetujui dan akan dikerjakan berurutan.

---

### 🏠 A. Beranda Rebuild — "First Principle Experience" (🔨 In Progress)

> **Konsep:** Dashboard bukan lagi tabel periodik. Ini adalah **scrolling landing page cinematic** yang mengajarkan atom dari first principle, bottom-up, dan membuat orang yang baru masuk langsung **"WAUW"**.
>
> Patokan: Feynman (atomic hypothesis) + Sagan (koneksi personal) + neal.fun (scroll-driven perspektif baru).

**Struktur halaman (scroll-driven, 5 chapter):**

| # | Chapter | Isi | Visual |
|---|---------|-----|--------|
| 0 | **HERO** | Atom 3D berputar gede, full screen | Three.js atom rotating |
|   |  | *"Ini satu atom Carbon. Tubuhmu tersusun dari 7 oktilion seperti ini."* | Text fade-in dramatis |
| 1 | **Sekecil apa?** | Scale comparison scroll-driven | Slider: rambut → sel → bakteri → atom |
|   |  | *"1 rambut = 1 juta atom berjajar"* | |
| 2 | **Apa isinya?** | Klik bongkar atom: nukleus → proton+neutron+elektron | Interaktif CSS/3D |
|   |  | *"99.9999999% atom adalah ruang kosong"* | |
| 3 | **Apa yang membuatmu, kamu?** | Ganti jumlah proton → elemen berubah live | Proton counter interactive |
|   |  | *"1 proton membedakan besi dari kobalt"* | |
| 4 | **Dari mana asalnya?** | Big Bang → stellar fusion → neutron star collision | Chain animasi |
|   |  | *"Atom emas di cincinmu lahir dari tabrakan bintang neutron"* | |
|   |  | **CTA: ["Lihat perjalanan penemuannya →"]** → membuka `/atom-history` | Tombol ke History page |
| 5 | **CTA Final** | Jelajahi 118 Elemen · Bangun Molekul | Button cards |

**File yang dibutuhkan:**
- `src/components/Dashboard.ts` — komponen baru (replace PeriodicTable sebagai home)
- `src/styles/global.css` — tambah section scroll-driven styles
- Update router di `src/main.ts`

**Aturan penting:**
- History page **TIDAK** ada di top nav — hanya accessible dari section 4 dashboard
- CTA history = tombol inline di section "Dari mana asalnya"

---

### 📜 B. Sejarah Atom — Cinematic History Page (🗓️ Setelah Dashboard)

> **Konsep:** Bukan timeline membosankan. **Setiap era = satu babak film** dengan gaya storytelling Nolan/Snyder — opening dramatis, konflik, twist, dan reveal.

**Route:** `/atom-history` (tidak di top nav, hanya accessible dari Beranda section 4)

**Struktur — 6 Babak:**

| Babak | Tokoh | Era | Twist/Konflik | Visual Model |
|-------|-------|-----|---------------|---------------|
| **Prolog** | — | — | *"2400 tahun debat tentang sesuatu yang tak terlihat."* | Hitam total, text fade |
| **I** | Democritus | 430 SM | Aristoteles menolak → ide terkubur 2000 tahun | Partikel solid CSS |
| **II** | Dalton | 1803 | Ilmu akhirnya bicara. Dalton buta warna — ironisnya… | Billiard ball model |
| **III** | Thomson | 1897 | Atom bisa dibagi. "Plum pudding" — tapi muridnya sendiri yang menghancurkannya | Plum pudding CSS |
| **IV** | Rutherford | 1911 | Gold foil experiment. Semua salah. Atom adalah ruang kosong. | Alpha particle bounce anim |
| **V** | Bohr | 1913 | Elektron melompat-lompat. Berhasil untuk hidrogen — tapi gagal di atom lain | Planetary orbit 2D anim |
| **VI** | Schrödinger + Heisenberg | 1926 | *"Kamu tidak bisa tahu di mana elektron. Ini bukan ketidaktahuan — ini realitas."* | Probability cloud canvas |
| **Epilog** | — | Kini | Atom masih menyimpan misteri | CTA → Jelajahi 118 Elemen |

**Gaya visual Nolan/Snyder:**
- Warna per chapter: desaturated, high contrast, hampir monokrom
- Opening quote di layar hitam total sebelum reveal visual
- Progress bar timeline horizontal di atas (00:00 → sekarang)
- Transisi antar chapter: fade to black → chapter berikutnya
- Setiap chapter punya **konflik** — bukan sekadar "ditemukan oleh X"
- Back button → kembali ke Beranda

**File yang dibutuhkan:**
- `src/components/AtomHistory.ts` — komponen baru
- Update router di `src/main.ts`

---

### 🔬 C. Eksplorasi Rebuild — Tabel + Molekul Terkenal (🗓️ Setelah History)

> **Konsep:** Tab "Eksplorasi" memuat tabel periodik DAN galeri molekul terkenal dalam satu halaman.

**Route:** `/explore` (rename dari `/` yang sebelumnya tabel)

**Struktur:**
```
┌──────────────────────────────────────────────┐
│  BANNER: "Cara membaca tabel periodik"        │
│  (group, period, color legend explained)      │
├──────────────────────────────────────────────┤
│  TABEL PERIODIK 118 elemen (existing)        │
├──────────────────────────────────────────────┤
│  ── DIVIDER ──                                │
│  "Dari atom ke molekul" (penjelasan singkat)  │
├──────────────────────────────────────────────┤
│  MOLEKUL TERKENAL — Grid cards               │
│  H₂O, CO₂, O₂, NaCl, CH₄, DNA, C₆H₁₂O₆    │
│  Etanol, Aspirin, Kafein, Ozon, dll          │
│  Click → detail + 3D render di sidebar       │
└──────────────────────────────────────────────┘
```

**Molekul yang harus ada:** H₂O, CO₂, O₂, N₂, NaCl, CH₄, NH₃, C₂H₅OH, O₃, H₂O₂, C₆H₁₂O₆ (gula), C₈H₁₀N₄O₂ (kafein), Aspirin (C₉H₈O₄)

---

### ⚗️ D. Kimia Lab Standalone (🗓️ Setelah Eksplorasi)

> **Konsep:** Pisah dari tabel. Fokus pure pada pengalaman "seperti anak kimia belajar" — interaktif, langsung dipraktekkan, soal-soal gabung atom.

**Route:** `/molecule` (tetap, sudah ada)

**Penambahan fitur:**
- Tambah lebih banyak molekul ke database (termasuk organik kompleks)
- Mode "Tantangan": dikasih nama molekul → user harus merakit sendiri
- Penjelasan lebih dalam per molekul (use, bahaya, fun fact)
- Hint system (untuk mode tantangan)

---

### 📡 E. Fenomena (✅ Sudah Oke — Hold)

> Fenomena sudah berjalan baik. Tidak ada perubahan yang diprioritaskan saat ini.

---

### 🧪 F. Molecule Builder — Status Sekarang (✅ Selesai Phase 1)

> Fitur sudah berjalan: pilih atom, gabungkan, lihat 3D, info molekul. Penambahan molekul dan mode tantangan masuk ke item D di atas.

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
- Backend/database/API (saat ini static SPA)
- Mobile app native
- Simulasi reaksi kimia / stoikiometri
- **Subscription / payment gateway** → butuh backend (lihat catatan di bawah)

> **Catatan Monetisasi (jika direncanakan):**  
> Karena Atomic saat ini adalah static SPA tanpa database, sistem subscription **tidak dapat diimplementasikan secara aman** di sisi client saja. Opsi yang direkomendasikan:
> - **Lemon Squeezy / Paddle** — payment gateway dengan built-in license key management (tidak perlu backend sendiri)
> - **Supabase** — PostgreSQL + Auth + RLS, gratis tier cocok untuk MVP
> - **Pola rekomendasi:** User bayar → dapat license key → divalidasi via API call ke payment provider → status di localStorage (atau JWT singkat)
> - **Jangan** simpan status premium hanya di localStorage (mudah dimanipulasi)

---

## 7. Success Metrics

| Metrik | Target | Status |
|--------|--------| -------|
| Zero crash untuk semua 118 elemen | ✅ done | ✅ |
| Animasi 3D berjalan di semua elemen | ✅ done | ✅ |
| Navigasi prev/next lancar | ✅ done | ✅ |
| Elemen radioaktif ditandai jelas | ✅ done | ✅ |
| Halaman Fenomena — 27 fenomena, 6 kategori | ✅ done | ✅ |
| Kategori Kehidupan (5 fenomena komposisi atom) | ✅ done | ✅ |
| Kategori Fiksi & Sains (6 fenomena) | ✅ done | ✅ |
| PhenomenaList komponen + filter tab | ✅ done | ✅ |
| Phase 2: 10 modul edukasi tersedia | 🗓️ | — |
| Phase 3: 3 level visualisasi | 🗓️ | — |
