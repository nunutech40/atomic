import { navigate } from '../core/router';

/* ════════════════════════════════════════════════════════════════════════
   ATOM HISTORY v3 — Scroll × Slide Hybrid
   8 chapter sections (vertical scroll-snap).
   Each chapter: 2–4 horizontal internal slides (deeper detail).
   Atom model persists on right, content slides on left.
   ════════════════════════════════════════════════════════════════════════ */

interface InnerSlide {
    eyebrow?: string;
    title: string;
    body: string;           // HTML
    highlight?: string;
    highlightLabel?: string;
}

interface Chapter {
    id: string;
    chapterNum: string;     // 'Prolog' | 'I' | 'II' …
    chapterName: string;
    year: string;
    protagonist: string;
    color: string;          // CSS accent color
    model: string;          // model key
    slides: InnerSlide[];
}

/* ─────────────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────────────── */
const CHAPTERS: Chapter[] = [

    /* ══ PROLOG ══════════════════════════════════════════ */
    {
        id: 'prolog', chapterNum: '⬡', chapterName: 'Prolog',
        year: '—', protagonist: '', color: '#7c73ff',
        model: 'prolog',
        slides: [
            {
                eyebrow: 'Sebelum Segalanya',
                title: '2.400 tahun perdebatan\ntentang sesuatu yang tidak\npernah bisa dilihat.',
                body: `<p>Kamu sedang menyentuh sesuatu sekarang. Meja. Kursi. Udara. Semua terasa nyata.</p>
                       <p>Tapi ada satu pertanyaan yang menyiksa para pemikir terbesar sepanjang sejarah manusia:</p>
                       <p><em>Jika kamu terus memotong materi menjadi bagian yang lebih kecil — apakah ada batasnya? Atau materi bisa dibagi selamanya?</em></p>
                       <p>Ini bukan pertanyaan akademis. Jawabannya mengubah cara manusia memahami realitas itu sendiri.</p>`,
                highlight: '"Dua jalan bercabang: materi bisa dibagi selamanya — atau ada unit terkecil yang tak bisa dibagi lagi."',
                highlightLabel: 'Pertanyaan yang mengawali 2.400 tahun perdebatan',
            },
        ],
    },

    /* ══ BABAK I — DEMOCRITUS ════════════════════════════ */
    {
        id: 'democritus', chapterNum: 'I', chapterName: 'Democritus',
        year: '~450 SM', protagonist: 'Leucippus & Democritus', color: '#c8a040',
        model: 'solid-demo',
        slides: [
            {
                eyebrow: 'Yunani Kuno · ~450 SM',
                title: 'Atomos —\nYang Tak Dapat Dibagi',
                body: `<p>Leucippus adalah yang pertama mencetuskan ide: ada batas terkecil dari materi. Democritus, muridnya, mengembangkan ini menjadi teori lengkap.</p>
                       <p>Ia menyebutnya <strong>atomos</strong> — dari bahasa Yunani <em>a-</em> (tidak) + <em>tomos</em> (memotong). <strong>Sesuatu yang tidak dapat dipotong lagi.</strong></p>
                       <p>Menurut Democritus, semua yang ada di alam semesta hanyalah atom-atom yang bergerak di ruang kosong (<em>kenon</em>). Perbedaan antara batu, air, dan udara? Hanya bentuk, ukuran, dan susunan atom yang berbeda.</p>`,
                highlight: '"Rasa manis hanya ada karena konvensi, rasa pahit hanya karena konvensi — hanya atom dan ruang kosong yang sungguh-sungguh ada."',
                highlightLabel: '— Democritus, ~400 SM',
            },
            {
                eyebrow: 'Properti Atom Menurut Democritus',
                title: 'Teori yang Mengejutkan\nuntuk Zamannya',
                body: `<ul class="ah-list">
                         <li><span class="ah-list-num">01</span><div><strong>Atom bersifat abadi</strong> — Tidak bisa diciptakan atau dihancurkan. Jumlahnya selalu tetap sejak permulaan alam semesta.</div></li>
                         <li><span class="ah-list-num">02</span><div><strong>Atom bergerak terus-menerus</strong> — Di ruang hampa, atom bergerak bebas. Tabrakan antar atom membentuk dunia yang kita lihat.</div></li>
                         <li><span class="ah-list-num">03</span><div><strong>Atom berbeda ukuran dan bentuk</strong> — Api tersusun dari atom kecil dan bulat. Besi dari atom yang lebih kasar dan saling mengait.</div></li>
                         <li><span class="ah-list-num">04</span><div><strong>Jiwa pun terbuat dari atom</strong> — Atom jiwa adalah yang paling halus dan bulat, tersebar di seluruh tubuh.</div></li>
                       </ul>`,
                highlight: 'Atom tidak memiliki warna, rasa, atau bau — semua sensasi itu adalah hasil interaksi atom dengan indera kita. Insight yang baru dibuktikan ~2.300 tahun kemudian.',
                highlightLabel: 'Benar hingga hari ini',
            },
            {
                eyebrow: 'Plot Twist · ~400 SM',
                title: 'Satu Orang Menguburnya\nSelama 2.000 Tahun',
                body: `<p>Aristoteles — murid Plato, guru Alexander the Great — adalah pemikir paling berpengaruh di dunia Barat. Dan ia <strong>menolak total</strong> teori atom.</p>
                       <p>Argumennya: ruang hampa (<em>kenon</em>) tidak mungkin ada. "Alam membenci kekosongan" (<em>horror vacui</em>). Dan materi terdiri dari 4 elemen: <strong>Tanah, Air, Udara, Api</strong>.</p>
                       <p>Aristoteles tidak membuktikan Democritus salah. Ia hanya lebih berpengaruh. Selama hampir 2.000 tahun, dunia Barat mengikuti Aristoteles — bukan karena bukti, tapi karena <strong>otoritas</strong>.</p>`,
                highlight: '"Ide Democritus dikubur bukan karena salah — tapi karena kalah populer." Inilah bahaya terbesar dalam sejarah sains.',
                highlightLabel: '↯ Pelajaran Terbesar Sejarah Sains',
            },
        ],
    },

    /* ══ BABAK II — DALTON ═══════════════════════════════ */
    {
        id: 'dalton', chapterNum: 'II', chapterName: 'Dalton',
        year: '1803', protagonist: 'John Dalton', color: '#5090d0',
        model: 'billiard',
        slides: [
            {
                eyebrow: 'Manchester · Awal 1800-an',
                title: 'Dua Ribu Tahun Kemudian,\nSains Akhirnya Bicara',
                body: `<p>Revolusi industri sedang berlangsung. Pabrik-pabrik membutuhkan kimia yang bisa diprediksi — bukan filsafat. Dan di sana, seorang guru matematika bernama <strong>John Dalton</strong> mengamati sesuatu yang ganjil.</p>
                       <p>Ketika dua unsur bergabung membentuk senyawa, perbandingan massanya selalu berupa <strong>bilangan bulat sederhana</strong>. Karbon dan oksigen selalu bergabung dalam rasio tetap — bukan sembarang.</p>
                       <p>Ini bukan kebetulan. Ini pola. Dan untuk menjelaskan pola ini, Dalton membuat lompatan logika yang mengubah kimia selamanya.</p>`,
                highlight: 'Hukum Kelipatan Perbandingan: jika dua unsur bergabung membentuk lebih dari satu senyawa, massa salah satunya selalu dalam rasio bilangan bulat sederhana.',
                highlightLabel: 'Hukum Dalton — Titik Awal Teori Atom Modern',
            },
            {
                eyebrow: 'Postulat Dalton · 1803',
                title: 'Lima Dalil yang\nMengubah Kimia',
                body: `<ul class="ah-list">
                         <li><span class="ah-list-num">01</span><div>Semua materi tersusun dari <strong>atom yang tidak dapat dibagi lagi</strong>.</div></li>
                         <li><span class="ah-list-num">02</span><div>Semua atom dari unsur yang sama memiliki <strong>massa yang sama persis</strong>.</div></li>
                         <li><span class="ah-list-num">03</span><div>Atom dari unsur berbeda memiliki <strong>massa yang berbeda</strong>.</div></li>
                         <li><span class="ah-list-num">04</span><div>Atom bergabung dalam <strong>rasio bilangan bulat sederhana</strong> membentuk senyawa.</div></li>
                         <li><span class="ah-list-num">05</span><div>Atom tidak dapat diciptakan atau dihancurkan — <strong>hanya bergabung ulang</strong> dalam reaksi kimia.</div></li>
                       </ul>`,
                highlight: 'Ironi sejarah: Dalton adalah penderita buta warna pertama yang terdokumentasi dengan baik. Ia tidak bisa membedakan warna — namun "melihat" perbedaan atom yang tak kasat mata.',
                highlightLabel: '↯ Ironi Dalton',
            },
            {
                eyebrow: 'Yang Benar — Yang Keliru',
                title: 'Teori Revolusioner\nyang Tidak Sempurna',
                body: `<div class="ah-compare">
                         <div class="ah-compare-col correct">
                           <div class="ah-compare-header">✓ Masih Benar Sampai Sekarang</div>
                           <ul>
                             <li>Atom dari unsur berbeda memiliki massa berbeda</li>
                             <li>Atom bergabung dalam rasio tetap</li>
                             <li>Reaksi kimia adalah penataan ulang atom</li>
                           </ul>
                         </div>
                         <div class="ah-compare-col wrong">
                           <div class="ah-compare-header">✗ Ternyata Keliru</div>
                           <ul>
                             <li>Atom tidak bisa dibagi — <em>bisa (elektron, proton, neutron)</em></li>
                             <li>Atom dari unsur sama selalu identik — <em>isotop membuktikan sebaliknya</em></li>
                             <li>Atom tidak bisa diciptakan — <em>reaksi nuklir bisa mengubahnya</em></li>
                           </ul>
                         </div>
                       </div>`,
                highlight: 'Meski tidak sempurna, model Dalton cukup akurat untuk membuat kimia menjadi sains yang bisa diprediksi dan diulang — dan itu cukup untuk mengubah dunia industri.',
                highlightLabel: 'Mengapa Model yang Tidak Sempurna Tetap Berharga',
            },
        ],
    },

    /* ══ BABAK III — THOMSON ═════════════════════════════ */
    {
        id: 'thomson', chapterNum: 'III', chapterName: 'Thomson',
        year: '1897', protagonist: 'J.J. Thomson', color: '#9060c0',
        model: 'plum',
        slides: [
            {
                eyebrow: 'Cavendish Laboratory · 1897',
                title: 'Tabung Katoda yang\nMengguncang Segalanya',
                body: `<p>J.J. Thomson sedang bermain dengan tabung kaca hampa udara berisi dua elektroda. Saat listrik dialirkan, sebuah <strong>sinar misterius</strong> muncul dari katoda (elektroda negatif).</p>
                       <p>Sinar ini bisa dibelokkan oleh medan magnet dan listrik — selalu membelok ke arah yang sama, tidak peduli bahan elektroda apa yang digunakan.</p>
                       <p>Kesimpulan Thomson: sinar ini bukan cahaya. <strong>Ia adalah partikel bermuatan negatif yang jauh lebih kecil dari atom</strong>. Dan bentuknya sama di semua unsur.</p>`,
                highlight: '"Saya sedang menemukan apa yang ada di dalam atom — dan hasilnya: atom bisa dibagi."',
                highlightLabel: '— J.J. Thomson, 1897 · Nobel Fisika 1906',
            },
            {
                eyebrow: 'Penemuan Elektron · 1897',
                title: 'Korpuskel —\nPartikel Sub-Atomik Pertama',
                body: `<p>Thomson menyebutnya "korpuskel". Orang lain kemudian menamakannya <strong>elektron</strong>.</p>
                       <p>Jika atom mengandung elektron yang bermuatan negatif, dan atom secara keseluruhan bersifat netral — maka <strong>harus ada muatan positif di suatu tempat</strong>. Tapi di mana?</p>
                       <p>Thomson mengusulkan: muatan positif tersebar merata seperti adonan roti, dan elektron tersebar di dalamnya seperti kismis. Dunia menyebutnya <strong>Model Plum Pudding</strong>.</p>`,
                highlight: 'Massa elektron hanya 1/1836 massa proton. Jika atom sebesar Bumi, elektron hanya sebesar lapangan basket. Betapa kecilnya partikel yang "membangun" dunia.',
                highlightLabel: 'Betapa kecilnya elektron',
            },
            {
                eyebrow: 'Model Plum Pudding · 1904',
                title: 'Model yang Logis —\ndan Salah Total',
                body: `<p>Model Thomson masuk akal secara logika: jika muatan negatif tersebar merata, maka muatan positif harus menyeimbangkannya — juga tersebar merata. Thomson bahkan membuktikan secara matematis bahwa model ini cocok dengan spektrum hidrogen.</p>
                       <p>Tapi ada satu masalah. Muridnya sendiri sedang melakukan eksperimen yang akan menghancurkan model ini dalam waktu kurang dari 10 tahun.</p>
                       <p><strong>Murid terbaik Thomson? Ernest Rutherford.</strong> Yang akan membuktikan bahwa gurunya sepenuhnya keliru.</p>`,
                highlight: '"Saya kira saya mengetahui struktur atom. Ternyata saya salah." — Thomson tidak pernah benar-benar menerima model nuklir Rutherford hingga akhir hayatnya.',
                highlightLabel: '↯ Ironi dalam Sains',
            },
        ],
    },

    /* ══ BABAK IV — RUTHERFORD ═══════════════════════════ */
    {
        id: 'rutherford', chapterNum: 'IV', chapterName: 'Rutherford',
        year: '1911', protagonist: 'Ernest Rutherford', color: '#e06030',
        model: 'rutherford',
        slides: [
            {
                eyebrow: 'University of Manchester · 1909',
                title: 'Eksperimen Gold Foil —\nRancangan yang Sederhana',
                body: `<p>Rutherford meminta dua asistennya — Hans Geiger dan Ernest Marsden — untuk melakukan eksperimen sederhana: <strong>tembakkan partikel alfa ke lembaran emas yang sangat tipis</strong>.</p>
                       <p>Berdasarkan model Thomson, partikel ini seharusnya menembus lembaran emas dengan sedikit atau tanpa pembelokan — karena muatan positif tersebar merata dan tipis.</p>
                       <p>Rutherford hampir tidak menyuruh Marsden melakukan ini — ia pikir hasilnya sudah bisa ditebak dan <strong>membosankan</strong>. Ia hampir melewatkan penemuan terbesar abad ke-20.</p>`,
                highlight: 'Foil emas dipilih karena bisa dibuat setipis ~1.000 atom. Detektornya: layar yang berkilap saat terkena partikel alfa — diamati dengan mata dalam kegelapan selama berhari-hari.',
                highlightLabel: 'Setup Eksperimen',
            },
            {
                eyebrow: 'Hasil yang Tidak Terduga · 1909',
                title: 'Peluru yang\nMemantul Balik',
                body: `<p>Sebagian besar partikel alfa menembus lurus — sesuai prediksi. Tapi kemudian Marsden melihat sesuatu yang tidak seharusnya terjadi:</p>
                       <p><strong>Beberapa partikel membelok dengan sudut besar. Bahkan sebagian memantul hampir lurus balik.</strong></p>
                       <p>Frekuensinya: 1 dari sekitar 8.000 partikel memantul dengan sudut lebih dari 90°.</p>
                       <p>Marsden berlari ke Rutherford. Rutherford tidak percaya. Ia menyuruh Marsden mengulang eksperimen berkali-kali. Hasilnya selalu sama.</p>`,
                highlight: '"Itu seperti menembakkan peluru 15 inci ke selembar tisu, dan peluru itu memantul balik mengenai kamu. Saya terkejut luar biasa ketika ini terjadi."',
                highlightLabel: '— Ernest Rutherford, 1911',
            },
            {
                eyebrow: 'Kesimpulan · 1911',
                title: 'Atom adalah (Hampir)\nSeluruhnya Ruang Kosong',
                body: `<p>Rutherford menghabiskan 18 bulan menghitung. Satu-satunya penjelasan yang masuk akal:</p>
                       <p>Seluruh massa positif atom terpusat di <strong>inti yang sangat kecil</strong> — ia menyebutnya nukleus. Sedangkan elektron mengorbit di sekitarnya dengan jarak proporsional yang luar biasa jauh.</p>
                       <p>Jika nukleus seukuran kelereng (1 cm), elektron terdekat berjarak <strong>satu kilometer</strong>. Di antaranya? Ruang kosong sempurna.</p>`,
                highlight: 'Atom yang menyusun tanganmu adalah 99,9999999999996% ruang kosong. Materi terasa padat bukan karena penuh — tapi karena gaya elektromagnetik menolak atom lain mendekat.',
                highlightLabel: '↯ Fakta yang Mengubah Intuisimu',
            },
            {
                eyebrow: 'Masalah Fatal Model Rutherford',
                title: 'Model yang Indah —\ntapi Memiliki Masalah Mematikan',
                body: `<p>Model Rutherford elegan: nukleus di tengah, elektron mengorbit seperti planet. Tapi ada satu masalah fatal menurut fisika klasik Maxwell:</p>
                       <p><strong>Partikel bermuatan yang berakselerasi (bergerak melingkar = berakselerasi) harus memancarkan energi elektromagnetik.</strong></p>
                       <p>Jika elektron terus memancarkan energi, ia akan spiral mengecil dan jatuh ke nukleus dalam hitungan <strong>16 picosecond</strong>. Tapi hidrogen sudah ada sejak Big Bang. Sesuatu tidak beres.</p>`,
                highlight: 'Model Rutherford sempurna dalam menjelaskan eksperimen gold foil — tapi secara teori, atom yang ia gambarkan seharusnya tidak stabil dan tidak bisa ada. Paradoks inilah yang mendorong kelahiran mekanika kuantum.',
                highlightLabel: 'Pintu Menuju Dunia Kuantum',
            },
        ],
    },

    /* ══ BABAK V — BOHR ══════════════════════════════════ */
    {
        id: 'bohr', chapterNum: 'V', chapterName: 'Bohr',
        year: '1913', protagonist: 'Niels Bohr', color: '#40a080',
        model: 'bohr',
        slides: [
            {
                eyebrow: 'Copenhagen · 1913',
                title: 'Elektron Tidak Mengikuti\nHukum Fisika Klasik',
                body: `<p>Niels Bohr, fisikawan muda Denmark yang baru magang di laboratorium Rutherford, mengusulkan ide yang radikal: <strong>Fisika klasik tidak berlaku di dalam atom.</strong></p>
                       <p>Ia terinspirasi dari teka-teki lama yang belum terpecahkan — <strong>spektrum emisi hidrogen</strong>. Ketika hidrogen dipanaskan hingga bercahaya, ia hanya memancarkan cahaya pada panjang gelombang tertentu — tidak semua warna.</p>
                       <p>4 garis spesifik: 656nm (merah), 486nm (biru-hijau), 434nm (biru-ungu), 410nm (ungu). Polanya sudah diketahui sejak 1885 — tapi tidak ada yang bisa menjelaskannya. Sampai Bohr.</p>`,
                highlight: '"Fisika klasik tidak berlaku di dunia atom. Kita butuh aturan baru." — Ide yang terdengar gila di 1913, kini menjadi pondasi seluruh kimia modern.',
                highlightLabel: 'Bohr · 1913',
            },
            {
                eyebrow: 'Postulat Bohr · 1913',
                title: 'Orbit Kuantum —\nAturan Baru yang Mengejutkan',
                body: `<ul class="ah-list">
                         <li><span class="ah-list-num">01</span><div><strong>Elektron hanya boleh ada di orbit tertentu</strong> — orbit-orbit ini memiliki energi tetap dan spesifik. Tidak ada di antara mereka.</div></li>
                         <li><span class="ah-list-num">02</span><div><strong>Selama di orbit itu, elektron tidak memancarkan energi</strong> — aturan ini melanggar fisika klasik, tapi Bohr menetapkannya sebagai postulat dasar.</div></li>
                         <li><span class="ah-list-num">03</span><div><strong>Elektron bisa lompat antar orbit</strong> — dengan menyerap foton (naik orbit) atau memancarkan foton (turun orbit). Energi foton = selisih energi antar orbit.</div></li>
                       </ul>`,
                highlight: 'Ini langsung menjelaskan spektrum hidrogen dengan tepat — garis-garis spektrum itu PERSIS sesuai selisih energi antar orbit yang Bohr hitung. Cocok hingga 4 angka desimal.',
                highlightLabel: '✓ Berhasil Sempurna untuk Hidrogen',
            },
            {
                eyebrow: 'Kegagalan Model Bohr',
                title: 'Berhasil untuk Hidrogen.\nGagal untuk Semua yang Lain.',
                body: `<p>Model Bohr adalah kemenangan besar — untuk hidrogen. Tapi ketika fisikawan mencoba menerapkannya ke helium (2 elektron) atau atom yang lebih besar: <strong>gagal total</strong>.</p>
                       <p>Tidak ada yang bisa menjelaskan <em>kenapa</em> elektron hanya boleh di orbit tertentu. Postulat Bohr benar secara empiris, tapi tidak ada landasan teori di baliknya.</p>
                       <p>Dan ada pertanyaan yang lebih mendasar: jika elektron bisa "lompat" dari satu orbit ke orbit lain secara instan — tanpa melalui ruang di antaranya — apa artinya "lokasi" sebuah elektron?</p>`,
                highlight: '"Saya berharap kepada satu orang untuk memecahkan masalah ini." — Bohr kepada Heisenberg, 1922. Jawaban itu datang 3 tahun kemudian dan mengubah segalanya.',
                highlightLabel: '↯ Pintu Menuju Mekanika Kuantum',
            },
        ],
    },

    /* ══ BABAK VI — QUANTUM ══════════════════════════════ */
    {
        id: 'quantum', chapterNum: 'VI', chapterName: 'Mekanika Kuantum',
        year: '1924–1927', protagonist: 'de Broglie · Heisenberg · Schrödinger', color: '#5060e0',
        model: 'quantum',
        slides: [
            {
                eyebrow: 'Paris · 1924 · Louis de Broglie',
                title: 'Elektron adalah\nGelombang — dan Partikel',
                body: `<p>Seorang mahasiswa PhD bernama Louis de Broglie mengajukan ide gila dalam tesisnya: <strong>jika cahaya bisa berperilaku sebagai partikel (foton), mungkin partikel seperti elektron bisa berperilaku sebagai gelombang.</strong></p>
                       <p>Ia menurunkan rumus sederhana: panjang gelombang elektron = konstanta Planck dibagi momentum elektron. Penguji tesisnya tidak tahu apa yang harus dilakukan dengan ide ini — mereka mengirimnya ke Einstein.</p>
                       <p>Einstein menjawab: <em>"Ini terlihat gila, tapi saya yakin ini benar."</em> Dua tahun kemudian, eksperimen difraksi elektron membuktikan de Broglie benar. Nobel 1929.</p>`,
                highlight: 'Nobel Fisika 1929 diberikan kepada de Broglie untuk sebuah tesis PhD — hal yang hampir belum pernah terjadi sebelumnya dalam sejarah sains.',
                highlightLabel: 'Gelombang de Broglie · 1924',
            },
            {
                eyebrow: 'Göttingen · 1925 · Werner Heisenberg',
                title: 'Prinsip Ketidakpastian —\nBukan Keterbatasan Alat',
                body: `<p>Werner Heisenberg, usia 23 tahun, pergi ke pulau terpencil karena rhinitis parah. Di sana, terisolasi, ia mengembangkan <strong>Prinsip Ketidakpastian</strong>.</p>
                       <p>Pernyataannya: kamu tidak bisa mengetahui posisi dan momentum sebuah partikel secara bersamaan dengan presisi tak terbatas. Semakin akurat posisi, semakin tidak pasti momentum. Dan sebaliknya.</p>
                       <p><strong>Ini bukan karena alat ukur tidak canggih</strong> — ini adalah properti fundamental alam semesta. Ketidakpastian adalah bawaan realitas, bukan keterbatasan kita.</p>`,
                highlight: 'Δx · Δp ≥ ℏ/2',
                highlightLabel: 'Persamaan Ketidakpastian Heisenberg — dimana ℏ adalah konstanta Planck / 2π',
            },
            {
                eyebrow: 'Zürich · 1926 · Erwin Schrödinger',
                title: 'Fungsi Gelombang —\nElektron Ada di Mana-Mana',
                body: `<p>Schrödinger mengembangkan persamaan gelombang yang mendeskripsikan evolusi elektron. Kuadrat dari fungsi gelombang (|ψ|²) di satu titik = <strong>probabilitas menemukan elektron di titik itu</strong>.</p>
                       <p>Elektron tidak ada di satu tempat. Ia ada sebagai distribusi probabilitas — "awan" yang tersebar. Hanya ketika diukur, elektron "collapse" ke satu posisi. Sebelum diukur: ia ada di mana-mana (superposisi).</p>`,
                highlight: '"Tuhan tidak bermain dadu." — Einstein, menolak interpretasi probabilistik ini sampai akhir hayatnya.\n"Jangan katakan pada Tuhan apa yang harus ia lakukan." — Bohr menjawab. Debat ini tidak pernah selesai.',
                highlightLabel: '↯ Einstein vs. Bohr — Debat Terbesar dalam Sejarah Fisika',
            },
            {
                eyebrow: 'Model Atom Modern · 1927–Kini',
                title: 'Orbital — Awan Probabilitas,\nbukan Orbit Planet',
                body: `<p>Model atom modern yang diterima saat ini berasal dari mekanika kuantum. Elektron tidak bergerak dalam orbit melingkar — mereka mendiami <strong>orbital</strong> yang merupakan wilayah probabilitas 3 dimensi.</p>
                       <p>Setiap orbital punya bentuk berbeda: spherical (s), dumbbell (p), kompleks (d, f). Elektron ada di orbital ini sebagai distribusi probabilitas — bukan bola kecil yang berputar.</p>
                       <p>Model ini berlaku sampai sekarang, memprediksikan sifat kimia, ikatan molekul, dan spektrum atom dengan akurasi hingga <strong>12 angka desimal</strong>.</p>`,
                highlight: 'Teori Kuantum adalah teori paling akurat dalam sejarah fisika. Prediksinya cocok dengan eksperimen hingga 12 angka desimal — setara dengan mengukur jarak New York–LA dengan akurasi lebar sehelai rambut.',
                highlightLabel: 'Model Atom yang Kita Gunakan Sekarang',
            },
        ],
    },

    /* ══ EPILOG ══════════════════════════════════════════ */
    {
        id: 'epilog', chapterNum: '∞', chapterName: 'Epilog',
        year: 'Kini', protagonist: '', color: '#7c73ff',
        model: 'epilog',
        slides: [
            {
                eyebrow: 'Perjalanan Belum Selesai',
                title: 'Atom masih\nmenyimpan rahasia.',
                body: `<p>Kita tahu proton dan neutron terbuat dari <strong>quark</strong> — partikel yang lebih fundamental. Tapi apakah quark adalah unit terkecil? Atau ada level yang lebih dalam?</p>
                       <p>Dan masalah terbesar: <strong>mekanika kuantum dan relativitas umum Einstein tidak bisa disatukan</strong>. Keduanya benar di domainnya — tapi mereka tidak bisa mendeskripsikan realitas dalam satu teori yang konsisten.</p>
                       <p>Interpretasi Copenhagen, Many-Worlds, Pilot Wave — fisikawan masih berdebat tentang apa arti sesungguhnya dari mekanika kuantum. 2.400 tahun perdebatan — dan masih belum selesai.</p>`,
                highlight: '"Jika kamu tidak terkejut dengan mekanika kuantum, itu artinya kamu belum benar-benar memahaminya."',
                highlightLabel: '— Richard Feynman',
            },
        ],
    },
];

