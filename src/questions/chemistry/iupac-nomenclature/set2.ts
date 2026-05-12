import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set2',
  title: 'IUPAC Nomenclature - Set 2',
  chapterId: 'iupac-nomenclature',
  subjectId: 'chemistry',
  questions: [
    {
      id: 'iupac-m-1',
      question: 'What is the IUPAC name of CH₃-CH(OH)-CH₂-CO-CH₃?',
      options: ['4-Hydroxypentan-2-one', '2-Hydroxypentan-4-one', 'Pentane-2-ol-4-one', '2-Oxopentan-4-ol'],
      answer: 0,
      explanation: 'Ketone (-CO-) has higher priority than alcohol (-OH). Numbering from right gives ketone C2 and alcohol C4. Thus, 4-Hydroxypentan-2-one.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-2',
      question: 'Consider the structure CH₂=CH-CH₂-C≡CH. Its IUPAC name is:',
      options: ['Pent-1-en-4-yne', 'Pent-4-en-1-yne', 'Pent-1-yn-4-ene', 'Pent-4-yn-1-ene'],
      answer: 0,
      explanation: 'Numbering from either side gives locants 1, 4. When locant sets are identical, the double bond (\'ene\') gets priority over the triple bond (\'yne\') for lower numbering. So it\'s Pent-1-en-4-yne.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-3',
      question: 'A 6-carbon chain has a =O on C2 and a -CHO on C6. The IUPAC name is:',
      options: ['2-Oxohexanal', '5-Oxohexanal', 'Hexan-2-one-6-al', '5-Formylpentan-2-one'],
      answer: 1,
      explanation: 'Aldehyde (-CHO) has higher priority than Ketone. Numbering starts at the aldehyde (C1). The ketone is at C5. Therefore, 5-Oxohexanal.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-4',
      question: 'Name the compound: CH₃-O-CH₂-CH(CH₃)-CH₃',
      options: ['1-Methoxy-2-methylpropane', '2-Methyl-1-methoxypropane', 'Isobutyl methyl ether', 'Both A and C are accepted'],
      answer: 0,
      explanation: 'Parent chain is 3 carbons (propane). Numbering starts from the end nearer to the methoxy substituent: C1 has methoxy, C2 has methyl. Alphabetically: 1-Methoxy-2-methylpropane.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-5',
      question: 'A spiro compound consists of a 4-membered ring and a 5-membered ring sharing one carbon. Its parent name is:',
      options: ['Spiro[3.4]octane', 'Spiro[4.5]nonane', 'Spiro[4.3]octane', 'Bicyclo[3.4.0]octane'],
      answer: 0,
      explanation: 'Total carbons = 4 + 5 - 1 = 8 (octane). The paths around the spiro carbon contain 3 and 4 carbons. Rule: smaller ring first. Spiro[3.4]octane.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-6',
      question: 'A six-membered cycloalkane ring has a =CH₂ group attached to one of its carbons. The IUPAC name is:',
      options: ['Methylenecyclohexane', '1-Cyclohexylmethane', 'Cyclohexylmethane', 'Hexylidenemethane'],
      answer: 0,
      explanation: 'The double bond is attached directly to the ring, making it an alkylidene group. The correct IUPAC name is Methylenecyclohexane.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-7',
      question: 'Name the structure: HO-CH₂-CH₂-NH₂',
      options: ['2-Aminoethan-1-ol', '2-Hydroxyethan-1-amine', '1-Aminoethan-2-ol', 'Ethanolamine'],
      answer: 0,
      explanation: 'Alcohol (-OH) has higher priority than amine (-NH2). The parent is ethanol. Numbering starts at the -OH carbon. Hence, 2-Aminoethan-1-ol.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-8',
      question: 'IUPAC name of CH₃-CO-O-CH(CH₃)₂ is:',
      options: ['Isopropyl ethanoate', 'Ethyl isopropanoate', 'Propan-2-yl ethanoate', 'Both A and C are correct'],
      answer: 3,
      explanation: 'It is an ester. The alkyl group attached to Oxygen is isopropyl (or propan-2-yl). The acid part has 2 carbons (ethanoate).',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-9',
      question: 'In a bicyclic compound, two bridgehead carbons are connected by three bridges containing 2, 2, and 1 carbon(s) respectively. The parent name is:',
      options: ['Bicyclo[2.2.1]heptane', 'Bicyclo[1.2.2]heptane', 'Spiro[2.2.1]heptane', 'Bicyclo[3.2.1]octane'],
      answer: 0,
      explanation: 'Total carbons = 2 (bridgeheads) + 2 + 2 + 1 = 7 (heptane). Bridges are listed in descending order: [2.2.1].',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-10',
      question: 'Identify the correct IUPAC name for CH₃-CH(Cl)-CH(Br)-CH₃:',
      options: ['2-Bromo-3-chlorobutane', '3-Bromo-2-chlorobutane', '2-Chloro-3-bromobutane', '1-Bromo-2-chloro-1,2-dimethylethane'],
      answer: 0,
      explanation: 'Numbering from either side gives locants 2,3. Apply alphabetical order for numbering priority: Bromo gets the lower number (2). 2-Bromo-3-chlorobutane.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-11',
      question: 'What is the IUPAC name for CH₃-C(CH₃)₂-CH₂-C≡CH?',
      options: ['4,4-Dimethylpent-1-yne', '2,2-Dimethylpent-4-yne', 'Isohept-1-yne', '4-Methyl-4-methylpent-1-yne'],
      answer: 0,
      explanation: 'Numbering starts to give the alkyne the lowest locant (C1). The index 4 has two methyl groups. Therefore, 4,4-Dimethylpent-1-yne.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-12',
      question: 'IUPAC name of the compound containing a benzene ring with an -OH group at C1 and a -CH₃ group at C3 is:',
      options: ['3-Methylphenol', 'm-Cresol', '1-Hydroxy-3-methylbenzene', 'All of the above'],
      answer: 3,
      explanation: 'Phenol is the accepted parent name (C1 is the OH carbon). The methyl is at C3. m-Cresol is the accepted common name.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-13',
      question: 'A zigzag bond-line structure of an acid anhydride has two CH₃-CH₂-CO groups joined by an Oxygen. Its name is:',
      options: ['Propanoic anhydride', 'Dipropanoic anhydride', 'Propionic oxide', 'Hexanoic anhydride'],
      answer: 0,
      explanation: 'Symmetrical anhydrides are named by taking the name of the parent carboxylic acid and changing \'acid\' to \'anhydride\'. Propanoic acid -> Propanoic anhydride.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-14',
      question: 'IUPAC name of HOOC-CH₂-CH(COOH)-CH₂-COOH is:',
      options: ['Propane-1,2,3-tricarboxylic acid', '3-Carboxypentanedioic acid', 'Hexane-1,3,5-trioic acid', '2-Carboxypropanedioic acid'],
      answer: 0,
      explanation: 'When three or more identical principal functional groups are directly attached to a chain, the suffix \'carboxylic acid\' is used and the chain is named without their carbons.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-15',
      question: 'The IUPAC name of CH₃-NH-CH(CH₃)₂ is:',
      options: ['N-Methylpropan-2-amine', 'Isopropylmethylamine', '2-(Methylamino)propane', 'N-Methylisopropylamine'],
      answer: 0,
      explanation: 'The longest chain attached to nitrogen is 3 carbons (propan-2-amine). The methyl is on the nitrogen. N-Methylpropan-2-amine.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-16',
      question: 'Name the structure: CH₃-C≡C-CH₂-OH',
      options: ['But-2-yn-1-ol', 'But-3-yn-4-ol', '1-Hydroxybut-2-yne', 'But-1-ol-2-yne'],
      answer: 0,
      explanation: 'Alcohol has priority over alkyne. Numbering starts at the -OH end. Alkyne is at C2. But-2-yn-1-ol.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-17',
      question: 'IUPAC name of C₆H₅-CO-Cl is:',
      options: ['Benzoyl chloride', 'Phenylmethanoyl chloride', 'Benzenecarbonyl chloride', 'Both A and C'],
      answer: 3,
      explanation: 'Benzoyl chloride is the most common accepted IUPAC name. Benzenecarbonyl chloride is the strict systematic name.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-18',
      question: 'The compound CH₃-CH(OCH₃)-CH₃ is:',
      options: ['2-Methoxypropane', 'Isopropyl methyl ether', '1-Methoxy-1-methylethane', '2-Propoxy-methane'],
      answer: 0,
      explanation: 'Parent chain is 3 carbons. Methoxy substituent is on C2. 2-Methoxypropane.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-19',
      question: 'In a complex substituent named \'(1,2-dimethylpropyl)\', the \'1\' position refers to:',
      options: ['The end of the substituent chain', 'The carbon directly attached to the main parent chain', 'The carbon with most branches', 'Alphabetical choice'],
      answer: 1,
      explanation: 'In complex substituents, the carbon atom attached directly to the principal chain is always assigned position number 1.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-20',
      question: 'IUPAC name of CH₃-CH=CH-CHO is:',
      options: ['But-2-enal', 'But-3-enal', 'Crotonaldehyde', '1-Oxobut-2-ene'],
      answer: 0,
      explanation: 'Aldehyde carbon is C1. Double bond is at C2. But-2-enal.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-21',
      question: 'A cyclohexane ring has an -OH group and a -CH₃ group on adjacent carbons. The systematic name is:',
      options: ['2-Methylcyclohexan-1-ol', '1-Methylcyclohexan-2-ol', 'o-Methylcyclohexanol', '1-Hydroxy-2-methylcyclohexane'],
      answer: 0,
      explanation: 'Alcohol has priority, so its carbon is C1. Numbering proceeds to give the methyl group the lower locant (C2). 2-Methylcyclohexan-1-ol.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-22',
      question: 'What is the name of CH₃-CH₂-CH(NO₂)-CH₃?',
      options: ['2-Nitrobutane', '3-Nitrobutane', 'sec-Butyl nitrite', 'Nitromethylpropane'],
      answer: 0,
      explanation: 'Nitro groups are always treated as substituents. Numbering from right gives C2. 2-Nitrobutane.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-23',
      question: 'The IUPAC name of CH₃-CO-CH₂-COOH is:',
      options: ['3-Oxobutanoic acid', '2-Oxobutanoic acid', 'Acetoacetic acid', '3-Ketobutyric acid'],
      answer: 0,
      explanation: 'Carboxylic acid > Ketone. Carboxylic carbon is C1. Ketone is at C3. 3-Oxobutanoic acid.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-24',
      question: 'A spiro compound has two 5-membered rings sharing a carbon. Its name is:',
      options: ['Spiro[4.4]nonane', 'Bicyclo[4.4.0]nonane', 'Spiro[5.5]undecane', 'Spiro[4.4]decane'],
      answer: 0,
      explanation: 'Total carbons = 4 + 4 + 1 = 9 (nonane). The paths are 4 and 4. Spiro[4.4]nonane.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-25',
      question: 'IUPAC name of CH₃-O-CH=CH₂ is:',
      options: ['Methoxyethene', 'Methyl vinyl ether', 'Ethenoxymethane', '1-Methoxyethene'],
      answer: 0,
      explanation: 'Parent chain is ethene. Substituent is methoxy. Methoxyethene.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-26',
      question: 'If a compound has both an aldehyde (-CHO) and a carboxylic acid (-COOH) at opposite ends of a 5-carbon chain, its name is:',
      options: ['5-Oxopentanoic acid', '5-Formylpentanoic acid', '1-Carboxypentanal', 'Pentan-5-al-1-oic acid'],
      answer: 0,
      explanation: 'The aldehyde carbon is part of the main chain, so the prefix \'oxo\' is preferred over \'formyl\'. 5-Oxopentanoic acid.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-27',
      question: 'Name the compound: CH₃-C(CH₃)₂-CH(CH₃)-CH₃',
      options: ['2,2,3-Trimethylbutane', '2,3,3-Trimethylbutane', 'Hexamethylethane', 'Isoheptane'],
      answer: 0,
      explanation: 'Numbering from left gives locants 2,2,3. Numbering from right gives 2,3,3. 2,2,3 is lower. 2,2,3-Trimethylbutane.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-28',
      question: 'IUPAC name of C₆H₅-CH=CH₂ is:',
      options: ['Styrene', 'Ethenylbenzene', 'Phenylethene', 'All of the above'],
      answer: 3,
      explanation: 'IUPAC accepts Styrene (common), Ethenylbenzene (benzene parent), and Phenylethene (ethene parent).',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-29',
      question: 'IUPAC name of CH₃-CO-O-C₆H₅ is:',
      options: ['Phenyl ethanoate', 'Phenoxyethanone', 'Ethyl benzoate', 'Benzoyl acetate'],
      answer: 0,
      explanation: 'It is an ester. The group on Oxygen is phenyl. The acyl group has 2 carbons (ethanoate). Phenyl ethanoate.',
      difficulty: 'medium'
    },
    {
      id: 'iupac-m-30',
      question: 'The principal functional group in HO-CH₂-CH₂-CN is:',
      options: ['Nitrile', 'Alcohol', 'Neither', 'Alkane'],
      answer: 0,
      explanation: 'Nitrile (-CN) has a higher priority than Alcohol (-OH). The name would be 3-Hydroxypropanenitrile.',
      difficulty: 'medium'
    }
  ]
};

export default quizSet;
