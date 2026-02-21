import { getLang } from '../core/i18n';
import { navigate } from '../core/router';
import { humanBodyElements, bodyFunFacts, bodySystems } from '../data/composition/humanBody';
import { earthLayers, earthOverall } from '../data/composition/earthLayers';
import { sunElements, sunLayers, sunFunFacts } from '../data/composition/sunComposition';
import { plantElements, plantProcesses, plantFunFacts } from '../data/composition/plantComposition';
import { universeElements, universeEras, universeFunFacts } from '../data/composition/universeComposition';

// ─────────────────────────────────────────────────────────────────────────────
// COMPOSITION PAGE
// Anatomi atom: Tubuh Manusia, Bumi, Matahari, Tumbuhan, Alam Semesta
// Route: /composition/:subject
// ─────────────────────────────────────────────────────────────────────────────

const TABS = [
    { id: 'human', icon: '🧬', label: 'Tubuh Manusia', labelEn: 'Human Body' },
    { id: 'earth', icon: '🌍', label: 'Planet Bumi', labelEn: 'Planet Earth' },
    { id: 'sun', icon: '☀️', label: 'Matahari', labelEn: 'The Sun' },
    { id: 'plant', icon: '🌿', label: 'Tumbuhan', labelEn: 'Plants' },
    { id: 'universe', icon: '🌌', label: 'Alam Semesta', labelEn: 'Universe' },
];

