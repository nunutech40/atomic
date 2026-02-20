export default {
    app: { title: 'Atomic', subtitle: 'Interactive 3D Atom Explorer' },
    nav: { home: 'Periodic Table', search: 'Search element...', language: 'Language', theme: 'Theme' },
    element: {
        atomicNumber: 'Atomic Number', atomicMass: 'Atomic Mass', protons: 'Protons', neutrons: 'Neutrons',
        electrons: 'Electrons', electronConfig: 'Electron Configuration', shells: 'Electron Shells',
        radius: 'Atomic Radius', phase: 'Phase', category: 'Category', density: 'Density',
        meltingPoint: 'Melting Point', boilingPoint: 'Boiling Point', electronegativity: 'Electronegativity',
        discoveredBy: 'Discovered by', yearDiscovered: 'Year Discovered', description: 'Description',
        oxidationStates: 'Oxidation States', ionizationEnergy: 'Ionization Energy',
        block: 'Block', group: 'Group', period: 'Period',
    },
    phases: { solid: 'Solid', liquid: 'Liquid', gas: 'Gas', unknown: 'Unknown' },
    units: { pm: 'pm', amu: 'amu', kelvin: 'K', kjmol: 'kJ/mol', gcm3: 'g/cm³' },
    actions: { backToTable: '← Back to Table', compare: 'Compare', rotate: 'Drag to rotate', zoom: 'Scroll to zoom' },
    categories: {
        'alkali-metal': 'Alkali Metal', 'alkaline-earth': 'Alkaline Earth Metal', 'transition-metal': 'Transition Metal',
        'post-transition': 'Post-Transition Metal', 'metalloid': 'Metalloid', 'nonmetal': 'Reactive Nonmetal',
        'halogen': 'Halogen', 'noble-gas': 'Noble Gas', 'lanthanide': 'Lanthanide', 'actinide': 'Actinide', 'unknown': 'Unknown',
    },
};
