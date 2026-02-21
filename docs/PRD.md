# PRD — Product Requirements Document
**Project:** Atomic — Interactive 3D Periodic Table & Atom Visualizer  
**Version:** 2.2  
**Date:** 2026-02-21  
**Status:** Phase 1 ✅ SELESAI · Phenomena Stories ✅ SELESAI · Next: Kimia Lab + Backend Plan

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

## 1.6 Panduan Gaya Story Telling — Zack Snyder + Christopher Nolan

> **Referensi direktorial:** Semua narasi dalam Atomic mengikuti pendekatan sinematik dua sutradara ini secara bersamaan.

### 🎬 Filosofi Gabungan

| Elemen | Zack Snyder Style | Christopher Nolan Style |
|--------|-------------------|-------------------------|
| **Tone** | Epik, berat, kontra-intuitif | Intelektual, berlapis, dense information |
| **Pembukaan** | Hook visual yang dramatis dan mengejutkan | Fakta yang membalik asumsi umum |
| **Protagonis** | Manusia di tengah kekuatan kosmik | Individu yang mengubah cara pandang dunia |
| **Tempo** | Slow-burn yang membangun | Plot twist & revelation berlapis |
| **Stakes** | "Ini lebih besar dari kamu" | "Ini cara kerja realitas yang sebenarnya" |
| **Akhir** | Resonansi emosional yang melekat | Pertanyaan yang terus mengusik pikiran |

### 📝 Aturan Penulisan

1. **Hook = harus mengejutkan atau membalik asumsi** — Jangan mulai dengan definisi. Mulai dengan drama (*"Tahun 1925. Cecilia Payne diberitahu bahwa temuannya yang benar 'hampir pasti salah.'"*)
2. **Manusia dulu, sains kemudian** — Setiap fenomena dimulai dari manusianya: ketakutan, ambisi, kekeliruan, atau keberaniannya
3. **Stakes selalu kosmik** — Bahkan fakta kecil dihubungkan ke implikasi yang menggetarkan (*"4 gram besi di tubuhmu lebih penting dari 18 kg karbonmu"*)
4. **Kalimat pendek seperti puisi** — Paragraf dipotong di tempat yang tidak terduga. Satu kalimat bisa satu paragraf.
5. **Data sebagai punchline** — Angka bukan untuk mengisi teks, tapi untuk menjatuhkan rahang (*"Seluruh antimateri yang pernah dibuat manusia tidak cukup untuk merebus secangkir teh."*)
6. **Sejarah adalah thriller** — Ilmuwan yang diabaikan, dihukum mati, ditipu, atau ditemukan secara tidak sengaja — ini adalah plot twist nyata
7. **Selalu tutup dengan pertanyaan atau ironi yang mengusik** — Bukan kesimpulan yang neat, tapi sesuatu yang membuat pembaca berpikir semalaman

### 🎯 Contoh Penerapan

```
Snyder: "Di makam Tutankhamun yang dibuka 3.300 tahun kemudian, mahkota emas masih berkilap sempurna."
Nolan:  "Bukan keajaiban — efek relativistik membuat elektron emas bergerak mendekati kecepatan cahaya."
Gabungan: Hook dramatis → mekanisme sains yang mengejutkan → ironi kosmik
```

---

## 2. Pengguna Target (User Persona)

| Persona | Profil | Kebutuhan Utama |
|---------|--------|----------------|
| **Pelajar SMA** | 15–18 tahun, belajar kimia dasar | Visual menarik, bahasa Indonesia, mudah dipahami |
| **Mahasiswa Kimia** | 18–22 tahun, butuh referensi | Data lengkap, konfigurasi elektron, sifat fisik/kimia |
| **Pengajar** | Guru/dosen | Alat bantu presentasi, animasi yang jelas |
| **Penasaran Umum** | Siapa pun | Eksplorasi ringan, fun, informatif |

---

## 3. Arsitektur Navigasi

```
/ (Dashboard)          → halaman utama, scroll-driven, 5 chapter
/explore               → tabel periodik + galeri molekul
/element/:n            → detail elemen (3D, data, penemu, asal kosmik)
/discoverer/:sym       → kisah penemu elemen
/molecule              → kimia lab (molecule builder)
/phenomena             → daftar 27 fenomena atom
/phenomena/:id         → story per fenomena
/atom-history          → sejarah atom, 22 slide cinematic
```

**Nav bar:** Dashboard · Explore · Kimia Lab · Fenomena

---

## 4. ✅ Phase 1 — SELESAI

Semua fitur di bawah ini sudah diimplementasi dan berjalan production-ready.

### 4.1 Core Periodic Table & Element Detail

