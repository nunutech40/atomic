import { phenomena, PHENOMENON_CATEGORIES } from '../data/phenomena';
import { navigate } from '../core/router';
import { getLang } from '../core/i18n';

export function renderPhenomenaList(container: HTMLElement) {
    const isEN = getLang() === 'en';
    container.innerHTML = '';

    const page = document.createElement('div');
    page.className = 'phenomena-page animate-in';

    // ── HEADER ────────────────────────────────────────────────────────────
    const header = document.createElement('div');
    header.className = 'phenomena-header';
    header.innerHTML = `
        <div class="phenomena-hero-icon">⚡</div>
        <h1 class="phenomena-title">${isEN ? 'Atomic Phenomena' : 'Fenomena Atom'}</h1>
        <p class="phenomena-subtitle">
            ${isEN
            ? 'From stellar explosions to your touchscreen \u2014 all of it is atoms interacting. Pick a phenomenon to explore its full story.'
            : 'Dari ledakan bintang hingga layar sentuhmu \u2014 semua adalah atom yang berinteraksi. Pilih fenomena untuk melihat cerita lengkapnya.'}
        </p>
        <div class="phenomena-stats">
            <span>⚡ <strong>${phenomena.length}</strong> ${isEN ? 'Phenomena' : 'Fenomena'}</span>
            <span>·</span>
            <span>🗂 <strong>${Object.keys(PHENOMENON_CATEGORIES).length}</strong> ${isEN ? 'Categories' : 'Kategori'}</span>
        </div>
    `;
    page.appendChild(header);

    // ── SEARCH ────────────────────────────────────────────────────────────
    const searchWrap = document.createElement('div');
    searchWrap.className = 'phenomena-search-wrap';
    searchWrap.innerHTML = `
        <div class="phenomena-search-box">
            <span class="phenomena-search-icon">🔍</span>
            <input
                type="text"
                id="phenomena-search"
                class="phenomena-search-input"
                placeholder="${isEN ? 'Search phenomena... (fission, laser, osmosis)' : 'Cari fenomena... (fisi, laser, osmosis)'}"
                autocomplete="off"
            />
        </div>
    `;
    page.appendChild(searchWrap);

    // ── CATEGORY FILTER TABS ──────────────────────────────────────────────
    const tabs = document.createElement('div');
    tabs.className = 'phenomena-tabs';
    tabs.innerHTML = `
        <button class="ptab ptab--active" data-cat="all">🌐 ${isEN ? 'All' : 'Semua'} <span class="ptab-count">${phenomena.length}</span></button>
        ${Object.entries(PHENOMENON_CATEGORIES).map(([key, cat]) => {
        const count = phenomena.filter(p => p.category === key).length;
        return `<button class="ptab" data-cat="${key}" style="--tc:${cat.color}">${cat.label} <span class="ptab-count">${count}</span></button>`;
    }).join('')}
    `;
    page.appendChild(tabs);

    // ── CARD GRID ─────────────────────────────────────────────────────────
    const grid = document.createElement('div');
    grid.className = 'phenomena-grid';
    page.appendChild(grid);

    // ── NO RESULTS ────────────────────────────────────────────────────────
    const noResult = document.createElement('div');
    noResult.className = 'phenomena-no-result';
    noResult.innerHTML = `<span style="font-size:40px">🔭</span><p>${isEN ? 'No matching phenomena found.' : 'Tidak ada fenomena yang sesuai.'}</p>`;
    noResult.style.display = 'none';
    page.appendChild(noResult);

    container.appendChild(page);

    // ── RENDER CARDS ──────────────────────────────────────────────────────
    function renderCards(filter: string, query: string) {
        grid.innerHTML = '';
        const filtered = phenomena.filter(p => {
            const matchCat = filter === 'all' || p.category === filter;
            const q = query.toLowerCase();
            const matchQ = !q || p.title.toLowerCase().includes(q)
                || p.titleEn.toLowerCase().includes(q)
                || p.tagline.toLowerCase().includes(q)
                || p.atoms.join(' ').toLowerCase().includes(q);
            return matchCat && matchQ;
        });

        noResult.style.display = filtered.length === 0 ? 'flex' : 'none';
        grid.style.display = filtered.length === 0 ? 'none' : 'grid';

        filtered.forEach(p => {
            const cat = PHENOMENON_CATEGORIES[p.category];
            const card = document.createElement('div');
            card.className = 'phen-card';
            card.style.setProperty('--pc', cat.color);
            card.style.setProperty('--pb', cat.bg);
            card.innerHTML = `
                <div class="phen-card-top">
                    <div class="phen-card-icon">${p.icon}</div>
                    <div class="phen-card-cat" style="color:${cat.color};background:${cat.bg};">${cat.label}</div>
                </div>
                <div class="phen-card-title">${isEN ? p.titleEn : p.title}</div>
                <div class="phen-card-en">${isEN ? p.title : p.titleEn}</div>
                <div class="phen-card-tagline">${p.tagline}</div>
                <div class="phen-card-atoms">
                    ${p.atoms.map(a => `<span class="phen-atom-chip">${a}</span>`).join('')}
                </div>
                <div class="phen-card-cta">${isEN ? 'Read the story \u2192' : 'Baca Ceritanya \u2192'}</div>
            `;
            card.addEventListener('click', () => navigate(`/phenomena/${p.id}`));
            grid.appendChild(card);
        });
    }

    // ── STATE ─────────────────────────────────────────────────────────────
    let activeFilter = 'all';
    let searchQuery = '';

    // Tab click
    tabs.querySelectorAll<HTMLButtonElement>('.ptab').forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.querySelectorAll('.ptab').forEach(b => b.classList.remove('ptab--active'));
            btn.classList.add('ptab--active');
            activeFilter = btn.dataset.cat || 'all';
            renderCards(activeFilter, searchQuery);
        });
    });

    // Search
    const searchInput = page.querySelector('#phenomena-search') as HTMLInputElement;
    searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value.trim();
        renderCards(activeFilter, searchQuery);
    });

    renderCards('all', '');
}
