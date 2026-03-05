// ── PricingPage — Welcoming subscription page for subscribers ─────────
// This is NOT a "forbidden" page — it's an invitation to start learning.
// Shown instead of the full app when:
//   - New subscriber (just registered, hasn't paid yet)
//   - Expired subscriber (plan ended, time to renew)
// Not shown for guest or admin users (they bypass this).

import { config } from '../core/config';
import { getUser, getAccessToken, logout } from '../core/auth';
import { getLang } from '../core/i18n';

interface PricingPlan {
  id: string;
  product_id: string;
  segment: string;
  label: string;
  duration_days: number;
  price_idr: number;
  price_usd: number;
  is_active: boolean;
}

export function renderPricingPage(container: HTMLElement, _onAccessGranted: () => void): () => void {
  const isId = getLang() === 'id';
  const user = getUser();
  const firstName = user?.name?.split(' ')[0] || '';

  container.innerHTML = `
    <div class="pricing-gate">
      <div class="pricing-gate-bg">
        <div class="auth-orbit auth-orbit-1"></div>
        <div class="auth-orbit auth-orbit-2"></div>
        <div class="auth-orbit auth-orbit-3"></div>
        <div class="auth-nucleus"></div>
      </div>

      <div class="pricing-gate-content">

        <!-- Hero Section — warm greeting -->
        <div class="pg-hero">
          <div class="pg-hero-icon">⚛️</div>
          <h1 class="pg-hero-title">
            ${isId
      ? `${firstName ? `Hai ${firstName}!` : 'Hai!'} Tinggal selangkah lagi 🚀`
      : `${firstName ? `Hey ${firstName}!` : 'Hey!'} One step away 🚀`}
          </h1>
          <p class="pg-hero-sub">
            ${isId
      ? 'Pilih paketmu dan mulai jelajahi 118 elemen dalam 3D — belajar kimia gak pernah se-seru ini!'
      : 'Pick your plan and start exploring 118 elements in 3D — chemistry has never been this fun!'}
          </p>
        </div>

        <!-- Feature highlights — show what they get -->
        <div class="pg-highlights">
          <div class="pg-highlight">
            <span class="pg-highlight-icon">🔬</span>
            <span>${isId ? 'Model Atom 3D' : '3D Atom Models'}</span>
          </div>
          <div class="pg-highlight">
            <span class="pg-highlight-icon">🧪</span>
            <span>${isId ? 'Kimia Lab' : 'Chemistry Lab'}</span>
          </div>
          <div class="pg-highlight">
            <span class="pg-highlight-icon">📊</span>
            <span>${isId ? '118 Elemen' : '118 Elements'}</span>
          </div>
          <div class="pg-highlight">
            <span class="pg-highlight-icon">🌐</span>
            <span>${isId ? 'Bilingual' : 'Bilingual'}</span>
          </div>
          <div class="pg-highlight">
            <span class="pg-highlight-icon">📱</span>
            <span>${isId ? 'Buka di Mana Aja' : 'Access Anywhere'}</span>
          </div>
          <div class="pg-highlight">
            <span class="pg-highlight-icon">⚡</span>
            <span>${isId ? 'Akses Instan' : 'Instant Access'}</span>
          </div>
        </div>

        <!-- Pricing cards -->
        <div class="pricing-gate-cards" id="pricing-gate-cards">
          <div class="pricing-gate-loading">
            <div class="auth-spinner"></div>
            <span>${isId ? 'Memuat paket...' : 'Loading plans...'}</span>
          </div>
        </div>

        <!-- Trust signals -->
        <div class="pg-trust">
          <div class="pg-trust-item">
            <span>🔒</span>
            <span>${isId ? 'Pembayaran aman' : 'Secure payment'}</span>
          </div>
          <div class="pg-trust-item">
            <span>⚡</span>
            <span>${isId ? 'Langsung aktif' : 'Instant activation'}</span>
          </div>
          <div class="pg-trust-item">
            <span>💳</span>
            <span>QRIS · GoPay · Transfer</span>
          </div>
        </div>

        <!-- Footer -->
        <div class="pricing-gate-footer">
          <p class="pg-footer-note">
            ${isId
      ? '🎓 Lebih murah dari bimbel, lebih seru dari buku teks'
      : '🎓 Cheaper than tutoring, more fun than textbooks'}
          </p>
          <button class="pricing-gate-logout" id="pricing-gate-logout">
            ${isId ? '← Keluar' : '← Sign out'}
          </button>
        </div>
      </div>

      <!-- Checkout overlay -->
      <div class="pricing-gate-overlay hidden" id="pricing-checkout-overlay">
        <div class="pricing-checkout-modal">
          <div class="pricing-checkout-spinner">
            <div class="auth-spinner" style="width:32px;height:32px;border-width:3px"></div>
          </div>
          <h3>${isId ? 'Menyiapkan Pembayaran...' : 'Preparing Payment...'}</h3>
          <p>${isId
      ? 'Kamu akan dialihkan ke halaman pembayaran yang aman.'
      : 'You will be redirected to a secure payment page.'}</p>
        </div>
      </div>
    </div>
  `;

  // ── Fetch plans & render cards ──
  fetchAndRenderPlans(container, isId);

  // ── Logout button ──
  const logoutBtn = container.querySelector('#pricing-gate-logout') as HTMLButtonElement;
  logoutBtn?.addEventListener('click', async () => {
    await logout();
    window.location.reload();
  });

  return () => { /* cleanup */ };
}

