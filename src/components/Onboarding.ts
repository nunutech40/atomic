import { navigate } from '../core/router';
import { getLang } from '../core/i18n';

const STORAGE_KEY = 'atomic_onboarding_done';

export function hasSeenOnboarding(): boolean {
    return localStorage.getItem(STORAGE_KEY) === '1';
}

export function markOnboardingDone(): void {
    localStorage.setItem(STORAGE_KEY, '1');
}

interface Slide {
    id: string;
    accentColor: string;
    overline: string | null;
    headline: string;
    body: string | null;
    visual: string; // HTML string — symbol, number, etc.
    isFinal?: boolean;
}

function getSlides(isEN: boolean): Slide[] {
    return [
        {
            id: 'slide-0',
            accentColor: '#a29bfe',
            overline: null,
            headline: isEN ? 'You are made of something.' : 'Kamu terbuat dari sesuatu.',
            body: null,
            visual: '<span class="ob-visual-atom">⚛</span>',
        },
        {
            id: 'slide-1',
            accentColor: '#74b9ff',
            overline: isEN ? '13,800,000,000 years ago' : '13.800.000.000 tahun lalu',
            headline: isEN ? 'There was nothing.\nThen\nthere was a point.' : 'Tidak ada apa-apa.\nLalu\nada satu titik.',
            body: isEN
                ? 'The entire universe — compressed to a size smaller than an atom. Then it exploded.'
                : 'Seluruh alam semesta — dikompresi menjadi lebih kecil dari satu atom. Lalu ia meledak.',
            visual: '<img class="ob-visual-img" src="/onboarding/bigbang.png" alt="Big Bang" />',
        },
        {
            id: 'slide-2',
            accentColor: '#ffeaa7',
            overline: isEN ? 'Three minutes after the explosion' : 'Tiga menit setelah ledakan',
            headline: isEN ? 'The first atom\nwas born.' : 'Atom pertama\nlahir.',
            body: isEN
                ? 'Hydrogen. One proton. One electron. The simplest thing that can exist.'
                : 'Hidrogen. Satu proton. Satu elektron. Hal paling sederhana yang bisa ada.',
            visual: '<div class="ob-visual-elem"><span class="ob-elem-num">1</span><span class="ob-elem-sym">H</span><span class="ob-elem-name">Hydrogen</span></div>',
        },
        {
            id: 'slide-3',
            accentColor: '#fd79a8',
            overline: isEN ? 'A billion years later' : 'Satu miliar tahun kemudian',
            headline: isEN ? 'A star\nignited.' : 'Sebuah bintang\nmenyala.',
            body: isEN
                ? 'Hydrogen collapsed under its own gravity. The pressure became so immense it started fusing. Inside that furnace, new atoms were born.'
                : 'Hidrogen runtuh karena gravitasinya sendiri. Tekanannya begitu besar sampai mulai melebur. Di dalam tungku itu, atom-atom baru lahir.',
            visual: '<img class="ob-visual-img" src="/onboarding/star.png" alt="Star ignition" />',
        },
        {
            id: 'slide-4',
            accentColor: '#55efc4',
            overline: isEN ? 'Stellar nucleosynthesis' : 'Nukleosintesis bintang',
            headline: isEN ? 'From hydrogen,\nelements.' : 'Dari hidrogen,\nlahirlah elemen.',
            body: isEN
                ? 'Carbon. Oxygen. Nitrogen. Iron. The atoms that build every living thing — forged inside dying stars.'
                : 'Karbon. Oksigen. Nitrogen. Besi. Atom-atom yang membangun setiap makhluk hidup — ditempa di dalam bintang-bintang yang sekarat.',
            visual: `<div class="ob-visual-elems">
        <div class="ob-visual-elem ob-visual-elem--sm" style="--ec:#fd79a8"><span class="ob-elem-num">6</span><span class="ob-elem-sym">C</span></div>
        <div class="ob-visual-elem ob-visual-elem--sm" style="--ec:#74b9ff"><span class="ob-elem-num">8</span><span class="ob-elem-sym">O</span></div>
        <div class="ob-visual-elem ob-visual-elem--sm" style="--ec:#55efc4"><span class="ob-elem-num">7</span><span class="ob-elem-sym">N</span></div>
        <div class="ob-visual-elem ob-visual-elem--sm" style="--ec:#e17055"><span class="ob-elem-num">26</span><span class="ob-elem-sym">Fe</span></div>
      </div>`,
        },
        {
            id: 'slide-5',
            accentColor: '#e17055',
            overline: isEN ? 'The death of a star' : 'Kematian sebuah bintang',
            headline: isEN ? 'Supernova.' : 'Supernova.',
            body: isEN
                ? 'The star exhausted its fuel and exploded. In that single moment, it scattered billions of years of atomic creation across the galaxy.'
                : 'Bintang itu kehabisan bahan bakar dan meledak. Dalam satu momen itu, ia menyebarkan miliaran tahun ciptaan atom ke seluruh galaksi.',
            visual: '<img class="ob-visual-img" src="/onboarding/supernova.png" alt="Supernova" />',
        },
        {
            id: 'slide-6',
            accentColor: '#74b9ff',
            overline: isEN ? '4.6 billion years ago' : '4,6 miliar tahun lalu',
            headline: isEN ? 'Some atoms\nlanded here.' : 'Sebagian atom\nmendarat di sini.',
            body: isEN
                ? 'A cloud of stardust — the debris of ancient explosions — collapsed into a new star and its planets. One of them: Earth.'
                : 'Awan debu bintang — puing ledakan kuno — runtuh menjadi bintang baru dan planet-planetnya. Salah satunya: Bumi.',
            visual: '<div class="ob-visual-earth">🌍</div>',
        },
        {
            id: 'slide-7',
            accentColor: '#fd79a8',
            overline: null,
            headline: isEN
                ? 'Those atoms\nare now\nyou.'
                : 'Atom-atom itu\nsekarang\nadalah kamu.',
            body: isEN
                ? 'The carbon in your body was once inside a star. The iron in your blood was forged in a stellar core. You are not just made of atoms — you are the universe experiencing itself.'
                : 'Karbon di tubuhmu pernah berada di dalam bintang. Besi di darahmu ditempa di inti bintang. Kamu bukan hanya terbuat dari atom — kamu adalah semesta yang sedang mengalami dirinya sendiri.',
            visual: '<img class="ob-visual-img" src="/onboarding/stardust.png" alt="You are stardust" />',
        },
        {
            id: 'slide-8',
            accentColor: '#a29bfe',
            overline: isEN ? 'Carl Sagan' : 'Carl Sagan',
            headline: isEN
                ? '"We are a way for\nthe cosmos to\nknow itself."'
                : '"Kita adalah cara\nalam semesta mengenal\ndirinya sendiri."',
            body: isEN
                ? 'Now. Let\'s prove it — one element at a time.'
                : 'Sekarang. Mari kita buktikan — satu elemen demi satu elemen.',
            visual: '<div class="ob-visual-stars"><div class="ob-star-field"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div>',
            isFinal: true,
        },
    ];
}

