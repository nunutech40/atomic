// ─────────────────────────────────────────────────────────────────────────────
// PHENOMENON STORY DATA
// Slide-by-slide storytelling for each atomic phenomenon
// Each story = array of "slides" rendered in PhenomenonStory component
// ─────────────────────────────────────────────────────────────────────────────

export type SlideType =
    | 'hook'       // full-screen dramatic opening
    | 'history'    // historical narrative with person/date
    | 'step'       // animated process step
    | 'scale'      // mind-blowing scale comparison
    | 'impact';    // real-world impact & legacy

export interface HistoryEntry {
    year: string;
    event: string;
    person?: string;
}

export interface StorySlide {
    type: SlideType;
    title: string;
    body: string;           // main narrative text
    animKey?: string;       // CSS animation class to show
    history?: HistoryEntry[];
    quote?: string;
    quoteAuthor?: string;
    visual?: string;        // emoji / icon for visual
    highlight?: string;     // callout box text
}

export interface PhenomenonStory {
    id: string;
    slides: StorySlide[];
}

export const phenomenonStories: PhenomenonStory[] = [

    // ── NUKLEOSINTESIS ───────────────────────────────────────────────────────
    {
        id: 'nucleosynthesis',
        slides: [
            {
                type: 'hook',
                title: 'Kamu Terbuat dari Abu Bintang yang Sudah Mati',
                body: 'Bukan puisi. Bukan metafora. Ini kimia dan fisika yang bisa diverifikasi.<br><br>Setiap atom karbon di dalam tubuh kamu — di DNA, di lemak, di otot — dulunya ada di inti sebuah bintang yang sudah mati sebelum matahari kita lahir. Bintang itu meledak, menyebarkan isinya ke luar angkasa. Awan itu kemudian bergabung, membentuk matahari dan bumi. Dan beberapa miliar tahun kemudian, atom-atom itu menjadi kamu.<br><br>Carl Sagan bilang: "We are made of star stuff." Itu bukan romanticisme — itu hasil perhitungan fisika nuklir.',
                visual: '⭐',
                animKey: 'anim-nucleo-hook',
                highlight: 'Setiap atom C, N, O, Fe di tubuh kamu dulunya di inti bintang · bintang itu mati → kamu lahir',
            },
            {
                type: 'history',
                title: 'Cecilia Payne: Wanita yang Menemukan Komposisi Bintang (dan Diabaikan 4 Tahun)',
                body: 'Tahun 1925. Cecilia Payne, mahasiswa PhD di Harvard, menganalisis spektrum cahaya matahari dan menarik kesimpulan mengejutkan: matahari hampir seluruhnya terdiri dari hidrogen dan helium — bukan besi seperti yang selama ini diyakini para ahli.<br><br>Penemuannya benar. Tapi Henry Norris Russell, astronom paling berpengaruh saat itu, bilang temuannya "almost certainly wrong" dan memaksanya menambahkan catatan di disertasinya bahwa hasilnya "mungkin tidak nyata". Empat tahun kemudian, Russell menerbitkan paper yang sampai pada kesimpulan yang sama — dan dapat seluruh kredit.<br><br>Sekarang Payne diakui sebagai penemuan terpenting dalam astrofisika abad 20.',
                quote: 'Jangan takut mempertanyakan. Alam selalu menang melawan otoritas.',
                quoteAuthor: 'Cecilia Payne-Gaposchkin',
                visual: '👩‍🔬',
                history: [
                    { year: '1920', event: 'Eddington: bintang menghasilkan energi dari fusi hidrogen — hipotesis pertama', person: 'Arthur Eddington' },
                    { year: '1925', event: 'Cecilia Payne: matahari 90% hidrogen — diabaikan selama bertahun-tahun', person: 'Cecilia Payne' },
                    { year: '1939', event: 'Hans Bethe: siklus proton-proton dan CNO — penjelasan lengkap energi bintang. Nobel 1967', person: 'Hans Bethe' },
                    { year: '1957', event: 'Burbidge, Burbidge, Fowler & Hoyle (B²FH): teori lengkap nukleosintesis bintang', person: 'B²FH paper, 1957' },
                    { year: '1987', event: 'Supernova SN1987A: pertama kali neutrino dari supernova terdeteksi langsung', person: 'Kamiokande & IMB' },
                    { year: '2017', event: 'Dua bintang neutron bertabrakan (GW170817) — emas dan perak terbentuk, diobservasi langsung', person: 'LIGO & Virgo' },
                ],
            },
            {
                type: 'step',
                title: 'Big Bang Hanya Bikin Hidrogen dan Helium',
                body: 'Tiga menit pertama setelah Big Bang, alam semesta cukup panas untuk fusi nuklir. Hasilnya: sekitar 75% hidrogen, 25% helium, sedikit litium. Itu saja. Tidak ada karbon, tidak ada oksigen, tidak ada besi — semua elemen yang membentuk planet dan kehidupan tidak ada sama sekali.<br><br>Lalu bintang pertama lahir dari awan hidrogen, sekitar 200 juta tahun setelah Big Bang. Di dalam inti bintang: suhu dan tekanan ekstrem yang mendorong fusi. Hidrogen → helium. Helium → karbon. Karbon → oksigen. Terus berlanjut naik ke elemen yang lebih berat.',
                visual: '🌌',
                animKey: 'anim-nucleo-bigbang',
                highlight: 'Big Bang: H + He + Li saja · Semua elemen C, O, N, Fe, Au dibuat di dalam bintang',
            },
            {
                type: 'step',
                title: 'Bintang: Pabrik Elemen yang Terbakar Perlahan',
                body: 'Bintang seperti matahari membakar hidrogen selama miliaran tahun. Ketika hidrogen habis, inti mengerut dan memanas — mulai membakar helium jadi karbon dan oksigen. Ketika helium habis, karbon terbakar jadi neon, magnesium, silikon. Terus berlapis seperti bawang — lapisan demi lapisan elemen yang makin berat.<br><br>Untuk bintang yang cukup besar (lebih dari 8× massa matahari), proses ini berakhir di besi. Besi adalah dinding terakhir: fusinya tidak menghasilkan energi, malah menyerap. Inti bintang berhenti menghasilkan tekanan untuk melawan gravitasi — dan kolaps dalam sepersekian detik.',
                visual: '🔥',
                animKey: 'anim-nucleo-onion',
                highlight: 'Bintang masif: H→He→C→O→Ne→Mg→Si→Fe · Besi = dinding akhir · Tidak bisa dibakar lebih lanjut',
            },
            {
                type: 'step',
                title: 'Supernova: Penyebaran Menu Kehidupan',
                body: 'Saat inti bintang kolaps ke titik singularitas neutron dalam 0.1 detik, energi gravitasi yang dilepaskan — 10⁴⁴ joule — lebih besar dari total energi yang dipancarkan matahari selama 10 miliar tahun hidupnya. Sebagian besar energi ini keluar sebagai neutrino.<br><br>Gelombang kejut yang terbentuk menghancurkan bintang dari dalam — selubung gas dan semua elemen yang telah dibuat selama jutaan tahun terlempar ke angkasa dengan kecepatan ribuan km per detik. Dalam ledakan supernova inilah elemen yang lebih berat dari besi — seperti emas, perak, platinum, yodium — terbentuk melalui proses r-process (rapid neutron capture).',
                visual: '💫',
                animKey: 'anim-nucleo-supernova',
                highlight: 'Supernova: energi 10⁴⁴ J · elemen C, O, Fe terlempar · Au, Ag, Pt dibuat dalam ledakan itu',
            },
            {
                type: 'scale',
                title: 'Dari Mana Emas di Cincinmu Berasal?',
                body: 'Besi dan elemen ringan dibuat di supernova bintang tunggal. Tapi emas? Butuh sesuatu yang lebih ekstrem: tabrakan dua bintang neutron — sisa inti dari dua supernova sebelumnya yang akhirnya bergabung.<br><br>Pada 2017, detektor gravitasi LIGO mendeteksi gelombang gravitasi dari tabrakan dua bintang neutron (GW170817). Teleskop di seluruh dunia mengarah ke sana, dan untuk pertama kali dalam sejarah manusia, kita menyaksikan langsung kilonova — ledakan yang menghasilkan emas dalam jumlah yang setara dengan beberapa kali massa bumi. Emas di cincin kamu berasal dari kejadian seperti itu, miliaran tahun lalu.',
                visual: '💍',
                highlight: 'Emas tidak dibuat di supernova biasa · Butuh kilonova: tabrakan dua bintang neutron · GW170817, 2017',
            },
            {
                type: 'scale',
                title: 'Berapa Bintang yang Harus Mati Agar Kamu Lahir?',
                body: 'Tubuh manusia 65% oksigen, 18% karbon, 10% hidrogen, 3% nitrogen, 1.4% kalsium, 1% fosfor, sisanya trace elements. Semua kecuali hidrogen dibuat di bintang.<br><br>Estimasi kasar: generasi sekitar 3–7 bintang masif harus lahir, hidup, dan meledak sebagai supernova agar awan yang cukup kaya elemen bisa membentuk sistem tata surya kita dan akhirnya makhluk hidup. Matahari kita adalah generasi ke-3 atau ke-4 di galaksi ini. Kamu adalah produk dari ratusan juta tahun nukleosintesis kosmis.',
                visual: '🌟',
                highlight: '3–7 generasi bintang mati sebelum kamu lahir · kamu adalah generasi ke-3 galaksi ini',
            },
            {
                type: 'impact',
                title: 'Warisan: Kita Akhirnya Tahu dari Mana Kita Berasal',
                body: 'Paper B²FH (Burbidge, Burbidge, Fowler & Hoyle) dari 1957 adalah salah satu paper paling penting dalam sejarah sains. Dalam satu makalah, mereka menjelaskan secara kuantitatif bagaimana semua 92 elemen alami di tabel periodik terbentuk — dari kelimpahan di Big Bang sampai ke r-process di supernova.<br><br>William Fowler mendapat Nobel 1983 untuk ini. Hoyle yang sebenarnya paling berkontribusi pada matematika — tidak dapat, karena sudah meninggal lebih dulu.<br><br>Tapi warisannya melampaui sains: manusia untuk pertama kali bisa menjawab pertanyaan "dari mana kita berasal?" dengan jawaban yang bisa diverifikasi. Bukan mitologi, bukan spekulasi. Fisika nuklir dan astronomilah yang menjawabnya.',
                visual: '🏆',
                history: [
                    { year: '1925', event: 'Cecilia Payne: bintang 90% hidrogen — fondasi astrofisika modern', person: 'Cecilia Payne' },
                    { year: '1957', event: 'Paper B²FH: teori lengkap nukleosintesis bintang — semua 92 elemen dijelaskan', person: 'Burbidge, Burbidge, Fowler & Hoyle' },
                    { year: '1983', event: 'Nobel Physics untuk Fowler — nukleosintesis bintang', person: 'William Fowler' },
                    { year: '1987', event: 'SN1987A: supernova pertama yang bisa diamati neutrino-nya secara langsung', person: 'Kamiokande, Japan' },
                    { year: '2017', event: 'GW170817: tabrakan bintang neutron diamati — emas terbentuk, gravitational wave detected', person: 'LIGO-Virgo collaboration' },
                ],
                highlight: 'Paper B²FH 1957 → 92 elemen dijelaskan → manusia tahu untuk pertama kali dari mana mereka berasal',
            },
        ],
    },

    // ── ANTIMATERI ───────────────────────────────────────────────────────────
    {
        id: 'antimatter',
        slides: [
            {
                type: 'hook',
                title: '1 Gram Antimateri = Ledakan 43 Kiloton',
                body: 'Bom nuklir Hiroshima meledak dengan kekuatan sekitar 15 kiloton. Rekam itu di kepala kamu.<br><br>Satu gram antimateri — lebih tipis dari selembar kertas — kalau bertemu dengan satu gram materi biasa, akan melepaskan energi 43 kiloton. Tiga kali lebih kuat dari Hiroshima. Dari dua gram bahan.<br><br>Antimateri bukan fiksi ilmiah. Ia nyata, sudah dibuat di laboratorium CERN sejak 1995. Masalahnya: untuk membuat satu gram antimateri butuh energi sebesar yang dikonsumsi seluruh peradaban manusia selama 300 tahun.',
                visual: '💥',
                animKey: 'anim-anti-hook',
                highlight: '1 gram antimateri + 1 gram materi = 43 kiloton · 3× lebih kuat dari bom Hiroshima · dari 2 gram bahan',
            },
            {
                type: 'history',
                title: 'Dirac Tidak Sengaja Menemukan Bayangan Alam Semesta',
                body: 'Tahun 1928. Paul Dirac, fisikawan Inggris yang terkenal pendiam dan sangat presisi, sedang mencoba menggabungkan mekanika kuantum dengan teori relativitas Einstein. Ia menulis persamaan yang menggambarkan perilaku elektron bergerak cepat.<br><br>Persamaannya berhasil — tapi punya dua solusi. Satu untuk elektron biasa. Satu lagi untuk... sesuatu yang massanya sama tapi muatan listriknya berlawanan. Dirac bingung. Awalnya ia pikir itu adalah proton. Tapi hitungannya tidak cocok.<br><br>Empat tahun kemudian, 1932, Carl Anderson sedang mengamati sinar kosmik di California — dan melihat partikel yang identik dengan elektron, tapi belok ke arah yang salah di medan magnet. Positron. Antimateri pertama yang ditemukan. Dirac benar, tanpa bermaksud.',
                quote: 'Persamaan saya lebih pintar dari saya.',
                quoteAuthor: 'Paul Dirac, peraih Nobel 1933',
                visual: '👨‍🔬',
                history: [
                    { year: '1928', event: 'Persamaan Dirac: menggabungkan kuantum + relativitas — secara tidak sengaja prediksi antimatter', person: 'Paul Dirac' },
                    { year: '1932', event: 'Carl Anderson menemukan positron di sinar kosmik — Nobel 1936', person: 'Carl Anderson' },
                    { year: '1955', event: 'Antiproton pertama dibuat di Bevatron, UC Berkeley', person: 'Segrè & Chamberlain, Nobel 1959' },
                    { year: '1965', event: 'Antineutron dan inti antideuterium pertama berhasil dibuat', person: 'CERN & Brookhaven' },
                    { year: '1995', event: 'CERN: antihydrogen pertama — atom antimateri lengkap pertama di dunia', person: 'PS210 experiment, CERN' },
                    { year: '2010', event: 'ALPHA experiment: antihydrogen ditahan selama 1000 detik — rekor dunia', person: 'ALPHA collaboration, CERN' },
                ],
            },
            {
                type: 'step',
                title: 'Apa Itu Antimateri? Bayangan yang Membunuh',
                body: 'Setiap partikel materi punya pasangan "anti"-nya. Elektron → positron (muatan +). Proton → antiproton (muatan −). Neutron → antineutron.<br><br>Secara massa dan sifat fisika lainnya, mereka identik. Bedanya cuma muatan listrik yang berlawanan. Tapi satu aturan besi: kalau partikel dan antipartikelnya bertemu, keduanya musnah seketika — 100% massanya berubah jadi energi. Inilah yang disebut anihilasi. Tidak ada ledakan yang lebih efisien dari ini di alam semesta.',
                visual: '⚡',
                animKey: 'anim-anti-annihilation',
                highlight: 'E = mc² · massa 2 gram × c² = energi 43 kiloton · efisiensi 100% — tidak ada proses lain yang mendekati ini',
            },
            {
                type: 'step',
                title: 'PET Scan: Antimateri di Dalam Rumah Sakit Kamu',
                body: 'Positron Emission Tomography — alat scan medis yang kemungkinan ada di rumah sakit terdekat kamu — bekerja secara harfiah menggunakan antimateri.<br><br>Pasien disuntik zat radioaktif yang memancarkan positron (antimateri). Saat positron menyentuh elektron di dalam tubuh, keduanya anihilasi dan memancarkan dua foton gamma ke arah yang berlawanan. Detektor di luar tubuh menangkap kedua foton itu dan menentukan posisi anihilasi secara presisi — sehingga dokter bisa melihat aktivitas metabolisme di dalam otak atau tumor secara 3D.',
                visual: '🏥',
                animKey: 'anim-anti-pet',
                highlight: 'PET scan: positron bertemu elektron → anihilasi → dua foton gamma → dipetakan jadi gambar 3D otak',
            },
            {
                type: 'step',
                title: 'Misteri Terbesar Kosmologi: Kenapa Kita Ada?',
                body: 'Saat Big Bang, materi dan antimateri seharusnya lahir dalam jumlah yang sama persis. Dan kalau itu terjadi, keduanya akan saling anihilasi — meninggalkan alam semesta yang kosong, hanya berisi radiasi.<br><br>Tapi jelas, kita ada. Galaksi ada. Bintang ada. Artinya: entah bagaimana, ada lebih banyak materi daripada antimateri di awal alam semesta — sekitar 1 per miliar ekstra. Kita semua adalah "sisa" dari ketidakseimbangan kecil itu. Sampai hari ini, fisikawan belum tahu kenapa. Ini salah satu pertanyaan terbuka terbesar dalam sains.',
                visual: '🌌',
                animKey: 'anim-anti-asymmetry',
                highlight: 'Big Bang: materi vs antimateri · Selisih 1:10⁹ → sisa materi itu yang jadi semua galaksi, bintang, dan kamu',
            },
            {
                type: 'scale',
                title: 'Harga yang Tidak Masuk Akal',
                body: 'Satu miligram antimateri (0.001 gram) butuh energi sekitar 25 miliar kWh untuk dibuat — senilai lebih dari 2,5 triliun rupiah hanya untuk listriknya. CERN, akselerator partikel terbesar di dunia, menghasilkan sekitar 1–10 nanogram antihydrogen per tahun.<br><br>Pada laju itu, untuk mengumpulkan satu gram antimateri dibutuhkan sekitar 100 juta tahun operasi CERN penuh. Dan penyimpanannya? Antimateri tidak bisa menyentuh wadah biasa — harus ditahan melayang di dalam medan magnet dan vakum sempurna.',
                visual: '🔬',
                highlight: '1 mg antimateri = Rp 2,5 triliun hanya untuk listrik · CERN produksi ~10 ng/tahun · butuh 100 juta tahun untuk 1 gram',
            },
            {
                type: 'scale',
                title: 'Propulsi Antimateri: Bintang Terdekat dalam 40 Tahun',
                body: 'Roket konvensional paling efisien hanya mengkonversi ~1% bahan bakar jadi gerak. Reaktor nuklir: ~0.1% massa jadi energi. Mesin antimateri teoritis: 100% — setiap atom bahan bakar jadi energi murni.<br><br>Sebuah pesawat antimateri hipotetis menuju Alpha Centauri (bintang terdekat, 4.37 tahun cahaya) hanya butuh sekitar 10 miligram antimateri sebagai bahan bakar — dan bisa tiba dalam 40 tahun. NASA dan DARPA sudah punya program riset propulsi antimateri, walau masih sangat awal. Bukan fiksi ilmiah — hanya engineering yang belum dipecahkan.',
                visual: '🚀',
                highlight: 'Roket konvensional: 1% efisien · Nuklir: 0.1% massa jadi energi · Antimateri: 100% · Alpha Centauri dalam 40 tahun dengan 10 mg',
            },
            {
                type: 'impact',
                title: 'Warisan: Dari Persamaan Paling Indah ke Mesin PET',
                body: 'Persamaan Dirac sering disebut persamaan fisika paling indah yang pernah ditulis — empat komponen yang menggabungkan kuantum, relativitas, dan spin dalam satu baris. Ia tidak mencarinya. Matematika yang menuntunnya ke sana.<br><br>Warisannya nyata dan langsung terasa: lebih dari 40 juta prosedur PET scan dilakukan setiap tahun di seluruh dunia — mendiagnosis kanker, penyakit Parkinson, Alzheimer, dan epilepsi. Antimateri yang dulu terdengar seperti senjata fiksi ilmiah kini menyelamatkan jutaan nyawa per tahun di dalam mesin berwarna putih di rumah sakit.',
                visual: '🏆',
                history: [
                    { year: '1928', event: 'Persamaan Dirac — prediksi antimateri tanpa sengaja', person: 'Paul Dirac' },
                    { year: '1932', event: 'Positron ditemukan di sinar kosmik — bukti pertama antimateri', person: 'Carl Anderson' },
                    { year: '1976', event: 'PET scan pertama digunakan di klinik untuk manusia', person: 'Michael Ter-Pogossian' },
                    { year: '1995', event: 'Antihydrogen pertama di CERN — atom antimateri lengkap', person: 'PS210, CERN' },
                    { year: '2023', event: 'ALPHA-g: gravitasi antimateri diukur untuk pertama kalinya — jatuh ke bawah seperti materi biasa', person: 'ALPHA collaboration, CERN' },
                ],
                highlight: 'Persamaan paling indah dalam fisika → 40 juta prosedur PET scan per tahun → menyelamatkan jutaan nyawa',
            },
        ],
    },

    // ── SUPERPOSISI ──────────────────────────────────────────────────────────
    {
        id: 'superposition',
        slides: [
            {
                type: 'hook',
                title: 'Schrödinger Benci Kucingnya Sendiri',
                body: 'Semua orang tahu Kucing Schrödinger — hidup sekaligus mati di dalam kotak, sampai dibuka. Tapi yang jarang diceritakan: Schrödinger sendiri membenci eksperimen itu.<br><br>Ia tidak membuat itu sebagai ilustrasi kuantum yang keren. Ia membuatnya sebagai ejekan — untuk menunjukkan betapa absurdnya interpretasi mekanika kuantum yang waktu itu sedang populer. "Kalau ini benar," katanya, "berarti kucing bisa hidup dan mati di waktu bersamaan. Ini gila."<br><br>Ironisnya: kucing itu jadi konsep paling terkenal dalam fisika modern. Dan Schrödinger tidak pernah lepas darinya sampai ia meninggal.',
                visual: '🐱',
                animKey: 'anim-super-hook',
                highlight: 'Schrödinger membuat eksperimen kucing sebagai ejekan terhadap mekanika kuantum — dan justru itu yang membuatnya abadi',
            },
            {
                type: 'history',
                title: 'Perang Surat: Einstein vs Bohr',
                body: 'Tahun 1935. Albert Einstein — yang sudah tidak percaya mekanika kuantum sejak awal — menulis surat ke Erwin Schrödinger. Ia frustrasi dengan interpretasi Copenhagen dari Niels Bohr yang bilang: partikel tidak punya keadaan pasti sampai diukur. Baginya itu omong kosong.<br><br>Schrödinger membalas dengan setuju. Ia lalu membuat eksperimen pikiran — kucing, kotak, bom kecil, atom radioaktif — untuk membuktikan betapa konyolnya ide Bohr jika diterapkan ke skala makro. Hasilnya: esai 1935 yang melahirkan "Kucing Schrödinger".<br><br>Einstein senang. Tapi sejarah membuktikan Bohr yang benar.',
                quote: 'Tuhan tidak bermain dadu dengan alam semesta.',
                quoteAuthor: 'Albert Einstein — yang akhirnya kalah debat dengan kuantum',
                visual: '✉️',
                history: [
                    { year: '1925', event: 'Heisenberg: matriks mekanika kuantum — partikel tidak punya posisi pasti', person: 'Werner Heisenberg' },
                    { year: '1926', event: 'Schrödinger: persamaan gelombang — alternatif yang lebih intuitif dari versi Heisenberg', person: 'Erwin Schrödinger' },
                    { year: '1927', event: 'Interpretasi Copenhagen: Bohr & Heisenberg — realitas tidak ada sebelum diukur', person: 'Niels Bohr & Heisenberg' },
                    { year: '1935', event: 'Schrödinger menulis esai "Situasi Saat Ini dalam Mekanika Kuantum" — lahirnya kucing', person: 'Erwin Schrödinger' },
                    { year: '1957', event: 'Hugh Everett: Many-Worlds Interpretation — setiap pengukuran membelah alam semesta', person: 'Hugh Everett III' },
                    { year: '2019', event: 'Superposisi kuantum dipertahankan di suhu ruang untuk pertama kali — langkah besar ke komputer kuantum', person: 'Google AI & IBM' },
                ],
            },
            {
                type: 'step',
                title: 'Apa Itu Superposisi? Semua Kemungkinan Sekaligus',
                body: 'Ambil sebuah elektron. Tanyakan: spin-nya ke atas atau ke bawah? Sebelum kamu ukur, jawaban yang benar bukan "salah satu" — tapi "keduanya sekaligus". Ini bukan karena kita tidak tahu. Ini karena secara fisika, elektron itu memang belum memilih.<br><br>Fungsi gelombang elektron adalah jumlahan (superposisi) dari semua kemungkinan keadaan — masing-masing dengan koefisien probabilitas. Saat kamu ukur, fungsi gelombang "runtuh" ke satu nilai tertentu. Sebelum diukur: semua kemungkinan nyata. Ini yang disebut superposisi kuantum.',
                visual: '↕️',
                animKey: 'anim-super-wave',
                highlight: '|ψ⟩ = α|↑⟩ + β|↓⟩ · |α|² + |β|² = 1 · Sebelum diukur: keduanya nyata',
            },
            {
                type: 'step',
                title: 'Pengamatan Meruntuhkan Realitas',
                body: 'Ini bagian yang paling bikin pusing: bukan hanya partikel yang tidak punya keadaan pasti — tapi tindakan mengamati itu sendiri yang memaksa partikel memilih. Eksperimen double-slit membuktikan ini secara dramatis.<br><br>Tembak elektron satu per satu ke dua celah: pola interferensi muncul di layar — bukti elektron lewat dua celah sekaligus. Tapi saat kamu pasang detektor untuk tahu elektron lewat celah mana — pola interferensi hilang. Elektron tiba-tiba berkelakuan seperti partikel biasa. Pengamatan mengubah hasilnya.',
                visual: '👁️',
                animKey: 'anim-super-slit',
                highlight: 'Double-slit tanpa detektor: pola gelombang · Dengan detektor: pola partikel · Pengamatan mengubah realitas',
            },
            {
                type: 'step',
                title: 'Kenapa Kucing Tidak Bisa Superposisi?',
                body: 'Pertanyaan wajarnya: kalau elektron bisa superposisi, kenapa kucing tidak bisa hidup-mati sekaligus? Jawaban: dekoherensi.<br><br>Superposisi itu rapuh. Begitu partikel kuantum berinteraksi dengan lingkungannya — udara, foton, getaran — informasi tentang keadaannya "bocor" ke lingkungan dan superposisi hancur dalam hitungan femtodetik. Kucing punya 10²³ atom yang terus berinteraksi satu sama lain dan lingkungan. Tidak ada cara superposisi itu bertahan lebih dari sepersekian detik. Itulah kenapa dunia makro terasa "klasik".',
                visual: '🌡️',
                animKey: 'anim-super-decoherence',
                highlight: 'Dekoherensi: interaksi dengan lingkungan → superposisi runtuh dalam ~10⁻¹³ detik untuk benda makro',
            },
            {
                type: 'scale',
                title: 'Komputer Kuantum: Superposisi sebagai Kekuatan',
                body: 'Komputer biasa bekerja dengan bit: 0 atau 1. Komputer kuantum bekerja dengan qubit yang bisa berada dalam superposisi 0 dan 1 sekaligus. Satu qubit = 2 kemungkinan. 2 qubit = 4. 10 qubit = 1.024. 300 qubit = lebih banyak kemungkinan dari atom di alam semesta yang bisa dihitung sekaligus.<br><br>Tapi ada tangkapan besar: qubit sangat mudah terganggu oleh dekoherensi. Komputer kuantum Google "Sycamore" harus didinginkan sampai 0.015 Kelvin — 100 kali lebih dingin dari angkasa luar — agar qubitnya stabil cukup lama untuk menghitung.',
                visual: '💻',
                highlight: '300 qubit = 2³⁰⁰ kemungkinan sekaligus · Google Sycamore: 53 qubit · didinginkan ke 0.015 K',
            },
            {
                type: 'scale',
                title: 'Paradoks Terbesar: Siapa yang Mengamati Pengamat?',
                body: 'Kalau pengamatan meruntuhkan superposisi — lalu siapa yang mengamati pengamat? Ini masalah yang belum terpecahkan dalam fisika. Ada tiga kubu besar:<br><br><b>Copenhagen:</b> Cukup sampai di sini. Jangan tanya apa yang terjadi sebelum pengukuran.<br><b>Many-Worlds:</b> Setiap pengukuran membelah alam semesta — satu versi kamu membaca ini, versi lain sedang tidak. Tidak ada yang runtuh, semuanya terjadi.<br><b>Pilot Wave:</b> Partikel punya posisi nyata setiap saat, tapi dituntun oleh gelombang yang tidak terlihat.<br><br>Tidak ada yang bisa dibuktikan salah. Semua konsisten dengan eksperimen.',
                visual: '🌌',
                highlight: 'Copenhagen vs Many-Worlds vs Pilot Wave — 100 tahun berdebat, belum ada pemenang',
            },
            {
                type: 'impact',
                title: 'Kucing yang Lebih Besar dari Penciptanya',
                body: 'Erwin Schrödinger meninggal pada 1961, 26 tahun setelah ia menulis esai yang melahirkan kucing itu. Sepanjang hidupnya ia terus berdebat melawan interpretasi Copenhagen — dan selalu kalah. Mekanika kuantum berhasil, interpretasinya tidak pernah disangkal oleh eksperimen.<br><br>Tapi warisannya tetap luar biasa: persamaan gelombang Schrödinger adalah tulang punggung seluruh kimia kuantum dan fisika materi. Setiap kali kamu mengisi baterai HP, setiap kali laser menyala, setiap kali MRI bekerja — persamaannya yang menjelaskan itu semua.<br><br>Dan kucingnya? Jadi meme. Jadi ikon budaya pop. Jadi cara jutaan orang pertama kali menyentuh fisika kuantum.',
                visual: '🏆',
                history: [
                    { year: '1926', event: 'Persamaan gelombang Schrödinger — tulang punggung kimia kuantum modern', person: 'Erwin Schrödinger' },
                    { year: '1933', event: 'Nobel Prize Fisika bersama Dirac — untuk persamaan gelombang', person: 'Erwin Schrödinger' },
                    { year: '1935', event: 'Kucing Schrödinger lahir — sebagai ejekan, jadi ikon', person: 'Erwin Schrödinger' },
                    { year: '1994', event: 'NIST: superposisi pertama di ion tunggal yang terkontrol', person: 'David Wineland, NIST' },
                    { year: '2019', event: 'Google: "quantum supremacy" — 200 detik vs 10.000 tahun komputer klasik', person: 'Google AI' },
                ],
                highlight: 'Ide yang ia benci → konsep paling terkenal fisika modern → dasar komputer kuantum masa depan',
            },
        ],
    },

    // ── TEROWONGAN KUANTUM ───────────────────────────────────────────────────
    {
        id: 'quantum-tunneling',
        slides: [
            {
                type: 'hook',
                title: 'Alam Semesta Curang: Partikel Menembus Dinding yang Mustahil',
                body: 'Lempar bola tenis ke tembok beton. Bola itu akan mental balik — selamanya, sekeras apapun lemparan kamu. Begitulah hukum fisika yang kita kenal.<br><br>Tapi di dunia partikel, ada yang lebih aneh: elektron bisa tiba-tiba muncul di sisi lain tembok — tanpa pernah benar-benar melewatinya. Tanpa energi yang cukup. Seperti sulap, tapi bukan sulap.<br><br>Ini namanya terowongan kuantum. Dan tanpa fenomena ini: matahari tidak akan bisa menyala, dan HP di tangan kamu tidak akan pernah ada.',
                visual: '🕳️',
                animKey: 'anim-tunnel-hook',
                highlight: 'Terowongan kuantum: partikel "menembus" dinding yang mustahil — terjadi tiap saat di inti matahari dan di chip HP kamu',
            },
            {
                type: 'history',
                title: 'Gamow, 1928: Kenapa Matahari Bisa Menyala?',
                body: 'George Gamow, fisikawan muda berusia 24 tahun, punya masalah besar. Hitungannya bilang: proton di inti matahari punya energi yang jauh terlalu kecil untuk saling mendekat dan bergabung. Ada tembok energi (gaya tolak listrik antar proton) setinggi 550 keV. Tapi proton rata-rata cuma punya 1.3 keV. Secara fisika klasik — tidak mungkin.<br><br>Tapi jelas, matahari bersinar. Gamow lalu mencoba jawaban yang tidak wajar: dan ketika ia hitung dengan mekanika kuantum yang baru lahir — semuanya cocok. Partikel bisa "bocor" menembus tembok tanpa harus melompatinya.',
                quote: 'Mekanika kuantum bukan hanya aneh — ia benar. Dan itu yang paling menakutkan.',
                quoteAuthor: 'George Gamow',
                visual: '👨‍🔬',
                history: [
                    { year: '1900', event: 'Planck: energi bergerak dalam kuanta — lahirnya mekanika kuantum', person: 'Max Planck' },
                    { year: '1926', event: 'Schrödinger menulis persamaan gelombang — partikel adalah gelombang probabilitas', person: 'Erwin Schrödinger' },
                    { year: '1928', event: 'Gamow menjelaskan peluruhan alfa via tunneling — terobosan pertama terowongan kuantum', person: 'George Gamow' },
                    { year: '1928', event: 'Fowler & Nordheim: tunneling menjelaskan emisi elektron dari logam di medan listrik kuat', person: 'Fowler & Nordheim' },
                    { year: '1981', event: 'Binning & Rohrer membuat STM (Scanning Tunneling Microscope) — pertama melihat atom individual. Nobel 1986.', person: 'Binning & Rohrer, IBM' },
                    { year: '2022', event: 'Transistor 2nm: elektron tunnel melalui lapisan silikon hanya beberapa atom tebalnya', person: 'TSMC & Samsung' },
                ],
            },
            {
                type: 'step',
                title: 'Partikel Bukan Bola — Ia Kabut Peluang',
                body: 'Kunci dari semuanya ada di sini: partikel kuantum bukan bola keras kecil seperti kelereng. Ia lebih mirip kabut yang menyebar di ruang. Kabut ini disebut fungsi gelombang — ia menggambarkan di mana partikel kemungkinan berada.<br><br>Saat kabut ini menabrak dinding, sebagian besar memantul balik. Tapi sebagian kecil meresap masuk ke dalam dinding — makin ke dalam, kabutnya makin tipis, tapi tidak pernah benar-benar nol. Kalau dindingnya cukup tipis, sisa kabut itu masih terlacak di sisi satunya. Artinya: ada kemungkinan kecil partikel ditemukan di sana — dan kemungkinan itu nyata.',
                visual: '〰️',
                animKey: 'anim-tunnel-wave',
                highlight: 'Peluang tembus ∝ e^(-2κd) · makin tebal dinding → peluang makin kecil secara eksponensial',
            },
            {
                type: 'step',
                title: 'Satu Atom Lebih Tipis → Peluang Naik 10 Kali Lipat',
                body: 'Ini bagian yang bikin kepala muter: peluang tembus turun sangat cepat seiring dinding makin tebal. Tambah satu Ångström (lebar satu atom hidrogen) — peluangnya bisa jatuh 10 kali lipat. Begitu pula sebaliknya: tipiskan satu atom — peluang naik 10 kali.<br><br>Inilah yang membuat Scanning Tunneling Microscope (STM) begitu akurat. Ujung jarumnya tinggal beberapa atom dari permukaan — arus yang mengalir lewat terowongan kuantum sangat sensitif terhadap jarak. Geser 0.1 nm saja, arus berubah drastis. Lebih presisi dari cahaya manapun.',
                visual: '📡',
                animKey: 'anim-tunnel-thickness',
                highlight: 'Tipis 1Å → peluang naik 10× · Dasar kerja STM dan flash memory di SSD kamu',
            },
            {
                type: 'step',
                title: 'Kalau Tidak Ada Terowongan Ini, Matahari Sudah Mati',
                body: 'Di inti matahari, suhunya 15 juta derajat Kelvin. Panas banget? Iya. Tapi energi rata-rata tiap proton dari suhu itu cuma sekitar 1.3 keV — jauh di bawah tembok Coulomb 550 keV yang harus dilewati agar dua proton bisa berfusi.<br><br>Secara klasik: sudah pasti tidak bakal terjadi. Tapi karena terowongan kuantum, dari sekian banyak tabrakan, sesekali ada satu pasang proton yang berhasil tembus. Kecil sekali peluangnya — tapi di matahari ada sekitar 10⁵⁷ proton yang terus-terusan bergerak. Jumlah besar × peluang kecil = matahari bersinar 4,6 miliar tahun.',
                visual: '☀️',
                animKey: 'anim-tunnel-sun',
                highlight: '1 dari 10²⁸ pasang proton berhasil tiap detik · tapi 10⁵⁷ proton di matahari → cukup hasilkan 3.8×10²⁶ W',
            },
            {
                type: 'scale',
                title: 'Angka yang Tidak Bisa Dibayangkan',
                body: 'Ångström (Å) adalah satuan yang digunakan untuk mengukur penghalang tunneling. 1 Å = 0.0000000001 meter. Diameter atom hidrogen ~1 Å. Penghalang tunneling dalam transistor modern: 2–3 nm = 20–30 Å.<br><br>Di transistor 2nm (yang dipakai di chip Apple M4 dan AMD Zen 5), lapisan isolator antara gate dan channel hanya beberapa atom tebalnya. Elektron secara reguler tunnel melewatinya — ini yang menyebabkan "leakage current" di chip modern. Semakin kecil transistor, semakin susah menghentikan tunneling yang tidak diinginkan.',
                visual: '💻',
                highlight: 'Transistor 2nm: ~10 atom lebar · 100 miliar transistor di satu chip M4 · tunneling leakage jadi masalah engineering terbesar',
            },
            {
                type: 'scale',
                title: 'Paradoks: Mustahil tapi Nyata — dan Kita Bergantung Padanya',
                body: 'Tunneling adalah bukti bahwa alam semesta di level terkecilnya bermain dengan aturan yang sama sekali berbeda dari dunia sehari-hari. Tidak ada analogi yang benar-benar tepat. Tidak ada cara untuk "merasakan" seperti apa.<br><br>Namun kita tidak hanya tahu tentangnya — kita bergantung padanya. Setiap flash memory (SSD, USB drive) bekerja dengan menyimpan dan menghapus data menggunakan tunneling. Setiap MRI medis bergantung pada tunneling elektron di superkonduktor. Enzim dalam tubuhmu menggunakan tunneling proton untuk mempercepat reaksi kimia biologis.',
                visual: '🧬',
                highlight: 'Flash memory · MRI · enzim biologi · solar fusion · semua bergantung pada tunneling yang "mustahil secara klasik"',
            },
            {
                type: 'impact',
                title: 'Warisan: Melihat Atom dengan Jarum Ajaib',
                body: 'Pada 1981, Gerd Binnig dan Heinrich Rohrer di IBM Zurich membuat alat yang menggunakan tunneling langsung: Scanning Tunneling Microscope. Ujung jarum logam yang sangat tajam (idealnya satu atom di ujungnya) digerakkan melintasi permukaan — arus tunneling yang mengalir sensitif terhadap jarak hingga resolusi sub-atom.<br><br>Untuk pertama kalinya dalam sejarah, manusia bisa melihat — bukan mengira-ngira, tapi benar-benar memetakan — posisi atom individual di permukaan. Binnig dan Rohrer memenangkan Nobel Prize Fisika 1986. STM kemudian menjadi ayah dari seluruh keluarga scanning probe microscopy yang merevolusi nanoteknologi.',
                visual: '🔬',
                history: [
                    { year: '1928', event: 'Gamow: tunneling menjelaskan peluruhan radioaktif alfa — teori pertama', person: 'George Gamow' },
                    { year: '1957', event: 'Leo Esaki membuat dioda tunnel — Nobel 1973. Pertama kali tunneling di perangkat elektronik', person: 'Leo Esaki' },
                    { year: '1981', event: 'STM (Scanning Tunneling Microscope) dibuat — melihat atom individual untuk pertama kalinya', person: 'Binnig & Rohrer, IBM' },
                    { year: '1990', event: 'IBM: 35 atom xenon disusun membentuk logo "IBM" dengan STM — manipulasi atom pertama', person: 'Don Eigler, IBM' },
                    { year: '2024', event: 'Transistor 2nm di chip modern — tunneling menjadi tantangan engineering terbesar semikonduktor', person: 'TSMC, Samsung, Intel' },
                ],
                highlight: 'Dari teori Gamow 1928 → STM Nobel 1986 → transistor 2nm hari ini — semua satu garis lurus tunneling',
            },
        ],
    },

    // ── EFEK FOTOLISTRIK ──────────────────────────────────────────────────────
    {
        id: 'photoelectric',
        slides: [
            {
                type: 'hook',
                title: 'Nobel Einstein 1921: Bukan untuk E=mc², Tapi untuk Ini',
                body: 'Ketika Komite Nobel mengumumkan pemenang tahun 1921, dunia mengira Einstein akan menang untuk Relativitas — teori yang sudah mengubah pemahaman manusia tentang ruang dan waktu. Mereka salah. Relativitas dianggap terlalu spekulatif, terlalu revolusioner, terlalu berisiko untuk salah. Sebaliknya, Nobel diberikan untuk fenomena yang terlihat sepele: cahaya menembak elektron keluar dari logam. Einstein menang Noble bukan karena teori terbesarnya — tapi karena ia membuktikan cahaya adalah partikel.',
                visual: '💡',
                animKey: 'anim-photo-hook',
                highlight: 'Nobel Fisika 1921: Efek Fotolistrik · Relativitas: terlalu kontroversial untuk Nobel',
            },
            {
                type: 'history',
                title: 'Tahun 1905: Satu Pria, Lima Revolusi',
                body: 'Bayangkan: seorang pria 26 tahun, bekerja sebagai pemeriksa paten kelas tiga di Bern, Swiss. Tidak punya koneksi akademik. Tidak punya laboratorium. Hanya otak dan waktu luang di kantor yang membosankan. Dalam satu tahun — 1905 — Albert Einstein mempublikasikan LIMA paper ilmiah, masing-masing cukup untuk memenangkan Nobel Prize. Gerakan Brownian. Relativitas khusus. E=mc². Teori foton cahaya. Dan efek fotolistrik. Tahun 1905 dikenal sebagai "Annus Mirabilis" — Tahun Keajaiban Einstein.',
                quote: 'Bagaimana seorang pria bisa menyelamatkan waktu untuk berpikir tentang fisika sambil bekerja 8 jam sehari? Dari perspektif saya, tidak ada. Tapi saya bekerja hanya 6 jam.',
                quoteAuthor: 'Albert Einstein, tentang pekerjaannya di kantor paten',
                visual: '📝',
                history: [
                    { year: '1887', event: 'Hertz menemukan efek fotolistrik secara tidak sengaja — logam terpapar UV menghasilkan percikan listrik aneh', person: 'Heinrich Hertz' },
                    { year: '1900', event: 'Planck: energi cahaya tidak kontinu — bergerak dalam paket diskret (kuanta). Ia sendiri tidak percaya implikasinya.', person: 'Max Planck' },
                    { year: '1905', event: 'Einstein: cahaya bukan gelombang murni — ia terdiri dari foton dengan energi E=hf. Ini menjelaskan efek fotolistrik.', person: 'Albert Einstein' },
                    { year: '1916', event: 'Millikan membuktikan formula Einstein secara eksperimen — awalnya ia sendiri mencoba membuktikan Einstein salah', person: 'Robert Millikan' },
                    { year: '1921', event: 'Nobel Prize Fisika untuk Einstein — bukan Relativitas. Relativitas masih terlalu kontroversial bagi komite.', person: 'Komite Nobel' },
                ],
            },
            {
                type: 'step',
                title: 'Misteri: Kenapa Intensitas Tidak Penting?',
                body: 'Sebelum Einstein, fisikawan mengira: semakin terang cahaya → semakin banyak energi → semakin mudah elektron terlepas dari logam. Logis, kan?<br><br>Percobaan Philipp Lenard menghancurkan logika itu. Ia menyinari logam dengan cahaya redup berwarna ungu — elektron langsung terlepas. Lalu ia menyinari dengan cahaya merah yang sangat terang — tidak ada elektron yang keluar. Tidak ada. Sama sekali. Apapun yang dilakukan, cahaya merah tidak bisa melepas elektron. Tapi cahaya ungu yang redup sekalipun, langsung berhasil.',
                visual: '🔴',
                animKey: 'anim-photo-paradox',
                highlight: 'Cahaya merah terang + logam = tidak ada elektron · Cahaya ungu redup + logam = elektron langsung terlepas',
            },
            {
                type: 'step',
                title: 'Jawaban Einstein: Cahaya adalah Partikel (Foton)',
                body: 'Einstein mengambil ide kuantum Planck dan mendorongnya ke langkah lebih jauh: cahaya tidak hanya bergerak dalam paket — cahaya ADALAH paket. Setiap paket disebut foton. Energi satu foton = h × f (frekuensi). Satu foton memukul satu elektron — seperti bola billiard. Jika energi foton cukup besar (frekuensi tinggi = cahaya biru/ungu), elektron terlepas. Jika tidak cukup (frekuensi rendah = cahaya merah), tidak ada yang terjadi — tidak peduli berapa banyak foton datang.<br><br>Intensitas hanya menentukan JUMLAH foton, bukan energi per foton. Banyak foton lemah tetap tidak bisa melepas satu elektron yang butuh energi lebih besar.',
                visual: '☀️',
                animKey: 'anim-photo-foton',
                highlight: 'E = h × f · h = konstanta Planck (6.626×10⁻³⁴ J·s) · f = frekuensi cahaya',
            },
            {
                type: 'step',
                title: 'Threshold: Setiap Logam Punya Pintu Sendiri',
                body: 'Setiap logam punya "fungsi kerja" (work function) — energi minimum yang dibutuhkan untuk melepas satu elektron. Cesium: 2.1 eV (bisa dilepas cahaya tampak). Natrium: 2.3 eV. Platinum: 5.65 eV (butuh cahaya UV keras). Ini seperti pintu dengan kunci yang berbeda — hanya foton dengan frekuensi yang tepat (energi ≥ fungsi kerja) yang bisa membuka pintunya.',
                visual: '🔑',
                animKey: 'anim-photo-threshold',
                highlight: 'Cesium: f minimum = 508 THz · Natrium: 555 THz · Platinum: 1.37 PHz (perlu UV)',
            },
            {
                type: 'scale',
                title: 'Skala yang Tidak Terbayangkan',
                body: 'Satu foton cahaya tampak (~600 nm) membawa energi sekitar 2 eV — atau 3.2 × 10⁻¹⁹ Joule. Untuk perbandingan: mengangkat selembar kertas 1 mm butuh energi ~1 mikro-Joule. Satu foton = 0.0000000000003 dari itu.<br><br>Tapi ketika foton itu tepat mengenai satu elektron dengan energi yang cukup — ia memberikan seluruh energinya secara instan. Tidak ada batasan. Tidak ada pemanasan. Tidak ada waktu tunda. Elektron langsung terlempar keluar dalam kurang dari 10⁻¹⁵ detik.',
                visual: '⚡',
                highlight: 'Waktu tunda: < 10 femtodetik (10⁻¹⁵ s) · Tidak ada "pemanasan bertahap" — transfer energi instan',
            },
            {
                type: 'scale',
                title: 'Paradoks: Cahaya adalah Gelombang DAN Partikel',
                body: 'Einstein tidak mengatakan gelombang itu salah. Cahaya ADALAH gelombang (interferensi, difraksi — semua bukti eksperimennya nyata). Tapi cahaya JUGA adalah partikel (foton). Dua hal yang seharusnya mustahil secara bersamaan — keduanya benar.<br><br>Ini yang disebut wave-particle duality — dan ini yang melahirkan mekanika kuantum. Niels Bohr kemudian memperluas ide ini: tidak hanya cahaya, tapi elektron, proton, bahkan atom-atom kecil juga punya dualitas ini. Dunia subatomik tidak bermain dengan aturan logika sehari-hari.',
                visual: '🌊',
                highlight: 'Cahaya = gelombang (double-slit experiment) DAN partikel (efek fotolistrik) — keduanya nyata, keduanya benar',
            },
            {
                type: 'impact',
                title: 'Warisan: Dari Kantor Paten ke Setiap Smartphone',
                body: 'Ide Einstein di kantor paten Bern 1905 kini hidup di seluruh penjuru teknologi modern. Panel surya: foton matahari memukul elektron dalam silikon → arus listrik yang menyalakan rumah. Kamera digital sensor CCD/CMOS: foton memicu elektron di setiap piksel → foto. Night-vision goggles militer: foton IR melepas elektron yang diperkuat. Detektor UV di mesin ATM untuk mendeteksi uang palsu.<br><br>Efek fotolistrik bukan teori abstrak — ia ada di tanganmu, di sakumu, di atap rumahmu.',
                visual: '📱',
                history: [
                    { year: '1921', event: 'Nobel Prize — pengakuan resmi bahwa cahaya adalah foton', person: 'Albert Einstein' },
                    { year: '1954', event: 'Bell Labs: sel surya silikon pertama dengan efisiensi 6%', person: 'Bell Labs' },
                    { year: '1969', event: 'CCD sensor: kamera digital pertama berbasis efek fotolistrik', person: 'Boyle & Smith, Bell Labs' },
                    { year: '1977', event: 'Panel surya pertama digunakan untuk menyalakan rumah', person: 'Pionir solar energy' },
                    { year: '2024', event: 'Solar panel global: 1.6 TW kapasitas terpasang · Efisiensi terbaik: 47.6%', person: 'NREL' },
                ],
                highlight: 'Satu ide di kantor paten → panel surya 1.6 TW · kamera digital · sensor smartphone',
            },
        ],
    },

    // ── REAKSI BERANTAI ───────────────────────────────────────────────────────
    {
        id: 'chain-reaction',

        slides: [
            {
                type: 'hook',
                title: 'Reaktor Nuklir Pertama Dibangun di Bawah Tribun Stadion Sepakbola',
                body: 'Desember 1942. Di bawah tribun West Stands Stagg Field — stadion Universitas Chicago — Enrico Fermi dan 48 ilmuwan diam-diam membangun tumpukan grafit dan uranium. Di atas mereka, 30.000 kursi kosong karena liga sepakbola sedang absen perang. Tidak ada izin dari walikota. Tidak ada pemberitahuan ke siapapun. Mereka akan memulai reaksi berantai nuklir pertama dalam sejarah manusia — dan tidak ada yang tahu apakah mereka bisa menghentikannya.',
                visual: '⛓️',
                animKey: 'anim-chain-hook',
                highlight: 'CP-1: Chicago Pile-1 · 2 Desember 1942 · 3:25 PM · Reaksi berantai pertama di Bumi',
            },
            {
                type: 'history',
                title: 'Fermi — Pengungsi yang Membangun Apokalips',
                body: 'Enrico Fermi lahir di Roma 1901. Pada 1938, ia pergi ke Stockholm menerima Nobel Prize — dan tidak pernah kembali ke Italia. Mussolini sudah menerapkan hukum rasial; istrinya, Laura, adalah Yahudi. Dari Stockholm, mereka langsung ke New York. Fermi membawa serta kepala fisika terbaik Eropa yang melarikan diri dari Nazi dan Fasis — Szilard, Teller, Wigner, Weisskopf. Bersama-sama, mereka akan membangun senjata paling mematikan yang pernah ada, atas nama satu ketakutan: jika mereka tidak melakukannya lebih dulu, Hitler yang akan melakukannya.',
                quote: 'Tumpukan grafit itu berhasil. Reaksi berantai menjadi self-sustaining. Kami tahu saat itu: dunia tidak akan pernah sama lagi.',
                quoteAuthor: 'Arthur Compton, telepon ke Washington D.C., 2 Desember 1942',
                visual: '👨‍🔬',
                history: [
                    { year: '1938', event: 'Hahn & Strassmann membelah uranium — fisi ditemukan. Fermi melarikan diri ke Amerika.', person: 'Enrico Fermi' },
                    { year: '1939', event: 'Einstein-Szilard Letter: memperingatkan Roosevelt bahwa Jerman mungkin sedang membangun bom atom', person: 'Einstein & Szilard' },
                    { year: '1941', event: 'Manhattan Project dimulai. Fermi ditugaskan membuktikan reaksi berantai bisa dikendalikan.', person: 'US Government' },
                    { year: 'Des 1942', event: 'CP-1 aktif — 28 menit reaksi berantai terkontrol pertama dalam sejarah', person: 'Enrico Fermi & tim' },
                    { year: '1945', event: 'Trinity Test → Hiroshima → Nagasaki. Fermi menyaksikan Trinity dari bunker 10 km jauhnya.', person: 'Manhattan Project' },
                    { year: '1954', event: 'Fermi meninggal karena kanker lambung — mungkin akibat radiasi bertahun-tahun. Usia 53.', person: 'Enrico Fermi' },
                ],
            },
            {
                type: 'step',
                title: 'Eksponensial: Satu Menjadi Satu Miliar dalam 80 Langkah',
                body: 'Ketika satu atom U-235 pecah, ia melepaskan 2–3 neutron. Setiap neutron membelah atom uranium lain — melepas 2–3 neutron baru lagi. Generasi pertama: 1 atom. Generasi kedua: 2–3 atom. Generasi ketiga: 4–9 atom. Setiap generasi terjadi dalam ~10 nanosecond. Setelah 80 generasi (kurang dari satu milidetik), sudah terbentuk lebih dari 10²⁴ fisi — cukup untuk ledakan nuklir penuh.',
                visual: '💥',
                animKey: 'anim-chain',
                highlight: 'gen 1: 1 atom → gen 10: 1.024 → gen 80: ~10²⁴ · semua dalam < 1 milidetik',
            },
            {
                type: 'step',
                title: 'Massa Kritis: Batas Antara Reaktor dan Bom',
                body: 'Tidak semua neutron mengenai atom uranium — sebagian kabur keluar. Jika bahan bakar terlalu sedikit atau terlalu tipis, lebih banyak neutron kabur daripada yang memicu fisi baru → reaksi mati. Ini disebut "sub-critical". Di atas massa kritis — setiap neutron yang hilang digantikan oleh lebih banyak — reaksi tumbuh tak terkendali. Untuk U-235 murni, massa kritis sekitar 52 kg (bola berdiameter 17 cm). Untuk Pu-239: hanya 10 kg.',
                visual: '⚖️',
                animKey: 'anim-critical-mass',
                highlight: 'U-235 murni: massa kritis ~52 kg · Pu-239: ~10 kg · Bom Fat Man Nagasaki: 6.4 kg Pu',
            },
            {
                type: 'step',
                title: 'Control Rods: Mengendalikan Apokalips dengan Batang Grafit',
                body: 'CP-1 Fermi dikendalikan oleh tiga batang cadmium — logam yang menyerap neutron seperti spons. Tarik batang keluar: lebih banyak neutron bebas, reaksi menguat. Dorong masuk: neutron tersumbat, reaksi melemah. Di pagi 2 Desember 1942, Fermi secara bertahap menarik batang kontrol satu sentimeter per satu sentimeter, sambil mengamati detektor Geiger. Pukul 15:25 — batang sudah cukup keluar. Reaksi menjadi self-sustaining. Fermi membiarkannya berjalan 28 menit.<br><br>Kemudian ia mendorong batang kembali masuk. Reaksi berhenti.',
                visual: '🎛️',
                animKey: 'anim-control-rods',
                highlight: 'Cadmium menyerap neutron · Ditarik = lebih banyak fisi · Didorong = reaksi berhenti',
            },
            {
                type: 'scale',
                title: 'Angka yang Tidak Bisa Dibayangkan',
                body: 'Jika kamu melipat selembar kertas 42 kali, tebalnya akan mencapai bulan. Prinsip matematika yang sama dengan reaksi berantai: eksponensial selalu menang melawan intuisi manusia.<br><br>Reaksi berantai dalam bom Little Boy Hiroshima: berlangsung dalam 0,0000001 detik. Dalam waktu itu, terjadi sekitar 80 generasi pembelahan. Energi yang dilepas: setara dengan 15.000 ton TNT. Dari 64 kg uranium — hanya ~900 gram yang sempat bereaksi sebelum ledakan menghancurkan sisanya.',
                visual: '🔢',
                highlight: '0.9 kg uranium bereaksi → 15.000 ton TNT · Efisiensi: 1.4% — sisanya terbuang sia-sia oleh ledakannya sendiri',
            },
            {
                type: 'scale',
                title: 'Paradoks: Teknologi yang Sama Membunuh dan Menerangi',
                body: 'Reaksi berantai yang menghancurkan Hiroshima dan Nagasaki adalah prinsip yang identik dengan yang menyalakan 440 reaktor nuklir di seluruh dunia hari ini. Perbedaannya hanya pada kecepatan: bom = reaksi tak terkontrol dalam milidetik. Reaktor = reaksi terkontrol selama bertahun-tahun.<br><br>Prancis menghasilkan 75% listriknya dari nuklir — dan punya jejak karbon per kapita yang lebih rendah dari Jerman yang bergantung batu bara. Paris yang indah di malam hari menyala dari reaksi berantai yang dikendalikan.',
                visual: '⚡',
                highlight: '440 reaktor nuklir aktif · 10% listrik global · Prancis: 75% listrik dari nuklir sejak 1970an',
            },
            {
                type: 'impact',
                title: 'Warisan: Api yang Tidak Pernah Padam',
                body: 'CP-1 berhasil dioperasikan selama beberapa bulan sebelum dibongkar dan dipindahkan ke lokasi lebih aman di luar kota. Saat ini, tempatnya ditandai dengan plakat perunggu di bawah tribun yang sudah dirombak.<br><br>Fermi tidak pernah melihat buah dari pekerjaannya — ia meninggal 1954 dari kanker lambung yang mungkin dipercepat oleh radiasi bertahun-tahun. Tapi warisannya hidup: teknologi reaktor nuklirnya menjadi blueprint seluruh industri nuklir dunia. Dan paradoks terbesar: pria yang melarikan diri karena takut fasis — justru membangun senjata yang mengakhiri perang fasis.',
                visual: '🏛️',
                history: [
                    { year: '1942', event: 'CP-1 aktif — reaktor nuklir terkontrol pertama di dunia', person: 'Fermi & team' },
                    { year: '1951', event: 'EBR-I: reaktor nuklir pertama yang menghasilkan listrik, Idaho USA', person: 'AEC' },
                    { year: '1954', event: 'Obninsk, USSR: PLTN komersial pertama di dunia (5 MW)', person: 'Soviet Union' },
                    { year: '1986', event: 'Chernobyl: control rods gagal → reaksi berantai tak terkendali → meltdown', person: 'Operator RBMK-1000' },
                    { year: '2024', event: '440 reaktor aktif global · Gen IV reactors & SMRs dalam pengembangan', person: 'IAEA' },
                ],
                highlight: 'Teknologi yang sama: bom Hiroshima & PLTN Paris · Perbedaan: kecepatan reaksi',
            },
        ],
    },

    // ── FISI NUKLIR ──────────────────────────────────────────────────────────
    {
        id: 'fission',
        slides: [
            {
                type: 'hook',
                title: 'Satu Atom. Satu Kota. Hancur.',
                body: 'Pada 6 Agustus 1945, pukul 08:15 pagi, sebuah bom dijatuhkan di atas Hiroshima. Energi yang dilepaskan setara dengan 15.000 ton TNT — namun bahan bakarnya hanya satu kilogram uranium yang benar-benar bereaksi. Semua itu bermula dari satu proses: sebuah neutron menghantam inti atom. Inilah fisi nuklir.',
                visual: '💥',
                animKey: 'anim-fission-hook',
                highlight: '64 kg uranium · hanya ~1 kg bereaksi · setara 15.000 ton TNT',
            },
            {
                type: 'history',
                title: 'Penemuan yang Mengubah Segalanya',
                body: 'Segalanya dimulai dari laboratorium di Berlin pada malam hari di bulan Desember 1938. Otto Hahn dan Fritz Strassmann sedang membombardir uranium dengan neutron — mengira mereka akan membuat unsur baru yang lebih berat. Yang mereka temukan justru sebaliknya: uranium pecah menjadi barium yang jauh lebih ringan. Mereka tidak percaya. Mereka menelepon bekas rekan kerja mereka, Lise Meitner — seorang fisikawan perempuan Yahudi yang sudah melarikan diri dari Nazi Jerman ke Swedia.',
                quote: 'Kami telah menemukan sesuatu yang mengerikan. Aku tidak mau mempublikasikannya.',
                quoteAuthor: 'Otto Hahn, setelah menyadari implikasi militer fisi nuklir',
                visual: '👩‍🔬',
                history: [
                    { year: '1905', event: 'Einstein menerbitkan E=mc² — energi dan massa bisa saling bertukar', person: 'Albert Einstein' },
                    { year: '1932', event: 'James Chadwick menemukan neutron — peluru yang akan memicu fisi', person: 'James Chadwick' },
                    { year: '1938', event: 'Hahn & Strassmann membelah atom uranium pertama kali di Berlin', person: 'Otto Hahn & Fritz Strassmann' },
                    { year: '1939', event: 'Lise Meitner dan keponakan Otto Frisch menjelaskan fisi secara matematis', person: 'Lise Meitner' },
                    { year: '1942', event: 'Enrico Fermi membangun reaktor nuklir pertama di bawah tribun stadion Chicago', person: 'Enrico Fermi' },
                    { year: '1945', event: 'Trinity Test — ledakan nuklir pertama di New Mexico. Lalu Hiroshima & Nagasaki.', person: 'Manhattan Project' },
                ],
            },
            {
                type: 'step',
                title: 'Step 1: Satu Neutron Menghantam',
                body: 'Inti atom uranium-235 sangat besar dan gembung — 92 proton dan 143 neutron berdesakan di dalam ruang yang luar biasa kecil. Ketika sebuah neutron bebas mendekat dengan kecepatan yang tepat (neutron lambat, atau "termal"), ia diserap oleh inti uranium.',
                visual: '⚛️',
                animKey: 'anim-fission-step1',
                highlight: 'U-235 + n → U-236* (sangat tidak stabil)',
            },
            {
                type: 'step',
                title: 'Step 2: Inti Bergetar dan Pecah',
                body: 'U-236 yang terbentuk sangat tidak stabil — seperti tetesan air yang terlalu besar yang bergetar sampai pecah. Dalam waktu kurang dari satu triliun detik, inti itu memanjang seperti elips, lalu kutub-kutubnya saling tolak karena muatan positif proton, dan PECAH menjadi dua inti yang lebih kecil.',
                visual: '🎯',
                animKey: 'anim-fission-step2',
                highlight: 'U-236* → Kr-92 + Ba-141 + 3 neutron + energi (~200 MeV)',
            },
            {
                type: 'step',
                title: 'Step 3: Reaksi Berantai Dimulai',
                body: 'Inilah kuncinya: setiap satu atom uranium yang pecah melepaskan 2 atau 3 neutron baru. Jika neutron-neutron itu mengenai atom uranium lain — masing-masing memecah atom baru, melepaskan lebih banyak neutron lagi. Dalam sepersejuta detik: 1 → 2 → 4 → 8 → ... → 2⁸⁰ reaksi. Itu bom atom.',
                visual: '⛓️',
                animKey: 'anim-chain',
                highlight: 'Dalam ~1 mikro-detik: 1 kg uranium → melepaskan energi sekian megajoule dalam 80 generasi pembelahan',
            },
            {
                type: 'step',
                title: 'Step 4: E = mc² Bekerja',
                body: 'Mengapa ada energi yang dilepaskan? Karena massa Kr-92 + Ba-141 + 3 neutron LEBIH KECIL dari massa U-235 + 1 neutron. "Massa yang hilang" itu (sekitar 0.1% dari total massa) berubah menjadi energi murni sesuai rumus Einstein: E = mc². Dengan c = 300 juta m/s, bahkan massa yang sangat kecil menghasilkan energi yang luar biasa.',
                visual: '⚡',
                animKey: 'anim-emc2',
                highlight: 'Massa "hilang" × c² = Energi kinetik + panas + radiasi gamma',
            },
            {
                type: 'scale',
                title: 'Skala yang Membuat Kepala Pusing',
                body: 'Bayangkan kamu memegang satu koin logam. Di dalam satu gram logam, ada sekitar 10²² (sepuluh ribu triliun triliun) atom. Bom Hiroshima hanya "membakar" sekitar 1 kg uranium yang bereaksi — tapi setiap atom yang pecah melepaskan 50 juta kali lebih banyak energi dari satu reaksi kimia biasa (seperti membakar batu bara). Inilah perbedaan reaksi nuklir vs kimia.',
                visual: '📏',
                highlight: '1 kg uranium yang bereaksi ≈ membakar 3 juta ton batu bara',
            },
            {
                type: 'impact',
                title: 'Warisan Fisi Nuklir',
                body: 'Fisi nuklir adalah pisau bermata dua terbesar dalam sejarah manusia. Di satu sisi: bom atom yang membunuh 200.000 orang dan mengakhiri Perang Dunia II, perlombaan senjata nuklir Perang Dingin, dan ancaman kehancuran total. Di sisi lain: pembangkit listrik tenaga nuklir yang menghasilkan 10% listrik dunia tanpa CO₂, medicine nuklir yang menyelamatkan jutaan nyawa, dan pemahaman mendalam tentang materi.',
                visual: '🌏',
                history: [
                    { year: '1954', event: 'PLTN pertama dunia beroperasi di Obninsk, Uni Soviet', person: 'Soviet Union' },
                    { year: '1986', event: 'Bencana Chernobyl — peringatan keras tentang keselamatan nuklir', person: 'Operator RBMK-1000' },
                    { year: '2011', event: 'Fukushima Daiichi — gempa bumi merusak reaktor di Jepang', person: 'TEPCO' },
                    { year: 'Sekarang', event: '440 reaktor nuklir beroperasi di 30 negara, menghasilkan ~10% listrik global', person: 'IAEA' },
                ],
                highlight: 'Saat ini: 440 reaktor nuklir aktif · 10% listrik global · nol emisi CO₂',
            },
        ],
    },


    // ── FUSI NUKLIR ──────────────────────────────────────────────────────────
    {
        id: 'fusion',
        slides: [
            {
                type: 'hook',
                title: 'Mimpi 100 Tahun Manusia: Membotol Matahari',
                body: 'Matahari membakar 600 juta ton hidrogen setiap detik. Ia sudah melakukan ini selama 4,6 miliar tahun — dan masih punya cukup bahan bakar untuk 5 miliar tahun lagi. Jika kita bisa meniru proses ini di Bumi, kita mendapatkan energi tanpa habis, tanpa bahan bakar yang akan kehabisan, tanpa emisi CO₂. Inilah mimpi terbesar fisika modern — dan kita sudah mengejarnya selama 100 tahun.',
                visual: '☀️',
                animKey: 'anim-fusion-hook',
                highlight: '1 kg hidrogen fusi = energi dari 10.000.000 kg bensin',
            },
            {
                type: 'history',
                title: '100 Tahun Mengejar Matahari',
                body: 'Perjalanan dari "matahari bekerja dengan cara apa?" hingga "mari kita buat matahari buatan" memakan hampir satu abad — dan kita belum sampai. Setiap dekade membawa kemajuan besar, setiap dekade pula menghadirkan rintangan baru yang tidak terduga.',
                quote: 'Fusi nuklir selalu 30 tahun lagi dari sekarang — selalu.',
                quoteAuthor: 'Lelucon lama di kalangan fisikawan, yang kini mulai tidak berlaku',
                visual: '🌅',
                history: [
                    { year: '1920', event: 'Arthur Eddington pertama mengusulkan matahari ditenagai oleh fusi hidrogen — diejek para koleganya', person: 'Arthur Eddington' },
                    { year: '1939', event: 'Hans Bethe menghitung siklus proton-proton secara lengkap. Ia meraih Nobel 28 tahun kemudian', person: 'Hans Bethe' },
                    { year: '1952', event: 'Bom hidrogen pertama meledak — fusi yang tidak terkontrol, sama sekali bukan yang diinginkan', person: 'Manhattan Project' },
                    { year: '1958', event: 'Uni Soviet memperkenalkan desain Tokamak (Toroidal Chamber Magnetic) kepada dunia', person: 'Sakharov & Tamm' },
                    { year: '1997', event: 'JET (Joint European Torus) mencetak rekor: 16 MW energi fusi — tapi membutuhkan 24 MW untuk beroperasi', person: 'JET Collaboration' },
                    { year: '2022', event: 'NIF (National Ignition Facility) pertama kali menghasilkan lebih banyak energi dari yang dimasukkan — ignition!', person: 'Lawrence Livermore NIF' },
                    { year: '2025+', event: 'ITER di Prancis: 35 negara, €20 miliar, ditargetkan menghasilkan 500 MW dari 50 MW input', person: 'ITER Organization' },
                ],
            },
            {
                type: 'scale',
                title: 'Mengapa Fusi Jauh Lebih Kuat dari Fisi?',
                body: 'Dalam fisi, kita memecah inti besar menjadi kecil. Dalam fusi, kita menggabungkan inti kecil menjadi lebih besar. Fusi melepaskan energi 3-4× lebih besar per kilogram bahan bakar dibanding fisi — karena "energi ikat" yang dilepaskan jauh lebih besar. Dan bahan bakarnya? Hidrogen (deuterium + tritium) — isotop yang bisa diekstrak dari air laut.',
                visual: '⚡',
                animKey: 'anim-fusion-compare',
                highlight: 'Fusi D-T: 339 MJ/gram · Fisi U-235: 82 MJ/gram · Bensin: 0.046 MJ/gram',
            },
            {
                type: 'step',
                title: 'Step 1: Proton-Proton Chain — Cara Matahari Membakar',
                body: 'Di inti matahari (suhu 15 juta Kelvin, tekanan 250 miliar atmosfer), proton bertabrakan dengan kecepatan gila-gilaan. Satu dari 100 triliun tabrakan berhasil — karena quantum tunneling. Proton menembus halangan elektromagnetik, bergabung menjadi deuterium, lalu helium-3, lalu helium-4. Setiap langkah melepaskan energi.',
                visual: '🌞',
                animKey: 'anim-proton-chain',
                highlight: '4 Hidrogen → 1 Helium + 26.73 MeV energi + 2 neutrino',
            },
            {
                type: 'step',
                title: 'Step 2: D-T Fusion — Cara Manusia Mencoba',
                body: 'Proton-proton chain terlalu lambat untuk reaktor manusia. Ilmuwan memilih reaksi yang lebih mudah: Deuterium + Tritium → Helium-4 + Neutron. Masalahnya: untuk memaksa dua nukleus berfusi, kita harus memanaskan plasma hingga 100-150 juta derajat — 10× lebih panas dari inti matahari. Kenapa lebih panas? Karena matahari menggunakan gravitasi kolosal untuk mengkompensasi, sementara kita hanya punya magnet.',
                visual: '🔥',
                animKey: 'anim-dt-fusion',
                highlight: 'D + T → He-4 (3.5 MeV) + n (14.1 MeV) · Total: 17.6 MeV per reaksi',
            },
            {
                type: 'step',
                title: 'Step 3: Mengurung Matahari dengan Magnet',
                body: 'Masalah terbesar fusi: plasma 150 juta derajat harus tidak menyentuh dinding apa pun — karena tidak ada material yang tahan. Solusi: magnet superkonduktor yang sangat kuat membentuk medan magnet dalam bentuk donat (toroid). Plasma berputar di dalam jalur medan magnet tanpa menyentuh dinding. Inilah Tokamak — dan membuatnya stabil selama cukup lama adalah tantangan terbesar engineering abad ini.',
                visual: '🍩',
                animKey: 'anim-tokamak',
                highlight: 'Tokamak: plasma 150 juta°C · medan magnet 13 Tesla · kekosongan lebih sempurna dari luar angkasa',
            },
            {
                type: 'scale',
                title: 'Jika Fusi Berhasil: Dunia yang Berbeda',
                body: 'Deuterium bisa diekstrak dari air laut — dan ada jutaan ton di lautan. Tritium bisa dihasilkan dari litium yang melimpah. Satu liter air laut mengandung deuterium yang, jika difusikan, setara dengan energi dari 300 liter bensin. Limbahnya? Helium — gas inert yang tidak berbahaya. Tidak ada emisi karbon, tidak ada limbah radioaktif jangka panjang, tidak ada risiko meltdown (fusi berhenti sendiri jika terganggu, tidak bisa runaway).',
                visual: '🌊',
                highlight: '1 liter air laut ≈ 300 liter bensin (jika difusikan) · limbah: hanya Helium',
            },
            {
                type: 'impact',
                title: 'Ini Bukan Mimpi Lagi',
                body: 'Desember 2022: National Ignition Facility di California pertama kali mencapai "ignition" — input 2.05 MJ laser, output 3.15 MJ energi fusi. Lebih banyak energi keluar dari yang masuk. Ini adalah tonggak sejarah yang sama besarnya dengan Wright Brothers pertama terbang. Kita baru di awal, tapi physics bekerja.<br><br>ITER di Prancis, yang dibangun oleh 35 negara termasuk China, AS, Eropa, dan Rusia bersama-sama, ditargetkan beroperasi 2035 dengan output 10× dari input. Private fusion companies (Commonwealth Fusion, Helion, TAE) berlomba mencapai energi fusi komersial sebelum 2040.<br><br>Mimpi 100 tahun itu sedang menjadi kenyataan.',
                visual: '🚀',
                history: [
                    { year: '2022', event: 'NIF mencapai ignition — pertama dalam sejarah: energi keluar > energi masuk (laser)', person: 'National Ignition Facility, USA' },
                    { year: '2025', event: 'ITER mulai uji plasma pertama — puncak kolaborasi ilmiah terbesar dalam sejarah', person: 'ITER, France' },
                    { year: '2035+', event: 'Target: ITER mencapai Q=10 (500 MW dari 50 MW input)', person: '35 Negara Kolaborasi' },
                    { year: '2040s?', event: 'First commercial fusion power plant?', person: 'Generasi kita' },
                ],
                highlight: '"Fusi selalu 30 tahun lagi" — tapi tahun 2022 physics untuk pertama kali membuktikannya bukan mimpi',
            },
        ],
    },

    // ── RADIOAKTIVITAS ──────────────────────────────────────────────────────────
    {
        id: 'radioactivity',
        slides: [
            {
                type: 'hook',
                title: 'Buku Catatannya Masih Mematikan — 90 Tahun Setelah Ia Mati',
                body: 'Di Paris, tersimpan buku catatan seorang ilmuwan. Jika kamu ingin membacanya, kamu harus menandatangani surat pernyataan risiko. Kamu harus memakai pakaian pelindung khusus. Buku itu disimpan dalam kotak berlapis timbal. Karena buku itu — dan pemiliknya — masih radioaktif. Pemiliknya bernama Marie Curie. Ia meninggal karena zat yang ia temukan sendiri.',
                visual: '☢️',
                animKey: 'anim-radioactivity-hook',
                highlight: 'Buku catatan Marie Curie masih radioaktif · disimpan dalam kotak timbal · diakses dengan hazmat suit',
            },
            {
                type: 'history',
                title: 'Wanita yang Lebih Bersinar dari Radiumnya',
                body: 'Maria Sklodowska lahir di Warsawa, Polandia — di bawah penjajahan Rusia yang melarang perempuan mengakses universitas. Ia menyelundupkan ilmu dengan belajar di "Universitas Terbang" ilegal. Pada 1891, ia kabur ke Paris dan menjadi wanita pertama yang lulus dari Sorbonne. Ia bertemu Pierre Curie, menikah, dan bersama-sama mereka mengubah fisika dan kimia selamanya — dari gudang bocor yang tidak berpemanas, dengan tangan telanjang memegang material yang perlahan membunuhnya.',
                quote: 'Dalam ilmu, kita harus tertarik pada hal-hal, bukan pada orang-orang.',
                quoteAuthor: 'Marie Curie',
                visual: '👩‍🔬',
                history: [
                    { year: '1896', event: 'Henri Becquerel menemukan uranium memancarkan radiasi misterius — ia menyebutnya "Becquerel rays"', person: 'Henri Becquerel' },
                    { year: '1898', event: 'Marie & Pierre Curie menemukan Polonium (dinamai dari Polandia, tanah air Marie)', person: 'Marie & Pierre Curie' },
                    { year: '1898', event: 'Curie menemukan Radium — zat yang 1 juta kali lebih radioaktif dari uranium', person: 'Marie & Pierre Curie' },
                    { year: '1903', event: 'Marie Curie menjadi wanita pertama yang memenangkan Nobel Prize (Fisika)', person: 'Marie Curie' },
                    { year: '1906', event: 'Pierre Curie terbunuh oleh kereta kuda di Paris — Marie melanjutkan sendirian', person: 'Pierre Curie' },
                    { year: '1911', event: 'Marie Curie memenangkan Nobel Prize KEDUA (Kimia) — satu-satunya orang yang menang di dua bidang berbeda', person: 'Marie Curie' },
                    { year: '1934', event: 'Marie Curie meninggal akibat aplastic anemia — penyakit darah yang disebabkan paparan radiasi puluhan tahun', person: 'Marie Curie' },
                ],
            },
            {
                type: 'step',
                title: 'Apa Itu Radioaktivitas?',
                body: 'Beberapa inti atom terlalu gemuk — terlalu banyak proton dan neutron yang berdesakan. Gaya nuklir kuat memegang mereka bersama, tapi gaya tolak elektromagnetik antar proton mencoba memisahkan. Inti yang tidak stabil secara spontan "membuang" bagian dari dirinya untuk mencapai konfigurasi yang lebih stabil. Inilah peluruhan radioaktif — atom yang membuang partikel atau energi untuk menjadi lebih tenang.',
                visual: '⚛️',
                animKey: 'anim-decay-types',
                highlight: 'Ketidakstabilan inti → peluruhan spontan → atom baru + radiasi',
            },
            {
                type: 'step',
                title: 'Tiga Jenis Radiasi: α, β, γ',
                body: '<b>Alfa (α):</b> Inti atom memuntahkan 2 proton + 2 neutron (inti helium). Partikel besar, lambat — bisa dihentikan selembar kertas, tapi jika masuk ke tubuh, efeknya dahsyat.<br><br><b>Beta (β):</b> Neutron berubah menjadi proton dengan memancarkan elektron (β⁻). Lebih ringan dan lebih penetratif dari alfa, bisa dihentikan lempengan aluminium.<br><br><b>Gamma (γ):</b> Energi murni — gelombang elektromagnetik berenergi tinggi. Tidak ada massa. Menembus segalanya kecuali timbal tebal atau beton. Yang dipakai untuk terapi kanker.',
                visual: '🎯',
                animKey: 'anim-radiation-types',
                highlight: 'α: dihentikan kertas · β: dihentikan aluminium · γ: perlu timbal tebal',
            },
            {
                type: 'step',
                title: 'Waktu Paruh — Jam Atom yang Paling Akurat',
                body: 'Kamu tidak bisa tahu kapan tepat satu atom akan meluruh. Tapi kamu bisa tahu: setelah 1 waktu-paruh, tepat separuh atom dalam sampel akan telah meluruh. Ini probabilitas kuantum yang deterministik di skala besar. Carbon-14: waktu paruh 5.730 tahun (digunakan untuk carbon dating). Polonium-210: 138 hari. Uranium-238: 4,47 miliar tahun. Radium-226: 1.600 tahun — masih radioaktif di buku catatan Marie Curie.',
                visual: '⏰',
                animKey: 'anim-half-life',
                highlight: 'Ra-226 waktu paruh: 1.600 tahun · buku Curie masih akan radioaktif di tahun 3600',
            },
            {
                type: 'step',
                title: 'Tragedi yang Tidak Mereka Sadari',
                body: 'Marie dan Pierre Curie bekerja di shed (gudang) yang bocor dan tidak berpemanas. Mereka memegang radium dengan tangan telanjang. Marie menyimpan tabung radium di saku bajunya. Mereka sering tidur di lab. Radium memancarkan cahaya kebiruan indah di kegelapan — mereka menyebutnya "cahaya cantik".<br><br>Mereka tidak tahu. Radiasi tidak terlihat, tidak tercium, tidak terasa. Tubuh mereka perlahan dihancurkan. Pierre sering mengeluh tangannya sakit. Marie terus-menerus mual dan lelah. Bertahun-tahun kemudian, dokter baru mengerti apa yang terjadi.',
                visual: '💙',
                animKey: 'anim-radium-glow',
                highlight: '"Cahaya cantik" radium di kegelapan = radiasi yang perlahan menghancurkan DNA mereka',
            },
            {
                type: 'scale',
                title: 'Warisan Radioaktivitas: Teror dan Kedokteran',
                body: 'Radioaktivitas adalah pedang bermata dua. Di satu sisi: Chernobyl (1986), Hiroshima, Nagasaki, Fukushima (2011) — bencana yang mengubah cara kita berpikir tentang energi dan senjata. Di sisi lain: terapi radiasi untuk kanker, PET scan yang bisa melihat metabolisme otak secara real-time, carbon dating yang membuka sejarah arkeologi, iradiasi makanan yang memperpanjang umur simpan tanpa bahan kimia.<br><br>Carbon-14 yang radioaktif memungkinkan kita menentukan usia benda yang berumur hingga 50.000 tahun dengan akurasi luar biasa.',
                visual: '⚖️',
                highlight: 'Hal yang sama yang membunuh Marie Curie kini menyelamatkan jutaan pasien kanker setiap tahun',
            },
            {
                type: 'impact',
                title: 'Buku Catatan yang Akan Terus Bersinar',
                body: 'Marie Curie meninggal 4 Juli 1934. Penyebab: aplastic anemia — sumsum tulang belakangnya hancur akibat paparan radiasi selama puluhan tahun. Ia adalah korban penemuannya sendiri.<br><br>Tapi warisannya abadi: ia menjadi wanita pertama yang memenangkan Nobel, satu-satunya orang yang memenangkan Nobel di dua bidang ilmu yang berbeda, pendiri Institute Curie di Paris yang sampai hari ini meneliti kanker, dan inspirasi bagi generasi ilmuwan perempuan dunia.<br><br>Buku catatannya, yang tersimpan dalam kotak timbal di Perpustakaan Nasional Prancis, akan terus memancarkan radiasi dari Ra-226 selama 1.500 tahun lagi — sinar kecil Marie Curie yang tidak akan padam sampai tahun 3400.',
                visual: '📖',
                history: [
                    { year: '1898', event: 'Penemuan Polonium dan Radium — fondasi fisika nuklir modern', person: 'Marie & Pierre Curie' },
                    { year: '1903', event: 'Nobel Prize Fisika — wanita pertama dalam sejarah', person: 'Marie Curie' },
                    { year: '1911', event: 'Nobel Prize Kimia — satu-satunya peraih Nobel ganda di bidang berbeda', person: 'Marie Curie' },
                    { year: 'Hari ini', event: 'Buku catatan Marie Curie di Paris — masih radioaktif, masih dalam kotak timbal, masih bersinar', person: 'Warisan Marie Curie' },
                ],
                highlight: 'Nobel Fisika 1903 + Nobel Kimia 1911 · Satu-satunya peraih Nobel ganda lintas bidang · Buku catatan masih radioaktif hingga tahun ~3400',
            },

        ],
    },

    // ── FOTOSINTESIS ─────────────────────────────────────────────────────────
    {
        id: 'photosynthesis',
        slides: [
            {
                type: 'hook',
                title: 'Kita Baru Mengerti Ini di Tahun 1990-an',
                body: 'Fotosintesis ditemukan tahun 1771. Manusia sudah 200 tahun tahu bahwa daun mengubah cahaya matahari jadi makanan. Tapi bagaimana persis mekanismenya, langkah per langkah, molekul per molekul — itu baru terjawab di tahun 1990-an. Dan ternyata jawabannya lebih gila dari yang pernah diduga siapa pun.',
                visual: '🌿',
                animKey: 'anim-photo-hook',
                highlight: 'Ditemukan 1771 · Benar-benar dipahami ~1990 · Lebih dari 2 abad misteri',
            },
            {
                type: 'history',
                title: 'Siapa yang Menemukan Fotosintesis?',
                body: 'Tahun 1771, Joseph Priestley menaruh tikus bersama tanaman mint di dalam toples tertutup. Normalnya tikus akan mati kehabisan udara. Tapi dengan mint — tikus hidup. Ia tidak tahu kenapa. Jan Ingenhousz (1779) menemukan cahaya diperlukan. Nicolas de Saussure (1804) membuktikan CO₂ dan air adalah bahan bakunya. Cornelis van Niel (1931) menyadari oksigen berasal dari air, bukan CO₂. Tiap generasi menemukan sepotong — tapi puzzle utuhnya baru terlihat di era mikroskop elektron dan kristalografi sinar-X.',
                visual: '🔬',
                history: [
                    { year: '1771', event: 'Priestley: tanaman mint menyelamatkan tikus dalam toples tertutup', person: 'Joseph Priestley' },
                    { year: '1779', event: 'Ingenhousz: cahaya diperlukan, kegelapan membalik prosesnya', person: 'Jan Ingenhousz' },
                    { year: '1804', event: 'de Saussure: CO₂ + H₂O = bahan baku utama', person: 'Nicolas de Saussure' },
                    { year: '1937', event: 'Hill: oksigen dibebaskan dari pemecahan air, bukan CO₂', person: 'Robert Hill' },
                    { year: '1954', event: 'Siklus Calvin-Benson: bagaimana CO₂ diubah menjadi gula, lengkap', person: 'Melvin Calvin' },
                    { year: '1988', event: 'Struktur 3D fotosistem pertama berhasil dipetakan lewat kristalografi — Nobel Kimia', person: 'Deisenhofer, Huber, Michel' },
                ],
            },
            {
                type: 'step',
                title: 'Bahan Baku yang Sesederhana Mungkin',
                body: 'Fotosintesis cuma butuh 3 hal: cahaya matahari, air (H₂O), dan karbon dioksida (CO₂) dari udara. Hasilnya: glukosa (C₆H₁₂O₆) — bahan bakar untuk semua makhluk hidup — plus oksigen (O₂) yang dibuang begitu saja sebagai limbah. Limbah fotosintesis adalah oksigen yang kamu hirup sekarang.',
                visual: '⚗️',
                animKey: 'anim-photo-equation',
                highlight: '6CO₂ + 6H₂O + cahaya → C₆H₁₂O₆ + 6O₂',
            },
            {
                type: 'step',
                title: 'Klorofil: Antena Foton Ajaib',
                body: 'Di tengah setiap molekul klorofil ada satu atom magnesium (Mg). Atom Mg inilah yang bikin daun bisa menangkap foton. Klorofil menyerap cahaya merah dan biru, memantulkan hijau — makanya daun terlihat hijau. Energi foton yang ditangkap digunakan untuk memecah molekul air: H₂O → 2H⁺ + ½O₂ + 2e⁻. Elektron yang terlepas itulah yang menggerakkan seluruh mesin fotosintesis.',
                visual: '🍃',
                animKey: 'anim-photo-chlorophyll',
                highlight: '1 atom Mg di tengah klorofil · menyerap merah+biru · memantulkan hijau',
            },
            {
                type: 'step',
                title: 'Siklus Calvin: Pabrik Gula Nano',
                body: 'Energi yang ditangkap klorofil dipakai oleh siklus Calvin untuk "menangkap" CO₂ dari udara dan menyusunnya menjadi glukosa. Ini bukan proses simpel — butuh 3 putaran siklus untuk menghasilkan 1 molekul glukosa, melibatkan lebih dari 12 reaksi biokimia berbeda, dibantu enzim bernama RuBisCO — enzim paling melimpah di Bumi, mungkin protein yang paling banyak diproduksi di seluruh sejarah kehidupan.',
                visual: '🔄',
                animKey: 'anim-photo-calvin',
                highlight: 'RuBisCO: enzim paling melimpah di Bumi · mengikat 7% dari semua CO₂ atmosfer per tahun',
            },
            {
                type: 'scale',
                title: 'Skala yang Bikin Kepala Muter',
                body: 'Setiap tahun, seluruh tumbuhan dan organisme fotosintetik di Bumi mengikat sekitar 120 miliar ton karbon dari atmosfer. Itu setara dengan massa lebih dari 10.000 piramida Giza per tahun — dan semuanya berasal dari CO₂ yang "tidak terlihat" di udara. Seluruh oksigen di atmosfer Bumi adalah produk sampingan fotosintesis yang menumpuk selama 3+ miliar tahun.',
                visual: '🌍',
                highlight: '120 miliar ton C ditangkap per tahun · semua O₂ di atmosfer = hasil sampingan fotosintesis',
            },
            {
                type: 'impact',
                title: 'Tanpa Fotosintesis, Kamu Tidak Bisa Ada',
                body: 'Setiap kalori yang pernah kamu makan — nasi, daging, susu, apapun — bisa ditelusuri ke satu sumber: fotosintesis. Hewan makan tumbuhan atau hewan yang makan tumbuhan. Fotosintesis adalah fondasi seluruh rantai makanan di Bumi. Lebih jauh lagi: seluruh bahan bakar fosil (minyak, batu bara, gas) adalah sisa-sisa organisme fotosintetik yang mati dan tertekan jutaan tahun. Setiap kali kamu menyalakan kompor, kamu membakar fotosintesis kuno.',
                visual: '🌱',
                highlight: 'Semua energi di biosfer Bumi bersumber dari satu proses: fotosintesis',
            },
        ],
    },

    // ── DNA ──────────────────────────────────────────────────────────────────
    {
        id: 'dna-atoms',
        slides: [
            {
                type: 'hook',
                title: '5 Jenis Atom, Satu Instruksi untuk Semua Makhluk Hidup',
                body: 'DNA hanya terbuat dari 5 jenis atom: karbon (C), hidrogen (H), oksigen (O), nitrogen (N), dan fosfor (P). Itu saja. Dari 5 atom biasa yang ada di mana-mana itu — tersusunlah instruksi untuk membangun semua 8 juta lebih spesies yang pernah ada di Bumi. Ulat bulu, paus biru, jamur, bakteri, dan kamu — semuanya pakai kode yang sama.',
                visual: '🧬',
                animKey: 'anim-dna-hook',
                highlight: 'C · H · O · N · P — 5 atom · 1 kode · semua kehidupan di Bumi',
            },
            {
                type: 'history',
                title: 'Perlombaan Paling Dramatis dalam Sains',
                body: 'Tahun 1952, semua orang tahu DNA menyimpan informasi genetik — tapi tidak ada yang tahu bentuknya. Linus Pauling (peraih Nobel) menduga triple helix, tapi salah. Rosalind Franklin membuat foto sinar-X kristal DNA yang paling tajam yang pernah ada — \"Photo 51\". Foto itu dicuri tanpa izin oleh Watson & Crick, yang menggunakannya untuk membangun model double helix mereka. Watson, Crick, dan Wilkins memenangkan Nobel 1962. Franklin meninggal 1958 — sebelum pengumuman Nobel.',
                visual: '🏆',
                quote: 'Foto 51 seketika memberi tahu saya semua yang perlu saya tahu.',
                quoteAuthor: 'James Watson, soal foto Rosalind Franklin yang ia lihat tanpa izin',
                history: [
                    { year: '1869', event: 'Friedrich Miescher menemukan zat misterius dari inti sel — ia menyebutnya "nuclein"', person: 'Friedrich Miescher' },
                    { year: '1944', event: 'Avery, MacLeod, McCarty membuktikan DNA (bukan protein) yang membawa informasi genetik', person: 'Avery, MacLeod, McCarty' },
                    { year: '1952', event: 'Rosalind Franklin membuat Photo 51 — foto sinar-X DNA paling tajam pernah ada', person: 'Rosalind Franklin' },
                    { year: '1953', event: 'Watson & Crick menerbitkan model double helix di Nature — menggunakan data Franklin tanpa izin', person: 'Watson & Crick' },
                    { year: '1962', event: 'Nobel Prize Fisiologi: Watson, Crick, Wilkins. Franklin sudah meninggal 4 tahun sebelumnya.', person: 'Watson, Crick, Wilkins' },
                    { year: '2003', event: 'Human Genome Project selesai — 3 miliar pasang basa manusia terpetakan lengkap', person: 'International Consortium' },
                ],
            },
            {
                type: 'step',
                title: 'Struktur: Tangga Spiral Raksasa',
                body: 'DNA berbentuk double helix — dua rantai yang saling melilit. Tulang punggungnya adalah gula deoksiribosa dan fosfat yang berulang. Di antara dua rantai ada "anak tangga" — pasangan basa: Adenin selalu berpasangan dengan Timin (A-T), Guanin selalu dengan Sitosin (G-C). Aturan pasangan basa ini yang membuat DNA bisa dikopi dengan akurat setiap kali sel membelah.',
                visual: '🔬',
                animKey: 'anim-dna-structure',
                highlight: 'A-T · G-C · selalu berpasangan · inilah yang membuat DNA bisa dikopi',
            },
            {
                type: 'step',
                title: 'Cara Kerja: Cetak Biru → Protein',
                body: 'DNA tidak langsung "dipakai" — ia dibaca. Enzim RNA Polimerase membaca urutan basa DNA dan membuat salinan RNA (transkripsi). RNA dibawa keluar nukleus ke ribosom. Ribosom membaca 3 basa sekaligus (kodon) dan menyusun asam amino satu per satu menjadi protein (translasi). Protein itulah yang mengerjakan semua fungsi tubuh: enzim, hormon, antibodi, struktur sel — semuanya.',
                visual: '⚙️',
                animKey: 'anim-dna-transcription',
                highlight: 'DNA → RNA (transkripsi) → Protein (translasi) · Central Dogma biologi',
            },
            {
                type: 'scale',
                title: 'Skala yang Tidak Masuk Akal',
                body: 'Satu sel tubuhmu mengandung ~3 miliar pasang basa. Jika DNA di satu sel direntangkan, panjangnya 2 meter. Tapi seluruhnya dipadatkan ke dalam inti sel berdiameter 6 mikrometer (200× lebih kecil dari rambut). Kalau semua DNA dari semua sel tubuhmu disambung, panjangnya 170 miliar km — cukup bolak-balik ke Pluto 10 kali.',
                visual: '📏',
                highlight: '2 meter DNA · 6 mikrometer inti sel · 37 triliun sel dalam tubuhmu',
            },
            {
                type: 'scale',
                title: 'Kesamaan yang Mencengangkan',
                body: 'Kamu berbagi 99,9% DNA dengan orang asing yang baru kamu temui. Kamu berbagi 98,7% DNA dengan simpanse. Kamu berbagi 85% DNA dengan tikus. 60% dengan lalat buah. Dan 31% dengan ragi — jamur bersel satu yang dipakai bikin roti. Perbedaan antara manusia dan ragi, secara DNA, hanya 69%. Semua kehidupan di Bumi adalah satu keluarga besar.',
                visual: '🌳',
                highlight: '99.9% DNA = kamu dan orang asing · 98.7% = kamu dan simpanse · 31% = kamu dan ragi',
            },
            {
                type: 'impact',
                title: 'Ini Baru Permulaan',
                body: 'Kita sudah bisa membaca DNA (sequencing). Kita sudah bisa mengedit DNA — CRISPR-Cas9 memungkinkan ilmuwan memotong dan menyisipkan segmen DNA dengan presisi huruf per huruf. Vaksin mRNA COVID-19 adalah instruksi berupa rantai mRNA yang dikirim langsung ke sel-selmu — sel membaca kode itu dan membuat protein yang mengajari sistem imun, tanpa pernah menyentuh DNA-mu. Terapi gen untuk penyakit genetik sudah dalam uji klinis. Kita sedang belajar menulis ulang kode kehidupan — tapi seberapa bijak kita menggunakannya adalah pertanyaan lain.',
                visual: '✂️',
                history: [
                    { year: '1953', event: 'Struktur double helix DNA terungkap', person: 'Watson & Crick' },
                    { year: '2003', event: 'Seluruh genom manusia selesai dipetakan', person: 'Human Genome Project' },
                    { year: '2012', event: 'CRISPR-Cas9: alat edit DNA yang mudah, murah, dan presisi', person: 'Doudna & Charpentier (Nobel 2020)' },
                    { year: '2021', event: 'Vaksin mRNA COVID-19: instruksi DNA untuk melawan virus', person: 'Moderna & BioNTech' },
                    { year: 'Masa depan', event: 'Terapi gen untuk kanker, kelainan genetik, dan lebih banyak lagi', person: 'Generasi kita' },
                ],
                highlight: 'Dari menemukan struktur DNA (1953) hingga mengeditnya (2012): 59 tahun · Kita baru mulai',
            },
        ],
    },

    // ── STRUKTUR KRISTAL ─────────────────────────────────────────────────────
    {
        id: 'crystal-structure',
        slides: [
            {
                type: 'hook',
                title: 'Berlian dan Pensil Terbuat dari Atom yang Sama',
                body: 'Berlian adalah benda paling keras di alam. Grafit di dalam pensil begitu lunak sampai meninggalkan bekas di kertas hanya dengan sedikit tekanan. Keduanya terbuat dari atom karbon (C) yang sama persis. Yang beda hanya satu hal: bagaimana atom-atom itu disusun. Susunan berbeda = sifat berbeda total. Ini inti dari seluruh ilmu material.',
                visual: '💎',
                animKey: 'anim-crystal-hook',
                highlight: 'Berlian (C) = paling keras · Grafit (C) = bisa nulis di kertas · Atom sama persis',
            },
            {
                type: 'step',
                title: 'Berlian: Setiap Atom Pegang 4 Tetangga',
                body: 'Dalam berlian, setiap atom karbon berikatan kovalen dengan 4 atom C lain dalam struktur tetrahedral 3D yang sempurna. Tidak ada atom "bebas" — semua terkunci. Tidak ada titik lemah. Untuk memecahkan berlian, kamu harus memutus ikatan C-C yang sangat kuat secara bersamaan di seluruh kristal. Makanya berlian tidak bisa digores oleh apapun kecuali berlian lain.',
                visual: '🔷',
                animKey: 'anim-diamond-lattice',
                highlight: 'Setiap C berikatan dengan 4 C lain · 3D tanpa celah lemah · Mohs 10 (tertinggi)',
            },
            {
                type: 'step',
                title: 'Grafit: Lapisan-Lapisan yang Mudah Tergelincir',
                body: 'Grafit juga karbon murni — tersusun berbeda. Atom-atom C membentuk lapisan heksagonal 2D seperti sarang lebah. Di dalam satu lapisan, ikatan sangat kuat. Tapi antar lapisan hanya ada gaya van der Waals yang lemah. Ketika kamu menggores kertas, lapisan-lapisan grafit tergelincir dan menempel di kertas.',
                visual: '✏️',
                animKey: 'anim-graphite-layers',
                highlight: 'Lapisan heksagonal kuat · antar lapisan lemah · tergelincir = bekas di kertas',
            },
            {
                type: 'impact',
                title: 'Satu Atom, Sifat Tak Terbatas',
                body: 'Karbon saja bisa jadi: berlian (paling keras), grafit (konduktor), grafen (kuat 200x baja, tipis 1 atom), fullerene (bola C60). Silikon tersusun seperti berlian jadi semikonduktor — dasar seluruh elektronik modern. Titanium dalam susunan tertentu lebih kuat dari baja sekaligus lebih ringan dari aluminium. Prinsipnya: atur susunan atom, kontrol sifat material.',
                visual: '🚀',
                highlight: 'Grafen = 1 lapisan atom C · 200x lebih kuat dari baja · lebih tipis dari rambut dibagi 1.000.000',
            },
        ],
    },

    // ── PEMBAKARAN ───────────────────────────────────────────────────────────
    {
        id: 'combustion',
        slides: [
            {
                type: 'hook',
                title: 'Api Bukan Zat — Api Adalah Reaksi',
                body: 'Tunjuk api lilin dan tanya: terbuat dari apa? Jawabannya bukan lilin, bukan oksigen — api tidak terbuat dari apapun. Api adalah reaksi kimia, bukan materi. Yang kamu lihat adalah cahaya dan panas yang dilepaskan saat atom karbon dan hidrogen bergabung dengan oksigen. Ketika kamu meniup api — kamu tidak menghilangkan zat, kamu menghentikan reaksi.',
                visual: '🔥',
                animKey: 'anim-fire-hook',
                highlight: 'Api bukan zat · api adalah proses · padamkan = hentikan reaksinya',
            },
            {
                type: 'step',
                title: 'Apa yang Terjadi Saat Benda Terbakar',
                body: 'Bahan bakar (kayu, bensin, lilin) mengandung atom karbon (C) dan hidrogen (H). Ketika dipanaskan cukup, atom-atom ini bereaksi dengan oksigen (O2) dari udara dengan sangat cepat. Karbon menjadi CO2. Hidrogen menjadi H2O. Reaksi ini exothermic — melepaskan energi yang jauh lebih besar dari yang dibutuhkan memulainya. Energi berlebih keluar sebagai panas dan cahaya. Itulah api.',
                visual: '⚗️',
                animKey: 'anim-combustion-reaction',
                highlight: 'C + O2 → CO2 + energi · H2 + O2 → H2O + energi',
            },
            {
                type: 'scale',
                title: 'Kamu Juga Sedang "Terbakar"',
                body: 'Respirasi seluler di tubuhmu adalah pembakaran yang sangat lambat dan terkontrol. Glukosa bereaksi dengan oksigen menghasilkan CO2 dan H2O — sama persis dengan membakar kayu. Bedanya: tubuhmu melakukan ini pada 37 derajat Celsius, menghasilkan ATP bukan nyala api. Tapi secara kimiawi, kamu dan api unggun sedang melakukan hal yang sama.',
                visual: '💨',
                highlight: 'Respirasi = pembakaran terkontrol 37C · Glukosa + O2 menghasilkan CO2 + H2O + ATP',
            },
            {
                type: 'impact',
                title: 'Api yang Mengubah Peradaban',
                body: 'Api di gua membuat makanan matang sehingga otak manusia bisa tumbuh lebih besar. Mesin uap dari batu bara menghasilkan Revolusi Industri. Mesin pembakaran membuat mobil, pesawat, roket, dan akhirnya manusia ke bulan. Pembakaran fosil menghasilkan listrik yang memungkinkan internet. Seluruh peradaban modern dibangun di atas reaksi C + O2. Dan sekarang, akumulasi CO2 itulah masalah terbesar yang kita hadapi bersama.',
                visual: '🌍',
                highlight: 'Dari api gua hingga roket SpaceX: sama-sama C + O menghasilkan CO2 + energi',
            },
        ],
    },

    // ── KOROSI ───────────────────────────────────────────────────────────────
    {
        id: 'rusting',
        slides: [
            {
                type: 'hook',
                title: 'Mars Berwarna Merah Karena Planet Itu Berkarat',
                body: 'Warna merah Mars bukan cat — itu karat. Permukaan Mars tertutup besi oksida (Fe2O3), alias karat, dalam skala satu planet penuh. Besi di Mars bereaksi dengan oksigen dari atmosfer tipisnya miliaran tahun lalu. Hasilnya: planet karat raksasa yang bisa kamu lihat dengan mata telanjang dari Bumi.',
                visual: '🪨',
                animKey: 'anim-rust-hook',
                highlight: 'Mars merah = Fe2O3 skala planet · sama persis dengan karat di pagar besi rumahmu',
            },
            {
                type: 'step',
                title: 'Mengapa Besi Berkarat?',
                body: 'Besi (Fe) tidak stabil secara kimiawi — ia lapar oksigen. Ketika besi terkena air dan oksigen, terjadi reaksi elektrokimia: besi melepaskan elektron, oksigen menangkapnya, lalu bergabung membentuk Fe2O3 yang berwarna coklat kemerahan. Air berperan sebagai perantara elektron. Tanpa air, besi tidak berkarat meski ada oksigen.',
                visual: '⚗️',
                animKey: 'anim-rust-reaction',
                highlight: '4Fe + 3O2 + 6H2O menghasilkan karat coklat Fe2O3',
            },
            {
                type: 'step',
                title: 'Stainless Steel: Pertahanan Diri Sendiri',
                body: 'Stainless steel mengandung setidaknya 10,5% kromium (Cr). Kromium bereaksi cepat dengan oksigen membentuk lapisan Cr2O3 transparan di permukaan yang menghalangi oksigen mencapai besi di bawahnya. Kalau lapisan tergores, Cr2O3 baru langsung terbentuk sendiri: self-healing. Besi di dalamnya tidak pernah melihat udara.',
                visual: '🔩',
                highlight: 'Cr2O3 transparan · self-healing · besi di bawahnya tidak pernah kontak oksigen',
            },
            {
                type: 'impact',
                title: '$2,5 Triliun Per Tahun Hanya Untuk Melawan Karat',
                body: 'Korosi menghabiskan lebih dari $2,5 triliun per tahun secara global — 3,4% dari PDB seluruh dunia, lebih dari GDP Prancis atau Inggris. Jembatan runtuh, pipa bocor, kapal tenggelam, pesawat dipensiun lebih awal — semuanya karena Fe + O2 + H2O. Solusi: galvanisasi (lapisan seng), anoda korban (logam yang sengaja dikorbankan duluan), polimer nano.',
                visual: '🛡️',
                highlight: '$2,5 triliun per tahun · 3,4% GDP dunia · Galvanisasi · anoda korban · polimer nano',
            },
        ],
    },

    // ── PRINSIP KESTABILAN ───────────────────────────────────────────────────
    {
        id: 'stability-principle',
        slides: [
            {
                type: 'hook',
                title: 'Semua Atom Malas — Dan Itulah yang Menggerakkan Segalanya',
                body: 'Satu aturan berlaku untuk setiap atom di alam semesta: semua selalu bergerak menuju keadaan dengan energi paling rendah — paling santai, paling stabil. Bukan karena ada tujuan — tapi karena fisika bekerja begitu. Dan dari kemalasan inilah muncul api, baterai, makanan yang kamu makan, dan seluruh kimia yang kamu kenal.',
                visual: '😴',
                animKey: 'anim-stability-hook',
                highlight: 'Hukum paling fundamental kimia: semua menuju energi minimum — tanpa kecuali',
            },
            {
                type: 'step',
                title: 'Bola di Atas Bukit',
                body: 'Bayangkan bola di puncak bukit — energi tinggi, tidak stabil. Ia menggelinding ke bawah kecuali ada penghalang. Bahan bakar adalah bola di puncak bukit: C dan H bisa bereaksi dengan O2 menjadi CO2 dan H2O yang lebih stabil. Butuh percikan untuk melewati energi aktivasi. Korek api adalah dorongan awal melewati punggung bukit. Setelah itu, reaksi berlanjut sendiri sambil menghasilkan energi.',
                visual: '⛰️',
                animKey: 'anim-energy-hill',
                highlight: 'Energi aktivasi = penghalang bukit · korek api = dorongan awal · reaksi = bola menggelinding',
            },
            {
                type: 'step',
                title: 'Gas Mulia: Sudah di Dasar Bukit',
                body: 'Helium, neon, argon tidak pernah bereaksi dengan siapapun. Bukan sombong — kulit elektron terluarnya sudah penuh sempurna. Tidak ada yang bisa ditawarkan atom lain yang membuat mereka lebih stabil. Energi yang dilepaskan dari ikatan baru tidak cukup mengimbangi biayanya. Mereka sudah di dasar bukit — tidak perlu kemana-mana.',
                visual: '🫧',
                highlight: 'He · Ne · Ar · Kr · Xe · Rn — kulit penuh, energi sudah minimum, tidak perlu bereaksi',
            },
            {
                type: 'step',
                title: 'Natrium Meledak di Air',
                body: 'Di ujung lain: natrium (Na) punya 1 elektron di kulit terluar — jauh dari stabil, jauh dari puncak bukit ke dasar bukit tertentu. Ketika Na bertemu air, ia melepaskan elektron itu kepada H2O dengan sangat agresif. Gas hidrogen yang terbentuk langsung terbakar. Ledakan yang kamu lihat di video adalah energi yang terlepas saat Na terjun dari energi tinggi ke energi minimum.',
                visual: '💥',
                animKey: 'anim-sodium-water',
                highlight: '2Na + 2H2O menghasilkan NaOH + H2 naik dan terbakar · Na lapar melepas elektron',
            },
            {
                type: 'impact',
                title: 'Prinsip Ini Adalah Dasar Semua Kimia',
                body: 'Baterai bekerja karena perbedaan kestabilan antara anoda dan katoda — elektron mengalir dari yang kurang stabil ke yang lebih stabil, dan aliran itu adalah listrik. Obat bekerja karena lebih stabil saat berikatan dengan reseptor tertentu. Fotosintesis mendorong reaksi ke atas bukit menggunakan energi cahaya — melawan kecenderungan alami. Seluruh industri kimia adalah tentang memanfaatkan kecenderungan atom untuk jatuh ke energi minimum.',
                visual: '⚡',
                highlight: 'Baterai · obat · plastik · fotosintesis — semuanya dikendalikan oleh satu prinsip: energi minimum',
            },
        ],
    },

    // ── KOMPOSISI ATOM MANUSIA ──────────────────────────────────────────────
    {
        id: 'human-atoms',
        slides: [
            {
                type: 'hook',
                title: 'Kamu Adalah 7 Oktilion Atom — Dan Semua Bisa Dibeli Seharga Rp 2.500',
                body: 'Jika kamu bisa membongkar seluruh tubuhmu menjadi unsur-unsur kimia murni dan menjualnya di pasar bahan kimia, totalnya sekitar 160 dolar AS — atau sekitar 2.500 rupiah jika kita bicara harga per atom.<br><br>Tapi ketika 7 × 10²⁷ atom itu tersusun dengan cara yang benar — ada yang bernama manusia. Ada yang bisa bernafas, bermimpi, jatuh cinta, dan mempertanyakan asal muasal dirinya sendiri.<br><br>Itulah mahakarya atom: ratusan triliun atom yang tidak "hidup" secara individu, tapi bersama-sama menciptakan kesadaran.',
                visual: '🧬',
                animKey: 'anim-human-hook',
                highlight: 'Tubuh = 7 × 10²⁷ atom · 65% Oksigen · 18% Karbon · dijual sebagai unsur murni = Rp 2.500',
            },
            {
                type: 'history',
                title: 'Antoine Lavoisier — Pria yang Membuktikan Massa Tidak Hilang',
                body: 'Abad ke-18. Orang masih percaya bahwa api adalah unsur, bahwa pembakaran melepaskan "phlogiston" misterius yang hilang ke udara. Antoine Lavoisier, ahli kimia Prancis dengan timbangan yang sangat presisi, membuktikan sebaliknya: massa tidak pernah hilang. Ia membakar fosfor dalam wadah tertutup — massanya sebelum dan sesudah identik, hanya berubah bentuk.<br><br>Lebih penting lagi: Lavoisier menunjukkan bahwa udara bukan satu unsur, melainkan campuran termasuk "gas yang mendukung kehidupan" yang ia namakan oksigen. Dan oksigen ini yang bereaksi dengan makanan dalam tubuh — persis seperti pembakaran, hanya jauh lebih lambat.<br><br>Ia membangun fondasi kimia modern. Dan seperti banyak ilmuwan revolusioner — ia dipenggal oleh revolusi yang juga ia dukung. 1794, di masa Teror Revolusi Prancis.',
                quote: 'Tidak ada yang tercipta dalam operasi alami maupun buatan. Hanya transformasi yang ada.',
                quoteAuthor: 'Antoine Lavoisier — Hukum Kekekalan Massa, 1789',
                visual: '⚖️',
                history: [
                    { year: '1777', event: 'Lavoisier membuktikan oksigen adalah komponen udara yang mendukung pembakaran dan kehidupan', person: 'Antoine Lavoisier' },
                    { year: '1789', event: 'Lavoisier menerbitkan Traité Élémentaire de Chimie — buku teks kimia modern pertama', person: 'Antoine Lavoisier' },
                    { year: '1869', event: 'Mendeleev menyusun tabel periodik — menempatkan semua unsur penyusun tubuhmu dalam satu sistem', person: 'Dmitri Mendeleev' },
                    { year: '1953', event: 'Watson & Crick: struktur DNA — bagaimana atom C,H,O,N,P menyipan instruksi kehidupan', person: 'Watson & Crick' },
                    { year: '1990', event: 'Human Genome Project dimulai — membaca 3 miliar "huruf" yang dibuat atom N di DNA manusia', person: 'NIH & DOE' },
                ],
            },
            {
                type: 'step',
                title: 'Inventaris Atom Tubuhmu',
                body: 'Tubuh manusia 70 kg mengandung atom-atom dengan proporsi yang mengejutkan:<br><br><b>Oksigen (65%):</b> Sebagian besar terikat dalam air (H₂O) yang mengisi 60% tubuhmu. Tanpa oksigen atom, tidak ada sel yang bisa berfungsi.<br><b>Karbon (18%):</b> Tulang punggung semua molekul organik. Setiap protein, lemak, gula, DNA — semuanya rangka karbon.<br><b>Hidrogen (10%):</b> Ada di mana-mana karena air. Kerangka H paling ringan, tapi paling banyak secara jumlah partikel.<br><b>Nitrogen (3.2%):</b> Penting di protein (ikatan peptida) dan DNA (basa nitrogen A, T, C, G).<br><b>Kalsium (1.5%):</b> 99% ada di tulang dan gigi — hydroxyapatite Ca₁₀(PO₄)₆(OH)₂.<br><b>Fosfor (1%):</b> Rangka DNA, ATP (mata uang energi sel).',
                visual: '📊',
                highlight: 'O 65% · C 18% · H 10% · N 3.2% · Ca 1.5% · P 1% · Fe, K, Na, Mg: sisanya',
            },
            {
                type: 'step',
                title: 'Besi yang Sedikit Tapi Vital: Hemoglobin',
                body: 'Tubuhmu hanya mengandung sekitar 4-5 gram besi (Fe) — tapi tanpanya, kamu mati dalam hitungan menit. Kenapa? Karena besi ada di jantung molekul hemoglobin: setiap molekul hemoglobin punya 4 atom Fe di tengah gugus "heme".<br><br>Atom Fe inilah yang mengikat O₂ saat melewati paru-paru, membawanya ke seluruh sel tubuh, lalu melepasnya dan membawa CO₂ kembali. Satu sel darah merah rata-rata mengandung 300 juta molekul hemoglobin — artinya 1,2 miliar atom Fe per sel. Dikali 25 triliun sel darah merah dalam tubuhmu.<br><br>4 gram besi = lebih penting dari 18 kg karbon dalam tubuhmu.',
                visual: '🩸',
                highlight: '4 gram Fe di tubuh · 300 juta hemoglobin per sel darah · masing-masing punya 4 atom Fe',
            },
            {
                type: 'scale',
                title: 'Atom-Atom Ini Bukan Milikmu',
                body: 'Fakta yang bikin pusing: setiap 7-10 tahun, hampir semua atom dalam tubuhmu diganti. Karbonmu berasal dari CO₂ yang diubah tumbuhan menjadi makanan yang kamu makan. Hidrogen dan oksigenmu berasal dari air yang kamu minum. Nitrogenmu dari protein makanan.<br><br>Ini bukan metafora. Atom karbon yang kini ada di jantungmu, 10 tahun yang lalu mungkin ada di batang pohon mangga, sebelumnya di atmosfer sebagai CO₂, dan sebelumnya lagi di dalam dinosaurus yang mati 66 juta tahun lalu.<br><br>Kamu secara harfiah adalah alam semesta yang sedang meminjam dirinya sendiri.',
                visual: '🔄',
                highlight: 'Setiap 7-10 tahun tubuhmu mengganti hampir semua atomnya · kamu bukan tubuhmu, tapi pola yang terus berpindah',
            },
            {
                type: 'scale',
                title: 'MRI: Memotret Atom Hidrogen di Tubuhmu',
                body: 'Magnetic Resonance Imaging (MRI) bekerja persis dengan memanfaatkan atom hidrogen di dalam tubuhmu. Proton H memiliki spin kuantum — bayangkan sebagai jarum kompas kecil. Magnet MRI yang berkekuatan 1.5–3 Tesla mengatur semua jarum itu sejajar. Lalu sinyal radio pendek menjungkirbalikannya. Saat mereka kembali ke posisi awal, setiap jenis jaringan memancarkan sinyal yang berbeda (lemak, air, darah masing-masing punya "resonansi" yang khas).<br><br>Komputer merekonstruksi sinyal itu menjadi gambar 3D Detail — tanpa sinar X, tanpa radiasi berbahaya. Hanya magnet dan fisika kuantum proton H.',
                visual: '🏥',
                highlight: 'MRI = mengatur + melepas proton H · 3 Tesla = 60.000× medan magnet Bumi · tidak ada radiasi berbahaya',
            },
            {
                type: 'impact',
                title: 'Kamu Seharga Rp 2.500 — Tapi Tak Ternilai',
                body: 'Jika kita ekstrak semua atom dari tubuh manusia 70 kg dan jual sebagai unsur murni:<br>- Oksigen: sekitar $0.20<br>- Karbon: sekitar $25 (jika dijual sebagai grafit)<br>- Hidrogen: sekitar $0.10<br>- Nitrogen: sekitar $0.10<br>- Kalsium: sekitar $1<br>- Total: ~$160 USD, atau sekitar Rp 2.500.<br><br>Tapi nilai bukan terletak pada material — melainkan pada susunannya. Inilah yang membuat kimia luar biasa: atom-atom murah yang bebas di alam, ketika disusun dengan cara yang tepat, menghasilkan sesuatu yang tidak bisa dibeli dengan uang berapa pun.',
                visual: '✨',
                history: [
                    { year: '1789', event: 'Lavoisier: O dan H ditemukan sebagai unsur — fondasi kimia tubuh manusia', person: 'Lavoisier' },
                    { year: '1869', event: 'Tabel periodik Mendeleev — semua unsur tubuh ditemukan tempatnya', person: 'Mendeleev' },
                    { year: '1953', event: 'Struktur DNA Watson-Crick — atom CHNP membentuk kode kehidupan', person: 'Watson & Crick' },
                    { year: '2003', event: 'Human Genome Project selesai — 3 miliar basa DNA manusia terbaca', person: 'International HGP' },
                ],
                highlight: 'Atom-atom seharga $160 yang tersusun menjadi manusia yang mempertanyakan asal-usulnya sendiri',
            },
        ],
    },

    // ── ATOM TUMBUHAN ──────────────────────────────────────────────────────
    {
        id: 'plant-atoms',
        slides: [
            {
                type: 'hook',
                title: 'Pohon 20 Ton Itu Terbuat — Dari Udara Kosong',
                body: 'Lihat pohon oak dewasa di luar jendela. Tinggi 20 meter. Berat 20 ton. Sekarang tebak: dari mana datangnya massa itu?<br><br>Hampir tidak dari tanah. Dari udara.<br><br>Ini adalah salah satu fakta paling kontra-intuitif dalam sains: lebih dari 90% massa tumbuhan berasal dari CO₂ di udara dan H₂O dari lingkungan — bukan dari mineral tanah. Pohon adalah mesin yang mengubah udara tak kasatmata menjadi kayu yang bisa kamu pegang.',
                visual: '🌳',
                animKey: 'anim-plant-hook',
                highlight: '90% massa pohon berasal dari udara (CO₂) dan air · tanah hanya ~4% dari mineral terlarut',
            },
            {
                type: 'history',
                title: 'Jan Baptist van Helmont dan Pohon Willow 5 Tahun',
                body: 'Tahun 1648. Jan Baptist van Helmont, dokter dan alkimiawan Belanda, melakukan eksperimen sederhana yang mengubah biologi selamanya. Ia mengambil pot tanah 200 pon dan menanam pohon willow kecil 5 pon di dalamnya. Lima tahun kemudian — ia menimbang lagi.<br><br>Pohon: 169 pon! Tapi tanah: hanya berkurang 2 ons (kurang dari 0.1%). Dari mana 164 pon massa pohon itu berasal? Van Helmont menyimpulkan: air. Ia hampir benar — tapi tidak sepenuhnya. CO₂ dari udara juga ikut berperan, tapi ia tidak tahu itu.<br><br>Eksperimen sederhana ini adalah awal pembuktian bahwa tumbuhan tidak "memakan" tanah.',
                quote: 'Pohon dan semua tanaman lahir dari air. Air adalah pangkal dari segalanya.',
                quoteAuthor: 'Jan Baptist van Helmont, 1648 — hampir benar',
                visual: '🪴',
                history: [
                    { year: '1648', event: 'Van Helmont: pohon willow 164 pon dari tanah yang nyaris tidak berkurang — air adalah sumbernya', person: 'Jan Baptist van Helmont' },
                    { year: '1771', event: 'Joseph Priestley: tumbuhan "memulihkan udara yang rusak" — produksi oksigen pertama diamati', person: 'Joseph Priestley' },
                    { year: '1779', event: 'Jan Ingenhousz: hanya bagian hijau tumbuhan yang menghasilkan O₂ dan hanya di bawah cahaya', person: 'Jan Ingenhousz' },
                    { year: '1804', event: 'Nicolas-Théodore de Saussure: CO₂ dan H₂O adalah bahan baku fotosintesis', person: 'Nicolas de Saussure' },
                    { year: '1989', event: 'Rudolf Marcus menjelaskan mekanisme quantum transfer elektron dalam fotosintesis. Nobel Kimia 1992.', person: 'Rudolf Marcus' },
                ],
            },
            {
                type: 'step',
                title: 'Komposisi Atom Sebuah Pohon',
                body: 'Tumbuhan secara massa tersusun dari:<br><br><b>Karbon (~45%):</b> Semuanya dari CO₂ atmosfer yang ditangkap fotosintesis. Ini adalah atom tanpa massa (gas) yang berubah menjadi kayu padat.<br><b>Oksigen (~45%):</b> Dari CO₂ dan H₂O. Banyak yang dilepas kembali sebagai O₂ hasil sampingan fotosintesis.<br><b>Hidrogen (~6%):</b> Dari air yang diserap akar.<br><b>Nitrogen (~1-2%):</b> Dari tanah — satu-satunya yang benar-benar "dimakan" dari tanah secara berarti.<br><b>Kalium, Kalsium, Fosfor, Magnesium (~1-4% total):</b> Mineral dari tanah, diserap akar sebagai ion.',
                visual: '📊',
                highlight: 'C 45% dari udara + O 45% dari udara/air + H 6% dari air · Tanah hanya sumbang N, K, Ca, P, Mg',
            },
            {
                type: 'step',
                title: 'Klorofil: Magnesium di Jantung Fotosintesis',
                body: 'Setiap molekul klorofil memiliki tepat satu atom Magnesium (Mg) di pusatnya — seperti batu permata di cincin. Atom Mg itulah yang menjadi pusat reaksi penangkapan foton cahaya. Tanpa Mg, klorofil tidak bisa bekerja.<br><br>Ini adalah alasan mengapa tumbuhan perlu magnesium dari tanah: bukan untuk massa (Mg hanya ~ 0.1% berat tumbuhan), tapi untuk fungsionalitas. Daun yang pucat kuning pada tumbuhan yang kekurangan Mg adalah tanda langsung bahwa fotosintesis sedang gagal di level satu atom.<br><br>Satu atom Mg per molekul klorofil. Satu molekul klorofil = lebih dari 100 juta foton ditangkap per detik.',
                visual: '🍃',
                highlight: '1 atom Mg di jantung setiap klorofil · tanpa Mg → daun kuning, fotosintesis gagal',
            },
            {
                type: 'scale',
                title: 'Hutan Amazon: Tangki Karbon Terbesar Bumi',
                body: 'Hutan Amazon menyimpan sekitar 150-200 miliar ton karbon dalam bentuk kayu, daun, dan tanah. Itu setara lebih dari 15 tahun emisi CO₂ seluruh aktivitas manusia di Bumi. Semua karbon itu dulu ada di atmosfer sebagai CO₂ tak kasatmata — berubah menjadi kayu keras, akar dalam, daun rimbun.<br><br>Setiap tahun, semua tumbuhan Bumi menyerap sekitar 120 miliar ton karbon dari atmosfer melalui fotosintesis. Ini adalah proses kimia terbesar yang terjadi di permukaan Bumi.',
                visual: '🌿',
                highlight: 'Amazon: 150 miliar ton C tersimpan · setara 15 tahun emisi global · semua dari CO₂ udara',
            },
            {
                type: 'impact',
                title: 'Saat Pohon Tumbang, Ia Kembali ke Udara',
                body: 'Ketika pohon mati dan membusuk, mikroorganisme mengurai selulosa dan lignin — mengembalikan atom-atom karbon ke udara sebagai CO₂. Pohon tidak "kembali ke tanah" dalam artian massa — ia kembali ke udara. Siklus karbon ini bukan poetic — ia matematis dan dapat diukur.<br><br>Inilah mengapa penebangan hutan tropis adalah bencana iklim: bukan hanya menghilangkan "penyerap CO₂", tapi secara aktif melepaskan kembali ratusan ton CO₂ ke atmosfer per hektar.<br><br>Dan pertanian modern bergantung pada pupuk nitrogen sintetis (proses Haber-Bosch, 1909) — karena tumbuhan tidak bisa mengambil N₂ langsung dari udara. Tanpa pupuk N buatan, separuh populasi Bumi tidak bisa diberi makan.',
                visual: '🌍',
                history: [
                    { year: '1804', event: 'De Saussure: CO₂ + H₂O + cahaya = glukosa + O₂', person: 'Nicolas de Saussure' },
                    { year: '1909', event: 'Haber-Bosch: sintesis amonia dari N₂ atmosfer — memungkinkan pupuk N buatan, menggandakan hasil panen', person: 'Fritz Haber & Carl Bosch' },
                    { year: '1961', event: 'Melvin Calvin: siklus Calvin terbukti — bagaimana C difiksasi dari CO₂ menjadi gula. Nobel Kimia 1961.', person: 'Melvin Calvin' },
                ],
                highlight: 'Pohon = mesin CO₂ → kayu · mati → CO₂ lagi · Haber-Bosch memberi makan 4 miliar orang',
            },
        ],
    },

    // ── ATOM BUMI ──────────────────────────────────────────────────────────
    {
        id: 'earth-atoms',
        slides: [
            {
                type: 'hook',
                title: 'Bumi Adalah Planet Besi — Tersembunyi di Balik Batu',
                body: 'Kalau kamu bisa melelehkan seluruh Bumi dan campurkan setiap atomnya — Bumi adalah bola besi-oksigen. Besi (32%) dan oksigen (30%) mendominasi. Sisanya silikon, magnesium, nikel, sulfur, kalsium.<br><br>Tapi dari permukaan, kita tidak bisa melihat ini — inti besi tersembunyi 2.900 km di bawah. Yang kita pijak (kerak bumi) punya komposisi berbeda total: didominasi silikon dan oksigen. Bumi adalah bawang dengan lapisan-lapisan komposisi yang sangat berbeda.',
                visual: '🌍',
                animKey: 'anim-earth-hook',
                highlight: 'Bumi total: 32% Fe + 30% O · Kerak Bumi yang kita pijak: 46% O + 28% Si + 8% Al',
            },
            {
                type: 'history',
                title: 'Inge Lehmann: Wanita yang Menemukan Inti Padat Bumi dari Gempa',
                body: 'Tahun 1936. Inge Lehmann, seismolog Denmark, mempelajari gelombang seismik dari gempa bumi besar yang merambat melalui Bumi. Ada anomali: gelombang P (longitudinal/kompresi) yang seharusnya tidak terdeteksi di zona "bayangan" tertentu ternyata muncul — lemah, tapi ada.<br><br>Lehmann menyimpulkan: inti bumi bukan satu lapisan cair homogen. Ada inti padat (solid inner core) di dalam inti cair (liquid outer core). Gelombang itu dipantulkan dan dibiaskan oleh batas antara keduanya.<br><br>Penemuan ini — yang ia buat dari analisis data dengan pensil dan kertas, karena komputer belum ada — mengubah pemahaman kita tentang interior Bumi selamanya.',
                quote: 'Anda harus mengetahui lebih banyak dari orang lain — dan bekerja lebih keras.',
                quoteAuthor: 'Inge Lehmann, hidup 104 tahun (1888-1993)',
                visual: '👩‍🔬',
                history: [
                    { year: '1906', event: 'Oldham: gelombang seismik membuktikan Bumi punya inti padat — tapi belum tahu itinya apa', person: 'Richard Oldham' },
                    { year: '1914', event: 'Gutenberg: batas inti-mantel ditemukan di 2.900 km kedalaman', person: 'Beno Gutenberg' },
                    { year: '1936', event: 'Inge Lehmann: inti dalam yang PADAT di dalam inti luar yang cair', person: 'Inge Lehmann' },
                    { year: '1950s', event: 'Komposisi inti terkonfirmasi: besi-nikel dari analisis densitas dan kecepatan gelombang', person: 'Seismologi global' },
                    { year: '2021', event: 'Inti terdalam Bumi (innermost inner core) diidentifikasi dalam inti padat itu sendiri', person: 'ANU Researchers' },
                ],
            },
            {
                type: 'step',
                title: 'Lapisan-Lapisan Komposisi Bumi',
                body: '<b>Kerak (0-70 km):</b> Oksigen 46%, Silikon 28%, Aluminium 8%, Besi 5%, Kalsium, Natrium, Kalium, Magnesium. "Batu granit dan basal."<br><br><b>Mantel (70-2.900 km):</b> Magnesium-silikon-oksigen dalam mineral padat bertekanan tinggi. Olivin, piroksen — batu yang tidak ada di permukaan.<br><br><b>Inti Luar (2.900-5.100 km):</b> Besi dan nikel cair — generator dinamo alami yang menciptakan medan magnet Bumi.<br><br><b>Inti Dalam (5.100-6.370 km):</b> Besi-nikel PADAT meski suhu 5.000–6.000°C — karena tekanan sangat ekstrem.',
                visual: '🔬',
                highlight: 'Kerak O-Si · Mantel Mg-Si-O · Inti Luar Fe-Ni cair · Inti Dalam Fe-Ni padat pada 6.000°C',
            },
            {
                type: 'step',
                title: 'Emas Tersembunyi: Cukup Melapisi Seluruh Bumi 45 cm',
                body: 'Di kerak Bumi, konsentrasi emas hanya ~0.004 ppm — sangat langka. Tapi Bumi punya mantel dan inti yang masif. Estimasi: total emas di seluruh Bumi (termasuk inti) sekitar 1,6 × 10²¹ kg.<br><br>Jika semua emas itu bisa dikumpulkan di permukaan, ia akan melapisi seluruh Bumi setebal 45 cm.<br><br>Masalahnya: 99% emas itu ada di inti Bumi, dibawa ke sana oleh "diferensiasi planeta" — proses ketika Bumi masih cair dan logam berat tenggelam ke inti. Emas yang ada di kerak dan bisa ditambang manusia adalah "sisa" yang tertinggal dari proses itu miliaran tahun lalu.',
                visual: '⛏️',
                highlight: 'Bumi punya 1.6 × 10²¹ kg emas · cukup lapisi seluruh permukaan 45 cm · 99% terjebak di inti',
            },
            {
                type: 'scale',
                title: 'Dinamake Atom Besi: Perisai Tak Kasatmata',
                body: 'Medan magnet Bumi — yang melindungi semua kehidupan dari angin matahari radioaktif — dihasilkan oleh konveksi besi cair di inti luar. Atom-atom Fe bermuatan positif bergerak dalam aliran kompleks karena panas dari inti dalam dan rotasi Bumi → arus listrik alami → medan magnet raksasa yang membungkus seluruh planet.<br><br>Tanpa ini: radiasi matahari akan menghancurkan lapisan ozon, memusnahkan atmosfer, dan membuat Bumi menjadi Mars: dingin, kering, gundul. Mars punya inti yang sudah membeku — magnetnya mati, atmosfernya hilang dihembus angin matahari.',
                visual: '🧲',
                highlight: 'Fe cair di inti luar → arus listrik → medan magnet → perisai seluruh kehidupan di Bumi',
            },
            {
                type: 'impact',
                title: 'Warisan: Bumi Mengatur Dirinya dengan Atomnya',
                body: 'Komposisi atom Bumi bukan kebetulan — ia adalah hasil diferensiasi kimia miliaran tahun. Bumi lahir dari awan debu bintang yang mengorbit matahari muda. Atom-atom berat (Fe, Ni) tenggelam ke inti. Atom-atom ringan (Si, O, Al) mengapung membentuk kerak. Gas-gas volatil (H, C, N) lepas membentuk atmosfer dan lautan.<br><br>Seluruh siklus geokimia — karbon, nitrogen, air, fosfor — adalah pertukaran atom antar lapisan ini yang telah berlangsung 4,5 miliar tahun dan menciptakan kondisi untuk kehidupan berkembang.',
                visual: '🌏',
                history: [
                    { year: '4.5 miliar tahun lalu', event: 'Bumi terbentuk dari akresi debu bintang — diferensiasi Fe ke inti berlangsung', person: 'Proses alam semesta' },
                    { year: '1936', event: 'Inge Lehmann: inti padat dalam inti luar cair — ditemukan dari data seismik', person: 'Inge Lehmann' },
                    { year: '1980s', event: 'Plate tectonics dikonfirmasi — kerak Si-O bergerak di atas mantel Mg-Si cair', person: 'Komunitas geofisika global' },
                    { year: 'Hari ini', event: 'Medan magnet mulai melemah ~10-15% dalam 200 tahun terakhir — apakah inti mulai berubah?', person: 'ESA SWARM mission' },
                ],
                highlight: 'Fe di inti → medan magnet → perisai kehidupan · Si dan O di kerak → batu, tanah, tempat tumbuh',
            },
        ],
    },

    // ── ATOM MATAHARI ──────────────────────────────────────────────────────
    {
        id: 'sun-atoms',
        slides: [
            {
                type: 'hook',
                title: 'Helium: Pertama Ditemukan di Bintang, Bukan di Bumi',
                body: 'Tahun 1868. Astronomer Pierre Janssen sedang mengamati gerhana matahari total di India. Dengan spektroskop, ia melihat garis cahaya kuning yang tidak cocok dengan unsur apapun yang dikenal di Bumi. Unsur baru!<br><br>Yang mengejutkan: unsur itu ditemukan di MATAHARI, 27 tahun sebelum ditemukan di Bumi. Ia dinamai "helios" — dari kata Yunani untuk matahari. Helium adalah satu-satunya unsur yang pertama kali diidentifikasi di bintang, bukan di planet kita.<br><br>Ini membuktikan bahwa semua bintang terbuat dari atom yang sama — dan spektroskop bisa membaca isi bintang berjarak ratusan tahun cahaya sekalipun.',
                visual: '☀️',
                animKey: 'anim-sun-hook',
                highlight: 'Helium ditemukan di Matahari tahun 1868 · baru ditemukan di Bumi 1895 · dinamai dari "Helios" (Yunani: Matahari)',
            },
            {
                type: 'history',
                title: 'Cecilia Payne: Matahari adalah Hidrogen (dan Tidak Ada yang Mau Percaya)',
                body: 'Tahun 1925. Cecilia Payne, mahasiswi PhD di Harvard, menganalisis spektrum ribuan bintang. Dari garis-garis penyerapan cahaya, ia menghitung kelimpahan unsur dan mendapat jawaban yang mengejutkan: matahari hampir seluruhnya adalah hidrogen dan helium — bukan besi seperti yang dipercaya selama era Bumi-sentris.<br><br>Henry Norris Russell, otoritas astronomi terbesar saat itu, memaksanya menuliskan di disertasinya bahwa konklusi ini "hampir pasti salah." Ia mengikuti. Empat tahun kemudian, Russell sendiri membuktikan bahwa Payne benar — dan mendapat kredit penuh.<br><br>Payne tidak pernah mendapat Nobel. Tapi astronomi modern dimulai dari disertasinya.',
                quote: 'Jangan biarkan orang membuatmu meragukan mengapa kamu percaya pada sesuatu.',
                quoteAuthor: 'Cecilia Payne-Gaposchkin',
                visual: '👩‍🔬',
                history: [
                    { year: '1868', event: 'Janssen & Lockyer: garis kuning misterius di spektrum matahari — Helium ditemukan di bintang', person: 'Janssen & Lockyer' },
                    { year: '1895', event: 'William Ramsay: Helium akhirnya ditemukan di Bumi dalam mineral uranium', person: 'William Ramsay' },
                    { year: '1925', event: 'Cecilia Payne: matahari hampir seluruhnya H dan He — diabaikan, lalu terbukti benar', person: 'Cecilia Payne' },
                    { year: '1938', event: 'Hans Bethe: siklus proton-proton dan CNO — energi matahari dari fusi H. Nobel 1967.', person: 'Hans Bethe' },
                    { year: '2020', event: 'Parker Solar Probe: manusia pertama yang "menyentuh" matahari — terbang melalui korona', person: 'NASA' },
                ],
            },
            {
                type: 'step',
                title: 'Komposisi Atom Matahari',
                body: 'Matahari tersusun dari (per massa):<br><br><b>Hidrogen (73.5%):</b> Bahan bakar fusi nuklir. Setiap detik, 600 juta ton H terbakar jadi He.<br><b>Helium (24.9%):</b> Produk sisa fusi. Jumlahnya meningkat seiring waktu — dalam ~5 miliar tahun, H akan habis.<br><b>Oksigen (0.77%):</b> Unsur ketiga paling melimpah — ada di atmosfer dan fotosfer matahari.<br><b>Karbon (0.29%):</b> Berperan dalam siklus CNO — jalur fusi nuklir alternatif di bintang yang lebih besar.<br><b>Neon, Nitrogen, Besi, Silikon:</b> Jejak, masing-masing di bawah 0.2%.<br><br>Komposisi ini sama persis dengan nebula primordial tempat tata surya terbentuk 4,6 miliar tahun lalu.',
                visual: '📊',
                highlight: 'H 73.5% · He 24.9% · O 0.77% · C 0.29% · sisanya trace elements',
            },
            {
                type: 'step',
                title: 'Spektroskopi: Membaca Isi Bintang dari Cahayanya',
                body: 'Bagaimana kita tahu komposisi matahari dan semua bintang tanpa pergi ke sana? Spektroskopi.<br><br>Setiap atom menyerap dan memancarkan cahaya hanya pada frekuensi-frekuensi tertentu — "sidik jari" optiknya. Ketika cahaya matahari dipecah dengan prisma (atau difraksi), kita melihat spektrum pelangi. Di dalamnya ada garis-garis gelap — panjang gelombang tertentu yang diserap oleh atom-atom gas di atmosfer matahari saat cahaya melewatinya.<br><br>Setiap garis gelap = satu unsur tertentu. Na menghasilkan dua garis kuning karakteristik. Fe menghasilkan garis-garis kompleks. H menghasilkan seri Balmer yang terkenal. Dengan membaca garis-garis ini, kita membaca tabel periodik bintang mana pun.',
                visual: '🌈',
                highlight: 'Setiap atom punya "sidik jari" frekuensi cahaya yang unik · spektroskopi = membaca isi bintang dari cahayanya',
            },
            {
                type: 'scale',
                title: 'Kematian Matahari dan Kelahiran Materi Baru',
                body: 'Matahari telah membakar hidrogen selama 4,6 miliar tahun. Masih ada sekitar 5 miliar tahun tersisa. Ketika H habis, He yang sudah menumpuk mulai terbakar. Matahari mengembang menjadi raksasa merah — menjelan Merkurius, Venus, dan mungkin Bumi.<br><br>Setelah itu, ia melepaskan selubung luarnya sebagai nebula planet (awan gas indah yang bisa kita lihat di foto teleskop) — menyebarkan C, N, O, dan semua elemen yang ia sintesis ke ruang angkasa. Sisa yang tertinggal: bintang katai putih, seukuran Bumi tapi bermassa setara Matahari.<br><br>Elemn-elemen yang dilepas itu akan menjadi bagian dari bintang generasi berikutnya. Siklus kosmik berlanjut.',
                visual: '🔴',
                highlight: 'Matahari hidup lagi 5 miliar tahun · mati → raksasa merah → nebula → katai putih · atom C,N,O tersebar ke jagat raya',
            },
            {
                type: 'impact',
                title: 'Matahari Tata Surya Kita — Laboratorium Fisika Kosmik',
                body: 'Matahari adalah laboratorium alami terdekat untuk fisika ekstrem: plasma 15 juta kelvin, tekanan 250 miliar atmosfer, medan magnet yang menciptakan sunspot dan flare yang bisa menghancurkan jaringan listrik sebuah benua.<br><br>Setiap data dari Matahari — dari spektrum Fraunhofer 1814 hingga Parker Solar Probe 2021 — telah mengajarkan kita tentang fisika atom, fusi nuklir, plasma, dan kondisi ekstrem yang tidak bisa direplikasi di laboratorium Bumi.<br><br>Dan satu hal yang paling membuat takjub: semua energi yang menggerakkan kehidupan di Bumi — fotosintesis, iklim, hujan, angin, batu bara, minyak — semuanya berasal dari satu proses: atom H yang berfusi di jantung bintang kita.',
                visual: '🌟',
                history: [
                    { year: '1814', event: 'Fraunhofer: garis-garis gelap di spektrum matahari — fondasi spektroskopi astronomi', person: 'Joseph von Fraunhofer' },
                    { year: '1868', event: 'Helium ditemukan di matahari — unsur pertama yang ditemukan di luar Bumi', person: 'Janssen & Lockyer' },
                    { year: '1925', event: 'Cecilia Payne: matahari adalah hidrogen dan helium, bukan besi', person: 'Cecilia Payne' },
                    { year: '2018', event: 'Parker Solar Probe diluncurkan — terbang 6 juta km dari permukaan matahari', person: 'NASA' },
                    { year: '2021', event: 'Parker Solar Probe menembus korona solar pertama kali — menyentuh "atmosfer" matahari', person: 'NASA' },
                ],
                highlight: 'Semua energi Bumi dari fusi H di Matahari · Spektroskopi dari 1814 hingga kini = membaca isi seluruh jagat raya',
            },
        ],
    },

    // ── PERJALANAN ATOM ────────────────────────────────────────────────────
    {
        id: 'atom-journey',
        slides: [
            {
                type: 'hook',
                title: 'Satu Atom Karbon di Jarimu Pernah Ada di Dinosaurus',
                body: 'Atom karbon tidak diciptakan di Bumi dan tidak pernah musnah. Mereka hanya berpindah, bergabung ke dalam molekul satu, lalu terlepas dan bergabung ke molekul lain — tanpa batas waktu, selama alam semesta ada.<br><br>Atom C di sel kulit jarimu detik ini mungkin telah menempuh perjalanan kosmik: lahir di inti bintang miliaran tahun lalu, tersebar ke angkasa oleh supernova, terlarut di lautan purba Bumi, diserap ganggang, dimakan dinosaurus, lalu melayang sebagai CO₂ puluhan juta tahun, diserap pohon, dimakan hewan, dan akhirnya jadi bagian dari kamu.<br><br>Kamu bukan hanya terhubung dengan alam semesta — kamu adalah bagian aktifnya.',
                visual: '🌊',
                animKey: 'anim-journey-hook',
                highlight: 'Atom C di tubuhmu tidak pernah musnah · usianya lebih tua dari Bumi · sudah jadi bintang, lautan, dinosaurus',
            },
            {
                type: 'history',
                title: 'Carl Sagan dan Kata Paling Mengubah Persepsi',
                body: '"We are made of star stuff." Delapan kata yang mengubah cara jutaan orang memandang dirinya sendiri. Carl Sagan mengucapkannya dalam serial Cosmos (1980) — tapi ia tidak membuat-buat. Ia hanya meringkas konsekuensi logis dari nukleosintesis bintang yang sudah terbukti secara ilmiah sejak 1957.<br><br>Tapi keadiluhungan itu melampaui puisi — ada kalkulasi di baliknya. Fisikawan pernah menghitung: setiap napas yang kamu ambil, kamu menghirup sekira 1 atom yang pernah dihirup Julius Caesar di napas terakhirnya. Bukan metafora. Atmosfer bercampur sempurna dalam ribuan tahun, dan ada cukup banyak atom untuk matematika itu bisa berlaku.',
                quote: 'Kita adalah cara alam semesta mengetahui dirinya sendiri.',
                quoteAuthor: 'Carl Sagan — Cosmos, 1980',
                visual: '✨',
                history: [
                    { year: '1957', event: 'Paper B²FH: semua atom lebih berat dari H dibuat di bintang — teorema ilmiah yang membuktikan "stardust"', person: 'Burbidge, Fowler, Hoyle' },
                    { year: '1980', event: 'Carl Sagan: Cosmos TV series — "We are made of star stuff" sampai ke jutaan orang', person: 'Carl Sagan' },
                    { year: '1995', event: 'Carbon dating mengkonfirmasi atom C berpindah antara atmosphere, biospheres, dan organism', person: 'Komunitas isotop global' },
                    { year: '2017', event: 'GW170817: tabrakan bintang neutron amati langsung — emas dan platina terbentuk dari atom-atom purba', person: 'LIGO-Virgo collaboration' },
                ],
            },
            {
                type: 'step',
                title: 'Langkah 1: Lahir di Inti Bintang',
                body: 'Setiap atom karbon di tubuhmu bermula sebagai inti helium di dalam bintang. Melalui reaksi fusi nuklir (proses triple-alpha: 3 He → C), atom C terbentuk di suhu 100 juta derajat di kedalaman bintang yang massanya lebih besar dari matahari kita.<br><br>Bintang itu hidup selama ratusan juta hingga miliaran tahun — membakar H menjadi He, He menjadi C, C menjadi O dan seterusnya. Ketika bintang kehabisan bahan bakar, ia meledak sebagai supernova — dan atom C itu dilempar ke luar angkasa dengan kecepatan ribuan km per detik.',
                visual: '⭐',
                animKey: 'anim-journey-step1',
                highlight: '3 He-4 → C-12 via triple-alpha · suhu 10⁸ K · di dalam bintang masif berumur ratusan juta tahun',
            },
            {
                type: 'step',
                title: 'Langkah 2: Debu Antarbintang selama Ratusan Juta Tahun',
                body: 'Setelah terlempar oleh supernova, atom C melayang sebagai debu antarbintang — partikel mikroskopis yang berkelana di ruang vakum antar bintang selama ratusan juta tahun. Ruang ini tidak benar-benar kosong: ada debu, gas H dan He, medan magnet galaksi.<br><br>Gravitasi galaksi perlahan mengumpulkan debu ini ke dalam awan molekuler raksasa — nebula. Ketika awan mencapai massa kritis, ia kolaps karena gravitasinya sendiri, memanas, dan membentuk bintang baru — dan disk material di sekitarnya yang menjadi planet.',
                visual: '💫',
                animKey: 'anim-journey-step2',
                highlight: 'Atom C → debu antarbintang → awan nebula → kolaps → sistem tata surya baru (termasuk Bumi kita)',
            },
            {
                type: 'step',
                title: 'Langkah 3: Dari Atmosfer ke Lautan ke Kehidupan',
                body: 'Bumi muda (~4 miliar tahun lalu) mendingin. CO₂ dari aktivitas vulkanik memenuhi atmosfer. Lautan terbentuk dari air yang dibawa meteorit dan outgassing. Atom C terlarut di lautan sebagai CO₂ dan karbonat.<br><br>Sekitar 3.5 miliar tahun lalu, kehidupan pertama muncul — bakteri yang bisa mengikat C dari CO₂. Atom C masuk ke dalam rantai kehidupan pertama kali. Sejak itu, ia berpindah tanpa henti: bakteri → alga → tanaman → herbivora → karnivora → kembali ke atmosfer → diserap lagi.',
                visual: '🌊',
                animKey: 'anim-journey-step3',
                highlight: 'CO₂ atmosfer → lautan → bakteri purba → rantai kehidupan · sudah berlangsung 3.5 miliar tahun',
            },
            {
                type: 'scale',
                title: 'Napas Caesar di Paru-Parumu Sekarang',
                body: 'Hitung napas Julius Caesar — sekitar 25.000 kali per hari, selama 58 tahun hidupnya. Kira-kira 500 ml gas per napas. Totalnya: sekitar 800 juta liter udara yang pernah lewat paru-paru Caesar.<br><br>Dalam setiap liter: ~2.7 × 10²² molekul. Sebagian CO₂ yang ia hembuskan diserap pohon, sebagian masuk lautan, tapi sebagian tetap bercampur ke atmosfer selama ribuan tahun.<br><br>Kalkulasi menunjukkan: dengan pencampuran atmosfer yang sempurna, setiap liter udara yang kamu hirup hari ini berisi rata-rata ~1 atom yang pernah melewati paru-paru Caesar. Matematika, bukan romansa.',
                visual: '💨',
                highlight: '~1 atom dari napas Julius Caesar ada di setiap napasmu sekarang · kalkulasi termodinamika, bukan puisi',
            },
            {
                type: 'impact',
                title: 'Kita Tidak Miliki Atom Kita — Kita Hanya Meminjamnya',
                body: 'Inilah konsekuensi terakhir dari sains atom: tidak ada yang benar-benar "kita" tentang atom-atom di tubuh kita. Dalam 7-10 tahun, hampir semua atom berganti. Kita bukan kumpulan atom — kita adalah pola yang dipertahankan dalam aliran atom yang terus berpindah.<br><br>Identitas terletak pada struktur, bukan material. Seperti sungai yang selalu berganti airnya tapi tetap "sungai yang sama" — kamu selalu berganti atomnya tapi tetap "kamu yang sama."<br><br>Dan atom-atom yang kamu lepaskan hari ini — dalam napas, keringat, sel mati — akan menjadi bagian dari orang lain, pohon lain, mungkin bintang lain miliar tahun dari sekarang.',
                visual: '♾️',
                history: [
                    { year: '4.6 miliar tahun lalu', event: 'Tata surya terbentuk dari nebula yang kaya atom hasil supernova tua', person: 'Alam semesta' },
                    { year: '3.5 miliar tahun lalu', event: 'Kehidupan pertama di Bumi — atom C masuk ke rantai biologi', person: 'Abiogenesis' },
                    { year: '1957', event: 'B²FH paper: dari mana semua atom berasal terjawab secara ilmiah', person: 'Burbidge, Fowler, Hoyle' },
                    { year: '1980', event: 'Sagan: "We are stardust" — konsekuensi nukleosintesis disampaikan ke dunia', person: 'Carl Sagan' },
                ],
                highlight: 'Atom C-mu: lahir di bintang → supernova → nebula → Bumi → hidupanmu → udara → ... → selamanya',
            },
        ],
    },

    // ── LOGAM MULIA ──────────────────────────────────────────────────────────
    {
        id: 'noble-metals',
        slides: [
            {
                type: 'hook',
                title: 'Mahkota Firaun 3.300 Tahun — Masih Berkilap',
                body: 'Di makam Tutankhamun yang dibuka tahun 1922, ditemukan mahkota dan perhiasan emas yang terkubur 3.300 tahun. Masih berkilap sempurna — tidak satu pun noda karat. Sementara besi dari era yang sama sudah lama hancur jadi debu merah. Mengapa emas bertahan? Bukan keajaiban — tapi karena konfigurasi elektronnya membuat emas nyaris tidak mau bereaksi dengan siapapun.',
                visual: '🥇',
                animKey: 'anim-gold-hook',
                highlight: 'Emas 3.300 tahun di makam firaun masih berkilap · besi dari era sama sudah karat',
            },
            {
                type: 'step',
                title: 'Mengapa Emas Tidak Mau Bereaksi?',
                body: 'Efek relativistik — elektron bergerak mendekati kecepatan cahaya karena nomor atom yang tinggi (79) — menyusutkan orbital 6s emas dan membuatnya sangat terikat kuat ke inti. Energi yang dibutuhkan untuk memaksa emas bereaksi lebih besar dari energi yang dihasilkan. Jadi reaksi tidak terjadi secara alami. Itulah mengapa emas masih berkilap ribuan tahun kemudian.',
                visual: '⚛️',
                animKey: 'anim-gold-electron',
                highlight: 'Efek relativistik · orbital 6s menyusut · emas nyaris immun terhadap reaksi kimia',
            },
            {
                type: 'step',
                title: 'Medali Nobel yang Dilarutkan untuk Selamatkan dari Nazi',
                body: 'Satu campuran bisa melarutkan emas: aqua regia (3 bagian HCl dan 1 bagian HNO3). Selama PD2, ilmuwan Denmark Niels Bohr melarutkan medali Nobel emasnya dalam aqua regia di dalam botol untuk menyembunyikannya dari pasukan Nazi yang menduduki Denmark. Setelah perang berakhir, ia memisahkan emas dari larutan dan mencetak ulang medalinya.',
                visual: '🧪',
                highlight: 'Aqua regia = satu-satunya yang bisa larutkan Au · Niels Bohr sembunyikan Nobel dari Nazi',
            },
            {
                type: 'step',
                title: 'Platinum Lebih Mulia dari Emas',
                body: 'Platinum bahkan lebih malas dari emas — titik leleh lebih tinggi (1.768 derajat vs 1.064 derajat), lebih tahan korosi. Iridium adalah yang paling tahan: tidak bereaksi bahkan dengan asam kuat. Kilogram standar internasional sampai tahun 2019 terbuat dari alloy platinum-iridium 90:10 — karena keduanya paling stabil dari waktu ke waktu.',
                visual: '⚖️',
                highlight: 'Pt lebih mulia dari Au · Ir paling mulia · kilogram standar dunia dulu = Pt-Ir 90:10',
            },
            {
                type: 'impact',
                title: 'Logam Mulia Ada di Mana-Mana',
                body: 'Logam mulia bukan hanya perhiasan. Platinum di catalytic converter mobil mengkatalisis CO dan NOx menjadi CO2 dan N2 tanpa habis terpakai. Emas di kontak listrik HP-mu tidak teroksidasi dan tetap konduktif selamanya. Iridium di ujung pena ballpoint premium. Palladium di busi. Investasi terbesar dalam logam mulia bukan di lemari perhiasan — tapi di dalam setiap perangkat elektronik di seluruh dunia.',
                visual: '📱',
                highlight: 'Au di kontak HP · Pt di knalpot mobil · Ir di ujung pena · semua logam mulia ada di sekitarmu',
            },
        ],
    },

    // ── FIKSI & SAINS: ARC REACTOR ──────────────────────────────────────────
    {
        id: 'palladium-arc',
        slides: [
            {
                type: 'hook',
                title: 'Tony Stark Keracunan Paladium — dan Paladium Nyata Memang Bisa Membunuhmu',
                body: 'Di Iron Man 2, Tony Stark pelan-pelan diracuni oleh bahan bakar arc reactor-nya sendiri: paladium. Kadar paladium dalam darahnya naik, merusak jaringan, dan dokternya menyerah.<br><br>Ini bukan murni fiksi. Paladium (Pd, Z=46) dalam bentuk serbuk halus atau senyawa tertentu memang toksik — paparan jangka panjang menyebabkan kerusakan paru-paru dan organ. Satu bagian kecil dari cerita Tony Stark itu menggunakan kimia nyata.<br><br>Tapi arc reactor-nya? Itu melanggar beberapa hukum fisika sekaligus — dan ilmuwan sudah menghitung persis di mana fiksinya.',
                visual: '🔵',
                animKey: 'anim-arc-hook',
                highlight: 'Paladium memang toksik dalam bentuk tertentu — fakta nyata · Arc reactor 3 GW dari piring kecil — melanggar fisika',
            },
            {
                type: 'history',
                title: 'Paladium Nyata: Logam yang Menyerap Hidrogen 900× Volumenya',
                body: 'William Hyde Wollaston menemukan paladium tahun 1803 — dan ia melakukan sesuatu yang tidak biasa: ia diam. Alih-alih mengumumkan penemuan, ia mulai menjual "logam misterius baru" secara anonim, membiarkan komunitas ilmiah sendiri yang memverifikasi keasliannya.<br><br>Yang ia sembunyikan adalah sifat paling ajaib paladium: kemampuannya menyerap hidrogen hingga 900 kali volumenya sendiri. Atom H masuk ke dalam kisi kristal Pd seperti spons menyerap air. Ini bukan reaksi kimia biasa — atom H secara harfiah "hidup" di dalam logam padat.<br><br>Inilah yang membuat paladium jadi kandidat nyata untuk penyimpanan hidrogen bersih — bukan arc reactor, tapi teknologi yang tidak kalah revolusioner.',
                quote: 'Paladium menyerap hidrogen seperti spons menyerap air — salah satu sifat paling luar biasa yang dimiliki unsur apapun.',
                quoteAuthor: 'Thomas Graham, 1866 — menemukan sifat penyerapan hidrogen paladium',
                visual: '🔬',
                history: [
                    { year: '1803', event: 'Wollaston menemukan paladium — menjualnya secara anonim dulu, baru mengumumkan setelah terbukti nyata', person: 'William Hyde Wollaston' },
                    { year: '1866', event: 'Graham: paladium menyerap 935× volumenya dalam hidrogen — penemuan penyerapan gas logam', person: 'Thomas Graham' },
                    { year: '2010', event: 'Iron Man 2 rilis — paladium jadi "penjahat" arc reactor, membuat jutaan orang googling "apa itu paladium"', person: 'Marvel Studios' },
                    { year: 'Sekarang', event: 'Paladium ~$50.000/kg — digunakan di catalytic converter, sel bahan bakar H, dan katalis farmasi', person: 'Industri global' },
                ],
            },
            {
                type: 'step',
                title: 'Apa yang Salah dari Arc Reactor?',
                body: 'Arc reactor dalam fiksi menghasilkan 3 gigawatt dari perangkat seukuran piring. Mari hitung:<br><br><b>Densitas energi:</b> 3 GW terus-menerus = ~260 TJ per hari. Untuk skala: bom nuklir Hiroshima melepaskan 63 TJ — semuanya sekaligus. Arc reactor menghasilkan 4× itu setiap hari dari kotak kecil.<br><br><b>Paladium sebagai bahan bakar:</b> Paladium tidak melepaskan energi saat menyerap hidrogen — reaksinya eksoterm sangat kecil, jauh di bawah yang dibutuhkan. Tidak ada reaksi kimia atau nuklir yang diketahui bisa menghasilkan 3 GW dari massa beberapa kilogram paladium.<br><br><b>Yang paling dilanggar:</b> Hukum termodinamika kedua — energi tidak bisa muncul dari ketiadaan.',
                visual: '⚡',
                highlight: '3 GW = 4× energi bom Hiroshima setiap hari · tidak ada material yang punya densitas energi seperti ini',
            },
            {
                type: 'step',
                title: 'Tapi "Menciptakan Unsur Baru" — Bisa Dilakukan?',
                body: 'Di akhir Iron Man 2, Tony membuat model atom 3D dengan laser, menemukan unsur baru di antara unsur-unsur yang sudah ada, dan mensintesisnya dengan akselerator partikel kecil dari garasi.<br><br>Sains bilang: setengah benar. Kita memang bisa membuat unsur baru — tapi dengan akselerator partikel raksasa, bukan garasi. CERN (lingkar 27 km), GSI Jerman, dan RIKEN Jepang telah membuat unsur-unsur super-berat (Oganesson, Z=118, dll). Caranya: tembakkan inti atom berat ke inti atom berat lain, berharap keduanya fusi.<br><br>Masalahnya: unsur super-berat yang dibuat sangat tidak stabil — beberapa hanya bertahan dalam milisekon sebelum meluruh. Tidak ada "unsur baru stabil" yang tersembunyi antara unsur yang sudah ada.',
                visual: '⚗️',
                highlight: 'Membuat unsur baru: BISA — tapi butuh CERN 27 km, bukan garasi · unsur baru biasanya tidak stabil dalam milisekon',
            },
            {
                type: 'scale',
                title: 'Paladium Nyata: Bukan Arc Reactor, Tapi Tidak Kalah Keren',
                body: 'Walau bukan bahan bakar arc reactor, paladium nyata punya aplikasi yang lebih membumi tapi tidak kalah mengesankan:<br><br>• <b>Catalytic converter:</b> Setiap mobil bensin punya ~3-7 gram Pd yang mengubah CO dan NOx jadi CO₂ dan N₂ dalam 0,1 detik — tanpa pernah habis terpakai.<br>• <b>Sel bahan bakar hidrogen:</b> Pd bisa menyimpan H₂ dalam kristalnya lalu melepasnya terkontrol — teknologi kunci kendaraan masa depan.<br>• <b>Elektroda gigi:</b> Biokompatibel dan tidak berkarat — ada paladium di mulut jutaan orang.<br>• <b>Harganya:</b> 2021, paladium sempat menjadi logam paling mahal di dunia — $80/gram, melampaui emas dan platinum.',
                visual: '🚗',
                highlight: 'Paladium di catalytic converter = mengubah gas beracun jadi tidak berbahaya setiap detik mobilmu berjalan',
            },
            {
                type: 'impact',
                title: 'Verdict: Sains bilang 1/10 dari Arc Reactor adalah Nyata',
                body: 'Paladium benar-benar ada dan benar-benar menarik. Toksisitasnya dalam kondisi tertentu — nyata. Kemampuannya menyerap hidrogen — nyata dan menakjubkan. Penggunaannya di teknologi bersih — nyata dan berkembang pesat.<br><br>Tapi arc reactor itu sendiri — energi 3 GW dari kotak kecil, "unsur baru" yang ditemukan dalam semalam di garasi — melanggar termodinamika, fisika nuklir, dan kimia secara bersamaan.<br><br>Yang menarik dari Iron Man bukan arc reactor-nya. Yang menarik adalah pertanyaannya: <i>jika kita punya densitas energi setinggi itu, dunia seperti apa yang bisa kita bangun?</i> Pertanyaan itulah yang mendorong riset fusi nuklir dan baterai generasi berikutnya.',
                visual: '🏆',
                history: [
                    { year: '1803', event: 'Paladium ditemukan — logam paling ajaib yang jarang dibicarakan', person: 'Wollaston' },
                    { year: '2008', event: 'Iron Man rilis — pertama kali jutaan orang mendengar kata "paladium" dalam konteks energi', person: 'Marvel' },
                    { year: '2021', event: 'Paladium sempat $80/gram — lebih mahal dari emas, karena krisis chip dan EV mendrive permintaan', person: 'Pasar komoditas global' },
                ],
                highlight: 'Toksisitas Pd: NYATA · Penyerapan H₂: NYATA · Arc reactor 3 GW: melanggar termodinamika · Tapi pertanyaannya = valid',
            },
        ],
    },

    // ── FIKSI & SAINS: VIBRANIUM ────────────────────────────────────────────
    {
        id: 'vibranium',
        slides: [
            {
                type: 'hook',
                title: 'Tameng yang Menyerap Energi — Fisika Bilang "Hampir Mungkin"',
                body: 'Tameng Captain America terbuat dari vibranium — logam yang menyerap energi kinetik hampir sempurna. Peluru menghantamnya dan berhenti. Pukulan Thor tidak meninggalkan penyok. Ledakan besar tidak bergerak.<br><br>Ini terdengar seperti omong kosong total. Tapi ketika fisikawan mulai menghitung, jawabannya lebih mengejutkan: <i>beberapa aspek vibranium bukan mustahil secara prinsip — hanya belum bisa kita buat.</i><br><br>Dan material yang paling mendekatinya sudah ada di laboratorium. Namanya graphene.',
                visual: '🛡️',
                animKey: 'anim-vibranium-hook',
                highlight: 'Vibranium: menyerap energi kinetik hampir sempurna · Graphene nyata: 200× lebih kuat dari baja per ketebalan',
            },
            {
                type: 'step',
                title: 'Material yang Menyerap Energi: Sudah Ada, Tapi Ada Batasnya',
                body: 'Material "penyerap energi" bukan fiksi — ada beberapa kelas nyata:<br><br><b>d3o:</b> Polimer non-Newtonian yang mengeras instan saat terbentur, kembali lunak. Ada di helm olahraga premium dan rompi tentara.<br><b>Aerogel silika:</b> 99.8% udara, tapi bisa menahan beban 4.000× massanya dan memperlambat ledakan.<br><b>Baja Hadfield:</b> Baja mangan tinggi yang hardening saat dipukul — semakin dipukul, semakin keras.<br><b>Graphene multi-layer:</b> 200× lebih kuat dari baja, flexibel, sudah diuji sebagai pelindung balistik di lab MIT.<br><br>Tapi semua punya batas. Tidak ada yang bisa "menyerap sempurna" tanpa batas — energi harus pergi ke suatu tempat.',
                visual: '🔬',
                highlight: 'Graphene: 200× lebih kuat dari baja · d3o: mengeras instan saat terbentur · keduanya nyata dan digunakan hari ini',
            },
            {
                type: 'step',
                title: 'Hukum yang Tidak Bisa Dinegosiasi: Kekekalan Energi',
                body: 'Inilah masalah terbesar vibranium yang sering diabaikan film: <b>energi tidak bisa hanya "diserap" dan hilang.</b><br><br>Hukum kekekalan energi adalah satu aturan paling teruji dalam sejarah sains — tidak ada pengecualiannya yang pernah ditemukan dalam 300 tahun. Energi kinetik peluru harus berubah menjadi sesuatu: panas, suara, getaran, atau deformasi material.<br><br>Vibranium dalam fiksi tampak tidak memanas, tidak bergetar, tidak rusak. Itu matematikanya tidak mungkin. Kecuali ada mekanisme "<i>discharge</i>" di suatu tempat — energi dilepaskan kembali dengan cara lain. Ironisnya, dalam beberapa komik memang seperti itulah vibranium bekerja — ia menyimpan lalu melepas energi.',
                visual: '⚖️',
                highlight: 'Energi tidak bisa hilang · Hukum kekekalan energi = 300 tahun tanpa pengecualian · Vibranium butuh mekanisme "buang energi"',
            },
            {
                type: 'scale',
                title: 'Graphene: Vibranium Paling Nyata yang Sudah Ada',
                body: 'Graphene adalah satu lapisan atom karbon dalam susunan heksagonal — tebal satu atom, tapi kekuatannya melampaui apapun yang kita tahu. Peneliti MIT menembakkan proyektil dengan kecepatan lebih dari 3 km/detik ke graphene multi-layer — hasilnya melampaui baja dan Kevlar gabungan.<br><br>Satuan kekuatannya: ~130 GPa tensile strength. Dibanding baja (~0.4 GPa) atau kevlar (~3.6 GPa) — graphene 200× lebih kuat per ketebalan yang sama. Satu lembar graphene seluas lapangan bola hanya sanggup menahan berat seekor kucing — karena sangat tipis. Tapi tumpuk ribuan layer dan kamu punya kandidat tameng yang nyata.<br><br>Masalahnya: produksi graphene berkualitas tinggi masih sangat mahal dan sulit dalam skala besar.',
                visual: '💎',
                highlight: 'Graphene: 200× kuat dari baja · 130 GPa tensile strength · sudah diuji sebagai pelindung balistik di MIT',
            },
            {
                type: 'impact',
                title: 'Verdict: Vibranium Tidak Mungkin, Tapi Menginspirasi Sains Nyata',
                body: 'Vibranium murni = mustahil secara fisika. Material yang "menyerap energi sempurna tanpa buang energi ke manapun" melanggar termodinamika — titik.<br><br>Tapi vibranium sebagai inspirasi? Sangat nyata. Program riset metamaterial, graphene balistik, dan smart armor yang dikembangkan DARPA, MIT, dan universitas Asia terinspirasi persis dari pertanyaan yang sama: <i>bisakah kita buat material yang jauh lebih kuat dari baja, tapi ringan?</i><br><br>Dan baju anti-peluru modern yang menyelamatkan nyata ribuan tentara dan polisi setiap tahun — Kevlar, UHMWPE, keramik boron karbida — sudah jauh melampaui baja dalam hal rasio perlindungan per berat. Vibranium tidak nyata. Tapi impactnya terhadap material science sangat nyata.',
                visual: '🛡️',
                history: [
                    { year: '1965', event: 'Kevlar ditemukan oleh Stephanie Kwolek di DuPont — 5× lebih kuat dari baja per massa', person: 'Stephanie Kwolek' },
                    { year: '2004', event: 'Graphene diisolasi pertama kali oleh Geim & Novoselov. Nobel 2010.', person: 'Geim & Novoselov, Manchester' },
                    { year: '2014', event: 'MIT: graphene multi-layer diuji sebagai pelindung balistik — hasilnya melampaui Kevlar', person: 'MIT Research' },
                ],
                highlight: 'Vibranium = impossible · Graphene + metamaterial + UHMWPE = arah yang sama, sudah nyata',
            },
        ],
    },

    // ── FIKSI & SAINS: KRIPTONIT ────────────────────────────────────────────
    {
        id: 'kryptonite',
        slides: [
            {
                type: 'hook',
                title: 'Kriptonit Lahir Bukan karena Naskah — Tapi karena Aktor Superman Butuh Cuti',
                body: 'Tahun 1943. Serial radio Superman sudah mengudara dua tahun, dan Bud Collyer — aktor suara Superman — butuh liburan. Masalahnya: Superman tidak mungkin pingsan atau menghilang tanpa alasan di depan pendengar setia.<br><br>Penulis naskah radio membutuhkan cara untuk membuat Superman tidak berdaya sementara. Dalam beberapa hari, lahirlah kriptonit — mineral dari planet Krypton yang melemahkan Superman. Aktor pengganti bisa mengisi peran Clark Kent yang kesakitan.<br><br>Jadi satu-satunya kelemahan superhero paling ikonik dalam sejarah lahir bukan dari drama kosmik — tapi dari jadwal cuti karyawan di studio radio Chicago.',
                visual: '💚',
                animKey: 'anim-krypton-hook',
                highlight: 'Kriptonit lahir tahun 1943 di radio — bukan komik · alasannya: aktor Superman butuh cuti liburan',
            },
            {
                type: 'history',
                title: 'Krypton Nyata: Gas Mulia yang Sangat Tidak Istimewa',
                body: 'Krypton (Kr, Z=36) ditemukan tahun 1898 oleh William Ramsay dan Morris Travers — dengan cara yang membuktikan betapa bertenaganya kimia analitik: mereka menguapkan udara cair perlahan-lahan dan mengamati gas-gas yang tersisa. Nama "krypton" dari bahasa Yunani kryptos — tersembunyi.<br><br>Krypton nyata adalah gas mulia yang nyaris tidak bereaksi dengan apapun. Tidak berbau, tidak berwarna, tidak berbahaya dalam kondisi normal. Digunakan di lampu fluoresen khusus dan jendela isolasi termal. Harganya sekitar $0.50 per liter gas.<br><br>Tapi isotop krypton yang <i>radioaktif</i> — itu cerita berbeda.',
                quote: 'Semua unsur gas mulia yang saya temukan mengonfirmasi satu hal: alam semesta menyimpan lebih banyak rahasia di udara biasa daripada yang pernah kita duga.',
                quoteAuthor: 'William Ramsay, setelah menemukan Kr, Ne, dan Xe — Nobel Kimia 1904',
                visual: '🧪',
                history: [
                    { year: '1898', event: 'Krypton nyata ditemukan oleh Ramsay & Travers dari penguapan udara cair', person: 'William Ramsay & Morris Travers' },
                    { year: '1943', event: 'Kriptonit fiksi muncul di serial radio Superman — karena aktor butuh cuti', person: 'Radio Superman production' },
                    { year: '1949', event: 'Kriptonit masuk ke komik pertama kali — dijadikan kelemahan permanen Superman', person: 'DC Comics' },
                    { year: '2007', event: 'Mineralogist menemukan mineral baru — komposisi kimia persis kriptonit komik. Berwarna putih, tidak hijau.', person: 'Natural History Museum London' },
                ],
            },
            {
                type: 'step',
                title: 'Kristal Radioaktif Bercahaya Hijau — Ini Nyata',
                body: 'Kriptonit sering digambarkan sebagai kristal hijau bercahaya. Realitanya ada mineral radioaktif yang benar-benar bercahaya — dan jauh lebih mengerikan dari fiksi.<br><br><b>Uranium glass:</b> Kaca yang mengandung uranium oksida bercahaya hijau terang di bawah UV karena fluoresensi uranium. Dibuat massal di abad ke-19 sebagai kaca dekoratif — termasuk piring makan, gelas wine, dan perhiasan. Masih radioaktif hari ini.<br><br><b>Radium paint:</b> Cat berbasis radium yang bercahaya dalam gelap, digunakan di jam tangan militer WW1 dan WW2. Para pekerja (terutama wanita, disebut "Radium Girls") menjilatnya untuk merapikan kuas — dan mati dalam penyakit mengerikan bertahun-tahun kemudian.',
                visual: '☢️',
                highlight: 'Uranium glass: nyata, bercahaya hijau di UV, dijual sebagai peralatan makan abad 19 · masih radioaktif hari ini',
            },
            {
                type: 'step',
                title: 'Bisa Radiasi Spesifik Melemahkan Makhluk dari Planet Lain?',
                body: 'Ini bagian paling menarik: konsepnya secara prinsip ilmiah <i>masuk akal</i>.<br><br>Radiasi pengion (alfa, beta, gamma, sinar-X) merusak DNA, mengganggu sinyal saraf, dan pada dosis cukup tinggi melumpuhkan sistem biologis apapun. Jika Superman adalah makhluk biologis dari planet lain dengan biokimia berbeda, bisa saja jenis radiasi tertentu yang aman bagi manusia sangat merusak bagi sel kryptoniannya.<br><br>Faktanya, di Bumi ada contoh analogi: bakteri Deinococcus radiodurans tahan radiasi 3.000× dosis mematikan manusia — karena biokimianya berbeda. Sebaliknya, ada organisme yang sangat sensitif terhadap radiasi yang manusia tolerir. Prinsip "radiasi spesifik melemahkan makhluk spesifik" = ilmiah.',
                visual: '🧬',
                highlight: 'Prinsip kriptonit: ilmiah · Radiasi spesifik merusak biokimia spesifik · Deinococcus: tahan 3.000× dosis mematikan manusia',
            },
            {
                type: 'scale',
                title: 'Kr-85: Isotop Krypton Radioaktif yang Sudah Ada di Atmosfer',
                body: 'Krypton-85 (Kr-85) adalah isotop radioaktif krypton yang dihasilkan dalam reaktor nuklir sebagai produk fisi. Half-life: 10.76 tahun. Sejak era nuklir dimulai 1945, kadar Kr-85 di atmosfer global naik secara signifikan.<br><br>Ini artinya: ada versi radioaktif dari elemen yang namanya dipakai kriptonit — dan sudah menyebar ke seluruh atmosfer. Konsentrasinya masih jauh di bawah ambang bahaya bagi manusia. Tapi fakta bahwa "kryptonite radioaktif" dalam versi kehidupan nyata sudah ada di udara yang kamu hirup adalah detail yang cukup mengganggu pikiran.',
                visual: '🌍',
                highlight: 'Kr-85: isotop krypton radioaktif · dihasilkan reaktor nuklir · sudah ada di atmosfer global · half-life 10.76 tahun',
            },
            {
                type: 'impact',
                title: 'Verdict: Konsep Kriptonit = Lebih Ilmiah dari yang Dikira',
                body: 'Kriptonit adalah satu-satunya MacGuffin fiksi ilmiah yang konsepnya paling bisa dipertahankan secara sains. Mengapa?<br><br>1. Mineral radioaktif bercahaya: ada di Bumi (uranium glass, pitchblende).<br>2. Kristal dari planet asing: konsisten dengan mineral ekstraterestrial (meteorit punya komposisi unik).<br>3. Radioaktivitas yang spesifik melemahkan organisme tertentu: prinsipnya ilmiah.<br>4. Isotop krypton radioaktif: benar-benar ada (Kr-85).<br><br>Yang tidak ilmiah: skala dramanya. Kriptonit melemahkan Superman dalam hitungan detik — tidak ada radiasi yang bekerja secepat itu kecuali dalam dosis yang membunuh manusia biasa lebih cepat lagi.',
                visual: '🏆',
                history: [
                    { year: '1898', event: 'Krypton nyata ditemukan — gas mulia tak berbahaya', person: 'William Ramsay' },
                    { year: '1943', event: 'Kriptonit lahir di radio — dari kebutuhan jadwal cuti, jadi ikon fiksi ilmiah', person: 'Radio Superman' },
                    { year: '2007', event: 'Mineral baru ditemukan dengan formula NaSiB₃O₆F — persis komposisi kriptonit komik. Diberi nama Jadarite.', person: 'Natural History Museum London' },
                ],
                highlight: 'Mineral radioaktif bercahaya: NYATA · Isotop Kr radioaktif: NYATA · Konsep spesifisitas radiasi: ILMIAH · Skalanya yang tidak realistis',
            },
        ],
    },

    // ── FIKSI & SAINS: UNOBTANIUM ───────────────────────────────────────────
    {
        id: 'unobtanium',
        slides: [
            {
                type: 'hook',
                title: '"Unobtanium" — Kata Ini Sudah Digunakan Insinyur Nyata Sejak 1950-an',
                body: 'James Cameron menggunakan kata "unobtanium" di Avatar (2009) sebagai nama mineral misterius yang bernilai $20 juta per kilogram di planet Pandora. Terdengar seperti nama yang baru diciptakan? Salah.<br><br>Insinyur dan ilmuwan material telah menggunakan kata "unobtanium" secara informal sejak setidaknya 1950-an — untuk menyebut material hipotetis dengan sifat-sifat yang diinginkan namun belum bisa dibuat atau diperoleh: kekuatan sempurna, bobot nol, konduktivitas tanpa hambatan.<br><br>Cameron mengambil istilah industri nyata dan menjadikannya fiksi. Lingkaran penuh.',
                visual: '💎',
                animKey: 'anim-unobtanium-hook',
                highlight: '"Unobtanium" adalah kata slang insinyur sejak 1950-an · Cameron meminjamnya untuk Avatar · lingkaran penuh',
            },
            {
                type: 'history',
                title: 'Superkonduktor: Unobtanium yang Sudah Mulai Kita Dapatkan',
                body: 'Dalam Avatar, unobtanium mengambang di medan magnet — persis seperti superkonduktor. Dan ini bukan fiksi murni.<br><br>Tahun 1911, Heike Kamerlingh Onnes mendinginkan merkuri hingga hampir nol absolut (-269°C) dan menemukan hambatan listriknya tiba-tiba hilang sempurna: superkonduktivitas. Arus bisa mengalir selamanya tanpa rugi energi. Magnet di atas superkonduktor melayang sempurna — efek Meissner.<br><br>Masalah klasiknya: harus didinginkan hampir ke nol absolut, biaya mahal. Impian material science adalah "superkonduktor suhu kamar" — ini yang benar-benar layak disebut unobtanium nyata.',
                quote: 'Hambatan listrik merkuri pada 4.2 K adalah... nol.',
                quoteAuthor: 'Heike Kamerlingh Onnes, catatan lab 1911 — kata-kata paling understated dalam sejarah fisika',
                visual: '🧲',
                history: [
                    { year: '1911', event: 'Kamerlingh Onnes: superkonduktivitas ditemukan di Hg pada 4.2 K. Nobel 1913.', person: 'Heike Kamerlingh Onnes' },
                    { year: '1986', event: 'Bednorz & Müller: superkonduktor "suhu tinggi" pertama di La-Ba-Cu-O pada 35 K. Nobel 1987.', person: 'Bednorz & Müller' },
                    { year: '2023', event: 'LK-99 diklaim sebagai superkonduktor suhu kamar — direplikasi, terbukti bukan. Pencarian masih berlanjut.', person: 'Tim Korea Selatan' },
                    { year: 'Target riset', event: 'Superkonduktor suhu kamar = "unobtanium" nyata yang dikejar seluruh komunitas material science', person: 'Global research community' },
                ],
            },
            {
                type: 'step',
                title: 'Flotasi Magnetik: Sudah Ada, Tanpa Unobtanium',
                body: 'Di Avatar, gunung-gunung "Hallelujah" mengambang karena deposit unobtanium superkonduktor di bawahnya berinteraksi dengan medan magnet planet. Ini adalah penjelasan yang secara prinsip fisika benar.<br><br>Efek Meissner pada superkonduktor benar-benar membuat benda melayang di atas magnet — atau sebaliknya. Di laboratorium, ini bisa dicapai dengan nitrogen cair (murah, -196°C). Kereta maglev menggunakan versi berbeda: magnet biasa yang diatur oleh elektronik cepat.<br><br>Kereta maglev Shanghai berlari 430 km/jam tanpa roda — murni mengambang di medan mag. Bukan unobtanium, tapi superkonduktor dan elektromagnet yang sudah kita kuasai.',
                visual: '🚄',
                highlight: 'Efek Meissner superkonduktor = flotasi nyata · Maglev Shanghai: 430 km/jam tanpa menyentuh rel · nitrogen cair cukup',
            },
            {
                type: 'step',
                title: 'Niobium: Superkonduktor yang Sudah Ada dan Mengubah Dunia',
                body: 'Tidak perlu ke Pandora. Niobium (Nb, Z=41) adalah superkonduktor yang kita gunakan setiap hari — tanpa kamu tahu.<br><br>MRI di rumah sakit menggunakan magnet superkonduktor niobium-titanium dalam helium cair untuk menghasilkan medan 1.5–3 Tesla. Akselerator partikel CERN menggunakan ribuan magnet Nb-Ti superkonduktor senilai miliaran dollar untuk membelokkan proton ke kecepatan mendekati cahaya.<br><br>Nb bukan gratis — tapi bukan unobtanium juga. Brazil memproduksi 90% niobium dunia. Ini salah satu contoh terbaik: material "ajaib" yang ternyata sudah ada dan sudah mengubah dunia.',
                visual: '🏥',
                highlight: 'Niobium-Titanium = superkonduktor MRI dan CERN · Brazil kuasai 90% produksi dunia · ada dan mengubah dunia',
            },
            {
                type: 'scale',
                title: 'Bahan Bakar Senilai $20 Juta/kg — Sudah Ada di Bumi',
                body: 'Di Avatar, unobtanium bernilai $20 juta per kilogram. Di Bumi nyata, material paling mahal per kilogram sudah ada:<br><br>• Antimatter: ~$62,5 triliun per gram (tapi belum bisa disimpan dalam jumlah bermakna)<br>• Californium-252: ~$27 juta per gram — isotop radioaktif langka dari akselerator nuklir<br>• Plutonium-238 grade luar angkasa: ~$50.000 per gram (untuk generator RTG wahana antariksa)<br>• Rhodium: ~$730 per gram (logam platina paling mahal saat ini)<br><br>Unobtanium fiksi ($20 juta/kg = $20.000/gram) ternyata sudah bisa diacungi jari oleh beberapa material nyata.',
                visual: '💰',
                highlight: 'Californium-252: $27 juta/gram nyata · Antimatter: $62.5 triliun/gram · Unobtanium $20.000/gram terasa murah',
            },
            {
                type: 'impact',
                title: 'Verdict: Unobtanium Paling Nyata = Superkonduktor Suhu Kamar',
                body: 'Sifat-sifat unobtanium Avatar — mengambang di medan magnet, nilai luar biasa tinggi, penambangan ekstrem — semuanya punya analog nyata dalam sains material dan energi.<br><br>Yang paling mungkin membuat kita benar-benar kaya di masa depan bukan mineral planet lain. Yang paling dekat dengan "unobtanium nyata" adalah superkonduktor suhu kamar: jika kita berhasil membuatnya, transmisi listrik tanpa rugi, motor yang tidak pernah panas, dan baterai dengan densitas energi raksasa — mengubah peradaban seperti yang tidak pernah terjadi sejak listrik ditemukan.',
                visual: '🌟',
                history: [
                    { year: '1911', event: 'Superkonduktivitas ditemukan — sifat yang persis dipakai unobtanium Avatar', person: 'Kamerlingh Onnes' },
                    { year: '2009', event: 'Avatar rilis — unobtanium popularized ke miliaran penonton dunia', person: 'James Cameron' },
                    { year: '2023', event: 'LK-99 diklaim superkonduktor suhu kamar — tidak terbukti, tapi menunjukkan betapa besar taruhan teknologinya', person: 'Komunitas material science global' },
                ],
                highlight: 'Flotasi magnetik: NYATA · Superkonduktor: NYATA · Unobtanium suhu kamar = "holy grail" material science yang masih dicari',
            },
        ],
    },

    // ── FIKSI & SAINS: ADAMANTIUM ───────────────────────────────────────────
    {
        id: 'adamantium',
        slides: [
            {
                type: 'hook',
                title: 'Logam yang Tidak Bisa Rusak — dan Apa yang Hukum Fisika Katakan',
                body: 'Rangka Wolverine dilapisi adamantium — logam fiktif yang hampir tidak bisa dihancurkan, tajam sempurna, dan tidak bisa bengkok. Cakar adamantium memotong apa saja.<br><br>Pertanyaan pertama yang muncul di benak fisikawan: jika adamantium tidak bisa dipotong atau dihancurkan dari luar, bagaimana dia dipotong untuk membentuk cakar itu di tempat pertama? Ini paradoks yang diabaikan fiksi.<br><br>Tapi pertanyaan lebih menarik: logam seperkuat apa yang sudah ada? Dan apa batas paling fundamental dari "logam tidak bisa hancur"?',
                visual: '🔩',
                animKey: 'anim-adamantium-hook',
                highlight: 'Adamantium: tidak bisa hancur dari luar — tapi dibentuk jadi cakar, bagaimana? Paradoks yang diabaikan Marvel',
            },
            {
                type: 'step',
                title: 'Logam Terkeras yang Sudah Kita Buat',
                body: 'Dalam material science nyata, "kekerasan" dan "kekuatan" adalah hal berbeda:<br><br><b>Wolfram/Tungsten (W, Z=74):</b> Titik leleh tertinggi semua logam (3.422°C). Digunakan di kepala roket, filamen lampu pijar. Tapi rapuh — mudah pecah meski keras.<br><br><b>Osmium (Os, Z=76):</b> Logam paling padat (22.59 g/cm³) dan salah satu yang paling keras. Tapi juga rapuh.<br><br><b>Rhenium (Re):</b> Titik leleh tertinggi kedua (3.186°C), lebih ulet dari W. Di turbin jet generasi terbaru.<br><br><b>Material komposit:</b> Boron karbida + tungsten karbida + titanium. Tidak ada logam murni yang punya semua sifat adamantium sekaligus — kekuatan, kekerasan, keuletan.',
                visual: '⚙️',
                highlight: 'Tungsten: titik leleh 3.422°C — tertinggi semua logam · Osmium: paling padat 22.59 g/cm³ · tapi keduanya rapuh',
            },
            {
                type: 'step',
                title: 'Masalah Sebenarnya: Senjata Paling Tajam Bukan dari Logam',
                body: 'Cakar adamantium memotong baja. Tapi senjata paling tajam yang benar-benar ada di dunia bukan dari logam.<br><br>Pisau obsidian—batuan vulkanik—bisa diasah hingga ketajaman satu molekul (10 Angstrom tebal). Lebih tajam dari skalpel stainless steel terbaik. Dokter bedah jantung tertentu masih menggunakannya untuk sayatan termikro karena lebih sedikit merobek sel.<br><br>Pisau karbon nanotube secara teori bisa mencapai ketajaman satu atom. Belum diproduksi dalam skala berguna, tapi secara fisika tidak ada hambatan prinsip.<br><br>Ironisnya, "logam paling tajam" kalah dari batu vulkanik dalam hal ketajaman absolut.',
                visual: '🗡️',
                highlight: 'Pisau obsidian: ketajaman 10 Angstrom = 10 kali diameter atom · lebih tajam dari skalpel baja · dokter bedah masih pakai',
            },
            {
                type: 'scale',
                title: 'Berapa Berat Rangka Adamantium Wolverine?',
                body: 'Marvel menyebut rangka adamantium Wolverine menambah sekitar 25-30 kg berat tubuhnya. Kita bisa bandingkan dengan logam nyata:<br><br>Jika "rangka + cakar" itu dibuat dari tungsten (paling berat dan kuat): massa sama dengan 30 kg W = volume sekitar 1.560 cm³ — muat di rangka tubuh manusia, tapi tekanannya pada tulang sendi akan luar biasa besar.<br><br>Dari titanium medical grade (Ti-6Al-4V, dipakai implan tulang): 30 kg titanium punya volume ~6.700 cm³ — terlalu besar untuk dimasukkan dalam tubuh.<br><br>Wolverine dengan rangka tungsten 30 kg: setiap kali berlari, sendi pinggulnya menanggung ~150 kg beban ekstra dari dinamika gerak. Faktor penyembuhan super memang dibutuhkan.',
                visual: '💪',
                highlight: 'Rangka W 30 kg = 1.560 cm³ volume · tekanan pada sendi = 150 kg ekstra per langkah · penyembuhan super bukan kemewahan, keharusan',
            },
            {
                type: 'impact',
                title: 'Verdict: Logam Paling Mendekati Adamantium Sudah Ada',
                body: 'Tidak ada satu logam yang punya semua sifat adamantium. Tapi dunia material science sudah menciptakan alloy dan komposit yang menggabungkan sifat-sifat itu secara keseluruhan:<br><br>• <b>Titanium-6Al-4V:</b> Kekuatan baja, berat aluminium, biokompatibel. Di dalam implan tulang dan baju tempur premium.<br>• <b>Tungsten karbida:</b> Kekerasan mendekati berlian, digunakan mata bor pengeboran minyak.<br>• <b>Maraging steel:</b> Alloy baja ultra-kuat yang digunakan di poros turbin jet dan selubung roket.<br><br>Wolverine mungkin fiksi. Tapi tentara dan astronot modern menggunakan material yang, jika dilihat 100 tahun lalu, terdengar persis seperti "logam yang tidak mungkin ada."',
                visual: '🏆',
                history: [
                    { year: '1962', event: 'Maraging steel dikembangkan — ultra-kekuatan untuk aplikasi aerospace yang tidak terbayangkan sebelumnya', person: 'International Nickel Company' },
                    { year: '1975', event: 'Adamantium pertama kali muncul di komik Wolverine sebagai logam sempurna', person: 'Marvel Comics' },
                    { year: '2000an', event: 'Ti-6Al-4V digunakan sebagai tulang buatan — logam di dalam tubuh manusia, persis visi adamantium', person: 'Medis & Aerospace' },
                ],
                highlight: 'Titanium implan : di dalam tubuh manusia nyata · Tungsten karbida: hampir sekeras berlian · Maraging steel: di roket',
            },
        ],
    },

    // ── FIKSI & SAINS: DILITHIUM ────────────────────────────────────────────
    {
        id: 'dilithium',
        slides: [
            {
                type: 'hook',
                title: 'Star Trek Menyebut "Dilithium" — Satu Unsur yang Tidak Ada di Tabel Periodik',
                body: 'Di Star Trek, pesawat antarbintang Enterprise menggunakan kristal dilithium sebagai "katalis" yang mengontrol reaksi materi-antimateri untuk menggerakkan mesin warp drive. Tanpa kristal dilithium, tidak ada warp, tidak ada perjalanan antarbintang.<br><br>Satu masalah kecil: dilithium dengan z atmo ganda tidak ada di tabel periodik. "Dilithium" secara kimia berarti molekul dua atom litium terikiat — Li₂. Dan Li₂ memang ada! Tapi sifatnya jauh dari kristal pengontrol antimateri.<br><br>Tapi perjalanan dari fiksi ini menjadi cerita sains yang sangat nyata — karena antimateri, fusi nuklir, dan fisika plasma yang mendasarinya adalah hal yang sedang kita kerjakan hari ini.',
                visual: '🚀',
                animKey: 'anim-dilithium-hook',
                highlight: '"Dilithium" di Star Trek = Li₂ molekul — nyata tapi tidak berguna · Antimateri sebagai bahan bakar: sangat nyata sangat mahal',
            },
            {
                type: 'history',
                title: 'Antimateri: Ditheorikan 1928, Ditemukan 1932, Masih Belum Bisa Disimpan',
                body: 'Tahun 1928. Paul Dirac menyatukan mekanika kuantum dengan relativitas khusus Einstein. Persamaannya menghasilkan prediksi ganjil: untuk setiap partikel, harus ada "cerminan" dengan muatan berlawanan. Elektron dengan muatan positif. Proton dengan muatan negatif.<br><br>Empat tahun kemudian, Carl Anderson di Caltech menemukan jejak partikel misterius di cloud chamber yang berbelok berlawanan dari elektron di medan magnet. Positron — antimateri pertama yang diamati langsung.<br><br>Nobel 1936 untuk Anderson. Nobel 1933 untuk Dirac. Dan sejak saat itu, kita tahu bahwa antimateri bukan fiksi — tapi membuat dan menyimpannya adalah tantangan terbesar dalam fisika eksperimental.',
                quote: 'Equations that are beautiful often describe nature more accurately than equations derived solely to fit experiments.',
                quoteAuthor: 'Paul Dirac — yang persamaannya memprediksi antimateri sebelum ditemukan',
                visual: '👨‍🔬',
                history: [
                    { year: '1928', event: 'Dirac: persamaan relativistik kuantum memprediksi keberadaan antipartikel', person: 'Paul Dirac' },
                    { year: '1932', event: 'Carl Anderson: positron (anti-elektron) ditemukan di cloud chamber. Nobel 1936.', person: 'Carl Anderson' },
                    { year: '1955', event: 'Antiproton ditemukan di Bevatron Berkeley — konfirmasi antimateri baryonic', person: 'Segrè & Chamberlain' },
                    { year: '1995', event: 'CERN: anti-hidrogen pertama dibuat — atom antimateri pertama', person: 'CERN LEAR experiment' },
                    { year: '2011', event: 'ALPHA experiment CERN: anti-hidrogen disimpan selama 1000 detik pertama kali', person: 'CERN ALPHA' },
                ],
            },
            {
                type: 'step',
                title: 'Materi-Antimateri: Bahan Bakar Paling Padat yang Bisa Ada',
                body: 'Star Trek benar dalam satu hal: reaksi materi-antimateri adalah sumber energi dengan densitas tertinggi yang diizinkan hukum fisika.<br><br>Ketika 1 gram materi bertemu 1 gram antimateri, keduanya annihilasi — 100% massa berubah menjadi energi (E=mc²). Energinya: ~1,8 × 10¹⁴ joule. Dibanding:<br>• 1 gram TNT: ~4.200 joule<br>• 1 gram uranium dalam reaktor nuklir: ~8,2 × 10¹⁰ joule<br>• 1 gram H dalam bom hidrogen: ~6,3 × 10¹¹ joule<br><br>2 gram materi+antimateri = lebih dari 1.000 bom Hiroshima. Inilah mengapa ini "bahan bakar ideal" secara teori — dan mengapa menyimpannya adalah masalah terbesar.',
                visual: '💥',
                highlight: '2g materi + antimateri = >1.000 bom Hiroshima · 100% konversi massa → energi · tertinggi yang diizinkan E=mc²',
            },
            {
                type: 'step',
                title: 'Mengapa Kita Tidak Bisa Menyimpan Antimateri',
                body: 'Masalah fundamental: antimateri bereaksi dengan materi apapun yang menyentuhnya — termasuk wadah penyimpanannya. Kamu tidak bisa menaruhnya di botol kaca atau baja.<br><br>CERN menyimpan anti-hidrogen dalam "perangkap magnetik" — medan magnet yang mengisolasi antipartikel dari dinding vakum menggunakan efek Penning. Tapi hanya bisa menyimpan hitungan atom selama menit atau jam.<br><br>Biaya produksi: 1 miligram antimateri di CERN membutuhkan ~$25 miliar dan dekade produksi. Seluruh antimateri yang pernah dibuat manusia tidak cukup untuk merebus secangkir teh.<br><br>Star Trek membutuhkan ton antimateri per perjalanan. Kesenjangan ini adalah yang membuat warp drive "masih fiksi."',
                visual: '🚫',
                highlight: 'Seluruh antimateri yang pernah dibuat manusia tidak cukup untuk merebus secangkir teh · $25 miliar per miliigram di CERN',
            },
            {
                type: 'scale',
                title: 'Litium Nyata: Bukan Bahan Bakar Warp, Tapi Mengubah Energi Dunia',
                body: 'Dilithium fiksi = kristal pengontrol antimateri. Litium nyata (Li, Z=3) = logam terkait yang sudah mengubah dunia dengan cara yang benar-benar nyata.<br><br>Baterai lithium-ion yang ada di HPmu, laptopmu, mobilmu — semuanya berbasis perpindahan ion Li⁺ antara elektroda. Litium adalah kunci transisi energi global dari bahan bakar fosil ke listrik: EV Tesla, panel surya dengan penyimpanan energi, grid-scale battery storage.<br><br>Bolivia, Argentina, dan Chile menguasai "Segitiga Litium" — ~60% cadangan litium dunia. Ini sudah menjadi geopolitik nyata: siapa yang kuasai litium akan punya leverage besar di era energi bersih.',
                visual: '🔋',
                highlight: 'Litium di HP, laptop, EV kamu = ion Li⁺ · Bolivia-Argentina-Chile kuasai 60% cadangan · geopolitik litium = nyata hari ini',
            },
            {
                type: 'impact',
                title: 'Verdict: Antimateri Nyata, Warp Drive = Butuh Fisika Baru',
                body: 'Star Trek paling akurat dari semua fiksi ilmiah dalam satu hal penting: ia menggunakan antimateri sebagai sumber energi — dan antimateri adalah nyata, terukur, dan benar-benar punya densitas energi seperti yang digambarkan.<br><br>Yang fiksi bukan antimate — tapi "kristal dilithium pengontrol" dan warp drive-nya. Untuk warp drive bekerja, dibutuhkan manipulasi ruang-waktu dengan energi negatif — sesuatu yang kita tidak tahu bisa dibuat.<br><br>Tapi fisika nyata sudah mengambil banyak dari warisan Star Trek: terminologi propulsi ion (digunakan di wahana antariksa nyata), magnetic confinement plasma (digunakan di reaktor fusi ITER), dan anti-hydrogen trapping (dilakukan CERN). Star Trek mungkin tidak ada di sana dulu, tapi ia menunjukkan arahnya.',
                visual: '⭐',
                history: [
                    { year: '1966', event: 'Star Trek pertama tayang — memperkenalkan dilithium, warp, dan antimateri ke budaya populer', person: 'Gene Roddenberry' },
                    { year: '1995', event: 'CERN membuat atom anti-hidrogen pertama — langkah nyata menuju penyimpanan antimateri', person: 'CERN' },
                    { year: '2023', event: 'ITER (reaktor fusi) sedang dibangun di Prancis — plasma confinement persis seperti yang dijelaskan di Star Trek TNG', person: 'ITER Organization' },
                ],
                highlight: 'Antimateri: NYATA · Densitas energi materi-antimateri: SESUAI E=mc² · Dilithium pengontrol: fiksi · Warp drive: butuh fisika baru',
            },
        ],
    },
];
