# Phenomena Stories — Dokumentasi Konten
**Project:** Atomic  
**Version:** 1.0  
**Date:** 2026-02-21  
**Status:** ✅ Semua 27 story selesai

---

## Overview

`phenomenon-stories.ts` (~210KB) berisi narasi slide-by-slide untuk semua 27 fenomena yang terdaftar di `phenomena.ts`. Setiap story mengikuti struktur `PhenomenonStory { id, slides[] }` dan dirender oleh `PhenomenaStory.ts`.

---

## Style Guide — Zack Snyder + Christopher Nolan

> **Prinsip:** Narasi sains bukan untuk mengajar — tapi untuk membuat pembaca merasa bahwa realita lebih menakjubkan dari fiksi mana pun.

### Filosofi Gabungan

| Elemen | Snyder | Nolan |
|--------|--------|-------|
| Pembukaan | Hook visual dramatis, mengejutkan | Fakta yang membalik asumsi |
| Protagonis | Manusia di tengah kekuatan kosmik | Individu yang mengubah cara pandang |
| Tempo | Slow-burn, membangun | Revelation berlapis |
| Stakes | "Ini lebih besar dari kamu" | "Ini cara kerja realitas" |
| Penutup | Resonansi emosional | Pertanyaan yang mengusik pikiran |

### 7 Aturan Penulisan Wajib

1. **Hook = balik asumsi, jangan mulai dengan definisi**
   - ❌ `"Fotosintesis adalah proses tanaman mengubah cahaya menjadi energi."`
   - ✅ `"Pohon 20 ton itu terbuat dari udara kosong."`

2. **Manusia dulu, sains kemudian** — drama personal ilmuwan adalah kunci
   - Lavoisier dipenggal oleh revolusi yang juga ia dukung
   - Cecilia Payne dipaksa menuliskan bahwa temuannya "hampir pasti salah"
   - Inge Lehmann menemukan inti bumi hanya dengan pensil dan kertas

3. **Stakes selalu kosmik** — fakta kecil harus punya implikasi besar
   - "4 gram besi di tubuhmu lebih penting dari 18 kg karbon"
   - "Napas Julius Caesar ada di setiap napasmu sekarang"

4. **Kalimat pendek seperti puisi** — satu kalimat = satu paragraf jika perlu

5. **Data sebagai punchline** — angka datang di akhir, bukan di awal

6. **Sejarah adalah thriller** — setiap penemuan punya drama yang tidak diajarkan di buku

7. **Tutup dengan pertanyaan atau ironi yang mengusik** — bukan kesimpulan yang rapi

---

## Story Inventory — Semua 27 Fenomena

### 🔴 Kategori: Nuklir (6 stories)

| ID | Judul Hook | Jumlah Slide |
|----|------------|--------------|
| `nucleosynthesis` | Kamu Terbuat dari Debu Bintang yang Meledak | 6 |
| `antimatter` | Setiap Atom yang Pernah Ada Seharusnya Musnah | 6 |
| `fission` | Ledakan dari Satu Kilogram Uranium | 6 |
| `fusion` | Energi Matahari dari 4 Proton | 5 |
| `chain-reaction` | Reaksi yang Tidak Bisa Dihentikan Sendiri | 6 |
| `radioactivity` | Marie Curie Tidak Tahu Dirinya Sedang Mati | 6 |

### 🔵 Kategori: Kuantum (3 stories)

| ID | Judul Hook | Jumlah Slide |
|----|------------|--------------|
| `superposition` | Kucing Schrödinger — Hidup dan Mati Sekaligus | 5 |
| `quantum-tunneling` | Elektron yang Menembus Dinding | 5 |
| `photoelectric` | Einstein Menang Nobel Bukan karena Relativitas | 5 |

### 🟢 Kategori: Sehari-hari (5 stories)

| ID | Judul Hook | Jumlah Slide |
|----|------------|--------------|
| `combustion` | Api adalah Perlombaan Oksigen | 4 |
| `rusting` | Besi Teroksidasi Secara Perlahan — Tapi Pasti | 4 |
| `crystal-structure` | Berlian dan Grafit: Atom yang Sama, Dunia yang Berbeda | 4 |
| `stability-principle` | Mengapa Atom Ingin Berpegangan Tangan | 4 |
| `noble-metals` | Mahkota Firaun 3.300 Tahun — Masih Berkilap | 5 |

### 🟣 Kategori: Kosmik (2 stories)

| ID | Judul Hook | Jumlah Slide |
|----|------------|--------------|
| `photosynthesis` | Tumbuhan Memakan Cahaya | 5 |
| `dna-atoms` | Instruksi Membangun Manusia dalam 4 Huruf | 5 |

### 🟡 Kategori: Kehidupan (7 stories)

