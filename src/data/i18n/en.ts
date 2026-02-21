export default {
    app: { title: 'Atomic', subtitle: 'Interactive 3D Atom Explorer' },
    nav: {
        home: 'Home',
        explore: 'Periodic Table',
        lab: 'Chem Lab',
        phenomena: 'Phenomena',
        search: 'Search element...',
        language: 'Language',
        theme: 'Theme',
    },
    element: {
        atomicNumber: 'Atomic Number', atomicMass: 'Atomic Mass', protons: 'Protons', neutrons: 'Neutrons',
        electrons: 'Electrons', electronConfig: 'Electron Configuration', shells: 'Electron Shells',
        radius: 'Atomic Radius', phase: 'Phase', category: 'Category', density: 'Density',
        meltingPoint: 'Melting Point', boilingPoint: 'Boiling Point', electronegativity: 'Electronegativity',
        discoveredBy: 'Discovered by', yearDiscovered: 'Year Discovered', description: 'Description',
        oxidationStates: 'Oxidation States', ionizationEnergy: 'Ionization Energy',
        block: 'Block', group: 'Group', period: 'Period',
    },
    phases: { solid: 'Solid', liquid: 'Liquid', gas: 'Gas', unknown: 'Unknown' },
    units: { pm: 'pm', amu: 'amu', kelvin: 'K', kjmol: 'kJ/mol', gcm3: 'g/cm³' },
    actions: { backToTable: '← Back to Table', compare: 'Compare', rotate: 'Drag to rotate', zoom: 'Scroll to zoom' },
    categories: {
        'alkali-metal': 'Alkali Metal', 'alkaline-earth': 'Alkaline Earth Metal', 'transition-metal': 'Transition Metal',
        'post-transition': 'Post-Transition Metal', 'metalloid': 'Metalloid', 'nonmetal': 'Reactive Nonmetal',
        'halogen': 'Halogen', 'noble-gas': 'Noble Gas', 'lanthanide': 'Lanthanide', 'actinide': 'Actinide', 'unknown': 'Unknown',
    },

    // ─── Dashboard ──────────────────────────────────────────────────────────
    dash: {
        heroLabel: '⚛ one carbon atom',
        heroTitle: 'Everything\nis made of this.',
        heroSub: 'Your body contains <span class="dash-hero-num">7,000,000,000,000,000,000,000,000,000</span> atoms.<br>Every single one was once forged inside a star.',
        heroScroll: 'Scroll to explore ↓',

        ch1Tag: 'Chapter 1',
        ch1Title: 'How small is an atom, really?',
        ch1Sub: 'Drag the slider to grasp a scale your brain wasn\'t built to imagine.',
        ch1Fact: 'If an atom were the size of a football field, its nucleus would be a grain of dust sitting at the center.',

        ch2Tag: 'Chapter 2',
        ch2Title: 'What\'s actually inside?',
        ch2Sub: 'Click each particle to learn more.',

        ch3Tag: 'Chapter 3',
        ch3Title: 'Every element has a personality.',
        ch3Sub: 'From explosive metals to gas that makes your voice squeaky — 118 elements, 118 different characters.',
        ch3Explore: '→ Explore All 118 Elements',

        ch4Tag: 'Chapter 4',
        ch4Title: 'Atoms don\'t work alone.',
        ch4Sub: 'They bond. They react. They build everything from water to DNA.',
        ch4Btn: '→ Build a Molecule',

        ch5Tag: 'Chapter 5',
        ch5Title: 'Atomic science changed history.',
        ch5Sub: 'From ancient philosophy to quantum mechanics — 2,400 years of debate about something no one could see.',
        ch5Btn: '→ Read the Full Story',

        ch6Tag: 'Chapter 6',
        ch6Title: 'Science at work.',
        ch6Sub: 'Radioactive decay. Nuclear fusion. Quantum tunneling. These aren\'t sci-fi — they\'re atoms doing their thing.',

        originTitle: 'Where did your atoms come from?',
        originSub: 'The atoms in your body have a history older than Earth itself.',

        ctaTitle: 'Ready to go deeper?',
        ctaSub: 'Start with the periodic table — 118 elements, interactive 3D models, and the stories behind every discovery.',
        ctaExplore: '🧪 Explore Periodic Table',
        ctaHistory: '📖 History of the Atom',
    },

    // ─── Atom History ────────────────────────────────────────────────────────
    history: {
        back: '← Home',
        scrollHint: 'Scroll for the next chapter ↓',
        ctaTitle: '2,400 years of debate brought us here.',
        ctaSubtitle: 'Now explore the periodic table — 118 elements, each a product of humanity\'s quest to understand matter.',
        ctaExplore: '🧪 Explore All 118 Elements →',
        ctaHome: 'Back to Home',

        prolog: {
            chapterName: 'Prologue',
            year: '—',
            slides: [
                {
                    eyebrow: 'Before Everything',
                    title: '2,400 years of debate\nabout something no one\ncould ever see.',
                    body: `<p>You're touching something right now. A desk. A chair. Air. It all feels real.</p>
                           <p>But one question tortured the greatest thinkers in human history:</p>
                           <p><em>If you keep cutting matter into smaller and smaller pieces — does it end? Or can matter be divided forever?</em></p>
                           <p>This wasn't an academic question. The answer changed how humans understand reality itself.</p>`,
                    highlight: '"Two paths diverge: matter can be divided forever — or there exists a smallest unit that cannot be divided further."',
                    highlightLabel: 'The question that started 2,400 years of debate',
                },
            ],
        },

        democritus: {
            chapterName: 'Democritus',
            year: '~450 BC',
            protagonist: 'Leucippus & Democritus',
            slides: [
                {
                    eyebrow: 'Ancient Greece · ~450 BC',
                    title: 'Atomos —\nThe Uncuttable',
                    body: `<p>Leucippus was the first to propose the idea: there is a smallest limit to matter. His student Democritus developed this into a complete theory.</p>
                           <p>He called it <strong>atomos</strong> — from the Greek <em>a-</em> (not) + <em>tomos</em> (cut). <strong>Something that cannot be cut further.</strong></p>
                           <p>According to Democritus, everything in the universe is just atoms moving through empty space (<em>kenon</em>). The difference between rock, water, and air? Just the shape, size, and arrangement of atoms.</p>`,
                    highlight: '"Sweet exists by convention, bitter by convention, color by convention — but in reality only atoms and the void exist."',
                    highlightLabel: '— Democritus, ~400 BC',
                },
                {
                    eyebrow: 'Properties of Atoms — Democritus',
                    title: 'A Theory That Was\nShocking for Its Time',
                    body: `<ul class="ah-list">
                             <li><span class="ah-list-num">01</span><div><strong>Atoms are eternal</strong> — They cannot be created or destroyed. Their number has been constant since the beginning of the universe.</div></li>
                             <li><span class="ah-list-num">02</span><div><strong>Atoms are in constant motion</strong> — In empty space, atoms move freely. Collisions between atoms form the world we see.</div></li>
                             <li><span class="ah-list-num">03</span><div><strong>Atoms differ in size and shape</strong> — Fire atoms are small and round. Iron atoms are rough and hook together.</div></li>
                             <li><span class="ah-list-num">04</span><div><strong>Even the soul is made of atoms</strong> — Soul atoms are the finest and roundest, distributed throughout the body.</div></li>
                           </ul>`,
                    highlight: 'Atoms have no color, taste, or smell — all those sensations are just interactions between atoms and our senses. An insight only proven ~2,300 years later.',
                    highlightLabel: 'Still true today',
                },
                {
                    eyebrow: 'Plot Twist · ~400 BC',
                    title: 'One Man Buried It\nfor 2,000 Years',
                    body: `<p>Aristotle — student of Plato, tutor to Alexander the Great — was the most influential thinker in the Western world. And he <strong>completely rejected</strong> atomic theory.</p>
                           <p>His argument: empty space (<em>kenon</em>) cannot exist. "Nature abhors a vacuum" (<em>horror vacui</em>). And matter consists of 4 elements: <strong>Earth, Water, Air, Fire</strong>.</p>
                           <p>Aristotle didn't prove Democritus wrong. He just had more influence. For nearly 2,000 years, the Western world followed Aristotle — not because of evidence, but because of <strong>authority</strong>.</p>`,
                    highlight: '"Democritus\'s idea was buried not because it was wrong — but because it lost a popularity contest." This is the greatest danger in the history of science.',
                    highlightLabel: '↯ History\'s Biggest Lesson',
                },
            ],
        },

        dalton: {
            chapterName: 'Dalton',
            year: '1803',
            protagonist: 'John Dalton',
            slides: [
                {
                    eyebrow: 'Manchester · Early 1800s',
                    title: 'Two Thousand Years Later,\nScience Finally Spoke',
                    body: `<p>The Industrial Revolution was in full swing. Factories needed chemistry that was predictable — not philosophy. And there, a math teacher named <strong>John Dalton</strong> noticed something strange.</p>
                           <p>When two elements combine to form a compound, the ratio of their masses is always a <strong>simple whole number</strong>. Carbon and oxygen always combine in a fixed ratio — never random.</p>
                           <p>This wasn't coincidence. It was a pattern. And to explain this pattern, Dalton made a logical leap that changed chemistry forever.</p>`,
                    highlight: 'Law of Multiple Proportions: when two elements form more than one compound, the masses of one element that combine with a fixed mass of the other are in a ratio of small whole numbers.',
                    highlightLabel: 'Dalton\'s Law — The Start of Modern Atomic Theory',
                },
                {
                    eyebrow: 'Dalton\'s Postulates · 1803',
                    title: 'Five Principles That\nRewrote Chemistry',
                    body: `<ul class="ah-list">
                             <li><span class="ah-list-num">01</span><div>All matter is composed of <strong>atoms that cannot be divided</strong>.</div></li>
                             <li><span class="ah-list-num">02</span><div>All atoms of the same element have <strong>exactly the same mass</strong>.</div></li>
                             <li><span class="ah-list-num">03</span><div>Atoms of different elements have <strong>different masses</strong>.</div></li>
                             <li><span class="ah-list-num">04</span><div>Atoms combine in <strong>simple whole-number ratios</strong> to form compounds.</div></li>
                             <li><span class="ah-list-num">05</span><div>Atoms cannot be created or destroyed — they only <strong>rearrange</strong> in chemical reactions.</div></li>
                           </ul>`,
                    highlight: 'Historical irony: Dalton was the first well-documented case of color blindness. He couldn\'t tell colors apart — yet he "saw" differences between atoms invisible to the naked eye.',
                    highlightLabel: '↯ The Dalton Irony',
                },
                {
                    eyebrow: 'Right vs. Wrong',
                    title: 'A Revolutionary Theory\nThat Wasn\'t Perfect',
                    body: `<div class="ah-compare">
                             <div class="ah-compare-col correct">
                               <div class="ah-compare-header">✓ Still True Today</div>
                               <ul>
                                 <li>Atoms of different elements have different masses</li>
                                 <li>Atoms combine in fixed ratios</li>
                                 <li>Chemical reactions are rearrangements of atoms</li>
                               </ul>
                             </div>
                             <div class="ah-compare-col wrong">
                               <div class="ah-compare-header">✗ Turned Out Wrong</div>
                               <ul>
                                 <li>Atoms can't be divided — <em>they can (electrons, protons, neutrons)</em></li>
                                 <li>Same element atoms are identical — <em>isotopes prove otherwise</em></li>
                                 <li>Atoms can't be created — <em>nuclear reactions can change them</em></li>
                               </ul>
                             </div>
                           </div>`,
                    highlight: 'Even an imperfect theory was enough to make chemistry into a predictable, repeatable science — and that was enough to transform the industrial world.',
                    highlightLabel: 'Why an Imperfect Theory Still Changed Everything',
                },
            ],
        },

        thomson: {
            chapterName: 'Thomson',
            year: '1897',
            protagonist: 'J.J. Thomson',
            slides: [
                {
                    eyebrow: 'Cavendish Laboratory · 1897',
                    title: 'A Glass Tube That\nShook Everything',
                    body: `<p>J.J. Thomson was experimenting with a glass tube — vacuum inside, two electrodes on each end. When he ran electricity through it, a <strong>mysterious ray</strong> appeared from the negative electrode (cathode).</p>
                           <p>The ray could be deflected by magnetic and electric fields — always bending the same way, regardless of what the electrodes were made of.</p>
                           <p>Thomson's conclusion: this wasn't light. <strong>It was a negatively charged particle far smaller than any atom.</strong> And it was the same in every element.</p>`,
                    highlight: '"I was discovering what is inside the atom — and the result: atoms can be divided."',
                    highlightLabel: '— J.J. Thomson, 1897 · Nobel Prize in Physics 1906',
                },
                {
                    eyebrow: 'Discovery of the Electron · 1897',
                    title: 'Corpuscles —\nThe First Sub-Atomic Particle',
                    body: `<p>Thomson called them "corpuscles." Others later named them <strong>electrons</strong>.</p>
                           <p>If atoms contain negatively charged electrons, and atoms are electrically neutral overall — then <strong>there must be positive charge somewhere</strong>. But where?</p>
                           <p>Thomson proposed: positive charge is spread evenly like bread dough, and electrons are embedded like raisins throughout it. The world called it the <strong>Plum Pudding Model</strong>.</p>`,
                    highlight: 'An electron\'s mass is just 1/1,836 of a proton\'s. If an atom were the size of Earth, an electron would be the size of a basketball court. That\'s how tiny the particles "building" our world really are.',
                    highlightLabel: 'Just how small is an electron?',
                },
                {
                    eyebrow: 'Plum Pudding Model · 1904',
                    title: 'A Logical Model —\nAnd Completely Wrong',
                    body: `<p>Thomson's model made logical sense: if negative charges are spread evenly, positive charge must balance them — also spread evenly. Thomson even proved mathematically that his model matched hydrogen's spectrum.</p>
                           <p>But there was one problem. His own student was running experiments that would demolish this model in less than 10 years.</p>
                           <p><strong>Thomson's best student? Ernest Rutherford.</strong> Who would prove his teacher was entirely wrong.</p>`,
                    highlight: '"I thought I knew the structure of the atom. Turns out I was wrong." — Thomson never fully accepted Rutherford\'s nuclear model until the end of his life.',
                    highlightLabel: '↯ Irony in Science',
                },
            ],
        },

        rutherford: {
            chapterName: 'Rutherford',
            year: '1911',
            protagonist: 'Ernest Rutherford',
            slides: [
                {
                    eyebrow: 'University of Manchester · 1909',
                    title: 'The Gold Foil Experiment —\nA Simple Setup',
                    body: `<p>Rutherford asked two assistants — Hans Geiger and Ernest Marsden — to run a simple experiment: <strong>fire alpha particles at an ultra-thin sheet of gold foil</strong>.</p>
                           <p>Based on Thomson's model, the particles should pass straight through with little or no deflection — because positive charge was supposed to be spread thin and evenly.</p>
                           <p>Rutherford almost didn't have Marsden run this — he thought the result was predictable and <strong>boring</strong>. He almost missed the biggest discovery of the 20th century.</p>`,
                    highlight: 'Gold foil was chosen because it can be hammered to just ~1,000 atoms thick. The detector: a screen that glowed when hit by alpha particles — observed by eye in darkness for days on end.',
                    highlightLabel: 'Experimental Setup',
                },
                {
                    eyebrow: 'Unexpected Results · 1909',
                    title: 'Bullets That\nBounced Back',
                    body: `<p>Most alpha particles passed straight through — as predicted. But then Marsden saw something that should have been impossible:</p>
                           <p><strong>Some particles deflected at large angles. A few even bounced almost straight back.</strong></p>
                           <p>The frequency: 1 in about 8,000 particles bounced back at an angle greater than 90°.</p>
                           <p>Marsden ran to Rutherford. Rutherford didn't believe it. He had Marsden repeat the experiment over and over. The result was always the same.</p>`,
                    highlight: '"It was as if you fired 15-inch artillery shells at tissue paper — and the shells bounced back and hit you. I was absolutely stunned when it happened."',
                    highlightLabel: '— Ernest Rutherford, 1911',
                },
                {
                    eyebrow: 'Conclusion · 1911',
                    title: 'An Atom Is (Almost)\nEntirely Empty Space',
                    body: `<p>Rutherford spent 18 months calculating. The only explanation that made sense:</p>
                           <p>All the positive mass of an atom is concentrated in an <strong>incredibly tiny core</strong> — he called it the nucleus. Electrons orbit at proportionally enormous distances.</p>
                           <p>If the nucleus were the size of a marble (1 cm), the nearest electron would be <strong>one kilometer away</strong>. In between? Perfect empty space.</p>`,
                    highlight: 'The atoms making up your hand are 99.9999999999996% empty space. Solid matter feels solid not because it\'s full — but because electromagnetic forces prevent atoms from getting close.',
                    highlightLabel: '↯ The Fact That Breaks Your Brain',
                },
                {
                    eyebrow: 'The Fatal Flaw of Rutherford\'s Model',
                    title: 'A Beautiful Model —\nWith a Deadly Problem',
                    body: `<p>Rutherford's model was elegant: nucleus at the center, electrons orbiting like planets. But there was one fatal problem according to classical Maxwell physics:</p>
                           <p><strong>A charged particle undergoing acceleration (circular motion = acceleration) must emit electromagnetic radiation.</strong></p>
                           <p>If electrons constantly radiate energy, they would spiral inward and crash into the nucleus in just <strong>16 picoseconds</strong>. But hydrogen has existed since the Big Bang. Something was wrong.</p>`,
                    highlight: 'Rutherford\'s model perfectly explained the gold foil experiment — but theoretically, the atom it described should be unstable and couldn\'t exist. This paradox forced the birth of quantum mechanics.',
                    highlightLabel: 'The Door to the Quantum World',
                },
            ],
        },

        bohr: {
            chapterName: 'Bohr',
            year: '1913',
            protagonist: 'Niels Bohr',
            slides: [
                {
                    eyebrow: 'Copenhagen · 1913',
                    title: 'Electrons Don\'t Follow\nClassical Physics',
                    body: `<p>Niels Bohr, a young Danish physicist freshly apprenticed at Rutherford's lab, proposed a radical idea: <strong>Classical physics doesn't apply inside the atom.</strong></p>
                           <p>He was inspired by an old unsolved puzzle — the <strong>hydrogen emission spectrum</strong>. When hydrogen is heated until it glows, it only emits light at specific wavelengths — not all colors.</p>
                           <p>4 specific lines: 656nm (red), 486nm (blue-green), 434nm (blue-violet), 410nm (violet). The pattern had been known since 1885 — but nobody could explain it. Until Bohr.</p>`,
                    highlight: '"Classical physics doesn\'t apply in the atomic world. We need new rules." — An idea that sounded crazy in 1913, now the foundation of all modern chemistry.',
                    highlightLabel: 'Bohr · 1913',
                },
                {
                    eyebrow: 'Bohr\'s Postulates · 1913',
                    title: 'Quantum Orbits —\nSurprising New Rules',
                    body: `<ul class="ah-list">
                             <li><span class="ah-list-num">01</span><div><strong>Electrons can only exist in specific orbits</strong> — these orbits have fixed, specific energies. Nothing in between.</div></li>
                             <li><span class="ah-list-num">02</span><div><strong>While in that orbit, the electron emits no energy</strong> — this breaks classical physics, but Bohr stated it as a fundamental postulate.</div></li>
                             <li><span class="ah-list-num">03</span><div><strong>Electrons can jump between orbits</strong> — absorbing a photon (going up) or emitting one (going down). The photon's energy equals the difference between orbit energies.</div></li>
                           </ul>`,
                    highlight: 'This immediately explained the hydrogen spectrum perfectly — the spectral lines matched EXACTLY the energy differences between orbits that Bohr calculated. Accurate to 4 decimal places.',
                    highlightLabel: '✓ Perfect for Hydrogen',
                },
                {
                    eyebrow: 'Bohr\'s Failures',
                    title: 'Works for Hydrogen.\nFails for Everything Else.',
                    body: `<p>Bohr's model was a massive win — for hydrogen. But when physicists tried to apply it to helium (2 electrons) or larger atoms: it <strong>broke completely</strong>.</p>
                           <p>Nobody could explain <em>why</em> electrons were only allowed in certain orbits. Bohr's postulates were empirically correct but had no theoretical basis.</p>
                           <p>And there was a deeper question: if electrons could "jump" from one orbit to another instantly — without passing through the space in between — what does an electron's "location" even mean?</p>`,
                    highlight: '"I look to one person to solve this problem." — Bohr to Heisenberg, 1922. The answer came 3 years later and changed everything.',
                    highlightLabel: '↯ The Door to Quantum Mechanics',
                },
            ],
        },

        quantum: {
            chapterName: 'Quantum Mechanics',
            year: '1924–1927',
            protagonist: 'de Broglie · Heisenberg · Schrödinger',
            slides: [
                {
                    eyebrow: 'Paris · 1924 · Louis de Broglie',
                    title: 'Electrons Are\nWaves — and Particles',
                    body: `<p>A PhD student named Louis de Broglie proposed a wild idea in his thesis: <strong>if light can behave as particles (photons), maybe particles like electrons can behave as waves.</strong></p>
                           <p>He derived a simple formula: the wavelength of an electron = Planck's constant divided by the electron's momentum. His examiners didn't know what to do with it — they sent it to Einstein.</p>
                           <p>Einstein replied: <em>"It looks crazy, but I think it's right."</em> Two years later, electron diffraction experiments proved de Broglie correct. Nobel Prize 1929.</p>`,
                    highlight: 'The 1929 Nobel Prize in Physics was awarded for a PhD thesis — something that had almost never happened before in the history of science.',
                    highlightLabel: 'de Broglie Wave · 1924',
                },
                {
                    eyebrow: 'Göttingen · 1925 · Werner Heisenberg',
                    title: 'The Uncertainty Principle —\nNot a Flaw in Our Tools',
                    body: `<p>Werner Heisenberg, age 23, retreated to a remote island to escape severe hay fever. There, isolated, he developed the <strong>Uncertainty Principle</strong>.</p>
                           <p>His statement: you cannot know the position and momentum of a particle simultaneously with unlimited precision. The more precisely you know position, the less precisely you can know momentum. And vice versa.</p>
                           <p><strong>This isn't because our instruments aren't good enough</strong> — it's a fundamental property of the universe. Uncertainty is built into reality, not into our limitations.</p>`,
                    highlight: 'Δx · Δp ≥ ℏ/2',
                    highlightLabel: 'Heisenberg\'s Uncertainty Equation — where ℏ is Planck\'s constant / 2π',
                },
                {
                    eyebrow: 'Zürich · 1926 · Erwin Schrödinger',
                    title: 'Wave Functions —\nThe Electron Is Everywhere',
                    body: `<p>Schrödinger developed a wave equation describing the evolution of electrons. The square of the wave function (|ψ|²) at any point = <strong>the probability of finding the electron there</strong>.</p>
                           <p>An electron doesn't exist in one place. It exists as a probability distribution — a "cloud" spread out in space. Only when measured does the electron "collapse" to one position. Before measurement: it's everywhere at once (superposition).</p>`,
                    highlight: '"God does not play dice." — Einstein, rejecting this probabilistic interpretation until his dying day.\n"Don\'t tell God what to do." — Bohr\'s response. This debate was never resolved.',
                    highlightLabel: '↯ Einstein vs. Bohr — The Greatest Debate in Physics History',
                },
                {
                    eyebrow: 'Modern Atomic Model · 1927–Present',
                    title: 'Orbitals — Probability Clouds,\nNot Planetary Orbits',
                    body: `<p>The modern atomic model accepted today comes from quantum mechanics. Electrons don't move in circular orbits — they occupy <strong>orbitals</strong>, which are 3-dimensional probability regions.</p>
                           <p>Each orbital has a different shape: spherical (s), dumbbell (p), complex (d, f). Electrons exist in these orbitals as probability distributions — not little balls spinning around.</p>
                           <p>This model works today, predicting chemical properties, molecular bonds, and atomic spectra with accuracy to <strong>12 decimal places</strong>.</p>`,
                    highlight: 'Quantum theory is the most accurate theory in the history of physics. Its predictions match experiments to 12 decimal places — equivalent to measuring the distance from New York to LA to within the width of a human hair.',
                    highlightLabel: 'The Atomic Model We Use Today',
                },
            ],
        },

        epilog: {
            chapterName: 'Epilogue',
            year: 'Today',
            slides: [
                {
                    eyebrow: 'The Journey Isn\'t Over',
                    title: 'The atom still\nholds secrets.',
                    body: `<p>We know protons and neutrons are made of <strong>quarks</strong> — even more fundamental particles. But are quarks the smallest unit? Or is there a deeper level?</p>
                           <p>And the biggest problem: <strong>quantum mechanics and Einstein's general relativity cannot be unified</strong>. Both are right in their own domains — but they can't describe reality in one consistent theory.</p>
                           <p>Copenhagen interpretation, Many-Worlds, Pilot Wave — physicists still debate what quantum mechanics actually means. 2,400 years of debate — and it's not over yet.</p>`,
                    highlight: '"If you\'re not shocked by quantum mechanics, you haven\'t understood it."',
                    highlightLabel: '— Richard Feynman',
                },
            ],
        },
    },
};