| Feature | Status |
|---------|--------|
| Tabel periodik 118 elemen (grid 18 kolom) | ✅ |
| Kode warna per kategori (11 kategori + legend) | ✅ |
| Live search (nama, simbol, nomor atom) | ✅ |
| Filter kategori per golongan | ✅ |
| Halaman detail elemen — data fisika & kimia lengkap | ✅ |
| 3D atom visualizer — Model Bohr (Three.js) | ✅ |
| Drag to rotate + scroll to zoom (mouse & touch) | ✅ |
| Prev/Next navigasi antar elemen | ✅ |
| Keyboard navigation (ArrowLeft/Right) | ✅ |
| Konfigurasi elektron + kulit elektron visual | ✅ |
| Badge elemen radioaktif (☢) | ✅ |
| Related elements — golongan & periode sama | ✅ |
| `nameId` (nama Indonesia) semua 118 elemen | ✅ |
| `desc` & `funFact` semua 118 elemen | ✅ |
| **Card Penemu** — foto, bio, link Wikipedia | ✅ |
| **Card Asal Usul Kosmik** — nukleosintesis bintang per elemen | ✅ |

### 4.2 Halaman & Fitur Lain

| Feature | Status |
|---------|--------|
| **Dashboard** — scroll-driven, 5 chapter, Three.js hero, bilingual | ✅ |
| **Explore** — banner cara baca tabel + tabel periodik + galeri molekul 3D | ✅ |
| **Sejarah Atom** — 22 slide cinematic, 6 babak (Democritus → Schrödinger) | ✅ |
| **Fenomena Atom** — 27 fenomena, 6 kategori, filter + storyteller slide | ✅ |
| **Phenomena Stories** — narasi lengkap semua 27 fenomena (nuclear, quantum, everyday, cosmos, life, fiction) | ✅ |
| **Kimia Lab: Chemistry Deduction Engine** — deduksi kimiawi atom bebas, rule-based engine, warna severity | ✅ |
| **Discoverer Story** — kisah penemu per elemen, route `/discoverer/:sym` | ✅ |
| **Kimia Lab (MoleculeBuilder)** — mode bebas, 3D builder | ✅ |
| **Dark/Light theme** — persisted localStorage | ✅ |
| **Bilingual ID/EN** — toggle real-time, semua komponen | ✅ |

---

## 5. 🔨 Sprint Aktif — Kimia Lab Rebuild (Mode Tantangan)

> **Status:** Next up. Dikerjakan setelah Explore selesai ✅

**Konsep:** Upgrade `/molecule` dari mode bebas menjadi pengalaman belajar seperti di buku kimia — ada soal, ada tantangan, ada feedback.

### Fitur Target

| Fitur | Detail | Prioritas |
|-------|--------|-----------|
| **Mode Tantangan** | Dikasih nama molekul → user harus merakit sendiri | 🔥 P0 |
| **Hint System** | Petunjuk bertahap jika user stuck | P1 |
| **Feedback Visual** | Tanda ✅/❌ real-time saat merakit | P1 |
| **Mode Bebas** | Existing MoleculeBuilder — tetap ada | P2 |
| **Penjelasan Molekul** | Kegunaan, bahaya, fun fact lebih dalam | P2 |
| **Molekul Organik Kompleks** | Tambah ke `molecules.ts` | P2 |

**File yang diubah:**
- `src/components/MoleculeBuilder.ts` — tambah mode tantangan
- `src/data/molecules.ts` — tambah molekul, tambah challenge data

**Route:** `/molecule` (existing, upgrade)

---

## 6. 🗓️ Backlog — Dikerjakan Setelah Kimia Lab

### 6.1 Element Detail — Card Lanjutan

> Lihat detail di: `.agent/workflows/element-detail-roadmap.md`

| Fitur | Detail | File |
|-------|--------|------|
| **Card "Keberadaan di Alam"** | Kelimpahan di kerak bumi, alam semesta, sumber mineral, peta negara penghasil | `src/data/elementAbundance.ts` (baru) |
| **Card "Fenomena Terkait"** | Link ke phenomena yang relevan per elemen | `src/data/elementPhenomena.ts` (baru) |

### 6.2 Phase 2 — Modul Edukasi Pemula

> Route: `/learn` → `/learn/:slug`. Detail kurikulum: [`docs/CURRICULUM.md`](./CURRICULUM.md)

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

### 6.3 Phase 3 — Multi-Level Atom Visualizer

| Level | Model | Deskripsi | Status |
|-------|-------|-----------|--------|
| 1 | ⚛ Model Bohr | Orbit lingkaran, kulit K/L/M | ✅ Ada |
| 2 | 🌫 Model Orbital | Lobus s/p/d/f, awan probabilitas | 🗓️ |
| 3 | 🌀 Model Kuantum | Density plot ψ², angka kuantum | 🗓️ |

