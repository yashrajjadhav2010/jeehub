import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set1',
  title: 'Basic Inorganic Chemistry - Set 1',
  chapterId: 'inorganic',
  subjectId: 'chemistry',
  questions: [
    {
      id: 'inorg-1',
      question: 'Which of the following is the correct order of ionic radii for the isoelectronic species N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺?',
      options: [
        'Mg²⁺ > Na⁺ > F⁻ > O²⁻ > N³⁻',
        'N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺',
        'N³⁻ = O²⁻ = F⁻ = Na⁺ = Mg²⁺',
        'F⁻ > O²⁻ > N³⁻ > Na⁺ > Mg²⁺'
      ],
      answer: 1,
      explanation: 'For isoelectronic species, the ionic radius decreases as the nuclear charge (atomic number) increases. Nitrogen has the lowest atomic number (7), so it is the largest.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-2',
      question: 'The first ionization enthalpy order among B, Be, C, N, O is:',
      options: [
        'B < Be < C < O < N',
        'Be < B < C < N < O',
        'B < C < Be < O < N',
        'Be < B < C < O < N'
      ],
      answer: 0,
      explanation: 'Generally, IE increases across a period. However, Be (2s²) is more stable than B (2s² 2p¹), and N (2p³) is more stable than O (2p⁴). Thus, B < Be < C < O < N.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-3',
      question: 'Which element has the highest negative electron gain enthalpy in the periodic table?',
      options: ['Fluorine', 'Chlorine', 'Oxygen', 'Sulfur'],
      answer: 1,
      explanation: 'Although Fluorine is more electronegative, Chlorine has the highest negative electron gain enthalpy because its larger size reduces inter-electronic repulsions compared to Fluorine.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-4',
      question: 'Based on VSEPR theory, the shape of XeF₄ is:',
      options: ['Tetrahedral', 'Square planar', 'See-saw', 'Octahedral'],
      answer: 1,
      explanation: 'XeF₄ has 4 bond pairs and 2 lone pairs (steric number 6). The 2 lone pairs occupy axial positions to minimize repulsion, resulting in a square planar shape.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-5',
      question: 'What is the hybridization of the central Iodine atom in I₃⁻?',
      options: ['sp³', 'sp³d', 'sp³d²', 'sp²'],
      answer: 1,
      explanation: 'Central Iodine has 8 valence electrons (7+1 charge). It forms 2 bonds and has 3 lone pairs. Steric number = 5, corresponding to sp³d hybridization.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-6',
      question: 'Comparison of dipole moments of NH₃ and NF₃ shows:',
      options: ['NH₃ > NF₃', 'NF₃ > NH₃', 'NH₃ = NF₃ = 0', 'NH₃ = NF₃ > 0'],
      answer: 0,
      explanation: 'In NH₃, bond dipoles and lone pair dipole reinforce each other. In NF₃, the electronegative F atoms pull the dipole away from the lone pair, reducing the net moment.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-7',
      question: 'According to MOT, O₂ is paramagnetic because it has:',
      options: [
        'Two unpaired electrons in bonding π orbitals',
        'Two unpaired electrons in antibonding π* orbitals',
        'One unpaired electron in the σ* orbital',
        'No unpaired electrons'
      ],
      answer: 1,
      explanation: 'O₂ has two unpaired electrons in its π*2px and π*2py orbitals according to Molecular Orbital Theory.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-8',
      question: 'The Bond Order of the CN⁻ ion is:',
      options: ['2.5', '3.0', '2.0', '1.5'],
      answer: 1,
      explanation: 'CN⁻ is isoelectronic with N₂ (14 electrons). Bond Order = (10 - 4)/2 = 3.0.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-9',
      question: 'Which of the following is an amphoteric oxide?',
      options: ['Na₂O', 'CO₂', 'Al₂O₃', 'SO₃'],
      answer: 2,
      explanation: 'Al₂O₃ reacts with both acids and bases, making it amphoteric.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-10',
      question: 'Which subshell has the poorest shielding effect?',
      options: ['s', 'p', 'd', 'f'],
      answer: 3,
      explanation: 'The shielding effect order is s > p > d > f. Due to their diffused shape, f-orbitals provide the poorest shielding.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-11',
      question: 'The diagonal relationship is most pronounced between:',
      options: ['Li and Mg', 'Na and Ca', 'B and P', 'C and S'],
      answer: 0,
      explanation: 'Li and Mg show similar properties due to their similar charge/size ratio (polarizing power).',
      difficulty: 'easy'
    },
    {
      id: 'inorg-12',
      question: 'Lanthanoid contraction is responsible for:',
      options: [
        'Zr and Y having same radius',
        'Zr and Nb similarity',
        'Zr and Hf having almost same radius',
        'Zr and Zn similarity'
      ],
      answer: 2,
      explanation: 'Poor shielding of 4f electrons causes the 5d series (like Hf) to have similar radii to the 4d series (like Zr).',
      difficulty: 'easy'
    },
    {
      id: 'inorg-13',
      question: 'Which alkali metal imparts a characteristic lilac color to the Bunsen flame?',
      options: ['Lithium', 'Sodium', 'Potassium', 'Rubidium'],
      answer: 2,
      explanation: 'Potassium gives a lilac/violet flame. Li is crimson, Na is yellow.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-14',
      question: "In the Solvay process, why can't K₂CO₃ be prepared?",
      options: [
        'K₂CO₃ is unstable',
        'KHCO₃ is too soluble to precipitate',
        'K doesn\'t react with ammonia',
        'KCl is insoluble'
      ],
      answer: 1,
      explanation: 'Potassium bicarbonate (KHCO₃) is highly soluble in water and does not precipitate like NaHCO₃ does.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-15',
      question: 'The chemical formula for Plaster of Paris is:',
      options: ['CaSO₄·2H₂O', 'CaSO₄·0.5H₂O', 'MgSO₄·7H₂O', 'CaSO₄'],
      answer: 1,
      explanation: 'Plaster of Paris is Calcium sulfate hemihydrate: CaSO₄·0.5H₂O.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-16',
      question: 'The B-H-B bridges in Diborane (B₂H₆) are:',
      options: ['2c-2e bonds', '3c-2e bonds', '3c-4e bonds', 'Coordinate bonds'],
      answer: 1,
      explanation: 'Diborane contains two 3-center 2-electron bonds, also known as banana bonds.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-17',
      question: 'What is another name for Inorganic Benzene?',
      options: ['Borazine (B₃N₃H₆)', 'Diborane', 'Boric acid', 'Borax'],
      answer: 0,
      explanation: 'Borazine B₃N₃H₆ is called inorganic benzene because it is isoelectronic and isostructural with benzene.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-18',
      question: 'The most thermodynamically stable allotrope of Phosphorus is:',
      options: ['White', 'Red', 'Black', 'Yellow'],
      answer: 2,
      explanation: 'Black phosphorus is the most stable and least reactive allotrope.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-19',
      question: 'In the solid state, PCl₅ exists as:',
      options: ['Covalent PCl₅', 'Ionic [PCl₄]⁺ [PCl₆]⁻', 'Polymeric chain', 'Ionic [PCl₄]⁺ Cl⁻'],
      answer: 1,
      explanation: 'PCl₅ in solid state auto-ionizes into a tetrahedral cation [PCl₄]⁺ and an octahedral anion [PCl₆]⁻.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-20',
      question: 'IF₇ has which molecular geometry?',
      options: ['Octahedral', 'Pentagonal bipyramidal', 'Square antiprismatic', 'Capped octahedral'],
      answer: 1,
      explanation: 'Iodine has 7 valence electrons forming 7 bonds. Steric number 7 corresponds to Pentagonal bipyramidal.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-21',
      question: 'Which of the following is the strongest field ligand?',
      options: ['CN⁻', 'NH₃', 'CO', 'F⁻'],
      answer: 2,
      explanation: 'Carbon monoxide (CO) is a strong π-acidic ligand and the strongest field ligand among these.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-22',
      question: 'The denticity of EDTA is generally:',
      options: ['2', '4', '6', '8'],
      answer: 2,
      explanation: 'EDTA is hexadentate, meaning it has 6 donor sites.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-23',
      question: 'Ligands that can bond through two different atoms are called:',
      options: ['Bidentate', 'Chelating', 'Ambidentate', 'Polydentate'],
      answer: 2,
      explanation: 'Ambidentate ligands like NO₂⁻ and SCN⁻ can coordinate through different atoms.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-24',
      question: 'What is the formal charge on the central oxygen in Ozone (O₃)?',
      options: ['0', '+1', '-1', '+2'],
      answer: 1,
      explanation: 'In the structure O=O⁺-O⁻, the central oxygen has a formal charge of +1.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-25',
      question: 'The repeating structural unit in Silicones is:',
      options: ['-SiO₄-', '-R₂SiO-', '-SiC-', '-R₃Si-'],
      answer: 1,
      explanation: 'Silicones are polymers with the repeating unit -(R₂SiO)-.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-26',
      question: "Which component of Portland cement provides early strength?",
      options: ['Dicalcium silicate', 'Tricalcium silicate', 'Tricalcium aluminate', 'Tetracalcium aluminoferrite'],
      answer: 1,
      explanation: 'Tricalcium silicate hydrates rapidly and is responsible for early strength development.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-27',
      question: 'Process of heating carbonate ores in absence of air is:',
      options: ['Roasting', 'Calcination', 'Smelting', 'Leaching'],
      answer: 1,
      explanation: 'Calcination is the thermal decomposition of carbonate ores in the absence of air.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-28',
      question: 'Oleum is a mixture of H₂SO₄ and:',
      options: ['H₂O', 'SO₂', 'SO₃', 'H₂SO₃'],
      answer: 2,
      explanation: 'Oleum (H₂S₂O₇) is formed by dissolving SO₃ in concentrated sulfuric acid.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-29',
      question: 'The oxidation state of sulfur in Caro\'s Acid (H₂SO₅) is:',
      options: ['+8', '+6', '+4', '+5'],
      answer: 1,
      explanation: 'Caro\'s acid has one peroxide linkage. The equation is 2(+1) + S + 2(-1) + 3(-2) = 0, giving S = +6.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-30',
      question: 'Which element is most abundant in the Earth\'s crust by mass?',
      options: ['Silicon', 'Iron', 'Aluminum', 'Oxygen'],
      answer: 3,
      explanation: 'Oxygen is the most abundant element in the Earth\'s crust by mass (~46.6%).',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
