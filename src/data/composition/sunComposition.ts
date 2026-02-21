// ─────────────────────────────────────────────────────────────────────────────
// SUN ATOMIC COMPOSITION
// Komposisi atom Matahari — spektroskopi + model atmosfer
// ─────────────────────────────────────────────────────────────────────────────

export interface SunElement {
    sym: string;
    name: string;
    nameEn: string;
    massPercent: number;
    color: string;
    role: string;
    roleEn: string;
}

export const sunElements: SunElement[] = [
    {
        sym: 'H',
        name: 'Hidrogen',
        nameEn: 'Hydrogen',
        massPercent: 73.46,
        color: '#93c5fd',
        role: 'Bahan bakar fusi nuklir — 620 juta ton dibakar setiap detik di inti',
        roleEn: 'Nuclear fusion fuel — 620 million tons burned every second in the core',
    },
    {
        sym: 'He',
        name: 'Helium',
        nameEn: 'Helium',
        massPercent: 24.85,
        color: '#fde68a',
        role: 'Produk fusi hidrogen — terus bertambah seiring Matahari menua',
        roleEn: 'Fusion product of hydrogen — continuously increasing as the Sun ages',
    },
    {
        sym: 'O',
        name: 'Oksigen',
        nameEn: 'Oxygen',
        massPercent: 0.77,
        color: '#3b82f6',
        role: 'Hadir di lapisan luar dan atmosfer Matahari (korona)',
        roleEn: 'Present in outer layers and solar atmosphere (corona)',
    },
    {
        sym: 'C',
        name: 'Karbon',
        nameEn: 'Carbon',
        massPercent: 0.29,
        color: '#6b7280',
        role: 'Elemen kunci jalur CNO — katalis fusi di bintang besar',
        roleEn: 'Key element in CNO cycle — fusion catalyst in larger stars',
    },
    {
        sym: 'Fe',
        name: 'Besi',
        nameEn: 'Iron',
        massPercent: 0.20,
        color: '#ef4444',
        role: 'Produk akhir nukleosintesis bintang — terdeteksi di spektrum Matahari',
        roleEn: 'End product of stellar nucleosynthesis — detected in solar spectrum',
    },
    {
        sym: 'Ne',
        name: 'Neon',
        nameEn: 'Neon',
        massPercent: 0.12,
        color: '#f472b6',
        role: 'Gas mulia — hadir di lapisan luar, berperan dalam dinamika korona',
        roleEn: 'Noble gas — present in outer layers, role in coronal dynamics',
    },
    {
        sym: 'N',
        name: 'Nitrogen',
        nameEn: 'Nitrogen',
        massPercent: 0.09,
        color: '#818cf8',
        role: 'Katalis jalur CNO bersama karbon dan oksigen',
        roleEn: 'CNO cycle catalyst alongside carbon and oxygen',
    },
    {
        sym: 'Si',
        name: 'Silikon',
        nameEn: 'Silicon',
        massPercent: 0.07,
        color: '#a78bfa',
        role: 'Terbentuk dari fusi nuklir bintang sebelum Tata Surya ada',
        roleEn: 'Formed in stellar nuclear fusion before the Solar System existed',
    },
    {
        sym: 'Mg',
        name: 'Magnesium',
        nameEn: 'Magnesium',
        massPercent: 0.05,
        color: '#34d399',
        role: 'Produk fusi Alpha — terbentuk dari penggabungan inti helium',
        roleEn: 'Alpha-fusion product — formed from helium nucleus merging',
    },
    {
        sym: 'S',
        name: 'Sulfur',
        nameEn: 'Sulfur',
        massPercent: 0.04,
        color: '#fbbf24',
        role: 'Terbentuk dalam proses s-process dan fusi bintang masif',
        roleEn: 'Formed in s-processes and massive star fusion',
    },
];

