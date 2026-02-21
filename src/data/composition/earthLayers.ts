// ─────────────────────────────────────────────────────────────────────────────
// EARTH ATOMIC COMPOSITION — Layer by Layer
// Data komposisi atom Bumi per lapisan: inti → mantel → kerak → laut → atmosfer
// ─────────────────────────────────────────────────────────────────────────────

export interface EarthLayerElement {
    sym: string;
    name: string;
    nameEn: string;
    percent: number;     // % massa di lapisan ini
    color: string;
}

export interface EarthLayer {
    id: string;
    name: string;
    nameEn: string;
    depth: string;       // misal "0 – 35 km"
    depthEn: string;
    icon: string;
    color: string;       // warna lapisan untuk visualisasi
    gradientFrom: string;
    gradientTo: string;
    massPercent: number; // % dari total massa Bumi
    tempRange: string;   // suhu
    stateOfMatter: string;
    stateOfMatterEn: string;
    elements: EarthLayerElement[];
    dominantElement: string; // simbol
    description: string;
    descriptionEn: string;
    funFact: string;
    funFactEn: string;
}

export const earthLayers: EarthLayer[] = [
    {
        id: 'inner-core',
        name: 'Inti Dalam',
        nameEn: 'Inner Core',
        depth: '5.100 – 6.371 km dari permukaan',
        depthEn: '5,100 – 6,371 km from surface',
        icon: '🔴',
        color: '#dc2626',
        gradientFrom: '#7f1d1d',
        gradientTo: '#dc2626',
        massPercent: 1.7,
        tempRange: '5.000 – 6.000°C',
        stateOfMatter: 'Padat (besi-nikel kristalin)',
        stateOfMatterEn: 'Solid (crystalline iron-nickel)',
        dominantElement: 'Fe',
        elements: [
            { sym: 'Fe', name: 'Besi', nameEn: 'Iron', percent: 85, color: '#ef4444' },
            { sym: 'Ni', name: 'Nikel', nameEn: 'Nickel', percent: 10, color: '#94a3b8' },
            { sym: 'Si', name: 'Silikon', nameEn: 'Silicon', percent: 3, color: '#a78bfa' },
            { sym: 'S', name: 'Sulfur', nameEn: 'Sulfur', percent: 2, color: '#fbbf24' },
        ],
        description: 'Jantung Bumi — bola padat seukuran Bulan yang berputar sedikit lebih cepat dari planet itu sendiri. Tekanan sangat ekstrem (3,6 juta atm) memaksa besi tetap padat meski suhunya melampaui permukaan Matahari.',
        descriptionEn: 'Earth\'s heart — a solid ball the size of the Moon that rotates slightly faster than the planet itself. Extreme pressure (3.6 million atm) forces iron to remain solid even though its temperature exceeds the surface of the Sun.',
        funFact: 'Inti dalam Bumi "tumbuh" sekitar 1mm per tahun — saat besi dari inti luar perlahan membeku di sekelilingnya. Dalam beberapa miliar tahun, seluruh inti mungkin akan menjadi padat.',
        funFactEn: 'Earth\'s inner core "grows" about 1mm per year — as iron from the outer core slowly freezes around it. In a few billion years, the entire core may become solid.',
    },
    {
        id: 'outer-core',
        name: 'Inti Luar',
        nameEn: 'Outer Core',
        depth: '2.900 – 5.100 km dari permukaan',
        depthEn: '2,900 – 5,100 km from surface',
        icon: '🟠',
        color: '#ea580c',
        gradientFrom: '#9a3412',
        gradientTo: '#ea580c',
        massPercent: 30.6,
        tempRange: '4.000 – 5.000°C',
        stateOfMatter: 'Cair (besi-nikel molten)',
        stateOfMatterEn: 'Liquid (molten iron-nickel)',
        dominantElement: 'Fe',
        elements: [
            { sym: 'Fe', name: 'Besi', nameEn: 'Iron', percent: 80, color: '#ef4444' },
            { sym: 'Ni', name: 'Nikel', nameEn: 'Nickel', percent: 5, color: '#94a3b8' },
            { sym: 'O', name: 'Oksigen', nameEn: 'Oxygen', percent: 8, color: '#3b82f6' },
            { sym: 'S', name: 'Sulfur', nameEn: 'Sulfur', percent: 4, color: '#fbbf24' },
            { sym: 'Si', name: 'Silikon', nameEn: 'Silicon', percent: 3, color: '#a78bfa' },
        ],
        description: 'Lautan besi cair yang mengalir konvektif — alirannya bersama rotasi Bumi membangkitkan medan magnet bumi. Tanpa lapisan ini, tidak ada "perisai" melawan angin matahari, dan kehidupan di permukaan tidak mungkin ada.',
        descriptionEn: 'Ocean of flowing molten iron — its convective flow combined with Earth\'s rotation generates Earth\'s magnetic field. Without this layer, there is no "shield" against the solar wind, and life on the surface would be impossible.',
        funFact: 'Arus konveksi di inti luar adalah "generator" medan magnet Bumi. Planetesimal kecil tanpa inti cair (seperti Mars) kehilangan medan magnetnya — dan atmosfernya perlahan terkikis angin matahari selama miliaran tahun.',
        funFactEn: 'Convection currents in the outer core are the "generator" of Earth\'s magnetic field. Small planetesimals without a liquid core (like Mars) lost their magnetic field — and their atmosphere was slowly eroded by the solar wind over billions of years.',
    },
    {
        id: 'mantle',
        name: 'Mantel',
        nameEn: 'Mantle',
        depth: '35 – 2.900 km dari permukaan',
        depthEn: '35 – 2,900 km from surface',
        icon: '🟡',
        color: '#d97706',
        gradientFrom: '#78350f',
        gradientTo: '#d97706',
        massPercent: 67.3,
        tempRange: '800 – 3.700°C',
        stateOfMatter: 'Semipadat/plastis (mengalir dalam skala jutaan tahun)',
        stateOfMatterEn: 'Semi-solid/plastic (flows over millions of years)',
        dominantElement: 'O',
        elements: [
            { sym: 'O', name: 'Oksigen', nameEn: 'Oxygen', percent: 44, color: '#3b82f6' },
            { sym: 'Si', name: 'Silikon', nameEn: 'Silicon', percent: 21, color: '#a78bfa' },
            { sym: 'Mg', name: 'Magnesium', nameEn: 'Magnesium', percent: 23, color: '#10b981' },
            { sym: 'Fe', name: 'Besi', nameEn: 'Iron', percent: 8, color: '#ef4444' },
            { sym: 'Al', name: 'Aluminium', nameEn: 'Aluminum', percent: 2, color: '#cbd5e1' },
            { sym: 'Ca', name: 'Kalsium', nameEn: 'Calcium', percent: 2, color: '#f9fafb' },
        ],
        description: 'Volume terbesar Bumi (~84%). Meski terasa seperti batu keras jika dipegang, mantel sesungguhnya mengalir sangat lambat — seperti plastik dalam skala geologis. Arus konveksinya adalah mesin yang menggerakkan lempeng tektonik.',
        descriptionEn: 'Earth\'s largest volume (~84%). Though it feels like hard rock to the touch, the mantle actually flows very slowly — like plastic on geological timescales. Its convection currents are the engine driving tectonic plate movement.',
        funFact: 'Batuan mantel (peridotit) yang naik ke permukaan melalui gunung berapi memberitahu kita komposisi mantel. Berlian terbentuk di mantel atas pada kedalaman 150–200 km, lalu dibawa cepat ke permukaan oleh letusan kimberlit — seperti "lift" secepat kilat dari dalam bumi.',
        funFactEn: 'Mantle rocks (peridotite) that rise to the surface through volcanoes tell us about mantle composition. Diamonds form in the upper mantle at 150–200 km depth, then are quickly brought to the surface by kimberlite eruptions — like a lightning-fast "elevator" from inside the Earth.',
    },
    {
        id: 'crust',
        name: 'Kerak Bumi',
        nameEn: 'Earth\'s Crust',
        depth: '0 – 35 km (benua) / 0 – 10 km (samudra)',
        depthEn: '0 – 35 km (continental) / 0 – 10 km (oceanic)',
        icon: '🟤',
        color: '#92400e',
        gradientFrom: '#451a03',
        gradientTo: '#b45309',
        massPercent: 0.4,
        tempRange: '0 – 800°C',
        stateOfMatter: 'Padat (batuan silikat)',
        stateOfMatterEn: 'Solid (silicate rocks)',
        dominantElement: 'O',
        elements: [
            { sym: 'O', name: 'Oksigen', nameEn: 'Oxygen', percent: 46.6, color: '#3b82f6' },
            { sym: 'Si', name: 'Silikon', nameEn: 'Silicon', percent: 27.7, color: '#a78bfa' },
            { sym: 'Al', name: 'Aluminium', nameEn: 'Aluminum', percent: 8.1, color: '#cbd5e1' },
            { sym: 'Fe', name: 'Besi', nameEn: 'Iron', percent: 5.0, color: '#ef4444' },
            { sym: 'Ca', name: 'Kalsium', nameEn: 'Calcium', percent: 3.6, color: '#f9fafb' },
            { sym: 'Na', name: 'Natrium', nameEn: 'Sodium', percent: 2.8, color: '#fb923c' },
            { sym: 'K', name: 'Kalium', nameEn: 'Potassium', percent: 2.6, color: '#a78bfa' },
            { sym: 'Mg', name: 'Magnesium', nameEn: 'Magnesium', percent: 2.1, color: '#10b981' },
        ],
        description: 'Lapisan paling tipis — kurang dari 1% massa Bumi — tapi di sinilah semua kehidupan, peradaban, dan seluruh sejarah manusia berlangsung. Kerak benua (granit-silika) lebih tebal dan tua; kerak samudra (basalt) lebih tipis dan muda.',
        descriptionEn: 'The thinnest layer — less than 1% of Earth\'s mass — but this is where all life, civilization, and the entire history of humanity takes place. Continental crust (granite-silica) is thicker and older; oceanic crust (basalt) is thinner and younger.',
        funFact: 'Oksigen adalah elemen paling melimpah di kerak bumi (46.6%) — bukan karena ada O₂ bebas, tapi karena oksigen terikat dalam mineral silikat (SiO₄). Hampir semua batu adalah sejenis "batu oksigen" yang dikristalisasi.',
        funFactEn: 'Oxygen is the most abundant element in Earth\'s crust (46.6%) — not because there\'s free O₂, but because oxygen is bound in silicate minerals (SiO₄). Almost all rocks are a kind of "crystallized oxygen rock".',
    },
    {
        id: 'ocean',
        name: 'Samudra',
        nameEn: 'Ocean',
        depth: '0 – 11 km kedalaman (rerata 3,7 km)',
        depthEn: '0 – 11 km depth (average 3.7 km)',
        icon: '🌊',
        color: '#0284c7',
        gradientFrom: '#0c4a6e',
        gradientTo: '#0284c7',
        massPercent: 0.024,
        tempRange: '-2 – 30°C',
        stateOfMatter: 'Cair (air asin)',
        stateOfMatterEn: 'Liquid (salt water)',
        dominantElement: 'O',
        elements: [
            { sym: 'O', name: 'Oksigen', nameEn: 'Oxygen', percent: 85.8, color: '#3b82f6' },
            { sym: 'H', name: 'Hidrogen', nameEn: 'Hydrogen', percent: 10.8, color: '#93c5fd' },
            { sym: 'Cl', name: 'Klorin', nameEn: 'Chlorine', percent: 1.9, color: '#34d399' },
            { sym: 'Na', name: 'Natrium', nameEn: 'Sodium', percent: 1.05, color: '#fb923c' },
            { sym: 'Mg', name: 'Magnesium', nameEn: 'Magnesium', percent: 0.13, color: '#10b981' },
            { sym: 'S', name: 'Sulfur', nameEn: 'Sulfur', percent: 0.09, color: '#fbbf24' },
        ],
        description: 'Air laut bukan hanya H₂O — ia adalah sup atom yang sangat kompleks. NaCl (garam) mendominasi, tapi ada sejumlah kecil hampir semua elemen yang bisa dibayangkan, terlarut dari batuan oleh miliaran tahun pelapukan.',
        descriptionEn: 'Ocean water isn\'t just H₂O — it\'s an incredibly complex atomic soup. NaCl (salt) dominates, but there are trace amounts of almost every imaginable element, dissolved from rocks over billions of years of weathering.',
        funFact: 'Air laut mengandung emas terlarut — sekitar 13 ppb (partikel per miliar). Total emas di seluruh samudra diestimasi ~20 juta ton. Cukup untuk memberi setiap orang di Bumi ~2,7 kg emas — tapi terlalu encer untuk diekstrak secara ekonomis.',
        funFactEn: 'Ocean water contains dissolved gold — about 13 ppb (particles per billion). Total gold in all oceans is estimated at ~20 million tons. Enough to give every person on Earth ~2.7 kg of gold — but too dilute to extract economically.',
    },
    {
        id: 'atmosphere',
        name: 'Atmosfer',
        nameEn: 'Atmosphere',
        depth: '0 – 10.000 km (rerata 100 km "efektif")',
        depthEn: '0 – 10,000 km (average 100 km "effective")',
        icon: '💨',
        color: '#0ea5e9',
        gradientFrom: '#075985',
        gradientTo: '#38bdf8',
        massPercent: 0.00009,
        tempRange: '-90°C (mesosfer) – 2.000°C (termosfer)',
        stateOfMatter: 'Gas',
        stateOfMatterEn: 'Gas',
        dominantElement: 'N',
        elements: [
            { sym: 'N', name: 'Nitrogen', nameEn: 'Nitrogen', percent: 78.09, color: '#6366f1' },
            { sym: 'O', name: 'Oksigen', nameEn: 'Oxygen', percent: 20.95, color: '#3b82f6' },
            { sym: 'Ar', name: 'Argon', nameEn: 'Argon', percent: 0.93, color: '#94a3b8' },
            { sym: 'C', name: 'Karbon (CO₂)', nameEn: 'Carbon (CO₂)', percent: 0.04, color: '#6b7280' },
        ],
        description: 'Selimut tipis gas yang membuat Bumi layak huni. N₂ mendominasi (inert, "pengencer" O₂), O₂ adalah hasil 2,5 miliar tahun fotosintesis organisme, Ar adalah produk peluruhan K-40 dari kerak bumi selama miliaran tahun.',
        descriptionEn: 'Thin blanket of gas that makes Earth habitable. N₂ dominates (inert, "dilutes" O₂), O₂ is the result of 2.5 billion years of photosynthesis, Ar is a product of K-40 decay from the crust over billions of years.',
        funFact: 'Seluruh atmosfer Bumi hanya 0,00009% massa planet. Jika Bumi seukuran apel, atmosfernya hanya setipis kulit apel itu. Namun lapisan sepele inilah yang melindungi kita dari radiasi matahari, mengatur suhu, dan mengijinkan kehidupan.',
        funFactEn: 'Earth\'s entire atmosphere is only 0.00009% of the planet\'s mass. If Earth were the size of an apple, its atmosphere would be as thin as the apple\'s skin. Yet this seemingly trivial layer protects us from solar radiation, regulates temperature, and allows life.',
    },
];

