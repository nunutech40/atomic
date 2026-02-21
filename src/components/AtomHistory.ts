import { navigate } from '../core/router';

/* ─────────────────────────────────────────────────────────────────────
   ATOM HISTORY — Cinematic Timeline
   Gaya: Nolan/Snyder — setiap babak = satu scene film.
   6 Babak + Prolog + Epilog.
   ───────────────────────────────────────────────────────────────────── */

interface Chapter {
    id: string;
    era: string;
    year: string;
    protagonist: string;
    title: string;
    subtitle: string;
    conflict: string;
    body: string;
    twist: string;
    model: 'prolog' | 'solid' | 'billiard' | 'plum' | 'rutherford' | 'bohr' | 'quantum' | 'epilog';
    color: string;       // accent color for this chapter
    quote?: string;
    quoteAuthor?: string;
}

const CHAPTERS: Chapter[] = [
    {
        id: 'prolog',
        era: 'Prolog',
        year: '—',
        protagonist: '',
        title: '2.400 tahun\nperdebatan tentang sesuatu\nyang tak pernah terlihat.',
        subtitle: '',
        conflict: '',
        body: 'Apakah materi bisa terus dipotong selamanya? Atau ada batas terkecil yang tidak bisa dibagi lagi?\n\nSatu pertanyaan sederhana. Ribuan tahun untuk menjawabnya.',
        twist: '',
        model: 'prolog',
        color: '#a0a0b0',
        quote: '"Semua materi tersusun dari partikel tidak terlihat\nyang bergerak di ruang hampa."',
        quoteAuthor: '— Leucippus, ~450 SM',
    },
    {
        id: 'democritus',
        era: 'Babak I',
        year: '430 SM',
        protagonist: 'Democritus',
        title: 'Ide yang\ndikubur selama\n2.000 tahun.',
        subtitle: 'Yunani Kuno · 430 SM',
        conflict: 'vs. Aristoteles',
        body: 'Democritus menyebutnya "atomos" — yang tak bisa dibagi. Ia berpendapat bahwa perbedaan antara besi dan air hanyalah bentuk dan susunan partikel terkecil yang sama.\n\nIdenya brilian. Tapi tidak bisa dibuktikan. Dan ia tidak setuju dengan Aristoteles — filsuf paling berpengaruh di zamannya.',
        twist: 'Aristoteles menolak total. Ia menang. Ide atom terkubur hampir 2.000 tahun — bukan karena salah, tapi karena tidak populer.',
        model: 'solid',
        color: '#c0a060',
        quote: '"Tidak ada yang muncul dari ketiadaan."',
        quoteAuthor: '— Democritus',
    },
    {
        id: 'dalton',
        era: 'Babak II',
        year: '1803',
        protagonist: 'John Dalton',
        title: 'Akhirnya,\nilmu mulai\nbicara.',
        subtitle: 'Manchester, Inggris · 1803',
        conflict: 'Kimia vs. Filsafat',
        body: 'Dua ribu tahun setelah Democritus, John Dalton membuat atom menjadi sains — bukan sekadar filsafat. Ia mengukur rasio massa dalam reaksi kimia dan menyimpulkan:\n\nSetiap elemen tersusun dari atom yang identik. Atom berbeda elemen memiliki massa berbeda. Atom bergabung dalam rasio sederhana membentuk senyawa.',
        twist: 'Ironi yang tidak pernah hilang: Dalton buta warna. Ia tidak bisa melihat perbedaan warna — namun mampu "melihat" perbedaan atom yang tidak terlihat oleh siapa pun.',
        model: 'billiard',
        color: '#7090c0',
        quote: '"Materi tidak bisa diciptakan atau dihancurkan."',
        quoteAuthor: '— Hukum Kekekalan Massa',
    },
    {
        id: 'thomson',
        era: 'Babak III',
        year: '1897',
        protagonist: 'J.J. Thomson',
        title: 'Atom bisa\ndibagi.\nSemua salah.',
        subtitle: 'Cambridge, Inggris · 1897',
        conflict: 'Eksperimen tabung katoda',
        body: 'J.J. Thomson menembakkan listrik melalui tabung hampa udara. Sesuatu mengalir — sesuatu yang jauh lebih kecil dari atom. Ia menamakannya "elektron".\n\nImplikasinya mengguncang sains: atom bukan partikel terkecil. Atom punya bagian dalam. Atom bisa dibagi.',
        twist: 'Thomson membayangkan atom seperti puding plum — elektron negatif tersebar merata dalam "adonan" positif. Modelnya elegan. Muridnya sendiri yang menghancurkannya.',
        model: 'plum',
        color: '#a060c0',
        quote: '"Saya telah menemukan sesuatu yang jauh lebih kecil dari atom."',
        quoteAuthor: '— J.J. Thomson, 1897',
    },
    {
        id: 'rutherford',
        era: 'Babak IV',
        year: '1911',
        protagonist: 'Ernest Rutherford',
        title: 'Sebagian besar\natom adalah\nruang kosong.',
        subtitle: 'Manchester, Inggris · 1911',
        conflict: 'Gold Foil Experiment',
        body: 'Rutherford menembakkan partikel alfa ke lembaran emas tipis. Menurutnya — dan model Thomson — partikel harus menembus lurus, atau sedikit membelok.\n\nSebagian besar memang menembus. Tapi beberapa memantul balik dengan sudut hampir 180°.',
        twist: '"Itu seperti menembakkan peluru ke tisu, dan peluru itu memantul balik mengenai kamu." Atom hampir seluruhnya ruang kosong — massanya terpusat di inti kecil yang disebut nukleus.',
        model: 'rutherford',
        color: '#e07040',
        quote: '"Itu adalah hal paling luar biasa yang pernah terjadi dalam hidupku."',
        quoteAuthor: '— Ernest Rutherford',
    },
    {
        id: 'bohr',
        era: 'Babak V',
        year: '1913',
        protagonist: 'Niels Bohr',
        title: 'Elektron\nmelompat-lompat.\nTapi kenapa?',
        subtitle: 'Copenhagen, Denmark · 1913',
        conflict: 'Spectrum Hidrogen',
        body: 'Model Rutherford punya masalah fatal: fisika klasik memprediksi elektron yang berputar akan memancarkan energi terus-menerus, lalu jatuh ke nukleus dalam sekian detik.\n\nBohr menolak fisika klasik. Ia mengusulkan: elektron hanya bisa ada di "orbit" tertentu dengan energi pasti. Mereka lompat antar orbit dengan menyerap atau memancarkan cahaya.',
        twist: 'Model Bohr sempurna untuk hidrogen. Tapi gagal untuk atom lain. Ia menyelamatkan atom, tapi membuka pertanyaan yang jauh lebih besar: mengapa elektron berperilaku seperti ini?',
        model: 'bohr',
        color: '#40a080',
        quote: '"Siapapun yang tidak terkejut dengan mekanika kuantum belum benar-benar memahaminya."',
        quoteAuthor: '— Niels Bohr',
    },
    {
        id: 'quantum',
        era: 'Babak VI',
        year: '1926',
        protagonist: 'Schrödinger & Heisenberg',
        title: 'Elektron tidak\npunya posisi.\nIni bukan kesalahan.',
        subtitle: 'Eropa · 1926',
        conflict: 'Prinsip Ketidakpastian',
        body: 'Werner Heisenberg membuktikan: kamu tidak bisa mengetahui posisi DAN kecepatan elektron secara bersamaan. Semakin akurat kamu mengukur satu, semakin kabur yang lain.\n\nErwin Schrödinger melengkapi dengan persamaan gelombang: elektron bukan bola kecil yang berputar — ia adalah awan probabilitas. Ia "ada" di mana-mana sekaligus... hingga diukur.',
        twist: 'Ini bukan ketidaktahuan. Ini realitas fundamental alam semesta. Einstein menolak sampai akhir hayatnya. "Tuhan tidak bermain dadu," katanya. Tapi eksperimen terus membuktikan sebaliknya.',
        model: 'quantum',
        color: '#6080e0',
        quote: '"Tuhan tidak bermain dadu dengan alam semesta." — Einstein\n"Jangan katakan pada Tuhan apa yang harus ia lakukan." — Bohr',
        quoteAuthor: '',
    },
    {
        id: 'epilog',
        era: 'Epilog',
        year: 'Kini',
        protagonist: '',
        title: 'Atom tetap\nmenyimpan\nmisteri.',
        subtitle: '',
        conflict: '',
        body: 'Kita sudah mengetahui banyak. Tapi fisikawan masih belum bisa menyatukan mekanika kuantum dengan relativitas umum Einstein.\n\nMakin kita mendalami, makin banyak pertanyaan yang muncul. Dan itu — justru — yang membuat sains begitu indah.',
        twist: '',
        model: 'epilog',
        color: '#7c73ff',
        quote: '"Jika kamu berpikir kamu mengerti mekanika kuantum,\nitu artinya kamu tidak mengerti mekanika kuantum."',
        quoteAuthor: '— Richard Feynman',
    },
];