async function fetchAndRenderPlans(
  container: HTMLElement,
  isId: boolean,
) {
  const cardsContainer = container.querySelector('#pricing-gate-cards') as HTMLElement;

  try {
    const res = await fetch(`${config.apiBase}/api/plans`);
    const json = await res.json();

    if (!json.data) throw new Error('No plans data');

    // Filter to student segment
    const plans: PricingPlan[] = json.data
      .filter((p: PricingPlan) => p.segment === 'student' && p.is_active)
      .sort((a: PricingPlan, b: PricingPlan) => a.price_idr - b.price_idr);

    if (plans.length === 0) {
      cardsContainer.innerHTML = `
        <p class="pricing-gate-empty">
          ${isId ? 'Paket sedang disiapkan. Cek lagi nanti ya!' : 'Plans are being prepared. Check back soon!'}
        </p>`;
      return;
    }

    // Find best value (lowest per-month cost)
    const withMonthly = plans.map(p => ({
      ...p,
      months: Math.round(p.duration_days / 30),
      monthlyRate: p.price_idr / Math.max(1, Math.round(p.duration_days / 30))
    }));
    const bestValue = withMonthly.reduce((best, p) =>
      p.monthlyRate < best.monthlyRate ? p : best
    );

    cardsContainer.innerHTML = plans.map(plan => {
      const months = Math.round(plan.duration_days / 30);
      const monthlyRate = Math.round(plan.price_idr / Math.max(1, months));
      const isPopular = plan.id === bestValue.id;
      const durationLabel = getDurationLabel(months, isId);

      // Anchor pricing (compare vs monthly)
      const baseMonthly = plans[0].price_idr;
      const anchorPrice = baseMonthly * months;
      const discount = months > 1 ? Math.round((1 - plan.price_idr / anchorPrice) * 100) : 0;

      // Coffee analogy — relatable for SMA students
      const coffeePerMonth = Math.round(plan.price_idr / months / 35000 * 10) / 10;
      const coffeeText = coffeePerMonth <= 2
        ? (isId ? `Seharga ${coffeePerMonth <= 1.5 ? '1–2' : '2'} gelas kopi café ☕` : `Just ${coffeePerMonth <= 1.5 ? '1–2' : '2'} cups of coffee ☕`)
        : (isId ? `≈ ${Math.ceil(coffeePerMonth)} gelas kopi/bulan ☕` : `≈ ${Math.ceil(coffeePerMonth)} cups/month ☕`);

      // Daily cost for perspective
      const dailyCost = Math.round(plan.price_idr / plan.duration_days);
      const dailyText = isId ? `Rp ${formatNum(dailyCost)}/hari` : `Rp ${formatNum(dailyCost)}/day`;

      return `
        <div class="pg-card ${isPopular ? 'pg-card--popular' : ''}" data-plan-id="${plan.id}">
          ${isPopular ? `<div class="pg-badge">${isId ? '🔥 Paling Hemat' : '🔥 Best Value'}</div>` : ''}
          <div class="pg-duration">${durationLabel}</div>
          ${months > 1 ? `<div class="pg-original">Rp ${formatNum(anchorPrice)}</div>` : ''}
          <div class="pg-price">
            <span class="pg-currency">Rp</span>
            <span class="pg-amount">${formatNum(plan.price_idr)}</span>
          </div>
          <div class="pg-monthly">
            ${months > 1
          ? `Rp ${formatNum(monthlyRate)}/${isId ? 'bulan' : 'month'}`
          : `${isId ? 'per bulan' : 'per month'}`}
          </div>
          <div class="pg-daily">${dailyText}</div>
          <div class="pg-coffee">${coffeeText}</div>
          ${months > 1
          ? `<div class="pg-save">🎉 ${isId ? 'Hemat' : 'Save'} ${discount}%</div>`
          : '<div style="height:28px"></div>'}
          <ul class="pg-features">
            <li>✅ ${isId ? 'Semua 118 elemen interaktif' : 'All 118 interactive elements'}</li>
            <li>✅ ${isId ? 'Molecule Builder + Kimia Lab' : 'Molecule Builder + Chemistry Lab'}</li>
            <li>✅ ${isId ? 'Model atom 3D putar & zoom' : '3D atom models rotate & zoom'}</li>
            <li>✅ ${isId ? 'Bilingual Indonesia & English' : 'Bilingual ID & EN'}</li>
            <li>✅ ${isId ? `Akses penuh ${durationLabel.toLowerCase()}` : `Full access for ${durationLabel.toLowerCase()}`}</li>
          </ul>
          <button class="pg-btn" data-plan-id="${plan.id}">
            ${isPopular
          ? (isId ? '🚀 Mulai Belajar' : '🚀 Start Learning')
          : (isId ? 'Pilih Paket' : 'Choose Plan')}
          </button>
        </div>`;
    }).join('');

    // Wire plan buttons
    cardsContainer.querySelectorAll('.pg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const planId = (btn as HTMLElement).dataset.planId!;
        handleCheckout(container, planId, isId);
      });
    });

  } catch (err) {
    console.error('Failed to fetch plans:', err);
    cardsContainer.innerHTML = `
      <p class="pricing-gate-error">
        ${isId
        ? '😕 Gagal memuat paket. Coba refresh halaman.'
        : '😕 Failed to load plans. Try refreshing the page.'}
        <br><small>${(err as Error).message}</small>
      </p>`;
  }
}