// ─── Bumi overall ─────────────────────────────────────────────────────────────
export const earthOverall = {
    totalMassKg: '5,97 × 10²⁴',
    totalAtoms: '~1,3 × 10⁵⁰',
    age: '4,54 miliar tahun',
    ageEn: '4.54 billion years',
    funFacts: [
        {
            icon: '🔴',
            text: 'Besi (Fe) adalah unsur paling melimpah di Bumi secara keseluruhan (32%) — tapi hanya 5% di kerak. Sebagian besar "tenggelam" ke inti saat Bumi masih cair 4,5 miliar tahun lalu.',
            textEn: 'Iron (Fe) is the most abundant element in Earth overall (32%) — but only 5% in the crust. Most "sank" to the core when Earth was still molten 4.5 billion years ago.',
        },
        {
            icon: '💎',
            text: 'Berlian terbentuk di mantel atas (150–200 km) dalam tekanan ekstrem, lalu dibawa ke permukaan dalam detik-menit oleh letusan kimberlit yang sangat cepat dan dalam.',
            textEn: 'Diamonds form in the upper mantle (150–200 km) under extreme pressure, then brought to the surface in seconds-to-minutes by very fast, deep kimberlite eruptions.',
        },
        {
            icon: '🌊',
            text: 'Sebagian besar air di Bumi datang dari asteroid dan komet yang menghantam 3,8–4,1 miliar tahun lalu (Late Heavy Bombardment) — bukan dari dalam Bumi sendiri.',
            textEn: 'Most of Earth\'s water came from asteroids and comets that hit 3.8–4.1 billion years ago (Late Heavy Bombardment) — not from within Earth itself.',
        },
        {
            icon: '🧲',
            text: 'Inti besi cair Bumi berputar dan menciptakan medan magnet yang melindungi dari angin matahari. Tanpanya, radiasi UV akan membunuh semua organisme di permukaan.',
            textEn: 'Earth\'s liquid iron core rotates and creates a magnetic field that shields from the solar wind. Without it, UV radiation would kill all organisms on the surface.',
        },
    ],
};
