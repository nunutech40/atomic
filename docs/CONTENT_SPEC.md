# Content Spec — Element Stories & Descriptions
**Project:** Atomic  
**Date:** 2026-02-20  
**Status:** Planned (Phase 1.5 — konten sebelum Phase 2 edukasi)

---

## Overview

Dua kebutuhan konten yang saling melengkapi:

1. **Element Stories** — Sejarah penemuan setiap elemen: siapa, kapan, bagaimana ceritanya
2. **Element Descriptions** — Deskripsi deskriptif setiap elemen: sifat, kegunaan, keunikan, konteks

Keduanya harus **terintegrasi natural** ke halaman detail yang sudah ada — user tetap bisa lihat animasi 3D, tapi juga bisa baca konten yang rich.

---

## 1. Element Stories (Sejarah Penemuan)

### Data yang dibutuhkan per elemen

```typescript
interface ElementHistory {
  discoveredBy: string | null;     // nama ilmuwan(s)
  year: string | number | null;    // tahun / "Ancient" / "Prehistoric"
  country: string | null;          // negara penemuan
  method: string;                  // cara/eksperimen penemuan
  story: string;                   // 2-4 paragraf naratif
  funFact?: string;                // 1 fakta menarik tentang sejarahnya
}
```

### Contoh konten (draft narrative style)

**Hidrogen (H, 1766):**
> Henry Cavendish, seorang bangsawan Inggris yang eksentrik dan pemalu, menemukan hidrogen pada 1766 dengan cara mereaksikan logam dengan asam. Ia menyebutnya "udara yang mudah terbakar" (*inflammable air*). Yang menarik, Cavendish begitu pemalu sehingga ia hampir tidak pernah bicara dengan orang lain — ilmu pengetahuannya yang luar biasa ditemukan dari tumpukan kertas setelah ia wafat.
> 
> Nama "Hydrogen" baru muncul tahun 1783, diberikan oleh Antoine Lavoisier dari kata Yunani *hydro* (air) dan *genes* (membentuk), karena saat dibakar, hidrogen menghasilkan air. Ini juga yang membuktikan bahwa air bukan elemen dasar seperti yang dipercaya orang Yunani Kuno.

**Oksigen (O, 1774):**
> Oksigen memiliki dua "bapak" yang menemukannya hampir bersamaan: Carl Wilhelm Scheele di Swedia (1772) dan Joseph Priestley di Inggris (1774). Priestley mendapat kredit lebih besar karena mempublikasikan temuannya lebih dulu, meski Scheele menemukan lebih awal.
>
> Priestley memanaskan oksida merkuri (*mercuric oxide*) dengan kaca pembesar dan matahari, dan mengumpulkan gas yang membuat lilin terbakar lebih terang. Ia menyebutnya "dephlogisticated air". Baru Lavoisier yang kemudian memahami peran sebenarnya oksigen dalam pembakaran dan pernapasan, sekaligus menghancurkan teori flogiston yang salah kaprah.

**Radium (Ra, 1898):**
> Marie dan Pierre Curie bekerja selama bertahun-tahun di gudang tua yang bocor atapnya di Paris, memproses ton demi ton bijih uranium untuk mendapatkan segelintir gram radium. Kondisi kerjanya sangat berbahaya — mereka tidak tahu bahwa radiasi mematikan.
>
> Marie Curie kemudian meninggal akibat anemia aplastik, diduga karena paparan radiasi seumur hidup. Buku catatan risetnya hingga hari ini masih terlalu radioaktif untuk dipegang tanpa perlindungan khusus, dan disimpan dalam kotak timbal di Bibliothèque nationale de France.

