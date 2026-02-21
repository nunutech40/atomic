// ─────────────────────────────────────────────────────────────────────────────
// DISCOVERER DATABASE
// Info tentang ilmuwan penemu elemen + story langkah demi langkah penemuannya
// Photo: URL gambar Wikimedia Commons (domain publik / CC)
// ─────────────────────────────────────────────────────────────────────────────

export interface DiscoveryStep {
    year: string;
    title: string;
    body: string;
}

export interface Discoverer {
    sym: string;              // element symbol
    name: string;             // full name
    born: string;             // birth year or date
    died: string;             // death year or date
    nationality: string;      // country flag + name
    photoUrl: string;         // Wikimedia Commons URL
    wikiUrl: string;          // Wikipedia article URL
    shortBio: string;         // 1–2 sentence bio (Indonesian)
    shortBioEn?: string;      // 1–2 sentence bio (English, optional)
    discoveryStory: DiscoveryStep[];  // step-by-step story
}

export const discoverers: Discoverer[] = [

    // ── H — Hydrogen ──────────────────────────────────────────────────────
    {
        sym: 'H',
        name: 'Henry Cavendish',
        born: '1731',
        died: '1810',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Henry_Cavendish_by_William_Alexander.jpg/440px-Henry_Cavendish_by_William_Alexander.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Henry_Cavendish',
        shortBio: 'Fisikawan dan kimiawan eksentrik yang sangat kaya, terkenal karena jarang berbicara — tapi karyanya mendefinisikan kimia modern. Penemu hidrogen sebagai zat yang dapat diidentifikasi secara ilmiah.',
        discoveryStory: [
            {
                year: '1766',
                title: '"Udara Yang Mudah Terbakar"',
                body: 'Henry Cavendish, seorang ilmuwan eksentrik dari London, mereaksikan asam sulfat encer dengan besi dan seng. Ia mengamati gelembung gas yang tidak berwarna dan tidak berbau — dan yang membuatnya tercengang, gas ini mudah terbakar dengan nyala api biru yang tenang.',
            },
            {
                year: '1766',
                title: 'Menimbang Udara',
                body: 'Cavendish mengukur densitas gas itu dengan teliti dan menemukan bahwa beratnya hanya sekitar sepersepuluh dari udara biasa. Ia menyebutnya "inflammable air" (udara mudah terbakar) — ia belum tahu itu adalah elemen tersendiri, bukan campuran.',
            },
            {
                year: '1781',
                title: 'Dari Api ke Air',
                body: 'Cavendish membakar gas misterius itu dan mengamati tetesan cairan terbentuk di dinding labu. Air. Gas yang ringan itu, saat bereaksi dengan oksigen, menghasilkan air. Ini adalah momen yang membalikkan keyakinan berabad-abad bahwa air adalah elemen dasar.',
            },
            {
                year: '1783',
                title: 'Lavoisier Memberinya Nama',
                body: 'Antoine Lavoisier di Paris mendengar hasil Cavendish dan melakukan eksperimen sendiri. Ia menyimpulkan bahwa air adalah senyawa dua gas — dan memberi nama gas Cavendish itu: "hydrogène" dari bahasa Yunani, artinya "pembuat air". Ironisnya, penamanya bukan penemuanya.',
            },
            {
                year: 'Warisan',
                title: 'Elemen Paling Ringan di Alam Semesta',
                body: 'Hidrogen — satu proton, satu elektron — adalah elemen paling berlimpah di alam semesta. 75% dari semua materi biasa adalah hidrogen. Matahari dan semua bintang pada dasarnya adalah bola hidrogen raksasa yang terbakar. Cavendish tidak pernah tahu skalanya.',
            },
        ],
    },

    // ── O — Oxygen ────────────────────────────────────────────────────────
    {
        sym: 'O',
        name: 'Carl Wilhelm Scheele',
        born: '1742',
        died: '1786',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Carl_Wilhelm_Scheele.jpg/440px-Carl_Wilhelm_Scheele.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Carl_Wilhelm_Scheele',
        shortBio: 'Apoteker Swedia yang menemukan oksigen dua tahun sebelum Priestley, tapi publikasinya terlambat. Ironisnya dikenal sebagai "ilmuwan yang selalu datang terlambat dipublikasikan" meski penemuannya duluan.',
        discoveryStory: [
            {
                year: '1771–1772',
                title: 'Api yang Tidak Biasa',
                body: 'Carl Wilhelm Scheele, seorang apoteker muda di Uppsala, Swedia, memanaskan berbagai bahan kimia — termasuk merkuri oksida — dan mengamati gas yang keluar. Lilin menyala lebih terang dari biasa di dekat gas itu. Ia menyebutnya "Feuerluft" (udara api).',
            },
            {
                year: '1773',
                title: 'Menulis, Tapi Tidak Terbit',
                body: 'Scheele mendokumentasikan penemuannya secara lengkap dalam sebuah manuskrip. Tapi penerbitannya tertunda — buku itu baru terbit tahun 1777. Di antara itu, Joseph Priestley di Inggris melakukan eksperimen serupa dan mempublikasikannya lebih cepat pada 1774.',
            },
            {
                year: '1774',
                title: 'Priestley Mencuri Sorotan',
                body: 'Joseph Priestley memanaskan merkuri oksida merah dan mendapatkan gas yang sama. Ia mempublikasikannya dan menemui Lavoisier di Paris. Lavoisier-lah yang kemudian menjelaskan peran gas itu dalam pembakaran dan menamainya "oxygène". Scheele kehilangan kredit.',
            },
            {
                year: 'Warisan',
                title: 'Penemu yang Terlambat Terkenal',
                body: 'Komunitas ilmiah kini mengakui Scheele sebagai penemu oksigen yang sesungguhnya, tapi Priestley lebih sering disebut karena prioritas publikasi. Scheele sendiri hanya hidup hingga 43 tahun — para sejarawan menduga ia meninggal karena terpapar bahan kimia beracun dari eksperimen-eksperimennya.',
            },
        ],
    },

    // ── N — Nitrogen ──────────────────────────────────────────────────────
    {
        sym: 'N',
        name: 'Daniel Rutherford',
        born: '1749',
        died: '1819',
        nationality: '🇬🇧 Skotlandia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Daniel_Rutherford_by_William_Beechey.jpg/440px-Daniel_Rutherford_by_William_Beechey.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Daniel_Rutherford',
        shortBio: 'Dokter dan ahli botani Skotlandia yang menemukan nitrogen pada 1772 melalui eksperimen sederhana namun brilian dengan udara dan tikus.',
        discoveryStory: [
            {
                year: '1772',
                title: 'Tikus dan Udara yang Membunuh',
                body: 'Daniel Rutherford, mahasiswa kedokteran di Edinburgh, menempatkan tikus di dalam wadah tertutup. Tikus itu lama-kelamaan mati karena udara habis. Rutherford kemudian mengalirkan sisa udara itu melalui larutan basa untuk menyerap CO₂. Yang tersisa adalah gas yang tidak bisa menopang kehidupan.',
            },
            {
                year: '1772',
                title: '"Udara yang Rusak"',
                body: 'Rutherford menamai gas sisa itu "mephitic air" atau "udara yang rusak". Ia mencatat bahwa lilin tidak menyala, tikus tidak bisa bernapas, dan batu kapur tidak larut di dalamnya. Artinya, gas ini berbeda dari CO₂ — ia adalah sesuatu yang lain.',
            },
            {
                year: '1790',
                title: 'Lavoisier Menamainya',
                body: 'Seperti biasa, Lavoisier-lah yang bekerja membangun pemahaman sistematis. Ia mengenali gas Rutherford sebagai elemen tersendiri dan menamainya "azote" (tanpa-kehidupan). Nama "nitrogen" berasal dari bahasa Yunani "nitron-genes" artinya "pembuat sendawa" — karena ditemukan dalam kalium nitrat.',
            },
            {
                year: 'Warisan',
                title: '78% Udara yang Kita Hirup',
                body: 'Nitrogen mendominasi 78% atmosfer Bumi tapi hampir tidak pernah kita sadari — karena sangat stabil, ia tidak reaktif. Tapi tanpa nitrogen, tidak ada protein, tidak ada DNA. Proses Haber-Bosch yang menyintesis amonia dari nitrogen atmosfer pada 1913 adalah salah satu alasan populasi manusia bisa melewati 7 miliar.',
            },
        ],
    },

    // ── Na — Sodium ───────────────────────────────────────────────────────
    {
        sym: 'Na',
        name: 'Humphry Davy',
        born: '1778',
        died: '1829',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Humphry_Davy_by_Henry_Howard_%281803%29.jpg/440px-Humphry_Davy_by_Henry_Howard_%281803%29.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Humphry_Davy',
        shortBio: 'Kimiawan Inggris yang paling produktif di masanya — menemukan 9 elemen menggunakan elektrolisis yang baru ditemukannya. Mentor dari Michael Faraday.',
        discoveryStory: [
            {
                year: '1800',
                title: 'Listrik sebagai Alat Kimia',
                body: 'Ketika Alessandro Volta menemukan baterai pada 1800, Humphry Davy segera melihat potensinya yang lebih dalam dari sekedar listrik: jika arus listrik bisa memecah air menjadi hidrogen dan oksigen, mungkin ia bisa memecah senyawa lain yang selama ini tak terpecahkan.',
            },
            {
                year: '1807',
                title: 'Malam Bersejarah di Royal Institution',
                body: 'Davy melelehkan soda kaustik murni (natrium hidroksida) dan mengalirkan arus listrik dari baterai besar. Di katoda, muncul butiran-butiran kecil logam yang belum pernah dilihat manusia — logam yang langsung terbakar saat menyentuh udara dan meledak saat menyentuh air. Davy kewalahan kegembiraan.',
            },
            {
                year: '1807',
                title: 'Kalium, Kemudian Natrium',
                body: 'Pada malam yang sama, Davy berhasil mengisolasi kalium. Beberapa hari kemudian, ia mengulangi proses dengan soda biasa (natrium karbonat) dan mendapatkan logam serupa tapi berbeda sifat. Ini adalah natrium — logam yang akhirnya diberi simbol "Na" dari bahasa Latin "natrium".',
            },
            {
                year: 'Warisan',
                title: 'Bapak Elektrokimia',
                body: 'Dari 1807 hingga 1808, Davy menemukan potassium, sodium, barium, kalsium, magnesium, boron, dan klorin — semuanya menggunakan elektrolisis. Ia membuktikan bahwa elemen-elemen yang dianggap "tidak dapat diurai" hanyalah senyawa yang butuh energi lebih besar untuk dipecah.',
            },
        ],
    },

    // ── Cl — Chlorine ─────────────────────────────────────────────────────
    {
        sym: 'Cl',
        name: 'Carl Wilhelm Scheele',
        born: '1742',
        died: '1786',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Carl_Wilhelm_Scheele.jpg/440px-Carl_Wilhelm_Scheele.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Carl_Wilhelm_Scheele',
        shortBio: 'Apoteker Swedia yang menemukan oksigen dua tahun sebelum Priestley, tapi publikasinya terlambat. Juga penemu klorin, mangan, barium, dan molibdenum.',
        discoveryStory: [
            {
                year: '1774',
                title: 'Gas Kuning yang Mengerikan',
                body: 'Scheele mereaksikan mineral pirolusit (MnO₂) dengan asam klorida pekat. Gas kuning kehijauan yang tercium sangat tajam memenuhi laboratoriumnya. Ia mencatat bahwa gas itu memutihkan kertas warna, membunuh serangga, dan berbau seperti aqua regia.',
            },
            {
                year: '1774',
                title: '"Udara dari Asam Garam"',
                body: 'Scheele menyebut gas baru itu "dephlogisticated marine acid air" — bahasa dari teori phlogiston yang masih dominan saat itu. Ia tidak tahu bahwa gas itu adalah elemen. Teori phlogiston mengaburkan interpretasinya.',
            },
            {
                year: '1810',
                title: 'Davy Membuktikannya Elemen',
                body: 'Humphry Davy akhirnya membuktikan bahwa gas Scheele bukan senyawa — ia tidak mengandung oksigen, seperti yang dikira banyak kimiawan. Gas itu adalah elemen tersendiri. Davy menamakannya "chlorine" dari bahasa Yunani "chloros" yang berarti kuning kehijauan.',
            },
            {
                year: 'Warisan',
                title: 'Penyelamat dan Pembunuh dalam Satu Molekul',
                body: 'Klorin digunakan sebagai senjata kimia dalam Perang Dunia I di Ypres (1915). Tapi klorinasi air minum — menggunakan klorin untuk membunuh kuman — diperkirakan telah menyelamatkan lebih dari 177 juta nyawa manusia sejak awal abad ke-20.',
            },
        ],
    },

    // ── P — Phosphorus ────────────────────────────────────────────────────
    {
        sym: 'P',
        name: 'Hennig Brand',
        born: '~1630',
        died: '~1692',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Joseph_Wright_of_Derby_The_Alchemist.jpg/440px-Joseph_Wright_of_Derby_The_Alchemist.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Hennig_Brand',
        shortBio: 'Pedagang dan alkemis Hamburg yang menemukan fosfor secara tidak sengaja saat mencari "Batu Filsuf" dari urin manusia. Penemuan pertama elemen yang tercatat dalam sejarah.',
        discoveryStory: [
            {
                year: '1669',
                title: 'Alquimis yang Gila atau Jenius?',
                body: 'Hennig Brand adalah pedagang Hamburg yang percaya bahwa "Batu Filsuf" — zat legendaris yang bisa mengubah logam menjadi emas — tersembunyi di suatu tempat. Ia meyakini urin manusia, karena berwarna emas, mengandung kunci rahasianya.',
            },
            {
                year: '1669',
                title: '60 Ember Urin',
                body: 'Brand mengumpulkan puluhan ember urin manusia dan membiarkannya membusuk selama berbulan-bulan. Kemudian ia mendestilasi cairan itu dengan panas tinggi, memanaskan residu terus-menerus hingga menghasilkan material putih yang misterius.',
            },
            {
                year: '1669',
                title: 'Cahaya Dari Kegelapan',
                body: 'Di ruang gelap laboratoriumnya, Brand terkejut: material putih itu bercahaya sendiri dalam gelap dengan cahaya hijau kebiruan yang menakjubkan. "Cahaya dingin" — tanpa panas, tanpa api. Ia menamakannya "phosphorus" dari bahasa Yunani untuk "pembawa cahaya".',
            },
            {
                year: 'Warisan',
                title: 'Dari Mistis ke Ilmu Pengetahuan',
                body: 'Brand menemukan fosfor tanpa benar-benar memahaminya — ia mencarinya sebagai alkemi, bukan kimia. Tapi penemuannya menjadi penemuan elemen pertama yang terdokumentasi dalam sejarah melalui eksperimen yang disengaja. DNA, ATP, dan seluruh energi seluler bergantung pada fosfor.',
            },
        ],
    },

    // ── K — Potassium ─────────────────────────────────────────────────────
    {
        sym: 'K',
        name: 'Humphry Davy',
        born: '1778',
        died: '1829',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Humphry_Davy_by_Henry_Howard_%281803%29.jpg/440px-Humphry_Davy_by_Henry_Howard_%281803%29.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Humphry_Davy',
        shortBio: 'Kimiawan Inggris paling produktif di masanya — menemukan 9 elemen menggunakan elektrolisis. Kalium adalah elemen pertama yang ia isolasi dengan metode revolusioner tersebut.',
        discoveryStory: [
            {
                year: '1807',
                title: 'Malam yang Mengubah Kimia',
                body: 'Pada 19 Oktober 1807, Humphry Davy di Royal Institution London mengalirkan arus listrik besar dari baterai terkuat yang ada saat itu melalui kalium hidroksida cair yang meleleh. Di meja eksperimennya, di bawah terang lilin, terjadi sesuatu yang belum pernah ada manusia yang melihatnya.',
            },
            {
                year: '1807',
                title: 'Logam yang Lebih Ringan dari Air',
                body: 'Butiran-butiran logam perak kecil muncul di elektroda. Davy mencoba menyentuh salah satunya — butiran itu terbakar spontan di udara dengan nyala ungu kemerahan. Saat dimasukkan ke air, ia meluncur di permukaan, berputar, berasap, kemudian meledak dengan nyala api. Davy disebutkan berteriak kegirangan.',
            },
            {
                year: '1807',
                title: 'Penamaan: Potasium atau Kalium?',
                body: 'Davy menamainya "potassium" dari "potash" (abu kalium). Tapi kimiawan Jerman dan Swedia menamainya "kalium" dari "kaliy" berbahasa Arab (abu tanaman). Simbol "K" di tabel periodik berasal dari nama "kalium" — inilah mengapa simbol dan nama Inggris-nya berbeda.',
            },
            {
                year: 'Warisan',
                title: 'Ion yang Menjaga Jantung Berdetak',
                body: 'Kalium adalah ion kritis dalam setiap sel hidup — ia mengatur gradient elektrokimia di membran sel yang memungkinkan impuls saraf dan detak jantung. Kekurangan kalium bisa menyebabkan aritmia fatal. Satu elemen, satu malam penemuan, satu warisan tak terhingga.',
            },
        ],
    },

    // ── Mn — Manganese ────────────────────────────────────────────────────
    {
        sym: 'Mn',
        name: 'Johan Gottlieb Gahn',
        born: '1745',
        died: '1818',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Johan_Gottlieb_Gahn.jpg/440px-Johan_Gottlieb_Gahn.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Johan_Gottlieb_Gahn',
        shortBio: 'Kimiawan dan metalurgis Swedia yang berhasil mengisolasi mangan murni dari pirolusit pada 1774, satu tahun setelah Scheele mengidentifikasikannya sebagai elemen baru.',
        discoveryStory: [
            {
                year: '1770',
                title: 'Misteri Batu Hitam',
                body: 'Mineral hitam berat bernama pirolusit (MnO₂) telah digunakan para pembuat kaca Romawi kuno untuk menjernihkan gelas — mereka menyebutnya "pembuat kaca". Tapi tidak ada yang tahu apa sebenarnya mineral hitam itu. Kimiawan abad ke-18 mencurigai ada sesuatu baru di dalamnya.',
            },
            {
                year: '1773',
                title: 'Scheele Mengenali, Gahn yang Mengisolasi',
                body: 'Carl Wilhelm Scheele — yang juga menemukan oksigen dan klorin — menganalisis pirolusit dan menyimpulkan bahwa ia mengandung elemen yang belum pernah diisolasi. Ia memberikan sampel kepada kawannya, Johan Gottlieb Gahn, untuk dicoba direduksi.',
            },
            {
                year: '1774',
                title: 'Api dan Karbon',
                body: 'Gahn memanaskan campuran pirolusit dan karbon pada suhu sangat tinggi di tungku. Oksigen dalam MnO₂ terikat ke karbon membentuk CO₂ yang menguap — meninggalkan logam abu-abu-putih keras di dalam tungku. Mangan murni pertama dalam sejarah.',
            },
            {
                year: '1774',
                title: 'Nama dari Magnesia',
                body: 'Nama "manganese" berasal dari "Magnesia alba" — nama mineral yang ditemukan di wilayah Magnesia, Yunani. Ironisnya, mineral itu sendiri adalah magnesium karbonat, bukan mangan. Ketidakjelasan nama ini menyebabkan kebingungan selama bertahun-tahun antara mangan dan magnesium.',
            },
            {
                year: 'Warisan',
                title: 'Dalam Setiap Batang Baja',
                body: 'Mangan adalah bahan penting dalam industri baja — sekitar 90% mangan yang diproduksi dunia digunakan dalam metalurgi. Baja tanpa mangan akan rapuh dan mudah retak. Selain itu, enzim superoksida dismutase di tubuhmu mengandung mangan sebagai pusat aktifnya untuk melindungi sel dari kerusakan oksidatif.',
            },
        ],
    },

    // ── Fe — Iron ─────────────────────────────────────────────────────────
    {
        sym: 'Fe',
        name: 'Dikenal sejak Zaman Kuno',
        born: '~3000 SM',
        died: '—',
        nationality: '🌍 Berbagai Peradaban',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Iron_electrolytic_and_1cm3_cube.jpg/440px-Iron_electrolytic_and_1cm3_cube.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/History_of_ferrous_metallurgy',
        shortBio: 'Besi tidak memiliki satu penemu tunggal — ia telah dikenal dan digunakan manusia sejak Zaman Besi (~1200 SM), mengubah peradaban manusia selamanya.',
        discoveryStory: [
            {
                year: '~3200 SM',
                title: 'Besi dari Langit',
                body: 'Besi tertua yang digunakan manusia berasal dari meteorit — besi-nikel alami yang jatuh dari langit. Artefak besi meteoritik telah ditemukan di Mesir (manik-manik besi 3200 SM), Sumeran, dan Anatolia. Bagi mereka, besi adalah "logam langit" yang berharga melebihi emas.',
            },
            {
                year: '~1200 SM',
                title: 'Zaman Besi Dimulai',
                body: 'Sekitar 1200 SM, manusia belajar melebur batu besi (hematit, Fe₂O₃) dengan arang kayu dalam tungku sederhana. Besi yang dihasilkan lebih kuat dari perunggu, lebih mudah dibentuk, dan bahannya lebih tersedia di berbagai wilayah. Zaman Besi dimulai — dan mengubah segalanya.',
            },
            {
                year: '~700 SM',
                title: 'Besi untuk Semua',
                body: 'Tidak seperti perunggu yang butuh timah dan tembaga langka, besi ditemukan hampir di mana-mana. Ketersediaan besi yang luas "mendemokratisasi" alat dan senjata — tidak hanya raja dan tentara yang bisa memiliki alat besi, tapi juga petani. Pertanian meledak. Populasi tumbuh.',
            },
            {
                year: '1776',
                title: 'Antoine Lavoisier dan Kimia Besi',
                body: 'Lavoisier adalah orang pertama yang secara ilmiah mendeskripsikan besi sebagai elemen — murni, tidak bisa dipecah lebih lanjut. Ia menjelaskan mengapa besi berkarat: oksidasi, bukan "rusaknya" besi seperti yang dipercaya sebelumnya. Simbol "Fe" berasal dari bahasa Latin "ferrum".',
            },
            {
                year: 'Warisan',
                title: 'Inti Bumi dan Darah Kita',
                body: 'Inti Bumi terbuat dari besi-nikel — inilah yang menciptakan medan magnet yang melindungi kehidupan dari radiasi matahari. Di dalam darahmu, hemoglobin membawa oksigen dengan atom besi di pusatnya. Dari inti planet hingga sel darahmu, besi hadir di mana-mana.',
            },
        ],
    },

    // ── Cu — Copper ───────────────────────────────────────────────────────
    {
        sym: 'Cu',
        name: 'Dikenal sejak Zaman Kuno',
        born: '~9000 SM',
        died: '—',
        nationality: '🌍 Mesopotamia & Mesir',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Copper_-_El_Teniente.jpg/440px-Copper_-_El_Teniente.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Copper',
        shortBio: 'Tembaga adalah logam pertama yang digunakan manusia secara ekstensif — jauh sebelum besi atau perunggu. Penemuan Zaman Perunggu (campuran tembaga-timah) adalah salah satu lompatan terbesar peradaban.',
        discoveryStory: [
            {
                year: '~9000 SM',
                title: 'Logam Yang Bisa Dibentuk Dingin',
                body: 'Manusia prasejarah pertama kali menemukan tembaga asli — logam yang ditemukan dalam keadaan murni di alam (native copper). Berbeda dari batu, tembaga bisa dipalu, dibengkokkan, dan dibentuk tanpa dipanaskan. Ini adalah logam pertama yang dikerjakan manusia.',
            },
            {
                year: '~3500 SM',
                title: 'Kelahiran Metalurgi',
                body: 'Manusia belajar bahwa batu-batu tertentu (bijih tembaga) bisa dilebur dengan api dan menghasilkan tembaga. Ini adalah kelahiran metalurgi sejati. Tembaga mulai diproduksi secara massal di Mesopotamia dan Mesir untuk alat, senjata, dan ornamen.',
            },
            {
                year: '~3000 SM',
                title: 'Perunggu: Revolusi Paduan',
                body: 'Seseorang — kita tidak tahu siapa — menemukan bahwa mencampur tembaga dengan timah menghasilkan logam jauh lebih keras: perunggu. Ini memulai Zaman Perunggu. Peradaban Mesopotamia, Mesir, Yunani, dan China semuanya berbasis pada teknologi perunggu selama ribuan tahun.',
            },
            {
                year: 'Warisan',
                title: 'Dari Koin Romawi ke Chip Komputer',
                body: 'Nama "copper" berasal dari "Cyprium" — pulau Siprus yang menjadi pusat pertambangan tembaga dunia kuno, sumber simbol "Cu" dari "cuprum". Hari ini, tembaga adalah konduktor listrik terpenting dalam peradaban modern — kabel listrik, motor, chip. Di sirkuit PCB laptop yang kamu pegang, ada jalur tembaga di mana-mana.',
            },
        ],
    },

    // ── Ra — Radium ───────────────────────────────────────────────────────
    {
        sym: 'Ra',
        name: 'Marie & Pierre Curie',
        born: '1867 / 1859',
        died: '1934 / 1906',
        nationality: '🇵🇱🇫🇷 Polandia / Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/440px-Marie_Curie_c1920.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Marie_Curie',
        shortBio: 'Marie Curie — satu-satunya orang yang pernah memenangkan Nobel di dua disiplin ilmu berbeda (Fisika 1903, Kimia 1911). Bersama suaminya Pierre, ia menemukan radium dan polonium melalui kerja keras bertahun-tahun.',
        discoveryStory: [
            {
                year: '1896',
                title: 'Misteri Sinar Uranium',
                body: 'Henri Becquerel menemukan bahwa mineral uranium bisa mengekspos film fotografi tanpa cahaya. Maria Skłodowska (calon Marie Curie), doktor wanita pertama yang mengerjakan topik ini, memutuskan untuk meneliti "radiasi" misterius ini sebagai topik tesis doktoralnya.',
            },
            {
                year: '1898',
                title: 'Pitchblende yang Lebih Radioaktif dari Uranium',
                body: 'Marie dan Pierre mengamati sesuatu yang janggal: mineral pitchblende jauh lebih radioaktif dari uranium murni. Logikanya hanya satu — pitchblende mengandung elemen lain yang belum diketahui, yang lebih radioaktif. Mereka memutuskan untuk menemukannya.',
            },
            {
                year: '1898',
                title: 'Satu Ton Batu, Satu Gram Emas',
                body: 'Mereka memproses ratusan kilogram pitchblende secara manual di gudang bocor yang dingin. Marie memimpin proses pemisahan kimia yang melelahkan. Dari sekian ton mineral, mereka mengisolasi dua elemen baru: polonium (dinamai dari Polandia, tanah air Marie) dan radium.',
            },
            {
                year: '1903 / 1911',
                title: 'Dua Nobel',
                body: 'Marie Curie memenangkan Nobel Fisika 1903 bersama Pierre dan Becquerel. Setelah Pierre meninggal tertabrak kereta 1906, Marie melanjutkan sendiri dan memenangkan Nobel Kimia 1911 — menjadi satu-satunya orang dalam sejarah yang meraih Nobel di dua bidang berbeda.',
            },
            {
                year: '1934',
                title: 'Warisan yang Bersinar Hingga Kini',
                body: 'Marie Curie meninggal pada 1934 karena anemia aplastik akibat paparan radiasi bertahun-tahun — ketika bahaya radiasi belum dipahami. Buku catatan laboratoriumnya masih sangat radioaktif sampai sekarang, disimpan dalam kotak timbal. Peneliti yang ingin membacanya harus menandatangani surat pernyataan risiko.',
            },
        ],
    },

    // ── Au — Gold ─────────────────────────────────────────────────────────
    {
        sym: 'Au',
        name: 'Dikenal sejak Zaman Kuno',
        born: '~4000 SM',
        died: '—',
        nationality: '🌍 Mesopotamia & Mesir',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Native_gold_nuggets.jpg/440px-Native_gold_nuggets.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Gold',
        shortBio: 'Emas telah dikenal manusia sebelum catatan sejarah — ditemukan dalam keadaan murni di alam (native gold) di sungai dan batu. Tidak berkarat, berkilau abadi, dan langka — menjadikannya simbol kekuasaan dan kekayaan lintas peradaban.',
        discoveryStory: [
            {
                year: '~4000 SM',
                title: 'Logam yang Tidak Pernah Redup',
                body: 'Emas ditemukan manusia dalam keadaan murni — di sungai dan batu, tanpa perlu peleburan. Berbeda dari logam lain, emas tidak berkarat, tidak menghitam, dan selalu berkilau. Suku-suku prasejarah di Mesopotamia dan Mesir menggunakannya untuk hiasan dan ritual bahkan sebelum mereka memiliki tulisan.',
            },
            {
                year: '~2600 SM',
                title: 'Firaun dan Emas',
                body: 'Mesir kuno adalah peradaban pertama yang menambang emas secara terorganisir. Makam Tutankhamun yang ditemukan 1922 berisi emas dalam jumlah luar biasa — topeng pemakaman, peti mati berlapis emas tebal, dan ratusan ornamen. Semua emas itu, 3.300 tahun kemudian, masih berkilap sempurna.',
            },
            {
                year: '~560 SM',
                title: 'Koin Emas Pertama',
                body: 'Raja Croesus dari Lydia (kini Turki) mencetak koin emas murni pertama dalam sejarah — "stater Croesus". Ini mengubah peradaban: untuk pertama kalinya, nilai bisa dibawa, disimpan, dan dipindahkan dengan mudah. Perekonomian uang lahir.',
            },
            {
                year: '1778',
                title: 'Lavoisier: Elemen, Bukan Logam Ajaib',
                body: 'Antoine Lavoisier mengklasifikasikan emas sebagai elemen sejati dalam daftar elemennya — sesuatu yang tidak bisa dipecah lagi. Ini mengakhiri ribuan tahun kepercayaan para alkemis bahwa emas bisa "dibuat" dari logam lain. Au berasal dari bahasa Latin "aurum".',
            },
            {
                year: 'Warisan',
                title: 'Dari Mahkota ke Sirkuit',
                body: 'Emas hari ini bukan hanya perhiasan — chip komputer, kontak listrik, dan peralatan medis dilapisi emas karena ia tidak teroksidasi dan tetap konduktif sempurna selamanya. Setiap smartphone mengandung ~0.03 gram emas. Dan emas yang kamu lihat di perhiasan hari ini — atomnya lahir dari tabrakan bintang neutron miliaran tahun lalu.',
            },
        ],
    },

    // ── Pu — Plutonium ────────────────────────────────────────────────────
    {
        sym: 'Pu',
        name: 'Glenn T. Seaborg & Tim',
        born: '1912',
        died: '1999',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/GTS.jpg/440px-GTS.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Glenn_T._Seaborg',
        shortBio: 'Kimiawan nuklir Amerika yang menemukan plutonium dan 9 elemen transuranium lainnya. Satu-satunya orang yang masih hidup yang namanya digunakan sebagai nama elemen (seaborgium, elemen 106) saat ia masih hidup.',
        discoveryStory: [
            {
                year: '1940',
                title: 'Elemen yang Tidak Ada di Alam',
                body: 'Di University of California Berkeley pada Desember 1940, Glenn Seaborg, Joseph Kennedy, Arthur Wahl, dan Edwin McMillan membombardir uranium-238 dengan deuteron (nukleus hidrogen berat) menggunakan siklotron. Mereka menciptakan elemen yang tidak ada di alam dalam jumlah apapun.',
            },
            {
                year: '1941',
                title: 'Konfirmasi Senyawa Baru',
                body: 'Pada Februari 1941, tim Seaborg mengkonfirmasi bahwa mereka telah menciptakan elemen 94 — sebuah elemen baru yang kemudian dinamai plutonium, mengikuti pola uranium (Uranus) dan neptunium (Neptunus) yang baru ditemukan sebelumnya. "Pu" diambil dari Pluto.',
            },
            {
                year: '1942–1945',
                title: 'Proyek Manhattan',
                body: 'Perang Dunia II mengubah segalanya. Pemerintah AS merekrut Seaborg dan timnya ke Proyek Manhattan. Plutonium-239, yang memiliki penampang tangkapan neutron ideal, dipilih sebagai bahan bakar untuk bom tipe implosion. Bom "Fat Man" yang menghancurkan Nagasaki menggunakan plutonium.',
            },
            {
                year: '1951',
                title: 'Nobel untuk Penciptaan Elemen',
                body: 'Seaborg memenangkan Nobel Kimia 1951 bersama Edwin McMillan untuk penemuan elemen-elemen transuranium. Ia adalah satu-satunya Nobel yang pernah diberikan untuk "menciptakan" elemen baru — bukan menemukan yang sudah ada.',
            },
            {
                year: 'Warisan',
                title: 'Energi dan Ancaman',
                body: 'Plutonium adalah elemen yang paling "bermuka dua" dalam sejarah. Di satu sisi, plutonium-238 digunakan dalam reaktor RTG untuk sumber energi pesawat luar angkasa (Voyager, Cassini, New Horizons) — memancarkan panas dari peluruhan radioaktif. Di sisi lain, plutonium-239 adalah isi dari ribuan hulu ledak nuklir di seluruh dunia.',
            },
        ],
    },

    // ── He — Helium ───────────────────────────────────────────────────────
    {
        sym: 'He',
        name: 'Pierre Janssen & Norman Lockyer',
        born: '1824 / 1836',
        died: '1907 / 1920',
        nationality: '🇫🇷 Prancis / 🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Norman_Lockyer.jpg/440px-Norman_Lockyer.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Norman_Lockyer',
        shortBio: 'Helium adalah satu-satunya elemen yang pertama kali ditemukan di luar Bumi — di Matahari — melalui spektroskopi garis abstraksi, 27 tahun sebelum ditemukan di Bumi.',
        discoveryStory: [
            {
                year: '1868',
                title: 'Garis Misterius di Spektrum Matahari',
                body: 'Selama gerhana matahari total pada 18 Agustus 1868, Pierre Janssen di India mengamati spektrum matahari dan melihat garis kuning cerah yang tidak cocok dengan elemen apapun yang diketahui. Di Inggris, Norman Lockyer melakukan pengamatan yang sama secara independen, tanpa gerhana, dari teleskopnya.',
            },
            {
                year: '1868',
                title: 'Elemen dari Matahari',
                body: 'Lockyer bersama kimiawan Edward Frankland mengusulkan bahwa garis kuning misterius itu berasal dari elemen baru yang tidak ditemukan di Bumi. Mereka menamainya "helium" dari "Helios" — dewa Matahari dalam mitologi Yunani. Para kimiawan skeptis: elemen yang hanya ada di Matahari?',
            },
            {
                year: '1895',
                title: 'Ditemukan di Bumi',
                body: 'Hampir 27 tahun kemudian, kimiawan William Ramsay memanaskan mineral uraninit dan mengamati gas yang keluar. Gas itu menghasilkan garis spektrum yang sama persis dengan "helium" di Matahari. Helium ada di Bumi — terperangkap dalam mineral radioaktif sebagai produk peluruhan alfa.',
            },
            {
                year: 'Warisan',
                title: 'Dari Bintang ke MRI',
                body: 'Helium cair (-269°C, hanya 4° di atas nol mutlak) adalah satu-satunya zat yang bisa mendinginkan magnet superkonduktor dalam mesin MRI. Setiap scan MRI yang menyelamatkan nyawa seseorang bergantung pada helium. Dan seluruh helium di Bumi berasal dari peluruhan radioaktif uranium dan thorium — ia terus terbentuk, sangat lambat, di dalam kerak bumi.',
            },
        ],
    },

    // ── C — Carbon ────────────────────────────────────────────────────────
    {
        sym: 'C',
        name: 'Antoine Lavoisier',
        born: '1743',
        died: '1794',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Antoine_lavoisier_color.jpg/440px-Antoine_lavoisier_color.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Antoine_Lavoisier',
        shortBio: 'Bapak kimia modern. Meski karbon dikenal sejak zaman prasejarah, Lavoisier adalah yang pertama mengklasifikasikannya sebagai elemen dan menjelaskan pembakarannya secara ilmiah pada 1789.',
        discoveryStory: [
            {
                year: 'Prasejarah',
                title: 'Api, Arang, dan Berlian',
                body: 'Karbon telah dikenal manusia sejak api pertama — arang adalah karbon amorf yang terbentuk saat kayu terbakar tak sempurna. Berlian dan grafit juga dikenal kuno, tapi tidak ada yang tahu ketiganya adalah zat yang sama. Mereka terlihat, terasa, dan berperilaku sepenuhnya berbeda.',
            },
            {
                year: '1772',
                title: 'Lavoisier dan Berlian',
                body: 'Lavoisier membakar berlian dengan lensa pembakar focusing sinar matahari — dan mendapatkan CO₂, sama persis seperti membakar arang. Ia menyimpulkan bahwa berlian dan karbon adalah bahan yang sama. Tapi bagaimana bisa benda sama keras berlian dan selunak grafit terbuat dari zat yang sama?',
            },
            {
                year: '1789',
                title: 'Elemen, Bukan Senyawa',
                body: 'Dalam Traité Élémentaire de Chimie (1789), Lavoisier secara resmi mendaftar "carbone" sebagai elemen dasar — sesuatu yang tidak bisa dipecah lebih lanjut. Ia juga menjelaskan pembakaran sebagai reaksi dengan oksigen, menggantikan teori phlogiston yang telah mendominasi selama 100 tahun.',
            },
            {
                year: '1794',
                title: 'Guillotine',
                body: 'Ironi terbesar sejarah sains: Lavoisier, yang juga bekerja sebagai pemungut pajak kerajaan, dihukum mati oleh guillotine selama Revolusi Prancis pada 8 Mei 1794. Matematikawan Lagrange berkata: "Butuh hanya sekejap untuk memotong kepala itu, tapi 100 tahun mungkin tidak cukup untuk menghasilkan kepala serupa."',
            },
            {
                year: 'Warisan',
                title: 'Basis Semua Kehidupan',
                body: 'Karbon adalah elemen yang membentuk semua molekul kehidupan — DNA, protein, lemak, karbohidrat — karena kemampuan uniknya membentuk rantai panjang dan struktur cincin yang kompleks (4 ikatan kovalen yang kuat). Kimia organik adalah "kimia karbon". Tidak ada satu pun makhluk hidup yang bisa eksis tanpa karbon.',
            },
        ],
    },

    // ── Si — Silicon ──────────────────────────────────────────────────────
    {
        sym: 'Si',
        name: 'Jöns Jacob Berzelius',
        born: '1779',
        died: '1848',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/J%C3%B6ns_Jacob_Berzelius_-_h%C3%A4lft.jpg/440px-J%C3%B6ns_Jacob_Berzelius_-_h%C3%A4lft.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/J%C3%B6ns_Jacob_Berzelius',
        shortBio: 'Kimiawan Swedia yang mengisolasi silikon murni pada 1823 menggunakan reaksi kimia reduktif. Juga penemu cerium, selenium, thorium, dan pencipta sistem simbol kimia modern yang masih digunakan sampai hari ini.',
        discoveryStory: [
            {
                year: '1787',
                title: 'Lavoisier Menduganya Ada',
                body: 'Antoine Lavoisier pada 1787 menduga bahwa silika (SiO₂, pasir) mengandung elemen baru yang belum diisolasi. Ia menamainya "silicium" tapi tidak berhasil mengisolasinya. Dipercaya sebagai oksida dari elemen baru yang sulit dipisahkan.',
            },
            {
                year: '1811',
                title: 'Percobaan Pertama yang Gagal',
                body: 'Gay-Lussac dan Thénard di Prancis mencoba mengisolasi silikon dengan mereaksikan silikon tetrafluorida dengan kalium — dan berhasil mendapatkan padatan kecokelatan yang mereka kira silikon. Tapi ia tidak murni dan tidak bisa dikonfirmasi.',
            },
            {
                year: '1823',
                title: 'Berzelius Berhasil',
                body: 'Jöns Jacob Berzelius mereaksikan kalium fluorosilikat dengan kalium logam panas. Produknya kemudian dicuci berulang untuk menghilangkan kalium silikat — meninggalkan silikon amorf cokelat murni untuk pertama kalinya. Ia menamakannya "silicon" dari bahasa Latin "silex" (flint, batu api).',
            },
            {
                year: '1854',
                title: 'Silikon Kristal',
                body: 'Henri Sainte-Claire Deville berhasil membuat silikon kristalin pertama pada 1854 dengan mereduksi aluminium klorida silikon di dalam tungku elektrolitik. Bentuk kristal menunjukkan kilap metalik yang khas — inilah bentuk yang menjadi dasar industri semikonduktor.',
            },
            {
                year: 'Warisan',
                title: 'Silicon Valley Bukan Kebetulan',
                body: 'Silikon memiliki sifat semikonduktor yang sempurna: bisa mengonduksi listrik atau mengisolasinya tergantung kondisi. Ini adalah dasar dari transistor, microchip, dan seluruh revolusi digital. Setiap CPU, memori, dan sensor di dunia terbuat dari silikon kristal hipermurni. "Silicon Valley" dinamai atas elemen ini.',
            },
        ],
    },

    // ── U — Uranium ───────────────────────────────────────────────────────
    {
        sym: 'U',
        name: 'Martin Heinrich Klaproth',
        born: '1743',
        died: '1817',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Johann-Friedrich-August-Tischbein-Martin-Klaproth.jpg/440px-Johann-Friedrich-Alfred-Tischbein-Martin-Klaproth.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Martin_Heinrich_Klaproth',
        shortBio: 'Kimiawan analitik Jerman yang menemukan uranium pada 1789 dalam mineral pechblende, menamainya dari planet Uranus yang baru ditemukan. Ia tidak tahu bahwa 150 tahun kemudian penemuannya akan mengubah sejarah dunia.',
        discoveryStory: [
            {
                year: '1789',
                title: 'Mineral Hitam dari Bohemia',
                body: 'Martin Klaproth, kimiawan di Berlin, menganalisis mineral hitam berat yang disebut "pechblende" dari tambang perak di Joachimsthal, Bohemia (kini Ceko). Mineral itu mengandung sesuatu yang tidak dikenalnya. Setelah proses kimia panjang, ia mendapatkan oksida logam kekuningan.',
            },
            {
                year: '1789',
                title: 'Dinamakan dari Planet Baru',
                body: 'Klaproth yakin ia telah menemukan elemen baru dan menamainya "uranium" setelah planet Uranus yang baru saja ditemukan oleh Herschel pada 1781. Tapi yang ia temukan sebenarnya bukan uranium murni — melainkan uranium dioksida (UO₂). Logam uranium murni tidak diisolasi hingga 1841.',
            },
            {
                year: '1841',
                title: 'Péligot Mengisolasi Logam Murni',
                body: 'Eugène-Melchior Péligot di Prancis akhirnya mengisolasi uranium logam murni dengan mereduksi uranium tetraklorida menggunakan kalium. Uranium ternyata adalah logam abu-abu perak yang berat, daktil, dan terasa hangat — karena peluruhan radioaktifnya terus menghasilkan panas.',
            },
            {
                year: '1896',
                title: 'Becquerel dan Radiasi',
                body: 'Henri Becquerel menemukan bahwa uranium memancarkan "radiasi" yang bisa mengekspos film fotografi tanpa cahaya. Penemuan ini memulai seluruh era fisika nuklir — termasuk penelitian Marie Curie dan akhirnya penemuan fisi nuklir pada 1938.',
            },
            {
                year: 'Warisan',
                title: 'Energi Terbesar dan Risiko Terbesar',
                body: 'Satu kilogram uranium-235, jika difisikan sempurna, menghasilkan energi setara dengan membakar 3.000 ton batu bara. Uranium digunakan dalam reaktor nuklir untuk menghasilkan listrik bagi ratusan juta orang. Dan dalam bom atom yang dijatuhkan di Hiroshima — "Little Boy" — hanya 64 kg uranium yang menyebabkan kehancurannya.',
            },
        ],
    },

    // ── Li — Lithium ──────────────────────────────────────────────────────
    {
        sym: 'Li',
        name: 'Johan August Arfwedson',
        born: '1792', died: '1841',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Johan_August_Arfwedson.jpg/440px-Johan_August_Arfwedson.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Johan_August_Arfwedson',
        shortBio: 'Kimiawan Swedia muda yang menemukan litium pada 1817 ketika menganalisis mineral petalit di laboratorium Berzelius. Penemuannya mengejutkan dunia kimia karena litium ternyata alkali logam yang sebelumnya tidak diketahui.',
        discoveryStory: [
            { year: '1817', title: 'Mineral Aneh dari Swedia', body: 'Johan Arfwedson, mahasiswa di laboratorium Jöns Jacob Berzelius, menganalisis mineral petalit dari pulau Utö, Swedia. Ia menemukan bahwa mineral itu mengandung sesuatu yang tidak bisa diidentifikasi — bukan natrium, bukan kalium, tapi bereaksi serupa.' },
            { year: '1817', title: '"Zat Berbatu"', body: 'Berzelius menamai elemen baru itu "lithium" dari bahasa Yunani "lithos" (batu) karena ditemukan dalam mineral batu, berbeda dari natrium dan kalium yang ditemukan dari abu tanaman. Arfwedson berhasil mengidentifikasinya tapi tidak bisa mengisolasi logam murninya.' },
            { year: '1821', title: 'Davy Mengisolasi Logamnya', body: 'Humphry Davy akhirnya mengisolasi litium logam murni menggunakan elektrolisis, meski dalam jumlah sangat kecil. Logam litium ternyata lebih ringan dari semua logam yang dikenal — bahkan mengapung di air.' },
            { year: 'Warisan', title: 'Baterai yang Menggerakkan Dunia', body: 'Litium adalah bahan aktif baterai isi ulang lithium-ion yang menggerakkan smartphone, laptop, kendaraan listrik, dan penyimpanan energi surya. Tanpa litium, revolusi energi bersih hampir mustahil. Arfwedson tidak pernah membayangkan "batu" yang ia temukan akan menjadi begitu penting.' },
        ],
    },

    // ── Be — Beryllium ────────────────────────────────────────────────────
    {
        sym: 'Be',
        name: 'Louis-Nicolas Vauquelin',
        born: '1763', died: '1829',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Louis_Nicolas_Vauquelin.jpg/440px-Louis_Nicolas_Vauquelin.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Louis_Nicolas_Vauquelin',
        shortBio: 'Kimiawan Prancis yang menemukan berilium dan kromium. Ia mengidentifikasi oksida berilium dari batu zamrud pada 1798, membuktikan bahwa zamrud bukan hanya silikat aluminium biasa.',
        discoveryStory: [
            { year: '1798', title: 'Rahasia dalam Zamrud', body: 'Louis Vauquelin menganalisis batu zamrud (beryl) dan aquamarine — dan menemukan bahwa keduanya mengandung oksida yang tidak dikenal. Ia menyebut zat baru ini "glucine" karena garamnya berasa manis (dari bahasa Yunani "glykys").' },
            { year: '1798', title: 'Bukan Aluminium', body: 'Vauquelin membuktikan bahwa oksida baru ini berbeda dari alumina (Al₂O₃) meski mirip. Massanya lebih ringan dan sifatnya sedikit berbeda. Ia mempublikasikan penemuannya dan mengusulkan elemen baru.' },
            { year: '1828', title: 'Wöhler dan Bussy Mengisolasi Logamnya', body: 'Friedrich Wöhler (Jerman) dan Antoine Bussy (Prancis) secara independen berhasil mengisolasi berilium logam murni pada 1828 dengan mereduksi berilium klorida menggunakan kalium. Nama "beryllium" menggantikan "glucinium" karena diambil dari "beryl".' },
            { year: 'Warisan', title: 'Logam Paling Kaku per Berat', body: 'Berilium adalah logam yang sangat ringan namun luar biasa kaku — kekakuannya per satuan berat tidak tertandingi. Digunakan di cermin teleskop James Webb Space Telescope, komponen pesawat militer, dan senjata nuklir. Tapi berilium sangat beracun — debu berilium menyebabkan penyakit paru-paru kronis yang tidak bisa disembuhkan.' },
        ],
    },

    // ── B — Boron ─────────────────────────────────────────────────────────
    {
        sym: 'B',
        name: 'Humphry Davy & Gay-Lussac',
        born: '1778 / 1778', died: '1829 / 1850',
        nationality: '🇬🇧 Inggris / 🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Humphry_Davy_by_Henry_Howard_%281803%29.jpg/440px-Humphry_Davy_by_Henry_Howard_%281803%29.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Boron',
        shortBio: 'Boron ditemukan hampir bersamaan dan secara independen oleh dua kelompok pada tahun 1808: Humphry Davy di London, dan pasangan Gay-Lussac & Thénard di Paris.',
        discoveryStory: [
            { year: '1808', title: 'Perlombaan Paris vs London', body: 'Pada musim panas 1808, dua kelompok terpisah bekerja pada masalah yang sama: mengisolasi elemen dari asam borik. Di Paris, Joseph Gay-Lussac dan Louis Thénard mereaksikan asam borik dengan kalium logam. Di London, Humphry Davy melakukan elektrolisis boron trioksida.' },
            { year: '1808', title: 'Dua Penemuan Satu Elemen', body: 'Kedua kelompok berhasil mendapatkan padatan cokelat keabu-abuan yang belum pernah ada sebelumnya. Gay-Lussac dan Thénard mempublikasikan lebih dulu, tapi Davy mengumumkan temuannya secara independen beberapa saat kemudian. Keduanya mendapat kredit.' },
            { year: '1808', title: 'Penamaan: Boron', body: 'Nama "boron" berasal dari "borax" — mineral borat yang digunakan manusia sejak ribuan tahun untuk keramik dan kaca. Simbol "B" langsung mengikuti nama Inggrisnya.' },
            { year: 'Warisan', title: 'Dari Detergen ke Reaktor Nuklir', body: 'Boraks (natrium borat) telah digunakan manusia selama ribuan tahun sebagai detergen dan pengawet. Boron hari ini digunakan dalam batang kendali reaktor nuklir (boron menyerap neutron dengan sangat efisien), kaca borosilikat (Pyrex), dan semikonduktor. Boron nitrid hexagonal adalah "grafen putih" yang sedang banyak diteliti.' },
        ],
    },

    // ── F — Fluorine ──────────────────────────────────────────────────────
    {
        sym: 'F',
        name: 'Henri Moissan',
        born: '1852', died: '1907',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Henri_Moissan.jpg/440px-Henri_Moissan.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Henri_Moissan',
        shortBio: 'Kimiawan Prancis yang berhasil mengisolasi fluor pada 1886 setelah puluhan tahun para ilmuwan gagal — banyak di antaranya terluka parah atau meninggal karena mencoba. Moissan mendapat Nobel Kimia 1906.',
        discoveryStory: [
            { year: '~1670', title: 'Diketahui Tapi Tak Terjangkau', body: 'Fluor diketahui ada dalam mineral fluorit sejak abad ke-17 — digunakan sebagai fluks dalam peleburan logam. Tapi mengisolasi elemen fluornya adalah perkara berbeda. Kimiawan yang mencoba sering mengalami keracunan parah. Beberapa meninggal. Ini dijuluki "penyakit fluorisis".' },
            { year: '1813–1886', title: 'Korban-Korban yang Gagal', body: 'Humphry Davy mencoba dan keracunan. George Knox dan Thomas Knox di Irlandia keracunan parah. Paulin Louyet dan Jerome Nickles meninggal. Pierre Louyet juga meninggal. Fluor begitu reaktif sehingga ia bereaksi langsung dengan hampir semua yang disentuhnya — termasuk air, kaca, dan jaringan tubuh.' },
            { year: '1886', title: 'Moissan Memecahkannya', body: 'Henri Moissan menggunakan elektrolisis kalium bifluorida (KHF₂) yang dilarutkan dalam asam fluorhidrat anhidrat di -23°C. Elektroda platinum-iridium (satu-satunya yang tahan). Pada Juni 1886, gas kuning pucat muncul di anoda — fluor murni, untuk pertama kalinya dalam sejarah.' },
            { year: '1906', title: 'Nobel dan Akhir Tragis', body: 'Moissan memenangkan Nobel Kimia 1906. Tapi paparan fluor bertahun-tahun merusak kesehatannya — ia meninggal dua bulan setelah menerima Nobel, pada usia 54.' },
            { year: 'Warisan', title: 'Elemen Paling Reaktif di Alam', body: 'Fluor adalah elemen paling elektronegatif dan paling reaktif. Teflon (PTFE) — lapisan anti lengket di wajan — adalah polimer fluorkarbon yang terlalu stabil untuk bereaksi dengan apapun. Senyawa freon yang merusak ozon juga berbasis fluor. Dan fluorida dalam pasta gigi mencegah kerusakan gigi dengan memperkuat email.' },
        ],
    },

    // ── Ne — Neon ─────────────────────────────────────────────────────────
    {
        sym: 'Ne',
        name: 'William Ramsay & Morris Travers',
        born: '1852 / 1872', died: '1916 / 1961',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sir_William_Ramsay_%28Nobel_1904%29.jpg/440px-Sir_William_Ramsay_%28Nobel_1904%29.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/William_Ramsay',
        shortBio: 'Ramsay dan Travers menemukan neon pada 1898 hanya beberapa minggu setelah menemukan kripton — keduanya ditemukan dengan cara yang sama: menguapkan udara cair dan menganalisis sisa gasnya.',
        discoveryStory: [
            { year: '1894', title: 'Gas Mulia Pertama: Argon', body: 'William Ramsay dan Lord Rayleigh menemukan argon pada 1894 — gas mulia pertama yang ditemukan. Penemuan ini membuka pertanyaan besar: apakah ada gas serupa lainnya yang tersembunyi di udara?' },
            { year: '1898', title: 'Menguapkan Udara', body: 'Ramsay dan asistennya Morris Travers mendapat sampel udara cair dan mulai menguapkannya secara perlahan. Dengan mengambil fraksi yang berbeda-beda, mereka bisa memisahkan gas-gas baru. Dalam rentang beberapa minggu, mereka menemukan kripton, lalu neon.' },
            { year: '1898', title: '"Cahaya Baru"', body: 'Ketika mereka mengalirkan listrik melalui neon dalam tabung vakum, terlihat nyala merah-oranye yang sangat terang dan mencolok. Ramsay menamai elemen itu "neon" dari bahasa Yunani "neos" (baru). Putranya yang berusia 12 tahun yang menyarankan nama itu.' },
            { year: 'Warisan', title: 'Cahaya Malam Kota', body: 'Lampu neon komersial pertama dijual pada 1910 oleh Georges Claude di Paris. Ketika didemonstrasikan di Los Angeles pada 1923, orang-orang terpesona dan berhenti di jalan untuk melihatnya — "cahaya hijau atau merah yang tidak pernah padam". Tanda neon menjadi ikon budaya abad ke-20.' },
        ],
    },

    // ── Mg — Magnesium ────────────────────────────────────────────────────
    {
        sym: 'Mg',
        name: 'Humphry Davy',
        born: '1778', died: '1829',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Humphry_Davy_by_Henry_Howard_%281803%29.jpg/440px-Humphry_Davy_by_Henry_Howard_%281803%29.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Humphry_Davy',
        shortBio: 'Davy mengisolasi magnesium logam pada 1808 menggunakan elektrolisis magnesia — satu dari sekian elemen yang ia isolasi dalam periode revolusioner 1807–1808.',
        discoveryStory: [
            { year: '1755', title: 'Black Membuktikan Magnesia Bukan Kapur', body: 'Joseph Black pada 1755 membuktikan bahwa magnesia alba (magnesium karbonat) berbeda dari kapur (kalsium karbonat) — keduanya bereaksi berbeda dengan asam. Ini adalah petunjuk pertama bahwa ada elemen baru di dalam magnesia.' },
            { year: '1808', title: 'Davy Mengisolasinya', body: 'Humphry Davy melakukan elektrolisis pada magnesia lembab dan berhasil menghasilkan magnesium logam murni — meski dalam jumlah kecil. Ia menamainya "magnesium" dari "Magnesia", wilayah di Yunani tempat mineral tersebut ditemukan.' },
            { year: '1831', title: 'Antoine Bussy: Logam Murni Skala Besar', body: 'Antoine Bussy berhasil menghasilkan magnesium murni dalam jumlah yang signifikan dengan mereduksi magnesium klorida menggunakan kalium. Ini membuka jalan bagi studi sistematis sifat-sifat magnesium.' },
            { year: 'Warisan', title: 'Klorofil dan Tulang', body: 'Setiap molekul klorofil — pigmen hijau yang menangkap energi matahari dalam fotosintesis — mengandung satu atom magnesium di pusatnya. Tanpa magnesium, tidak ada fotosintesis. Di tubuh manusia, magnesium adalah kofaktor lebih dari 300 reaksi enzim, termasuk sintesis DNA dan produksi energi ATP.' },
        ],
    },

    // ── Al — Aluminium ────────────────────────────────────────────────────
    {
        sym: 'Al',
        name: 'Friedrich Wöhler',
        born: '1800', died: '1882',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Friedrich_W%C3%B6hler_2.jpg/440px-Friedrich_W%C3%B6hler_2.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Friedrich_W%C3%B6hler',
        shortBio: 'Kimiawan Jerman yang pada 1827 berhasil mengisolasi aluminium murni melalui reaksi kimia — meski Ørsted pernah mengklaimnya dua tahun sebelumnya tanpa bukti yang cukup kuat.',
        discoveryStory: [
            { year: '1808', title: 'Davy Memberinya Nama', body: 'Humphry Davy mencoba mengisolasi aluminium dengan elektrolisis alumina tapi gagal mendapatkan logam murninya. Tapi ia tetap memberi nama pada elemen yang diduganya: "aluminum" (lalu diubah jadi "aluminium" oleh komunitas kimia Eropa).' },
            { year: '1825', title: 'Ørsted: Klaim yang Dipertanyakan', body: 'Hans Christian Ørsted (penemu elektromagnetisme) mengklaim berhasil mendapatkan aluminium dengan mereduksi aluminium klorida menggunakan amalgam kalium-merkuri. Tapi sampelnya tidak cukup murni untuk dikonfirmasi.' },
            { year: '1827', title: 'Wöhler Berhasil', body: 'Friedrich Wöhler menggunakan kalium logam murni untuk mereduksi aluminium klorida anhidrat. Ia mendapatkan bubuk abu-abu yang jelas merupakan aluminium logam. Metode Wöhler lebih bersih dan terbukti lebih baik dari Ørsted.' },
            { year: '1886', title: 'Hall-Héroult: Aluminium untuk Semua', body: 'Charles Hall (Amerika) dan Paul Héroult (Prancis) secara independen menemukan metode elektrolitik untuk memproduksi aluminium dari alumina dalam kriolit cair. Harga aluminium yang dulunya lebih mahal dari emas anjlok 200 kali dalam 10 tahun.' },
            { year: 'Warisan', title: 'Logam Modern', body: 'Aluminium kini adalah logam yang paling banyak diproduksi kedua di dunia setelah besi. Pesawat terbang, kaleng minuman, bodi mobil, semua komputer — hampir semuanya menggunakan aluminium. Daur ulangnya menghemat 95% energi dibanding produksi dari bijih.' },
        ],
    },

    // ── S — Sulfur ────────────────────────────────────────────────────────
    {
        sym: 'S',
        name: 'Dikenal sejak Zaman Kuno',
        born: 'Prasejarah', died: '—',
        nationality: '🌍 Berbagai Peradaban',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sulfur_-_El_Desierto_mine%2C_San_Pablo_de_Napa%2C_Daniel_Campos_Province%2C_Potosi%2C_Bolivia.jpg/440px-Sulfur_-_El_Desierto_mine%2C_San_Pablo_de_Napa%2C_Daniel_Campos_Province%2C_Potosi%2C_Bolivia.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Sulfur',
        shortBio: 'Belerang dikenal manusia sejak ribuan tahun sebelum Masehi — ditemukan dalam keadaan murni di dekat gunung berapi. Dalam Alkitab disebut sebagai "brimstone", dibakar oleh Tuhan untuk menghancurkan Sodom dan Gomora.',
        discoveryStory: [
            { year: 'Prasejarah', title: 'Api Biru dari Gunung Berapi', body: 'Belerang kuning cerah ditemukan di dekat kawah gunung berapi dan mata air panas — bisa diambil langsung tanpa peleburan. Ketika dibakar, ia menghasilkan api biru yang menakjubkan dan bau "telur busuk" yang khas (SO₂). Orang kuno menggunakannya untuk ritual, fumigasi, dan senjata.' },
            { year: '~1000 SM', title: '"Api Yunani" dan Senjata', body: 'Orang Yunani kuno membakar campuran belerang, minyak, dan bahan lain untuk menciptakan "api Yunani" — senjata pembakar yang terus menyala bahkan di air. Bangsa Mesir menggunakannya untuk memutihkan kain linen. Bangsa China menemukan bahwa belerang adalah komponen penting mesiu.' },
            { year: '1789', title: 'Lavoisier Mengklasifikasikannya', body: 'Antoine Lavoisier secara resmi mengklasifikasikan belerang sebagai elemen — bukan senyawa — dalam listrik elemennya tahun 1789. Simbol "S" dari nama Latin "sulphur" atau "sulfur".' },
            { year: 'Warisan', title: 'Dari Gunung Berapi ke Industri Kimia', body: 'Asam sulfat (H₂SO₄) adalah bahan kimia industri yang paling banyak diproduksi di dunia — lebih dari 200 juta ton per tahun. Digunakan untuk membuat pupuk, baterai, bahan kimia, dan ratusan produk lain. Produksi asam sulfat sering digunakan sebagai indikator kekuatan industri suatu negara.' },
        ],
    },

    // ── Ar — Argon ────────────────────────────────────────────────────────
    {
        sym: 'Ar',
        name: 'William Ramsay & Lord Rayleigh',
        born: '1852 / 1842', died: '1916 / 1919',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sir_William_Ramsay_%28Nobel_1904%29.jpg/440px-Sir_William_Ramsay_%28Nobel_1904%29.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Argon',
        shortBio: 'Argon — gas mulia pertama yang ditemukan — diisolasi 1894 setelah Lord Rayleigh menyadari bahwa nitrogen dari udara selalu lebih berat dari nitrogen "murni". Sebuah anomali kecil yang membuka golongan baru dalam tabel periodik.',
        discoveryStory: [
            { year: '1892', title: 'Nitrogen yang Terlalu Berat', body: 'Lord Rayleigh mengamati bahwa nitrogen yang diekstrak dari udara selalu 0,5% lebih berat dari nitrogen yang disintesis dari senyawa kimia. Perbedaan kecil itu mengganggu Rayleigh — ia tidak bisa menjelaskannya.' },
            { year: '1894', title: 'Ramsay Bergabung', body: 'William Ramsay bersama Rayleigh menghilangkan semua nitrogen, oksigen, CO₂, dan uap air dari sampel udara. Yang tersisa adalah gas inert yang tidak mau bereaksi dengan apapun — termasuk logam alkali yang biasanya sangat reaktif.' },
            { year: '1894', title: '"Si Malas"', body: 'Mereka menamainya "argon" dari bahasa Yunani "argos" (malas, tidak aktif) karena gas ini menolak semua reaksi kimia. Pengumuman mereka disambut skeptis: bagaimana mungkin ada elemen baru yang "tersembunyi" di udara selama ratusan tahun?' },
            { year: '1904', title: 'Dua Nobel Sekaligus', body: 'Penemuan argon (dan gas mulia lainnya) memenangkan Nobel Fisika 1904 untuk Rayleigh dan Nobel Kimia 1904 untuk Ramsay — penghargaan terpisah untuk kolaborasi yang sama.' },
            { year: 'Warisan', title: '1% Udara yang Kamu Hirup', body: 'Argon membuat 0,93% dari atmosfer Bumi — hampir 1%. Digunakan untuk mengisi lampu pijar (mencegah filamen oksidasi), pengelasan logam mulia (menciptakan atmosfer inert), dan jendela kaca ganda berinsulasi tinggi. Ia juga digunakan dalam industri semikonduktor untuk menciptakan lingkungan bebas oksigen.' },
        ],
    },

    // ── Ca — Calcium ──────────────────────────────────────────────────────
    {
        sym: 'Ca',
        name: 'Humphry Davy',
        born: '1778', died: '1829',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Humphry_Davy_by_Henry_Howard_%281803%29.jpg/440px-Humphry_Davy_by_Henry_Howard_%281803%29.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Calcium',
        shortBio: 'Kalsium diisolasi oleh Humphry Davy pada 1808 menggunakan elektrolisis — sama seperti natrium, kalium, magnesium, barium, dan strontium yang ia temukan dalam periode produktif yang sama.',
        discoveryStory: [
            { year: 'Kuno', title: 'Kapur dan Semen Romawi', body: 'Kapur (kalsium oksida) dan kalsium karbonat (batu kapur, marmer) digunakan ribuan tahun sebelum elemen kalsiumnya diketahui. Bangsa Romawi membuat semen dari kapur dan abu vulkanik — dan membangun Pantheon serta Koloseum dari bahan berbasis kalsium.' },
            { year: '1808', title: 'Davy dan Elektrolisis Kalsium', body: 'Humphry Davy mengelektrolisis campuran kapur dengan merkuri oksida dan berhasil mendapatkan campuran kalsium-merkuri (amalgam kalsium). Dengan mendestilasi merkuri dari amalgam, ia mendapatkan kalsium logam murni — logam putih perak yang langsung bereaksi dengan air.' },
            { year: '1808', title: 'Nama dari "Kapur"', body: 'Davy menamainya "calcium" dari bahasa Latin "calx" yang berarti "kapur" atau "batu kapur". Simbol "Ca" adalah singkat dari nama itu.' },
            { year: 'Warisan', title: 'Tulang, Gigi, dan Otot', body: 'Tubuh manusia mengandung sekitar 1 kg kalsium — hampir semuanya dalam tulang dan gigi dalam bentuk hidroksiapatit (Ca₁₀(PO₄)₆(OH)₂). Ion Ca²⁺ juga berperan sebagai kurir dalam sel: kontraksi otot, termasuk detak jantung, dikendalikan oleh sinyal kalsium.' },
        ],
    },

    // ── Sc — Scandium ─────────────────────────────────────────────────────
    {
        sym: 'Sc',
        name: 'Lars Fredrik Nilson',
        born: '1840', died: '1899',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Lars_Fredrik_Nilson_portrait.jpg/440px-Lars_Fredrik_Nilson_portrait.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Lars_Fredrik_Nilson',
        shortBio: 'Kimiawan Swedia yang menemukan skandium pada 1879 dalam mineral gadolinit dan euxenit — tepat mengisi "slot kosong" yang diprediksi Mendeleev bernama "eka-boron" pada 1871.',
        discoveryStory: [
            { year: '1871', title: 'Mendeleev Memprediksinya', body: 'Dmitri Mendeleev dalam tabel periodiknya (1871) meninggalkan slot kosong untuk elemen yang belum dikenal di antara kalsium dan titanium. Ia menamai elemen hipotetis ini "eka-boron" dan memprediksi sifat-sifatnya dengan detail yang luar biasa.' },
            { year: '1879', title: 'Nilson Menemukannya', body: 'Lars Nilson, menganalisis mineral langka gadolinit dan euxenit dari Skandinavia, memisahkan elemen baru dari campuran oksida tanah jarang. Ia menamakannya "skandium" dari "Scandinavia" — tanah tempat mineralnya ditemukan.' },
            { year: '1879', title: 'Mendeleev Terbukti Benar', body: 'Sifat-sifat skandium yang diukur Nilson hampir persis cocok dengan prediksi Mendeleev delapan tahun sebelumnya. Ini menjadi salah satu bukti terkuat para ilmuwan bahwa tabel periodik Mendeleev benar-benar mencerminkan tatanan alam.' },
            { year: 'Warisan', title: 'Logam yang Langka tapi Kuat', body: 'Skandium sangat langka dan mahal, tapi kekuatan dan bobotnya yang ringan membuatnya berharga dalam paduan aluminium-skandium untuk rangka pesawat militer, kendaraan luar angkasa, dan peralatan olahraga premium. Rusia adalah produsen utama skandium dunia.' },
        ],
    },

    // ── Ti — Titanium ─────────────────────────────────────────────────────
    {
        sym: 'Ti',
        name: 'William Gregor & M.H. Klaproth',
        born: '1761 / 1743', died: '1817 / 1817',
        nationality: '🇬🇧 Inggris / 🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/600px_photo_of_titanium_crystals.jpg/440px-600px_photo_of_titanium_crystals.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Titanium',
        shortBio: 'Titanium ditemukan dua kali secara independen: pertama oleh pendeta Inggris William Gregor pada 1791, kemudian diidentifikasi ulang oleh Klaproth pada 1795 yang memberinya nama "titanium".',
        discoveryStory: [
            { year: '1791', title: 'Pasir Hitam di Cornwall', body: 'William Gregor, pendeta sekaligus amatir mineralogi di Cornwall, Inggris, menganalisis pasir hitam magnetis (menaccanit) dari sungai setempat. Ia mengekstrak oksida hitam yang tidak dikenalnya — ia menduga itu elemen baru tapi tidak yakin.' },
            { year: '1795', title: 'Klaproth Memberinya Nama', body: 'Martin Klaproth di Berlin menganalisis mineral rutil dan menemukan oksida yang sama. Ia mendeklarasikan elemen baru dan menamainya "titanium" dari para Titan dalam mitologi Yunani — anak-anak bumi dan langit yang luar biasa kuat.' },
            { year: '1910', title: 'Matthew Hunter Mengisolasi Logamnya', body: 'Titanium logam murni baru berhasil diisolasi oleh Matthew Hunter pada 1910 — lebih dari 100 tahun setelah penemuannya. Proses reduksi titanium tetraklorida dengan natrium dalam tekanan tinggi menghasilkan logam titanium murni pertama.' },
            { year: 'Warisan', title: 'Logam Dewa', body: 'Titanium memiliki rasio kekuatan-terhadap-berat terbaik di antara semua logam murni. Tahan terhadap korosi bahkan di air laut dan asam. Biokompatibel — tubuh tidak menolaknya. Digunakan di implan gigi, sendi buatan, rangka pesawat tempur, dan roket. Pesawat SR-71 Blackbird — jet tercepat yang pernah dibuat — 85% terbuat dari titanium.' },
        ],
    },

    // ── V — Vanadium ──────────────────────────────────────────────────────
    {
        sym: 'V',
        name: 'Nils Gabriel Sefström',
        born: '1787', died: '1845',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Vanadium_etched.jpg/440px-Vanadium_etched.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Nils_Gabriel_Sefstr%C3%B6m',
        shortBio: 'Vanadium ditemukan dua kali: pertama oleh Andrés Manuel del Río (Meksiko, 1801) yang kemudian menarik kembali klaimnya, lalu ditemukan kembali oleh Sefström pada 1831.',
        discoveryStory: [
            { year: '1801', title: 'Del Río Menemukannya, Lalu Ragu', body: 'Andrés Manuel del Río, mineralogis Meksiko, menemukan elemen baru dalam mineral timbal cokelat (vanadinit) dan menamainya "erythronium". Tapi ketika kimiawan Prancis memberitahunya bahwa itu hanya kromium yang tidak murni, del Río percaya dan menarik klaimnya. Ia salah mempercayai mereka.' },
            { year: '1830', title: 'Sefström di Swedia', body: 'Nils Gabriel Sefström menganalisis besi dari tambang Taberg, Swedia, dan menemukan elemen baru yang sama dalam besi kasarnya. Ia menamakannya "vanadium" dari dewi kecantikan Skandinavia "Vanadís" (Freyja), karena senyawa vanadiumnya menghasilkan warna-warna cantik yang beragam.' },
            { year: '1831', title: 'Wöhler Mengkonfirmasi: Del Río Duluan', body: 'Friedrich Wöhler menganalisis mineral del Río dan mengkonfirmasi: itu memang elemen yang sama dengan vanadium Sefström. Del Río sebenarnya adalah penemu pertama, 30 tahun sebelumnya — tapi ia sendiri yang membatalkan klaimnya.' },
            { year: 'Warisan', title: 'Baja Kuat untuk Mobil', body: 'Vanadium digunakan terutama sebagai paduan dalam baja vanadium — jauh lebih kuat dan tangguh dari baja biasa. Henry Ford sangat terkesan dengan baja vanadium yang ia temukan di sebuah mobil balap Prancis pada 1905, sehingga ia menggunakan baja vanadium untuk seluruh rangka Model T. Vanadium juga digunakan dalam baterai aliran vanadium untuk penyimpanan energi grid-scale.' },
        ],
    },

    // ── Cr — Chromium ─────────────────────────────────────────────────────
    {
        sym: 'Cr',
        name: 'Louis-Nicolas Vauquelin',
        born: '1763', died: '1829',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Louis_Nicolas_Vauquelin.jpg/440px-Louis_Nicolas_Vauquelin.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Louis_Nicolas_Vauquelin',
        shortBio: 'Vauquelin menemukan kromium pada 1797 saat menganalisis mineral krokosite merah dari Siberia. Senyawa kromiumnya menghasilkan spektrum warna yang menakjubkan — dari merah, kuning, hijau, hingga oranye.',
        discoveryStory: [
            { year: '1761', title: 'Mineral Merah dari Siberia', body: 'Mineral merah terang bernama "timbal merah Siberia" (krokosite, PbCrO₄) dikirim dari tambang Ural ke laboratorium-laboratorium Eropa. Warnanya yang sangat mencolok menarik perhatian para kimiawan — apa yang menyebabkan warna semerah itu?' },
            { year: '1797', title: 'Vauquelin Menganalisisnya', body: 'Louis Vauquelin melarutkan mineral merah dalam asam dan menemukan senyawa-senyawa baru dengan warna spektakuler. Ia memisahkan "asam kromat" yang baru — dan kemudian mereduksinya dengan arang untuk mendapatkan logam baru yang ia namakan "chrome" dari bahasa Yunani "chroma" (warna).' },
            { year: '1798', title: 'Mengapa Rubi Merah dan Zamrud Hijau?', body: 'Vauquelin juga membuktikan bahwa jejak kromium adalah yang membuat rubi berwarna merah dan zamrud berwarna hijau — padahal keduanya mengandung elemen yang sama! Perbedaan warna hanya dari cara atom kromium terikat dalam kristal yang berbeda.' },
            { year: 'Warisan', title: 'Kilap Permanen di Baja Tahan Karat', body: 'Baja tahan karat (stainless steel) mengandung minimal 10,5% kromium. Kromium membentuk lapisan oksida tipis yang tak terlihat di permukaan baja — lapisan inilah yang mencegah korosi. Knalpot motor yang mengkilap, peralatan dapur, dan pisau bedah semuanya bergantung pada sifat ini.' },
        ],
    },

    // ── Co — Cobalt ───────────────────────────────────────────────────────
    {
        sym: 'Co',
        name: 'Georg Brandt',
        born: '1694', died: '1768',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kobalt_Eigenschaften.jpg/440px-Kobalt_Eigenschaften.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Georg_Brandt',
        shortBio: 'Kimiawan Swedia yang menemukan kobalt pada 1735 — elemen pertama yang ditemukan sejak zaman kuno (setelah bismut, yang ditemukan sekitar 1400-an). Sebelum Brandt, para ahli percaya biru kobalt dalam kaca berasal dari bismut.',
        discoveryStory: [
            { year: '~1000 SM', title: 'Biru dari Mineral Misterius', body: 'Orang Mesir kuno, Persia, dan China menggunakan mineral kobalt untuk memberi warna biru pada kaca dan keramik. Tapi mereka tidak tahu mengapa — mineral "kobold" (dari kepercayaan Jerman tentang roh jahat tambang) menghasilkan biru yang cantik sekaligus meracuni penambang.' },
            { year: '1735', title: 'Brandt Membuktikannya Elemen', body: 'Georg Brandt menganalisis mineral smaltit dan kobaltit dari tambang perak Jerman secara sistematis. Ia berhasil mengisolasi logam baru yang tidak bisa direduksi lebih lanjut — dan membuktikan bahwa warna biru kaca berasal dari elemen ini, bukan dari bismut seperti yang dikira sebelumnya.' },
            { year: '1742', title: '"Kobalt" dari "Kobold"', body: 'Nama "cobalt" berasal dari "kobold" — makhluk jahat dalam folklor pertambangan Jerman. Para penambang menyebut mineral kobalt sebagai "kobold" karena mineral itu meracuni mereka dan tidak menghasilkan perak meski terlihat mirip bijih perak.' },
            { year: 'Warisan', title: 'Biru, Magnet, dan Baterai', body: 'Kobalt hari ini paling banyak digunakan dalam baterai lithium-ion (LiCoO₂ adalah katoda utama) — yang berarti setiap smartphone dan kendaraan listrik mengandung kobalt. Selain itu, kobalt-60 adalah isotop radioaktif yang digunakan dalam radioterapi kanker. Dan biru kobalt masih digunakan sebagai pigmen keramik premium.' },
        ],
    },

    // ── Ni — Nickel ───────────────────────────────────────────────────────
    {
        sym: 'Ni',
        name: 'Axel Fredrik Cronstedt',
        born: '1722', died: '1765',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Axel_Cronstedt.jpg/440px-Axel_Cronstedt.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Axel_Fredrik_Cronstedt',
        shortBio: 'Mineralogis Swedia yang menemukan nikel pada 1751 dari mineral kupfernikel (NiAs) — mineral yang telah lama membuat frustrasi penambang Jerman karena tampak seperti tembaga tapi tidak menghasilkan tembaga.',
        discoveryStory: [
            { year: 'Abad ke-17', title: '"Tembaga Palsu" yang Meresahkan', body: 'Para penambang Jerman menemukan mineral yang tampak seperti bijih tembaga (kupfernikel, yang berarti "tembaga Old Nick/Iblis"). Tapi ketika dilebur, ia tidak menghasilkan tembaga sama sekali. Para penambang mengira roh jahat telah merasuki mineral itu.' },
            { year: '1751', title: 'Cronstedt Menemukan Logam Baru', body: 'Axel Cronstedt menganalisis kupfernikel dan berhasil mengisolasi logam abu-abu putih baru. Ia membuktikan bahwa itu bukan tembaga sama sekali — tapi elemen tersendiri. Ia menamainya "nickel" dari "kupfernikel", singkatan dari nama setan tambang.' },
            { year: '1775', title: 'Bergman Memurnikannya', body: 'Torbern Bergman (Swedia) berhasil menghasilkan nikel yang lebih murni dan mengkarakterisasi sifat-sifatnya lebih lengkap, mengkonfirmasi bahwa nikel memang elemen terpisah dari kobalt dan tembaga.' },
            { year: 'Warisan', title: 'Baja Anti Karat dan Uang Koin', body: 'Nikel digunakan terutama dalam industri baja — baja nikel jauh lebih tahan karat, kuat, dan tahan suhu tinggi. Superalloy berbasis nikel digunakan dalam turbin jet dan mesin roket yang beroperasi pada suhu 1.000°C ke atas. Dan koin "nikel" Amerika Serikat mengandung 25% nikel dan 75% tembaga — meski namanya nikel.' },
        ],
    },

    // ── Zn — Zinc ─────────────────────────────────────────────────────────
    {
        sym: 'Zn',
        name: 'Andreas Sigismund Marggraf',
        born: '1709', died: '1782',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Zinc_fragment_sublimed_and_1cm3_cube.jpg/440px-Zinc_fragment_sublimed_and_1cm3_cube.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Andreas_Sigismund_Marggraf',
        shortBio: 'Meski seng telah digunakan ribuan tahun dalam paduan perunggu dan kuningan, Marggraf adalah yang pertama mengisolasi seng metalik murni di Eropa pada 1746 dan mengidentifikasinya sebagai elemen tersendiri.',
        discoveryStory: [
            { year: '~1000 SM', title: 'Kuningan Kuno', body: 'Kuningan (paduan tembaga-seng) telah dibuat manusia sejak ribuan tahun sebelum Masehi di India, China, dan Timur Tengah — meski mereka tidak mengenal "seng" sebagai elemen. Mereka mencampurkan bijih seng (kalamina) dengan tembaga, dan hasilnya adalah kuningan emas tanpa mereka tahu mengapa.' },
            { year: '13–16 M', title: 'India Memproduksi Seng Murni Lebih Dulu', body: 'India pada abad ke-13 telah memproduksi seng logam murni secara industri di tambang Zawar, Rajasthan. Teknologi ini tidak menyebar ke Eropa selama berabad-abad.' },
            { year: '1746', title: 'Marggraf di Eropa', body: 'Andreas Sigismund Marggraf secara sistematis mendestilasi kalamina (seng karbonat) dengan arang dalam wadah tertutup. Seng menguap kemudian mengembun menjadi logam padat di bagian atas — logam abu-abu kebiruan yang dikenalnya sebagai elemen baru.' },
            { year: 'Warisan', title: 'Galvanisasi dan Atap Seng', body: 'Seng digunakan terutama untuk galvanisasi: melapisi besi/baja dengan seng untuk mencegah korosi. Pipa air, baut, pagar, dan atap baja galvanis semuanya menggunakan lapisan seng tipis. Seng juga kofaktor penting lebih dari 300 enzim dalam tubuh, termasuk enzim yang membaca DNA.' },
        ],
    },

    // ── Ga — Gallium ──────────────────────────────────────────────────────
    {
        sym: 'Ga',
        name: 'Paul Émile Lecoq de Boisbaudran',
        born: '1838', died: '1912',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lecoq_de_Boisbaudran.jpg/440px-Lecoq_de_Boisbaudran.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Paul_%C3%89mile_Lecoq_de_Boisbaudran',
        shortBio: 'Kimiawan Prancis yang menemukan galium pada 1875 menggunakan spektroskopi — tepat mengisi "eka-aluminium" yang diprediksi Mendeleev. Penemuan ini menjadi salah satu bukti paling dramatis kebenaran tabel periodik.',
        discoveryStory: [
            { year: '1871', title: 'Mendeleev Memprediksi "Eka-Aluminium"', body: 'Mendeleev meninggalkan slot kosong di bawah aluminium dan memprediksi sifat elemen yang belum ada: massa atom ~68, titik leleh rendah, densitas ~5,9 g/cm³. Ia bahkan memprediksi bahwa elemen itu akan ditemukan dalam bijih seng.' },
            { year: '1875', title: 'Garis Biru yang Tidak Dikenal', body: 'Lecoq de Boisbaudran menggunakan spektroskopi — analisis garis warna cahaya yang dipancarkan elemen saat dipanaskan — untuk menganalisis bijih seng dari Pyrenees. Ia melihat dua garis biru yang tidak cocok dengan elemen manapun yang diketahui.' },
            { year: '1875', title: 'Galium Murni', body: 'Melalui elektrolisis berulang, Lecoq berhasil mengisolasi some gram galium murni — logam biru-putih dengan titik leleh 29,8°C, hampir tepat pada suhu tubuh. Galium meleleh di telapak tangan. Ia menamainya "gallium" dari nama Latin Prancis, "Gallia".' },
            { year: '1876', title: 'Mendeleev Bersorak', body: 'Ketika Mendeleev membaca sifat galium yang diukur Lecoq, ia tercengang: densitasnya cocok (5,91 g/cm³, prediksi 5,9), sifatnya cocok, perilakunya cocok. Ini bukan kebetulan — tabel periodik mencerminkan tatanan alam yang sesungguhnya.' },
            { year: 'Warisan', title: 'Layar HP yang Kamu Sentuh', body: 'Galium arsenida (GaAs) dan galium nitrida (GaN) adalah semikonduktor yang digunakan dalam LED, laser, dan chip frekuensi radio. Layar OLED smartphone menggunakan senyawa galium. Dan karena titik lelehnya mendekati suhu kamar, galium digunakan dalam termometer dan pendingin cair premium untuk PC gaming.' },
        ],
    },

    // ── Ge — Germanium ────────────────────────────────────────────────────
    {
        sym: 'Ge',
        name: 'Clemens Winkler',
        born: '1838', died: '1904',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Clemens_Winkler.jpg/440px-Clemens_Winkler.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Clemens_Winkler',
        shortBio: 'Kimiawan Jerman yang menemukan germanium pada 1886 dalam mineral argyrodit — tepat mengisi "eka-silikon" yang diprediksi Mendeleev 15 tahun sebelumnya dengan akurasi yang mengejutkan.',
        discoveryStory: [
            { year: '1871', title: 'Mendeleev Memprediksi "Eka-Silikon"', body: 'Mendeleev memprediksi elemen di bawah silikon dengan massa atom 72, densitas 5,5 g/cm³, titik leleh tinggi, dan yang akan membentuk oksida GeO₂ dengan densitas 4,7. Prediksi ini sangat spesifik untuk sesuatu yang belum pernah dilihat.' },
            { year: '1885', title: 'Mineral Baru dari Tambang Perak', body: 'Penambang di Freiberg, Jerman, menemukan mineral baru yang tidak biasa dalam bijih perak. Mereka menamakannya "argyrodit" dan mengirimnya ke laboratorium untuk dianalisis.' },
            { year: '1886', title: 'Winkler Menemukan Elemen Baru', body: 'Clemens Winkler menganalisis argyrodit dan menemukan bahwa komposisinya tidak cocok jika hanya mengandung elemen yang dikenal. Ada sesuatu yang hilang — sekitar 7% dari massa mineral tidak bisa dijelaskan. Setelah kerja keras, ia mengisolasi logam baru dan menamakannya "germanium" dari "Germania" (Jerman).' },
            { year: '1886', title: 'Cocok Sempurna', body: 'Sifat germanium: massa atom 72,6 (prediksi 72), densitas 5,35 (prediksi 5,5), GeO₂ densitas 4,70 (prediksi 4,7). Cocok hampir sempurna. Ini membuktikan bahwa tabel periodik bukan hanya alat klasifikasi — tapi hukum alam yang sesungguhnya.' },
            { year: 'Warisan', title: 'Transistor Pertama', body: 'Transistor pertama di dunia (1947, Bell Labs) dibuat dari germanium. Meski kemudian digantikan silikon karena biaya, germanium masih digunakan dalam detektor inframerah (kamera termografi militer dan medis), panel surya efisiensi tinggi, dan serat optik.' },
        ],
    },

    // ── As — Arsenic ──────────────────────────────────────────────────────
    {
        sym: 'As',
        name: 'Albertus Magnus',
        born: '~1200', died: '1280',
        nationality: '🇩🇪 Jerman (Abad Pertengahan)',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Albertus_Magnus.jpg/440px-Albertus_Magnus.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Albertus_Magnus',
        shortBio: 'Teolog dan filsuf Jerman abad pertengahan yang pertama kali mendeskripsikan arsen secara ilmiah pada ~1250. Arsen telah digunakan ribuan tahun sebelumnya sebagai racun dan pigmen.',
        discoveryStory: [
            { year: '~3000 SM', title: 'Racun Para Raja', body: 'Senyawa arsen — terutama arsen trioksida putih (As₂O₃) — telah digunakan sebagai racun sejak peradaban kuno. Tidak berbau, tidak berasa, gejala keracunanya mirip sakit perut biasa. Disebut "Raja Racun" di dunia Renaissance karena begitu sering digunakan untuk pembunuhan politik.' },
            { year: '~1250', title: 'Albertus Magnus Mengisolasi Logamnya', body: 'Albertus Magnus, teolog dan alkemis Jerman yang terkenal karena keluasan pengetahuannya, memperoleh arsen metalik untuk pertama kalinya dengan memanaskan campuran arsenik sulfida dan sabun. Ia mendeskripsikannya dalam tulisannya sebagai logam abu-abu yang unik.' },
            { year: '1649', title: 'Schroeder Mendokumentasikannya', body: 'Johann Schroeder menerbitkan dua cara memproduksi arsen metalik — memanaskan arsen trioksida dengan arang, atau memanaskannya dengan sabun kalium. Dokumentasi ini yang membuat banyak sejarawan mengakreditkan Schroeder sebagai penemu modern.' },
            { year: '1836', title: 'Uji Marsh: Mendeteksi Pembunuhan', body: 'James Marsh mengembangkan tes kimia yang bisa mendeteksi arsen dalam jaringan tubuh dengan akurasi tinggi. Tes Marsh menjadi dasar toksikologi forensik modern — dan mulai mengungkap banyak kasus pembunuhan yang sebelumnya lolos dari hukum.' },
            { year: 'Warisan', title: 'Dari Racun ke Obat Kanker', body: 'Arsen trioksida kini digunakan sebagai obat kemoterapi untuk leukemia akut promielositik (APL) — salah satu kanker darah paling mematikan — dengan tingkat remisi yang tinggi. Racun yang selama ribuan tahun membunuh manusia kini menyembuhkan mereka.' },
        ],
    },

    // ── Se — Selenium ─────────────────────────────────────────────────────
    {
        sym: 'Se',
        name: 'Jöns Jacob Berzelius',
        born: '1779', died: '1848',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/J%C3%B6ns_Jacob_Berzelius_-_h%C3%A4lft.jpg/440px-J%C3%B6ns_Jacob_Berzelius_-_h%C3%A4lft.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/J%C3%B6ns_Jacob_Berzelius',
        shortBio: 'Berzelius menemukan selenium pada 1817 sebagai kontaminan dalam asam sulfat dari pabrik di Swedia. Awalnya dikira telurium, tapi Berzelius membuktikannya elemen baru dan menamainya dari dewi Bulan.',
        discoveryStory: [
            { year: '1817', title: 'Endapan dari Pabrik Asam', body: 'Berzelius dan kawannya Johann Gahn menganalisis endapan merah-cokelat yang terbentuk dalam kamar timbal pabrik asam sulfat di Gripsholm, Swedia. Aroma yang sangat khas — seperti lobak busuk — menandakan ada sesuatu yang tidak biasa.' },
            { year: '1817', title: 'Bukan Telurium', body: 'Berzelius awalnya menduga endapan itu adalah telurium — elemen yang baru ditemukan beberapa tahun sebelumnya. Tapi analisis lebih lanjut menunjukkan perbedaan mendasar dalam sifat kimianya. Ini adalah elemen baru.' },
            { year: '1817', title: 'Selenion: Dari Bulan', body: 'Karena telurium (ditemukan sebelumnya) dinamai dari bumi "Tellus", Berzelius menamakan elemen barunya "selenium" dari "Selene" — dewi Bulan dalam mitologi Yunani. Seperti bulan yang berpasangan dengan bumi, selenium berpasangan dengan telurium.' },
            { year: 'Warisan', title: 'Sel Surya dan Nutrisi', body: 'Selenium memiliki sifat fotokonduktif — konduktivitas listriknya meningkat saat terkena cahaya. Sel surya selenium pertama dibuat pada 1883. Selenium juga nutrisi esensial — selenosistein adalah asam amino ke-21 yang digunakan pada enzim antioksidan penting (glutathion peroksidase). Kekurangan selenium menyebabkan penyakit Keshan (kardiomiopati endemik di China).' },
        ],
    },

    // ── Br — Bromine ──────────────────────────────────────────────────────
    {
        sym: 'Br',
        name: 'Antoine Jérôme Balard',
        born: '1802', died: '1876',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Balard.jpg/440px-Balard.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Antoine_J%C3%A9r%C3%B4me_Balard',
        shortBio: 'Kimiawan Prancis muda yang menemukan brom pada 1826 dari air laut — pada usia 24 tahun. Brom adalah salah satu dari dua elemen non-logam yang berwujud cair pada suhu kamar.',
        discoveryStory: [
            { year: '1825', title: 'Air Laut yang Menyimpan Rahasia', body: 'Antoine Balard, 23 tahun, bekerja di Montpellier menganalisis air laut dari kolam garam. Ia menguapkan air laut dan mengolah residunya dengan klorin — menghasilkan cairan cokelat kemerahan dengan bau tajam yang sangat tidak menyenangkan.' },
            { year: '1826', title: 'Cairan Berat yang Berasap', body: 'Balard mengkarakterisasi cairan baru itu: lebih berat dari air, menguap lambat menghasilkan uap oranye-merah yang pedas, melarutkan iodium, bereaksi keras dengan logam. Ini bukan klorin, bukan iodium — ini elemen baru.' },
            { year: '1826', title: '"Muridin" atau "Brom"?', body: 'Balard mengusulkan nama "muridin" dari kata Latin untuk air laut. Tapi Akademi Ilmu Prancis menolak dan menggantinya dengan "brome" dari bahasa Yunani "bromos" (bau busuk) — mengacu pada bau khasnya yang sangat menyengat.' },
            { year: 'Warisan', title: 'Api dan Obat', body: 'Brom digunakan dalam retardan api (flame retardants) — plastik dan tekstil dengan kandungan bromin 10 kali lebih sulit terbakar. Juga digunakan dalam obat-obatan, pestisida, dan fotografi film analog (AgBr). Laut adalah sumber utama brom di dunia — konsentrasinya 65 ppm dalam air laut.' },
        ],
    },

    // ── Kr — Krypton ──────────────────────────────────────────────────────
    {
        sym: 'Kr',
        name: 'William Ramsay & Morris Travers',
        born: '1852 / 1872', died: '1916 / 1961',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sir_William_Ramsay_%28Nobel_1904%29.jpg/440px-Sir_William_Ramsay_%28Nobel_1904%29.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Krypton',
        shortBio: 'Kripton ditemukan Ramsay dan Travers pada 1898 — hanya beberapa hari selisih dengan penemuan neon dan xenon, semua dari fraksinasi udara cair yang sama.',
        discoveryStory: [
            { year: '1898', title: 'Fraksi Pertama Udara Cair', body: 'Setelah menemukan argon pada 1894, Ramsay mendapat sampel udara cair dan mulai memisahkan fraksinya. Pada Mei 1898, setelah menguapkan sebagian besar udara cair, tersisa fraksi yang lebih berat. Spektroskopi menunjukkan garis-garis baru yang tidak dikenal.' },
            { year: '1898', title: '"Tersembunyi"', body: 'Ramsay dan Travers menamainya "krypton" dari bahasa Yunani "kryptos" (tersembunyi) — karena begitu sulitnya memisahkan gas ini dari udara. Kripton hanya ada dalam 1 ppm dari atmosfer Bumi.' },
            { year: '1960', title: 'Meter dari Cahaya Kripton', body: 'Dari 1960 hingga 1983, definisi resmi satu meter adalah "1.650.763,73 panjang gelombang radiasi Kr-86" — karena garis emisi kripton sangat stabil dan dapat direproduksi di laboratorium manapun di dunia.' },
            { year: 'Warisan', title: 'Lampu Kripton dan Laser', body: 'Lampu halogen krypton menghasilkan cahaya yang lebih putih, lebih terang, dan lebih efisien daripada lampu pijar biasa. Laser kripton fluorida (KrF) digunakan dalam lithografi semikonduktor untuk mencetak sirkuit nano pada chip komputer. Dan kripton 85 adalah indikator kebocoran dalam tangki nuklir.' },
        ],
    },

    // ── Rb — Rubidium ─────────────────────────────────────────────────────
    {
        sym: 'Rb',
        name: 'Robert Bunsen & Gustav Kirchhoff',
        born: '1811 / 1824', died: '1899 / 1887',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bunsen_big.jpg/440px-Bunsen_big.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Rubidium',
        shortBio: 'Pasangan yang menemukan spektroskopi emisi dan menggunakannya untuk menemukan sesium dan rubidium pada 1860–1861. Bunsen-lah yang nama Bunsen burner (pembakar Bunsen) diambil.',
        discoveryStory: [
            { year: '1859', title: 'Senjata Baru: Spektroskopi', body: 'Robert Bunsen dan Gustav Kirchhoff mengembangkan spektroskopi — teknik menganalisis garis cahaya yang dipancarkan elemen saat dipanaskan. Setiap elemen punya "sidik jari" spektral yang unik. Ini merevolusi kimia analitik selamanya.' },
            { year: '1860', title: 'Sesium Dulu', body: 'Saat menganalisis air mineral dari Bad Dürkheim, Bunsen melihat dua garis biru yang tidak dikenal — elemen baru: sesium (dari bahasa Latin "caesius", biru langit). Sesium ditemukan sebelum rubidium.' },
            { year: '1861', title: 'Garis Merah Misterius', body: 'Kembali menganalisis air mineral, kali ini dari Sachsen, Bunsen dan Kirchhoff melihat dua garis merah baru. Elemen baru lagi. Mereka menamakannya "rubidium" dari bahasa Latin "rubidus" (merah tua) — mengacu pada warna garis spektralnya.' },
            { year: 'Warisan', title: 'Jam Atom Paling Akurat', body: 'Jam atom rubidium — menggunakan frekuensi transisi hiperfine atom Rb — adalah jam paling akurat yang praktis dan murah. Digunakan dalam GPS, jaringan telekomunikasi, dan sinkronisasi waktu global. Satu jam rubidium berupa akurat hingga 1 detik dalam 300 tahun.' },
        ],
    },

    // ── Sr — Strontium ────────────────────────────────────────────────────
    {
        sym: 'Sr',
        name: 'Adair Crawford & William Cruickshank',
        born: '1748 / 1745', died: '1795 / 1800',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Strontium_crystal_APS.jpg/440px-Strontium_crystal_APS.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Strontium',
        shortBio: 'Strontium diidentifikasi sebagai elemen baru pada 1790 dari mineral yang ditemukan di desa Strontian, Skotlandia — dan nama elemen itu diambil dari nama desa kecil tersebut.',
        discoveryStory: [
            { year: '1787', title: 'Mineral dari Desa Kecil Skotlandia', body: 'Di desa Strontian, Skotlandia, penambang menemukan mineral baru dalam tambang timbal yang disebut "strontianit". Mineral ini dikirim ke laboratorium-laboratorium untuk dianalisis.' },
            { year: '1790', title: 'Crawford Menemukan Elemen Baru', body: 'Adair Crawford menganalisis strontianit dan membuktikan bahwa ia tidak mengandung barium (seperti yang dikira sebelumnya) tapi elemen lain. William Cruickshank mengkonfirmasi temuan ini. Elemen baru dinamai "strontium" dari nama desa tempat mineralnya ditemukan.' },
            { year: '1808', title: 'Davy Mengisolasinya', body: 'Seperti kalsium dan magnesium, strontium logam murni baru berhasil diisolasi oleh Humphry Davy pada 1808 menggunakan elektrolisis dibantu merkuri.' },
            { year: 'Warisan', title: 'Api Merah dan Bom Atom', body: 'Stronsium klorida menghasilkan nyala api merah yang sangat cerah — digunakan dalam kembang api merah dan suar darurat. Tapi yang paling penting: stronsium-90 adalah produk fisi nuklir radioaktif yang sangat berbahaya karena tubuh menyerapnya seperti kalsium dan menumpuknya di tulang, menyebabkan leukemia. Stronsium-90 menjadi salah satu kontaminan utama uji coba nuklir abad ke-20.' },
        ],
    },

    // ── Ag — Silver ───────────────────────────────────────────────────────
    {
        sym: 'Ag',
        name: 'Dikenal sejak Zaman Kuno',
        born: '~5000 SM', died: '—',
        nationality: '🌍 Anatolia & Persia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Silver_crystal.jpg/440px-Silver_crystal.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Silver',
        shortBio: 'Perak telah diketahui dan digunakan manusia sejak ribuan tahun sebelum Masehi, ditemukan dalam keadaan murni di alam (native silver) dan mudah dipisahkan dari bijihnya. Simbol Ag dari bahasa Latin "argentum".',
        discoveryStory: [
            { year: '~5000 SM', title: 'Logam Bulan', body: 'Seperti emas, perak ditemukan dalam keadaan murni di alam — mengkilap putih seperti cahaya bulan. Peradaban kuno di Anatolia (Turki) dan Persia mulai menambang dan mengolah perak ribuan tahun sebelum Masehi. Alkemis kuno menghubungkan perak dengan bulan dan simbol ☽.' },
            { year: '~700 SM', title: 'Koin Perak: Uang Dunia', body: 'Koin perak pertama dicetak di Lydia (kini Turki) sekitar 700 SM. Perak menjadi standar nilai ekonomi di seluruh dunia kuno — Romawi, Yunani, Persia, China. Kata "money" (uang) dalam banyak bahasa Eropa berasal dari "Moneta", dewi Romawi yang kuil-nya digunakan untuk mencetak koin.' },
            { year: '~1500', title: 'Potosí: Gunung Perak', body: 'Penemuan tambang perak Cerro Potosí di Bolivia pada 1545 mengubah ekonomi dunia. Dari 1545 sampai 1800, Potosí menghasilkan lebih dari 40.000 ton perak — menyebabkan inflasi besar di Eropa (Revolusi Harga) karena terlalu banyak perak memasuki sistem moneter.' },
            { year: 'Warisan', title: 'Antibakteri dan Fotografi', body: 'Sebelum antibiotik, perak digunakan untuk membunuh bakteri — peralatan perak di rumah bangsawan membantu mencegah infeksi. Fotografi analog (1800-an hingga 2000-an) sepenuhnya berbasis pada senyawa perak halida yang sensitif cahaya. Hari ini, nano-partikel perak digunakan dalam pembalut luka, filter air, dan tekstil antimikroba.' },
        ],
    },

    // ── Sn — Tin ──────────────────────────────────────────────────────────
    {
        sym: 'Sn',
        name: 'Dikenal sejak Zaman Kuno',
        born: '~3500 SM', died: '—',
        nationality: '🌍 Timur Tengah & Eropa',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Tin_standing.jpg/440px-Tin_standing.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Tin',
        shortBio: 'Timah putih (Sn, dari "stannum" Latin) dikenal sejak ribuan tahun — komponen kunci pembuatan perunggu (campuran tembaga-timah). Zaman Perunggu berlangsung 3000–1200 SM dan bergantung sepenuhnya pada ketersediaan timah.',
        discoveryStory: [
            { year: '~3500 SM', title: 'Kunci Zaman Perunggu', body: 'Manusia menemukan bahwa menambahkan timah ke tembaga menghasilkan perunggu — paduan yang jauh lebih keras dan lebih tahan lama dari tembaga murni. Ini memulai Zaman Perunggu yang berlangsung hampir 2.000 tahun. Peradaban yang menguasai timah menguasai teknologi militer dan pertanian.' },
            { year: '~600 SM', title: 'Rute Timah Kuno', body: 'Sumber timah dunia kuno yang utama adalah Cornwall (Inggris) dan Semenanjung Iberia. Pedagang Fenisia melakukan perjalanan jauh ke Cornwall untuk membeli timah dan menjualnya ke seluruh Mediterania. Rute timah ini adalah salah satu jalur perdagangan tertua di dunia.' },
            { year: '~200 M', title: 'Timah Romawi', body: 'Romawi menggunakan timah secara ekstensif — untuk pipa air, wadah anggur, dan peralatan memasak. Ini adalah salah satu ironi sejarah yang menyedihkan: keracunan timbal (Pb) yang masuk dari pipa timah-timbal dan wadah anggur mungkin berkontribusi pada kemerosotan Kekaisaran Romawi.' },
            { year: 'Warisan', title: 'Kaleng dan Solder', body: 'Kaleng makanan adalah baja dilapisi timah tipis (tin-plated steel) — timah mencegah korosi dan aman untuk makanan. Solder (paduan timah-timbal atau timah-perak) digunakan untuk menyambung komponen elektronik. Hampir semua PCB (rangkaian elektronik) di dunia disatukan menggunakan solder berbasis timah.' },
        ],
    },

    // ── Sb — Antimony ─────────────────────────────────────────────────────
    {
        sym: 'Sb',
        name: 'Dikenal sejak Zaman Kuno',
        born: '~3000 SM', died: '—',
        nationality: '🌍 Mesir & Timur Tengah',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Antimony-4.jpg/440px-Antimony-4.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Antimony',
        shortBio: 'Antimon dikenal manusia kuno sebagai stibnit (Sb₂S₃) — digunakan Mesir Kuno sebagai eyeliner hitam dan kosmetik. Simbol "Sb" berasal dari "stibium" Latin. Logam antimoninya diisolasi sekitar abad ke-15.',
        discoveryStory: [
            { year: '~3000 SM', title: 'Mata Hitam Ratu Mesir', body: 'Bubuk hitam stibnit (Sb₂S₃, antimon sulfida) digunakan perempuan Mesir Kuno sebagai eyeliner — nama Arab-nya "kohl" menjadi dasar kata "alcohol" melalui alkimia Arab. Cleopatra kemungkinan menggunakan antimon.' },
            { year: '~1450', title: 'Logam yang Sulit Dipahami', body: 'Alkemis abad pertengahan mulai mengisolasi antimon logam murni, meski proses dan penemuannya tidak didokumentasikan dengan jelas. Buku "Currus Triumphalis Antimonii" (1604) oleh Basil Valentine (kemungkinan nama pena) menjadi referensi awal.' },
            { year: '1707', title: 'Nicolas Lémery: Deskripsi Ilmiah', body: 'Nicolas Lémery memberikan deskripsi kimia sistematis pertama tentang antimon dalam bukunya tentang kimia. Ia menjelaskan cara mendapatkan logam dari mineralnya dan sifat-sifatnya.' },
            { year: 'Warisan', title: 'Dari Kosmetik ke Semikonduktor', body: 'Antimon digunakan dalam paduan dengan timbal untuk baterai timbal-asam (lebih keras dari timbal murni). Antimon trioksida adalah retardan api utama dalam plastik. Antimon telurida digunakan dalam modul termoelektrik dan sel surya. Simbol kuno ♁ melambangkan antimon dalam alkimia.' },
        ],
    },

    // ── Te — Tellurium ────────────────────────────────────────────────────
    {
        sym: 'Te',
        name: 'Franz-Joseph Müller von Reichenstein',
        born: '1742', died: '1825',
        nationality: '🇦🇹 Austria',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Tellurium2.jpg/440px-Tellurium2.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Franz-Joseph_M%C3%BCller_von_Reichenstein',
        shortBio: 'Mineralogis Austria yang menemukan telurium pada 1782 dari bijih emas di Transylvania — meski Klaproth yang mengkonfirmasi dan memberinya nama dari "Tellus" (Bumi).',
        discoveryStory: [
            { year: '1782', title: 'Emas yang Tidak Biasa', body: 'Müller von Reichenstein menganalisis bijih emas dari Zlatna, Transylvania (kini Romania) yang tidak biasa — terlalu ringan untuk emas murni. Ia menemukan logam putih mengkilap baru yang berasosiasi dengan emas. Ia menyebutnya "metallum problematicum".' },
            { year: '1783–1796', title: 'Bertahun-tahun Diperdebatkan', body: 'Kimiawan lain mengklaim bahwa "logam misterius" Müller hanyalah antimon atau bismut. Müller yakin ia menemukan sesuatu yang baru tapi tidak bisa membuktikannya secara meyakinkan.' },
            { year: '1798', title: 'Klaproth Mengkonfirmasi dan Menamai', body: 'Martin Klaproth menganalisis sampel Müller dan mengkonfirmasi: ini elemen baru. Ia menamainya "tellurium" dari bahasa Latin "Tellus" (Bumi) — dan mengakui Müller sebagai penemu aslinya.' },
            { year: 'Warisan', title: 'Emas Telurida dan Panel Surya', body: 'Hampir semua emas di Transylvania ditemukan sebagai mineral telurida emas. Kadmium telurida (CdTe) adalah bahan panel surya film tipis yang paling efisien secara biaya — panel surya First Solar yang memasok ribuan megawatt listrik berbasis CdTe. Bismut telurida adalah material termoelektrik utama.' },
        ],
    },

    // ── I — Iodine ────────────────────────────────────────────────────────
    {
        sym: 'I',
        name: 'Bernard Courtois',
        born: '1777', died: '1838',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bernard_Courtois.jpg/440px-Bernard_Courtois.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Bernard_Courtois',
        shortBio: 'Pembuat sendawa Prancis yang menemukan iodin secara tidak sengaja pada 1811 ketika membuat kalium nitrat dari abu rumput laut untuk keperluan mesiu perang Napoleon.',
        discoveryStory: [
            { year: '1811', title: 'Asap Ungu yang Tidak Terduga', body: 'Bernard Courtois sedang mengekstrak kalium nitrat dari abu ganggang laut untuk membuat mesiu perang Napoleon. Ia menambahkan terlalu banyak asam sulfat ke larutan — dan tiba-tiba muncul awan uap ungu yang indah, yang mengembun menjadi kristal hitam mengkilap di dinding dingin.' },
            { year: '1812', title: 'Gay-Lussac dan Davy Menganalisisnya', body: 'Courtois, bukan ilmuwan terlatih, memberikan sampelnya ke dua kimiawan besar: Gay-Lussac di Paris dan Humphry Davy yang sedang mengunjungi Prancis. Keduanya mengkonfirmasi: ini elemen baru. Pertengkaran tentang siapa yang pertama mengklaimnya berlanjut bertahun-tahun.' },
            { year: '1813', title: '"Iode": Si Ungu', body: 'Gay-Lussac menamainya "iode" dari bahasa Yunani "ioeides" (ungu) — mengacu pada uapnya yang berwarna ungu indah. Dalam bahasa Inggris menjadi "iodine", dalam bahasa Indonesia "iodin".' },
            { year: 'Warisan', title: 'Garam Beryodium Menyelamatkan Jutaan', body: 'Kekurangan iodin menyebabkan gondok dan kretinisme (hambatan pertumbuhan otak pada bayi). Program iodisasi garam yang dimulai pada 1920-an — menambahkan sedikit kalium iodat ke garam dapur — telah menjadi salah satu intervensi kesehatan paling murah dan efektif dalam sejarah. Iodin-131 digunakan dalam pengobatan kanker tiroid.' },
        ],
    },

    // ── Xe — Xenon ────────────────────────────────────────────────────────
    {
        sym: 'Xe',
        name: 'William Ramsay & Morris Travers',
        born: '1852 / 1872', died: '1916 / 1961',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sir_William_Ramsay_%28Nobel_1904%29.jpg/440px-Sir_William_Ramsay_%28Nobel_1904%29.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Xenon',
        shortBio: 'Xenon ditemukan Ramsay dan Travers pada 1898 dari fraksi terberat udara cair — hanya beberapa minggu setelah kripton dan neon. "Gas asing" yang konon tidak bisa bereaksi, hingga Neil Bartlett membuktikan sebaliknya.',
        discoveryStory: [
            { year: '1898', title: 'Sisa yang Tersisa', body: 'Setelah memisahkan kripton dari udara cair, Ramsay dan Travers menguapkan sampel lebih jauh. Tersisa fraksi sangat kecil yang jauh lebih berat — spektroskopi menunjukkan garis-garis baru lagi. Elemen baru ketiga dalam waktu beberapa minggu.' },
            { year: '1898', title: '"Asing"', body: 'Mereka menamainya "xenon" dari bahasa Yunani "xenos" (asing, orang asing) — karena elemen ini sangat langka dan "tidak diundang" dalam udara. Xenon hanya ada dalam 87 ppb (bagian per miliar) di atmosfer.' },
            { year: '1962', title: 'Gas Mulia yang Bereaksi', body: 'Neil Bartlett, kimiawan Kanada, membuat senyawa xenon pertama: xenon tetrafluoroplatinate (XePtF₆). Ini menghancurkan dogma bahwa gas mulia tidak bisa bereaksi sama sekali. "Gas mulia" bukan berarti "tidak bisa bereaksi" — hanya sangat sulit.' },
            { year: 'Warisan', title: 'Anestesi dan Luar Angkasa', body: 'Xenon adalah anestesi yang sangat baik — tidak beracun, cepat hilang dari tubuh, tidak rusak ozon. Lampu xenon menghasilkan cahaya putih yang paling mirip sinar matahari — digunakan di bioskop IMAX dan headlight mobil premium. Mesin ion xenon mendorong wahana antariksa dengan efisiensi jauh lebih baik dari roket kimia biasa.' },
        ],
    },

    // ── Cs — Cesium ───────────────────────────────────────────────────────
    {
        sym: 'Cs',
        name: 'Robert Bunsen & Gustav Kirchhoff',
        born: '1811 / 1824', died: '1899 / 1887',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bunsen_big.jpg/440px-Bunsen_big.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Caesium',
        shortBio: 'Sesium, elemen logam alkali paling elektronegatif dan paling reaktif, ditemukan oleh Bunsen dan Kirchhoff pada 1860 menggunakan spektroskopi — elemen pertama yang ditemukan dengan metode ini.',
        discoveryStory: [
            { year: '1859', title: 'Teknik Baru yang Revolusioner', body: 'Bunsen dan Kirchhoff baru saja mengembangkan spektroskopi. Mereka mulai menganalisis sampel mineral dan air dengan teknik baru ini — mengidentifikasi elemen dari garis cahayanya.' },
            { year: '1860', title: 'Garis Biru yang Tidak Dikenal', body: 'Menganalisis 44.000 liter air mineral dari Dürkheim dengan menguapkan dan memanaskannya, mereka melihat dua garis biru yang tidak cocok dengan elemen manapun. Ini adalah elemen baru — elemen pertama yang ditemukan melalui spektroskopi.' },
            { year: '1860', title: '"Biru Langit"', body: 'Mereka menamainya "caesium" dari bahasa Latin "caesius" yang berarti biru langit — mengacu pada garis biru khas dalam spektrumnya. Untuk mengisolasi logamnya, mereka harus memproses ribuan liter air mineral.' },
            { year: 'Warisan', title: 'Jam Atom Paling Akurat di Dunia', body: 'Definisi resmi "satu detik" sejak 1967 adalah "9.192.631.770 osilasi radiasi atom sesium-133". Jam atom sesium adalah standar waktu tertinggi di dunia — lebih akurat dari satu detik dalam 300 juta tahun. GPS, internet, dan telekomunikasi global bergantung pada presisi ini.' },
        ],
    },

    // ── Ba — Barium ───────────────────────────────────────────────────────
    {
        sym: 'Ba',
        name: 'Humphry Davy',
        born: '1778', died: '1829',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Humphry_Davy_by_Henry_Howard_%281803%29.jpg/440px-Humphry_Davy_by_Henry_Howard_%281803%29.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Barium',
        shortBio: 'Barium diisolasi oleh Humphry Davy pada 1808 menggunakan elektrolisis — satu dari serangkaian penemuan revolusioner Davy menggunakan metode yang sama dalam periode 1807–1808.',
        discoveryStory: [
            { year: '1774', title: 'Scheele Menemukan Oksidasinya', body: 'Carl Wilhelm Scheele menganalisis mineral barit (BaSO₄) dan memisahkan oksida baru yang ia sebut "barytererde" (bumi yang berat) — karena barit jauh lebih berat dari mineral lain sejenisnya. "Barys" dalam bahasa Yunani berarti berat.' },
            { year: '1808', title: 'Davy Mengisolasi Logamnya', body: 'Humphry Davy menggunakan elektrolisis dibantu merkuri pada barium oksida lembab dan berhasil mendapatkan amalgam barium. Mendestilasi merkuri menghasilkan barium logam — logam putih perak yang sangat reaktif dengan air.' },
            { year: '1808', title: 'Penamaan: Barium', body: 'Nama "barium" diambil langsung dari "barys" (berat) — karena senyawa barium sangat berat. Simbol "Ba" mengikuti nama Latinnya.' },
            { year: 'Warisan', title: 'Foto Rontgen dari Dalam', body: 'Barium sulfat (BaSO₄) digunakan sebagai kontras dalam pemeriksaan X-ray saluran cerna dan CT scan — pasien minum "bubur barium" putih yang sangat opak terhadap sinar-X. Barium peroxide digunakan dalam kembang api hijau dan putih. Barium titanate adalah piezoelektrik penting dalam transduser ultrasonik.' },
        ],
    },

    // ── W — Tungsten ──────────────────────────────────────────────────────
    {
        sym: 'W',
        name: 'Juan José & Fausto Elhuyar',
        born: '1754 / 1755', died: '1796 / 1833',
        nationality: '🇪🇸 Spanyol (Basque)',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Wolfram_evaporated_crystals_and_1cm3_cube.jpg/440px-Wolfram_evaporated_crystals_and_1cm3_cube.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Tungsten',
        shortBio: 'Dua bersaudara kimiawan Basque yang mengisolasi tungsten murni pada 1783 dari mineral wolframit — mineral yang para penambang timah anggap sebagai "serigala" yang memakan timah dalam peleburan.',
        discoveryStory: [
            { year: '1781', title: 'Scheele Menemukan "Asam Baru"', body: 'Carl Wilhelm Scheele menganalisis mineral scheelite (CaWO₄) dan mengekstrak oksida asam baru yang ia sebut "tungstic acid" — dari bahasa Swedia "tung sten" yang berarti "batu berat".' },
            { year: '1783', title: 'Elhuyar Bersaudara Mengisolasi Logamnya', body: 'Juan dan Fausto d\'Elhuyar di Bergara, Spanyol, mereduksi "asam tungsten" dengan arang pada suhu tinggi dan mendapatkan logam baru. Mereka menamainya "wolfram" (dari mineral wolframit, dari kata Jerman "serigala-buih").' },
            { year: '1783', title: 'Tungsten atau Wolfram?', body: 'Nama "tungsten" digunakan di negara berbahasa Inggris dan Skandinavia. Nama "wolfram" digunakan di Jerman, Austria, dan banyak negara Eropa. Simbol resmi "W" diambil dari "Wolfram" — itulah mengapa W bukan T.' },
            { year: 'Warisan', title: 'Titik Leleh Tertinggi', body: 'Tungsten memiliki titik leleh tertinggi dari semua elemen: 3.422°C. Inilah mengapa filamen lampu pijar terbuat dari tungsten — bisa dipanaskan hingga putih berpijar tanpa meleleh. Juga digunakan dalam elektroda las, mata bor permanen, armor-piercing projectile militer, dan pelapis roket.' },
        ],
    },

    // ── Pt — Platinum ─────────────────────────────────────────────────────
    {
        sym: 'Pt',
        name: 'Antonio de Ulloa',
        born: '1716', died: '1795',
        nationality: '🇪🇸 Spanyol',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Antonio_de_Ulloa.jpg/440px-Antonio_de_Ulloa.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Antonio_de_Ulloa',
        shortBio: 'Perwira angkatan laut Spanyol yang pertama kali melaporkan platina secara ilmiah pada 1748 setelah menemukan logam putih aneh dalam tambang emas di Kolombia. Charles Wood juga menemukan platina secara independen pada 1741.',
        discoveryStory: [
            { year: '~1500', title: 'Penambang Peru Sudah Tahu', body: 'Penduduk asli Amerika Selatan telah menggunakan platina (dicampur dengan emas) untuk membuat perhiasan selama berabad-abad sebelum kedatangan Spanyol. Orang Spanyol menyebutnya "platina del Pinto" — "perak kecil dari Sungai Pinto" — karena mereka pikir itu perak yang tidak matang.' },
            { year: '1741 / 1748', title: 'Dua Penemu Independen', body: 'Charles Wood, metalurgis Inggris, membawa sampel platina ke Eropa dari Jamaica pada 1741. Antonio de Ulloa, perwira angkatan laut Spanyol yang bergabung dalam ekspedisi ilmiah ke Amerika Selatan, mendeskripsikan platina secara ilmiah pada 1748 setelah ditemukannya di tambang emas Kolombia.' },
            { year: '1803', title: 'Wollaston Memurnikannya', body: 'William Wollaston mengembangkan metode pemurnian platina menggunakan dissolusi asam dan reduksi ammonium platinochloride. Dalam prosesnya, ia juga menemukan dua elemen baru: paladium (1803) dan rhodium (1804).' },
            { year: 'Warisan', title: 'Katalis Sejati', body: 'Platina adalah katalis sempurna: ia mempercepat reaksi kimia tanpa ikut bereaksi. Konverter katalitik di knalpot mobil menggunakan platina untuk mengubah gas berbahaya (CO, NOₓ) menjadi CO₂ dan N₂. Sel bahan bakar hidrogen menggunakan platina sebagai katalis. Dan "standar kilogram" dari 1889 sampai 2019 adalah silinder platinum-iridium.' },
        ],
    },

    // ── Hg — Mercury ──────────────────────────────────────────────────────
    {
        sym: 'Hg',
        name: 'Dikenal sejak Zaman Kuno',
        born: '~2000 SM', died: '—',
        nationality: '🌍 China & India Kuno',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pouring_liquid_mercury_bionerd.jpg/440px-Pouring_liquid_mercury_bionerd.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Mercury_(element)',
        shortBio: 'Merkuri — satu-satunya logam yang berwujud cair pada suhu kamar — dikenal sejak ribuan tahun. Ditemukan dalam makam Mesir dan China kuno. Simbol Hg dari "Hydrargyrum" Latin, artinya "perak air".',
        discoveryStory: [
            { year: '~2000 SM', title: 'Cairan Perak Ajaib', body: 'Merkuri ditemukan oleh peradaban kuno dalam bentuk mineral cinnabar merah (HgS) di batu. Ketika dipanaskan, cinnabar melepaskan merkuri cair yang mengkilap. Sifatnya yang unik — logam cair, padat seperti perak tapi mengalir — membuatnya dianggap memiliki kekuatan magis dan mistis.' },
            { year: '~200 SM', title: 'Kaisar China dan Merkuri', body: 'Kaisar pertama China, Qin Shi Huang, percaya bahwa minum "pil keabadian" yang mengandung merkuri akan membuatnya hidup selamanya. Ironisnya, merkuri itulah yang membunuhnya. Makamnya dilaporkan memiliki sungai dari merkuri cair.' },
            { year: '~1500', title: 'Merkuri dalam Alkimia', body: 'Dalam alkimia, merkuri adalah salah satu "prinsip" dasar bersama belerang dan garam. Para alkemis bereksperimen intensif dengan merkuri — berharap bisa mengubahnya menjadi emas. Banyak yang meracuni diri sendiri dalam prosesnya.' },
            { year: 'Warisan', title: 'Dari Termometer ke Tragedi Minamata', body: 'Termometer merkuri telah digunakan sejak 1714 (Fahrenheit). Tapi merkuri sangat beracun — terutama metilmerkuri yang terbentuk dari merkuri oleh bakteri dalam air. Tragedi Minamata (1956, Jepang): pabrik membuang merkuri ke teluk, ikan terkontaminasi, ribuan warga mengalami kerusakan saraf permanen. Hari ini kebanyakan penggunaan merkuri sudah dilarang.' },
        ],
    },

    // ── Pb — Lead ─────────────────────────────────────────────────────────
    {
        sym: 'Pb',
        name: 'Dikenal sejak Zaman Kuno',
        born: '~6500 SM', died: '—',
        nationality: '🌍 Asia Kecil',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Lead_fragment.JPG/440px-Lead_fragment.JPG',
        wikiUrl: 'https://en.wikipedia.org/wiki/Lead',
        shortBio: 'Timbal adalah salah satu logam pertama yang digunakan manusia — mudah dilebur dari galena (PbS) dan mudah dibentuk. Simbol "Pb" dari bahasa Latin "plumbum" yang juga menjadi asal kata "plumber" (tukang pipa).',
        discoveryStory: [
            { year: '~6500 SM', title: 'Manik-Manik Timbal Tertua', body: 'Manik-manik timbal yang ditemukan di Çatalhöyük, Turki (6500 SM) adalah artefak timbal yang diproses tertua yang diketahui. Timbal sangat mudah dilebur dari galena pada suhu rendah, sehingga menjadi salah satu logam pertama yang dikerjakan manusia.' },
            { year: '~3000 SM', title: 'Mesir dan Timah Hitam', body: 'Mesir kuno menggunakan timbal untuk berbagai keperluan — pemberat jala ikan, wadah, timbangan, bahkan pigmen "timbal putih" (timbal karbonat) sebagai kosmetik. Bangsa Romawi menggunakannya untuk pipa air, wadah masak, dan bahkan sebagai pemanis (timbal asetat).' },
            { year: '~200 SM', title: 'Pipa Air Romawi', body: 'Bangsa Romawi membangun sistem pipa air paling canggih di dunia kuno — hampir semua menggunakan pipa timbal. Kata Latin "plumbum" (timbal) menjadi akar dari "plumber" dan "plumbing". Keracunan timbal kronis mungkin telah melemahkan elite Romawi selama berabad-abad.' },
            { year: 'Warisan', title: 'Bahaya yang Masih Ada', body: 'Timbal digunakan dalam baterai timbal-asam mobil (masih yang paling banyak diproduksi), pelurus senjata, dan pelindung radiasi. Tapi timbal sangat beracun, terutama untuk otak berkembang anak-anak. Cat timbal yang dilarang di tahun 1970-an masih ada dalam dinding rumah tua. Korelasi antara penurunan penggunaan bensin bertimbal (1970–90an) dengan penurunan tingkat kejahatan kekerasan adalah salah satu hubungan kausal yang paling kuat dalam sejarah epidemiologi.' },
        ],
    },

    // ── Bi — Bismuth ──────────────────────────────────────────────────────
    {
        sym: 'Bi',
        name: 'Claude François Geoffroy',
        born: '1729', died: '1753',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Bismuth_crystal_macro.jpg/440px-Bismuth_crystal_macro.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Bismuth',
        shortBio: 'Bismut dikenal sejak abad pertengahan namun sering dikira timbal atau antimon. Geoffroy pertama kali membuktikannya sebagai elemen tersendiri pada 1753. Kristalnya memiliki warna pelangi yang menakjubkan.',
        discoveryStory: [
            { year: '~1400', title: 'Logam yang Membingungkan', body: 'Bismut dikenal sejak abad ke-15 — banyak digunakan dalam paduan logam untuk tipe cetak dan objek dekorasi. Tapi ia selalu membingungkan: terlalu putih untuk timbal, terlalu berat untuk timah, terlalu berbeda untuk antimon. Para alkemis menamainya "tect wismut" atau "wismat".' },
            { year: '1753', title: 'Geoffroy Membuktikannya', body: 'Claude François Geoffroy (lebih dikenal Claude Geoffroy Le Cadet) pada 1753 membuktikan secara sistematis bahwa bismut adalah elemen tersendiri, bukan variasi dari antimon, timbal, atau timah. Ini menjadikannya penemu resmi bismut.' },
            { year: 'Modern', title: 'Kristal Pelangi yang Memukau', body: 'Bismut murni yang didinginkan perlahan membentuk kristal dengan struktur tangga yang memiliki permukaan oksida iridesen — menampilkan warna pelangi spektakuler dari perpaduan biru, ungu, emas, dan hijau. Kristal bismut menjadi salah satu mineral paling fotogenik di dunia.' },
            { year: 'Warisan', title: 'Perut dan Masa Depan Baterai', body: 'Bismut subsalisilat adalah bahan aktif Pepto-Bismol (obat maag yang terkenal). Bismut tidak beracun — satu-satunya logam berat yang tidak beracun, membuatnya ideal sebagai pengganti timbal. Paduan bismut titik leleh sangat rendah digunakan dalam sekering, detektor kebakaran, dan sistem sprinkler.' },
        ],
    },

    // ── Po — Polonium ─────────────────────────────────────────────────────
    {
        sym: 'Po',
        name: 'Marie & Pierre Curie',
        born: '1867 / 1859', died: '1934 / 1906',
        nationality: '🇵🇱 Polandia / 🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/440px-Marie_Curie_c1920.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Marie_Curie',
        shortBio: 'Marie Curie menemukan polonium pada 1898 dari analisis mineral pitchblende — dan menamainya dari tanah airnya Polandia yang saat itu berada di bawah pendudukan asing. Penemuan ini adalah bagian dari penelitian yang memenangkan dua Nobel.',
        discoveryStory: [
            { year: '1896', title: 'Becquerel dan Radioaktivitas', body: 'Henri Becquerel menemukan bahwa uranium memancarkan radiasi secara spontan. Marie Curie, mencari topik tesis doktoralnya, memilih untuk menyelidiki fenomena ini lebih jauh menggunakan elektrometer yang dikembangkan suaminya Pierre.' },
            { year: '1898', title: 'Lebih Radioaktif dari Uranium', body: 'Marie mengamati bahwa pitchblende (bijih uranium) jauh lebih radioaktif dari seharusnya jika hanya mengandung uranium. Pasti ada elemen lain yang sangat radioaktif. Ia dan Pierre mulai proses pemisahan yang melelahkan.' },
            { year: '1898', title: 'Polonium: Tanah Air yang Terjajah', body: 'Setelah memproses berkilogram pitchblende, mereka mengisolasi elemen baru yang 400 kali lebih radioaktif dari uranium. Marie menamakannya "polonium" dari kata Latin untuk Polandia — dedikasinya untuk tanah air yang saat itu terbagi antara Rusia, Prusia, dan Austria.' },
            { year: '1934', title: 'Akhir yang Tragis', body: 'Marie Curie meninggal pada 1934 akibat anemia aplastik — penyakit yang hampir pasti disebabkan oleh paparan radiasi dekade-panjang selama kariernya. Notebooks-nya masih sangat radioaktif hingga saat ini, dan disimpan dalam kotak timbal.' },
            { year: 'Warisan', title: 'Elemen Paling Berbahaya', body: 'Polonium-210 adalah salah satu zat paling beracun yang diketahui — satu mikrogram sudah cukup mematikan. Ditemukan dalam asap rokok (dari pupuk fosfat). Polonium-210 digunakan sebagai pemanas termal dalam wahana antariksa Soviet. Dan pada 2006, mantan agen KGB Alexander Litvinenko dibunuh dengan polonium-210 yang dimasukkan ke dalam teh.' },
        ],
    },

    // ── At — Astatine ─────────────────────────────────────────────────────
    {
        sym: 'At',
        name: 'Dale Corson, K.R. MacKenzie & Emilio Segrè',
        born: '1914 / 1912 / 1905', died: '2012 / 2002 / 1989',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Emilio_Segr%C3%A8_-_young.jpg/440px-Emilio_Segr%C3%A8_-_young.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Astatine',
        shortBio: 'Astatine dibuat secara artifisial pada 1940 di UC Berkeley dengan membombardir bismut-209 dengan partikel alfa — elemen paling langka di kerak bumi, total hanya sekitar 1 gram di seluruh Bumi ini.',
        discoveryStory: [
            { year: '1931', title: 'Prediksi: Eka-Iodine', body: 'Mendeleev dan kemudian Newlands memprediksi bahwa harus ada halogen di bawah iodium dalam tabel periodik. Tapi elemen itu tidak pernah ditemukan di alam — radioaktivitasnya terlalu kuat, meluruh terlalu cepat.' },
            { year: '1940', title: 'Dibuat di Laboratorium', body: 'Dale Corson, Kenneth MacKenzie, dan Emilio Segrè di University of California Berkeley menembakkan partikel alfa pada bismut-209 menggunakan siklotron. Mereka menghasilkan beberapa atom astatine-211 — elemen ke-85 yang pertama kali ada dan langsung meluruh.' },
            { year: '1940', title: '"Tidak Stabil"', body: 'Mereka menamainya "astatine" dari bahasa Yunani "astatos" yang berarti tidak stabil. Isotop paling panjang hidupnya (At-210) memiliki waktu paruh hanya 8,1 jam. Di alam, astatine hanya ada dalam jumlah infimum dari peluruhan torium dan uranium.' },
            { year: 'Warisan', title: 'Penghancur Kanker', body: 'Astatine-211 sedang diteliti intensif sebagai agen untuk targeted alpha therapy (TAT) — menempelkan At-211 ke antibodi yang mengarah ke sel kanker, lalu partikel alfa energi tinggi menghancurkan sel kanker dari dalam. Radiasi alfa sangat kuat tapi jangkauannya hanya beberapa sel — sempurna untuk membunuh kanker tanpa merusak jaringan sekitar.' },
        ],
    },

    // ── Rn — Radon ────────────────────────────────────────────────────────
    {
        sym: 'Rn',
        name: 'Friedrich Ernst Dorn',
        born: '1848', died: '1916',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Radon_symbol.svg/440px-Radon_symbol.svg.png',
        wikiUrl: 'https://en.wikipedia.org/wiki/Radon',
        shortBio: 'Fisikawan Jerman yang menemukan radon pada 1900 sebagai gas radioaktif yang dipancarkan oleh radium — salah satu dari "gas emanasi" radioaktif yang diteliti para ilmuwan awal era radioaktivitas.',
        discoveryStory: [
            { year: '1899', title: 'Gas Misterius dari Radium', body: 'Pierre dan Marie Curie mengamati bahwa radium tampaknya "memancarkan" sesuatu ke udara yang membuatnya sedikit radioaktif. Mereka menyebutnya "emasi radium". Friedrich Dorn menyelidikinya secara sistematis.' },
            { year: '1900', title: 'Dorn Mengisolasinya', body: 'Friedrich Dorn berhasil mengumpulkan gas yang keluar dari radium dan mengukur sifat-sifatnya. Gas itu radioaktif, berat, dan tidak bereaksi kimia — jelas gas mulia baru.' },
            { year: '1908–1910', title: 'Ramsay Mengkarakterisasinya', body: 'Ramsay dan kawan-kawannya mengumpulkan cukup gas untuk menganalisis spektrumnya dan mengkonfirmasi bahwa ini gas mulia baru — anggota terberat dari keluarga gas mulia. Awalnya disebut "niton" (bersinar), lalu berganti nama menjadi "radon".' },
            { year: 'Warisan', title: 'Gas Pembunuh Diam-Diam', body: 'Radon meluruh dari uranium dalam batu granit dan bisa menumpuk di ruang bawah tanah bangunan. Radon adalah penyebab utama kanker paru-paru kedua setelah rokok di banyak negara — menyebabkan hingga 20.000 kematian per tahun di AS. WHO merekomendasikan pengujian radon di semua rumah yang dibangun di atas granit.' },
        ],
    },

    // ── Fr — Francium ─────────────────────────────────────────────────────
    {
        sym: 'Fr',
        name: 'Marguerite Perey',
        born: '1909', died: '1975',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Marguerite_Perey.jpg/440px-Marguerite_Perey.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Marguerite_Perey',
        shortBio: 'Fisikawan Prancis yang menemukan francium pada 1939 — mantan asisten Marie Curie. Ia adalah perempuan pertama yang terpilih sebagai anggota Académie des sciences Prancis.',
        discoveryStory: [
            { year: '1929', title: 'Asisten Curie', body: 'Marguerite Perey bergabung sebagai asisten Marie Curie di Institut Radium Paris pada usia 19 tahun, sebagai kasir material radioaktif. Curie sangat terkesan dengan kemampuannya dan melatihnya menjadi peneliti.' },
            { year: '1939', title: 'Penemuan Francium', body: 'Perey sedang memurnikan sampel aktinium-227 dan mengamati emisi energi yang tidak bisa dijelaskan. Ia menidentifikasi ini sebagai peluruhan beta aktinium menjadi elemen baru — elemen ke-87, logam alkali yang sangat radioaktif.' },
            { year: '1939', title: 'Dinamai dari Prancis', body: 'Perey menamainya "francium" dari "Francia", nama Latin untuk Prancis — menghormati tanah airnya, seperti yang dilakukan gurunya Curie dengan polonium. Francium adalah elemen terakhir yang ditemukan di alam (bukan sintetis).' },
            { year: '1962', title: 'Anggota Akademi Pertama', body: 'Pada 1962, Perey menjadi perempuan pertama yang terpilih sebagai anggota Académie des sciences Prancis — lembaga yang sama yang pernah menolak Marie Curie karena ia perempuan setengah abad sebelumnya.' },
            { year: 'Warisan', title: 'Elemen Paling Langka di Alam', body: 'Francium adalah elemen alam paling langka dan paling tidak stabil — diperkirakan hanya 1 ons (28 gram) ada di seluruh kerak bumi pada satu waktu. Isotop terpanjang hidupnya (Fr-223) hanya bertahan 22 menit. Francium tidak pernah cukup dihasilkan untuk terlihat dengan mata telanjang.' },
        ],
    },

    // ── Tc — Technetium ───────────────────────────────────────────────────
    {
        sym: 'Tc',
        name: 'Carlo Perrier & Emilio Segrè',
        born: '1886 / 1905', died: '1948 / 1989',
        nationality: '🇮🇹 Italia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Emilio_Segr%C3%A8_-_young.jpg/440px-Emilio_Segr%C3%A8_-_young.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Technetium',
        shortBio: 'Teknesium adalah elemen pertama yang dibuat secara artifisial — ditemukan pada 1937 dalam peluruhan molibdenum yang dibombardir deuteron. Elemen pertama yang namanya mencerminkan bagaimana ia dibuat: "technetos" (buatan).',
        discoveryStory: [
            { year: '1871', title: 'Mendeleev Memprediksinya', body: 'Mendeleev memprediksi elemen di antara molibdenum dan ruthenium dengan nama "eka-mangan". Ilmuwan mencarinya di alam selama 60 tahun tapi tidak pernah menemukannya — karena ia tidak ada di alam secara signifikan.' },
            { year: '1936', title: 'Molibdenum Dibombardir', body: 'Ernest Lawrence di Berkeley menembakkan deuteron ke molibdenum-98 menggunakan siklotron, menghasilkan inti baru. Ia mengirimkan pelat molibdenum yang sudah dibombardir ke rekannya di Italia.' },
            { year: '1937', title: 'Perrier dan Segrè Menemukannya', body: 'Carlo Perrier dan Emilio Segrè di Universitas Palermo menganalisis sampel molibdenum dari Lawrence. Mereka menemukan isotop radioaktif yang bukan molibdenum, bukan ruthenium — elemen baru nomor 43.' },
            { year: '1947', title: 'Dinamai "Teknesium"', body: 'Segrè dan timnya menamainya "technetium" dari bahasa Yunani "technetos" (buatan, teknis) — karena ia adalah pertama kali elemen dibuat secara artifisial. Ironi: teknesium kemudian ditemukan dalam bintang tua dalam jumlah kecil, membuktikan nukleosintesis bintang.' },
            { year: 'Warisan', title: 'Agen Pencitraan Medis', body: 'Teknesium-99m adalah radionuklida yang paling banyak digunakan dalam kedokteran nuklir — lebih dari 20 juta prosedur pencitraan medis per tahun menggunakannya. Tc-99m dapat dilampirkan ke berbagai molekul yang menarget organ tertentu, memungkinkan pencitraan jantung, tulang, otak, dan lebih banyak lagi dengan resolusi tinggi.' },
        ],
    },

    // ── Pd — Palladium ────────────────────────────────────────────────────
    {
        sym: 'Pd',
        name: 'William Hyde Wollaston',
        born: '1766', died: '1828',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/William_Hyde_Wollaston_by_John_Jackson.jpg/440px-William_Hyde_Wollaston_by_John_Jackson.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/William_Hyde_Wollaston',
        shortBio: 'Kimiawan Inggris yang menemukan paladium pada 1803 saat memurnikan platina mentah dari Amerika Selatan — dan menemukannya dengan cara yang tidak biasa: menjual sampelnya secara anonim sebelum mengumumkan penemuannya.',
        discoveryStory: [
            { year: '1803', title: 'Platina yang Tidak Larut Sempurna', body: 'William Wollaston sedang memurnikan platina mentah menggunakan asam aqua regia (campuran HNO₃ dan HCl). Ia menemukan residu kuning yang tidak larut — logam baru yang belum dikenal.' },
            { year: '1803', title: 'Penjualan Anonim yang Aneh', body: 'Alih-alih langsung mengumumkan penemuannya, Wollaston menjual sampel "new metal" secara anonim di London, memancing reaksi komunitas ilmiah. Baru setelah ada minat yang cukup, ia mengungkapkan dirinya sebagai penemu dan menamainya "palladium" dari asteroid Pallas yang baru ditemukan.' },
            { year: '1804', title: 'Dua Elemen Sekaligus', body: 'Dalam periode yang sama, Wollaston juga menemukan rhodium (1804) dari sisa pemurnian platina yang sama. Ia adalah satu-satunya orang yang menemukan dua elemen berbeda dari satu sumber material dalam waktu singkat.' },
            { year: 'Warisan', title: 'Penyerap Hidrogen yang Luar Biasa', body: 'Paladium dapat menyerap hingga 900 kali volumenya sendiri dalam gas hidrogen — kemampuan yang belum ada tandingannya. Konverter katalitik modern menggunakan paduan platinum-paladium-rhodium. Bersama platinum dan rhodium, paladium adalah "logam kelompok platinum" yang tak tergantikan dalam kontrol emisi kendaraan.' },
        ],
    },

    // ── Rh — Rhodium ──────────────────────────────────────────────────────
    {
        sym: 'Rh',
        name: 'William Hyde Wollaston',
        born: '1766', died: '1828',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/William_Hyde_Wollaston_by_John_Jackson.jpg/440px-William_Hyde_Wollaston_by_John_Jackson.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Rhodium',
        shortBio: 'Rhodium ditemukan Wollaston pada 1804 dari sisa pemurnian platina — dan dinamai dari bahasa Yunani "rhodon" (mawar) karena senyawa rhodium klorida berwarna merah mawar yang cantik.',
        discoveryStory: [
            { year: '1804', title: 'Residu Merahmuda', body: 'Setelah menemukan paladium dari pemurnian platina, Wollaston terus menganalisis residu. Ia menemukan garam berwarna merah muda yang tidak bisa ia identifikasi — logam baru lagi dari bijih platina yang sama.' },
            { year: '1804', title: '"Mawar" Merah', body: 'Wollaston menamainya "rhodium" dari bahasa Yunani "rhodon" (mawar) — mengacu pada warna larutan garamnya yang merah muda seperti mawar. Ia berhasil mengisolasi logam rhodium murni yang berwarna putih perak.' },
            { year: 'Modern', title: 'Logam Paling Mahal di Dunia', body: 'Rhodium adalah logam paling mahal yang diperdagangkan secara komersial — pada puncaknya (2021), harganya mencapai $29.800 per troy ons, 10 kali lebih mahal dari emas. Kelangkaannya luar biasa: produksi global hanya sekitar 30 ton per tahun.' },
            { year: 'Warisan', title: 'Katalis Otomotif Dunia', body: 'Hampir semua rhodium yang diproduksi (sekitar 80%) digunakan dalam konverter katalitik kendaraan bermotor — bersama platina dan paladium untuk mengubah NOₓ (nitrogen oksida) menjadi nitrogen tidak berbahaya. Tanpa rhodium, udara kota modern akan jauh lebih tercemar.' },
        ],
    },

    // ── In — Indium ───────────────────────────────────────────────────────
    {
        sym: 'In',
        name: 'Ferdinand Reich & Hieronymus Richter',
        born: '1799 / 1824', died: '1882 / 1898',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Indium_foil.jpg/440px-Indium_foil.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Indium',
        shortBio: 'Indium ditemukan oleh Reich dan Richter pada 1863 menggunakan spektroskopi — dari endapan seng di pabrik smelter. Namanya dari garis spektral indigo biru yang sangat indah.',
        discoveryStory: [
            { year: '1863', title: 'Mencari Talium dalam Seng', body: 'Ferdinand Reich, yang buta warna, dan asistennya Hieronymus Richter menganalisis residu smelter seng di Freiberg dengan spektroskopi, berharap menemukan talium. Mereka justru menemukan garis indigo biru yang terang — tidak cocok dengan elemen manapun.' },
            { year: '1863', title: '"Indigo" Menjadi "Indium"', body: 'Mereka menamai elemen baru itu "indium" dari warna "indigo" dari garis spektralnya. Reich tidak bisa mengkonfirmasi warnanya sendiri karena buta warna — Richter yang melihat dan mendeskripsikan warnanya.' },
            { year: '1867', title: 'Sengketa Kredit', body: 'Reich mengklaim penemuannya tapi Richter — yang melakukan banyak kerja eksperimental — juga mengklaim kredit. Perseteruan ini berlanjut selama bertahun-tahun dalam komunitas ilmiah Jerman.' },
            { year: 'Warisan', title: 'Layar yang Kamu Sentuh', body: 'Indium tin oxide (ITO) adalah bahan utama dalam layar sentuh, layar LCD, dan OLED. Lapisan ITO tipis yang transparan tapi konduktif listrik ini ada di setiap smartphone, tablet, dan monitor di dunia. Cadangan indium dikhawatirkan tidak cukup untuk memenuhi permintaan layar sentuh masa depan.' },
        ],
    },

    // ── Tl — Thallium ─────────────────────────────────────────────────────
    {
        sym: 'Tl',
        name: 'William Crookes',
        born: '1832', died: '1919',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sir_William_Crookes_LOC_cph.3g06234.jpg/440px-Sir_William_Crookes_LOC_cph.3g06234.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/William_Crookes',
        shortBio: 'Fisikawan Inggris yang menemukan talium pada 1861 menggunakan spektroskopi — saat menganalisis residu asam sulfat dari pabrik. Juga terkenal sebagai penemu tabung sinar katoda (tabung Crookes).',
        discoveryStory: [
            { year: '1861', title: 'Garis Hijau yang Menarik', body: 'William Crookes menganalisis residu dari kamar timbal pabrik asam sulfat — residu yang sama yang Berzelius gunakan untuk menemukan selenium. Crookes melihat garis spektral hijau terang yang tidak dikenalnya — elemen baru.' },
            { year: '1861', title: '"Bertunas Hijau"', body: 'Crookes menamainya "thallium" dari bahasa Yunani "thallos" (ranting hijau muda, tunas) — mengacu pada warna garis spektral hijaunya. Claude-Auguste Lamy di Prancis juga menemukan talium secara independen pada tahun yang sama.' },
            { year: '1862', title: 'Pertengkaran Antar Bangsa', body: 'Lamy berhasil mengisolasi talium logam lebih dulu dan memamerkannya di pameran internasional. Crookes mengklaim prioritas penemuan tapi Lamy yang punya logam. Perseteruan Inggris-Prancis ini berlangsung lama dalam komunitas ilmiah.' },
            { year: 'Warisan', title: 'Racun Tak Terdeteksi', body: 'Talium sulfat pernah digunakan sebagai racun tikus — tidak berbau, tidak berasa, gejala keracunannya lambat muncul (mula-mula rambut rontok, kemudian gangguan saraf, lalu kematian). Graham Young membunuh beberapa korban dengan talium di Inggris (1971). Kini penggunaannya sangat dibatasi. Talium-201 digunakan dalam pencitraan jantung medis.' },
        ],
    },

    // ── Y — Yttrium ───────────────────────────────────────────────────────
    {
        sym: 'Y',
        name: 'Johan Gadolin',
        born: '1760', died: '1852',
        nationality: '🇫🇮 Finlandia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Johan_Gadolin.jpg/440px-Johan_Gadolin.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Johan_Gadolin',
        shortBio: 'Kimiawan Finlandia yang pada 1794 mengidentifikasi oksida baru dalam mineral dari Ytterby, Swedia — tanah liat yang menjadi sumber nama empat elemen: yttrium, ytterbium, erbium, dan terbium.',
        discoveryStory: [
            { year: '1787', title: 'Mineral Hitam Berat dari Ytterby', body: 'Letnan Carl Arrhenius menemukan mineral hitam berat yang tidak biasa di tambang feldspar dekat desa Ytterby, kepulauan Swedia. Ia menamakannya "ytterbite" dan mengirimkannya ke para kimiawan untuk dianalisis.' },
            { year: '1794', title: 'Gadolin Menemukan Oksida Baru', body: 'Johan Gadolin menganalisis ytterbite dan menemukan sekitar 38% oksida baru yang tak dikenal. Ia menyebutnya "yttria". Mineral itu kemudian dihormati dengan namanya — "gadolinit".' },
            { year: '1828', title: 'Wöhler Mengisolasi Logamnya', body: 'Friedrich Wöhler berhasil mengisolasi yttrium logam murni pada 1828 dengan mereduksi yttrium klorida menggunakan kalium.' },
            { year: 'Warisan', title: 'Desa Kecil yang Melahirkan 4 Elemen', body: 'Desa Ytterby, dengan populasi kurang dari 1.000 orang, adalah desa yang paling "kaya" nama elemen: yttrium (Y), ytterbium (Yb), erbium (Er), dan terbium (Tb) semua dinamai dari situ. Yttrium aluminium garnet (YAG) digunakan dalam laser medis dan pemotong industri. Yttrium barium tembaga oksida (YBCO) adalah superkonduktor suhu tinggi pertama yang ditemukan.' },
        ],
    },

    // ── Zr — Zirconium ────────────────────────────────────────────────────
    {
        sym: 'Zr',
        name: 'Martin Heinrich Klaproth',
        born: '1743', died: '1817',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Klaproth_Martin_Heinrich.jpg/440px-Klaproth_Martin_Heinrich.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Martin_Heinrich_Klaproth',
        shortBio: 'Klaproth mengidentifikasi zirkonium dalam mineral zirkon pada 1789 — batu permata yang dikenal sejak ribuan tahun. Nama "zirkon" berasal dari bahasa Arab "zarqun" (merah) atau Persia "zargun" (berwarna emas).',
        discoveryStory: [
            { year: '~2000 SM', title: 'Zirkon: Batu Permata Tertua', body: 'Zirkon (ZrSiO₄) adalah salah satu mineral tertua di Bumi — kristal zirkon dari Australia berusia 4,4 miliar tahun, hampir setua Bumi itu sendiri. Manusia telah menghargainya sebagai batu permata sejak zaman kuno.' },
            { year: '1789', title: 'Klaproth Menganalisisnya', body: 'Martin Klaproth menganalisis mineral zirkon dari Ceylon (Sri Lanka) dan mengidentifikasi oksida baru yang tidak dikenal — "Zirkonerde" (bumi zirkon). Ia tidak bisa mengisolasi logamnya, tapi membuktikan ada elemen baru di dalamnya.' },
            { year: '1824', title: 'Berzelius Mengisolasi Logamnya', body: 'Jöns Jacob Berzelius berhasil mengisolasi zirkonium logam murni pada 1824 dengan mereduksi kalium zirkonium fluorida menggunakan kalium logam.' },
            { year: 'Warisan', title: 'Reaktor Nuklir dan Batu Permata Sintetis', body: 'Zirkonium hampir transparan terhadap neutron — menjadikannya material ideal untuk kelongsong batang bahan bakar reaktor nuklir. Hampir 90% zirkonium yang diproduksi digunakan industri nuklir. Zirkonia kubik (ZrO₂) adalah berlian sintetis yang paling populer — dalam gelap bahkan sulit dibedakan dari berlian asli.' },
        ],
    },

    // ── Nb — Niobium ──────────────────────────────────────────────────────
    {
        sym: 'Nb',
        name: 'Charles Hatchett',
        born: '1765', died: '1847',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Niobium_crystal_bar_and_1cm3_cube.jpg/440px-Niobium_crystal_bar_and_1cm3_cube.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Charles_Hatchett',
        shortBio: 'Hatchett menemukan niobium pada 1801 dari mineral kolumbit yang tersimpan di Museum Inggris sejak 1750-an — mineral yang dibawa dari Connecticut, Amerika Serikat. Ia menamakannya "columbium" tapi Eropa menamakannya "niobium".',
        discoveryStory: [
            { year: '1753', title: 'Mineral dari Amerika', body: 'Seorang gubernur Massachusetts mengirimkan mineral berat hitam dari Connecticut ke Museum Inggris pada 1750-an. Mineral itu tersimpan selama hampir 50 tahun sebelum ada yang menganalisisnya secara serius.' },
            { year: '1801', title: 'Hatchett dan Kolumbit', body: 'Charles Hatchett menganalisis mineral museum itu dan menemukan oksida baru yang tidak dikenal. Ia menamainya "columbium" dari Columbia (nama puitis untuk Amerika Serikat) — elemen pertama yang ditemukan di mineral Amerika.' },
            { year: '1844', title: 'Sengketa Nama: Columbium vs Niobium', body: 'Heinrich Rose di Jerman menganalisis ulang kolumbit dan mengklaim menemukan dua elemen berbeda — niobium dan pelopium. Pelopium kemudian terbukti identik dengan niobium. Eropa menggunakan "niobium" (dari Niobe, putri Tantalus dalam mitologi Yunani, karena niobium selalu bersama tantalum), Amerika menggunakan "columbium". IUPAC menetapkan "niobium" sebagai nama resmi pada 1950.' },
            { year: 'Warisan', title: 'Baja Super dan Superkonduktor', body: 'Niobium digunakan untuk membuat baja berkekuatan tinggi — ketambahan 0,1% niobium meningkatkan kekuatan baja hingga 30%. Jembatan, rel kereta, dan pipa minyak lepas pantai menggunakan baja niobium. Niobium-titanium adalah superkonduktor paling banyak digunakan di dunia — menggerakkan magnet superkonduktor dalam MRI dan akselerator partikel LHC (CERN).' },
        ],
    },

    // ── Mo — Molybdenum ───────────────────────────────────────────────────
    {
        sym: 'Mo',
        name: 'Carl Wilhelm Scheele & Peter Jacob Hjelm',
        born: '1742 / 1746', died: '1786 / 1813',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Carl_Wilhelm_Scheele.jpg/440px-Carl_Wilhelm_Scheele.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Carl_Wilhelm_Scheele',
        shortBio: 'Scheele mengidentifikasi molibdenum sebagai elemen baru pada 1778, dan Hjelm mengisolasi logamnya pada 1781. Nama berasal dari bahasa Yunani "molybdos" (timbal) karena mineralnya — molibdenit — sering dikira mineral timbal.',
        discoveryStory: [
            { year: '~1000 SM', title: 'Molibdenit: Mineral yang Bingungkan', body: 'Mineral molibdenit (MoS₂) dikenal manusia kuno dan sering dikira galena (bijih timbal) atau bahkan grafit — ketiganya tampak hitam mengkilap dan bisa digunakan untuk menulis. Para alkemis mencoba melebur molibdenit untuk mendapatkan timbal — tapi gagal.' },
            { year: '1778', title: 'Scheele: Oksida Baru', body: 'Carl Wilhelm Scheele memanaskan molibdenit dengan asam nitrat dan mendapatkan oksida putih yang tidak larut — "asam molibdat". Ia membuktikan ini bukan timbal atau grafit, tapi elemen baru. Scheele adalah salah satu kimiawan paling produktif sepanjang masa — ia mengisolasi atau mengidentifikasi oksigen, nitrogen, klorin, barium, mangan, dan banyak asam organik.' },
            { year: '1781', title: 'Hjelm Mengisolasi Logamnya', body: 'Peter Hjelm mereduksi asam molibdat dengan arang lignit dalam krusibel tertutup dan mendapatkan logam abu-abu gelap baru. Ia menamai logamnya "molybdenum" dari "molybdos".' },
            { year: 'Warisan', title: 'Baja Tahan Panas', body: 'Molibdenum memiliki titik leleh 2.623°C — keempat tertinggi dari semua elemen. Baja molibdenum tahan suhu tinggi dan sangat kuat digunakan dalam mesin jet, turbin, dan reaktor nuklir. Molibdenum juga kofaktor enzim nitrogenase — enzim yang memungkinkan bakteri mengubah nitrogen gas menjadi amonia yang bisa diserap tanaman. Tanpa molibdenum di dalam tanah, pertanian akan jauh lebih sulit.' },
        ],
    },

    // ── Ru — Ruthenium ────────────────────────────────────────────────────
    {
        sym: 'Ru',
        name: 'Karl Ernst Claus',
        born: '1796', died: '1864',
        nationality: '🇷🇺 Rusia (keturunan Jerman)',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ruthenium_crystals.jpg/440px-Ruthenium_crystals.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Karl_Ernst_Claus',
        shortBio: 'Kimiawan Rusia-Jerman yang menemukan ruthenium pada 1844 dari residu platinum mentah dari pegunungan Ural — dan menamainya dari "Ruthenia", nama Latin untuk Rusia.',
        discoveryStory: [
            { year: '1844', title: 'Residu yang Diabaikan', body: 'Ketika memproses platinum mentah dari Ural, selalu ada residu hitam yang tidak larut yang diabaikan. Karl Ernst Claus di Universitas Kazan memutuskan untuk menganalisis residu ini secara sistematis.' },
            { year: '1844', title: 'Elemen Keempat dari Platinum', body: 'Claus memisahkan elemen baru dari residu — logam abu-abu yang sangat keras dan tahan korosi, anggota keluarga logam platinum. Ia menamakannya "ruthenium" dari "Ruthenia" (nama Latin untuk Rusia) — menghormati negaranya.' },
            { year: '1827', title: 'Osann Mendahuluinya?', body: 'Gottfried Osann pada 1827 mengklaim menemukan tiga elemen baru dari residu platinum Ural — "pluranium", "ruthenium", dan "polinium". Tapi hasil Osann tidak bisa direproduksi. Claus yang benar-benar mengisolasi dan mengkarakterisasi ruthenium.' },
            { year: 'Warisan', title: 'Katalis dan Chip Memori', body: 'Ruthenium digunakan sebagai katalis dalam sintesis amonia (proses Haber-Bosch generasi baru) dan dalam sel bahan bakar. Lapisan tipis ruthenium digunakan dalam hard disk drive generasi terbaru untuk meningkatkan kapasitas penyimpanan. Kompleks ruthenium polipiridil juga digunakan dalam sel surya tersensitisasi pewarna (DSSC).' },
        ],
    },

    // ── Os — Osmium ───────────────────────────────────────────────────────
    {
        sym: 'Os',
        name: 'Smithson Tennant',
        born: '1761', died: '1815',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Smithson_Tennant.jpg/440px-Smithson_Tennant.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Smithson_Tennant',
        shortBio: 'Kimiawan Inggris yang menemukan osmium (dan iridium) pada 1803 dari residu tidak larut platinum — dengan membuktikan bahwa residu hitam yang selama ini dibuang ternyata mengandung dua elemen baru sekaligus.',
        discoveryStory: [
            { year: '1803', title: 'Residu Hitam yang Diabaikan', body: 'Ketika platinum dilarutkan dalam aqua regia, selalu tersisa residu hitam yang tidak larut dan selama ini dibuang. Smithson Tennant memutuskan untuk menganalisis residu ini — dan menemukan dua elemen baru sekaligus: osmium dan iridium.' },
            { year: '1803', title: '"Bau Busuk"', body: 'Tennant menamainya "osmium" dari bahasa Yunani "osme" (bau) — karena osmium tetroksida (OsO₄) yang terbentuk saat osmium teroksidasi memiliki bau yang sangat tajam dan tidak menyenangkan. OsO₄ juga sangat beracun.' },
            { year: '1815', title: 'Akhir Tragis', body: 'Smithson Tennant meninggal pada 1815 dalam kecelakaan kuda di Prancis, saat jembatan yang dilaluinya ambruk. Ia meninggal sebelum sempat menerima pengakuan penuh atas penemuannya.' },
            { year: 'Warisan', title: 'Logam Terpadat di Dunia', body: 'Osmium adalah logam dengan densitas paling tinggi: 22,59 g/cm³ — hampir dua kali densitas timbal dan lebih berat dari semua elemen lain. Paduan osmium-iridium sangat keras, tahan aus, digunakan untuk ujung pena ballpoint, pivot instrumen, dan kontak listrik. OsO₄ digunakan dalam biologi sel untuk mewarnai sel hidup sebelum diamati dengan mikroskop elektron.' },
        ],
    },

    // ── Ir — Iridium ──────────────────────────────────────────────────────
    {
        sym: 'Ir',
        name: 'Smithson Tennant',
        born: '1761', died: '1815',
        nationality: '🇬🇧 Inggris',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Smithson_Tennant.jpg/440px-Smithson_Tennant.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Iridium',
        shortBio: 'Iridium ditemukan oleh Tennant pada 1803 bersamaan dengan osmium — dari residu platinum yang sama. Namanya dari Iris, dewi pelangi, karena senyawa iridiumnya menampilkan warna yang sangat beragam.',
        discoveryStory: [
            { year: '1803', title: 'Dari Residu yang Sama', body: 'Smithson Tennant menemukan iridium bersamaan dengan osmium dari residu tidak larut platinum. Ia memisahkan keduanya dengan pemanasan dan analisis kimia yang teliti.' },
            { year: '1803', title: 'Dewi Pelangi', body: 'Tennant menamainya "iridium" dari Iris, dewi pelangi Yunani — karena garam-garam iridium menampilkan spektrum warna yang luar biasa kaya, dari merah ke kuning ke biru ke hijau, tergantung kondisinya.' },
            { year: '1980', title: 'Bukti Kepunahan Dinosaurus', body: 'Pada 1980, Luis dan Walter Alvarez menemukan lapisan iridium tipis tapi signifikan di seluruh batas antara lapisan Kapur dan Paleogen di seluruh dunia — tepat di batas waktu kepunahan massal 66 juta tahun lalu. Karena iridium sangat langka di kerak bumi tapi lebih umum di asteroid, ini menjadi bukti kuat bahwa asteroid raksasa menghantam Bumi dan menyebabkan kepunahan dinosaurus.' },
            { year: 'Warisan', title: 'Penanda Kepunahan dan Penghubung Listrik', body: 'Iridium adalah logam paling tahan korosi yang diketahui — tidak bereaksi dengan asam manapun kecuali pada suhu tinggi. Kontak listrik iridium mampu bertahan jutaan switch tanpa haus. Bintik pengapian (spark plug) mobil kelas atas menggunakan elektroda iridium. Kapsul iridium juga membungkus bahan bakar nuklir generator listrik pada wahana luar angkasa seperti Cassini dan Voyager.' },
        ],
    },

    // ── Re — Rhenium ──────────────────────────────────────────────────────
    {
        sym: 'Re',
        name: 'Ida Noddack, Walter Noddack & Otto Berg',
        born: '1896 / 1893 / 1873', died: '1978 / 1960 / 1939',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ida_Noddack.jpg/440px-Ida_Noddack.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Ida_Noddack',
        shortBio: 'Pasangan Ida dan Walter Noddack bersama Otto Berg menemukan renium pada 1925 — salah satu elemen terakhir yang ditemukan di alam. Ida Noddack juga adalah orang pertama yang menyarankan konsep fisi nuklir, tapi diabaikan selama bertahun-tahun.',
        discoveryStory: [
            { year: '1871', title: 'Mendeleev: Dua Slot Kosong', body: 'Mendeleev memprediksi dua elemen di bawah mangan: "eka-mangan" (kemudian teknesium) dan "dwi-mangan" (kemudian renium). Keduanya dicari selama puluhan tahun tanpa hasil.' },
            { year: '1925', title: 'Noddack dan X-Ray', body: 'Ida dan Walter Noddack, bersama Otto Berg, menganalisis bijih kolumbit dan platinit menggunakan spektroskopi X-ray — teknik baru yang sangat sensitif. Mereka menemukan garis karakteristik elemen baru nomor 75.' },
            { year: '1925', title: '"Masurium" yang Bermasalah', body: 'Mereka juga mengklaim menemukan elemen 43 ("masurium") dari tanah liat MoS₂ — tapi klaim ini tidak bisa dikonfirmasi orang lain (sekarang kita tahu elemen 43 adalah teknesium radioaktif yang tidak ada di alam dalam jumlah terukur). Renium terbukti nyata; masurium tidak.' },
            { year: '1934', title: 'Fisi yang Diabaikan', body: 'Ida Noddack pada 1934 menyarankan secara tertulis bahwa neutron yang menghantam uranium mungkin "memecah inti uranium menjadi beberapa fragmen" — pada dasarnya mendeskripsikan fisi nuklir 4 tahun sebelum Hahn dan Strassmann membuktikannya. Saran Noddack diabaikan oleh komunitas ilmiah pada saat itu.' },
            { year: 'Warisan', title: 'Superloy Jet Engine', body: 'Renium memiliki titik leleh 3.186°C — tertinggi kedua setelah tungsten. Superalloy nikel yang mengandung renium (6%) digunakan dalam bilah turbin mesin jet yang beroperasi di suhu mendekati titik lelehnya. Penerbangan modern tidak mungkin ada dalam bentuknya yang sekarang tanpa renium.' },
        ],
    },

    // ── Ta — Tantalum ─────────────────────────────────────────────────────
    {
        sym: 'Ta',
        name: 'Anders Gustaf Ekeberg',
        born: '1767', died: '1813',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Tantalum_single_crystal_bar_and_1cm3_cube.jpg/440px-Tantalum_single_crystal_bar_and_1cm3_cube.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Anders_Gustaf_Ekeberg',
        shortBio: 'Ekeberg menemukan tantalum pada 1802 dari mineral tantalit — dan menamainya dari Tantalus dalam mitologi Yunani, karena mineralnya sangat sulit dilarutkan dalam asam (seperti Tantalus yang tidak pernah bisa minum air di bawahnya).',
        discoveryStory: [
            { year: '1802', title: 'Mineral yang Tidak Larut', body: 'Anders Ekeberg menganalisis mineral dari Finlandia dan Swedia dan menemukan oksida baru yang sangat sulit dilarutkan dalam asam apapun — bahkan aqua regia. Ia berhasil mengisolasi oksida baru ini setelah perjuangan kimia yang panjang.' },
            { year: '1802', title: 'Tantalus yang Tersiksa', body: 'Ekeberg menamainya "tantalum" dari Tantalus — tokoh mitologi Yunani yang dihukum berdiri di kolam air yang surut ketika ia mencoba minum, dengan buah yang mundur ketika ia meraih. Mineral tantalum yang menolak melarut dengan asam seperti Tantalus yang tidak bisa menyentuh apa yang ada di depannya.' },
            { year: '1825', title: 'Berzelius Mengisolasi Logamnya', body: 'Jöns Jacob Berzelius berhasil mengisolasi tantalum logam dengan mereduksi kalium tantalum fluorida menggunakan kalium. Logam putih abu-abu yang sangat tahan korosi.' },
            { year: 'Warisan', title: 'Di Dalam Setiap Smartphone', body: 'Tantalum kapasitor — komponen elektronik kecil berbasis tantalum — ada di hampir setiap smartphone, laptop, dan elektronik konsumen. Tantalum ideal karena kapasitansi tinggi dalam volume kecil. Bijih tantalit-kolumbit utamanya berasal dari DR Kongo — ketergantungan ini terkait dengan konflik bersenjata ("mineral konflik" atau "darah mineral"). Tantalum juga biokompatibel sempurna, digunakan dalam implan bedah.' },
        ],
    },

    // ── La — Lanthanum ────────────────────────────────────────────────────
    {
        sym: 'La',
        name: 'Carl Gustaf Mosander',
        born: '1797', died: '1858',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Carl_Gustaf_Mosander.jpg/440px-Carl_Gustaf_Mosander.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Carl_Gustaf_Mosander',
        shortBio: 'Mosander menemukan lantanum pada 1839 dengan memisahkannya dari cerit — dan kemudian dari "lantana" yang ia anggap sebagai elemen tunggal, menemukan bahwa itu sebenarnya campuran beberapa elemen tanah jarang.',
        discoveryStory: [
            { year: '1803', title: 'Cerit: Mineral yang Menyimpan Banyak Rahasia', body: 'Berzelius dan Hisinger menemukan elemen baru "cerium" dari mineral cerit pada 1803. Tapi cerit menyimpan lebih banyak rahasia — beberapa dekade kemudian terbukti cerit mengandung sejumlah elemen tanah jarang lain.' },
            { year: '1839', title: 'Mosander Memisahkan Lantanum', body: 'Carl Mosander, mantan murid Berzelius, menganalisis serium nitrat dan menemukan bahwa itu mengandung dua komponen berbeda. Ia berhasil memisahkan elemen baru yang ia namakan "lanthanum" dari bahasa Yunani "lanthanein" (tersembunyi) — karena ia tersembunyi di dalam serium.' },
            { year: '1841–1843', title: 'Lebih Banyak Elemen Tersembunyi', body: 'Mosander kemudian memisahkan "didymium" dari lantanum (1841), kemudian "erbium" dan "terbium" dari "ytria" (1843). Didymium kemudian terbukti campuran praseodimium dan neodimium (1885). Elemen tanah jarang ternyata sangat sulit dipisahkan satu sama lain.' },
            { year: 'Warisan', title: 'NiMH dan Optik', body: 'Lantanum adalah komponen dalam baterai NiMH (nikel-metal hidrida) — tipe baterai yang digunakan dalam kendaraan hybrid seperti Toyota Prius generasi awal. Lensa kamera dan teleskop berkualitas tinggi menggunakan kaca lantanum yang memiliki indeks bias tinggi dan dispersi rendah — menghasilkan gambar yang lebih tajam. Lantanum oksida digunakan sebagai katalis dalam pemurnian minyak bumi.' },
        ],
    },

    // ── Ce — Cerium ───────────────────────────────────────────────────────
    {
        sym: 'Ce',
        name: 'Jöns Berzelius & Wilhelm Hisinger',
        born: '1779 / 1766', died: '1848 / 1852',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/J%C3%B6ns_Jacob_Berzelius_-_h%C3%A4lft.jpg/440px-J%C3%B6ns_Jacob_Berzelius_-_h%C3%A4lft.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Cerium',
        shortBio: 'Berzelius dan Hisinger menemukan serium pada 1803 dari mineral cerit — elemen pertama lantanida yang ditemukan, dinamai dari asteroid Ceres yang baru ditemukan pada tahun yang sama.',
        discoveryStory: [
            { year: '1803', title: 'Asteroid dan Elemen Baru di Tahun yang Sama', body: 'Pada 1803 — tahun yang sama astronom menemukan asteroid Ceres — Berzelius dan Hisinger di Swedia, serta Martin Klaproth di Jerman secara independen, menemukan elemen baru dalam mineral cerit dari Bastnas, Swedia. Keduanya setuju menamainya "cerium" setelah asteroid Ceres.' },
            { year: '1875', title: 'Dipisahkan dari Lantanum', body: 'Setelah Mosander memisahkan "lantana" dari serium pada 1839, elemen tanah jarang dalam cerit terus dipisahkan satu per satu selama beberapa dekade berikutnya. Serium murni baru bisa diisolasi setelah teknik pemisahan yang canggih dikembangkan.' },
            { year: 'Warisan', title: 'Korek Api dan Kaca Berwarna', body: 'Batu korek api (batu api) mengandung campuran serium-besi (mischmetal) yang memercikkan api ketika digores. Serium oksida adalah polishing compound terbaik untuk kaca optik — digunakan untuk memoles layar LCD, kaca mobil, dan cermin teleskop. Serium juga membuat kaca tahan UV dan memberikan warna kuning-emas pada kaca.' },
        ],
    },

    // ── Pr — Praseodymium ─────────────────────────────────────────────────
    {
        sym: 'Pr',
        name: 'Carl Auer von Welsbach',
        born: '1858', died: '1929',
        nationality: '🇦🇹 Austria',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Carl_Auer_von_Welsbach.jpg/440px-Carl_Auer_von_Welsbach.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Carl_Auer_von_Welsbach',
        shortBio: 'Von Welsbach memisahkan "didymium" (yang dikira elemen tunggal) menjadi dua elemen berbeda pada 1885: praseodimium dan neodimium — menggunakan teknik kristalisasi fraksional yang sangat teliti.',
        discoveryStory: [
            { year: '1841', title: 'Didymium: Elemen yang Ternyata Bukan Elemen', body: 'Mosander memisahkan "didymium" dari lantanum pada 1841 — dari bahasa Yunani "didymos" (kembar) karena sifatnya sangat mirip lantanum. Selama 40 tahun lebih, didymium dianggap elemen tersendiri.' },
            { year: '1885', title: 'Von Welsbach Memisahkannya', body: 'Carl Auer von Welsbach melakukan ratusan kristalisasi fraksional dari garam didymium ammonium nitrat dan berhasil memisahkannya menjadi dua fraksi: hijau-kuning dan merah muda. Dua elemen berbeda!' },
            { year: '1885', title: '"Hijau-Ganda" dan "Baru-Ganda"', body: 'Ia menamainya "praseodymium" dari "prasios" (hijau) + "didymos" (kembar) — kembar hijau, dan "neodymium" dari "neos" (baru) + "didymos" — kembar baru.' },
            { year: 'Warisan', title: 'Kacamata Las dan Magnet Terkuat', body: 'Praseodimium memberikan warna hijau pada kaca dan enamel. Kacamata las menggunakan kaca praseodimium untuk menyaring cahaya kuning-oranye terang dari nyala las. Paduan praseodimium-neodimium dalam magnet Nd₂Fe₁₄B adalah magnet permanen terkuat yang diketahui — digunakan di semua motor listrik, hard disk, speaker premium, dan generator turbin angin.' },
        ],
    },

    // ── Nd — Neodymium ────────────────────────────────────────────────────
    {
        sym: 'Nd',
        name: 'Carl Auer von Welsbach',
        born: '1858', died: '1929',
        nationality: '🇦🇹 Austria',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Carl_Auer_von_Welsbach.jpg/440px-Carl_Auer_von_Welsbach.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Neodymium',
        shortBio: 'Von Welsbach menemukan neodimium bersamaan dengan praseodimium pada 1885. Neodimium kemudian menjadi bahan utama magnet permanen terkuat yang pernah dibuat — magnet yang menggerakkan revolusi kendaraan listrik.',
        discoveryStory: [
            { year: '1885', title: 'Separuh dari Didymium', body: 'Ketika Von Welsbach memisahkan didymium, ia mendapatkan dua fraksi. Fraksi pertama (hijau-kuning) adalah praseodimium, fraksi kedua (merah muda) adalah neodimium — "kembar baru" yang mengandung ion Nd³⁺ berwarna ungu-merah muda yang khas.' },
            { year: '1913', title: 'Pemurnian Sempurna', body: 'Neodimium murni sulit didapat selama puluhan tahun karena kemiripannya dengan elemen tanah jarang lain. Baru pada 1925 neodimium cukup murni untuk dikarakterisasi secara menyeluruh.' },
            { year: '1982', title: 'Magnet Nd₂Fe₁₄B', body: 'Pada 1982, Masato Sagawa di Sumitomo Special Metals dan tim lain menemukan bahwa paduan Nd₂Fe₁₄B memiliki energi magnet jauh lebih tinggi dari semua magnet permanen sebelumnya. Ini adalah revolusi.' },
            { year: 'Warisan', title: 'di Balik Revolusi EV', body: 'Magnet neodimium ada di: motor setiap kendaraan listrik Tesla, BMW, BYD, motor setiap hard disk drive, pengeras suara premium, headphone, MRI (coil gradient), generator turbin angin onshore dan offshore. Satu Tesla Model S menggunakan sekitar 2 kg magnet neodimium. Permintaan neodimium meledak seiring adopsi EV global.' },
        ],
    },

    // ── Pm — Promethium ───────────────────────────────────────────────────
    {
        sym: 'Pm',
        name: 'Jacob Marinsky, Lawrence Glendenin & Charles Coryell',
        born: '1918 / 1918 / 1912', died: '2005 / 2008 / 1971',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Promethium.jpg/440px-Promethium.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Promethium',
        shortBio: 'Prometium ditemukan pada 1945 di Oak Ridge (Proyek Manhattan) dari produk fisi uranium dalam reaktor nuklir — satu-satunya lantanida yang tidak memiliki isotop stabil dan tidak ada di alam secara berarti.',
        discoveryStory: [
            { year: '1902–1940', title: 'Pencarian Selama 40 Tahun', body: 'Elemen nomor 61 adalah "lubang" terakhir dalam lantanida. Berbagai kelompok mengklaim menemukannya di alam: "illinium" (1926), "florentium" (1926), "cyclonium" (1938) — semuanya tidak terbukti. Elemen ini sepertinya tidak ada di alam.' },
            { year: '1945', title: 'Produk Reaktor Nuklir', body: 'Marinsky, Glendenin, dan Coryell bekerja di Oak Ridge National Laboratory — fasilitas kunci Proyek Manhattan. Mereka menganalisis produk fisi dari reaktor nuklir menggunakan kromatografi ion-penukar baru, dan memisahkan elemen 61 murni.' },
            { year: '1945', title: 'Dinamai Prometheus', body: 'Mereka menamainya "promethium" dari Prometheus — titan yang mencuri api dari para dewa dan memberikannya kepada manusia — sebagai alegori penggunaan energi nuklir yang kuat dan berbahaya yang memunculkannya.' },
            { year: 'Warisan', title: 'Sumber Radiasi untuk Ruang Angkasa', body: 'Prometium-147 digunakan dalam baterai nuklir (betavoltaic) untuk satelit dan wahana antariksa yang beroperasi jauh dari matahari. Juga digunakan dalam alat pengukur ketebalan material industri dan sebagai sumber cahaya dalam jam tangan lama. Setiap sampel harus dibuat baru secara buatan — tidak ada di alam dalam jumlah terukur.' },
        ],
    },

    // ── Sm — Samarium ─────────────────────────────────────────────────────
    {
        sym: 'Sm',
        name: 'Paul Émile Lecoq de Boisbaudran',
        born: '1838', died: '1912',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lecoq_de_Boisbaudran.jpg/440px-Lecoq_de_Boisbaudran.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Samarium',
        shortBio: 'Lecoq de Boisbaudran (yang juga menemukan galium) memisahkan samarium dari mineral samarskit pada 1879 menggunakan spektroskopi. Samarskit sendiri dinamai dari Vasili Samarsky-Bykhovets, pejabat tambang Rusia.',
        discoveryStory: [
            { year: '1879', title: 'Dari Mineral Samarskit', body: 'Paul Lecoq menganalisis mineral samarskit dari Ural menggunakan spektroskopi dan menemukan garis-garis baru yang tidak dikenal. Ia memisahkan oksida baru yang ia namai "samarium" dari mineral tempat ia menemukannya.' },
            { year: '1879', title: 'Elemen Pertama Dinamai dari Orang (Bukan Mitologi)', body: 'Samarium dinamai dari samarskit yang dinamai dari Vasili Samarsky-Bykhovets — menjadikan samarium elemen pertama yang secara tidak langsung dinamai dari orang yang masih hidup. Samarsky secara ironis tidak pernah melakukan penelitian kimia sendiri.' },
            { year: 'Warisan', title: 'Magnet Samarium-Kobalt', body: 'Magnet samarium-kobalt (SmCo₅ atau Sm₂Co₁₇) adalah magnet permanen terkuat sebelum magnet neodimium ditemukan. Keunggulan SmCo adalah ketahanan suhu tinggi (bekerja hingga 350°C) — digunakan dalam mesin jet, motor turbo, dan lingkungan bersuhu tinggi di mana magnet neodimium gagal. Samarium oksida juga katalis penting dan komponen dalam laser.' },
        ],
    },

    // ── Eu — Europium ─────────────────────────────────────────────────────
    {
        sym: 'Eu',
        name: 'Eugène-Anatole Demarçay',
        born: '1852', died: '1904',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Europium.jpg/440px-Europium.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Europium',
        shortBio: 'Demarçay memisahkan europium dari samarium pada 1901 menggunakan spektroskopi — dan menamainya dari benua Eropa. Europium adalah elemen paling reaktif di antara lantanida — terbakar langsung di udara dingin.',
        discoveryStory: [
            { year: '1896', title: 'Kontaminan Samarium', body: 'Saat mempelajari samarium, Demarçay melihat garis spektral yang tidak bisa ia jelaskan. Ia menduga ada elemen lain yang bersembunyi dalam sampel samarium.' },
            { year: '1901', title: 'Europium', body: 'Setelah bertahun-tahun upaya pemurnian dan kristalisasi fraksional, Demarçay berhasil memisahkan elemen baru. Ia menamakannya "europium" dari Eropa — nama yang sangat sederhana dibanding penamaan latin dan mitologis yang umum.' },
            { year: 'Warisan', title: 'Merah di Layar TV dan Uang Anti-Palsu', body: 'Europium adalah sumber warna merah dalam layar TV tabung (CRT) dan masih digunakan dalam lampu fluoresen. Tapi yang paling penting: europium digunakan dalam tinta fluoresen anti-pemalsuan pada uang euro (dan banyak mata uang lain). Di bawah sinar UV, tanda europium bersinar oranye-merah — hampir tidak mungkin dipalsukan tanpa elemen langka ini.' },
        ],
    },

    // ── Gd — Gadolinium ───────────────────────────────────────────────────
    {
        sym: 'Gd',
        name: 'Jean Charles Galissard de Marignac',
        born: '1817', died: '1894',
        nationality: '🇨🇭 Swiss',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jean_Charles_Galissard_de_Marignac_2.jpg/440px-Jean_Charles_Galissard_de_Marignac_2.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Gadolinium',
        shortBio: 'Marignac memisahkan gadolinium pada 1880 dari didimia yang ia ketahui mengandung lebih dari satu elemen. Dinamai dari Johan Gadolin — kimiawan Finlandia penemu yttrium — sebagai penghormatan.',
        discoveryStory: [
            { year: '1880', title: 'Dua Oksida dalam Satu', body: 'Marignac menganalisis didimia (campuran elemen tanah jarang) dan menemukan bahwa ia mengandung dua komponen berbeda — salah satunya baru. Ia menyebutnya "gadoline" setelah Johan Gadolin.' },
            { year: '1886', title: 'Lecoq Mengkonfirmasi', body: 'Paul Lecoq memperkuat penemuan Marignac dan mengisolasi gadolinium secara lebih murni, mengkonfirmasi bahwa ini memang elemen tersendiri.' },
            { year: 'Warisan', title: 'Agen Kontras MRI', body: 'Gadolinium memiliki momen magnetik yang sangat besar — lebih dari elemen lain manapun pada suhu rendah. Ini membuatnya berguna sebagai agen kontras MRI: senyawa kompleks gadolinium disuntikkan sebelum MRI, dan ia membuat jaringan lunak tertentu terlihat lebih jelas dalam hasil scan. Lebih dari 30 juta dosis agen kontras gadolinium digunakan setiap tahun secara global.' },
        ],
    },

    // ── Tb — Terbium ──────────────────────────────────────────────────────
    {
        sym: 'Tb',
        name: 'Carl Gustaf Mosander',
        born: '1797', died: '1858',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Carl_Gustaf_Mosander.jpg/440px-Carl_Gustaf_Mosander.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Terbium',
        shortBio: 'Mosander memisahkan terbium bersama erbium dari yttria (tanah yttrium) pada 1843 — elemen ketiga yang ia temukan setelah lantanum dan didymium. Dinamai dari Ytterby.',
        discoveryStory: [
            { year: '1843', title: 'Tiga Oksida dari Yttria', body: 'Mosander menganalisis yttria (yang semula dikira satu oksida elemen) dengan sangat teliti dan memisahkannya menjadi tiga fraksi: yttria asli (Y), erbium (Er), dan terbium (Tb) — semua dari mineral yang sama dari Ytterby.' },
            { year: '1843', title: 'Dinamai Ytterby untuk Ketiga Kalinya', body: 'Yttrium (Y dari Ytterby), terbium (Tb dari Ytterby), erbium (Er dari Ytterby) — tiga elemen dari satu desa kecil Swedia dalam satu mineral. Kemudian ytterbium juga ditambahkan dari mineral yang sama.' },
            { year: 'Warisan', title: 'Hijau Terbanding di Layar', body: 'Terbium menghasilkan fluoresensi hijau yang sangat cerah dan efisien — digunakan dalam lampu fluoresen tiga-warna dan layar hi-fi, menghasilkan warna hijau yang kaya. Terbium juga memiliki sifat magnetostriktif terbesar (mengubah bentuk di medan magnet) — digunakan dalam transduser sonar bawah laut presisi tinggi.' },
        ],
    },

    // ── Dy — Dysprosium ───────────────────────────────────────────────────
    {
        sym: 'Dy',
        name: 'Paul Émile Lecoq de Boisbaudran',
        born: '1838', died: '1912',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lecoq_de_Boisbaudran.jpg/440px-Lecoq_de_Boisbaudran.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Dysprosium',
        shortBio: 'Lecoq de Boisbaudran memisahkan disprosium dari holmia pada 1886 setelah serangkaian percobaan yang sangat melelahkan — dan menamainya "disprosium" dari bahasa Yunani "dysprositos" (sulit didapat).',
        discoveryStory: [
            { year: '1886', title: 'Yang Sangat Sulit Didapat', body: 'Lecoq menganalisis erbiumia dan holmia yang menurutnya mengandung elemen lain. Setelah 32 kali presipitasi yang sangat membosankan dan melelahkan, ia berhasil memisahkan elemen baru.' },
            { year: '1886', title: '"Sulit Didapat"', body: 'Ia menamainya "dysprosium" dari bahasa Yunani "dysprositos" (sulit didapat, sulit diakses) — sebagai ekspresi kelelahan dan frustrasi atas sulitnya pemisahan yang ia alami.' },
            { year: 'Warisan', title: 'Magnet EV yang Tahan Panas', body: 'Disprosium ditambahkan ke magnet neodimium untuk meningkatkan ketahanan suhu tinggi — sangat penting untuk motor EV yang memanas saat beroperasi. Beberapa ton disprosium digunakan dalam setiap pabrik magnet EV skala besar. China menguasai hampir 100% produksi disprosium dunia — menciptakan ketergantungan geopolitik yang signifikan.' },
        ],
    },

    // ── Ho — Holmium ──────────────────────────────────────────────────────
    {
        sym: 'Ho',
        name: 'Per Teodor Cleve',
        born: '1840', died: '1905',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Per_Teodor_Cleve.jpg/440px-Per_Teodor_Cleve.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Per_Teodor_Cleve',
        shortBio: 'Cleve memisahkan holmium (dan tulium) dari erbium pada 1879. Holmium dinamai dari Stockholm (Holmia dalam bahasa Latin), kota tempat ia bekerja.',
        discoveryStory: [
            { year: '1879', title: 'Dua dari Erbium', body: 'Per Teodor Cleve menganalisis erbiumia yang ia curigai heterogen. Dengan pemisahan teliti, ia mendapatkan dua fraksi baru: holmium (merah) dan tulium (hijau).' },
            { year: '1879', title: 'Dari Kota Stockholm', body: 'Cleve menamainya "holmium" dari "Holmia" — nama Latin untuk Stockholm. Ini menjadikan holmium satu dari sedikit elemen yang dinamai dari kota (bukan negara, mineral, atau tokoh mitologi).' },
            { year: 'Warisan', title: 'Momen Magnetik Terbesar', body: 'Holmium memiliki momen magnetik atom terbesar dari semua elemen — sifat yang dieksploitasi dalam pembuatan kutub magnet sangat kuat untuk MRI dan akselerator partikel. Laser holmium (Ho:YAG) digunakan dalam urologi untuk memecah batu ginjal dan dalam operasi tulang rawan.' },
        ],
    },

    // ── Er — Erbium ───────────────────────────────────────────────────────
    {
        sym: 'Er',
        name: 'Carl Gustaf Mosander',
        born: '1797', died: '1858',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Carl_Gustaf_Mosander.jpg/440px-Carl_Gustaf_Mosander.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Erbium',
        shortBio: 'Mosander memisahkan erbium dari yttria pada 1843 bersamaan dengan terbium — keduanya dinamai dari Ytterby. Ion erbium menghasilkan warna merah muda dalam kaca dan kristal.',
        discoveryStory: [
            { year: '1843', title: 'Dari Yttria Bersama Terbium', body: 'Mosander memisahkan yttria menjadi tiga bagian pada 1843: yttrium, terbium, dan erbium. Ion Er³⁺ memberi warna merah muda pada larutan.' },
            { year: '1843', title: 'Keempat dari Ytterby', body: 'Erbium adalah elemen keempat yang namanya terinspirasi dari Ytterby — setelah yttrium, terbium, dan (kemudian) ytterbium. Satu desa kecil Swedia yang melampaui semua kota besar dalam kontribusi nama elemen.' },
            { year: 'Warisan', title: 'Tulang Punggung Internet Global', body: 'Erbium-doped fiber amplifier (EDFA) adalah komponen kritis dalam jaringan serat optik global. Serat kaca yang mengandung sedikit erbium dapat memperkuat sinyal cahaya langsung tanpa mengubahnya ke sinyal listrik — memungkinkan jaringan internet transokeanic berkecepatan tinggi. Tanpa erbium, internet seperti yang kita kenal tidak akan mungkin ada.' },
        ],
    },

    // ── Tm — Thulium ──────────────────────────────────────────────────────
    {
        sym: 'Tm',
        name: 'Per Teodor Cleve',
        born: '1840', died: '1905',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Per_Teodor_Cleve.jpg/440px-Per_Teodor_Cleve.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Thulium',
        shortBio: 'Cleve memisahkan tulium dari erbium/holmia pada 1879 dan menamainya dari "Thule" — nama mitologis Skandinavia untuk tanah paling utara di ujung dunia.',
        discoveryStory: [
            { year: '1879', title: 'Saudara Holmium', body: 'Cleve memisahkan tulium bersamaan dengan holmium dari erbiumia pada 1879. Ion Tm³⁺ memberikan fluoresensi biru-putih yang halus.' },
            { year: '1879', title: '"Thule": Ujung Dunia', body: 'Thule adalah nama mitologis Skandinavia untuk daratan paling utara di dunia — konsep geografis kuno yang tidak pernah dikonfirmasi. Cleve menamainya demikian karena tulium adalah elemen paling langka di antara lantanida (kecuali prometium yang radioaktif).' },
            { year: 'Warisan', title: 'Laser Portabel dan Peralatan Medis', body: 'Tulium adalah lantanida paling langka dalam kerak bumi — hanya sekitar 0,5 ppm. Laser tulium (Tm:YAG) menghasilkan emisi inframerah 2 μm yang diserap sangat efisien oleh air — sehingga memotong jaringan lunak dengan sangat akurat tanpa membakar sel di sekitarnya. Digunakan dalam bedah laser minimal invasif, urologi, dan pengobatan kanker.' },
        ],
    },

    // ── Yb — Ytterbium ────────────────────────────────────────────────────
    {
        sym: 'Yb',
        name: 'Jean Charles Galissard de Marignac',
        born: '1817', died: '1894',
        nationality: '🇨🇭 Swiss',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jean_Charles_Galissard_de_Marignac_2.jpg/440px-Jean_Charles_Galissard_de_Marignac_2.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Ytterbium',
        shortBio: 'Marignac memisahkan ytterbia (ytterbium) dari erbia pada 1878 — dan seperti pendahulunya, menamainya dari desa Ytterby, Swedia yang tak ada habisnya menghasilkan elemen baru.',
        discoveryStory: [
            { year: '1878', title: 'Ytterby untuk Keempat Kalinya', body: 'Marignac, menganalisis erbia (erbium oksida), menemukan bahwa mengandung dua komponen. Ia memisahkan komponen baru dan menamainya ytterbia — ytterbium — dari Ytterby yang sudah memberikan tiga elemen sebelumnya.' },
            { year: '1907', title: 'Urbain Memisahkan Lutesium', body: 'George Urbain kemudian menemukan bahwa ytterbia sendiri mengandung dua elemen: ytterbium murni dan lutesium — membuat Ytterby the village secara tidak langsung berkontribusi pada lima elemen total.' },
            { year: 'Warisan', title: 'Jam Atom Paling Akurat', body: 'Jam optik ytterbium memegang rekor akurasi terbaik — lebih akurat dari jam atom sesium 100 kali lipat. Jam ini hanya akan kehilangan satu detik dalam 10 miliar tahun — lebih lama dari usia alam semesta saat ini. Teknologi ini sedang dikembangkan untuk mendefinisikan ulang satu detik dalam SI units.' },
        ],
    },

    // ── Lu — Lutetium ─────────────────────────────────────────────────────
    {
        sym: 'Lu',
        name: 'Georges Urbain',
        born: '1872', died: '1938',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Georges_Urbain.jpg/440px-Georges_Urbain.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Georges_Urbain',
        shortBio: 'Urbain memisahkan lutesium dari ytterbium pada 1907 — elemen lantanida terakhir yang ditemukan. Dinamai dari "Lutetia", nama Latin untuk Paris.',
        discoveryStory: [
            { year: '1907', title: 'Tiga Klaim Bersamaan', body: 'Tiga ilmuwan secara independen mengklaim menemukan elemen ke-71 hampir bersamaan: Georges Urbain (Paris, 1907), Carl Auer von Welsbach (Vienna, 1907), dan Charles James (New Hampshire, 1907). Ketiga kelompok memisahkan elemen dari ytterbia dengan cara yang sama.' },
            { year: '1907', title: '"Cassiopeia" vs "Lutecium"', body: 'Welsbach menamainya "cassiopeium" (Cp), Urbain menamainya "lutecium" dari nama Latin Paris. Setelah perdebatan bertahun-tahun, Urbain diberi prioritas penemuan dan nama "lutetium" (diubah ejaannya) menjadi resmi pada 1949.' },
            { year: 'Warisan', title: 'PET Scan dan Terapi Kanker', body: 'Lutetium-177 digunakan dalam pengobatan kanker neuroendokrin — menarget sel tumor dengan presisi tinggi dan merusak DNA-nya dengan emisi beta. Terapi PRRT (peptide receptor radionuclide therapy) dengan Lu-177 telah menunjukkan hasil yang menjanjikan untuk jenis kanker yang sebelumnya tidak bisa diobati. Lutesium oksida digunakan dalam fosfor scintilasi PET scanner.' },
        ],
    },

    // ── Ac — Actinium ─────────────────────────────────────────────────────
    {
        sym: 'Ac',
        name: 'André-Louis Debierne',
        born: '1874', died: '1949',
        nationality: '🇫🇷 Prancis',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Actinium_sample_%2831481701837%29.png/440px-Actinium_sample_%2831481701837%29.png',
        wikiUrl: 'https://en.wikipedia.org/wiki/Actinium',
        shortBio: 'Debierne menemukan aktinium pada 1899 dari residu pitchblende — setahun setelah Curie menemukan polonium dan radium dari mineral yang sama. Aktinium memberi nama seluruh seri aktinida.',
        discoveryStory: [
            { year: '1899', title: 'Residu Pitchblende Curie', body: 'André Debierne, asisten Marie Curie di Institut Radium, menganalisis residu pitchblende setelah Curie mengekstrak radium dan polonium. Ia menemukan aktivitas radioaktif baru — elemen baru yang terkait dengan titanium dan torium.' },
            { year: '1900', title: 'Debuterne atau Giesel?', body: 'Friedrich Giesel secara independen menemukan elemen yang sama pada 1900 dan menamainya "emanium". Setelah analisis panjang, keduanya terbukti elemen identik. Debierne diberi prioritas penemuan.' },
            { year: '1899', title: 'Dinamai "Sinar"', body: 'Debierne menamainya "actinium" dari bahasa Yunani "aktis" (sinar) — mengacu pada radioaktivitasnya yang kuat. Aktinium memberi nama seluruh seri elemen 89–103 yang disebut "aktinida".' },
            { year: 'Warisan', title: 'Terapi Kanker Alpha', body: 'Aktinium-225 sedang dikembangkan sebagai agen untuk targeted alpha therapy (TAT) — salah satu pendekatan pengobatan kanker paling menjanjikan. Satu atom Ac-225 dapat menghasilkan 4 partikel alfa sebelum meluruh menjadi bismut stabil, memberikan konsentrasi dosis yang sangat tinggi ke sel kanker.' },
        ],
    },

    // ── Th — Thorium ──────────────────────────────────────────────────────
    {
        sym: 'Th',
        name: 'Jöns Jacob Berzelius',
        born: '1779', died: '1848',
        nationality: '🇸🇪 Swedia',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/J%C3%B6ns_Jacob_Berzelius_-_h%C3%A4lft.jpg/440px-J%C3%B6ns_Jacob_Berzelius_-_h%C3%A4lft.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Thorium',
        shortBio: 'Berzelius menemukan torium pada 1829 dari mineral throite — dan menamainya dari Thor, dewa petir Norse. Radioaktivitasnya baru ditemukan oleh Marie Curie pada 1898.',
        discoveryStory: [
            { year: '1829', title: 'Mineral Hitam dari Norwegia', body: 'Berzelius menganalisis mineral yang dikirim oleh pendeta Esmark dari Norwegia. Ia mengidentifikasi oksida baru — "Thorerde" (tanah thor). Ia menamainya setelah Thor, dewa Norwegia kuno.' },
            { year: '1898', title: 'Marie Curie Menemukan Radioaktivitasnya', body: 'Saat menyelidiki radioaktivitas, Marie Curie menemukan bahwa torium juga memancarkan radiasi. Ini adalah penemuan pertama bahwa uranium bukan satu-satunya elemen radioaktif.' },
            { year: '1900', title: 'Thoron: Gas Radioaktif dari Torium', body: 'Rutherford menemukan bahwa torium memancarkan gas radioaktif. Ia menyebutnya "emanasi torium" (kini dikenal sebagai radon-220 atau thoron).' },
            { year: 'Warisan', title: 'Reaktor Nuklir Masa Depan', body: 'Torium lebih melimpah dari uranium, menghasilkan lebih sedikit limbah radioaktif, dan tidak bisa langsung digunakan untuk senjata nuklir — membuatnya kandidat bahan bakar reaktor nuklir generasi selanjutnya. India, yang punya cadangan torium terbesar di dunia, sedang mengembangkan reaktor torium. Kelemahan: siklus bahan bakar torium lebih kompleks dan membutuhkan infrastruktur berbeda.' },
        ],
    },

    // ── Pa — Protactinium ─────────────────────────────────────────────────
    {
        sym: 'Pa',
        name: 'Otto Hahn & Lise Meitner',
        born: '1879 / 1878', died: '1968 / 1968',
        nationality: '🇩🇪 Jerman / 🇦🇹 Austria',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Lise_Meitner_%281878-1968%29%2C_lecturing_at_Catholic_University%2C_Washington%2C_D.C.%2C_1946.jpg/440px-Lise_Meitner_%281878-1968%29%2C_lecturing_at_Catholic_University%2C_Washington%2C_D.C.%2C_1946.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Protactinium',
        shortBio: 'Hahn dan Meitner menemukan protaktinium pada 1917 — hanya beberapa bulan setelah Fajans dan Göhring menemukan isotop berumur pendek yang sama. Lise Meitner, yang bekerja dengan Hahn selama puluhan tahun, nantinya menemukan fisi nuklir secara teoritis.',
        discoveryStory: [
            { year: '1913', title: 'Isotop Berumur Pendek Ditemukan Lebih Dulu', body: 'Kasimir Fajans dan Oswald Göhring menemukan isotop Pa-234 (waktu paruh 1,17 menit) pada 1913 dan menamainya "brevium" (singkat). Tapi isotop ini terlalu singkat untuk menjadi "elemen" yang bermakna.' },
            { year: '1917', title: 'Hahn dan Meitner: Isotop Berumur Panjang', body: 'Otto Hahn dan Lise Meitner di Berlin menemukan isotop Pa-231 (waktu paruh 32.760 tahun) — bentuk yang stabil cukup untuk mengkarakterisasi elemen baru. Mereka menamainya "protoactinium" karena ia meluruh menjadi actinium.' },
            { year: '1949', title: 'Disingkat "Protactinium"', body: 'IUPAC menyingkat nama "protoactinium" menjadi "protactinium" pada 1949.' },
            { year: 'Warisan', title: 'Penanda Waktu Geologis', body: 'Rasio Pa-231 terhadap Th-230 digunakan dalam penanggalan geologis sedimen laut — mirip dengan karbon-14 untuk arkeologi, tapi untuk skala waktu ribuan hingga jutaan tahun. Paleontolog menggunakannya untuk menentukan usia lapisan sedimen dan memahami sirkulasi iklim kuno.' },
        ],
    },

    // ── Np — Neptunium ────────────────────────────────────────────────────
    {
        sym: 'Np',
        name: 'Edwin McMillan & Philip Abelson',
        born: '1907 / 1913', died: '1991 / 2004',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Edwin_McMillan.jpg/440px-Edwin_McMillan.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Neptunium',
        shortBio: 'McMillan dan Abelson menemukan neptunium pada 1940 di UC Berkeley — elemen transurania pertama yang dibuat manusia, dengan membombardir uranium dengan neutron. Dinamai dari planet Neptunus, setelah uranium yang dinamai Uranus.',
        discoveryStory: [
            { year: '1940', title: 'Melampaui Uranium', body: 'Edwin McMillan di UC Berkeley menembakkan neutron ke uranium-238. Ia mengamati isotop radioaktif baru yang bukan uranium dan bukan produk fisi yang diketahui — elemen nomor 93, melampaui uranium sebagai elemen paling berat yang diketahui.' },
            { year: '1940', title: 'Abelson Mengkonfirmasi', body: 'Philip Abelson bergabung dengan McMillan dan mengkonfirmasi bahwa ini elemen baru melalui analisis kimia yang teliti — membuktikan bahwa elemen baru ini memiliki kimia berbeda dari uranium.' },
            { year: '1940', title: 'Planet di Luar Uranus', body: 'Karena uranium dinamai dari planet Uranus, dan neptunium adalah elemen "setelah" uranium, mereka menamakannya dari planet berikutnya: Neptunium. Plutonium kemudian menyusul dari Pluto.' },
            { year: 'Warisan', title: 'Elemen Pertama dari Siklotron', body: 'Neptunium-237 (waktu paruh 2,14 juta tahun) adalah produk sampingan reaktor nuklir. Ia sendiri adalah bahan awal untuk menghasilkan plutonium-238 — sumber panas termal untuk generator listrik wahana antariksa (RTG, seperti yang digunakan dalam Voyager, Cassini, dan rover Mars). McMillan memenangkan Nobel Kimia 1951 atas penemuan ini.' },
        ],
    },

    // ── Am — Americium ────────────────────────────────────────────────────
    {
        sym: 'Am',
        name: 'Glenn Seaborg, Ralph James, Leon Morgan & Albert Ghiorso',
        born: '1912 / 1920 / 1919 / 1915', died: '1999 / 1973 / 2015 / 2004',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Americium',
        shortBio: 'Seaborg dan timnya membuat americium pada 1944–45 di Chicago Metallurgical Laboratory (Proyek Manhattan) dengan membombardir plutonium dengan neutron. Penemuannya dirahasiakan hingga perang usai.',
        discoveryStory: [
            { year: '1944', title: 'Proyek Terclassified', body: 'Glenn Seaborg, Ralph James, Leon Morgan, dan Albert Ghiorso bekerja secara rahasia di University of Chicago dalam konteks Proyek Manhattan. Mereka membombardir plutonium-239 dengan neutron dan menghasilkan elemen baru.' },
            { year: '1945', title: 'Diungkapkan di Radio', body: 'Setelah perang berakhir, Seaborg mengungkapkan penemuan americium dan curium dalam... siaran radio anak-anak. Ia menjadi tamu di acara "Quiz Kids" pada November 1945 dan menyebutkan dua elemen baru sebelum makalah ilmiahnya diterbitkan.' },
            { year: '1945', title: 'Dari Amerika, untuk Amerika', body: 'Americium dinamai dari benua Amerika — melengkapi europium (Eropa) dan germanium (Jerman). Americium-241 (Am-241) adalah isotop yang paling terkenal karena memiliki waktu paruh 432 tahun.' },
            { year: 'Warisan', title: 'Di Detektor Asap Rumahmu', body: 'Am-241 adalah sumber radiasi dalam detektor asap ionisasi — yang ada di sebagian besar rumah, hotel, dan gedung di dunia. Americium memancarkan partikel alfa yang mengionisasi udara dalam ruang kecil. Ketika asap masuk, ionisasi terganggu, alarm berbunyi. Satu detektor asap mengandung sekitar 1 mikrogram Am-241.' },
        ],
    },

    // ── Cm — Curium ───────────────────────────────────────────────────────
    {
        sym: 'Cm',
        name: 'Glenn Seaborg, Ralph James & Albert Ghiorso',
        born: '1912 / 1920 / 1915', died: '1999 / 1973 / 2004',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Curium',
        shortBio: 'Kurium dibuat pada 1944 di Proyek Manhattan bersamaan dengan americium, dengan membombardir plutonium-239 dengan partikel alfa — dan dinamai untuk menghormati Marie dan Pierre Curie.',
        discoveryStory: [
            { year: '1944', title: 'Alpha di atas Plutonium', body: 'Tim Seaborg menembakkan partikel alfa ke plutonium-239 menggunakan siklotron 60 inci di UC Berkeley, menghasilkan curium-242 (waktu paruh 163 hari). Ini terjadi sebelum americium — tapi karena americium lebih mudah dikarakterisasi, americium diumumkan pertama kali.' },
            { year: '1944', title: 'Untuk Menghormati Curie', body: 'Seaborg menamainya "curium" untuk menghormati Marie dan Pierre Curie — pasangan ilmuwan yang menemukan radioaktivitas. Sangat tepat karena kurium adalah produk dari reaksi inti atom yang intensitasnya ribu kali lebih radioaktif dari radium.' },
            { year: 'Warisan', title: 'Pemanas Wahana Antariksa', body: 'Curium-244 (waktu paruh 18 tahun) menghasilkan panas sangat tinggi dari peluruhan alfa — digunakan dalam radioisotope thermoelectric generator (RTG) untuk beberapa misi antariksa. Spektrometer sinar-X alfa berbasis curium-244 digunakan di Mars Pathfinder untuk menganalisis komposisi batuan Mars.' },
        ],
    },

    // ── Bk — Berkelium ────────────────────────────────────────────────────
    {
        sym: 'Bk',
        name: 'Glenn Seaborg, Stanley Thompson & Albert Ghiorso',
        born: '1912 / 1912 / 1915', died: '1999 / 1976 / 2004',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Berkelium',
        shortBio: 'Berkelium dibuat pada 1949 di University of California Berkeley dengan membombardir americium dengan partikel alfa. Dinamai dari kota Berkeley, California — mengikuti pola europium (Eropa) dan americium (Amerika).',
        discoveryStory: [
            { year: '1949', title: 'Alpha di atas Americium', body: 'Seaborg, Thompson, dan Ghiorso menembakkan partikel alfa ke americium-241 menggunakan siklotron 60 inci di Berkeley, menghasilkan hanya beberapa mikrogram berkelium-243.' },
            { year: '1949', title: '"Berkeley" menjadi Elemen', body: 'Mereka menamainya "berkelium" dari Berkeley — kota di California tempat University of California berdiri. Seaborg kemudian berkelakar bahwa ini membuktikan bahwa dunia tidak berakhir di pantai timur Amerika.' },
            { year: 'Warisan', title: 'Bahan Baku untuk Tennessine', body: 'Dalam jumlah sangat kecil, berkelium digunakan sebagai target untuk membuat elemen superberat — berkelium-249 ditembaki kalsium-48 untuk menghasilkan elemen 117 (tennessine) pada 2010. Proses ini membutuhkan miligraam Bk-249 — yang membutuhkan berbulan-bulan produksi intensif di Oak Ridge.' },
        ],
    },

    // ── Cf — Californium ──────────────────────────────────────────────────
    {
        sym: 'Cf',
        name: 'Glenn Seaborg, Stanley Thompson, Kenneth Street & Albert Ghiorso',
        born: '1912 / 1912 / 1920 / 1915', died: '1999 / 1976 / 2006 / 2004',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Californium',
        shortBio: 'Californium dibuat pada 1950 di Berkeley dengan membombardir curium-242 dengan partikel alfa — dan dinamai dari negara bagian California tempat ia dibuat.',
        discoveryStory: [
            { year: '1950', title: 'Sepuluh Jam Iradiasi', body: 'Tim membutuhkan iradiasi curium-242 dalam waktu sangat lama untuk menghasilkan californium dalam jumlah yang bisa dideteksi — hanya beberapa ribu atom saat pertama kali dibuat.' },
            { year: '1950', title: 'California', body: 'Dinamai dari negara bagian California — tempat Berkeley berada. Seaborg dan timnya telah membuat tradisi menamakan elemen baru dari tempat mereka bekerja (berkelium dan californium) melanjutkan pola yang dimulai europium dan americium.' },
            { year: 'Warisan', title: 'Neutron untuk Operasi Reaktor dan Deteksi Mineral', body: 'Californium-252 adalah pemancar neutron terkuat yang tersedia — satu mikrogram Cf-252 memancarkan 170 juta neutron per menit. Digunakan untuk menyalakan reaktor nuklir (neutron awal untuk fisi berantai), mendeteksi bahan peledak di bandara, survey uranium dan emas dari udara, dan terapi neutron kanker (terutama kanker leher rahim). Harganya sekitar $27 juta per gram.' },
        ],
    },

    // ── Es — Einsteinium ──────────────────────────────────────────────────
    {
        sym: 'Es',
        name: 'Seaborg, Ghiorso & tim Oak Ridge/Argonne/Los Alamos',
        born: '—', died: '—',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Einsteinium',
        shortBio: 'Einsteinium ditemukan pada puing-puing bom hidrogen "Ivy Mike" yang diledakkan pada November 1952 — bersama fermium. Penemuannya dirahasiakan selama tiga tahun. Dinamai untuk menghormati Albert Einstein.',
        discoveryStory: [
            { year: '1952', title: 'Di Dalam Abu Bom Hidrogen', body: 'Pada 1 November 1952, AS meledakkan bom hidrogen pertama — "Ivy Mike" di Kepulauan Marshall. Tim ilmuwan mengumpulkan debu dan puing dari area uji dengan pesawat filter. Dalam debu itu ditemukan dua elemen baru yang belum pernah ada sebelumnya: einsteinium dan fermium — produk dari neutron yang menembak uranium berulang kali.' },
            { year: '1953–1955', title: 'Dua Tahun Dirahasiakan', body: 'Pemerintah AS merahasiakan penemuan ini selama hampir tiga tahun karena berkaitan dengan teknologi senjata nuklir rahasia. Baru pada 1955 publikasi ilmiah mengumumkan einsteinium dan fermium.' },
            { year: '1955', title: 'Dinamai Einstein', body: 'Dinamai untuk menghormati Albert Einstein — ironi yang mendalam, karena Einstein sendiri menandatangani surat yang mendesak Franklin Roosevelt untuk mengembangkan bom atom (Surat Einstein-Szilard, 1939), tapi kemudian menyesal akan konsekuensinya.' },
            { year: 'Warisan', title: 'Hanya Beberapa Microgram', body: 'Einsteinium sangat sulit dibuat — hanya gramogram yang pernah ada. Digunakan dalam riset fundamental tentang sifat elemen transurania. Pada 2021, peneliti Stanford berhasil mengkarakterisasi sifat kimia einsteinium untuk pertama kalinya dari hanya 200 nanogram — sampel terkecil yang pernah digunakan untuk studi kimia sistematis.' },
        ],
    },

    // ── Fm — Fermium ──────────────────────────────────────────────────────
    {
        sym: 'Fm',
        name: 'Seaborg, Ghiorso & tim multi-laboratorium',
        born: '—', died: '—',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Fermium',
        shortBio: 'Fermium ditemukan bersamaan dengan einsteinium dari abu bom hidrogen Ivy Mike pada 1952 — dan dinamai untuk menghormati Enrico Fermi yang membangun reaktor nuklir pertama di dunia.',
        discoveryStory: [
            { year: '1952', title: 'Bersama Einsteinium dari Ivy Mike', body: 'Dalam debu bom hidrogen Ivy Mike yang sama, tim ilmuwan juga menemukan fermium-255 — produk dari uranium-238 yang menangkap 17 neutron berurutan dan meluruh melalui beberapa emisi beta. Ini adalah reaksi nuklir yang belum pernah terlihat di laboratorium sebelumnya.' },
            { year: '1953–1955', title: 'Rahasia Bersama Einsteinium', body: 'Seperti einsteinium, penemuan fermium dirahasiakan selama hampir tiga tahun dan baru diungkapkan pada 1955.' },
            { year: '1955', title: 'Enrico Fermi', body: 'Dinamai untuk menghormati Enrico Fermi — fisikawan Itali-Amerika yang membangun reaktor nuklir pertama di dunia (Chicago Pile-1, 1942), memenangkan Nobel Fisika 1938, dan memimpin pengembangan teori fisi nuklir.' },
            { year: 'Warisan', title: 'Batas Alam Semesta Kimia', body: 'Fermium adalah elemen terberat yang bisa diproduksi dalam reaktor nuklir (dengan tangkapan neutron). Elemen di atasnya (101+) harus dibuat dengan cara berbeda — menabrakkan atom ke atom lain menggunakan akselerator partikel. Fermium menandai batas antara "elemen reaktor" dan "elemen akselerator".' },
        ],
    },

    // ── Md — Mendelevium ──────────────────────────────────────────────────
    {
        sym: 'Md',
        name: 'Glenn Seaborg, Albert Ghiorso & tim Berkeley',
        born: '1912 / 1915', died: '1999 / 2004',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Mendelevium',
        shortBio: 'Mendelevium dibuat pertama kali pada 1955 di Berkeley dengan menabrakkan partikel alfa pada einsteinium — satu atom pada satu waktu. Dinamai menghormati Dmitri Mendeleev, bapak tabel periodik.',
        discoveryStory: [
            { year: '1955', title: 'Satu Atom per Eksperimen', body: 'Tim Seaborg menembakkan partikel alfa ke einsteinium-253 (hanya 17 nanogram!) menggunakan siklotron Berkeley. Seluruh eksperimen menghasilkan hanya 17 atom mendelevium terdeteksi — mungkin ini eksperimen paling sensitif dalam sejarah kimia.' },
            { year: '1955', title: 'Mendeleev yang Visioner', body: 'Seaborg menamainya setelah Dmitri Mendeleev — karena dialah yang memprediksi keberadaan tempat kosong dalam tabel periodik puluhan tahun sebelumnya. Mendelevium sendiri menempati salah satu slot yang dipenuhi menggunakan fisika nuklir, bukan kimia alami.' },
            { year: 'Warisan', title: 'Uji Konsep Kimia Atom Tunggal', body: 'Mendelevium menandai era baru kimia — kimia atom tunggal. Untuk pertama kalinya, ilmuwan berhasil mengidentifikasi dan mempelajari kimia elemen dalam jumlah atom yang bisa dihitung. Teknik ini kemudian menjadi standar untuk elemen-elemen yang lebih berat.' },
        ],
    },

    // ── No — Nobelium ─────────────────────────────────────────────────────
    {
        sym: 'No',
        name: 'Tim Dubna (Soviet) & Tim Berkeley (AS)',
        born: '—', died: '—',
        nationality: '🇷🇺 Soviet / 🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Nobelium',
        shortBio: 'Penemuan nobelium disengketakan antara Nobel Institute Swedia (1957, tidak dikonfirmasi), Berkeley (1958, kemudian ditarik), dan tim Soviet Dubna (1966) — salah satu sengketa prioritas penemuan elemen paling panjang dalam sejarah.',
        discoveryStory: [
            { year: '1957', title: 'Klaim Pertama: Stockholm', body: 'Tim di Nobel Institute Stockholm mengklaim menemukan elemen 102 dari reaksi curium dengan karbon-13, menamainya "nobelium" menghormati Alfred Nobel. Tapi eksperimen mereka tidak bisa direproduksi.' },
            { year: '1958', title: 'Berkeley Mengklaim, Lalu Menarik', body: 'Tim Berkeley mengklaim menemukan nobelium pada 1958 dari curium + karbon-12, mengkonfirmasi nama nobelium. Tapi eksperimen mereka sendiri juga tidak konsisten dan kemudian ditarik sebagian.' },
            { year: '1966', title: 'Dubna Membuktikan', body: 'Tim Soviet di Dubna (JINR) pada 1966 menghasilkan dan mengidentifikasi nobelium secara definitif menggunakan curium + karbon. Meskipun begitu, nama "nobelium" tetap dipertahankan meski bukan tim Stockholm yang pertama membuktikannya.' },
            { year: 'Warisan', title: 'Elemen Nobel', body: 'Nobelium dinamai menghormati Alfred Nobel — penemu dinamit dan pendiri Hadiah Nobel. Ironi: Alfred Nobel sendiri sering tersiksa oleh dampak destruktif dinamitnya. Nobelium hanya dibuat dalam jumlah atom, tidak ada aplikasi praktis, tapi penting untuk memahami batas tabel periodik.' },
        ],
    },

    // ── Lr — Lawrencium ───────────────────────────────────────────────────
    {
        sym: 'Lr',
        name: 'Albert Ghiorso, Torbjørn Sikkeland, Almon Larsh & Robert Latimer',
        born: '1915 / 1928 / — / —', died: '2004 / — / — / —',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Lawrencium',
        shortBio: 'Lawrencium dibuat pada 1961 di Berkeley dengan menabrakkan californium dengan boron — elemen aktinida terakhir, dan dinamai menghormati Ernest Lawrence, penemu siklotron yang menggerakkan seluruh seri penemuan elemen transurania.',
        discoveryStory: [
            { year: '1961', title: 'Akhir Aktinida', body: 'Ghiorso dan timnya menembakkan ion boron-10 dan boron-11 ke californium (campuran isotop) menggunakan Heavy Ion Linear Accelerator (HILAC) di Berkeley, menghasilkan lawrencium-257 dan -258 — yang terdeteksi dari emisi alfa mereka.' },
            { year: '1961', title: 'Menghormati Lawrence', body: 'Dinamai dari Ernest Orlando Lawrence — penemu siklotron pada 1930, pemenang Nobel Fisika 1939. Siklotronnya adalah "senjata" yang memungkinkan pembuatan semua elemen transurania di Berkeley. Sangat tepat bahwa elemen terakhir aktinida dinamai dari sang penemu alat itu.' },
            { year: '1961–1971', title: 'Sengketa dengan Soviet', body: 'Tim Dubna Soviet juga membuat lawrencium secara independen dan mengusulkan nama "rutherfordium" untuk elemen ini. IUPAC akhirnya menetapkan "lawrencium" untuk elemen 103 dan "rutherfordium" untuk elemen 104. Perang Dingin turut mewarnai penamaan elemen di era ini.' },
            { year: 'Warisan', title: 'Gerbang ke Transaktinida', body: 'Lawrencium adalah elemen aktinida terakhir (nomor 89–103 selesai). Di atasnya dimulai seri transaktinida (elemen 104+) — yang lebih tidak stabil, lebih sulit dibuat, dan semakin menantang prediksi tabel periodik konvensional. Era baru fisika nuklir dimulai dari sini.' },
        ],
    },

    // ══════════════════════════════════════════════════════════════════════
    // ELEMEN SUPERBERAT (TRANSAKTINIDA) — dibuat di akselerator partikel
    // ══════════════════════════════════════════════════════════════════════

    // ── Rf — Rutherfordium ────────────────────────────────────────────────
    {
        sym: 'Rf',
        name: 'Tim Dubna (Soviet) vs Tim Berkeley (AS)',
        born: '—', died: '—',
        nationality: '🇷🇺 Soviet / 🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Rutherfordium',
        shortBio: 'Elemen 104 menjadi medan pertempuran utama "Perang Dingin Elemen" — Soviet mengklaim menemukan "kurchatovium" (1964), AS mengklaim "rutherfordium" (1969). Nama rutherfordium akhirnya menang — menghormati Ernest Rutherford, bapak fisika nuklir.',
        discoveryStory: [
            { year: '1964', title: 'Kurchatovium (Soviet)', body: 'Tim Dubna JINR di Soviet mengklaim membuat elemen 104 dengan membombardir plutonium-242 dengan neon-22. Mereka menamakannya "kurchatovium" menghormati Igor Kurchatov — ilmuwan utama program atomik Soviet.' },
            { year: '1969', title: 'Rutherfordium (AS)', body: 'Tim Berkeley memproduksi elemen 104 dari californium + karbon-12 dan mengklaim penemuan independen. Mereka mengusulkan "rutherfordium" menghormati Ernest Rutherford.' },
            { year: '1997', title: 'IUPAC Memutuskan', body: 'Setelah dekade perdebatan, IUPAC pada 1997 menetapkan "rutherfordium" sebagai nama resmi — kemenangan bagi AS. Soviet tidak menerima keputusan ini dengan mudah.' },
            { year: 'Warisan', title: 'Bukan Akhir, Tapi Awal', body: 'Rutherfordium adalah elemen pertama di luar aktinida. Eksperimen kimianya (dalam hitungan atom) menunjukkan ia berperilaku seperti prediksi tabel periodik — melegakan para teoritisi yang khawatir efek relativistik akan membalikkan semua prediksi pada elemen sangat berat.' },
        ],
    },

    // ── Db — Dubnium ──────────────────────────────────────────────────────
    {
        sym: 'Db',
        name: 'Tim Dubna (Soviet) & Tim Berkeley (AS)',
        born: '—', died: '—',
        nationality: '🇷🇺 Soviet / 🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Dubnium',
        shortBio: 'Elemen 105 juga diperebutkan Soviet (hahnium) dan AS (joliotium/nielsbohrium) — akhirnya diberi nama "dubnium" menghormati kota Dubna, tempat laboratorium nuklir Soviet JINR berada.',
        discoveryStory: [
            { year: '1968', title: 'Dubna dan Berkeley Bersaing Lagi', body: 'Tim Dubna mengklaim menemukan elemen 105 dari americium + neon (1968). Tim Berkeley mengklaim membuat elemen sama dari californium + nitrogen (1970). Sengketa berlanjut selama hampir 30 tahun.' },
            { year: '1997', title: 'Kompromi: Dubnium', body: 'IUPAC pada 1997 memberikan nama "dubnium" — dari kota Dubna, tempat JINR Rusia berada. Ini adalah kompromi diplomatik: rutherfordium (Rf) untuk AS, dubnium (Db) untuk Soviet/Rusia.' },
            { year: 'Warisan', title: 'Kimia Elemen Satu-Atom', body: 'Percobaan kimia dubnium dilakukan satu atom per jam atau lebih lambat. Eksperimen menunjukkan dubnium berperilaku seperti niobium dan tantalum sesuai prediksi — tabel periodik masih berlaku di sini!' },
        ],
    },

    // ── Sg — Seaborgium ───────────────────────────────────────────────────
    {
        sym: 'Sg',
        name: 'Tim Berkeley (Ghiorso et al.)',
        born: '—', died: '—',
        nationality: '🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Seaborgium',
        shortBio: 'Seaborgium dibuat pada 1974 di Berkeley — satu-satunya elemen yang dinamai dari orang yang masih hidup saat penamaan: Glenn Seaborg (masih hidup hingga 1999). Seaborg sendiri bercanda tentang keistimewaannya ini.',
        discoveryStory: [
            { year: '1974', title: 'Californium + Oksigen', body: 'Ghiorso dan tim di Berkeley menembakkan oksigen-18 ke californium-249, menghasilkan seaborgium-263 dengan waktu paruh sekitar 0,9 detik.' },
            { year: '1994', title: 'Glenn Seaborg yang Masih Hidup', body: 'Ketika IUPAC mulai menyetujui nama resmi, Glenn Seaborg masih hidup (ia meninggal 1999). Menamakan sebuah elemen dari orang yang masih hidup merupakan preseden yang sangat langka.' },
            { year: '1997', title: 'Disetujui IUPAC', body: 'Meski ada perdebatan tentang apakah pantas menamakan elemen dari orang yang masih hidup, IUPAC akhirnya menyetujui "seaborgium" pada 1997.' },
            { year: 'Warisan', title: 'Penghormatan Tertinggi', body: 'Seaborg terlibat dalam penemuan atau sintesis 10 elemen — lebih banyak dari siapapun dalam sejarah. Warisannya mencakup americium, curium, berkelium, californium, einsteinium, fermium, mendelevium, nobelium, dan lawrencium — sebuah catatan yang kemungkinan tidak akan pernah terlampaui.' },
        ],
    },

    // ── Bh — Bohrium ──────────────────────────────────────────────────────
    {
        sym: 'Bh',
        name: 'Tim GSI Darmstadt',
        born: '—', died: '—',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Bohrium',
        shortBio: 'Bohrium dibuat pada 1981 di GSI Darmstadt, Jerman, oleh tim pimpinan Peter Armbruster dan Gottfried Münzenberg — dan dinamai menghormati Niels Bohr, bapak fisika atom kuantum.',
        discoveryStory: [
            { year: '1981', title: 'Chromium ke Bismut', body: 'Tim GSI menembakkan ion kromium-54 ke bismut-209 menggunakan UNILAC (Universal Linear Accelerator), menghasilkan hanya 5 atom bohrium-262 yang terdeteksi — setiap atom meluruh dalam hitungan milidetik.' },
            { year: '1997', title: 'Dinamai Niels Bohr', body: 'Awalnya diusulkan berbagai nama; IUPAC menetapkan "bohrium" menghormati Niels Bohr — fisikawan Denmark yang mengembangkan model atom Bohr dan fondasi mekanika kuantum.' },
            { year: 'Warisan', title: 'Fisika Inti Ekstrem', body: 'Penelitian elemen superberat seperti bohrium mendorong batas teori fisika nuklir — menguji prediksi tentang "pulau stabilitas", yakni apakah elemen sangat berat dengan konfigurasi proton/neutron tertentu bisa lebih stabil dari elemen tetangganya.' },
        ],
    },

    // ── Hs — Hassium ──────────────────────────────────────────────────────
    {
        sym: 'Hs',
        name: 'Tim GSI Darmstadt',
        born: '—', died: '—',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Hassium',
        shortBio: 'Hassium dibuat pada 1984 di GSI Darmstadt — dan dinamai dari "Hassia", nama Latin untuk negara bagian Hessen di Jerman, tempat GSI berdiri. Pertama kali berhasil dikonfirmasi sifat kimianya pada 2002.',
        discoveryStory: [
            { year: '1984', title: 'Besi ke Timbal', body: 'Tim GSI menembakkan ion besi-58 ke timbal-208, menghasilkan hassium-265. Mereka berhasil membuat beberapa atom saja dalam setiap percobaan panjang.' },
            { year: '2002', title: 'Kimia Hassium', body: 'Pada 2002, tim di PSI (Swiss) berhasil mempelajari kimia hassium untuk pertama kalinya — membuat hassium tetroksida (HsO₄) yang ternyata berperilaku seperti osmium tetroksida (OsO₄). Tabel periodik terbukti berlaku untuk elemen sangat berat.' },
            { year: 'Warisan', title: 'Memperluas Tabel Periodik', body: 'Setiap elemen superberat yang dikonfirmasi memperkuat (atau menantang) prediksi efek relativistik pada kimia. Efek relativistik sangat kuat pada elemen berat — elektron bergerak mendekati kecepatan cahaya, mengubah sifat kimia secara dramatis.' },
        ],
    },

    // ── Mt — Meitnerium ───────────────────────────────────────────────────
    {
        sym: 'Mt',
        name: 'Tim GSI Darmstadt',
        born: '—', died: '—',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Lise_Meitner_%281878-1968%29%2C_lecturing_at_Catholic_University%2C_Washington%2C_D.C.%2C_1946.jpg/440px-Lise_Meitner_%281878-1968%29%2C_lecturing_at_Catholic_University%2C_Washington%2C_D.C.%2C_1946.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Meitnerium',
        shortBio: 'Meitnerium dibuat pada 1982 di GSI Darmstadt — dan dinamai dari Lise Meitner, fisikawan Austria yang menemukan interpretasi teoritis fisi nuklir namun tidak pernah memenangkan Nobel meski sangat pantas menerimanya.',
        discoveryStory: [
            { year: '1982', title: 'Besi ke Bismut', body: 'Tim GSI menembakkan ion besi-58 ke bismut-209, menghasilkan meitnerium-266. Penemuan ini memerlukan analisis data yang sangat teliti dari hanya beberapa atom.' },
            { year: '1997', title: 'Akhirnya Lise Meitner Dihormati', body: 'Lise Meitner adalah orang yang menjelaskan fisi nuklir secara teoritis pada 1938 — tapi Otto Hahn yang mendapat Nobel Kimia 1944, bukan Meitner. Banyak sejarawan sains menganggap ini sebagai salah satu ketidakadilan Nobel terbesar.' },
            { year: 'Warisan', title: 'Keadilan yang Terlambat', body: 'Penamaan meitnerium adalah pengakuan posthumous atas kontribusi Lise Meitner yang luar biasa. Meitner merupakan salah satu perempuan ilmuwan terhebat abad ke-20 — fisikawan eksperimental dan teoritis yang bekerja di Austria dan Jerman sebelum melarikan diri dari Nazi pada 1938, membawa perhitungannya ke Swedia bersama Otto Frisch.' },
        ],
    },

    // ── Ds — Darmstadtium ─────────────────────────────────────────────────
    {
        sym: 'Ds',
        name: 'Tim GSI Darmstadt',
        born: '—', died: '—',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Darmstadtium',
        shortBio: 'Darmstadtium dibuat pada 1994 di GSI Darmstadt — dan dinamai dari kota Darmstadt, Jerman, tempat laboratorium penelitian yang menghasilkan banyak elemen superberat.',
        discoveryStory: [
            { year: '1994', title: 'Nikel ke Timbal', body: 'Tim GSI menembakkan ion nikel-62 ke timbal-208, menghasilkan darmstadtium-269. Seperti semua elemen superberat, hanya beberapa atom yang terproduksi dalam eksperimen panjang.' },
            { year: '2003', title: 'Dinamai Darmstadt', body: 'IUPAC menyetujui nama "darmstadtium" pada 2003 — menghormati kota tempat banyak elemen superberat dibuat pertama kali.' },
            { year: 'Warisan', title: 'Ke Mana Tabel Periodik Berakhir?', body: 'Pertanyaan menarik dalam fisika nuklir adalah "pulau stabilitas" — prediksi bahwa di sekitar elemen 114–126, mungkin ada isotop dengan waktu paruh jauh lebih panjang dari elemen tetangganya. Pencarian ini mendorong pembuatan elemen-elemen semakin berat.' },
        ],
    },

    // ── Rg — Roentgenium ──────────────────────────────────────────────────
    {
        sym: 'Rg',
        name: 'Tim GSI Darmstadt',
        born: '—', died: '—',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Roentgenium',
        shortBio: 'Roentgenium dibuat pada 1994 di GSI Darmstadt — dan dinamai menghormati Wilhelm Röntgen, penemu sinar-X yang mendapat Nobel Fisika pertama dalam sejarah (1901).',
        discoveryStory: [
            { year: '1994', title: 'Nikel-64 ke Bismut-209', body: 'Tim GSI menembakkan nikel-64 ke bismut-209 dan menghasilkan 3 atom roentgenium-272 yang terdeteksi dari rantai peluruhannya.' },
            { year: '2004', title: 'Dikonfirmasi IUPAC', body: 'Setelah verifikasi oleh berbagai laboratorium, IUPAC mengkonfirmasi penemuan dan nama "roentgenium" pada 2004.' },
            { year: 'Warisan', title: 'Menghormati Sinar-X', body: 'Wilhelm Röntgen menemukan sinar-X pada 1895 — penemuan yang mengubah kedokteran selamanya. Menamakan elemen darinya menjadi penghormatan abadi untuk kontribusinya. Efek relativistik pada roentgenium diprediksi sangat kuat — sifat kimianya mungkin sangat berbeda dari emas di atasnya dalam tabel periodik.' },
        ],
    },

    // ── Cn — Copernicium ──────────────────────────────────────────────────
    {
        sym: 'Cn',
        name: 'Tim GSI Darmstadt',
        born: '—', died: '—',
        nationality: '🇩🇪 Jerman',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Copernicium',
        shortBio: 'Copernicium dibuat pada 1996 di GSI Darmstadt — dan dinamai dari Nicolaus Copernicus, astronom Polandia yang memindahkan Matahari ke pusat tata surya. Mungkin berupa gas pada suhu kamar karena efek relativistik yang ekstrem.',
        discoveryStory: [
            { year: '1996', title: 'Seng ke Timbal', body: 'Tim GSI menembakkan ion seng-70 ke timbal-208, menghasilkan copernicium-277. Penemuan ini diverifikasi oleh laboratorium lain sebelum diakui IUPAC.' },
            { year: '2010', title: 'Dikonfirmasi dan Dinamai', body: 'IUPAC mengkonfirmasi penemuan dan nama "copernicium" pada 2010 — tepat 537 tahun setelah kelahiran Copernicus.' },
            { year: 'Warisan', title: 'Gas Metalik?', body: 'Prediksi relativistik menunjukkan copernicium mungkin berupa gas pada suhu kamar — bukan logam cair seperti merkuri yang ada di atasnya dalam tabel periodik. Ini sangat tidak biasa untuk logam golongan IIB. Eksperimen konfirmasi sangat sulit dilakukan karena waktu paruh hanya 29 detik.' },
        ],
    },

    // ── Nh — Nihonium ─────────────────────────────────────────────────────
    {
        sym: 'Nh',
        name: 'Tim RIKEN Wako, Jepang',
        born: '—', died: '—',
        nationality: '🇯🇵 Jepang',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Nihonium',
        shortBio: 'Nihonium dibuat pada 2004 di RIKEN (Jepang) — elemen superberat pertama yang ditemukan di Asia, setelah 9 tahun eksperimen intensif. Dinamai dari "Nihon" (日本), nama Jepang untuk Jepang.',
        discoveryStory: [
            { year: '2004', title: 'Keberhasilan Asia Pertama', body: 'Tim RIKEN pimpinan Kosuke Morita menembakkan seng-70 ke bismut-209, membutuhkan 400 triliun tumbukan selama 9 tahun untuk menghasilkan 3 atom nihonium-278 yang terdeteksi.' },
            { year: '2015', title: 'Diakui IUPAC', body: 'Setelah verifikasi ketat, IUPAC mengakui RIKEN sebagai penemu dan menerima nama "nihonium" pada 2015 — momen kebanggaan nasional bagi Jepang dalam sains.' },
            { year: '2016', title: '"Nihon": Negeri Matahari Terbit', body: '"Nihon" (日本) adalah nama Jepang untuk Jepang — secara harfiah "asal matahari". Ini membuat nihonium elemen Asia pertama yang tidak dinamai dari tokoh Eropa atau Amerika.' },
            { year: 'Warisan', title: 'RIKEN dan Sains Asia', body: 'Penemuan nihonium adalah momen bersejarah bagi sains Asia — membuktikan bahwa laboratorium di luar Eropa dan Amerika bisa bersaing di batas terdepan fisika nuklir. Tim RIKEN menghabiskan 9 tahun tanpa menyerah, sebuah dedikasi yang luar biasa.' },
        ],
    },

    // ── Fl — Flerovium ────────────────────────────────────────────────────
    {
        sym: 'Fl',
        name: 'Tim JINR Dubna, Rusia (& LLNL, AS)',
        born: '—', died: '—',
        nationality: '🇷🇺 Rusia / 🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Flerovium',
        shortBio: 'Flerovium dibuat pada 1999 oleh kolaborasi JINR Dubna (Rusia) dan Livermore (AS) — dan dinamai dari Laboratorium Flerov di Dubna, yang sendiri dinamai dari Georgy Flyorov, fisikawan Soviet.',
        discoveryStory: [
            { year: '1999', title: 'Kalsium ke Plutonium', body: 'Tim kolaborasi Dubna-Livermore menembakkan kalsium-48 ke plutonium-244, menghasilkan flerovium-287. Ini menandai teknik baru yang produktif: menggunakan kalsium-48 yang sangat banyak neutron sebagai proyektil.' },
            { year: '2012', title: 'Dikonfirmasi IUPAC', body: 'IUPAC mengkonfirmasi penemuan dan nama "flerovium" pada 2012.' },
            { year: 'Warisan', title: 'Di "Pulau Stabilitas"', body: 'Flerovium (Z=114) berada di dekat "pulau stabilitas" yang diprediksi teori — elemen dengan 114 proton dan 184 neutron mungkin lebih stabil. Isotop Fl-289 memiliki waktu paruh sekitar 2,6 detik — sangat lama untuk elemen seberat ini.' },
        ],
    },

    // ── Mc — Moscovium ────────────────────────────────────────────────────
    {
        sym: 'Mc',
        name: 'Tim JINR Dubna & LLNL/ORNL',
        born: '—', died: '—',
        nationality: '🇷🇺 Rusia / 🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Moscovium',
        shortBio: 'Moscovium dibuat pada 2003 oleh kolaborasi Rusia-Amerika, dan dinamai dari Oblast Moskow (Moscow Oblast), tempat JINR Dubna berada.',
        discoveryStory: [
            { year: '2003', title: 'Kalsium ke Americium', body: 'Tim kolaborasi menembakkan kalsium-48 ke americium-243 dan menghasilkan moscovium-288. Empat atom terdeteksi dalam eksperimen awal.' },
            { year: '2016', title: 'Dinamai Moskow', body: 'IUPAC mengkonfirmasi nama "moscovium" pada 2016 — menghormati Oblast Moskow, wilayah di luar Moskow tempat fasilitas JINR berada.' },
            { year: 'Warisan', title: 'Kolaborasi Musim Dingin-Musim Panas', body: 'Kolaborasi Dubna-Livermore yang menghasilkan moscovium, nihonium, flerovium, livermorium, dan oganesson adalah contoh luar biasa bagaimana Perang Dingin bisa berakhir dengan kolaborasi ilmiah antara mantan rival. Bahan (berkelium, californium) dari AS dikirim ke Rusia; Rusia mengoperasikan akselerator.' },
        ],
    },

    // ── Lv — Livermorium ──────────────────────────────────────────────────
    {
        sym: 'Lv',
        name: 'Tim JINR Dubna & Lawrence Livermore National Lab',
        born: '—', died: '—',
        nationality: '🇷🇺 Rusia / 🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Livermorium',
        shortBio: 'Livermorium dibuat pada 2000 oleh kolaborasi JINR-LLNL — dan dinamai dari Lawrence Livermore National Laboratory di California, mitra Amerika dalam kerja sama dekade-panjang ini.',
        discoveryStory: [
            { year: '2000', title: 'Kalsium ke Curium', body: 'Tim menembakkan kalsium-48 ke curium-248, menghasilkan livermorium-293. Kemudian berbagai isotop diproduksi untuk mempelajari peluruhan rantainya.' },
            { year: '2012', title: 'Dikonfirmasi IUPAC', body: 'Bersamaan dengan flerovium, IUPAC mengkonfirmasi livermorium pada 2012.' },
            { year: 'Warisan', title: 'Menghormati Mitra Amerika', body: 'Dinamai Lawrence Livermore untuk menghormati kontribusi laboratorium Amerika dalam kolaborasi. Livermorium adalah nama yang mempertahankan keseimbangan geopolitik dalam penamaan elemen — Rusia mendapat Moscovium (Mc), AS mendapat Livermorium (Lv).' },
        ],
    },

    // ── Ts — Tennessine ───────────────────────────────────────────────────
    {
        sym: 'Ts',
        name: 'Tim JINR Dubna, ORNL & Vanderbilt',
        born: '—', died: '—',
        nationality: '🇷🇺 Rusia / 🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glenn_Seaborg_-_c._1964.jpg/440px-Glenn_Seaborg_-_c._1964.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Tennessine',
        shortBio: 'Tennessine dibuat pada 2010 oleh tim kolaborasi menggunakan berkelium-249 yang diproduksi di Oak Ridge, ditembaki kalsium-48 di Dubna. Dinamai dari negara bagian Tennessee — tempat Oak Ridge National Lab berada.',
        discoveryStory: [
            { year: '2010', title: 'Memberikan Bk-249 ke Dubna', body: 'Oak Ridge National Lab menghabiskan 250 hari menghasilkan 22 mg berkelium-249 (nilai ~$1.5 juta) dan mengirimkannya ke Dubna. Tim Dubna menembaki Bk-249 dengan kalsium-48, menghasilkan 6 atom tennessine-293 dan -294.' },
            { year: '2016', title: 'Tennessee dalam Tabel Periodik', body: 'IUPAC menyetujui nama "tennessine" pada 2016 — menghormati negara bagian Tennessee yang menjadi rumah bagi ORNL (Oak Ridge), Vanderbilt University, dan Universitas Tennessee.' },
            { year: 'Warisan', title: 'Halogen Terberat', body: 'Tennessine (elemen 117) diperkirakan berada dalam golongan halogen — tapi efek relativistik yang kuat kemungkinan membuatnya berperilaku sangat berbeda dari fluorin atau klorin. Prediksi menunjukkan ia mungkin bersifat "semi-logam" seperti astatin.' },
        ],
    },

    // ── Og — Oganesson ────────────────────────────────────────────────────
    {
        sym: 'Og',
        name: 'Tim JINR Dubna & Lawrence Livermore',
        born: '—', died: '—',
        nationality: '🇷🇺 Rusia / 🇺🇸 Amerika Serikat',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Yuri_Oganessian_2.jpg/440px-Yuri_Oganessian_2.jpg',
        wikiUrl: 'https://en.wikipedia.org/wiki/Oganesson',
        shortBio: 'Oganesson dibuat pada 2002 di Dubna — elemen terberat yang pernah dibuat (nomor 118), dan satu-satunya elemen yang dinamai dari orang yang masih hidup selain seaborgium: Yuri Oganessian, fisikawan nuklir Rusia yang memimpin riset elemen superberat selama 50 tahun lebih.',
        discoveryStory: [
            { year: '2002', title: 'Kalsium ke Californium', body: 'Tim Dubna menembakkan kalsium-48 ke californium-249, menghasilkan hanya 5 atom oganesson-294 dalam berbagai eksperimen. Waktu paruhnya hanya sekitar 0,89 milidetik.' },
            { year: '2006', title: 'Dikonfirmasi Livermore', body: 'Tim Livermore melakukan eksperimen konfirmasi independen dan menghasilkan atom tambahan, mengkonfirmasi penemuan.' },
            { year: '2016', title: 'Yuri Oganessian yang Masih Hidup', body: 'IUPAC menyetujui nama "oganesson" pada 2016 menghormati Yuri Oganessian (lahir 1933) yang masih hidup — hanya dua elemen dalam sejarah yang dinamai dari orang yang masih hidup: seaborgium (Glenn Seaborg) dan oganesson (Yuri Oganessian).' },
            { year: 'Warisan', title: 'Batas Pengetahuan Manusia', body: 'Oganesson adalah elemen terberat yang pernah ada — 294 kali lebih berat dari hidrogen. Secara teori ia adalah gas mulia (golongan 18), tapi efek relativistik yang ekstrem diprediksi membuatnya menjadi padatan pada suhu kamar, bukan gas! Tidak ada yang tahu persis bagaimana sifatnya karena sampelnya terlalu kecil dan terlalu singkat hidupnya untuk diuji secara kimia. Kita berada di batas terdepan pengetahuan manusia.' },
        ],
    },
];

// Fast lookup by element symbol
export function getDiscoverer(sym: string): Discoverer | undefined {
    return discoverers.find(d => d.sym === sym);
}
