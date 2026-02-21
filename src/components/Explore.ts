import { elements } from '../data/elements';
import { categories } from '../data/categories';
import { molecules } from '../data/molecules';
import type { Molecule } from '../data/molecules';
import { navigate } from '../core/router';
import { getLang } from '../core/i18n';
import * as THREE from 'three';
import { CPK_COLORS, ATOM_RADII } from '../data/molecules';

// ─── Grid positions (copied from PeriodicTable) ───────────────────────────────
const GRID_POS: Record<number, [number, number]> = {
  1: [1, 1], 2: [1, 18],
  3: [2, 1], 4: [2, 2], 5: [2, 13], 6: [2, 14], 7: [2, 15], 8: [2, 16], 9: [2, 17], 10: [2, 18],
  11: [3, 1], 12: [3, 2], 13: [3, 13], 14: [3, 14], 15: [3, 15], 16: [3, 16], 17: [3, 17], 18: [3, 18],
  19: [4, 1], 20: [4, 2], 21: [4, 3], 22: [4, 4], 23: [4, 5], 24: [4, 6], 25: [4, 7], 26: [4, 8], 27: [4, 9], 28: [4, 10], 29: [4, 11], 30: [4, 12], 31: [4, 13], 32: [4, 14], 33: [4, 15], 34: [4, 16], 35: [4, 17], 36: [4, 18],
  37: [5, 1], 38: [5, 2], 39: [5, 3], 40: [5, 4], 41: [5, 5], 42: [5, 6], 43: [5, 7], 44: [5, 8], 45: [5, 9], 46: [5, 10], 47: [5, 11], 48: [5, 12], 49: [5, 13], 50: [5, 14], 51: [5, 15], 52: [5, 16], 53: [5, 17], 54: [5, 18],
  55: [6, 1], 56: [6, 2], 57: [6, 3], 72: [6, 4], 73: [6, 5], 74: [6, 6], 75: [6, 7], 76: [6, 8], 77: [6, 9], 78: [6, 10], 79: [6, 11], 80: [6, 12], 81: [6, 13], 82: [6, 14], 83: [6, 15], 84: [6, 16], 85: [6, 17], 86: [6, 18],
  87: [7, 1], 88: [7, 2], 89: [7, 3], 104: [7, 4], 105: [7, 5], 106: [7, 6], 107: [7, 7], 108: [7, 8], 109: [7, 9], 110: [7, 10], 111: [7, 11], 112: [7, 12], 113: [7, 13], 114: [7, 14], 115: [7, 15], 116: [7, 16], 117: [7, 17], 118: [7, 18],
  58: [8, 4], 59: [8, 5], 60: [8, 6], 61: [8, 7], 62: [8, 8], 63: [8, 9], 64: [8, 10], 65: [8, 11], 66: [8, 12], 67: [8, 13], 68: [8, 14], 69: [8, 15], 70: [8, 16], 71: [8, 17],
  90: [9, 4], 91: [9, 5], 92: [9, 6], 93: [9, 7], 94: [9, 8], 95: [9, 9], 96: [9, 10], 97: [9, 11], 98: [9, 12], 99: [9, 13], 100: [9, 14], 101: [9, 15], 102: [9, 16], 103: [9, 17],
};

// ─── Featured molecules for the gallery ──────────────────────────────────────
// Curated subset — most famous / most important / most surprising
const FEATURED_FORMULAS = [
  'H₂O', 'CO₂', 'O₂', 'N₂', 'NaCl', 'CH₄', 'NH₃', 'O₃',
  'H₂O₂', 'C₂H₅OH', 'H₂SO₄', 'HCl',
  'C₆H₁₂O₆', 'C (Berlian)', 'C (Grafit)', 'Fe (Logam)',
  'CO', 'N₂O', 'CH₃OH', 'C₂H₂',
];

