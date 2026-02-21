import * as THREE from 'three';
import { navigate } from '../core/router';
import { elements } from '../data/elements';
import { categories } from '../data/categories';
import { getLang } from '../core/i18n';

export function renderDashboard(container: HTMLElement): () => void {
  const isEN = getLang() === 'en';

  // ─── Bilingual copy ──────────────────────────────────────────────────────
  const copy = {
    heroLabel: isEN ? '⚛ one carbon atom' : '⚛ satu atom karbon',
    heroTitle: isEN ? 'Everything<br>is made of this.' : 'Segalanya<br>tersusun dari ini.',
    heroNum: isEN ? '7,000,000,000,000,000,000,000,000,000' : '7.000.000.000.000.000.000.000.000.000',
    heroSub1: isEN ? 'Your body contains' : 'Tubuhmu mengandung',
    heroSub2: isEN ? 'atoms — most of them forged in the core of a dying star.' : 'atom — sebagian besar ditempa di inti bintang yang sekarat.',
    heroScroll: isEN ? 'Scroll to explore ↓' : 'Scroll untuk menjelajahi ↓',

    ch1Tag: isEN ? 'Chapter 1' : 'Chapter 1',
    ch1Title: isEN ? 'How small is an atom, really?' : 'Sekecil apa, sebenarnya?',
    ch1Sub: isEN ? 'Drag the slider to grasp a scale your brain wasn\'t built to imagine.' : 'Geser slider untuk memahami skala yang tidak bisa dibayangkan akal biasa.',
    ch1Fact: isEN
      ? 'If an atom were the size of a football stadium, its <strong>nucleus</strong> would be a <strong>marble at the center</strong> — that is how empty atoms really are.'
      : 'Jika sebuah atom sebesar stadion bola, maka <strong>inti atomnya</strong> hanya sebesar <strong>kelereng di tengah lapangan</strong> — begitu kosongnya sebuah atom.',

    ch2Tag: isEN ? 'Chapter 2' : 'Chapter 2',
    ch2Title: isEN ? 'What\'s actually inside?' : 'Apa yang ada di dalamnya?',
    ch2Sub: isEN ? 'Click each particle to learn more.' : 'Klik setiap partikel untuk belajar lebih.',
    ch2Prompt: isEN ? 'Click a particle' : 'Klik partikel',
    ch2PromptSub: isEN ? 'Select a proton, neutron, or electron to see the details.' : 'Pilih proton, neutron, atau elektron untuk melihat detailnya.',
    protonBody: isEN
      ? 'Carries <strong>positive charge (+1)</strong>. Lives in the nucleus. Number of protons = <strong>atomic number</strong> = element identity.<br><br><em>1 proton = Hydrogen. 6 protons = Carbon. 79 protons = Gold.</em>'
      : 'Bermuatan <strong>positif (+1)</strong>. Berada di inti atom (nukleus). Jumlah proton = <strong>nomor atom</strong> = identitas elemen.<br><br><em>1 proton = Hidrogen. 6 proton = Karbon. 79 proton = Emas.</em>',
    neutronBody: isEN
      ? '<strong>Neutral</strong> — no electric charge. Sits in the nucleus alongside protons. Neutrons help stabilize the nucleus: without them, the strong nuclear force cannot effectively hold larger nuclei together.<br><br><em>Isotopes = same element, different neutron count. e.g. Carbon-12 vs Carbon-14.</em>'
      : '<strong>Netral</strong> — tidak bermuatan listrik. Berada di inti bersama proton. Neutron membantu menstabilkan inti atom: tanpanya, gaya inti kuat tidak dapat menahan inti yang lebih besar.<br><br><em>Isotop = elemen yang sama, jumlah neutron berbeda. Contoh: Karbon-12 vs Karbon-14.</em>',
    electronBody: isEN
      ? 'Carries <strong>negative charge (−1)</strong>. Moves in a cloud around the nucleus. Mass is 1,836× lighter than a proton — nearly zero.<br><br><em>Outer electrons determine how an atom reacts with others.</em>'
      : 'Bermuatan <strong>negatif (−1)</strong>. Bergerak di "awan" di sekitar nukleus. Massanya 1.836× lebih ringan dari proton — hampir nol.<br><br><em>Elektron terluar menentukan bagaimana atom bereaksi dengan atom lain.</em>',
    emptyLabel: isEN ? 'of an atom is <strong>empty space</strong>' : 'dari atom adalah <strong>ruang kosong</strong>',
    emptySub: isEN
      ? 'If you removed all the empty space from every atom in every human body,<br>all of humanity would fit inside a <strong>sugar cube</strong>.'
      : 'Jika semua ruang kosong dari atom-atom di tubuhmu dihilangkan,<br>seluruh umat manusia muat dalam ukuran <strong>segelas gula</strong>.',

    ch3Tag: isEN ? 'Chapter 3' : 'Chapter 3',
    ch3Title: isEN ? 'One proton changes everything.' : 'Satu proton mengubah segalanya.',
    ch3Sub: isEN
      ? 'Add or remove a proton — and the atom becomes an entirely different element.'
      : 'Tambah atau kurangi proton — dan atom berubah menjadi elemen yang sama sekali berbeda.',
    ch3DefaultFact: isEN ? 'The foundation of all life. You are made of Carbon.' : 'Fondasi semua kehidupan. Kamu tersusun dari Karbon.',
    ch3Quote: isEN
      ? '"Everything that makes <em>you</em> different from <em>a rock</em> is just a different arrangement of protons."'
      : '"Semua yang membuat <em>kamu</em> berbeda dari <em>batu</em> hanyalah susunan proton yang berbeda."',

    ch4Tag: isEN ? 'Chapter 4' : 'Chapter 4',
    ch4Title: isEN ? 'Where did they come from?' : 'Dari mana asalnya?',
    bb: isEN ? 'Big Bang' : 'Big Bang',
    bbBody: isEN ? '13.8 billion years ago — Hydrogen & Helium forged in the first seconds of the universe.' : '13,8 miliar tahun lalu — Hidrogen & Helium dicipta dalam detik pertama alam semesta.',
    fusion: isEN ? 'Stellar Fusion' : 'Fusi Bintang',
    fusionBody: isEN ? 'Inside massive stars, Hydrogen fuses into Carbon, Oxygen, Iron over billions of years.' : 'Di dalam inti bintang masif, Hidrogen melebur menjadi Karbon, Oksigen, Besi selama miliaran tahun.',
    supernova: isEN ? 'Supernova' : 'Supernova',
    supernovaBody: isEN ? 'A star explodes — scattering all those elements across the galaxy. Including the ones in your body.' : 'Bintang meledak — menyebarkan semua elemen itu ke seluruh galaksi. Termasuk yang ada di tubuhmu.',
    neutronStar: isEN ? 'Neutron Star Collision' : 'Tabrakan Bintang Neutron',
    neutronStarBody: isEN ? 'Gold, Platinum, Uranium — only born from the collision of two neutron stars, an incredibly rare event.' : 'Emas, Platinum, Uranium — hanya bisa terbentuk dari tumbukan dua bintang neutron yang sangat langka.',
    sagan: isEN ? '"We are a way for the cosmos to know itself."' : '"Kita adalah cara alam semesta mengenal dirinya sendiri."',
    historyP: isEN
      ? 'But it took <strong>2,400 years</strong> for humanity to prove atoms were real.<br>A journey full of debate, wild experiments, and Eureka moments.'
      : 'Tapi butuh <strong>2.400 tahun</strong> bagi manusia untuk membuktikan atom itu nyata.<br>Itu perjalanan yang penuh perdebatan, eksperimen gila, dan momen "Eureka".',
    historyBtn: isEN ? 'See the full discovery story' : 'Lihat perjalanan penemuannya',

    ctaTitle: isEN ? 'You now know what an atom is.' : 'Sekarang kamu tahu apa itu atom.',
    ctaSub: isEN
      ? 'This is just the nucleus. Every path below branches out into a deeper universe.'
      : 'Ini baru intinya. Setiap jalur di bawah bercabang ke semesta yang lebih dalam.',
    ctaOrbitLabel: isEN ? 'Choose your path' : 'Pilih jalurmu',
  };

  container.innerHTML = `
    <div class="dash-root">


      <!-- ═══════════════════════════════════════════════════
           CHAPTER 0 — HERO
      ═══════════════════════════════════════════════════ -->
      <section class="dash-hero" id="dash-hero">
        <canvas id="hero-canvas"></canvas>
        <div class="dash-hero-content">
          <div class="dash-hero-label">${copy.heroLabel}</div>
          <h1 class="dash-hero-title">${copy.heroTitle}</h1>
          <p class="dash-hero-sub">
            ${copy.heroSub1} <span class="dash-hero-num">${copy.heroNum}</span> ${copy.heroSub2}
          </p>
          <button class="dash-scroll-hint" id="dash-scroll-btn">
            ${copy.heroScroll}
          </button>
        </div>
        <div class="dash-hero-gradient"></div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           CHAPTER 1 — SCALE
      ═══════════════════════════════════════════════════ -->
      <section class="dash-section dash-scale" id="sec-scale">
        <div class="dash-section-inner">
          <div class="dash-chapter-tag reveal-up">${copy.ch1Tag}</div>
          <h2 class="dash-section-title reveal-up">${copy.ch1Title}</h2>
          <p class="dash-section-sub reveal-up">${copy.ch1Sub}</p>

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
            <p>${copy.ch1Fact}</p>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           CHAPTER 2 — ANATOMY
      ═══════════════════════════════════════════════════ -->
      <section class="dash-section dash-anatomy" id="sec-anatomy">
        <div class="dash-section-inner">
          <div class="dash-chapter-tag reveal-up">${copy.ch2Tag}</div>
          <h2 class="dash-section-title reveal-up">${copy.ch2Title}</h2>
          <p class="dash-section-sub reveal-up">${copy.ch2Sub}</p>

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
                <div class="anatomy-card-title">${copy.ch2Prompt}</div>
                <div class="anatomy-card-body">${copy.ch2PromptSub}</div>
              </div>
              <div class="anatomy-card" id="anat-card-proton">
                <div class="anatomy-card-icon" style="color:#ff6b6b">p⁺</div>
                <div class="anatomy-card-title">Proton</div>
                <div class="anatomy-card-body">${copy.protonBody}</div>
              </div>
              <div class="anatomy-card" id="anat-card-neutron">
                <div class="anatomy-card-icon" style="color:#74b9ff">n</div>
                <div class="anatomy-card-title">Neutron</div>
                <div class="anatomy-card-body">${copy.neutronBody}</div>
              </div>
              <div class="anatomy-card" id="anat-card-electron">
                <div class="anatomy-card-icon" style="color:#a29bfe">e⁻</div>
                <div class="anatomy-card-title">Electron</div>
                <div class="anatomy-card-body">${copy.electronBody}</div>
              </div>
            </div>
          </div>

          <div class="empty-fact reveal-up">
            <div class="empty-fact-num">99.9999999%</div>
            <div class="empty-fact-label">${copy.emptyLabel}</div>
            <div class="empty-fact-sub">${copy.emptySub}</div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           CHAPTER 3 — PROTON IDENTITY
      ═══════════════════════════════════════════════════ -->
      <section class="dash-section dash-identity" id="sec-identity">
        <div class="dash-section-inner">
          <div class="dash-chapter-tag reveal-up">${copy.ch3Tag}</div>
          <h2 class="dash-section-title reveal-up">${copy.ch3Title}</h2>
          <p class="dash-section-sub reveal-up">${copy.ch3Sub}</p>

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
              <div class="identity-name" id="id-name">${isEN ? 'Carbon' : 'Karbon'}</div>
              <div class="identity-cat" id="id-cat">Nonmetal</div>
              <div class="identity-fact" id="id-fact">${copy.ch3DefaultFact}</div>
            </div>
          </div>

          <div class="identity-quote reveal-up">
            <span class="identity-quote-icon">✦</span>
            <p>${copy.ch3Quote}</p>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           CHAPTER 4 — ORIGIN (STAR STORY)
      ═══════════════════════════════════════════════════ -->
      <section class="dash-section dash-origin" id="sec-origin">
        <div class="dash-section-inner">
          <div class="dash-chapter-tag reveal-up">${copy.ch4Tag}</div>
          <h2 class="dash-section-title reveal-up">${copy.ch4Title}</h2>

          <div class="origin-chain reveal-up">
            <div class="origin-step">
              <div class="origin-step-icon">💥</div>
              <div class="origin-step-title">${copy.bb}</div>
              <div class="origin-step-body">${copy.bbBody}</div>
            </div>
            <div class="origin-arrow">→</div>
            <div class="origin-step">
              <div class="origin-step-icon">⭐</div>
              <div class="origin-step-title">${copy.fusion}</div>
              <div class="origin-step-body">${copy.fusionBody}</div>
            </div>
            <div class="origin-arrow">→</div>
            <div class="origin-step">
              <div class="origin-step-icon">💫</div>
              <div class="origin-step-title">${copy.supernova}</div>
              <div class="origin-step-body">${copy.supernovaBody}</div>
            </div>
            <div class="origin-arrow">→</div>
            <div class="origin-step">
              <div class="origin-step-icon">💛</div>
              <div class="origin-step-title">${copy.neutronStar}</div>
              <div class="origin-step-body">${copy.neutronStarBody}</div>
            </div>
          </div>

          <div class="origin-sagan reveal-up">
            <div class="origin-sagan-quote">${copy.sagan}</div>
            <div class="origin-sagan-name">— Carl Sagan</div>
          </div>

          <div class="origin-history-cta reveal-up">
            <p>${copy.historyP}</p>
            <button class="origin-history-btn" id="btn-history">
              <span>${copy.historyBtn}</span>
              <span class="origin-btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           CHAPTER 5 — PUSAT ATOM (narrative finale)
      ═══════════════════════════════════════════════════ -->
      <section class="dash-section dash-finale" id="sec-cta">
        <div class="dash-finale-inner">

          <div class="dash-finale-nucleus reveal-up">⚛</div>

          <div class="dash-finale-prose reveal-up">

            <p class="dash-finale-opening">
              ${isEN
      ? 'Everything started here.'
      : 'Segalanya dimulai dari sini.'}
            </p>

            <p>
              ${isEN
      ? '13.8 billion years ago, the universe was a single, unimaginably hot point. Then it exploded. In the first three minutes, the only atoms that formed were <strong>Hydrogen</strong> and <strong>Helium</strong>. Nothing else existed.'
      : '13,8 miliar tahun lalu, alam semesta adalah satu titik yang tidak terbayangkan panasnya. Lalu ia meledak. Dalam tiga menit pertama, satu-satunya atom yang terbentuk adalah <strong>Hidrogen</strong> dan <strong>Helium</strong>. Tidak ada yang lain.'}
            </p>

            <p>
              ${isEN
      ? 'Hydrogen collapsed under its own gravity. A star ignited. Inside that furnace, hydrogen fused into carbon, oxygen, nitrogen, iron — the atoms that make up our bones, our air, our blood. It took a billion years. There was no rush.'
      : 'Hidrogen runtuh karena gravitasinya sendiri. Sebuah bintang menyala. Di dalam tungku itu, hidrogen melebur menjadi karbon, oksigen, nitrogen, besi — atom yang membentuk tulang, udara, dan darah kita. Prosesnya butuh satu miliar tahun. Tidak ada yang terburu-buru.'}
            </p>

            <p>
              ${isEN
      ? 'Then the star died. It exploded in a supernova — scattering all those atoms across the galaxy at a fraction of the speed of light. Some landed on a young planet orbiting a modest star in the Milky Way\'s outer arm.'
      : 'Lalu bintang itu mati. Ia meledak dalam supernova — menyebarkan semua atom itu ke seluruh galaksi dengan kecepatan sebagian dari kecepatan cahaya. Sebagian mendarat di sebuah planet muda yang mengorbit bintang biasa di lengan terluar Bima Sakti.'}
            </p>

            <p>
              ${isEN
      ? 'That planet is Earth. And those atoms — after billions of years of drifting, combining, and recombining — eventually became you.'
      : 'Planet itu adalah Bumi. Dan atom-atom itu — setelah miliaran tahun melayang, bergabung, dan bergabung kembali — akhirnya menjadi kamu.'}
            </p>

            <div class="dash-finale-pause">
              ${isEN
      ? 'You are stardust that learned to wonder about its own origin.'
      : 'Kamu adalah abu bintang yang belajar bertanya-tanya tentang asal-usulnya sendiri.'}
            </div>

            <p>
              ${isEN
      ? 'The carbon in your body was inside a star before Earth existed. The iron in your blood was forged in a stellar core. The oxygen in every breath you take was scattered across the galaxy by a dying giant.'
      : 'Karbon di tubuhmu pernah berada di dalam bintang sebelum Bumi ada. Besi di darahmu ditempa di inti bintang. Oksigen di setiap napasmu disebarkan ke seluruh galaksi oleh raksasa yang sekarat.'}
            </p>

            <p>
              ${isEN
      ? 'And it doesn\'t stop with you. The same story — the same atoms — play out across the Sun, across every plant that converts light into sugar, across the entire observable universe. The elements don\'t care about the scale. Hydrogen behaves the same way in your body as it does at the core of the Sun.'
      : 'Dan itu tidak berhenti di kamu. Cerita yang sama — atom yang sama — berlangsung di Matahari, di setiap tumbuhan yang mengubah cahaya menjadi gula, di seluruh alam semesta yang bisa diamati. Elemen tidak peduli skala. Hidrogen berperilaku sama di tubuhmu seperti di inti Matahari.'}
            </p>

            <div class="dash-finale-branches">
              <div class="dash-finale-branch" id="hub-composition" data-route="/composition/human">
                <div class="dash-finale-branch-icon">🧬</div>
                <div class="dash-finale-branch-text">
                  <strong>${isEN ? 'What atoms make up your body?' : 'Atom apa yang membentuk tubuhmu?'}</strong>
                  <span>${isEN ? 'And the Sun. And a plant. And the entire Universe.' : 'Dan Matahari. Dan tumbuhan. Dan seluruh Semesta.'}</span>
                </div>
                <div class="dash-finale-branch-arrow">→</div>
              </div>
              <div class="dash-finale-branch" id="hub-phenomena" data-route="/phenomena">
                <div class="dash-finale-branch-icon">⚡</div>
                <div class="dash-finale-branch-text">
                  <strong>${isEN ? 'What can atoms do?' : 'Apa yang bisa atom lakukan?'}</strong>
                  <span>${isEN ? '27 phenomena — from radioactivity to superconductors.' : '27 fenomena — dari radioaktivitas hingga superkonduktor.'}</span>
                </div>
                <div class="dash-finale-branch-arrow">→</div>
              </div>
            </div>

            <p>
              ${isEN
      ? 'But this story — the one you\'ve just lived through on this page — didn\'t come easy. For 2,400 years, from Democritus to Schrödinger, humanity argued, experimented, and nearly got it wrong a hundred times before getting it right.'
      : 'Tapi cerita ini — yang baru saja kamu jalani di halaman ini — tidak datang dengan mudah. Selama 2.400 tahun, dari Democritus hingga Schrödinger, manusia berdebat, bereksperimen, dan hampir salah ratusan kali sebelum akhirnya benar.'}
            </p>

            <div class="dash-finale-branches">
              <div class="dash-finale-branch" id="hub-history" data-route="/atom-history">
                <div class="dash-finale-branch-icon">📜</div>
                <div class="dash-finale-branch-text">
                  <strong>${isEN ? 'How did we figure all this out?' : 'Bagaimana kita berhasil mengetahui semua ini?'}</strong>
                  <span>${isEN ? '22 cinematic slides. 2,400 years of science.' : '22 slide sinematik. 2.400 tahun perjalanan sains.'}</span>
                </div>
                <div class="dash-finale-branch-arrow">→</div>
              </div>
            </div>

            <p>
              ${isEN
      ? 'And once you know the story, you can meet every character individually. 118 elements. Each with a different number of protons. Each born from a different corner of the cosmos. Each with a role — in your body, in the Earth\'s crust, in the stars.'
      : 'Dan begitu kamu tahu ceritanya, kamu bisa bertemu setiap karakter satu per satu. 118 elemen. Masing-masing dengan jumlah proton yang berbeda. Masing-masing lahir dari sudut kosmos yang berbeda. Masing-masing punya peran — di tubuhmu, di kerak Bumi, di bintang-bintang.'}
            </p>

            <div class="dash-finale-branches">
              <div class="dash-finale-branch" id="hub-explore" data-route="/explore">
                <div class="dash-finale-branch-icon">🔬</div>
                <div class="dash-finale-branch-text">
                  <strong>${isEN ? 'Meet all 118 elements.' : 'Kenali semua 118 elemen.'}</strong>
                  <span>${isEN ? 'Periodic table · 3D models · discovery stories.' : 'Tabel periodik · 3D model · kisah penemu.'}</span>
                </div>
                <div class="dash-finale-branch-arrow">→</div>
              </div>
              <div class="dash-finale-branch" id="hub-molecule" data-route="/molecule">
                <div class="dash-finale-branch-icon">⚗️</div>
                <div class="dash-finale-branch-text">
                  <strong>${isEN ? 'Now combine them.' : 'Sekarang gabungkan mereka.'}</strong>
                  <span>${isEN ? 'Build H₂O, CO₂, DNA — and see what atoms become.' : 'Rakit H₂O, CO₂, DNA — dan lihat atom menjadi apa.'}</span>
                </div>
                <div class="dash-finale-branch-arrow">→</div>
              </div>
            </div>

            <p>
              ${isEN
      ? 'But knowing the cast is only the beginning. The deeper question is: <em>how do they behave?</em> How do they bond? What rules govern them? That is where the journey goes next.'
      : 'Tapi mengenal semua karakternya hanyalah awal. Pertanyaan yang lebih dalam adalah: <em>bagaimana mereka berperilaku?</em> Bagaimana mereka berikatan? Aturan apa yang mengatur mereka? Itulah ke mana perjalanan ini akan berlanjut.'}
            </p>

            <div class="dash-finale-branches">
              <div class="dash-finale-branch dash-finale-branch--soon">
                <div class="dash-finale-branch-icon">📚</div>
                <div class="dash-finale-branch-text">
                  <strong>${isEN ? 'Belajar Dari Awal — 10 Learning Modules' : 'Belajar Dari Awal — 10 Modul Belajar'}</strong>
                  <span>${isEN ? 'Matter → Electrons → Electron Config → Bonding. Step-by-step, with animations.' : 'Materi → Elektron → Konfigurasi → Ikatan Kimia. Bertahap, dengan animasi.'}</span>
                </div>
                <div class="dash-finale-branch-badge">${isEN ? 'Soon' : 'Segera'}</div>
              </div>
              <div class="dash-finale-branch dash-finale-branch--soon">
                <div class="dash-finale-branch-icon">🧪</div>
                <div class="dash-finale-branch-text">
                  <strong>${isEN ? 'Chem Lab: Challenge Mode' : 'Kimia Lab: Mode Tantangan'}</strong>
                  <span>${isEN ? 'Given a molecule name — build it yourself. With hints and real-time feedback.' : 'Dikasih nama molekul — rakit sendiri. Ada petunjuk dan feedback real-time.'}</span>
                </div>
                <div class="dash-finale-branch-badge">${isEN ? 'Soon' : 'Segera'}</div>
              </div>
              <div class="dash-finale-branch dash-finale-branch--soon">
                <div class="dash-finale-branch-icon">🌀</div>
                <div class="dash-finale-branch-text">
                  <strong>${isEN ? 'Orbital Model — Quantum Visualization' : 'Model Orbital — Visualisasi Kuantum'}</strong>
                  <span>${isEN ? 'Beyond Bohr. See the actual probability clouds where electrons live.' : 'Melampaui Bohr. Lihat awan probabilitas nyata tempat elektron berada.'}</span>
                </div>
                <div class="dash-finale-branch-badge">${isEN ? 'Soon' : 'Segera'}</div>
              </div>
            </div>

            <p class="dash-finale-closing">
              ${isEN
      ? 'You started this page not knowing why any of this matters. Now you know: every single thing — you, this screen, the air between you and it — is a different arrangement of the same handful of particles, born from the first seconds of existence.'
      : 'Kamu memulai halaman ini tanpa tahu mengapa semua ini penting. Sekarang kamu tahu: setiap hal — kamu, layar ini, udara di antara kamu dan layar ini — adalah susunan berbeda dari segelintir partikel yang sama, lahir dari detik-detik pertama keberadaan alam semesta.'}
            </p>

            <div class="dash-finale-coda">
              ${isEN
      ? '"We are a way for the cosmos to know itself."'
      : '"Kita adalah cara alam semesta mengenal dirinya sendiri."'}
              <span>— Carl Sagan</span>
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
  const scaleDataID = [
    { label: 'Sehelai rambut', size: '~70.000 nm', fact: '~70.000 nanometer lebar — hanya bisa terlihat karena ketebalan keseluruhannya.', color: '#ffd93d', px: 180 },
    { label: 'Sel darah merah', size: '~8.000 nm', fact: 'Diameter 8.000 nm — masih bisa dilihat dengan mikroskop cahaya biasa.', color: '#ff6b6b', px: 140 },
    { label: 'Bakteri E. coli', size: '~2.000 nm', fact: 'Panjang ~2.000 nm. Butuh mikroskop elektron untuk melihat strukturnya jelas.', color: '#a29bfe', px: 100 },
    { label: 'Virus (SARS-CoV-2)', size: '~100 nm', fact: 'Diameter ~100 nm — jutaan kali lebih kecil dari sehelai rambut.', color: '#74b9ff', px: 60 },
    { label: 'Double helix DNA', size: '~2 nm', fact: 'Lebar double helix DNA hanya 2 nm — 35.000× lebih tipis dari rambut.', color: '#55efc4', px: 28 },
    { label: 'Atom Karbon', size: '~0,15 nm', fact: '150 pikometer. Satu juta atom Karbon berjajar = lebar sehelai rambut manusia.', color: '#7c73ff', px: 12 },
  ];
  const scaleDataEN = [
    { label: 'Human hair', size: '~70,000 nm', fact: '~70,000 nanometers wide. Just barely visible to the naked eye as a strand.', color: '#ffd93d', px: 180 },
    { label: 'Red blood cell', size: '~8,000 nm', fact: '~8,000 nm diameter — still visible under a standard optical microscope.', color: '#ff6b6b', px: 140 },
    { label: 'E. coli bacterium', size: '~2,000 nm', fact: '~2,000 nm long. Requires an electron microscope to resolve fine structures.', color: '#a29bfe', px: 100 },
    { label: 'Virus (SARS-CoV-2)', size: '~100 nm', fact: '~100 nm diameter. Millions of times smaller than a strand of hair.', color: '#74b9ff', px: 60 },
    { label: 'DNA double helix', size: '~2 nm', fact: 'The DNA double helix is just 2 nm wide — 35,000× thinner than a human hair.', color: '#55efc4', px: 28 },
    { label: 'Carbon atom', size: '~0.15 nm', fact: '150 picometers. One million Carbon atoms in a row = the width of a human hair.', color: '#7c73ff', px: 12 },
  ];
  const scaleData = isEN ? scaleDataEN : scaleDataID;

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
  const identityFactsID: Record<number, string> = {
    1: 'Paling ringan di alam semesta. ~75% dari semua materi biasa adalah Hidrogen.',
    2: 'Gas mulia pertama — tidak bereaksi dengan apapun. Helium adalah elemen terbanyak kedua di alam semesta.',
    3: 'Logam alkali paling ringan. Ion litium (Li+) digunakan di baterai ponsel dan kendaraan listrik.',
    4: 'Rasio kekuatan-terhadap-berat tinggi. Digunakan di cermin teleskop luar angkasa dan jendela detektor sinar-X.',
    5: 'Boron dipakai di serat kaca, keramik tahan api, dan sebagai penyerap neutron di reaktor nuklir.',
    6: 'Fondasi semua kehidupan. ~18% massa tubuhmu adalah Karbon — 4 elektron valensi membuatnya sangat fleksibel.',
    7: '78% udara yang kamu hirup adalah N2. Nitrogen inert tapi senyawanya (protein, DNA, ATP) vital untuk kehidupan.',
    8: 'Kamu tidak bisa bertahan lebih dari ~4 menit tanpa Oksigen. Sangat reaktif — menyebabkan karat dan pembakaran.',
    9: 'Paling elektronegatif dari semua elemen. Fluorin bereaksi dengan hampir segalanya — bahkan kaca dan gas mulia.',
    10: 'Gas mulia kedua. Neon memancarkan cahaya merah-oranye khas saat dialiri listrik dalam tabung tertutup.',
    11: 'Ion Natrium (Na+) menjaga tekanan osmotik sel dan menghantarkan sinyal saraf di seluruh tubuh.',
    12: 'Magnesium ada di pusat molekul klorofil. Tanpa ion Mg2+, fotosintesis tidak bisa terjadi.',
    13: 'Logam paling melimpah di kerak bumi. Ringan, kuat, bisa didaur-ulang tanpa batas kualitas.',
    14: 'Silikon bersifat semikonduktor karena 4 elektron valensinya — fondasi semua chip komputer modern.',
    15: 'Fosfor ada di tulangmu (hidroksiapatit), tulang punggung DNA, dan ATP — molekul energi universal.',
    16: 'Belerang = bau telur busuk (H2S). Penting di asam amino sistein dan metionin di setiap protein.',
    17: 'Klorin digunakan untuk desinfeksi air minum dan kolam renang. Gas Cl2 murni adalah senjata kimia berbahaya.',
    18: 'Argon mengisi lampu pijar dan jendela berlapis ganda. Gas mulia paling banyak di atmosfer bumi (~0,93%).',
    19: 'Ion Kalium (K+) menjaga irama jantung dan kontraksi otot. Kekurangan Kalium menyebabkan kram dan aritmia.',
    20: '99% kalsium tubuhmu ada di tulang dan gigi. Sisa 1% kritis untuk kontraksi otot dan transmisi saraf.',
    26: 'Besi di hemoglobin mengikat O2 dan mengangkutnya ke seluruh tubuh. Kekurangan besi = anemia.',
    29: 'Tembaga pertama digunakan manusia ~10.000 tahun lalu. Konduktor listrik terbaik kedua setelah Perak.',
    47: 'Perak paling reflektif dari semua logam (>99%). Bersifat antibakteri — dipakai di perban dan alat medis.',
    79: 'Emas tidak pernah terkorosi. Atom Au di perhiasanmu lahir dari tabrakan dua bintang neutron (kilonova).',
    82: 'Timbal tidak radioaktif — paling stabil dari semua elemen berat. Pipa timbal Romawi kuno diduga berkontribusi pada kejatuhan kekaisaran.',
    92: 'Uranium sedikit radioaktif dengan waktu paruh panjang. Bahan bakar reaktor nuklir yang memasok ~10% listrik dunia.',
  };
  const identityFactsEN: Record<number, string> = {
    1: 'Lightest element. Hydrogen makes up ~75% of all ordinary (baryonic) matter in the universe.',
    2: 'First noble gas — chemically inert. Helium is the second most abundant element, formed in the Big Bang.',
    3: 'Lightest alkali metal. Lithium ions (Li+) are the charge carriers in lithium-ion batteries powering EVs and phones.',
    4: 'High stiffness-to-weight ratio. Beryllium is used in space telescope mirrors and X-ray detector windows.',
    5: 'Boron is used in glass fibers, heat-resistant ceramics, and as a neutron absorber in nuclear reactor control rods.',
    6: 'The backbone of all life. ~18% of your body mass is Carbon. Its 4 valence electrons enable near-infinite molecular structures.',
    7: '78% of air is N2 gas. Nitrogen is inert, but its compounds (proteins, DNA, ATP) are essential to all known life.',
    8: 'You survive only ~4 minutes without Oxygen. Highly electronegative — drives combustion and oxidation (rust).',
    9: 'Most electronegative element on the periodic table. Fluorine reacts with nearly everything, including noble gases and glass.',
    10: 'Second noble gas. Neon emits characteristic red-orange light when excited by electricity in a sealed tube.',
    11: 'Sodium ions (Na+) maintain cell osmotic pressure and carry nerve impulses via Na+/K+ pumps across membranes.',
    12: 'Magnesium (Mg2+) sits at the center of every chlorophyll molecule. Without it, plants cannot perform photosynthesis.',
    13: 'Most abundant metal in Earth\'s crust. Aluminum is lightweight, strong, and endlessly recyclable without quality loss.',
    14: 'Silicon\'s 4 valence electrons make it an ideal semiconductor — the foundation of all modern transistors and CPUs.',
    15: 'Phosphorus is in bone mineral (hydroxyapatite), the DNA backbone, and ATP — the universal energy currency of all cells.',
    16: 'Sulfur gives rotten eggs their smell (H2S). It forms disulfide bonds in proteins and is in amino acids cysteine and methionine.',
    17: 'Chlorine disinfects drinking water and swimming pools. Pure Cl2 gas is a highly toxic chemical warfare agent.',
    18: 'Argon fills incandescent bulbs and insulated windows. Most abundant noble gas in Earth\'s atmosphere (~0.93%).',
    19: 'Potassium ions (K+) regulate heartbeat and muscle contraction via the Na+/K+ pump. Low K+ = cramps and arrhythmia.',
    20: '99% of body calcium is in bones and teeth as hydroxyapatite. The remaining 1% is critical for muscle contraction and signaling.',
    26: 'Iron in hemoglobin cooperatively binds O2 and transports it to every cell. Iron deficiency causes anemia worldwide.',
    29: 'Copper has been smelted for ~10,000 years. Second only to silver in electrical conductivity.',
    47: 'Silver has the highest electrical conductivity and optical reflectivity (>99%) of all metals. Also a natural antimicrobial.',
    79: 'Gold is extraordinarily unreactive — it never corrodes. The gold atoms in jewelry were forged in a kilonova explosion.',
    82: 'Lead is the heaviest stable element. Roman lead plumbing (aqua plumbea) is suspected to have caused chronic poisoning in the empire.',
    92: 'Uranium is mildly radioactive (half-life: 4.5 billion years). It fuels nuclear fission reactors supplying ~10% of global electricity.',
  };
  const identityFacts = isEN ? identityFactsEN : identityFactsID;

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
    idName.textContent = isEN ? el.name : (el.nameId || el.name);
    idCat.textContent = isEN ? (cat?.nameEn || el.cat) : (cat?.nameId || el.cat);
    idFact.textContent = identityFacts[protonCount] || el.desc || (isEN ? `Element number ${protonCount}.` : `Elemen nomor ${protonCount}.`);
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

  // Hub content cards — delegate via data-route
  const hubIds = ['hub-phenomena', 'hub-composition', 'hub-explore', 'hub-history', 'hub-molecule'];
  hubIds.forEach(id => {
    const el = document.getElementById(id);
    el?.addEventListener('click', () => {
      const route = el.dataset.route;
      if (route) navigate(route);
    });
  });

  return () => cleanups.forEach(fn => fn());
}
