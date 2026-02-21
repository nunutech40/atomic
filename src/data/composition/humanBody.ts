// ─────────────────────────────────────────────────────────────────────────────
// HUMAN BODY ATOMIC COMPOSITION
// Data anatomi tubuh manusia berdasarkan atom penyusunnya
// ─────────────────────────────────────────────────────────────────────────────

export interface BodyElement {
    sym: string;
    name: string;
    nameEn: string;
    massPercent: number;       // % massa tubuh
    atomCount: string;         // estimasi jumlah atom
    role: string;              // fungsi utama di tubuh
    roleEn: string;
    where: string;             // di mana paling banyak ditemukan
    whereEn: string;
    color: string;             // warna untuk visualisasi
}

export interface ComplexMolecule {
    id: string;
    name: string;
    nameEn: string;
    category: 'protein' | 'lipid' | 'nucleic-acid' | 'carbohydrate' | 'mineral' | 'water' | 'hormone' | 'pigment';
    icon: string;
    formula: string;           // rumus kimia atau deskripsi singkat
    bodyPercent: string;       // % atau kuantitas di tubuh
    atomCount: string;         // jumlah atom per molekul (approx)
    role: string;
    roleEn: string;
    elements: string[];        // elemen penyusun (simbol)
    funFact: string;
    funFactEn: string;
    color: string;             // warna kategori
}

export interface BodySystem {
    id: string;
    name: string;
    nameEn: string;
    icon: string;
    dominantElement: string;   // simbol elemen dominan
    composition: string;       // deskripsi singkat komposisi
    compositionEn: string;
}

