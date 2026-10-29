import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set1',
  title: 'Isomerism - Set 1 (AIEEE 2002-2012 PYQs)',
  chapterId: 'isomerism',
  subjectId: 'chemistry',
  difficulty: 'pyq',
  questions: [
    {
      id: 'iso-1',
      question: 'A similarity between optical and geometrical isomerism is that [AIEEE-2002]',
      options: [
        'each forms equal number of isomers for a given compound',
        'If in a compound one is present then so is the other',
        'both are included in stereoisomerism',
        'they have no similarity'
      ],
      answer: 2,
      explanation: 'Stereoisomerism is a branch of chemistry where isomers share the same molecular formula and sequence of bonded atoms, but differ in the three-dimensional orientation of their atoms in space.\n\nStereoisomerism is primarily categorized into two types:\n1. Geometrical Isomerism\n2. Optical Isomerism\n\nTherefore, the common similarity is that both are included under the classification of stereoisomerism.',
      difficulty: 'medium'
    },
    {
      id: 'iso-2',
      question: 'Which of the following does not show geometrical isomerism? [AIEEE-2002]',
      options: [
        '1, 2-dichloro-1-pentene',
        '1, 3-dichloro-2-pentene',
        '1, 1-dichloro-1-pentene',
        '1,4-dichloro-2-pentene'
      ],
      answer: 2,
      explanation: "For a carbon-carbon double bond (C=C) to exhibit geometrical isomerism, each individual sp² hybridised carbon atom involved in the double bond must be attached to two different groups or atoms.\n\nLet's examine 1, 1-dichloro-1-pentene:\nStructure: Cl₂C = CH - CH₂ - CH₂ - CH₃\n\nIn this molecule, the first carbon atom (C-1) of the double bond is attached to two identical chlorine (-Cl) atoms. Because these two groups are identical, it fails to meet the criteria for cis/trans orientation. Therefore, it does not show geometrical isomerism.",
      difficulty: 'medium'
    },
    {
      id: 'iso-3',
      question: 'Racemic mixture is formed by mixing two [AIEEE-2002]',
      options: [
        'isomeric compounds',
        'chiral compounds',
        'meso compounds',
        'optical isomers'
      ],
      answer: 3,
      explanation: 'A racemic mixture (or racemate) is an equimolar (1:1 ratio) mixture of a pair of enantiomers. Enantiomers are non-superimposable mirror images of each other, which makes them a specific class of optical isomers.\n\nBecause one enantiomer rotates plane-polarized light in a clockwise direction (+/dextro) and the other rotates it in an equal counter-clockwise direction (-/levo), mixing them equally cancels out the optical activity. Thus, a racemic mixture is formed by mixing two optical isomers.',
      difficulty: 'medium'
    },
    {
      id: 'iso-4',
      question: 'On mixing a certain alkane with chlorine and irradiating it with ultraviolet light, it forms only one monochloroalkane. This alkane could be [AIEEE-2003]',
      options: [
        'propane',
        'pentane',
        'isopentane',
        'neopentane'
      ],
      answer: 3,
      explanation: 'Free-radical monochlorination replaces one hydrogen atom in the alkane with a chlorine atom. For an alkane to form exactly one monochloro derivative, all hydrogen atoms in the molecule must be chemically equivalent.\n\nLet\'s look at neopentane (2,2-dimethylpropane):\nStructure: C(CH₃)₄\nIn neopentane, a central carbon is bonded to four identical methyl groups. All 12 hydrogen atoms are equivalent primary (1°) hydrogens. Replacing any of these 12 hydrogen atoms yields the exact same product: 1-chloro-2,2-dimethylpropane.\n\nFor the other options:\n- Propane yields 2 structural isomers (1-chloropropane, 2-chloropropane).\n- Pentane yields 3 structural isomers (1-chloropentane, 2-chloropentane, 3-chloropentane).\n- Isopentane yields 4 structural isomers.\n\nTherefore, the alkane is neopentane.',
      difficulty: 'medium'
    },
    {
      id: 'iso-5',
      question: 'Which of the following will have meso-isomer also? [AIEEE-2004]',
      options: [
        '2-chlorobutane',
        '2-hydroxy propanoic acid',
        '2,3-dichloropentane',
        '2,3-dichlorobutane'
      ],
      answer: 3,
      explanation: 'A meso compound is a molecule that contains two or more chiral centers (asymmetric carbons) but is optically inactive due to an internal plane of symmetry (or a center of inversion). This requires the molecule to have symmetrically placed identical chiral centers.\n\nLet\'s check 2,3-dichlorobutane:\nStructure: CH₃ - *CH(Cl) - *CH(Cl) - CH₃\n- It contains two chiral carbons (C-2 and C-3).\n- Both chiral carbons are attached to the exact same set of four groups: -H, -Cl, -CH₃, and -CH(Cl)CH₃.\n- In its (2R, 3S) configuration, an internal plane of symmetry passes directly through the center of the C2-C3 bond, cutting the molecule into two identical mirror-image halves.\n\nThe other options fail because:\n- 2-chlorobutane and 2-hydroxypropanoic acid contain only 1 chiral center (meso forms require ≥ 2).\n- 2,3-dichloropentane has 2 chiral centers but lacks symmetry because one end terminates in a methyl group (-CH₃) and the other in an ethyl group (-CH₂CH₃).\n\nThus, 2,3-dichlorobutane forms a meso-isomer.',
      difficulty: 'medium'
    },
    {
      id: 'iso-6',
      question: 'Which of the following compound is not chiral? [AIEEE-2004]',
      options: [
        '1-chloropentane',
        '3-chloro-2-methyl pentane',
        '1-chloro-2-methyl pentane',
        '2-chloropentane'
      ],
      answer: 0,
      explanation: 'A molecule is chiral if it contains at least one asymmetric carbon atom (a chiral center), which is a carbon atom bonded to four entirely different groups or atoms. If no such carbon exists, the molecule is achiral (not chiral).\n\nLet\'s evaluate the structural formulas:\n- (A) 1-chloropentane: CH₃-CH₂-CH₂-CH₂-CH₂-Cl. None of the carbon atoms are attached to four different groups. Every aliphatic carbon contains at least two identical hydrogen atoms. Therefore, it is achiral (not chiral).\n- (B) 3-chloro-2-methylpentane: Contains a chiral carbon at C-3 attached to -H, -Cl, -CH(CH₃)₂, and -CH₂CH₃.\n- (C) 1-chloro-2-methylpentane: Contains a chiral carbon at C-2 attached to -H, -CH₃, -CH₂Cl, and -CH₂CH₂CH₃.\n- (D) 2-chloropentane: Contains a chiral carbon at C-2 attached to -H, -Cl, -CH₃, and -CH₂CH₂CH₃.',
      difficulty: 'medium'
    },
    {
      id: 'iso-7',
      question: 'Due to the presence of an unpaired electron, free radicals are: [AIEEE-2005]',
      options: [
        'Chemically reactive',
        'Chemically inactive',
        'Anions',
        'Cations'
      ],
      answer: 0,
      explanation: 'Free radicals are chemical species that possess an unpaired electron in their outer valence shell. Because atoms and molecules are highly stable when their valence electrons exist in paired configurations (stable octet/duet state), the presence of a single, unpaired lone electron makes free radicals highly unstable and energetic. To attain stability by pairing that electron, they quickly react with neighboring molecules, making them exceptionally chemically reactive. They are electrically neutral, so they are neither anions nor cations.',
      difficulty: 'easy'
    },
    {
      id: 'iso-8',
      question: '2-methylbutane on reacting with bromine in the presence of sunlight gives mainly [AIEEE-2005]',
      options: [
        '1-bromo-2-methylbutane',
        '2-bromo-2-methylbutane',
        '2-bromo-3-methylbutane',
        '1-bromo-3-methylbutane'
      ],
      answer: 1,
      explanation: 'Free-radical bromination of alkanes is highly regioselective compared to chlorination. The reaction selectively targets the hydrogen atom attached to the most stable carbon radical site. The stability order of alkyl free radicals is Tertiary (3°) > Secondary (2°) > Primary (1°).\n\nLet\'s look at 2-methylbutane:\nStructure: CH₃ - CH(CH₃) - CH₂ - CH₃\n- C-2 is a tertiary (3°) carbon holding one hydrogen.\n- C-3 is a secondary (2°) carbon.\n- C-1, C-4, and the branch methyl group are primary (1°) carbons.\n\nBecause abstraction of the tertiary hydrogen forms the highly stable 3° radical intermediate, bromine selectively substitutes at C-2. This yields 2-bromo-2-methylbutane as the major product.',
      difficulty: 'medium'
    },
    {
      id: 'iso-9',
      question: 'Of the five isomeric hexanes, the isomer which can give two monochlorinated compounds is [AIEEE-2005]',
      options: [
        'n-hexane',
        '2,3-dimethylbutane',
        '2,2-dimethylbutane',
        '2-methylpentane'
      ],
      answer: 1,
      explanation: 'The number of monochlorinated structural isomers a hydrocarbon can form depends directly on the number of chemically distinct sets of hydrogen atoms present in its structure.\n\nLet\'s analyze 2,3-dimethylbutane:\nStructure: (CH₃)₂CH - CH(CH₃)₂\nThis molecule is highly symmetrical. It contains:\n1. Twelve primary (1°) hydrogens sitting on four identical methyl (-CH₃) groups (all equivalent).\n2. Two tertiary (3°) hydrogens sitting on the two -CH- groups (both equivalent).\n\nSince there are only 2 unique environments for hydrogen atoms, substituting a chlorine atom can only yield 2 different monochlorinated compounds: 1-chloro-2,3-dimethylbutane and 2-chloro-2,3-dimethylbutane.\n\nFor reference:\n- n-hexane gives 3 isomers.\n- 2,2-dimethylbutane gives 4 isomers.\n- 2-methylpentane gives 5 isomers.',
      difficulty: 'medium'
    },
    {
      id: 'iso-10',
      question: 'Which types of isomerism is shown by 2,3-dichlorobutane? [AIEEE-2005]',
      options: [
        'Tautomerism',
        'Optical',
        'Geometric',
        'Structural'
      ],
      answer: 1,
      explanation: 'Let\'s look at the molecular structure of 2,3-dichlorobutane:\nStructure: CH₃ - CH(Cl) - CH(Cl) - CH₃\n\nThe molecule has two asymmetric (chiral) carbon atoms located at position C-2 and C-3. Each of these carbon atoms is attached to four distinct groups: -H, -Cl, -CH₃, and -CH(Cl)CH₃. Because it contains asymmetric chiral centers, it exhibits stereoisomerism in the form of non-superimposable mirror images (enantiomers) and a meso form. Thus, it actively displays optical isomerism.',
      difficulty: 'medium'
    },
    {
      id: 'iso-11',
      question: 'Increasing order of stability among the three main conformations (i.e. Eclipse, Anti, Gauche) of 2-fluoroethanol is [AIEEE-2006]',
      options: [
        'Eclipse, Gauche, Anti',
        'Gauche, Eclipse, Anti',
        'Eclipse, Anti, Gauche',
        'Anti, Gauche, Eclipse'
      ],
      answer: 2,
      explanation: 'Generally, for a simple butane molecule, the anti conformation is more stable than the gauche conformation due to minimized steric hindrance between bulky groups. However, 2-fluoroethanol (F-CH₂-CH₂-OH) presents a classic exception due to intramolecular hydrogen bonding.\n\nLet\'s evaluate the stability of each conformation:\n1. **Eclipsing Conformation**: This is always the least stable conformation because atoms or bonding pairs are directly aligned with each other, maximizing both torsional strain and steric repulsion.\n2. **Anti Conformation**: The bulky, highly electronegative fluorine atom (-F) and the hydroxyl group (-OH) are oriented at a 180° dihedral angle, which minimizes steric repulsion but offers no additional structural stabilization.\n3. **Gauche Conformation**: The -F and -OH groups sit at a 60° dihedral angle. This spatial proximity allows a strong **intramolecular hydrogen bond** to form between the highly electronegative fluorine atom and the electropositive hydrogen of the -OH group (O-H···F).\n\nThis intramolecular hydrogen bonding provides an electrostatic stabilization that significantly outweighs the minor steric strain of the gauche interaction. Therefore, the Gauche conformation is exceptionally more stable than the Anti conformation.\n\nArranging them in increasing order of stability (least stable to most stable):\nEclipse < Anti < Gauche',
      difficulty: 'medium'
    },
    {
      id: 'iso-12',
      question: 'Which one of the following conformation of cyclohexane is chiral? [AIEEE-2007]',
      options: [
        'Twist boat',
        'Rigid',
        'Chair',
        'Boat'
      ],
      answer: 0,
      explanation: 'A conformation or molecule is chiral if it lacks an improper axis of rotation (Sₙ), which most commonly means it lacks a plane of symmetry (σ) and a center of inversion (i).\n\n- The **chair** conformation possesses a high degree of symmetry, including a center of inversion and planes of symmetry, making it achiral.\n- The **boat** conformation possesses two mutually perpendicular planes of symmetry, making it achiral.\n- The **twist boat** conformation is formed by twisting the boat conformation to minimize flagpole hydrogens\' steric clash. This twisting destroys all planes of symmetry and the center of inversion, leaving it with only a C₂ axis of rotation. Because it lacks reflective symmetry, it is non-superimposable on its mirror image and is therefore **chiral**.',
      difficulty: 'medium'
    },
    {
      id: 'iso-13',
      question: 'The absolute configuration of the given structure is: [AIEEE-2008]\n\n![Structure](https://i.ibb.co/Zj6pkqN/image.png)',
      options: [
        'S, S',
        'R, R',
        'R, S',
        'S, R'
      ],
      answer: 1,
      explanation: 'To find the absolute configuration, we apply the Cahn-Ingold-Prelog (CIP) priority rules to each chiral carbon center.\n\nFor the left chiral carbon atom (C-2):\n1. Priority of groups: -OH (1) > -CO₂H (2) > -CH(OH)CO₂H (3) > -H (4).\n2. The lowest priority group (-H) is pointing away on the dashed bond.\n3. Tracing the path from priority 1 → 2 → 3 goes in a clockwise direction. Thus, this center has the **R** configuration.\n\nFor the right chiral carbon atom (C-3):\n1. Priority of groups: -OH (1) > -CO₂H (2) > -CH(OH)CO₂H (3) > -H (4).\n2. Tracing 1 → 2 → 3 with hydrogen properly positioned gives the **R** configuration.\n\nTherefore, the absolute configuration of both centers is **R, R**.',
      difficulty: 'medium'
    },
    {
      id: 'iso-14',
      question: 'The alkene that exhibits geometrical isomerism is : [AIEEE-2009]',
      options: [
        '2-butene',
        '2-methyl-2-butene',
        'propene',
        '2-methyl propene'
      ],
      answer: 0,
      explanation: 'Geometrical isomerism (cis/trans or E/Z isomerism) occurs in alkenes when each carbon atom of the double bond is attached to two different atoms or groups.\n\nLet\'s evaluate the options:\n- **2-butene** (CH₃-CH=CH-CH₃): The first double-bonded carbon is attached to -H and -CH₃ (two different groups). The second double-bonded carbon is also attached to -H and -CH₃ (two different groups). Therefore, it exhibits geometrical isomerism as *cis*-2-butene and *trans*-2-butene.\n- **2-methyl-2-butene** ((CH₃)₂C=CH-CH₃): One of the double-bonded carbons is attached to two identical methyl (-CH₃) groups, so it cannot show geometrical isomerism.\n- **propene** (CH₂=CH-CH₃): One double-bonded carbon is bonded to two identical hydrogen atoms.\n- **2-methyl propene** (CH₂=C(CH₃)₂): Both double-bonded carbons contain identical pairs of atoms/groups attached to them.',
      difficulty: 'easy'
    },
    {
      id: 'iso-15',
      question: 'The number of stereoisomers possible for a compound of the molecular formula CH₃ - CH = CH - CH(OH) - Me is : [AIEEE-2009]',
      options: [
        '4',
        '6',
        '3',
        '2'
      ],
      answer: 0,
      explanation: 'To find the total number of stereoisomers, we need to count the total number of stereocenters (both geometrical and optical) in the molecule:\nStructure: CH₃ - CH = CH - CH(OH) - CH₃\n\n1. **Geometrical Center**: The double bond between C-2 and C-3 can exist in 2 distinct configurations (*E* or *Z*).\n2. **Optical Center**: The carbon at C-4 is a chiral center because it is bonded to four completely different groups: -H, -OH, -CH₃, and -CH=CH-CH₃. It can exist in 2 configurations (*R* or *S*).\n\nSince the molecule is unsymmetrical (one end contains a double bond while the other end is a saturated methyl group), we apply the formula for unsymmetrical molecules with $n$ stereocenters:\nTotal Stereoisomers = 2ⁿ\n\nGiven $n = 2$ (1 double bond + 1 chiral center):\nTotal Stereoisomers = 2² = 4',
      difficulty: 'medium'
    },
    {
      id: 'iso-16',
      question: 'The IUPAC name of neopentane is : [AIEEE-2009]',
      options: [
        '2-methylpropane',
        '2, 2-dimethylbutane',
        '2-methylbutane',
        '2, 2-dimethylpropane'
      ],
      answer: 3,
      explanation: 'Neopentane is a common name for a branched alkane chain with five total carbon atoms.\n\nStructure:\n      CH₃\n       |\n  CH₃- C - CH₃\n       |\n      CH₃\n\nTo find the IUPAC name:\n1. Identify the longest continuous carbon chain: The longest straight chain contains 3 carbon atoms, making the parent alkane name "propane".\n2. Number the chain: Numbering from either side places the central carbon atom at position 2.\n3. Identify substituents: There are two methyl (-CH₃) groups attached to carbon-2.\n\nCombining these rules, we get the IUPAC name: 2,2-dimethylpropane.',
      difficulty: 'easy'
    },
    {
      id: 'iso-17',
      question: 'One mole of a symmetrical alkene on ozonolysis gives two moles of an aldehyde having a molecular mass of 44 u. The alkene is [AIEEE-2010]',
      options: [
        '2-butene',
        'ethene',
        'propene',
        '1-butene'
      ],
      answer: 0,
      explanation: 'Let the aldehyde formed during reductive ozonolysis be a mono-aldehyde with formula R-CHO.\nIts molecular mass calculation:\nMass of (R) + Mass of C + Mass of H + Mass of O = 44 u\nMass of (R) + 12 + 1 + 16 = 44\nMass of (R) + 29 = 44\nMass of (R) = 15 u\n\nThe alkyl group with a mass of 15 u is a methyl group (-CH₃). Therefore, the aldehyde is acetaldehyde (ethanal, CH₃CHO).\n\nSince 1 mole of a symmetrical alkene splits evenly at its double bond to yield exactly 2 moles of CH₃CHO, we connect the two aldehyde units back together by removing the oxygen atoms:\nCH₃-CH=O + O=CH-CH₃ → CH₃-CH=CH-CH₃\n\nThe resulting alkene is 2-butene, which is perfectly symmetrical.',
      difficulty: 'medium'
    },
    {
      id: 'iso-18',
      question: 'Identify the compound that exhibits tautomerism. [AIEEE-2011]',
      options: [
        '2-Butene',
        'Lactic acid',
        '2-Pentanone',
        'Phenol'
      ],
      answer: 2,
      explanation: 'Keto-enol tautomerism requires a carbonyl group (C=O) adjacent to a carbon atom that holds at least one acidic hydrogen atom (known as an α-hydrogen).\n\nLet\'s inspect 2-pentanone:\nStructure: CH₃ - C(=O) - CH₂ - CH₂ - CH₃\n- The carbonyl carbon at C-2 has two adjacent carbons: C-1 (a methyl group with 3 α-hydrogens) and C-3 (a methylene group with 2 α-hydrogens).\n- Due to the presence of these active α-hydrogens, a proton can migrate to the carbonyl oxygen while the double bond shifts, establishing an equilibrium with its enol forms:\nCH₂=C(OH)-CH₂-CH₂-CH₃ ⇌ CH₃-C(=O)-CH₂-CH₂-CH₃ ⇌ CH₃-C(OH)=CH-CH₂-CH₃\n\nHence, 2-pentanone readily exhibits tautomerism. Alkenes like 2-butene and simple carboxylic acids like lactic acid do not participate in keto-enol tautomerism under standard conditions, and phenol exists almost entirely in its aromatic enol form.',
      difficulty: 'medium'
    },
    {
      id: 'iso-19',
      question: 'Ozonolysis of an organic compound gives formaldehyde as one of the products. This confirms the presence of: [AIEEE-2011]',
      options: [
        'two ethylenic double bonds',
        'a vinyl group',
        'an isopropyl group',
        'an acetylenic triple bond'
      ],
      answer: 1,
      explanation: 'Formaldehyde (HCHO) is a single-carbon aldehyde structure (CH₂=O). During reductive ozonolysis, a carbon-carbon double bond (C=C) is broken down cleanly into carbonyl groups (C=O).\n\nIf formaldehyde is generated as a product, it indicates that one end of the original alkene double bond was a terminal =CH₂ unit.\n\nA vinyl group is structurally represented as -CH=CH₂. When a compound containing a vinyl group undergoes ozonolysis, the terminal =CH₂ breaks away to form H₂C=O (formaldehyde). Therefore, the formation of formaldehyde directly confirms the presence of a vinyl group.',
      difficulty: 'medium'
    },
    {
      id: 'iso-20',
      question: 'How many chiral compounds are possible on monochlorination of 2-methyl butane? [AIEEE-2012]',
      options: [
        '8',
        '2',
        '4',
        '6'
      ],
      answer: 2,
      explanation: 'Let\'s first write down the structure of 2-methylbutane:\nCH₃(1) - CH(2)(CH₃) - CH₂(3) - CH₃(4)\n\nMonochlorination involves replacing one hydrogen atom with a chlorine atom. Let\'s look at the products formed by substitution at different carbon positions and identify the chiral ones:\n\n1. **Substitution at C-1 (or the attached methyl group)**:\nProduct: Cl-CH₂ - CH(CH₃) - CH₂ - CH₃ (1-chloro-2-methylbutane)\n- Carbon-2 is a chiral center because it is bonded to four different groups: -H, -CH₃, -CH₂Cl, and -CH₂CH₃.\n- This gives rise to a pair of enantiomers (d- and l-forms). Thus, it contributes **2 chiral compounds**.\n\n2. **Substitution at C-2**:\nProduct: CH₃ - C(Cl)(CH₃) - CH₂ - CH₃ (2-chloro-2-methylbutane)\n- Carbon-2 is attached to two identical methyl groups, meaning the molecule is achiral. This contributes **0 chiral compounds**.\n\n3. **Substitution at C-3**:\nProduct: CH₃ - CH(CH₃) - CH(Cl) - CH₃ (2-chloro-3-methylbutane)\n- Carbon-3 is a chiral center bonded to four different groups: -H, -Cl, -CH₃, and -CH(CH₃)₂.\n- This also gives rise to a pair of enantiomers (d- and l-forms). Thus, it contributes **2 chiral compounds**.\n\n4. **Substitution at C-4**:\nProduct: CH₃ - CH(CH₃) - CH₂ - CH₂-Cl (1-chloro-3-methylbutane)\n- None of the carbons are bonded to four different groups, meaning the molecule is achiral. This contributes **0 chiral compounds**.\n\nAdding the chiral products up: 2 (from C-1) + 2 (from C-3) = 4 chiral compounds.',
      difficulty: 'medium'
    },
    {
      id: 'iso-21',
      question: 'Which branched chain isomer of the hydrocarbon with molecular mass 72u gives only one isomer of mono substituted alkyl halide ? [AIEEE-2012]',
      options: [
        'Tertiary butyl chloride',
        'Neopentane',
        'Isohexane',
        'Neohexane'
      ],
      answer: 1,
      explanation: 'First, let\'s establish the formula of the hydrocarbon. Alkanes follow the general formula CₙH₂ₙ₊₂:\n12n + 1(2n + 2) = 72\n14n + 2 = 72 ⇒ 14n = 70 ⇒ n = 5\nSo, the hydrocarbon is an isomer of pentane (C₅H₁₂).\n\nNow, we need a branched isomer of pentane where all the hydrogen atoms are chemically equivalent, so that replacing any hydrogen with a halogen yields the exact same mono-substituted product.\n\nLet\'s look at **neopentane** (2,2-dimethylpropane):\nStructure:\n      CH₃\n       |\n  CH₃- C - CH₃\n       |\n      CH₃\nIn neopentane, the central carbon has no hydrogens, and it is bonded to four identical methyl groups. All 12 hydrogen atoms in the molecule are completely equivalent primary (1°) hydrogens. Substituting a chlorine or bromine anywhere on this molecule results in only one single structural isomer (1-halo-2,2-dimethylpropane).\n\nTherefore, the correct branched chain isomer is neopentane.',
      difficulty: 'medium'
    }
  ]
};

export default quizSet;
