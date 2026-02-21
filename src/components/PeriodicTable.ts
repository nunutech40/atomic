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

    <!-- ═══ CARA MEMBACA TABEL PERIODIK ═══ -->
    <section class="how-to-section" id="how-to-section">
      <button class="how-to-toggle" id="how-to-toggle" aria-expanded="false">
        <span class="how-to-toggle-left">
          <span class="how-to-toggle-icon">🗺️</span>
          <span>Cara Membaca Tabel Periodik <span class="how-to-subtitle-pill">tanpa hafalan</span></span>
        </span>
        <span class="how-to-arrow" id="how-to-arrow">▼</span>
      </button>

      <div class="how-to-content" id="how-to-content">

        <!-- Intro -->
        <p class="how-to-intro">
          Tabel periodik bukan daftar hafalan — ini adalah <strong>peta logis</strong>.
          Setiap posisi elemen mengandung informasi. Sekali paham sistemnya, kamu bisa <em>membaca</em> sifat elemen hanya dari letaknya.
        </p>

        <!-- Step 1: Anatomy of one cell -->
        <div class="how-to-step">
          <div class="how-to-step-num">01</div>
          <div class="how-to-step-body">
            <div class="how-to-step-title">Baca satu kotak elemen</div>
            <p class="how-to-step-desc">Setiap kotak berisi 4 informasi utama:</p>
            <div class="how-to-cell-demo">
              <div class="hcd-cell">
                <span class="hcd-num">26</span>
                <span class="hcd-sym">Fe</span>
                <span class="hcd-name">Besi</span>
                <span class="hcd-mass">55.85</span>
              </div>
              <div class="hcd-labels">
                <div class="hcd-label hcd-label--num">← Nomor Atom<br><small>Jumlah proton, identitas unik elemen</small></div>
                <div class="hcd-label hcd-label--sym">← Simbol<br><small>1–2 huruf singkatan internasional</small></div>
                <div class="hcd-label hcd-label--name">← Nama<br><small>Nama resmi elemen</small></div>
                <div class="hcd-label hcd-label--mass">← Massa Atom<br><small>Rata-rata massa isotop (dalam satuan u)</small></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Periods (rows) -->
        <div class="how-to-step">
          <div class="how-to-step-num">02</div>
          <div class="how-to-step-body">
            <div class="how-to-step-title">BARIS = Periode → jumlah kulit elektron</div>
            <p class="how-to-step-desc">Tabel punya <strong>7 baris (periode)</strong>. Nomor periode = jumlah kulit elektron yang terisi elemen itu.</p>
            <div class="how-to-periods">
              <div class="how-to-period-row" style="--pc:#60a5fa"><span class="hp-num">Periode 1</span><span class="hp-bar" style="width:11%">H, He</span><span class="hp-note">2 elemen · 1 kulit</span></div>
              <div class="how-to-period-row" style="--pc:#34d399"><span class="hp-num">Periode 2</span><span class="hp-bar" style="width:44%">Li → Ne</span><span class="hp-note">8 elemen · 2 kulit</span></div>
              <div class="how-to-period-row" style="--pc:#fbbf24"><span class="hp-num">Periode 3</span><span class="hp-bar" style="width:44%">Na → Ar</span><span class="hp-note">8 elemen · 3 kulit</span></div>
              <div class="how-to-period-row" style="--pc:#f97316"><span class="hp-num">Periode 4</span><span class="hp-bar" style="width:100%">K → Kr</span><span class="hp-note">18 elemen · 4 kulit</span></div>
              <div class="how-to-period-row" style="--pc:#f43f5e"><span class="hp-num">P. 6 &amp; 7</span><span class="hp-bar" style="width:100%">Cs-Rn &amp; Fr-Og</span><span class="hp-note">32 elemen · 6-7 kulit<br>Lantanida &amp; Aktinida disisipkan di bawah</span></div>
            </div>
            <div class="how-to-tip">💡 <strong>Trik:</strong> Makin ke bawah → atom makin besar, karena tambah kulit. Na lebih besar dari Li yang lebih besar dari H.</div>
          </div>
        </div>

        <!-- Step 3: Groups (columns) -->
        <div class="how-to-step">
          <div class="how-to-step-num">03</div>
          <div class="how-to-step-body">
            <div class="how-to-step-title">KOLOM = Golongan → elektron valensi yang sama</div>
            <p class="how-to-step-desc">Tabel punya <strong>18 kolom (golongan)</strong>. Elemen satu kolom punya jumlah elektron valensi (terluar) yang sama → sifat kimia mirip!</p>
            <div class="how-to-groups">
              <div class="how-to-group-card" style="--gc:#ef4444">
                <div class="hgc-num">Gol. 1</div>
                <div class="hgc-name">Logam Alkali</div>
                <div class="hgc-elems">Li, Na, K, Rb, Cs, Fr</div>
                <div class="hgc-fact">1 elektron valensi → sangat reaktif, meledak di air</div>
              </div>
              <div class="how-to-group-card" style="--gc:#f97316">
                <div class="hgc-num">Gol. 2</div>
                <div class="hgc-name">Logam Alkali Tanah</div>
                <div class="hgc-elems">Mg, Ca, Sr, Ba</div>
                <div class="hgc-fact">2 elektron valensi → reaktif tapi lebih stabil dari gol. 1</div>
              </div>
              <div class="how-to-group-card" style="--gc:#22c55e">
                <div class="hgc-num">Gol. 17</div>
                <div class="hgc-name">Halogen</div>
                <div class="hgc-elems">F, Cl, Br, I, At</div>
                <div class="hgc-fact">7 elektron valensi → sangat reaktif, butuh 1 elektron lagi</div>
              </div>
              <div class="how-to-group-card" style="--gc:#818cf8">
                <div class="hgc-num">Gol. 18</div>
                <div class="hgc-name">Gas Mulia</div>
                <div class="hgc-elems">He, Ne, Ar, Kr, Xe</div>
                <div class="hgc-fact">8 elektron valensi → penuh, sama sekali tidak reaktif</div>
              </div>
            </div>
            <div class="how-to-tip">💡 <strong>Trik:</strong> Semua elemen di kolom yang sama bereaksi dengan cara serupa. NaCl (garam dapur) mirip dengan KCl, LiCl — karena Na, K, Li satu golongan.</div>
          </div>
        </div>

        <!-- Step 4: Trends -->
        <div class="how-to-step">
          <div class="how-to-step-num">04</div>
          <div class="how-to-step-body">
            <div class="how-to-step-title">Tren dalam tabel — tanpa hafal, cukup pahami arahnya</div>
            <div class="how-to-trends">
              <div class="how-to-trend-item">
                <div class="hti-arrow hti-arrow--right">→</div>
                <div class="hti-content">
                  <div class="hti-label">Ke kanan (periode sama)</div>
                  <div class="hti-desc">Nomor atom naik → lebih banyak proton → tarikan nukleus lebih kuat → <strong>ukuran atom mengecil</strong>, <strong>elektronegativitas naik</strong></div>
                </div>
              </div>
              <div class="how-to-trend-item">
                <div class="hti-arrow hti-arrow--down">↓</div>
                <div class="hti-content">
                  <div class="hti-label">Ke bawah (golongan sama)</div>
                  <div class="hti-desc">Ditambah kulit → elektron terluar lebih jauh dari inti → lebih mudah dilepas → <strong>ukuran atom membesar</strong>, <strong>reaktivitas logam naik</strong></div>
                </div>
              </div>
              <div class="how-to-trend-item">
                <div class="hti-arrow" style="background:var(--accent)20;color:var(--accent)">⚡</div>
                <div class="hti-content">
                  <div class="hti-label">Metalik vs Non-metalik</div>
                  <div class="hti-desc">Kiri-bawah = paling metalik (Cs, Fr). Kanan-atas = paling non-metalik (F, O, N). Ada garis diagonal "metalloid" di tengah.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 5: What about lanthanides? -->
        <div class="how-to-step">
          <div class="how-to-step-num">05</div>
          <div class="how-to-step-body">
            <div class="how-to-step-title">Kenapa ada 2 baris yang "mengambang" di bawah?</div>
            <p class="how-to-step-desc">
              Lantanida (La–Lu) dan Aktinida (Ac–Lr) seharusnya ada di periode 6 dan 7, tapi karena akan membuat tabel terlalu lebar (32 kolom!),
              mereka <em>dipindah ke bawah</em>. Konvensi visual untuk menghemat tempat — bukan karena mereka "spesial" secara kimia.
            </p>
            <div class="how-to-tip">💡 Lantanida dan aktinida sebenarnya masuk antara kolom 2 (Ba/Ra) dan kolom 3 (Hf/Rf). Tanda putus-putus di tabel menunjukkan titik sisipannya.</div>
          </div>
        </div>

        <div class="how-to-footer">
          <span>🎉 Sekarang kamu bisa membaca tabel periodik seperti peta — bukan seperti daftar hafalan.</span>
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
                <span class="name">${el.name}</span>
                <span class="mass">${typeof massVal === 'string' ? parseFloat(massVal).toFixed(2) : Number(massVal).toFixed(2)}</span>
            `;
      elMap[el.n] = cell;
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('aria-label', `${el.n} ${el.name} ${el.sym}`);

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