/* ────── SVG / CSS Atom Model per chapter ────── */
function renderAtomModel(model: Chapter['model'], color: string): string {
    switch (model) {
        case 'prolog':
            return `<div class="amodel-prolog">
                <div class="amodel-ring r1"></div>
                <div class="amodel-ring r2"></div>
                <div class="amodel-ring r3"></div>
                <div class="amodel-prolog-text">?</div>
            </div>`;

        case 'solid':
            return `<div class="amodel-solid" style="background:radial-gradient(circle at 35% 30%, ${color}ff, ${color}99, ${color}44);">
                <div class="amodel-solid-label">atomos</div>
            </div>`;

        case 'billiard':
            return `<div class="amodel-billiard">
                <div class="amodel-billiard-ball" style="background:radial-gradient(circle at 35% 30%, ${color}ff, ${color}66)">
                    <div class="amodel-billiard-stripe"></div>
                </div>
                <div class="amodel-billiard-label">Atom Dalton</div>
            </div>`;

        case 'plum':
            return `<div class="amodel-plum">
                <div class="amodel-plum-cloud">
                    ${Array.from({ length: 12 }).map((_, i) => `<div class="amodel-plum-e" style="--i:${i}">e⁻</div>`).join('')}
                    <div class="amodel-plum-label">+</div>
                </div>
                <div class="amodel-plum-caption">Model Plum Pudding</div>
            </div>`;

        case 'rutherford':
            return `<div class="amodel-rutherford">
                <div class="amodel-rfield">
                    ${Array.from({ length: 8 }).map((_, i) => `<div class="amodel-alpha" style="--i:${i}"></div>`).join('')}
                    <div class="amodel-rnucleus">Au</div>
                </div>
                <div class="amodel-rutherford-caption">Foil Emas + Partikel α</div>
            </div>`;

        case 'bohr':
            return `<div class="amodel-bohr">
                <div class="amodel-bohr-nucleus">p⁺</div>
                <div class="amodel-bohr-orbit o1"><div class="amodel-bohr-e">e⁻</div></div>
                <div class="amodel-bohr-orbit o2"><div class="amodel-bohr-e" style="animation-delay:-0.7s">e⁻</div></div>
                <div class="amodel-bohr-orbit o3"><div class="amodel-bohr-e" style="animation-delay:-1.4s">e⁻</div></div>
                <div class="amodel-bohr-jump" id="bohr-jump"></div>
            </div>`;

        case 'quantum':
            return `<canvas id="quantum-canvas" class="amodel-quantum-canvas" width="300" height="300"></canvas>`;

        case 'epilog':
            return `<div class="amodel-epilog">
                <div class="amodel-epilog-core"></div>
                <div class="amodel-epilog-wave w1"></div>
                <div class="amodel-epilog-wave w2"></div>
                <div class="amodel-epilog-wave w3"></div>
                <div class="amodel-epilog-text">∞</div>
            </div>`;
    }
}

