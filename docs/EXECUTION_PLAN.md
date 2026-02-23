# Execution Plan — SAINS Backend
**Date:** 2026-02-22  
**Ref:** `BACKEND_PLAN.md` v1.1  
**Stack:** Go + Gin + pgx + sqlc + Templ + HTMX + Tabler  

---

## Cara Pakai

Setiap **Step** dirancang bisa dikerjakan dalam **1 conversation session** tanpa token habis.
- ✅ = selesai
- 🔧 = sedang dikerjakan
- ⏳ = belum mulai

Setelah selesai 1 step, **tandai ✅** lalu lanjut di conversation baru.
Setiap step punya **deliverable** yang jelas — bisa di-test sebelum lanjut.

---

## Phase BE-1: Foundation (8 Steps)

### Step 1.1 — Project Scaffold ✅
**Goal:** Inisialisasi project Go, folder structure, basic main.go yang bisa dijalanin.

```
Deliverable:
- go mod init github.com/xxx/sains-api
- Folder structure lengkap (cmd/, internal/, db/, templates/, static/)
- main.go: Gin server jalan di :8080, route GET /health → 200 OK
- .gitignore, .env.example
- Bisa `go run cmd/server/main.go` dan akses /health
```

**File yang dibuat:**
```
api/
├── cmd/server/main.go
├── internal/
│   ├── config/config.go        ← load env vars
│   ├── handler/
│   ├── middleware/
│   ├── model/
│   ├── repository/
│   └── service/
├── db/
│   ├── migrations/
│   └── queries/
├── templates/
├── static/
├── go.mod
├── go.sum
├── .env.example
├── .gitignore
└── Makefile
```

---

### Step 1.2 — Database Connection ✅
**Goal:** Connect ke Supabase Postgres via pgx, pool management.

```
Deliverable:
- internal/database/postgres.go: pgx pool init + graceful shutdown
- Config: DATABASE_URL dari env
- Test: GET /health sekarang juga ping DB → "db: ok"
- Bisa `go run` dan lihat "Connected to Postgres" di log
```

**Depends on:** Step 1.1

---

### Step 1.3 — DB Migrations ✅
**Goal:** Setup golang-migrate + buat semua tabel dari BACKEND_PLAN.md.

```
Deliverable:
- db/migrations/000001_init_schema.up.sql   ← create 9 tables + indexes
- db/migrations/000001_init_schema.down.sql ← drop all
- Makefile targets: `make migrate-up`, `make migrate-down`
- Tabel terbuat di Supabase: products, pricing_plans, users, guest_codes,
  guest_logins, subscriptions, sessions, anomaly_logs, access_logs, system_config
- Seed data: INSERT product 'atomic' + quota defaults (max_subscribers=200, max_active_guests=50)
```

**Depends on:** Step 1.2

---

### Step 1.4 — sqlc Setup + Generate ✅
**Goal:** Setup sqlc, tulis queries untuk users + products, generate Go code.

```
Deliverable:
- sqlc.yaml config
- db/queries/users.sql          ← CreateUser, GetUserByEmail, GetUserByID
- db/queries/products.sql       ← GetProduct, ListProducts
- db/queries/sessions.sql       ← CreateSession, GetSession, RevokeSession
- db/queries/system_config.sql  ← GetConfig, UpdateConfig, ListConfigs
- `make sqlc` → internal/repository/ ter-generate
- Build sukses (go build ./...)
```

**Depends on:** Step 1.3

---

### Step 1.5 — Auth: Register + Login ✅
**Goal:** Endpoint register dan login dasar, belum ada JWT.

```
Deliverable:
- POST /api/auth/register
  body: { email, password, name }
  → hash password (bcrypt) → insert user → 201
- POST /api/auth/login
  body: { email, password }
  → verify password → return user data → 200
- Validation: email format, password min 8 char
- Error handling: duplicate email, wrong password
- Test via curl/Postman
```

**Depends on:** Step 1.4

---

### Step 1.6 — JWT + httpOnly Cookie ✅
**Goal:** Access Token (JWT) + Refresh Token di httpOnly cookie.

