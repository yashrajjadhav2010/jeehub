import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set1',
  title: 'IUPAC Nomenclature - Set 1',
  chapterId: 'iupac-nomenclature',
  subjectId: 'chemistry',
  questions: [
    {
      id: 'iupac-1',
      question: 'What is the IUPAC name of neopentane?',
      options: ['2-Methylbutane', '2,2-Dimethylpropane', 'Pentane', '2-Methylpropane'],
      answer: 1,
      explanation: 'Neopentane has a central carbon bonded to four methyl groups. The longest chain is 3 carbons (propane), with two methyl groups on the 2nd carbon: 2,2-dimethylpropane.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-2',
      question: 'According to IUPAC rules, which of the following functional groups has the highest priority?',
      options: ['-OH', '-CHO', '-COOH', '-CN'],
      answer: 2,
      explanation: 'The priority order of these groups is: Carboxylic acid (-COOH) > Nitrile (-CN) > Aldehyde (-CHO) > Alcohol (-OH).',
      difficulty: 'easy'
    },
    {
      id: 'iupac-3',
      question: 'The IUPAC name of CH₃-CH=CH-COOH is:',
      options: ['But-2-enoic acid', 'But-3-enoic acid', 'Crotonic acid', 'Prop-1-enecarboxylic acid'],
      answer: 0,
      explanation: 'Numbering starts from the carboxylic carbon. The double bond starts at C2. Longest chain is 4 carbons, so it is But-2-enoic acid.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-4',
      question: 'What is the IUPAC name of CH₂=CH-CN?',
      options: ['Prop-1-enenitrile', 'Acrylonitrile', 'Prop-2-enenitrile', 'Vinyl cyanide'],
      answer: 2,
      explanation: 'Numbering starts from the nitrile carbon. The chain has 3 carbons with a double bond at C2. Hence, Prop-2-enenitrile.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-5',
      question: 'The suffix used for naming an ester is:',
      options: ['-oic acid', '-al', '-oate', '-one'],
      answer: 2,
      explanation: 'Esters (-COOR) are named as alkyl alkanoates. The suffix for the parent chain is \'-oate\'.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-6',
      question: 'IUPAC name of CH₃-C≡C-CH(CH₃)₂ is:',
      options: ['4-Methylpent-2-yne', '2-Methylpent-3-yne', 'Isopropylmethylacetylene', '4,4-Dimethylbut-2-yne'],
      answer: 0,
      explanation: 'Longest chain is 5 carbons. Numbering from left gives the alkyne lower locant (2). Substituent at C4 is methyl. Thus, 4-Methylpent-2-yne.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-7',
      question: 'When both a double bond and a triple bond are present in the principal chain at equivalent positions, priority for lower numbering is given to:',
      options: ['Triple bond', 'Double bond', 'Depends on chain length', 'Substituent attached'],
      answer: 1,
      explanation: 'If double and triple bonds are at equivalent positions, the double bond gets the lower locant (ene before yne alphabetically).',
      difficulty: 'easy'
    },
    {
      id: 'iupac-8',
      question: 'The IUPAC name of CH₃-CO-CH₂-CO-CH₃ is:',
      options: ['Pentane-2,4-dione', 'Acetylacetone', 'Pentane-1,3-dione', 'Dimethylpropanedione'],
      answer: 0,
      explanation: '5 carbon chain. Ketone groups are at positions 2 and 4. Suffix is \'dione\'. Name: Pentane-2,4-dione.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-9',
      question: 'IUPAC name of glycerol (CH₂OH-CHOH-CH₂OH) is:',
      options: ['Propane-1,2,3-triol', '1,2,3-Propanetriol', 'Both A and B are acceptable', 'Glycerine'],
      answer: 2,
      explanation: 'The current IUPAC name is Propane-1,2,3-triol. Older convention was 1,2,3-Propanetriol, both are widely recognized.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-10',
      question: 'Which group is considered a substituent and NEVER the principal functional group in IUPAC naming?',
      options: ['-NH₂', '-NO₂', '-OH', '-SH'],
      answer: 1,
      explanation: 'Nitro (-NO2), halides (-X), alkoxy (-OR), and alkyl groups are always treated as substituents and named as prefixes.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-11',
      question: 'The IUPAC name of CH₃-CH(OH)-COOH is:',
      options: ['2-Hydroxypropanoic acid', 'Lactic acid', '1-Hydroxyethanecarboxylic acid', '3-Hydroxypropanoic acid'],
      answer: 0,
      explanation: 'Carboxylic acid has priority over alcohol. Numbering starts at -COOH. OH is at C2. Hence, 2-Hydroxypropanoic acid.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-12',
      question: 'What is the prefix used for the -CHO group when it acts as a substituent?',
      options: ['Formyl', 'Oxo', 'Carbonyl', 'Both Formyl and Oxo'],
      answer: 3,
      explanation: 'It is called \'formyl\' if the carbon of -CHO is NOT counted in the main chain, and \'oxo\' if its carbon is part of the parent chain numbering.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-13',
      question: 'The IUPAC name of CH₃-O-CH₂-CH₃ is:',
      options: ['Ethyl methyl ether', 'Methoxyethane', 'Ethoxymethane', 'Methyl ethyl ether'],
      answer: 1,
      explanation: 'Ethers are named as alkoxyalkanes. The larger group (ethyl) forms the parent chain (ethane), and the smaller group (methyl) is the alkoxy substituent (methoxy).',
      difficulty: 'easy'
    },
    {
      id: 'iupac-14',
      question: 'What is the IUPAC name for acetone?',
      options: ['Propan-1-one', 'Propan-2-one', 'Butan-2-one', 'Ethanal'],
      answer: 1,
      explanation: 'Acetone is a 3-carbon ketone. The ketone carbon must be at position 2. Name is Propan-2-one.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-15',
      question: 'In bicyclo compounds, numbering starts from:',
      options: ['Any carbon', 'The smallest bridge', 'A bridgehead carbon', 'The longest bridge'],
      answer: 2,
      explanation: 'Numbering starts at a bridgehead carbon, goes along the longest bridge to the second bridgehead, then along the next longest, and finally the shortest.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-16',
      question: 'For a spiro compound, numbering begins at:',
      options: ['The spiro carbon', 'The largest ring', 'The smallest ring adjacent to spiro carbon', 'Anywhere'],
      answer: 2,
      explanation: 'In spiro compounds, numbering starts in the smaller ring, adjacent to the spiro carbon, and proceeds through it to the larger ring.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-17',
      question: 'The IUPAC name of CH₂=C(CH₃)-CH=CH₂ is:',
      options: ['2-Methylbuta-1,3-diene', 'Isoprene', '3-Methylbuta-1,3-diene', '2-Methyl-1,3-butadiene'],
      answer: 0,
      explanation: 'Longest chain is 4 carbons with two double bonds (buta-1,3-diene). Methyl is at C2 to give lower locant. 2-Methylbuta-1,3-diene.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-18',
      question: 'IUPAC name of HCOOH is:',
      options: ['Methanoic acid', 'Formic acid', 'Ethanoic acid', 'Carboxylic acid'],
      answer: 0,
      explanation: 'One carbon carboxylic acid. \'Methan-\' + \'-oic acid\' = Methanoic acid. Formic acid is the common name.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-19',
      question: 'The prefix \'iso\' in common names usually corresponds to which structural feature in IUPAC?',
      options: ['A tert-butyl group', 'A methyl branch at the second-to-last carbon', 'A straight chain', 'A quaternary carbon'],
      answer: 1,
      explanation: 'The \'iso\' prefix indicates a methyl branch on the penultimate (second to last) carbon of the chain.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-20',
      question: 'The IUPAC name of CH₃-CH₂-CO-Cl is:',
      options: ['Propanoyl chloride', 'Propionyl chloride', 'Propane carbonyl chloride', 'Chloropropanone'],
      answer: 0,
      explanation: 'Acid halides are named using the suffix \'-oyl halide\'. 3 carbons = propanoyl chloride.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-21',
      question: 'If a compound contains both -OH and -NH₂, the principal functional group is:',
      options: ['-NH₂', '-OH', 'Both have equal priority', 'Depends on chain length'],
      answer: 1,
      explanation: 'According to the priority sequence, Alcohols (-OH) > Amines (-NH2). The suffix will be \'-ol\' and prefix \'amino\'.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-22',
      question: 'The IUPAC name of benzene with an -OH group is:',
      options: ['Phenol', 'Benzenol', 'Both Phenol and Benzenol are accepted', 'Hydroxybenzene'],
      answer: 2,
      explanation: 'While Phenol is the widely accepted common name retained by IUPAC, Benzenol is the systematic name. Both are technically correct.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-23',
      question: 'What is the IUPAC name of CH₃-CH(NH₂)-CH₃?',
      options: ['Isopropylamine', 'Propan-2-amine', '2-Aminopropane', 'Both B and C'],
      answer: 3,
      explanation: 'The parent chain is propane. The amine is at C2. It can be named as Propan-2-amine or 2-Aminopropane.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-24',
      question: 'IUPAC name of HOOC-COOH is:',
      options: ['Oxalic acid', 'Ethanedioic acid', 'Methane dicarboxylic acid', 'Dicarboxyethane'],
      answer: 1,
      explanation: 'Two carbons, two carboxylic acid groups. Parent is ethane. Suffix is dioic acid. Ethanedioic acid.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-25',
      question: 'Which of the following is named as an \'alkanecarbonitrile\'?',
      options: ['R-NC', 'R-CN', 'R-CNO', 'R-CO-NH₂'],
      answer: 1,
      explanation: 'Cyanides (R-CN) are named as alkanenitriles or alkyl cyanides. The systematic IUPAC suffix is \'-nitrile\'.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-26',
      question: 'IUPAC name of CH₃-C≡N is:',
      options: ['Methyl cyanide', 'Ethanenitrile', 'Acetonitrile', 'Methanenitrile'],
      answer: 1,
      explanation: 'Total 2 carbons (including the CN carbon). Parent chain is ethane. Suffix is nitrile. Ethanenitrile.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-27',
      question: 'When a cyclic ring is attached to a carbon chain containing a principal functional group, the ring is treated as:',
      options: ['Parent chain', 'Substituent', 'It depends on ring size', 'A separate compound'],
      answer: 1,
      explanation: 'If the aliphatic chain contains the principal functional group, it is treated as the parent chain, and the ring becomes a cycloalkyl substituent.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-28',
      question: 'The IUPAC name of CH₃-CO-O-CH₃ is:',
      options: ['Methyl ethanoate', 'Ethyl methanoate', 'Methoxyethanone', 'Methyl acetate'],
      answer: 0,
      explanation: 'The portion attached to oxygen is \'methyl\'. The acyl portion has 2 carbons (ethanoate). Methyl ethanoate.',
      difficulty: 'easy'
    },
    {
      id: 'iupac-29',
      question: 'Identify the correct priority order (highest to lowest):',
      options: ['Aldehyde > Ketone > Alcohol > Amine', 'Ketone > Aldehyde > Alcohol > Amine', 'Alcohol > Aldehyde > Ketone > Amine', 'Aldehyde > Alcohol > Ketone > Amine'],
      answer: 0,
      explanation: 'Standard priority sequence: -CHO (Aldehyde) > -CO- (Ketone) > -OH (Alcohol) > -NH2 (Amine).',
      difficulty: 'easy'
    },
    {
      id: 'iupac-30',
      question: 'The IUPAC name of CH₂=CH-CH₂-OH is:',
      options: ['Prop-2-en-1-ol', 'Allyl alcohol', 'Prop-1-en-3-ol', '1-Hydroxyprop-2-ene'],
      answer: 0,
      explanation: 'Alcohol has higher priority than alkene. Numbering starts from the carbon with -OH. Name: Prop-2-en-1-ol.',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
