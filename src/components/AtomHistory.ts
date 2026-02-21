import { navigate } from '../core/router';
import { getLang } from '../core/i18n';

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

function getChapters(isEN: boolean): Chapter[] { return isEN ? CHAPTERS_EN : CHAPTERS; }

/* ─────────────────────────────────────────────────────────────────────
   CHAPTER DATA (BILINGUAL)
   ───────────────────────────────────────────────────────────────────── */
const CHAPTERS_EN: Chapter[] = [

    /* ══ PROLOG ══════════════════════════════════════════ */
    {
        id: 'prolog', chapterNum: '⬡', chapterName: 'Prologue',
        year: '—', protagonist: '', color: '#7c73ff',
        model: 'prolog',
        slides: [
            {
                eyebrow: 'Before Everything',
                title: '2,400 years of debate\nabout something no one\nhas ever seen.',
                body: `<p>You are touching something right now. A table. A chair. The air. It all feels real.</p>
                       <p>But one question tormented the greatest thinkers in human history:</p>
                       <p><em>If you keep splitting matter into smaller and smaller pieces — is there a limit? Or can matter be divided forever?</em></p>
                       <p>This wasn't an academic question. The answer changed the way humanity understands reality itself.</p>`,
                highlight: '"Two roads diverge: matter can be split forever — or there is a smallest unit that cannot be divided further."',
                highlightLabel: 'The question that started 2,400 years of debate',
            },
        ],
    },

    /* ══ ACT I — DEMOCRITUS ════════════════════════════ */
    {
        id: 'democritus', chapterNum: 'I', chapterName: 'Democritus',
        year: '~450 BC', protagonist: 'Leucippus & Democritus', color: '#c8a040',
        model: 'solid-demo',
        slides: [
            {
                eyebrow: 'Ancient Greece · ~450 BC',
                title: 'Atomos —\nThe Uncuttable',
                body: `<p>Leucippus was the first to propose the idea: there is a smallest limit to matter. Democritus, his student, developed it into a complete theory.</p>
                       <p>He called it <strong>atomos</strong> — from the Greek <em>a-</em> (not) + <em>tomos</em> (cut). <strong>Something that cannot be cut further.</strong></p>
                       <p>According to Democritus, everything in the universe is just atoms moving through empty space (<em>kenon</em>). The difference between stone, water, and air? Only the shape, size, and arrangement of atoms.</p>`,
                highlight: '"Sweet exists by convention, bitter by convention — in reality there are only atoms and the void."',
                highlightLabel: '— Democritus, ~400 BC',
            },
            {
                eyebrow: "Democritus's Atom Properties",
                title: 'A Theory Shockingly\nAhead of Its Time',
                body: `<ul class="ah-list">
                         <li><span class="ah-list-num">01</span><div><strong>Atoms are eternal</strong> — They cannot be created or destroyed. Their total count has been constant since the beginning of the universe.</div></li>
                         <li><span class="ah-list-num">02</span><div><strong>Atoms are in constant motion</strong> — In the void, atoms move freely. Collisions between atoms form the world we see.</div></li>
                         <li><span class="ah-list-num">03</span><div><strong>Atoms differ in shape and size</strong> — Fire is made of small, round atoms. Iron from larger atoms that hook together.</div></li>
                         <li><span class="ah-list-num">04</span><div><strong>Even the soul is made of atoms</strong> — Soul atoms are the finest and most spherical, spread throughout the body.</div></li>
                       </ul>`,
                highlight: 'Atoms have no color, taste, or smell — all sensations are the result of atoms interacting with our senses. An insight that was only proven ~2,300 years later.',
                highlightLabel: 'Still true today',
            },
            {
                eyebrow: 'Plot Twist · ~400 BC',
                title: 'One Man Buried It\nfor 2,000 Years',
                body: `<p>Aristotle — student of Plato, teacher of Alexander the Great — was the most influential thinker in the Western world. And he <strong>completely rejected</strong> atomic theory.</p>
                       <p>His argument: the void (<em>kenon</em>) cannot exist. "Nature abhors a vacuum" (<em>horror vacui</em>). And matter is made of 4 elements: <strong>Earth, Water, Air, Fire</strong>.</p>
                       <p>Aristotle didn't prove Democritus wrong. He was simply more influential. For nearly 2,000 years, the Western world followed Aristotle — not because of evidence, but because of <strong>authority</strong>.</p>`,
                highlight: '"Democritus\'s idea was buried not because it was wrong — but because it lost a popularity contest." This is the greatest danger in the history of science.',
                highlightLabel: '↯ The Biggest Lesson in Science History',
            },
        ],
    },

    /* ══ ACT II — DALTON ═══════════════════════════════ */
    {
        id: 'dalton', chapterNum: 'II', chapterName: 'Dalton',
        year: '1803', protagonist: 'John Dalton', color: '#5090d0',
        model: 'billiard',
        slides: [
            {
                eyebrow: 'Manchester · Early 1800s',
                title: 'Two Thousand Years Later,\nScience Finally Speaks',
                body: `<p>The industrial revolution was in full swing. Factories needed predictable chemistry — not philosophy. And there, a math teacher named <strong>John Dalton</strong> noticed something strange.</p>
                       <p>When two elements combine to form a compound, their mass ratios are always <strong>simple whole numbers</strong>. Carbon and oxygen always combine in fixed ratios — never random.</p>
                       <p>This was no coincidence. It was a pattern. And to explain it, Dalton made a logical leap that transformed chemistry forever.</p>`,
                highlight: 'Law of Multiple Proportions: when two elements combine to form more than one compound, the mass of one of them is always in a simple whole-number ratio.',
                highlightLabel: "Dalton's Law — The Starting Point of Modern Atomic Theory",
            },
            {
                eyebrow: "Dalton's Postulates · 1803",
                title: 'Five Propositions That\nChanged Chemistry',
                body: `<ul class="ah-list">
                         <li><span class="ah-list-num">01</span><div>All matter is made of <strong>atoms that cannot be further divided</strong>.</div></li>
                         <li><span class="ah-list-num">02</span><div>All atoms of the same element have <strong>exactly the same mass</strong>.</div></li>
                         <li><span class="ah-list-num">03</span><div>Atoms of different elements have <strong>different masses</strong>.</div></li>
                         <li><span class="ah-list-num">04</span><div>Atoms combine in <strong>simple whole-number ratios</strong> to form compounds.</div></li>
                         <li><span class="ah-list-num">05</span><div>Atoms cannot be created or destroyed — they only <strong>rearrange</strong> in chemical reactions.</div></li>
                       </ul>`,
                highlight: "Historical irony: Dalton was the first well-documented colorblind person. He couldn't distinguish colors — yet he 'saw' differences between invisible atoms.",
                highlightLabel: '↯ The Dalton Irony',
            },
            {
                eyebrow: 'Right — Wrong',
                title: 'A Revolutionary Theory\nThat Wasn\'t Perfect',
                body: `<div class="ah-compare">
                         <div class="ah-compare-col correct">
                           <div class="ah-compare-header">✓ Still True Today</div>
                           <ul>
                             <li>Atoms of different elements have different masses</li>
                             <li>Atoms combine in fixed ratios</li>
                             <li>Chemical reactions are just rearrangements of atoms</li>
                           </ul>
                         </div>
                         <div class="ah-compare-col wrong">
                           <div class="ah-compare-header">✗ Turned Out Wrong</div>
                           <ul>
                             <li>Atoms can't be split — <em>they can (electrons, protons, neutrons)</em></li>
                             <li>Same-element atoms are identical — <em>isotopes prove otherwise</em></li>
                             <li>Atoms can't be created — <em>nuclear reactions can change them</em></li>
                           </ul>
                         </div>
                       </div>`,
                highlight: "Though imperfect, Dalton's model was accurate enough to transform chemistry into a predictable, reproducible science — and that was enough to change the industrial world.",
                highlightLabel: 'Why an Imperfect Model Still Has Value',
            },
        ],
    },

    /* ══ ACT III — THOMSON ═════════════════════════════ */
    {
        id: 'thomson', chapterNum: 'III', chapterName: 'Thomson',
        year: '1897', protagonist: 'J.J. Thomson', color: '#9060c0',
        model: 'plum',
        slides: [
            {
                eyebrow: 'Cavendish Laboratory · 1897',
                title: 'The Cathode Ray Tube That\nShook Everything',
                body: `<p>J.J. Thomson was experimenting with a glass vacuum tube containing two electrodes. When electricity flowed through, a <strong>mysterious ray</strong> appeared from the cathode (negative electrode).</p>
                       <p>This ray bent in magnetic and electric fields — always deflecting the same way, regardless of electrode material.</p>
                       <p>Thomson's conclusion: this ray is not light. <strong>It is a negatively charged particle far smaller than an atom.</strong> And it's identical across all elements.</p>`,
                highlight: '"I was discovering what was inside an atom — and the result: atoms can be split."',
                highlightLabel: '— J.J. Thomson, 1897 · Nobel Prize in Physics 1906',
            },
            {
                eyebrow: 'Discovery of the Electron · 1897',
                title: 'Corpuscle —\nThe First Sub-Atomic Particle',
                body: `<p>Thomson called it a "corpuscle." Others later named it the <strong>electron</strong>.</p>
                       <p>If atoms contain negatively charged electrons, and atoms as a whole are neutral — <strong>there must be a positive charge somewhere</strong>. But where?</p>
                       <p>Thomson proposed: positive charge is spread evenly like dough, electrons are embedded in it like raisins. The world called it the <strong>Plum Pudding Model</strong>.</p>`,
                highlight: "An electron's mass is only 1/1,836 of a proton's. If an atom were the size of Earth, an electron would only be the size of a basketball court. That's how small the particle that 'builds' the world is.",
                highlightLabel: 'How tiny an electron is',
            },
            {
                eyebrow: 'Plum Pudding Model · 1904',
                title: 'The Logical Model —\nThat Was Completely Wrong',
                body: `<p>Thomson's model made logical sense: if negative charges are spread evenly, positive charges must balance them — also spread evenly. Thomson even proved mathematically this model matched hydrogen's spectrum.</p>
                       <p>But there was one problem. His own student was conducting an experiment that would destroy this model in fewer than 10 years.</p>
                       <p><strong>Thomson's best student? Ernest Rutherford.</strong> Who would prove his teacher was completely wrong.</p>`,
                highlight: '"I thought I knew the structure of the atom. Turns out I was wrong." — Thomson never truly accepted Rutherford\'s nuclear model until the end of his life.',
                highlightLabel: '↯ Irony in Science',
            },
        ],
    },

    /* ══ ACT IV — RUTHERFORD ═══════════════════════════ */
    {
        id: 'rutherford', chapterNum: 'IV', chapterName: 'Rutherford',
        year: '1911', protagonist: 'Ernest Rutherford', color: '#e06030',
        model: 'rutherford',
        slides: [
            {
                eyebrow: 'University of Manchester · 1909',
                title: 'The Gold Foil Experiment —\nA Simple Design',
                body: `<p>Rutherford asked two assistants — Hans Geiger and Ernest Marsden — to do a simple experiment: <strong>fire alpha particles at an extremely thin gold foil</strong>.</p>
                       <p>Based on Thomson's model, the particles should pass through with little or no deflection — since positive charge was thought to be spread thin and even.</p>
                       <p>Rutherford nearly didn't ask Marsden to do this — he thought the result was obvious and <strong>boring</strong>. He almost missed the greatest discovery of the 20th century.</p>`,
                highlight: 'Gold foil was chosen because it can be made ~1,000 atoms thin. The detector: a screen that glowed when hit by alpha particles — observed by eye in darkness for days.',
                highlightLabel: 'Experiment Setup',
            },
            {
                eyebrow: 'Unexpected Results · 1909',
                title: 'Bullets That\nBounced Back',
                body: `<p>Most alpha particles passed straight through — as predicted. But then Marsden saw something that shouldn't have happened:</p>
                       <p><strong>Some particles deflected at large angles. Some bounced almost straight back.</strong></p>
                       <p>Frequency: 1 in about 8,000 particles bounced back at angles greater than 90°.</p>
                       <p>Marsden ran to Rutherford. Rutherford didn't believe him. He made Marsden repeat the experiment many times. The results were always the same.</p>`,
                highlight: '"It was as if you fired 15-inch artillery shells at tissue paper, and the shells came back and hit you. I was absolutely dumbfounded when it happened."',
                highlightLabel: '— Ernest Rutherford, 1911',
            },
            {
                eyebrow: 'Conclusion · 1911',
                title: 'An Atom Is (Almost)\nAll Empty Space',
                body: `<p>Rutherford spent 18 months calculating. The only explanation that made sense:</p>
                       <p>All the positive mass of the atom is concentrated in a <strong>tiny core</strong> — he called it the nucleus. Electrons orbit around it at proportionally enormous distances.</p>
                       <p>If the nucleus were the size of a marble (1 cm), the nearest electron would be <strong>one kilometer</strong> away. In between? Perfect empty space.</p>`,
                highlight: 'The atoms that make up your hand are 99.9999999999996% empty space. Matter feels solid not because it\'s full — but because electromagnetic forces prevent other atoms from coming close.',
                highlightLabel: '↯ A Fact That Changes Your Intuition',
            },
            {
                eyebrow: "Rutherford's Fatal Flaw",
                title: 'A Beautiful Model —\nWith a Deadly Problem',
                body: `<p>Rutherford's model was elegant: nucleus in the center, electrons orbiting like planets. But there was one fatal flaw according to Maxwell's classical physics:</p>
                       <p><strong>A charged particle that accelerates (circular motion = acceleration) must emit electromagnetic radiation.</strong></p>
                       <p>If electrons continuously emit energy, they would spiral inward and crash into the nucleus in just <strong>16 picoseconds</strong>. But hydrogen has existed since the Big Bang. Something was wrong.</p>`,
                highlight: "Rutherford's model perfectly explained the gold foil experiment — but theoretically, the atom he described should be unstable and couldn't exist. This paradox drove the birth of quantum mechanics.",
                highlightLabel: 'The Door to the Quantum World',
            },
        ],
    },

    /* ══ ACT V — BOHR ════════════════════════════════ */
    {
        id: 'bohr', chapterNum: 'V', chapterName: 'Bohr',
        year: '1913', protagonist: 'Niels Bohr', color: '#40a080',
        model: 'bohr',
        slides: [
            {
                eyebrow: 'Copenhagen · 1913',
                title: 'Electrons Don\'t Follow\nClassical Physics',
                body: `<p>Niels Bohr, a young Danish physicist who had just interned at Rutherford's lab, proposed a radical idea: <strong>Classical physics doesn't apply inside the atom.</strong></p>
                       <p>He was inspired by an old unsolved puzzle — the <strong>hydrogen emission spectrum</strong>. When hydrogen is heated to glow, it only emits light at specific wavelengths — not all colors.</p>
                       <p>4 specific lines: 656nm (red), 486nm (blue-green), 434nm (blue-violet), 410nm (violet). The pattern had been known since 1885 — but no one could explain it. Until Bohr.</p>`,
                highlight: '"Classical physics doesn\'t apply at the atomic level. We need new rules." — An idea that sounded crazy in 1913 is now the foundation of all modern chemistry.',
                highlightLabel: 'Bohr · 1913',
            },
            {
                eyebrow: "Bohr's Postulates · 1913",
                title: 'Quantum Orbits —\nAstonishing New Rules',
                body: `<ul class="ah-list">
                         <li><span class="ah-list-num">01</span><div><strong>Electrons can only exist in specific orbits</strong> — these orbits have fixed, specific energy levels. No in-between allowed.</div></li>
                         <li><span class="ah-list-num">02</span><div><strong>While in that orbit, electrons emit no energy</strong> — this rule violates classical physics, but Bohr stated it as a fundamental postulate.</div></li>
                         <li><span class="ah-list-num">03</span><div><strong>Electrons can jump between orbits</strong> — by absorbing a photon (moving up) or emitting a photon (moving down). Photon energy = energy difference between orbits.</div></li>
                       </ul>`,
                highlight: 'This immediately explained hydrogen\'s spectrum perfectly — the spectral lines EXACTLY matched the energy differences between orbits Bohr calculated. Accurate to 4 decimal places.',
                highlightLabel: '✓ Perfect for Hydrogen',
            },
            {
                eyebrow: "Bohr's Failure",
                title: 'Works for Hydrogen.\nFails for Everything Else.',
                body: `<p>The Bohr model was a major victory — for hydrogen. But when physicists tried applying it to helium (2 electrons) or larger atoms: <strong>total failure</strong>.</p>
                       <p>No one could explain <em>why</em> electrons were only allowed in specific orbits. Bohr's postulates were empirically correct, but had no theoretical foundation.</p>
                       <p>And a deeper question: if electrons can "jump" from one orbit to another instantaneously — without crossing the space between — what does the "location" of an electron even mean?</p>`,
                highlight: '"I hope someone will solve this problem." — Bohr to Heisenberg, 1922. The answer came 3 years later and changed everything.',
                highlightLabel: '↯ The Door to Quantum Mechanics',
            },
        ],
    },

    /* ══ ACT VI — QUANTUM ════════════════════════════ */
    {
        id: 'quantum', chapterNum: 'VI', chapterName: 'Quantum Mechanics',
        year: '1924–1927', protagonist: 'de Broglie · Heisenberg · Schrödinger', color: '#5060e0',
        model: 'quantum',
        slides: [
            {
                eyebrow: 'Paris · 1924 · Louis de Broglie',
                title: 'Electrons Are\nWaves — And Particles',
                body: `<p>A PhD student named Louis de Broglie proposed a wild idea in his thesis: <strong>if light can behave as a particle (photon), maybe particles like electrons can behave as waves.</strong></p>
                       <p>He derived a simple formula: electron wavelength = Planck's constant ÷ electron momentum. His examiners didn't know what to do with this idea — they sent it to Einstein.</p>
                       <p>Einstein replied: <em>"This looks crazy, but I'm sure it's right."</em> Two years later, electron diffraction experiments proved de Broglie correct. Nobel 1929.</p>`,
                highlight: 'The 1929 Nobel Prize in Physics was awarded to de Broglie for a PhD thesis — something that had almost never happened before in science history.',
                highlightLabel: 'de Broglie Waves · 1924',
            },
            {
                eyebrow: 'Göttingen · 1925 · Werner Heisenberg',
                title: 'The Uncertainty Principle —\nNot a Measurement Limitation',
                body: `<p>Werner Heisenberg, aged 23, went to a remote island because of severe rhinitis. There, in isolation, he developed the <strong>Uncertainty Principle</strong>.</p>
                       <p>The statement: you cannot know the position and momentum of a particle simultaneously with unlimited precision. The more precisely you know position, the less precisely you know momentum. And vice versa.</p>
                       <p><strong>This is not because instruments aren't advanced enough</strong> — it's a fundamental property of the universe. Uncertainty is built into reality itself, not a limitation of ours.</p>`,
                highlight: 'Δx · Δp ≥ ℏ/2',
                highlightLabel: 'The Heisenberg Uncertainty Equation — where ℏ is Planck\'s constant / 2π',
            },
            {
                eyebrow: 'Zürich · 1926 · Erwin Schrödinger',
                title: 'The Wave Function —\nElectrons Are Everywhere',
                body: `<p>Schrödinger developed a wave equation describing electron evolution. The squared wave function (|ψ|²) at a point = <strong>the probability of finding the electron at that point</strong>.</p>
                       <p>An electron doesn't exist in one place. It exists as a probability distribution — a "cloud" spread out. Only when measured does the electron "collapse" to one position. Before measurement: it exists everywhere (superposition).</p>`,
                highlight: '"God does not play dice." — Einstein, rejecting this probabilistic interpretation until the end of his life.\n"Don\'t tell God what to do." — Bohr\'s reply. This debate was never resolved.',
                highlightLabel: '↯ Einstein vs. Bohr — The Greatest Debate in Physics History',
            },
            {
                eyebrow: 'Modern Atomic Model · 1927–Now',
                title: 'Orbitals — Probability Clouds,\nNot Planetary Orbits',
                body: `<p>The modern atomic model accepted today comes from quantum mechanics. Electrons don't move in circular orbits — they inhabit <strong>orbitals</strong>, which are 3D regions of probability.</p>
                       <p>Each orbital has a different shape: spherical (s), dumbbell (p), complex (d, f). Electrons exist in these orbitals as probability distributions — not tiny balls spinning around.</p>
                       <p>This model holds to this day, predicting chemical properties, molecular bonding, and atomic spectra with accuracy up to <strong>12 decimal places</strong>.</p>`,
                highlight: 'Quantum theory is the most accurate theory in physics history. Its predictions match experiments to 12 decimal places — equivalent to measuring the distance from New York to LA with the accuracy of a hair\'s width.',
                highlightLabel: 'The Atomic Model We Use Today',
            },
        ],
    },

    /* ══ EPILOGUE ══════════════════════════════════════ */
    {
        id: 'epilog', chapterNum: '∞', chapterName: 'Epilogue',
        year: 'Now', protagonist: '', color: '#7c73ff',
        model: 'epilog',
        slides: [
            {
                eyebrow: 'The Journey Continues',
                title: 'Atoms still\nhold secrets.',
                body: `<p>We know protons and neutrons are made of <strong>quarks</strong> — more fundamental particles. But are quarks the smallest unit? Or is there a deeper level?</p>
                       <p>And the biggest unsolved problem: <strong>quantum mechanics and Einstein's general relativity cannot be unified</strong>. Both are correct in their domains — but they can't describe reality in one consistent theory.</p>
                       <p>The Copenhagen interpretation, Many-Worlds, Pilot Wave — physicists are still debating the true meaning of quantum mechanics. 2,400 years of debate — and still unfinished.</p>`,
                highlight: '"If you are not shocked by quantum mechanics, you haven\'t really understood it."',
                highlightLabel: '— Richard Feynman',
            },
        ],
    },
];