```
Deliverable:
- Login sekarang return httpOnly cookies (AT + RT)
- AT: JWT, exp 1 jam, payload { sub, email, type }
- RT: opaque random string, hash bcrypt → simpan di sessions table
- POST /api/auth/refresh → tukar RT lama → AT + RT baru
- POST /api/auth/logout → revoke RT, clear cookies
- GET /api/auth/me → return user info (butuh valid AT)
- internal/middleware/auth.go → AuthRequired() middleware
```

**Depends on:** Step 1.5

---

### Step 1.7 — Single Session Rule ✅
**Goal:** Login baru otomatis revoke session lama + anomaly logging.

```
Deliverable:
- Login: cek sessions WHERE user_id AND is_active = TRUE
- Jika ada → revoke (is_active=FALSE, revoke_reason='new_login')
- Insert anomaly_logs (event='session_displaced')
- Insert session baru
- Test: login 2x → session pertama ter-revoke
- Anomaly log tercatat
```

**Depends on:** Step 1.6

---

### Step 1.8 — CORS + Rate Limit ✅
**Goal:** Basic middleware production-ready.

```
Deliverable:
- internal/middleware/cors.go → gin-contrib/cors, whitelist origins
- internal/middleware/ratelimit.go → /api/auth/login max 5/mnt per IP
- internal/middleware/ratelimit.go → /api/auth/register max 3/jam per IP
- Test: exceed rate limit → 429 Too Many Requests
- Makefile: `make dev` (GIN_MODE=debug), `make build` (production binary)
```

**Depends on:** Step 1.7

---

## Phase BE-2: Subscription (5 Steps)

### Step 2.1 — Pricing Plans CRUD ✅
**Goal:** Admin bisa manage pricing plans via API.

```
Deliverable:
- sqlc queries: pricing_plans CRUD
- GET  /api/plans?product=atomic&segment=student → list plans
- POST /admin/pricing-plans → create/update plan (admin only)
- Seed data: 12 pricing plans (3 segmen × 4 durasi) untuk atomic
- Test: GET /api/plans return data
```

**Depends on:** Step 1.8

---

### Step 2.2 — Xendit Checkout ✅
**Goal:** User bisa mulai checkout → redirect ke Xendit payment page.

```
Deliverable:
- internal/service/xendit.go → CreateInvoice via REST API
- POST /api/checkout { plan_id } → buat Xendit invoice → return checkout_url
- INSERT subscriptions (status='pending', xendit_invoice_id)
- Test: hit endpoint → dapat URL Xendit (sandbox mode)
```

**Depends on:** Step 2.1

---

### Step 2.3 — Xendit Webhook ✅
**Goal:** Terima callback dari Xendit setelah pembayaran.

```
Deliverable:
- POST /api/xendit/webhook → verify X-Callback-Token header (HMAC)
- Handler PAID: update subscription status='active', set expires_at
- Handler EXPIRED: update subscription status='expired'
- Update user is_active = TRUE setelah bayar
- Idempotency check: xendit_payment_id tidak duplikat
- Test: simulate webhook via curl
```

**Depends on:** Step 2.2

---

### Step 2.4 — Access Check + Subscription Query ✅
**Goal:** Frontend bisa cek apakah user punya akses ke produk.

```
Deliverable:
- GET /api/access-check?product=atomic → 200 (granted) atau 403 (no access)
- GET /api/subscriptions/me → list semua subscription user
- Middleware cek: subscription.expires_at > now()
- **Quota middleware:**
  - Register: cek subscriber count vs max_subscribers → 503 jika penuh
  - Guest login: cek active guest sessions vs max_active_guests → 503 jika penuh
  - Subscriber login: SELALU diizinkan (sudah bayar)
  - Warning email ke admin saat > 80% quota
- GET /api/quota-status → public: { subscribers: {current, max}, guests: {current, max} }
- Test: user tanpa subscription → 403, user aktif → 200, quota penuh → 503
```

**Depends on:** Step 2.3

---

### Step 2.5 — Email via Resend ✅
**Goal:** Kirim email transaksional (welcome, reminder).

```
Deliverable:
- internal/service/email.go → Resend Go SDK wrapper
- Welcome email setelah subscription aktif (dari webhook)
- Email template HTML sederhana
- Test: buat subscription → email terkirim
```

**Depends on:** Step 2.4

---

## Phase BE-3: Guest + Security (4 Steps)

### Step 3.1 — Guest Code System ✅
**Goal:** Admin generate guest code, bisa dishare ke banyak orang.

