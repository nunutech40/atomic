import { phenomena, PHENOMENON_CATEGORIES } from '../data/phenomena';
import { phenomenonStories } from '../data/phenomenon-stories';
import type { StorySlide, HistoryEntry } from '../data/phenomenon-stories';
import { navigate } from '../core/router';

// ─────────────────────────────────────────────────────────────────────────────
// PHENOMENON STORY VIEWER
// Fullscreen storytelling experience per phenomenon
// ─────────────────────────────────────────────────────────────────────────────

export function renderPhenomenonStory(container: HTMLElement, id: string): () => void {
  const phenomenon = phenomena.find(p => p.id === id);
  const story = phenomenonStories.find(s => s.id === id);

  if (!phenomenon || !story) {
    container.innerHTML = `
      <div class="ps-not-found">
        <div class="ps-nf-icon">🔭</div>
        <div class="ps-nf-title">Fenomena tidak ditemukan</div>
        <button class="ps-back-btn" id="ps-back">← Kembali ke Fenomena</button>
      </div>`;
    container.querySelector('#ps-back')!.addEventListener('click', () => navigate('/phenomena'));
    return () => { };
  }

  const cat = PHENOMENON_CATEGORIES[phenomenon.category];
  const slides = story.slides;
  let currentSlide = 0;
  let isAnimating = false;

  // ── Render Shell ──────────────────────────────────────────────────────────
  container.innerHTML = `
    <div class="ps-shell" id="ps-shell">

      <!-- TOP BAR -->
      <div class="ps-topbar">
        <button class="ps-back-btn" id="ps-back">
          <span>←</span> Fenomena
        </button>
        <div class="ps-topbar-center">
          <span class="ps-topbar-icon">${phenomenon.icon}</span>
          <span class="ps-topbar-title">${phenomenon.title}</span>
          <span class="ps-cat-badge" style="color:${cat.color};background:${cat.bg}">${cat.label}</span>
        </div>
        <div class="ps-slide-counter">
          <span id="ps-slide-num">1</span><span class="ps-slide-sep">/</span><span>${slides.length}</span>
        </div>
      </div>

      <!-- PROGRESS BAR -->
      <div class="ps-progress-bar" id="ps-progress-bar">
        ${slides.map((_, i) => `<div class="ps-prog-seg" id="ps-seg-${i}"></div>`).join('')}
      </div>

      <!-- SLIDE AREA -->
      <div class="ps-slide-area" id="ps-slide-area">
        <div class="ps-slide-track" id="ps-slide-track">
          <!-- slides rendered by JS -->
        </div>
      </div>

      <!-- NAVIGATION -->
      <div class="ps-nav">
        <button class="ps-nav-btn ps-nav-prev" id="ps-prev" disabled>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15,18 9,12 15,6"/></svg>
          Sebelumnya
        </button>

        <div class="ps-dot-nav" id="ps-dot-nav">
          ${slides.map((_, i) => `<button class="ps-dot" data-slide="${i}" id="ps-dot-${i}"></button>`).join('')}
        </div>

        <button class="ps-nav-btn ps-nav-next" id="ps-next">
          Selanjutnya
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,6 15,12 9,18"/></svg>
        </button>
      </div>

    </div>
  `;

  const track = container.querySelector('#ps-slide-track') as HTMLElement;
  const prevBtn = container.querySelector('#ps-prev') as HTMLButtonElement;
  const nextBtn = container.querySelector('#ps-next') as HTMLButtonElement;
  const slideNum = container.querySelector('#ps-slide-num') as HTMLElement;

  // ── Build all slides ───────────────────────────────────────────────────────
  slides.forEach((slide, idx) => {
    const el = document.createElement('div');
    el.className = `ps-slide ps-slide--${slide.type}`;
    el.id = `ps-slide-${idx}`;
    el.dataset.anim = slide.animKey ?? '';
    el.innerHTML = buildSlideHTML(slide, idx, phenomenon.icon, cat.color);
    track.appendChild(el);
  });

  // ── Go to slide ───────────────────────────────────────────────────────────
  function goTo(index: number, direction: 'next' | 'prev' = 'next') {
    if (isAnimating || index < 0 || index >= slides.length) return;
    isAnimating = true;

    const outSlide = track.querySelector(`#ps-slide-${currentSlide}`) as HTMLElement;
    const inSlide = track.querySelector(`#ps-slide-${index}`) as HTMLElement;

    // Animate out
    outSlide.classList.add(direction === 'next' ? 'ps-slide--exit-left' : 'ps-slide--exit-right');

    setTimeout(() => {
      outSlide.classList.remove('ps-slide--active', 'ps-slide--exit-left', 'ps-slide--exit-right');
      inSlide.classList.add('ps-slide--active', direction === 'next' ? 'ps-slide--enter-right' : 'ps-slide--enter-left');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          inSlide.classList.remove('ps-slide--enter-right', 'ps-slide--enter-left');
          inSlide.classList.add('ps-slide--settled');
          triggerSlideAnimation(inSlide, slides[index]);
        });
      });

      setTimeout(() => {
        inSlide.classList.remove('ps-slide--settled');
        isAnimating = false;
      }, 500);
    }, 300);

    currentSlide = index;
    updateUI();
  }

  function triggerSlideAnimation(el: HTMLElement, slide: StorySlide) {
    if (!slide.animKey) return;
    el.classList.add(slide.animKey);
    // Trigger atom animations in this slide
    el.querySelectorAll('[data-anim-delay]').forEach((atom) => {
      const delay = (atom as HTMLElement).dataset.animDelay ?? '0';
      (atom as HTMLElement).style.animationDelay = delay + 'ms';
      (atom as HTMLElement).classList.add('ps-anim-ready');
    });
  }

  function updateUI() {
    slideNum.textContent = String(currentSlide + 1);

    // Progress bar segments
    slides.forEach((_, i) => {
      const seg = container.querySelector(`#ps-seg-${i}`) as HTMLElement;
      seg.classList.toggle('ps-prog-seg--done', i < currentSlide);
      seg.classList.toggle('ps-prog-seg--active', i === currentSlide);
    });

    // Dots
    slides.forEach((_, i) => {
      const dot = container.querySelector(`#ps-dot-${i}`) as HTMLElement;
      dot.classList.toggle('ps-dot--active', i === currentSlide);
    });

    // Buttons
    (prevBtn as HTMLButtonElement).disabled = currentSlide === 0;
    const isLast = currentSlide === slides.length - 1;
    nextBtn.innerHTML = isLast
      ? `<span>✓ Selesai</span>`
      : `Selanjutnya <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,6 15,12 9,18"/></svg>`;
    nextBtn.classList.toggle('ps-nav-btn--finish', isLast);
  }

  // ── Initial state ─────────────────────────────────────────────────────────
  const firstSlide = track.querySelector('#ps-slide-0') as HTMLElement;
  firstSlide.classList.add('ps-slide--active');
  triggerSlideAnimation(firstSlide, slides[0]);
  updateUI();

  // ── Events ────────────────────────────────────────────────────────────────
  prevBtn.addEventListener('click', () => goTo(currentSlide - 1, 'prev'));
  nextBtn.addEventListener('click', () => {
    if (currentSlide === slides.length - 1) navigate('/phenomena');
    else goTo(currentSlide + 1, 'next');
  });

  container.querySelector('#ps-back')!.addEventListener('click', () => navigate('/phenomena'));

  // Dot nav
  container.querySelector('#ps-dot-nav')!.addEventListener('click', (e) => {
    const dot = (e.target as HTMLElement).closest('[data-slide]') as HTMLElement | null;
    if (!dot) return;
    const idx = parseInt(dot.dataset.slide!);
    goTo(idx, idx > currentSlide ? 'next' : 'prev');
  });

  // Keyboard navigation
  function onKey(e: KeyboardEvent) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(currentSlide + 1, 'next');
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goTo(currentSlide - 1, 'prev');
  }
  document.addEventListener('keydown', onKey);

  // Touch/swipe
  let touchStartX = 0;
  container.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  container.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 60) {
      if (dx < 0) goTo(currentSlide + 1, 'next');
      else goTo(currentSlide - 1, 'prev');
    }
  });

  return () => {
    document.removeEventListener('keydown', onKey);
  };
}