// ─── Komposisi Elemen ─────────────────────────────────────────────────────────
export const humanBodyElements: BodyElement[] = [
    {
        sym: 'O',
        name: 'Oksigen',
        nameEn: 'Oxygen',
        massPercent: 65.0,
        atomCount: '4,6 × 10²⁷',
        role: 'Komponen utama air (H₂O) yang mengisi 60% tubuh. Hadir di hampir semua molekul organik.',
        roleEn: 'Main component of water (H₂O) filling 60% of the body. Present in almost all organic molecules.',
        where: 'Air tubuh, protein, DNA, lemak, tulang',
        whereEn: 'Body water, proteins, DNA, fats, bones',
        color: '#3b82f6',
    },
    {
        sym: 'C',
        name: 'Karbon',
        nameEn: 'Carbon',
        massPercent: 18.0,
        atomCount: '1,6 × 10²⁷',
        role: 'Tulang punggung semua molekul organik. Karbon bisa membentuk 4 ikatan — inilah mengapa kimia kehidupan sangat kompleks.',
        roleEn: 'Backbone of all organic molecules. Carbon can form 4 bonds — this is why the chemistry of life is so complex.',
        where: 'Protein, DNA, lemak, karbohidrat, semua sel',
        whereEn: 'Proteins, DNA, fats, carbohydrates, all cells',
        color: '#1f2937',
    },
    {
        sym: 'H',
        name: 'Hidrogen',
        nameEn: 'Hydrogen',
        massPercent: 10.0,
        atomCount: '3,7 × 10²⁸',      // paling banyak secara jumlah atom!
        role: 'Komponen air. Hidrogen terbanyak secara JUMLAH atom di tubuh (60% dari semua atom). Kunci ikatan hidrogen yang menstabilkan protein dan DNA.',
        roleEn: 'Component of water. Most abundant by ATOM COUNT in the body (60% of all atoms). Key to hydrogen bonds stabilizing proteins and DNA.',
        where: 'Air, semua molekul organik',
        whereEn: 'Water, all organic molecules',
        color: '#93c5fd',
    },
    {
        sym: 'N',
        name: 'Nitrogen',
        nameEn: 'Nitrogen',
        massPercent: 3.0,
        atomCount: '2,3 × 10²⁶',
        role: 'Komponen asam amino (blok protein) dan basa nitrogen (kode DNA/RNA). Tanpa N, tidak ada protein, tidak ada DNA.',
        roleEn: 'Component of amino acids (protein building blocks) and nitrogen bases (DNA/RNA code). Without N, no proteins, no DNA.',
        where: 'Protein, DNA, RNA, ATP, urea',
        whereEn: 'Proteins, DNA, RNA, ATP, urea',
        color: '#6366f1',
    },
    {
        sym: 'Ca',
        name: 'Kalsium',
        nameEn: 'Calcium',
        massPercent: 1.5,
        atomCount: '4,0 × 10²⁵',
        role: '99% ada di tulang dan gigi (sebagai kalsium fosfat). 1% sisanya krusial untuk kontraksi otot, sinyal saraf, dan pembekuan darah.',
        roleEn: '99% is in bones and teeth (as calcium phosphate). The remaining 1% is crucial for muscle contraction, nerve signaling, and blood clotting.',
        where: 'Tulang, gigi, darah, otot, sinaps saraf',
        whereEn: 'Bones, teeth, blood, muscles, nerve synapses',
        color: '#f9fafb',
    },
    {
        sym: 'P',
        name: 'Fosfor',
        nameEn: 'Phosphorus',
        massPercent: 1.0,
        atomCount: '3,4 × 10²⁵',
        role: 'Di tulang (kalsium fosfat), di DNA/RNA (tulang punggung fosfat), dan di ATP — mata uang energi semua sel hidup.',
        roleEn: 'In bones (calcium phosphate), in DNA/RNA (phosphate backbone), and in ATP — the energy currency of all living cells.',
        where: 'Tulang, DNA, RNA, ATP, membran sel',
        whereEn: 'Bones, DNA, RNA, ATP, cell membranes',
        color: '#f97316',
    },
    {
        sym: 'K',
        name: 'Kalium',
        nameEn: 'Potassium',
        massPercent: 0.35,
        atomCount: '9,5 × 10²⁴',
        role: 'Ion K⁺ utama di dalam sel. Bersama Na⁺, menciptakan perbedaan potensial membran yang memungkinkan impuls saraf dan detak jantung.',
        roleEn: 'Main K⁺ ion inside cells. Together with Na⁺, creates membrane potential difference enabling nerve impulses and heartbeat.',
        where: 'Di dalam semua sel (sitoplasma)',
        whereEn: 'Inside all cells (cytoplasm)',
        color: '#a78bfa',
    },
    {
        sym: 'S',
        name: 'Sulfur',
        nameEn: 'Sulfur',
        massPercent: 0.25,
        atomCount: '8,4 × 10²⁴',
        role: 'Ada di asam amino sistein dan metionin. Ikatan disulfida antar-sistein membentuk dan menstabilkan struktur 3D protein.',
        roleEn: 'Found in amino acids cysteine and methionine. Disulfide bonds between cysteines form and stabilize 3D protein structures.',
        where: 'Protein (terutama keratin rambut/kuku), enzim',
        whereEn: 'Proteins (especially keratin in hair/nails), enzymes',
        color: '#fbbf24',
    },
    {
        sym: 'Na',
        name: 'Natrium',
        nameEn: 'Sodium',
        massPercent: 0.15,
        atomCount: '7,0 × 10²⁴',
        role: 'Ion Na⁺ utama di cairan ekstraseluler (luar sel). Pompa Na⁺/K⁺ ATPase memompa Na⁺ keluar sel untuk membangun potensial aksi saraf.',
        roleEn: 'Main Na⁺ ion in extracellular fluid (outside cells). Na⁺/K⁺ ATPase pump moves Na⁺ out of cells to build nerve action potentials.',
        where: 'Plasma darah, cairan ekstraseluler, keringat',
        whereEn: 'Blood plasma, extracellular fluid, sweat',
        color: '#fb923c',
    },
    {
        sym: 'Cl',
        name: 'Klorin',
        nameEn: 'Chlorine',
        massPercent: 0.15,
        atomCount: '4,5 × 10²⁴',
        role: 'Ion Cl⁻ menjaga keseimbangan osmotik dan pH. Komponen asam lambung (HCl) yang mencerna protein.',
        roleEn: 'Cl⁻ ions maintain osmotic balance and pH. Component of stomach acid (HCl) that digests proteins.',
        where: 'Cairan ekstraseluler, asam lambung, darah',
        whereEn: 'Extracellular fluid, stomach acid, blood',
        color: '#34d399',
    },
    {
        sym: 'Mg',
        name: 'Magnesium',
        nameEn: 'Magnesium',
        massPercent: 0.05,
        atomCount: '2,2 × 10²⁴',
        role: 'Kofaktor lebih dari 300 enzim. Kunci untuk sintesis DNA dan RNA. Stabilisasi ATP — hampir semua reaksi ATP butuh Mg²⁺.',
        roleEn: 'Cofactor for more than 300 enzymes. Key for DNA and RNA synthesis. ATP stabilization — almost all ATP reactions need Mg²⁺.',
        where: 'Tulang, enzim, mitokondria, klorofil (di tanaman)',
        whereEn: 'Bones, enzymes, mitochondria, chlorophyll (in plants)',
        color: '#10b981',
    },
    {
        sym: 'Fe',
        name: 'Besi',
        nameEn: 'Iron',
        massPercent: 0.006,
        atomCount: '1,2 × 10²³',
        role: 'Atom Fe di pusat hemoglobin yang mengikat O₂ di paru dan melepasnya di sel. Juga kunci sitokrom di mitokondria (respirasi sel).',
        roleEn: 'Fe atom at the core of hemoglobin that binds O₂ in lungs and releases it in cells. Also key to cytochromes in mitochondria (cellular respiration).',
        where: 'Hemoglobin (darah), mioglobin (otot), enzim',
        whereEn: 'Hemoglobin (blood), myoglobin (muscles), enzymes',
        color: '#ef4444',
    },
    {
        sym: 'Zn',
        name: 'Seng',
        nameEn: 'Zinc',
        massPercent: 0.003,
        atomCount: '5,0 × 10²²',
        role: 'Kofaktor lebih dari 100 enzim. Penting untuk sistem imun, penyembuhan luka, sintesis DNA, dan indera perasa/penciuman.',
        roleEn: 'Cofactor for more than 100 enzymes. Important for immune system, wound healing, DNA synthesis, and taste/smell senses.',
        where: 'Enzim, sistem imun, pankreas, mata',
        whereEn: 'Enzymes, immune system, pancreas, eyes',
        color: '#94a3b8',
    },
    {
        sym: 'I',
        name: 'Iodin',
        nameEn: 'Iodine',
        massPercent: 0.00004,
        atomCount: '3,4 × 10²⁰',
        role: 'Komponen hormon tiroid (T3 dan T4) yang mengatur metabolisme, pertumbuhan, dan perkembangan otak.',
        roleEn: 'Component of thyroid hormones (T3 and T4) that regulate metabolism, growth, and brain development.',
        where: 'Kelenjar tiroid (leher)',
        whereEn: 'Thyroid gland (neck)',
        color: '#7c3aed',
    },
];

