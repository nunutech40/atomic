export interface Category {
  id: string;
  nameEn: string;
  nameId: string;
  color: string;
  bgColor: string;
}

export const categories: Record<string, Category> = {
  'alkali-metal': { id: 'alkali-metal', nameEn: 'Alkali Metal', nameId: 'Logam Alkali', color: '#ff6b6b', bgColor: 'rgba(255,107,107,0.15)' },
  'alkaline-earth': { id: 'alkaline-earth', nameEn: 'Alkaline Earth Metal', nameId: 'Logam Alkali Tanah', color: '#ffa94d', bgColor: 'rgba(255,169,77,0.15)' },
  'transition-metal': { id: 'transition-metal', nameEn: 'Transition Metal', nameId: 'Logam Transisi', color: '#ffd43b', bgColor: 'rgba(255,212,59,0.15)' },
  'post-transition': { id: 'post-transition', nameEn: 'Post-Transition Metal', nameId: 'Logam Pasca-Transisi', color: '#69db7c', bgColor: 'rgba(105,219,124,0.15)' },
  'metalloid': { id: 'metalloid', nameEn: 'Metalloid', nameId: 'Metaloid', color: '#38d9a9', bgColor: 'rgba(56,217,169,0.15)' },
  'nonmetal': { id: 'nonmetal', nameEn: 'Reactive Nonmetal', nameId: 'Nonlogam Reaktif', color: '#4dabf7', bgColor: 'rgba(77,171,247,0.15)' },
  'halogen': { id: 'halogen', nameEn: 'Halogen', nameId: 'Halogen', color: '#748ffc', bgColor: 'rgba(116,143,252,0.15)' },
  'noble-gas': { id: 'noble-gas', nameEn: 'Noble Gas', nameId: 'Gas Mulia', color: '#cc5de8', bgColor: 'rgba(204,93,232,0.15)' },
  'lanthanide': { id: 'lanthanide', nameEn: 'Lanthanide', nameId: 'Lantanida', color: '#f06595', bgColor: 'rgba(240,101,149,0.15)' },
  'actinide': { id: 'actinide', nameEn: 'Actinide', nameId: 'Aktinida', color: '#e599f7', bgColor: 'rgba(229,153,247,0.15)' },
  'unknown': { id: 'unknown', nameEn: 'Unknown Properties', nameId: 'Belum Diketahui', color: '#868e96', bgColor: 'rgba(134,142,150,0.15)' },
};
