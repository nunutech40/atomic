import { elements } from '../data/elements';
import { categories } from '../data/categories';
import { navigate } from '../core/router';
import { t } from '../core/i18n';

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

// Random element symbols for background ambience
const BG_SYMBOLS = [
  { sym: 'H', left: '4%', top: '12%', size: 48, delay: 0 },
  { sym: 'He', left: '9%', top: '68%', size: 28, delay: 1.4 },
  { sym: 'Au', left: '88%', top: '18%', size: 38, delay: 0.7 },
  { sym: 'Fe', left: '92%', top: '72%', size: 34, delay: 2.1 },
  { sym: 'O', left: '18%', top: '82%', size: 44, delay: 1.8 },
  { sym: 'C', left: '76%', top: '55%', size: 30, delay: 0.3 },
  { sym: 'Na', left: '3%', top: '38%', size: 26, delay: 2.8 },
  { sym: 'Cu', left: '82%', top: '38%', size: 36, delay: 1.1 },
  { sym: 'U', left: '55%', top: '88%', size: 32, delay: 3.2 },
  { sym: 'Ag', left: '42%', top: '6%', size: 30, delay: 2.4 },
  { sym: 'N', left: '68%', top: '14%', size: 40, delay: 0.9 },
  { sym: 'Pt', left: '24%', top: '5%', size: 26, delay: 1.6 },
];