// ─── 3D molecule renderer (self-contained, returns cleanup fn) ────────────────
function renderMol3D(canvas: HTMLCanvasElement, mol: Molecule): () => void {
  const W = canvas.clientWidth || 260;
  const H = canvas.clientHeight || 180;
  canvas.width = W; canvas.height = H;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
  camera.position.set(0, 0, 5);

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dl = new THREE.DirectionalLight(0xffffff, 1.0);
  dl.position.set(3, 5, 5);
  scene.add(dl);

  // atoms
  mol.atoms.forEach(a => {
    const col = CPK_COLORS[a.sym] ?? CPK_COLORS.DEFAULT;
    const r = ATOM_RADII[a.sym] ?? ATOM_RADII.DEFAULT;
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(r, 24, 24),
      new THREE.MeshStandardMaterial({ color: col, roughness: 0.35, metalness: 0.1 })
    );
    mesh.position.set(...a.pos);
    scene.add(mesh);
  });

  // bonds
  mol.bonds.forEach(b => {
    const pa = mol.atoms[b.a].pos, pb = mol.atoms[b.b].pos;
    const va = new THREE.Vector3(...pa), vb = new THREE.Vector3(...pb);
    const mid = va.clone().add(vb).multiplyScalar(0.5);
    const dir = vb.clone().sub(va);
    const len = dir.length();
    const cyl = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, len, 12),
      new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.5 })
    );
    cyl.position.copy(mid);
    cyl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    scene.add(cyl);
  });

  // auto-fit camera
  const box = new THREE.Box3().setFromObject(scene);
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  camera.position.z = Math.max(3, maxDim * 1.8 + 1);
  camera.updateProjectionMatrix();

  // auto-rotate
  let animId = 0;
  let rotY = 0;
  const group = new THREE.Group();
  scene.children.slice(2).forEach(c => group.add(c)); // skip lights
  scene.add(group);

  function animate() {
    animId = requestAnimationFrame(animate);
    rotY += 0.008;
    group.rotation.y = rotY;
    group.rotation.x = Math.sin(rotY * 0.3) * 0.2;
    renderer.render(scene, camera);
  }
  animate();

  return () => {
    cancelAnimationFrame(animId);
    renderer.dispose();
  };
}