/* ─────────────────────────────────────────────────────────────────────
   ATOM MODEL RENDERERS
   ───────────────────────────────────────────────────────────────────── */
function renderAtomModel(model: string, color: string): string {
    switch (model) {
        case 'prolog':
            return `<div class="amod amod-prolog">
                <div class="amod-ring r1"></div>
                <div class="amod-ring r2"></div>
                <div class="amod-ring r3"></div>
                <div class="amod-qmark">?</div>
            </div>`;

        case 'solid-demo':
            return `<div class="amod amod-solid" style="--mc:${color}">
                <div class="amod-solid-sphere">
                    <div class="amod-solid-shine"></div>
                    <div class="amod-solid-label">atomos</div>
                </div>
                <div class="amod-caption">Model Democritus — Bola Solid</div>
            </div>`;

        case 'billiard':
            return `<div class="amod amod-billiard-wrap" style="--mc:${color}">
                <div class="amod-billiard-ball">
                    <div class="amod-billiard-gloss"></div>
                    <div class="amod-billiard-band"></div>
                </div>
                <div class="amod-caption">Model Bola Biliar — Dalton</div>
            </div>`;

        case 'plum':
            return `<div class="amod amod-plum-wrap" style="--mc:${color}">
                <div class="amod-plum-sphere">
                    ${Array.from({ length: 12 }).map((_, i) =>
                `<div class="amod-plum-e" style="--i:${i};--px:${(Math.sin(i * 54.7) * 60).toFixed(1)};--py:${(Math.cos(i * 54.7) * 55).toFixed(1)}">e⁻</div>`
            ).join('')}
                    <div class="amod-plum-plus">+ + +<br>+ + +<br>+ + +</div>
                </div>
                <div class="amod-caption">Model Plum Pudding — Thomson 1904</div>
            </div>`;

        case 'rutherford':
            return `<div class="amod amod-rutherford-wrap" style="--mc:${color}">
                <div class="amod-foil-label">Foil Emas</div>
                <div class="amod-rfield">
                    <div class="amod-foil-line"></div>
                    ${Array.from({ length: 7 }).map((_, i) =>
                `<div class="amod-alpha-particle ${i === 1 || i === 5 ? 'bounce' : ''}" style="--i:${i}"></div>`
            ).join('')}
                    <div class="amod-rnucleus">Au<br><small>79</small></div>
                </div>
                <div class="amod-caption">Eksperimen Gold Foil — Rutherford 1909</div>
            </div>`;

        case 'bohr':
            return `<div class="amod amod-bohr-wrap" style="--mc:${color}">
                <div class="amod-bohr">
                    <div class="amod-bohr-nuc">p⁺n</div>
                    <div class="amod-borbit o1"><div class="amod-be1">e⁻</div></div>
                    <div class="amod-borbit o2"><div class="amod-be2">e⁻</div></div>
                    <div class="amod-borbit o3"><div class="amod-be3">e⁻</div></div>
                </div>
                <div class="amod-photon">hν</div>
                <div class="amod-caption">Model Bohr — Orbit Kuantum 1913</div>
            </div>`;

        case 'quantum':
            return `<div class="amod amod-quantum-wrap">
                <canvas id="qcloud-canvas" class="amod-qcanvas" width="280" height="280"></canvas>
                <div class="amod-caption">Orbital Kuantum — Awan Probabilitas</div>
            </div>`;

        case 'epilog':
            return `<div class="amod amod-epilog-wrap" style="--mc:${color}">
                <div class="amod-epilog-core"></div>
                ${Array.from({ length: 4 }).map((_, i) => `<div class="amod-ewave" style="--i:${i}"></div>`).join('')}
                <div class="amod-epilog-q">∞</div>
            </div>`;

        default:
            return `<div class="amod amod-prolog"></div>`;
    }
}

