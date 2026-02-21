// CPK coloring — standard chemistry color convention
export const CPK_COLORS: Record<string, number> = {
    H: 0xFFFFFF, He: 0xD9FFFF, Li: 0xCC80FF, Be: 0xC2FF00,
    B: 0xFFB5B5, C: 0x404040, N: 0x3050F8, O: 0xFF0D0D,
    F: 0x90E050, Ne: 0xB3E3F5, Na: 0xAB5CF2, Mg: 0x8AFF00,
    Al: 0xBFA6A6, Si: 0xF0C8A0, P: 0xFF8000, S: 0xFFFF30,
    Cl: 0x1FF01F, Ar: 0x80D1E3, K: 0x8F40D4, Ca: 0x3DFF00,
    Fe: 0xE06633, Cu: 0xC88033, Zn: 0x7D80B0, Br: 0xA62929,
    Ag: 0xC0C0C0, Au: 0xFFD123, Hg: 0xB8B8D0, Pb: 0x575961,
    DEFAULT: 0xFF69B4,
};

// Atom display radius (visual scale, not actual)
export const ATOM_RADII: Record<string, number> = {
    H: 0.22, C: 0.40, N: 0.38, O: 0.36, F: 0.32,
    Na: 0.62, Mg: 0.56, Al: 0.50, Si: 0.48, P: 0.45,
    S: 0.50, Cl: 0.52, K: 0.68, Ca: 0.62, Fe: 0.56,
    Cu: 0.54, Zn: 0.52, Br: 0.56, Ag: 0.60, Au: 0.58,
    Hg: 0.60, Pb: 0.64, DEFAULT: 0.45,
};

export interface MolAtom {
    sym: string;
    pos: [number, number, number];
}

export interface MolBond {
    a: number;   // index in atoms[]
    b: number;
    type: 'single' | 'double' | 'triple';
}