// ─── Main export ─────────────────────────────────────────────────────────────
export function renderExplore(container: HTMLElement): () => void {
  const isEN = getLang() === 'en';
  const cleanups: (() => void)[] = [];
  container.innerHTML = '';

  // ── COPY ──────────────────────────────────────────────────────────────────
  const copy = {
    pageTitle: isEN ? 'Explore' : 'Eksplorasi',

    // How-to-read banner
    howTitle: isEN ? 'How to Read the Periodic Table' : 'Cara Membaca Tabel Periodik',
    howSub: isEN
      ? 'Each cell tells you <strong>everything</strong> about one element at a glance.'
      : 'Setiap kotak menceritakan <strong>segalanya</strong> tentang satu elemen dalam sekejap.',
    tip1Title: isEN ? 'Atomic Number (Z)' : 'Nomor Atom (Z)',
    tip1Body: isEN ? 'Number of protons in the nucleus. This defines what element it is.' : 'Jumlah proton dalam inti. Inilah yang menentukan identitas elemen.',
    tip2Title: isEN ? 'Symbol' : 'Simbol',
    tip2Body: isEN ? 'International shorthand — same in every language and country.' : 'Singkatan internasional — sama di semua bahasa dan negara.',
    tip3Title: isEN ? 'Period (Row)' : 'Periode (Baris)',
    tip3Body: isEN ? 'Indicates the number of electron shells. Period 3 = 3 shells.' : 'Menunjukkan jumlah kulit elektron. Periode 3 = 3 kulit.',
    tip4Title: isEN ? 'Group (Column)' : 'Golongan (Kolom)',
    tip4Body: isEN ? 'Elements in the same group share similar chemical behaviour.' : 'Elemen satu golongan punya sifat kimia yang mirip.',
    tip5Title: isEN ? 'Color = Category' : 'Warna = Kategori',
    tip5Body: isEN ? 'Each color represents a category: metals, nonmetals, noble gases, etc.' : 'Setiap warna mewakili kategori: logam, non-logam, gas mulia, dll.',

    // Legend
    legendTitle: isEN ? 'Element Categories' : 'Kategori Elemen',

    // Molecule section
    molSectionTitle: isEN ? 'Famous Molecules' : 'Molekul Terkenal',
    molSectionSub: isEN
      ? 'Atoms alone are just potential. When they <em>bond</em>, the universe gets interesting.'
      : 'Atom sendiri hanyalah potensi. Saat mereka <em>berikatan</em>, alam semesta menjadi menarik.',
    molHow: isEN ? 'How do molecules form?' : 'Bagaimana molekul terbentuk?',
    molHowBody: isEN
      ? 'Atoms share or transfer electrons to reach a stable configuration — usually 8 electrons in the outer shell (octet rule). The result: molecules with entirely new properties. Two explosive gases become water. A toxic metal and a poisonous gas become table salt.'
      : 'Atom-atom berbagi atau memindahkan elektron untuk mencapai konfigurasi stabil — biasanya 8 elektron di kulit terluar (aturan oktet). Hasilnya: molekul dengan sifat yang sama sekali baru. Dua gas mudah meledak menjadi air. Logam beracun dan gas beracun menjadi garam dapur.',
    clickHint: isEN ? 'Click any molecule to see it in 3D' : 'Klik molekul untuk melihat dalam 3D',

    // Modal
    modalClose: isEN ? '✕ Close' : '✕ Tutup',
    modalTryLab: isEN ? '⚗️ Build it in the Lab →' : '⚗️ Rakit di Lab →',
    labelShape: isEN ? 'Shape' : 'Bentuk',
    labelBond: isEN ? 'Bond Type' : 'Jenis Ikatan',
    labelCat: isEN ? 'Category' : 'Kategori',
    labelFunFact: isEN ? '💡 Fun Fact' : '💡 Fakta Menarik',
  };

  // ── RENDER ────────────────────────────────────────────────────────────────
  const page = document.createElement('div');
  page.className = 'explore-page';

  // ═══ 1. HOW-TO-READ BANNER ═══════════════════════════════════════════════
  const howBanner = document.createElement('section');
  howBanner.className = 'exp-how-banner';
  howBanner.innerHTML = `
    <div class="exp-how-inner">
      <div class="exp-how-text">
        <h2 class="exp-how-title">${copy.howTitle}</h2>
        <p class="exp-how-sub">${copy.howSub}</p>
      </div>
      <div class="exp-how-tips">
        <div class="exp-tip">
          <div class="exp-tip-num">↑</div>
          <div class="exp-tip-label">${copy.tip1Title}</div>
          <div class="exp-tip-body">${copy.tip1Body}</div>
        </div>
        <div class="exp-tip">
          <div class="exp-tip-sym">He</div>
          <div class="exp-tip-label">${copy.tip2Title}</div>
          <div class="exp-tip-body">${copy.tip2Body}</div>
        </div>
        <div class="exp-tip">
          <div class="exp-tip-icon">↔</div>
          <div class="exp-tip-label">${copy.tip3Title}</div>
          <div class="exp-tip-body">${copy.tip3Body}</div>
        </div>
        <div class="exp-tip">
          <div class="exp-tip-icon">↕</div>
          <div class="exp-tip-label">${copy.tip4Title}</div>
          <div class="exp-tip-body">${copy.tip4Body}</div>
        </div>
        <div class="exp-tip">
          <div class="exp-tip-dots">
            <span style="background:#4ade80"></span>
            <span style="background:#60a5fa"></span>
            <span style="background:#f472b6"></span>
            <span style="background:#fb923c"></span>
          </div>
          <div class="exp-tip-label">${copy.tip5Title}</div>
          <div class="exp-tip-body">${copy.tip5Body}</div>
        </div>
      </div>

      <!-- Category legend -->
      <div class="exp-legend">
        <div class="exp-legend-title">${copy.legendTitle}</div>
        <div class="exp-legend-grid">
          ${Object.values(categories).map((cat) => `
            <span class="exp-legend-chip" style="background:${cat.bgColor};color:${cat.color};border-color:${cat.color}33">
              ${isEN ? cat.nameEn : cat.nameId}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  page.appendChild(howBanner);

  // ═══ 2. PERIODIC TABLE ════════════════════════════════════════════════════
  const tableSection = document.createElement('section');
  tableSection.className = 'exp-table-section';

  // search + filter bar
  tableSection.innerHTML = `
    <div class="exp-table-controls">
      <input type="text" id="exp-search" class="exp-search-input"
        placeholder="${isEN ? 'Search elements… (carbon, Au, 6)' : 'Cari elemen… (karbon, Au, 6)'}"
        autocomplete="off" />
      <div class="exp-filter-chips" id="exp-filter-chips">
        <button class="exp-chip exp-chip--active" data-cat="all">
          ${isEN ? 'All' : 'Semua'}
        </button>
        ${Object.entries(categories).map(([key, cat]) => `
          <button class="exp-chip" data-cat="${key}" style="--chip-color:${cat.color}">
            ${isEN ? cat.nameEn : cat.nameId}
          </button>
        `).join('')}
      </div>
    </div>
    <div class="exp-table-grid" id="exp-table-grid"></div>
  `;
  page.appendChild(tableSection);

  // build grid
  const grid = tableSection.querySelector('#exp-table-grid') as HTMLDivElement;
  let activeFilter: string | null = null;
  let searchQ = '';

  function renderCells() {
    grid.innerHTML = '';
    elements.forEach(el => {
      const pos = GRID_POS[el.n];
      if (!pos) return;
      const [row, col] = pos;
      const catKey = el.cat;
      const cat = categories[catKey];

      // filter
      if (activeFilter && activeFilter !== 'all' && catKey !== activeFilter) return;
      if (searchQ) {
        const q = searchQ.toLowerCase();
        const nameMatch = el.name.toLowerCase().includes(q) || (el.nameId && el.nameId.toLowerCase().includes(q));
        const symMatch = el.sym.toLowerCase().includes(q);
        const nMatch = String(el.n).includes(q);
        if (!nameMatch && !symMatch && !nMatch) return;
      }

      const cell = document.createElement('div');
      cell.className = 'exp-cell';
      cell.style.cssText = `
        grid-row: ${row};
        grid-column: ${col};
        --cat-color: ${cat?.color ?? '#888'};
        --cat-bg: ${cat?.bgColor ?? 'transparent'};
      `;
      cell.innerHTML = `
        <span class="exp-cell-n">${el.n}</span>
        <span class="exp-cell-sym">${el.sym}</span>
        <span class="exp-cell-name">${isEN ? el.name : (el.nameId || el.name)}</span>
        <span class="exp-cell-mass">${parseFloat(String(el.mass)).toFixed(1)}</span>
      `;
      cell.addEventListener('click', () => navigate(`/element/${el.n}`));
      if (row >= 8) {
        cell.style.gridRow = `${row}`;
        cell.style.gridColumn = `${col}`;
      }
      grid.appendChild(cell);
    });
  }
  renderCells();

  // Lanthanide/Actinide gap rows (visual labels)
  const gapLa = document.createElement('div');
  gapLa.className = 'exp-cell exp-cell--gap';
  gapLa.style.cssText = 'grid-row:6;grid-column:3;';
  gapLa.innerHTML = `<span style="font-size:9px;opacity:.6">57–71</span>`;
  grid.appendChild(gapLa);
  const gapAc = document.createElement('div');
  gapAc.className = 'exp-cell exp-cell--gap';
  gapAc.style.cssText = 'grid-row:7;grid-column:3;';
  gapAc.innerHTML = `<span style="font-size:9px;opacity:.6">89–103</span>`;
  grid.appendChild(gapAc);

  // search
  const searchEl = tableSection.querySelector('#exp-search') as HTMLInputElement;
  searchEl.addEventListener('input', () => { searchQ = searchEl.value; renderCells(); });

  // filter chips
  const chipsEl = tableSection.querySelector('#exp-filter-chips') as HTMLDivElement;
  chipsEl.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('[data-cat]') as HTMLElement;
    if (!btn) return;
    chipsEl.querySelectorAll('.exp-chip').forEach(c => c.classList.remove('exp-chip--active'));
    btn.classList.add('exp-chip--active');
    activeFilter = btn.dataset.cat || null;
    renderCells();
  });

  // ═══ 3. MOLECULE SECTION ══════════════════════════════════════════════════
  const molSection = document.createElement('section');
  molSection.className = 'exp-mol-section';
  molSection.innerHTML = `
    <div class="exp-mol-header">
      <h2 class="exp-mol-title">${copy.molSectionTitle}</h2>
      <p class="exp-mol-sub">${copy.molSectionSub}</p>
    </div>

    <!-- How molecules form explainer -->
    <details class="exp-mol-explainer">
      <summary>${copy.molHow}</summary>
      <p>${copy.molHowBody}</p>
    </details>

    <p class="exp-mol-hint">${copy.clickHint}</p>

    <div class="exp-mol-grid" id="exp-mol-grid"></div>
  `;
  page.appendChild(molSection);

  // build molecule cards
  const molGrid = molSection.querySelector('#exp-mol-grid') as HTMLDivElement;
  const featuredMols = FEATURED_FORMULAS
    .map(f => molecules.find(m => m.formula === f))
    .filter(Boolean) as Molecule[];
  // append any not in featured list (sorted by category)
  molecules.forEach(m => {
    if (!featuredMols.includes(m)) featuredMols.push(m);
  });

  const CATEGORY_LABELS_EN: Record<string, string> = {
    common: 'Common', organic: 'Organic', inorganic: 'Inorganic',
    acid: 'Acid', base: 'Base', oxide: 'Oxide', salt: 'Salt',
    gas: 'Gas', material: 'Material',
  };
  const CATEGORY_LABELS_ID: Record<string, string> = {
    common: 'Umum', organic: 'Organik', inorganic: 'Anorganik',
    acid: 'Asam', base: 'Basa', oxide: 'Oksida', salt: 'Garam',
    gas: 'Gas', material: 'Material',
  };
  const CAT_COLORS: Record<string, string> = {
    common: '#60a5fa', organic: '#4ade80', inorganic: '#a78bfa',
    acid: '#f87171', base: '#34d399', oxide: '#fbbf24',
    salt: '#f472b6', gas: '#94a3b8', material: '#fb923c',
  };

  featuredMols.forEach(mol => {
    const card = document.createElement('div');
    card.className = 'exp-mol-card';
    const catLabel = isEN
      ? (CATEGORY_LABELS_EN[mol.category] ?? mol.category)
      : (CATEGORY_LABELS_ID[mol.category] ?? mol.category);
    const catColor = CAT_COLORS[mol.category] ?? '#888';
    card.innerHTML = `
      <div class="exp-mol-card-top">
        <span class="exp-mol-formula">${mol.formula}</span>
        <span class="exp-mol-cat" style="color:${catColor}">${catLabel}</span>
      </div>
      <div class="exp-mol-name">${isEN ? mol.name : mol.nameId}</div>
      <div class="exp-mol-desc">${isEN ? (mol.descEn || mol.desc) : mol.desc}</div>
      <div class="exp-mol-card-footer">
        <span class="exp-mol-atoms">${Object.entries(mol.composition).map(([s, n]) => `${s}${n > 1 ? '₀₁₂₃₄₅₆₇₈₉'[n] ?? n : ''}`).join(' · ')}</span>
        <span class="exp-mol-view">⚛ 3D →</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(mol));
    molGrid.appendChild(card);
  });

  // ═══ 4. MOLECULE MODAL ════════════════════════════════════════════════════
  const modal = document.createElement('div');
  modal.className = 'exp-mol-modal';
  modal.innerHTML = `
    <div class="exp-mol-modal-backdrop" id="exp-modal-backdrop"></div>
    <div class="exp-mol-modal-box" id="exp-modal-box" role="dialog">
      <div class="exp-mol-modal-header">
        <div>
          <div class="exp-mol-modal-formula" id="exp-modal-formula"></div>
          <div class="exp-mol-modal-name" id="exp-modal-name"></div>
        </div>
        <button class="exp-mol-modal-close" id="exp-modal-close">${copy.modalClose}</button>
      </div>
      <div class="exp-mol-modal-body">
        <canvas class="exp-mol-canvas" id="exp-mol-canvas"></canvas>
        <div class="exp-mol-modal-info" id="exp-modal-info"></div>
      </div>
      <div class="exp-mol-modal-footer">
        <button class="exp-mol-modal-lab" id="exp-modal-lab">${copy.modalTryLab}</button>
      </div>
    </div>
  `;
  page.appendChild(modal);
  container.appendChild(page);

  let molCleanup: (() => void) | null = null;

  function openModal(mol: Molecule) {
    modal.classList.add('exp-mol-modal--open');
    document.body.style.overflow = 'hidden';

    const catLabel = isEN
      ? (CATEGORY_LABELS_EN[mol.category] ?? mol.category)
      : (CATEGORY_LABELS_ID[mol.category] ?? mol.category);
    const catColor = CAT_COLORS[mol.category] ?? '#888';

    (modal.querySelector('#exp-modal-formula') as HTMLElement).textContent = mol.formula;
    (modal.querySelector('#exp-modal-name') as HTMLElement).textContent = isEN ? mol.name : mol.nameId;
    (modal.querySelector('#exp-modal-info') as HTMLElement).innerHTML = `
      <div class="exp-info-row"><span class="exp-info-label">${copy.labelShape}</span><span>${mol.shape}</span></div>
      <div class="exp-info-row"><span class="exp-info-label">${copy.labelBond}</span><span>${mol.bondType}</span></div>
      <div class="exp-info-row"><span class="exp-info-label">${copy.labelCat}</span><span style="color:${catColor}">${catLabel}</span></div>
      <p class="exp-info-desc">${isEN ? (mol.descEn || mol.desc) : mol.desc}</p>
      <div class="exp-info-fact">
        <div class="exp-info-fact-label">${copy.labelFunFact}</div>
        <p>${isEN ? (mol.funFactEn || mol.funFact) : mol.funFact}</p>
      </div>
    `;

    // 3D render
    if (molCleanup) { molCleanup(); molCleanup = null; }
    const canvas = modal.querySelector('#exp-mol-canvas') as HTMLCanvasElement;
    canvas.width = 0; canvas.height = 0; // reset
    requestAnimationFrame(() => {
      molCleanup = renderMol3D(canvas, mol);
    });

    // lab button
    (modal.querySelector('#exp-modal-lab') as HTMLButtonElement).onclick = () => navigate('/molecule');
  }

  function closeModal() {
    modal.classList.remove('exp-mol-modal--open');
    document.body.style.overflow = '';
    if (molCleanup) { molCleanup(); molCleanup = null; }
  }

  modal.querySelector('#exp-modal-close')!.addEventListener('click', closeModal);
  modal.querySelector('#exp-modal-backdrop')!.addEventListener('click', closeModal);
  document.addEventListener('keydown', onKey);
  function onKey(e: KeyboardEvent) { if (e.key === 'Escape') closeModal(); }

  return () => {
    document.removeEventListener('keydown', onKey);
    if (molCleanup) molCleanup();
    cleanups.forEach(fn => fn());
    document.body.style.overflow = '';
  };
}