```
Deliverable:
- sqlc queries: guest_codes CRUD, guest_logins CRUD
- POST /admin/guest-codes → generate code (label, expires_hours, max_logins_per_email)
- GET  /admin/guest-codes → list codes + usage stats
- GET  /admin/guest-codes/:id → detail + list email yang pakai
- DELETE /admin/guest-codes/:id → revoke code
- Code format: "ATOM-XXXX" (random 4 char alphanumeric)
- Test: generate code → lihat di list
```

**Depends on:** Step 2.5

---

### Step 3.2 — Guest Login Flow ✅
**Goal:** User login sebagai guest pakai email + code.

```
Deliverable:
- POST /api/auth/guest-login { code, email }
- Validasi: code aktif, belum expired
- Cek guest_logins: email + code → login_count < max
- Jika OK → create session (24 jam) → set cookies
- Jika exceeded → 403 "Trial habis"
- UPSERT guest_logins: increment login_count
- Test: login 2x → OK, login 3x → ditolak
```

**Depends on:** Step 3.1

---

### Step 3.3 — Device Fingerprint + IP Logging ✅ (SKIPPED — using DB login logs only)
**Goal:** Log device info dan IP per session + per request.

```
Deliverable:
- Login: simpan device_fingerprint, ip_at_login, user_agent, country_code
- Device fingerprint: sha256(userAgent + screenRes + timezone + platform)
- Middleware: log access_logs (user_id, session_id, ip, endpoint, method, status)
- IP geolocation: panggil ip-api.com → simpan country_code
- Test: login → cek sessions table ada device info
```

**Depends on:** Step 3.2

---

### Step 3.4 — Anomaly Scoring Engine ✅
**Goal:** Deteksi sharing akun berdasarkan skor anomali.

```
Deliverable:
- internal/service/anomaly.go → scoring engine
- Events: session_displaced (+5), IP change <1h (+8), country change 24h (+15)
- Score decay: -5 per 7 hari tanpa event
- Threshold actions:
  < 10 → normal
  10-24 → warning (log only, nanti email dari admin dashboard)
  25-49 → temporary lock 24h
  ≥ 50 → auto-lock, butuh admin unlock
- Admin API: GET /admin/anomalies, POST /admin/users/:id/lock|unlock
- Test: simulate displaced sessions → skor naik
```

**Depends on:** Step 3.3

---

## Phase BE-4: Admin Dashboard (5 Steps)

### Step 4.1 — Admin Layout + Auth ✅
**Goal:** Templ + HTMX + Tabler setup, layout dasar, admin login.

```
Deliverable:
- ✅ Setup Tabler CSS (dark theme, CDN) + HTMX + Tabler Icons
- ✅ templates/layout.html → sidebar nav + header + content area
- ✅ Admin routes wired via adminpkg.NewAdminHandler(queries)
- ✅ GET /admin/ → dashboard page (fully functional)
- ✅ go:embed templates/ ke binary
- ✅ Test: `go run` → buka /admin/ → layout Tabler renders

Catatan implementasi:
- Pakai html/template (bukan Templ CLI) → lebih simple, no build step
- Templates di-embed via Go embed.FS
- Per-page template parsing (layout.html + page.html) to avoid name collision
- ✅ Admin auth via cookie-based JWT (admin_token httpOnly cookie)
- ✅ Login page: GET/POST /admin/login
- ✅ Logout: GET /admin/logout
- ✅ AdminAuthMiddleware: redirect ke login jika belum autentikasi
```

**Depends on:** Step 3.4

---

### Step 4.2 — Dashboard Overview ✅
**Goal:** Halaman utama admin dengan stats dan chart.

```
Deliverable:
- ✅ GET /admin/ → stat cards: total revenue, active subs, active guests, total users
- ✅ Quota widget: progress bar subscribers (0/200) + guests (3/50)
- ✅ Recent subscriptions table (real DB data)
- ✅ Recent anomalies section
- ✅ Active guest codes summary with login counts
- ✅ Chart.js: revenue line chart (dedicated revenue analytics page)
- ✅ Chart.js: doughnut chart subscription by segment
- ⏳ System config panel (belum — next iteration)
- ✅ Test: buka /admin/ → data real dari DB tampil
```

**Depends on:** Step 4.1

---

### Step 4.3 — User + Anomaly Management ✅
**Goal:** Halaman user list, detail, anomaly center.

