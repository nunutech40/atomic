// ─────────────────────────────────────────────────────────────────────────────
// ELEMENT PHENOMENA — auto-derived from phenomena.ts
// Fenomena yang terkait dengan setiap elemen, diambil dari database phenomena
// ─────────────────────────────────────────────────────────────────────────────

import { phenomena, type Phenomenon, PHENOMENON_CATEGORIES } from './phenomena';

// Re-export types for external use
export type { Phenomenon };
export { PHENOMENON_CATEGORIES };

// Cache: sym → phenomena[]
const phenomenaByElement = new Map<string, Phenomenon[]>();

// Build the map once
for (const ph of phenomena) {
    for (const sym of ph.atoms) {
        // Only include real element symbols (skip e⁻, p⁺, etc.)
        if (/^[A-Z][a-z]?$/.test(sym)) {
            if (!phenomenaByElement.has(sym)) {
                phenomenaByElement.set(sym, []);
            }
            phenomenaByElement.get(sym)!.push(ph);
        }
    }
}

/**
 * Get all phenomena related to an element by symbol.
 * Returns empty array if no phenomena found.
 */
export function getPhenomenaForElement(sym: string): Phenomenon[] {
    return phenomenaByElement.get(sym) ?? [];
}

/**
 * Get phenomena for element, limited to a max count.
 */
export function getTopPhenomenaForElement(sym: string, max = 6): Phenomenon[] {
    return getPhenomenaForElement(sym).slice(0, max);
}
