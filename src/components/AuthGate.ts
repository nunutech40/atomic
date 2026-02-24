// ── Auth Gate — Login / Register screens ─────────────────────────────
import { login, guestLogin, register, getUser, logout } from '../core/auth';
import { getLang } from '../core/i18n';

type GateMode = 'login' | 'register';
type LoginType = 'subscriber' | 'guest';

// ── Main entry: mount the auth gate ──────────────────────────────────

export function renderAuthGate(container: HTMLElement, onSuccess: () => void) {
  let mode: GateMode = 'login';
  let loginType: LoginType = 'guest'; // default to guest since most users will use guest code

  function render() {
    const isId = getLang() === 'id';

    container.innerHTML = `
      <div class="auth-gate">
        <div class="auth-gate-bg">
          <div class="auth-orbit auth-orbit-1"></div>
          <div class="auth-orbit auth-orbit-2"></div>
          <div class="auth-orbit auth-orbit-3"></div>
          <div class="auth-nucleus"></div>
        </div>

        <div class="auth-card">
          <div class="auth-logo">⚛</div>
          <h1 class="auth-title">Atomic</h1>
          <p class="auth-subtitle">${isId ? 'Penjelajah Atom 3D Interaktif' : 'Interactive 3D Atom Explorer'}</p>

          ${mode === 'login' ? renderLoginPage(isId, loginType) : renderRegisterPage(isId)}

          <div id="auth-error" class="auth-error" style="display:none"></div>
          <div id="auth-success" class="auth-success" style="display:none"></div>
        </div>
      </div>
    `;

    // Wire form
    wireForm(container, isId, onSuccess, () => mode, () => loginType);

    // Wire login type toggle
    const toggleLink = container.querySelector('#toggle-login-type');
    if (toggleLink) {
      toggleLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginType = loginType === 'subscriber' ? 'guest' : 'subscriber';
        render();
      });
    }

    // Wire navigation to register
    const registerLink = container.querySelector('#goto-register');
    if (registerLink) {
      registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        mode = 'register';
        render();
      });
    }

    // Wire navigation back to login
    const loginLink = container.querySelector('#goto-login');
    if (loginLink) {
      loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        mode = 'login';
        render();
      });
    }
  }

  render();
}

// ── Login Page (single form, toggles between subscriber & guest) ─────

function renderLoginPage(isId: boolean, loginType: LoginType): string {
  const isGuest = loginType === 'guest';

  return `
    <div class="auth-page-header">
      <h2 class="auth-page-title">${isGuest ? '🎟️' : '🔑'} ${isId ? 'Masuk' : 'Sign In'}</h2>
    </div>

    <form id="auth-form" class="auth-form">
      <div class="auth-field">
        <label>Email</label>
        <input type="email" id="auth-email"
               placeholder="${isId ? 'emailmu@contoh.com' : 'your@email.com'}"
               required autocomplete="email" />
      </div>
      <div class="auth-field">
        <label>${isGuest
      ? (isId ? 'Kode Akses' : 'Access Code')
      : 'Password'}</label>
        <input type="${isGuest ? 'text' : 'password'}" id="auth-password"
               placeholder="${isGuest ? 'ATOM-XXXX' : '••••••••'}"
               required autocomplete="${isGuest ? 'off' : 'current-password'}"
               ${isGuest ? 'class="auth-code-input"' : ''} />
        ${isGuest ? `<span class="auth-field-hint">${isId ? 'Kode dari admin atau guru kamu' : 'Code from your admin or teacher'}</span>` : ''}
      </div>
      <button type="submit" class="auth-submit">
        ${isGuest ? '🎟️' : '🔑'} ${isId ? 'Masuk' : 'Sign In'}
      </button>
    </form>

    <a href="#" id="toggle-login-type" class="auth-toggle-link">
      ${isGuest
      ? (isId ? '🔑 Punya akun subscriber? Login di sini' : '🔑 Have a subscriber account? Login here')
      : (isId ? '🎟️ Punya guest code? Masuk di sini' : '🎟️ Have a guest code? Enter here')}
    </a>

    <div class="auth-nav-bottom">
      ${isId ? 'Belum punya akun?' : "Don't have an account?"}
      <a href="#" id="goto-register">${isId ? 'Daftar' : 'Register'}</a>
    </div>
  `;
}

// ── Register Page ────────────────────────────────────────────────────