/* ─────────────────────────────────────────────────────────────────────
   RENDER CHAPTER SECTION
   ───────────────────────────────────────────────────────────────────── */
function renderChapterSection(ch: Chapter, chIdx: number): string {
    const hasMultiSlide = ch.slides.length > 1;

    const slidesHTML = ch.slides.map((sl, sIdx) => `
        <div class="ah-inner-slide ${sIdx === 0 ? 'active' : ''}" data-slide="${sIdx}">
            <div class="ah-slide-text">
                ${sl.eyebrow ? `<div class="ah-eyebrow">${sl.eyebrow}</div>` : ''}
                <h2 class="ah-title">${sl.title.replace(/\n/g, '<br>')}</h2>
                <div class="ah-body">${sl.body}</div>
                ${sl.highlight ? `
                <div class="ah-highlight">
                    <div class="ah-hl-bar"></div>
                    <div class="ah-hl-content">
                        <div class="ah-hl-text">${sl.highlight}</div>
                        ${sl.highlightLabel ? `<div class="ah-hl-label">${sl.highlightLabel}</div>` : ''}
                    </div>
                </div>` : ''}
            </div>
        </div>`
    ).join('');

    const dotsHTML = hasMultiSlide ? `
        <div class="ah-slide-dots">
            ${ch.slides.map((_, i) => `<button class="ah-sdot ${i === 0 ? 'active' : ''}" data-sdot="${i}"></button>`).join('')}
        </div>` : '';

    const arrowsHTML = hasMultiSlide ? `
        <div class="ah-slide-arrows">
            <button class="ah-sarr prev" disabled>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span class="ah-sarr-count"><span class="ah-sarr-cur">1</span> / ${ch.slides.length}</span>
            <button class="ah-sarr next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
        </div>` : '';

    return `
    <section class="ah-section reveal-section" id="ch-${ch.id}"
             data-ch-idx="${chIdx}"
             style="--sc:${ch.color}">
        <div class="ah-section-bg"></div>

        <!-- Left: slides track -->
        <div class="ah-left">
            <div class="ah-chapter-tag">
                <span class="ah-ch-roman">${ch.chapterNum}</span>
                <span class="ah-ch-name">${ch.chapterName}</span>
                <span class="ah-ch-dot">·</span>
                <span class="ah-ch-year">${ch.year}</span>
                ${ch.protagonist ? `<span class="ah-ch-dot">·</span><span class="ah-ch-protagonist">${ch.protagonist}</span>` : ''}
            </div>

            <div class="ah-inner-slides-track">
                ${slidesHTML}
            </div>

            <div class="ah-slide-nav">
                ${dotsHTML}
                ${arrowsHTML}
            </div>
        </div>

        <!-- Right: persistent atom model -->
        <div class="ah-right">
            ${renderAtomModel(ch.model, ch.color)}
        </div>

        <!-- Scroll hint (first section only) -->
        ${chIdx === 0 ? `<div class="ah-scroll-hint">Scroll untuk babak berikutnya ↓</div>` : ''}
    </section>`;
}

