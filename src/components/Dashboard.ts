import * as THREE from 'three';
import { navigate } from '../core/router';
import { elements } from '../data/elements';
import { categories } from '../data/categories';

export function renderDashboard(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="dash-root">

      <!-- ═══════════════════════════════════════════════════
           CHAPTER 0 — HERO
      ═══════════════════════════════════════════════════ -->
      <section class="dash-hero" id="dash-hero">
        <canvas id="hero-canvas"></canvas>
        <div class="dash-hero-content">
          <div class="dash-hero-label">⚛ satu atom karbon</div>
          <h1 class="dash-hero-title">Segalanya<br>tersusun dari ini.</h1>
          <p class="dash-hero-sub">
            Tubuhmu mengandung <span class="dash-hero-num">7.000.000.000.000.000.000.000.000.000</span> atom.<br>
            Setiap satu pernah menjadi bagian dari bintang.
          </p>
          <button class="dash-scroll-hint" id="dash-scroll-btn">
            Scroll untuk menjelajahi ↓
          </button>
        </div>
        <div class="dash-hero-gradient"></div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           CHAPTER 1 — SCALE
      ═══════════════════════════════════════════════════ -->
      <section class="dash-section dash-scale" id="sec-scale">
        <div class="dash-section-inner">
          <div class="dash-chapter-tag reveal-up">Chapter 1</div>
          <h2 class="dash-section-title reveal-up">Sekecil apa, sebenarnya?</h2>
          <p class="dash-section-sub reveal-up">
            Geser slider untuk memahami skala yang tidak bisa dibayangkan akal biasa.
          </p>

          <div class="scale-box reveal-up">
            <div class="scale-track" id="scale-track">
              <div class="scale-object" id="scale-obj"></div>
            </div>
            <input type="range" id="scale-slider" class="scale-slider" min="0" max="5" step="1" value="0" />
            <div class="scale-labels" id="scale-labels"></div>
            <div class="scale-info" id="scale-info"></div>
          </div>

          <div class="scale-fact reveal-up">
            <span class="scale-fact-icon">💡</span>
            <p>Jika sebuah atom sebesar lapangan bola, maka <strong>nukleus</strong>-nya sekecil <strong>butir debu di tengah lapangan</strong> itu.</p>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           CHAPTER 2 — ANATOMY
      ═══════════════════════════════════════════════════ -->
      <section class="dash-section dash-anatomy" id="sec-anatomy">
        <div class="dash-section-inner">
          <div class="dash-chapter-tag reveal-up">Chapter 2</div>
          <h2 class="dash-section-title reveal-up">Apa yang ada di dalamnya?</h2>
          <p class="dash-section-sub reveal-up">
            Klik setiap partikel untuk belajar lebih.
          </p>

          <div class="anatomy-wrap reveal-up">
            <div class="anatomy-diagram" id="anatomy-diagram">
              <div class="anatomy-nucleus-wrap">
                <div class="anatomy-nucleus" id="anat-nucleus">
                  <div class="anat-particle anat-proton" data-tip="proton">p⁺</div>
                  <div class="anat-particle anat-neutron" data-tip="neutron">n</div>
                  <div class="anat-particle anat-proton" data-tip="proton">p⁺</div>
                  <div class="anat-particle anat-neutron" data-tip="neutron">n</div>
                </div>
                <div class="anatomy-orbit anatomy-orbit-1">
                  <div class="anat-electron" data-tip="electron">e⁻</div>
                </div>
                <div class="anatomy-orbit anatomy-orbit-2">
                  <div class="anat-electron" style="animation-delay:-1.2s" data-tip="electron">e⁻</div>
                </div>
              </div>
            </div>

            <div class="anatomy-info-panel">
              <div class="anatomy-card active" id="anat-card-default">
                <div class="anatomy-card-icon">⚛</div>
                <div class="anatomy-card-title">Klik partikel</div>
                <div class="anatomy-card-body">Pilih proton, neutron, atau elektron untuk melihat detailnya.</div>
              </div>
              <div class="anatomy-card" id="anat-card-proton">
                <div class="anatomy-card-icon" style="color:#ff6b6b">p⁺</div>
                <div class="anatomy-card-title">Proton</div>
                <div class="anatomy-card-body">
                  Bermuatan <strong>positif (+1)</strong>. Berada di inti atom (nukleus). 
                  Jumlah proton = <strong>nomor atom</strong> = identitas elemen.
                  <br><br>
                  <em>1 proton = Hidrogen. 6 proton = Karbon. 79 proton = Emas.</em>
                </div>
              </div>
              <div class="anatomy-card" id="anat-card-neutron">
                <div class="anatomy-card-icon" style="color:#74b9ff">n</div>
                <div class="anatomy-card-title">Neutron</div>
                <div class="anatomy-card-body">
                  <strong>Netral</strong> — tidak bermuatan. Berada di inti bersama proton.
                  Neutron adalah "lem" yang menahan proton agar tidak saling tolak menolak.
                  <br><br>
                  <em>Isotop = atom yang protonnya sama tapi neutronnya beda.</em>
                </div>
              </div>
              <div class="anatomy-card" id="anat-card-electron">
                <div class="anatomy-card-icon" style="color:#a29bfe">e⁻</div>
                <div class="anatomy-card-title">Elektron</div>
                <div class="anatomy-card-body">
                  Bermuatan <strong>negatif (−1)</strong>. Bergerak di "awan" di sekitar nukleus.
                  Massanya 1.836× lebih ringan dari proton — hampir nol.
                  <br><br>
                  <em>Elektron terluar menentukan bagaimana atom bereaksi dengan atom lain.</em>
                </div>
              </div>
            </div>
          </div>

          <div class="empty-fact reveal-up">
            <div class="empty-fact-num">99,9999999%</div>
            <div class="empty-fact-label">dari atom adalah <strong>ruang kosong</strong></div>
            <div class="empty-fact-sub">
              Jika semua ruang kosong dari atom-atom di tubuhmu dihilangkan,<br>
              seluruh umat manusia muat dalam ukuran <strong>segelas gula</strong>.
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           CHAPTER 3 — PROTON IDENTITY
      ═══════════════════════════════════════════════════ -->
      <section class="dash-section dash-identity" id="sec-identity">
        <div class="dash-section-inner">
          <div class="dash-chapter-tag reveal-up">Chapter 3</div>
          <h2 class="dash-section-title reveal-up">Satu proton mengubah segalanya.</h2>
          <p class="dash-section-sub reveal-up">
            Tambah atau kurangi proton — dan atom berubah menjadi elemen yang sama sekali berbeda.
          </p>

          <div class="identity-box reveal-up">
            <div class="identity-controls">
              <button class="identity-btn" id="id-minus">−</button>
              <div class="identity-display">
                <div class="identity-proton-count" id="id-count">6</div>
                <div class="identity-proton-label">proton</div>
              </div>
              <button class="identity-btn" id="id-plus">+</button>
            </div>

            <div class="identity-element-card" id="id-card">
              <div class="identity-sym" id="id-sym">C</div>
              <div class="identity-name" id="id-name">Karbon</div>
              <div class="identity-cat" id="id-cat">Nonmetal</div>
              <div class="identity-fact" id="id-fact">Fondasi semua kehidupan. Kamu tersusun dari Karbon.</div>
            </div>
          </div>

          <div class="identity-quote reveal-up">
            <span class="identity-quote-icon">✦</span>
            <p>"Semua yang membuat <em>kamu</em> berbeda dari <em>batu</em> hanyalah susunan proton yang berbeda."</p>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           CHAPTER 4 — ORIGIN (STAR STORY)
      ═══════════════════════════════════════════════════ -->
      <section class="dash-section dash-origin" id="sec-origin">
        <div class="dash-section-inner">
          <div class="dash-chapter-tag reveal-up">Chapter 4</div>
          <h2 class="dash-section-title reveal-up">Dari mana asalnya?</h2>

          <div class="origin-chain reveal-up">
            <div class="origin-step">
              <div class="origin-step-icon">💥</div>
              <div class="origin-step-title">Big Bang</div>
              <div class="origin-step-body">13,8 miliar tahun lalu — Hidrogen & Helium dicipta dalam detik pertama alam semesta.</div>
            </div>
            <div class="origin-arrow">→</div>
            <div class="origin-step">
              <div class="origin-step-icon">⭐</div>
              <div class="origin-step-title">Fusi Bintang</div>
              <div class="origin-step-body">Di dalam inti bintang masif, Hidrogen melebur menjadi Karbon, Oksigen, Besi selama miliaran tahun.</div>
            </div>
            <div class="origin-arrow">→</div>
            <div class="origin-step">
              <div class="origin-step-icon">💫</div>
              <div class="origin-step-title">Supernova</div>
              <div class="origin-step-body">Bintang meledak — menyebarkan semua elemen itu ke seluruh galaksi. Termasuk yang ada di tubuhmu.</div>
            </div>
            <div class="origin-arrow">→</div>
            <div class="origin-step">
              <div class="origin-step-icon">💛</div>
              <div class="origin-step-title">Tabrakan Bintang Neutron</div>
              <div class="origin-step-body">Emas, Platinum, Uranium — hanya bisa terbentuk dari tumbukan dua bintang neutron yang sangat langka.</div>
            </div>
          </div>

          <div class="origin-sagan reveal-up">
            <div class="origin-sagan-quote">
              "Kita adalah cara alam semesta mengenal dirinya sendiri."
            </div>
            <div class="origin-sagan-name">— Carl Sagan</div>
          </div>

          <div class="origin-history-cta reveal-up">
            <p>Tapi butuh <strong>2.400 tahun</strong> bagi manusia untuk membuktikan atom itu nyata.<br>
            Itu perjalanan yang penuh perdebatan, eksperimen gila, dan momen "Eureka".</p>
            <button class="origin-history-btn" id="btn-history">
              <span>Lihat perjalanan penemuannya</span>
              <span class="origin-btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           CHAPTER 5 — CTA FINAL
      ═══════════════════════════════════════════════════ -->
      <section class="dash-section dash-cta-final" id="sec-cta">
        <div class="dash-section-inner">
          <h2 class="dash-cta-title reveal-up">Sekarang, kenali mereka satu per satu.</h2>
          <p class="dash-cta-sub reveal-up">118 elemen. Setiap satu punya cerita.</p>

          <div class="dash-cta-cards reveal-up">
            <div class="dash-cta-card" id="cta-explore">
              <div class="dash-cta-card-icon">🔬</div>
              <div class="dash-cta-card-title">Eksplorasi Tabel</div>
              <div class="dash-cta-card-body">Jelajahi 118 elemen — klik untuk detail lengkap, 3D atom, dan kisah penemuannya.</div>
              <div class="dash-cta-card-btn">Buka Tabel Periodik →</div>
            </div>
            <div class="dash-cta-card" id="cta-molecule">
              <div class="dash-cta-card-icon">⚗️</div>
              <div class="dash-cta-card-title">Kimia Lab</div>
              <div class="dash-cta-card-body">Gabungkan atom dan bangun molekul — H₂O, CO₂, DNA, dan lainnya secara interaktif.</div>
              <div class="dash-cta-card-btn">Masuk Lab →</div>
            </div>
            <div class="dash-cta-card" id="cta-phenomena">
              <div class="dash-cta-card-icon">⚡</div>
              <div class="dash-cta-card-title">Fenomena Atom</div>
              <div class="dash-cta-card-body">Dari radioaktivitas hingga superkonduktor — atom di balik keajaiban dunia nyata.</div>
              <div class="dash-cta-card-btn">Lihat Fenomena →</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;

  // ─── CLEANUPS ────────────────────────────────────────────────────────────
  const cleanups: Array<() => void> = [];

  // ─── HERO THREE.JS ────────────────────────────────────────────────────────
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0, 5);

  // Nucleus
  const nucleusGroup = new THREE.Group();
  const pGeo = new THREE.SphereGeometry(0.22, 32, 32);
  const pMat = new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.3, metalness: 0.5, emissive: 0xff3333, emissiveIntensity: 0.25 });
  const nMat = new THREE.MeshStandardMaterial({ color: 0x74b9ff, roughness: 0.3, metalness: 0.5, emissive: 0x3385ff, emissiveIntensity: 0.2 });

  const nucleonPositions = [
    [-0.15, 0.1, 0.05], [0.15, -0.1, -0.05],
    [-0.05, -0.15, 0.1], [0.1, 0.12, -0.1],
    [-0.1, 0.05, -0.12], [0.05, -0.08, 0.15],
  ];
  nucleonPositions.forEach((pos, i) => {
    const mesh = new THREE.Mesh(pGeo, i % 2 === 0 ? pMat : nMat);
    mesh.position.set(pos[0], pos[1], pos[2]);
    nucleusGroup.add(mesh);
  });
  scene.add(nucleusGroup);

  // Ambient glow sphere (transparent)
  const glowGeo = new THREE.SphereGeometry(0.55, 32, 32);
  const glowMat = new THREE.MeshStandardMaterial({ color: 0x7c73ff, transparent: true, opacity: 0.07, side: THREE.BackSide });
  scene.add(new THREE.Mesh(glowGeo, glowMat));

  // Electron orbits + electrons
  const electronColor = 0xa29bfe;
  const orbitData = [
    { r: 1.2, tilt: 15, speed: 0.8 },
    { r: 1.6, tilt: -55, speed: -0.55 },
    { r: 2.0, tilt: 75, speed: 0.4 },
    { r: 1.4, tilt: 130, speed: -0.7 },
    { r: 1.8, tilt: -10, speed: 0.6 },
    { r: 2.2, tilt: 45, speed: -0.35 },
  ];

  const electronMeshes: { mesh: THREE.Mesh; orbit: typeof orbitData[0]; angle: number }[] = [];

  orbitData.forEach(orbit => {
    // Ring
    const ringGeo = new THREE.TorusGeometry(orbit.r, 0.007, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({ color: electronColor, transparent: true, opacity: 0.18 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = (orbit.tilt * Math.PI) / 180;
    scene.add(ring);

    // Electron
    const eGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const eMat = new THREE.MeshStandardMaterial({ color: electronColor, emissive: electronColor, emissiveIntensity: 1.2, roughness: 0.1 });
    const eMesh = new THREE.Mesh(eGeo, eMat);
    scene.add(eMesh);
    electronMeshes.push({ mesh: eMesh, orbit, angle: Math.random() * Math.PI * 2 });
  });

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const pLight = new THREE.PointLight(0x7c73ff, 3, 10);
  pLight.position.set(3, 3, 3);
  scene.add(pLight);
  const pLight2 = new THREE.PointLight(0xff6b6b, 1.5, 8);
  pLight2.position.set(-2, -2, 2);
  scene.add(pLight2);

  function resizeHero() {
    const hero = document.getElementById('dash-hero')!;
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resizeHero();
  window.addEventListener('resize', resizeHero);

  let heroRaf = 0;
  let t2 = 0;
  function animateHero() {
    heroRaf = requestAnimationFrame(animateHero);
    t2 += 0.008;
    nucleusGroup.rotation.y = t2 * 0.3;
    nucleusGroup.rotation.x = Math.sin(t2 * 0.2) * 0.15;

    electronMeshes.forEach(e => {
      e.angle += e.orbit.speed * 0.012;
      const tiltRad = (e.orbit.tilt * Math.PI) / 180;
      const x = Math.cos(e.angle) * e.orbit.r;
      const z = Math.sin(e.angle) * e.orbit.r;
      const y = z * Math.sin(tiltRad);
      const z2 = z * Math.cos(tiltRad);
      e.mesh.position.set(x, y, z2);
    });

    renderer.render(scene, camera);
  }
  animateHero();

  cleanups.push(() => {
    cancelAnimationFrame(heroRaf);
    renderer.dispose();
    window.removeEventListener('resize', resizeHero);
  });

  // ─── SCROLL REVEAL ────────────────────────────────────────────────────────
  const revealEls = container.querySelectorAll('.reveal-up');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        (e.target as HTMLElement).classList.add('revealed');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => revealObs.observe(el));
  cleanups.push(() => revealObs.disconnect());

  // ─── SCALE SLIDER ─────────────────────────────────────────────────────────
  const scaleData = [
    { label: 'Sehelai rambut', size: '~70.000 nm', fact: 'Lebarnya 70.000 nanometer. Bisa terlihat mata telanjang.', color: '#ffd93d', px: 180 },
    { label: 'Sel darah merah', size: '~8.000 nm', fact: 'Diameter 8.000 nm — masih bisa dilihat dengan mikroskop cahaya.', color: '#ff6b6b', px: 140 },
    { label: 'Bakteri E. coli', size: '~2.000 nm', fact: 'Panjang 2.000 nm. Butuh mikroskop elektron untuk melihatnya.', color: '#a29bfe', px: 100 },
    { label: 'Virus', size: '~100 nm', fact: 'Virus corona berdiameter ~100 nm. Jutaan kali lebih kecil dari rambut.', color: '#74b9ff', px: 60 },
    { label: 'DNA double helix', size: '~2 nm', fact: 'Lebar helix DNA hanya 2 nanometer — 35.000× lebih tipis dari rambut.', color: '#55efc4', px: 28 },
    { label: 'Atom Karbon', size: '~0.15 nm', fact: '150 pikometer. 1 juta atom Karbon berjajar = lebar rambut manusia.', color: '#7c73ff', px: 12 },
  ];

  const slider = document.getElementById('scale-slider') as HTMLInputElement;
  const scaleObj = document.getElementById('scale-obj') as HTMLElement;
  const scaleInfo = document.getElementById('scale-info') as HTMLElement;
  const scaleLabels = document.getElementById('scale-labels') as HTMLElement;

  scaleLabels.innerHTML = scaleData.map((d, i) =>
    `<span class="scale-label-item" data-i="${i}">${d.label}</span>`
  ).join('');

  function updateScale(val: number) {
    const d = scaleData[val];
    scaleObj.style.width = d.px + 'px';
    scaleObj.style.height = d.px + 'px';
    scaleObj.style.background = `radial-gradient(circle at 35% 35%, ${d.color}dd, ${d.color}66)`;
    scaleObj.style.boxShadow = `0 0 40px ${d.color}55`;
    scaleInfo.innerHTML = `<strong>${d.label}</strong> — ${d.size}<br><span class="scale-info-fact">${d.fact}</span>`;

    scaleLabels.querySelectorAll('.scale-label-item').forEach((el, i) => {
      (el as HTMLElement).classList.toggle('active', i === val);
    });
  }
  updateScale(0);

  slider.addEventListener('input', () => updateScale(parseInt(slider.value)));
  scaleLabels.querySelectorAll('.scale-label-item').forEach((el, i) => {
    el.addEventListener('click', () => { slider.value = String(i); updateScale(i); });
  });

  // ─── ANATOMY INTERACTIVE ─────────────────────────────────────────────────
  const anatParticles = container.querySelectorAll('[data-tip]');
  const anatCards = container.querySelectorAll('.anatomy-card');

  function showAnatCard(id: string) {
    anatCards.forEach(c => (c as HTMLElement).classList.remove('active'));
    const target = document.getElementById(`anat-card-${id}`);
    if (target) target.classList.add('active');
  }

  anatParticles.forEach(p => {
    p.addEventListener('click', () => {
      const tip = (p as HTMLElement).dataset.tip!;
      showAnatCard(tip);
      p.classList.add('anat-clicked');
      setTimeout(() => p.classList.remove('anat-clicked'), 400);
    });
  });

  // ─── PROTON IDENTITY ─────────────────────────────────────────────────────
  const identityFacts: Record<number, string> = {
    1: 'Paling ringan di alam semesta. 75% dari semua materi adalah Hidrogen.',
    2: 'Gas mulia pertama — tidak bereaksi dengan apapun. Suaramu jadi cempreng karena helio.',
    3: 'Logam paling ringan. Baterai ponselmu mengandung Litium.',
    4: 'Logam paling kuat per unit massa. Pesawat ruang angkasa pakai Berilium.',
    5: 'Boron di bola bowling membuatnya kuat. Juga kunci layar HP kamu.',
    6: 'Fondasi semua kehidupan. Kamu tersusun ~18% dari Karbon.',
    7: '78% udara yang kamu hirup adalah Nitrogen — tapi kamu tidak bisa menyerapnya langsung.',
    8: 'Kamu tidak bisa hidup 4 menit tanpa Oksigen.',
    9: 'Paling reaktif dari semua elemen. Bereaksi dengan hampir segalanya — bahkan kaca.',
    10: 'Neon di papan reklame. Tidak bereaksi dengan siapapun.',
    11: 'Natrium di dalam tubuhmu menjaga tekanan darah dan fungsi saraf.',
    12: 'Magnesium di klorofil — tanpanya, fotosintesis tidak terjadi.',
    13: 'Aluminium di kaleng minumanmu. Ringan, kuat, bisa didaur-ulang selamanya.',
    14: 'Silikon adalah fondasi chip semikonduktor — dan era digital kita.',
    15: 'Fosfor ada di DNA-mu. Tanpanya, informasi genetik tidak bisa tersimpan.',
    16: 'Belerang = bau telur busuk. Tapi juga ada di setiap protein tubuhmu.',
    17: 'Klorin di air kolam renang membunuh bakteri. Dosis tinggi = gas beracun perang.',
    18: 'Argon mengisi lampu pijar dan layar plasma. Gas paling "malas" di alam semesta.',
    19: 'Kalium menjaga jantungmu berdegup. Kram otot? Coba pisang.',
    20: 'Kalsium di tulangmu adalah 99% dari total kalsium tubuh.',
    26: 'Besi di hemoglobin membawa oksigen ke seluruh tubuh. Kekurangan besi = anemia.',
    29: 'Tembaga pertama kali digunakan manusia 10.000 tahun lalu. Masih dipakai di kabel listrikmu.',
    47: 'Perak paling reflektif dari semua logam. Juga antibakteri alami.',
    79: 'Emas tidak pernah berkarat. Atom emasmu lahir dari tabrakan bintang neutron.',
    82: 'Timbal dipakai Romawi kuno untuk pipa air. Para ilmuwan menduga ini yang membuat kekaisaran jatuh.',
    92: 'Uranium radioaktif — bahan bakar PLTN yang memasok 10% listrik dunia.',
  };

  let protonCount = 6;
  const idCount = document.getElementById('id-count')!;
  const idSym = document.getElementById('id-sym')!;
  const idName = document.getElementById('id-name')!;
  const idCat = document.getElementById('id-cat')!;
  const idFact = document.getElementById('id-fact')!;
  const idCard = document.getElementById('id-card')!;

  function updateIdentity(n: number) {
    protonCount = Math.max(1, Math.min(118, n));
    idCount.textContent = String(protonCount);
    const el = elements.find(e => e.n === protonCount);
    if (!el) return;
    const cat = categories[el.cat];
    const color = cat?.color || '#7c73ff';

    idSym.textContent = el.sym;
    idSym.style.color = color;
    idCard.style.borderColor = color + '55';
    idCard.style.background = color + '0a';
    idName.textContent = el.nameId || el.name;
    idCat.textContent = cat?.nameId || el.cat;
    idFact.textContent = identityFacts[protonCount] || el.desc || `Elemen nomor ${protonCount}.`;
  }
  updateIdentity(6);

  document.getElementById('id-minus')!.addEventListener('click', () => updateIdentity(protonCount - 1));
  document.getElementById('id-plus')!.addEventListener('click', () => updateIdentity(protonCount + 1));

  // Keyboard on identity box
  const identityBox = container.querySelector('.identity-box') as HTMLElement;
  identityBox?.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') updateIdentity(protonCount - 1);
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') updateIdentity(protonCount + 1);
  });

  // ─── SCROLL HINT ──────────────────────────────────────────────────────────
  document.getElementById('dash-scroll-btn')?.addEventListener('click', () => {
    document.getElementById('sec-scale')?.scrollIntoView({ behavior: 'smooth' });
  });

  // ─── NAV BUTTONS ─────────────────────────────────────────────────────────
  document.getElementById('btn-history')?.addEventListener('click', () => navigate('/atom-history'));
  document.getElementById('cta-explore')?.addEventListener('click', () => navigate('/explore'));
  document.getElementById('cta-molecule')?.addEventListener('click', () => navigate('/molecule'));
  document.getElementById('cta-phenomena')?.addEventListener('click', () => navigate('/phenomena'));

  return () => cleanups.forEach(fn => fn());
}