async function handleCheckout(
  container: HTMLElement,
  planId: string,
  isId: boolean,
) {
  const overlay = container.querySelector('#pricing-checkout-overlay') as HTMLElement;
  overlay?.classList.remove('hidden');

  try {
    const token = getAccessToken();
    if (!token) {
      throw new Error(isId ? 'Sesi habis — silakan login ulang' : 'Session expired — please re-login');
    }

    const res = await fetch(`${config.apiBase}/api/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify({
        plan_id: planId,
        utm_source: 'atomic-app',
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || data.error?.message || (isId ? 'Checkout gagal' : 'Checkout failed'));
    }

    const checkoutUrl = data.data?.checkout_url;
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else {
      throw new Error(isId ? 'URL pembayaran tidak tersedia' : 'Payment URL not available');
    }
  } catch (err) {
    overlay?.classList.add('hidden');
    alert((err as Error).message);
  }
}

function getDurationLabel(months: number, isId: boolean): string {
  if (isId) {
    if (months === 1) return '1 Bulan';
    if (months === 3) return '3 Bulan';
    if (months === 6) return '6 Bulan';
    if (months === 12) return '1 Tahun';
    return `${months} Bulan`;
  } else {
    if (months === 1) return '1 Month';
    if (months === 3) return '3 Months';
    if (months === 6) return '6 Months';
    if (months === 12) return '1 Year';
    return `${months} Months`;
  }
}

function formatNum(n: number): string {
  return new Intl.NumberFormat('id-ID').format(n);
}
