// ─────────────────────────────────────────────────────────────────────────────
// UNIVERSE ATOMIC COMPOSITION
// Komposisi atom Alam Semesta — berdasarkan observasi kosmologis
// Data: Planck Mission 2018 + Big Bang Nucleosynthesis
// ─────────────────────────────────────────────────────────────────────────────

export interface UniverseElement {
    sym: string;
    name: string;
    nameEn: string;
    massPercent: number;
    color: string;
    origin: string;     // Asal usul elemen
    originEn: string;
}

export const universeElements: UniverseElement[] = [
    {
        sym: 'H',
        name: 'Hidrogen',
        nameEn: 'Hydrogen',
        massPercent: 73.9,
        color: '#93c5fd',
        origin: 'Big Bang (3 menit pertama alam semesta)',
        originEn: 'Big Bang (first 3 minutes of the universe)',
    },
    {
        sym: 'He',
        name: 'Helium',
        nameEn: 'Helium',
        massPercent: 24.0,
        color: '#fde68a',
        origin: 'Big Bang Nucleosynthesis + fusi bintang',
        originEn: 'Big Bang Nucleosynthesis + stellar fusion',
    },
    {
        sym: 'O',
        name: 'Oksigen',
        nameEn: 'Oxygen',
        massPercent: 0.77,
        color: '#3b82f6',
        origin: 'Fusi bintang masif (burning tripel-alpha → C → O)',
        originEn: 'Massive stellar fusion (triple-alpha burning → C → O)',
    },
    {
        sym: 'C',
        name: 'Karbon',
        nameEn: 'Carbon',
        massPercent: 0.29,
        color: '#374151',
        origin: 'Proses tripel-alpha di inti bintang raksasa',
        originEn: 'Triple-alpha process in giant stellar cores',
    },
    {
        sym: 'Ne',
        name: 'Neon',
        nameEn: 'Neon',
        massPercent: 0.12,
        color: '#f472b6',
        origin: 'Pembakaran karbon dan oksigen di bintang masif',
        originEn: 'Carbon and oxygen burning in massive stars',
    },
    {
        sym: 'Fe',
        name: 'Besi',
        nameEn: 'Iron',
        massPercent: 0.11,
        color: '#ef4444',
        origin: 'End-product fusi nuklir — bintang tak bisa membakar lebih jauh',
        originEn: 'Nuclear fusion end-product — stars cannot fuse beyond this',
    },
    {
        sym: 'N',
        name: 'Nitrogen',
        nameEn: 'Nitrogen',
        massPercent: 0.10,
        color: '#818cf8',
        origin: 'Jalur CNO dalam fusi hidrogen di bintang',
        originEn: 'CNO cycle in stellar hydrogen fusion',
    },
    {
        sym: 'Si',
        name: 'Silikon',
        nameEn: 'Silicon',
        massPercent: 0.065,
        color: '#a78bfa',
        origin: 'Pembakaran neon dan oksigen di bintang pra-supernova',
        originEn: 'Neon and oxygen burning in pre-supernova stars',
    },
    {
        sym: 'Mg',
        name: 'Magnesium',
        nameEn: 'Magnesium',
        massPercent: 0.058,
        color: '#10b981',
        origin: 'Proses Alpha di bintang masif (He + Ne → Mg)',
        originEn: 'Alpha process in massive stars (He + Ne → Mg)',
    },
    {
        sym: 'S',
        name: 'Sulfur',
        nameEn: 'Sulfur',
        massPercent: 0.044,
        color: '#fbbf24',
        origin: 'Pembakaran silikon di tahap akhir bintang masif',
        originEn: 'Silicon burning in the final stages of massive stars',
    },
];

export interface UniverseEra {
    id: string;
    icon: string;
    name: string;
    nameEn: string;
    timeAfterBigBang: string;
    timeAfterBigBangEn: string;
    color: string;
    desc: string;
    descEn: string;
    elementsFormed: string[];
}

