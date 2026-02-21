import { elements } from '../data/elements';
import { categories } from '../data/categories';
import { AtomScene } from '../three/atomScene';
import { getElectronShells, getShellLabel } from '../utils/electronConfig';
import { t } from '../core/i18n';
import { navigate } from '../core/router';
import { getDiscoverer } from '../data/discoverers';
import { getOrigin } from '../data/origins';


export function renderElementDetail(container: HTMLElement, n: number) {
    const el = elements.find(e => e.n === n);
    if (!el) {
        container.innerHTML = `<p style="color:var(--text-2);padding:24px">Elemen tidak ditemukan.</p>`;
        return () => { };
    }

    const cat = categories[el.cat];
    const color = cat?.color || '#868e96';

    // Prev/Next element
    const prevEl = elements.find(e => e.n === n - 1);
    const nextEl = elements.find(e => e.n === n + 1);

    container.innerHTML = '';

    // ── Top bar: back + prev/next ────────────────────────────────────────
    const topBar = document.createElement('div');
    topBar.style.cssText = 'display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap;';

    const back = document.createElement('button');
    back.className = 'back-btn';
    back.textContent = t('actions.backToTable');
    back.addEventListener('click', () => navigate('/'));
    topBar.appendChild(back);

    const navSpacer = document.createElement('span');
    navSpacer.style.flex = '1';
    topBar.appendChild(navSpacer);

    if (prevEl) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'elem-nav-btn';
        prevBtn.innerHTML = `← <span class="elem-nav-sym">${prevEl.sym}</span> <span class="elem-nav-name">${prevEl.n}. ${prevEl.name}</span>`;
        prevBtn.addEventListener('click', () => navigate(`/element/${prevEl.n}`));
        topBar.appendChild(prevBtn);
    }

    if (nextEl) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'elem-nav-btn';
        nextBtn.innerHTML = `<span class="elem-nav-name">${nextEl.n}. ${nextEl.name}</span> <span class="elem-nav-sym">${nextEl.sym}</span> →`;
        nextBtn.addEventListener('click', () => navigate(`/element/${nextEl.n}`));
        topBar.appendChild(nextBtn);
    }

    container.appendChild(topBar);

    // ── Detail layout ─────────────────────────────────────────────────────
    const view = document.createElement('div');
    view.className = 'detail-view animate-in';
    container.appendChild(view);

    // ── LEFT: 3D Atom + electron info ────────────────────────────────────
    const left = document.createElement('div');
    left.className = 'detail-panel';

    // 3D atom model label
    const modelLabel = document.createElement('div');
    modelLabel.className = 'model-label';
    modelLabel.innerHTML = `
        <span class="model-badge">⚛ Model Bohr</span>
        <span class="model-hint">Representasi visual — orbit elektron disederhanakan</span>
    `;
    left.appendChild(modelLabel);

    const canvasWrap = document.createElement('div');
    canvasWrap.className = 'atom-canvas-wrap';
    canvasWrap.style.cssText = 'border-radius:12px;min-height:300px;';
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'width:100%;height:100%;display:block;';
    canvasWrap.appendChild(canvas);
    left.appendChild(canvasWrap);

    const hintEl = document.createElement('p');
    hintEl.style.cssText = 'font-size:11px;color:var(--text-3);text-align:center;margin-top:8px;';
    hintEl.textContent = `${t('actions.rotate')} · ${t('actions.zoom')}`;
    left.appendChild(hintEl);

    // Electron shells visual
    const shells = getElectronShells(el.n);
    const shellsSec = document.createElement('div');
    shellsSec.style.marginTop = '20px';
    shellsSec.innerHTML = `<div class="section-title">${t('element.shells')}</div>`;
    const shellsViz = document.createElement('div');
    shellsViz.className = 'shells-viz';
    shells.forEach((count, i) => {
        const pill = document.createElement('div');
        pill.className = 'shell-pill';
        pill.title = `Kulit ${getShellLabel(i)}: ${count} elektron`;
        pill.innerHTML = `<span>${getShellLabel(i)}:</span> ${count}`;
        shellsViz.appendChild(pill);
    });
    shellsSec.appendChild(shellsViz);

    const configSec = document.createElement('div');
    configSec.style.marginTop = '16px';
    configSec.innerHTML = `
        <div class="section-title">${t('element.electronConfig')}</div>
        <div class="electron-config-display">${el.config || '—'}</div>
    `;
    left.appendChild(shellsSec);
    left.appendChild(configSec);

    // Total electron count callout
    const totalE = shells.reduce((a, b) => a + b, 0);
    if (totalE > 0) {
        const eSummary = document.createElement('div');
        eSummary.style.cssText = 'margin-top:12px;padding:10px 14px;background:var(--bg);border-radius:8px;border:1px solid var(--border);font-size:12px;color:var(--text-2);';
        eSummary.innerHTML = `<span style="color:var(--accent);font-weight:600;">${totalE}</span> elektron · <span style="color:var(--accent);font-weight:600;">${shells.length}</span> kulit`;
        left.appendChild(eSummary);
    }

    view.appendChild(left);

    // ── RIGHT: Info panel ────────────────────────────────────────────────
    const right = document.createElement('div');
    right.className = 'detail-panel';

    const header = document.createElement('div');
    header.className = 'detail-header';
    header.innerHTML = `
        <div class="detail-symbol" style="color:${color}">${el.sym}</div>
        <div class="detail-name">${el.name}</div>
        ${el.nameId ? `<div class="detail-name-id">${el.nameId}</div>` : ''}
        <div class="detail-badge" style="color:${color};border-color:${color}20;background:${cat?.bgColor || 'transparent'}">${cat?.nameId || el.cat}</div>
    `;
    right.appendChild(header);

    // ── Properties grid ──────────────────────────────────────────────────
    const propsTitle = document.createElement('div');
    propsTitle.innerHTML = `<div class="section-title" style="margin-top:16px">Data Fisika &amp; Kimia</div>`;
    right.appendChild(propsTitle);

    const propsGrid = document.createElement('div');
    propsGrid.className = 'props-grid';

    const fmt = (v: number | null, unit = '') => v !== null && v !== undefined ? `${v} ${unit}`.trim() : '—';
    const fmtMass = (m: string | number | unknown) => {
        if (Array.isArray(m)) return `[${(m as number[])[0]}]`;   // bracketed = radioactive
        if (typeof m === 'string') return m;
        if (typeof m === 'number') return m.toFixed(4);
        return String(m);
    };

    const props = [
        { label: t('element.atomicNumber'), value: String(el.n), icon: '#' },
        { label: t('element.atomicMass'), value: fmtMass(el.mass) + ' ' + t('units.amu'), icon: '⚖' },
        { label: t('element.period'), value: String(el.period), icon: '↕' },
        { label: t('element.group'), value: el.group <= 18 ? String(el.group) : '—', icon: '↔' },
        { label: t('element.phase'), value: el.phase ? el.phase.charAt(0).toUpperCase() + el.phase.slice(1) : '—', icon: '◉' },
        { label: t('element.density'), value: fmt(el.density, t('units.gcm3')), icon: 'ρ' },
        { label: t('element.meltingPoint'), value: fmt(el.mp, t('units.kelvin')), icon: '🌡' },
        { label: t('element.boilingPoint'), value: fmt(el.bp, t('units.kelvin')), icon: '💧' },
        { label: t('element.electronegativity'), value: fmt(el.en), icon: 'χ' },
        { label: t('element.ionizationEnergy'), value: fmt(el.ie, t('units.kjmol')), icon: 'IE' },
        { label: t('element.radius'), value: fmt(el.radius, t('units.pm')), icon: 'r' },
        { label: t('element.oxidationStates'), value: el.ox !== null ? String(el.ox) : '—', icon: '±' },
        { label: t('element.discoveredBy'), value: el.discovered || '—', icon: '👤' },
        { label: t('element.yearDiscovered'), value: el.year !== null ? String(el.year) : '—', icon: '📅' },
    ];

    props.forEach(p => {
        const item = document.createElement('div');
        item.className = 'prop-item';
        item.innerHTML = `
            <div class="prop-label">${p.label}</div>
            <div class="prop-value">${p.value}</div>
        `;
        propsGrid.appendChild(item);
    });

    right.appendChild(propsGrid);

    // ── Discoverer Card ──────────────────────────────────────────────────
    const discoverer = getDiscoverer(el.sym);
    if (discoverer) {
        const discSec = document.createElement('div');
        discSec.innerHTML = `<div class="section-title" style="margin-top:20px">Penemu</div>`;

        const card = document.createElement('div');
        card.className = 'discoverer-card';
        card.id = 'discoverer-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.innerHTML = `
            <img
                class="discoverer-thumb"
                src="${discoverer.photoUrl}"
                alt="${discoverer.name}"
                onerror="this.outerHTML='<div class=discoverer-thumb-fallback>👤</div>'"
            />
            <div class="discoverer-card-info">
                <div class="discoverer-card-label">Penemu &amp; Pengisolasi</div>
                <div class="discoverer-card-name">${discoverer.name}</div>
                <div class="discoverer-card-meta">${discoverer.nationality} · ${discoverer.born}–${discoverer.died}</div>
            </div>
            <div class="discoverer-card-cta">Selengkapnya →</div>
        `;
        card.addEventListener('click', () => navigate(`/discoverer/${el.sym}`));
        card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/discoverer/${el.sym}`); });

        discSec.appendChild(card);
        right.appendChild(discSec);
    }

    // ── Cosmic Origin Card ───────────────────────────────────────────────
    const origin = getOrigin(el.sym);
    if (origin) {
        const originSec = document.createElement('div');
        originSec.style.marginTop = '20px';
        originSec.innerHTML = `<div class="section-title">Asal Usul Kosmik</div>`;

        const originCard = document.createElement('div');
        originCard.className = 'origin-card';
        originCard.style.cssText = `
            border-radius:12px;
            border:1px solid ${origin.color}30;
            background:${origin.color}10;
            padding:16px;
            cursor:pointer;
            transition:all .2s;
        `;
        originCard.innerHTML = `
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
                <div style="font-size:28px;line-height:1;">${origin.icon}</div>
                <div>
                    <div style="font-size:11px;color:${origin.color};font-weight:700;letter-spacing:.08em;text-transform:uppercase;">${origin.label}</div>
                    <div style="font-size:13px;color:var(--text-1);font-weight:600;margin-top:2px;">${origin.tagline}</div>
                </div>
            </div>
            <div class="origin-story" style="font-size:12.5px;color:var(--text-2);line-height:1.7;display:none;">
                ${origin.story.split('\n\n').map(p => `<p style="margin:0 0 8px 0;">${p}</p>`).join('')}
            </div>
            <div class="origin-toggle" style="font-size:11px;color:${origin.color};margin-top:6px;font-weight:600;">Baca selengkapnya ▾</div>
        `;

        let expanded = false;
        originCard.addEventListener('click', () => {
            expanded = !expanded;
            const storyEl = originCard.querySelector('.origin-story') as HTMLElement;
            const toggleEl = originCard.querySelector('.origin-toggle') as HTMLElement;
            storyEl.style.display = expanded ? 'block' : 'none';
            toggleEl.textContent = expanded
                ? 'Tutup ▴'
                : 'Baca selengkapnya ▾';
            toggleEl.style.color = origin.color;
        });
        originCard.addEventListener('mouseenter', () => { originCard.style.borderColor = origin.color + '60'; });
        originCard.addEventListener('mouseleave', () => { originCard.style.borderColor = origin.color + '30'; });

        originSec.appendChild(originCard);
        right.appendChild(originSec);
    }

    // Description
    if (el.desc) {
        const descSec = document.createElement('div');
        descSec.style.marginTop = '16px';
        descSec.innerHTML = `
            <div class="section-title">${t('element.description')}</div>
            <p class="desc-text">${el.desc}</p>
        `;
        right.appendChild(descSec);
    }

    // Fun Fact
    if (el.funFact) {
        const factSec = document.createElement('div');
        factSec.style.cssText = 'margin-top:14px;';
        factSec.innerHTML = `
            <div class="fun-fact-card">
                <span class="fun-fact-icon">💡</span>
                <div>
                    <div class="fun-fact-label">Tahukah kamu?</div>
                    <div class="fun-fact-text">${el.funFact}</div>
                </div>
            </div>
        `;
        right.appendChild(factSec);
    }

    // Radioactive warning
    if (Array.isArray(el.mass)) {
        const warning = document.createElement('div');
        warning.className = 'radioactive-badge';
        warning.innerHTML = `☢ Elemen Radioaktif — massa pada kurung siku menunjukkan isotop paling stabil`;
        right.appendChild(warning);
    }

    // ── Related Elements ─────────────────────────────────────────────────
    const isLantAct = (n: number) => (n >= 57 && n <= 71) || (n >= 89 && n <= 103);
    const elIsLantAct = isLantAct(el.n);

    const sameGroup = el.group <= 18 && !elIsLantAct
        ? elements.filter(e => e.n !== el.n && e.group === el.group && !isLantAct(e.n)).slice(0, 6)
        : elIsLantAct
            ? elements.filter(e => e.n !== el.n && isLantAct(e.n) && e.period === el.period).slice(0, 6)
            : [];
    const samePeriod = elements.filter(e => e.n !== el.n && e.period === el.period && !isLantAct(e.n)).slice(0, 7);

    if (sameGroup.length > 0 || samePeriod.length > 0) {
        const relSec = document.createElement('div');
        relSec.style.marginTop = '20px';

        const renderGroup = (label: string, icon: string, list: typeof sameGroup) => {
            if (!list.length) return '';
            return `
                <div class="related-group-label">${icon} ${label}</div>
                <div class="related-chips">
                    ${list.map(re => {
                const rc = categories[re.cat];
                return `<button class="related-chip" data-n="${re.n}"
                            style="--chip-color:${rc?.color || '#868e96'};--chip-bg:${rc?.bgColor || 'rgba(134,142,150,0.1)'}">
                            <span class="related-chip-sym">${re.sym}</span>
                            <span class="related-chip-num">${re.n}</span>
                        </button>`;
            }).join('')}
                </div>`;
        };

        relSec.innerHTML = `
            <div class="section-title">Elemen Terkait</div>
            ${renderGroup('Golongan sama', '↕', sameGroup)}
            ${renderGroup('Periode sama', '↔', samePeriod)}
        `;

        relSec.addEventListener('click', e => {
            const btn = (e.target as HTMLElement).closest('[data-n]') as HTMLElement | null;
            if (btn) navigate(`/element/${btn.dataset.n}`);
        });

        right.appendChild(relSec);
    }

    view.appendChild(right);

    // ── Init 3D — ResizeObserver waits for real layout dimensions ─────────
    let scene: AtomScene | null = null;
    let initialized = false;
    const ro = new ResizeObserver((entries) => {
        const entry = entries[0];
        const w = entry.contentRect.width || 300;
        if (!initialized && w > 0) {
            initialized = true;
            canvasWrap.style.height = w + 'px';
            canvas.width = w;
            canvas.height = w;
            try {
                scene = new AtomScene(canvas, color);
                scene.build(el.n);
                scene.start();
            } catch (err) {
                console.error('AtomScene error:', err);
                canvasWrap.innerHTML = `<p style="color:var(--text-3);padding:24px;text-align:center;font-size:12px;">3D tidak tersedia</p>`;
            }
        } else if (initialized && scene) {
            const nw = entry.contentRect.width || 300;
            canvasWrap.style.height = nw + 'px';
            scene.resize(nw, nw);
        }
    });
    ro.observe(canvasWrap);

    return () => { scene?.destroy(); ro.disconnect(); };
}