| ID | Judul Hook | Jumlah Slide | Ilmuwan Kunci |
|----|------------|--------------|---------------|
| `photosynthesis` | Daun Hijau Menarik Karbon dari Udara Tipis-Tipis | 5 | Van Helmont, Ingenhousz |
| `dna-atoms` | 4 Huruf Atom yang Menyimpan Instruksi Membangun Manusia | 5 | Watson & Crick |
| `human-atoms` | Kamu Adalah 7 Oktilion Atom — Seharga Rp 2.500 | 7 | Lavoisier, Watson & Crick |
| `plant-atoms` | Pohon 20 Ton Terbuat dari Udara Kosong | 6 | Van Helmont, De Saussure |
| `earth-atoms` | Bumi Adalah Planet Besi Tersembunyi di Balik Batu | 6 | Inge Lehmann |
| `sun-atoms` | Helium Ditemukan di Bintang Sebelum di Bumi | 6 | Cecilia Payne, Janssen |
| `atom-journey` | Satu Atom Karbon di Jarimu Pernah Ada di Dinosaurus | 7 | Carl Sagan, B²FH |

### 🩷 Kategori: Fiksi & Sains (6 stories)

| ID | Fiksi Asal | Deduksi Sains Nyata | Jumlah Slide |
|----|------------|---------------------|--------------|
| `palladium-arc` | Iron Man 2 — Arc Reactor | Pd memang toksik; 3 GW melanggar termodinamika; membuat unsur baru = BISA tapi bukan di garasi | 6 |
| `vibranium` | Marvel — Tameng Captain America | Graphene 200× baja; hukum kekekalan energi tidak bisa dinegosiasi | 5 |
| `kryptonite` | DC — Kriptonit Superman | Lahir 1943 karena aktor butuh cuti; Jadarite 2007 = formula persis; Kr-85 radioaktif sudah di atmosfer | 6 |
| `unobtanium` | Avatar — Mineral Pandora | "Unobtanium" = slang insinyur sejak 1950-an; superkonduktor efek Meissner; Nb superkonduktor nyata | 6 |
| `adamantium` | Marvel — Rangka Wolverine | Paradoks "dibentuk tapi tak bisa dipotong"; obsidian lebih tajam dari baja; Ti implan nyata | 5 |
| `dilithium` | Star Trek — Warp Drive | Antimateri 100% nyata + E=mc²; $25 miliar per miligram di CERN; Li baterai EV mengubah geopolitik | 6 |

---

## Struktur Data

### StorySlide Interface

```typescript
type SlideType = 'hook' | 'history' | 'step' | 'scale' | 'impact';

interface StorySlide {
  type: SlideType;
  title: string;
  body: string;              // HTML — boleh <br>, <b>, <i>
  visual: string;            // emoji
  animKey?: string;          // CSS animation key
  highlight?: string;        // format: "A · B · C"
  quote?: string;
  quoteAuthor?: string;
  history?: {
    year: string;
    event: string;
    person: string;
  }[];
}
```

### Panduan Setiap Slide Type

```
hook    → Pembukaan 3-4 paragraf pendek. Hook di kalimat pertama. 
          Selalu ada `highlight`. Selalu ada `animKey`.

history → Narasi drama personal ilmuwan. Wajib `quote` + `quoteAuthor`.
          Wajib `history[]` ≥2 entries. Body ≥3 paragraf.

step    → Breakdown mekanisme. Boleh pakai <b>Label:<b> di awal.
          Data spesifik. Analogi konkret.

scale   → Perbandingan yang memukau. Angka besar vs skala manusia.
          Sering menggunakan komparasi perkalian (200×, 3.000×, dll).

impact  → Dunia nyata. Teknologi hari ini. 
          Untuk Fiksi & Sains: selalu ada "Verdict: X NYATA / FIKSI".
          Boleh ada `history[]` sebagai timeline ringkas.
```

---

## Konvensi Penulisan

### Format `highlight`
```
"Fakta A · Fakta B · Fakta C"
```
- Maksimal 3-4 fakta
- Setiap fakta ≤10 kata
- Dipisah dengan ` · ` (spasi + interpunct + spasi)

### Format `body`
- Paragraf dipisah dengan `<br><br>`
- Bold: `<b>Label:</b>` untuk daftar berformat
- Italic: `<i>teks</i>` untuk penekanan atau istilah asing
- TIDAK menggunakan `<ul>`, `<li>`, atau tag kompleks lainnya

### Format `history[]`
```typescript
{ year: '1803', event: 'Deskripsi singkat kejadian', person: 'Nama Ilmuwan' }
```
- `year` bisa berupa string tahun, dekade ("1950s"), atau kalimat ("4.5 miliar tahun lalu")
- `event` ≤ 1 kalimat, 15 kata, padat
- `person` bisa individu atau institusi ("NASA", "CERN")

---

## Catatan Implementasi

- `PhenomenaStory.ts` merender setiap slide berdasarkan `type`
- Setiap `type` memiliki layout yang berbeda (history = dual column dengan timeline, step = single column, dll)
- Slide navigation: keyboard arrow kiri/kanan + tombol Sebelumnya/Selanjutnya
- Progress ditampilkan sebagai dots + counter (misal "2 / 6")
- Bilingual: semua teks saat ini dalam Bahasa Indonesia; EN toggle belum diimplementasikan di story body
