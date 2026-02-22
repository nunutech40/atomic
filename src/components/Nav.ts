import { elements } from '../data/elements';
import { categories } from '../data/categories';
import { navigate } from '../core/router';
import { t, getLang, toggleLang } from '../core/i18n';
import { getTheme, toggleTheme } from '../core/theme';

export function renderNav(container: HTMLElement, onSearch: (q: string) => void, onLangChange: () => void) {
  container.innerHTML = `
    <nav class="nav" id="main-nav">
      <div class="nav-logo" id="nav-logo" style="cursor:pointer">⚛ Atomic</div>
      <div class="nav-search">
        <span class="nav-search-icon">🔍</span>
        <input type="text" id="search-input" placeholder="${t('nav.search')}" autocomplete="off" />
      </div>
      <div class="nav-links">
        <a class="nav-link" id="nav-home" href="#/">🏠 ${t('nav.home')}</a>
        <a class="nav-link" id="nav-tabel" href="#/explore">🔬 ${t('nav.explore')}</a>
        <a class="nav-link" id="nav-belajar" href="#/learn">📚 ${getLang() === 'en' ? 'Learn' : 'Belajar'}</a>
        <a class="nav-link" id="nav-kimia-lab" href="#/molecule">⚗️ ${t('nav.lab')}</a>
        <a class="nav-link" id="nav-fenomena" href="#/phenomena">⚡ ${t('nav.phenomena')}</a>
        <a class="nav-link" id="nav-anatomi" href="#/composition">🧬 ${getLang() === 'en' ? 'Anatomy' : 'Anatomi'}</a>
      </div>
      <button class="nav-btn" id="lang-btn">${getLang() === 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}</button>
      <button class="nav-btn" id="theme-btn">${getTheme() === 'dark' ? '☀️' : '🌙'}</button>
      <button class="nav-burger" id="nav-burger" aria-label="Menu">☰</button>
    </nav>

    <!-- Mobile drawer -->
    <div class="nav-drawer" id="nav-drawer" aria-hidden="true">
      <div class="nav-drawer-header">
        <span class="nav-drawer-logo">⚛ Atomic</span>
        <button class="nav-drawer-close" id="nav-drawer-close">✕</button>
      </div>
      <div class="nav-drawer-links">
        <a class="nav-drawer-link" href="#/">🏠 ${t('nav.home')}</a>
        <a class="nav-drawer-link" href="#/explore">🔬 ${t('nav.explore')}</a>
        <a class="nav-drawer-link" href="#/learn">📚 ${getLang() === 'en' ? 'Learn' : 'Belajar'}</a>
        <a class="nav-drawer-link" href="#/molecule">⚗️ ${t('nav.lab')}</a>
        <a class="nav-drawer-link" href="#/phenomena">⚡ ${t('nav.phenomena')}</a>
        <a class="nav-drawer-link" href="#/composition">🧬 ${getLang() === 'en' ? 'Anatomy' : 'Anatomi'}</a>
      </div>
      <div class="nav-drawer-footer">
        <button class="nav-drawer-util" id="drawer-lang-btn">${getLang() === 'id' ? '🇮🇩 Bahasa Indonesia' : '🇬🇧 English'}</button>
        <button class="nav-drawer-util" id="drawer-theme-btn">${getTheme() === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
      </div>
    </div>
    <div class="nav-drawer-overlay" id="nav-drawer-overlay"></div>

    <div id="search-dropdown" style="display:none;position:absolute;z-index:200;width:340px;
      background:var(--bg-3);border:1px solid var(--border);border-radius:var(--radius);
      box-shadow:var(--shadow);max-height:320px;overflow-y:auto;margin-top:4px;"></div>
  `;

  const searchInput = container.querySelector('#search-input') as HTMLInputElement;
  const searchDrop = container.querySelector('#search-dropdown') as HTMLElement;
  const langBtn = container.querySelector('#lang-btn') as HTMLButtonElement;
  const themeBtn = container.querySelector('#theme-btn') as HTMLButtonElement;
  const logoEl = container.querySelector('#nav-logo') as HTMLElement;
  const burger = container.querySelector('#nav-burger') as HTMLButtonElement;
  const drawer = container.querySelector('#nav-drawer') as HTMLElement;
  const drawerOverlay = container.querySelector('#nav-drawer-overlay') as HTMLElement;
  const drawerClose = container.querySelector('#nav-drawer-close') as HTMLButtonElement;
  const drawerLangBtn = container.querySelector('#drawer-lang-btn') as HTMLButtonElement;
  const drawerThemeBtn = container.querySelector('#drawer-theme-btn') as HTMLButtonElement;

  logoEl.addEventListener('click', () => navigate('/'));

  // Drawer open/close
  function openDrawer() {
    drawer.classList.add('nav-drawer--open');
    drawerOverlay.classList.add('nav-drawer-overlay--visible');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('nav-drawer--open');
    drawerOverlay.classList.remove('nav-drawer-overlay--visible');
    document.body.style.overflow = '';
  }
  burger.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  // Close drawer on link click
  container.querySelectorAll('.nav-drawer-link').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });

  // Drawer lang/theme mirrors desktop buttons
  drawerLangBtn.addEventListener('click', () => {
    toggleLang();
    onLangChange();
    langBtn.textContent = getLang() === 'id' ? '🇮🇩 ID' : '🇬🇧 EN';
    drawerLangBtn.textContent = getLang() === 'id' ? '🇮🇩 Bahasa Indonesia' : '🇬🇧 English';
    searchInput.placeholder = t('nav.search');
  });
  drawerThemeBtn.addEventListener('click', () => {
    toggleTheme();
    themeBtn.textContent = getTheme() === 'dark' ? '☀️' : '🌙';
    drawerThemeBtn.textContent = getTheme() === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  });

  // Highlight active nav link
  function updateActiveLink() {
    const hash = window.location.hash;
    container.querySelectorAll('.nav-link').forEach(a => {
      const el = a as HTMLAnchorElement;
      const href = el.getAttribute('href') ?? '';
      const isHome = href === '#/' && (hash === '' || hash === '#/');
      // Match /composition sub-routes to #nav-anatomi
      const isComposition = href === '#/composition' && hash.startsWith('#/composition');
      el.classList.toggle('nav-link--active', hash === href || isHome || isComposition);
    });
  }
  updateActiveLink();
  window.addEventListener('hashchange', updateActiveLink);

  // Position dropdown under search

  function positionDrop() {
    const rect = searchInput.getBoundingClientRect();
    searchDrop.style.left = rect.left + 'px';
    searchDrop.style.top = rect.bottom + 4 + 'px';
    searchDrop.style.width = Math.max(260, rect.width) + 'px';
  }

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    onSearch(q);
    if (!q) { searchDrop.style.display = 'none'; return; }

    const matches = elements.filter(el =>
      el.sym.toLowerCase().startsWith(q) ||
      el.name.toLowerCase().includes(q) ||
      el.n === parseInt(q)
    ).slice(0, 8);

    if (!matches.length) { searchDrop.style.display = 'none'; return; }

    searchDrop.innerHTML = matches.map(el => {
      const cat = categories[el.cat];
      const color = cat?.color || '#868e96';
      return `<div class="search-item" data-n="${el.n}" style="
        padding:10px 14px;cursor:pointer;display:flex;align-items:center;gap:12px;
        border-bottom:1px solid var(--border);transition:background 0.15s;
      ">
        <span style="font-size:22px;font-weight:800;color:${color};width:36px;text-align:center">${el.sym}</span>
        <span>
          <div style="font-size:14px;font-weight:500">${el.name}</div>
          <div style="font-size:11px;color:var(--text-3)">#${el.n} · ${cat?.nameId || el.cat}</div>
        </span>
      </div>`;
    }).join('');

    searchDrop.querySelectorAll('.search-item').forEach(item => {
      const el = item as HTMLElement;
      el.addEventListener('click', () => {
        searchInput.value = '';
        searchDrop.style.display = 'none';
        navigate(`/element/${el.dataset.n}`);
      });
      el.addEventListener('mouseenter', () => { el.style.background = 'var(--bg-4)'; });
      el.addEventListener('mouseleave', () => { el.style.background = ''; });
    });

    positionDrop();
    searchDrop.style.display = 'block';
  });

  document.addEventListener('click', (e) => {
    if (!container.contains(e.target as Node)) searchDrop.style.display = 'none';
  });

  langBtn.addEventListener('click', () => {
    toggleLang();
    onLangChange();
    langBtn.textContent = getLang() === 'id' ? '🇮🇩 ID' : '🇬🇧 EN';
    searchInput.placeholder = t('nav.search');
  });

  themeBtn.addEventListener('click', () => {
    toggleTheme();
    themeBtn.textContent = getTheme() === 'dark' ? '☀️' : '🌙';
  });
}
