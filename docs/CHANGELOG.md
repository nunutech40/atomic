# CHANGELOG — Atomic Interactive 3D Atom Explorer

Semua perubahan signifikan didokumentasikan di sini, urutan terbaru dahulu.

---

## [2.7.0] — 2026-02-24

### Admin Access + Guest OTP Verification

#### 👑 Admin Login ke Atomic
- Admin bisa login ke Atomic via mode subscriber (email + password)
- `AccessCheck` di-bypass untuk role admin — tidak perlu subscription
- Admin mendapat segment `"admin"` dan akses permanen

#### 🔐 Guest OTP Email Verification
- **2-step guest login flow**: email + kode → OTP dikirim ke email → verifikasi OTP → akses diberikan
- **OTP page UI**: Halaman verifikasi dengan input 6 digit monospace, masked email, countdown hint
- **Email template**: Branded OTP email via Resend (dev mode: OTP muncul di terminal log)
- **Rate limiting**: Max 3 OTP per 10 menit per email, OTP berlaku 5 menit
- **Shake animation**: Input field bergoyang saat OTP salah
- **Resend button**: Kirim ulang OTP tanpa kembali ke halaman login
- **Login count**: Hanya di-increment setelah OTP verified (bukan saat request)

#### Backend
- **Migration 000005**: Tabel `guest_otps` (email, guest_code_id, otp_code, expires_at, verified, ip)
- **SQL queries**: CreateGuestOTP, GetPendingOTP, MarkOTPVerified, CleanExpiredOTPs, CountRecentOTPs
- **Handler**: `GuestLogin` refactored → kirim OTP, `GuestVerify` baru → validasi OTP
- **Route**: `POST /api/auth/guest-verify` (public, rate limited)
- **Email service**: `SendGuestOTPEmail` template
- **AccessCheck**: Admin bypass subscription check

---

## [2.6.0] — 2026-02-24

### Feedback Widget — Kotak Saran
- **Floating pill button**: Tombol `💡 Saran` di pojok kanan bawah dengan pulse glow animation
- **Slide panel**: Klik tombol → panel slide-up dari kanan dengan glassmorphism
- **Rating emoji**: 😢 😕 😐 😊 😍 (1-5 scale, opsional)
- **Category pills**: 💡 Saran · 🐛 Bug · ❓ Tanya
- **Message textarea**: Dengan char counter (max 2000)
- **Auto user context**: Email dan role ter-isi dari auth state
- **Success animation**: Bounce emoji 🎉 setelah submit
- **Backend API**: `POST /api/feedback` → simpan ke tabel `feedback` di database
- **Mobile responsive**: Label hidden di < 480px, panel full-width
- **Widget lifecycle**: Mount setelah login, unmount saat logout

#### Backend — Feedback System
- **Migration 000004**: Tabel `feedback` (id, user_email, user_role, category, rating, message, page_url, user_agent, ip, is_read, created_at)
- **SQL queries**: CreateFeedback, ListFeedback, ListFeedbackByCategory, ListUnreadFeedback, CountUnread, MarkRead, GetFeedbackStats
- **Handler**: `feedback_handler.go` → Submit endpoint (protected, auth required)
- **Route**: `POST /api/feedback` di protected group (setelah auth middleware)

---

## [2.5.0] — 2026-02-23

### Auth Gate — Login & Register UI
- **Simplified flow**: 2 halaman — Login (dengan toggle) dan Register (terpisah)
- **Login page**:
  - Default mode: Guest Access (Email + Kode Akses)
  - Toggle ke Subscriber Login (Email + Password) via link
  - Kode akses: monospace font, uppercase, center-aligned, placeholder `ATOM-XXXX`
  - Hint: "Kode dari admin atau guru kamu"
- **Register page**: Form Nama + Email + Password, tombol hijau "✨ Daftar"
- **User badge**: Di navbar setelah login — avatar, nama, role, tombol logout
- **Auth service** (`auth.ts`):
  - Token di `localStorage` + `Authorization: Bearer` header
  - Handle nested error format `{ error: { code, message } }`
  - `initAuth()` → cek session saat app load
  - `checkAccess()` → verifikasi hak akses
  - Guest login → konstruksi user dari input data
- **CSS**: Glassmorphism card, gradient button, dark mode + light mode support

---

## [2.4.0] — 2026-02-22

### Mobile Responsiveness & Navigation
- **Hamburger Menu**: Navbar disembunyikan di layar < 680px, digantikan tombol `☰`
- **Slide-in Drawer**: Drawer animasi dari kiri berisi semua nav links + lang/theme toggle
- **Overlay Dismiss**: Klik di luar drawer / tombol ✕ untuk tutup, body scroll dikunci saat open
- **Lang/Theme sync**: Drawer lang & theme button sinkron dengan navbar desktop
- **Breakpoint tambahan**: Nav search disembunyikan di < 420px untuk maximal content

### Bilingual — Learn Modules (Phase 2)
- Tambah `titleEn?`, `bodyEn?` ke interface `LearningStep`
- Tambah `qEn?`, `optionsEn?`, `explanationEn?` ke interface `QuizQuestion`
- `LearnModule.ts` render logic: graceful fallback — jika terjemahan EN belum ada, tampil konten ID
- Modul `what-is-matter` (Level 0.1): **100% bilingual** — semua steps + quiz
- Modul lain: UI chrome bilingual, konten steps/quiz masih ID (ditambah bertahap)

---