export function renderPeriodicTable(container: HTMLElement) {
  container.innerHTML = '';
  let activeFilter: string | null = null;

  // ── HOME HUB ─────────────────────────────────────────────────────────
  const hub = document.createElement('div');
  hub.className = 'home-hub animate-in';

  hub.innerHTML = `
    <!-- ═══ HERO ═══ -->
    <section class="home-hero">

      <!-- Background floating element symbols -->
      <div class="hero-symbols" aria-hidden="true">
        ${BG_SYMBOLS.map(s => `
          <span class="hero-sym" style="
            left:${s.left}; top:${s.top};
            font-size:${s.size}px;
            animation-delay:${s.delay}s;
          ">${s.sym}</span>
        `).join('')}
      </div>

      <!-- Split layout -->
      <div class="hero-body">

        <!-- LEFT: Text & CTAs -->
        <div class="hero-left">
          <div class="hero-tag-pill">⚛ Tahukah kamu?</div>

          <!-- Rotating wonder facts -->
          <div class="hero-fact">
            <span class="hero-fact-text" id="hero-fact-text">
              Materi yang kamu pegang adalah 99.9999999% ruang kosong.
            </span>
          </div>

          <p class="home-subtitle" id="hero-fact-sub">
            Atom tidak terlihat, tidak bisa disentuh satu per satu — tapi mereka menyusun
            <em>segalanya</em>. Termasuk dirimu.
          </p>

          <div class="hero-stats-row">
            <span>⚛ <strong>118</strong> Elemen</span>
            <span>·</span>
            <span>🎬 <strong>3D</strong> Visualisasi</span>
            <span>·</span>
            <span>📚 <strong>16</strong> Modul</span>
          </div>

          <div class="hero-actions">
            <button class="hero-btn-primary" id="cta-learn">🌱 Mulai dari Nol</button>
            <button class="hero-btn-secondary" id="cta-explore">🔬 Langsung Eksplorasi ↓</button>
          </div>
        </div>

        <!-- RIGHT: CSS Animated Atom -->
        <div class="hero-right" aria-hidden="true">
          <div class="hero-atom-scene">
            <div class="hero-atom-bg-glow"></div>
            <div class="hero-atom">
              <div class="hero-nucleus">
                <div class="hero-nucleus-inner"></div>
              </div>
              <div class="hero-orbit hero-orbit--1">
                <div class="hero-electron hero-electron--1"></div>
              </div>
              <div class="hero-orbit hero-orbit--2">
                <div class="hero-electron hero-electron--2"></div>
              </div>
              <div class="hero-orbit hero-orbit--3">
                <div class="hero-electron hero-electron--3"></div>
              </div>
            </div>
            <div class="hero-atom-label">Model Atom Bohr — Emas (Au)</div>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══ PILIH JALURMU ═══ -->
    <section class="path-section">
      <div class="path-section-title">
        Baru di sini? <span>Pilih jalurmu</span>
      </div>
      <div class="path-cards">

        <div class="path-card path-card--green" id="path-beginner">
          <div class="path-card-icon">🌱</div>
          <div class="path-card-head">Pemula</div>
          <div class="path-card-desc">Baru kenal kimia, atau mau mulai dari nol</div>
          <div class="path-flow">
            <span class="pf-step">📚 Belajar</span>
            <span class="pf-arrow">→</span>
            <span class="pf-step">🔬 Tabel</span>
            <span class="pf-arrow">→</span>
            <span class="pf-step">⚗️ Molekul</span>
          </div>
          <div class="path-card-cta">Mulai dari modul pertama →</div>
        </div>

        <div class="path-card path-card--blue" id="path-student">
          <div class="path-card-icon">📖</div>
          <div class="path-card-head">Pelajar / Mahasiswa</div>
          <div class="path-card-desc">Sudah tahu dasar, ingin eksplorasi lebih dalam</div>
          <div class="path-flow">
            <span class="pf-step">🔬 Tabel</span>
            <span class="pf-arrow">→</span>
            <span class="pf-step">⚛ Detail</span>
            <span class="pf-arrow">→</span>
            <span class="pf-step">⚗️ Molekul</span>
          </div>
          <div class="path-card-cta">Jelajahi tabel periodik →</div>
        </div>

        <div class="path-card path-card--amber" id="path-curious">
          <div class="path-card-icon">🚀</div>
          <div class="path-card-head">Penasaran</div>
          <div class="path-card-desc">Mau eksplor bebas tanpa urutan tertentu</div>
          <div class="path-flow">
            <span class="pf-step" style="font-style:italic;color:var(--text-3)">Bebas ke mana saja</span>
          </div>
          <div class="path-card-cta">Scroll ke tabel ↓</div>
        </div>

      </div>
    </section>

    <!-- ═══ PREREQ ACCORDION ═══ -->
    <section class="prereq-box" id="prereq-box">
      <button class="prereq-toggle" id="prereq-toggle" aria-expanded="false">
        <span>💡 Nyasar di tabel periodik? Cek prasyarat dulu</span>
        <span class="prereq-arrow" id="prereq-arrow">▼</span>
      </button>
      <div class="prereq-content" id="prereq-content">
        <p class="prereq-intro">
          Untuk nyaman jelajahi tabel periodik, kamu perlu paham konsep-konsep ini dulu:
        </p>
        <div class="prereq-list">
          <div class="prereq-item"><span class="prereq-dot"></span>Apa itu atom — partikel terkecil penyusun materi</div>
          <div class="prereq-item"><span class="prereq-dot"></span>Proton, neutron, elektron — peran dan perbedaannya</div>
          <div class="prereq-item"><span class="prereq-dot"></span>Kulit elektron — mengapa elektron ada di "lapisan" tertentu</div>
          <div class="prereq-item"><span class="prereq-dot"></span>Nomor atom — kenapa tiap elemen punya nomor unik</div>
          <div class="prereq-item"><span class="prereq-dot"></span>Konfigurasi elektron — cara membaca 2, 8, 18, 32...</div>
        </div>
        <div class="prereq-footer">
          <span>Belum paham semuanya?</span>
          <button class="prereq-cta-btn" id="prereq-goto-learn">Mulai dari modul pertama →</button>
        </div>
      </div>
    </section>

    <!-- ═══ TABLE SECTION HEADER ═══ -->
    <div class="home-section-title">
      <span>🔬 Tabel Periodik</span>
      <span class="home-section-count">118 elemen · klik untuk detail</span>
    </div>
    `;

  container.appendChild(hub);

  // ── Rotating wonder facts ─────────────────────────────────────────────
  const wonderFacts: Array<{ fact: string; sub: string }> = [
    {
      fact: 'Materi yang kamu pegang adalah 99.9999999% ruang kosong.',
      sub: 'Atom tidak terlihat, tidak bisa disentuh satu per satu — tapi mereka menyusun segalanya. Termasuk dirimu.',
    },
    {
      fact: 'Setiap atom di tubuhmu pernah berada di dalam bintang.',
      sub: 'Kita semua adalah debu bintang — secara harfiah. Carbon, nitrogen, oksigen di tubuhmu terbentuk di inti bintang yang meledak.',
    },
    {
      fact: 'Emas di jarimu lahir dari tabrakan dua bintang neutron.',
      sub: 'Bumi tidak bisa membuat emas sendiri. Semua emas di Bumi jatuh dari luar angkasa, miliaran tahun lalu.',
    },
    {
      fact: 'Jika atom diperbesar sebesar stadion, nukleusnya hanya sekecil kelereng.',
      sub: 'Betapa kosongnya materi. Meja kayu yang keras itu sebenarnya sebagian besar adalah "tidak ada".',
    },
    {
      fact: '7.000.000.000.000.000.000.000.000.000 atom menyusun tubuh manusia.',
      sub: '7 oktilion atom. Masing-masing bergerak, berinteraksi, membentuk sel, organ, pikiran — dan dirimu.',
    },
    {
      fact: 'Kamu berbagi atom dengan Caesar, dinosaurus, dan bintang-bintang yang sudah mati.',
      sub: 'Atom tidak pernah musnah. Mereka terus berpindah — dari bintang, ke bebatuan, ke makhluk hidup, ke kamu.',
    },
  ];
  let wfi = 0;
  const factTextEl = hub.querySelector('#hero-fact-text') as HTMLElement;
  const factSubEl = hub.querySelector('#hero-fact-sub') as HTMLElement;
  if (factTextEl && factSubEl) {
    setInterval(() => {
      wfi = (wfi + 1) % wonderFacts.length;
      factTextEl.style.opacity = '0';
      factSubEl.style.opacity = '0';
      setTimeout(() => {
        factTextEl.textContent = wonderFacts[wfi].fact;
        factSubEl.innerHTML = wonderFacts[wfi].sub;
        factTextEl.style.opacity = '1';
        factSubEl.style.opacity = '1';
      }, 420);
    }, 6000);
  }

  // ── CTA Handlers ─────────────────────────────────────────────────────
  hub.querySelector('#cta-learn')!.addEventListener('click', () => navigate('/learn'));
  hub.querySelector('#cta-explore')!.addEventListener('click', () => {
    document.querySelector('.periodic-table-wrapper')?.scrollIntoView({ behavior: 'smooth' });
  });
  hub.querySelector('#path-beginner')!.addEventListener('click', () => navigate('/learn'));
  hub.querySelector('#path-student')!.addEventListener('click', () => {
    document.querySelector('.periodic-table-wrapper')?.scrollIntoView({ behavior: 'smooth' });
  });
  hub.querySelector('#path-curious')!.addEventListener('click', () => {
    document.querySelector('.periodic-table-wrapper')?.scrollIntoView({ behavior: 'smooth' });
  });

  // ── Prereq accordion ─────────────────────────────────────────────────
  const prereqToggle = hub.querySelector('#prereq-toggle') as HTMLButtonElement;
  const prereqContent = hub.querySelector('#prereq-content') as HTMLElement;
  const prereqArrow = hub.querySelector('#prereq-arrow') as HTMLElement;
  let prereqOpen = false;
  prereqContent.style.maxHeight = '0';
  prereqContent.style.overflow = 'hidden';
  prereqContent.style.transition = 'max-height 0.4s ease';

  prereqToggle.addEventListener('click', () => {
    prereqOpen = !prereqOpen;
    prereqContent.style.maxHeight = prereqOpen ? prereqContent.scrollHeight + 'px' : '0';
    prereqArrow.style.transform = prereqOpen ? 'rotate(180deg)' : '';
    prereqToggle.setAttribute('aria-expanded', String(prereqOpen));
  });

  hub.querySelector('#prereq-goto-learn')!.addEventListener('click', () => navigate('/learn'));

  // ── PERIODIC TABLE ────────────────────────────────────────────────────
  const wrapper = document.createElement('div');
  wrapper.className = 'periodic-table-wrapper';

  const ROWS = 9, COLS = 18;
  const grid: (number | null)[][] = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  elements.forEach(el => {
    const pos = GRID_POS[el.n];
    if (pos) grid[pos[0] - 1][pos[1] - 1] = el.n;
  });

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
      cell.addEventListener('mousemove', (e) => { moveTooltip((e as MouseEvent).clientX, (e as MouseEvent).clientY); });
      cell.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
      cell.addEventListener('click', () => navigate(`/element/${el.n}`));
      table.appendChild(cell);
    });
  });

  function moveTooltip(x: number, y: number) {
    const tw = 160, th = 80;
    tooltip.style.left = (x + 12 + tw > window.innerWidth ? x - tw - 8 : x + 12) + 'px';
    tooltip.style.top = (y + th > window.innerHeight ? y - th - 8 : y + 8) + 'px';
  }

  wrapper.appendChild(table);
  container.appendChild(wrapper);

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
          c.classList.remove('dimmed', 'highlighted');
          c.classList.add(c.dataset.cat === id ? 'highlighted' : 'dimmed');
        });
      }
    });
    legend.appendChild(item);
  });
  container.appendChild(legend);

  return () => { tooltip.remove(); };
}