---

## 7. Backend & Subscription Plan

> **Detail lengkap:** [`docs/BACKEND_PLAN.md`](./BACKEND_PLAN.md)

### 7.1 Konsep Utama

**SAINS adalah platform multi-produk.** Atomic adalah produk pertama. Backend dan database dipakai bersama untuk semua produk (Energi, Biologi, dll) — hanya dibedakan oleh `product_id`.

```
sains.id/atomic   → Produk 1 (existing)
sains.id/energi   → Produk 2 (masa depan)
                         ↕
                  api.sains.id (satu backend)
                  Supabase Postgres (satu DB)
```

### 7.2 Tipe User

| Tipe | Cara Dapat | Lifetime | Session |
|------|-----------|---------|---------|
| `guest` | Di-generate admin, dibagikan via link | 48 jam, max 3x login | 1 aktif |
| `subscriber` | Register + bayar Xendit | Sesuai plan | 1 aktif |
| `admin` | Seeded di DB | Selamanya | 2 aktif |

**Guest:** tidak self-register. Admin generate token → user akses via link → masukkan email/HP untuk rekap → dapat session 24 jam — setelah 3x login atau 48 jam, mati otomatis.

**Single session rule:** Login baru otomatis revoke session lama. Satu akun = satu device aktif.

### 7.3 Pricing — 3 Segmen × 4 Durasi

| Durasi | `global` | `student` | `parent` |
|--------|----------|-----------|----------|
| Bulanan | 150rb | 25rb | 89rb |
| 3 Bulan | 400rb | 65rb | 239rb |
| 6 Bulan | 700rb | 110rb | 399rb |
| Tahunan | 1.2jt | 180rb | 699rb |

3 landing page berbeda per segmen (tone dan copywriting disesuaikan). Harga disimpan di DB — bisa diubah tanpa deploy.

### 7.4 Anti-Sharing — Anomaly Detection

Score-based system per akun:

| Event | Poin |
|-------|------|
| Session displaced (login baru dorong logout lama) | +5 |
| IP berubah dalam <1 jam | +8 |
| Negara berbeda dalam 24 jam | +15 |
| >3 session displaced dalam 7 hari | +20 |

Threshold: `score ≥ 25` → warning email → `score ≥ 50` → auto-lock.

### 7.5 Tech Stack Backend

```
Runtime:  Node.js 22 + Hono framework
Database: Supabase Postgres + Drizzle ORM
Auth:     JWT (httpOnly cookie) + bcrypt
Email:    Resend
Payment:  Xendit (QRIS, VA, GoPay, OVO, CC)
Hosting:  Railway (backend) + Supabase (DB)
```

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

## 8. Out of Scope (v1.x tanpa backend)

- Login/user account *(akan ada di backend plan)*
- Progress tracking & quiz score tersimpan
- ~~Backend/database/API (saat ini static SPA)~~ *(lihat BACKEND_PLAN.md)*
- Mobile app native
- Simulasi reaksi kimia / stoikiometri
- ~~Subscription/payment gateway~~ *(lihat BACKEND_PLAN.md)*

---

## 9. Success Metrics

| Metrik | Target | Status |
|--------|--------|--------|
| Zero crash untuk semua 118 elemen | ✅ | ✅ |
| Animasi 3D berjalan di semua elemen | ✅ | ✅ |
| Navigasi prev/next lancar | ✅ | ✅ |
| Elemen radioaktif ditandai jelas | ✅ | ✅ |
| nameId, desc, funFact semua 118 elemen | ✅ | ✅ |
| Card Penemu — semua elemen ada data | ✅ | ✅ |
| Card Asal Usul Kosmik — semua 118 elemen | ✅ | ✅ |
| Halaman Fenomena — 27 fenomena, 6 kategori | ✅ | ✅ |
| **Phenomena Stories** — semua 27 stories lengkap (life + fiction) | ✅ | ✅ |
| **Chemistry Deduction Engine** — Kimia Lab free mode deduksi kimia | ✅ | ✅ |
| Sejarah Atom — 22 slide cinematic | ✅ | ✅ |
| Bilingual EN/ID — semua komponen | ✅ | ✅ |
| Dashboard rebuild — scroll-driven, 5 chapter | ✅ | ✅ |
| Explore — tabel + galeri molekul 3D | ✅ | ✅ |
| Kimia Lab — mode tantangan | 🗓️ | — |
| Card Keberadaan di Alam | 🗓️ | — |
| Card Fenomena Terkait | 🗓️ | — |
| Phase 2: 10 modul edukasi | 🗓️ | — |
| Phase 3: 3 level visualisasi | 🗓️ | — |