export const sunLayers = [
    {
        id: 'core',
        icon: '🔴',
        name: 'Inti',
        nameEn: 'Core',
        depth: '0 – 25% radius',
        temp: '~15 juta°C',
        tempEn: '~15 million°C',
        color: '#dc2626',
        desc: 'Di sinilah fusi terjadi — 4 proton (H) bergabung menjadi 1 inti He, melepaskan energi E=mc². Setiap detik, 4 juta ton massa Matahari dikonversi menjadi energi.',
        descEn: 'This is where fusion happens — 4 protons (H) merge into 1 He nucleus, releasing energy E=mc². Every second, 4 million tons of the Sun\'s mass is converted to energy.',
    },
    {
        id: 'radiative',
        icon: '🟠',
        name: 'Zona Radiatif',
        nameEn: 'Radiative Zone',
        depth: '25 – 70% radius',
        temp: '2 juta°C',
        tempEn: '2 million°C',
        color: '#ea580c',
        desc: 'Energi dari inti "merayap" lewat sini melalui emisi dan re-absorpsi foton berulang-ulang. Satu foton bisa butuh 100.000 tahun untuk melewati zona ini.',
        descEn: 'Energy from the core "crawls" through here via repeated photon emission and re-absorption. A single photon can take 100,000 years to cross this zone.',
    },
    {
        id: 'convective',
        icon: '🟡',
        name: 'Zona Konvektif',
        nameEn: 'Convective Zone',
        depth: '70 – 100% radius',
        temp: '5.700°C',
        tempEn: '5,700°C',
        color: '#d97706',
        desc: 'Plasma panas naik ke permukaan seperti air mendidih, lalu turun saat sudah dingin. Pola "granula" di permukaan Matahari adalah bekas arus konveksi ini.',
        descEn: 'Hot plasma rises to the surface like boiling water, then sinks when cooled. The "granule" patterns on the solar surface are the marks of these convection currents.',
    },
    {
        id: 'photosphere',
        icon: '☀️',
        name: 'Fotosfer',
        nameEn: 'Photosphere',
        depth: '~500 km tebal',
        temp: '5.500°C',
        tempEn: '5,500°C',
        color: '#f59e0b',
        desc: 'Lapisan yang "kita lihat" sebagai piringan Matahari. Foton akhirnya bebas di sini — energi yang butuh 100.000 tahun menembus inti kini hanya perlu 8 menit menuju Bumi.',
        descEn: 'The layer we "see" as the solar disk. Photons finally break free here — energy that took 100,000 years to penetrate the core now only needs 8 minutes to reach Earth.',
    },
    {
        id: 'corona',
        icon: '💫',
        name: 'Korona',
        nameEn: 'Corona',
        depth: 'Jutaan km',
        temp: '1 – 3 juta°C',
        tempEn: '1 – 3 million°C',
        color: '#fcd34d',
        desc: 'Misteri terbesar astrofisika: mengapa korona 200× lebih panas dari permukaan? Jawabannya diduga pada osilasi medan magnet (Alfvén waves) yang terus memanaskan plasma.',
        descEn: 'The biggest mystery in astrophysics: why is the corona 200× hotter than the surface? The answer is thought to lie in magnetic field oscillations (Alfvén waves) that continuously heat the plasma.',
    },
];

export const sunFunFacts = [
    {
        icon: '⏱️',
        text: 'Foton sinar matahari yang kamu rasakan hari ini lahir di inti Matahari sekitar 100.000 tahun lalu — baru 8 menit terakhir dihabiskan untuk perjalanan Matahari→Bumi.',
        textEn: 'The sunlight photon you feel today was born in the solar core about 100,000 years ago — only the last 8 minutes were spent traveling from Sun to Earth.',
    },
    {
        icon: '🔥',
        text: 'Setiap detik, Matahari memfusikan 600 juta ton hidrogen menjadi 596 juta ton helium. 4 juta ton sisanya jadi energi (E=mc²) — termasuk cahaya yang menerangi Bumi.',
        textEn: 'Every second, the Sun fuses 600 million tons of hydrogen into 596 million tons of helium. The remaining 4 million tons becomes energy (E=mc²) — including the light that illuminates Earth.',
    },
    {
        icon: '⚗️',
        text: 'Helium ditemukan di Matahari 27 tahun sebelum ditemukan di Bumi (1868 vs 1895). Namanya pun dari dewa Matahari Yunani: Helios.',
        textEn: 'Helium was discovered in the Sun 27 years before it was found on Earth (1868 vs 1895). Its name comes from the Greek sun god: Helios.',
    },
    {
        icon: '💀',
        text: 'Dalam ~5 miliar tahun, hidrogen Matahari akan habis. Ia akan mengembang jadi Raksasa Merah sebesar orbit Bumi, lalu menyusut jadi Katai Putih seukuran Bumi.',
        textEn: 'In ~5 billion years, the Sun\'s hydrogen will run out. It will expand into a Red Giant as large as Earth\'s orbit, then shrink into a White Dwarf the size of Earth.',
    },
    {
        icon: '🌊',
        text: 'Angin matahari (solar wind) — aliran partikel bermuatan dari korona — yang menyapu tata surya. Auroras di kutub Bumi adalah bukti nyata partikel ini menghantam atmosfer kita.',
        textEn: 'The solar wind — a stream of charged particles from the corona — sweeps through the solar system. Auroras at Earth\'s poles are direct evidence of these particles hitting our atmosphere.',
    },
];