// ─── Molekul Kompleks ─────────────────────────────────────────────────────────
export const complexMolecules: ComplexMolecule[] = [
    // WATER
    {
        id: 'water',
        name: 'Air',
        nameEn: 'Water',
        category: 'water',
        icon: '💧',
        formula: 'H₂O',
        bodyPercent: '~60% massa tubuh',
        atomCount: '3 atom per molekul',
        role: 'Pelarut universal semua reaksi biokimia. Media transportasi nutrisi dan sisa metabolisme.',
        roleEn: 'Universal solvent for all biochemical reactions. Transport medium for nutrients and metabolic waste.',
        elements: ['H', 'O'],
        funFact: 'Otak kamu 73% air. Tulang keras pun mengandung 31% air. Bahkan benih kering mengandung sekitar 5% air — tanpanya, tidak ada kehidupan.',
        funFactEn: 'Your brain is 73% water. Even hard bones contain 31% water. Even dry seeds contain about 5% water — without it, no life.',
        color: '#3b82f6',
    },
    // PROTEIN
    {
        id: 'hemoglobin',
        name: 'Hemoglobin',
        nameEn: 'Hemoglobin',
        category: 'protein',
        icon: '🩸',
        formula: 'C₂₉₅₂H₄₆₆₄N₈₁₂O₈₃₂S₈Fe₄',
        bodyPercent: '~0.5% massa darah merah',
        atomCount: '~9.272 atom per molekul',
        role: 'Protein di sel darah merah yang mengikat oksigen di paru-paru dan melepasnya ke sel di seluruh tubuh.',
        roleEn: 'Protein in red blood cells that binds oxygen in the lungs and releases it to cells throughout the body.',
        elements: ['C', 'H', 'N', 'O', 'S', 'Fe'],
        funFact: 'Setiap sel darah merah punya ~270 juta molekul hemoglobin. Tubuh kamu punya ~25 triliun sel darah merah → sekitar 6,75 × 10²¹ molekul hemoglobin.',
        funFactEn: 'Each red blood cell has ~270 million hemoglobin molecules. Your body has ~25 trillion red blood cells → about 6.75 × 10²¹ hemoglobin molecules.',
        color: '#ef4444',
    },
    {
        id: 'collagen',
        name: 'Kolagen',
        nameEn: 'Collagen',
        category: 'protein',
        icon: '🦴',
        formula: '(C₁₄₄H₂₁₇N₃₉O₄₂S)ₙ × 3 rantai',
        bodyPercent: '~30% total protein tubuh',
        atomCount: '~3 × 10⁴ per triple helix',
        role: 'Protein struktural tersering di tubuh. Membentuk kerangka kulit, tulang rawan, tendon, tulang, dan pembuluh darah.',
        roleEn: 'Most common structural protein in the body. Forms the framework of skin, cartilage, tendons, bone, and blood vessels.',
        elements: ['C', 'H', 'N', 'O', 'S'],
        funFact: 'Kabel kolagen lebih kuat dari kabel baja berdiameter sama. Tendon Achilles di kaki kamu menahan gaya hingga 7× berat badan saat berlari — berkat kolagen.',
        funFactEn: 'Collagen cables are stronger than steel cables of the same diameter. The Achilles tendon in your foot withstands forces up to 7× body weight when running — thanks to collagen.',
        color: '#f97316',
    },
    {
        id: 'dna',
        name: 'DNA',
        nameEn: 'DNA',
        category: 'nucleic-acid',
        icon: '🧬',
        formula: 'C + H + O + N + P (4 basa × 3 miliar pasang)',
        bodyPercent: '3 miliar pasang basa per sel',
        atomCount: '~6 × 10¹⁰ atom per sel',
        role: 'Penyimpan instruksi genetik untuk membangun dan menjalankan seluruh tubuh. Ditulis dalam 4 "huruf" kimia: A, T, C, G.',
        roleEn: 'Storage of genetic instructions for building and running the entire body. Written in 4 chemical "letters": A, T, C, G.',
        elements: ['C', 'H', 'O', 'N', 'P'],
        funFact: 'DNA dalam satu sel, jika direntangkan, sepanjang 2 meter. Semua DNA di 37 triliun sel tubuhmu, jika disambung, mencapai 170 miliar km — pergi ke Pluto dan kembali lebih dari 10 kali.',
        funFactEn: 'DNA in one cell, if stretched out, is 2 meters long. All DNA in your 37 trillion cells, if connected, would reach 170 billion km — go to Pluto and back more than 10 times.',
        color: '#8b5cf6',
    },
    {
        id: 'atp',
        name: 'ATP (Adenosin Trifosfat)',
        nameEn: 'ATP (Adenosine Triphosphate)',
        category: 'nucleic-acid',
        icon: '⚡',
        formula: 'C₁₀H₁₆N₅O₁₃P₃',
        bodyPercent: '~250 gram ATP di tubuh, tapi di-recycle 500-700×/hari',
        atomCount: '47 atom per molekul',
        role: 'Mata uang energi universal semua sel hidup. Dipecah (→ ADP + Pi) untuk menggerakkan hampir semua proses seluler.',
        roleEn: 'Universal energy currency of all living cells. Broken down (→ ADP + Pi) to power almost all cellular processes.',
        elements: ['C', 'H', 'N', 'O', 'P'],
        funFact: 'Dalam sehari, kamu memproduksi dan menggunakan ATP seberat badan badanmu sendiri — sekitar 40 kg ATP di-regenerasi setiap 24 jam. Tapi karena langsung di-recycle, hanya ada ~250g pada satu waktu.',
        funFactEn: 'In a day, you produce and use ATP equal to your own body weight — about 40 kg of ATP is regenerated every 24 hours. But since it\'s immediately recycled, only ~250g exists at any one time.',
        color: '#f59e0b',
    },
    {
        id: 'cholesterol',
        name: 'Kolesterol',
        nameEn: 'Cholesterol',
        category: 'lipid',
        icon: '🫀',
        formula: 'C₂₇H₄₆O',
        bodyPercent: '~140 gram di tubuh dewasa',
        atomCount: '74 atom per molekul',
        role: 'Komponen kritis membran setiap sel. Prekursor hormon steroid (estrogen, testosteron, kortisol) dan vitamin D.',
        roleEn: 'Critical component of every cell membrane. Precursor to steroid hormones (estrogen, testosterone, cortisol) and vitamin D.',
        elements: ['C', 'H', 'O'],
        funFact: 'Otak kamu mengandung ~25% dari total kolesterol tubuh, padahal hanya 2% dari massa tubuh. Kolesterol di otak berbeda dari darah — tidak bisa melewati blood-brain barrier, jadi otak produksi sendiri.',
        funFactEn: 'Your brain contains ~25% of total body cholesterol, even though it\'s only 2% of body mass. Brain cholesterol differs from blood — it can\'t cross the blood-brain barrier, so the brain produces its own.',
        color: '#fbbf24',
    },
    {
        id: 'glucose',
        name: 'Glukosa',
        nameEn: 'Glucose',
        category: 'carbohydrate',
        icon: '🍬',
        formula: 'C₆H₁₂O₆',
        bodyPercent: '~4g di darah (kadar normal)',
        atomCount: '24 atom per molekul',
        role: 'Bahan bakar utama otak dan sel tubuh. Diurai melalui glikolisis dan siklus Krebs menghasilkan 36-38 ATP per molekul glukosa.',
        roleEn: 'Main fuel for the brain and body cells. Broken down through glycolysis and Krebs cycle yielding 36-38 ATP per glucose molecule.',
        elements: ['C', 'H', 'O'],
        funFact: 'Otak kamu menggunakan ~120g glukosa per hari — setara dengan setengah cangkir gula. Padahal otak hanya 2% massa tubuh tapi mengonsumsi 20% energi total tubuh.',
        funFactEn: 'Your brain uses ~120g of glucose per day — equivalent to half a cup of sugar. Yet the brain is only 2% of body mass but consumes 20% of total body energy.',
        color: '#f59e0b',
    },
    {
        id: 'keratin',
        name: 'Keratin',
        nameEn: 'Keratin',
        category: 'protein',
        icon: '💈',
        formula: '(C + H + N + O + S)ₙ — protein fibrous dengan banyak sistein',
        bodyPercent: '85% struktur rambut dan kuku',
        atomCount: '~50.000 atom per rantai',
        role: 'Protein struktural keras yang membentuk rambut, kuku, kulit terluar, dan kuku kaki. Kaya ikatan disulfida dari atom S.',
        roleEn: 'Hard structural protein forming hair, nails, outer skin layer, and toenails. Rich in disulfide bonds from S atoms.',
        elements: ['C', 'H', 'N', 'O', 'S'],
        funFact: 'Tanduk badak adalah massa keratin padat — bukan tulang, sama persis seperti material kuku jari tangan kamu. Satwa yang paling mahal di dunia karena kepercayaan salah tentang khasiat medis keratin.',
        funFactEn: 'A rhino\'s horn is solid keratin — not bone, exactly the same material as your fingernails. The world\'s most poached animal because of false beliefs about keratin\'s medicinal properties.',
        color: '#d97706',
    },
    {
        id: 'hydroxyapatite',
        name: 'Hidroksiapatit (Mineral Tulang)',
        nameEn: 'Hydroxyapatite (Bone Mineral)',
        category: 'mineral',
        icon: '🦷',
        formula: 'Ca₁₀(PO₄)₆(OH)₂',
        bodyPercent: '~70% massa tulang kering',
        atomCount: '38 atom per unit formula',
        role: 'Mineral kristalin yang memberikan kekakuan dan kekuatan tekan pada tulang. Kombinasi dengan kolagen yang elastis membuat tulang kuat sekaligus tidak getas.',
        roleEn: 'Crystalline mineral giving bones rigidity and compressive strength. Combined with elastic collagen makes bones strong yet not brittle.',
        elements: ['Ca', 'P', 'O', 'H'],
        funFact: 'Email gigi kamu (enamel) adalah material terkeras yang diproduksi tubuh — bahkan lebih keras dari tulang. Tapi tidak bisa beregenerasi; sekali hilang, permanen. Dentin di bawahnya (lebih lunak) bisa memperbaiki diri secara terbatas.',
        funFactEn: 'Tooth enamel is the hardest material your body produces — even harder than bone. But it cannot regenerate; once gone, it\'s permanent. The dentin beneath it (softer) can repair itself to a limited extent.',
        color: '#e2e8f0',
    },
    {
        id: 'melanin',
        name: 'Melanin',
        nameEn: 'Melanin',
        category: 'pigment',
        icon: '🎨',
        formula: 'Polimer indol kompleks — C + H + N + O',
        bodyPercent: 'Variasi — menentukan warna kulit & rambut',
        atomCount: 'Polimer besar (ratusan unit)',
        role: 'Pigmen yang menyerap radiasi UV dan melindungi DNA dari kerusakan. Diproduksi oleh melanosit di kulit.',
        roleEn: 'Pigment that absorbs UV radiation and protects DNA from damage. Produced by melanocytes in the skin.',
        elements: ['C', 'H', 'N', 'O'],
        funFact: 'Rambut "uban" tidak benar-benar berwarna putih/abu — rambut kehilangan pigmen melanin sehingga menjadi transparan. Penampakan putih adalah efek optis dari cahaya yang dipantulkan rambut transparan berlapis-lapis.',
        funFactEn: 'Gray hair is not truly white/gray — hair loses melanin pigment so it becomes transparent. The white appearance is an optical effect from light reflected by layers of transparent hair.',
        color: '#78350f',
    },
    {
        id: 'antibody',
        name: 'Antibodi (Imunoglobulin)',
        nameEn: 'Antibody (Immunoglobulin)',
        category: 'protein',
        icon: '🛡️',
        formula: 'C + H + N + O + S — 4 rantai polipeptida (Y-shape)',
        bodyPercent: '~10-20mg/mL dalam serum darah',
        atomCount: '~20.000 atom per molekul IgG',
        role: 'Protein Y-shaped yang mengenali dan mengikat antigen (patogen, racun). Setiap antibodi spesifik untuk satu target — sistem imun bisa membuat ~10 juta variasi berbeda.',
        roleEn: 'Y-shaped protein that recognizes and binds antigens (pathogens, toxins). Each antibody is specific to one target — the immune system can make ~10 million different variations.',
        elements: ['C', 'H', 'N', 'O', 'S'],
        funFact: 'Satu B-cell bisa memproduksi 2.000 antibodi per detik. Saat infeksi, B-cell berkembang biak menjadi ribuan dan secara bersamaan memproduksi miliar antibodi untuk menyerang patogen yang sama.',
        funFactEn: 'One B-cell can produce 2,000 antibodies per second. During infection, B-cells multiply into thousands simultaneously producing billions of antibodies to attack the same pathogen.',
        color: '#06b6d4',
    },
    {
        id: 'insulin',
        name: 'Insulin',
        nameEn: 'Insulin',
        category: 'hormone',
        icon: '💉',
        formula: 'C₂₅₇H₃₈₃N₆₅O₇₇S₆',
        bodyPercent: 'Hormon — diproduksi saat gula darah tinggi',
        atomCount: '788 atom per molekul',
        role: 'Hormon peptida dari pankreas yang "membuka pintu" sel agar glukosa bisa masuk. Mengatur kadar gula darah — tanpanya: diabetes.',
        roleEn: 'Peptide hormone from the pancreas that "opens the door" for glucose to enter cells. Regulates blood sugar levels — without it: diabetes.',
        elements: ['C', 'H', 'N', 'O', 'S'],
        funFact: 'Insulin adalah protein pertama yang struktur asam aminonya berhasil diurutkan secara lengkap (Frederick Sanger, 1951) — prestasi yang menghasilkan Nobel Prize. Dan insulin adalah protein pertama yang berhasil diproduksi menggunakan bakteri rekayasa genetika (1982).',
        funFactEn: 'Insulin was the first protein to have its complete amino acid sequence determined (Frederick Sanger, 1951) — an achievement that earned a Nobel Prize. And insulin was the first protein produced using genetically engineered bacteria (1982).',
        color: '#10b981',
    },
];