## [2.3.0] — 2026-02-21

### Phase 3 — Orbital Models
- **`OrbitalScene.ts`**: Three.js particle cloud untuk visualisasi awan probabilitas s/p/d/f
  - Parse electron config string `1s² 2s² 2p⁶...` → array orbital definitions
  - Instanced particle geometry: 800–2000 titik per orbital
  - Warna berbeda per subculit: s=hijau, p=biru, d=violet, f=amber
  - Support drag rotate + wheel zoom
- **Toggle Bohr/Orbital**: Di panel kiri `ElementDetail.ts`, tombol toggle beralih antara:
  - `AtomScene` (Bohr — orbit lingkaran)
  - `OrbitalScene` (orbital — awan probabilitas kuantum)
- **Hint text dinamis**: Berubah sesuai model aktif
- **CSS toggle**: `.model-toggle`, `.model-toggle-btn`, `.model-toggle-btn--active`

### Phase 2 — Educational Modules (selesai)
- **`/learn`**: Halaman daftar modul dengan hero, stats, level grouping
- **`/learn/:slug`**: Halaman modul individual
- **10 Modul** across 6 Level:
  | Level | Slug | Topik |
  |-------|------|-------|
  | 0 | `what-is-matter` | Apa itu Materi? |
  | 0 | `atom-evidence` | Bukti Bahwa Atom Nyata |
  | 1 | `atom-parts` | Isi Dalam Atom |
  | 1 | `atomic-number` | Nomor Atom & Isotop |
  | 2 | `electron-shells` | Kulit Elektron & Level Energi |
  | 2 | `electron-config` | Membaca Konfigurasi Elektron |
  | 3 | `periodic-table-logic` | Logika Tabel Periodik |
  | 3 | `periodic-trends` | Tren Sifat Periodik |
  | 4 | `chemical-bonds` | Mengapa Atom Bergabung? |
  | 5 | `quantum-model` | Mekanika Kuantum & Orbital |
- **22 soal kuis interaktif** dengan feedback + penjelasan
- **Scroll progress bar** real-time
- **Navigation antar modul** prev/next dalam level
- **Deep link** ke halaman relevan (explore, element detail, phenomena)
- **Level color system**: setiap level punya warna unik
- Bilingual: UI chrome (hero, buttons, labels) penuh bilingual; konten step/quiz bertahap

---

## [2.2.0] — 2026-02-20

### Explore Page Rebuild
- **Periodic Table Integration**: Tabel periodik interaktif langsung di halaman `/explore`
- **Galeri Molekul**: Famous molecules (H₂O, CO₂, NaCl, C₆H₁₂O₆, DNA, dll) dengan deskripsi
- **Banner "Cara Baca Tabel Periodik"**: Panduan visual untuk pemula
- **Atom-Molekul Bridge**: Seksi yang menjelaskan hubungan antara atom dan molekul
- **Bilingual + Responsive**: Full ID/EN support

---

## [2.1.0] — 2026-02-17

### Anatomi Atom — 5 Tab Konteks
- **5 tab**: Human Body · Earth's Crust · Sun · Plants · Universe
- **Konten per tab**: komposisi elemen, insight eksistensial, persentase massa
- **Phenomena Banner**: 5 kartu fenomena terkait di setiap tab
- **Navbar link**: "Anatomi" ditambahkan ke navigasi utama

---

## [2.0.0] — 2026-02-16

### Kimia Lab — Chemistry Deduction Engine
- **Free Mode**: Pilih 2 elemen, lihat reaksi/produk yang mungkin terjadi
- **Challenge Mode**: 10 soal deduksi kimia dengan scoring
- **Deduction Engine**: rules-based lookup 50+ kombinasi elemen
- **Lab UI**: Terminal aesthetic dengan animasi

### Sejarah Atom — Cinematic Timeline
- **22 slide**: Democritus → Dalton → Thomson → Rutherford → Bohr → Quantum
- **Cinematic transitions**: Slide animasi dengan parallax
- **Bilingual**: Full ID/EN

---

## [1.5.0] — 2026-02-14

### Element Detail — Card Expansions
- **Card Penemu**: Foto (bila ada), bio singkat, quote, tahun penemuan — semua 118 elemen
- **Card Asal Usul Kosmik**: Big Bang · Stellar Fusion · Supernova · Neutron Star Merger · Artificial — semua 118
- **Card Keberadaan di Alam**: kelimpahan di kerak bumi, tubuh manusia, lautan
- **Card Fenomena Terkait**: link ke phenomena stories yang relevan

---

## [1.0.0] — 2026-02-10 (Initial Release Foundation)

### Core Features
- **Tabel Periodik Interaktif 3D**: 118 elemen, color-coded per kategori
- **Element Detail Page**: Bohr model 3D, data lengkap (massa, titik leleh, konfigurasi elektron, dll)
- **Navigasi prev/next**: Antar elemen tanpa kembali ke tabel
- **Bilingual EN/ID**: Toggle bahasa real-time
- **Dark/Light mode**: Persistent via localStorage
- **Responsive**: Desktop + tablet (mobile nav fixed di v2.4)
- **React-free**: Vanilla TypeScript + Three.js + Vite

### Data Coverage
- `nameId`, `desc`, `funFact`: semua 118 elemen, bahasa Indonesia
- Konfigurasi elektron, titik leleh/didih, massa atom, kategori, fase
- Phenomena: 27 fenomena, 6 kategori, dengan stories lengkap
