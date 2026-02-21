// ─────────────────────────────────────────────────────────────────────────────
// PLANT ATOMIC COMPOSITION
// Komposisi atom tumbuhan — basis berat basah (fresh weight)
// Contoh: pohon tropis dewasa / tanaman hijau umum
// ─────────────────────────────────────────────────────────────────────────────

export interface PlantElement {
    sym: string;
    name: string;
    nameEn: string;
    massPercent: number;
    color: string;
    role: string;
    roleEn: string;
    molecule?: string; // Molekul utama yang mengandung elemen ini
}

export const plantElements: PlantElement[] = [
    {
        sym: 'O',
        name: 'Oksigen',
        nameEn: 'Oxygen',
        massPercent: 65,
        color: '#3b82f6',
        role: 'Kerangka air & selulosa — air (H₂O) mendominasi 85-90% berat tumbuhan',
        roleEn: 'Framework of water & cellulose — water (H₂O) dominates 85-90% of plant weight',
        molecule: 'H₂O, Selulosa (C₆H₁₀O₅)ₙ',
    },
    {
        sym: 'C',
        name: 'Karbon',
        nameEn: 'Carbon',
        massPercent: 18,
        color: '#374151',
        role: 'Kerangka semua molekul organik — masuk via CO₂ dari udara lewat fotosintesis',
        roleEn: 'Backbone of all organic molecules — enters via CO₂ from air through photosynthesis',
        molecule: 'Glukosa (C₆H₁₂O₆), Selulosa, Lignin',
    },
    {
        sym: 'H',
        name: 'Hidrogen',
        nameEn: 'Hydrogen',
        massPercent: 10,
        color: '#93c5fd',
        role: 'Pembawa elektron dalam fotosintesis (NADPH) — dan bagian dari air',
        roleEn: 'Electron carrier in photosynthesis (NADPH) — and part of water',
        molecule: 'H₂O, ATP, NADPH',
    },
    {
        sym: 'N',
        name: 'Nitrogen',
        nameEn: 'Nitrogen',
        massPercent: 3,
        color: '#818cf8',
        role: 'Klorofil, protein, DNA — paling sering jadi faktor pembatas pertumbuhan',
        roleEn: 'Chlorophyll, proteins, DNA — most often the limiting factor for growth',
        molecule: 'Klorofil (C₅₅H₇₂MgN₄O₅), Asam amino',
    },
    {
        sym: 'K',
        name: 'Kalium',
        nameEn: 'Potassium',
        massPercent: 1.2,
        color: '#a78bfa',
        role: 'Pengatur tekanan osmotik sel, pembuka-tutup stomata daun',
        roleEn: 'Cell osmotic pressure regulator, leaf stomata opening/closing',
        molecule: 'Ion K⁺ bebas',
    },
    {
        sym: 'Ca',
        name: 'Kalsium',
        nameEn: 'Calcium',
        massPercent: 0.5,
        color: '#f8fafc',
        role: 'Dinding sel (kalsium pektat) dan sinyal antar sel tumbuhan',
        roleEn: 'Cell wall component (calcium pectate) and intercellular signaling',
        molecule: 'Ca²⁺, Kalsium pektat',
    },
    {
        sym: 'Mg',
        name: 'Magnesium',
        nameEn: 'Magnesium',
        massPercent: 0.2,
        color: '#10b981',
        role: 'Atom pusat klorofil — tanpa Mg tidak ada fotosintesis, tidak ada kehidupan',
        roleEn: 'Central atom of chlorophyll — without Mg no photosynthesis, no life',
        molecule: 'Klorofil a & b (keduanya punya Mg di tengah)',
    },
    {
        sym: 'P',
        name: 'Fosfor',
        nameEn: 'Phosphorus',
        massPercent: 0.2,
        color: '#fb923c',
        role: 'ATP (energi sel) dan tulang punggung DNA/RNA',
        roleEn: 'ATP (cellular energy) and DNA/RNA backbone',
        molecule: 'ATP (adenosin trifosfat), NADPH, DNA',
    },
    {
        sym: 'S',
        name: 'Sulfur',
        nameEn: 'Sulfur',
        massPercent: 0.1,
        color: '#fbbf24',
        role: 'Asam amino sistein dan metionin — pembentuk protein struktur',
        roleEn: 'Amino acids cysteine and methionine — structural protein building',
        molecule: 'Sistein (C₃H₇NO₂S), Metionin',
    },
];

