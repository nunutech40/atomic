# PUBLISH CHECKLIST — Atomic v2.4

Penilaian kesiapan publish untuk menghasilkan revenue.

---

## ✅ Go / ❌ No-Go Assessment

### 🟢 SUDAH SIAP

| Kategori | Item | Status |
|----------|------|--------|
| **Content** | 118 elemen lengkap (nama ID, deskripsi, fun fact) | ✅ |
| **Content** | Bohr model 3D animasi semua elemen | ✅ |
| **Content** | Orbital model (awan probabilitas s/p/d/f) | ✅ |
| **Content** | 10 modul edukasi first principles, 6 level | ✅ |
| **Content** | 22 soal kuis interaktif | ✅ |
| **Content** | 27 phenomena stories (life + fiction) | ✅ |
| **Content** | Sejarah Atom 22 slide cinematic | ✅ |
| **Content** | Kimia Lab (free + challenge mode) | ✅ |
| **Content** | Anatomi Atom 5 tab konteks | ✅ |
| **Content** | Galeri molekul terkenal | ✅ |
| **Content** | Card Penemu semua 118 elemen | ✅ |
| **Content** | Card Asal Usul Kosmik semua 118 elemen | ✅ |
| **Design** | Dark mode visual — zero broken text | ✅ |
| **Design** | Light mode | ✅ |
| **Design** | Animasi 3D 60fps | ✅ |
| **Design** | Glassmorphism + premium feel | ✅ |
| **UX** | Navigasi smooth antar elemen | ✅ |
| **UX** | Search elemen (nama, simbol, nomor) | ✅ |
| **UX** | Hamburger menu mobile | ✅ |
| **Bilingual** | UI Chrome (nav, buttons, labels) | ✅ |
| **Bilingual** | Semua halaman utama ID/EN | ✅ |
| **Bilingual** | Learn modul UI | ✅ |
| **Bilingual** | Modul content step/quiz (bertahap — modul 1 done) | 🔄 |
| **Tech** | Zero TypeScript errors | ✅ |
| **Tech** | Fast first paint < 1.5s | ✅ |

### 🔴 BELUM SIAP (Blocker untuk Revenue)

| Kategori | Item | Prioritas |
|----------|------|-----------|
| **Monetisasi** | Backend auth (login/register) | HIGH — **blocker utama** |
| **Monetisasi** | Payment gateway (Xendit/Midtrans) | HIGH |
| **Monetisasi** | Premium content gating (fitur lock) | HIGH |
| **Monetisasi** | Subscription management | HIGH |

### 🟡 NICE-TO-HAVE (Tidak blocking)

| Kategori | Item | Prioritas |
|----------|------|-----------|
| **SEO** | Meta tags + Open Graph | MEDIUM |
| **SEO** | sitemap.xml | MEDIUM |
| **PWA** | manifest.json + service worker | MEDIUM |
| **Content** | EN translations untuk 9 modul lainnya (step/quiz) | MEDIUM |
| **Content** | Tags modul versi EN | LOW |
| **Mobile** | Detail page mobile responsive (minor overflow) | LOW |
| **Marketing** | Landing page | MEDIUM |

---

## 📊 Penilaian Konten untuk Go Publish

### Apa yang Sudah Ada
> Dibandingkan kompetitor seperti ptable.com, chemicool.com, Royal Society of Chemistry:

| Fitur | Atomic | Kompetitor |
|-------|--------|------------|
| 3D Bohr model interaktif | ✅ | ❌ |
| Orbital probability cloud | ✅ | ❌ |
| Modul belajar first principles | ✅ | ❌ |
| Phenomena stories (narasi) | ✅ | ❌ |
| Konten Bahasa Indonesia | ✅ | ❌ |
| Bilingual ID/EN | ✅ | ❌ |
| Kimia Lab / deduction game | ✅ | ❌ |
| Asal Usul Kosmik tiap elemen | ✅ | partial |
| Data penemu lengkap | ✅ | partial |
| Dark mode premium | ✅ | partial |

**Kesimpulan**: Konten sudah **jauh melampaui kompetitor** dalam hal kedalaman dan interaktivitas.

---

## 🚀 Rencana Go-Live (Tanpa Backend Dulu)

Bisa publish sekarang sebagai **free tool** untuk:
1. Bangun audience
2. Validasi traffic & engagement
3. Kumpulkan email waitlist premium

### Opsi Deploy Gratis
- **Vercel**: `vercel --prod` — one command, free tier
- **Netlify**: drag & drop `dist/` folder
- **GitHub Pages**: `gh-pages` branch

### Domain
- Beli domain `atomic.science` atau `atomicapp.id` (~Rp 150k/tahun)
- Point ke Vercel/Netlify

---

## 📣 Rencana Marketing Organik (Gratis)

### Week 1–2: Presence Building
1. **TikTok** (@atomicsains atau @belajaratom.id)
   - Video format: "Fakta atom yang bikin otak pusing" (30–60 detik)
   - Hook: angka ekstrem ("99.99999% tubuhmu adalah ruang kosong")
   - CTA: "Explore sendiri di [link]"
   
2. **Instagram Reels**
   - Screenshot 3D model orbital yang cantik → "Ini electron orbital karbon"
   - Before/after: tabel periodik biasa vs Atomic

3. **Twitter/X**
   - Thread: "10 fakta atom yang tidak diajarkan di sekolah"
   - Tag komunitas STEM Indonesia

### Week 3–4: Community
4. **Discord Komunitas Belajar**
   - Share di server Zenius, Ruangguru, Physics Indonesia
   
5. **Reddit**
   - r/chemistry, r/physics, r/learnprogramming (showcase build)
   
6. **Quora/Brainly Indonesia**
   - Jawab pertanyaan kimia/fisika, mention Atomic sebagai referensi

### Month 2+: Content Marketing
7. **Blog/Medium**
   - "Cara kerja tabel periodik yang tidak diajarkan SMA"
   - "Apa itu orbital s, p, d, f? Visualisasi 3D"
   
8. **YouTube Shorts**
   - Demo walkthrough Orbital vs Bohr
   - "Kulit elektron itu bukan lingkaran — apa bentuk aslinya?"

### Target Awal
- 1000 unique visitors/bulan → validasi
- Kumpulkan 100 email waitlist premium
- Baru luncurkan backend + payment

---

## 💰 Revenue Model (Setelah Backend)

| Tier | Harga | Konten |
|------|-------|--------|
| **Free** | Rp 0 | 2 modul first, semua 118 elemen dasar, Bohr model |
| **Premium Student** | Rp 29.000/bulan | Semua 10 modul, orbital model, kuis, phenomena |
| **Premium Annual** | Rp 249.000/tahun | Semua fitur + early access fitur baru |

*Target: 100 subscriber premium = Rp 2.9 juta/bulan MRR*
*500 subscriber premium = Rp 14.5 juta/bulan MRR*
