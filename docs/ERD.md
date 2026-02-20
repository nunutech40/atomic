# ERD — Entity Relationship Diagram (Data Structure)
**Project:** Atomic — Interactive 3D Periodic Table  
**Version:** 1.0  
**Date:** 2026-02-20

> Atomic adalah aplikasi client-only tanpa database. "ERD" di sini mendokumentasikan **struktur data** yang ada di codebase (TypeScript interfaces + static data).

---

## 1. Entity Overview

```
┌──────────────┐     belongsTo     ┌──────────────┐
│   Element    │ ─────────────────▶│   Category   │
│  (118 rows)  │                   │  (11 rows)   │
└──────────────┘                   └──────────────┘
       │
       │ has
       ▼
┌──────────────────┐
│  ElectronConfig  │     (computed from electronConfig.ts)
│  (per element)   │
└──────────────────┘
       │
       │ drives
       ▼
┌──────────────────┐
│    AtomScene     │     (Three.js runtime, tidak disimpan)
│  (3D runtime)    │
└──────────────────┘
```

---

## 2. Entity: Element

**File:** `src/data/elements.ts`

| Field | Type | Required | Contoh | Keterangan |
|-------|------|----------|--------|-----------|
| `n` | `number` | ✅ | `79` | Nomor atom (primary key) |
| `sym` | `string` | ✅ | `"Au"` | Simbol kimia |
| `name` | `string` | ✅ | `"Gold"` | Nama bahasa Inggris |
| `nameId` | `string?` | ❌ | `"Emas"` | Nama bahasa Indonesia |
| `mass` | `string \| number \| number[]` | ✅ | `196.966` | Massa atom (sma). Array untuk elemen radioaktif |
| `cat` | `string` | ✅ | `"transition-metal"` | ID kategori (FK → Category) |
| `period` | `number` | ✅ | `6` | Periode (baris) di tabel periodik |
| `group` | `number` | ✅ | `11` | Golongan (kolom), >18 = Lantanida/Aktinida |
| `config` | `string` | ✅ | `"[Xe] 4f14 5d10 6s1"` | Konfigurasi elektron |
| `phase` | `string` | ✅ | `"Solid"` | Fase pada suhu kamar |
| `density` | `number \| null` | ❌ | `19.3` | Massa jenis (g/cm³) |
| `mp` | `number \| null` | ❌ | `1337.33` | Titik leleh (K) |
| `bp` | `number \| null` | ❌ | `3129` | Titik didih (K) |
| `en` | `number \| null` | ❌ | `2.54` | Elektronegativitas (Pauling scale) |
| `ie` | `number \| null` | ❌ | `890.1` | Energi ionisasi pertama (kJ/mol) |
| `radius` | `number \| null` | ❌ | `144` | Jari-jari atom (pm) |
| `year` | `string \| number \| null` | ❌ | `1746` | Tahun penemuan |
| `ox` | `string \| number \| null` | ❌ | `"+1, +3"` | Bilangan oksidasi umum |
| `discovered` | `string \| null` | ❌ | `"Julius Scaliger"` | Penemu pertama |
| `desc` | `string?` | ❌ | `"Gold has been..."` | Deskripsi singkat |

**Catatan penting:** Field `mass` bisa berupa `number[]` untuk elemen radioaktif (Tc, Pm, Po, At, dst) karena `periodic-table` npm mengemas massa sebagai array isotop paling stabil.

---

## 3. Entity: Category

**File:** `src/data/categories.ts`

| Field | Type | Required | Contoh |
|-------|------|----------|--------|
| `id` | `string` | ✅ | `"alkali-metal"` |
| `nameEn` | `string` | ✅ | `"Alkali Metal"` |
| `nameId` | `string` | ✅ | `"Logam Alkali"` |
| `color` | `string` | ✅ | `"#f03e3e"` (hex) |
| `bgColor` | `string` | ✅ | `"#f03e3e15"` (hex+alpha) |

**11 Kategori yang ada:**

