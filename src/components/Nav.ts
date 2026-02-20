import { elements } from '../data/elements';
import { categories } from '../data/categories';
import { navigate } from '../core/router';
import { t, getLang, toggleLang } from '../core/i18n';
import { getTheme, toggleTheme } from '../core/theme';

export function renderNav(container: HTMLElement, onSearch: (q: string) => void, onLangChange: () => void) {
    container.innerHTML = `
    <nav class="nav" id="main-nav">
      <div class="nav-logo">⚛ Atomic</div>
      <div class="nav-search">
        <span class="nav-search-icon">🔍</span>
        <input type="text" id="search-input" placeholder="${t('nav.search')}" autocomplete="off" />
      </div>
      <div class="nav-spacer"></div>
      <button class="nav-btn" id="lang-btn">${getLang() === 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}</button>
      <button class="nav-btn" id="theme-btn">${getTheme() === 'dark' ? '☀️' : '🌙'}</button>
    </nav>
    <div id="search-dropdown" style="display:none;position:absolute;z-index:200;width:340px;
      background:var(--bg-3);border:1px solid var(--border);border-radius:var(--radius);
      box-shadow:var(--shadow);max-height:320px;overflow-y:auto;margin-top:4px;"></div>
  `;

    const searchInput = container.querySelector('#search-input') as HTMLInputElement;
    const searchDrop = container.querySelector('#search-dropdown') as HTMLElement;
    const langBtn = container.querySelector('#lang-btn') as HTMLButtonElement;
    const themeBtn = container.querySelector('#theme-btn') as HTMLButtonElement;

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
