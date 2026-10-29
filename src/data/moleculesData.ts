export interface AtomPosition {
  element: string;
  symbol: string;
  position: [number, number, number]; // [x, y, z] relative to central atom at [0,0,0]
  color?: string;
  radius?: number;
  label?: string;
}

export interface BondData {
  fromIndex: number; // 0 is central atom, 1..N are outer atoms
  toIndex: number;
  type: 'single' | 'double' | 'triple';
  length?: number;
}

export interface LonePairPosition {
  position: [number, number, number]; // Vector direction & distance for lone pair electron cloud
  rotation?: [number, number, number];
  label?: string;
}

export interface MoleculeData {
  id: string;
  formula: string;
  name: string;
  category: 'sp' | 'sp2' | 'sp3' | 'sp3d' | 'sp3d2' | 'sp3d3';
  centralAtom: string;
  atoms: AtomPosition[];
  bonds: BondData[];
  lonePairs: LonePairPosition[];
  hybridisation: string; // e.g. "sp³d"
  vseprNotation: string; // e.g. "AX₃E₂"
  bondPairsCount: number;
  lonePairsCount: number;
  stericNumber: number;
  electronGeometry: string; // e.g. "Trigonal Bipyramidal"
  molecularShape: string; // e.g. "T-Shaped"
  bondAngle: string; // e.g. "< 90° and < 180°"
  polarity: 'Polar' | 'Non-Polar';
  dipoleMoment: string; // e.g. "μ ≠ 0 (Net dipole towards F)"
  description: string;
  jeeNotes: string[];
}

// Atom color standard (CPK palette)
export const ATOM_COLORS: Record<string, string> = {
  H: '#FFFFFF', // White
  C: '#333333', // Dark Slate
  N: '#3B82F6', // Blue
  O: '#EF4444', // Red
  F: '#10B981', // Green
  Cl: '#22C55E', // Light Green
  Br: '#9333EA', // Purple/Red-Brown
  I: '#6366F1', // Indigo/Dark Violet
  S: '#EAB308', // Yellow
  P: '#F97316', // Orange
  B: '#EC4899', // Pink
  Be: '#94A3B8', // Slate
  Xe: '#06B6D4', // Cyan
  Si: '#64748B', // Slate
  Default: '#A855F7' // Purple
};

export const ATOM_RADII: Record<string, number> = {
  H: 0.3,
  C: 0.5,
  N: 0.48,
  O: 0.45,
  F: 0.42,
  Cl: 0.55,
  Br: 0.6,
  I: 0.65,
  S: 0.58,
  P: 0.58,
  B: 0.5,
  Be: 0.45,
  Xe: 0.65,
  Si: 0.58,
  Default: 0.5
};

// 3D Math Helper to create rotated positions
const r = 1.6; // standard bond distance in 3D scene units

