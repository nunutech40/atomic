// ─────────────────────────────────────────────────────────────────────────────
// LEARN MODULES — Phase 2 Education Content
// Kurikulum First Principles: dari observasi ke mekanika kuantum
// ─────────────────────────────────────────────────────────────────────────────

export interface LearningStep {
    type: 'question' | 'concept' | 'fact' | 'animation-hint' | 'formula';
    title?: string;
    titleEn?: string;
    body: string;
    bodyEn?: string;
}

export interface QuizQuestion {
    q: string;
    qEn?: string;
    options: string[];
    optionsEn?: string[];
    correct: number; // index
    explanation: string;
    explanationEn?: string;
}

export interface LearnModule {
    slug: string;
    level: number;        // 0–6
    order: number;        // urutan dalam level
    icon: string;
    title: string;
    titleEn: string;
    subtitle: string;
    subtitleEn: string;
    duration: number;     // menit
    free: boolean;        // true = bisa diakses tanpa login
    steps: LearningStep[];
    quiz: QuizQuestion[];
    connectsTo?: string;  // route yang dikoneksikan (e.g. '/element/6')
    tags: string[];
}

export const learnModules: LearnModule[] = [
    // ── LEVEL 0 — Fondasi Observasi ─────────────────────────────────────────
    {
        slug: 'what-is-matter',
        level: 0,
        order: 1,
        icon: '🪨',
        title: 'Apa itu Materi?',
        titleEn: 'What is Matter?',
        subtitle: 'Meja kayu. Air. Udara. Apa persamaannya?',
        subtitleEn: 'Wood. Water. Air. What do they have in common?',
        duration: 10,
        free: false,
        tags: ['dasar', 'materi', 'partikel'],
        connectsTo: '/explore',
        steps: [
            {
                type: 'question',
                title: 'Pertanyaan Pemantik',
                titleEn: 'Opening Question',
                body: 'Jika kamu terus memotong kayu menjadi lebih kecil dan lebih kecil — sampai berapa kecil kamu bisa memotong? Apakah ada batas terkecil?',
                bodyEn: 'If you keep cutting wood into smaller and smaller pieces — how small can you go? Is there a smallest possible limit?',
            },
            {
                type: 'concept',
                title: 'Materi adalah Segala Sesuatu yang Punya Massa & Volume',
                titleEn: 'Matter is Anything that Has Mass & Volume',
                body: 'Batu, air, udara, bahkan api (jika dilihat sebagai plasma) — semua adalah materi. Perbedaan wujud padat, cair, gas bukan berasal dari *bahan* yang berbeda, tapi dari *kerapatan* dan *kebebasan gerak* partikel penyusunnya.',
                bodyEn: 'Rock, water, air, even fire (viewed as plasma) — all are matter. The difference between solid, liquid, and gas does not come from *different substances*, but from the *density* and *freedom of movement* of their particles.',
            },
            {
                type: 'animation-hint',
                title: '🎬 Bayangkan ini',
                titleEn: '🎬 Picture This',
                body: 'Zoom in dari meja kayu → serat kayu → sel → molekul → atom. Di level atom, \"kayu\" tidak ada lagi — yang ada hanyalah atom karbon, oksigen, hidrogen yang tersusun dalam pola tertentu.',
                bodyEn: 'Zoom in from a wooden table → wood fibers → cells → molecules → atoms. At the atomic level, \"wood\" no longer exists — only carbon, oxygen, and hydrogen atoms arranged in a specific pattern.',
            },
            {
                type: 'concept',
                title: '3 Wujud Materi — Bukan Soal Bahan, Tapi Soal Gerak',
                titleEn: '3 States of Matter — Not About Substance, But About Motion',
                body: 'Padat: partikel rapat, hanya bergetar di tempat.\nCair: partikel agak longgar, bisa mengalir.\nGas: partikel sangat jauh satu sama lain, bergerak bebas ke mana-mana.\n\nAir H₂O bisa jadi es (padat), air (cair), atau uap (gas) — tapi molekulnya tetap H₂O!',
                bodyEn: 'Solid: particles tightly packed, only vibrating in place.\nLiquid: particles somewhat loose, can flow.\nGas: particles far apart, moving freely in all directions.\n\nWater H₂O can be ice (solid), water (liquid), or steam (gas) — but the molecule is always H₂O!',
            },
            {
                type: 'fact',
                title: '💡 Fakta yang Bikin Otak Pusing',
                titleEn: '💡 Mind-Bending Fact',
                body: 'Jika kamu bisa mengambil semua atom dalam tubuhmu dan menghilangkan seluruh ruang kosong di dalamnya, ukuranmu hanya akan sebesar ujung pensil.\n\nAtom itu mostly kosong. Yang kamu rasakan sebagai "padat" sebenarnya adalah gaya elektromagnetik antar elektron.',
                bodyEn: 'If you could take all the atoms in your body and eliminate all the empty space inside them, you would be no bigger than a pencil tip.\n\nAtoms are mostly empty space. What you feel as "solid" is actually the electromagnetic force between electrons.',
            },
            {
                type: 'question',
                title: 'Tantangan Berpikir',
                titleEn: 'Think Deeper',
                body: 'Jika batu dan air terbuat dari partikel yang sama-sama kecil, mengapa batu keras dan air mengalir? Jawabannya bukan pada "jenis partikel" — tapi pada *cara partikel itu terhubung satu sama lain*.',
                bodyEn: 'If rock and water are both made of tiny particles, why is rock hard and water flows? The answer is not about the "type of particle" — but about *how the particles are connected to each other*.',
            },
        ],
        quiz: [
            {
                q: 'Apa yang membedakan wujud padat, cair, dan gas?',
                qEn: 'What differentiates solid, liquid, and gas states?',
                options: [
                    'Jenis atom yang berbeda',
                    'Kerapatan dan kebebasan gerak partikelnya',
                    'Berat partikelnya',
                    'Warna partikelnya',
                ],
                optionsEn: [
                    'Different types of atoms',
                    'Particle density and freedom of movement',
                    'The weight of the particles',
                    'The color of the particles',
                ],
                correct: 1,
                explanation: 'Wujud materi ditentukan oleh kerapatan susunan dan kebebasan gerak partikel — bukan jenis atomnya. Air H₂O tetap H₂O dalam wujud es, cair, maupun uap.',
                explanationEn: 'The state of matter is determined by particle arrangement density and freedom of movement — not the type of atom. Water H₂O remains H₂O whether it is ice, liquid, or steam.',
            },
            {
                q: 'Jika terus memotong kayu menjadi lebih kecil, batas terkecilnya disebut?',
                qEn: 'If you keep cutting wood into smaller pieces, the smallest possible unit is called?',
                options: ['Molekul', 'Sel', 'Atom', 'Proton'],
                optionsEn: ['Molecule', 'Cell', 'Atom', 'Proton'],
                correct: 2,
                explanation: 'Atom adalah unit terkecil suatu elemen yang masih mempertahankan sifat kimia elemen tersebut. Di bawah atom, sudah tidak ada lagi "kayu" — hanya partikel subatomik.',
                explanationEn: 'An atom is the smallest unit of an element that still retains its chemical properties. Below the atom, there is no more "wood" — only subatomic particles.',
            },
            {
                q: 'Sebagian besar volume atom terdiri dari?',
                qEn: 'Most of an atom\'s volume consists of?',
                options: ['Proton dan neutron yang padat', 'Ruang kosong', 'Elektron yang padat', 'Air'],
                optionsEn: ['Dense protons and neutrons', 'Empty space', 'Dense electrons', 'Water'],
                correct: 1,
                explanation: 'Atom mostly kosong. Jika nukleus atom sebesar bola tenis, maka elektron terluarnya berjarak bermil-mil. Yang membuat benda terasa "padat" adalah gaya elektromagnetik.',
                explanationEn: 'Atoms are mostly empty space. If the nucleus were the size of a tennis ball, the outermost electron would be miles away. What makes things feel "solid" is the electromagnetic force.',
            },
        ],
    },

    // ── Level 0 Modul 2 ──────────────────────────────────────────────────────
    {
        slug: 'atom-evidence',
        level: 0,
        order: 2,
        icon: '🔭',
        title: 'Bukti Bahwa Atom Nyata',
        titleEn: 'Evidence That Atoms Are Real',
        subtitle: 'Kita tidak bisa melihat atom. Lalu mengapa ilmuwan percaya?',
        subtitleEn: 'We cannot see atoms. So why do scientists believe?',
        duration: 12,
        free: false,
        tags: ['sejarah', 'eksperimen', 'gerak brown'],
        connectsTo: '/atom-history',
        steps: [
            {
                type: 'question',
                title: 'Pertanyaan Pemantik',
                body: 'Bagaimana kamu bisa membuktikan bahwa sesuatu yang tidak terlihat itu nyata? Jika seseorang bilang "ada angin" tapi kamu tidak bisa melihat angin — bagaimana cara membuktikannya?',
            },
            {
                type: 'concept',
                title: 'Bukti 1 — Gerak Brown (1827)',
                body: 'Robert Brown, seorang botanis, melihat serbuk sari di bawah mikroskop bergerak terus-menerus secara acak tanpa sebab yang terlihat.\n\nEinstein (1905) menjelaskan: serbuk sari itu *dibenturkan oleh molekul air* yang tak terlihat — yang berarti molekul (dan atom) sungguh-sungguh ada dan bergerak.',
            },
            {
                type: 'concept',
                title: 'Bukti 2 — Hukum Komposisi Tetap (Dalton, 1803)',
                body: 'Air SELALU terdiri dari 2 bagian hidrogen dan 1 bagian oksigen dalam massa — tidak pernah 2,1 atau 1,9. Presisi ini hanya masuk akal jika ada unit diskrit (atom) yang bergabung dalam rasio bulat.',
            },
            {
                type: 'concept',
                title: 'Bukti 3 — Foto Atom (1981)',
                body: 'Scanning Tunneling Microscope (STM) akhirnya memungkinkan kita "melihat" atom secara individual. IBM bahkan berhasil menyusun 35 atom Xenon membentuk logo perusahaan mereka.',
            },
            {
                type: 'fact',
                title: '💡 Ironi Sejarah',
                body: 'Ernst Mach, fisikawan terkemuka abad 19, menolak keberadaan atom sampai akhir hayatnya karena menurutnya "yang tidak bisa diamati langsung tidak ilmiah".\n\nIa meninggal tahun 1916 — hanya 70 tahun sebelum atom berhasil difoto langsung.',
            },
            {
                type: 'animation-hint',
                title: '🎬 Bayangkan ini',
                body: 'Lemparkan bola tenis ke kolam yang airnya bergelombang kecil. Bola akan bergerak tidak karena ada yang mendorongnya secara terlihat — tapi karena gelombang kecil yang menghantamnya dari semua arah. Itulah analogi Gerak Brown.',
            },
        ],
        quiz: [
            {
                q: 'Gerak Brown adalah bukti keberadaan atom karena?',
                options: [
                    'Serbuk sari bergerak sendiri',
                    'Molekul yang tidak terlihat menabrak serbuk sari',
                    'Air memberikan energi pada serbuk sari',
                    'Serbuk sari itu sendiri adalah atom',
                ],
                correct: 1,
                explanation: 'Einstein menjelaskan bahwa gerakan acak serbuk sari disebabkan oleh tumbukan dari molekul air yang tidak terlihat — bukti langsung bahwa partikel-partikel kecil (atom/molekul) nyata ada dan bergerak.',
            },
            {
                q: 'Mengapa "Hukum Komposisi Tetap" mendukung teori atom?',
                options: [
                    'Karena air selalu berwarna biru',
                    'Karena rasio massa selalu tetap, yang hanya masuk akal jika ada unit diskrit',
                    'Karena semua zat punya berat yang sama',
                    'Karena atom bisa dilihat dalam air',
                ],
                correct: 1,
                explanation: 'Jika materi adalah kontinum (tidak ada unit diskrit), rasio massa dalam reaksi bisa berapa saja. Tapi kenyataannya selalu tepat 2:1 untuk air — membuktikan ada unit (atom) yang bergabung dalam rasio bulat.',
            },
        ],
    },

    // ── LEVEL 1 — Struktur Atom ──────────────────────────────────────────────
    {
        slug: 'atom-parts',
        level: 1,
        order: 1,
        icon: '⚛',
        title: 'Isi Dalam Atom',
        titleEn: 'Inside the Atom',
        subtitle: 'Proton, neutron, elektron — bukan hafalan, tapi eksperimen nyata',
        subtitleEn: 'Proton, neutron, electron — not memorization, real experiments',
        duration: 15,
        free: false,
        tags: ['proton', 'neutron', 'elektron', 'rutherford'],
        connectsTo: '/element/1',
        steps: [
            {
                type: 'question',
                title: 'Pertanyaan Pemantik',
                body: 'Bayangkan kamu harus membuktikan isi sebuah kotak hitam yang tidak bisa dibuka — hanya dengan menembakkan bola ke kotak itu dan melihat ke mana bola memantul. Itulah PERSIS yang dilakukan Rutherford untuk menemukan nukleus.',
            },
            {
                type: 'concept',
                title: 'Eksperimen Rutherford (1911) — Lembaran Emas',
                body: 'Rutherford menembakkan partikel alpha (bermuatan positif) ke lembaran emas tipis.\n\nHarapan (model Thomson "roti kismis"): partikel menembus dengan sedikit defleksi.\nKenyataan: Sebagian KECIL partikel memantul BALIK hampir 180°.\n\nKonklusi Rutherford: "Seperti menembakkan artileri ke kertas tisu, dan pelurunya memantul balik ke arahmu." — ada sesuatu yang sangat kecil, sangat padat, dan bermuatan positif di tengah atom.',
            },
            {
                type: 'concept',
                title: '3 Partikel Dasar',
                body: 'PROTON: muatan +1, massa ~1 sma, berada di nukleus.\nNEUTRON: muatan 0, massa ~1 sma, berada di nukleus.\nELEKTRON: muatan -1, massa ~0,0005 sma, bergerak di luar nukleus.\n\nAtom netral: jumlah proton = jumlah elektron.',
            },
            {
                type: 'fact',
                title: '💡 Perspektif Skala',
                body: 'Jika nukleus atom Hidrogen sebesar bola sepak (diameter 22 cm), maka elektron terluarnya berjarak sekitar 22 KM.\n\nDi antara mereka: kosong sempurna.\n\nAtom adalah 99,9999999999996% ruang kosong.',
            },
            {
                type: 'concept',
                title: 'Mengapa Elektron Tidak Jatuh ke Nukleus?',
                body: 'Pertanyaan ini bikin fisikawan pusing puluhan tahun! Secara klasik, elektron yang bergerak di orbit HARUS memancarkan energi dan spiral masuk ke nukleus dalam hitungan nanodetik.\n\nJawaban: Mekanika kuantum. Elektron bukan bola — ia adalah gelombang probabilitas. Ia tidak "jatuh" karena prinsip ketidakpastian Heisenberg mencegah lokalisasi sempurna. (Modul 5.1 akan membahas ini lebih dalam)',
            },
        ],
        quiz: [
            {
                q: 'Apa konklusi utama dari eksperimen lembaran emas Rutherford?',
                options: [
                    'Atom adalah bola padat',
                    'Elektron tersebar merata di atom',
                    'Ada nukleus kecil padat bermuatan positif di tengah atom',
                    'Atom tidak bisa ditembus',
                ],
                correct: 2,
                explanation: 'Karena sebagian kecil partikel alpha memantul balik, Rutherford menyimpulkan ada "sesuatu" yang sangat kecil tapi sangat padat dan bermuatan positif di tengah atom — yang kemudian disebut nukleus.',
            },
            {
                q: 'Partikel mana yang menentukan identitas suatu elemen?',
                options: ['Neutron', 'Elektron', 'Proton', 'Foton'],
                correct: 2,
                explanation: 'Jumlah proton (nomor atom Z) menentukan identitas elemen. 1 proton = Hidrogen, selalu. 26 proton = Besi, selalu — di mana saja di alam semesta.',
            },
            {
                q: 'Berapa persen volume atom yang merupakan ruang kosong?',
                options: ['50%', '90%', '99%', 'Hampir 100%'],
                correct: 3,
                explanation: 'Atom adalah hampir seluruhnya ruang kosong (>99,9999%). Massa hampir seluruhnya ada di nukleus yang sangat kecil. Yang membuat benda terasa padat adalah gaya elektromagnetik antara elektron.',
            },
        ],
    },

    // ── Level 1 Modul 2 ──────────────────────────────────────────────────────
    {
        slug: 'atomic-number',
        level: 1,
        order: 2,
        icon: '🔢',
        title: 'Nomor Atom & Isotop',
        titleEn: 'Atomic Number & Isotopes',
        subtitle: 'Mengapa setiap elemen punya "identitas" yang tidak bisa berubah?',
        subtitleEn: 'Why does each element have a unique, unchangeable identity?',
        duration: 13,
        free: false,
        tags: ['nomor atom', 'isotop', 'karbon-14'],
        connectsTo: '/element/6',
        steps: [
            {
                type: 'question',
                title: 'Pertanyaan Pemantik',
                body: 'Jika kamu tambah 1 proton ke atom Hidrogen, apa yang terjadi? Apakah itu masih Hidrogen, atau berubah menjadi sesuatu yang sama sekali berbeda?',
            },
            {
                type: 'concept',
                title: 'Nomor Atom (Z) = Identitas Kekal Elemen',
                body: 'NOMOR ATOM (Z) = jumlah proton di nukleus.\n\nIni adalah identitas "kodrat" sebuah elemen — tidak bisa berubah tanpa mengubah elemen itu sendiri.\n\n1 proton → Hidrogen (H), selalu, di mana saja di alam semesta\n6 proton → Karbon (C), selalu\n79 proton → Emas (Au), selalu\n\nJika kamu tambah 1 proton ke Hidrogen, ia berubah menjadi Helium — bukan lagi Hidrogen.',
            },
            {
                type: 'concept',
                title: 'Nomor Massa (A) = Proton + Neutron',
                body: 'NOMOR MASSA (A) = jumlah proton + jumlah neutron.\n\nIni menentukan "berat" atom tapi TIDAK mengubah identitas elemen.\n\nKarbon-12: 6 proton + 6 neutron = massa 12\nKarbon-14: 6 proton + 8 neutron = massa 14\n\nKeduanya tetap Karbon! Keduanya bereaksi kimia dengan cara yang sama.',
            },
            {
                type: 'concept',
                title: 'Isotop — Saudara Kandung yang Punya Berat Berbeda',
                body: 'Isotop adalah atom dari elemen YANG SAMA tapi dengan jumlah neutron BERBEDA.\n\nC-12: stabil, 98,9% karbon di alam\nC-13: stabil, 1,1% karbon di alam  \nC-14: radioaktif! Meluruh dengan waktu paruh 5.730 tahun\n\nC-14 terbentuk terus-menerus di atmosfer dari tumbukan sinar kosmik. Semua makhluk hidup menyerap C-14. Saat mati, C-14 mulai meluruh. Dengan mengukur rasio C-14/C-12, kita bisa menentukan kapan organisme itu mati — itulah PENANGGALAN RADIOKARBON.',
            },
            {
                type: 'fact',
                title: '💡 Emas dari Merkuri?',
                body: 'Secara teori, kamu bisa membuat emas (79 proton) dari merkuri (80 proton) dengan menghilangkan 1 proton.\n\nIni bisa dilakukan di reaktor nuklir — dan pernah dilakukan oleh Glenn Seaborg (1980)!\n\nMasalahnya: proses ini jauh lebih mahal dari harga emas itu sendiri. Impian para alkemis akhirnya terwujud — tapi tidak menguntungkan.',
            },
        ],
        quiz: [
            {
                q: 'Apa yang menentukan identitas suatu elemen?',
                options: ['Jumlah neutron', 'Jumlah elektron', 'Jumlah proton', 'Nomor massa'],
                correct: 2,
                explanation: 'Nomor atom Z (jumlah proton) menentukan identitas elemen. Mengubah jumlah proton berarti mengubah elemen itu menjadi elemen lain.',
            },
            {
                q: 'C-12 dan C-14 adalah?',
                options: ['Elemen berbeda', 'Isotop karbon', 'Molekul berbeda', 'Senyawa berbeda'],
                correct: 1,
                explanation: 'C-12 dan C-14 adalah isotop — keduanya Karbon (6 proton) tapi dengan jumlah neutron berbeda (6 vs 8). Sifat kimia mereka identik, tapi C-14 bersifat radioaktif.',
            },
        ],
    },

    // ── LEVEL 2 — Elektron ───────────────────────────────────────────────────
    {
        slug: 'electron-shells',
        level: 2,
        order: 1,
        icon: '🔄',
        title: 'Kulit Elektron & Level Energi',
        titleEn: 'Electron Shells & Energy Levels',
        subtitle: 'Mengapa kapasitas kulit: 2, 8, 18, 32? Bukan hafalan — ada logikanya!',
        subtitleEn: 'Why shell capacities are 2, 8, 18, 32? Not memorization — there\'s logic!',
        duration: 18,
        free: false,
        tags: ['kulit elektron', 'level energi', 'aufbau', 'konfigurasi'],
        connectsTo: '/element/11',
        steps: [
            {
                type: 'question',
                title: 'Pertanyaan Pemantik',
                body: 'Mengapa kapasitas kulit elektron adalah 2, 8, 18, 32 — dan bukan 5, 10, 15, 20? Dari mana angka-angka ganjil ini berasal?',
            },
            {
                type: 'concept',
                title: 'Kulit = Tingkat Energi',
                body: 'Elektron tidak bisa berada di sembarang jarak dari nukleus. Mereka hanya bisa ada di "tingkat energi" tertentu — seperti anak tangga, bukan lereng.\n\nKulit K (n=1): paling dekat nukleus, energi terendah\nKulit L (n=2): lebih jauh, energi lebih tinggi\nKulit M (n=3): lebih jauh lagi\n...dst\n\nElektron mengisi dari energi terendah dulu (Prinsip Aufbau).',
            },
            {
                type: 'formula',
                title: 'Rumus Kapasitas Kulit: 2n²',
                body: 'Kapasitas maksimum kulit ke-n = 2n²\n\nn=1: 2×1² = 2 (kulit K)\nn=2: 2×2² = 8 (kulit L)\nn=3: 2×3² = 18 (kulit M)\nn=4: 2×4² = 32 (kulit N)\n\nMengapa 2n²? Karena setiap kulit punya SUBKULIT (s, p, d, f), dan setiap orbital bisa menampung 2 elektron (spin +½ dan -½).',
            },
            {
                type: 'concept',
                title: 'Elektron Valensi = Kepribadian Kimia Atom',
                body: 'Elektron di kulit terluar disebut ELEKTRON VALENSI.\n\nMerekalah yang menentukan bagaimana atom bereaksi:\n- Atom dengan 1 elektron valensi (Na, K, Li): sangat mudah melepas elektron → logam reaktif\n- Atom dengan 7 elektron valensi (F, Cl): sangat butuh 1 elektron lagi → sangat reaktif\n- Atom dengan 8 elektron valensi (He, Ne, Ar): sudah penuh → tidak reaktif sama sekali (gas mulia)',
            },
            {
                type: 'fact',
                title: '💡 Mengapa Neon Tidak Bereaksi?',
                body: 'Neon (Z=10) punya konfigurasi 2,8 — kulit terluarnya PENUH dengan 8 elektron.\n\nAtom "tidak perlu" mengambil atau melepas elektron untuk jadi lebih stabil. Itulah mengapa neon, argon, helium, dan gas mulia lain hampir tidak pernah membentuk senyawa kimia.\n\nMereka adalah atom yang paling "puas" dengan dirinya sendiri.',
            },
        ],
        quiz: [
            {
                q: 'Mengapa kulit ketiga (n=3) bisa menampung maksimal 18 elektron?',
                options: [
                    'Karena ada 18 jenis elektron',
                    'Karena 2×3² = 18 (rumus 2n²)',
                    'Karena ada 3 subkulit dengan 6 elektron masing-masing',
                    'Karena para ilmuwan menghitungnya secara eksperimen',
                ],
                correct: 1,
                explanation: 'Kapasitas kulit ke-n = 2n². Untuk n=3: 2×9 = 18. Angka ini bukan hafalan — berasal dari jumlah orbital yang mungkin di setiap kulit dikalikan 2 (spin up dan spin down).',
            },
            {
                q: 'Mengapa gas mulia (He, Ne, Ar) hampir tidak pernah bereaksi?',
                options: [
                    'Karena mereka gas dan gas tidak bereaksi',
                    'Karena kulit terluar mereka sudah penuh (2 atau 8 elektron)',
                    'Karena mereka terlalu kecil',
                    'Karena mereka tidak punya neutron',
                ],
                correct: 1,
                explanation: 'Gas mulia punya kulit terluar penuh (konfigurasi oktet/duplet stabil). Mereka tidak perlu melepas atau menerima elektron untuk menjadi lebih stabil.',
            },
        ],
    },

    // ── Level 2 Modul 2 ──────────────────────────────────────────────────────
    {
        slug: 'electron-config',
        level: 2,
        order: 2,
        icon: '📋',
        title: 'Membaca Konfigurasi Elektron',
        titleEn: 'Reading Electron Configuration',
        subtitle: '[Ar] 3d6 4s2 — kode rahasia yang menjelaskan kepribadian Besi',
        subtitleEn: '[Ar] 3d6 4s2 — the secret code that reveals Iron\'s personality',
        duration: 16,
        free: false,
        tags: ['konfigurasi elektron', 'subkulit', 'hund', 'pauli'],
        connectsTo: '/element/26',
        steps: [
            {
                type: 'question',
                title: 'Pertanyaan Pemantik',
                body: 'Konfigurasi Besi adalah [Ar] 3d6 4s2. Konfigurasi Emas adalah [Xe] 4f14 5d10 6s1. Apa arti kode-kode ini, dan mengapa Emas lebih "malas" bereaksi dibanding Besi?',
            },
            {
                type: 'concept',
                title: '4 Jenis Subkulit: s, p, d, f',
                body: 'Di dalam setiap kulit, ada "subkulit" yang punya bentuk berbeda-beda:\n\ns: bentuk bola (max 2 elektron)\np: bentuk dumbbell/barbel (max 6 elektron, 3 orientasi × 2 spin)\nd: bentuk cloverleaf (max 10 elektron)\nf: bentuk kompleks (max 14 elektron)\n\nSemakin besar hurufnya, makin banyak elektron yang bisa ditampung.',
            },
            {
                type: 'formula',
                title: 'Cara Membaca Notasi',
                body: 'Format: [nomer kulit][jenis subkulit][jumlah elektron]\n\nContoh Natrium (Na, Z=11):\n1s² 2s² 2p⁶ 3s¹\n= 2 + 2 + 6 + 1 = 11 elektron ✓\n\nDiperpendek: [Ne] 3s¹\n(karena [Ne] = 1s² 2s² 2p⁶)\n\nIni berarti Na punya 1 elektron valensi di kulit ke-3 → sangat mudah lepas → natrium reaktif!',
            },
            {
                type: 'concept',
                title: 'Aturan 3 Serangkai',
                body: '1. AUFBAU: elektron mengisi subkulit dari energi terendah dulu (1s → 2s → 2p → 3s → 3p → 4s → 3d → ...)\n\n2. PAULI: tidak ada dua elektron dengan semua 4 bilangan kuantum sama → maks 2 elektron per orbital\n\n3. HUND: orbital dalam subkulit yang sama diisi satu-satu dulu sebelum berpasangan (elektron "lebih suka sendiri")',
            },
            {
                type: 'fact',
                title: '💡 Pengecualian yang Menarik: Emas',
                body: 'Emas punya konfigurasi [Xe] 4f14 5d10 6s1 — bukan 6s2 seperti yang "seharusnya".\n\nIni terjadi karena subkulit d yang penuh (5d10) lebih stabil dari yang setengah penuh. Satu elektron "pindah" dari 6s ke 5d untuk mencapai kestabilan.\n\nEfek relativistik (elektron 6s emas bergerak sangat cepat → lebih berat → orbit lebih dekat) juga berperan — inilah mengapa emas berwarna kuning, bukan abu-abu seperti logam kebanyakan!',
            },
        ],
        quiz: [
            {
                q: 'Dalam konfigurasi "[Ar] 3d6 4s2" untuk Besi, apa yang dimaksud "3d6"?',
                options: [
                    '3 atom d dengan 6 ikatan',
                    'Subkulit d pada kulit ke-3 berisi 6 elektron',
                    '6 kulit d pada level 3',
                    'Elektron ke-3 sampai ke-6',
                ],
                correct: 1,
                explanation: '"3" adalah nomor kulit, "d" adalah jenis subkulit, "6" adalah jumlah elektron di subkulit tersebut. Besi punya 6 elektron di subkulit d kulit ke-3.',
            },
            {
                q: 'Aturan Hund menyatakan bahwa...',
                options: [
                    'Elektron mengisi dari energi terendah',
                    'Tidak ada dua elektron identik',
                    'Orbital diisi satu-satu dulu sebelum berpasangan',
                    'Elektron bergerak berlawanan arah',
                ],
                correct: 2,
                explanation: 'Hund: elektron "lebih suka" mengisi orbital kosong dulu (spin paralel) sebelum berpasangan di orbital yang sama. Ini terkait dengan stabilitas spin paralel.',
            },
        ],
    },

    // ── LEVEL 3 — Pola & Tabel Periodik ─────────────────────────────────────
    {
        slug: 'periodic-table-logic',
        level: 3,
        order: 1,
        icon: '📊',
        title: 'Logika Tabel Periodik',
        titleEn: 'The Logic of the Periodic Table',
        subtitle: 'Mendeleev meramalkan elemen yang belum ditemukan. Bagaimana?',
        subtitleEn: 'Mendeleev predicted undiscovered elements. How?',
        duration: 18,
        free: false,
        tags: ['tabel periodik', 'mendeleev', 'golongan', 'periode'],
        connectsTo: '/explore',
        steps: [
            {
                type: 'question',
                title: 'Pertanyaan Pemantik',
                body: 'Dmitri Mendeleev (1869) menyusun 63 elemen yang diketahui saat itu dan dengan berani meninggalkan "kotak kosong" untuk elemen yang belum ditemukan — bahkan meramalkan sifatnya secara detail. Bagaimana mungkin ia bisa meramal sesuatu yang belum ada?',
            },
            {
                type: 'concept',
                title: 'Periode = Jumlah Kulit Elektron',
                body: 'PERIODE (baris horizontal) = jumlah kulit elektron yang terisi.\n\nPeriode 1: hanya kulit K (n=1) → hanya H dan He\nPeriode 2: sampai kulit L (n=2) → Li sampai Ne\nPeriode 3: sampai kulit M (n=3) → Na sampai Ar\n...dst\n\nSaat kulit terluar penuh → mulai periode baru di bawahnya.',
            },
            {
                type: 'concept',
                title: 'Golongan = Jumlah Elektron Valensi',
                body: 'GOLONGAN (kolom vertikal) = jumlah elektron di kulit terluar.\n\nGolongan 1: 1 elektron valensi (Li, Na, K, Rb, Cs) → semua logam alkali reaktif\nGolongan 17: 7 elektron valensi (F, Cl, Br, I) → semua halogen reaktif\nGolongan 18: 8 valensi (Ne, Ar, Kr) → semua gas mulia\n\nElemen dalam golongan sama = "kepribadian kimia" yang mirip.',
            },
            {
                type: 'concept',
                title: 'Ramalan Mendeleev',
                body: 'Mendeleev meninggalkan 3 kotak kosong dan meramal:\n- "Eka-aluminium" (1871): akan punya massa 68, titik leleh rendah\n- Gallium ditemukan 1875: massa 69,7, titik leleh 29,8°C ✓\n\n- "Eka-silicon" (1871): massa ~72, kristal abu-abu\n- Germanium ditemukan 1886: massa 72,6, kristal abu-abu ✓\n\nMetode Mendeleev adalah logika murni dari pola — sains pada level terbaiknya.',
            },
            {
                type: 'fact',
                title: '💡 Periodisitas — Sifat yang Berulang',
                body: 'Sifat elemen BERULANG secara periodik:\n- Setiap mulai periode baru → logam keras reaktif (Li, Na, K)\n- Menuju akhir periode → nonlogam reaktif (F, Cl, Br)\n- Akhir periode → gas mulia tak reaktif (Ne, Ar, Kr)\n\nIni bukan kebetulan — ini langsung mengikuti pola pengisian elektron valensi.',
            },
        ],
        quiz: [
            {
                q: 'Elemen pada golongan yang sama cenderung punya sifat kimia yang mirip karena?',
                options: [
                    'Mereka punya berat atom yang sama',
                    'Mereka punya jumlah elektron valensi yang sama',
                    'Mereka ditemukan di waktu yang sama',
                    'Mereka punya jumlah kulit yang sama',
                ],
                correct: 1,
                explanation: 'Golongan = jumlah elektron valensi. Elektron valensi menentukan bagaimana atom bereaksi. Elemen segolongan punya jumlah elektron valensi sama → sifat kimia mirip.',
            },
            {
                q: 'Mendeleev bisa meramal elemen yang belum ditemukan karena dia menemukan?',
                options: [
                    'Foto elemen menggunakan teleskop',
                    'Pola berulang (periodisitas) sifat elemen',
                    'Rumus matematika berat atom',
                    'Catatan rahasia Newton',
                ],
                correct: 1,
                explanation: 'Mendeleev menemukan bahwa sifat elemen berulang secara periodik jika disusun berdasarkan berat atom. Gap dalam pola ini menunjukkan ada elemen yang belum ditemukan.',
            },
        ],
    },

    // ── LEVEL 3 Modul 2 ──────────────────────────────────────────────────────
    {
        slug: 'periodic-trends',
        level: 3,
        order: 2,
        icon: '📈',
        title: 'Tren Sifat Periodik',
        titleEn: 'Periodic Trends',
        subtitle: 'Mengapa Cesium 1000× lebih reaktif dari Lithium? Padahal satu golongan.',
        subtitleEn: 'Why is Cesium 1000× more reactive than Lithium? Same group.',
        duration: 15,
        free: false,
        tags: ['jari-jari atom', 'elektronegativitas', 'energi ionisasi', 'tren'],
        connectsTo: '/element/55',
        steps: [
            {
                type: 'question',
                title: 'Pertanyaan Pemantik',
                body: 'Lithium dan Cesium sama-sama di Golongan 1 — sama-sama punya 1 elektron valensi. Tapi Cesium bereaksi dengan air begitu eksplosif sampai bisa meledakkan wadahnya, sementara Lithium hanya mendesis.\n\nKenapa?',
            },
            {
                type: 'concept',
                title: 'Tren 1 — Jari-jari Atom',
                body: 'Dalam periode (→ kanan): jari-jari MENGECIL\nAlasan: muatan inti bertambah (+proton) tapi kulit sama → elektron ditarik lebih kuat\n\nDalam golongan (↓ bawah): jari-jari MEMBESAR\nAlasan: tambah kulit elektron baru → elektron terluar makin jauh dari nukleus\n\nCs lebih besar dari Li karena punya 6 kulit (vs 2 kulit Li).',
            },
            {
                type: 'concept',
                title: 'Tren 2 — Energi Ionisasi (seberapa kuat elektron dipegang)',
                body: 'Energi ionisasi = energi untuk melepas elektron dari atom netral.\n\nDalam periode (→ kanan): ionisasi MENINGKAT (muatan inti besar → pegang elektron lebih kuat)\nDalam golongan (↓ bawah): ionisasi MENURUN (elektron terluar jauh → lebih mudah dilepas)\n\nCs punya energi ionisasi terendah di golongan 1 → elektron valensinya paling mudah dilepas → paling reaktif!',
            },
            {
                type: 'concept',
                title: 'Tren 3 — Elektronegativitas (kemampuan tarik elektron)',
                body: 'Elektronegativitas = kemampuan atom menarik elektron dalam ikatan kimia.\n\nFluorin (F) adalah elemen paling elektronegatif di table periodik (nilai 3,98).\nSebab: kecil + muatan inti besar + 7 elektron valensi yang "lapar" 1 elektron lagi.\n\nFs (Cesium) paling elektropositif → paling mudah kehilangan elektron → paling suka bereaksi dengan elektronegatif.',
            },
            {
                type: 'fact',
                title: '💡 Kombinasi Mematikan',
                body: 'F (paling elektronegatif) + Cs (paling elektropositif) → CsF, cesium fluoride.\n\nBereaksi dengan sangat eksplosif. Energi ikatan ionik CsF adalah salah satu yang terbesar.\n\nIni bukan kebetulan — ini adalah dua kutub ekstrem tabel periodik yang bertemu.',
            },
        ],
        quiz: [
            {
                q: 'Mengapa jari-jari atom mengecil ketika bergerak ke kanan dalam satu periode?',
                options: [
                    'Karena atom melepas proton',
                    'Karena muatan inti bertambah tapi jumlah kulit tetap, jadi elektron ditarik lebih kuat',
                    'Karena elektron bergerak lebih cepat ke kanan',
                    'Karena neutron bertambah di kanan',
                ],
                correct: 1,
                explanation: 'Bergerak ke kanan dalam periode berarti menambah proton (muatan inti +) tanpa menambah kulit baru. Tarikan inti lebih kuat → elektron lebih dekat → atom lebih kecil.',
            },
            {
                q: 'Elemen mana yang punya elektronegativitas tertinggi?',
                options: ['Oksigen (O)', 'Nitrogen (N)', 'Fluorin (F)', 'Klorin (Cl)'],
                correct: 2,
                explanation: 'Fluorin (F) adalah elemen paling elektronegatif (3,98 skala Pauling). Letaknya di sudut kanan atas tabel periodik: kecil, muatan inti besar, 7 elektron valensi yang butuh 1 lagi.',
            },
        ],
    },

    // ── LEVEL 4 — Ikatan Kimia ───────────────────────────────────────────────
    {
        slug: 'chemical-bonds',
        level: 4,
        order: 1,
        icon: '🔗',
        title: 'Mengapa Atom Bergabung?',
        titleEn: 'Why Do Atoms Bond?',
        subtitle: 'Na meledak di air. Cl adalah gas beracun. Bersama? Garam dapur.',
        subtitleEn: 'Na explodes in water. Cl is toxic gas. Together? Table salt.',
        duration: 20,
        free: false,
        tags: ['ikatan ionik', 'ikatan kovalen', 'ikatan logam', 'oktet'],
        connectsTo: '/molecule',
        steps: [
            {
                type: 'question',
                title: 'Pertanyaan Pemantik',
                body: 'Natrium adalah logam yang meledak di air dan membakar kulit. Klorin adalah gas beracun yang dipakai sebagai senjata kimia di Perang Dunia I. Tapi Na + Cl = NaCl — garam dapur yang aman kita makan setiap hari.\n\nBagaimana dua zat berbahaya bisa bergabung jadi aman?',
            },
            {
                type: 'concept',
                title: 'Aturan Oktet — Motivasi Atom Bergabung',
                body: 'Atom "ingin" punya 8 elektron di kulit terluar — seperti gas mulia yang stabil.\n\nNa: [Ne] 3s¹ → punya 1 elektron valensi di luar → "lebih mudah" melepas 1 daripada mendapat 7\nCl: [Ne] 3s² 3p⁵ → punya 7 elektron valensi → "lebih mudah" mendapat 1 daripada melepas 7\n\nSolusi: Na lepas 1 elektron → Cl terima 1 elektron → keduanya sekarang punya konfigurasi gas mulia!',
            },
            {
                type: 'concept',
                title: 'Ikatan Ionik — Transfer Elektron',
                body: 'Na → Na⁺ + e⁻ (melepas elektron)\nCl + e⁻ → Cl⁻ (menerima elektron)\nNa⁺ + Cl⁻ → NaCl (garam)\n\nIon positif dan negatif saling tarik → ikatan ionik.\nIni bukan reaksi kimia biasa — ini transfer elektron yang menghasilkan kestabilan.\n\nGaram tidak berbahaya karena Na dan Cl sudah "puas" — mereka tidak perlu bereaksi lebih jauh.',
            },
            {
                type: 'concept',
                title: 'Ikatan Kovalen — Berbagi Elektron',
                body: 'Kadang dua nonlogam tidak mau saling memberi elektron — mereka BERBAGI.\n\nH₂O: O punya 6 valensi, butuh 2 lagi → berbagi 1 dengan setiap H\nCO₂: C punya 4 valensi → berbagi 2 dengan setiap O (ikatan rangkap)\nN₂: N punya 5 valensi → berbagi 3 dengan N lain (ikatan rangkap 3)\n\nIkatan kovalen lebih kuat karena ada "taruhan" — kedua atom sama-sama ingin elektronnya.',
            },
            {
                type: 'concept',
                title: 'Ikatan Logam — Elektron "Bebas"',
                body: 'Di logam, elektron valensi tidak terikat ke atom tertentu — mereka bergerak bebas seperti "lautan elektron".\n\nMengapa tembaga menghantarkan listrik? Karena elektron bebasnya bergerak sebagai respons terhadap tegangan listrik.\nMengapa logam berkilap? Karena elektron bebas memantulkan semua frekuensi cahaya.\nMengapa logam bisa ditempa? Karena atom bisa bergeser tanpa memutus ikatan.',
            },
            {
                type: 'fact',
                title: '💡 Kenapa Air Bisa Memadamkan Api?',
                body: 'Api membutuhkan: bahan bakar + oksigen + panas.\n\nAir (H₂O) ikatan kovalen polar → O sedikit negatif, H sedikit positif.\nSaat mengenai api:\n1. Menyerap panas → mendinginkan\n2. Menguap → menghalangi oksigen\n3. Tapi tidak bereaksi dengan bahan bakar secara kimia\n\nApa yang TIDAK bisa dipadamkan dengan air? Logam alkali (Na, K) — mereka BEREAKSI dengan air dan menghasilkan lebih banyak panas + hidrogen yang terbakar!',
            },
        ],
        quiz: [
            {
                q: 'Dalam NaCl (garam dapur), jenis ikatan yang terbentuk adalah?',
                options: ['Kovalen polar', 'Kovalen nonpolar', 'Ionik', 'Logam'],
                correct: 2,
                explanation: 'Na melepas 1 elektron (jadi Na⁺) dan Cl menerima 1 elektron (jadi Cl⁻). Tarik-menarik ion berlawanan ini adalah ikatan ionik.',
            },
            {
                q: 'Mengapa logam bisa menghantarkan listrik?',
                options: [
                    'Karena logam punya proton bebas',
                    'Karena elektron valensi bergerak bebas di antara atom-atom logam',
                    'Karena logam menyerap foton cahaya',
                    'Karena ikatan logam sangat kuat',
                ],
                correct: 1,
                explanation: 'Dalam ikatan logam, elektron valensi tidak terikat ke atom tertentu — mereka membentuk "lautan elektron" yang bebas bergerak. Inilah yang memungkinkan konduksi listrik.',
            },
        ],
    },

    // ── LEVEL 5 — Model Atom Lanjut ──────────────────────────────────────────
    {
        slug: 'quantum-model',
        level: 5,
        order: 1,
        icon: '🌀',
        title: 'Mekanika Kuantum & Orbital',
        titleEn: 'Quantum Mechanics & Orbitals',
        subtitle: 'Elektron bukan bola yang mengorbit. Ia adalah awan probabilitas.',
        subtitleEn: 'Electrons are not orbiting balls. They are probability clouds.',
        duration: 25,
        free: false,
        tags: ['orbital', 'mekanika kuantum', 'heisenberg', 'de broglie'],
        connectsTo: '/phenomena/quantum-entanglement',
        steps: [
            {
                type: 'question',
                title: 'Pertanyaan Pemantik',
                body: 'Model Bohr (1913) berhasil memprediksi spektrum hidrogen dengan akurasi sempurna. Tapi gagal total untuk atom helium (2 elektron). Bahkan gagal menjelaskan mengapa garis spektrum TERBELAH di medan magnet.\n\nKalau model sempurna untuk hidrogen — apa yang salah?',
            },
            {
                type: 'concept',
                title: 'Kesalahan Fundamental Model Bohr',
                body: 'Bohr berasumsi: elektron adalah bola kecil yang mengorbit seperti planet.\n\nMasalah 1 — Heisenberg (1927): Δx × Δp ≥ ℏ/2\nKamu tidak bisa mengetahui posisi DAN momentum elektron secara bersamaan dengan presisi sempurna. Jika kamu tahu persis di mana elektron → kamu tidak tahu ke mana ia menuju.\n\nIni bukan masalah teknologi — ini batas fundamental realitas.',
            },
            {
                type: 'concept',
                title: 'De Broglie (1924) — Elektron adalah Gelombang',
                body: 'Louis de Broglie: jika cahaya bisa bersifat partikel (Einstein, fotoelektrik), maka partikel bisa bersifat gelombang.\n\nλ = h/mv (panjang gelombang de Broglie)\n\nUntuk elektron yang cukup ringan, efek gelombang sangat nyata.\nElektron menginferferensi dengan dirinya sendiri — seperti gelombang di air.\n\nOrbit Bohr yang stabil = orbit di mana gelombang elektron "pas" mengelilingi nukleus (resonansi). Inilah mengapa hanya level energi tertentu yang diizinkan!',
            },
            {
                type: 'concept',
                title: 'Orbital = Daerah Probabilitas, BUKAN Orbit',
                body: 'Orbital bukan jalur lingkaran seperti planet. Orbital adalah:\n"Daerah di ruang di mana elektron punya PROBABILITAS 90% untuk ditemukan"\n\nOrbital-s: berbentuk bola\nOrbital-p: berbentuk dumbbell/barbell (3 orientasi: px, py, pz)\nOrbital-d: berbentuk cloverleaf/semanggi (5 orientasi)\n\nElektron tidak ADA di suatu titik — ia terdistribusi sebagai gelombang probabilitas sampai diukur.',
            },
            {
                type: 'fact',
                title: '💡 Paradoks Kucing Schrödinger',
                body: 'Schrödinger (1935) membuat eksperimen pikiran untuk mengilustrasikan absurditas mekanika kuantum:\n\n"Masukkan kucing ke kotak tertutup dengan mekanisme yang mungkin (50%) membunuhnya berdasarkan peluruhan atom radioaktif. Sebelum kotak dibuka — apakah kucing hidup atau mati?"\n\nMenurut mekanika kuantum: kucing ada dalam superposisi — ia SEKALIGUS hidup DAN mati sebelum diobservasi.\n\nSchrödinger bermaksud ini sebagai absurdum — bahwa kuantum tidak bisa diterapkan ke objek makro. Tapi justru inilah yang benar-benar terjadi di level atom.',
            },
        ],
        quiz: [
            {
                q: 'Prinsip Ketidakpastian Heisenberg menyatakan bahwa...',
                options: [
                    'Teknologi kita belum cukup canggih untuk mengukur partikel',
                    'Posisi dan momentum partikel tidak bisa keduanya diketahui dengan presisi sempurna secara bersamaan',
                    'Elektron bergerak terlalu cepat untuk diukur',
                    'Partikel kuantum tidak punya posisi',
                ],
                correct: 1,
                explanation: 'Ketidakpastian Heisenberg (Δx × Δp ≥ ℏ/2) adalah batas fundamental realitas — bukan masalah teknologi. Makin presisi posisi diukur, makin tidak pasti momentumnya, dan sebaliknya.',
            },
            {
                q: 'Orbital atom adalah...',
                options: [
                    'Jalur lingkaran yang dilalui elektron',
                    'Tempat elektron berhenti',
                    'Daerah di mana elektron punya probabilitas ~90% untuk ditemukan',
                    'Ruang kosong di sekitar nukleus',
                ],
                correct: 2,
                explanation: 'Orbital bukan orbit. Ia adalah fungsi gelombang probabilitas — daerah di ruang di mana elektron paling mungkin ditemukan jika diukur. Bentuknya: s (bola), p (dumbbell), d (cloverleaf).',
            },
        ],
    },
];

