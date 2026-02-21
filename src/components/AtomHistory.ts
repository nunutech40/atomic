import { navigate } from '../core/router';

/* ════════════════════════════════════════════════════════════════════════
   ATOM HISTORY — Cinematic Slide Deck
   22 full-screen slides across 8 chapters.
   Nav: arrow buttons, keyboard ←/→, slide counter, chapter indicator.
   ════════════════════════════════════════════════════════════════════════ */

interface Slide {
    chapter: string;          // Chapter label
    chapterNum: string;       // 'Prolog' | 'I' | 'II' etc
    year: string;
    protagonist: string;
    slideTitle: string;
    eyebrow?: string;         // Small label above title
    body: string;             // HTML string
    highlight?: string;       // Highlighted pull-quote
    highlightLabel?: string;
    model: string;            // model key
    color: string;            // Chapter accent color
    bg?: string;              // Optional custom bg gradient
}

/* ─────────────────────────────────────────────────────
   ALL SLIDES — 22 slides total
   ───────────────────────────────────────────────────── */
const SLIDES: Slide[] = [

    /* ══ PROLOG ══════════════════════════════════════════ */
    {
        chapter: 'Prolog', chapterNum: '⬡', year: '—', protagonist: '',
        eyebrow: 'Sebelum Segalanya',
        slideTitle: '2.400 tahun perdebatan tentang sesuatu yang tidak pernah\nbisa dilihat.',
        body: `<p>Kamu sedang menyentuh sesuatu sekarang. Meja. Kursi. Udara. Semua terasa nyata.</p>
               <p>Tapi ada satu pertanyaan yang menyiksa para pemikir terbesar sepanjang sejarah:</p>
               <p><em>Jika kamu terus memotong materi menjadi bagian yang lebih kecil — apakah ada batasnya? Atau materi bisa dibagi selamanya?</em></p>
               <p>Ini bukan pertanyaan akademis. Jawabannya mengubah cara manusia memahami realitas itu sendiri.</p>`,
        highlight: '"Dua jalan bercabang: materi bisa dibagi selamanya, atau ada unit terkecil yang tak bisa dibagi lagi."',
        highlightLabel: 'Pertanyaan yang mengawali segalanya',
        model: 'prolog', color: '#8888aa',
    },

    /* ══ BABAK I — DEMOCRITUS ════════════════════════════ */
    {
        chapter: 'Babak I', chapterNum: 'I', year: '~450 SM', protagonist: 'Leucippus & Democritus',
        eyebrow: 'Yunani Kuno · ~450 SM',
        slideTitle: 'Atomos — Yang Tak Dapat Dibagi',
        body: `<p>Leucippus adalah yang pertama mencetuskan ide: ada batas terkecil dari materi. Democritus, muridnya, mengembangkan ini menjadi teori lengkap.</p>
               <p>Ia menyebutnya <strong>atomos</strong> — dari bahasa Yunani <em>a-</em> (tidak) + <em>tomos</em> (memotong). <strong>Sesuatu yang tidak dapat dipotong lagi.</strong></p>
               <p>Menurut Democritus, semua yang ada di alam semesta hanyalah atom-atom yang bergerak di ruang kosong (<em>kenon</em>). Perbedaan antara batu, air, dan udara? Hanya bentuk, ukuran, dan susunan atom yang berbeda.</p>`,
        highlight: '"Rasa manis hanya ada karena konvensi, rasa pahit hanya karena konvensi — hanya atom dan ruang kosong yang sungguh-sungguh ada."',
        highlightLabel: '— Democritus, ~400 SM',
        model: 'solid-demo', color: '#c8a040',
    },
    {
        chapter: 'Babak I', chapterNum: 'I', year: '~450 SM', protagonist: 'Democritus',
        eyebrow: 'Properti Atom Menurut Democritus',
        slideTitle: 'Teori yang Mengejutkan untuk Zamannya',
        body: `<ul class="ah-list">
                 <li><span class="ah-list-num">01</span><div><strong>Atom bersifat abadi</strong> — Tidak bisa diciptakan atau dihancurkan. Jumlahnya selalu tetap.</div></li>
                 <li><span class="ah-list-num">02</span><div><strong>Atom bergerak terus-menerus</strong> — Di ruang hampa, atom bergerak bebas. Tabrakan antar atom membentuk dunia yang kita lihat.</div></li>
                 <li><span class="ah-list-num">03</span><div><strong>Atom berbeda ukuran dan bentuk</strong> — Api tersusun dari atom kecil dan bulat (makanya panas bergerak cepat). Besi dari atom yang lebih kasar dan saling mengait.</div></li>
                 <li><span class="ah-list-num">04</span><div><strong>Jiwa pun terbuat dari atom</strong> — Atom jiwa adalah yang paling halus dan bulat, tersebar di seluruh tubuh.</div></li>
               </ul>`,
        highlight: 'Atom tidak memiliki warna, rasa, atau bau — semua sensasi itu adalah hasil interaksi atom dengan indera kita.',
        highlightLabel: 'Insight yang baru dibuktikan ~2.300 tahun kemudian',
        model: 'solid-demo', color: '#c8a040',
    },
    {
        chapter: 'Babak I', chapterNum: 'I', year: '~400 SM', protagonist: 'Aristoteles',
        eyebrow: 'Plot Twist — 400 SM',
        slideTitle: 'Satu Orang Menguburnya Selama 2.000 Tahun',
        body: `<p>Aristoteles — murid Plato, guru Alexander the Great — adalah pemikir paling berpengaruh di dunia Barat. Dan ia <strong>menolak total</strong> teori atom.</p>
               <p>Argumennya: ruang hampa (<em>kenon</em>) tidak mungkin ada. "Alam membenci kekosongan" (<em>horror vacui</em>). Dan materi terdiri dari 4 elemen: <strong>Tanah, Air, Udara, Api</strong>.</p>
               <p>Aristoteles tidak membuktikan Democritus salah. Ia hanya lebih berpengaruh. Selama hampir 2.000 tahun, dunia Barat mengikuti Aristoteles — bukan karena bukti, tapi karena otoritas.</p>`,
        highlight: '"Ide Democritus dikubur bukan karena salah — tapi karena kalah populer."',
        highlightLabel: '↯ Pelajaran Terbesar Sejarah Sains',
        model: 'aristotle', color: '#c8a040',
    },

    /* ══ BABAK II — DALTON ═══════════════════════════════ */
    {
        chapter: 'Babak II', chapterNum: 'II', year: '1766–1844', protagonist: 'John Dalton',
        eyebrow: 'Manchester, Inggris · Awal 1800-an',
        slideTitle: 'Dua Ribu Tahun Kemudian, Sains Akhirnya Bicara',
        body: `<p>Revolusi industri sedang berlangsung. Pabrik-pabrik membutuhkan kimia yang bisa diprediksi — bukan filsafat. Dan di sana, seorang guru matematika bernama <strong>John Dalton</strong> mengamati sesuatu yang ganjil.</p>
               <p>Ketika dua unsur bergabung membentuk senyawa, perbandingan massanya selalu berupa bilangan bulat sederhana. Contoh: karbon dan oksigen selalu bergabung dalam rasio tetap — bukan sembarang.</p>
               <p>Ini bukan kebetulan. <em>Ini pola.</em> Dan untuk menjelaskan pola ini, Dalton melakukan lompatan logika yang mengubah segalanya.</p>`,
        highlight: 'Hukum Kelipatan Perbandingan: jika dua unsur bergabung membentuk lebih dari satu senyawa, massa salah satunya selalu dalam rasio bilangan bulat sederhana.',
        highlightLabel: 'Hukum Dalton — Titik Awal Teori Atom Modern',
        model: 'billiard', color: '#6090d0',
    },
    {
        chapter: 'Babak II', chapterNum: 'II', year: '1803', protagonist: 'John Dalton',
        eyebrow: 'Postulat Dalton · 1803',
        slideTitle: 'Lima Postulat yang Mengubah Kimia',
        body: `<ul class="ah-list">
                 <li><span class="ah-list-num">01</span><div>Semua materi tersusun dari atom yang tidak dapat dibagi lagi.</div></li>
                 <li><span class="ah-list-num">02</span><div>Semua atom dari unsur yang sama memiliki massa yang sama persis.</div></li>
                 <li><span class="ah-list-num">03</span><div>Atom dari unsur berbeda memiliki massa yang berbeda.</div></li>
                 <li><span class="ah-list-num">04</span><div>Atom bergabung dalam rasio bilangan bulat sederhana membentuk senyawa.</div></li>
                 <li><span class="ah-list-num">05</span><div>Atom tidak dapat diciptakan atau dihancurkan — hanya bergabung ulang dalam reaksi kimia.</div></li>
               </ul>`,
        highlight: 'Ironi sejarah: Dalton adalah penderita buta warna pertama yang terdokumentasi dengan baik. Ia tidak bisa membedakan warna — namun "melihat" perbedaan atom yang tak kasat mata.',
        highlightLabel: '↯ Plot Twist Dalton',
        model: 'billiard', color: '#6090d0',
    },
    {
        chapter: 'Babak II', chapterNum: 'II', year: '1803', protagonist: 'John Dalton',
        eyebrow: 'Yang Benar — Yang Keliru',
        slideTitle: 'Teori Revolusioner yang Tidak Sempurna',
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
                     <li>Atom tidak bisa dibagi — <em>bisa</em> (elektron, proton, neutron)</li>
                     <li>Atom dari unsur sama selalu identik — <em>isotop</em> membuktikan sebaliknya</li>
                     <li>Atom tidak bisa diciptakan — <em>reaksi nuklir bisa mengubahnya</em></li>
                   </ul>
                 </div>
               </div>`,
        highlight: 'Meski tidak sempurna, model Dalton cukup akurat untuk membuat kimia menjadi sains yang bisa diprediksi dan diulang — dan itu cukup untuk mengubah dunia.',
        highlightLabel: 'Mengapa Model yang Tidak Sempurna Tetap Berharga',
        model: 'billiard', color: '#6090d0',
    },

    /* ══ BABAK III — THOMSON ═════════════════════════════ */
    {
        chapter: 'Babak III', chapterNum: 'III', year: '1897', protagonist: 'J.J. Thomson',
        eyebrow: 'Cavendish Laboratory, Cambridge · 1897',
        slideTitle: 'Eksperimen Tabung Katoda yang Mengguncang Segalanya',
        body: `<p>J.J. Thomson sedang bermain dengan sesuatu yang belum ada namanya: tabung kaca hampa udara dengan dua elektroda. Saat listrik dialirkan, sebuah <strong>sinar misterius</strong> muncul dari katoda (elektroda negatif).</p>
               <p>Sinar ini bisa dibelokkan oleh medan magnet dan listrik — selalu membelok ke arah yang sama, tidak peduli bahan elektroda apa yang digunakan.</p>
               <p>Kesimpulan Thomson: sinar ini bukan cahaya atau gelombang. <strong>Ia adalah partikel bermuatan negatif yang jauh lebih kecil dari atom</strong>. Sama di semua unsur.</p>`,
        highlight: '"Saya sedang menemukan apa yang ada di dalam atom. Dan hasilnya: atom bisa dibagi."',
        highlightLabel: '— J.J. Thomson, 1897',
        model: 'cathode', color: '#9060c0',
    },
    {
        chapter: 'Babak III', chapterNum: 'III', year: '1897', protagonist: 'J.J. Thomson',
        eyebrow: 'Konsekuensi Penemuan Elektron',
        slideTitle: 'Korpuskel — Partikel yang Mengubah Definisi Atom',
        body: `<p>Thomson menyebutnya "korpuskel". Orang lain kemudian menamakannya <strong>elektron</strong> — nama yang bertahan sampai sekarang.</p>
               <p>Imbalannya: Nobel Fisika 1906. Dan satu masalah besar:</p>
               <p>Jika atom mengandung elektron yang bermuatan negatif, dan atom secara keseluruhan bersifat netral — maka <strong>harus ada muatan positif di suatu tempat</strong>. Tapi di mana? Seperti apa bentuknya?</p>
               <p>Thomson mengusulkan jawabannya: muatan positif tersebar merata seperti adonan roti, dan elektron tersebar di dalamnya seperti kismis. Ia menyebutnya model "roti kismis". Dunia menyebutnya <strong>Plum Pudding</strong>.</p>`,
        highlight: 'Massa elektron hanya 1/1836 massa proton. Jika atom sebesar Bumi, elektron hanya sebesar lapangan basket.',
        highlightLabel: 'Betapa kecilnya elektron',
        model: 'plum', color: '#9060c0',
    },
    {
        chapter: 'Babak III', chapterNum: 'III', year: '1904', protagonist: 'J.J. Thomson',
        eyebrow: 'Model Plum Pudding · 1904',
        slideTitle: 'Model yang Logis — dan Salah Total',
        body: `<p>Model Thomson masuk akal secara logika: jika muatan negatif (elektron) tersebar merata, maka muatan positif harus menyeimbangkannya — juga tersebar merata. Seperti adonan yang netral secara keseluruhan.</p>
               <p>Thomson bahkan membuktikan secara matematis bahwa dalam model ini, elektron akan bergetar dengan frekuensi yang cocok dengan spektrum cahaya yang dipancarkan elemen — setidaknya untuk hidrogen.</p>
               <p>Tapi ada satu masalah. Muridnya sendiri sedang melakukan eksperimen yang akan menghancurkan model ini dalam waktu kurang dari 10 tahun.</p>`,
        highlight: 'Murid terbaik Thomson? Ernest Rutherford. Yang akan membuktikan bahwa gurunya sepenuhnya keliru.',
        highlightLabel: '↯ Ironi dalam Sains',
        model: 'plum', color: '#9060c0',
    },

    /* ══ BABAK IV — RUTHERFORD ═══════════════════════════ */
    {
        chapter: 'Babak IV', chapterNum: 'IV', year: '1909', protagonist: 'Ernest Rutherford',
        eyebrow: 'University of Manchester · 1909',
        slideTitle: 'Eksperimen Gold Foil — Rancangan yang Sederhana',
        body: `<p>Rutherford meminta dua asistennya — Hans Geiger dan Ernest Marsden — untuk melakukan eksperimen sederhana: <strong>tembakkan partikel alfa ke lembaran emas yang sangat tipis</strong>.</p>
               <p>Partikel alfa adalah partikel bermuatan positif yang dipancarkan oleh bahan radioaktif. Berdasarkan model Thomson, partikel ini seharusnya menembus lembaran emas dengan sedikit atau tanpa pembelokan — karena muatan positif tersebar merata dan tipis.</p>
               <p>Rutherford bahkan hampir tidak menyuruh Marsden melakukan ini — ia pikir hasilnya sudah bisa ditebak dan membosankan. Ia hampir salah besar.</p>`,
        highlight: 'Foil emas dipilih karena bisa dibuat setipis ~1.000 atom. Detektornya: layar yang berkilap saat terkena partikel alfa — diamati dengan mata dalam kegelapan selama berhari-hari.',
        highlightLabel: 'Setup Eksperimen',
        model: 'rutherford', color: '#e06030',
    },
    {
        chapter: 'Babak IV', chapterNum: 'IV', year: '1909', protagonist: 'Geiger & Marsden',
        eyebrow: 'Hasil yang Tidak Terduga · 1909',
        slideTitle: 'Peluru yang Memantul Balik',
        body: `<p>Sebagian besar partikel alfa menembus lurus — sesuai prediksi. Tapi kemudian Marsden melihat sesuatu yang tidak seharusnya terjadi:</p>
               <p><strong>Beberapa partikel membelok dengan sudut besar. Bahkan sebagian memantul hampir lurus balik.</strong></p>
               <p>Frekuensinya: 1 dari sekitar 8.000 partikel memantul dengan sudut lebih dari 90°.</p>
               <p>Marsden berlari ke Rutherford. Rutherford tidak percaya. Ia menyuruh Marsden mengulang eksperimen berkali-kali. Hasilnya sama.</p>`,
        highlight: '"Itu seperti menembakkan peluru 15 inci ke selembar tisu, dan peluru itu memantul balik mengenai kamu. Saya terkejut luar biasa ketika ini terjadi."',
        highlightLabel: '— Ernest Rutherford, 1911',
        model: 'rutherford-bounce', color: '#e06030',
    },
    {
        chapter: 'Babak IV', chapterNum: 'IV', year: '1911', protagonist: 'Ernest Rutherford',
        eyebrow: 'Kesimpulan · 1911',
        slideTitle: 'Atom Adalah (Hampir Seluruhnya) Ruang Kosong',
        body: `<p>Rutherford menghabiskan 18 bulan menghitung dan menghitung lagi. Satu-satunya penjelasan yang masuk akal:</p>
               <p>Seluruh massa positif atom terpusat di <strong>inti yang sangat kecil</strong> — ia menyebutnya nukleus. Sedangkan elektron mengorbit di sekitarnya dengan jarak yang sangat jauh secara proporsional.</p>
               <p>Jika nukleus seukuran kelereng (1 cm), elektron terdekat berjarak <strong>satu kilometer</strong>. Di antaranya? <em>Ruang kosong.</em></p>`,
        highlight: 'Atom yang menyusun tanganmu adalah 99,9999999999996% ruang kosong. Materi terasa padat bukan karena penuh — tapi karena gaya elektromagnetik menolak atom lain mendekat.',
        highlightLabel: '↯ Fakta yang Mengubah Intuisimu',
        model: 'nuclear', color: '#e06030',
    },
    {
        chapter: 'Babak IV', chapterNum: 'IV', year: '1911', protagonist: 'Rutherford',
        eyebrow: 'Masalah Fatal Model Rutherford',
        slideTitle: 'Model yang Indah — tapi Memiliki Masalah Mematikan',
        body: `<p>Model Rutherford elegan: nukleus di tengah, elektron mengorbit seperti planet mengorbit matahari. Tapi ada satu masalah fatal yang langsung terlihat oleh fisikawan.</p>
               <p>Menurut fisika klasik Maxwell: <strong>partikel bermuatan yang berakselerasi (bergerak melingkar = berakselerasi) harus memancarkan energi elektromagnetik</strong>.</p>
               <p>Jika elektron terus memancarkan energi, ia akan kehilangan energi, spiralnya mengecil, dan dalam hitungan <strong>waktu kurang dari sepersekian detik</strong>, elektron akan jatuh ke nukleus. Atom seharusnya tidak bisa stabil.</p>
               <p>Tapi kenyataannya? Atom stabil. Ada yang salah dengan fisika klasik — atau model ini.</p>`,
        highlight: 'Menurut perhitungan, elektron hidrogen seharusnya jatuh ke nukleus dalam ~16 picosecond (0.000000000016 detik). Tapi hidrogen sudah ada sejak Big Bang. Sesuatu tidak beres.',
        highlightLabel: 'Masalah yang Mendorong Kelahiran Mekanika Kuantum',
        model: 'nuclear', color: '#e06030',
    },

    /* ══ BABAK V — BOHR ══════════════════════════════════ */
    {
        chapter: 'Babak V', chapterNum: 'V', year: '1913', protagonist: 'Niels Bohr',
        eyebrow: 'Copenhagen · 1913',
        slideTitle: 'Elektron Tidak Mengikuti Hukum Fisika Klasik',
        body: `<p>Niels Bohr, fisikawan muda Denmark yang baru magang di laboratorium Rutherford, mengusulkan ide yang radikal: <strong>Fisika klasik tidak berlaku di dalam atom.</strong></p>
               <p>Ia terinspirasi dari dua hal: model Rutherford dan satu teka-teki lama yang belum terpecahkan — <strong>spektrum emisi hidrogen</strong>.</p>
               <p>Ketika hidrogen dipanaskan hingga bercahaya, ia hanya memancarkan cahaya pada panjang gelombang tertentu — tidak semua warna seperti yang diharapkan. Mengapa? Tidak ada yang tahu. Sampai Bohr.</p>`,
        highlight: 'Spektrum hidrogen: 4 garis warna spesifik di 656nm (merah), 486nm (biru-hijau), 434nm (biru-ungu), 410nm (ungu). Pola ini sudah diketahui, tapi belum ada yang bisa menjelaskannya.',
        highlightLabel: 'Teka-teki Spektrum Balmer · 1885–1913',
        model: 'bohr', color: '#40a080',
    },
    {
        chapter: 'Babak V', chapterNum: 'V', year: '1913', protagonist: 'Niels Bohr',
        eyebrow: 'Postulat Bohr · 1913',
        slideTitle: 'Orbit Kuantum — Aturan Baru yang Mengejutkan',
        body: `<ul class="ah-list">
                 <li><span class="ah-list-num">01</span><div><strong>Elektron hanya boleh ada di orbit tertentu</strong> — orbit-orbit ini memiliki energi tetap dan spesifik. Tidak ada di antara mereka.</div></li>
                 <li><span class="ah-list-num">02</span><div><strong>Selama di orbit itu, elektron tidak memancarkan energi</strong> — aturan ini melanggar fisika klasik, tapi Bohr menetapkannya sebagai postulat.</div></li>
                 <li><span class="ah-list-num">03</span><div><strong>Elektron bisa lompat antar orbit</strong> — dengan menyerap foton (naik orbit) atau memancarkan foton (turun orbit). Energi foton = selisih energi antar orbit.</div></li>
               </ul>`,
        highlight: 'Ini langsung menjelaskan spektrum hidrogen: garis-garis spektrum itu TEPAT sesuai selisih energi antar orbit yang Bohr hitung. Cocok hingga 4 desimal.',
        highlightLabel: '✓ Berhasil Sempurna untuk Hidrogen',
        model: 'bohr', color: '#40a080',
    },
    {
        chapter: 'Babak V', chapterNum: 'V', year: '1913–1923', protagonist: 'Niels Bohr',
        eyebrow: 'Kegagalan Model Bohr',
        slideTitle: 'Berhasil untuk Hidrogen. Gagal untuk Semua yang Lain.',
        body: `<p>Model Bohr adalah kemenangan besar — untuk hidrogen. Tapi ketika fisikawan mencoba menerapkannya ke helium (2 elektron) atau atom yang lebih besar: <strong>gagal total</strong>.</p>
               <p>Tidak ada yang bisa menjelaskan kenapa elektron hanya boleh di orbit tertentu. Postulat Bohr benar secara empiris, tapi tidak ada landasan teori di baliknya.</p>
               <p>Dan ada pertanyaan yang lebih mendasar: jika elektron bisa "lompat" dari satu orbit ke orbit lain secara instan — tanpa melalui ruang di antaranya — apa artinya "lokasi" sebuah elektron?</p>`,
        highlight: '"Saya berharap kepada satu orang untuk memecahkan masalah ini." — Bohr kepada fisikawan muda Werner Heisenberg, 1922. Bohr hampir tahu apa yang akan datang.',
        highlightLabel: '↯ Pintu Menuju Dunia Kuantum',
        model: 'bohr', color: '#40a080',
    },

    /* ══ BABAK VI — QUANTUM ══════════════════════════════ */
    {
        chapter: 'Babak VI', chapterNum: 'VI', year: '1924', protagonist: 'Louis de Broglie',
        eyebrow: 'Paris · 1924',
        slideTitle: 'Elektron adalah Gelombang — dan Partikel',
        body: `<p>Seorang mahasiswa PhD bernama Louis de Broglie mengajukan ide gila dalam tesisnya: <strong>jika cahaya bisa berperilaku sebagai partikel (foton), mungkin partikel seperti elektron bisa berperilaku sebagai gelombang.</strong></p>
               <p>Ia menurunkan rumus sederhana: panjang gelombang elektron = konstanta Planck dibagi momentum elektron. Tidak ada alasan eksperimental untuk ini — murni intuisi matematis.</p>
               <p>Penguji tesisnya tidak tahu apa yang harus dilakukan dengan ide ini. Mereka mengirim tesis tersebut ke Einstein. Einstein menjawab: "Ini terlihat gila, tapi saya yakin ini benar."</p>
               <p>Dua tahun kemudian, eksperimen difraksi elektron membuktikan de Broglie benar.</p>`,
        highlight: 'Nobel Fisika 1929 untuk de Broglie — untuk memenangkan Nobel dari sebuah tesis PhD adalah hal yang hampir belum pernah terjadi sebelumnya.',
        highlightLabel: 'Gelombang de Broglie · 1924',
        model: 'quantum', color: '#5060e0',
    },
    {
        chapter: 'Babak VI', chapterNum: 'VI', year: '1925', protagonist: 'Werner Heisenberg',
        eyebrow: 'Göttingen · 1925',
        slideTitle: 'Prinsip Ketidakpastian — Bukan Keterbatasan Alat, Tapi Realitas',
        body: `<p>Werner Heisenberg, usia 23 tahun, pergi ke pulau terpencil karena rhinitis parah. Di sana, terisolasi, ia mengembangkan <strong>Prinsip Ketidakpastian</strong>.</p>
               <p>Pernyataannya: <em>Kamu tidak bisa mengetahui posisi dan momentum (kecepatan × massa) sebuah partikel secara bersamaan dengan presisi tak terbatas.</em></p>
               <p>Semakin akurat kamu mengukur posisi elektron, semakin tidak pasti momentumnya. Dan sebaliknya. <strong>Ini bukan karena alat ukur kita tidak cukup canggih</strong> — ini adalah properti fundamental alam semesta.</p>`,
        highlight: 'Δx · Δp ≥ ℏ/2',
        highlightLabel: 'Persamaan Ketidakpastian Heisenberg — dimana ℏ adalah konstanta Planck yang dibagi 2π',
        model: 'quantum', color: '#5060e0',
    },
    {
        chapter: 'Babak VI', chapterNum: 'VI', year: '1926', protagonist: 'Erwin Schrödinger',
        eyebrow: 'Zürich · 1926',
        slideTitle: 'Fungsi Gelombang — Elektron Ada di Mana-Mana Sekaligus',
        body: `<p>Schrödinger mengembangkan persamaan gelombang yang mendeskripsikan evolusi elektron dalam waktu. Fungsi gelombang (ψ) ini mengandung semua informasi yang mungkin kita ketahui tentang elektron.</p>
               <p>Interpretasinya: <strong>kuadrat dari fungsi gelombang (|ψ|²) di satu titik = probabilitas menemukan elektron di titik itu</strong>.</p>
               <p>Elektron tidak ada di satu tempat. Ia ada sebagai distribusi probabilitas — "awan" yang tersebar. Hanya ketika diukur, elektron "collaps" ke satu posisi. Sebelum diukur: ia ada di mana-mana (superposisi).</p>`,
        highlight: '"Tuhan tidak bermain dadu." — Einstein, menolak interpretasi probabilistik ini sampai akhir hayatnya. "Jangan katakan pada Tuhan apa yang harus ia lakukan." — Bohr menjawab.',
        highlightLabel: '↯ Debat Einstein vs. Bohr yang Tidak Pernah Selesai',
        model: 'quantum', color: '#5060e0',
    },
    {
        chapter: 'Babak VI', chapterNum: 'VI', year: '1927–Kini', protagonist: 'Interpretasi Copenhagen',
        eyebrow: 'Model Atom Modern',
        slideTitle: 'Orbital — Cloud of Probability, Bukan Orbit Planet',
        body: `<p>Model atom modern yang diterima saat ini berasal dari mekanika kuantum. Elektron tidak bergerak dalam orbit melingkar seperti planet — mereka mendiami <strong>orbital</strong> yang merupakan wilayah probabilitas dalam 3 dimensi.</p>
               <p>Setiap orbital punya bentuk berbeda: spherical (s), dumbbell (p), kompleks (d, f). Elektron ada di orbital ini sebagai distribusi probabilitas — bukan sebagai seperti bola kecil yang berputar.</p>
               <p>Model ini berlaku sampai sekarang. Ia memprediksikan sifat kimia, ikatan molekul, dan spektrum atom dengan akurasi luar biasa — bahkan untuk atom seproton hidrogen hingga unsur-unsur berat.</p>`,
        highlight: 'Teori Kuantum adalah teori yang paling berhasil dan paling akurat dalam sejarah fisika. Prediksinya cocok dengan eksperimen hingga 12 angka desimal.',
        highlightLabel: 'Model Atom yang Kita Gunakan Sekarang',
        model: 'quantum', color: '#5060e0',
    },

    /* ══ EPILOG ══════════════════════════════════════════ */
    {
        chapter: 'Epilog', chapterNum: '∞', year: 'Kini', protagonist: '',
        eyebrow: 'Perjalanan Belum Selesai',
        slideTitle: 'Atom masih menyimpan rahasia.',
        body: `<p>Kita belum benar-benar tahu <em>apa</em> yang membuat elektron berperilaku seperti gelombang probabilitas. Interpretasi Copenhagen, Many-Worlds, Pilot Wave — fisikawan masih berdebat tentang <strong>apa arti sesungguhnya dari mekanika kuantum</strong>.</p>
               <p>Kita tahu proton dan neutron terbuat dari quark — partikel yang lebih fundamental. Tapi apakah quark adalah unit terkecil? Atau ada level yang lebih dalam?</p>
               <p>Dan masalah terbesar: <strong>mekanika kuantum dan relativitas umum Einstein tidak bisa disatukan</strong>. Keduanya benar di domainnya masing-masing — tapi mereka tidak bisa mendeskripsikan realitas dalam satu teori yang konsisten.</p>`,
        highlight: '"Jika kamu tidak terkejut dengan mekanika kuantum, itu artinya kamu belum benar-benar memahaminya." — Richard Feynman',
        highlightLabel: 'Dan itulah yang membuat fisika begitu mengagumkan',
        model: 'epilog', color: '#7c73ff',
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
                <div class="amod-solid-caption">Atom menurut Democritus</div>
            </div>`;

        case 'aristotle':
            return `<div class="amod amod-aristotle">
                <div class="amod-elements">
                    <div class="amod-el fire">🜂<span>Api</span></div>
                    <div class="amod-el air">🜁<span>Udara</span></div>
                    <div class="amod-el water">🜄<span>Air</span></div>
                    <div class="amod-el earth">🜃<span>Tanah</span></div>
                </div>
                <div class="amod-solid-caption">4 Elemen Aristoteles</div>
            </div>`;

        case 'billiard':
            return `<div class="amod amod-billiard-wrap" style="--mc:${color}">
                <div class="amod-billiard-ball">
                    <div class="amod-billiard-gloss"></div>
                    <div class="amod-billiard-band"></div>
                </div>
                <div class="amod-solid-caption">Model Bola Biliar (Dalton)</div>
            </div>`;

        case 'cathode':
            return `<div class="amod amod-cathode">
                <div class="amod-tube">
                    <div class="amod-cathode-neg">−</div>
                    <div class="amod-beam"></div>
                    <div class="amod-cathode-pos">+</div>
                </div>
                <div class="amod-electron-particles">
                    ${Array.from({ length: 5 }).map((_, i) => `<div class="amod-beam-e" style="--i:${i}">e⁻</div>`).join('')}
                </div>
                <div class="amod-solid-caption">Tabung Katoda Thomson</div>
            </div>`;

        case 'plum':
            return `<div class="amod amod-plum-wrap" style="--mc:${color}">
                <div class="amod-plum-sphere">
                    ${Array.from({ length: 10 }).map((_, i) =>
                `<div class="amod-plum-e" style="--i:${i};--px:${(Math.random() * 70 - 35).toFixed(1)};--py:${(Math.random() * 70 - 35).toFixed(1)}">e⁻</div>`
            ).join('')}
                    <div class="amod-plum-plus">+ + +<br>+ + +</div>
                </div>
                <div class="amod-solid-caption">Model Plum Pudding (Thomson)</div>
            </div>`;

        case 'rutherford':
        case 'rutherford-bounce':
            return `<div class="amod amod-rutherford-wrap" style="--mc:${color}">
                <div class="amod-foil-label">Foil Emas</div>
                <div class="amod-rfield">
                    <div class="amod-foil-line"></div>
                    ${Array.from({ length: 6 }).map((_, i) =>
                `<div class="amod-alpha-particle ${i === 1 || i === 4 ? 'bounce' : ''}" style="--i:${i}"></div>`
            ).join('')}
                    <div class="amod-rnucleus">Au<br><small>79</small></div>
                </div>
                <div class="amod-solid-caption">Eksperimen Gold Foil</div>
            </div>`;

        case 'nuclear':
            return `<div class="amod amod-nuclear" style="--mc:${color}">
                <div class="amod-nuc-scale">
                    <div class="amod-nuc-atom">
                        <div class="amod-nuc-orbit"></div>
                        <div class="amod-nuc-nucleus">p⁺</div>
                        <div class="amod-nuc-e">e⁻</div>
                    </div>
                    <div class="amod-nuc-arrow">←——————————— 1 km ———————————→</div>
                    <div class="amod-nuc-caption">Jika nukleus = 1 cm kelereng</div>
                </div>
            </div>`;

        case 'bohr':
            return `<div class="amod amod-bohr-wrap" style="--mc:${color}">
                <div class="amod-bohr">
                    <div class="amod-bohr-nuc">p⁺n</div>
                    <div class="amod-borbit o1"><div class="amod-be1">e⁻</div></div>
                    <div class="amod-borbit o2"><div class="amod-be2" style="animation-delay:-1s">e⁻</div></div>
                    <div class="amod-borbit o3"><div class="amod-be3" style="animation-delay:-2.2s">e⁻</div></div>
                </div>
                <div class="amod-photon" id="amod-photon">hν</div>
                <div class="amod-solid-caption">Model Bohr — Orbit Kuantum</div>
            </div>`;

        case 'quantum':
            return `<div class="amod amod-quantum-wrap">
                <canvas id="qcloud-canvas" class="amod-qcanvas" width="280" height="280"></canvas>
                <div class="amod-solid-caption">Orbital Kuantum — Awan Probabilitas</div>
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
   RENDER SINGLE SLIDE HTML
   ───────────────────────────────────────────────────────────────────── */
function renderSlide(slide: Slide, idx: number, total: number): string {
    return `
    <div class="ah-slide" id="slide-${idx}" data-idx="${idx}" style="--sc:${slide.color}">
        <!-- Background glow -->
        <div class="ah-slide-bg"></div>

        <div class="ah-slide-inner">
            <!-- Left: Text -->
            <div class="ah-slide-text">
                <div class="ah-slide-chapter-tag">
                    <span class="ah-chapter-roman">${slide.chapterNum}</span>
                    <span class="ah-chapter-name">${slide.chapter}</span>
                    <span class="ah-chapter-dot">·</span>
                    <span class="ah-slide-year">${slide.year}</span>
                </div>

                ${slide.protagonist ? `<div class="ah-slide-protagonist">${slide.protagonist}</div>` : ''}
                ${slide.eyebrow ? `<div class="ah-slide-eyebrow">${slide.eyebrow}</div>` : ''}

                <h2 class="ah-slide-title">${slide.slideTitle.replace(/\n/g, '<br>')}</h2>

                <div class="ah-slide-body">${slide.body}</div>

                ${slide.highlight ? `
                <div class="ah-slide-highlight">
                    <div class="ah-hl-bar"></div>
                    <div class="ah-hl-content">
                        <div class="ah-hl-text">${slide.highlight}</div>
                        ${slide.highlightLabel ? `<div class="ah-hl-label">${slide.highlightLabel}</div>` : ''}
                    </div>
                </div>` : ''}
            </div>

            <!-- Right: Model -->
            <div class="ah-slide-model">
                ${renderAtomModel(slide.model, slide.color)}
            </div>
        </div>

        <!-- Slide counter (bottom right) -->
        <div class="ah-slide-counter">${idx + 1} / ${total}</div>
    </div>`;
}

/* ─────────────────────────────────────────────────────────────────────
   MAIN EXPORT
   ───────────────────────────────────────────────────────────────────── */
export function renderAtomHistory(container: HTMLElement): () => void {
    const cleanups: Array<() => void> = [];
    const TOTAL = SLIDES.length;
    let currentIdx = 0;
    let isAnimating = false;

    container.innerHTML = `
    <div class="ah-root2">

        <!-- Back button -->
        <button class="ah-back2" id="ah-back2">
            <span>←</span><span>Beranda</span>
        </button>

        <!-- Top chapter progress dots -->
        <div class="ah-chapter-dots" id="ah-chapter-dots">
            ${SLIDES.map((s, i) => `
            <button class="ah-cdot ${i === 0 ? 'active' : ''}" data-idx="${i}" title="${s.chapter} · ${s.year}" id="cdot-${i}">
                <div class="ah-cdot-inner"></div>
            </button>`).join('')}
        </div>

        <!-- Chapter name display -->
        <div class="ah-chapter-display" id="ah-chapter-display">
            <span id="ah-chapter-label">${SLIDES[0].chapter}</span>
            <span class="ah-chapter-sep">·</span>
            <span id="ah-year-label">${SLIDES[0].year}</span>
        </div>

        <!-- Slide viewport -->
        <div class="ah-viewport" id="ah-viewport">
            <div class="ah-slides-track" id="ah-slides-track">
                ${SLIDES.map((s, i) => renderSlide(s, i, TOTAL)).join('')}
            </div>
        </div>

        <!-- Navigation -->
        <div class="ah-nav-btns">
            <button class="ah-nav-btn prev" id="ah-prev" disabled>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div class="ah-nav-progress">
                <div class="ah-nav-track">
                    <div class="ah-nav-fill" id="ah-nav-fill" style="width:${(1 / TOTAL * 100).toFixed(2)}%"></div>
                </div>
                <div class="ah-nav-nums"><span id="ah-cur">1</span><span class="ah-nav-sep">/</span><span>${TOTAL}</span></div>
            </div>
            <button class="ah-nav-btn next" id="ah-next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
        </div>

    </div>`;

    /* ── DOM refs ── */
    const track = document.getElementById('ah-slides-track')!;
    const prevBtn = document.getElementById('ah-prev') as HTMLButtonElement;
    const nextBtn = document.getElementById('ah-next') as HTMLButtonElement;
    const navFill = document.getElementById('ah-nav-fill')!;
    const curNum = document.getElementById('ah-cur')!;
    const chapterLabel = document.getElementById('ah-chapter-label')!;
    const yearLabel = document.getElementById('ah-year-label')!;
    const dots = container.querySelectorAll('.ah-cdot');

    /* ── Navigation ── */
    function goTo(idx: number, direction: 'next' | 'prev' = 'next') {
        if (isAnimating || idx < 0 || idx >= TOTAL) return;
        isAnimating = true;

        const current = document.getElementById(`slide-${currentIdx}`)!;
        const next = document.getElementById(`slide-${idx}`)!;

        // Set starting position
        const enterFrom = direction === 'next' ? '100%' : '-100%';
        const exitTo = direction === 'next' ? '-100%' : '100%';

        next.style.transform = `translateX(${enterFrom})`;
        next.style.opacity = '0';
        next.style.transition = 'none';
        next.style.display = 'flex';

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                current.style.transition = 'transform 0.55s cubic-bezier(0.76,0,0.24,1), opacity 0.55s ease';
                current.style.transform = `translateX(${exitTo})`;
                current.style.opacity = '0';

                next.style.transition = 'transform 0.55s cubic-bezier(0.76,0,0.24,1), opacity 0.55s ease';
                next.style.transform = 'translateX(0)';
                next.style.opacity = '1';
            });
        });

        setTimeout(() => {
            current.style.display = 'none';
            currentIdx = idx;
            isAnimating = false;
            updateUI();
            // Init quantum canvas if this slide needs it
            if (SLIDES[idx].model === 'quantum') initQCloud();
        }, 580);
    }

    function updateUI() {
        const s = SLIDES[currentIdx];
        // progress bar
        navFill.style.width = `${((currentIdx + 1) / TOTAL * 100).toFixed(2)}%`;
        curNum.textContent = String(currentIdx + 1);

        // chapter label
        chapterLabel.textContent = s.chapter;
        yearLabel.textContent = s.year;

        // buttons
        prevBtn.disabled = currentIdx === 0;
        nextBtn.disabled = currentIdx === TOTAL - 1;

        // update dots
        dots.forEach((d, i) => {
            d.classList.toggle('active', i === currentIdx);
            d.classList.toggle('visited', i < currentIdx);
        });
    }

    /* ── Initial slide setup ── */
    const slideEls = track.querySelectorAll<HTMLElement>('.ah-slide');
    slideEls.forEach((el, i) => {
        el.style.display = i === 0 ? 'flex' : 'none';
    });

    /* ── Button events ── */
    prevBtn.addEventListener('click', () => goTo(currentIdx - 1, 'prev'));
    nextBtn.addEventListener('click', () => goTo(currentIdx + 1, 'next'));

    /* ── Dot clicks ── */
    dots.forEach((d, i) => {
        d.addEventListener('click', () => goTo(i, i > currentIdx ? 'next' : 'prev'));
    });

    /* ── Keyboard ── */
    function onKey(e: KeyboardEvent) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(currentIdx + 1, 'next');
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goTo(currentIdx - 1, 'prev');
    }
    document.addEventListener('keydown', onKey);
    cleanups.push(() => document.removeEventListener('keydown', onKey));

    /* ── Touch / swipe ── */
    let touchStartX = 0;
    const viewport = document.getElementById('ah-viewport')!;
    viewport.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    viewport.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) {
            if (dx < 0) goTo(currentIdx + 1, 'next');
            else goTo(currentIdx - 1, 'prev');
        }
    });

    /* ── Back button ── */
    document.getElementById('ah-back2')?.addEventListener('click', () => navigate('/'));

    /* ── Quantum cloud canvas ── */
    let qraf = 0;
    function initQCloud() {
        if (qraf) cancelAnimationFrame(qraf);
        const canvas = document.getElementById('qcloud-canvas') as HTMLCanvasElement | null;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2;

        function gauss() {
            let u = 0, v = 0;
            while (!u) u = Math.random();
            while (!v) v = Math.random();
            return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
        }

        let t = 0;
        function draw() {
            ctx.clearRect(0, 0, W, H);
            t += 0.016;

            // s orbital (spherical cloud)
            for (let i = 0; i < 250; i++) {
                const r = Math.abs(gauss()) * 55 + Math.abs(gauss()) * 15;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;
                const x = cx + r * Math.sin(phi) * Math.cos(theta + t * 0.15);
                const y = cy + r * Math.sin(phi) * Math.sin(theta + t * 0.15) * 0.6;
                const alpha = Math.random() * 0.45 + 0.1;
                ctx.fillStyle = `rgba(80,96,224,${alpha})`;
                ctx.beginPath();
                ctx.arc(x, y, Math.random() * 2.5 + 0.5, 0, Math.PI * 2);
                ctx.fill();
            }

            // Nucleus glow
            const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18);
            g.addColorStop(0, 'rgba(255,255,255,0.95)');
            g.addColorStop(0.4, 'rgba(160,180,255,0.7)');
            g.addColorStop(1, 'transparent');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(cx, cy, 16, 0, Math.PI * 2); ctx.fill();

            // Uncertainty rings
            for (let r = 28; r <= 110; r += 28) {
                ctx.strokeStyle = `rgba(80,96,224,${0.12 + Math.sin(t * 1.5 + r) * 0.06})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(cx, cy, r + Math.sin(t * 2 + r * 0.1) * 4, 0, Math.PI * 2);
                ctx.stroke();
            }

            qraf = requestAnimationFrame(draw);
        }
        draw();
        cleanups.push(() => cancelAnimationFrame(qraf));
    }

    // Init if first slide needs it (won't, but safety)
    if (SLIDES[0].model === 'quantum') initQCloud();

    return () => cleanups.forEach(fn => fn());
}