export const plantProcesses = [
    {
        id: 'photosynthesis',
        icon: '🌿',
        name: 'Fotosintesis',
        nameEn: 'Photosynthesis',
        equation: '6CO₂ + 6H₂O + cahaya → C₆H₁₂O₆ + 6O₂',
        desc: 'Reaksi paling penting di Bumi — mengubah energi cahaya menjadi energi kimia (glukosa). Semua makanan kamu pada akhirnya berasal dari proses ini.',
        descEn: 'The most important reaction on Earth — converting light energy into chemical energy (glucose). All your food ultimately originates from this process.',
        atoms: ['C', 'H', 'O', 'Mg', 'N'],
        color: '#10b981',
    },
    {
        id: 'cellulose',
        icon: '🪵',
        name: 'Selulosa & Lignin',
        nameEn: 'Cellulose & Lignin',
        equation: 'n × (C₆H₁₀O₅) → (C₆H₁₀O₅)ₙ',
        desc: 'Selulosa adalah polimer karbon terbanyak di Bumi — lebih panjang dari DNA. Lignin yang lebih kaku membuat kayu keras dan pohon bisa berdiri tegak.',
        descEn: 'Cellulose is the most abundant carbon polymer on Earth — longer than DNA. More rigid lignin makes wood hard and allows trees to stand upright.',
        atoms: ['C', 'H', 'O'],
        color: '#92400e',
    },
    {
        id: 'chlorophyll',
        icon: '🍃',
        name: 'Klorofil',
        nameEn: 'Chlorophyll',
        equation: 'C₅₅H₇₂MgN₄O₅',
        desc: 'Pigmen hijau dengan Magnesium di pusatnya. Menyerap cahaya merah dan biru, memantulkan hijau — itulah mengapa tumbuhan terlihat hijau.',
        descEn: 'Green pigment with Magnesium at its center. Absorbs red and blue light, reflects green — that\'s why plants look green.',
        atoms: ['C', 'H', 'Mg', 'N', 'O'],
        color: '#16a34a',
    },
    {
        id: 'nitrogen-fixation',
        icon: '🦠',
        name: 'Fiksasi Nitrogen',
        nameEn: 'Nitrogen Fixation',
        equation: 'N₂ + 8H⁺ + 8e⁻ → 2NH₃ + H₂',
        desc: 'Bakteri di akar tanaman legum (Rhizobium) mengubah N₂ dari udara menjadi NH₃ yang bisa dipakai tumbuhan. Inilah pupuk alami yang membuat tanah subur.',
        descEn: 'Bacteria in legume roots (Rhizobium) convert N₂ from air to NH₃ usable by plants. This is the natural fertilizer that makes soil fertile.',
        atoms: ['N', 'H'],
        color: '#7c3aed',
    },
];

export const plantFunFacts = [
    {
        icon: '🌍',
        text: '80% dari semua oksigen di atmosfer Bumi dihasilkan oleh fitoplankton (tumbuhan laut mikroskopis) — bukan hutan hujan. Hutan lebih berfungsi sebagai penampung karbon.',
        textEn: '80% of all oxygen in Earth\'s atmosphere is produced by phytoplankton (microscopic marine plants) — not rainforests. Forests function more as carbon sinks.',
    },
    {
        icon: '🧲',
        text: 'Satu pohon oak dewasa bisa menyerap 22 kg CO₂ per tahun — artinya menyerap sekitar 6 kg karbon dan melepaskan 16 kg oksigen bersih ke udara.',
        textEn: 'One mature oak tree can absorb 22 kg of CO₂ per year — that means absorbing about 6 kg of carbon and releasing 16 kg of net oxygen into the air.',
    },
    {
        icon: '💡',
        text: 'Fotosintesis hanya efisien sekitar 1–2% dalam mengubah energi matahari menjadi biomassa. Bandingkan dengan panel surya modern (~20%). Namun tumbuhan bisa self-replicate!',
        textEn: 'Photosynthesis is only about 1-2% efficient at converting solar energy into biomass. Compare this to modern solar panels (~20%). But plants can self-replicate!',
    },
    {
        icon: '🪵',
        text: 'Kayu adalah karbon padat yang tersimpan — sebatang pohon adalah "tabungan karbon" raksasa. Saat dibakar atau membusuk, karbon itu kembali jadi CO₂ ke atmosfer.',
        textEn: 'Wood is stored solid carbon — a tree is a giant "carbon bank". When burned or decomposed, that carbon returns as CO₂ to the atmosphere.',
    },
    {
        icon: '🌊',
        text: '97% dari air yang diserap akar tumbuhan menguap kembali ke udara melalui stomata (transpirasi). Hanya 3% yang digunakan untuk fotosintesis dan pertumbuhan.',
        textEn: '97% of water absorbed by plant roots evaporates back into the air through stomata (transpiration). Only 3% is used for photosynthesis and growth.',
    },
];