// ── Lookup helpers ──────────────────────────────────────────────────────────
export function getModule(slug: string): LearnModule | undefined {
    return learnModules.find(m => m.slug === slug);
}

export function getModulesByLevel(level: number): LearnModule[] {
    return learnModules.filter(m => m.level === level).sort((a, b) => a.order - b.order);
}

export function getLevelLabel(level: number, isEN = false): string {
    const labels: Record<number, [string, string]> = {
        0: ['Fondasi Observasi', 'Foundations'],
        1: ['Struktur Dasar Atom', 'Atomic Structure'],
        2: ['Elektron & Energi', 'Electrons & Energy'],
        3: ['Sifat & Pola', 'Properties & Patterns'],
        4: ['Molekul & Ikatan', 'Molecules & Bonds'],
        5: ['Model Lanjutan', 'Advanced Models'],
        6: ['Fenomena Lanjutan', 'Advanced Phenomena'],
    };
    return isEN ? (labels[level]?.[1] ?? 'Level ' + level) : (labels[level]?.[0] ?? 'Level ' + level);
}

export const LEVEL_COLORS: Record<number, string> = {
    0: '#22c55e',  // green
    1: '#3b82f6',  // blue
    2: '#8b5cf6',  // purple
    3: '#f59e0b',  // amber
    4: '#ef4444',  // red
    5: '#06b6d4',  // cyan
    6: '#ec4899',  // pink
};
