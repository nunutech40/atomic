import { elements } from '../data/elements';
import { categories } from '../data/categories';
import { navigate } from '../core/router';
import { t } from '../core/i18n';

// Grid layout: [atomicNumber] = [row, col] (1-indexed, 18-col grid)
const GRID_POS: Record<number, [number, number]> = {
    1: [1, 1], 2: [1, 18],
    3: [2, 1], 4: [2, 2], 5: [2, 13], 6: [2, 14], 7: [2, 15], 8: [2, 16], 9: [2, 17], 10: [2, 18],
    11: [3, 1], 12: [3, 2], 13: [3, 13], 14: [3, 14], 15: [3, 15], 16: [3, 16], 17: [3, 17], 18: [3, 18],
    19: [4, 1], 20: [4, 2], 21: [4, 3], 22: [4, 4], 23: [4, 5], 24: [4, 6], 25: [4, 7], 26: [4, 8], 27: [4, 9], 28: [4, 10], 29: [4, 11], 30: [4, 12], 31: [4, 13], 32: [4, 14], 33: [4, 15], 34: [4, 16], 35: [4, 17], 36: [4, 18],
    37: [5, 1], 38: [5, 2], 39: [5, 3], 40: [5, 4], 41: [5, 5], 42: [5, 6], 43: [5, 7], 44: [5, 8], 45: [5, 9], 46: [5, 10], 47: [5, 11], 48: [5, 12], 49: [5, 13], 50: [5, 14], 51: [5, 15], 52: [5, 16], 53: [5, 17], 54: [5, 18],
    55: [6, 1], 56: [6, 2],
    57: [8, 3], 58: [8, 4], 59: [8, 5], 60: [8, 6], 61: [8, 7], 62: [8, 8], 63: [8, 9], 64: [8, 10], 65: [8, 11], 66: [8, 12], 67: [8, 13], 68: [8, 14], 69: [8, 15], 70: [8, 16], 71: [8, 17],
    72: [6, 4], 73: [6, 5], 74: [6, 6], 75: [6, 7], 76: [6, 8], 77: [6, 9], 78: [6, 10], 79: [6, 11], 80: [6, 12], 81: [6, 13], 82: [6, 14], 83: [6, 15], 84: [6, 16], 85: [6, 17], 86: [6, 18],
    87: [7, 1], 88: [7, 2],
    89: [9, 3], 90: [9, 4], 91: [9, 5], 92: [9, 6], 93: [9, 7], 94: [9, 8], 95: [9, 9], 96: [9, 10], 97: [9, 11], 98: [9, 12], 99: [9, 13], 100: [9, 14], 101: [9, 15], 102: [9, 16], 103: [9, 17],
    104: [7, 4], 105: [7, 5], 106: [7, 6], 107: [7, 7], 108: [7, 8], 109: [7, 9], 110: [7, 10], 111: [7, 11], 112: [7, 12], 113: [7, 13], 114: [7, 14], 115: [7, 15], 116: [7, 16], 117: [7, 17], 118: [7, 18],
};

