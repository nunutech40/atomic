import { learnModules, getLevelLabel, LEVEL_COLORS } from '../data/learnModules';
import { navigate } from '../core/router';
import { getLang } from '../core/i18n';

export function renderLearnList(container: HTMLElement): () => void {
    const isEN = getLang() === 'en';
    const levels = [0, 1, 2, 3, 4, 5];

    container.innerHTML = `
<div class="learn-list-page">

  <!-- Hero -->
  <section class="learn-hero">
    <div class="learn-hero-bg"></div>
    <div class="learn-hero-content">
      <div class="learn-hero-badge">📚 ${isEN ? 'Learning Path' : 'Jalur Belajar'}</div>
      <h1 class="learn-hero-title">
        ${isEN ? 'Learn Atomic Physics' : 'Belajar Fisika Atom'}
        <span class="learn-hero-accent">${isEN ? 'From First Principles' : 'Dari First Principles'}</span>
      </h1>
      <p class="learn-hero-subtitle">
        ${isEN
            ? 'Not memorization — understanding. From "what is matter?" to quantum mechanics, step by step.'
            : 'Bukan hafalan — pemahaman. Dari "apa itu materi?" sampai mekanika kuantum, langkah demi langkah.'}
      </p>
      <div class="learn-hero-stats">
        <div class="learn-stat">
          <span class="learn-stat-num">${learnModules.length}</span>
          <span class="learn-stat-label">${isEN ? 'Modules' : 'Modul'}</span>
        </div>
        <div class="learn-stat">
          <span class="learn-stat-num">${learnModules.reduce((s, m) => s + m.duration, 0)}</span>
          <span class="learn-stat-label">${isEN ? 'Minutes of Content' : 'Menit Konten'}</span>
        </div>
        <div class="learn-stat">
          <span class="learn-stat-num">6</span>
          <span class="learn-stat-label">${isEN ? 'Levels' : 'Level'}</span>
        </div>
        <div class="learn-stat">
          <span class="learn-stat-num">${learnModules.reduce((s, m) => s + m.quiz.length, 0)}</span>
          <span class="learn-stat-label">${isEN ? 'Quiz Questions' : 'Soal Kuis'}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Path -->
  <section class="learn-path">
    ${levels.map(lvl => {
                const mods = learnModules.filter(m => m.level === lvl).sort((a, b) => a.order - b.order);
                if (!mods.length) return '';
                const color = LEVEL_COLORS[lvl];
                const label = getLevelLabel(lvl, isEN);
                return `
        <div class="learn-level-section">
          <div class="learn-level-header">
            <div class="learn-level-badge" style="background:${color}20;color:${color};border-color:${color}40">
              LEVEL ${lvl}
            </div>
            <div class="learn-level-title">${label}</div>
            <div class="learn-level-line" style="background:${color}30"></div>
          </div>
          <div class="learn-modules-grid">
            ${mods.map((m) => `
            <div class="learn-module-card" data-slug="${m.slug}" style="--lvl-color:${color}">
              <div class="learn-module-card-top">
                <span class="learn-module-icon">${m.icon}</span>
                <div class="learn-module-meta">
                  <span class="learn-module-level-label" style="color:${color}">Level ${m.level}.${m.order}</span>
                  <span class="learn-module-duration">⏱ ${m.duration} ${isEN ? 'min' : 'menit'}</span>
                </div>
                <div class="learn-module-lock">🔒</div>
              </div>
              <h3 class="learn-module-title">${isEN ? m.titleEn : m.title}</h3>
              <p class="learn-module-subtitle">${isEN ? m.subtitleEn : m.subtitle}</p>
              <div class="learn-module-tags">
                ${m.tags.slice(0, 3).map(tag => `<span class="learn-module-tag">${tag}</span>`).join('')}
              </div>
              <button class="learn-module-btn" data-slug="${m.slug}" style="--lvl-color:${color}">
                ${isEN ? 'Start Module' : 'Mulai Modul'} →
              </button>
            </div>
            `).join('')}
          </div>
        </div>
        `;
            }).join('')}
  </section>

</div>
`;

    // Events
    container.querySelectorAll('[data-slug]').forEach(el => {
        (el as HTMLElement).addEventListener('click', (e) => {
            const slug = (e.currentTarget as HTMLElement).dataset.slug;
            if (slug) navigate(`/learn/${slug}`);
        });
    });

    // Hover glow on cards
    container.querySelectorAll('.learn-module-card').forEach(card => {
        const el = card as HTMLElement;
        el.addEventListener('mouseenter', () => { el.style.transform = 'translateY(-4px)'; });
        el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });

    return () => { };
}
