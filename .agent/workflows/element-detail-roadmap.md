---
description: Roadmap fitur tambahan untuk halaman detail elemen (setelah data penemu selesai)
---

# Element Detail — Fitur Lanjutan

## Status Saat Ini
- [x] Card Penemu (foto, bio, link Wikipedia) — DONE
- [x] Halaman story penemuan step-by-step — DONE
- [ ] Data penemu semua 118 elemen — IN PROGRESS (~34/118)

---

## Fitur Selanjutnya (eksekusi setelah data penemu selesai)

### 1. Card "Keberadaan di Alam" (`src/data/elementAbundance.ts`)
Tambah card baru di ElementDetail di bawah card Penemu, berisi:

**Data yang diperlukan per elemen:**
```typescript
interface ElementAbundance {
  sym: string;
  // Keberadaan di Bumi
  earthCrust: string;        // % atau ppm di kerak bumi (e.g. "2.82% kerak bumi")
  earthSources: string[];    // mineral/sumber utama (e.g. ["Hematit (Fe₂O₃)", "Magnetit"])
  worldLocations: string[];  // negara/wilayah utama penghasil (e.g. ["Australia", "Brasil", "China"])
  // Keberadaan di Alam Semesta
  universeAbundance: string; // % atau ppm di alam semesta (e.g. "0.001% alam semesta")
  solarSystemPercent: string;// % di tata surya (e.g. "0.0010%")
  cosmicOrigin: string;      // asal-usul kosmik (e.g. "Dibentuk dalam inti bintang masif")
  // Penampakan di alam
  naturalForms: string[];    // bentuk alami (e.g. ["Hematit merah", "Magnetit hitam", "Pirit emas"])
}
```

**UI:**
- Card dengan ikon 🌍 "Di Mana Ditemukan"
- Section: Kerak Bumi | Alam Semesta | Sumber Utama
- Progress bar visual untuk % kelimpahan
- Peta mini atau daftar negara dengan bendera

---

### 2. Card "Kelimpahan di Tata Surya" (bagian dari abundance card atau terpisah)
- Infografik visual: bar chart sederhana membandingkan kelimpahan vs elemen tetangga
- Solar system percentage dengan visualisasi proporsional
- Asal kosmik: Big Bang? Supernova? Tabrakan bintang neutron?

---

### 3. Card "Fenomena Terkait"
Link ke phenomena yang sudah ada di app, ditambah fenomena spesifik per elemen:

**Data yang diperlukan:**
```typescript
interface ElementPhenomena {
  sym: string;
  phenomena: {
    title: string;       // Nama fenomena
    icon: string;        // Emoji
    description: string; // Deskripsi singkat
    type: 'natural' | 'industrial' | 'biological' | 'quantum';
    phenomenonId?: string; // Link ke /phenomena/:id jika ada
  }[];
}
```

**UI:**
- Card "Fenomena Terkait" dengan chip-chip klik
- Klik chip → buka halaman phenomenon story (sudah ada)
- Atau tampilkan mini-story langsung di card

---

## Urutan Eksekusi

1. **Selesaikan data penemu** (semua 118 elemen) — IN PROGRESS
2. **Buat `src/data/elementAbundance.ts`** — data kelimpahan per elemen
3. **Integrasi card Keberadaan di Alam** ke `ElementDetail.ts`
4. **Buat `src/data/elementPhenomena.ts`** — fenomena per elemen
5. **Integrasi card Fenomena Terkait** ke `ElementDetail.ts`
6. **Polish & commit** semua perubahan

---

## Catatan Teknis
- Semua card baru menggunakan pola yang sama: data file → lookup function → conditional card render
- Gunakan `if (abundanceData)` bukan throw error — elemen tanpa data cukup skip card
- Card baru diletakkan SETELAH card Penemu, SEBELUM radioactive badge
- CSS baru di-append ke `global.css` karena sudah sangat besar — pertimbangkan split CSS nanti
