import type { Molecule } from '../data/molecules';
import { molecules, matchMolecule, CATEGORY_LABELS } from '../data/molecules';
import { phenomena, PHENOMENON_CATEGORIES } from '../data/phenomena';
import { phenomenonStories } from '../data/phenomenon-stories';
import { MoleculeScene } from '../three/moleculeScene';
import { navigate } from '../core/router';


// Atoms palette — most commonly used in chemistry
const PALETTE = [
  { sym: 'H', name: 'Hidrogen', color: '#60a5fa' },
  { sym: 'O', name: 'Oksigen', color: '#f87171' },
  { sym: 'C', name: 'Karbon', color: '#6b7280' },
  { sym: 'N', name: 'Nitrogen', color: '#818cf8' },
  { sym: 'Na', name: 'Natrium', color: '#c084fc' },
  { sym: 'Cl', name: 'Klorin', color: '#4ade80' },
  { sym: 'S', name: 'Sulfur', color: '#facc15' },
  { sym: 'K', name: 'Kalium', color: '#a78bfa' },
  { sym: 'Ca', name: 'Kalsium', color: '#86efac' },
  { sym: 'Fe', name: 'Besi', color: '#fb923c' },
  { sym: 'Cu', name: 'Tembaga', color: '#f59e0b' },
  { sym: 'Mg', name: 'Magnesium', color: '#34d399' },
  { sym: 'P', name: 'Fosfor', color: '#f97316' },
  { sym: 'Al', name: 'Aluminium', color: '#d1d5db' },
  { sym: 'Zn', name: 'Seng', color: '#93c5fd' },
  { sym: 'Ag', name: 'Perak', color: '#e2e8f0' },
  { sym: 'Au', name: 'Emas', color: '#fcd34d' },
  { sym: 'Pb', name: 'Timbal', color: '#9ca3af' },
];

// Quick-try examples
const QUICK_EXAMPLES: { label: string; composition: Record<string, number> }[] = [
  { label: '💧 H₂O', composition: { H: 2, O: 1 } as Record<string, number> },
  { label: '🌬 CO₂', composition: { C: 1, O: 2 } as Record<string, number> },
  { label: '🧂 NaCl', composition: { Na: 1, Cl: 1 } as Record<string, number> },
  { label: '⚗️ NH₃', composition: { N: 1, H: 3 } as Record<string, number> },
  { label: '🔥 CH₄', composition: { C: 1, H: 4 } as Record<string, number> },
  { label: '🪨 Fe₂O₃', composition: { Fe: 2, O: 3 } as Record<string, number> },
  { label: '💎 Berlian', composition: { C: 5 } as Record<string, number> },
  { label: '✏️ Grafit', composition: { C: 6 } as Record<string, number> },
  { label: '⚙️ Besi', composition: { Fe: 9 } as Record<string, number> },
  { label: '🍬 Glukosa', composition: { C: 6, H: 12, O: 6 } as Record<string, number> },
];