/* ────── Render chapter HTML ────── */
function renderChapter(ch: Chapter, idx: number): string {
    const isInvert = idx % 2 === 1; // alternate layout
    const modelSide = isInvert ? 'right' : 'left';

    return `
    <section class="ah-chapter" id="ch-${ch.id}" data-chapter="${ch.id}"
             style="--ch-color:${ch.color}">
        <div class="ah-chapter-inner ${isInvert ? 'ah-invert' : ''}">

            <!-- Model visual -->
            <div class="ah-model-wrap ah-model-${modelSide}">
                <div class="ah-model-stage">
                    ${renderAtomModel(ch.model, ch.color)}
                </div>
            </div>

            <!-- Text content -->
            <div class="ah-text-wrap">
                ${ch.era ? `<div class="ah-era-tag reveal-up">${ch.era} · ${ch.year}</div>` : ''}
                ${ch.protagonist ? `<div class="ah-protagonist reveal-up">${ch.protagonist}</div>` : ''}
                <h2 class="ah-chapter-title reveal-up">${ch.title.replace(/\n/g, '<br>')}</h2>
                ${ch.subtitle ? `<div class="ah-subtitle reveal-up">${ch.subtitle}</div>` : ''}

                ${ch.conflict ? `
                <div class="ah-conflict reveal-up">
                    <span class="ah-conflict-icon">⚔</span>
                    <span>${ch.conflict}</span>
                </div>` : ''}

                <div class="ah-body reveal-up">
                    ${ch.body.split('\n\n').map(p => `<p>${p}</p>`).join('')}
                </div>

                ${ch.twist ? `
                <div class="ah-twist reveal-up">
                    <div class="ah-twist-label">↯ Plot Twist</div>
                    <div class="ah-twist-body">${ch.twist}</div>
                </div>` : ''}

                ${ch.quote ? `
                <blockquote class="ah-quote reveal-up">
                    <div class="ah-quote-text">${ch.quote.replace(/\n/g, '<br>')}</div>
                    ${ch.quoteAuthor ? `<div class="ah-quote-author">${ch.quoteAuthor}</div>` : ''}
                </blockquote>` : ''}
            </div>
        </div>

        <!-- Chapter fade divider (not on last) -->
        ${idx < CHAPTERS.length - 1 ? '<div class="ah-chapter-divider"></div>' : ''}
    </section>`;
}

