import { getDiscoverer } from '../data/discoverers';
import { elements } from '../data/elements';
import { categories } from '../data/categories';
import { navigate } from '../core/router';
import { getLang } from '../core/i18n';

export function renderDiscovererStory(container: HTMLElement, sym: string): () => void {
    const isEN = getLang() === 'en';
    const discoverer = getDiscoverer(sym);
    const el = elements.find(e => e.sym === sym);

    if (!discoverer || !el) {
        container.innerHTML = `
            <div style="padding:48px;text-align:center;color:var(--text-2)">
                <div style="font-size:48px;margin-bottom:16px">🔍</div>
                <div style="font-size:18px;font-weight:600;margin-bottom:8px">${isEN ? 'Discoverer data not available' : 'Data penemu tidak tersedia'}</div>
                <div style="font-size:14px;margin-bottom:24px">${isEN ? `Information for ${sym} is not yet available.` : `Informasi untuk elemen ${sym} belum tersedia.`}</div>
                <button class="back-btn" id="ds-back">${isEN ? `\u2190 Back to Element` : '\u2190 Kembali ke Elemen'}</button>
            </div>`;
        container.querySelector('#ds-back')?.addEventListener('click', () => navigate(`/element/${el?.n ?? 1}`));
        return () => { };
    }

    const cat = categories[el.cat];
    const color = cat?.color || '#868e96';

    container.innerHTML = `
        <div class="ds-page" id="ds-page">

            <!-- TOP BAR -->
            <div class="ds-topbar">
                <button class="back-btn" id="ds-back">← ${el.sym} · ${el.name}</button>
                <div class="ds-topbar-badge" style="color:${color};border-color:${color}33;background:${cat?.bgColor || 'transparent'}">
                    ${isEN ? 'Discovery Story' : 'Kisah Penemuan'}
                </div>
            </div>

            <!-- HERO: Discoverer Card -->
            <div class="ds-hero animate-in">
                <div class="ds-photo-wrap">
                    <img
                        class="ds-photo"
                        src="${discoverer.photoUrl}"
                        alt="${discoverer.name}"
                        onerror="this.style.display='none';this.parentElement.innerHTML='<div class=ds-photo-fallback>👤</div>'"
                    />
                </div>
                <div class="ds-hero-info">
                    <div class="ds-hero-element" style="color:${color}">${el.sym}</div>
                    <div class="ds-hero-label">${isEN ? 'Discoverer' : 'Penemu'}</div>
                    <div class="ds-hero-name">${discoverer.name}</div>
                    <div class="ds-hero-meta">
                        <span class="ds-meta-chip">📅 ${discoverer.born} – ${discoverer.died}</span>
                        <span class="ds-meta-chip">${discoverer.nationality}</span>
                    </div>
                    <p class="ds-hero-bio">${isEN ? (discoverer.shortBioEn || discoverer.shortBio) : discoverer.shortBio}</p>
                    <a
                        class="ds-wiki-link"
                        href="${discoverer.wikiUrl}"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="ds-wiki"
                    >
                        🔗 ${isEN ? 'Read on Wikipedia \u2197' : 'Baca di Wikipedia \u2197'}
                    </a>
                </div>
            </div>

            <!-- TIMELINE -->
            <div class="ds-timeline-section">
                <div class="ds-timeline-title">${isEN ? 'Discovery Timeline' : 'Kronologi Penemuan'}</div>
                <div class="ds-timeline" id="ds-timeline">
                    ${discoverer.discoveryStory.map((step, i) => `
                        <div class="ds-step" data-step="${i}" style="--step-color:${color}">
                            <div class="ds-step-left">
                                <div class="ds-step-dot" style="background:${color}"></div>
                                ${i < discoverer.discoveryStory.length - 1 ? '<div class="ds-step-line" style="background:linear-gradient(to bottom,' + color + '44,transparent)"></div>' : ''}
                            </div>
                            <div class="ds-step-content">
                                <div class="ds-step-year" style="color:${color}">${step.year}</div>
                                <div class="ds-step-title">${step.title}</div>
                                <div class="ds-step-body">${step.body}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

        </div>
    `;

    // Back button
    container.querySelector('#ds-back')?.addEventListener('click', () => navigate(`/element/${el.n}`));

    // Animate steps in on scroll
    const steps = container.querySelectorAll<HTMLElement>('.ds-step');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                (entry.target as HTMLElement).classList.add('ds-step-visible');
            }
        });
    }, { threshold: 0.15 });
    steps.forEach(s => observer.observe(s));

    return () => { observer.disconnect(); };
}
