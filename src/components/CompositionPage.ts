import { getLang } from '../core/i18n';
import { navigate } from '../core/router';
import { humanBodyElements, bodyFunFacts, bodySystems } from '../data/composition/humanBody';
import { earthLayers, earthOverall } from '../data/composition/earthLayers';

// ─────────────────────────────────────────────────────────────────────────────
// COMPOSITION PAGE
// Anatomi atom: Tubuh Manusia & Bumi
// Route: /composition/:subject  (subject = 'human' | 'earth')
// ─────────────────────────────────────────────────────────────────────────────

export function renderCompositionPage(container: HTMLElement, subject: string = 'human'): () => void {
    const isEN = getLang() === 'en';
    container.innerHTML = '';

    const wrap = document.createElement('div');
    wrap.className = 'comp-page';

    // ── Top bar ──────────────────────────────────────────────────────────────
    const topBar = document.createElement('div');
    topBar.className = 'comp-topbar';
    topBar.innerHTML = `
        <button class="back-btn" id="comp-back">← ${isEN ? 'Back' : 'Kembali'}</button>
        <div class="comp-tabs">
            <button class="comp-tab ${subject === 'human' ? 'comp-tab--active' : ''}" data-subject="human" id="tab-human">
                🧬 ${isEN ? 'Human Body' : 'Tubuh Manusia'}
            </button>
            <button class="comp-tab ${subject === 'earth' ? 'comp-tab--active' : ''}" data-subject="earth" id="tab-earth">
                🌍 ${isEN ? 'Planet Earth' : 'Planet Bumi'}
            </button>
        </div>
    `;
    wrap.appendChild(topBar);

    // ── Content area ─────────────────────────────────────────────────────────
    const content = document.createElement('div');
    content.className = 'comp-content';
    content.id = 'comp-content';
    wrap.appendChild(content);

    container.appendChild(wrap);

    // ── Events ───────────────────────────────────────────────────────────────
    topBar.querySelector('#comp-back')!.addEventListener('click', () => navigate('/phenomena'));
    topBar.addEventListener('click', (e) => {
        const btn = (e.target as HTMLElement).closest('[data-subject]') as HTMLElement | null;
        if (!btn) return;
        const sub = btn.dataset.subject!;
        topBar.querySelectorAll('.comp-tab').forEach(t => t.classList.remove('comp-tab--active'));
        btn.classList.add('comp-tab--active');
        renderSubject(sub);
    });

    // ── Render subject ───────────────────────────────────────────────────────
    function renderSubject(sub: string) {
        content.innerHTML = '';
        if (sub === 'human') renderHuman();
        else renderEarth();
    }

    // ─────────────────────────────────────────────────────────────────────────
    // HUMAN BODY
    // ─────────────────────────────────────────────────────────────────────────
    function renderHuman() {
        const el = document.createElement('div');
        el.className = 'comp-human animate-in';

        // Hero
        el.innerHTML = `
            <div class="comp-hero">
                <div class="comp-hero-icon">🧬</div>
                <div class="comp-hero-text">
                    <h1 class="comp-hero-title">${isEN ? 'You Are Made of Atoms' : 'Kamu Terbuat dari Atom'}</h1>
                    <p class="comp-hero-sub">${isEN
                ? 'A 70 kg adult is 7 × 10²⁷ atoms. This is the breakdown.'
                : 'Manusia dewasa 70 kg adalah 7 × 10²⁷ atom. Ini breakdown-nya.'}</p>
                </div>
            </div>
        `;

        // Element bars
        const barsSection = document.createElement('div');
        barsSection.className = 'comp-section';
        barsSection.innerHTML = `
            <div class="comp-section-title">
                <span class="comp-section-icon">⚛️</span>
                ${isEN ? 'Atomic Composition by Mass' : 'Komposisi Atom berdasarkan Massa'}
            </div>
        `;

        const bars = document.createElement('div');
        bars.className = 'comp-bars';

        // Sort by mass — biggest first
        const sorted = [...humanBodyElements].sort((a, b) => b.massPercent - a.massPercent);
        const top4 = sorted.slice(0, 4);
        const rest = sorted.slice(4);

        sorted.forEach(elem => {
            const bar = document.createElement('div');
            bar.className = 'comp-bar-row';
            const pct = elem.massPercent;
            // Use log scale for visual so trace elements still show
            const visualWidth = pct >= 1
                ? Math.min(pct * 1.45, 96)     // linear for major elements
                : Math.max(pct * 80, 2);         // scale up trace elements

            bar.innerHTML = `
                <div class="comp-bar-label">
                    <span class="comp-bar-sym" style="color:${elem.color}">${elem.sym}</span>
                    <span class="comp-bar-name">${isEN ? elem.nameEn : elem.name}</span>
                    <span class="comp-bar-pct">${pct >= 0.01 ? pct + '%' : '< 0.01%'}</span>
                </div>
                <div class="comp-bar-track">
                    <div class="comp-bar-fill" style="width:${visualWidth}%;background:${elem.color}" data-target="${visualWidth}"></div>
                </div>
                <div class="comp-bar-detail">${isEN ? elem.roleEn : elem.role}</div>
            `;
            bar.addEventListener('click', () => {
                const detail = bar.querySelector('.comp-bar-detail') as HTMLElement;
                detail.classList.toggle('comp-bar-detail--open');
            });
            bars.appendChild(bar);
        });

        barsSection.appendChild(bars);
        el.appendChild(barsSection);

        // Donut-style split: top 4 vs trace
        const splitSection = document.createElement('div');
        splitSection.className = 'comp-section';
        splitSection.innerHTML = `
            <div class="comp-section-title">
                <span class="comp-section-icon">🫧</span>
                ${isEN ? 'At a Glance' : 'Sekilas Pandang'}
            </div>
            <div class="comp-bubble-wrap">
                ${top4.map(e => `
                    <div class="comp-bubble" style="--bubble-color:${e.color};--bubble-size:${Math.max(Math.sqrt(e.massPercent) * 38, 48)}px">
                        <div class="comp-bubble-sym">${e.sym}</div>
                        <div class="comp-bubble-pct">${e.massPercent}%</div>
                    </div>
                `).join('')}
                <div class="comp-bubble comp-bubble--rest" style="--bubble-color:#64748b;--bubble-size:48px">
                    <div class="comp-bubble-sym">+${rest.length}</div>
                    <div class="comp-bubble-pct">&lt;2%</div>
                </div>
            </div>
        `;
        el.appendChild(splitSection);

        // Body systems
        const sysSection = document.createElement('div');
        sysSection.className = 'comp-section';
        sysSection.innerHTML = `
            <div class="comp-section-title">
                <span class="comp-section-icon">🫀</span>
                ${isEN ? 'By Body System' : 'Per Sistem Tubuh'}
            </div>
            <div class="comp-systems-grid">
                ${bodySystems.map(sys => {
            const elem = humanBodyElements.find(e => e.sym === sys.dominantElement);
            return `
                        <div class="comp-sys-card">
                            <div class="comp-sys-header">
                                <span class="comp-sys-icon">${sys.icon}</span>
                                <div>
                                    <div class="comp-sys-name">${isEN ? sys.nameEn : sys.name}</div>
                                    <div class="comp-sys-elem" style="color:${elem?.color || '#94a3b8'}">
                                        ${isEN ? 'Dominant' : 'Dominan'}: ${sys.dominantElement}
                                    </div>
                                </div>
                            </div>
                            <div class="comp-sys-comp">${isEN ? sys.compositionEn : sys.composition}</div>
                        </div>
                    `;
        }).join('')}
            </div>
        `;
        el.appendChild(sysSection);

        // Fun facts
        const factsSection = document.createElement('div');
        factsSection.className = 'comp-section';
        factsSection.innerHTML = `
            <div class="comp-section-title">
                <span class="comp-section-icon">💡</span>
                ${isEN ? 'Mind-Blowing Facts' : 'Fakta yang Mengejutkan'}
            </div>
            <div class="comp-facts-list">
                ${bodyFunFacts.map(f => `
                    <div class="comp-fact-card">
                        <span class="comp-fact-icon">${f.icon}</span>
                        <p class="comp-fact-text">${isEN ? f.textEn : f.text}</p>
                    </div>
                `).join('')}
            </div>
        `;
        el.appendChild(factsSection);

        // CTA — navigate to element
        const ctaSection = document.createElement('div');
        ctaSection.className = 'comp-cta-section';
        ctaSection.innerHTML = `
            <div class="comp-cta-title">${isEN ? 'Explore each element' : 'Eksplorasi tiap elemen'}</div>
            <div class="comp-cta-chips">
                ${sorted.slice(0, 8).map(e => `
                    <button class="comp-cta-chip" data-sym="${e.sym}" style="--chip-c:${e.color}">
                        ${e.sym}
                    </button>
                `).join('')}
            </div>
        `;
        ctaSection.addEventListener('click', (ev) => {
            const chip = (ev.target as HTMLElement).closest('[data-sym]') as HTMLElement | null;
            if (!chip) return;
            // Navigate to element detail — need atomic number
            const symToN: Record<string, number> = {
                O: 8, C: 6, H: 1, N: 7, Ca: 20, P: 15, K: 19, S: 16,
                Na: 11, Cl: 17, Mg: 12, Fe: 26, Zn: 30, I: 53,
            };
            const n = symToN[chip.dataset.sym!];
            if (n) navigate(`/element/${n}`);
        });
        el.appendChild(ctaSection);

        content.appendChild(el);

        // Animate bars
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.querySelectorAll('.comp-bar-fill').forEach(bar => {
                    (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.target + '%';
                });
            });
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // EARTH
    // ─────────────────────────────────────────────────────────────────────────
    function renderEarth() {
        const el = document.createElement('div');
        el.className = 'comp-earth animate-in';

        // Hero
        el.innerHTML = `
            <div class="comp-hero">
                <div class="comp-hero-icon">🌍</div>
                <div class="comp-hero-text">
                    <h1 class="comp-hero-title">${isEN ? 'Earth, Layer by Layer' : 'Bumi, Lapisan demi Lapisan'}</h1>
                    <p class="comp-hero-sub">${isEN
                ? `${earthOverall.totalAtoms} atoms · ${earthOverall.ageEn} old`
                : `${earthOverall.totalAtoms} atom · ${earthOverall.age} lalu terbentuk`}</p>
                </div>
            </div>
        `;

        // Cross-section visual + layer cards
        const layersWrap = document.createElement('div');
        layersWrap.className = 'comp-section comp-earth-section';
        layersWrap.innerHTML = `
            <div class="comp-section-title">
                <span class="comp-section-icon">🔵</span>
                ${isEN ? 'Layers & Composition' : 'Lapisan & Komposisi Atom'}
            </div>
        `;

        // Cross-section diagram (CSS concentric circles)
        const diagram = document.createElement('div');
        diagram.className = 'comp-earth-diagram';
        diagram.innerHTML = `
            <div class="comp-earth-rings">
                ${[...earthLayers].reverse().map((layer, i) => `
                    <div class="comp-earth-ring comp-earth-ring--${layer.id}" 
                         data-layer="${layer.id}"
                         style="--ring-color:${layer.color};--ring-size:${100 - i * 14}%"
                         title="${isEN ? layer.nameEn : layer.name}">
                    </div>
                `).join('')}
                <div class="comp-earth-center-label">🌍</div>
            </div>
            <div class="comp-earth-legend">
                ${earthLayers.map(layer => `
                    <div class="comp-earth-legend-item" data-layer="${layer.id}">
                        <span class="comp-earth-legend-dot" style="background:${layer.color}"></span>
                        <span>${isEN ? layer.nameEn : layer.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
        layersWrap.appendChild(diagram);

        // Layer detail cards — stacked, bottom to top (deepest last = bottom)
        const layerCards = document.createElement('div');
        layerCards.className = 'comp-layer-cards';

        earthLayers.forEach(layer => {
            const card = document.createElement('div');
            card.className = 'comp-layer-card';
            card.id = `layer-card-${layer.id}`;
            card.setAttribute('data-layer', layer.id);

            card.innerHTML = `
                <div class="comp-layer-header" style="--layer-color:${layer.color}">
                    <div class="comp-layer-header-left">
                        <span class="comp-layer-icon">${layer.icon}</span>
                        <div>
                            <div class="comp-layer-name">${isEN ? layer.nameEn : layer.name}</div>
                            <div class="comp-layer-depth">${isEN ? layer.depthEn : layer.depth}</div>
                        </div>
                    </div>
                    <div class="comp-layer-meta">
                        <div class="comp-layer-meta-item">
                            <div class="comp-layer-meta-label">${isEN ? 'Mass' : 'Massa'}</div>
                            <div class="comp-layer-meta-val">${layer.massPercent}%</div>
                        </div>
                        <div class="comp-layer-meta-item">
                            <div class="comp-layer-meta-label">${isEN ? 'Temp' : 'Suhu'}</div>
                            <div class="comp-layer-meta-val">${layer.tempRange}</div>
                        </div>
                    </div>
                </div>

                <div class="comp-layer-body">
                    <div class="comp-layer-state">
                        <span class="comp-layer-state-label">🔬</span>
                        ${isEN ? layer.stateOfMatterEn : layer.stateOfMatter}
                    </div>

                    <div class="comp-layer-elem-bars">
                        ${layer.elements.map(e => `
                            <div class="comp-layer-elem-row">
                                <span class="comp-layer-elem-sym" style="color:${e.color}">${e.sym}</span>
                                <span class="comp-layer-elem-name">${isEN ? e.nameEn : e.name}</span>
                                <div class="comp-layer-elem-track">
                                    <div class="comp-layer-elem-fill" 
                                         style="width:0%;background:${e.color}"
                                         data-target="${e.percent}"></div>
                                </div>
                                <span class="comp-layer-elem-pct">${e.percent}%</span>
                            </div>
                        `).join('')}
                    </div>

                    <p class="comp-layer-desc">${isEN ? layer.descriptionEn : layer.description}</p>

                    <div class="comp-layer-fact">
                        <span>💡</span>
                        <span>${isEN ? layer.funFactEn : layer.funFact}</span>
                    </div>
                </div>
            `;

            layerCards.appendChild(card);
        });

        layersWrap.appendChild(layerCards);
        el.appendChild(layersWrap);

        // Earth fun facts
        const factsSection = document.createElement('div');
        factsSection.className = 'comp-section';
        factsSection.innerHTML = `
            <div class="comp-section-title">
                <span class="comp-section-icon">💡</span>
                ${isEN ? 'Earth Facts' : 'Fakta Bumi'}
            </div>
            <div class="comp-facts-list">
                ${earthOverall.funFacts.map(f => `
                    <div class="comp-fact-card">
                        <span class="comp-fact-icon">${f.icon}</span>
                        <p class="comp-fact-text">${isEN ? f.textEn : f.text}</p>
                    </div>
                `).join('')}
            </div>
        `;
        el.appendChild(factsSection);

        content.appendChild(el);

        // Animate layer element bars when they scroll into view
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.comp-layer-elem-fill').forEach(fill => {
                        const f = fill as HTMLElement;
                        f.style.width = f.dataset.target + '%';
                    });
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        layerCards.querySelectorAll('.comp-layer-card').forEach(card => io.observe(card));

        // Diagram highlight on hover
        diagram.addEventListener('mouseover', (e) => {
            const ring = (e.target as HTMLElement).closest('[data-layer]') as HTMLElement | null;
            const legendItem = (e.target as HTMLElement).closest('.comp-earth-legend-item') as HTMLElement | null;
            const layerId = ring?.dataset.layer || legendItem?.dataset.layer;
            if (layerId) {
                highlightLayer(layerId);
            }
        });
        diagram.addEventListener('mouseleave', () => clearHighlight());

        function highlightLayer(id: string) {
            diagram.querySelectorAll('[data-layer]').forEach(el => {
                (el as HTMLElement).style.opacity = el.getAttribute('data-layer') === id ? '1' : '0.4';
            });
            // Scroll to card
            const card = layerCards.querySelector(`[data-layer="${id}"]`) as HTMLElement | null;
            card?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function clearHighlight() {
            diagram.querySelectorAll('[data-layer]').forEach(el => {
                (el as HTMLElement).style.opacity = '1';
            });
        }
    }

    renderSubject(subject);

    return () => { };
}
