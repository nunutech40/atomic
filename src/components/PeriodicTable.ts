import { elements } from '../data/elements';
import { categories } from '../data/categories';
import { navigate } from '../core/router';
import { t, getLang } from '../core/i18n';

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
  const isEN = getLang() === 'en';

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
          <div class="hero-tag-pill">⚛ ${isEN ? 'Did you know?' : 'Tahukah kamu?'}</div>

          <!-- Rotating wonder facts -->
          <div class="hero-fact">
            <span class="hero-fact-text" id="hero-fact-text">
              ${isEN ? 'The matter you hold is 99.9999999% empty space.' : 'Materi yang kamu pegang adalah 99.9999999% ruang kosong.'}
            </span>
          </div>

          <p class="home-subtitle" id="hero-fact-sub">
            ${isEN ? 'Atoms are invisible, untouchable one by one — yet they make up <em>everything</em>. Including you.' : 'Atom tidak terlihat, tidak bisa disentuh satu per satu — tapi mereka menyusun <em>segalanya</em>. Termasuk dirimu.'}
          </p>

          <div class="hero-stats-row">
            <span>⚛ <strong>118</strong> ${isEN ? 'Elements' : 'Elemen'}</span>
            <span>·</span>
            <span>🎬 <strong>3D</strong> ${isEN ? 'Visualizations' : 'Visualisasi'}</span>
            <span>·</span>
            <span>📚 <strong>16</strong> ${isEN ? 'Modules' : 'Modul'}</span>
          </div>

          <div class="hero-actions">
            <button class="hero-btn-primary" id="cta-learn">🌱 ${isEN ? 'Start from Zero' : 'Mulai dari Nol'}</button>
            <button class="hero-btn-secondary" id="cta-explore">🔬 ${isEN ? 'Explore Now ↓' : 'Langsung Eksplorasi ↓'}</button>
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
            <div class="hero-atom-label">${isEN ? 'Bohr Atom Model — Gold (Au)' : 'Model Atom Bohr — Emas (Au)'}</div>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══ PATH SECTION ═══ -->
    <section class="path-section">
      <div class="path-section-title">
        ${isEN ? 'New here? <span>Pick your path</span>' : 'Baru di sini? <span>Pilih jalurmu</span>'}
      </div>
      <div class="path-cards">

        <div class="path-card path-card--green" id="path-beginner">
          <div class="path-card-icon">🌱</div>
          <div class="path-card-head">${isEN ? 'Beginner' : 'Pemula'}</div>
          <div class="path-card-desc">${isEN ? 'New to chemistry, or starting from scratch' : 'Baru kenal kimia, atau mau mulai dari nol'}</div>
          <div class="path-flow">
            <span class="pf-step">📚 ${isEN ? 'Learn' : 'Belajar'}</span>
            <span class="pf-arrow">→</span>
            <span class="pf-step">🔬 ${isEN ? 'Table' : 'Tabel'}</span>
            <span class="pf-arrow">→</span>
            <span class="pf-step">⚗️ ${isEN ? 'Molecules' : 'Molekul'}</span>
          </div>
          <div class="path-card-cta">${isEN ? 'Start from module one →' : 'Mulai dari modul pertama →'}</div>
        </div>

        <div class="path-card path-card--blue" id="path-student">
          <div class="path-card-icon">📖</div>
          <div class="path-card-head">${isEN ? 'Student' : 'Pelajar / Mahasiswa'}</div>
          <div class="path-card-desc">${isEN ? 'Know the basics, want to explore deeper' : 'Sudah tahu dasar, ingin eksplorasi lebih dalam'}</div>
          <div class="path-flow">
            <span class="pf-step">🔬 ${isEN ? 'Table' : 'Tabel'}</span>
            <span class="pf-arrow">→</span>
            <span class="pf-step">⛛ ${isEN ? 'Details' : 'Detail'}</span>
            <span class="pf-arrow">→</span>
            <span class="pf-step">⚗️ ${isEN ? 'Molecules' : 'Molekul'}</span>
          </div>
          <div class="path-card-cta">${isEN ? 'Explore the periodic table →' : 'Jelajahi tabel periodik →'}</div>
        </div>

        <div class="path-card path-card--amber" id="path-curious">
          <div class="path-card-icon">🚀</div>
          <div class="path-card-head">${isEN ? 'Just Curious' : 'Penasaran'}</div>
          <div class="path-card-desc">${isEN ? 'Want to explore freely in any order' : 'Mau eksplor bebas tanpa urutan tertentu'}</div>
          <div class="path-flow">
            <span class="pf-step" style="font-style:italic;color:var(--text-3)">${isEN ? 'Go anywhere' : 'Bebas ke mana saja'}</span>
          </div>
          <div class="path-card-cta">${isEN ? 'Scroll to table ↓' : 'Scroll ke tabel ↓'}</div>
        </div>

      </div>
    </section>

    <!-- ═══ PREREQ ACCORDION ═══ -->
    <section class="prereq-box" id="prereq-box">
      <button class="prereq-toggle" id="prereq-toggle" aria-expanded="false">
        <span>💡 ${isEN ? 'Lost in the periodic table? Check prerequisites first' : 'Nyasar di tabel periodik? Cek prasyarat dulu'}</span>
        <span class="prereq-arrow" id="prereq-arrow">▼</span>
      </button>
      <div class="prereq-content" id="prereq-content">
        <p class="prereq-intro">
          ${isEN ? 'To comfortably explore the periodic table, you need to understand these concepts first:' : 'Untuk nyaman jelajahi tabel periodik, kamu perlu paham konsep-konsep ini dulu:'}
        </p>
        <div class="prereq-list">
          <div class="prereq-item"><span class="prereq-dot"></span>${isEN ? 'What is an atom — the smallest particle that makes up matter' : 'Apa itu atom — partikel terkecil penyusun materi'}</div>
          <div class="prereq-item"><span class="prereq-dot"></span>${isEN ? 'Protons, neutrons, electrons — their roles and differences' : 'Proton, neutron, elektron — peran dan perbedaannya'}</div>
          <div class="prereq-item"><span class="prereq-dot"></span>${isEN ? 'Electron shells — why electrons occupy specific "energy levels"' : 'Kulit elektron — mengapa elektron ada di "lapisan" tertentu'}</div>
          <div class="prereq-item"><span class="prereq-dot"></span>${isEN ? 'Atomic number — why every element has a unique number' : 'Nomor atom — kenapa tiap elemen punya nomor unik'}</div>
          <div class="prereq-item"><span class="prereq-dot"></span>${isEN ? 'Electron configuration — how to read 2, 8, 18, 32...' : 'Konfigurasi elektron — cara membaca 2, 8, 18, 32...'}</div>
        </div>
        <div class="prereq-footer">
          <span>${isEN ? "Don't understand all of it yet?" : 'Belum paham semuanya?'}</span>
          <button class="prereq-cta-btn" id="prereq-goto-learn">${isEN ? 'Start from module one →' : 'Mulai dari modul pertama →'}</button>
        </div>
      </div>
    </section>

    <!-- ═══ HOW TO READ THE PERIODIC TABLE ═══ -->
    <section class="how-to-section" id="how-to-section">
      <button class="how-to-toggle" id="how-to-toggle" aria-expanded="false">
        <span class="how-to-toggle-left">
          <span class="how-to-toggle-icon">🗺️</span>
          <span>${isEN ? 'How to Read the Periodic Table' : 'Cara Membaca Tabel Periodik'} <span class="how-to-subtitle-pill">${isEN ? 'no memorization needed' : 'tanpa hafalan'}</span></span>
        </span>
        <span class="how-to-arrow" id="how-to-arrow">▼</span>
      </button>

      <div class="how-to-content" id="how-to-content">

        <p class="how-to-intro">
          ${isEN
      ? 'The periodic table is not a list to memorize — it is a <strong>logical map</strong>. Every position encodes information. Once you understand the system, you can <em>read</em> an element\'s properties from its location alone.'
      : 'Tabel periodik bukan daftar hafalan — ini adalah <strong>peta logis</strong>. Setiap posisi elemen mengandung informasi. Sekali paham sistemnya, kamu bisa <em>membaca</em> sifat elemen hanya dari letaknya.'}
        </p>

        <div class="how-to-step">
          <div class="how-to-step-num">01</div>
          <div class="how-to-step-body">
            <div class="how-to-step-title">${isEN ? 'Reading a single element cell' : 'Baca satu kotak elemen'}</div>
            <p class="how-to-step-desc">${isEN ? 'Each cell contains 4 key pieces of information:' : 'Setiap kotak berisi 4 informasi utama:'}</p>
            <div class="how-to-cell-demo">
              <div class="hcd-cell">
                <span class="hcd-num">26</span>
                <span class="hcd-sym">Fe</span>
                <span class="hcd-name">${isEN ? 'Iron' : 'Besi'}</span>
                <span class="hcd-mass">55.85</span>
              </div>
              <div class="hcd-labels">
                <div class="hcd-label hcd-label--num">← ${isEN ? 'Atomic Number<br><small>Proton count — the unique identity of the element</small>' : 'Nomor Atom<br><small>Jumlah proton, identitas unik elemen</small>'}</div>
                <div class="hcd-label hcd-label--sym">← ${isEN ? 'Symbol<br><small>1–2 letter international abbreviation</small>' : 'Simbol<br><small>1–2 huruf singkatan internasional</small>'}</div>
                <div class="hcd-label hcd-label--name">← ${isEN ? 'Name<br><small>Official IUPAC element name</small>' : 'Nama<br><small>Nama resmi elemen</small>'}</div>
                <div class="hcd-label hcd-label--mass">← ${isEN ? 'Atomic Mass<br><small>Weighted average of isotope masses (in u)</small>' : 'Massa Atom<br><small>Rata-rata massa isotop (dalam satuan u)</small>'}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="how-to-step">
          <div class="how-to-step-num">02</div>
          <div class="how-to-step-body">
            <div class="how-to-step-title">${isEN ? 'ROWS = Periods → number of electron shells' : 'BARIS = Periode → jumlah kulit elektron'}</div>
            <p class="how-to-step-desc">${isEN ? 'The table has <strong>7 rows (periods)</strong>. The period number = the number of filled electron shells.' : 'Tabel punya <strong>7 baris (periode)</strong>. Nomor periode = jumlah kulit elektron yang terisi elemen itu.'}</p>
            <div class="how-to-periods">
              <div class="how-to-period-row" style="--pc:#60a5fa"><span class="hp-num">${isEN ? 'Period 1' : 'Periode 1'}</span><span class="hp-bar" style="width:11%">H, He</span><span class="hp-note">${isEN ? '2 elements · 1 shell' : '2 elemen · 1 kulit'}</span></div>
              <div class="how-to-period-row" style="--pc:#34d399"><span class="hp-num">${isEN ? 'Period 2' : 'Periode 2'}</span><span class="hp-bar" style="width:44%">Li → Ne</span><span class="hp-note">${isEN ? '8 elements · 2 shells' : '8 elemen · 2 kulit'}</span></div>
              <div class="how-to-period-row" style="--pc:#fbbf24"><span class="hp-num">${isEN ? 'Period 3' : 'Periode 3'}</span><span class="hp-bar" style="width:44%">Na → Ar</span><span class="hp-note">${isEN ? '8 elements · 3 shells' : '8 elemen · 3 kulit'}</span></div>
              <div class="how-to-period-row" style="--pc:#f97316"><span class="hp-num">${isEN ? 'Period 4' : 'Periode 4'}</span><span class="hp-bar" style="width:100%">K → Kr</span><span class="hp-note">${isEN ? '18 elements · 4 shells' : '18 elemen · 4 kulit'}</span></div>
              <div class="how-to-period-row" style="--pc:#f43f5e"><span class="hp-num">${isEN ? 'P. 6 &amp; 7' : 'P. 6 &amp; 7'}</span><span class="hp-bar" style="width:100%">Cs-Rn &amp; Fr-Og</span><span class="hp-note">${isEN ? '32 elements · 6-7 shells<br>Lanthanides &amp; Actinides placed below' : '32 elemen · 6-7 kulit<br>Lantanida &amp; Aktinida disisipkan di bawah'}</span></div>
            </div>
            <div class="how-to-tip">💡 <strong>${isEN ? 'Tip:' : 'Trik:'}</strong> ${isEN ? 'Going down → atoms get larger, because each period adds a shell. Na is bigger than Li, which is bigger than H.' : 'Makin ke bawah → atom makin besar, karena tambah kulit. Na lebih besar dari Li yang lebih besar dari H.'}</div>
          </div>
        </div>

        <div class="how-to-step">
          <div class="how-to-step-num">03</div>
          <div class="how-to-step-body">
            <div class="how-to-step-title">${isEN ? 'COLUMNS = Groups → same number of valence electrons' : 'KOLOM = Golongan → elektron valensi yang sama'}</div>
            <p class="how-to-step-desc">${isEN ? 'The table has <strong>18 columns (groups)</strong>. Elements in the same column share the same number of valence (outermost) electrons → similar chemical behaviour!' : 'Tabel punya <strong>18 kolom (golongan)</strong>. Elemen satu kolom punya jumlah elektron valensi (terluar) yang sama → sifat kimia mirip!'}</p>
            <div class="how-to-groups">
              <div class="how-to-group-card" style="--gc:#ef4444">
                <div class="hgc-num">${isEN ? 'Group 1' : 'Gol. 1'}</div>
                <div class="hgc-name">${isEN ? 'Alkali Metals' : 'Logam Alkali'}</div>
                <div class="hgc-elems">Li, Na, K, Rb, Cs, Fr</div>
                <div class="hgc-fact">${isEN ? '1 valence electron → highly reactive, explode in water' : '1 elektron valensi → sangat reaktif, meledak di air'}</div>
              </div>
              <div class="how-to-group-card" style="--gc:#f97316">
                <div class="hgc-num">${isEN ? 'Group 2' : 'Gol. 2'}</div>
                <div class="hgc-name">${isEN ? 'Alkaline Earth Metals' : 'Logam Alkali Tanah'}</div>
                <div class="hgc-elems">Mg, Ca, Sr, Ba</div>
                <div class="hgc-fact">${isEN ? '2 valence electrons → reactive but more stable than group 1' : '2 elektron valensi → reaktif tapi lebih stabil dari gol. 1'}</div>
              </div>
              <div class="how-to-group-card" style="--gc:#22c55e">
                <div class="hgc-num">${isEN ? 'Group 17' : 'Gol. 17'}</div>
                <div class="hgc-name">${isEN ? 'Halogens' : 'Halogen'}</div>
                <div class="hgc-elems">F, Cl, Br, I, At</div>
                <div class="hgc-fact">${isEN ? '7 valence electrons → highly reactive, need just 1 more' : '7 elektron valensi → sangat reaktif, butuh 1 elektron lagi'}</div>
              </div>
              <div class="how-to-group-card" style="--gc:#818cf8">
                <div class="hgc-num">${isEN ? 'Group 18' : 'Gol. 18'}</div>
                <div class="hgc-name">${isEN ? 'Noble Gases' : 'Gas Mulia'}</div>
                <div class="hgc-elems">He, Ne, Ar, Kr, Xe</div>
                <div class="hgc-fact">${isEN ? '8 valence electrons → full shell, chemically inert' : '8 elektron valensi → penuh, sama sekali tidak reaktif'}</div>
              </div>
            </div>
            <div class="how-to-tip">💡 <strong>${isEN ? 'Tip:' : 'Trik:'}</strong> ${isEN ? 'All elements in the same column react similarly. NaCl (table salt) behaves like KCl and LiCl — because Na, K, and Li are in the same group.' : 'Semua elemen di kolom yang sama bereaksi dengan cara serupa. NaCl (garam dapur) mirip dengan KCl, LiCl — karena Na, K, Li satu golongan.'}</div>
          </div>
        </div>

        <div class="how-to-step">
          <div class="how-to-step-num">04</div>
          <div class="how-to-step-body">
            <div class="how-to-step-title">${isEN ? 'Periodic trends — understand direction, not memorization' : 'Tren dalam tabel — tanpa hafal, cukup pahami arahnya'}</div>
            <div class="how-to-trends">
              <div class="how-to-trend-item">
                <div class="hti-arrow hti-arrow--right">→</div>
                <div class="hti-content">
                  <div class="hti-label">${isEN ? 'Going right (same period)' : 'Ke kanan (periode sama)'}</div>
                  <div class="hti-desc">${isEN ? 'Atomic number increases → more protons → stronger nuclear pull → <strong>atomic radius decreases</strong>, <strong>electronegativity increases</strong>' : 'Nomor atom naik → lebih banyak proton → tarikan nukleus lebih kuat → <strong>ukuran atom mengecil</strong>, <strong>elektronegativitas naik</strong>'}</div>
                </div>
              </div>
              <div class="how-to-trend-item">
                <div class="hti-arrow hti-arrow--down">↓</div>
                <div class="hti-content">
                  <div class="hti-label">${isEN ? 'Going down (same group)' : 'Ke bawah (golongan sama)'}</div>
                  <div class="hti-desc">${isEN ? 'More shells added → outer electrons farther from nucleus → easier to remove → <strong>atomic radius increases</strong>, <strong>metallic reactivity increases</strong>' : 'Ditambah kulit → elektron terluar lebih jauh dari inti → lebih mudah dilepas → <strong>ukuran atom membesar</strong>, <strong>reaktivitas logam naik</strong>'}</div>
                </div>
              </div>
              <div class="how-to-trend-item">
                <div class="hti-arrow" style="background:var(--accent)20;color:var(--accent)">⚡</div>
                <div class="hti-content">
                  <div class="hti-label">${isEN ? 'Metallic vs Non-metallic' : 'Metalik vs Non-metalik'}</div>
                  <div class="hti-desc">${isEN ? 'Bottom-left = most metallic (Cs, Fr). Top-right = most non-metallic (F, O, N). A diagonal "metalloid" boundary runs in between.' : 'Kiri-bawah = paling metalik (Cs, Fr). Kanan-atas = paling non-metalik (F, O, N). Ada garis diagonal "metalloid" di tengah.'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="how-to-step">
          <div class="how-to-step-num">05</div>
          <div class="how-to-step-body">
            <div class="how-to-step-title">${isEN ? 'Why are there 2 "floating" rows at the bottom?' : 'Kenapa ada 2 baris yang "mengambang" di bawah?'}</div>
            <p class="how-to-step-desc">
              ${isEN
      ? 'Lanthanides (La–Lu) and Actinides (Ac–Lr) technically belong in periods 6 and 7, but including them inline would make the table 32 columns wide. They are placed below as a display convention — not because they are chemically special.'
      : 'Lantanida (La–Lu) dan Aktinida (Ac–Lr) seharusnya ada di periode 6 dan 7, tapi karena akan membuat tabel terlalu lebar (32 kolom!), mereka <em>dipindah ke bawah</em>. Konvensi visual untuk menghemat tempat — bukan karena mereka "spesial" secara kimia.'}
            </p>
            <div class="how-to-tip">💡 ${isEN ? 'Lanthanides and actinides actually slot in between column 2 (Ba/Ra) and column 3 (Hf/Rf). The dashed marker in the table shows exactly where they belong.' : 'Lantanida dan aktinida sebenarnya masuk antara kolom 2 (Ba/Ra) dan kolom 3 (Hf/Rf). Tanda putus-putus di tabel menunjukkan titik sisipannya.'}</div>
          </div>
        </div>

        <div class="how-to-footer">
          <span>🎉 ${isEN ? 'Now you can read the periodic table like a map — not memorize it like a list.' : 'Sekarang kamu bisa membaca tabel periodik seperti peta — bukan seperti daftar hafalan.'}</span>
        </div>
      </div>
    </section>

    <!-- ═══ TABLE SECTION HEADER ═══ -->
    <div class="home-section-title">
      <span>🔬 ${isEN ? 'Periodic Table' : 'Tabel Periodik'}</span>
      <span class="home-section-count">${isEN ? '118 elements · click for details' : '118 elemen · klik untuk detail'}</span>
    </div>
    `;


  container.appendChild(hub);

  // ── Rotating wonder facts ─────────────────────────────────────────────
  const wonderFactsID: Array<{ fact: string; sub: string }> = [
    { fact: 'Materi yang kamu pegang adalah 99.9999999% ruang kosong.', sub: 'Atom tidak terlihat, tidak bisa disentuh satu per satu — tapi mereka menyusun segalanya. Termasuk dirimu.' },
    { fact: 'Sebagian besar atom di tubuhmu pernah menjadi bagian dari bintang.', sub: 'Kita semua adalah debu bintang — secara harfiah. Karbon, nitrogen, oksigen di tubuhmu terbentuk di inti bintang yang meledak.' },
    { fact: 'Emas di jarimu lahir dari tabrakan dua bintang neutron.', sub: 'Bumi tidak bisa membuat emas sendiri. Semua emas di Bumi berasal dari luar angkasa, miliaran tahun lalu.' },
    { fact: 'Jika atom diperbesar sebesar stadion, nukleusnya hanya sekecil kelereng.', sub: 'Betapa kosongnya materi. Meja kayu yang keras itu sebenarnya sebagian besar adalah "tidak ada".' },
    { fact: '7.000.000.000.000.000.000.000.000.000 atom menyusun tubuh manusia.', sub: '7 oktilion atom. Masing-masing bergerak, berinteraksi, membentuk sel, organ, pikiran — dan dirimu.' },
    { fact: 'Kamu berbagi atom dengan Caesar, dinosaurus, dan bintang yang sudah mati.', sub: 'Atom tidak pernah musnah. Mereka terus berpindah — dari bintang, ke bebatuan, ke makhluk hidup, ke kamu.' },
  ];
  const wonderFactsEN: Array<{ fact: string; sub: string }> = [
    { fact: 'The matter you hold is 99.9999999% empty space.', sub: 'Atoms are invisible, untouchable one by one — yet they compose everything around you. Including you.' },
    { fact: 'Most atoms in your body were once forged inside a star.', sub: 'We are literally made of star stuff. Carbon, nitrogen, and oxygen in your body were fused in the cores of dying stars.' },
    { fact: 'The gold on your finger was born from a neutron star collision.', sub: 'Earth cannot forge gold on its own. Every gold atom on Earth fell from space billions of years ago.' },
    { fact: 'Scale an atom to a stadium — its nucleus is a marble at the center.', sub: 'Matter is mostly nothing. That solid wooden table is almost entirely empty space.' },
    { fact: '7,000,000,000,000,000,000,000,000,000 atoms build a human body.', sub: '7 octillion atoms. Each one moving, interacting, forming cells, organs, thoughts — and you.' },
    { fact: 'You share atoms with Caesar, dinosaurs, and long-dead stars.', sub: 'Atoms never disappear. They keep moving — from stars, to rocks, to living things, to you.' },
  ];
  const wonderFacts = isEN ? wonderFactsEN : wonderFactsID;
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

  // ── How-to accordion ─────────────────────────────────────────────────
  const howToToggle = hub.querySelector('#how-to-toggle') as HTMLButtonElement;
  const howToContent = hub.querySelector('#how-to-content') as HTMLElement;
  const howToArrow = hub.querySelector('#how-to-arrow') as HTMLElement;
  let howToOpen = false;
  howToContent.style.maxHeight = '0';
  howToContent.style.overflow = 'hidden';
  howToContent.style.transition = 'max-height 0.5s ease';

  howToToggle.addEventListener('click', () => {
    howToOpen = !howToOpen;
    howToContent.style.maxHeight = howToOpen ? howToContent.scrollHeight + 'px' : '0';
    howToArrow.style.transform = howToOpen ? 'rotate(180deg)' : '';
    howToToggle.setAttribute('aria-expanded', String(howToOpen));
  });

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
                <span class="name">${isEN ? el.name : (el.nameId || el.name)}</span>
                <span class="mass">${typeof massVal === 'string' ? parseFloat(massVal).toFixed(2) : Number(massVal).toFixed(2)}</span>
            `;
      elMap[el.n] = cell;
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('aria-label', `${el.n} ${el.name} ${el.sym}`);

      cell.addEventListener('mouseenter', (e) => {
        const m = e as MouseEvent;
        tooltip.querySelector('.t-sym')!.textContent = el.sym;
        (tooltip.querySelector('.t-sym') as HTMLElement).style.color = color;
        tooltip.querySelector('.t-name')!.textContent = isEN ? el.name : (el.nameId || el.name);
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

  // ── Keyboard navigation ───────────────────────────────────────────────
  // Build reverse map: atomicNum → [row, col] (0-indexed)
  const posMap: Record<number, [number, number]> = {};
  Object.entries(GRID_POS).forEach(([n, [r, c]]) => {
    posMap[Number(n)] = [r - 1, c - 1];
  });

  table.addEventListener('keydown', (e) => {
    const focused = document.activeElement as HTMLElement;
    const nStr = focused?.dataset?.n;
    if (!nStr) return;

    const currentN = Number(nStr);
    const [row, col] = posMap[currentN] ?? [-1, -1];
    if (row < 0) return;

    let dr = 0, dc = 0;
    if (e.key === 'ArrowUp') { dr = -1; }
    else if (e.key === 'ArrowDown') { dr = 1; }
    else if (e.key === 'ArrowLeft') { dc = -1; }
    else if (e.key === 'ArrowRight') { dc = 1; }
    else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/element/${currentN}`);
      return;
    } else return;

    e.preventDefault();

    // Walk in direction until we find a filled cell (skip gaps)
    let nr = row + dr, nc = col + dc;
    while (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
      const found = Object.entries(posMap).find(([, [r, c]]) => r === nr && c === nc);
      if (found) {
        const targetN = Number(found[0]);
        const targetCell = elMap[targetN];
        if (targetCell) {
          targetCell.focus();
          targetCell.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
        return;
      }
      nr += dr;
      nc += dc;
    }
  });

  container.appendChild(wrapper);

  const legend = document.createElement('div');
  legend.className = 'legend';
  Object.entries(categories).forEach(([id, cat]) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.style.setProperty('--item-color', cat.color);
    item.style.setProperty('--item-bg', cat.bgColor);
    item.innerHTML = `<span class="legend-dot" style="background:${cat.color}"></span>${isEN ? cat.nameEn : cat.nameId}`;
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