/* ─────────────────────────────────────────────────────────────────────
   ATOM MODEL RENDERERS
   ───────────────────────────────────────────────────────────────────── */
function renderAtomModel(model: string, color: string, isEN: boolean): string {
    const cap = (id: string, en: string) => isEN ? en : id;
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
                <div class="amod-caption">${cap('Model Democritus — Bola Solid', 'Democritus Model — Solid Sphere')}</div>
            </div>`;

        case 'billiard':
            return `<div class="amod amod-billiard-wrap" style="--mc:${color}">
                <div class="amod-billiard-ball">
                    <div class="amod-billiard-gloss"></div>
                    <div class="amod-billiard-band"></div>
                </div>
                <div class="amod-caption">${cap('Model Bola Biliar — Dalton', 'Billiard Ball Model — Dalton')}</div>
            </div>`;

        case 'plum':
            return `<div class="amod amod-plum-wrap" style="--mc:${color}">
                <div class="amod-plum-sphere">
                    ${Array.from({ length: 12 }).map((_, i) =>
                `<div class="amod-plum-e" style="--i:${i};--px:${(Math.sin(i * 54.7) * 60).toFixed(1)};--py:${(Math.cos(i * 54.7) * 55).toFixed(1)}">e⁻</div>`
            ).join('')}
                    <div class="amod-plum-plus">+ + +<br>+ + +<br>+ + +</div>
                </div>
                <div class="amod-caption">${cap('Model Plum Pudding — Thomson 1904', 'Plum Pudding Model — Thomson 1904')}</div>
            </div>`;

        case 'rutherford':
            return `<div class="amod amod-rutherford-wrap" style="--mc:${color}">
                <div class="amod-foil-label">${cap('Foil Emas', 'Gold Foil')}</div>
                <div class="amod-rfield">
                    <div class="amod-foil-line"></div>
                    ${Array.from({ length: 7 }).map((_, i) =>
                `<div class="amod-alpha-particle ${i === 1 || i === 5 ? 'bounce' : ''}" style="--i:${i}"></div>`
            ).join('')}
                    <div class="amod-rnucleus">Au<br><small>79</small></div>
                </div>
                <div class="amod-caption">${cap('Eksperimen Gold Foil — Rutherford 1909', 'Gold Foil Experiment — Rutherford 1909')}</div>
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
                <div class="amod-caption">${cap('Model Bohr — Orbit Kuantum 1913', 'Bohr Model — Quantum Orbits 1913')}</div>
            </div>`;

        case 'quantum':
            return `<div class="amod amod-quantum-wrap">
                <canvas id="qcloud-canvas" class="amod-qcanvas" width="280" height="280"></canvas>
                <div class="amod-caption">${cap('Orbital Kuantum — Awan Probabilitas', 'Quantum Orbital — Probability Cloud')}</div>
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
function renderChapterSection(ch: Chapter, chIdx: number, isEN: boolean): string {
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
            ${renderAtomModel(ch.model, ch.color, isEN)}
        </div>

        <!-- Scroll hint (first section only) -->
        ${chIdx === 0 ? `<div class="ah-scroll-hint">${isEN ? 'Scroll for the next act ↓' : 'Scroll untuk babak berikutnya ↓'}</div>` : ''}
    </section>`;
}

/* ─────────────────────────────────────────────────────────────────────
   CHAPTER PROGRESS BAR (sticky top)
   ───────────────────────────────────────────────────────────────────── */
function renderChapterBar(chapters: Chapter[]): string {
    return `
    <div class="ah-chapter-bar" id="ah-chapter-bar">
        ${chapters.map((ch, i) => `
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
    const isEN = getLang() === 'en';
    const chapters = getChapters(isEN);

    container.innerHTML = `
    <div class="ah3-root">
        <!-- Back -->
        <button class="ah3-back" id="ah3-back">← ${isEN ? 'Home' : 'Beranda'}</button>

        <!-- Chapter progress -->
        ${renderChapterBar(chapters)}

        <!-- Sections -->
        <div class="ah3-scroll" id="ah3-scroll">
            ${chapters.map((ch, i) => renderChapterSection(ch, i, isEN)).join('')}

            <!-- Final CTA -->
            <section class="ah3-cta">
                <h3>${isEN ? '2,400 years of debate have brought us here.' : 'Perdebatan 2.400 tahun telah mengantarkan kita ke sini.'}</h3>
                <p>${isEN ? 'Now, explore the periodic table — 118 elements, the fruit of our understanding of the atom.' : 'Sekarang, jelajahi tabel periodik — 118 elemen hasil pemahaman kita tentang atom.'}</p>
                <div class="ah3-cta-btns">
                    <button class="ah3-cta-btn primary" id="ah3-go-explore">🧪 ${isEN ? 'Explore 118 Elements →' : 'Jelajahi 118 Elemen →'}</button>
                    <button class="ah3-cta-btn secondary" id="ah3-go-home">${isEN ? 'Back to Home' : 'Kembali ke Beranda'}</button>
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
    }, { threshold: 0.35, root: scrollEl });
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
