import { getModule, LEVEL_COLORS, getLevelLabel, learnModules } from '../data/learnModules';
import type { LearningStep } from '../data/learnModules';
import { navigate } from '../core/router';
import { getLang } from '../core/i18n';

export function renderLearnModule(container: HTMLElement, slug: string): () => void {
  const isEN = getLang() === 'en';
  const mod = getModule(slug);

  if (!mod) {
    container.innerHTML = `<div style="padding:4rem;text-align:center">
          <h2>Modul tidak ditemukan</h2>
          <button onclick="history.back()" style="margin-top:1rem;padding:.6rem 1.4rem;border-radius:8px;border:none;background:var(--accent);color:#fff;cursor:pointer">← Kembali</button>
        </div>`;
    return () => { };
  }

  // mod is guaranteed non-null below this point
  const color = LEVEL_COLORS[mod.level];
  const allMods = learnModules
    .filter(m => m.level === mod.level)
    .sort((a, b) => a.order - b.order);
  const curIdx = allMods.findIndex(m => m.slug === slug);
  const prevMod = curIdx > 0 ? allMods[curIdx - 1] : null;
  const nextMod = curIdx < allMods.length - 1 ? allMods[curIdx + 1] : null;

  function renderStep(step: LearningStep): string {
    const icons: Record<string, string> = {
      'question': '🤔',
      'concept': '💡',
      'fact': '⚡',
      'animation-hint': '🎬',
      'formula': '📐',
    };
    const typeLabels: Record<string, string> = {
      'question': isEN ? 'THINK' : 'PERTANYAAN',
      'concept': isEN ? 'CONCEPT' : 'KONSEP',
      'fact': isEN ? 'FACT' : 'FAKTA',
      'animation-hint': isEN ? 'VISUALIZE' : 'BAYANGKAN',
      'formula': isEN ? 'FORMULA' : 'RUMUS',
    };
    const bodyHtml = step.body
      .split('\n')
      .map((line: string) => line.trim() === '' ? '<br>' : `<p>${line}</p>`)
      .join('');

    return `
        <div class="lm-step lm-step--${step.type}" style="--step-color:${color}">
            <div class="lm-step-label">
              <span class="lm-step-icon">${icons[step.type] || '•'}</span>
              <span class="lm-step-type" style="color:${color}">${typeLabels[step.type] || step.type.toUpperCase()}</span>
            </div>
            ${step.title ? `<h3 class="lm-step-title">${step.title}</h3>` : ''}
            <div class="lm-step-body">${bodyHtml}</div>
        </div>`;
  }

  function renderQuiz(): string {
    return `
        <section class="lm-quiz" style="--quiz-color:${color}">
          <h2 class="lm-quiz-title">✅ ${isEN ? 'Check Your Understanding' : 'Cek Pemahaman'}</h2>
          ${mod!.quiz.map((q, qi) => `
          <div class="lm-quiz-q" data-qi="${qi}" data-correct="${q.correct}">
            <p class="lm-quiz-question"><span class="lm-quiz-num">${qi + 1}.</span> ${q.q}</p>
            <div class="lm-quiz-options">
              ${q.options.map((opt, oi) => `
              <button class="lm-quiz-opt" data-qi="${qi}" data-oi="${oi}">
                <span class="lm-quiz-opt-letter">${String.fromCharCode(65 + oi)}</span>
                ${opt}
              </button>`).join('')}
            </div>
            <div class="lm-quiz-explanation" id="explain-${qi}" hidden>
              <span class="lm-quiz-exp-icon">📖</span>
              ${q.explanation}
            </div>
          </div>`).join('')}
        </section>`;
  }

  container.innerHTML = `
<div class="lm-page">

  <!-- Breadcrumb -->
  <div class="lm-breadcrumb">
    <button class="lm-back-btn" id="lm-back">← ${isEN ? 'Learning Path' : 'Jalur Belajar'}</button>
    <span class="lm-breadcrumb-sep">·</span>
    <span class="lm-breadcrumb-level" style="color:${color}">
      Level ${mod.level} — ${getLevelLabel(mod.level, isEN)}
    </span>
  </div>

  <!-- Module Header -->
  <header class="lm-header" style="--mod-color:${color}">
    <div class="lm-header-glow" style="background:radial-gradient(ellipse at 30% 50%, ${color}18 0%, transparent 70%)"></div>
    <div class="lm-header-content">
      <div class="lm-header-top">
        <span class="lm-mod-icon">${mod.icon}</span>
        <div class="lm-mod-badges">
          <span class="lm-mod-badge" style="background:${color}20;color:${color};border:1px solid ${color}40">
            Level ${mod.level}.${mod.order}
          </span>
          <span class="lm-mod-badge lm-mod-badge--time">⏱ ${mod.duration} ${isEN ? 'min' : 'menit'}</span>
          <span class="lm-mod-badge lm-mod-badge--quiz">✅ ${mod.quiz.length} ${isEN ? 'questions' : 'soal'}</span>
        </div>
      </div>
      <h1 class="lm-mod-title">${isEN ? mod.titleEn : mod.title}</h1>
      <p class="lm-mod-subtitle">${isEN ? mod.subtitleEn : mod.subtitle}</p>
      <div class="lm-mod-tags">
        ${mod.tags.map(tag => `<span class="lm-mod-tag" style="border-color:${color}30;color:${color}bb">${tag}</span>`).join('')}
      </div>
    </div>
  </header>

  <!-- Progress bar -->
  <div class="lm-progress-bar">
    <div class="lm-progress-track">
      <div class="lm-progress-fill" id="lm-progress" style="background:${color};width:0%"></div>
    </div>
    <span class="lm-progress-label" id="lm-progress-label">${isEN ? 'Scroll to read' : 'Scroll untuk membaca'}</span>
  </div>

  <!-- Steps -->
  <main class="lm-content">
    <div class="lm-steps">
      ${mod.steps.map(s => renderStep(s)).join('')}
    </div>

    ${renderQuiz()}

    <!-- Complete CTA -->
    <div class="lm-complete-cta" id="lm-complete" hidden>
      <div class="lm-complete-icon">🎉</div>
      <h2>${isEN ? 'Module Complete!' : 'Modul Selesai!'}</h2>
      <p>${isEN ? "Great work. You're building real understanding, not just memorization." : 'Kerja bagus. Kamu membangun pemahaman nyata — bukan sekadar hafalan.'}</p>
      ${mod.connectsTo ? `
      <button class="lm-cta-explore" id="lm-connect">
        🔗 ${isEN ? 'Explore in Atomic' : 'Jelajahi di Atomic'} →
      </button>` : ''}
    </div>

    <!-- Navigation -->
    <nav class="lm-nav-btns">
      ${prevMod ? `<button class="lm-nav-btn lm-nav-btn--prev" id="lm-prev" style="--btn-color:${LEVEL_COLORS[prevMod.level]}">
        ← ${isEN ? prevMod.titleEn : prevMod.title}
      </button>` : '<div></div>'}
      ${nextMod ? `<button class="lm-nav-btn lm-nav-btn--next" id="lm-next" style="--btn-color:${LEVEL_COLORS[nextMod.level]}">
        ${isEN ? nextMod.titleEn : nextMod.title} →
      </button>` : '<div></div>'}
    </nav>
  </main>

</div>`;

  // ── Events ──
  container.querySelector('#lm-back')?.addEventListener('click', () => navigate('/learn'));

  container.querySelector('#lm-connect')?.addEventListener('click', () => {
    if (mod.connectsTo) navigate(mod.connectsTo);
  });

  container.querySelector('#lm-prev')?.addEventListener('click', () => {
    if (prevMod) navigate(`/learn/${prevMod.slug}`);
  });
  container.querySelector('#lm-next')?.addEventListener('click', () => {
    if (nextMod) navigate(`/learn/${nextMod.slug}`);
  });

  // Quiz
  let quizScore = 0;
  const totalQ = mod.quiz.length;
  const answered = new Set<number>();

  container.querySelectorAll('.lm-quiz-opt').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const el = e.currentTarget as HTMLButtonElement;
      const qi = parseInt(el.dataset.qi!);
      const oi = parseInt(el.dataset.oi!);
      if (answered.has(qi)) return;
      answered.add(qi);

      const correct = mod.quiz[qi].correct;
      const isRight = oi === correct;

      const qBlock = container.querySelector(`.lm-quiz-q[data-qi="${qi}"]`);
      qBlock?.querySelectorAll('.lm-quiz-opt').forEach((b, idx) => {
        const bel = b as HTMLButtonElement;
        bel.disabled = true;
        if (idx === correct) bel.classList.add('lm-quiz-opt--correct');
        else if (idx === oi && !isRight) bel.classList.add('lm-quiz-opt--wrong');
      });

      if (isRight) quizScore++;

      const explainEl = container.querySelector(`#explain-${qi}`) as HTMLElement;
      if (explainEl) explainEl.hidden = false;

      if (answered.size === totalQ) {
        const completeEl = container.querySelector('#lm-complete') as HTMLElement;
        if (completeEl) completeEl.hidden = false;
        console.log(`Quiz done: ${quizScore}/${totalQ}`);
      }
    });
  });

  // Scroll progress
  const progressFill = container.querySelector('#lm-progress') as HTMLElement;
  const progressLabel = container.querySelector('#lm-progress-label') as HTMLElement;

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? Math.min(100, Math.round((scrollTop / docH) * 100)) : 0;
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressLabel) progressLabel.textContent = pct < 100
      ? (isEN ? `${pct}% read` : `${pct}% terbaca`)
      : (isEN ? '✓ Fully read!' : '✓ Selesai dibaca!');
  };
  window.addEventListener('scroll', onScroll);

  return () => window.removeEventListener('scroll', onScroll);
}
