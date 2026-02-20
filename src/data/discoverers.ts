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
];

// Fast lookup by element symbol
export function getDiscoverer(sym: string): Discoverer | undefined {
    return discoverers.find(d => d.sym === sym);
}