**Lawrencium (Lr, 1961):**
> Lawrencium adalah elemen terakhir dari seri aktinida, dibuat secara sintetis di Lawrence Berkeley National Laboratory, California. Tim yang dipimpin Albert Ghiorso membombardir Californium-252 dengan partikel boron menggunakan akselerator partikel.
>
> Atom Lawrencium yang berhasil dibuat hanya bertahan beberapa detik sebelum meluruh. Ini adalah salah satu tantangan terbesar dalam kimia elemen berat: mendeteksi keberadaan sesuatu yang hanya ada selama milidetik. Elemen ini dinamai Ernest O. Lawrence, penemu siklotron yang merevolusi fisika partikel.

---

### Kategorisasi cara penemuan

| Kategori | Contoh | Keterangan |
|----------|--------|-----------|
| **Ancient** | C, S, Fe, Cu, Ag, Au, Pb, Sn | Dikenal sejak zaman prasejarah/kuno |
| **Alchemical** | As, Sb, Bi | Ditemukan era alkimia (abad 13-17) |
| **Distillation** | P (1669) | Isolasi dari urine/material organik |
| **Electrolysis** | Na, K, Mg, Ca, Al | Davy & lainnya via arus listrik |
| **Spectroscopy** | Cs, Rb, Tl, In, He | Ditemukan lewat spektrum cahaya |
| **Radioactive decay** | Ra, Po, Rn | Ditemukan Marie Curie & lainnya |
| **Particle accelerator** | Tc, Pm, Lr, dst | Disintesis di lab, tidak ada di alam |
| **Isolation from ore** | W, Mo, Cr, Mn, dst | Reduksi kimia dari mineral |

---

## 2. Element Descriptions (Deskripsi Deskriptif)

### Data yang dibutuhkan per elemen

Field `desc` sudah ada di `Element` interface tapi kosong untuk hampir semua elemen.

```typescript
interface Element {
  // ... existing fields
  desc?: string;          // ← SUDAH ADA, tapi kosong. Perlu diisi.
  
  // Field BARU yang perlu ditambahkan:
  uses?: string;          // Kegunaan utama dalam kehidupan sehari-hari
  funFact?: string;       // 1 fakta mengejutkan / menarik
}
```

### Konten per deskripsi

Setiap elemen idealnya punya:
- **Deskripsi:** 2-3 kalimat menjelaskan sifat, penampilan, perilaku
- **Kegunaan:** paling penting/familiar bagi user awam
- **Fun fact:** 1 fakta yang bikin "wow"

### Contoh konten

**Hidrogen (H):**
- *Desc:* Gas yang paling ringan dan paling melimpah di alam semesta — 75% dari semua materi normal terdiri dari hidrogen. Tidak berwarna, tidak berbau, sangat mudah terbakar. Pada suhu dan tekanan normal, selalu berpasangan sebagai H₂.
- *Uses:* Bahan bakar roket, produksi amonia untuk pupuk, refining minyak bumi, sel bahan bakar masa depan
- *Fun fact:* Seluruh matahari pada dasarnya adalah reaktor fusi hidrogen raksasa. Setiap detik, matahari mengubah 600 juta ton hidrogen menjadi helium.

**Emas (Au):**
- *Desc:* Logam mulia kuning berkilau yang paling *malleable* (mudah ditempa) di antara semua logam — 1 gram emas bisa ditempa menjadi lembaran seluas 1 meter persegi. Tidak berkarat, tidak bereaksi dengan hampir semua zat kimia biasa.
- *Uses:* Perhiasan, komponen elektronik (connector), standar mata uang historis, pengobatan tertentu (nanopartikel emas untuk kanker)
- *Fun fact:* Semua emas di Bumi berasal dari tabrakan bintang neutron (kilonova) miliaran tahun lalu. Secara harfiah, cincin emas di jarimu adalah sisa ledakan bintang.

**Merkuri (Hg):**
- *Desc:* Satu-satunya logam yang berbentuk cair pada suhu ruangan. Sangat berat — sebuah bola merkuri terasa jauh lebih berat dari yang terlihat. Nama simbolnya Hg berasal dari *hydrargyrum* (Yunani: air perak).
- *Uses:* Termometer (semakin jarang), lampu fluoresen, amalgam gigi (semakin ditinggalkan), alat ukur tekanan darah
- *Fun fact:* Isaac Newton diduga mengalami keracunan merkuri akibat eksperimen alkeimanya — analisis rambut Newton menunjukkan kadar merkuri 40x lebih tinggi dari normal.