export const MOLECULES_DATABASE: MoleculeData[] = [
  // --- SP HYBRIDISATION (Steric Number 2) ---
  {
    id: 'co2',
    formula: 'CO₂',
    name: 'Carbon Dioxide',
    category: 'sp',
    centralAtom: 'C',
    atoms: [
      { element: 'Carbon', symbol: 'C', position: [0, 0, 0] },
      { element: 'Oxygen', symbol: 'O', position: [-r, 0, 0] },
      { element: 'Oxygen', symbol: 'O', position: [r, 0, 0] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'double' },
      { fromIndex: 0, toIndex: 2, type: 'double' }
    ],
    lonePairs: [],
    hybridisation: 'sp',
    vseprNotation: 'AX₂',
    bondPairsCount: 2,
    lonePairsCount: 0,
    stericNumber: 2,
    electronGeometry: 'Linear',
    molecularShape: 'Linear',
    bondAngle: '180°',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D (Symmetrical bond dipoles cancel)',
    description: 'CO₂ is a linear molecule where carbon forms two double bonds with oxygen atoms. The steric number is 2 with zero lone pairs on the central carbon.',
    jeeNotes: [
      'Carbon undergoes sp hybridisation.',
      'Contains 2 σ (sigma) and 2 π (pi) bonds.',
      'Symmetrical linear structure results in net zero dipole moment despite polar C=O bonds.'
    ]
  },
  {
    id: 'becl2',
    formula: 'BeCl₂',
    name: 'Beryllium Chloride (Monomer)',
    category: 'sp',
    centralAtom: 'Be',
    atoms: [
      { element: 'Beryllium', symbol: 'Be', position: [0, 0, 0] },
      { element: 'Chlorine', symbol: 'Cl', position: [0, 0, -1.8] },
      { element: 'Chlorine', symbol: 'Cl', position: [0, 0, 1.8] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' }
    ],
    lonePairs: [],
    hybridisation: 'sp',
    vseprNotation: 'AX₂',
    bondPairsCount: 2,
    lonePairsCount: 0,
    stericNumber: 2,
    electronGeometry: 'Linear',
    molecularShape: 'Linear',
    bondAngle: '180°',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D',
    description: 'In the vapour state above 1200 K, BeCl₂ exists as a monomer with linear sp hybridised geometry.',
    jeeNotes: [
      'In solid state, BeCl₂ forms a polymeric chain structure via 3-center-2-electron coordinate bonds.',
      'In vapour state at lower temperature, it exists as a chloro-bridged dimer (Be₂Cl₄).',
      'Monomer has an electron-deficient central atom with only 4 valence electrons.'
    ]
  },
  {
    id: 'c2h2',
    formula: 'C₂H₂',
    name: 'Acetylene (Ethyne)',
    category: 'sp',
    centralAtom: 'C',
    atoms: [
      { element: 'Carbon', symbol: 'C', position: [-0.65, 0, 0] },
      { element: 'Carbon', symbol: 'C', position: [0.65, 0, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [-1.8, 0, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [1.8, 0, 0] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'triple' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 1, toIndex: 3, type: 'single' }
    ],
    lonePairs: [],
    hybridisation: 'sp',
    vseprNotation: 'AX₂ (at each C)',
    bondPairsCount: 2,
    lonePairsCount: 0,
    stericNumber: 2,
    electronGeometry: 'Linear',
    molecularShape: 'Linear',
    bondAngle: '180°',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D',
    description: 'Ethyne has two sp-hybridised carbon atoms linked by a triple bond (1 σ and 2 π bonds) with linear arrangement.',
    jeeNotes: [
      'C≡C bond length is 1.20 Å (shortest carbon-carbon bond).',
      '% s-character is 50%, making acetylenic hydrogens acidic in nature.',
      'All 4 atoms lie in a straight line.'
    ]
  },

  // --- SP2 HYBRIDISATION (Steric Number 3) ---
  {
    id: 'bf3',
    formula: 'BF₃',
    name: 'Boron Trifluoride',
    category: 'sp2',
    centralAtom: 'B',
    atoms: [
      { element: 'Boron', symbol: 'B', position: [0, 0, 0] },
      { element: 'Fluorine', symbol: 'F', position: [0, r, 0] },
      { element: 'Fluorine', symbol: 'F', position: [r * Math.cos(-Math.PI / 6), -r * Math.sin(Math.PI / 6), 0] },
      { element: 'Fluorine', symbol: 'F', position: [-r * Math.cos(-Math.PI / 6), -r * Math.sin(Math.PI / 6), 0] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' }
    ],
    lonePairs: [],
    hybridisation: 'sp²',
    vseprNotation: 'AX₃',
    bondPairsCount: 3,
    lonePairsCount: 0,
    stericNumber: 3,
    electronGeometry: 'Trigonal Planar',
    molecularShape: 'Trigonal Planar',
    bondAngle: '120°',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D',
    description: 'BF₃ is an electron-deficient Lewis acid with trigonal planar symmetry where three B-F bond dipoles cancel out perfectly.',
    jeeNotes: [
      'Boron has 6 electrons in valence shell (incomplete octet, electron deficient).',
      'Exhibits pπ-pπ back bonding between vacant 2p orbital of B and filled 2p orbital of F.',
      'Acts as a strong Lewis Acid.'
    ]
  },
  {
    id: 'so2',
    formula: 'SO₂',
    name: 'Sulfur Dioxide',
    category: 'sp2',
    centralAtom: 'S',
    atoms: [
      { element: 'Sulfur', symbol: 'S', position: [0, 0.2, 0] },
      { element: 'Oxygen', symbol: 'O', position: [-1.4, -0.8, 0] },
      { element: 'Oxygen', symbol: 'O', position: [1.4, -0.8, 0] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'double' },
      { fromIndex: 0, toIndex: 2, type: 'double' }
    ],
    lonePairs: [
      { position: [0, 1.3, 0] }
    ],
    hybridisation: 'sp²',
    vseprNotation: 'AX₂E',
    bondPairsCount: 2,
    lonePairsCount: 1,
    stericNumber: 3,
    electronGeometry: 'Trigonal Planar',
    molecularShape: 'Bent / V-Shaped',
    bondAngle: '119.5°',
    polarity: 'Polar',
    dipoleMoment: 'μ = 1.63 D',
    description: 'SO₂ has a bent shape due to repulsion between the lone pair on sulfur and the two S=O double bonds.',
    jeeNotes: [
      'Steric number is 3 (2 double bonds treated as 2 bonding regions + 1 lone pair).',
      'Bond angle is slightly reduced from ideal 120° to ~119.5° due to LP-BP repulsion.',
      'Sulfur uses dπ-pπ bonding in resonance structures.'
    ]
  },
  {
    id: 'so3',
    formula: 'SO₃',
    name: 'Sulfur Trioxide',
    category: 'sp2',
    centralAtom: 'S',
    atoms: [
      { element: 'Sulfur', symbol: 'S', position: [0, 0, 0] },
      { element: 'Oxygen', symbol: 'O', position: [0, r, 0] },
      { element: 'Oxygen', symbol: 'O', position: [r * 0.866, -r * 0.5, 0] },
      { element: 'Oxygen', symbol: 'O', position: [-r * 0.866, -r * 0.5, 0] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'double' },
      { fromIndex: 0, toIndex: 2, type: 'double' },
      { fromIndex: 0, toIndex: 3, type: 'double' }
    ],
    lonePairs: [],
    hybridisation: 'sp²',
    vseprNotation: 'AX₃',
    bondPairsCount: 3,
    lonePairsCount: 0,
    stericNumber: 3,
    electronGeometry: 'Trigonal Planar',
    molecularShape: 'Trigonal Planar',
    bondAngle: '120°',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D',
    description: 'SO₃ in gas phase is a planar molecule with three identical S=O bonds arising from resonance structures involving 1 pπ-pπ and 2 dπ-pπ bonds.',
    jeeNotes: [
      'S-O bond order is 1.33 or 2 depending on resonance contribution.',
      'Symmetrical trigonal planar geometry results in zero dipole moment.',
      'In solid state, it forms cyclic trimer (γ-SO₃) or helical polymers.'
    ]
  },

  // --- SP3 HYBRIDISATION (Steric Number 4) ---
  {
    id: 'ch4',
    formula: 'CH₄',
    name: 'Methane',
    category: 'sp3',
    centralAtom: 'C',
    atoms: [
      { element: 'Carbon', symbol: 'C', position: [0, 0, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [0, 1.35, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [1.27, -0.45, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [-0.63, -0.45, 1.1] },
      { element: 'Hydrogen', symbol: 'H', position: [-0.63, -0.45, -1.1] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' },
      { fromIndex: 0, toIndex: 4, type: 'single' }
    ],
    lonePairs: [],
    hybridisation: 'sp³',
    vseprNotation: 'AX₄',
    bondPairsCount: 4,
    lonePairsCount: 0,
    stericNumber: 4,
    electronGeometry: 'Tetrahedral',
    molecularShape: 'Tetrahedral',
    bondAngle: '109.5°',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D',
    description: 'The archetype tetrahedral molecule. Carbon forms four equivalent C-H σ bonds pointed towards the four corners of a regular tetrahedron.',
    jeeNotes: [
      'Perfect tetrahedral symmetry with exact 109°28\' (109.5°) bond angles.',
      'All four C-H bond lengths (1.09 Å) and energies are completely identical due to sp³ hybridisation.',
      'Zero net dipole moment.'
    ]
  },
  {
    id: 'nh3',
    formula: 'NH₃',
    name: 'Ammonia',
    category: 'sp3',
    centralAtom: 'N',
    atoms: [
      { element: 'Nitrogen', symbol: 'N', position: [0, 0.25, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [1.1, -0.35, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [-0.55, -0.35, 0.95] },
      { element: 'Hydrogen', symbol: 'H', position: [-0.55, -0.35, -0.95] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' }
    ],
    lonePairs: [
      { position: [0, 1.45, 0] }
    ],
    hybridisation: 'sp³',
    vseprNotation: 'AX₃E',
    bondPairsCount: 3,
    lonePairsCount: 1,
    stericNumber: 4,
    electronGeometry: 'Tetrahedral',
    molecularShape: 'Trigonal Pyramidal',
    bondAngle: '107°',
    polarity: 'Polar',
    dipoleMoment: 'μ = 1.47 D (Orbital dipole and N-H bond dipoles reinforce)',
    description: 'Ammonia has a trigonal pyramidal shape. The lone pair on nitrogen exerts extra repulsive force, compressing the H-N-H bond angles to 107°.',
    jeeNotes: [
      'Lone pair - Bond pair (LP-BP) repulsion > Bond pair - Bond pair (BP-BP) repulsion.',
      'Net dipole moment of NH₃ (1.47 D) is higher than NF₃ (0.23 D) because in NH₃ the lone pair dipole and N-H bond dipoles add up in the same direction.',
      'Exhibits fast pyramidal inversion at room temperature.'
    ]
  },
  {
    id: 'h2o',
    formula: 'H₂O',
    name: 'Water',
    category: 'sp3',
    centralAtom: 'O',
    atoms: [
      { element: 'Oxygen', symbol: 'O', position: [0, 0.1, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [-1.1, -0.6, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [1.1, -0.6, 0] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' }
    ],
    lonePairs: [
      { position: [-0.65, 1.15, 0.75] },
      { position: [0.65, 1.15, -0.75] }
    ],
    hybridisation: 'sp³',
    vseprNotation: 'AX₂E₂',
    bondPairsCount: 2,
    lonePairsCount: 2,
    stericNumber: 4,
    electronGeometry: 'Tetrahedral',
    molecularShape: 'Bent / V-Shaped',
    bondAngle: '104.5°',
    polarity: 'Polar',
    dipoleMoment: 'μ = 1.85 D',
    description: 'Water has two lone pairs on oxygen, causing strong LP-LP and LP-BP repulsions that decrease the H-O-H angle to 104.5°.',
    jeeNotes: [
      'VSEPR Repulsion Order: LP-LP > LP-BP > BP-BP.',
      'Two lone pairs reduce tetrahedral angle from 109.5° down to 104.5° (approx -2.5° per lone pair).',
      'High dipole moment enables hydrogen bonding and exceptional dielectric constant.'
    ]
  },
  {
    id: 'nh4_plus',
    formula: 'NH₄⁺',
    name: 'Ammonium Ion',
    category: 'sp3',
    centralAtom: 'N',
    atoms: [
      { element: 'Nitrogen', symbol: 'N', position: [0, 0, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [0, 1.35, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [1.27, -0.45, 0] },
      { element: 'Hydrogen', symbol: 'H', position: [-0.63, -0.45, 1.1] },
      { element: 'Hydrogen', symbol: 'H', position: [-0.63, -0.45, -1.1] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' },
      { fromIndex: 0, toIndex: 4, type: 'single' }
    ],
    lonePairs: [],
    hybridisation: 'sp³',
    vseprNotation: 'AX₄',
    bondPairsCount: 4,
    lonePairsCount: 0,
    stericNumber: 4,
    electronGeometry: 'Tetrahedral',
    molecularShape: 'Tetrahedral',
    bondAngle: '109.5°',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D (Isoelectronic with CH₄)',
    description: 'Formed by protonation of NH₃ via coordinate bond. All four N-H bonds are identical in length and strength due to resonance/hybridisation.',
    jeeNotes: [
      'Isoelectronic and isostructural with Methane (CH₄).',
      'Contains 3 covalent bonds and 1 coordinate bond, but once formed all 4 bonds become indistinguishable.',
      'Symmetrical tetrahedral geometry restores ideal 109.5° angle.'
    ]
  },

  // --- SP3D HYBRIDISATION (Steric Number 5) ---
  {
    id: 'pcl5',
    formula: 'PCl₅',
    name: 'Phosphorus Pentachloride',
    category: 'sp3d',
    centralAtom: 'P',
    atoms: [
      { element: 'Phosphorus', symbol: 'P', position: [0, 0, 0] },
      { element: 'Chlorine (Eq)', symbol: 'Cl', position: [0, 1.5, 0] },
      { element: 'Chlorine (Eq)', symbol: 'Cl', position: [1.3, -0.75, 0] },
      { element: 'Chlorine (Eq)', symbol: 'Cl', position: [-1.3, -0.75, 0] },
      { element: 'Chlorine (Ax)', symbol: 'Cl', position: [0, 0, 1.9] },
      { element: 'Chlorine (Ax)', symbol: 'Cl', position: [0, 0, -1.9] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' },
      { fromIndex: 0, toIndex: 4, type: 'single' },
      { fromIndex: 0, toIndex: 5, type: 'single' }
    ],
    lonePairs: [],
    hybridisation: 'sp³d',
    vseprNotation: 'AX₅',
    bondPairsCount: 5,
    lonePairsCount: 0,
    stericNumber: 5,
    electronGeometry: 'Trigonal Bipyramidal',
    molecularShape: 'Trigonal Bipyramidal',
    bondAngle: '90° (axial-eq) & 120° (eq-eq)',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D',
    description: 'PCl₅ has 3 equatorial bonds in a plane at 120° and 2 axial bonds perpendicular at 90° to the equatorial plane.',
    jeeNotes: [
      'CRITICAL JEE FACT: Axial P-Cl bonds (2.14 Å) are LONGER and WEAKER than equatorial P-Cl bonds (2.02 Å) due to greater repulsion from 3 equatorial bonds at 90°.',
      'In solid state, PCl₅ exists as ionic [PCl₄]⁺ [PCl₆]⁻ (Tetrahedral cation & Octahedral anion).',
      'Uses phosphorus d_z² orbital in sp³d hybridisation (sp² + pd).'
    ]
  },
  {
    id: 'sf4',
    formula: 'SF₄',
    name: 'Sulfur Tetrafluoride',
    category: 'sp3d',
    centralAtom: 'S',
    atoms: [
      { element: 'Sulfur', symbol: 'S', position: [0, 0, 0] },
      { element: 'Fluorine (Eq)', symbol: 'F', position: [1.4, 0.4, 0] },
      { element: 'Fluorine (Eq)', symbol: 'F', position: [1.4, -0.4, 0] },
      { element: 'Fluorine (Ax)', symbol: 'F', position: [-0.3, 0.1, 1.7] },
      { element: 'Fluorine (Ax)', symbol: 'F', position: [-0.3, 0.1, -1.7] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' },
      { fromIndex: 0, toIndex: 4, type: 'single' }
    ],
    lonePairs: [
      { position: [-1.4, 0, 0] }
    ],
    hybridisation: 'sp³d',
    vseprNotation: 'AX₄E',
    bondPairsCount: 4,
    lonePairsCount: 1,
    stericNumber: 5,
    electronGeometry: 'Trigonal Bipyramidal',
    molecularShape: 'Seesaw',
    bondAngle: '173° (axial) & 102° (equatorial)',
    polarity: 'Polar',
    dipoleMoment: 'μ = 0.63 D',
    description: 'According to Bent\'s Rule, the lone pair occupies an equatorial position to minimize 90° repulsions, creating a Seesaw molecular shape.',
    jeeNotes: [
      'BENT\'S RULE: Lone pairs and less electronegative substituents prefer equatorial positions in TBP geometry to minimize repulsion.',
      'Equatorial F-S-F angle is compressed to 102° (from 120°). Axial F-S-F angle is bent to 173° (from 180°).',
      'SF₄ acts as a fluorinating agent in organic chemistry.'
    ]
  },
  {
    id: 'clf3',
    formula: 'ClF₃',
    name: 'Chlorine Trifluoride',
    category: 'sp3d',
    centralAtom: 'Cl',
    atoms: [
      { element: 'Chlorine', symbol: 'Cl', position: [0, 0, 0] },
      { element: 'Fluorine (Eq)', symbol: 'F', position: [1.5, 0, 0] },
      { element: 'Fluorine (Ax)', symbol: 'F', position: [-0.2, 0, 1.65] },
      { element: 'Fluorine (Ax)', symbol: 'F', position: [-0.2, 0, -1.65] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' }
    ],
    lonePairs: [
      { position: [-1.1, 1.1, 0] },
      { position: [-1.1, -1.1, 0] }
    ],
    hybridisation: 'sp³d',
    vseprNotation: 'AX₃E₂',
    bondPairsCount: 3,
    lonePairsCount: 2,
    stericNumber: 5,
    electronGeometry: 'Trigonal Bipyramidal',
    molecularShape: 'T-Shaped',
    bondAngle: '87.5° (axial-eq)',
    polarity: 'Polar',
    dipoleMoment: 'μ = 0.55 D',
    description: 'ClF₃ features two lone pairs occupying equatorial positions at ~120° apart, leaving three fluorine atoms in a slightly bent T-shape.',
    jeeNotes: [
      'Both lone pairs occupy equatorial positions (Bent\'s rule).',
      'Axial F-Cl-F bond angle is bent to 175° and Cl-F(eq) angle is 87.5° due to LP-LP and LP-BP repulsions.',
      'Extremely reactive interhalogen compound used as rocket propellant component.'
    ]
  },
  {
    id: 'xef2',
    formula: 'XeF₂',
    name: 'Xenon Difluoride',
    category: 'sp3d',
    centralAtom: 'Xe',
    atoms: [
      { element: 'Xenon', symbol: 'Xe', position: [0, 0, 0] },
      { element: 'Fluorine', symbol: 'F', position: [0, 0, 1.8] },
      { element: 'Fluorine', symbol: 'F', position: [0, 0, -1.8] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' }
    ],
    lonePairs: [
      { position: [1.3, 0, 0] },
      { position: [-0.65, 1.12, 0] },
      { position: [-0.65, -1.12, 0] }
    ],
    hybridisation: 'sp³d',
    vseprNotation: 'AX₂E₃',
    bondPairsCount: 2,
    lonePairsCount: 3,
    stericNumber: 5,
    electronGeometry: 'Trigonal Bipyramidal',
    molecularShape: 'Linear',
    bondAngle: '180°',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D',
    description: 'XeF₂ has three lone pairs arranged symmetrically in the equatorial plane at 120° to each other, resulting in a strictly linear F-Xe-F arrangement.',
    jeeNotes: [
      'All 3 lone pairs sit in the equatorial plane (120° apart).',
      'The 2 F atoms occupy axial positions along a straight line (180°).',
      'Non-polar molecule (μ = 0) despite polar Xe-F bonds due to linear symmetry.'
    ]
  },

  // --- SP3D2 HYBRIDISATION (Steric Number 6) ---
  {
    id: 'sf6',
    formula: 'SF₆',
    name: 'Sulfur Hexafluoride',
    category: 'sp3d2',
    centralAtom: 'S',
    atoms: [
      { element: 'Sulfur', symbol: 'S', position: [0, 0, 0] },
      { element: 'Fluorine', symbol: 'F', position: [1.6, 0, 0] },
      { element: 'Fluorine', symbol: 'F', position: [-1.6, 0, 0] },
      { element: 'Fluorine', symbol: 'F', position: [0, 1.6, 0] },
      { element: 'Fluorine', symbol: 'F', position: [0, -1.6, 0] },
      { element: 'Fluorine', symbol: 'F', position: [0, 0, 1.6] },
      { element: 'Fluorine', symbol: 'F', position: [0, 0, -1.6] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' },
      { fromIndex: 0, toIndex: 4, type: 'single' },
      { fromIndex: 0, toIndex: 5, type: 'single' },
      { fromIndex: 0, toIndex: 6, type: 'single' }
    ],
    lonePairs: [],
    hybridisation: 'sp³d²',
    vseprNotation: 'AX₆',
    bondPairsCount: 6,
    lonePairsCount: 0,
    stericNumber: 6,
    electronGeometry: 'Octahedral',
    molecularShape: 'Octahedral',
    bondAngle: '90° & 180°',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D',
    description: 'SF₆ is a highly stable octahedral molecule with six equivalent S-F bonds at 90° to adjacent neighbors.',
    jeeNotes: [
      'Uses sulfur d_x²-y² and d_z² orbitals in sp³d² hybridisation.',
      'Extremely inert gas due to steric hindrance protecting sulfur atom from nucleophilic attack.',
      'All 6 S-F bond lengths and bond energies are identical.'
    ]
  },
  {
    id: 'xef4',
    formula: 'XeF₄',
    name: 'Xenon Tetrafluoride',
    category: 'sp3d2',
    centralAtom: 'Xe',
    atoms: [
      { element: 'Xenon', symbol: 'Xe', position: [0, 0, 0] },
      { element: 'Fluorine', symbol: 'F', position: [1.5, 0, 0] },
      { element: 'Fluorine', symbol: 'F', position: [-1.5, 0, 0] },
      { element: 'Fluorine', symbol: 'F', position: [0, 1.5, 0] },
      { element: 'Fluorine', symbol: 'F', position: [0, -1.5, 0] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' },
      { fromIndex: 0, toIndex: 4, type: 'single' }
    ],
    lonePairs: [
      { position: [0, 0, 1.45] },
      { position: [0, 0, -1.45] }
    ],
    hybridisation: 'sp³d²',
    vseprNotation: 'AX₄E₂',
    bondPairsCount: 4,
    lonePairsCount: 2,
    stericNumber: 6,
    electronGeometry: 'Octahedral',
    molecularShape: 'Square Planar',
    bondAngle: '90° & 180°',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D',
    description: 'XeF₄ has two axial lone pairs located 180° apart, leaving four fluorine atoms in a perfectly square planar geometry.',
    jeeNotes: [
      'Lone pairs occupy axial positions above and below the square plane to minimize 90° LP-LP repulsion.',
      'Symmetrical square planar shape yields zero dipole moment.',
      'First noble gas binary compound discovered.'
    ]
  },
  {
    id: 'xeof4',
    formula: 'XeOF₄',
    name: 'Xenon Oxytetrafluoride',
    category: 'sp3d2',
    centralAtom: 'Xe',
    atoms: [
      { element: 'Xenon', symbol: 'Xe', position: [0, -0.15, 0] },
      { element: 'Oxygen', symbol: 'O', position: [0, 1.45, 0] },
      { element: 'Fluorine', symbol: 'F', position: [1.4, -0.3, 0] },
      { element: 'Fluorine', symbol: 'F', position: [-1.4, -0.3, 0] },
      { element: 'Fluorine', symbol: 'F', position: [0, -0.3, 1.4] },
      { element: 'Fluorine', symbol: 'F', position: [0, -0.3, -1.4] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'double' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' },
      { fromIndex: 0, toIndex: 4, type: 'single' },
      { fromIndex: 0, toIndex: 5, type: 'single' }
    ],
    lonePairs: [
      { position: [0, -1.5, 0] }
    ],
    hybridisation: 'sp³d²',
    vseprNotation: 'AX₅E',
    bondPairsCount: 5,
    lonePairsCount: 1,
    stericNumber: 6,
    electronGeometry: 'Octahedral',
    molecularShape: 'Square Pyramidal',
    bondAngle: '< 90° (F-Xe-F ~ 89°)',
    polarity: 'Polar',
    dipoleMoment: 'μ ≠ 0 D',
    description: 'XeOF₄ features a square pyramidal geometry where oxygen sits at one apex with a double bond, opposite to a lone pair.',
    jeeNotes: [
      'The Xe=O double bond and lone pair occupy opposite axial positions.',
      'Xe=O double bond repulsion pushes the 4 fluorine atoms slightly below the plane (F-Xe-O angle ~ 91°, F-Xe-F angle ~ 89°).',
      'Steric number is 6 (5 σ bonding directions + 1 lone pair).'
    ]
  },

  // --- SP3D3 HYBRIDISATION (Steric Number 7) ---
  {
    id: 'if7',
    formula: 'IF₇',
    name: 'Iodine Heptafluoride',
    category: 'sp3d3',
    centralAtom: 'I',
    atoms: [
      { element: 'Iodine', symbol: 'I', position: [0, 0, 0] },
      { element: 'Fluorine (Eq)', symbol: 'F', position: [1.55 * Math.cos(0), 1.55 * Math.sin(0), 0] },
      { element: 'Fluorine (Eq)', symbol: 'F', position: [1.55 * Math.cos(2*Math.PI/5), 1.55 * Math.sin(2*Math.PI/5), 0] },
      { element: 'Fluorine (Eq)', symbol: 'F', position: [1.55 * Math.cos(4*Math.PI/5), 1.55 * Math.sin(4*Math.PI/5), 0] },
      { element: 'Fluorine (Eq)', symbol: 'F', position: [1.55 * Math.cos(6*Math.PI/5), 1.55 * Math.sin(6*Math.PI/5), 0] },
      { element: 'Fluorine (Eq)', symbol: 'F', position: [1.55 * Math.cos(8*Math.PI/5), 1.55 * Math.sin(8*Math.PI/5), 0] },
      { element: 'Fluorine (Ax)', symbol: 'F', position: [0, 0, 1.8] },
      { element: 'Fluorine (Ax)', symbol: 'F', position: [0, 0, -1.8] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' },
      { fromIndex: 0, toIndex: 4, type: 'single' },
      { fromIndex: 0, toIndex: 5, type: 'single' },
      { fromIndex: 0, toIndex: 6, type: 'single' },
      { fromIndex: 0, toIndex: 7, type: 'single' }
    ],
    lonePairs: [],
    hybridisation: 'sp³d³',
    vseprNotation: 'AX₇',
    bondPairsCount: 7,
    lonePairsCount: 0,
    stericNumber: 7,
    electronGeometry: 'Pentagonal Bipyramidal',
    molecularShape: 'Pentagonal Bipyramidal',
    bondAngle: '72° (equatorial) & 90° (axial-eq)',
    polarity: 'Non-Polar',
    dipoleMoment: 'μ = 0 D',
    description: 'IF₇ is the only pentagonal bipyramidal interhalogen with 5 equatorial fluorines at 72° apart and 2 axial fluorines at 90°.',
    jeeNotes: [
      'In IF₇, axial bonds (1.78 Å) are SHORTER than equatorial bonds (1.86 Å) — opposite to PCl₅!',
      'Uses d_x²-y², d_z², and d_xy orbitals in sp³d³ hybridisation.',
      'Highly sterically crowded pentagonal plane.'
    ]
  },
  {
    id: 'xef6',
    formula: 'XeF₆',
    name: 'Xenon Hexafluoride',
    category: 'sp3d3',
    centralAtom: 'Xe',
    atoms: [
      { element: 'Xenon', symbol: 'Xe', position: [0, 0, 0] },
      { element: 'Fluorine', symbol: 'F', position: [1.5, 0, 0.4] },
      { element: 'Fluorine', symbol: 'F', position: [-1.5, 0, 0.4] },
      { element: 'Fluorine', symbol: 'F', position: [0, 1.5, 0.4] },
      { element: 'Fluorine', symbol: 'F', position: [0, -1.5, 0.4] },
      { element: 'Fluorine', symbol: 'F', position: [0, 0, 1.7] },
      { element: 'Fluorine', symbol: 'F', position: [0, 0, -1.5] }
    ],
    bonds: [
      { fromIndex: 0, toIndex: 1, type: 'single' },
      { fromIndex: 0, toIndex: 2, type: 'single' },
      { fromIndex: 0, toIndex: 3, type: 'single' },
      { fromIndex: 0, toIndex: 4, type: 'single' },
      { fromIndex: 0, toIndex: 5, type: 'single' },
      { fromIndex: 0, toIndex: 6, type: 'single' }
    ],
    lonePairs: [
      { position: [0.8, 0.8, -1.2] }
    ],
    hybridisation: 'sp³d³',
    vseprNotation: 'AX₆E',
    bondPairsCount: 6,
    lonePairsCount: 1,
    stericNumber: 7,
    electronGeometry: 'Pentagonal Bipyramidal',
    molecularShape: 'Distorted Octahedral',
    bondAngle: '< 90°',
    polarity: 'Polar',
    dipoleMoment: 'μ ≠ 0 D',
    description: 'XeF₆ has 6 fluorine atoms and 1 fluxional lone pair that protrudes through one face of the octahedron, distorting its ideal symmetry.',
    jeeNotes: [
      'CLASSIC JEE QUESTION: XeF₆ has Distorted Octahedral or Capped Octahedral molecular shape.',
      'The lone pair is stereochemically active and fluxional in gas phase.',
      'In solid state, XeF₆ forms tetramers and hexamers containing [XeF₅]⁺ units.'
    ]
  }
];

// Fallback algorithm that constructs dynamic molecular structures for custom chemical formulas / VSEPR inputs
export function generateDynamicMolecule(input: string): MoleculeData {
  const cleanInput = input.trim();
  const searchId = cleanInput.toLowerCase().replace(/[^a-z0-9]/g, '');

  const matchPreset = MOLECULES_DATABASE.find(m => 
    m.id === searchId || 
    m.formula.toLowerCase().replace(/[^a-z0-9]/g, '') === searchId ||
    m.name.toLowerCase() === cleanInput.toLowerCase() ||
    m.vseprNotation.toLowerCase() === cleanInput.toLowerCase()
  );

  if (matchPreset) return matchPreset;

  // Custom analysis rule engine for standard inorganic formulas or VSEPR notation
  let bp = 3;
  let lp = 1;
  let central = 'N';
  let outer = 'H';

  // Check if VSEPR input like AX3E1 or AX2E2
  const vseprMatch = cleanInput.match(/A?X_?(\d)E_?(\d)/i);
  if (vseprMatch) {
    bp = parseInt(vseprMatch[1], 10);
    lp = parseInt(vseprMatch[2], 10);
  } else if (/^H2O$/i.test(cleanInput)) {
    return MOLECULES_DATABASE.find(m => m.id === 'h2o')!;
  } else if (/^NH3$/i.test(cleanInput)) {
    return MOLECULES_DATABASE.find(m => m.id === 'nh3')!;
  } else if (/^CH4$/i.test(cleanInput)) {
    return MOLECULES_DATABASE.find(m => m.id === 'ch4')!;
  } else if (/^SF6$/i.test(cleanInput)) {
    return MOLECULES_DATABASE.find(m => m.id === 'sf6')!;
  } else if (/^PCl5$/i.test(cleanInput)) {
    return MOLECULES_DATABASE.find(m => m.id === 'pcl5')!;
  } else {
    // Basic heuristic: parse formula like AB3, AB2E, etc.
    const parts = cleanInput.match(/([A-Z][a-z]?)(\d*)/g);
    if (parts && parts.length >= 2) {
      central = parts[0].replace(/\d/g, '');
      outer = parts[1].replace(/\d/g, '');
      const numOuter = parseInt(parts[1].match(/\d+/)?.[0] || '1', 10);
      bp = numOuter;
      // Estimate lone pairs based on common valence
      if (central === 'O' || central === 'S' || central === 'Se') lp = Math.max(0, 3 - bp);
      else if (central === 'N' || central === 'P' || central === 'As') lp = Math.max(0, 4 - bp);
      else if (central === 'Xe' || central === 'Kr') lp = Math.max(0, 4 - Math.floor(bp / 2));
      else if (central === 'Cl' || central === 'Br' || central === 'I') lp = Math.max(0, 3 - Math.floor(bp / 2));
      else lp = 0;
    }
  }

  const sn = bp + lp;
  let hyb = 'sp³';
  let category: MoleculeData['category'] = 'sp3';
  let elecGeom = 'Tetrahedral';
  let molShape = 'Trigonal Pyramidal';
  let angle = '107°';

  if (sn === 2) {
    hyb = 'sp'; category = 'sp'; elecGeom = 'Linear'; molShape = 'Linear'; angle = '180°';
  } else if (sn === 3) {
    hyb = 'sp²'; category = 'sp2'; elecGeom = 'Trigonal Planar';
    molShape = lp === 1 ? 'Bent / V-Shaped' : 'Trigonal Planar';
    angle = lp === 1 ? '118°' : '120°';
  } else if (sn === 4) {
    hyb = 'sp³'; category = 'sp3'; elecGeom = 'Tetrahedral';
    if (lp === 0) molShape = 'Tetrahedral', angle = '109.5°';
    else if (lp === 1) molShape = 'Trigonal Pyramidal', angle = '107°';
    else molShape = 'Bent / V-Shaped', angle = '104.5°';
  } else if (sn === 5) {
    hyb = 'sp³d'; category = 'sp3d'; elecGeom = 'Trigonal Bipyramidal';
    if (lp === 0) molShape = 'Trigonal Bipyramidal', angle = '90° / 120°';
    else if (lp === 1) molShape = 'Seesaw', angle = '102° / 173°';
    else if (lp === 2) molShape = 'T-Shaped', angle = '87.5°';
    else molShape = 'Linear', angle = '180°';
  } else if (sn === 6) {
    hyb = 'sp³d²'; category = 'sp3d2'; elecGeom = 'Octahedral';
    if (lp === 0) molShape = 'Octahedral', angle = '90°';
    else if (lp === 1) molShape = 'Square Pyramidal', angle = '< 90°';
    else molShape = 'Square Planar', angle = '90°';
  } else {
    hyb = 'sp³d³'; category = 'sp3d3'; elecGeom = 'Pentagonal Bipyramidal';
    if (lp === 0) molShape = 'Pentagonal Bipyramidal', angle = '72° / 90°';
    else molShape = 'Distorted Octahedral', angle = '< 90°';
  }

  // Generate 3D atom coords based on Steric Number & Lone Pairs
  const atoms: AtomPosition[] = [
    { element: central, symbol: central, position: [0, 0, 0] }
  ];
  const bonds: BondData[] = [];
  const lonePairs: LonePairPosition[] = [];

  // Generate outer atom positions and lone pair vectors geometrically
  if (sn === 2) {
    atoms.push({ element: outer, symbol: outer, position: [1.6, 0, 0] });
    atoms.push({ element: outer, symbol: outer, position: [-1.6, 0, 0] });
    bonds.push({ fromIndex: 0, toIndex: 1, type: 'single' });
    bonds.push({ fromIndex: 0, toIndex: 2, type: 'single' });
  } else if (sn === 3) {
    const coords: [number, number, number][] = [
      [0, 1.6, 0],
      [1.6 * Math.cos(-Math.PI / 6), 1.6 * Math.sin(-Math.PI / 6), 0],
      [-1.6 * Math.cos(-Math.PI / 6), 1.6 * Math.sin(-Math.PI / 6), 0]
    ];
    for (let i = 0; i < bp; i++) {
      atoms.push({ element: outer, symbol: outer, position: coords[i] });
      bonds.push({ fromIndex: 0, toIndex: i + 1, type: 'single' });
    }
    for (let j = bp; j < 3; j++) {
      lonePairs.push({ position: [coords[j][0] * 0.8, coords[j][1] * 0.8, coords[j][2] * 0.8] });
    }
  } else if (sn === 4) {
    const coords: [number, number, number][] = [
      [0, 1.45, 0],
      [1.3, -0.45, 0],
      [-0.65, -0.45, 1.15],
      [-0.65, -0.45, -1.15]
    ];
    if (lp === 1) {
      // Lone pair at apex top [0, 1.45, 0]
      lonePairs.push({ position: [0, 1.45, 0] });
      for (let i = 1; i < 4; i++) {
        atoms.push({ element: outer, symbol: outer, position: coords[i] });
        bonds.push({ fromIndex: 0, toIndex: atoms.length - 1, type: 'single' });
      }
    } else if (lp === 2) {
      lonePairs.push({ position: coords[0] });
      lonePairs.push({ position: coords[1] });
      atoms.push({ element: outer, symbol: outer, position: coords[2] });
      atoms.push({ element: outer, symbol: outer, position: coords[3] });
      bonds.push({ fromIndex: 0, toIndex: 1, type: 'single' });
      bonds.push({ fromIndex: 0, toIndex: 2, type: 'single' });
    } else {
      for (let i = 0; i < 4; i++) {
        atoms.push({ element: outer, symbol: outer, position: coords[i] });
        bonds.push({ fromIndex: 0, toIndex: i + 1, type: 'single' });
      }
    }
  } else {
    // General arrangement for sn 5, 6, 7
    const defaultCoords: [number, number, number][] = [
      [1.6, 0, 0], [-1.6, 0, 0], [0, 1.6, 0], [0, -1.6, 0], [0, 0, 1.6], [0, 0, -1.6]
    ];
    for (let i = 0; i < bp; i++) {
      atoms.push({ element: outer, symbol: outer, position: defaultCoords[i % defaultCoords.length] });
      bonds.push({ fromIndex: 0, toIndex: i + 1, type: 'single' });
    }
    for (let j = 0; j < lp; j++) {
      const p = defaultCoords[(bp + j) % defaultCoords.length];
      lonePairs.push({ position: [p[0] * 0.8, p[1] * 0.8, p[2] * 0.8] });
    }
  }

  return {
    id: cleanInput.toLowerCase(),
    formula: cleanInput,
    name: `${cleanInput} Molecule`,
    category,
    centralAtom: central,
    atoms,
    bonds,
    lonePairs,
    hybridisation: hyb,
    vseprNotation: `AX${bp}${lp > 0 ? `E${lp}` : ''}`,
    bondPairsCount: bp,
    lonePairsCount: lp,
    stericNumber: sn,
    electronGeometry: elecGeom,
    molecularShape: molShape,
    bondAngle: angle,
    polarity: lp > 0 || bp === 1 ? 'Polar' : 'Non-Polar',
    dipoleMoment: lp > 0 ? 'μ ≠ 0 D (Net dipole present)' : 'μ = 0 D',
    description: `Analyzed molecular structure for ${cleanInput} based on VSEPR theory and valence shell electron pair interactions.`,
    jeeNotes: [
      `Steric Number = Bond Pairs (${bp}) + Lone Pairs (${lp}) = ${sn}.`,
      `Central atom hybridisation is ${hyb}.`,
      `Electron geometry is ${elecGeom} and molecular shape is ${molShape}.`
    ]
  };
}
