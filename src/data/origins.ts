// ─────────────────────────────────────────────────────────────────────────────
// Asal usul kosmik elemen — stellar nucleosynthesis
// ─────────────────────────────────────────────────────────────────────────────

export type OriginType =
    | 'big_bang'           // Big Bang nucleosynthesis
    | 'cosmic_ray'         // Cosmic ray spallation
    | 'stellar_fusion'     // Stellar hydrogen/helium burning
    | 'supernova'          // Core-collapse supernova (r-process/explosive)
    | 'neutron_star_merge' // Neutron star merger (r-process)
    | 'white_dwarf'        // Type Ia supernova / AGB stars (s-process)
    | 'artificial'         // Man-made in labs/reactors
    | 'radioactive_decay'; // Decay of heavier elements

export interface ElementOrigin {
    sym: string;
    type: OriginType;
    /** Short label shown on the card */
    label: string;
    /** Emoji icon for the origin */
    icon: string;
    /** Accent color for the card */
    color: string;
    /** One-line teaser */
    tagline: string;
    /** Full story (2-4 paragraphs) */
    story: string;
}

export const origins: ElementOrigin[] = [
    {
        sym: 'H', type: 'big_bang', label: 'Big Bang', icon: '💥',
        color: '#60a5fa',
        tagline: 'Lahir dalam tiga menit pertama alam semesta.',
        story: 'Hidrogen adalah elemen paling tua di alam semesta. Dalam tiga menit pertama setelah Big Bang, proton dan neutron bergabung membentuk inti hidrogen dan sedikit helium — proses yang disebut Big Bang nucleosynthesis. Sekitar 75% massa alam semesta awal adalah hidrogen.\n\nSetiap atom hidrogen di tubuhmu berusia sekitar 13,8 miliar tahun — hampir setua alam semesta itu sendiri. Hidrogen di laut, di DNA-mu, di bahan bakar roket — semuanya terbentuk dalam ledakan kosmik yang sama.',
    },
    {
        sym: 'He', type: 'big_bang', label: 'Big Bang', icon: '💥',
        color: '#60a5fa',
        tagline: 'Ditemukan di matahari sebelum ditemukan di Bumi.',
        story: 'Sekitar 25% helium di alam semesta terbentuk dalam Big Bang, bersama hidrogen. Sisanya diproduksi dalam inti bintang melalui fusi nuklir hidrogen — reaksi yang menggerakkan semua bintang termasuk Matahari.\n\nHelium pertama kali dideteksi dari garis spektral Matahari pada 1868 — 27 tahun sebelum ditemukan di Bumi. Namanya berasal dari Helios, dewa Matahari Yunani.',
    },
    {
        sym: 'Li', type: 'big_bang', label: 'Big Bang + Kosmik', icon: '💥',
        color: '#60a5fa',
        tagline: 'Sebagian dari Big Bang, sebagian dari sinar kosmik.',
        story: 'Litium adalah satu dari tiga elemen yang terbentuk dalam Big Bang (bersama H dan He), tapi hanya dalam jumlah sangat kecil — sekitar 1 atom litium per 10 miliar atom hidrogen.\n\nSebagian besar litium di alam semesta terbentuk melalui "sinar kosmik spallation" — partikel berenergi tinggi yang menghantam atom karbon dan oksigen di luar angkasa, memecahnya menjadi inti-inti lebih kecil termasuk litium.',
    },
    {
        sym: 'Be', type: 'cosmic_ray', label: 'Sinar Kosmik', icon: '☄️',
        color: '#a78bfa',
        tagline: 'Dibuat oleh tabrakan partikel kosmik di ruang angkasa.',
        story: 'Berilium hampir tidak diproduksi di dalam bintang sama sekali — bintang justru menghancurkannya. Sebaliknya, berilium terbentuk ketika sinar kosmik (proton dan inti atom berenergi ultra-tinggi) menghantam atom karbon, nitrogen, dan oksigen di medium antarbintang, memecahnya menjadi fragmen lebih kecil — proses yang disebut spallation.\n\nProses ini sangat lambat dan tidak efisien, itulah mengapa berilium adalah elemen paling langka di antara elemen ringan.',
    },
    {
        sym: 'B', type: 'cosmic_ray', label: 'Sinar Kosmik', icon: '☄️',
        color: '#a78bfa',
        tagline: 'Serpihan tabrakan kosmik — sama langkanya dengan berilium.',
        story: 'Seperti litium dan berilium, boron hampir tidak diproduksi di dalam bintang. Ia terbentuk terutama melalui sinar kosmik spallation — penghancuran nuklir atom-atom lebih berat oleh partikel berenergi sangat tinggi yang meluncur melintasi galaksi.\n\nKelangkaan Li, Be, dan B dibanding elemen tetangganya (C, N, O) adalah bukti langsung bahwa mereka tidak berasal dari inti bintang seperti kebanyakan elemen lain.',
    },
    {
        sym: 'C', type: 'stellar_fusion', label: 'Pembakaran Helium', icon: '⭐',
        color: '#fbbf24',
        tagline: 'Dibuat di jantung bintang-bintang tua yang membara.',
        story: 'Karbon adalah produk dari "triple-alpha process" — reaksi fusi di mana tiga inti helium bergabung membentuk satu inti karbon-12 di dalam bintang raksasa. Proses ini terjadi di inti bintang yang telah kehabisan hidrogen dan mulai membakar helium.\n\nSemua karbon di tubuhmu — di DNA, protein, lemak — dibuat di dalam bintang yang meledak jauh sebelum Matahari terbentuk. Kamu benar-benar terbuat dari debu bintang.',
    },
    {
        sym: 'N', type: 'stellar_fusion', label: 'Siklus CNO', icon: '⭐',
        color: '#fbbf24',
        tagline: 'Produk sampingan dari reaksi fusi di bintang masif.',
        story: 'Nitrogen diproduksi dalam "siklus CNO" — cara alternatif bintang-bintang masif membakar hidrogen menggunakan karbon, nitrogen, dan oksigen sebagai katalis. Siklus ini menghasilkan lebih banyak nitrogen di lapisan luar bintang.\n\nNitrogen yang membentuk 78% atmosfer Bumi, yang ada di basa DNA-mu, yang ada di protein setiap sel hidup — semua berasal dari inti bintang-bintang tua yang telah meledak miliaran tahun lalu.',
    },
    {
        sym: 'O', type: 'stellar_fusion', label: 'Pembakaran Karbon', icon: '⭐',
        color: '#fbbf24',
        tagline: 'Elemen paling melimpah ketiga di alam semesta.',
        story: 'Oksigen terbentuk di inti bintang masif melalui dua proses utama: fusi helium (menghasilkan O-16) dan "pembakaran neon". Bintang masif menghabiskan ratusan juta tahun membakar hidrogen, lalu beberapa juta tahun membakar helium, lalu ribuan tahun membakar karbon dan oksigen.\n\nSemua oksigen di Bumi — di air, di udara, di tulang dan darahmu — berasal dari bintang-bintang yang meledak sebagai supernova sebelum tata surya kita terbentuk 4,6 miliar tahun lalu.',
    },
    {
        sym: 'F', type: 'supernova', label: 'Supernova / AGB', icon: '🌟',
        color: '#f97316',
        tagline: 'Asal usulnya masih diperdebatkan para astronom.',
        story: 'Fluor adalah elemen yang asal usulnya paling membingungkan para astrofisikawan. Kemungkinan sumbernya mencakup: neutrino dari supernova inti yang membentur neon dan melepaskan fluor, bintang AGB (Asymptotic Giant Branch) yang melepaskan fluor melalui angin bintang, dan mungkin tabrakan bintang neutron.\n\nFluor sangat reaktif sehingga sulit bertahan lama di alam — hampir semua fluor di kerak Bumi terikat dalam mineral fluorit.',
    },
    {
        sym: 'Ne', type: 'stellar_fusion', label: 'Pembakaran Karbon', icon: '⭐',
        color: '#fbbf24',
        tagline: 'Dibuat di lapisan dalam bintang masif sebelum meledak.',
        story: 'Neon terbentuk di inti bintang masif melalui fusi karbon — dua inti karbon bergabung membentuk neon dan magnesium. Ini terjadi di tahap akhir kehidupan bintang masif, berlangsung hanya ratusan tahun.\n\nKetika bintang meledak sebagai supernova, neon (bersama oksigen, karbon, dan magnesium) dilempar ke ruang angkasa membentuk nebula — akhirnya berkumpul dalam sistem bintang baru seperti tata surya kita.',
    },
    {
        sym: 'Na', type: 'stellar_fusion', label: 'Pembakaran Karbon', icon: '⭐',
        color: '#fbbf24',
        tagline: 'Lahir dari fusi karbon di bintang masif.',
        story: 'Natrium diproduksi terutama dalam pembakaran karbon di inti bintang masif — reaksi yang menghasilkan Na-23. Bintang masif yang berumur pendek (jutaan tahun) bertindak sebagai pabrik natrium dan menyebarkannya melalui ledakan supernova.\n\nGaram dapur (NaCl) yang manusia gunakan sejak zaman prasejarah adalah kombinasi natrium dari supernova kuno dan klorin dari proses serupa — dua serpihan bintang yang bergabung di lautan Bumi purba.',
    },
    {
        sym: 'Mg', type: 'stellar_fusion', label: 'Pembakaran Neon', icon: '⭐',
        color: '#fbbf24',
        tagline: 'Diproduksi di tahap akhir kehidupan bintang masif.',
        story: 'Magnesium terbentuk melalui pembakaran neon dan karbon di bintang masif. Ia kemudian tersebar ke seluruh galaksi melalui supernova.\n\nMagnesium adalah salah satu elemen paling melimpah di alam semesta berbatu — ia adalah komponen utama batuan mantel Bumi, meteorit, dan bintang. Kelangkaan relatifnya terhadap besi memberikan petunjuk tentang sejarah pembentukan galaksi.',
    },
    {
        sym: 'Al', type: 'supernova', label: 'Supernova', icon: '🌟',
        color: '#f97316',
        tagline: 'Disebar ke galaksi oleh ledakan supernova.',
        story: 'Aluminium-26 (isotop radioaktif) diproduksi dalam supernova dan dideteksi melimpah di galaksi melalui emisi sinar gamma-nya — bukti langsung bahwa supernova menyebar elemen ke seluruh galaksi. Al-27 (stabil) terbentuk dalam bintang masif melalui pembakaran neon dan magnesium.\n\nBahwa sistem tata surya kita terbentuk cepat setelah supernova terdekat dapat dilihat dari isotop Al-26 yang terperangkap dalam meteorit tertua — "bukti forensik" ledakan bintang yang memicu pembentukan Matahari kita.',
    },
    {
        sym: 'Si', type: 'stellar_fusion', label: 'Pembakaran Oksigen', icon: '⭐',
        color: '#fbbf24',
        tagline: 'Dibentuk dalam pembakaran oksigen — jam-jam terakhir bintang.',
        story: 'Silikon terbentuk melalui pembakaran oksigen di inti bintang masif — proses yang berlangsung hanya beberapa hari sebelum bintang meledak! Di inti yang semakin panas dan padat, dua inti oksigen bergabung menghasilkan silikon, belerang, dan elemen-elemen "silicon burning" lainnya.\n\nSilikon adalah elemen kedua paling melimpah di kerak Bumi (setelah oksigen). Pasir, kaca, semikonduktor elektronik — semua adalah silikon dari supernova kuno.',
    },
    {
        sym: 'P', type: 'supernova', label: 'Supernova', icon: '🌟',
        color: '#f97316',
        tagline: 'Disintesis dalam supernova — kunci kehidupan.',
        story: 'Fosfor disintesis dalam ledakan supernova melalui berbagai proses pembakaran nuklir. Ia adalah elemen yang relatif langka di alam semesta tapi sangat penting bagi kehidupan — ada di DNA, RNA, membran sel, dan ATP (mata uang energi sel).\n\nFakta bahwa fosfor lebih langka dari karbon, nitrogen, dan oksigen (padahal sama-sama penting bagi kehidupan) membuat beberapa ilmuwan berspekulasi bahwa kelangkaan fosfor bisa menjadi faktor pembatas kehidupan di alam semesta.',
    },
    {
        sym: 'S', type: 'stellar_fusion', label: 'Pembakaran Oksigen', icon: '⭐',
        color: '#fbbf24',
        tagline: 'Produk pembakaran oksigen di bintang masif.',
        story: 'Belerang diproduksi dalam pembakaran oksigen di bintang masif — bersama silikon, kalsium, dan besi. Ia tersebar ke seluruh galaksi melalui supernova.\n\nBau telur busuk adalah bau hidrogen sulfida — kombinasi belerang dari supernova kuno dengan hidrogen dari Big Bang. Belerang juga ada di setiap sel hidup sebagai bagian dari asam amino sistein dan metionin.',
    },
    {
        sym: 'Cl', type: 'supernova', label: 'Supernova', icon: '🌟',
        color: '#f97316',
        tagline: 'Tersebar dari ledakan supernova ke seluruh galaksi.',
        story: 'Klorin disintesis melalui serangkaian reaksi dalam supernova — sebagian dari pembakaran oksigen, sebagian dari proses s (slow neutron capture) di bintang AGB.\n\nGaram dapur (NaCl) yang begitu mendasar bagi kehidupan manusia adalah pertemuan natrium dari supernova dan klorin dari supernova lain — dua serpihan bintang berbeda yang bertemu di Bumi.',
    },
    {
        sym: 'Ar', type: 'stellar_fusion', label: 'Pembakaran Oksigen', icon: '⭐',
        color: '#fbbf24',
        tagline: 'Gas mulia yang lahir dari pembakaran di bintang masif.',
        story: 'Argon terbentuk dalam pembakaran oksigen dan silikon di bintang masif. Isotop Ar-36 dan Ar-38 adalah yang paling melimpah — keduanya produk nukleosintesis bintang.\n\nArgon membentuk sekitar 1% atmosfer Bumi — sebagian besar adalah Ar-40 yang merupakan produk peluruhan radioaktif kalium-40 di dalam Bumi, bukan langsung dari bintang.',
    },
    {
        sym: 'K', type: 'supernova', label: 'Supernova', icon: '🌟',
        color: '#f97316',
        tagline: 'Disintesis dalam ledakan supernova bintang masif.',
        story: 'Kalium (potassium) disintesis dalam supernova melalui berbagai proses nukleosintesis eksplosif. Ia tersebar ke seluruh galaksi sebagai komponen penting dari materi antarbintang.\n\nKalium-40 adalah isotop radioaktif yang meluruh di dalam Bumi, menghasilkan panas yang menggerakkan konveksi mantel dan tektonik lempeng. Jadi secara tidak langsung, supernova kuno juga yang menggerakkan gempa bumi dan gunung berapi di Bumi hari ini.',
    },
    {
        sym: 'Ca', type: 'stellar_fusion', label: 'Pembakaran Silikon', icon: '⭐',
        color: '#fbbf24',
        tagline: 'Dibuat di tahap akhir kehidupan bintang masif.',
        story: 'Kalsium diproduksi dalam pembakaran silikon di inti bintang masif — berlangsung hanya beberapa hari sebelum supernova. Ia juga diproduksi dalam supernova itu sendiri.\n\nKalsium di tulangmu, di cangkang siput, di bebatuan kapur — semuanya berasal dari bintang-bintang yang meledak miliaran tahun sebelum Bumi terbentuk. Tulangmu secara harfiah terbuat dari debu bintang.',
    },
    {
        sym: 'Sc', type: 'supernova', label: 'Supernova', icon: '🌟',
        color: '#f97316',
        tagline: 'Elemen langka yang lahir dari supernova.',
        story: 'Skandium dihasilkan dalam ledakan supernova melalui berbagai reaksi nukleosintesis eksplosif. Ia adalah salah satu elemen paling langka di kerak Bumi karena tidak diproduksi secara efisien di alam semesta.\n\nMeskipun termasuk "logam tanah jarang" dalam praktik, skandium secara teknis bukan lantanida — ia lebih mirip aluminium dalam sifat kimianya.',
    },
    {
        sym: 'Ti', type: 'supernova', label: 'Supernova', icon: '🌟',
        color: '#f97316',
        tagline: 'Disebar oleh supernova — Ti-44 adalah penanda supernova.',
        story: 'Titanium diproduksi dalam supernova inti bintang masif. Titanium-44 (isotop radioaktif dengan waktu paruh 60 tahun) adalah penanda langsung supernova yang baru terjadi — teleskop sinar gamma dapat mendeteksi Ti-44 dari supernova seperti Cassiopeia A.\n\nTitanium murni hampir tidak ada di alam — selalu terikat dalam mineral. Meski begitu, ia adalah elemen kesembilan paling melimpah di kerak Bumi.',
    },
    {
        sym: 'V', type: 'supernova', label: 'Supernova', icon: '🌟',
        color: '#f97316',
        tagline: 'Produk nukleosintesis eksplosif dari supernova.',
        story: 'Vanadium diproduksi dalam supernova melalui berbagai jalur nukleosintesis. Ia juga diproduksi dalam bintang AGB melalui proses s.\n\nVanadium ditemukan dalam darah teripang laut (sea cucumber) dalam konsentrasi jutaan kali lebih tinggi dari air laut — menunjukkan betapa selektifnya makhluk hidup dalam mengkonsentrasikan elemen dari supernova kuno.',
    },
    {
        sym: 'Cr', type: 'stellar_fusion', label: 'Pembakaran Silikon', icon: '⭐',
        color: '#fbbf24',
        tagline: 'Dibuat dalam pembakaran silikon di bintang masif.',
        story: 'Kromium diproduksi terutama dalam pembakaran silikon di inti bintang masif dan dalam ledakan supernova Type Ia. Ia adalah bagian dari "puncak besi" — kelompok elemen yang paling efisien diproduksi oleh reaksi nuklir di bintang.',
    },
    {
        sym: 'Mn', type: 'white_dwarf', label: 'Supernova Tipe Ia', icon: '🌌',
        color: '#34d399',
        tagline: 'Produk khas dari supernova katai putih.',
        story: 'Mangan diproduksi terutama dalam supernova Tipe Ia — ledakan katai putih yang telah mencuri massa dari bintang pasangannya. Rasio mangan terhadap besi dalam bintang tua digunakan untuk menelusuri sejarah kimia galaksi.\n\nRasio Mn/Fe yang berbeda dalam bintang-bintang Galaksi Bimasakti vs galaksi kerdil tetangga menunjukkan bahwa lingkungan galaksi yang berbeda memiliki sejarah pembentukan bintang yang sangat berbeda.',
    },
    {
        sym: 'Fe', type: 'supernova', label: 'Supernova & Bintang', icon: '🌟',
        color: '#f97316',
        tagline: 'Besi dari luar angkasa — abu dari kematian bintang masif.',
        story: 'Besi adalah "abu" dari reaksi nuklir bintang — titik akhir fusi nuklir. Bintang dapat memfusikan hidrogen, helium, karbon, neon, oksigen, dan silikon untuk menghasilkan energi. Tapi ketika inti bintang menjadi besi, fusi berhenti: besi adalah elemen paling stabil, dan memfusikannya memerlukan energi, bukan menghasilkannya.\n\nKetika inti bintang masif penuh besi, ia kolaps dalam sepersekian detik — memicu supernova yang melempar semua elemen ke luar angkasa. Besi yang jatuh ke Bumi Purba (dari meteorit dan debu supernova) membentuk inti logam Bumi dan menjadi bahan dasar peradaban manusia.',
    },
    {
        sym: 'Co', type: 'supernova', label: 'Supernova', icon: '🌟',
        color: '#f97316',
        tagline: 'Lahir dari supernova — Co-56 menggerakkan cahaya supernova.',
        story: 'Kobalt diproduksi dalam supernova inti bintang. Nikel-56 yang diproduksi dalam supernova meluruh menjadi Kobalt-56, yang kemudian meluruh menjadi besi — dan peluruhan Co-56 inilah yang menggerakkan cahaya supernova selama berminggu-minggu setelah ledakan awal!\n\nKurva cahaya supernova yang kita amati dari Bumi — terang selama berbulan-bulan — adalah pancaran energi dari peluruhan radioaktif kobalt di luar angkasa.',
    },
    {
        sym: 'Ni', type: 'supernova', label: 'Pembakaran Silikon', icon: '🌟',
        color: '#f97316',
        tagline: 'Ni-56 adalah produk utama supernova — meluruh jadi besi.',
        story: 'Nikel-56 adalah produk utama pembakaran silikon di inti bintang masif menjelang supernova. Ni-56 radioaktif (waktu paruh 6 hari) meluruh menjadi Co-56, yang meluruh menjadi Fe-56 stabil — ini adalah sumber utama besi di alam semesta.\n\nIni berarti sebagian besar besi di alam semesta sebenarnya "lahir" sebagai nikel! Transformasi kosmik dari nikel ke kobalt ke besi berlangsung dalam minggu-bulan setelah setiap supernova.',
    },
    {
        sym: 'Cu', type: 'supernova', label: 'Supernova / s-process', icon: '🌟',
        color: '#f97316',
        tagline: 'Dibuat dalam supernova dan bintang AGB.',
        story: 'Tembaga diproduksi melalui beberapa jalur: dalam supernova melalui nukleosintesis eksplosif, dan dalam bintang AGB melalui proses s (slow neutron capture). Proporsi tepatnya masih dipelajari oleh astrofisikawan.\n\nTembaga adalah salah satu logam pertama yang digunakan manusia (era Chalcolithic, 4500 SM) dan komponen perunggu (paduan dengan timah) — sebuah metal dari bintang yang mengubah peradaban.',
    },
    {
        sym: 'Zn', type: 'supernova', label: 'Supernova', icon: '🌟',
        color: '#f97316',
        tagline: 'Seng dari ledakan bintang yang membentuk perisai galaksi.',
        story: 'Seng diproduksi terutama dalam supernova inti bintang masif. Ia adalah elemen penting bagi kehidupan — komponen lebih dari 300 enzim dalam tubuh manusia.\n\nAbsorpsi seng di medium antarbintang yang encer membuatnya berguna sebagai "pelacak" debu kosmik — astronom menggunakannya untuk mempelajari komposisi galaksi jauh.',
    },
    {
        sym: 'Ga', type: 'supernova', label: 'Supernova / s-process', icon: '🌟',
        color: '#f97316',
        tagline: 'Diproduksi dalam supernova dan bintang AGB.',
        story: 'Galium diproduksi melalui kombinasi proses nukleosintesis eksplosif (dalam supernova) dan proses s (dalam bintang AGB). Seperti banyak elemen berat menengah, asal usulnya multi-jalur.\n\nGalium meleleh pada 29,8°C — bisa meleleh di telapak tangan. Digunakan dalam semikonduktor GaAs yang ada di panel surya dan LED.',
    },
    {
        sym: 'Ge', type: 'supernova', label: 'Supernova / s-process', icon: '🌟',
        color: '#f97316',
        tagline: 'Lahir dari bintang AGB dan supernova.',
        story: 'Germanium diproduksi sebagian besar melalui proses s dalam bintang AGB (Asymptotic Giant Branch) — bintang tua berukuran sedang yang memproduksi elemen berat melalui penangkapan neutron lambat.\n\nMendeleev memprediksi keberadaan germanium dalam tabel periodik pertama miliknya (ia menyebutnya "eka-silicon") sebelum elemen ini ditemukan pada 1886 — salah satu prediksi paling mengesankan dalam sejarah kimia.',
    },
    {
        sym: 'As', type: 'supernova', label: 'Supernova / s-process', icon: '🌟',
        color: '#f97316',
        tagline: 'Arsenik dari supernova — racun yang lahir dari bintang.',
        story: 'Arsenik diproduksi melalui proses s dalam bintang AGB dan melalui nukleosintesis eksplosif dalam supernova. Proporsi tepatnya bergantung pada isotop mana yang dominan di lingkungan tertentu.\n\nArsenik dikenal sejak zaman kuno sebagai racun — "raja racun". Tapi seseorang tidak perlu khawatir bahwa arsenik di bumi berasal dari bintang — yang menentukan toksisitas adalah kimia, bukan asal kosmik.',
    },
    {
        sym: 'Se', type: 'supernova', label: 'Supernova / s-process', icon: '🌟',
        color: '#f97316',
        tagline: 'Selenium dari bintang tua — nutrisi penting bagi kehidupan.',
        story: 'Selenium diproduksi melalui proses s dalam bintang AGB dan proses r (rapid neutron capture) dalam supernova. Ini adalah salah satu elemen yang memiliki dua jalur produksi kosmik yang signifikan.\n\nSelenium adalah nutrien esensial dalam jumlah mikro (komponen selenocysteine, asam amino ke-21) tapi sangat beracun dalam jumlah sedikit lebih banyak — margin antara "nutrisi" dan "racun" sangat tipis.',
    },
    {
        sym: 'Br', type: 'supernova', label: 'Supernova / s-process', icon: '🌟',
        color: '#f97316',
        tagline: 'Satu-satunya nonlogam cair pada suhu ruang.',
        story: 'Brom diproduksi melalui proses s dan proses r dalam bintang. Distribusi isotopnya memberikan petunjuk tentang proporsi relatif kedua proses dalam produksinya.\n\nBrom adalah satu-satunya unsur nonlogam yang berwujud cair pada suhu kamar — bersama merkuri sebagai logam. Ia adalah elemen dengan bau menusuk paling khas, namanya dari bahasa Yunani "bromos" (bau busuk).',
    },
    {
        sym: 'Kr', type: 'supernova', label: 'Supernova / s-process', icon: '🌟',
        color: '#f97316',
        tagline: 'Gas mulia dari bintang — terperangkap dalam meteorit purba.',
        story: 'Kripton diproduksi melalui proses s dan r dalam bintang. Beberapa isotop kripton ditemukan terperangkap dalam meteorit karbonaseous — "pre-solar grains" yang terbentuk sebelum Matahari ada dan bertahan utuh 4,6 miliar tahun dalam meteorit.\n\nRatio isotop kripton dalam pre-solar grains memberikan informasi langsung tentang kondisi fisik di dalam bintang yang menghasilkannya miliaran tahun lalu!',
    },

    // Rb–Xe (37–54)
    {
        sym: 'Rb', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Rubidium — logam yang terbakar spontan di air, lahir dari bintang AGB.',
        story: 'Rubidium diproduksi terutama melalui proses s di bintang AGB dan sebagian melalui proses r di supernova. Ia adalah salah satu elemen yang menjadi "pengukur umur" kosmik — rasio Rb-87/Sr-87 digunakan untuk menentukan umur batuan dan meteorit hingga miliaran tahun.\n\nRubidium terbakar spontan saat kontak dengan air dan meledak jika terkena udara lembab. Sifat reaktif ekstrem ini berasal dari satu elektron valensi tunggalnya yang sangat mudah lepas.'
    },
    {
        sym: 'Sr', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Strontium dari bintang — warna merah kembang api.',
        story: 'Stronsium diproduksi melalui proses s di bintang AGB dan proses r di supernova. Konfirmasi pertama bahwa bintang neutron menghasilkan elemen berat datang dari deteksi stronsium dalam cahaya kilonova GW170817 (2017) — deteksi langsung elemen yang baru lahir dari tabrakan bintang neutron!\n\nStronsium memberikan warna merah cerah pada kembang api dan suar — warna merah yang indah itu adalah cahaya dari elemen yang lahir di bintang.'
    },
    {
        sym: 'Y', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Yttrium — diproduksi oleh bintang tua berukuran sedang.',
        story: 'Itrium adalah produk dominan proses s (slow neutron capture) di bintang AGB — bintang berukuran sedang di akhir hidupnya yang secara perlahan menangkap neutron untuk membangun inti atom lebih berat.\n\nItrium penting dalam teknologi modern: digunakan dalam laser YAG (Yttrium-Aluminum Garnet) untuk operasi, dalam superkonduktor suhu tinggi YBa₂Cu₃O₇, dan dalam LED putih. Semua teknologi ini menggunakan elemen dari bintang tua.',
    },
    {
        sym: 'Zr', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Zirkonium — tahan panas, dari bintang tua.',
        story: 'Zirkonium diproduksi terutama melalui proses s di bintang AGB. Bintang AGB yang kaya zirkonium dapat diidentifikasi langsung dari spektrum cahayanya — zirkonium menghasilkan garis absorpsi khas yang terlihat dari Bumi.\n\nZirkonium sangat transparan terhadap neutron — properti ideal untuk selubung bahan bakar reaktor nuklir. Zirconium dioxide (ZrO₂) digunakan sebagai "berlian imitasi" dan lapisan pelindung turbin jet.'
    },
    {
        sym: 'Nb', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Niobium dari bintang AGB — superkonduktor dari luar angkasa.',
        story: 'Niobium diproduksi melalui proses s di bintang AGB. Ia adalah produk "puncak lokal" dalam distribusi proses s — di mana penangkapan neutron lebih efisien karena konfigurasi kulit neutron tertentu.\n\nNiobium adalah bahan superkonduktor penting — magnet superkonduktor NbTi dan Nb₃Sn digunakan di akselerator partikel (LHC di CERN) dan MRI. Setiap MRI yang kamu jalani menggunakan logam dari bintang yang sudah mati.'
    },
    {
        sym: 'Mo', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Molibdenum memiliki lebih banyak jalur asal kosmik dari elemen lain.',
        story: 'Molibdenum memiliki tujuh isotop stabil — diproduksi melalui berbagai jalur: proses s (bintang AGB), proses r (supernova/neutron star), dan proses p (supernova). Tidak ada elemen lain yang menunjukkan keberagaman asal kosmik sebesar molibdenum!\n\nMolibdenum adalah kofaktor penting dalam enzim nitrogenase — enzim yang memungkinkan bakteri "mengikat" nitrogen dari udara menjadi amonia. Tanpa molibdenum dari supernova kuno, pertanian modern tidak mungkin ada.'
    },
    {
        sym: 'Tc', type: 'artificial', label: 'Buatan Manusia / Supernova', icon: '🔬', color: '#94a3b8',
        tagline: 'Satu-satunya elemen radioaktif yang ditemukan di bintang — secara alami.',
        story: 'Teknesium tidak ada di Bumi secara alami (semua isotopnya radioaktif, waktu paruh terpanjang 4,2 juta tahun). Tapi pada 1952, Paul Merrill menemukan garis penyerapan teknesium dalam spektrum bintang raksasa merah — bukti langsung bahwa bintang AGB sedang memproduksi elemen baru melalui proses s!\n\nPenemuan Tc di bintang adalah konfirmasi observasional pertama bahwa bintang memang "pabrik elemen". Tc yang kita gunakan di kedokteran (teknesium-99m untuk scan organ) semuanya diproduksi di reaktor nuklir.'
    },
    {
        sym: 'Ru', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Ruthenium — sebagian besar lahir dari tabrakan bintang neutron.',
        story: 'Ruthenium diproduksi melalui proses r — penangkapan neutron cepat yang terjadi dalam lingkungan berfluksi neutron sangat tinggi. Sumber utamanya dipercaya adalah tabrakan bintang neutron (kilonova), berdasarkan observasi GW170817.\n\nRuthenium adalah katalis penting dalam sintesis organik dan dalam sel bahan bakar hidrogen — teknologi masa depan menggunakan elemen dari tabrakan bintang neutron yang terjadi miliaran tahun lalu.'
    },
    {
        sym: 'Rh', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Rhodium — salah satu logam paling langka, dari kilonova.',
        story: 'Rhodium adalah salah satu logam paling langka di kerak Bumi — diproduksi melalui proses r di supernova dan tabrakan bintang neutron. Kelangkaannya di alam mencerminkan betapa "mahalnya" proses kosmik yang menghasilkannya.\n\nRhodium digunakan dalam konverter katalitik mobil untuk mengubah NOx berbahaya menjadi N₂ dan O₂ — logam paling langka di mobilmu berasal dari tabrakan bintang yang terjadi sebelum tata surya terbentuk.'
    },
    {
        sym: 'Pd', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Palladium dari kilonova — disimpan di setiap katalisator.',
        story: 'Paladium diproduksi melalui kombinasi proses s (bintang AGB) dan proses r (supernova/kilonova). Distribusi isotopnya memberikan petunjuk penting tentang proporsi kedua proses dalam produksinya.\n\nPaladium menyerap hidrogen hingga 900 kali volumenya sendiri — properti unik yang membuatnya berguna dalam pemurnian hidrogen dan berpotensi dalam penyimpanan energi.'
    },
    {
        sym: 'Ag', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Perak lahir dari tabrakan bintang neutron — GW170817 membuktikannya.',
        story: 'Perak diproduksi terutama melalui proses r dalam supernova dan tabrakan bintang neutron. Observasi kilonova GW170817 (2017) — sumber gelombang gravitasi pertama dengan mitra cahaya — menunjukkan spektrum kaya elemen proses-r termasuk perak.\n\nSetiap koin perak, peralatan makan perak, perhiasan perak — semuanya mengandung atom yang lahir dari tabrakan dahsyat dua bintang neutron miliaran tahun lalu. Tabrakan yang lebih keras dari supernova, memancarkan lebih banyak energi dalam sedetik dari yang dipancarkan Matahari selama hidupnya.'
    },
    {
        sym: 'Cd', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Kadmium dari bintang — beracun tapi penting teknologi.',
        story: 'Kadmium diproduksi melalui proses s di bintang AGB dan proses r di supernova. Ia adalah elemen yang secara geokimia mengikuti seng karena ukuran ionnya yang mirip.\n\nBaterei NiCd (nikel-kadmium) menggunakan kadmium sebagai elektroda, meskipun kini banyak digantikan baterai lain karena toksisitasnya. Kadmium juga digunakan dalam sel surya CdTe — panel surya yang mengkonversi energi surya menggunakan elemen dari bintang.'
    },
    {
        sym: 'In', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Indium — logam langka di layar sentuhmu.',
        story: 'Indium diproduksi terutama melalui proses s di bintang AGB. Ia adalah elemen yang sangat langka di kerak Bumi — lebih langka dari perak.\n\nIndium tin oxide (ITO) adalah lapisan transparan konduktif di hampir semua layar smartphone dan monitor — lapisan tak terlihat yang membuat layar sentuhmu bekerja. Setiap sentuhan di layarmu berinteraksi dengan atom dari bintang tua.'
    },
    {
        sym: 'Sn', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Timah — produk utama bintang AGB, tulang punggung era perunggu.',
        story: 'Timah adalah salah satu produk paling melimpah dari proses s di bintang AGB — ia berada di "puncak lokal" distribusi proses s karena konfigurasi neutron yang stabil (N=82, bilangan magis nuklir).\n\nPerpaduan timah dan tembaga membentuk perunggu — paduan yang mendefinisikan peradaban manusia selama 3000 tahun (Zaman Perunggu). Bintang-bintang AGB yang meledak miliaran tahun lalu secara tidak langsung memungkinkan lahirnya peradaban pertama manusia.'
    },
    {
        sym: 'Sb', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Antimon — digunakan sejak Mesir kuno, dari bintang.',
        story: 'Antimon diproduksi melalui proses s dan proses r. Distribusi isotopnya menunjukkan kontribusi signifikan dari kedua jalur.\n\nAntimon digunakan dalam kosmetik Mesir kuno (kohl) lebih dari 3000 tahun lalu — celak hitam yang dipakai Cleopatra mengandung antimon sulfida dari bintang yang meledak miliaran tahun sebelum Mesir kuno lahir.'
    },
    {
        sym: 'Te', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Telurium — lebih melimpah di alam semesta daripada yang ada di Bumi.',
        story: 'Telurium diproduksi terutama melalui proses r di supernova dan tabrakan bintang neutron. Kelimpahannya di alam semesta jauh melebihi kelimpahannya di Bumi — kemungkinan besar banyak telurium yang "tersembunyi" di inti Bumi atau telah hilang saat pembentukan tata surya.\n\nFakta menarik: secara kosmik, telurium lebih melimpah dari elemen yang lebih ringan seperti emas, platina, atau timah. Langkanya di permukaan Bumi adalah "kecelakaan" geokimia, bukan mencerminkan kelangkaan kosmosnya.'
    },
    {
        sym: 'I', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Iodin dari bintang — esensial bagi otak manusia.',
        story: 'Iodin diproduksi melalui proses s di bintang AGB dan proses r di supernova. Ia adalah elemen yang sangat langka di kerak Bumi tapi sangat penting bagi kehidupan — komponen hormon tiroid yang mengatur metabolisme.\n\nKekurangan iodin adalah penyebab utama keterbelakangan mental yang dapat dicegah di dunia. Iodin dalam makanan laut, garam beryodium, atau suplemen — semuanya berasal dari bintang.'
    },
    {
        sym: 'Xe', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Gas mulia dari supernova — xenon terperangkap dalam meteorit purba.',
        story: 'Xenon memiliki berbagai isotop yang diproduksi melalui proses s, proses r, dan bahkan proses fisi. Analisis isotop xenon dalam meteorit adalah salah satu teknik paling kuat dalam kosmokimia — digunakan untuk merekonstruksi sejarah tata surya.\n\n"Xenon anomali" dalam meteorit Allende menunjukkan bahwa tata surya kita terbentuk tepat setelah supernova terdekat meledak — tepat sehingga isotop radioaktif berumur pendek seperti I-129 masih ada ketika meteorit pertama terbentuk.'
    },

    // Cs–Rn (55–86)
    {
        sym: 'Cs', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Sesium — logam paling elektropositif, dari bintang AGB.',
        story: 'Sesium diproduksi melalui proses s di bintang AGB dan proses r di supernova. Ia adalah logam dengan keelektronegatifan terendah (paling mudah melepas elektron) dari semua elemen.\n\nJam atom sesium mendefinisikan "satu detik" SI sejak 1967 — semua GPS, internet, dan komunikasi modern bergantung pada akurasi jam sesium. Elemen dari bintang yang mengatur waktu seluruh peradaban digital.'
    },
    {
        sym: 'Ba', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Barium — warna hijau kembang api, dari bintang tua.',
        story: 'Barium diproduksi terutama melalui proses s di bintang AGB. Penyerapan garis barium dalam spektrum bintang AGB adalah salah satu konfirmasi pertama bahwa proses s benar-benar terjadi di bintang hidup.\n\nBarium sulfat digunakan sebagai "barium meal" dalam pemeriksaan x-ray saluran pencernaan — karena sangat opak terhadap sinar-X tapi tidak beracun bagi tubuh.'
    },
    {
        sym: 'La', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Lanthanum — awal seri lantanida, dari bintang tua.',
        story: 'Lantanum diproduksi terutama melalui proses s di bintang AGB. Ia memberikan nama pada seluruh seri "lantanida" — 14 elemen dari La hingga Lu yang memiliki sifat kimia sangat mirip.\n\nLensa kamera dan teleskop berkualitas tinggi menggunakan kaca lantanum — indeks biasnya yang tinggi memungkinkan desain lensa yang lebih tipis dan tajam. Lensa di kameramu mungkin mengandung elemen dari bintang tua.'
    },
    {
        sym: 'Ce', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Serium — lantanida paling melimpah, dari bintang AGB.',
        story: 'Serium adalah lantanida paling melimpah di kerak Bumi, diproduksi terutama melalui proses s dan proses r. Kelimpahannya yang relatif tinggi mencerminkan efisiensi produksinya dalam berbagai lingkungan bintang.\n\nBatu korek api mengandung mischmetal (paduan serium) yang memercikkan api — setiap kali kamu menyalakan korek api, kamu menggunakan elemen dari bintang AGB kuno untuk membakar bahan bakar fosil.'
    },
    {
        sym: 'Pr', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Praseodimium — komponen magnet terkuat, dari bintang tua.',
        story: 'Praseodimium diproduksi terutama melalui proses s di bintang AGB. Bersama neodimium, ia membentuk paduan magnet terkuat yang diketahui — Nd₂Fe₁₄B.\n\nLentik mata penerbang jet menggunakan kaca praseodimium untuk menyaring cahaya berbahaya. Menarik: perlindungan dari nyala api modern menggunakan elemen dari bintang tua yang sudah mati miliaran tahun lalu.'
    },
    {
        sym: 'Nd', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Neodimium — di dalam setiap motor EV dan hard disk, dari bintang.',
        story: 'Neodimium diproduksi melalui proses s di bintang AGB dan proses r di supernova. Paduan Nd₂Fe₁₄B adalah magnet permanen terkuat — ada di setiap motor listrik, hard disk, speaker, dan generator turbin angin.\n\nRevolusi kendaraan listrik bergantung pada neodimium dari bintang. Setiap Tesla Model S mengandung ~2 kg magnet neodimium — logam dari bintang yang sudah mati yang menggerakkan masa depan.'
    },
    {
        sym: 'Pm', type: 'artificial', label: 'Buatan Manusia / Supernova', icon: '🔬', color: '#94a3b8',
        tagline: 'Prometium — satu-satunya lantanida tanpa isotop stabil, dibuat di reaktor.',
        story: 'Prometium tidak ada di Bumi secara alami dalam jumlah terukur — semua isotopnya radioaktif dengan waktu paruh terpanjang hanya 17,7 tahun. Ia diproduksi dalam supernova dan bintang AGB tapi telah meluruh sejak tata surya terbentuk.\n\nSemua prometium di Bumi adalah buatan manusia — produk fisi reaktor nuklir. Beberapa bintang jauh yang sangat muda mungkin masih menunjukkan garis prometium dalam spektrumnya.'
    },
    {
        sym: 'Sm', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Samarium — magnet untuk suhu tinggi, dari bintang tua.',
        story: 'Samarium diproduksi melalui proses s dan proses r. Magnet samarium-kobalt (SmCo) lebih tahan panas daripada magnet neodimium — digunakan dalam mesin jet, motor turbo, dan lingkungan bersuhu tinggi.\n\nSamarium-149 memiliki penampang serapan neutron terbesar dari semua elemen stabil — ini membuatnya penting dalam kontrol reaktor nuklir tapi juga berpotensi mengganggu operasi reaktor jika tidak dikelola.'
    },
    {
        sym: 'Eu', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Europium dari kilonova — ada di tinta anti-pemalsuan uang euro.',
        story: 'Europium diproduksi terutama melalui proses r — di supernova dan tabrakan bintang neutron. Rasio europium terhadap barium dalam bintang tua adalah indikator kunci sejarah kimia galaksi (proses-r vs proses-s).\n\nEuropium digunakan dalam tinta fluoresen anti-pemalsuan pada uang euro dan banyak mata uang lain. Di bawah UV, tanda europium bersinar cerah — hampir mustahil dipalsukan tanpa elemen dari kilonova.'
    },
    {
        sym: 'Gd', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Gadolinium — agen kontras MRI, dari tabrakan bintang neutron.',
        story: 'Gadolinium diproduksi melalui proses s dan proses r. Ia memiliki penampang serapan neutron terbesar dari semua elemen stabil — digunakan dalam batang kontrol reaktor nuklir dan sebagai agen kontras MRI.\n\nLebih dari 30 juta dosis agen kontras gadolinium digunakan setiap tahun untuk MRI medis. Setiap scan MRI yang menyelamatkan nyawa menggunakan elemen dari luar angkasa yang diproduksi dalam tabrakan bintang.'
    },
    {
        sym: 'Tb', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Terbium — hijau cerah di layar, dari bintang tua.',
        story: 'Terbium diproduksi terutama melalui proses s di bintang AGB. Ia menghasilkan fluoresensi hijau sangat cerah — komponen penting dalam lampu fluoresen tiga-warna dan layar warna.\n\nTerbium memiliki sifat magnetostriktif terbesar (berubah bentuk di medan magnet) — digunakan dalam sonar kapal selam presisi tinggi. Navigasi bawah laut menggunakan elemen dari bintang yang sudah mati.'
    },
    {
        sym: 'Dy', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Disprosium — membuat magnet EV tahan panas, dari bintang tua.',
        story: 'Disprosium diproduksi terutama melalui proses s di bintang AGB. Ia ditambahkan ke magnet neodimium untuk meningkatkan ketahanan suhu tinggi — kritis untuk motor EV yang beroperasi panas.\n\nChina menguasai hampir 100% produksi disprosium dunia — menciptakan ketergantungan geopolitik yang signifikan pada elemen dari bintang tua yang hanya terdapat di beberapa lokasi di Bumi.'
    },
    {
        sym: 'Ho', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Holmium memiliki momen magnetik terbesar — dari bintang AGB.',
        story: 'Holmium diproduksi melalui proses s di bintang AGB. Ia memiliki momen magnetik atom terbesar dari semua elemen — dieksploitasi dalam pembuatan kutub magnet sangat kuat untuk MRI.\n\nLaser holmium (Ho:YAG) digunakan dalam urologi untuk memecah batu ginjal — prosedur minimal invasif yang menggunakan elemen dari bintang tua untuk menyembuhkan masalah kesehatan manusia.'
    },
    {
        sym: 'Er', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Erbium — tulang punggung internet global, dari bintang tua.',
        story: 'Erbium diproduksi terutama melalui proses s di bintang AGB. Erbium-doped fiber amplifier (EDFA) adalah komponen kritis jaringan serat optik global — memperkuat sinyal cahaya tanpa mengubahnya ke sinyal listrik.\n\nTanpa erbium dari bintang AGB kuno, internet berkecepatan tinggi transoceanic tidak mungkin ada. Setiap video streaming, video call, dan data yang melintasi samudra bergantung pada elemen dari bintang yang sudah mati miliaran tahun lalu.'
    },
    {
        sym: 'Tm', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Tulium — lantanida paling langka di Bumi, dari bintang tua.',
        story: 'Tulium diproduksi melalui proses s di bintang AGB. Ia adalah lantanida paling langka yang stabil — hanya sekitar 0,5 ppm dalam kerak Bumi.\n\nLaser tulium (Tm:YAG) menghasilkan inframerah 2μm yang diserap sangat efisien oleh air — ideal untuk operasi jaringan lunak dengan trauma minimal. Bedah laser modern menggunakan elemen paling langka dari bintang tua.'
    },
    {
        sym: 'Yb', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Ytterbium — jam atom paling akurat, dari bintang tua.',
        story: 'Ytterbium diproduksi melalui proses s di bintang AGB. Jam optik ytterbium adalah jam paling akurat yang pernah dibuat — lebih akurat 100× dari jam sesium, kehilangan hanya 1 detik dalam 10 miliar tahun.\n\nTeknologi jam ytterbium sedang dikembangkan untuk mendefinisikan ulang "satu detik" dalam sistem SI. Ironi indah: elemen dari bintang yang sudah mati miliaran tahun lalu akan mengatur definisi waktu untuk manusia.'
    },
    {
        sym: 'Lu', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Lutetium — elemen lantanida terakhir, dari bintang tua.',
        story: 'Lutetium diproduksi terutama melalui proses s di bintang AGB. Ia memiliki nomor atom tertinggi dari semua lantanida dan sifat fisik yang sedikit berbeda karena "kontraksi lantanida".\n\nLutetium-177 digunakan dalam terapi radiasi kanker neuroendokrin — menarget sel tumor dengan presisi tinggi. Terapi kanker modern menggunakan elemen dari bintang yang sudah mati.'
    },
    {
        sym: 'Hf', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Hafnium — di prosesor komputermu, dari bintang tua.',
        story: 'Hafnium diproduksi terutama melalui proses s di bintang AGB. Ia selalu ditemukan bersama zirkonium di alam — keduanya hampir tidak bisa dibedakan secara kimia karena ukuran ion yang identik akibat kontraksi lantanida.\n\nHafnium oksida (HfO₂) adalah material "high-k dielectric" dalam transistor prosesor modern (Intel, AMD) — menggantikan silikon dioksida untuk memungkinkan miniaturisasi lebih jauh. Prosesormu mengandung elemen dari bintang tua.'
    },
    {
        sym: 'Ta', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Tantalum — di kapasitor setiap smartphone, dari bintang tua.',
        story: 'Tantalum diproduksi melalui proses s di bintang AGB dan sebagian proses r di supernova. Ia adalah salah satu elemen paling tahan korosi — tidak bereaksi dengan hampir semua asam.\n\nKapasitor tantalum ada di hampir setiap smartphone, laptop, dan perangkat elektronik modern — komponen kecil dari elemen bintang yang memungkinkan revolusi digital. Perdagangan tantalum dari Kongo("coltan") adalah sumber konflik geopolitik nyata.'
    },
    {
        sym: 'W', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Tungsten — titik leleh tertinggi dari semua elemen, dari bintang.',
        story: 'Tungsten diproduksi melalui proses s di bintang AGB dan proses r di supernova. Ia memiliki titik leleh tertinggi dari semua elemen (3422°C) dan titik didih tertinggi pula.\n\nFilamen lampu pijar adalah tungsten — ketika kamu menyalakan bola lampu lawas, kamu memanaskan metal dari supernova hingga 2500°C sampai ia bercahaya. Ujung mata bor dan alat pemotong industri juga menggunakan tungsten karbida dari bintang.'
    },
    {
        sym: 'Re', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Rhenium — logam suhu tinggi dalam mesin jet, dari kilonova.',
        story: 'Rhenium diproduksi terutama melalui proses r di supernova dan tabrakan bintang neutron. Ia adalah elemen terberat yang mempunyai isotop stabil (Re-187, dengan waktu paruh 42 miliar tahun — hampir 3× umur alam semesta).\n\nRhenium adalah komponen paduan superloy dalam bilah turbin mesin jet — memungkinkan mesin beroperasi pada temperatur sangat tinggi. Setiap penerbangan komersial bergantung pada logam dari tabrakan bintang neutron.'
    },
    {
        sym: 'Os', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Osmium — logam paling padat di Bumi, dari kilonova.',
        story: 'Osmium diproduksi terutama melalui proses r. Ia adalah logam paling padat di Bumi (22,59 g/cm³) — sepotong osmium seukuran bola golf beratnya hampir 3 kg.\n\nOsmium tetroksida (OsO₄) digunakan dalam mikroskop elektron untuk mewarnai sampel biologis — memungkinkan visualisasi struktur sel pada resolusi nanometer. Biologi mikroskopis bergantung pada elemen dari kilonova.'
    },
    {
        sym: 'Ir', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Iridium — bukti asteroid yang musnah dinosaurus, dari kilonova.',
        story: 'Iridium diproduksi terutama melalui proses r di supernova dan tabrakan bintang neutron. Kelimpahannya sangat rendah di kerak Bumi tapi relatif tinggi dalam meteorit.\n\nLapisan tipis iridium di batas K-Pg (66 juta tahun lalu) adalah bukti kunci dampak asteroid yang memusnahkan dinosaurus — asteroid tersebut membawa iridium dari luar angkasa dan menyebarkannya ke seluruh Bumi. Elemen dari kilonova yang mengubah sejarah kehidupan di Bumi.'
    },
    {
        sym: 'Pt', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Platina dari kilonova — di konverter katalitik dan perhiasan.',
        story: 'Platina diproduksi terutama melalui proses r. Ia adalah salah satu logam paling "mulia" — tahan terhadap hampir semua reaksi kimia.\n\nKonverter katalitik di setiap mobil menggunakan platina (dan rhodium, paladium) untuk mengubah gas buang berbahaya menjadi CO₂, N₂, dan H₂O. Platina cisplatin adalah obat kemoterapi yang menyelamatkan jutaan nyawa — elemen dari bintang yang memerangi kanker.'
    },
    {
        sym: 'Au', type: 'neutron_star_merge', label: 'Tabrakan Bintang Neutron', icon: '💫', color: '#818cf8',
        tagline: 'Emas lahir dari tabrakan bintang neutron — GW170817 membuktikannya.',
        story: 'Emas diproduksi terutama melalui proses r dalam supernova dan tabrakan bintang neutron. Penemuan kilonova GW170817 (2017) dengan pengamatan spektroskopinya memberikan konfirmasi kuat bahwa tabrakan bintang neutron adalah sumber utama emas di alam semesta.\n\nDiperkirakan GW170817 saja menghasilkan emas sekitar sepuluh kali massa Bumi dalam satu kejadian! Semua emas di Bumi — cincin pernikahan, cadangan emas negara, komponen elektronik — berasal dari tabrakan dahsyat dua bintang neutron miliaran tahun lalu.'
    },
    {
        sym: 'Hg', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Merkuri — logam cair, dari bintang AGB dan supernova.',
        story: 'Merkuri diproduksi melalui proses s dan proses r. Ia adalah satu-satunya logam yang berwujud cair pada suhu kamar — akibat efek relativistik: elektron merkuri bergerak sangat cepat (dekat kecepatan cahaya) sehingga orbital mereka "menyusut", melemahkan ikatan antaratom.\n\nEfek relativistik yang mengubah sifat kimia merkuri adalah juga yang membuat emas berwarna kuning (satu-satunya logam berwarna bukan perak-abu) — fisika relativitas Einstein bekerja di inti atom elemen berat.'
    },
    {
        sym: 'Tl', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Thallium — racun berbahaya dari bintang.',
        story: 'Talium diproduksi melalui proses s dan proses r. Ia adalah logam yang sangat beracun — tidak berbau, tidak berasa, larut dalam air — pernah digunakan sebagai racun tikus dan bahan percobaan pembunuhan.\n\nTalium-201 digunakan dalam pencitraan jantung nuklir — scan yang menunjukkan aliran darah ke otot jantung. Elemen paling berbahaya pun bisa menjadi alat diagnostik untuk menyelamatkan nyawa jika digunakan dengan tepat.'
    },
    {
        sym: 'Pb', type: 'supernova', label: 'Supernova / s-process', icon: '🌟', color: '#f97316',
        tagline: 'Timbal — produk akhir proses s, dari bintang AGB.',
        story: 'Timbal adalah produk akhir ("terminal") dari proses s di bintang AGB — setelah timbal terbentuk, penangkapan neutron selanjutnya menghasilkan inti tidak stabil yang meluruh kembali. Timbal adalah semacam "dead end" dari proses s.\n\nIsotop timbal (Pb-206, 207, 208) adalah produk akhir peluruhan uranium dan torium — digunakan dalam penanggalan radiometrik untuk menentukan umur batuan hingga 4,6 miliar tahun. Timbal dari bintang tua mengungkapkan umur Bumi sendiri.'
    },
    {
        sym: 'Bi', type: 'white_dwarf', label: 'Bintang AGB (s-process)', icon: '🌌', color: '#34d399',
        tagline: 'Bismut — elemen "stabil" paling berat, dari bintang tua.',
        story: 'Bismut adalah elemen "stabil" paling berat yang diketahui — tapi sebenarnya Bi-209 memiliki waktu paruh 1,9×10¹⁹ tahun (miliaran kali lebih tua dari alam semesta), praktis stabil. Diproduksi melalui proses s di bintang AGB dan proses r.\n\nBismut subnitrat dan subsalisilat digunakan dalam obat maag seperti Pepto-Bismol. Kristal bismut memiliki warna pelangi iridesen yang sangat indah — sering dibuat sebagai hiasan ilmiah.'
    },
    {
        sym: 'Po', type: 'radioactive_decay', label: 'Peluruhan Radioaktif', icon: '⚛️', color: '#f43f5e',
        tagline: 'Polonium — produk peluruhan uranium di Bumi, bukan dari bintang langsung.',
        story: 'Polonium di Bumi bukan dari nukleosintesis bintang langsung — melainkan produk peluruhan radioaktif uranium dan torium yang ada di kerak Bumi. Sejumlah sangat kecil Po-210 terbentuk terus-menerus dari peluruhan Rn-222.\n\nPo-210 digunakan dalam pemantik statis untuk menghilangkan debu di industri fotografi. Tragisnya, Alexander Litvinenko dibunuh dengan Po-210 pada 2006 — pembunuhan dengan elemen radioaktif pertama yang terkonfirmasi dalam sejarah modern.'
    },
    {
        sym: 'At', type: 'radioactive_decay', label: 'Peluruhan Radioaktif', icon: '⚛️', color: '#f43f5e',
        tagline: 'Astatin — halogen paling langka, hanya miligram di seluruh kerak Bumi.',
        story: 'Astatin adalah elemen paling langka yang terjadi secara alami di Bumi — diperkirakan hanya ~28 gram di seluruh kerak Bumi pada waktu mana pun. Ia terbentuk dari peluruhan radioaktif uranium dan torium.\n\nAt-211 sedang diteliti untuk targeted alpha therapy (TAT) kanker — partikel alfa yang dipancarkan dapat menghancurkan sel tumor dengan sangat presisi tanpa merusak jaringan sekitar.'
    },
    {
        sym: 'Rn', type: 'radioactive_decay', label: 'Peluruhan Radioaktif', icon: '⚛️', color: '#f43f5e',
        tagline: 'Radon — gas radioaktif dari tanah, produk peluruhan uranium.',
        story: 'Radon tidak diproduksi di bintang secara langsung — ia terbentuk dari peluruhan radioaktif uranium-238 di kerak Bumi. Gas tidak berwarna dan tidak berbau ini merembes dari tanah ke dalam rumah.\n\nRadon adalah penyebab kanker paru kedua terbanyak setelah merokok, bertanggung jawab atas ~20.000 kematian per tahun di AS. Ironi: gas radioaktif yang terbentuk dari uranium purba (hasil bintang) terus-menerus lahir dari tanah di sekitar kita.'
    },
    {
        sym: 'Fr', type: 'radioactive_decay', label: 'Peluruhan Radioaktif', icon: '⚛️', color: '#f43f5e',
        tagline: 'Fransium — elemen paling langka di Bumi, terbentuk dari peluruhan.',
        story: 'Fransium terbentuk dari peluruhan radioaktif aktinium di kerak Bumi — diperkirakan hanya ~30 gram fransium ada di seluruh Bumi pada waktu mana pun. Waktu paruh isotop paling stabil hanya 22 menit.\n\nFransium adalah logam alkali paling berat dan paling reaktif — jika kamu bisa mengumpulkan cukup untuk dilihat (nyaris tidak mungkin), ia akan meledak seketika dalam udara. Elemen paling langka yang pernah ada secara alami.'
    },
    {
        sym: 'Ra', type: 'radioactive_decay', label: 'Peluruhan Radioaktif', icon: '⚛️', color: '#f43f5e',
        tagline: 'Radium — penemuan Marie Curie, produk peluruhan uranium.',
        story: 'Radium terbentuk dari peluruhan radioaktif uranium di kerak Bumi — setiap ton bijih uranium mengandung sekitar 0,14 gram radium. Marie Curie memisahkan radium dari ton-ton pitchblende, dengan tangan yang akhirnya rusak akibat paparan radiasi.\n\nRadium pernah digunakan dalam cat "glow in the dark" untuk jam tangan dan instrumen — para pekerja perempuan yang mengecat ("Radium Girls") mengalami kanker tulang parah karena menjilatkan kuas ke mulut mereka. Tragedi yang mengubah regulasi keselamatan kerja selamanya.'
    },
    // Aktinida (89–103)
    {
        sym: 'Ac', type: 'radioactive_decay', label: 'Peluruhan Radioaktif', icon: '⚛️', color: '#f43f5e',
        tagline: 'Aktinium — sangat langka di alam, dari peluruhan uranium.',
        story: 'Aktinium terbentuk dari peluruhan radioaktif uranium-235 di kerak Bumi. Sangat langka: hanya sekitar 0,2 mg aktinium per ton uranium. Ia memberi nama pada seluruh seri aktinida.\n\nAktinium-225 sedang dikembangkan untuk targeted alpha therapy kanker — satu atom Ac-225 menghasilkan 4 partikel alfa berturut-turut, memberikan dosis radiasi terkonsentrasi ke sel tumor.'
    },
    {
        sym: 'Th', type: 'supernova', label: 'Supernova (r-process)', icon: '🌟', color: '#f97316',
        tagline: 'Torium — dari supernova, lebih melimpah dari timah di kerak Bumi.',
        story: 'Torium diproduksi melalui proses r di supernova dan tabrakan bintang neutron. Ia adalah aktinida paling melimpah di kerak Bumi — lebih melimpah dari timbal atau molibdenum.\n\nRasio Th-232/U-238 dalam bintang tua digunakan sebagai "jam kosmik" untuk menentukan umur bintang-bintang tertua di galaksi. Beberapa bintang diperkirakan berumur lebih dari 13 miliar tahun — hampir setua Big Bang.'
    },
    {
        sym: 'Pa', type: 'radioactive_decay', label: 'Peluruhan Radioaktif', icon: '⚛️', color: '#f43f5e',
        tagline: 'Protaktinium — jejak peluruhan uranium-235.',
        story: 'Protaktinium-231 terbentuk dari peluruhan uranium-235 di kerak Bumi — ada sekitar 0,3 mg Pa per ton uranium. Rasio Pa-231/Th-230 dalam sedimen laut digunakan untuk merekonstruksi sirkulasi laut kuno dan sejarah iklim Bumi.'
    },
    {
        sym: 'U', type: 'supernova', label: 'Supernova (r-process)', icon: '🌟', color: '#f97316',
        tagline: 'Uranium — dari supernova, bahan bakar era nuklir.',
        story: 'Uranium diproduksi melalui proses r di supernova dan tabrakan bintang neutron — dibutuhkan fluks neutron yang luar biasa tinggi untuk membangun inti atom sebesar ini. Ketika tata surya terbentuk 4,6 miliar tahun lalu, uranium dari supernova yang baru meledak tersebar di awan gas yang akhirnya menjadi Matahari dan planet.\n\nHampir sepertiga panas internal Bumi berasal dari peluruhan radioaktif uranium dan torium — panas itulah yang menggerakkan tektonik lempeng, gunung berapi, dan melindungi Bumi dengan medan magnetnya. Bintang yang meledak secara tidak langsung menjaga Bumi tetap "hidup" secara geologis.'
    },
    {
        sym: 'Np', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Neptunium — elemen transurania pertama buatan manusia.',
        story: 'Neptunium tidak ada di alam dalam jumlah terukur — semua isotopnya radioaktif dan telah meluruh sejak tata surya terbentuk. Dibuat pertama kali di UC Berkeley pada 1940 dengan membombardir uranium dengan neutron.\n\nSejumlah sangat kecil Np-239 terbentuk secara alami dalam bijih uranium ketika U-238 menangkap neutron dari peluruhan spontan — ini membuat neptunium menjadi elemen "hampir alami" dalam pengertian teknis.'
    },
    {
        sym: 'Pu', type: 'artificial', label: 'Buatan Manusia / Supernova', icon: '🔬', color: '#94a3b8',
        tagline: 'Plutonium — dibuat dalam reaktor, tapi pernah ada di Bumi purba.',
        story: 'Plutonium dengan isotop sangat berumur panjang (Pu-244, waktu paruh 80 juta tahun) ada di Bumi saat terbentuk tapi telah meluruh hampir habis. Pada 1971, ilmuwan menemukan jejak Pu-244 dalam xenolith dari Kalimantan — sisa plutonium purba dari supernova yang membentuk tata surya kita!\n\nPlutonium modern diproduksi dalam reaktor nuklir — setiap reaktor nuklir menghasilkan sejumlah plutonium dari uranium yang menyerap neutron. Fisisi bahan bakar nuklir seluruh dunia bergantung pada plutonium produk reaktor.'
    },
    {
        sym: 'Am', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Americium — di detektor asap rumahmu, dibuat di reaktor.',
        story: 'Americium tidak ada di alam — dibuat pertama kali di Proyek Manhattan (1944) dengan membombardir plutonium dengan neutron. Am-241 (waktu paruh 432 tahun) adalah isotop paling berguna.\n\nDetektor asap ionisasi di hampir setiap rumah mengandung ~1 mikrogram Am-241. Am memancarkan partikel alfa — ketika asap masuk, ionisasi terganggu, alarm berbunyi. Elemen buatan manusia yang menyelamatkan nyawa setiap hari.'
    },
    {
        sym: 'Cm', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Curium — dibuat dari plutonium, dinamai untuk menghormati Curie.',
        story: 'Curium dibuat dengan membombardir plutonium dengan partikel alfa — pertama kali pada 1944 di Proyek Manhattan. Dinamai menghormati Marie dan Pierre Curie.\n\nSpektrometer alfa curium-244 digunakan di Mars Pathfinder untuk menganalisis komposisi batuan Mars secara langsung. Elemen buatan manusia yang membantu kita memahami planet lain.'
    },
    {
        sym: 'Bk', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Berkelium — dibuat dari americium, dibutuhkan untuk membuat tennessine.',
        story: 'Berkelium dibuat di Berkeley dengan membombardir americium dengan partikel alfa (1949). Salah satu kegunaan utamanya adalah sebagai target untuk membuat elemen superberat — Bk-249 ditembaki Ca-48 untuk menghasilkan tennessine (elemen 117) pada 2010.'
    },
    {
        sym: 'Cf', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Californium — pemancar neutron terkuat, $27 juta per gram.',
        story: 'Californium dibuat di Berkeley (1950) dengan membombardir curium dengan partikel alfa. Cf-252 memancarkan 170 juta neutron per menit per mikrogram — pemancar neutron paling kuat yang tersedia.\n\nDigunakan untuk menyalakan reaktor nuklir pertama kali, mendeteksi bahan peledak di bandara, survey mineral dari udara, dan terapi neutron kanker. Harganya ~$27 juta per gram — elemen paling mahal.'
    },
    {
        sym: 'Es', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Einsteinium — ditemukan di abu bom hidrogen, dirahasiakan 3 tahun.',
        story: 'Einsteinium ditemukan dalam abu bom hidrogen "Ivy Mike" (1952) — produk uranium yang menangkap banyak neutron. Penemuannya dirahasiakan selama ~3 tahun. Dinamai menghormati Einstein.\n\nPada 2021, peneliti Stanford mengkarakterisasi kimia einsteinium dari hanya 200 nanogram — sampel terkecil yang pernah digunakan untuk studi kimia sistematis dalam sejarah.'
    },
    {
        sym: 'Fm', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Fermium — ditemukan bersamaan dengan einsteinium dari bom hidrogen.',
        story: 'Fermium ditemukan bersamaan dengan einsteinium di abu bom hidrogen (1952). Fermium adalah elemen terberat yang bisa diproduksi dalam reaktor melalui suksesi penangkapan neutron — elemen di atasnya memerlukan akselerator partikel.\n\nFermium menandai batas antara kimia "reaktor" dan kimia "akselerator" — batas alam semesta kimia yang bisa dijangkau tanpa menabrakkan atom satu sama lain.'
    },
    {
        sym: 'Md', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Mendelevium — dibuat satu atom per eksprerimen, dinamai Mendeleev.',
        story: 'Mendelevium dibuat pertama kali dengan menembakkan partikel alfa ke 17 nanogram einsteinium — menghasilkan hanya 17 atom terdeteksi (1955). Ini adalah kimia pada batas paling ekstrem: satu atom pada satu waktu.\n\nDinamai menghormati Mendeleev yang memprediksi tempat kosong dalam tabel periodik. Mendelevium sendiri mengisi slot yang dipenuhi menggunakan fisika nuklir, bukan kimia alami.'
    },
    {
        sym: 'No', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Nobelium — penemuan disengketakan Soviet vs AS selama bertahun-tahun.',
        story: 'Nobelium diperebutkan antara tim Stockholm (1957, tidak dikonfirmasi), Berkeley (1958), dan Dubna Soviet (1966). Akhirnya nama "nobelium" dipertahankan meski tim Stockholm yang memberikan nama tidak berhasil membuktikan penemuannya.\n\nDinamai menghormati Alfred Nobel — pendiri Hadiah Nobel. Ironi: Nobel sendiri kadang tersiksa oleh dampak destruktif penemuannya (dinamit), dan nobelium lahir dari "senjata" akselerator partikel.'
    },
    {
        sym: 'Lr', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Lawrencium — aktinida terakhir, dibuat dari californium + boron.',
        story: 'Lawrencium dibuat di Berkeley (1961) dengan menembakkan ion boron ke californium — elemen aktinida terakhir. Dinamai dari Ernest Lawrence, penemu siklotron yang memungkinkan pembuatan semua elemen transurania.\n\nLawrencium menandai akhir seri aktinida. Di atasnya dimulai seri transaktinida — elemen yang semakin tidak stabil dan semakin menantang batas tabel periodik.'
    },
    // Transaktinida (104–118) — semua buatan manusia
    {
        sym: 'Rf', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Rutherfordium — elemen pertama melampaui aktinida, dari akselerator.',
        story: 'Rutherfordium dibuat dengan menabrakkan inti atom berat di akselerator partikel. Sengketa penamaan antara Soviet (kurchatovium) dan AS (rutherfordium) berlangsung puluhan tahun — mencerminkan Perang Dingin dalam sains.\n\nEksperimen kimia Rf dilakukan satu atom per jam — tapi hasilnya menunjukkan tabel periodik tetap berlaku bahkan untuk elemen paling berat yang bisa dipelajari.'
    },
    {
        sym: 'Db', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Dubnium — dinamai kota Dubna, Rusia, dari akselerator.',
        story: 'Dubnium adalah nama kompromi diplomatik dari sengketa Soviet-AS tentang elemen 105 — Dubna (Rusia) dapat Db, Berkeley (AS) dapat Rf. Dibuat dengan menabrakkan inti berat di akselerator.\n\nKimia dubnium dilakukan satu atom per jam dan menunjukkan ia berperilaku seperti niobium — tabel periodik terbukti berlaku hingga sini.'
    },
    {
        sym: 'Sg', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Seaborgium — dinamai Glenn Seaborg yang masih hidup saat penamaan.',
        story: 'Seaborgium adalah satu dari dua elemen yang dinamai dari orang yang masih hidup saat penamaan (yang lain: oganesson). Glenn Seaborg terlibat dalam penemuan 10 elemen — rekor yang kemungkinan tidak pernah terlampaui.\n\nDibuat di Berkeley (1974) dengan menembakkan oksigen ke californium. Kimia Sg menunjukkan sifat mirip tungsten — tabel periodik konsisten.'
    },
    {
        sym: 'Bh', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Bohrium — dari GSI Darmstadt, Jerman, hanya beberapa atom.',
        story: 'Bohrium dibuat di GSI Darmstadt (1981) dengan menembakkan kromium ke bismut — hanya 5 atom terdeteksi dalam eksperimen pertama. Dinamai menghormati Niels Bohr.\n\nSetiap atom bohrium yang terbentuk meluruh dalam hitungan milidetik — tidak ada aplikasi praktis, tapi penting untuk memahami batas fisika nuklir.'
    },
    {
        sym: 'Hs', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Hassium — kimia pertama dikonfirmasi 2002: berperilaku seperti osmium.',
        story: 'Hassium dibuat di GSI Darmstadt (1984). Pada 2002, tim di PSI Swiss membuat hassium tetroksida (HsO₄) dan mengkonfirmasi ia berperilaku persis seperti osmium tetroksida — membuktikan tabel periodik tetap berlaku untuk elemen sangat berat.\n\nDinamai dari Hassia — nama Latin negara bagian Hessen, Jerman.'
    },
    {
        sym: 'Mt', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Meitnerium — keadilan posthumous untuk Lise Meitner.',
        story: 'Meitnerium dibuat di GSI (1982) dan dinamai Lise Meitner — fisikawan yang menjelaskan fisi nuklir secara teoritis tapi tidak mendapat Nobel (hanya Otto Hahn yang mendapat Nobel 1944).\n\nBanyak sejarawan sains menganggap pengabaian Meitner oleh Nobel sebagai salah satu ketidakadilan terbesar dalam sejarah sains. Penamaan meitnerium adalah pengakuan yang sangat terlambat.'
    },
    {
        sym: 'Ds', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Darmstadtium — kota Darmstadt jadi nama elemen, dari GSI.',
        story: 'Darmstadtium dibuat di GSI (1994) dan dinamai dari kota Darmstadt, Jerman. Selain memberikan nama untuk elemen, GSI Darmstadt juga merintis teknik akselerasi ion berat yang kini digunakan di seluruh dunia.\n\nTeknologi yang dikembangkan untuk membuat elemen superberat (UNILAC, SHIP) juga digunakan untuk terapi kanker ion berat — fisika partikel yang juga menjadi alat pengobatan.'
    },
    {
        sym: 'Rg', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Roentgenium — menghormati penemu sinar-X, dibuat di GSI.',
        story: 'Roentgenium dibuat di GSI (1994) dan dinamai Wilhelm Röntgen — penemu sinar-X (1895) dan penerima Nobel Fisika pertama (1901). Menamakan elemen darinya adalah penghormatan abadi.\n\nEfek relativistik pada roentgenium diprediksi sangat kuat — sifat kimianya mungkin sangat berbeda dari emas yang ada di atasnya dalam tabel periodik.'
    },
    {
        sym: 'Cn', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Copernicium — mungkin gas pada suhu kamar, dari GSI.',
        story: 'Copernicium dibuat di GSI (1996) dan dinamai Nicolaus Copernicus — tepat 537 tahun setelah kelahirannya saat IUPAC mengkonfirmasi nama ini pada 2010.\n\nPrediksi relativistik menunjukkan Cn mungkin berupa gas pada suhu kamar — sangat tidak biasa untuk logam golongan IIB. Ini adalah contoh ekstrem bagaimana fisika kuantum relativistik mengubah kimia elemen superberat.'
    },
    {
        sym: 'Nh', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Nihonium — elemen superberat pertama ditemukan di Asia, oleh RIKEN Jepang.',
        story: 'Nihonium dibuat di RIKEN Wako, Jepang (2004) — elemen superberat pertama yang ditemukan di Asia. Tim RIKEN membutuhkan 9 tahun dan 400 triliun tumbukan untuk menghasilkan 3 atom saja. Dinamai dari "Nihon" (日本) — nama Jepang untuk Jepang.\n\nPenemuan nihonium adalah momen kebanggaan nasional Jepang dan membuktikan bahwa Asia bisa bersaing di batas terdepan fisika nuklir.'
    },
    {
        sym: 'Fl', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Flerovium — berada di dekat "pulau stabilitas" kosmik.',
        story: 'Flerovium dibuat oleh kolaborasi JINR Dubna-Livermore (1999). Dengan 114 proton, ia berada di dekat "pulau stabilitas" yang diprediksi — isotop tertentu di sana mungkin jauh lebih stabil dari elemen tetangganya.\n\nDinamai dari Laboratorium Flerov (JINR Dubna), yang sendiri dinamai dari Georgy Flyorov — fisikawan Soviet yang menemukan fisi spontan uranium.'
    },
    {
        sym: 'Mc', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Moscovium — kolaborasi Rusia-Amerika dari mantan rival Perang Dingin.',
        story: 'Moscovium dibuat oleh kolaborasi JINR Dubna dan LLNL/ORNL (2003) — simbol transformasi mantan rival Perang Dingin menjadi mitra sains. Bahan (berkelium) dari Oak Ridge dikirim ke Dubna; Rusia mengoperasikan akseleratornya.\n\nDinamai Oblast Moskow, tempat JINR Dubna berada.'
    },
    {
        sym: 'Lv', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Livermorium — dari kolaborasi JINR-LLNL, dinamai Livermore.',
        story: 'Livermorium dibuat oleh JINR Dubna dan Lawrence Livermore National Lab (2000). Dinamai dari LLNL untuk menghormati kontribusi laboratorium Amerika dalam kolaborasi.\n\nLivermorium adalah salah satu dari empat elemen baru yang dikonfirmasi IUPAC sekaligus pada 2016, bersama nihonium, moscovium, dan oganesson.'
    },
    {
        sym: 'Ts', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Tennessine — membutuhkan 250 hari produksi berkelium untuk 6 atom.',
        story: 'Tennessine dibuat (2010) menggunakan 22 mg berkelium-249 yang membutuhkan 250 hari produksi di Oak Ridge — senilai ~$1,5 juta. Hanya 6 atom yang terdeteksi. Dinamai dari negara bagian Tennessee.\n\nTennessine (elemen 117, golongan halogen) diprediksi memiliki sifat yang sangat dipengaruhi efek relativistik — mungkin bertindak lebih seperti metaloid daripada halogen murni.'
    },
    {
        sym: 'Og', type: 'artificial', label: 'Buatan Manusia', icon: '🔬', color: '#94a3b8',
        tagline: 'Oganesson — elemen terberat, mungkin padatan bukan gas mulia.',
        story: 'Oganesson adalah elemen terberat yang pernah dibuat — nomor atom 118. Dibuat oleh JINR Dubna dan LLNL (2002), hanya 5 atom terdeteksi. Dinamai dari Yuri Oganessian yang masih hidup — satu dari dua elemen dinamai dari orang yang masih hidup.\n\nSecara teori gas mulia (golongan 18), tapi efek relativistik yang ekstrem diprediksi membuatnya menjadi padatan pada suhu kamar. Tidak ada yang tahu persis sifatnya — hanya ada beberapa atom pernah ada, masing-masing meluruh dalam milidetik. Kita berada di batas absolut pengetahuan manusia.'
    },
];

export function getOrigin(sym: string): ElementOrigin | undefined {
    return origins.find(o => o.sym === sym);
}
