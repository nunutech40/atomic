# PRD — Product Requirements Document
**Project:** Atomic — Interactive 3D Periodic Table & Atom Visualizer  
**Version:** 1.4  
**Date:** 2026-02-21  
**Status:** Phase 1 Complete · Bilingual Complete · Next: Dashboard Rebuild + Explore Rebuild

---

## 1. Latar Belakang & Tujuan

Atomic dibuat untuk menjawab kebutuhan alat belajar kimia yang interaktif, visual, dan menarik — khususnya untuk pelajar SMA/mahasiswa Indonesia. Bukan sekadar referensi statis, tapi pengalaman eksplorasi yang membangun intuisi dari bawah ke atas.

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

### ✅ Phase 1 — Core Periodic Table (Selesai)

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
| Konfigurasi elektron | ✅ | Semua 118 elemen |
| Kulit elektron (K–Q) | ✅ | Visual pills + 3D orbit |
| Total elektron summary | ✅ | Jumlah elektron + kulit |
| Graceful error handling | ✅ | Try/catch AtomScene, fallback UI |
| `nameId` (nama Indonesia) | ✅ | Semua 118 elemen |
| `desc` & `funFact` per elemen | ✅ | Semua 118 elemen |
| Keyboard navigation | ✅ | ArrowLeft/Right di detail page |
| Related elements section | ✅ | "Satu golongan" / "Satu periode" |
| **Halaman Fenomena Atom** | ✅ | Route `/phenomena`, komponen PhenomenaList |
| **27 Fenomena, 6 Kategori** | ✅ | Nuklir, Kuantum, Sehari-hari, Kosmik, Kehidupan, Fiksi & Sains |
| **Filter kategori tab** | ✅ | Filter real-time, count per kategori |
| **Storyteller slide per fenomena** | ✅ | Narasi lengkap, animasi CSS per fenomena |
| **Sejarah Atom (AtomHistory)** | ✅ | Route `/atom-history`, 22 slide cinematic deck |
| **6 Babak sejarah atom** | ✅ | Democritus → Dalton → Thomson → Rutherford → Bohr → Schrödinger |
| **Discoverer Story** | ✅ | Kisah penemu per elemen, route `/discoverer/:sym` |
| **Bilingual ID/EN** | ✅ | Toggle real-time, semua komponen bilingual |

---

## 4. Arsitektur Navigasi Saat Ini

```
/ (Dashboard)          → halaman utama
/explore               → tabel periodik + molekul
/element/:n            → detail elemen
/discoverer/:sym       → kisah penemu
/molecule              → kimia lab (molecule builder)
/phenomena             → daftar fenomena
/phenomena/:id         → story per fenomena
/atom-history          → sejarah atom (dari dashboard section 4)
```

**Nav bar:** Dashboard · Explore · Kimia Lab · Fenomena

---

## 5. Backlog Sprint Aktif

> Urutan prioritas sudah disetujui. Kerjakan berurutan dari A ke D.

---

### 🏠 A. Dashboard Rebuild — "First Principle Experience" (🔨 Prioritas 1)

> **Konsep inti:** Dashboard adalah halaman utama. Bukan tabel periodik. Ini adalah **scrolling landing page cinematic** yang mengajarkan tentang atom dari **first principle, bottom-up**. User masuk → langsung "WAUW ini atom" → lalu perlahan-lahan memahami: apa itu atom, seberapa kecil, apa isinya, dari mana asalnya.
>
> Analogi: mirip landing page produk, tapi yang dijual adalah **rasa kagum terhadap atom**.

**Struktur halaman (scroll-driven, 5+ section):**

