import type { Molecule } from '../data/molecules';
import { molecules, matchMolecule, CATEGORY_LABELS, CHALLENGES } from '../data/molecules';
import type { Challenge } from '../data/molecules';
import { MoleculeScene } from '../three/moleculeScene';
import { navigate } from '../core/router';
import { getLang } from '../core/i18n';

// ─── Demo Mode Config ─────────────────────────────────────────────────────────
// Atoms unlocked in demo mode (free for landing page visitors)
const DEMO_UNLOCKED_ATOMS = new Set(['H', 'O', 'C']);
const DEMO_LANDING_URL = '/#pricing'; // relative to landing page origin

export interface MoleculeBuilderOptions {
  demoMode?: boolean;   // restricted palette, no challenges, upgrade CTA
  landingUrl?: string;  // base URL for upgrade CTA
}

// ─── Palette (full) ───────────────────────────────────────────────────────────
const ALL_PALETTE_ID = [
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
const ALL_PALETTE_EN = [
  { sym: 'H', name: 'Hydrogen', color: '#60a5fa' },
  { sym: 'O', name: 'Oxygen', color: '#f87171' },
  { sym: 'C', name: 'Carbon', color: '#6b7280' },
  { sym: 'N', name: 'Nitrogen', color: '#818cf8' },
  { sym: 'Na', name: 'Sodium', color: '#c084fc' },
  { sym: 'Cl', name: 'Chlorine', color: '#4ade80' },
  { sym: 'S', name: 'Sulfur', color: '#facc15' },
  { sym: 'K', name: 'Potassium', color: '#a78bfa' },
  { sym: 'Ca', name: 'Calcium', color: '#86efac' },
  { sym: 'Fe', name: 'Iron', color: '#fb923c' },
  { sym: 'Cu', name: 'Copper', color: '#f59e0b' },
  { sym: 'Mg', name: 'Magnesium', color: '#34d399' },
  { sym: 'P', name: 'Phosphorus', color: '#f97316' },
  { sym: 'Al', name: 'Aluminium', color: '#d1d5db' },
  { sym: 'Zn', name: 'Zinc', color: '#93c5fd' },
  { sym: 'Ag', name: 'Silver', color: '#e2e8f0' },
  { sym: 'Au', name: 'Gold', color: '#fcd34d' },
  { sym: 'Pb', name: 'Lead', color: '#9ca3af' },
];

// Quick-try examples (free mode)
const QUICK_EXAMPLES_ID: { label: string; composition: Record<string, number> }[] = [
  { label: '💧 H₂O', composition: { H: 2, O: 1 } },
  { label: '🌬 CO₂', composition: { C: 1, O: 2 } },
  { label: '🧂 NaCl', composition: { Na: 1, Cl: 1 } },
  { label: '⚗️ NH₃', composition: { N: 1, H: 3 } },
  { label: '🔥 CH₄', composition: { C: 1, H: 4 } },
  { label: '🪨 Fe₂O₃', composition: { Fe: 2, O: 3 } },
  { label: '💎 Berlian', composition: { C: 5 } },
  { label: '✏️ Grafit', composition: { C: 6 } },
  { label: '⚙️ Besi', composition: { Fe: 9 } },
  { label: '🍬 Glukosa', composition: { C: 6, H: 12, O: 6 } },
];
const QUICK_EXAMPLES_EN: { label: string; composition: Record<string, number> }[] = [
  { label: '💧 H₂O', composition: { H: 2, O: 1 } },
  { label: '🌬 CO₂', composition: { C: 1, O: 2 } },
  { label: '🧂 NaCl', composition: { Na: 1, Cl: 1 } },
  { label: '⚗️ NH₃', composition: { N: 1, H: 3 } },
  { label: '🔥 CH₄', composition: { C: 1, H: 4 } },
  { label: '🪨 Fe₂O₃', composition: { Fe: 2, O: 3 } },
  { label: '💎 Diamond', composition: { C: 5 } },
  { label: '✏️ Graphite', composition: { C: 6 } },
  { label: '⚙️ Iron', composition: { Fe: 9 } },
  { label: '🍬 Glucose', composition: { C: 6, H: 12, O: 6 } },
];

const DIFF_LABEL: Record<string, { id: string; en: string; color: string }> = {
  easy: { id: 'Mudah', en: 'Easy', color: '#4ade80' },
  medium: { id: 'Sedang', en: 'Medium', color: '#fbbf24' },
  hard: { id: 'Sulit', en: 'Hard', color: '#f87171' },
};

// CPK colors for legend
const CPK_COLORS_HEX: Record<string, string> = {
  H: '#FFFFFF', C: '#404040', N: '#3050F8', O: '#FF0D0D',
  F: '#90E050', Na: '#AB5CF2', Mg: '#8AFF00', Al: '#BFA6A6',
  Si: '#F0C8A0', P: '#FF8000', S: '#FFFF30', Cl: '#1FF01F',
  K: '#8F40D4', Ca: '#3DFF00', Fe: '#E06633', Cu: '#C88033',
  Au: '#FFD123', Hg: '#B8B8D0', Pb: '#575961',
};

// Atom metadata for freeform experiment info cards
const ATOM_INFO: Record<string, { no: number; mass: string; groupId: string; groupEn: string }> = {
  H: { no: 1, mass: '1.008', groupId: 'Nonlogam', groupEn: 'Nonmetal' },
  C: { no: 6, mass: '12.011', groupId: 'Nonlogam', groupEn: 'Nonmetal' },
  N: { no: 7, mass: '14.007', groupId: 'Nonlogam', groupEn: 'Nonmetal' },
  O: { no: 8, mass: '15.999', groupId: 'Nonlogam', groupEn: 'Nonmetal' },
  Na: { no: 11, mass: '22.990', groupId: 'Logam Alkali', groupEn: 'Alkali Metal' },
  Mg: { no: 12, mass: '24.305', groupId: 'Logam Alkali Tanah', groupEn: 'Alkaline Earth' },
  Al: { no: 13, mass: '26.982', groupId: 'Pasca-transisi', groupEn: 'Post-transition' },
  Si: { no: 14, mass: '28.085', groupId: 'Metaloid', groupEn: 'Metalloid' },
  P: { no: 15, mass: '30.974', groupId: 'Nonlogam', groupEn: 'Nonmetal' },
  S: { no: 16, mass: '32.06', groupId: 'Nonlogam', groupEn: 'Nonmetal' },
  Cl: { no: 17, mass: '35.45', groupId: 'Halogen', groupEn: 'Halogen' },
  K: { no: 19, mass: '39.098', groupId: 'Logam Alkali', groupEn: 'Alkali Metal' },
  Ca: { no: 20, mass: '40.078', groupId: 'Logam Alkali Tanah', groupEn: 'Alkaline Earth' },
  Fe: { no: 26, mass: '55.845', groupId: 'Logam Transisi', groupEn: 'Transition Metal' },
  Cu: { no: 29, mass: '63.546', groupId: 'Logam Transisi', groupEn: 'Transition Metal' },
  Zn: { no: 30, mass: '65.38', groupId: 'Logam Transisi', groupEn: 'Transition Metal' },
  Ag: { no: 47, mass: '107.868', groupId: 'Logam Transisi', groupEn: 'Transition Metal' },
  Au: { no: 79, mass: '196.967', groupId: 'Logam Transisi', groupEn: 'Transition Metal' },
  Pb: { no: 82, mass: '207.2', groupId: 'Logam Pasca-transisi', groupEn: 'Post-transition' },
};

// ─── Chemistry Deduction Engine ───────────────────────────────────────────────
// Deduces likely properties of an unknown atom combination using periodic table
// rules: electronegativity trends, group membership, known hazard patterns, etc.

type DeductionLevel = 'danger' | 'warning' | 'interesting' | 'awesome' | 'curious';
interface Deduction { icon: string; level: DeductionLevel; id: string; en: string; }

// Atom classification helpers
const ALKALI = new Set(['Li', 'Na', 'K', 'Rb', 'Cs']);
const ALK_EARTH = new Set(['Be', 'Mg', 'Ca', 'Sr', 'Ba']);
const TRANSITION = new Set(['Fe', 'Cu', 'Zn', 'Ni', 'Co', 'Mn', 'Cr', 'V', 'Ti', 'Ag', 'Au', 'Pt', 'Pd', 'Hg']);
const HEAVY_TOXIC = new Set(['Pb', 'Hg', 'Cd', 'As', 'Tl']);
const HALOGEN = new Set(['F', 'Cl', 'Br', 'I']);
const NONMETAL = new Set(['H', 'C', 'N', 'O', 'P', 'S', 'Se']);
const METALLOID = new Set(['Si', 'Ge', 'As', 'Sb', 'Te']); void METALLOID;
const NOBLE_METAL = new Set(['Au', 'Ag', 'Pt', 'Pd']);

// Electronegativity (Pauling scale, approximate)
const EN: Record<string, number> = {
  H: 2.20, C: 2.55, N: 3.04, O: 3.44, F: 3.98,
  Na: 0.93, K: 0.82, Ca: 1.00, Mg: 1.31, Al: 1.61,
  Fe: 1.83, Cu: 1.90, Zn: 1.65, Si: 1.90, P: 2.19,
  S: 2.58, Cl: 3.16, Pb: 2.33, Hg: 2.00, Ag: 1.93,
  Au: 2.54, Ca2: 1.00,
};

function deduceFreeExperiment(sel: Record<string, number>, _isEN: boolean): Deduction[] {
  const syms = Object.keys(sel);
  const totalAtoms = Object.values(sel).reduce((a, b) => a + b, 0);
  const has = (s: string) => s in sel;
  const count = (s: string) => sel[s] ?? 0;
  const results: Deduction[] = [];

  const metals = syms.filter(s => TRANSITION.has(s) || ALKALI.has(s) || ALK_EARTH.has(s));
  const nonmetals = syms.filter(s => NONMETAL.has(s));
  const halogens = syms.filter(s => HALOGEN.has(s));

  // ── DANGER rules ────────────────────────────────────────────────────────
  if (syms.some(s => HEAVY_TOXIC.has(s))) {
    const tox = syms.filter(s => HEAVY_TOXIC.has(s)).join(', ');
    results.push({
      icon: '☠️', level: 'danger',
      id: `Mengandung logam berat (${tox}) — hampir semua senyawanya sangat beracun bagi sistem saraf & ginjal manusia.`,
      en: `Contains heavy metal (${tox}) — most compounds are highly toxic to the nervous system & kidneys.`,
    });
  }

  if (has('F')) {
    results.push({
      icon: '⚡', level: 'danger',
      id: 'Fluor adalah unsur paling elektronegatif — senyawanya cenderung sangat korosif dan bereaksi agresif dengan hampir segalanya.',
      en: 'Fluorine is the most electronegative element — its compounds tend to be highly corrosive and aggressively reactive.',
    });
  }

  if (ALKALI.has(syms[0] ?? '') && count(syms[0]) >= 1 && syms.length === 1) {
    results.push({
      icon: '💥', level: 'danger',
      id: `Logam alkali murni seperti ${syms[0]} bereaksi keras dengan air — kontak air bisa memicu ledakan.`,
      en: `Pure alkali metal like ${syms[0]} reacts violently with water — contact can trigger an explosion.`,
    });
  }

  // ── WARNING rules ────────────────────────────────────────────────────────
  const nCount = count('N');
  if (nCount >= 3) {
    results.push({
      icon: '💣', level: 'warning',
      id: `${nCount} atom nitrogen dalam satu molekul — rasio N tinggi adalah ciri khas senyawa energetik seperti TNT atau nitrogliserin. Berpotensi eksplosif jika ditambah oksigen.`,
      en: `${nCount} nitrogen atoms in one molecule — high N ratio is the hallmark of energetic compounds like TNT or nitroglycerin. Potentially explosive if oxygen is added.`,
    });
  }

  if (has('K') && (has('O') || has('Cl'))) {
    results.push({
      icon: '🔥', level: 'warning',
      id: 'Kalium + Oksigen/Klor → kandidat oksidator kuat (seperti KClO₃). Senyawa ini bisa memicu kebakaran jika terkena bahan organik.',
      en: 'Potassium + Oxygen/Chlorine → candidate strong oxidizer (like KClO₃). Such compounds can ignite organic materials.',
    });
  }

  if (has('S') && has('H') && !has('O')) {
    results.push({
      icon: '🤢', level: 'warning',
      id: 'Pola H-S menyerupai hidrogen sulfida (H₂S) — gas berbau telur busuk yang beracun meski dalam konsentrasi rendah.',
      en: 'H-S pattern resembles hydrogen sulfide (H₂S) — rotten-egg-smelling gas that is toxic even at low concentrations.',
    });
  }

  // ── INTERESTING rules ─────────────────────────────────────────────────────
  const isOrganic = has('C') && has('H');
  if (isOrganic) {
    const withO = has('O');
    const withN = has('N');
    if (withO && withN) {
      results.push({
        icon: '💊', level: 'interesting',
        id: 'C + H + O + N → pola senyawa organik kompleks. Kemungkinan besar masuk keluarga alkaloid, asam amino, atau obat-obatan.',
        en: 'C + H + O + N → complex organic compound pattern. Likely in the alkaloid, amino acid, or pharmaceutical family.',
      });
    } else if (withO) {
      results.push({
        icon: '🍬', level: 'interesting',
        id: 'C + H + O → wilayah senyawa organik berbasis oksigen. Bisa jadi alkohol, gula, eter, atau lemak tergantung rasio atomnya.',
        en: 'C + H + O → oxygen-based organic territory. Could be alcohol, sugar, ether, or fat depending on the atomic ratio.',
      });
    } else {
      results.push({
        icon: '⛽', level: 'interesting',
        id: 'C + H tanpa O → hidrokarbon murni. Kemungkinan bahan bakar (seperti metana, propana) atau polimer plastik.',
        en: 'C + H without O → pure hydrocarbon. Could be a fuel (like methane, propane) or a plastic polymer.',
      });
    }
  }

  if (has('Si') && has('O')) {
    results.push({
      icon: '🪨', level: 'interesting',
      id: 'Si + O → pola silikat — keluarga mineral paling melimpah di kerak Bumi. Bisa membentuk pasir, kaca, keramik, atau semikonduktor.',
      en: 'Si + O → silicate pattern — the most abundant mineral family in Earth\'s crust. Could form sand, glass, ceramics, or semiconductors.',
    });
  }

  const enValues = syms.map(s => EN[s]).filter(Boolean);
  if (enValues.length >= 2) {
    const enMax = Math.max(...enValues);
    const enMin = Math.min(...enValues);
    const enDiff = enMax - enMin;
    if (enDiff > 1.7 && metals.length > 0 && nonmetals.length > 0) {
      results.push({
        icon: '🧲', level: 'interesting',
        id: `Perbedaan elektronegativitas besar (Δ≈${enDiff.toFixed(1)}) antara logam dan nonlogam → kemungkinan besar ikatan ionik. Senyawa ini bisa jadi garam kristal stabil atau padatan yang larut dalam air.`,
        en: `Large electronegativity difference (Δ≈${enDiff.toFixed(1)}) between metal and nonmetal → likely ionic bonding. This could form a stable crystalline salt or water-soluble solid.`,
      });
    } else if (enDiff < 0.5 && nonmetals.length >= 2) {
      results.push({
        icon: '🤝', level: 'interesting',
        id: `Elektronegativitas hampir setara (Δ≈${enDiff.toFixed(1)}) → prediksi ikatan kovalen nonpolar. Senyawa ini cenderung berbentuk gas atau cairan yang tidak larut dalam air.`,
        en: `Nearly equal electronegativity (Δ≈${enDiff.toFixed(1)}) → predicted nonpolar covalent bond. This compound tends to be a gas or water-insoluble liquid.`,
      });
    }
  }

  if (halogens.length > 0 && nonmetals.some(s => !HALOGEN.has(s))) {
    const hal = halogens.join('+');
    results.push({
      icon: '🧪', level: 'interesting',
      id: `Halogen (${hal}) cenderung menarik elektron kuat — senyawanya kemungkinan sangat polar dan bisa berfungsi sebagai antiseptik, pelarut, atau bahan industri.`,
      en: `Halogen (${hal}) aggressively pulls electrons — the compound is likely highly polar and could function as an antiseptic, solvent, or industrial chemical.`,
    });
  }

  if (has('Ca') && has('P') && has('O')) {
    results.push({
      icon: '🦴', level: 'interesting',
      id: 'Ca + P + O → sangat mirip hidroksiapatit — mineral utama penyusun tulang dan gigi manusia!',
      en: 'Ca + P + O → very similar to hydroxyapatite — the primary mineral in human bones and teeth!',
    });
  }

  // ── AWESOME rules ─────────────────────────────────────────────────────────
  if (syms.some(s => NOBLE_METAL.has(s))) {
    const noble = syms.filter(s => NOBLE_METAL.has(s)).join(', ');
    results.push({
      icon: '✨', level: 'awesome',
      id: `Mengandung logam mulia (${noble}) — sangat tahan korosi. Senyawa ini punya nilai tinggi dan kemungkinan besar stabil secara kimiawi dalam jangka panjang.`,
      en: `Contains noble metal (${noble}) — highly corrosion-resistant. This compound has high value and is likely chemically stable long-term.`,
    });
  }

  if (metals.length >= 2 && nonmetals.length === 0) {
    const alloy = metals.join(' + ');
    results.push({
      icon: '🔩', level: 'awesome',
      id: `${alloy} — kombinasi logam-logam menghasilkan paduan (alloy)! Alloy biasanya lebih kuat, tahan korosi, atau konduktif daripada logam aslinya. Perunggu (Cu+Sn), baja (Fe+C), monel (Ni+Cu) adalah contohnya.`,
      en: `${alloy} — metal-metal combination produces an alloy! Alloys are typically stronger, more corrosion-resistant, or more conductive than the base metals. Bronze (Cu+Sn), steel (Fe+C), monel (Ni+Cu) are examples.`,
    });
  }

  if (syms.length === 1 && count(syms[0]) >= 2) {
    results.push({
      icon: '💎', level: 'awesome',
      id: `Hanya satu jenis atom dalam jumlah besar → kemungkinan alotrop elementar seperti berlian & grafit (C), ozon (O₃), atau logam kristal. Sifatnya bisa sangat berbeda dari atom tunggalnya!`,
      en: `Only one atom type in large quantity → possible elemental allotrope like diamond & graphite (C), ozone (O₃), or crystalline metal. Properties can be wildly different from the single atom!`,
    });
  }

  if (syms.some(s => TRANSITION.has(s)) && has('O') && !isOrganic) {
    results.push({
      icon: '🌈', level: 'awesome',
      id: 'Logam transisi + Oksigen → senyawa ini hampir pasti berwarna! Logam transisi membentuk senyawa yang berwarna-warni karena elektron d yang dapat menyerap cahaya.',
      en: 'Transition metal + Oxygen → this compound is almost certainly colored! Transition metals form vivid compounds because d-electrons can absorb visible light.',
    });
  }

  // ── CURIOUS rules ─────────────────────────────────────────────────────────
  if (totalAtoms > 12) {
    results.push({
      icon: '🔬', level: 'curious',
      id: `${totalAtoms} atom total — molekul yang cukup besar. Kandidat untuk polimer, biomolekul, atau material dengan struktur kristal kompleks.`,
      en: `${totalAtoms} atoms total — quite a large molecule. Candidate for a polymer, biomolecule, or material with complex crystal structure.`,
    });
  }

  if (has('Fe') && has('Cu')) {
    results.push({
      icon: '⚡', level: 'curious',
      id: 'Fe + Cu — dalam metalurgi, keduanya tidak bercampur sempurna (immiscible alloy). Kombinasi ini menarik untuk lapisan anti-korosi atau studi difusi logam.',
      en: 'Fe + Cu — in metallurgy, these are mostly immiscible. This combination is interesting for anti-corrosion coatings or metal diffusion studies.',
    });
  }

  if (results.length === 0) {
    results.push({
      icon: '🤔', level: 'curious',
      id: 'Kombinasi ini belum punya pola yang kami kenali — tapi itu justru menarik! Ilmuwan sering menemukan senyawa baru yang tak terduga.',
      en: 'This combination doesn\'t match any known pattern — but that\'s what makes it interesting! Scientists often discover unexpected new compounds.',
    });
  }

  return results;
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function renderMoleculeBuilder(container: HTMLElement, opts?: MoleculeBuilderOptions): () => void {
  const isEN = getLang() === 'en';
  const demoMode = opts?.demoMode ?? false;
  const landingUrl = opts?.landingUrl ?? DEMO_LANDING_URL;
  const ALL_PALETTE = isEN ? ALL_PALETTE_EN : ALL_PALETTE_ID;
  const ALL_QUICK = isEN ? QUICK_EXAMPLES_EN : QUICK_EXAMPLES_ID;
  // In demo mode, only show H₂O and CO₂ quick examples
  const QUICK_EXAMPLES = demoMode
    ? ALL_QUICK.filter(ex => {
      const keys = Object.keys(ex.composition);
      return keys.every(k => DEMO_UNLOCKED_ATOMS.has(k));
    })
    : ALL_QUICK;

  // State
  let selection: Record<string, number> = {};
  let sceneRef: MoleculeScene | null = null;
  let activeChallenge: Challenge | null = null;
  let wrongAttempts = 0;     // hint unlock counter
  let challengeWon = false;

  // ── HTML shell ─────────────────────────────────────────────────────────
  container.innerHTML = `
    <div class="mb-page">

      <!-- TOP BAR -->
      <div class="mb-topbar">
        ${demoMode ? '<div></div>' : `<button class="mb-back" id="mb-back">← ${isEN ? 'Back' : 'Kembali'}</button>`}
        <div class="mb-topbar-center">
          <span class="mb-topbar-icon">⚗️</span>
          <span class="mb-topbar-title-text">${isEN ? 'Chemistry Lab' : 'Kimia Lab'}${demoMode ? ' <span style="font-size:11px;background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:2px 8px;border-radius:8px;margin-left:8px;color:#fff">DEMO</span>' : ''}</span>
        </div>
        <!-- Mode toggle -->
        <div class="mb-mode-toggle" id="mb-mode-toggle">
          <button class="mb-mode-btn mb-mode-btn--active" id="mb-mode-free" data-mode="free">
            🧪 ${isEN ? 'Free Build' : 'Mode Bebas'}
          </button>
          <button class="mb-mode-btn${demoMode ? ' mb-mode-btn--locked' : ''}" id="mb-mode-challenge" data-mode="challenge"${demoMode ? ' title="Upgrade to unlock"' : ''}>
            ${demoMode ? '🔒' : '🏆'} ${isEN ? 'Challenge' : 'Mode Tantangan'}
          </button>
        </div>
      </div>
      <!-- Demo upgrade overlay (initially hidden) -->
      ${demoMode ? `
      <div class="mb-demo-upgrade" id="mb-demo-upgrade" style="display:none;position:absolute;inset:0;z-index:100;background:rgba(0,0,0,0.85);display:none;align-items:center;justify-content:center;flex-direction:column;gap:16px;border-radius:16px;backdrop-filter:blur(8px);">
        <div style="font-size:48px;">🔒</div>
        <div style="font-size:18px;font-weight:700;color:#e2e8f0;">Fitur Premium</div>
        <div style="font-size:14px;color:#94a3b8;text-align:center;max-width:280px;">Upgrade ke Atomic untuk akses semua 18 atom, 30+ molekul, Mode Tantangan, dan eksperimen bebas!</div>
        <a id="mb-demo-cta" href="${landingUrl}" target="_top" style="display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;padding:12px 28px;border-radius:12px;font-weight:700;font-size:15px;text-decoration:none;transition:transform 0.2s;">Upgrade — Seharga 2 Gelas Kopi ☕</a>
        <button id="mb-demo-close" style="position:absolute;top:12px;right:12px;background:none;border:none;color:#64748b;font-size:24px;cursor:pointer;">✕</button>
      </div>` : ''}

      <!-- BODY -->
      <div class="mb-body" id="mb-body">

        <!-- ═══ FREE MODE ═══ -->
        <div id="mb-free-view">
          <aside class="mb-left">
            <div class="mb-section-label">${isEN ? 'Select Atoms' : 'Pilih Atom'}</div>
            <div class="mb-palette" id="mb-palette"></div>

            <div class="mb-section-label" style="margin-top:20px">${isEN ? 'Try These' : 'Coba Langsung'}</div>
            <div class="mb-quick" id="mb-quick">
              ${QUICK_EXAMPLES.map((ex, i) => `
                <button class="mb-quick-btn" data-qi="${i}">${ex.label}</button>
              `).join('')}
            </div>

            <div class="mb-section-label" style="margin-top:20px">
              ${isEN ? 'Your Mix' : 'Campuranmu'}
              <button class="mb-reset-btn" id="mb-reset">✕ Reset</button>
            </div>
            <div class="mb-mix" id="mb-mix">
              <div class="mb-mix-empty" id="mb-mix-empty">${isEN ? 'No atoms selected yet' : 'Belum ada atom dipilih'}</div>
            </div>
            <div class="mb-hint" id="mb-hint" hidden></div>
            <button class="mb-combine-btn" id="mb-combine" disabled>
              🔬 ${isEN ? 'Combine' : 'Gabungkan'}
            </button>
          </aside>

          <main class="mb-right">
            <div class="mb-empty-state" id="mb-empty-state">
              <div class="mb-empty-icon">⚗️</div>
              <div class="mb-empty-title">${isEN ? 'Select atoms to get started' : 'Pilih atom untuk memulai'}</div>
              <div class="mb-empty-sub">${isEN
      ? 'Add atoms from the left panel, then click "Combine" to see the result in 3D.'
      : 'Tambahkan atom dari panel kiri, lalu klik "Gabungkan" untuk melihat hasilnya dalam 3D.'
    }</div>
            </div>
            <div class="mb-result" id="mb-result" hidden>
              <div class="mb-canvas-wrap" id="mb-canvas-wrap">
                <canvas id="mb-canvas"></canvas>
                <div class="mb-canvas-hint">${isEN ? 'Drag to rotate · Scroll to zoom' : 'Drag untuk rotasi · Scroll untuk zoom'}</div>
              </div>
              <div class="mb-mol-info" id="mb-mol-info"></div>
            </div>
            <div class="mb-not-found" id="mb-not-found" hidden>
              <div class="mb-fe-header">
                <div class="mb-fe-badge">🧪 ${isEN ? 'Free Experiment' : 'Eksperimen Bebas'}</div>
                <div class="mb-fe-title">${isEN ? 'Unknown combination — atoms visualised freely' : 'Kombinasi belum dikenal — atom divisualisasikan bebas'}</div>
              </div>
              <div class="mb-fe-body">
                <div class="mb-fe-canvas-wrap" id="mb-fe-canvas-wrap">
                  <canvas id="mb-fe-canvas"></canvas>
                  <div class="mb-canvas-hint">${isEN ? 'Drag to rotate · Scroll to zoom' : 'Drag untuk rotasi · Scroll untuk zoom'}</div>
                </div>
                <div class="mb-fe-info">
                  <div class="mb-fe-atoms" id="mb-fe-atoms"></div>
                  <div class="mb-fe-deductions" id="mb-fe-deductions"></div>
                  <div class="mb-nf-sub" id="mb-nf-sub"></div>
                </div>
              </div>
            </div>

          </main>
        </div>

        <!-- ═══ CHALLENGE MODE ═══ -->
        <div id="mb-challenge-view" hidden>
          <!-- Challenge list -->
          <div id="mb-ch-list">
            <div class="mb-ch-list-header">
              <div class="mb-ch-list-title">${isEN ? '🏆 Choose a Challenge' : '🏆 Pilih Tantangan'}</div>
              <div class="mb-ch-list-sub">${isEN
      ? 'Each challenge gives you a real-world mystery molecule to build.'
      : 'Setiap tantangan memberimu satu molekul misterius dari dunia nyata untuk dirakit.'
    }</div>
              <div class="mb-ch-diff-legend">
                <span class="mb-ch-diff-chip" style="color:#4ade80;border-color:#4ade8044">🟢 ${isEN ? 'Easy' : 'Mudah'}</span>
                <span class="mb-ch-diff-chip" style="color:#fbbf24;border-color:#fbbf2444">🟡 ${isEN ? 'Medium' : 'Sedang'}</span>
                <span class="mb-ch-diff-chip" style="color:#f87171;border-color:#f8717144">🔴 ${isEN ? 'Hard' : 'Sulit'}</span>
              </div>
            </div>
            <div class="mb-ch-grid" id="mb-ch-grid"></div>
          </div>

          <!-- Active challenge -->
          <div id="mb-ch-active" hidden>
            <!-- Left: build area -->
            <aside class="mb-left mb-left--challenge">
              <button class="mb-ch-back-btn" id="mb-ch-back">← ${isEN ? 'All Challenges' : 'Semua Tantangan'}</button>

              <div class="mb-ch-brief" id="mb-ch-brief"></div>

              <div class="mb-section-label">${isEN ? 'Available Atoms' : 'Atom yang Tersedia'}</div>
              <div class="mb-palette" id="mb-ch-palette"></div>

              <div class="mb-section-label" style="margin-top:16px">
                ${isEN ? 'Your Assembly' : 'Rakitanmu'}
                <button class="mb-reset-btn" id="mb-ch-reset">✕ Reset</button>
              </div>
              <div class="mb-mix" id="mb-ch-mix">
                <div class="mb-mix-empty" id="mb-ch-mix-empty">${isEN ? 'No atoms added yet' : 'Belum ada atom'}</div>
              </div>

              <!-- Hints area -->
              <div class="mb-ch-hints" id="mb-ch-hints" hidden></div>

              <div class="mb-ch-actions">
                <button class="mb-combine-btn mb-combine-btn--challenge" id="mb-ch-submit" disabled>
                  ⚗️ ${isEN ? 'Submit' : 'Coba!'}
                </button>
                <button class="mb-hint-btn" id="mb-hint-btn">
                  💡 ${isEN ? 'Hint' : 'Petunjuk'}
                </button>
              </div>
            </aside>

            <!-- Right: result/feedback -->
            <main class="mb-right mb-right--challenge">
              <!-- Waiting state -->
              <div class="mb-ch-waiting" id="mb-ch-waiting">
                <div class="mb-ch-waiting-icon" id="mb-ch-waiting-icon">🧪</div>
                <div class="mb-ch-waiting-title" id="mb-ch-waiting-title">${isEN ? 'Build the molecule!' : 'Rakit molekulnya!'}</div>
                <div class="mb-ch-waiting-sub" id="mb-ch-waiting-sub">${isEN
      ? 'Pick atoms from the left and click Submit.'
      : 'Pilih atom dari kiri lalu klik Coba!'
    }</div>
              </div>

              <!-- Wrong state -->
              <div class="mb-ch-wrong" id="mb-ch-wrong" hidden>
                <div class="mb-ch-wrong-icon">❌</div>
                <div class="mb-ch-wrong-title">${isEN ? 'Not quite right…' : 'Belum tepat…'}</div>
                <div class="mb-ch-wrong-sub" id="mb-ch-wrong-sub"></div>
                <div class="mb-ch-wrong-hint">${isEN
      ? 'Click 💡 Hint to get a clue, or keep trying!'
      : 'Klik 💡 Petunjuk untuk bantuan, atau terus coba!'
    }</div>
              </div>

              <!-- Win state -->
              <div class="mb-ch-win" id="mb-ch-win" hidden>
                <div class="mb-ch-win-confetti" id="mb-ch-win-confetti"></div>
                <div class="mb-ch-win-badge">🎉</div>
                <div class="mb-ch-win-title">${isEN ? 'You got it!' : 'Berhasil!'}</div>
                <div class="mb-ch-win-formula" id="mb-ch-win-formula"></div>
                <div class="mb-ch-win-name" id="mb-ch-win-name"></div>
                <div class="mb-ch-win-canvas-wrap" id="mb-ch-win-canvas-wrap">
                  <canvas id="mb-ch-win-canvas"></canvas>
                  <div class="mb-canvas-hint">${isEN ? 'Drag to rotate · Scroll to zoom' : 'Drag untuk rotasi · Scroll untuk zoom'}</div>
                </div>
                <div class="mb-ch-win-funfact" id="mb-ch-win-funfact"></div>
                <div class="mb-ch-win-actions">
                  <button class="mb-ch-next-btn" id="mb-ch-next">${isEN ? '→ Next Challenge' : '→ Tantangan Berikutnya'}</button>
                  <button class="mb-ch-list-btn" id="mb-ch-list-btn">${isEN ? 'All Challenges' : 'Pilih Tantangan'}</button>
                </div>
              </div>
            </main>
          </div>
        </div>

      </div>
    </div>
  `;

  // ── Element references ──────────────────────────────────────────────────
  const freeView = container.querySelector('#mb-free-view')! as HTMLElement;
  const challengeView = container.querySelector('#mb-challenge-view')! as HTMLElement;
  const modeFreeBtn = container.querySelector('#mb-mode-free')! as HTMLButtonElement;
  const modeChalBtn = container.querySelector('#mb-mode-challenge')! as HTMLButtonElement;

  // Free mode els
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
  const feAtomsEl = container.querySelector('#mb-fe-atoms')! as HTMLElement;
  const feDeductionsEl = container.querySelector('#mb-fe-deductions')! as HTMLElement;
  const feCanvasWrap = container.querySelector('#mb-fe-canvas-wrap')! as HTMLElement;
  let freeExperimentScene: MoleculeScene | null = null;

  // Challenge mode els
  const chList = container.querySelector('#mb-ch-list')! as HTMLElement;
  const chGrid = container.querySelector('#mb-ch-grid')! as HTMLElement;
  const chActive = container.querySelector('#mb-ch-active')! as HTMLElement;
  const chPalette = container.querySelector('#mb-ch-palette')! as HTMLElement;
  const chMix = container.querySelector('#mb-ch-mix')! as HTMLElement;
  const chMixEmpty = container.querySelector('#mb-ch-mix-empty')! as HTMLElement;
  const chBrief = container.querySelector('#mb-ch-brief')! as HTMLElement;
  const chHints = container.querySelector('#mb-ch-hints')! as HTMLElement;
  const chSubmit = container.querySelector('#mb-ch-submit')! as HTMLButtonElement;
  const chHintBtn = container.querySelector('#mb-hint-btn')! as HTMLButtonElement;
  const chWaiting = container.querySelector('#mb-ch-waiting')! as HTMLElement;
  const chWaiting_icon = container.querySelector('#mb-ch-waiting-icon')! as HTMLElement;
  const chWaiting_title = container.querySelector('#mb-ch-waiting-title')! as HTMLElement;
  const chWaiting_sub = container.querySelector('#mb-ch-waiting-sub')! as HTMLElement;
  const chWrong = container.querySelector('#mb-ch-wrong')! as HTMLElement;
  const chWrongSub = container.querySelector('#mb-ch-wrong-sub')! as HTMLElement;
  const chWin = container.querySelector('#mb-ch-win')! as HTMLElement;
  const chWinFormula = container.querySelector('#mb-ch-win-formula')! as HTMLElement;
  const chWinName = container.querySelector('#mb-ch-win-name')! as HTMLElement;
  const chWinFunfact = container.querySelector('#mb-ch-win-funfact')! as HTMLElement;
  const chWinCanvasWrap = container.querySelector('#mb-ch-win-canvas-wrap')! as HTMLElement;
  let chWinScene: MoleculeScene | null = null;

  // ── Navigation ─────────────────────────────────────────────────────────
  const backBtn = container.querySelector('#mb-back');
  if (backBtn) backBtn.addEventListener('click', () => navigate('/'));

  // ── Demo mode: upgrade overlay logic ──────────────────────────────────
  const demoUpgrade = demoMode ? container.querySelector('#mb-demo-upgrade') as HTMLElement : null;
  const demoClose = demoMode ? container.querySelector('#mb-demo-close') : null;
  if (demoClose && demoUpgrade) {
    demoClose.addEventListener('click', () => { demoUpgrade.style.display = 'none'; });
  }
  function showDemoUpgrade() {
    if (demoUpgrade) demoUpgrade.style.display = 'flex';
  }

  // Mode toggle
  container.querySelector('#mb-mode-toggle')!.addEventListener('click', e => {
    const btn = (e.target as HTMLElement).closest('[data-mode]') as HTMLElement | null;
    if (!btn) return;
    if (demoMode && btn.dataset.mode === 'challenge') {
      showDemoUpgrade();
      return;
    }
    switchMode(btn.dataset.mode as 'free' | 'challenge');
  });

  function switchMode(m: 'free' | 'challenge') {
    modeFreeBtn.classList.toggle('mb-mode-btn--active', m === 'free');
    modeChalBtn.classList.toggle('mb-mode-btn--active', m === 'challenge');
    freeView.hidden = m !== 'free';
    challengeView.hidden = m !== 'challenge';
    if (m === 'challenge') buildChallengeList();
  }

  // ── FREE MODE ──────────────────────────────────────────────────────────

  // Build palette
  ALL_PALETTE.forEach(a => {
    const isLocked = demoMode && !DEMO_UNLOCKED_ATOMS.has(a.sym);
    const btn = document.createElement('button');
    btn.className = 'mb-atom-btn' + (isLocked ? ' mb-atom-btn--locked' : '');
    btn.dataset.sym = a.sym;
    btn.title = isLocked ? (isEN ? 'Upgrade to unlock' : 'Upgrade untuk membuka') : a.name;
    btn.style.setProperty('--atom-clr', isLocked ? '#374151' : a.color);
    btn.innerHTML = isLocked
      ? `<span class="mb-atom-sym" style="opacity:0.4">${a.sym}</span><span class="mb-atom-name" style="opacity:0.4">🔒</span>`
      : `<span class="mb-atom-sym">${a.sym}</span><span class="mb-atom-name">${a.name}</span>`;
    paletteEl.appendChild(btn);
  });

  paletteEl.addEventListener('click', e => {
    const btn = (e.target as HTMLElement).closest('[data-sym]') as HTMLElement | null;
    if (!btn) return;
    const sym = btn.dataset.sym!;
    if (demoMode && !DEMO_UNLOCKED_ATOMS.has(sym)) {
      showDemoUpgrade();
      return;
    }
    addAtomFree(sym);
  });

  quickEl.addEventListener('click', e => {
    const btn = (e.target as HTMLElement).closest('[data-qi]') as HTMLElement | null;
    if (!btn) return;
    selection = { ...QUICK_EXAMPLES[parseInt(btn.dataset.qi!)].composition };
    updateMixFree();
    // Auto-combine — no need to click the Combine button
    const mol = matchMolecule(selection);
    if (mol) showResult(mol);
  });

  resetBtn.addEventListener('click', () => { selection = {}; updateMixFree(); showEmpty(); });
  combineBtn.addEventListener('click', () => {
    const mol = matchMolecule(selection);
    mol ? showResult(mol) : showNotFound();
  });

  mixEl.addEventListener('click', e => {
    const btn = (e.target as HTMLElement).closest('[data-d]') as HTMLElement | null;
    if (!btn) return;
    const sym = btn.dataset.sym!;
    const delta = parseInt(btn.dataset.d!);
    const next = (selection[sym] || 0) + delta;
    if (next <= 0) delete selection[sym]; else selection[sym] = Math.min(next, 9);
    updateMixFree();
  });

  function addAtomFree(sym: string) {
    selection[sym] = (selection[sym] || 0) + 1;
    updateMixFree();
  }

  function updateMixFree() {
    const keys = Object.keys(selection);
    mixEmptyEl.style.display = keys.length ? 'none' : 'block';
    combineBtn.disabled = keys.length === 0;
    mixEl.querySelectorAll('.mb-chip').forEach(e => e.remove());
    keys.forEach(sym => {
      const pal = ALL_PALETTE.find(p => p.sym === sym);
      const color = pal?.color ?? '#aaa';
      const chip = document.createElement('div');
      chip.className = 'mb-chip';
      chip.innerHTML = `
        <span class="mb-chip-sym" style="color:${color}">${sym}</span>
        <span class="mb-chip-count">${selection[sym]}</span>
        <div class="mb-chip-btns">
          <button class="mb-chip-btn" data-sym="${sym}" data-d="-1">−</button>
          <button class="mb-chip-btn" data-sym="${sym}" data-d="+1">+</button>
        </div>`;
      mixEl.appendChild(chip);
    });
    const match = matchMolecule(selection);
    if (match && keys.length > 0) {
      hintEl.innerHTML = `
        <span class="mb-hint-icon">✅</span>
        <span class="mb-hint-text">
          ${isEN
          ? `Looks like <strong>${match.name}</strong>`
          : `Sepertinya <strong>${match.nameId}</strong>`
        }
          <code class="mb-hint-formula">${match.formula}</code>
          <span class="mb-hint-cta">${isEN ? '↓ Click Combine!' : '↓ Klik Gabungkan!'}</span>
        </span>
      `;
      hintEl.hidden = false;
    } else {
      hintEl.hidden = true;
    }
  }

  function showEmpty() {
    emptyState.hidden = false; resultEl.hidden = true; notFoundEl.hidden = true;
    destroyScene();
  }

  function showNotFound() {
    emptyState.hidden = true; resultEl.hidden = true; notFoundEl.hidden = false;
    const selKeys = Object.keys(selection);

    // ── Atom info cards (one per unique atom type) ──
    feAtomsEl.innerHTML = selKeys.map(sym => {
      const pal = ALL_PALETTE.find(p => p.sym === sym);
      const info = ATOM_INFO[sym];
      const cpk = CPK_COLORS_HEX[sym] ?? '#ff69b4';
      const count = selection[sym];
      return `
        <div class="mb-fe-atom-card">
          <div class="mb-fe-atom-dot" style="background:${cpk}"></div>
          <div class="mb-fe-atom-body">
            <div class="mb-fe-atom-row">
              <span class="mb-fe-atom-sym" style="color:${cpk}">${sym}</span>
              <span class="mb-fe-atom-name">${pal ? pal.name : sym}</span>
              <span class="mb-fe-atom-count">×${count}</span>
            </div>
            ${info ? `
            <div class="mb-fe-atom-meta">
              <span>No. ${info.no}</span>
              <span>·</span>
              <span>${info.mass} u</span>
              <span>·</span>
              <span>${isEN ? info.groupEn : info.groupId}</span>
            </div>` : ''}
          </div>
        </div>`;
    }).join('');

    // ── Chemistry deductions ──
    const deductions = deduceFreeExperiment(selection, isEN);
    const DEDUCTION_COLORS: Record<DeductionLevel, { bg: string; border: string; label: string; labelEn: string }> = {
      danger: { bg: 'rgba(239,68,68,0.10)', border: 'rgba(239,68,68,0.4)', label: 'BERBAHAYA', labelEn: 'DANGER' },
      warning: { bg: 'rgba(251,146,60,0.10)', border: 'rgba(251,146,60,0.4)', label: 'PERINGATAN', labelEn: 'WARNING' },
      awesome: { bg: 'rgba(168,85,247,0.10)', border: 'rgba(168,85,247,0.4)', label: 'LUAR BIASA', labelEn: 'AWESOME' },
      interesting: { bg: 'rgba(99,102,241,0.10)', border: 'rgba(99,102,241,0.4)', label: 'MENARIK', labelEn: 'INTERESTING' },
      curious: { bg: 'rgba(100,116,139,0.10)', border: 'rgba(100,116,139,0.4)', label: 'PENASARAN', labelEn: 'CURIOUS' },
    };
    feDeductionsEl.innerHTML = `
      <div class="mb-fe-ded-label">${isEN ? '🔭 Chemical Deductions' : '🔭 Dugaan Kimiawi'}</div>
      ${deductions.map((d, idx) => {
      const col = DEDUCTION_COLORS[d.level];
      return `<div class="mb-fe-ded-card" style="background:${col.bg};border-color:${col.border};animation-delay:${idx * 0.07}s">
          <div class="mb-fe-ded-top">
            <span class="mb-fe-ded-icon">${d.icon}</span>
            <span class="mb-fe-ded-badge" style="color:${col.border}">${isEN ? col.labelEn : col.label}</span>
          </div>
          <p class="mb-fe-ded-text">${isEN ? d.en : d.id}</p>
        </div>`;
    }).join('')}`;

    // ── Molecule suggestions ──
    const suggestions = molecules
      .filter(m => selKeys.some(k => Object.keys(m.composition).includes(k)))
      .slice(0, 3);
    if (suggestions.length) {
      nfSubEl.innerHTML = `
        <div class="mb-nf-suggestions">
          <div class="mb-nf-sug-label">${isEN ? '💡 Try these instead:' : '💡 Mungkin yang kamu cari:'}</div>
          ${suggestions.map(m => `
            <button class="mb-nf-sug-btn" data-nf-formula="${m.formula}">
              <code class="mb-nf-sug-formula">${m.formula}</code>
              <span class="mb-nf-sug-name">${isEN ? m.name : m.nameId}</span>
            </button>
          `).join('')}
        </div>`;
      notFoundEl.querySelectorAll('[data-nf-formula]').forEach(btn => {
        btn.addEventListener('click', () => {
          const formula = (btn as HTMLElement).dataset.nfFormula!;
          const mol = molecules.find(m => m.formula === formula);
          if (!mol) return;
          selection = { ...mol.composition };
          updateMixFree();
          showResult(mol);
        });
      });
    } else {
      nfSubEl.innerHTML = '';
    }

    // ── 3D freeform render ──
    destroyScene();
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const canvas = container.querySelector('#mb-fe-canvas') as HTMLCanvasElement;
      if (!canvas) return;
      const size = feCanvasWrap.clientWidth || feCanvasWrap.offsetWidth || 320;
      canvas.width = size; canvas.height = size;
      freeExperimentScene = new MoleculeScene(canvas);
      freeExperimentScene.buildFreeform(selection);
      freeExperimentScene.enableFreeformAnim(true);
      freeExperimentScene.start();
    }));
  }

  function showResult(mol: Molecule) {
    emptyState.hidden = true; notFoundEl.hidden = true; resultEl.hidden = false;
    molInfoEl.innerHTML = buildInfoHTML(mol);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      destroyScene();
      const canvas = container.querySelector('#mb-canvas') as HTMLCanvasElement;
      if (!canvas) return;
      const wrap = container.querySelector('#mb-canvas-wrap') as HTMLElement;
      const size = wrap.clientWidth || wrap.offsetWidth || 380;
      canvas.width = size; canvas.height = size;
      sceneRef = new MoleculeScene(canvas);
      sceneRef.build(mol);
      sceneRef.start();
    }));
  }
  function destroyScene() {
    if (sceneRef) { sceneRef.destroy(); sceneRef = null; }
    if (freeExperimentScene) { freeExperimentScene.destroy(); freeExperimentScene = null; }
  }

  function buildInfoHTML(mol: Molecule): string {
    const compositionStr = Object.entries(mol.composition)
      .map(([s, n]) => `<span class="mb-comp-atom">${s}<sub>${n > 1 ? n : ''}</sub></span>`).join('');
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
          <span class="mb-mol-meta-label">${isEN ? 'Shape' : 'Bentuk'}</span>
          <span>${mol.shape}</span>
        </div>
        <div class="mb-mol-meta-item">
          <span class="mb-mol-meta-label">${isEN ? 'Bond Type' : 'Ikatan'}</span>
          <span>${mol.bondType}</span>
        </div>
        <div class="mb-mol-meta-item">
          <span class="mb-mol-meta-label">${isEN ? 'Composition' : 'Komposisi'}</span>
          <span class="mb-comp">${compositionStr}</span>
        </div>
      </div>
      <div class="mb-mol-desc">${isEN ? (mol.descEn || mol.desc) : mol.desc}</div>
      <div class="mb-mol-funfact">
        <span class="mb-mol-funfact-icon">💡</span>
        <span>${isEN ? (mol.funFactEn || mol.funFact) : mol.funFact}</span>
      </div>
      <div class="mb-mol-legend">
        <div class="mb-mol-legend-title">${isEN ? 'Color Legend (CPK)' : 'Legenda Warna (CPK)'}</div>
        <div class="mb-mol-legend-items">
          ${[...new Set(mol.atoms.map(a => a.sym))].map(sym => {
      const c = (CPK_COLORS_HEX as Record<string, string>)[sym] ?? '#ff69b4';
      return `<span class="mb-legend-dot" style="background:${c}"></span>${sym}`;
    }).join(' ')}
        </div>
      </div>`;
  }

  // ── CHALLENGE MODE ─────────────────────────────────────────────────────
  let chSelection: Record<string, number> = {};
  let currentChalIdx = 0;

  function buildChallengeList() {
    chGrid.innerHTML = '';
    CHALLENGES.forEach((ch, idx) => {
      const diff = DIFF_LABEL[ch.difficulty];
      const card = document.createElement('div');
      card.className = `mb-ch-card mb-ch-card--${ch.difficulty}`;
      card.innerHTML = `
        <div class="mb-ch-card-top">
          <span class="mb-ch-card-emoji">${ch.emoji}</span>
          <span class="mb-ch-diff-badge" style="color:${diff.color};border-color:${diff.color}44">
            ${isEN ? diff.en : diff.id}
          </span>
        </div>
        <div class="mb-ch-card-context">${isEN ? ch.contextEn : ch.context}</div>
        <div class="mb-ch-card-cta">🔬 ${isEN ? 'Start Challenge' : 'Mulai Tantangan'}</div>
      `;
      card.addEventListener('click', () => startChallenge(idx));
      chGrid.appendChild(card);
    });
  }

  function startChallenge(idx: number) {
    currentChalIdx = idx;
    activeChallenge = CHALLENGES[idx];
    challengeWon = false;
    wrongAttempts = 0;
    chSelection = {};
    chList.hidden = true;
    chActive.hidden = false;

    // Reset states
    chWaiting.hidden = false;
    chWrong.hidden = true;
    chWin.hidden = true;
    chWaiting_icon.textContent = activeChallenge.emoji;
    chWaiting_title.textContent = isEN ? 'Build the molecule!' : 'Rakit molekulnya!';
    chWaiting_sub.textContent = isEN
      ? 'Pick atoms from the left and click Submit.'
      : 'Pilih atom dari kiri lalu klik Coba!';

    // Render brief
    const diff = DIFF_LABEL[activeChallenge.difficulty];
    chBrief.innerHTML = `
      <div class="mb-ch-brief-inner">
        <div class="mb-ch-brief-top">
          <span class="mb-ch-brief-emoji">${activeChallenge.emoji}</span>
          <span class="mb-ch-diff-badge mb-ch-diff-badge--lg" style="color:${diff.color};border-color:${diff.color}44">
            ${isEN ? diff.en : diff.id}
          </span>
        </div>
        <p class="mb-ch-brief-context">${isEN ? activeChallenge.contextEn : activeChallenge.context}</p>
        <div class="mb-ch-brief-q">❓ ${isEN ? 'What molecule is this?' : 'Molekul apa ini?'}</div>
      </div>
    `;

    // Build challenge palette (only available atoms)
    chPalette.innerHTML = '';
    activeChallenge.availableAtoms.forEach(sym => {
      const pal = ALL_PALETTE.find(p => p.sym === sym);
      if (!pal) return;
      const btn = document.createElement('button');
      btn.className = 'mb-atom-btn';
      btn.dataset.sym = sym;
      btn.title = pal.name;
      btn.style.setProperty('--atom-clr', pal.color);
      btn.innerHTML = `<span class="mb-atom-sym">${sym}</span><span class="mb-atom-name">${pal.name}</span>`;
      chPalette.appendChild(btn);
    });

    // Reset hints display
    chHints.hidden = true;
    chHints.innerHTML = '';

    updateChMix();
    destroyWinScene();
  }

  // Challenge palette click
  chPalette.addEventListener('click', e => {
    if (challengeWon) return;
    const btn = (e.target as HTMLElement).closest('[data-sym]') as HTMLElement | null;
    if (!btn) return;
    const sym = btn.dataset.sym!;
    chSelection[sym] = (chSelection[sym] || 0) + 1;
    updateChMix();
  });

  // Challenge mix +/- buttons
  chMix.addEventListener('click', e => {
    if (challengeWon) return;
    const btn = (e.target as HTMLElement).closest('[data-d]') as HTMLElement | null;
    if (!btn) return;
    const sym = btn.dataset.sym!;
    const delta = parseInt(btn.dataset.d!);
    const next = (chSelection[sym] || 0) + delta;
    if (next <= 0) delete chSelection[sym]; else chSelection[sym] = Math.min(next, 9);
    updateChMix();
  });

  // Challenge reset
  container.querySelector('#mb-ch-reset')!.addEventListener('click', () => {
    if (challengeWon) return;
    chSelection = {};
    updateChMix();
    chWrong.hidden = true;
    chWaiting.hidden = false;
  });

  // Challenge back
  container.querySelector('#mb-ch-back')!.addEventListener('click', () => {
    chList.hidden = false;
    chActive.hidden = true;
    destroyWinScene();
    activeChallenge = null;
  });

  // Submit
  chSubmit.addEventListener('click', handleSubmit);

  // Hint button
  chHintBtn.addEventListener('click', () => {
    if (!activeChallenge) return;
    const hints = isEN ? activeChallenge.hintsEn : activeChallenge.hints;
    const unlocked = Math.min(wrongAttempts, hints.length - 1);
    if (wrongAttempts === 0) wrongAttempts = 1; // force at least unlock 1 on click without submit
    showHints(hints, unlocked);
  });

  function updateChMix() {
    const keys = Object.keys(chSelection);
    chMixEmpty.style.display = keys.length ? 'none' : 'block';
    chSubmit.disabled = keys.length === 0 || challengeWon;
    chMix.querySelectorAll('.mb-chip').forEach(e => e.remove());
    keys.forEach(sym => {
      const pal = ALL_PALETTE.find(p => p.sym === sym);
      const color = pal?.color ?? '#aaa';
      const chip = document.createElement('div');
      chip.className = 'mb-chip';
      chip.innerHTML = `
        <span class="mb-chip-sym" style="color:${color}">${sym}</span>
        <span class="mb-chip-count">${chSelection[sym]}</span>
        <div class="mb-chip-btns">
          <button class="mb-chip-btn" data-sym="${sym}" data-d="-1">−</button>
          <button class="mb-chip-btn" data-sym="${sym}" data-d="+1">+</button>
        </div>`;
      chMix.appendChild(chip);
    });
  }

  function handleSubmit() {
    if (!activeChallenge || challengeWon) return;
    const mol = matchMolecule(chSelection);
    if (mol && mol.formula === activeChallenge.targetFormula) {
      // WIN
      challengeWon = true;
      chWaiting.hidden = true;
      chWrong.hidden = true;
      chWin.hidden = false;
      chWinFormula.textContent = mol.formula;
      chWinName.textContent = isEN ? mol.name : mol.nameId;
      chWinFunfact.innerHTML = `💡 ${isEN ? (mol.funFactEn || mol.funFact) : mol.funFact}`;
      playWinAnimation();
      // 3D
      requestAnimationFrame(() => requestAnimationFrame(() => {
        destroyWinScene();
        const canvas = chWinCanvasWrap.querySelector('#mb-ch-win-canvas') as HTMLCanvasElement;
        if (!canvas) return;
        const size = chWinCanvasWrap.clientWidth || 380;
        canvas.width = size; canvas.height = Math.round(size * 0.6);
        chWinScene = new MoleculeScene(canvas);
        chWinScene.build(mol);
        chWinScene.start();
      }));
    } else {
      // WRONG
      wrongAttempts++;
      chWaiting.hidden = true;
      chWrong.hidden = false;
      const selStr = Object.entries(chSelection).map(([s, n]) => `${s}${n > 1 ? n : ''}`).join('');
      chWrongSub.textContent = isEN
        ? `"${selStr}" is not the right molecule.`
        : `"${selStr}" bukan molekul yang tepat.`;
      // Auto-show hint based on attempts
      if (activeChallenge) {
        const hints = isEN ? activeChallenge.hintsEn : activeChallenge.hints;
        const unlocked = Math.min(wrongAttempts - 1, hints.length - 1);
        showHints(hints, unlocked);
      }
    }
  }

  function showHints(hints: string[], upToIdx: number) {
    chHints.hidden = false;
    chHints.innerHTML = `
      <div class="mb-ch-hints-title">💡 ${isEN ? 'Hints' : 'Petunjuk'}</div>
      ${hints.slice(0, upToIdx + 1).map((h, i) => `
        <div class="mb-ch-hint-item mb-ch-hint-item--${i}">
          <span class="mb-ch-hint-num">${i + 1}</span>
          <span>${h}</span>
        </div>
      `).join('')}
    `;
  }

  function playWinAnimation() {
    const confetti = container.querySelector('#mb-ch-win-confetti')! as HTMLElement;
    confetti.innerHTML = '';
    const emojis = ['🎉', '⚗️', '✨', '🔬', '💥', '🌟', '⭐', '🎊'];
    for (let i = 0; i < 20; i++) {
      const el = document.createElement('span');
      el.className = 'mb-confetti-piece';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.cssText = `
        left:${Math.random() * 100}%;
        animation-delay:${Math.random() * 0.8}s;
        animation-duration:${1.2 + Math.random() * 0.8}s;
        font-size:${16 + Math.random() * 16}px;
      `;
      confetti.appendChild(el);
    }
  }

  function destroyWinScene() {
    if (chWinScene) { chWinScene.destroy(); chWinScene = null; }
  }

  // Next challenge button
  container.querySelector('#mb-ch-next')!.addEventListener('click', () => {
    const nextIdx = (currentChalIdx + 1) % CHALLENGES.length;
    startChallenge(nextIdx);
  });

  // Back to list from win
  container.querySelector('#mb-ch-list-btn')!.addEventListener('click', () => {
    chList.hidden = false;
    chActive.hidden = true;
    destroyWinScene();
    activeChallenge = null;
  });

  // Init free palette
  updateMixFree();

  return () => {
    destroyScene();
    destroyWinScene();
  };
}

export { molecules };