export function renderPeriodicTable(container: HTMLElement) {
    container.innerHTML = '';
    let activeFilter: string | null = null;

    // ── HOME HUB ─────────────────────────────────────────────────────────
    const hub = document.createElement('div');
    hub.className = 'home-hub animate-in';

    hub.innerHTML = `
        <div class="home-hero">
            <div class="home-hero-particles" aria-hidden="true">
                ${Array.from({ length: 18 }, () => `
                    <div class="particle" style="
                        left:${Math.random() * 100}%;
                        top:${Math.random() * 100}%;
                        width:${2 + Math.random() * 3}px;
                        height:${2 + Math.random() * 3}px;
                        animation-delay:${Math.random() * 4}s;
                        animation-duration:${3 + Math.random() * 4}s;
                    "></div>`).join('')}
            </div>
            <h1 class="home-title">⚛ Atomic</h1>
            <p class="home-subtitle">Eksplorasi kimia yang nyata — visual, interaktif, dari pertama</p>
            <div class="home-stats">
                <span class="home-stat"><strong>118</strong> Elemen</span>
                <span class="home-stat-sep">·</span>
                <span class="home-stat"><strong>3D</strong> Visualisasi</span>
                <span class="home-stat-sep">·</span>
                <span class="home-stat"><strong>2</strong> Bahasa</span>
            </div>
        </div>

        <div class="home-tools">
            <div class="tool-card tool-card--active" id="tool-table">
                <div class="tool-card-glow"></div>
                <div class="tool-card-icon">🔬</div>
                <div class="tool-card-title">Tabel Periodik</div>
                <div class="tool-card-desc">118 elemen dengan 3D atom visualizer. Filter kategori, search, dan jelajahi detail setiap unsur.</div>
                <div class="tool-card-badge">Aktif</div>
            </div>
            <div class="tool-card" id="tool-molecule">
                <div class="tool-card-glow"></div>
                <div class="tool-card-icon">⚗️</div>
                <div class="tool-card-title">Bangun Molekul</div>
                <div class="tool-card-desc">Gabungkan atom-atom menjadi molekul. H₂O, CO₂, NaCl — lihat visualisasi 3D hasil bonding-nya.</div>
                <div class="tool-card-badge tool-card-badge--new">Baru</div>
            </div>
            <div class="tool-card tool-card--soon" id="tool-learn">
                <div class="tool-card-glow"></div>
                <div class="tool-card-icon">📚</div>
                <div class="tool-card-title">Belajar Kimia</div>
                <div class="tool-card-desc">Kurikulum 16 modul dari nol — metode first principles. Dari "apa itu atom?" sampai orbital kuantum.</div>
                <div class="tool-card-badge tool-card-badge--soon">Segera</div>
            </div>
            <div class="tool-card tool-card--soon" id="tool-lab">
                <div class="tool-card-glow"></div>
                <div class="tool-card-icon">🧪</div>
                <div class="tool-card-title">Lab Virtual</div>
                <div class="tool-card-desc">Simulasikan reaksi kimia tanpa bahan berbahaya. Eksplorasi, campur, amati hasilnya.</div>
                <div class="tool-card-badge tool-card-badge--soon">Segera</div>
            </div>
        </div>

        <div class="home-section-title">
            <span>Tabel Periodik</span>
            <span class="home-section-count">118 elemen</span>
        </div>
    `;

    container.appendChild(hub);

    // Tool card click events
    hub.querySelector('#tool-molecule')!.addEventListener('click', () => navigate('/molecule'));
    hub.querySelector('#tool-table')!.addEventListener('click', () => {
        document.querySelector('.periodic-table-wrapper')?.scrollIntoView({ behavior: 'smooth' });
    });

    // ── PERIODIC TABLE ────────────────────────────────────────────────────
    const wrapper = document.createElement('div');
    wrapper.className = 'periodic-table-wrapper';

    const ROWS = 9;
    const COLS = 18;
    const grid: (number | null)[][] = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    elements.forEach(el => {
        const pos = GRID_POS[el.n];
        if (pos) grid[pos[0] - 1][pos[1] - 1] = el.n;
    });

    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = '<div class="t-sym"></div><div class="t-name"></div><div class="t-mass"></div>';
    document.body.appendChild(tooltip);

    const table = document.createElement('div');
    table.className = 'periodic-table';
    table.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;

    const elMap: Record<number, HTMLElement> = {};

    grid.forEach((row, ri) => {
        row.forEach((atomicNum, ci) => {
            const cell = document.createElement('div');

            if (atomicNum === null) {
                if (ri === 5 && ci === 2) {
                    cell.className = 'element-cell';
                    cell.style.cssText = 'border-style:dashed;opacity:0.4;cursor:default;';
                    cell.innerHTML = `<span class="num">57-71</span><span class="sym" style="font-size:10px">La-Lu</span>`;
                } else if (ri === 6 && ci === 2) {
                    cell.className = 'element-cell';
                    cell.style.cssText = 'border-style:dashed;opacity:0.4;cursor:default;';
                    cell.innerHTML = `<span class="num">89-103</span><span class="sym" style="font-size:10px">Ac-Lr</span>`;
                } else {
                    cell.className = 'element-cell empty';
                }
                table.appendChild(cell);
                return;
            }

            const el = elements.find(e => e.n === atomicNum)!;
            const cat = categories[el.cat];
            const color = cat?.color || '#868e96';
            const bgColor = cat?.bgColor || 'rgba(134,142,150,0.15)';

            cell.className = 'element-cell';
            cell.style.setProperty('--cell-color', color);
            cell.style.setProperty('--cell-glow', bgColor);
            cell.dataset.n = String(atomicNum);
            cell.dataset.cat = el.cat;
            const massVal = Array.isArray(el.mass) ? (el.mass as number[])[0] : el.mass;
            cell.innerHTML = `
                <span class="num">${el.n}</span>
                <span class="sym" style="color:${color}">${el.sym}</span>
                <span class="name">${el.name}</span>
                <span class="mass">${typeof massVal === 'string' ? parseFloat(massVal).toFixed(2) : Number(massVal).toFixed(2)}</span>
            `;

            elMap[el.n] = cell;

            cell.addEventListener('mouseenter', (e) => {
                const m = e as MouseEvent;
                tooltip.querySelector('.t-sym')!.textContent = el.sym;
                (tooltip.querySelector('.t-sym') as HTMLElement).style.color = color;
                tooltip.querySelector('.t-name')!.textContent = el.name;
                tooltip.querySelector('.t-mass')!.textContent = `${t('element.atomicMass')}: ${el.mass}`;
                tooltip.classList.add('show');
                moveTooltip(m.clientX, m.clientY);
            });
            cell.addEventListener('mousemove', (e) => { const m = e as MouseEvent; moveTooltip(m.clientX, m.clientY); });
            cell.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
            cell.addEventListener('click', () => navigate(`/element/${el.n}`));

            table.appendChild(cell);
        });
    });

    function moveTooltip(x: number, y: number) {
        const tw = 160, th = 80;
        const left = x + 12 + tw > window.innerWidth ? x - tw - 8 : x + 12;
        const top = y + th > window.innerHeight ? y - th - 8 : y + 8;
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    }

    wrapper.appendChild(table);
    container.appendChild(wrapper);

    // Legend
    const legend = document.createElement('div');
    legend.className = 'legend';

    Object.entries(categories).forEach(([id, cat]) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.style.setProperty('--item-color', cat.color);
        item.style.setProperty('--item-bg', cat.bgColor);
        item.innerHTML = `<span class="legend-dot" style="background:${cat.color}"></span>${cat.nameId}`;
        item.addEventListener('click', () => {
            if (activeFilter === id) {
                activeFilter = null;
                item.classList.remove('active');
                Object.values(elMap).forEach(c => c.classList.remove('dimmed', 'highlighted'));
            } else {
                activeFilter = id;
                legend.querySelectorAll('.legend-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                Object.values(elMap).forEach(c => {
                    if (c.dataset.cat === id) c.classList.add('highlighted');
                    else c.classList.add('dimmed');
                    c.classList.remove(c.dataset.cat === id ? 'dimmed' : 'highlighted');
                });
            }
        });
        legend.appendChild(item);
    });

    container.appendChild(legend);

    return () => { tooltip.remove(); };
}