/* ─────────────────────────────────────────────────────────────────────
   CHAPTER PROGRESS BAR (sticky top)
   ───────────────────────────────────────────────────────────────────── */
function renderChapterBar(): string {
    return `
    <div class="ah-chapter-bar" id="ah-chapter-bar">
        ${CHAPTERS.map((ch, i) => `
        <button class="ah-cb-item ${i === 0 ? 'active' : ''}" data-cb="${i}" data-href="#ch-${ch.id}" title="${ch.chapterName} · ${ch.year}">
            <span class="ah-cb-num">${ch.chapterNum}</span>
            <span class="ah-cb-label">${ch.chapterName}</span>
        </button>`).join('')}
    </div>`;
}

/* ─────────────────────────────────────────────────────────────────────
   MAIN EXPORT
   ───────────────────────────────────────────────────────────────────── */
export function renderAtomHistory(container: HTMLElement): () => void {
    const cleanups: Array<() => void> = [];

    container.innerHTML = `
    <div class="ah3-root">
        <!-- Back -->
        <button class="ah3-back" id="ah3-back">← Beranda</button>

        <!-- Chapter progress -->
        ${renderChapterBar()}

        <!-- Sections -->
        <div class="ah3-scroll" id="ah3-scroll">
            ${CHAPTERS.map((ch, i) => renderChapterSection(ch, i)).join('')}

            <!-- Final CTA -->
            <section class="ah3-cta">
                <h3>Perdebatan 2.400 tahun telah mengantarkan kita ke sini.</h3>
                <p>Sekarang, jelajahi tabel periodik — 118 elemen hasil pemahaman kita tentang atom.</p>
                <div class="ah3-cta-btns">
                    <button class="ah3-cta-btn primary" id="ah3-go-explore">🧪 Jelajahi 118 Elemen →</button>
                    <button class="ah3-cta-btn secondary" id="ah3-go-home">Kembali ke Beranda</button>
                </div>
            </section>
        </div>
    </div>`;

    /* ── Back / CTA ── */
    document.getElementById('ah3-back')?.addEventListener('click', () => navigate('/'));
    document.getElementById('ah3-go-home')?.addEventListener('click', () => navigate('/'));
    document.getElementById('ah3-go-explore')?.addEventListener('click', () => navigate('/explore'));

    /* ── Chapter bar scroll tracking ── */
    const scrollEl = document.getElementById('ah3-scroll')!;
    const sections = scrollEl.querySelectorAll<HTMLElement>('.ah-section');
    const cbItems = document.querySelectorAll<HTMLElement>('.ah-cb-item');

    const sectionObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const idx = Number((e.target as HTMLElement).dataset.chIdx);
                cbItems.forEach((el, i) => el.classList.toggle('active', i === idx));
                // reveal
                (e.target as HTMLElement).classList.add('revealed');
            }
        });
    }, { threshold: 0.35, rootElement: scrollEl });
    sections.forEach(s => sectionObs.observe(s));
    cleanups.push(() => sectionObs.disconnect());

    /* ── Chapter bar click = scrollIntoView ── */
    cbItems.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            sections[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    /* ── Per-section inner slide navigation ── */
    sections.forEach(section => {
        const track = section.querySelector('.ah-inner-slides-track');
        if (!track) return;
        const innerSlides = Array.from(track.querySelectorAll<HTMLElement>('.ah-inner-slide'));
        if (innerSlides.length <= 1) return;

        const dots = Array.from(section.querySelectorAll<HTMLElement>('.ah-sdot'));
        const prevBtn = section.querySelector<HTMLButtonElement>('.ah-sarr.prev');
        const nextBtn = section.querySelector<HTMLButtonElement>('.ah-sarr.next');
        const curEl = section.querySelector<HTMLElement>('.ah-sarr-cur');
        let cur = 0;

        function goSlide(idx: number) {
            if (idx < 0 || idx >= innerSlides.length) return;

            // Animate out current
            const outDir = idx > cur ? 'out-left' : 'out-right';
            const inDir = idx > cur ? 'in-right' : 'in-left';

            innerSlides[cur].classList.remove('active');
            innerSlides[cur].classList.add(outDir);
            innerSlides[idx].style.display = '';
            innerSlides[idx].classList.remove('active', 'in-right', 'in-left', 'out-left', 'out-right');
            innerSlides[idx].classList.add(inDir);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    innerSlides[idx].classList.remove('in-right', 'in-left');
                    innerSlides[idx].classList.add('active');
                });
            });

            setTimeout(() => {
                innerSlides[cur].classList.remove('out-left', 'out-right');
            }, 420);

            cur = idx;

            dots.forEach((d, i) => d.classList.toggle('active', i === cur));
            if (curEl) curEl.textContent = String(cur + 1);
            if (prevBtn) prevBtn.disabled = cur === 0;
            if (nextBtn) nextBtn.disabled = cur === innerSlides.length - 1;
        }

        dots.forEach((d, i) => d.addEventListener('click', () => goSlide(i)));
        prevBtn?.addEventListener('click', () => goSlide(cur - 1));
        nextBtn?.addEventListener('click', () => goSlide(cur + 1));

        // Touch swipe within section
        let touchX = 0;
        section.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
        section.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) {
                if (dx < 0) goSlide(cur + 1);
                else goSlide(cur - 1);
            }
        });
    });

    /* ── Quantum cloud canvas ── */
    let qraf = 0;
    function startQuantumCloud() {
        if (qraf) cancelAnimationFrame(qraf);
        const canvas = document.getElementById('qcloud-canvas') as HTMLCanvasElement | null;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2;
        function gauss() {
            let u = 0, v = 0;
            while (!u) u = Math.random(); while (!v) v = Math.random();
            return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
        }
        let t = 0;
        function draw() {
            ctx.clearRect(0, 0, W, H); t += 0.016;
            for (let i = 0; i < 250; i++) {
                const r = Math.abs(gauss()) * 55 + Math.abs(gauss()) * 15;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;
                const x = cx + r * Math.sin(phi) * Math.cos(theta + t * 0.15);
                const y = cy + r * Math.sin(phi) * Math.sin(theta + t * 0.15) * 0.6;
                const alpha = Math.random() * 0.45 + 0.1;
                ctx.fillStyle = `rgba(80,96,224,${alpha})`;
                ctx.beginPath(); ctx.arc(x, y, Math.random() * 2.5 + 0.5, 0, Math.PI * 2); ctx.fill();
            }
            const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18);
            g.addColorStop(0, 'rgba(255,255,255,0.95)');
            g.addColorStop(0.4, 'rgba(160,180,255,0.7)');
            g.addColorStop(1, 'transparent');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(cx, cy, 16, 0, Math.PI * 2); ctx.fill();
            for (let r = 28; r <= 110; r += 28) {
                ctx.strokeStyle = `rgba(80,96,224,${0.12 + Math.sin(t * 1.5 + r) * 0.06})`;
                ctx.lineWidth = 1;
                ctx.beginPath(); ctx.arc(cx, cy, r + Math.sin(t * 2 + r * 0.1) * 4, 0, Math.PI * 2); ctx.stroke();
            }
            qraf = requestAnimationFrame(draw);
        }
        draw();
    }

    // Start quantum cloud when quantum section becomes visible
    const quantumSec = document.getElementById('ch-quantum');
    if (quantumSec) {
        const qObs = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) { startQuantumCloud(); }
            else { if (qraf) { cancelAnimationFrame(qraf); qraf = 0; } }
        }, { threshold: 0.1 });
        qObs.observe(quantumSec);
        cleanups.push(() => { qObs.disconnect(); if (qraf) cancelAnimationFrame(qraf); });
    }

    return () => cleanups.forEach(fn => fn());
}