export const universeEras: UniverseEra[] = [
    {
        id: 'big-bang',
        icon: '💥',
        name: 'Big Bang',
        nameEn: 'Big Bang',
        timeAfterBigBang: 't = 0',
        timeAfterBigBangEn: 't = 0',
        color: '#dc2626',
        desc: 'Semua energi dan materi terkandung dalam titik sangat padat (singularitas). Suhu: tak terhingga. Tidak ada elemen — tidak ada atom. Hanya energi murni.',
        descEn: 'All energy and matter contained in an extremely dense point (singularity). Temperature: infinite. No elements — no atoms. Only pure energy.',
        elementsFormed: [],
    },
    {
        id: 'nucleosynthesis',
        icon: '⚡',
        name: 'Nukleosintesis Big Bang',
        nameEn: 'Big Bang Nucleosynthesis',
        timeAfterBigBang: '100 detik – 20 menit',
        timeAfterBigBangEn: '100 seconds – 20 minutes',
        color: '#ea580c',
        desc: 'Proton dan neutron bergabung membentuk inti H, He-4, dan sejumlah kecil Li-7 dan D (deuterium). Rasio H:He yang kita lihat hari ini (3:1) ditetapkan di sini.',
        descEn: 'Protons and neutrons combine to form H, He-4, and small amounts of Li-7 and D (deuterium) nuclei. The H:He ratio we see today (3:1) was set here.',
        elementsFormed: ['H', 'He', 'Li'],
    },
    {
        id: 'first-stars',
        icon: '⭐',
        name: 'Bintang Pertama',
        nameEn: 'First Stars',
        timeAfterBigBang: '100 – 300 juta tahun',
        timeAfterBigBangEn: '100 – 300 million years',
        color: '#d97706',
        desc: 'Bintang-bintang pertama (Population III) — sangat masif, hanya H dan He. Fusi mereka menciptakan C, N, O, Ne, Mg, Si. Saat mereka mati sebagai supernova, elemen ini disebar.',
        descEn: 'First stars (Population III) — extremely massive, only H and He. Their fusion created C, N, O, Ne, Mg, Si. When they died as supernovae, these elements were scattered.',
        elementsFormed: ['C', 'N', 'O', 'Ne', 'Mg', 'Si'],
    },
    {
        id: 'stellar-generations',
        icon: '🌌',
        name: 'Generasi Bintang',
        nameEn: 'Stellar Generations',
        timeAfterBigBang: '300 juta – 9 miliar tahun',
        timeAfterBigBangEn: '300 million – 9 billion years',
        color: '#6d28d9',
        desc: 'Setiap generasi bintang membakar dan menambah elemen berat baru. Fe, Ni, elemen berat lainnya terbentuk. Supernova dan penggabungan bintang neutron menciptakan Au, Pt, U.',
        descEn: 'Each generation of stars burns and adds new heavy elements. Fe, Ni, other heavy elements form. Supernovae and neutron star mergers create Au, Pt, U.',
        elementsFormed: ['S', 'Fe', 'Ni', 'Cu', 'Zn'],
    },
    {
        id: 'solar-system',
        icon: '☀️',
        name: 'Tata Surya Terbentuk',
        nameEn: 'Solar System Forms',
        timeAfterBigBang: '9,1 miliar tahun (4,6 miliar tahun lalu)',
        timeAfterBigBangEn: '9.1 billion years (4.6 billion years ago)',
        color: '#0369a1',
        desc: 'Nebula kaya elemen runtuh membentuk Matahari dan planet. Bumi terbentuk dari debu bintang generasi sebelumnya. Kita adalah "abu bintang" yang tersusun menjadi kompleks.',
        descEn: 'An element-rich nebula collapses to form the Sun and planets. Earth forms from the dust of previous stellar generations. We are "stardust" organized into complexity.',
        elementsFormed: ['ALL'],
    },
];

export const universeFunFacts = [
    {
        icon: '🌌',
        text: 'Alam Semesta terdiri dari 5% materi biasa (atom), 27% dark matter, dan 68% dark energy. Jadi 95% alam semesta tidak terbuat dari atom sama sekali — dan kita belum tahu itu apa.',
        textEn: 'The Universe consists of 5% ordinary matter (atoms), 27% dark matter, and 68% dark energy. So 95% of the universe is not made of atoms at all — and we don\'t know what it is.',
    },
    {
        icon: '⭐',
        text: 'Setiap atom besi di tubuhmu pernah berada di inti bintang yang lebih tua dari Matahari. Bintang itu harus mati di supernova agar atomnya bisa tersebar dan akhirnya membentuk kamu.',
        textEn: 'Every iron atom in your body once sat in the core of a star older than the Sun. That star had to die in a supernova so its atoms could scatter and eventually form you.',
    },
    {
        icon: '💥',
        text: 'Dalam 3 menit pertama setelah Big Bang, 99% dari semua hidrogen dan helium yang ada hari ini sudah terbentuk. Kita masih hidup dari "bunga" Big Bang 13,8 miliar tahun lalu.',
        textEn: 'In the first 3 minutes after the Big Bang, 99% of all hydrogen and helium that exists today was already formed. We are still living off the "interest" of the Big Bang 13.8 billion years ago.',
    },
    {
        icon: '🥇',
        text: 'Emas (Au) dan platinum terbentuk dari tabrakan bintang neutron (kilonova) — bukan di bintang biasa. Proses ini jarang terjadi; itu sebabnya Au sangat langka di alam semesta.',
        textEn: 'Gold (Au) and platinum form from neutron star collisions (kilonovae) — not in ordinary stars. This process is rare; that\'s why Au is extremely scarce in the universe.',
    },
    {
        icon: '🔭',
        text: 'Ada lebih banyak atom di satu gelas air daripada jumlah gelas air yang bisa mengisi seluruh alam semesta yang bisa diamati. Atom adalah hal paling kecil namun paling banyak.',
        textEn: 'There are more atoms in one glass of water than the number of glasses of water needed to fill the entire observable universe. Atoms are the smallest yet most numerous things.',
    },
];