| # | Section | Isi | Visual |
|---|---------|-----|--------|
| **Hero** | Atom 3D berputar, **full screen, gede** | *"Ini satu atom Carbon."* | Three.js rotating atom, dramatis |
| **1** | **Sekecil apa?** | Scale comparison scroll-driven | Slider: rambut → sel → bakteri → virus → atom |
|  |  | *"1 rambut manusia = 1 juta atom berjajar."* |  |
| **2** | **Apa isinya?** | Bongkar atom: nukleus → proton + neutron + elektron | Interaktif, click-to-reveal |
|  |  | *"99.9999999% atom adalah ruang kosong."* |  |
| **3** | **Apa yang membuatmu, kamu?** | Ganti jumlah proton → elemen berubah live | Proton counter interaktif |
|  |  | *"1 proton membedakan besi dari kobalt."* |  |
| **4** | **Dari mana asalnya?** | Big Bang → stellar fusion → neutron star collision | Chain animasi CSS/Canvas |
|  |  | *"Atom emas di cincinmu lahir dari tabrakan bintang neutron."* |  |
|  |  | **CTA inline: "Lihat sejarah penemuannya →"** → `/atom-history` |  |
| **5** | **CTA Final** | Jelajahi 118 Elemen · Bangun Molekul · Fenomena | Card buttons |

**Prinsip desain:**
- Atom 3D di hero harus **gede, dramatis, full screen** — ini momen "WAUW"
- Setiap section scroll = satu insight baru yang membangun dari section sebelumnya (bottom-up)
- Bukan storytelling fiksi — ini **first principle science yang disampaikan sinematik**
- AtomHistory tetap tidak ada di nav, hanya accessible dari Section 4

**File:** `src/components/Dashboard.ts`, `src/styles/global.css`

---

### 🔬 B. Explore Rebuild — Tabel + Molekul (🗓️ Setelah Dashboard)

> **Konsep:** Halaman `/explore` memuat tabel periodik **DAN** galeri molekul terkenal dalam satu halaman yang continuous. Di atas ada penjelasan cara baca tabel, di bawah ada seksi molekul dengan penjelasan.

**Struktur:**

```
┌──────────────────────────────────────────────┐
│  BANNER: Cara Membaca Tabel Periodik          │
│  (group, period, warna, cara baca explained) │
├──────────────────────────────────────────────┤
│  TABEL PERIODIK 118 elemen (existing)        │
├──────────────────────────────────────────────┤
│  ── DIVIDER ──                               │
│  Penjelasan: "Dari Atom ke Molekul"          │
│  (cara atom bergabung bbentuk molekul)       │
├──────────────────────────────────────────────┤
│  MOLEKUL TERKENAL — Grid cards               │
│  H₂O, CO₂, O₂, N₂, NaCl, CH₄, NH₃         │
│  C₂H₅OH (etanol), O₃, H₂O₂                 │
│  C₆H₁₂O₆ (glukosa), C₈H₁₀N₄O₂ (kafein)   │
│  Aspirin (C₉H₈O₄), DNA, dll                 │
│  Click → detail + 3D render (modal/sidebar) │
└──────────────────────────────────────────────┘
```

**File:** `src/components/PeriodicTable.ts` (update), `src/data/molecules.ts` (tambah molekul)

---

### ⚗️ C. Kimia Lab Rebuild — "Seperti Anak Kimia" (🗓️ Setelah Explore)

> **Konsep:** Dipisah dari tabel. Fokus murni pada pengalaman belajar kimia seperti di buku — ada soal-soal menggabungkan atom, tapi dilakukan secara interaktif dan bisa langsung dipraktekkan.

**Fitur target:**
- Pilih atom dari palette → drag/klik untuk combine → lihat hasilnya dalam 3D
- **Mode Tantangan:** Dikasih nama molekul (mis. "Air") → user harus merakit H₂O sendiri
- **Mode Bebas:** Coba-coba kombinasi apapun (existing MoleculeBuilder)
- Hint system untuk mode tantangan
- Penjelasan lebih dalam per molekul (kegunaan, bahaya, fun fact)
- Tambah molekul organik kompleks ke database