// ─────────────────────────────────────────────────────────────────────────────
// SLIDE HTML BUILDERS
// ─────────────────────────────────────────────────────────────────────────────

function buildSlideHTML(slide: StorySlide, idx: number, phenomenonIcon: string, accentColor: string): string {
  switch (slide.type) {
    case 'hook': return buildHookSlide(slide, phenomenonIcon);
    case 'history': return buildHistorySlide(slide);
    case 'step': return buildStepSlide(slide, idx);
    case 'scale': return buildScaleSlide(slide);
    case 'impact': return buildImpactSlide(slide, accentColor);
    default: return '';
  }
}

function buildHookSlide(slide: StorySlide, icon: string): string {
  return `
    <div class="ps-hook">
      <div class="ps-hook-bg">
        <div class="ps-hook-particle p1" data-anim-delay="0">⬡</div>
        <div class="ps-hook-particle p2" data-anim-delay="200">⬡</div>
        <div class="ps-hook-particle p3" data-anim-delay="400">⬡</div>
        <div class="ps-hook-particle p4" data-anim-delay="600">○</div>
        <div class="ps-hook-particle p5" data-anim-delay="150">·</div>
        <div class="ps-hook-particle p6" data-anim-delay="350">⬡</div>
      </div>

      <div class="ps-hook-content">
        <div class="ps-hook-visual ${slide.animKey ?? ''}">${slide.visual ?? icon}</div>
        <div class="ps-slide-type-label">Fenomena</div>
        <h1 class="ps-hook-title">${slide.title}</h1>
        <p class="ps-hook-body">${slide.body}</p>
        ${slide.highlight ? `
          <div class="ps-highlight-chip">
            <span class="ps-highlight-bar"></span>
            ${slide.highlight}
          </div>` : ''}
        <div class="ps-hook-cta-hint">Geser → untuk memulai cerita</div>
      </div>
    </div>
  `;
}