/* ────── MAIN EXPORT ────── */
export function renderAtomHistory(container: HTMLElement): () => void {
    const cleanups: Array<() => void> = [];

    container.innerHTML = `
    <div class="ah-root">

        <!-- ── Back button ── -->
        <button class="ah-back-btn" id="ah-back">
            <span class="ah-back-arrow">←</span>
            <span>Kembali ke Beranda</span>
        </button>

        <!-- ── Sticky progress timeline ── -->
        <div class="ah-timeline-bar" id="ah-timeline-bar">
            <div class="ah-timeline-track">
                ${CHAPTERS.map((ch, i) => `
                <button class="ah-tl-node ${i === 0 ? 'active' : ''}" 
                        data-idx="${i}" 
                        title="${ch.protagonist || ch.era}"
                        id="tl-node-${i}">
                    <span class="ah-tl-dot"></span>
                    <span class="ah-tl-label">${ch.year === '—' ? ch.era : ch.year}</span>
                </button>
                `).join('')}
                <div class="ah-tl-progress" id="ah-tl-progress"></div>
            </div>
        </div>

        <!-- ── Opening black screen ── -->
        <div class="ah-opening" id="ah-opening">
            <div class="ah-opening-text" id="ah-opening-text">
                <div class="ah-open-line1">Ini bukan pelajaran sejarah.</div>
                <div class="ah-open-line2">Ini cerita tentang manusia yang berjuang memahami<br>sesuatu yang tidak pernah bisa mereka lihat.</div>
                <button class="ah-open-start" id="ah-open-start">Mulai ↓</button>
            </div>
        </div>

        <!-- ── Chapters ── -->
        <main class="ah-chapters" id="ah-chapters">
            ${CHAPTERS.map((ch, i) => renderChapter(ch, i)).join('')}

            <!-- Final CTA -->
            <section class="ah-final-cta">
                <div class="ah-final-inner">
                    <div class="ah-final-title">Sekarang kamu tahu dari mana atom berasal.</div>
                    <p class="ah-final-sub">118 elemen. Masing-masing punya kisah yang sama mengagumkan.</p>
                    <div class="ah-final-btns">
                        <button class="ah-final-btn primary" id="ah-goto-explore">
                            🔬 Jelajahi 118 Elemen
                        </button>
                        <button class="ah-final-btn secondary" id="ah-goto-home">
                            ← Kembali ke Beranda
                        </button>
                    </div>
                </div>
            </section>
        </main>

    </div>`;

    // ── Opening sequence ──
    const opening = document.getElementById('ah-opening')!;
    const openStart = document.getElementById('ah-open-start')!;
    const chapters = document.getElementById('ah-chapters')!;

    // Auto-dismiss opening after 1s if user scrolls
    let openingDismissed = false;
    function dismissOpening() {
        if (openingDismissed) return;
        openingDismissed = true;
        opening.classList.add('ah-opening-out');
        setTimeout(() => { opening.style.display = 'none'; }, 800);
    }
    openStart.addEventListener('click', () => {
        dismissOpening();
        setTimeout(() => {
            document.getElementById('ch-prolog')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });
    chapters.addEventListener('scroll', dismissOpening, { once: true, passive: true });
    container.addEventListener('wheel', dismissOpening, { once: true, passive: true });

    // ── Scroll reveal ──
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

    // ── Timeline progress ──
    const timelineNodes = container.querySelectorAll('.ah-tl-node');
    const progressBar = document.getElementById('ah-tl-progress')!;
    const chapterSections = container.querySelectorAll('.ah-chapter');

    const chapterObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const id = (e.target as HTMLElement).dataset.chapter!;
                const idx = CHAPTERS.findIndex(c => c.id === id);
                if (idx >= 0) {
                    timelineNodes.forEach((n, i) => {
                        n.classList.toggle('active', i <= idx);
                    });
                    // progress width
                    const pct = idx / (CHAPTERS.length - 1) * 100;
                    progressBar.style.width = pct + '%';
                }
            }
        });
    }, { threshold: 0.3 });
    chapterSections.forEach(s => chapterObs.observe(s));
    cleanups.push(() => chapterObs.disconnect());

    // Timeline node click → scroll to chapter
    timelineNodes.forEach((node, i) => {
        node.addEventListener('click', () => {
            dismissOpening();
            const chId = CHAPTERS[i].id;
            document.getElementById(`ch-${chId}`)?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ── Quantum canvas animation ──
    function initQuantumCanvas() {
        const canvas = document.getElementById('quantum-canvas') as HTMLCanvasElement | null;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        const W = canvas.width, H = canvas.height;
        const cx = W / 2, cy = H / 2;

        let raf = 0;
        let t = 0;

        function drawCloud() {
            ctx.clearRect(0, 0, W, H);
            t += 0.018;

            // Probability cloud — many dots with gaussian distribution
            ctx.fillStyle = 'rgba(96, 128, 224, 0.55)';
            for (let i = 0; i < 180; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.abs(gaussRand()) * 60 + Math.abs(gaussRand()) * 20;
                const x = cx + Math.cos(angle + t * 0.4) * r;
                const y = cy + Math.sin(angle + t * 0.3) * r * 0.7;
                const size = Math.random() * 2.5 + 0.5;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Nucleus
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 16);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.4, '#a0b8ff');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(cx, cy, 14, 0, Math.PI * 2);
            ctx.fill();

            // Uncertainty ring
            ctx.strokeStyle = 'rgba(96,128,224,0.25)';
            ctx.lineWidth = 1;
            for (let r = 30; r <= 100; r += 25) {
                ctx.beginPath();
                ctx.arc(cx, cy, r + Math.sin(t * 2 + r) * 5, 0, Math.PI * 2);
                ctx.stroke();
            }

            raf = requestAnimationFrame(drawCloud);
        }
        drawCloud();
        cleanups.push(() => cancelAnimationFrame(raf));
    }

    function gaussRand() {
        let u = 0, v = 0;
        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();
        return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    }

    // Init quantum canvas when its section comes into view
    const quantumObs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            initQuantumCanvas();
            quantumObs.disconnect();
        }
    }, { threshold: 0.1 });
    const quantumSection = document.getElementById('ch-quantum');
    if (quantumSection) quantumObs.observe(quantumSection);
    cleanups.push(() => quantumObs.disconnect());

    // ── Nav buttons ──
    document.getElementById('ah-back')?.addEventListener('click', () => navigate('/'));
    document.getElementById('ah-goto-home')?.addEventListener('click', () => navigate('/'));
    document.getElementById('ah-goto-explore')?.addEventListener('click', () => navigate('/explore'));

    return () => cleanups.forEach(fn => fn());
}