// ─── Fun Facts Tubuh ──────────────────────────────────────────────────────────
export const bodyFunFacts = [
    { icon: '⚛️', text: 'Tubuh dewasa mengandung sekitar 7 × 10²⁷ atom — angka yang ditulis 7 diikuti 27 nol.', textEn: 'An adult body contains about 7 × 10²⁷ atoms — the number 7 followed by 27 zeros.' },
    { icon: '💧', text: 'Atom TERBANYAK secara jumlah di tubuhmu adalah Hidrogen (H) — 60% dari total atom, karena air (H₂O) punya 2 H per 1 O.', textEn: 'The MOST ABUNDANT atom by count in your body is Hydrogen (H) — 60% of all atoms, because water (H₂O) has 2 H for every 1 O.' },
    { icon: '🦴', text: 'Karbon dalam tubuhmu cukup untuk membuat ~9.000 pensil. Besi di darahmu cukup untuk paku kecil. Lemakmu bisa membuat 7 batang sabun.', textEn: 'The carbon in your body is enough to make ~9,000 pencils. The iron in your blood is enough for a small nail. Your fat could make 7 bars of soap.' },
    { icon: '🔄', text: 'Setiap 7–10 tahun, hampir semua atom di tubuhmu diganti oleh atom baru dari makanan, air, dan udara. Kamu secara harfiah bukan orang yang sama seperti 10 tahun lalu.', textEn: 'Every 7–10 years, almost all atoms in your body are replaced by new atoms from food, water, and air. You are literally not the same person as 10 years ago.' },
    { icon: '💰', text: 'Nilai semua atom dalam tubuhmu jika dijual sebagai unsur murni: sekitar $160. Tapi sebagai manusia hidup? Tak ternilai — karena susunannya yang mustahil ditiru.', textEn: 'The value of all atoms in your body if sold as pure elements: about $160. But as a living human? Priceless — because the arrangement is impossible to replicate.' },
    { icon: '⭐', text: 'Hampir semua atom di tubuhmu terbentuk di dalam sebuah bintang yang meledak miliaran tahun sebelum Bumi ada. Kamu adalah stardust — secara harfiah.', textEn: 'Almost all atoms in your body formed inside a star that exploded billions of years before Earth existed. You are stardust — literally.' },
];