function renderRegisterPage(isId: boolean): string {
  return `
    <div class="auth-page-header">
      <h2 class="auth-page-title">✨ ${isId ? 'Buat Akun' : 'Create Account'}</h2>
    </div>

    <form id="auth-form" class="auth-form">
      <div class="auth-field">
        <label>${isId ? 'Nama' : 'Name'}</label>
        <input type="text" id="auth-name"
               placeholder="${isId ? 'Nama lengkap' : 'Full name'}"
               required autocomplete="name" minlength="2" />
      </div>
      <div class="auth-field">
        <label>Email</label>
        <input type="email" id="auth-email"
               placeholder="${isId ? 'emailmu@contoh.com' : 'your@email.com'}"
               required autocomplete="email" />
      </div>
      <div class="auth-field">
        <label>Password</label>
        <input type="password" id="auth-password"
               placeholder="${isId ? 'Minimal 8 karakter' : 'Min 8 characters'}"
               required autocomplete="new-password" minlength="8" />
      </div>
      <button type="submit" class="auth-submit auth-submit--register">
        ✨ ${isId ? 'Daftar' : 'Register'}
      </button>
    </form>

    <div class="auth-nav-bottom">
      ${isId ? 'Sudah punya akun?' : 'Already have an account?'}
      <a href="#" id="goto-login">${isId ? 'Masuk' : 'Sign in'}</a>
    </div>
  `;
}

// ── Wire form submission ─────────────────────────────────────────────

function wireForm(
  container: HTMLElement,
  isId: boolean,
  onSuccess: () => void,
  getMode: () => GateMode,
  getLoginType: () => LoginType,
) {
  const form = container.querySelector('#auth-form') as HTMLFormElement;
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const mode = getMode();
    const btn = form.querySelector('.auth-submit') as HTMLButtonElement;
    const errorEl = container.querySelector('#auth-error') as HTMLElement;
    const successEl = container.querySelector('#auth-success') as HTMLElement;

    errorEl.style.display = 'none';
    successEl.style.display = 'none';
    btn.disabled = true;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="auth-spinner"></span>';

    let result: { ok: boolean; error?: string };

    try {
      if (mode === 'login') {
        const email = (form.querySelector('#auth-email') as HTMLInputElement).value.trim();
        const passwordOrCode = (form.querySelector('#auth-password') as HTMLInputElement).value.trim();

        if (getLoginType() === 'guest') {
          result = await guestLogin(passwordOrCode, email);
        } else {
          result = await login(email, passwordOrCode);
        }
      } else {
        // Register
        const name = (form.querySelector('#auth-name') as HTMLInputElement).value.trim();
        const email = (form.querySelector('#auth-email') as HTMLInputElement).value.trim();
        const password = (form.querySelector('#auth-password') as HTMLInputElement).value;
        result = await register(email, password, name);

        if (result.ok) {
          successEl.textContent = isId
            ? '✅ Berhasil daftar! Silakan login.'
            : '✅ Registered! Please login.';
          successEl.style.display = 'block';
          btn.disabled = false;
          btn.innerHTML = originalText;
          return;
        }
      }

      if (result!.ok) {
        onSuccess();
      } else {
        errorEl.textContent = result!.error || (isId ? 'Terjadi kesalahan' : 'Something went wrong');
        errorEl.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = originalText;
      }
    } catch {
      errorEl.textContent = isId ? 'Gagal terhubung ke server' : 'Failed to connect to server';
      errorEl.style.display = 'block';
      btn.disabled = false;
      btn.innerHTML = originalText;
    }
  });
}

// ── User Badge (for nav bar after login) ─────────────────────────────

export function renderUserBadge(): string {
  const user = getUser();
  if (!user) return '';

  const isId = getLang() === 'id';
  const displayName = user.name || user.email.split('@')[0];
  const roleLabel = user.role === 'guest'
    ? '🎟️ Guest'
    : user.role === 'admin'
      ? '👑 Admin'
      : '⭐ Subscriber';

  return `
    <div class="user-badge" id="user-badge">
      <div class="user-badge-avatar">${displayName.charAt(0).toUpperCase()}</div>
      <div class="user-badge-info">
        <span class="user-badge-name">${displayName}</span>
        <span class="user-badge-role">${roleLabel}</span>
      </div>
      <button class="user-badge-logout" id="user-logout-btn" title="${isId ? 'Keluar' : 'Logout'}">
        ⎋
      </button>
    </div>
  `;
}

export function wireUserBadge(container: HTMLElement) {
  const logoutBtn = container.querySelector('#user-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      await logout();
    });
  }
}