**Route:** `/molecule` (sudah ada, perlu upgrade)  
**File:** `src/components/MoleculeBuilder.ts`, `src/data/molecules.ts`

---

### 📡 D. Fenomena (✅ Hold — Sudah Oke)

> Fenomena sudah berjalan baik dengan 27 fenomena dan 6 kategori. Tidak ada perubahan yang diprioritaskan saat ini.

---

## 6. Phase 2 — Edukasi Pemula (🗓️ Planned)

> 10 modul edukasi di route `/learn` → `/learn/:slug`.  
> Lihat detail lengkap di: [`docs/CURRICULUM.md`](./CURRICULUM.md)

| # | Topik | Animasi |
|---|-------|---------|
| 1 | Apa itu Materi? | Zoom-in dari benda ke atom |
| 2 | Proton, Neutron, Elektron | 3D atom diklik per partikel |
| 3 | Nomor Atom & Nomor Massa | Animasi hitung partikel |
| 4 | Mengapa Atom Stabil? | Animasi tarik-menarik muatan |
| 5 | Kulit Elektron (Bohr) | Elektron naik/turun kulit |
| 6 | Cara Menulis Konfigurasi | Step-by-step pengisian |
| 7 | Valensi & Reaktivitas | Highlight kulit terluar |
| 8 | Golongan & Periode | Animasi pengelompokan tabel |
| 9 | Sifat Periodik Dasar | Heatmap visual |
| 10 | Ikatan Kimia Intro | Animasi 2 atom berbagi elektron |

---

## 7. Phase 3 — Multi-Level Atom Visualizer (🗓️ Planned)

| Level | Model | Deskripsi | Status |
|-------|-------|-----------|--------|
| 1 | ⚛ Model Bohr | Orbit lingkaran, kulit K/L/M | ✅ Ada |
| 2 | 🌫 Model Orbital | Lobus s/p/d/f, awan probabilitas | 🗓️ |
| 3 | 🌀 Model Kuantum | Density plot ψ², angka kuantum | 🗓️ |

---

## 8. Non-Functional Requirements

| Aspek | Target | Status |
|-------|--------|--------|
| Performance | First paint < 1.5s, animasi 60fps | ✅ |
| Kompatibilitas | Chrome, Firefox, Safari (2 versi terakhir) | ✅ |
| Responsive | Desktop, tablet, mobile | Partial |
| Aksesibilitas | WCAG AA contrast | ✅ |
| Bahasa | Bahasa Indonesia (default) + English | ✅ |
| Error handling | Zero white screen untuk 118 elemen | ✅ |

---

## 9. Out of Scope (v1.x)

- Login/user account
- Progress tracking & quiz score tersimpan
- Backend/database/API (saat ini static SPA)
- Mobile app native
- Simulasi reaksi kimia / stoikiometri
- Subscription/payment gateway (butuh backend)

---

## 10. Success Metrics

| Metrik | Target | Status |
|--------|--------|--------|
| Zero crash untuk semua 118 elemen | ✅ | ✅ |
| Animasi 3D berjalan di semua elemen | ✅ | ✅ |
| Navigasi prev/next lancar | ✅ | ✅ |
| Elemen radioaktif ditandai jelas | ✅ | ✅ |
| nameId, desc, funFact semua 118 elemen | ✅ | ✅ |
| Halaman Fenomena — 27 fenomena, 6 kategori | ✅ | ✅ |
| Sejarah Atom — 22 slide cinematic | ✅ | ✅ |
| Bilingual EN/ID — semua komponen | ✅ | ✅ |
| Dashboard rebuild — first principle | 🔨 | — |
| Explore rebuild — tabel + molekul | 🗓️ | — |
| Kimia Lab — mode tantangan | 🗓️ | — |
| Phase 2: 10 modul edukasi | 🗓️ | — |
| Phase 3: 3 level visualisasi | 🗓️ | — |