export function renderOnboarding(container: HTMLElement): () => void {
    const isEN = getLang() === 'en';
    const slides = getSlides(isEN);
    let current = 0;
    let transitioning = false;
    let autoAdvanceTimer: ReturnType<typeof setTimeout> | null = null;

    container.innerHTML = `
    <div class="ob-root" id="ob-root">
      <!-- Header: progress + skip (always above slides) -->
      <div class="ob-header">
        <div class="ob-progress" id="ob-progress">
          ${slides.map((_, i) => `<div class="ob-progress-dot${i === 0 ? ' ob-progress-dot--active' : ''}" data-i="${i}"></div>`).join('')}
        </div>
        <button class="ob-skip" id="ob-skip">${isEN ? 'Skip' : 'Lewati'}</button>
      </div>

      <!-- Slides -->
      <div class="ob-slides" id="ob-slides">
        ${slides.map((slide, i) => `
          <div class="ob-slide${i === 0 ? ' ob-slide--active' : ''}" id="${slide.id}" data-i="${i}" style="--accent:${slide.accentColor}">
            <div class="ob-slide-visual">${slide.visual}</div>
            <div class="ob-slide-text">
              ${slide.overline ? `<div class="ob-overline">${slide.overline}</div>` : ''}
              <h2 class="ob-headline">${slide.headline.replace(/\n/g, '<br>')}</h2>
              ${slide.body ? `<p class="ob-body">${slide.body}</p>` : ''}
              ${slide.isFinal ? `
                <div class="ob-final-actions">
                  <button class="ob-cta" id="ob-cta">${isEN ? 'Start Exploring' : 'Mulai Eksplorasi'} →</button>
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Navigation -->
      <div class="ob-nav">
        <button class="ob-btn-prev" id="ob-prev" disabled>←</button>
        <button class="ob-btn-next" id="ob-next">${isEN ? 'Next' : 'Lanjut'} →</button>
      </div>
    </div>
  `;

    function goTo(index: number) {
        if (transitioning || index < 0 || index >= slides.length) return;
        transitioning = true;
        if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);

        const allSlides = container.querySelectorAll<HTMLElement>('.ob-slide');
        const dots = container.querySelectorAll<HTMLElement>('.ob-progress-dot');
        const prevBtn = container.querySelector<HTMLButtonElement>('#ob-prev')!;
        const nextBtn = container.querySelector<HTMLButtonElement>('#ob-next')!;
        const nav = container.querySelector<HTMLElement>('.ob-nav')!;

        allSlides[current].classList.remove('ob-slide--active');
        allSlides[current].classList.add('ob-slide--exit');

        current = index;

        setTimeout(() => {
            allSlides.forEach(s => s.classList.remove('ob-slide--exit'));
        }, 600);

        allSlides[current].classList.add('ob-slide--active');
        allSlides[current].classList.remove('ob-slide--exit');

        dots.forEach((d, i) => d.classList.toggle('ob-progress-dot--active', i <= current));

        prevBtn.disabled = current === 0;

        // On final slide hide entire nav — CTA button handles progression
        const isFinal = slides[current].isFinal;
        nav.style.opacity = isFinal ? '0' : '1';
        nav.style.pointerEvents = isFinal ? 'none' : '';
        nextBtn.style.display = isFinal ? 'none' : '';

        transitioning = false;
    }

    function next() {
        if (current < slides.length - 1) goTo(current + 1);
    }

    function done() {
        markOnboardingDone();
        navigate('/');
    }

    // Events
    const prevBtn = container.querySelector<HTMLButtonElement>('#ob-prev')!;
    const nextBtn = container.querySelector<HTMLButtonElement>('#ob-next')!;
    const skipBtn = container.querySelector('#ob-skip')!;
    const ctaBtn = container.querySelector('#ob-cta');

    // Initial state: first slide has disabled prev
    prevBtn.disabled = true;

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', next);
    skipBtn.addEventListener('click', done);
    ctaBtn?.addEventListener('click', done);

    // Click slide area to advance (except controls)
    container.querySelector('#ob-slides')?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.ob-slide-text') && !target.closest('.ob-cta')) {
            if (current < slides.length - 1) next();
        }
    });

    // Keyboard
    function onKey(e: KeyboardEvent) {
        if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); }
        if (e.key === 'Escape') done();
    }
    window.addEventListener('keydown', onKey);

    return () => {
        window.removeEventListener('keydown', onKey);
        if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    };
}
