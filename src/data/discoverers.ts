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
    shortBio: string;         // 1–2 sentence bio
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
];

// Fast lookup by element symbol
export function getDiscoverer(sym: string): Discoverer | undefined {
    return discoverers.find(d => d.sym === sym);
}
