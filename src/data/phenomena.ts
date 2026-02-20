// ─────────────────────────────────────────────────────────────────────────────
// ATOMIC PHENOMENA DATABASE
// Fenomena-fenomena atom yang terkenal di kalangan umum maupun ilmuwan
// ─────────────────────────────────────────────────────────────────────────────

export interface Phenomenon {
    id: string;
    icon: string;
    title: string;       // Indonesian
    titleEn: string;       // English
    tagline: string;       // short "wow" hook
    category: 'nuclear' | 'quantum' | 'everyday' | 'cosmos' | 'life';
    atoms: string[];     // related elements (for display)
    desc: string;       // explanation
    funFact: string;       // mind-blowing fact
    scale: string;       // human-scale analogy
    realWorld: string;       // where we see this today
}

export const phenomena: Phenomenon[] = [

    // ── NUCLEAR ──────────────────────────────────────────────────────────
    {
        id: 'fission',
        icon: '💥',
        title: 'Fisi Nuklir',
        titleEn: 'Nuclear Fission',
        tagline: 'Satu atom uranium bisa menghancurkan satu kota',
        category: 'nuclear',
        atoms: ['U', 'Kr', 'Ba', 'n'],
        desc: 'Ketika inti atom uranium-235 ditembak neutron, ia pecah menjadi dua inti yang lebih kecil sambil melepaskan energi luar biasa dan 2-3 neutron baru — yang kemudian membelah atom lain lagi. Reaksi berantai inilah yang terjadi dalam sepersekian detik di bom atom.',
        funFact: 'Bom atom Hiroshima hanya menggunakan sekitar 64 kg uranium, dan hanya sekitar 1 kg yang benar-benar bereaksi. Tapi energi yang dilepaskan setara dengan 15.000 ton TNT.',
        scale: 'Energi dari fisi 1 gram uranium setara dengan membakar 3 ton batu bara.',
        realWorld: 'Pembangkit listrik tenaga nuklir menggunakan fisi nuklir terkontrol untuk menghasilkan listrik bagi jutaan rumah tangga.',
    },
    {
        id: 'fusion',
        icon: '☀️',
        title: 'Fusi Nuklir',
        titleEn: 'Nuclear Fusion',
        tagline: 'Kekuatan yang menggerakkan matahari selama 5 miliar tahun',
        category: 'nuclear',
        atoms: ['H', 'He'],
        desc: 'Kebalikan dari fisi — dua inti atom ringan (hidrogen) bergabung menjadi satu inti yang lebih berat (helium) sambil melepaskan energi JAUH lebih besar dari fisi. Ini yang terjadi di inti matahari setiap detik, dalam tekanan dan panas yang tidak terbayangkan.',
        funFact: 'Matahari membakar 600 juta ton hidrogen setiap detik melalui fusi nuklir. Tapi karena E=mc², hanya 4 juta ton yang hilang sebagai energi — yang cukup untuk menerangi seluruh tata surya.',
        scale: 'Fusi 1 kg hidrogen menghasilkan energi setara dengan membakar 10 juta kg bahan bakar minyak.',
        realWorld: 'ITER di Prancis adalah proyek reaktor fusi terbesar yang pernah dibangun manusia — kolaborasi 35 negara yang bertujuan membuktikan energi fusi komersial.',
    },
    {
        id: 'radioactivity',
        icon: '☢️',
        title: 'Radioaktivitas',
        titleEn: 'Radioactivity',
        tagline: 'Atom yang tidak stabil — dan meledak sendiri',
        category: 'nuclear',
        atoms: ['Ra', 'U', 'Pu', 'C'],
        desc: 'Beberapa atom memiliki inti yang terlalu berat dan tidak stabil. Secara spontan, mereka memancarkan partikel (alfa, beta) atau gelombang energi (gamma) untuk mencapai kestabilan. Ini yang disebut peluruhan radioaktif.',
        funFact: 'Marie Curie adalah orang pertama yang meneliti radioaktivitas secara sistematis — dan ia wafat akibat paparan radiasi yang dia temukan sendiri. Buku catatannya masih sangat radioaktif sampai hari ini, disimpan dalam kotak timbal, dan peneliti harus menandatangani surat pernyataan risiko untuk membukanya.',
        scale: 'Karbon-14 yang radioaktif digunakan untuk menentukan usia fosil hingga 50.000 tahun yang lalu — disebut "carbon dating".',
        realWorld: 'Terapi kanker dengan radiasi, CT scan, dan PET scan semuanya memanfaatkan fenomena radioaktivitas.',
    },
    {
        id: 'chain-reaction',
        icon: '⛓️',
        title: 'Reaksi Berantai',
        titleEn: 'Chain Reaction',
        tagline: 'Satu neutron → dua → empat → delapan → ledakan',
        category: 'nuclear',
        atoms: ['U', 'Pu'],
        desc: 'Ketika satu atom uranium pecah (fisi), ia melepaskan 2-3 neutron. Setiap neutron membelah atom lain, yang kembali melepaskan lebih banyak neutron. Dalam hitungan mikro-detik, reaksi ini berlipat ganda secara eksponensial hingga seluruh bahan bakar bereaksi sekaligus.',
        funFact: 'Bom atom membutuhkan "massa kritis" — jumlah minimum uranium/plutonium agar reaksi berantai tidak berhenti sendiri. Di bawah massa kritis, neutron banyak yang kabur sebelum mengenai atom. Di atasnya — ledakan.',
        scale: 'Jika kamu melipat selembar kertas 42 kali, tebalnya akan mencapai bulan. Prinsip yang sama dengan reaksi berantai — eksponensial selalu luar biasa.',
        realWorld: 'Reaktor nuklir adalah mesin reaksi berantai yang dikontrol — batang penyerap neutron memperlambat reaksi agar tidak meledak.',
    },

    // ── QUANTUM ──────────────────────────────────────────────────────────
    {
        id: 'photoelectric',
        icon: '💡',
        title: 'Efek Fotolistrik',
        titleEn: 'Photoelectric Effect',
        tagline: 'Nobel Prize Einstein — bukan relativitas, tapi efek ini',
        category: 'quantum',
        atoms: ['e⁻', 'hν'],
        desc: 'Ketika cahaya mengenai permukaan logam, elektron terlepas. Einstein menjelaskan ini dengan mengatakan cahaya terdiri dari paket energi (foton) — bukan gelombang. Ini yang menghancurkan fisika klasik dan melahirkan mekanika kuantum.',
        funFact: 'Einstein memenangkan Nobel Prize 1921 BUKAN untuk relativitas (E=mc²) yang lebih terkenal, melainkan untuk penjelasan efek fotolistrik ini. Relativitas dianggap terlalu spekulatif waktu itu.',
        scale: 'Kalkulator solar yang kamu pakai bekerja berkat efek fotolistrik — foton dari cahaya memukul elektron keluar dan menghasilkan listrik.',
        realWorld: 'Panel surya, sensor kamera digital, dan detektor cahaya semuanya bekerja berdasarkan efek fotolistrik.',
    },
    {
        id: 'quantum-tunneling',
        icon: '👻',
        title: 'Terowongan Kuantum',
        titleEn: 'Quantum Tunneling',
        tagline: 'Partikel yang bisa menembus tembok',
        category: 'quantum',
        atoms: ['H', 'e⁻', 'p⁺'],
        desc: 'Dalam skala kuantum, partikel tidak berada di satu tempat — mereka tersebar dalam "gelombang probabilitas". Kecil kemungkinannya, tapi nyata secara matematis: partikel bisa "menembus" penghalang energi yang secara klasik mustahil dilewati.',
        funFact: 'Tanpa quantum tunneling, matahari tidak bisa bersinar! Proton di inti matahari terlalu lambat untuk mengatasi gaya tolak elektromagnetik satu sama lain — tapi mereka tunneling melewatinya. Fusi nuklir di matahari bergantung pada efek kuantum ini.',
        scale: 'Seperti melempar bola ke dinding beton, dan rupanya bola itu muncul di sisi lain — kecil kemungkinannya, tapi dalam skala quantum, ini terjadi terus-menerus.',
        realWorld: 'Flash memory (SSD, USB) menyimpan data dengan menggunakan quantum tunneling — elektron diinjeksikan melewati lapisan isolator yang tipis.',
    },
    {
        id: 'superposition',
        icon: '🔮',
        title: 'Superposisi Kuantum',
        titleEn: 'Quantum Superposition',
        tagline: 'Kucing Schrödinger — hidup sekaligus mati',
        category: 'quantum',
        atoms: ['e⁻', 'q'],
        desc: 'Sebelum diobservasi, partikel kuantum berada dalam semua keadaan yang mungkin sekaligus. Baru ketika diukur, ia "memilih" satu keadaan. Dalam skala elektron dan foton, ini bukan metafora — ini kenyataan yang terukur.',
        funFact: 'Schrödinger menciptakan eksperimen pikiran kucingnya bukan untuk menjelaskan teori kuantum, tapi untuk MENGKRITIK betapa absurdnya implikasi superposisi jika diterapkan ke skala makro. Ironisnya, kucing Schrödinger kini menjadi simbol mekanika kuantum.',
        scale: 'Komputer kuantum menggunakan superposisi — sementara komputer biasa memproses 0 atau 1, komputer kuantum memproses 0 DAN 1 sekaligus.',
        realWorld: 'IBM, Google, dan banyak negara sedang berlomba membangun komputer kuantum yang memanfaatkan superposisi untuk memecahkan masalah yang mustahil bagi komputer klasik.',
    },

    // ── EVERYDAY ─────────────────────────────────────────────────────────
    {
        id: 'crystal-structure',
        icon: '💎',
        title: 'Struktur Kristal',
        titleEn: 'Crystal Structure',
        tagline: 'Berlian dan grafit: atom sama, sifat berbeda total',
        category: 'everyday',
        atoms: ['C', 'Fe', 'Si'],
        desc: 'Berlian dan grafit (karbon dalam pensil) terbuat dari atom yang SAMA — karbon. Perbedaannya hanya pada bagaimana atom-atom itu tersusun. Berlian: setiap C berikatan dengan 4 C lain dalam jaringan 3D yang sangat kuat. Grafit: C berikatan dalam lapisan 2D yang mudah tergelincir. Satu atom, dua sifat yang sangat berbeda.',
        funFact: 'Besi (Fe) keras karena atom-atom Fe tersusun dalam pola kisi kubik yang rapat dengan ikatan metalik. Kayu lunak karena tersusun dari polimer selulosa yang diikat oleh ikatan hidrogen yang lebih lemah. Sama-sama terbuat dari atom — beda susunan, beda sifat.',
        scale: 'Intan (berlian) adalah zat alami paling keras di bumi karena setiap atom C berikatan ke 4 C lain — tidak ada bagian yang lemah.',
        realWorld: 'Mata bor pengeboran minyak dilapisi berlian sintetis. Prosesor komputer terbuat dari silikon kristal. Kekuatan kaca tergantung pada struktur kristalnya.',
    },
    {
        id: 'combustion',
        icon: '🔥',
        title: 'Pembakaran',
        titleEn: 'Combustion',
        tagline: 'Api bukan zat — api adalah reaksi atom',
        category: 'everyday',
        atoms: ['C', 'H', 'O', 'N'],
        desc: 'Api yang kamu lihat bukan zat — itu adalah reaksi kimia yang sangat cepat. Atom karbon dan hidrogen dari bahan bakar bereaksi dengan oksigen dari udara, membentuk CO₂ dan H₂O sambil melepaskan energi dalam bentuk panas dan cahaya.',
        funFact: 'Api lilin di ruang angkasa berbentuk bola sempurna — karena tanpa gravitasi tidak ada konveksi (udara panas naik) sehingga nyala tidak memiliki arah "atas".',
        scale: 'Setiap kali kamu bernapas, tubuhmu "membakar" glukosa dengan oksigen — ini adalah pembakaran yang sangat lambat dan terkontrol yang disebut respirasi seluler.',
        realWorld: 'Mesin mobil, roket, dan kompor — semuanya menggunakan prinsip yang sama: karbon + hidrogen + oksigen = energi.',
    },
    {
        id: 'rusting',
        icon: '🪨',
        title: 'Korosi (Karat)',
        titleEn: 'Corrosion / Rusting',
        tagline: 'Mars berwarna merah karena planet itu berkarat',
        category: 'everyday',
        atoms: ['Fe', 'O', 'H'],
        desc: 'Karat adalah reaksi antara besi (Fe), oksigen (O₂), dan air (H₂O) yang membentuk besi oksida (Fe₂O₃). Reaksi ini terjadi karena besi "menyukai" oksigen dan secara termodinamika lebih stabil dalam bentuk oksida.',
        funFact: 'Seluruh planet Mars berwarna merah karena permukaannya tertutup Fe₂O₃ — besi oksida, alias karat. Mars adalah planet karat raksasa.',
        scale: 'Industri global menghabiskan lebih dari $2,5 TRILIUN per tahun hanya untuk mencegah dan memperbaiki kerusakan akibat korosi.',
        realWorld: 'Stainless steel mengandung kromium (Cr) yang membentuk lapisan oksida transparan pelindung — besi di dalamnya tidak pernah berkontak dengan oksigen.',
    },

    // ── COSMOS ───────────────────────────────────────────────────────────
    {
        id: 'nucleosynthesis',
        icon: '⭐',
        title: 'Nukleosintesis Bintang',
        titleEn: 'Stellar Nucleosynthesis',
        tagline: 'Setiap atom di tubuhmu pernah berada di dalam bintang',
        category: 'cosmos',
        atoms: ['H', 'He', 'C', 'O', 'Fe', 'Au'],
        desc: 'Semua unsur yang lebih berat dari hidrogen dan helium — karbon, oksigen, besi, bahkan emas — tercipta di dalam inti bintang melalui fusi nuklir selama miliaran tahun, lalu tersebar ke seluruh alam semesta saat bintang meledak (supernova).',
        funFact: 'Emas (Au) dan platinum tidak bisa dibuat dalam ledakan supernova biasa — mereka hanya terbentuk dalam tabrakan dua bintang neutron (kilonova). Satu peristiwa tabrakan bintang neutron menghasilkan emas sebanyak massa planet Jupiter.',
        scale: 'Kamu adalah "stardust" — secara harfiah. Atom kalsium di tulangmu, atom besi di darahmu, atom oksigen yang kamu hirup — semua lahir dari bintang yang meledak miliaran tahun lalu.',
        realWorld: 'Astronomi telah membuktikan ini dengan mengamati spektrum bintang — kita bisa melihat unsur apa yang terbentuk di bintang yang berbeda.',
    },
    {
        id: 'antimatter',
        icon: '⚡',
        title: 'Antimateri',
        titleEn: 'Antimatter',
        tagline: 'Satu gram antimateri = 43 kiloton TNT',
        category: 'cosmos',
        atoms: ['e⁺', 'p̄', 'H̄'],
        desc: 'Setiap partikel materi punya "kembaran" antimateri dengan muatan berlawanan. Ketika materi bertemu antimateri, keduanya saling memusnahkan dan seluruh massanya berubah menjadi energi murni (E=mc²). Dalam milisekon pertama setelah Big Bang, ada sedikit lebih banyak materi dari antimateri — sisa yang tidak terhancurkan itulah seluruh alam semesta yang ada sekarang.',
        funFact: 'CERN memproduksi antiproton setiap hari — dalam jumlah yang bisa dihitung dengan tangan. Mengumpulkan 1 gram antimateri akan membutuhkan waktu miliaran kali lebih lama dari usia alam semesta dengan teknologi sekarang.',
        scale: 'Energi dari 1 gram antimateri yang bereaksi dengan 1 gram materi biasa setara dengan bom nuklir berukuran sedang.',
        realWorld: 'PET scan (Positron Emission Tomography) yang digunakan di rumah sakit menggunakan antimateri (positron) untuk mencitrakan organ tubuh secara 3D.',
    },

    // ── LIFE ─────────────────────────────────────────────────────────────
    {
        id: 'dna-atoms',
        icon: '🧬',
        title: 'DNA — Kode Kehidupan dari Atom',
        titleEn: 'DNA — Life\'s Atomic Code',
        tagline: 'Instruksi untuk membangun tubuhmu, ditulis dengan 4 huruf kimia',
        category: 'life',
        atoms: ['C', 'H', 'O', 'N', 'P'],
        desc: 'DNA hanya terdiri dari 5 jenis atom: karbon, hidrogen, oksigen, nitrogen, dan fosfor. Disusun dalam urutan tertentu membentuk basa (A, T, C, G) yang merupakan "huruf" kode genetik. 3 miliar pasang basa itu adalah instruksi lengkap untuk membangun tubuh manusia.',
        funFact: '3 miliar pasang basa dalam DNA satu sel, jika direntangkan, panjangnya 2 meter. Tapi karena DNA dilipat secara sangat rapi (berkat protein histon), semuanya muat di dalam inti sel yang berdiameter 6 mikrometer — 200 kali lebih kecil dari rambut manusia.',
        scale: 'Jika DNA semua sel dalam tubuhmu direntangkan dan disambung, panjangnya bisa mencapai 170 miliar km — cukup untuk pergi ke Pluto dan kembali lebih dari 10 kali.',
        realWorld: 'Bioteknologi modern (vaksin mRNA COVID-19, terapi gen, kloning) semuanya bekerja pada level atom dan molekul DNA.',
    },
    {
        id: 'photosynthesis',
        icon: '🌿',
        title: 'Fotosintesis',
        titleEn: 'Photosynthesis',
        tagline: 'Tumbuhan mengubah cahaya matahari menjadi makanan padat',
        category: 'life',
        atoms: ['C', 'H', 'O', 'Mg', 'N'],
        desc: 'Klorofil di daun (molekul kompleks yang mengandung magnesium di pusatnya) menangkap foton dari matahari. Energi itu digunakan untuk memecah air (H₂O) dan mengambil CO₂ dari udara, lalu menyusunnya menjadi glukosa (C₆H₁₂O₆) — makanan yang menjadi dasar seluruh rantai makanan di Bumi.',
        funFact: 'Seluruh oksigen di atmosfer Bumi yang kamu hirup adalah produk sampingan fotosintesis. Selama miliaran tahun, cyanobacteria dan tumbuhan telah mengubah atmosfer Bumi yang awalnya tanpa oksigen menjadi udara yang bisa kita hirup sekarang.',
        scale: 'Setiap tahun, seluruh tumbuhan dan organisme fotosintesis di Bumi mengikat sekitar 120 miliar ton karbon dari atmosfer — menjadi kayu, daun, dan biomassa.',
        realWorld: 'Panel surya terinspirasi dari fotosintesis. Ilmuwan sedang mengembangkan "fotosintesis artifisial" untuk mengubah CO₂ langsung menjadi bahan bakar menggunakan cahaya matahari.',
    },

    // ── GRAND PRINCIPLES ─────────────────────────────────────────────────
    {
        id: 'stability-principle',
        icon: '😴',
        title: 'Atom itu Malas — Prinsip Kestabilan',
        titleEn: 'The Stability Principle',
        tagline: 'Semua atom dan molekul selalu mencari posisi paling santai',
        category: 'everyday',
        atoms: ['C', 'O', 'H', 'N', 'He', 'Ne'],
        desc: 'Ini adalah prinsip paling fundamental dalam kimia: semua atom dan molekul selalu bergerak menuju keadaan energi paling rendah (paling stabil). Bahan bakar (bensin, kayu) tidak stabil — atom C dan H bisa membentuk ikatan lebih kuat dengan O₂. Ketika dibakar, mereka "jatuh" ke state lebih stabil: CO₂ + H₂O, sambil melepaskan energinya sebagai panas dan cahaya. Gas mulia (He, Ne, Ar) tidak pernah bereaksi karena kulit elektron terluarnya sudah penuh sempurna — mereka sudah di state paling stabil.',
        funFact: 'Semua reaksi kimia yang menghasilkan energi (exothermic) adalah atom-atom yang "jatuh" ke keadaan lebih stabil dan melemparkan kelebihan energinya. Api, baterai, makanan yang kamu makan — semuanya sistem yang jatuh ke energi lebih rendah.',
        scale: 'Bayangkan bola di atas bukit. Ia akan selalu menggelinding ke bawah (energi minimum) kecuali ada penghalang. Bahan bakar adalah bola di atas bukit — percikan api adalah dorongan kecil yang memulai jatuhnya.',
        realWorld: 'Seluruh industri kimia, farmasi, material, dan energi didasarkan pada memahami dan memanfaatkan prinsip ini — kemana atom "ingin" pergi secara alami.',
    },
    {
        id: 'noble-metals',
        icon: '🥇',
        title: 'Logam Mulia — Tidak Mau Bereaksi',
        titleEn: 'Noble Metals',
        tagline: 'Emas tidak berkarat setelah ribuan tahun karena sudah puas',
        category: 'everyday',
        atoms: ['Au', 'Pt', 'Ag', 'Ir', 'Pd'],
        desc: 'Emas (Au), platinum (Pt), perak (Ag), dan iridium (Ir) disebut "logam mulia" bukan karena mahal — tapi karena konfigurasi elektronnya sangat stabil sehingga nyaris tidak mau bereaksi dengan apapun. Dibanding besi (Fe) yang "lapar" oksigen dan mudah berkarat, atau natrium (Na) yang meledak di air — emas tidak peduli. Energi yang dibutuhkan untuk memaksa emas bereaksi lebih besar dari energi yang dilepaskan, jadi reaksinya tidak terjadi secara alami.',
        funFact: 'Mahkota dan koin emas yang ditemukan di makam firaun Mesir 3.300 tahun lalu masih berkilap sempurna — karena emas selama itu tidak bereaksi dengan apapun. Sedangkan besi dari era yang sama sudah lama hancur menjadi karat.',
        scale: 'Gigi emas yang dipasang ribuan tahun lalu masih utuh di dalam mulut mumi — sementara tulangnya sudah rapuh. Emas lebih tahan dari tulang.',
        realWorld: 'Kontak listrik di komputer, smartphone, dan peralatan medis sering dilapisi emas tipis (gold plating) karena emas tidak teroksidasi dan tetap konduktif untuk selamanya.',
    },
];


// Category labels and colors
export const PHENOMENON_CATEGORIES = {
    nuclear: { label: 'Nuklir', color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
    quantum: { label: 'Kuantum', color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
    everyday: { label: 'Sehari-hari', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
    cosmos: { label: 'Kosmik', color: '#06b6d4', bg: 'rgba(6,182,212,0.1)' },
    life: { label: 'Kehidupan', color: '#22c55e', bg: 'rgba(34,197,94,0.1)' },
} as const;
