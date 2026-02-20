# PRD — Product Requirements Document
**Project:** Atomic — Interactive 3D Periodic Table & Atom Visualizer  
**Version:** 1.0  
**Date:** 2026-02-20  
**Status:** In Progress

---

## 1. Latar Belakang & Tujuan

Atomic dibuat untuk menjawab kebutuhan alat belajar kimia yang interaktif, visual, dan menarik — khususnya untuk pelajar SMA/mahasiswa Indonesia. Tujuan utama:

1. Membuat eksplorasi tabel periodik menjadi pengalaman visual yang menyenangkan
2. Menjelaskan cara kerja atom dengan animasi 3D yang intuitif
3. Menyediakan jalur belajar bertahap dari pemula hingga tingkat lanjut

---

## 2. Pengguna Target (User Persona)

| Persona | Profil | Kebutuhan |
|---------|--------|-----------|
| **Pelajar SMA** | 15–18 tahun, belajar kimia dasar | Visual yang menarik, bahasa Indonesia, mudah dipahami |
| **Mahasiswa Kimia** | 18–22 tahun, butuh referensi akurat | Data lengkap, konfigurasi elektron, sifat fisik/kimia |
| **Pengajar** | Guru/dosen | Alat bantu presentasi, animasi yang jelas |
| **Penasaran Umum** | Siapa pun | Eksplorasi ringan, fun, informatif |

---

## 3. Scope & Feature Matrix

### Phase 1 — Core (✅ Done)
| Feature | Status | Catatan |
|---------|--------|---------|
| Tabel periodik 118 elemen | ✅ | Grid 18 kolom, posisi akurat |
| Kode warna per kategori | ✅ | 11 kategori, color + legend filter |
| Tooltip hover | ✅ | Nama, simbol, massa |
| Live search | ✅ | By nama, simbol, nomor atom |
| Halaman detail unsur | ✅ | Data fisika & kimia lengkap |
| 3D atom visualizer | ✅ | Three.js, orbit elektron animasi |
| Drag to rotate + scroll to zoom | ✅ | Mouse & touch support |
| Dark/Light theme | ✅ | Persisted ke localStorage |
| Bilingual ID/EN | ✅ | Toggle real-time |
| Konfigurasi elektron | ✅ | Semua 118 elemen |
| Kulit elektron (K–Q) | ✅ | Visual pills + 3D orbit |

### Phase 2 — Edukasi Pemula (🗓️ Planned)
> **Konsep:** Sebelum masuk ke tabel periodik, pemula perlu membangun fondasi. Setiap topik berdiri sendiri dengan animasi + penjelasan.

**Pre-requisite Analysis — Apa yang dibutuhkan pemula untuk memahami Phase 1:**

| # | Topik | Penjelasan Singkat |
|---|-------|-------------------|
| 1 | **Apa itu atom?** | Partikel terkecil penyusun materi |
| 2 | **Proton, Neutron, Elektron** | 3 partikel subatomik dan perannya |
| 3 | **Nomor Atom & Nomor Massa** | Cara membaca kartu elemen |
| 4 | **Kulit Elektron** | Mengapa elektron ada di lapisan berbeda |
| 5 | **Konfigurasi Elektron** | Cara menulis 2, 8, 18, 32... |
| 6 | **Ikatan Kimia Dasar** | Mengapa atom saling bergabung |
| 7 | **Golongan & Periode** | Logika susunan tabel periodik |
| 8 | **Sifat Periodik** | Jari-jari atom, elektronegativitas |

Setiap topik akan dikemas dengan:
- **Animasi interaktif** (custom 3D/2D)
- **Penjelasan step-by-step** (bahasa awam)
- **Quiz/cek pemahaman**
- **Link ke konten terkait** di tabel periodik

### Phase 3 — Multi-Level Animasi Atom (🗓️ Planned)
> **Konsep:** 3 level representasi atom yang bisa dipilih user di halaman detail.

| Level | Nama | Model | Target User |
|-------|------|-------|-------------|
| 1 | **Model Bohr** | Orbit lingkaran sederhana (saat ini) | Pemula, SMA |
| 2 | **Model Probabilitas** | Awan elektron / orbital (s, p, d, f) | Mahasiswa |
| 3 | **Model Kuantum** | Orbital 3D dengan fungsi gelombang | Advanced |

---

## 4. Non-Functional Requirements

| Aspek | Target |
|-------|--------|
| Performance | First paint < 1.5s, animasi 60fps |
| Kompatibilitas | Chrome, Firefox, Safari (2 versi terakhir) |
| Responsive | Desktop, tablet, mobile |
| Aksesibilitas | Kontras warna WCAG AA, keyboard navigable |
| Bahasa | Bahasa Indonesia (default) + English |

---

## 5. Out of Scope (v1.0)

- Login/user account
- Quiz/penilaian tersimpan
- Backend/database
- Mobile app native (iOS/Android)
- Simulasi reaksi kimia

---

## 6. Success Metrics

| Metrik | Target |
|--------|--------|
| Zero crash pada 118 elemen | ✅ |
| Semua elemen bisa dibuka detail-nya | ✅ |
| Animasi 3D berjalan di semua elemen | ✅ |
| Load time < 2 detik | ✅ |
| Bilingual berfungsi penuh | ✅ |
