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

### Phase 2 — Edukasi Pemula (🗓️ Planned — Next)

> **Konsep:** Sebelum masuk ke tabel periodik yang kompleks, pemula perlu membangun fondasi. Setiap topik = modul mandiri dengan animasi + narasi + cek pemahaman.

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