export function renderMoleculeBuilder(container: HTMLElement): () => void {
  let selection: Record<string, number> = {};  // current atom selection
  let sceneRef: MoleculeScene | null = null;


  // ── Outer layout ──────────────────────────────────────────────────
  container.innerHTML = `
    <div class="mb-page">

      <!-- TOP BAR -->
      <div class="mb-topbar">
        <button class="mb-back" id="mb-back">← Kembali</button>
        <div class="mb-topbar-title">
          <span class="mb-topbar-icon">⚗️</span>
          <span>Bangun Molekul</span>
        </div>
        <div class="mb-topbar-sub">Pilih atom, gabungkan, lihat hasilnya dalam 3D</div>
      </div>

      <div class="mb-body">

        <!-- LEFT PANEL -->
        <aside class="mb-left">

          <!-- Atom palette -->
          <div class="mb-section-label">Pilih Atom</div>
          <div class="mb-palette" id="mb-palette">
            ${PALETTE.map(a => `
              <button
                class="mb-atom-btn"
                data-sym="${a.sym}"
                title="${a.name}"
                style="--atom-clr:${a.color}"
              >
                <span class="mb-atom-sym">${a.sym}</span>
                <span class="mb-atom-name">${a.name}</span>
              </button>
            `).join('')}
          </div>

          <!-- Quick examples -->
          <div class="mb-section-label" style="margin-top:20px">Coba Langsung</div>
          <div class="mb-quick" id="mb-quick">
            ${QUICK_EXAMPLES.map((ex, i) => `
              <button class="mb-quick-btn" data-qi="${i}">${ex.label}</button>
            `).join('')}
          </div>

          <!-- Current mix -->
          <div class="mb-section-label" style="margin-top:20px">
            Campuranmu
            <button class="mb-reset-btn" id="mb-reset" title="Reset">✕ Reset</button>
          </div>
          <div class="mb-mix" id="mb-mix">
            <div class="mb-mix-empty" id="mb-mix-empty">Belum ada atom dipilih</div>
          </div>

          <!-- Match hint -->
          <div class="mb-hint" id="mb-hint" hidden></div>

          <!-- Combine button -->
          <button class="mb-combine-btn" id="mb-combine" disabled>
            🔬 Gabungkan
          </button>

        </aside>

        <!-- RIGHT PANEL: 3D + info -->
        <main class="mb-right">

          <!-- Empty state -->
          <div class="mb-empty-state" id="mb-empty-state">
            <div class="mb-empty-icon">⚗️</div>
            <div class="mb-empty-title">Pilih atom untuk memulai</div>
            <div class="mb-empty-sub">
              Tambahkan atom dari panel kiri, lalu klik "Gabungkan"
              untuk melihat hasilnya dalam 3D.
            </div>
          </div>

          <!-- Result (hidden until match) -->
          <div class="mb-result" id="mb-result" hidden>

            <!-- 3D Viewer -->
            <div class="mb-canvas-wrap" id="mb-canvas-wrap">
              <canvas id="mb-canvas"></canvas>
              <div class="mb-canvas-hint">Drag untuk rotasi · Scroll untuk zoom</div>
            </div>

            <!-- Molecule info -->
            <div class="mb-mol-info" id="mb-mol-info">
              <!-- filled by JS -->
            </div>

          </div>

          <!-- Not found state -->
          <div class="mb-not-found" id="mb-not-found" hidden>
            <div class="mb-nf-icon">🔍</div>
            <div class="mb-nf-title">Kombinasi tidak dikenal</div>
            <div class="mb-nf-sub" id="mb-nf-sub"></div>
            <div class="mb-nf-tip">Coba ubah jumlah atau jenis atom, atau pilih salah satu contoh.</div>
          </div>

        </main>

      </div>
    </div>
    `;

  // ─── References ──────────────────────────────────────────────────
  const paletteEl = container.querySelector('#mb-palette')! as HTMLElement;
  const quickEl = container.querySelector('#mb-quick')! as HTMLElement;
  const mixEl = container.querySelector('#mb-mix')! as HTMLElement;
  const mixEmptyEl = container.querySelector('#mb-mix-empty')! as HTMLElement;
  const hintEl = container.querySelector('#mb-hint')! as HTMLElement;
  const combineBtn = container.querySelector('#mb-combine')! as HTMLButtonElement;
  const resetBtn = container.querySelector('#mb-reset')! as HTMLButtonElement;
  const emptyState = container.querySelector('#mb-empty-state')! as HTMLElement;
  const resultEl = container.querySelector('#mb-result')! as HTMLElement;
  const notFoundEl = container.querySelector('#mb-not-found')! as HTMLElement;
  const molInfoEl = container.querySelector('#mb-mol-info')! as HTMLElement;
  const nfSubEl = container.querySelector('#mb-nf-sub')! as HTMLElement;

  container.querySelector('#mb-back')!.addEventListener('click', () => navigate('/'));

  // ─── Selection management ──────────────────────────────────────
  function addAtom(sym: string) {
    selection[sym] = (selection[sym] || 0) + 1;
    updateMix();
  }

  function changeCount(sym: string, delta: number) {
    const next = (selection[sym] || 0) + delta;
    if (next <= 0) {
      delete selection[sym];
    } else {
      selection[sym] = Math.min(next, 9);  // cap at 9
    }
    updateMix();
  }

  function resetSelection() {
    selection = {};
    updateMix();
    showEmpty();
  }

  function updateMix() {
    const keys = Object.keys(selection);
    mixEmptyEl.style.display = keys.length ? 'none' : 'block';
    combineBtn.disabled = keys.length === 0;

    // Rebuild mix chips
    const existing = mixEl.querySelectorAll('.mb-chip');
    existing.forEach(e => e.remove());

    keys.forEach(sym => {
      const pal = PALETTE.find(p => p.sym === sym);
      const color = pal?.color ?? '#aaa';
      const chip = document.createElement('div');
      chip.className = 'mb-chip';
      chip.innerHTML = `
                <span class="mb-chip-sym" style="color:${color}">${sym}</span>
                <span class="mb-chip-count">${selection[sym]}</span>
                <div class="mb-chip-btns">
                    <button class="mb-chip-btn" data-sym="${sym}" data-d="-1">−</button>
                    <button class="mb-chip-btn" data-sym="${sym}" data-d="+1">+</button>
                </div>
            `;
      mixEl.appendChild(chip);
    });

    // Real-time match hint
    const match = matchMolecule(selection);
    if (match && keys.length > 0) {
      hintEl.textContent = `💡 Ini terlihat seperti ${match.nameId} (${match.formula})`;
      hintEl.hidden = false;
    } else {
      hintEl.hidden = true;
    }
  }

  // Chip +/- buttons
  mixEl.addEventListener('click', e => {
    const btn = (e.target as HTMLElement).closest('[data-d]') as HTMLElement | null;
    if (!btn) return;
    const sym = btn.dataset.sym!;
    const delta = parseInt(btn.dataset.d!);
    changeCount(sym, delta);
  });

  // ─── Palette clicks ────────────────────────────────────────────
  paletteEl.addEventListener('click', e => {
    const btn = (e.target as HTMLElement).closest('[data-sym]') as HTMLElement | null;
    if (!btn) return;
    addAtom(btn.dataset.sym!);
  });

  // ─── Quick examples ────────────────────────────────────────────
  quickEl.addEventListener('click', e => {
    const btn = (e.target as HTMLElement).closest('[data-qi]') as HTMLElement | null;
    if (!btn) return;
    const qi = parseInt(btn.dataset.qi!);
    selection = { ...QUICK_EXAMPLES[qi].composition };
    updateMix();
  });

  // ─── Reset ─────────────────────────────────────────────────────
  resetBtn.addEventListener('click', resetSelection);

  // ─── Combine ───────────────────────────────────────────────────
  combineBtn.addEventListener('click', () => {
    const mol = matchMolecule(selection);
    if (mol) {
      showResult(mol);
    } else {
      showNotFound();
    }
  });

  // ─── Show states ───────────────────────────────────────────────
  function showEmpty() {
    emptyState.hidden = false;
    resultEl.hidden = true;
    notFoundEl.hidden = true;
    destroyScene();
  }

  function showNotFound() {
    const selStr = Object.entries(selection)
      .map(([s, n]) => `${s}${n > 1 ? n : ''}`)
      .join('');
    nfSubEl.textContent = `Tidak ditemukan molekul dengan komposisi: ${selStr}`;
    emptyState.hidden = true;
    resultEl.hidden = true;
    notFoundEl.hidden = false;
    destroyScene();
  }

  function showResult(mol: Molecule) {
    emptyState.hidden = true;
    notFoundEl.hidden = true;
    resultEl.hidden = false;

    // Fill info panel
    molInfoEl.innerHTML = buildInfoHTML(mol);

    // Double rAF: first frame unhides element, second frame measures real dimensions
    requestAnimationFrame(() => requestAnimationFrame(() => {
      destroyScene();
      const canvas = container.querySelector('#mb-canvas') as HTMLCanvasElement;
      if (!canvas) return;

      const wrap = container.querySelector('#mb-canvas-wrap') as HTMLElement;
      // clientWidth is 0 if element was hidden — use offsetWidth fallback
      const size = wrap.clientWidth || wrap.offsetWidth || 380;
      canvas.width = size;
      canvas.height = size;

      sceneRef = new MoleculeScene(canvas);
      sceneRef.build(mol);
      sceneRef.start();
    }));
  }


  function destroyScene() {
    if (sceneRef) { sceneRef.destroy(); sceneRef = null; }
  }

  // ─── Info HTML ─────────────────────────────────────────────────
  function buildInfoHTML(mol: Molecule): string {
    const compositionStr = Object.entries(mol.composition)
      .map(([s, n]) => `<span class="mb-comp-atom">${s}<sub>${n > 1 ? n : ''}</sub></span>`)
      .join('');
    return `
        <div class="mb-mol-header">
            <div class="mb-mol-formula">${mol.formula}</div>
            <div class="mb-mol-names">
                <div class="mb-mol-name-id">${mol.nameId}</div>
                <div class="mb-mol-name-en">${mol.name}</div>
            </div>
            <div class="mb-mol-badge">${CATEGORY_LABELS[mol.category] ?? mol.category}</div>
        </div>

        <div class="mb-mol-meta">
            <div class="mb-mol-meta-item">
                <span class="mb-mol-meta-label">Bentuk</span>
                <span>${mol.shape}</span>
            </div>
            <div class="mb-mol-meta-item">
                <span class="mb-mol-meta-label">Ikatan</span>
                <span>${mol.bondType}</span>
            </div>
            <div class="mb-mol-meta-item">
                <span class="mb-mol-meta-label">Komposisi</span>
                <span class="mb-comp">${compositionStr}</span>
            </div>
        </div>

        <div class="mb-mol-desc">${mol.desc}</div>

        <div class="mb-mol-funfact">
            <span class="mb-mol-funfact-icon">💡</span>
            <span>${mol.funFact}</span>
        </div>

        <div class="mb-mol-legend">
            <div class="mb-mol-legend-title">Legenda Warna (CPK)</div>
            <div class="mb-mol-legend-items">
                ${[...new Set(mol.atoms.map(a => a.sym))].map(sym => {
      const c = (CPK_COLORS_HEX as Record<string, string>)[sym] ?? '#ff69b4';
      return `<span class="mb-legend-dot" style="background:${c}"></span>${sym}`;
    }).join(' ')}
            </div>
        </div>
        `;
  }

  // Cleanup function
  return () => { destroyScene(); };
}