export function renderCompositionPage(container: HTMLElement, subject: string = 'human'): () => void {
    const isEN = getLang() === 'en';
    container.innerHTML = '';

    const wrap = document.createElement('div');
    wrap.className = 'comp-page';

    // ── Top bar ──────────────────────────────────────────────────────────────
    const topBar = document.createElement('div');
    topBar.className = 'comp-topbar';
    topBar.innerHTML = `
        <div class="comp-tabs">
            ${TABS.map(t => `
                <button class="comp-tab ${subject === t.id ? 'comp-tab--active' : ''}"
                        data-subject="${t.id}"
                        id="tab-${t.id}">
                    ${t.icon} ${isEN ? t.labelEn : t.label}
                </button>
            `).join('')}
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
        else if (sub === 'earth') renderEarth();
        else if (sub === 'sun') renderSun();
        else if (sub === 'plant') renderPlant();
        else if (sub === 'universe') renderUniverse();
    }

    // ─────────────────────────────────────────────────────────────────────────
    // SHARED HELPERS
    // ─────────────────────────────────────────────────────────────────────────

    /** Renders animated element bars common to all subjects */
    function renderElementBars(
        parent: HTMLElement,
        elements: { sym: string; name: string; nameEn: string; massPercent: number; color: string; role?: string; roleEn?: string; origin?: string; originEn?: string }[],
        sectionTitle: string,
        sectionIcon: string,
    ) {
        const section = document.createElement('div');
        section.className = 'comp-section';
        section.innerHTML = `<div class="comp-section-title"><span class="comp-section-icon">${sectionIcon}</span>${sectionTitle}</div>`;

        const bars = document.createElement('div');
        bars.className = 'comp-bars';

        const sorted = [...elements].sort((a, b) => b.massPercent - a.massPercent);
        sorted.forEach(elem => {
            const bar = document.createElement('div');
            bar.className = 'comp-bar-row';
            const pct = elem.massPercent;
            const visualWidth = pct >= 1
                ? Math.min(pct * 1.35, 96)
                : Math.max(pct * 60, 2);

            const detailText = isEN
                ? (elem.roleEn || elem.originEn || '')
                : (elem.role || elem.origin || '');

            bar.innerHTML = `
                <div class="comp-bar-label">
                    <span class="comp-bar-sym" style="color:${elem.color}">${elem.sym}</span>
                    <span class="comp-bar-name">${isEN ? elem.nameEn : elem.name}</span>
                    <span class="comp-bar-pct">${pct >= 0.01 ? pct + '%' : '< 0.01%'}</span>
                </div>
                <div class="comp-bar-track">
                    <div class="comp-bar-fill" style="width:0%;background:${elem.color}" data-target="${visualWidth}"></div>
                </div>
                ${detailText ? `<div class="comp-bar-detail">${detailText}</div>` : ''}
            `;
            if (detailText) {
                bar.addEventListener('click', () => {
                    const detail = bar.querySelector('.comp-bar-detail') as HTMLElement;
                    detail?.classList.toggle('comp-bar-detail--open');
                });
            }
            bars.appendChild(bar);
        });

        section.appendChild(bars);
        parent.appendChild(section);

        // Animate bars after paint
        requestAnimationFrame(() => requestAnimationFrame(() => {
            bars.querySelectorAll('.comp-bar-fill').forEach(b => {
                const el = b as HTMLElement;
                el.style.width = el.dataset.target + '%';
            });
        }));
    }

    /** Renders bubble/glance visual for top elements */
    function renderBubbles(parent: HTMLElement, elements: { sym: string; massPercent: number; color: string }[], title: string, icon: string) {
        const sorted = [...elements].sort((a, b) => b.massPercent - a.massPercent);
        const top4 = sorted.slice(0, 4);
        const rest = sorted.slice(4);
        const section = document.createElement('div');
        section.className = 'comp-section';
        section.innerHTML = `
            <div class="comp-section-title"><span class="comp-section-icon">${icon}</span>${title}</div>
            <div class="comp-bubble-wrap">
                ${top4.map(e => `
                    <div class="comp-bubble" style="--bubble-color:${e.color};--bubble-size:${Math.max(Math.sqrt(e.massPercent) * 38, 48)}px">
                        <div class="comp-bubble-sym">${e.sym}</div>
                        <div class="comp-bubble-pct">${e.massPercent}%</div>
                    </div>
                `).join('')}
                ${rest.length ? `
                    <div class="comp-bubble comp-bubble--rest" style="--bubble-color:#64748b;--bubble-size:48px">
                        <div class="comp-bubble-sym">+${rest.length}</div>
                        <div class="comp-bubble-pct">&lt;1%</div>
                    </div>
                ` : ''}
            </div>
        `;
        parent.appendChild(section);
    }

    /** Renders fun facts grid */
    function renderFunFacts(parent: HTMLElement, facts: { icon: string; text: string; textEn: string }[], title: string) {
        const section = document.createElement('div');
        section.className = 'comp-section';
        section.innerHTML = `
            <div class="comp-section-title"><span class="comp-section-icon">💡</span>${title}</div>
            <div class="comp-facts-list">
                ${facts.map(f => `
                    <div class="comp-fact-card">
                        <span class="comp-fact-icon">${f.icon}</span>
                        <p class="comp-fact-text">${isEN ? f.textEn : f.text}</p>
                    </div>
                `).join('')}
            </div>
        `;
        parent.appendChild(section);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // HUMAN BODY
    // ─────────────────────────────────────────────────────────────────────────
    function renderHuman() {
        const el = document.createElement('div');
        el.className = 'comp-human animate-in';

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
        content.appendChild(el);

        renderElementBars(el, humanBodyElements,
            isEN ? 'Atomic Composition by Mass' : 'Komposisi Atom berdasarkan Massa', '⚛️');

        renderBubbles(el, humanBodyElements,
            isEN ? 'At a Glance' : 'Sekilas Pandang', '🫧');

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

        renderFunFacts(el, bodyFunFacts, isEN ? 'Mind-Blowing Facts' : 'Fakta yang Mengejutkan');

        // Element CTA chips
        const ctaSection = document.createElement('div');
        ctaSection.className = 'comp-cta-section';
        const sorted = [...humanBodyElements].sort((a, b) => b.massPercent - a.massPercent);
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
            const symToN: Record<string, number> = {
                O: 8, C: 6, H: 1, N: 7, Ca: 20, P: 15, K: 19, S: 16,
                Na: 11, Cl: 17, Mg: 12, Fe: 26, Zn: 30, I: 53,
            };
            const n = symToN[chip.dataset.sym!];
            if (n) navigate(`/element/${n}`);
        });
        el.appendChild(ctaSection);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // EARTH
    // ─────────────────────────────────────────────────────────────────────────
    function renderEarth() {
        const el = document.createElement('div');
        el.className = 'comp-earth animate-in';

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

        const layersWrap = document.createElement('div');
        layersWrap.className = 'comp-section comp-earth-section';
        layersWrap.innerHTML = `
            <div class="comp-section-title">
                <span class="comp-section-icon">🔵</span>
                ${isEN ? 'Layers & Composition' : 'Lapisan & Komposisi Atom'}
            </div>
        `;

        // Concentric ring diagram
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

        content.appendChild(el);

        renderFunFacts(el, earthOverall.funFacts, isEN ? 'Earth Facts' : 'Fakta Bumi');

        // Animate on scroll
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

        // Diagram hover highlight
        diagram.addEventListener('mouseover', (e) => {
            const ring = (e.target as HTMLElement).closest('[data-layer]') as HTMLElement | null;
            const li = (e.target as HTMLElement).closest('.comp-earth-legend-item') as HTMLElement | null;
            const id = ring?.dataset.layer || li?.dataset.layer;
            if (id) {
                diagram.querySelectorAll('[data-layer]').forEach(el => {
                    (el as HTMLElement).style.opacity = el.getAttribute('data-layer') === id ? '1' : '0.4';
                });
                layerCards.querySelector(`[data-layer="${id}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
        diagram.addEventListener('mouseleave', () => {
            diagram.querySelectorAll('[data-layer]').forEach(el => { (el as HTMLElement).style.opacity = '1'; });
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // SUN
    // ─────────────────────────────────────────────────────────────────────────
    function renderSun() {
        const el = document.createElement('div');
        el.className = 'comp-sun animate-in';
        el.innerHTML = `
            <div class="comp-hero comp-hero--sun">
                <div class="comp-hero-icon">☀️</div>
                <div class="comp-hero-text">
                    <h1 class="comp-hero-title">${isEN ? 'The Sun, a Nuclear Furnace' : 'Matahari, Tungku Nuklir Raksasa'}</h1>
                    <p class="comp-hero-sub">${isEN
                ? '620 million tons of H fused into He every second · 4.6 billion years old'
                : '620 juta ton H difusikan menjadi He setiap detik · usia 4,6 miliar tahun'}</p>
                </div>
            </div>
        `;
        content.appendChild(el);

        renderElementBars(el, sunElements,
            isEN ? 'Atomic Composition by Mass' : 'Komposisi Atom berdasarkan Massa', '⚛️');

        renderBubbles(el, sunElements,
            isEN ? 'At a Glance' : 'Sekilas Pandang', '🫧');

        // Sun layers
        const layerSec = document.createElement('div');
        layerSec.className = 'comp-section';
        layerSec.innerHTML = `
            <div class="comp-section-title">
                <span class="comp-section-icon">🔥</span>
                ${isEN ? 'Solar Structure' : 'Struktur Matahari'}
            </div>
            <div class="comp-sun-layers">
                ${sunLayers.map(l => `
                    <div class="comp-sun-layer-card" style="--slc:${l.color}">
                        <div class="comp-sun-layer-header">
                            <span class="comp-sun-layer-icon">${l.icon}</span>
                            <div>
                                <div class="comp-sun-layer-name">${isEN ? l.nameEn : l.name}</div>
                                <div class="comp-sun-layer-meta">
                                    <span>📍 ${l.depth}</span>
                                    <span>🌡️ ${isEN ? l.tempEn : l.temp}</span>
                                </div>
                            </div>
                        </div>
                        <p class="comp-sun-layer-desc">${isEN ? l.descEn : l.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
        el.appendChild(layerSec);

        renderFunFacts(el, sunFunFacts, isEN ? 'Solar Facts' : 'Fakta Matahari');
    }

    // ─────────────────────────────────────────────────────────────────────────
    // PLANT
    // ─────────────────────────────────────────────────────────────────────────
    function renderPlant() {
        const el = document.createElement('div');
        el.className = 'comp-plant animate-in';
        el.innerHTML = `
            <div class="comp-hero comp-hero--plant">
                <div class="comp-hero-icon">🌿</div>
                <div class="comp-hero-text">
                    <h1 class="comp-hero-title">${isEN ? 'Plants: Carbon Made Alive' : 'Tumbuhan: Karbon yang Hidup'}</h1>
                    <p class="comp-hero-sub">${isEN
                ? 'Every oxygen atom you breathe was once CO₂ captured by a leaf'
                : 'Setiap atom oksigen yang kamu hirup dulu adalah CO₂ yang ditangkap daun'}</p>
                </div>
            </div>
        `;
        content.appendChild(el);

        renderElementBars(el, plantElements,
            isEN ? 'Atomic Composition by Mass' : 'Komposisi Atom berdasarkan Massa', '⚛️');

        renderBubbles(el, plantElements,
            isEN ? 'At a Glance' : 'Sekilas Pandang', '🫧');

        // Key plant processes
        const procSec = document.createElement('div');
        procSec.className = 'comp-section';
        procSec.innerHTML = `
            <div class="comp-section-title">
                <span class="comp-section-icon">⚗️</span>
                ${isEN ? 'Key Biochemical Processes' : 'Proses Biokimia Kunci'}
            </div>
            <div class="comp-plant-processes">
                ${plantProcesses.map(p => `
                    <div class="comp-plant-proc-card" style="--ppc:${p.color}">
                        <div class="comp-plant-proc-header">
                            <span class="comp-plant-proc-icon">${p.icon}</span>
                            <div class="comp-plant-proc-name">${isEN ? p.nameEn : p.name}</div>
                        </div>
                        <div class="comp-plant-proc-eq">${p.equation}</div>
                        <p class="comp-plant-proc-desc">${isEN ? p.descEn : p.desc}</p>
                        <div class="comp-plant-proc-atoms">
                            ${p.atoms.map(a => `<span class="comp-plant-proc-atom">${a}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        el.appendChild(procSec);

        renderFunFacts(el, plantFunFacts, isEN ? 'Plant Facts' : 'Fakta Tumbuhan');
    }

    // ─────────────────────────────────────────────────────────────────────────
    // UNIVERSE
    // ─────────────────────────────────────────────────────────────────────────
    function renderUniverse() {
        const el = document.createElement('div');
        el.className = 'comp-universe animate-in';
        el.innerHTML = `
            <div class="comp-hero comp-hero--universe">
                <div class="comp-hero-icon">🌌</div>
                <div class="comp-hero-text">
                    <h1 class="comp-hero-title">${isEN ? 'The Universe, Atom by Atom' : 'Alam Semesta, Atom demi Atom'}</h1>
                    <p class="comp-hero-sub">${isEN
                ? '13.8 billion years · ~2×10⁸⁰ atoms · 5% matter, 95% unknown'
                : '13,8 miliar tahun · ~2×10⁸⁰ atom · 5% materi, 95% tidak diketahui'}</p>
                </div>
            </div>
        `;
        content.appendChild(el);

        renderElementBars(el, universeElements,
            isEN ? 'Atomic Composition by Mass' : 'Komposisi Atom berdasarkan Massa', '⚛️');

        renderBubbles(el, universeElements,
            isEN ? 'At a Glance' : 'Sekilas Pandang', '🫧');

        // Universe timeline / eras
        const eraSec = document.createElement('div');
        eraSec.className = 'comp-section';
        eraSec.innerHTML = `
            <div class="comp-section-title">
                <span class="comp-section-icon">⏳</span>
                ${isEN ? 'Origin of Elements — Cosmic Timeline' : 'Asal Usul Elemen — Perjalanan Kosmos'}
            </div>
            <div class="comp-universe-timeline">
                ${universeEras.map((era, i) => `
                    <div class="comp-era-card" style="--erac:${era.color}">
                        <div class="comp-era-number">${i + 1}</div>
                        <div class="comp-era-body">
                            <div class="comp-era-header">
                                <span class="comp-era-icon">${era.icon}</span>
                                <div>
                                    <div class="comp-era-name">${isEN ? era.nameEn : era.name}</div>
                                    <div class="comp-era-time">${isEN ? era.timeAfterBigBangEn : era.timeAfterBigBang}</div>
                                </div>
                            </div>
                            <p class="comp-era-desc">${isEN ? era.descEn : era.desc}</p>
                            ${era.elementsFormed.length ? `
                                <div class="comp-era-elems">
                                    ${era.elementsFormed.map(sym => sym === 'ALL'
            ? `<span class="comp-era-elem-chip comp-era-elem-chip--all">${isEN ? 'All elements' : 'Semua elemen'}</span>`
            : `<span class="comp-era-elem-chip">${sym}</span>`
        ).join('')}
                                </div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        el.appendChild(eraSec);

        renderFunFacts(el, universeFunFacts, isEN ? 'Cosmic Facts' : 'Fakta Kosmis');
    }

    renderSubject(subject);

    return () => { };
}