// ─── Sistem Tubuh ─────────────────────────────────────────────────────────────
export const bodySystems: BodySystem[] = [
    { id: 'blood', name: 'Darah', nameEn: 'Blood', icon: '🩸', dominantElement: 'Fe', composition: '~92% air, hemoglobin (Fe), albumin, fibrinogen', compositionEn: '~92% water, hemoglobin (Fe), albumin, fibrinogen' },
    { id: 'bone', name: 'Tulang', nameEn: 'Bone', icon: '🦴', dominantElement: 'Ca', composition: '~70% mineral Ca-P (hidroksiapatit), ~30% kolagen', compositionEn: '~70% Ca-P mineral (hydroxyapatite), ~30% collagen' },
    { id: 'muscle', name: 'Otot', nameEn: 'Muscle', icon: '💪', dominantElement: 'N', composition: '~75% air, ~20% protein (aktin, miosin), ~5% mineral', compositionEn: '~75% water, ~20% protein (actin, myosin), ~5% minerals' },
    { id: 'brain', name: 'Otak', nameEn: 'Brain', icon: '🧠', dominantElement: 'O', composition: '~73% air, ~11% lemak, ~8% protein, ~2% kolesterol', compositionEn: '~73% water, ~11% fat, ~8% protein, ~2% cholesterol' },
    { id: 'skin', name: 'Kulit', nameEn: 'Skin', icon: '🫀', dominantElement: 'S', composition: 'Kolagen (C/N/S), keratin (S tinggi), melanin, air', compositionEn: 'Collagen (C/N/S), keratin (high S), melanin, water' },
    { id: 'dna-system', name: 'Nukleus Sel', nameEn: 'Cell Nucleus', icon: '🧬', dominantElement: 'P', composition: 'DNA (C/H/O/N/P), histon protein, RNA', compositionEn: 'DNA (C/H/O/N/P), histone proteins, RNA' },
];