function buildHistorySlide(slide: StorySlide): string {
  return `
    <div class="ps-history">
      <div class="ps-history-left">
        <div class="ps-slide-type-label">📜 Sejarah & Penemuan</div>
        <h2 class="ps-slide-title">${slide.title}</h2>
        <p class="ps-slide-body">${slide.body}</p>

        ${slide.quote ? `
          <div class="ps-quote">
            <div class="ps-quote-mark">"</div>
            <p class="ps-quote-text">${slide.quote}</p>
            <div class="ps-quote-author">— ${slide.quoteAuthor}</div>
          </div>
        ` : ''}
      </div>

      ${slide.history ? `
        <div class="ps-history-right">
          <div class="ps-timeline">
            ${slide.history.map((entry: HistoryEntry, i: number) => `
              <div class="ps-timeline-item" data-anim-delay="${i * 120}">
                <div class="ps-timeline-dot"></div>
                <div class="ps-timeline-content">
                  <div class="ps-timeline-year">${entry.year}</div>
                  <div class="ps-timeline-event">${entry.event}</div>
                  ${entry.person ? `<div class="ps-timeline-person">👤 ${entry.person}</div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function buildStepSlide(slide: StorySlide, idx: number): string {
  const animClass = slide.animKey ?? '';
  let atomAnimation = '';

  // Match animation class to specific atom animations
  if (animClass === 'anim-fission-step1') {
    atomAnimation = buildFissionStep1Anim();
  } else if (animClass === 'anim-fission-step2') {
    atomAnimation = buildFissionStep2Anim();
  } else if (animClass === 'anim-chain') {
    atomAnimation = buildChainReactionAnim();
  } else if (animClass === 'anim-bigbang') {
    atomAnimation = buildBigBangAnim();
  } else if (animClass === 'anim-stellar-fusion') {
    atomAnimation = buildStellarFusionAnim();
  } else if (animClass === 'anim-supernova') {
    atomAnimation = buildSupernovaAnim();
  } else if (animClass === 'anim-carbon-fusion') {
    atomAnimation = buildCarbonFusionAnim();
  } else if (animClass === 'anim-kilonova') {
    atomAnimation = buildKilonovaAnim();
  } else if (animClass === 'anim-fusion-compare') {
    atomAnimation = buildFusionCompareAnim();
  } else if (animClass === 'anim-proton-chain') {
    atomAnimation = buildProtonChainAnim();
  } else if (animClass === 'anim-dt-fusion') {
    atomAnimation = buildDTFusionAnim();
  } else if (animClass === 'anim-tokamak') {
    atomAnimation = buildTokamakAnim();
  } else if (animClass === 'anim-decay-types') {
    atomAnimation = buildDecayTypesAnim();
  } else if (animClass === 'anim-radiation-types') {
    atomAnimation = buildRadiationTypesAnim();
  } else if (animClass === 'anim-half-life') {
    atomAnimation = buildHalfLifeAnim();
  } else if (animClass === 'anim-radium-glow') {
    atomAnimation = buildRadiumGlowAnim();
  } else if (animClass === 'anim-chain-hook') {
    atomAnimation = buildChainHookAnim();
  } else if (animClass === 'anim-critical-mass') {
    atomAnimation = buildCriticalMassAnim();
  } else if (animClass === 'anim-control-rods') {
    atomAnimation = buildControlRodsAnim();
  } else if (animClass === 'anim-photo-hook') {
    atomAnimation = buildPhotoHookAnim();
  } else if (animClass === 'anim-photo-paradox') {
    atomAnimation = buildPhotoParadoxAnim();
  } else if (animClass === 'anim-photo-foton') {
    atomAnimation = buildPhotoFotonAnim();
  } else if (animClass === 'anim-photo-threshold') {
    atomAnimation = buildPhotoThresholdAnim();
  } else if (animClass === 'anim-tunnel-hook') {
    atomAnimation = buildTunnelHookAnim();
  } else if (animClass === 'anim-tunnel-wave') {
    atomAnimation = buildTunnelWaveAnim();
  } else if (animClass === 'anim-tunnel-thickness') {
    atomAnimation = buildTunnelThicknessAnim();
  } else if (animClass === 'anim-tunnel-sun') {
    atomAnimation = buildTunnelSunAnim();
  } else if (animClass === 'anim-super-hook') {
    atomAnimation = buildSuperHookAnim();
  } else if (animClass === 'anim-super-wave') {
    atomAnimation = buildSuperWaveAnim();
  } else if (animClass === 'anim-super-slit') {
    atomAnimation = buildSuperSlitAnim();
  } else if (animClass === 'anim-super-decoherence') {
    atomAnimation = buildSuperDecoherenceAnim();
  } else if (animClass === 'anim-anti-hook') {
    atomAnimation = buildAntiHookAnim();
  } else if (animClass === 'anim-anti-annihilation') {
    atomAnimation = buildAntiAnnihilationAnim();
  } else if (animClass === 'anim-anti-pet') {
    atomAnimation = buildAntiPetAnim();
  } else if (animClass === 'anim-anti-asymmetry') {
    atomAnimation = buildAntiAsymmetryAnim();
  } else {
    atomAnimation = `<div class="ps-step-visual-default">${slide.visual ?? '⚛️'}</div>`;
  }

  return `
    <div class="ps-step">
      <div class="ps-step-left">
        <div class="ps-slide-type-label">⚡ Proses — Step ${idx}</div>
        <h2 class="ps-slide-title">${slide.title}</h2>
        <p class="ps-slide-body">${slide.body}</p>
        ${slide.highlight ? `
          <div class="ps-highlight-box">
            <div class="ps-highlight-label">Reaksi</div>
            <code class="ps-highlight-formula">${slide.highlight}</code>
          </div>
        ` : ''}
      </div>
      <div class="ps-step-right">
        <div class="ps-atom-stage ${animClass}">
          ${atomAnimation}
        </div>
      </div>
    </div>
  `;
}

function buildScaleSlide(slide: StorySlide): string {
  return `
    <div class="ps-scale">
      <div class="ps-slide-type-label">📏 Skala & Perbandingan</div>
      <div class="ps-scale-visual">${slide.visual ?? '🌌'}</div>
      <h2 class="ps-slide-title">${slide.title}</h2>
      <p class="ps-slide-body">${slide.body}</p>
      ${slide.highlight ? `
        <div class="ps-scale-callout">
          ${slide.highlight}
        </div>
      ` : ''}
    </div>
  `;
}

function buildImpactSlide(slide: StorySlide, accentColor: string): string {
  return `
    <div class="ps-impact">
      <div class="ps-impact-left">
        <div class="ps-slide-type-label">🌍 Dampak & Warisan</div>
        <div class="ps-impact-visual">${slide.visual ?? '🌏'}</div>
        <h2 class="ps-slide-title">${slide.title}</h2>
        <p class="ps-slide-body">${slide.body}</p>
        ${slide.highlight ? `
          <div class="ps-impact-highlight" style="border-color:${accentColor}">
            ${slide.highlight}
          </div>
        ` : ''}
      </div>
      ${slide.history ? `
        <div class="ps-impact-right">
          <div class="ps-timeline ps-timeline--compact">
            ${slide.history.map((entry: HistoryEntry, i: number) => `
              <div class="ps-timeline-item" data-anim-delay="${i * 150}">
                <div class="ps-timeline-dot" style="border-color:${accentColor}"></div>
                <div class="ps-timeline-content">
                  <div class="ps-timeline-year">${entry.year}</div>
                  <div class="ps-timeline-event">${entry.event}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}


// ─────────────────────────────────────────────────────────────────────────────
// ATOM ANIMATION BUILDERS (pure CSS + HTML)
// ─────────────────────────────────────────────────────────────────────────────

function buildFissionStep1Anim(): string {
  return `
    <div class="ps-anim-fission1">
      <div class="ps-nucleus ps-nucleus--uranium">
        <span class="ps-nuc-label">U-235</span>
        <div class="ps-nuc-protons">
          ${Array.from({ length: 12 }, (_, i) => `<div class="ps-proton" style="--i:${i}"></div>`).join('')}
        </div>
      </div>
      <div class="ps-neutron ps-neutron--incoming">
        <span>n</span>
      </div>
      <div class="ps-anim-arrow">→</div>
      <div class="ps-nucleus ps-nucleus--unstable">
        <span class="ps-nuc-label">U-236*</span>
        <div class="ps-wobble-ring"></div>
      </div>
    </div>
  `;
}

function buildFissionStep2Anim(): string {
  return `
    <div class="ps-anim-fission2">
      <div class="ps-nucleus ps-nucleus--splitting">
        <span class="ps-nuc-label">U-236*</span>
      </div>
      <div class="ps-fission-products">
        <div class="ps-nucleus ps-nucleus--kr">Kr-92</div>
        <div class="ps-neutrons-out">
          <span class="ps-neutron-out n1">n</span>
          <span class="ps-neutron-out n2">n</span>
          <span class="ps-neutron-out n3">n</span>
        </div>
        <div class="ps-nucleus ps-nucleus--ba">Ba-141</div>
      </div>
      <div class="ps-energy-burst">⚡</div>
    </div>
  `;
}

function buildChainReactionAnim(): string {
  return `
    <div class="ps-anim-chain">
      <div class="ps-chain-row row0">
        <div class="ps-chain-atom ca-gen0">U</div>
      </div>
      <div class="ps-chain-row row1">
        <div class="ps-chain-atom ca-gen1">U</div>
        <div class="ps-chain-atom ca-gen1">U</div>
      </div>
      <div class="ps-chain-row row2">
        <div class="ps-chain-atom ca-gen2">U</div>
        <div class="ps-chain-atom ca-gen2">U</div>
        <div class="ps-chain-atom ca-gen2">U</div>
        <div class="ps-chain-atom ca-gen2">U</div>
      </div>
      <div class="ps-chain-row row3">
        <div class="ps-chain-atom ca-gen3">U</div>
        <div class="ps-chain-atom ca-gen3">U</div>
        <div class="ps-chain-atom ca-gen3">U</div>
        <div class="ps-chain-atom ca-gen3">U</div>
        <div class="ps-chain-atom ca-gen3">U</div>
        <div class="ps-chain-atom ca-gen3">U</div>
        <div class="ps-chain-atom ca-gen3">U</div>
        <div class="ps-chain-atom ca-gen3">U</div>
      </div>
      <div class="ps-chain-label">1 → 2 → 4 → 8 → 16 → ...</div>
    </div>
  `;
}

function buildBigBangAnim(): string {
  return `
    <div class="ps-anim-bigbang">
      <div class="ps-bb-center">
        <div class="ps-bb-burst">💫</div>
        <div class="ps-bb-ring r1"></div>
        <div class="ps-bb-ring r2"></div>
        <div class="ps-bb-ring r3"></div>
      </div>
      <div class="ps-bb-particles">
        <div class="ps-bb-particle bb-h bb-h1">H</div>
        <div class="ps-bb-particle bb-h bb-h2">H</div>
        <div class="ps-bb-particle bb-h bb-h3">H</div>
        <div class="ps-bb-particle bb-h bb-h4">H</div>
        <div class="ps-bb-particle bb-he bb-he1">He</div>
        <div class="ps-bb-particle bb-he bb-he2">He</div>
        <div class="ps-bb-label">75% H · 24% He · 1% Li</div>
      </div>
    </div>
  `;
}

function buildStellarFusionAnim(): string {
  return `
    <div class="ps-anim-stellar">
      <div class="ps-stellar-core">
        <div class="ps-stellar-glow"></div>
        <div class="ps-stellar-label">Inti Bintang<br><small>10⁷ K</small></div>
      </div>
      <div class="ps-fusion-equation">
        <span class="ps-feq-atom h">H</span>
        <span class="ps-feq-atom h">H</span>
        <span class="ps-feq-atom h">H</span>
        <span class="ps-feq-atom h">H</span>
        <span class="ps-feq-arrow">→</span>
        <span class="ps-feq-atom he">He</span>
        <span class="ps-feq-plus">+ ⚡</span>
      </div>
    </div>
  `;
}

function buildCarbonFusionAnim(): string {
  return `
    <div class="ps-anim-carbon">
      <div class="ps-carbon-eq">
        <div class="ps-ceq-row">
          <span class="ps-feq-atom he">He</span>
          <span class="ps-feq-op">+</span>
          <span class="ps-feq-atom he">He</span>
          <span class="ps-feq-op">+</span>
          <span class="ps-feq-atom he">He</span>
          <span class="ps-feq-arrow">→</span>
          <span class="ps-feq-atom c">C</span>
          <span class="ps-feq-plus">⚡</span>
        </div>
        <div class="ps-ceq-row">
          <span class="ps-feq-atom c">C</span>
          <span class="ps-feq-op">+</span>
          <span class="ps-feq-atom he">He</span>
          <span class="ps-feq-arrow">→</span>
          <span class="ps-feq-atom o">O</span>
          <span class="ps-feq-plus">⚡</span>
        </div>
      </div>
    </div>
  `;
}

function buildSupernovaAnim(): string {
  return `
    <div class="ps-anim-supernova">
      <div class="ps-sn-core">
        <div class="ps-sn-label">Fe Core</div>
      </div>
      <div class="ps-sn-rings">
        <div class="ps-sn-ring sn-r1">Si/S</div>
        <div class="ps-sn-ring sn-r2">O/Ne</div>
        <div class="ps-sn-ring sn-r3">C</div>
        <div class="ps-sn-ring sn-r4">He</div>
        <div class="ps-sn-ring sn-r5">H</div>
      </div>
      <div class="ps-sn-burst-label">→ COLLAPSE → SUPERNOVA 💥</div>
    </div>
  `;
}

function buildKilonovaAnim(): string {
  return `
    <div class="ps-anim-kilonova">
      <div class="ps-kn-ns ns1">
        <div class="ps-kn-ns-label">NS</div>
        <div class="ps-kn-orbit-line"></div>
      </div>
      <div class="ps-kn-ns ns2">
        <div class="ps-kn-ns-label">NS</div>
      </div>
      <div class="ps-kn-collision">
        <div class="ps-kn-burst">💥</div>
        <div class="ps-kn-elements">
          <span>Au</span><span>Pt</span><span>U</span>
        </div>
      </div>
    </div>
  `;
}

function buildFusionCompareAnim(): string {
  return `
    <div class="ps-anim-fusion-compare">
      <div class="ps-fc-row">
        <div class="ps-fc-label">Bensin</div>
        <div class="ps-fc-bar">
          <div class="ps-fc-fill" style="width:2%;background:#94a3b8"></div>
        </div>
        <div class="ps-fc-val">0.046<br><small>MJ/g</small></div>
      </div>
      <div class="ps-fc-row">
        <div class="ps-fc-label">Fisi U-235</div>
        <div class="ps-fc-bar">
          <div class="ps-fc-fill" style="width:24%;background:#ef4444"></div>
        </div>
        <div class="ps-fc-val">82<br><small>MJ/g</small></div>
      </div>
      <div class="ps-fc-row">
        <div class="ps-fc-label">Fusi D-T</div>
        <div class="ps-fc-bar">
          <div class="ps-fc-fill" style="width:100%;background:linear-gradient(90deg,#f59e0b,#ffd700)"></div>
        </div>
        <div class="ps-fc-val">339<br><small>MJ/g</small></div>
      </div>
      <div class="ps-fc-note">🌟 Fusi = 4× lebih efisien dari fisi · 7000× lebih efisien dari bensin</div>
    </div>
  `;
}

function buildProtonChainAnim(): string {
  return `
    <div class="ps-anim-pchain">
      <div class="ps-pchain-steps">
        <div class="ps-pchain-step">
          <div class="ps-pchain-atoms"><span class="ps-feq-atom h">p</span><span class="ps-feq-atom h">p</span></div>
          <div class="ps-pchain-arrow">↓</div>
          <div class="ps-pchain-result"><span class="ps-feq-atom" style="background:#6366f1;color:white">D</span><span class="ps-pchain-by">e⁺ + ν</span></div>
        </div>
        <div class="ps-pchain-step">
          <div class="ps-pchain-atoms"><span class="ps-feq-atom" style="background:#6366f1;color:white">D</span><span class="ps-feq-atom h">p</span></div>
          <div class="ps-pchain-arrow">↓</div>
          <div class="ps-pchain-result"><span class="ps-feq-atom" style="background:#8b5cf6;color:white">He³</span><span class="ps-pchain-by">γ</span></div>
        </div>
        <div class="ps-pchain-step">
          <div class="ps-pchain-atoms"><span class="ps-feq-atom" style="background:#8b5cf6;color:white">He³</span><span class="ps-feq-atom" style="background:#8b5cf6;color:white">He³</span></div>
          <div class="ps-pchain-arrow">↓</div>
          <div class="ps-pchain-result"><span class="ps-feq-atom he">He⁴</span><span class="ps-pchain-by">+ 2p + ⚡</span></div>
        </div>
      </div>
      <div class="ps-fc-note">☀️ 1 dari 100 triliun tabrakan berhasil — berkat quantum tunneling</div>
    </div>
  `;
}

function buildDTFusionAnim(): string {
  return `
    <div class="ps-anim-dtfusion">
      <div class="ps-dt-equation">
        <div class="ps-dt-reactants">
          <div class="ps-dt-atom dt-d">
            <div class="ps-dt-label">D</div>
            <div class="ps-dt-sub">Deuterium</div>
          </div>
          <div class="ps-dt-plus">+</div>
          <div class="ps-dt-atom dt-t">
            <div class="ps-dt-label">T</div>
            <div class="ps-dt-sub">Tritium</div>
          </div>
        </div>
        <div class="ps-dt-arrow">→</div>
        <div class="ps-dt-products">
          <div class="ps-dt-atom dt-he">
            <div class="ps-dt-label">He⁴</div>
            <div class="ps-dt-sub">3.5 MeV</div>
          </div>
          <div class="ps-dt-plus">+</div>
          <div class="ps-dt-atom dt-n">
            <div class="ps-dt-label">n</div>
            <div class="ps-dt-sub">14.1 MeV</div>
          </div>
        </div>
      </div>
      <div class="ps-dt-temp">🌡️ Dibutuhkan: 150 juta °C — 10× lebih panas dari inti matahari</div>
    </div>
  `;
}

function buildTokamakAnim(): string {
  return `
    <div class="ps-anim-tokamak">
      <div class="ps-tokamak-wrap">
        <div class="ps-tokamak-donut">
          <div class="ps-tokamak-inner-label">Plasma<br><small>150M°C</small></div>
          <div class="ps-tokamak-plasma-ring"></div>
        </div>
        <div class="ps-tokamak-specs">
          <div class="ps-tkspec"><span class="ps-tkspec-n">150M°C</span><span class="ps-tkspec-l">Suhu Plasma</span></div>
          <div class="ps-tkspec"><span class="ps-tkspec-n">13 Tesla</span><span class="ps-tkspec-l">Medan Magnet</span></div>
          <div class="ps-tkspec"><span class="ps-tkspec-n">10⁻⁶ Pa</span><span class="ps-tkspec-l">Vakum</span></div>
        </div>
      </div>
    </div>
  `;
}

function buildDecayTypesAnim(): string {
  return `
    <div class="ps-anim-decay">
      <div class="ps-decay-nucleus">
        <div class="ps-dec-label">Inti Tidak Stabil</div>
        <div class="ps-dec-particles">
          ${Array.from({ length: 8 }, (_, i) => `<div class="ps-dec-p" style="--i:${i}"></div>`).join('')}
        </div>
      </div>
      <div class="ps-decay-arrows">
        <div class="ps-decay-row da-alpha">
          <div class="ps-da-arrow">α →</div>
          <div class="ps-da-label">Alfa: 2p + 2n (He-4)</div>
          <div class="ps-da-range">dihentikan kertas</div>
        </div>
        <div class="ps-decay-row da-beta">
          <div class="ps-da-arrow">β →</div>
          <div class="ps-da-label">Beta: elektron (e⁻)</div>
          <div class="ps-da-range">dihentikan aluminium</div>
        </div>
        <div class="ps-decay-row da-gamma">
          <div class="ps-da-arrow">γ →</div>
          <div class="ps-da-label">Gamma: energi (hν)</div>
          <div class="ps-da-range">perlu timbal tebal</div>
        </div>
      </div>
    </div>
  `;
}

function buildRadiationTypesAnim(): string {
  return `
    <div class="ps-anim-radtypes">
      <div class="ps-rt-source">☢️ Sumber</div>
      <div class="ps-rt-rows">
        <div class="ps-rt-row">
          <div class="ps-rt-beam rt-alpha">α α α →</div>
          <div class="ps-rt-barrier rt-paper">📄 Kertas</div>
          <div class="ps-rt-result rt-stopped">✗ Berhenti</div>
        </div>
        <div class="ps-rt-row">
          <div class="ps-rt-beam rt-beta">β β β β →</div>
          <div class="ps-rt-barrier rt-alum">🔩 Aluminium</div>
          <div class="ps-rt-result rt-stopped">✗ Berhenti</div>
        </div>
        <div class="ps-rt-row">
          <div class="ps-rt-beam rt-gamma">γ γ γ γ γ →</div>
          <div class="ps-rt-barrier rt-lead">⬛ Timbal tebal</div>
          <div class="ps-rt-result rt-weak">~ Melemah</div>
        </div>
      </div>
    </div>
  `;
}

function buildHalfLifeAnim(): string {
  return `
    <div class="ps-anim-halflife">
      <div class="ps-hl-title">Waktu Paruh — Setiap T½, separuh atom meluruh</div>
      <div class="ps-hl-bars">
        <div class="ps-hl-bar-row">
          <div class="ps-hl-label">t = 0</div>
          <div class="ps-hl-atoms">
            ${Array.from({ length: 8 }, (_, i) => `<div class="ps-hl-atom active" style="--delay:${i * 80}ms"></div>`).join('')}
          </div>
          <div class="ps-hl-count">N = 8</div>
        </div>
        <div class="ps-hl-bar-row">
          <div class="ps-hl-label">1 × T½</div>
          <div class="ps-hl-atoms">
            ${Array.from({ length: 4 }, (_, i) => `<div class="ps-hl-atom active" style="--delay:${i * 80}ms"></div>`).join('')}${Array.from({ length: 4 }, (_, i) => `<div class="ps-hl-atom decayed" style="--delay:${(i + 4) * 80}ms"></div>`).join('')}
          </div>
          <div class="ps-hl-count">N = 4</div>
        </div>
        <div class="ps-hl-bar-row">
          <div class="ps-hl-label">2 × T½</div>
          <div class="ps-hl-atoms">
            ${Array.from({ length: 2 }, (_, i) => `<div class="ps-hl-atom active" style="--delay:${i * 80}ms"></div>`).join('')}${Array.from({ length: 6 }, (_, i) => `<div class="ps-hl-atom decayed" style="--delay:${(i + 2) * 80}ms"></div>`).join('')}
          </div>
          <div class="ps-hl-count">N = 2</div>
        </div>
      </div>
      <div class="ps-hl-note">Ra-226: T½ = 1.600 tahun → buku Curie masih radioaktif hingga tahun ~3600</div>
    </div>
  `;
}

function buildPhotoHookAnim(): string {
  return `
    <div class="ps-anim-photo-hook">
      <div class="ps-ph-bulb">
        <div class="ps-ph-bulb-icon">💡</div>
        <div class="ps-ph-glow"></div>
        ${Array.from({ length: 8 }, (_, i) => `<div class="ps-ph-ray" style="--a:${i * 45}deg;--d:${i * 100}ms"></div>`).join('')}
      </div>
      <div class="ps-ph-label">Efek Fotolistrik · E = h×f</div>
    </div>
  `;
}

function buildPhotoParadoxAnim(): string {
  return `
    <div class="ps-anim-photo-paradox">
      <div class="ps-pp-pair">
        <div class="ps-pp-case pp-red">
          <div class="ps-pp-light">🔴 Cahaya Merah (terang)</div>
          <div class="ps-pp-beam beam-red">
            ${Array.from({ length: 5 }, () => `<div class="ps-pp-photon ph-red">λ</div>`).join('')}
          </div>
          <div class="ps-pp-metal">Fe</div>
          <div class="ps-pp-result pp-fail">✗ Tidak ada elektron</div>
        </div>
        <div class="ps-pp-case pp-violet">
          <div class="ps-pp-light">🟣 Cahaya Ungu (redup)</div>
          <div class="ps-pp-beam beam-violet">
            <div class="ps-pp-photon ph-violet">λ</div>
          </div>
          <div class="ps-pp-metal">Fe</div>
          <div class="ps-pp-result pp-success">✓ Elektron terlepas!</div>
        </div>
      </div>
    </div>
  `;
}

function buildPhotoFotonAnim(): string {
  return `
    <div class="ps-anim-photo-foton">
      <div class="ps-pf-equation">
        <div class="ps-pf-foton">
          <div class="ps-pf-wave">🌟</div>
          <div class="ps-pf-label">Foton\nE = h×f</div>
        </div>
        <div class="ps-pf-arrow">→</div>
        <div class="ps-pf-metal">
          <div class="ps-pf-lattice">
            ${Array.from({ length: 4 }, (_, i) => `<div class="ps-pf-atom pf-a${i}"></div>`).join('')}
          </div>
          <div class="ps-pf-electron pf-out">⚪ e⁻</div>
        </div>
        <div class="ps-pf-energy">+ Energi kinetik</div>
      </div>
      <div class="ps-pf-formula">E_foton = Φ (fungsi kerja) + E_kinetic</div>
    </div>
  `;
}

function buildPhotoThresholdAnim(): string {
  const metals = [
    { name: 'Cs', ev: 2.1, color: '#fbbf24', bar: 25 },
    { name: 'Na', ev: 2.3, color: '#f97316', bar: 28 },
    { name: 'Al', ev: 4.1, color: '#94a3b8', bar: 50 },
    { name: 'Pt', ev: 5.65, color: '#e2e8f0', bar: 70 },
  ];
  return `
    <div class="ps-anim-photo-threshold">
      <div class="ps-pt-title">Fungsi Kerja (eV) — Energi minimum untuk melepas elektron</div>
      <div class="ps-pt-bars">
        ${metals.map(m => `
          <div class="ps-pt-row">
            <div class="ps-pt-name" style="color:${m.color}">${m.name}</div>
            <div class="ps-pt-bar">
              <div class="ps-pt-fill" style="width:${m.bar}%;background:${m.color}"></div>
            </div>
            <div class="ps-pt-val">${m.ev} eV</div>
          </div>
        `).join('')}
      </div>
      <div class="ps-pt-note">Foton ungu (2.8 eV) bisa melepas Cs dan Na · tidak bisa Pt</div>
    </div>
  `;
}

function buildChainHookAnim(): string {
  return `
    <div class="ps-anim-chain-hook">
      <div class="ps-ch-pile">
        ${Array.from({ length: 5 }, (_, row) =>
    `<div class="ps-ch-row" style="--row:${row}">${Array.from({ length: 5 - row }, (_, col) =>
      `<div class="ps-ch-block" style="--i:${row * 5 + col}">${(row + col) % 3 === 0 ? 'U' : 'C'}</div>`
    ).join('')}</div>`
  ).join('')}
        <div class="ps-ch-glow"></div>
      </div>
      <div class="ps-ch-label">Chicago Pile-1 · 49 ton Uranium · 385 ton Grafit</div>
    </div>
  `;
}

function buildCriticalMassAnim(): string {
  return `
    <div class="ps-anim-critmass">
      <div class="ps-cm-pair">
        <div class="ps-cm-sphere sub">
          <div class="ps-cm-label">Sub-kritis</div>
          <div class="ps-cm-neutrons">
            ${Array.from({ length: 6 }, (_, i) => `<div class="ps-cm-n cm-escape" style="--i:${i}">n</div>`).join('')}
          </div>
          <div class="ps-cm-desc">Neutron kabur → reaksi mati</div>
        </div>
        <div class="ps-cm-sphere super">
          <div class="ps-cm-label">Super-kritis</div>
          <div class="ps-cm-neutrons">
            ${Array.from({ length: 6 }, (_, i) => `<div class="ps-cm-n cm-hit" style="--i:${i}">n</div>`).join('')}
          </div>
          <div class="ps-cm-desc">Neutron mengenai → eksponensial</div>
        </div>
      </div>
      <div class="ps-cm-note">U-235: massa kritis = 52 kg · Pu-239: 10 kg</div>
    </div>
  `;
}

function buildControlRodsAnim(): string {
  return `
    <div class="ps-anim-rods">
      <div class="ps-rods-reactor">
        <div class="ps-rods-core">
          <div class="ps-rods-fuel">⬛ Grafit + Uranium</div>
          <div class="ps-rods-neutrons">
            ${Array.from({ length: 5 }, (_, i) => `<div class="ps-rn" style="--i:${i}">n</div>`).join('')}
          </div>
        </div>
        <div class="ps-rods-bars">
          <div class="ps-rod" style="--depth:30%"><div class="ps-rod-body">Cd</div></div>
          <div class="ps-rod" style="--depth:30%"><div class="ps-rod-body">Cd</div></div>
          <div class="ps-rod" style="--depth:30%"><div class="ps-rod-body">Cd</div></div>
        </div>
      </div>
      <div class="ps-rods-legend">
        <div class="ps-rl-item"><span class="ps-rl-dot green"></span> Rod ditarik → reaksi aktif</div>
        <div class="ps-rl-item"><span class="ps-rl-dot red"></span> Rod masuk → reaksi berhenti</div>
      </div>
    </div>
  `;
}

function buildRadiumGlowAnim(): string {
  return `
    <div class="ps-anim-radium">
      <div class="ps-radium-scene">
        <div class="ps-radium-book">
          <div class="ps-radium-book-inner">📖</div>
          <div class="ps-radium-glow-effect"></div>
          ${Array.from({ length: 8 }, (_, i) => `<div class="ps-radium-ray" style="--angle:${i * 45}deg;--delay:${i * 150}ms"></div>`).join('')}
        </div>
        <div class="ps-radium-lead-box">⬛ Kotak Timbal</div>
      </div>
      <div class="ps-radium-caption">📕 Buku catatan Marie Curie — masih memancarkan radiasi Ra-226 sejak 1898</div>
    </div>
  `;
}

function buildTunnelHookAnim(): string {
  return `
    <div class="ps-anim-tunnel-hook">
      <div class="ps-th-scene">
        <div class="ps-th-particle">e⁻</div>
        <div class="ps-th-wall">
          <div class="ps-th-wall-label">Penghalang</div>
          <div class="ps-th-wall-body"></div>
        </div>
        <div class="ps-th-other-side">
          <div class="ps-th-ghost">e⁻</div>
          <div class="ps-th-emerge-label">Muncul di sini!</div>
        </div>
      </div>
      <div class="ps-th-label">Klasik: mustahil · Kuantum: bisa, tapi kecil peluangnya ✓</div>
    </div>
  `;
}

function buildTunnelWaveAnim(): string {
  return `
    <div class="ps-anim-tunnel-wave">
      <div class="ps-tw-container">
        <div class="ps-tw-region tw-left">
          <div class="ps-tw-label">Gelombang masuk</div>
          <div class="ps-tw-wave tw-incoming">
            ${Array.from({ length: 6 }, (_, i) => `<div class="ps-tw-bar" style="--i:${i}"></div>`).join('')}
          </div>
        </div>
        <div class="ps-tw-barrier">
          <div class="ps-tw-bar-label">Φ</div>
          <div class="ps-tw-bar-sub">V−E</div>
        </div>
        <div class="ps-tw-region tw-right">
          <div class="ps-tw-label">Bocor (lemah)</div>
          <div class="ps-tw-wave tw-transmitted">
            ${Array.from({ length: 4 }, (_, i) => `<div class="ps-tw-bar tw-small" style="--i:${i}"></div>`).join('')}
          </div>
        </div>
      </div>
      <div class="ps-tw-formula">ψ(x) = A·e^(−κx) di dalam penghalang</div>
    </div>
  `;
}

function buildTunnelThicknessAnim(): string {
  const barriers = [
    { d: '1 Å', prob: '10⁻¹', bar: 85, color: '#22c55e' },
    { d: '2 Å', prob: '10⁻²', bar: 55, color: '#f59e0b' },
    { d: '3 Å', prob: '10⁻³', bar: 30, color: '#ef4444' },
    { d: '5 Å', prob: '10⁻⁵', bar: 10, color: '#7c3aed' },
  ];
  return `
    <div class="ps-anim-tunnel-thick">
      <div class="ps-tt-title">Peluang Tembus vs Ketebalan Dinding</div>
      <div class="ps-tt-bars">
        ${barriers.map(b => `
          <div class="ps-tt-row">
            <div class="ps-tt-d" style="color:${b.color}">${b.d}</div>
            <div class="ps-tt-bar">
              <div class="ps-tt-fill" style="width:${b.bar}%;background:${b.color}"></div>
            </div>
            <div class="ps-tt-prob">${b.prob}</div>
          </div>
        `).join('')}
      </div>
      <div class="ps-tt-note">Tambah 1Å tebal → peluang turun 10 kali</div>
    </div>
  `;
}

function buildTunnelSunAnim(): string {
  return `
    <div class="ps-anim-tunnel-sun">
      <div class="ps-ts-diagram">
        <div class="ps-ts-proton p1">
          <div class="ps-ts-p-label">p⁺</div>
          <div class="ps-ts-p-energy">1.3 keV</div>
        </div>
        <div class="ps-ts-barrier-wrap">
          <div class="ps-ts-barrier-peak">
            <span class="ps-ts-peak-val">550 keV</span>
            <span class="ps-ts-peak-label">Tembok Coulomb</span>
          </div>
          <div class="ps-ts-tunnel-arrow">⇢ tembus lewat terowongan!</div>
        </div>
        <div class="ps-ts-proton p2">
          <div class="ps-ts-p-label">p⁺</div>
          <div class="ps-ts-p-energy">berfusi!</div>
        </div>
      </div>
      <div class="ps-ts-result">☀️ 10⁵⁷ proton × peluang kecil = cukup → 3.8×10²⁶ W</div>
    </div>
  `;
}

function buildSuperHookAnim(): string {
  return `
    <div class="ps-anim-super-hook">
      <div class="ps-sh-box">
        <div class="ps-sh-box-label">Kotak Schrödinger</div>
        <div class="ps-sh-inside">
          <div class="ps-sh-cat alive">😸 Hidup</div>
          <div class="ps-sh-slash">/</div>
          <div class="ps-sh-cat dead">🐱 Mati</div>
        </div>
        <div class="ps-sh-question">?</div>
      </div>
      <div class="ps-sh-label">Sebelum dibuka: keduanya nyata · Sesudah dibuka: salah satu</div>
    </div>
  `;
}

function buildSuperWaveAnim(): string {
  return `
    <div class="ps-anim-super-wave">
      <div class="ps-sw-electron">
        <div class="ps-sw-states">
          <div class="ps-sw-state up">↑ spin atas</div>
          <div class="ps-sw-plus">+</div>
          <div class="ps-sw-state down">↓ spin bawah</div>
        </div>
        <div class="ps-sw-brace">⎫ sekaligus</div>
      </div>
      <div class="ps-sw-arrow">⇩ diukur</div>
      <div class="ps-sw-result">
        <div class="ps-sw-collapsed">↑ atau ↓ (acak, tidak bisa diprediksi)</div>
      </div>
      <div class="ps-sw-formula">|ψ⟩ = α|↑⟩ + β|↓⟩</div>
    </div>
  `;
}

function buildSuperSlitAnim(): string {
  return `
    <div class="ps-anim-super-slit">
      <div class="ps-ss-pair">
        <div class="ps-ss-case ss-nodect">
          <div class="ps-ss-title">Tanpa detektor</div>
          <div class="ps-ss-wall">
            <div class="ps-ss-slit"></div>
            <div class="ps-ss-slit"></div>
          </div>
          <div class="ps-ss-screen">
            ${Array.from({ length: 7 }, (_, i) => `<div class="ps-ss-band" style="--i:${i};opacity:${[0.2, 0.5, 0.8, 1, 0.8, 0.5, 0.2][i]}"></div>`).join('')}
          </div>
          <div class="ps-ss-label ss-wave">Pola gelombang ✓</div>
        </div>
        <div class="ps-ss-case ss-dect">
          <div class="ps-ss-title">Dengan detektor</div>
          <div class="ps-ss-wall">
            <div class="ps-ss-slit"></div>
            <div class="ps-ss-slit"></div>
          </div>
          <div class="ps-ss-screen">
            <div class="ps-ss-band particle-band" style="--i:2;opacity:0.9"></div>
            <div class="ps-ss-band particle-band" style="--i:4;opacity:0.9"></div>
          </div>
          <div class="ps-ss-label ss-particle">Pola partikel !</div>
        </div>
      </div>
    </div>
  `;
}

function buildSuperDecoherenceAnim(): string {
  return `
    <div class="ps-anim-super-deco">
      <div class="ps-sd-scene">
        <div class="ps-sd-atom">
          <div class="ps-sd-core"></div>
          ${Array.from({ length: 6 }, (_, i) => `<div class="ps-sd-env-particle" style="--i:${i}"></div>`).join('')}
        </div>
        <div class="ps-sd-info">
          <div class="ps-sd-row">
            <span class="ps-sd-dot isolated"></span>
            <span>Terisolasi: superposisi terjaga</span>
          </div>
          <div class="ps-sd-row">
            <span class="ps-sd-dot disturbed"></span>
            <span>Terpapar lingkungan: runtuh dalam 10⁻¹³ detik</span>
          </div>
        </div>
      </div>
      <div class="ps-sd-label">Kucing: 10²³ atom interaksi → dekoherensi instan</div>
    </div>
  `;
}

function buildAntiHookAnim(): string {
  return `
    <div class="ps-anim-anti-hook">
      <div class="ps-ah-scene">
        <div class="ps-ah-particle matter">
          <div class="ps-ah-label">e⁻</div>
          <div class="ps-ah-sublabel">Elektron</div>
        </div>
        <div class="ps-ah-center">
          <div class="ps-ah-explosion">💥</div>
          <div class="ps-ah-energy">γ + γ</div>
        </div>
        <div class="ps-ah-particle antimatter">
          <div class="ps-ah-label">e⁺</div>
          <div class="ps-ah-sublabel">Positron</div>
        </div>
      </div>
      <div class="ps-ah-result">100% massa → energi · E = mc² · paling efisien di alam semesta</div>
    </div>
  `;
}

function buildAntiAnnihilationAnim(): string {
  return `
    <div class="ps-anim-anti-annihilation">
      <div class="ps-aa-row">
        <div class="ps-aa-particle m">
          <div class="ps-aa-icon">p⁺</div>
          <div class="ps-aa-name">Proton</div>
          <div class="ps-aa-charge">muatan +</div>
        </div>
        <div class="ps-aa-arrow">&#8660;</div>
        <div class="ps-aa-particle am">
          <div class="ps-aa-icon">p̅</div>
          <div class="ps-aa-name">Antiproton</div>
          <div class="ps-aa-charge">muatan −</div>
        </div>
      </div>
      <div class="ps-aa-row">
        <div class="ps-aa-particle m">
          <div class="ps-aa-icon">e⁻</div>
          <div class="ps-aa-name">Elektron</div>
          <div class="ps-aa-charge">muatan −</div>
        </div>
        <div class="ps-aa-arrow">&#8660;</div>
        <div class="ps-aa-particle am">
          <div class="ps-aa-icon">e⁺</div>
          <div class="ps-aa-name">Positron</div>
          <div class="ps-aa-charge">muatan +</div>
        </div>
      </div>
      <div class="ps-aa-note">Massa identik · Muatan berlawanan · Bertemu → musnah 100%</div>
    </div>
  `;
}

function buildAntiPetAnim(): string {
  return `
    <div class="ps-anim-anti-pet">
      <div class="ps-ap-diagram">
        <div class="ps-ap-body">
          <div class="ps-ap-body-icon">🫀</div>
          <div class="ps-ap-spot">
            <div class="ps-ap-spot-dot"></div>
            <div class="ps-ap-gamma left">γ→</div>
            <div class="ps-ap-gamma right">←γ</div>
          </div>
        </div>
        <div class="ps-ap-detectors">
          <div class="ps-ap-det left-det">📡</div>
          <div class="ps-ap-det right-det">📡</div>
        </div>
      </div>
      <div class="ps-ap-flow">
        <span class="ps-ap-step">Suntik positron</span>
        <span>→</span>
        <span class="ps-ap-step">Anihilasi di tumor</span>
        <span>→</span>
        <span class="ps-ap-step">Dua γ ke detektor</span>
        <span>→</span>
        <span class="ps-ap-step">Peta 3D</span>
      </div>
    </div>
  `;
}

function buildAntiAsymmetryAnim(): string {
  const total = 10;
  return `
    <div class="ps-anim-anti-asym">
      <div class="ps-ax-title">Setelah Big Bang</div>
      <div class="ps-ax-row">
        <div class="ps-ax-label">Materi</div>
        <div class="ps-ax-bar-wrap">
          ${Array.from({ length: total + 1 }, (_, i) => `<div class="ps-ax-ball matter" style="--i:${i}"></div>`).join('')}
        </div>
        <div class="ps-ax-count">10<sup>9</sup>+1</div>
      </div>
      <div class="ps-ax-row">
        <div class="ps-ax-label">Antimateri</div>
        <div class="ps-ax-bar-wrap">
          ${Array.from({ length: total }, (_, i) => `<div class="ps-ax-ball antimatter" style="--i:${i}"></div>`).join('')}
        </div>
        <div class="ps-ax-count">10<sup>9</sup></div>
      </div>
      <div class="ps-ax-result">Anihilasi → hanya "sisa" 1 per miliar yang jadi semua galaksi, bintang, kamu</div>
    </div>
  `;
}