// ─────────────────────────────────────────────────────────────────────────────
// PHENOMENA SECTION — rendered below the molecule builder
// ─────────────────────────────────────────────────────────────────────────────
export function renderPhenomena(container: HTMLElement): void {
  const cats = Object.keys(PHENOMENON_CATEGORIES) as (keyof typeof PHENOMENON_CATEGORIES)[];

  container.innerHTML = `
  <div class="ph-page">
    <div class="ph-header">
      <div class="ph-header-title">⚡ Fenomena Atom</div>
      <div class="ph-header-sub">Dari ledakan nuklir hingga DNA — semuanya dimulai dari atom</div>
    </div>

    <div class="ph-filter" id="ph-filter">
      <button class="ph-filter-btn ph-filter-btn--active" data-cat="all">Semua</button>
      ${cats.map(c => `<button class="ph-filter-btn" data-cat="${c}" style="--ph-clr:${PHENOMENON_CATEGORIES[c].color}">${PHENOMENON_CATEGORIES[c].label}</button>`).join('')}
    </div>

    <div class="ph-grid" id="ph-grid">
      ${phenomena.map(p => {
    const cat = PHENOMENON_CATEGORIES[p.category];
    const hasStory = phenomenonStories.some(s => s.id === p.id);
    return `
        <div class="ph-card ${hasStory ? 'ph-card--has-story' : ''}" data-cat="${p.category}" data-id="${p.id}" role="button" tabindex="0">
          <div class="ph-card-top">
            <span class="ph-icon">${p.icon}</span>
            <span class="ph-cat-badge" style="color:${cat.color};background:${cat.bg}">${cat.label}</span>
            ${hasStory ? `<span class="ph-story-badge">📖 Cerita</span>` : ''}
          </div>
          <div class="ph-title">${p.title}</div>
          <div class="ph-tagline">${p.tagline}</div>
          <div class="ph-desc">${p.desc.replace(/\n/g, '<br><br>')}</div>
          <div class="ph-divider"></div>
          <div class="ph-meta">
            <div class="ph-meta-row">
              <span class="ph-meta-icon">💡</span>
              <span class="ph-meta-label">Fakta</span>
              <span class="ph-meta-val">${p.funFact}</span>
            </div>
            <div class="ph-meta-row">
              <span class="ph-meta-icon">📏</span>
              <span class="ph-meta-label">Skala</span>
              <span class="ph-meta-val">${p.scale}</span>
            </div>
            <div class="ph-meta-row">
              <span class="ph-meta-icon">🌍</span>
              <span class="ph-meta-label">Nyata</span>
              <span class="ph-meta-val">${p.realWorld}</span>
            </div>
          </div>
          ${p.atoms.length ? `<div class="ph-atoms">${p.atoms.map(a => `<span class="ph-atom-tag">${a}</span>`).join('')}</div>` : ''}
          ${hasStory ? `
          <button class="ph-story-btn" data-story-id="${p.id}">
            <span>📖</span> Baca Cerita Lengkap
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,6 15,12 9,18"/></svg>
          </button>` : ''}
        </div>`;
  }).join('')}
    </div>
  </div>
  `;

  // Filter logic
  const filterEl = container.querySelector('#ph-filter')!;
  const gridEl = container.querySelector('#ph-grid')!;

  filterEl.addEventListener('click', e => {
    const btn = (e.target as HTMLElement).closest('[data-cat]') as HTMLElement | null;
    if (!btn) return;
    const cat = btn.dataset.cat!;

    filterEl.querySelectorAll('.ph-filter-btn').forEach(b => b.classList.remove('ph-filter-btn--active'));
    btn.classList.add('ph-filter-btn--active');

    gridEl.querySelectorAll<HTMLElement>('.ph-card').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  });

  // Story mode navigation
  gridEl.addEventListener('click', e => {
    const storyBtn = (e.target as HTMLElement).closest('[data-story-id]') as HTMLElement | null;
    if (storyBtn) {
      e.stopPropagation();
      navigate('/phenomena/' + storyBtn.dataset.storyId);
      return;
    }
  });
}


// Hex string version of CPK colors for HTML (MoleculeScene uses 0xRRGGBB)
const CPK_COLORS_HEX: Record<string, string> = {
  H: '#FFFFFF', C: '#404040', N: '#3050F8', O: '#FF0D0D',
  F: '#90E050', Na: '#AB5CF2', Mg: '#8AFF00', Al: '#BFA6A6',
  Si: '#F0C8A0', P: '#FF8000', S: '#FFFF30', Cl: '#1FF01F',
  K: '#8F40D4', Ca: '#3DFF00', Fe: '#E06633', Cu: '#C88033',
  Au: '#FFD123', Hg: '#B8B8D0', Pb: '#575961',
};

// Also export molecules list for the browse panel
export { molecules };