| ID | Nama EN | Nama ID |
|----|---------|---------|
| `alkali-metal` | Alkali Metal | Logam Alkali |
| `alkaline-earth` | Alkaline Earth Metal | Logam Alkali Tanah |
| `transition-metal` | Transition Metal | Logam Transisi |
| `post-transition` | Post-Transition Metal | Logam Pasca-Transisi |
| `metalloid` | Metalloid | Metaloid |
| `nonmetal` | Nonmetal | Nonlogam |
| `halogen` | Halogen | Halogen |
| `noble-gas` | Noble Gas | Gas Mulia |
| `lanthanide` | Lanthanide | Lantanida |
| `actinide` | Actinide | Aktinida |
| `unknown` | Unknown | Tidak Diketahui |

---

## 4. Entity: ElectronConfig (Computed)

**File:** `src/utils/electronConfig.ts`

Bukan entity yang disimpan terpisah — dihitung berdasarkan `Element.n`.

| Field | Type | Contoh | Keterangan |
|-------|------|--------|-----------|
| `shells` | `number[]` | `[2, 8, 18, 32, 18, 8, 2]` | Jumlah elektron per kulit |
| `shell label` | `string` | `"K"`, `"L"`, ... `"Q"` | Label kulit K s/d Q |

**Mapping:** `atomicNumber → number[]`  
Semua 118 elemen terdefinisi secara eksplisit dalam hashmap.

---

## 5. Translation Strings

**File:** `src/data/i18n/en.ts`, `src/data/i18n/id.ts`

```
TranslationMap {
  nav {
    search: string
    home: string
    lang_toggle: string
    dark_mode: string
    light_mode: string
  }
  element {
    atomicNumber, atomicMass, period, group,
    phase, density, meltingPoint, boilingPoint,
    electronegativity, ionizationEnergy, radius,
    oxidationStates, discoveredBy, yearDiscovered,
    electronConfig, shells, description
  }
  categories {
    [categoryId]: string   // nama per kategori per bahasa
  }
  actions {
    backToTable, rotate, zoom
  }
  units {
    amu, kelvin, gcm3, kjmol, pm
  }
}
```

---

## 6. Grid Position Map

**File:** `src/components/PeriodicTable.ts` (inline constant `GRID_POS`)

Mapping `atomicNumber → [row, col]` untuk penempatan sel di grid CSS.

- Row 1–7: Periode normal
- Row 8: Lantanida (La=58 → Lr=71)  
- Row 9: Aktinida (Ac=89 → Lr=103)

---

## 7. LocalStorage Keys

| Key | Tipe | Nilai | Default |
|-----|------|-------|---------|
| `atomic-theme` | `string` | `"dark"` \| `"light"` | `"dark"` |
| `atomic-lang` | `string` | `"en"` \| `"id"` | `"id"` |

---

## 8. Contoh Data — Element 79 (Gold)

```typescript
{
  n: 79,
  sym: "Au",
  name: "Gold",
  nameId: "Emas",
  mass: 196.966569,
  cat: "transition-metal",
  period: 6,
  group: 11,
  config: "[Xe] 4f14 5d10 6s1",
  phase: "Solid",
  density: 19.3,
  mp: 1337.33,
  bp: 3129,
  en: 2.54,
  ie: 890.1,
  radius: 144,
  year: 1746,
  ox: "+1, +3",
  discovered: "Julius Scaliger",
  desc: "Gold is a chemical element with the symbol Au..."
}
```

## 9. Contoh Data — Element 103 (Lawrencium, Radioaktif)

```typescript
{
  n: 103,
  sym: "Lr",
  name: "Lawrencium",
  mass: [262],          // ← Array! Isotop paling stabil
  cat: "actinide",
  period: 7,
  group: 3,
  config: "[Rn] 5f14 7s2 7p1",
  phase: null,          // unknown
  density: null,        // unknown
  mp: 1900,
  bp: null,
  en: 1.3,
  ie: null,
  radius: null,
  year: 1961,
  ox: "3",
  discovered: null
}
```