```
Deliverable:
- ✅ GET /admin/users → table (search by email, filter by role)
- ✅ GET /admin/users/:id → detail: info, sessions, anomaly logs, subscriptions
- ✅ POST /admin/users/:id/lock → lock + revoke all sessions
- ✅ POST /admin/users/:id/unlock → unlock
- ✅ GET /admin/anomalies → flagged accounts (score >= 10), sorted by score
- ✅ Pagination, search, role filter
- ✅ Added ListSessionsByUser query
- ✅ Test: search user → lihat detail → lock → verify
```

**Depends on:** Step 4.2

---

### Step 4.4 — Guest Code + Subscription Pages ✅
**Goal:** Admin manage guest codes dan lihat subscriptions.

```
Deliverable:
- ✅ GET /admin/guest-codes → list codes + usage stats + max logins
- ✅ POST /admin/guest-codes/create → generate form (label, max_logins, duration hours)
- ✅ GET /admin/guest-codes/:id → detail: list email, login count, last login
- ✅ DELETE /admin/guest-codes/:id/revoke → revoke code
- ✅ GET /admin/subscriptions → table (filter by status: active/pending/expired)
- ✅ Test: generate code → lihat usage → revoke
```

**Depends on:** Step 4.3

---

### Step 4.5 — Pricing + Revenue Pages ✅ (partial)
**Goal:** Admin manage harga dan lihat analytics revenue.

```
Deliverable:
- ✅ GET /admin/pricing → tabel harga per segmen × durasi (segment grouping)
- ✅ Inline edit harga (PUT /admin/pricing/:id — HTMX inline price editing)
- ✅ GET /admin/revenue → revenue analytics (3 charts: line, doughnut, stacked bar)
- ✅ Chart.js integration (revenue line, segment doughnut, subscription trend bar)
- ⏳ Product management (belum — saat ini hanya 'atomic')
- ✅ Pricing plans list with IDR formatting
```

**Depends on:** Step 4.4

---

## Phase BE-5: Hardening (3 Steps)

### Step 5.1 — Rate Limit + CORS Production ⏳
**Goal:** Production-grade rate limiting dan CORS.

```
Deliverable:
- Per-endpoint rate limit (bukan global): login, register, checkout
- CORS: only allow sains.id origins in production
- Request size limit
- Timeout per handler
- Test: ab/wrk load test → rate limit works
```

**Depends on:** Step 4.5

---

### Step 5.2 — Audit Logs + Monitoring ⏳
**Goal:** Comprehensive logging dan error tracking.

```
Deliverable:
- Structured logging: zerolog/slog → semua handler
- Request ID per request (middleware)
- Sentry integration untuk error tracking
- Health check endpoint extended: DB, Xendit, Resend
- Test: trigger error → muncul di Sentry
```

**Depends on:** Step 5.1

---

### Step 5.3 — Docker + Deploy ⏳
**Goal:** Production Docker build + Railway deploy.

```
Deliverable:
- Dockerfile: multi-stage build (Go compile → scratch/alpine)
- docker-compose.yml (local dev: Go + Postgres)
- Railway config: railway.toml
- CI: build + test on push
- Final binary size target: < 30MB
- Test: docker build → docker run → hit endpoints
```

**Depends on:** Step 5.2

---

## Ringkasan

| Phase | Steps | Inti |
|-------|-------|------|
| **BE-1** Foundation | 1.1 → 1.8 | Project setup, DB, Auth, Session, Middleware |
| **BE-2** Subscription | 2.1 → 2.5 | Pricing, Xendit, Webhook, Access check + **Quota**, Email |
| **BE-3** Guest + Security | 3.1 → 3.4 | Guest codes, Login flow, Fingerprint, Anomaly |
| **BE-4** Admin Dashboard | 4.1 → 4.5 | Templ/HTMX layout, Stats + **Quota widget**, Users, Codes, Revenue |
| **BE-5** Hardening | 5.1 → 5.3 | Rate limit, Monitoring, Docker deploy |
| **Total** | **25 steps** | Setiap step ≈ 1 conversation session |

---

## Cara Resume

Kalau mau lanjut, tinggal bilang:
> "Lanjut step 1.3"

atau

> "Lanjut dari terakhir"

Aku akan cek step mana yang sudah ✅ dan lanjut dari situ.