---

## 3. UI Layout Terintegrasi

Halaman detail element yang diusulkan dengan konten baru:

```
┌─────────────LEFT PANEL──────────┐  ┌────────────RIGHT PANEL──────────┐
│  ⚛ Model Bohr                   │  │  Au                              │
│                                  │  │  Gold / Emas                     │
│  [3D ATOM ANIMATION]             │  │  ● Logam Transisi                │
│                                  │  │                                  │
│  Geser · Gulir untuk zoom        │  │  ── TABS ──────────────────────  │
│                                  │  │  [Data] [Deskripsi] [Sejarah]   │
│  KULIT ELEKTRON                  │  │                                  │
│  K:2 L:8 M:18 N:32 O:18 P:1    │  │  TAB: Data                       │
│                                  │  │  ┌──────┐ ┌──────┐              │
│  KONFIGURASI                     │  │  │Nomor │ │Massa │              │
│  [Xe] 4f14 5d10 6s1             │  │  │  79  │ │196.9 │              │
│                                  │  │  └──────┘ └──────┘              │
│  79 elektron · 6 kulit           │  │  ... dst                         │
│                                  │  │                                  │
└──────────────────────────────────┘  │  TAB: Deskripsi                  │
                                      │  Logam mulia kuning berkilau...  │
                                      │  [Kegunaan] [Fun Fact]           │
                                      │                                  │
                                      │  TAB: Sejarah                    │
                                      │  📅 1746 · Julius Scaliger       │
                                      │  🌍 Eropa                        │
                                      │  Henry Cavendish, seorang...     │
                                      └──────────────────────────────────┘
```

### Perubahan kode yang dibutuhkan

| File | Perubahan |
|------|-----------|
| `src/data/elements.ts` | Tambah field `history`, `uses`, `funFact` per elemen |
| `src/components/ElementDetail.ts` | Tambah tab system: Data / Deskripsi / Sejarah |
| `src/styles/global.css` | CSS untuk tabs, story card, fun fact box |

### Prioritas pengisian konten

Urutan pengisian data (berdasarkan icon/popularity):
1. **Tier 1** (15 elemen paling dikenal): H, He, C, O, N, Na, K, Ca, Fe, Cu, Ag, Au, Hg, Pb, U
2. **Tier 2** (25 elemen sering muncul di pelajaran): Al, Si, P, S, Cl, Ar, Zn, Br, I, Pt, dll
3. **Tier 3** (78 elemen lainnya): elemen transisi, lantanida, aktinida

---

## 4. Sumber Data yang Bisa Dipakai

| Sumber | Kegunaan |
|--------|---------|
| [Wikipedia (API)](https://en.wikipedia.org/api/) | Draft cerita, fakta dasar |
| [Periodic Videos (YouTube)](https://www.youtube.com/user/periodicvideos) | Inspirasi deskripsi visual |
| [RSC - Royal Society of Chemistry](https://www.rsc.org/periodic-table) | Data akurat, deskripsi kimia |
| [Chemistry Explained](http://www.chemistryexplained.com) | Konteks element history |
| GPT/AI | Draft narasi, lalu diverifikasi |

---

## 5. Effort Estimate

| Task | Estimasi |
|------|---------|
| Tambah field baru ke `elements.ts` | 2 jam (TypeScript interface + semua 118 entry) |
| Isi konten Tier 1 (15 elemen) | 4–6 jam riset + tulis |
| Isi konten Tier 2 (25 elemen) | 8–10 jam |
| Isi konten Tier 3 (78 elemen) | 15–20 jam (atau pakai AI draft) |
| Buat tab UI di ElementDetail | 3–4 jam coding |
| **Total** | **~30–40 jam konten + 5 jam koding** |