export interface Molecule {
    formula: string;
    name: string;
    nameId: string;
    composition: Record<string, number>;  // used for matching: { H:2, O:1 }
    atoms: MolAtom[];
    bonds: MolBond[];
    category: 'common' | 'organic' | 'inorganic' | 'acid' | 'base' | 'oxide' | 'salt' | 'gas' | 'material';
    stability?: 'high' | 'medium' | 'low';
    shape: string;
    bondType: string;
    desc: string;
    descEn?: string;
    funFact: string;
    funFactEn?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// MOLECULE DATABASE
// Positions scaled so 1 unit ≈ 1 bond length (visual)
// ─────────────────────────────────────────────────────────────────────────────
export const molecules: Molecule[] = [

    // ── DIATOMIC GASES ────────────────────────────────────────────────────
    {
        formula: 'H₂', name: 'Hydrogen', nameId: 'Gas Hidrogen',
        composition: { H: 2 },
        atoms: [{ sym: 'H', pos: [-0.37, 0, 0] }, { sym: 'H', pos: [0.37, 0, 0] }],
        bonds: [{ a: 0, b: 1, type: 'single' }],
        category: 'gas', shape: 'Linear', bondType: 'Kovalen nonpolar',
        desc: 'Gas tak berwarna, tak berbau, paling ringan di alam semesta. Bahan bakar masa depan — saat dibakar hanya menghasilkan air.',
        funFact: 'Matahari pada dasarnya adalah reaktor fusi hidrogen raksasa yang membakar 600 juta ton hidrogen setiap detik.',
    },
    {
        formula: 'O₂', name: 'Oxygen', nameId: 'Gas Oksigen',
        composition: { O: 2 },
        atoms: [{ sym: 'O', pos: [-0.60, 0, 0] }, { sym: 'O', pos: [0.60, 0, 0] }],
        bonds: [{ a: 0, b: 1, type: 'double' }],
        category: 'gas', shape: 'Linear', bondType: 'Kovalen nonpolar',
        desc: 'Gas yang memungkinkan semua kehidupan di Bumi. 21% komposisi udara yang kita hirup setiap saat.',
        funFact: 'Oksigen pertama kali ditemukan hampir bersamaan oleh dua ilmuwan di dua negara berbeda tanpa saling tahu.',
    },
    {
        formula: 'N₂', name: 'Nitrogen', nameId: 'Gas Nitrogen',
        composition: { N: 2 },
        atoms: [{ sym: 'N', pos: [-0.55, 0, 0] }, { sym: 'N', pos: [0.55, 0, 0] }],
        bonds: [{ a: 0, b: 1, type: 'triple' }],
        category: 'gas', shape: 'Linear', bondType: 'Kovalen nonpolar (ikatan rangkap tiga)',
        desc: 'Gas yang mendominasi 78% udara. Sangat stabil karena ikatan rangkap tiganya — salah satu ikatan paling kuat di alam.',
        funFact: 'Nitrogen cair (-196°C) digunakan untuk membekukan sel dan jaringan biologis, bahkan untuk kriopreservasi.',
    },
    {
        formula: 'Cl₂', name: 'Chlorine', nameId: 'Gas Klorin',
        composition: { Cl: 2 },
        atoms: [{ sym: 'Cl', pos: [-1.00, 0, 0] }, { sym: 'Cl', pos: [1.00, 0, 0] }],
        bonds: [{ a: 0, b: 1, type: 'single' }],
        category: 'gas', shape: 'Linear', bondType: 'Kovalen nonpolar',
        desc: 'Gas kuning kehijauan berbau tajam. Dalam konsentrasi rendah dipakai untuk desinfeksi air minum.',
        funFact: 'Klorin (Cl₂) pernah digunakan sebagai senjata kimia di Perang Dunia I, tapi juga yang menyelamatkan jutaan nyawa lewat klorinasi air.',
    },

    // ── COMMON MOLECULES ─────────────────────────────────────────────────
    {
        formula: 'H₂O', name: 'Water', nameId: 'Air',
        composition: { H: 2, O: 1 },
        atoms: [
            { sym: 'O', pos: [0.00, 0.00, 0] },
            { sym: 'H', pos: [-0.76, -0.59, 0] },
            { sym: 'H', pos: [0.76, -0.59, 0] },
        ],
        bonds: [{ a: 0, b: 1, type: 'single' }, { a: 0, b: 2, type: 'single' }],
        category: 'common', shape: 'Bengkok (bent) — 104.5°', bondType: 'Kovalen polar',
        desc: 'Satu-satunya zat yang ditemukan di alam dalam tiga wujud: padat, cair, dan gas. Tanpanya, tidak ada kehidupan.',
        funFact: 'Air yang kamu minum hari ini mungkin pernah mengisi dinosaurus, mengalir di sungai kuno, atau berada di awan di Mesir kuno — atom tidak pernah musnah.',
    },
    {
        formula: 'CO₂', name: 'Carbon Dioxide', nameId: 'Karbon Dioksida',
        composition: { C: 1, O: 2 },
        atoms: [
            { sym: 'O', pos: [-1.16, 0, 0] },
            { sym: 'C', pos: [0.00, 0, 0] },
            { sym: 'O', pos: [1.16, 0, 0] },
        ],
        bonds: [{ a: 1, b: 0, type: 'double' }, { a: 1, b: 2, type: 'double' }],
        category: 'common', shape: 'Linear — 180°', bondType: 'Kovalen polar',
        desc: 'Dihasilkan dari respirasi makhluk hidup dan pembakaran. Juga yang membuat tanaman bisa berfotosintesis.',
        funFact: 'CO₂ yang kamu hembuskan setiap detik akan diserap pohon dan diubah menjadi oksigen dan glukosa — siklus karbon yang sempurna.',
    },
    {
        formula: 'NH₃', name: 'Ammonia', nameId: 'Amonia',
        composition: { N: 1, H: 3 },
        atoms: [
            { sym: 'N', pos: [0.000, 0.00, 0.000] },
            { sym: 'H', pos: [0.940, -0.38, 0.000] },
            { sym: 'H', pos: [-0.470, -0.38, 0.814] },
            { sym: 'H', pos: [-0.470, -0.38, -0.814] },
        ],
        bonds: [{ a: 0, b: 1, type: 'single' }, { a: 0, b: 2, type: 'single' }, { a: 0, b: 3, type: 'single' }],
        category: 'common', shape: 'Piramida trigonal', bondType: 'Kovalen polar',
        desc: 'Bau tajam yang kamu cium dari pembersih toilet adalah amonia. Juga bahan baku 80% pupuk nitrogen di dunia.',
        funFact: 'Sintesis amonia (proses Haber-Bosch) mungkin adalah penemuan paling berdampak pada populasi manusia — memungkinkan produksi pupuk massal yang menghidupi ~4 miliar orang.',
    },
    {
        formula: 'CH₄', name: 'Methane', nameId: 'Metana',
        composition: { C: 1, H: 4 },
        atoms: [
            { sym: 'C', pos: [0.000, 0.000, 0.000] },
            { sym: 'H', pos: [0.629, 0.629, 0.629] },
            { sym: 'H', pos: [-0.629, -0.629, 0.629] },
            { sym: 'H', pos: [-0.629, 0.629, -0.629] },
            { sym: 'H', pos: [0.629, -0.629, -0.629] },
        ],
        bonds: [{ a: 0, b: 1, type: 'single' }, { a: 0, b: 2, type: 'single' }, { a: 0, b: 3, type: 'single' }, { a: 0, b: 4, type: 'single' }],
        category: 'organic', shape: 'Tetrahedral — 109.5°', bondType: 'Kovalen nonpolar',
        desc: 'Komponen utama gas alam. Kompor di dapurmu menggunakan metana. Juga gas rumah kaca 80x lebih kuat dari CO₂.',
        funFact: 'Di luar tata surya, ada danau metana cair di bulan Titan milik Saturnus — seperti samudra, tapi isinya bukan air.',
    },
    {
        formula: 'H₂O₂', name: 'Hydrogen Peroxide', nameId: 'Hidrogen Peroksida',
        composition: { H: 2, O: 2 },
        atoms: [
            { sym: 'O', pos: [-0.73, 0.00, 0.00] },
            { sym: 'O', pos: [0.73, 0.00, 0.00] },
            { sym: 'H', pos: [-1.20, 0.00, 0.85] },
            { sym: 'H', pos: [1.20, 0.00, -0.85] },
        ],
        bonds: [{ a: 0, b: 1, type: 'single' }, { a: 0, b: 2, type: 'single' }, { a: 1, b: 3, type: 'single' }],
        category: 'common', shape: 'Non-planar', bondType: 'Kovalen polar',
        desc: 'Cairan bening yang dipakai sebagai pemutih dan antiseptik. Secara kimia mirip air — tapi satu oksigen lebih.',
        funFact: 'Kumbang bombardir menggunakan reaksi H₂O₂ untuk menembakkan semprotan air mendidih 100°C dari tubuhnya sebagai mekanisme pertahanan.',
    },
    {
        formula: 'CO', name: 'Carbon Monoxide', nameId: 'Karbon Monoksida',
        composition: { C: 1, O: 1 },
        atoms: [{ sym: 'C', pos: [-0.565, 0, 0] }, { sym: 'O', pos: [0.565, 0, 0] }],
        bonds: [{ a: 0, b: 1, type: 'triple' }],
        category: 'gas', shape: 'Linear', bondType: 'Kovalen (ikatan rangkap tiga)',
        desc: 'Gas tak berwarna, tak berbau, tapi sangat beracun. Disebut "silent killer" karena tidak terdeteksi indera.',
        funFact: 'CO mengikat hemoglobin 250× lebih kuat dari oksigen — jadi satu molekul CO bisa memblokir satu sel darah merah selamanya.',
    },
    {
        formula: 'O₃', name: 'Ozone', nameId: 'Ozon',
        composition: { O: 3 },
        atoms: [
            { sym: 'O', pos: [0.00, 0.35, 0] },
            { sym: 'O', pos: [-0.95, -0.48, 0] },
            { sym: 'O', pos: [0.95, -0.48, 0] },
        ],
        bonds: [{ a: 0, b: 1, type: 'single' }, { a: 0, b: 2, type: 'single' }],
        category: 'gas', shape: 'Bengkok — 116.8°', bondType: 'Kovalen (resonansi)',
        desc: 'Tiga atom oksigen yang membentuk lapisan pelindung di stratosfer. Menyerap 97-99% radiasi UV dari matahari.',
        funFact: 'Di stratosfer ozon menyelamatkan hidup; di permukaan bumi ozon adalah polutan yang merusak paru-paru. Molekul yang sama, lokasi berbeda, efek berlawanan.',
    },

    // ── ACIDS ─────────────────────────────────────────────────────────────
    {
        formula: 'HCl', name: 'Hydrochloric Acid', nameId: 'Asam Klorida',
        composition: { H: 1, Cl: 1 },
        atoms: [{ sym: 'H', pos: [-0.63, 0, 0] }, { sym: 'Cl', pos: [0.63, 0, 0] }],
        bonds: [{ a: 0, b: 1, type: 'single' }],
        category: 'acid', shape: 'Linear', bondType: 'Kovalen polar',
        desc: 'Asam kuat yang ada di dalam lambungmu dengan kadar 0.1–0.5%. Membantu mencerna makanan dan membunuh bakteri.',
        funFact: 'Lambungmu mengandung cukup asam klorida untuk melarutkan silet besi — tapi lapisan mukosa melindungi dinding lambung dari kerusakan.',
    },
    {
        formula: 'H₂SO₄', name: 'Sulfuric Acid', nameId: 'Asam Sulfat',
        composition: { H: 2, S: 1, O: 4 },
        atoms: [
            { sym: 'S', pos: [0.00, 0.00, 0.00] },
            { sym: 'O', pos: [0.00, 1.10, 0.00] },
            { sym: 'O', pos: [0.00, -1.10, 0.00] },
            { sym: 'O', pos: [-1.10, 0.00, 0.00] },
            { sym: 'O', pos: [1.10, 0.00, 0.00] },
            { sym: 'H', pos: [-1.98, 0.00, 0.00] },
            { sym: 'H', pos: [1.98, 0.00, 0.00] },
        ],
        bonds: [
            { a: 0, b: 1, type: 'double' }, { a: 0, b: 2, type: 'double' },
            { a: 0, b: 3, type: 'single' }, { a: 0, b: 4, type: 'single' },
            { a: 3, b: 5, type: 'single' }, { a: 4, b: 6, type: 'single' },
        ],
        category: 'acid', shape: 'Tetrahedral (distorted)', bondType: 'Kovalen polar',
        desc: 'Asam paling banyak diproduksi di dunia. Dipakai untuk baterai aki, pupuk, detergen, dan ratusan proses industri.',
        funFact: 'Lebih dari 200 juta ton asam sulfat diproduksi setiap tahun — rasio produksinya sering dipakai sebagai indikator kekuatan industri suatu negara.',
    },
    {
        formula: 'HNO₃', name: 'Nitric Acid', nameId: 'Asam Nitrat',
        composition: { H: 1, N: 1, O: 3 },
        atoms: [
            { sym: 'H', pos: [0.00, 1.96, 0] },
            { sym: 'O', pos: [0.00, 1.00, 0] },
            { sym: 'N', pos: [0.00, 0.00, 0] },
            { sym: 'O', pos: [-1.10, -0.55, 0] },
            { sym: 'O', pos: [1.10, -0.55, 0] },
        ],
        bonds: [
            { a: 0, b: 1, type: 'single' }, { a: 1, b: 2, type: 'single' },
            { a: 2, b: 3, type: 'double' }, { a: 2, b: 4, type: 'double' },
        ],
        category: 'acid', shape: 'Planar', bondType: 'Kovalen polar',
        desc: 'Asam yang dipakai untuk membuat pupuk dan bahan peledak. Menyentuh kulit akan meninggalkan noda kuning (xantoprotein).',
        funFact: 'HNO₃ adalah bahan dasar dinamit (nitrogliserin) dan TNT — bahan peledak yang ironisnya ditemukan oleh Alfred Nobel, pendiri Hadiah Nobel Perdamaian.',
    },

    // ── BASES ─────────────────────────────────────────────────────────────
    {
        formula: 'NaOH', name: 'Sodium Hydroxide', nameId: 'Natrium Hidroksida',
        composition: { Na: 1, O: 1, H: 1 },
        atoms: [
            { sym: 'Na', pos: [-1.80, 0, 0] },
            { sym: 'O', pos: [0.00, 0, 0] },
            { sym: 'H', pos: [0.96, 0, 0] },
        ],
        bonds: [{ a: 0, b: 1, type: 'single' }, { a: 1, b: 2, type: 'single' }],
        category: 'base', shape: 'Linear', bondType: 'Ionik + kovalen',
        desc: 'Dikenal sebagai soda api atau caustic soda. Bahan utama sabun, kertas, dan pembersih saluran mampet.',
        funFact: 'Pretzel cokelat yang keras itu dicelup ke dalam larutan NaOH sebelum dipanggang — reaksi inilah yang menciptakan warna cokelat gelap dan rasa khasnya.',
    },
    {
        formula: 'KOH', name: 'Potassium Hydroxide', nameId: 'Kalium Hidroksida',
        composition: { K: 1, O: 1, H: 1 },
        atoms: [
            { sym: 'K', pos: [-1.90, 0, 0] },
            { sym: 'O', pos: [0.00, 0, 0] },
            { sym: 'H', pos: [0.96, 0, 0] },
        ],
        bonds: [{ a: 0, b: 1, type: 'single' }, { a: 1, b: 2, type: 'single' }],
        category: 'base', shape: 'Linear', bondType: 'Ionik + kovalen',
        desc: 'Basa kuat yang lebih larut dari NaOH. Dipakai untuk baterai alkali, sabun lembut, dan industri makanan.',
        funFact: 'KOH digunakan untuk membuat sabun yang jauh lebih lembut (liquid soap) dibandingkan sabun batang yang menggunakan NaOH.',
    },

    // ── SALTS ─────────────────────────────────────────────────────────────
    {
        formula: 'NaCl', name: 'Sodium Chloride', nameId: 'Garam Dapur',
        composition: { Na: 1, Cl: 1 },
        atoms: [
            { sym: 'Na', pos: [-0.90, 0, 0] },
            { sym: 'Cl', pos: [0.90, 0, 0] },
        ],
        bonds: [{ a: 0, b: 1, type: 'single' }],
        category: 'salt', shape: 'Linear (unit)', bondType: 'Ionik',
        desc: 'Natrium adalah logam reaktif yang meledak di air. Klorin adalah gas beracun. Keduanya bergabung jadi garam dapur yang aman dimakan.',
        funFact: 'Garam pernah bernilai setara emas — kata "salary" berasal dari bahasa Latin "salarium" (pembayaran dengan garam). Pekerja Romawi digaji dengan garam.',
    },
    {
        formula: 'KCl', name: 'Potassium Chloride', nameId: 'Kalium Klorida',
        composition: { K: 1, Cl: 1 },
        atoms: [
            { sym: 'K', pos: [-1.04, 0, 0] },
            { sym: 'Cl', pos: [1.04, 0, 0] },
        ],
        bonds: [{ a: 0, b: 1, type: 'single' }],
        category: 'salt', shape: 'Linear (unit)', bondType: 'Ionik',
        desc: 'Pengganti garam dapur untuk penderita hipertensi. Juga digunakan sebagai pupuk kalium dan dalam prosedur medis.',
        funFact: 'KCl dipakai dalam injeksi eksekusi mati — menghentikan jantung dalam hitungan detik. Tapi dalam dosis kecil justru memelihara detak jantung normal.',
    },
    {
        formula: 'CaCO₃', name: 'Calcium Carbonate', nameId: 'Kalsium Karbonat',
        composition: { Ca: 1, C: 1, O: 3 },
        atoms: [
            { sym: 'Ca', pos: [-2.20, 0.00, 0.00] },
            { sym: 'C', pos: [0.50, 0.00, 0.00] },
            { sym: 'O', pos: [0.50, 1.25, 0.00] },
            { sym: 'O', pos: [-0.58, -0.63, 0.00] },
            { sym: 'O', pos: [1.58, -0.63, 0.00] },
        ],
        bonds: [
            { a: 0, b: 3, type: 'single' },
            { a: 1, b: 2, type: 'double' }, { a: 1, b: 3, type: 'single' }, { a: 1, b: 4, type: 'single' },
        ],
        category: 'salt', shape: 'CO₃ planar trigonal', bondType: 'Ionik + kovalen',
        desc: 'Komponen utama batu kapur, marmer, dan cangkang kerang. Juga zat aktif dalam obat maag.',
        funFact: 'Seluruh Pegunungan Alps dan banyak bangunan besar dunia (termasuk Piramida Giza) sebagian besar terbuat dari CaCO₃ dalam bentuk batu kapur.',
    },

    // ── OXIDES ────────────────────────────────────────────────────────────
    {
        formula: 'SO₂', name: 'Sulfur Dioxide', nameId: 'Sulfur Dioksida',
        composition: { S: 1, O: 2 },
        atoms: [
            { sym: 'S', pos: [0.00, 0.00, 0] },
            { sym: 'O', pos: [-1.10, -0.72, 0] },
            { sym: 'O', pos: [1.10, -0.72, 0] },
        ],
        bonds: [{ a: 0, b: 1, type: 'double' }, { a: 0, b: 2, type: 'double' }],
        category: 'oxide', shape: 'Bengkok — 119°', bondType: 'Kovalen polar',
        desc: 'Gas berbau belerang dari gunung berapi dan pembakaran bahan bakar fosil. Penyebab utama hujan asam.',
        funFact: 'SO₂ juga dipakai sebagai pengawet makanan (E220) — anggur dan buah kering sering diawetkan dengan SO₂ untuk mencegah oksidasi dan pertumbuhan jamur.',
    },
    {
        formula: 'NO₂', name: 'Nitrogen Dioxide', nameId: 'Nitrogen Dioksida',
        composition: { N: 1, O: 2 },
        atoms: [
            { sym: 'N', pos: [0.00, 0.00, 0] },
            { sym: 'O', pos: [-0.95, -0.70, 0] },
            { sym: 'O', pos: [0.95, -0.70, 0] },
        ],
        bonds: [{ a: 0, b: 1, type: 'double' }, { a: 0, b: 2, type: 'double' }],
        category: 'oxide', shape: 'Bengkok — 134°', bondType: 'Kovalen polar',
        desc: 'Gas cokelat kemerahan berbau tajam dari knalpot kendaraan. Bereaksi dengan air membentuk asam nitrat.',
        funFact: 'Langit kemerahan di kota-kota berpolusi sering disebabkan oleh NO₂ — gas ini menyerap cahaya biru dan memantulkan merah-oranye.',
    },
    {
        formula: 'N₂O', name: 'Nitrous Oxide', nameId: 'Dinitrogen Monoksida',
        composition: { N: 2, O: 1 },
        atoms: [
            { sym: 'N', pos: [-1.12, 0, 0] },
            { sym: 'N', pos: [0.00, 0, 0] },
            { sym: 'O', pos: [1.18, 0, 0] },
        ],
        bonds: [{ a: 0, b: 1, type: 'double' }, { a: 1, b: 2, type: 'double' }],
        category: 'oxide', shape: 'Linear', bondType: 'Kovalen polar',
        desc: 'Dikenal sebagai "gas tertawa" — efek euforik ringan saat dihirup. Juga oksidan dalam mesin balap dan bahan propelan.',
        funFact: 'N₂O adalah gas rumah kaca yang 300× lebih kuat dari CO₂ dalam hal potensi pemanasan global. Gas tertawa yang tidak lucu untuk iklim.',
    },
    {
        formula: 'MgO', name: 'Magnesium Oxide', nameId: 'Magnesium Oksida',
        composition: { Mg: 1, O: 1 },
        atoms: [{ sym: 'Mg', pos: [-0.90, 0, 0] }, { sym: 'O', pos: [0.90, 0, 0] }],
        bonds: [{ a: 0, b: 1, type: 'single' }],
        category: 'oxide', shape: 'Linear (unit)', bondType: 'Ionik',
        desc: 'Padatan putih dengan titik leleh sangat tinggi (2852°C). Dipakai sebagai refraktori (material tahan panas) dan suplemen magnesium.',
        funFact: 'Magnesium terbakar menghasilkan cahaya putih sangat terang yang digunakan untuk blitz foto sebelum lampu flash elektronik ditemukan.',
    },
    {
        formula: 'Fe₂O₃', name: 'Iron(III) Oxide', nameId: 'Besi Oksida (Karat)',
        composition: { Fe: 2, O: 3 },
        atoms: [
            { sym: 'Fe', pos: [-1.60, 0.70, 0] },
            { sym: 'Fe', pos: [1.60, 0.70, 0] },
            { sym: 'O', pos: [0.00, 0.00, 0] },
            { sym: 'O', pos: [-1.80, -0.70, 0] },
            { sym: 'O', pos: [1.80, -0.70, 0] },
        ],
        bonds: [
            { a: 0, b: 2, type: 'single' }, { a: 0, b: 3, type: 'single' },
            { a: 1, b: 2, type: 'single' }, { a: 1, b: 4, type: 'single' },
        ],
        category: 'oxide', shape: 'Kompleks (kristal)', bondType: 'Ionik',
        desc: 'Karat yang menggerogoti besi. Terbentuk ketika besi bereaksi dengan oksigen dan air selama bertahun-tahun.',
        funFact: 'Mars berwarna merah karena permukaannya ditutupi Fe₂O₃ (karat). Seluruh planet Mars berkarat.',
    },

    // ── ORGANIC ───────────────────────────────────────────────────────────
    {
        formula: 'C₂H₂', name: 'Acetylene', nameId: 'Asetilena',
        composition: { C: 2, H: 2 },
        atoms: [
            { sym: 'H', pos: [-1.66, 0, 0] },
            { sym: 'C', pos: [-0.60, 0, 0] },
            { sym: 'C', pos: [0.60, 0, 0] },
            { sym: 'H', pos: [1.66, 0, 0] },
        ],
        bonds: [{ a: 0, b: 1, type: 'single' }, { a: 1, b: 2, type: 'triple' }, { a: 2, b: 3, type: 'single' }],
        category: 'organic', shape: 'Linear', bondType: 'Kovalen (C≡C triple)',
        desc: 'Bahan bakar las oxyacetylene yang membakar pada 3500°C — cukup panas untuk memotong baja.',
        funFact: 'Asetilena adalah alkuna paling sederhana — senyawa organik dengan ikatan rangkap tiga antar karbon. Bintang-bintang tertentu mengandung asetilena di atmosfernya.',
    },
    {
        formula: 'C₂H₄', name: 'Ethylene', nameId: 'Etilena',
        composition: { C: 2, H: 4 },
        atoms: [
            { sym: 'C', pos: [-0.67, 0.00, 0] },
            { sym: 'C', pos: [0.67, 0.00, 0] },
            { sym: 'H', pos: [-1.23, 0.93, 0] },
            { sym: 'H', pos: [-1.23, -0.93, 0] },
            { sym: 'H', pos: [1.23, 0.93, 0] },
            { sym: 'H', pos: [1.23, -0.93, 0] },
        ],
        bonds: [
            { a: 0, b: 1, type: 'double' },
            { a: 0, b: 2, type: 'single' }, { a: 0, b: 3, type: 'single' },
            { a: 1, b: 4, type: 'single' }, { a: 1, b: 5, type: 'single' },
        ],
        category: 'organic', shape: 'Planar', bondType: 'Kovalen (C=C double)',
        desc: 'Hormon alami yang memicu pematangan buah. Juga monomer plastik polietilen yang paling banyak diproduksi di dunia.',
        funFact: 'Buah yang dimasukkan dalam kantong kertas matang lebih cepat karena C₂H₄ yang dihasilkan buah itu sendiri terkonsentrasi di dalam kantong.',
    },
    {
        formula: 'CH₃OH', name: 'Methanol', nameId: 'Metanol',
        composition: { C: 1, H: 4, O: 1 },
        atoms: [
            { sym: 'C', pos: [0.00, 0.00, 0.00] },
            { sym: 'O', pos: [1.43, 0.00, 0.00] },
            { sym: 'H', pos: [1.85, 0.00, -0.89] },
            { sym: 'H', pos: [-0.40, 1.03, 0.00] },
            { sym: 'H', pos: [-0.40, -0.51, 0.89] },
            { sym: 'H', pos: [-0.40, -0.51, -0.89] },
        ],
        bonds: [
            { a: 0, b: 1, type: 'single' }, { a: 1, b: 2, type: 'single' },
            { a: 0, b: 3, type: 'single' }, { a: 0, b: 4, type: 'single' }, { a: 0, b: 5, type: 'single' },
        ],
        category: 'organic', shape: 'Tetrahedral (C)', bondType: 'Kovalen polar',
        desc: 'Alkohol paling sederhana, tapi sangat berbahaya. Diminum dalam jumlah kecil pun bisa menyebabkan kebutaan dan kematian.',
        funFact: 'Metanol dan etanol (alkohol minum) terlihat, berbau, dan terasa hampir sama — tapi 10 ml metanol cukup untuk membutakan, dan 30 ml bisa membunuh.',
    },
    {
        formula: 'C₂H₅OH', name: 'Ethanol', nameId: 'Etanol',
        composition: { C: 2, H: 6, O: 1 },
        atoms: [
            { sym: 'C', pos: [-1.50, 0.00, 0.00] },
            { sym: 'C', pos: [0.00, 0.00, 0.00] },
            { sym: 'O', pos: [0.74, 0.90, 0.00] },
            { sym: 'H', pos: [1.65, 0.55, 0.00] },
            { sym: 'H', pos: [-1.90, 1.00, 0.00] },
            { sym: 'H', pos: [-1.90, -0.50, 0.87] },
            { sym: 'H', pos: [-1.90, -0.50, -0.87] },
            { sym: 'H', pos: [0.40, -1.00, 0.00] },
            { sym: 'H', pos: [0.40, -0.50, 0.87] },
        ],
        bonds: [
            { a: 0, b: 1, type: 'single' }, { a: 1, b: 2, type: 'single' }, { a: 2, b: 3, type: 'single' },
            { a: 0, b: 4, type: 'single' }, { a: 0, b: 5, type: 'single' }, { a: 0, b: 6, type: 'single' },
            { a: 1, b: 7, type: 'single' }, { a: 1, b: 8, type: 'single' },
        ],
        category: 'organic', shape: 'Zigzag', bondType: 'Kovalen polar',
        desc: 'Alkohol yang dikonsumsi manusia, juga bahan bakar nabati dan pelarut industri. Dihasilkan dari fermentasi gula oleh ragi.',
        funFact: 'Manusia menghasilkan etanol sendiri dalam tubuh dalam jumlah sangat kecil lewat fermentasi bakteri usus — secara teknis kita semua selalu "sedikit mabuk".',
    },

    // ── MATERIALS & STRUCTURES ────────────────────────────────────────────
    // Kenapa berlian keras, besi kuat, kayu lunak?
    // JAWABAN: bukan jenis atomnya — tapi BAGAIMANA atom-atom itu tersusun dan berikatan.
    {
        formula: 'C (Berlian)',
        name: 'Diamond unit cell', nameId: 'Berlian — Unit Tetrahedral',
        composition: { C: 5 },
        atoms: [
            // Centre + 4 tetrahedral neighbours (C-C bond ~1.54 Å, scaled)
            { sym: 'C', pos: [0.00, 0.00, 0.00] },
            { sym: 'C', pos: [0.89, 0.89, 0.89] },
            { sym: 'C', pos: [-0.89, -0.89, 0.89] },
            { sym: 'C', pos: [-0.89, 0.89, -0.89] },
            { sym: 'C', pos: [0.89, -0.89, -0.89] },
        ],
        bonds: [
            { a: 0, b: 1, type: 'single' }, { a: 0, b: 2, type: 'single' },
            { a: 0, b: 3, type: 'single' }, { a: 0, b: 4, type: 'single' },
        ],
        category: 'material', shape: 'Tetrahedral 3D — 109.5° (jaringan tak terbatas)', bondType: 'Kovalen nonpolar (sangat kuat)',
        stability: 'high',
        desc: 'Berlian hanya terdiri dari atom karbon — sama persis dengan pensil (grafit). Bedanya: di berlian, setiap atom C berikatan dengan 4 atom C lain ke semua arah 3D, membentuk jaringan raksasa yang tidak punya bagian lemah. Inilah mengapa berlian adalah benda alami paling keras di Bumi.',
        funFact: 'Berlian dan grafit sama-sama 100% karbon. Berlian terbentuk di kedalaman 150 km di dalam bumi pada tekanan 45.000–60.000 atm. Secara termodinamika, grafit sebenarnya lebih stabil dari berlian di permukaan bumi — tapi berlian tidak berubah menjadi grafit karena butuh energi aktivasi yang sangat besar.',
    },
    {
        formula: 'C (Grafit)',
        name: 'Graphite layer unit', nameId: 'Grafit — Unit Cincin Heksagonal',
        composition: { C: 6 },
        atoms: [
            // Benzene-like hexagonal ring (aromatic C layer)
            { sym: 'C', pos: [0.71, 0.00, 0] },
            { sym: 'C', pos: [0.36, 0.61, 0] },
            { sym: 'C', pos: [-0.36, 0.61, 0] },
            { sym: 'C', pos: [-0.71, 0.00, 0] },
            { sym: 'C', pos: [-0.36, -0.61, 0] },
            { sym: 'C', pos: [0.36, -0.61, 0] },
        ],
        bonds: [
            { a: 0, b: 1, type: 'double' }, { a: 1, b: 2, type: 'single' },
            { a: 2, b: 3, type: 'double' }, { a: 3, b: 4, type: 'single' },
            { a: 4, b: 5, type: 'double' }, { a: 5, b: 0, type: 'single' },
        ],
        category: 'material', shape: 'Planar hexagonal — lapisan 2D bertumpuk', bondType: 'Kovalen aromatik + van der Waals (antar lapisan)',
        stability: 'high',
        desc: 'Grafit adalah karbon yang sama dengan berlian, tapi tersusun dalam lembaran-lembaran heksagonal (seperti sarang lebah) yang bertumpuk. Dalam satu lapisan, ikatan karbon sangat kuat. Tapi antar lapisan, hanya ada gaya van der Waals yang lemah — sehingga lapisan mudah tergelincir. Itulah mengapa grafit bisa menulis dan terasa licin.',
        funFact: 'Satu lapisan grafit disebut graphene — material 2D pertama yang pernah diisolasi manusia (2004). Lebih kuat dari berlian dalam satu bidang, tapi hanya setebal satu atom. Penemu graphene meraih Nobel 2010 dengan mengelupas grafit menggunakan selotip biasa.',
    },
    {
        formula: 'Fe (Logam)',
        name: 'Iron metal — BCC cluster', nameId: 'Besi — Unit Kristal Logam',
        composition: { Fe: 9 },
        atoms: [
            // Body-Centred Cubic inspired cluster
            { sym: 'Fe', pos: [0.00, 0.00, 0.00] },  // centre
            { sym: 'Fe', pos: [1.20, 0.00, 0.00] },
            { sym: 'Fe', pos: [-1.20, 0.00, 0.00] },
            { sym: 'Fe', pos: [0.00, 1.20, 0.00] },
            { sym: 'Fe', pos: [0.00, -1.20, 0.00] },
            { sym: 'Fe', pos: [0.00, 0.00, 1.20] },
            { sym: 'Fe', pos: [0.00, 0.00, -1.20] },
            { sym: 'Fe', pos: [0.85, 0.85, 0.85] },
            { sym: 'Fe', pos: [-0.85, -0.85, -0.85] },
        ],
        bonds: [
            { a: 0, b: 1, type: 'single' }, { a: 0, b: 2, type: 'single' },
            { a: 0, b: 3, type: 'single' }, { a: 0, b: 4, type: 'single' },
            { a: 0, b: 5, type: 'single' }, { a: 0, b: 6, type: 'single' },
            { a: 0, b: 7, type: 'single' }, { a: 0, b: 8, type: 'single' },
        ],
        category: 'material', shape: 'Kubik pusat badan (BCC)', bondType: 'Ikatan logam (lautan elektron bebas)',
        stability: 'medium',
        desc: 'Besi atom-atomnya tersusun rapat dalam kisi kubik dengan elektron yang "mengalir bebas" di antara semua atom (lautan elektron). Ini yang membuat besi kuat, menghantarkan listrik, dan bisa ditempa. Tapi besi "lapar" oksigen — secara termodinamika, Fe₂O₃ (karat) jauh lebih stabil dari Fe + O₂. Tanpa lapisan pelindung, besi pasti akhirnya berkarat.',
        funFact: 'Inti Bumi (inner core) terbuat dari besi-nikel padat bersuhu 5.400°C — sepanas permukaan matahari. Medan magnet Bumi yang melindungi kita dari angin matahari dihasilkan oleh pergerakan besi cair di outer core.',
    },
    {
        formula: 'C₆H₁₂O₆', name: 'Glucose', nameId: 'Glukosa — Energi di Balik Kayu',
        composition: { C: 6, H: 12, O: 6 },
        atoms: [
            // Open-chain form, simplified
            { sym: 'C', pos: [-2.25, 0.70, 0.00] },
            { sym: 'C', pos: [-1.50, 0.00, 0.00] },
            { sym: 'C', pos: [-0.75, 0.70, 0.00] },
            { sym: 'C', pos: [0.00, 0.00, 0.00] },
            { sym: 'C', pos: [0.75, 0.70, 0.00] },
            { sym: 'C', pos: [1.50, 0.00, 0.00] },
            { sym: 'O', pos: [-2.25, 1.90, 0.00] },   // C1=O (aldehyde)
            { sym: 'O', pos: [-1.50, -1.10, 0.00] },   // C2-OH
            { sym: 'O', pos: [-0.75, 1.90, 0.00] },   // C3-OH
            { sym: 'O', pos: [0.00, -1.10, 0.00] },   // C4-OH
            { sym: 'O', pos: [0.75, 1.90, 0.00] },   // C5-OH
            { sym: 'O', pos: [1.50, -1.10, 0.00] },   // C6-OH
            { sym: 'H', pos: [-1.50, 0.00, -1.00] },
            { sym: 'H', pos: [-0.75, 0.70, -1.00] },
            { sym: 'H', pos: [0.00, 0.00, -1.00] },
        ],
        bonds: [
            { a: 0, b: 1, type: 'single' }, { a: 1, b: 2, type: 'single' },
            { a: 2, b: 3, type: 'single' }, { a: 3, b: 4, type: 'single' },
            { a: 4, b: 5, type: 'single' },
            { a: 0, b: 6, type: 'double' },
            { a: 1, b: 7, type: 'single' }, { a: 2, b: 8, type: 'single' },
            { a: 3, b: 9, type: 'single' }, { a: 4, b: 10, type: 'single' },
            { a: 5, b: 11, type: 'single' },
            { a: 1, b: 12, type: 'single' }, { a: 2, b: 13, type: 'single' },
            { a: 3, b: 14, type: 'single' },
        ],
        category: 'material', shape: 'Rantai karbon terbuka (atau cincin piranosa)', bondType: 'Kovalen polar',
        stability: 'medium',
        desc: 'Kayu bukan satu molekul — ia adalah polimer selulosa, tersusun dari ribuan unit glukosa yang saling berantai. Glukosa adalah "bola di atas bukit" — mengandung energi tersimpan yang siap dilepas. Saat dibakar: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi. Kayu terbakar bukan karena atom-atomnya "menghilang" — mereka hanya bergabung ulang dengan oksigen menjadi CO₂ dan air yang lebih stabil.',
        funFact: 'Kayu, gula, nasi, roti — semuanya glukosa atau polimer glukosa. Makan nasi = memotong polimer panjang itu jadi satuan glukosa, lalu "membakarnya" perlahan di sel tubuh menggunakan oksigen. Respirasi sel adalah pembakaran yang sangat lambat dan terkontrol.',
    },
];


// ─────────────────────────────────────────────────────────────────────────────
// MATCHING FUNCTION
// Returns the first molecule whose composition exactly matches selection
// ─────────────────────────────────────────────────────────────────────────────
export function matchMolecule(sel: Record<string, number>): Molecule | null {
    if (!Object.keys(sel).length) return null;
    return molecules.find(mol => {
        const keys = new Set([...Object.keys(sel), ...Object.keys(mol.composition)]);
        for (const k of keys) {
            if ((sel[k] || 0) !== (mol.composition[k] || 0)) return false;
        }
        return true;
    }) || null;
}

// Category display names
export const CATEGORY_LABELS: Record<string, string> = {
    common: 'Umum',
    organic: 'Organik',
    inorganic: 'Anorganik',
    acid: 'Asam',
    base: 'Basa',
    oxide: 'Oksida',
    salt: 'Garam',
    gas: 'Gas',
    material: 'Material / Struktur',
};

// ─────────────────────────────────────────────────────────────────────────────
// CHALLENGE SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
export type ChallengeDifficulty = 'easy' | 'medium' | 'hard';

export interface Challenge {
    id: string;
    targetFormula: string;             // key to match with molecules array
    difficulty: ChallengeDifficulty;
    emoji: string;
    context: string;                   // real-world hook (ID)
    contextEn: string;                 // real-world hook (EN)
    hints: string[];                   // bertahap (ID), unlock per wrong attempt
    hintsEn: string[];                 // bertahap (EN)
    availableAtoms: string[];          // atom yang bisa dipilih (subset dari palette)
}

export const CHALLENGES: Challenge[] = [
    // ── EASY ──────────────────────────────────────────────────────────────
    {
        id: 'ch-h2o',
        targetFormula: 'H₂O',
        difficulty: 'easy',
        emoji: '💧',
        context: 'Zat ini menutupi 71% permukaan Bumi dan menyusun 60% tubuhmu. Hampir setiap reaksi kimia makhluk hidup terjadi di dalamnya.',
        contextEn: 'This substance covers 71% of Earth\'s surface and makes up 60% of your body. Nearly every chemical reaction in living things happens inside it.',
        hints: [
            'Mulai dari atom paling ringan di alam semesta.',
            'Molekul ini terdiri dari 2 jenis atom saja.',
            'Rumusnya: dua H, satu O.',
        ],
        hintsEn: [
            'Start with the lightest atom in the universe.',
            'This molecule has only 2 types of atoms.',
            'Formula: two H, one O.',
        ],
        availableAtoms: ['H', 'O', 'N', 'C'],
    },
    {
        id: 'ch-co2',
        targetFormula: 'CO₂',
        difficulty: 'easy',
        emoji: '🌿',
        context: 'Tanaman mengambil gas ini dari udara dan mengubahnya menjadi gula menggunakan sinar matahari. Tanpanya, tidak ada fotosintesis.',
        contextEn: 'Plants absorb this gas from the air and convert it into sugar using sunlight. Without it, no photosynthesis.',
        hints: [
            'Gas ini dihasilkan setiap kali kamu bernapas.',
            'Terdiri dari karbon dan oksigen.',
            'Satu karbon diapit dua oksigen.',
        ],
        hintsEn: [
            'This gas is produced every time you breathe out.',
            'Made of carbon and oxygen.',
            'One carbon flanked by two oxygens.',
        ],
        availableAtoms: ['C', 'O', 'H', 'N'],
    },
    {
        id: 'ch-nacl',
        targetFormula: 'NaCl',
        difficulty: 'easy',
        emoji: '🧂',
        context: 'Logam yang meledak di air + gas beracun kuning = bumbu masak yang kamu gunakan setiap hari.',
        contextEn: 'A metal that explodes in water + a toxic yellow gas = the seasoning you use every day.',
        hints: [
            'Ini adalah garam dapur.',
            'Terdiri dari logam alkali dan halogen.',
            'Natrium + Klorin, masing-masing satu atom.',
        ],
        hintsEn: [
            'This is table salt.',
            'Made of an alkali metal and a halogen.',
            'Sodium + Chlorine, one atom each.',
        ],
        availableAtoms: ['Na', 'Cl', 'K', 'H', 'O'],
    },
    {
        id: 'ch-o2',
        targetFormula: 'O₂',
        difficulty: 'easy',
        emoji: '🫁',
        context: 'Setiap sel di tubuhmu membakar molekul ini untuk menghasilkan energi. 21% dari udara yang kamu hirup adalah molekul ini.',
        contextEn: 'Every cell in your body burns this molecule to produce energy. 21% of the air you breathe is this molecule.',
        hints: [
            'Ini adalah gas yang kamu hirup setiap detik.',
            'Hanya terdiri dari satu jenis atom.',
            'Dua atom oksigen berikatan rangkap.',
        ],
        hintsEn: [
            'This is the gas you inhale every second.',
            'Only one type of atom.',
            'Two oxygen atoms in a double bond.',
        ],
        availableAtoms: ['O', 'N', 'H', 'C'],
    },
    {
        id: 'ch-nh3',
        targetFormula: 'NH₃',
        difficulty: 'easy',
        emoji: '🌾',
        context: 'Tanpa molekul ini, separuh populasi manusia tidak akan bisa diberi makan. Ini bahan baku pupuk nitrogen yang menghidupi 4 miliar orang.',
        contextEn: 'Without this molecule, half the world\'s population couldn\'t be fed. It\'s the raw material for nitrogen fertilizer that feeds 4 billion people.',
        hints: [
            'Bau tajamnya bisa kamu cium di pembersih toilet.',
            'Satu atom nitrogen dengan beberapa hidrogen.',
            'Satu N, tiga H — bentuk piramida trigonal.',
        ],
        hintsEn: [
            'You can smell its sharp odor in toilet cleaners.',
            'One nitrogen atom with several hydrogens.',
            'One N, three H — trigonal pyramid shape.',
        ],
        availableAtoms: ['N', 'H', 'O', 'C'],
    },

    // ── MEDIUM ────────────────────────────────────────────────────────────
    {
        id: 'ch-ch4',
        targetFormula: 'CH₄',
        difficulty: 'medium',
        emoji: '🔥',
        context: 'Kompor gas di dapurmu menggunakan ini. Gas alam utamanya adalah molekul ini — juga gas rumah kaca 80× lebih kuat dari CO₂.',
        contextEn: 'Your gas stove uses this. Natural gas is mainly this molecule — also a greenhouse gas 80× more potent than CO₂.',
        hints: [
            'Ini adalah hidrokarbon paling sederhana.',
            'Satu atom karbon di tengah, dikelilingi hidrogen.',
            'Karbon + 4 hidrogen — bentuk tetrahedral sempurna.',
        ],
        hintsEn: [
            'This is the simplest hydrocarbon.',
            'One carbon atom in the center, surrounded by hydrogens.',
            'Carbon + 4 hydrogens — perfect tetrahedral shape.',
        ],
        availableAtoms: ['C', 'H', 'O', 'N', 'S'],
    },
    {
        id: 'ch-hcl',
        targetFormula: 'HCl',
        difficulty: 'medium',
        emoji: '🫀',
        context: 'Lambungmu memproduksi ini setiap hari untuk mencerna makanan. Konsentrasinya cukup tinggi untuk melarutkan silet — tapi lapisan mukosa melindungimu.',
        contextEn: 'Your stomach produces this every day to digest food. It\'s concentrated enough to dissolve a razor blade — but your mucus lining protects you.',
        hints: [
            'Ini adalah asam kuat yang ada di lambung.',
            'Hanya dua atom, dua jenis element.',
            'Satu hidrogen + satu klorin.',
        ],
        hintsEn: [
            'This is a strong acid found in your stomach.',
            'Only two atoms, two types of element.',
            'One hydrogen + one chlorine.',
        ],
        availableAtoms: ['H', 'Cl', 'Na', 'O', 'S'],
    },
    {
        id: 'ch-h2o2',
        targetFormula: 'H₂O₂',
        difficulty: 'medium',
        emoji: '🪲',
        context: 'Kumbang bombardir menembakkan semprotan 100°C menggunakan reaksi dekomposisi molekul ini. Manusia menggunakannya sebagai pemutih dan antiseptik.',
        contextEn: 'The bombardier beetle shoots 100°C spray using this molecule\'s decomposition. Humans use it as bleach and antiseptic.',
        hints: [
            'Mirip air, tapi punya satu atom oksigen ekstra.',
            'Dua atom dari dua jenis: H dan O.',
            'Dua H dan dua O — notasi H₂O₂.',
        ],
        hintsEn: [
            'Like water, but with one extra oxygen atom.',
            'Two atoms of two types: H and O.',
            'Two H and two O — notation H₂O₂.',
        ],
        availableAtoms: ['H', 'O', 'C', 'N'],
    },
    {
        id: 'ch-o3',
        targetFormula: 'O₃',
        difficulty: 'medium',
        emoji: '🌍',
        context: 'Di stratosfer, ia adalah pelindung yang menyerap 99% radiasi UV. Di permukaan bumi, ia adalah polutan berbahaya. Molekul yang sama, tempat berbeda.',
        contextEn: 'In the stratosphere, it\'s a shield absorbing 99% of UV radiation. At ground level, it\'s a dangerous pollutant. Same molecule, different location.',
        hints: [
            'Lebih dari sekadar gas biasa — tiga atom dari elemen yang sama.',
            'Semua atomnya identik, tapi jumlahnya tidak seperti biasanya.',
            'Tiga atom oksigen — bukan dua!',
        ],
        hintsEn: [
            'More than a regular gas — three atoms of the same element.',
            'All atoms are identical, just more than usual.',
            'Three oxygen atoms — not two!',
        ],
        availableAtoms: ['O', 'N', 'H', 'C'],
    },
    {
        id: 'ch-co',
        targetFormula: 'CO',
        difficulty: 'medium',
        emoji: '☠️',
        context: 'Tak berwarna, tak berbau — tapi "silent killer". Ia mengikat hemoglobin 250× lebih kuat dari oksigen, memblokir sel darah merah selamanya.',
        contextEn: 'Colorless, odorless — but "silent killer". It binds hemoglobin 250× stronger than oxygen, permanently blocking red blood cells.',
        hints: [
            'Hanya dua atom, namun berikatan tiga kali (triple bond).',
            'Karbon monoksida — awalan "mono" berarti satu.',
            'Satu C + satu O.',
        ],
        hintsEn: [
            'Only two atoms, but triple-bonded.',
            'Carbon monoxide — "mono" means one.',
            'One C + one O.',
        ],
        availableAtoms: ['C', 'O', 'N', 'H', 'S'],
    },

    // ── HARD ──────────────────────────────────────────────────────────────
    {
        id: 'ch-h2so4',
        targetFormula: 'H₂SO₄',
        difficulty: 'hard',
        emoji: '⚡',
        context: 'Lebih dari 200 juta ton molekul ini diproduksi per tahun. Ada di aki mobilmu, pupuk, detergen. Indikator kekuatan industri suatu negara.',
        contextEn: 'Over 200 million tons of this molecule are produced per year. Found in car batteries, fertilizers, detergents. A nation\'s industrial strength indicator.',
        hints: [
            'Asam paling banyak diproduksi di dunia.',
            'Mengandung belerang (S) sebagai atom pusatnya.',
            'H₂ + S + O₄ — dua hidrogen, satu sulfur, empat oksigen.',
        ],
        hintsEn: [
            'The most produced acid in the world.',
            'Contains sulfur (S) as its central atom.',
            'H₂ + S + O₄ — two hydrogens, one sulfur, four oxygens.',
        ],
        availableAtoms: ['H', 'S', 'O', 'N', 'C', 'Cl'],
    },
    {
        id: 'ch-naoh',
        targetFormula: 'NaOH',
        difficulty: 'hard',
        emoji: '🥨',
        context: 'Pretzel cokelat yang renyah itu dicelup ke dalam larutan ini sebelum dipanggang. Juga bahan utama sabun dan pembersih saluran mampet.',
        contextEn: 'That crispy brown pretzel is dipped in a solution of this before baking. Also the main ingredient in soap and drain cleaners.',
        hints: [
            'Ini adalah soda api — basa kuat.',
            'Mengandung natrium, oksigen, dan hidrogen.',
            'Na + O + H — tiga atom dari tiga elemen.',
        ],
        hintsEn: [
            'This is caustic soda — a strong base.',
            'Contains sodium, oxygen, and hydrogen.',
            'Na + O + H — three atoms from three elements.',
        ],
        availableAtoms: ['Na', 'O', 'H', 'K', 'Cl', 'C'],
    },
    {
        id: 'ch-no2',
        targetFormula: 'NO₂',
        difficulty: 'hard',
        emoji: '🏙️',
        context: 'Warna kemerahan langit di kota-kota berpolusi? Ini pelakunya. Gas cokelat dari knalpot kendaraan yang menyerap cahaya biru.',
        contextEn: 'That reddish haze over polluted cities? This is the culprit. Brown gas from vehicle exhaust that absorbs blue light.',
        hints: [
            'Gas cokelat kemerahan — bukan merah (Fe₂O₃), bukan biru.',
            'Nitrogen sebagai atom pusat dengan dua oksigen.',
            'N + dua O — nitrogen dioksida.',
        ],
        hintsEn: [
            'Brownish-red gas — not red iron oxide, not blue.',
            'Nitrogen as the central atom with two oxygens.',
            'N + two O — nitrogen dioxide.',
        ],
        availableAtoms: ['N', 'O', 'H', 'C', 'S', 'Cl'],
    },
    {
        id: 'ch-caco3',
        targetFormula: 'CaCO₃',
        difficulty: 'hard',
        emoji: '🏛️',
        context: 'Piramida Giza, Pegunungan Alps, cangkang kerang, tablet obat maag — semuanya mengandung molekul ini. Struktur paling melimpah di kerak bumi.',
        contextEn: 'The Pyramids of Giza, the Alps, seashells, antacid tablets — all contain this molecule. One of the most abundant structures in Earth\'s crust.',
        hints: [
            'Kalsium karbonat — nama kimianya sudah memberi petunjuk.',
            'Tiga elemen: Ca, C, dan O.',
            'Ca + C + tiga O — total lima atom.',
        ],
        hintsEn: [
            'Calcium carbonate — the chemical name already gives it away.',
            'Three elements: Ca, C, and O.',
            'Ca + C + three O — five atoms total.',
        ],
        availableAtoms: ['Ca', 'C', 'O', 'Na', 'Mg', 'H'],
    },
    {
        id: 'ch-n2o',
        targetFormula: 'N₂O',
        difficulty: 'hard',
        emoji: '😂',
        context: '"Gas tertawa" — dipakai dokter gigi dan mesin balap. Tapi yang tertawa terakhir adalah iklim: gas ini 300× lebih kuat dari CO₂ sebagai gas rumah kaca.',
        contextEn: '"Laughing gas" — used by dentists and race car engines. But climate gets the last laugh: this gas is 300× more potent than CO₂ as a greenhouse gas.',
        hints: [
            'Dua elemen, keduanya ada di atmosfer.',
            'Nitrogen mendominasi — dua atom nitrogen.',
            'Dua N + satu O — dinitrogen monoksida.',
        ],
        hintsEn: [
            'Two elements, both found in the atmosphere.',
            'Nitrogen dominates — two nitrogen atoms.',
            'Two N + one O — dinitrogen monoxide.',
        ],
        availableAtoms: ['N', 'O', 'H', 'C', 'S'],
    },
];
