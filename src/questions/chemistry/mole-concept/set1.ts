import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set1',
  title: 'Mole Concept - Set 1 (Fundamental Concepts)',
  chapterId: 'mole-concept',
  subjectId: 'chemistry',
  difficulty: 'easy',
  questions: [
    {
      id: 'mc-q1',
      question: 'The mass of one mole of electrons is approximately:',
      options: ['$9.1 \\times 10^{-31} \\text{ g}$', '$0.55 \\text{ mg}$', '$1.008 \\text{ g}$', '$1.66 \\times 10^{-24} \\text{ g}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nMass of one electron $= 9.1 \\times 10^{-31} \\text{ kg} = 9.1 \\times 10^{-28} \\text{ g}$.\nMass of 1 mole of electrons $= (9.1 \\times 10^{-28} \\text{ g}) \\times (6.022 \\times 10^{23} \\text{ mol}^{-1})$.\n$\\\\approx 54.8 \\times 10^{-5} \\text{ g} = 0.548 \\times 10^{-3} \\text{ g} = 0.548 \\text{ mg} \\approx 0.55 \\text{ mg}$'
    },
    {
      id: 'mc-q2',
      question: 'The number of water molecules in 1 liter of water (assuming density of water is $1 \\text{ g/mL}$) is:',
      options: ['$18 \\times 10^{23}$', '$55.55 \\times 6.022 \\times 10^{23}$', '$6.022 \\times 10^{23}$', '$1000$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nVolume of water $= 1 \\text{ L} = 1000 \\text{ mL}$.\nMass of water $= 1000 \\text{ mL} \\times 1 \\text{ g/mL} = 1000 \\text{ g}$.\nMolar mass of $H_2O = 18 \\text{ g/mol}$.\nNumber of moles $n = \\frac{1000}{18} = 55.55 \\text{ mol}$.\nNumber of molecules $= n \\times N_A = 55.55 \\times 6.022 \\times 10^{23}$.'
    },
    {
      id: 'mc-q3',
      question: 'Which of the following contains the maximum number of atoms?',
      options: ['$1 \\text{ g of Au (s)}$', '$1 \\text{ g of Na (s)}$', '$1 \\text{ g of Li (s)}$', '$1 \\text{ g of } Cl_2 \\text{ (g)}$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nNumber of atoms = $(\\frac{\\text{Mass}}{\\text{Atomic Mass}}) \\times N_A \\times \\text{Atomicity}$.\nFor 1 g Au: $\\frac{1}{197} N_A$\nFor 1 g Na: $\\frac{1}{23} N_A$\nFor 1 g Li: $\\frac{1}{7} N_A$\nFor 1 g $Cl_2$: $(\\frac{1}{71}) \\times N_A \\times 2 = \\frac{2}{71} N_A = \\frac{1}{35.5} N_A$.\nSince 7 is the smallest denominator, $\\frac{1}{7} N_A$ yields the largest number of atoms. Thus, $1 \\text{ g of Li}$.'
    },
    {
      id: 'mc-q4',
      question: 'The volume occupied by $4.4 \\text{ g}$ of $CO_2$ at STP is:',
      options: ['$2.24 \\text{ L}$', '$22.4 \\text{ L}$', '$0.224 \\text{ L}$', '$44.8 \\text{ L}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMolar mass of $CO_2 = 12 + 2(16) = 44 \\text{ g/mol}$.\nNumber of moles $n = \\frac{4.4 \\text{ g}}{44 \\text{ g/mol}} = 0.1 \\text{ mol}$.\nVolume at STP = $n \\times 22.4 \\text{ L} = 0.1 \\times 22.4 = 2.24 \\text{ L}$.'
    },
    {
      id: 'mc-q5',
      question: 'How many total atoms are present in $0.1 \\text{ moles}$ of $NH_3$?',
      options: ['$6.022 \\times 10^{22}$', '$2.408 \\times 10^{23}$', '$1.204 \\times 10^{23}$', '$2.408 \\times 10^{24}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nNumber of moles = $0.1 \\text{ mol}$.\n1 molecule of $NH_3$ contains $1 + 3 = 4$ atoms.\nTotal number of atoms = $0.1 \\times N_A \\times 4 = 0.4 \\times 6.022 \\times 10^{23}$.\n$= 2.4088 \\times 10^{23}$ atoms.'
    },
    {
      id: 'mc-q6',
      question: 'The mass of a single atom of Carbon-12 is exactly:',
      options: ['$12 \\text{ g}$', '$1 \\text{ amu}$', '$1.99 \\times 10^{-23} \\text{ g}$', '$1.66 \\times 10^{-24} \\text{ g}$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n1 mole of C-12 ($6.022 \\times 10^{23}$ atoms) weighs exactly $12 \\text{ g}$.\nMass of 1 atom $= \\frac{12}{6.022 \\times 10^{23}} \\text{ g}$.\n$\\\\approx 1.992 \\times 10^{-23} \\text{ g}$.'
    },
    {
      id: 'mc-q7',
      question: 'The empirical formula of a compound is $CH_2O$ and its vapour density is $30$. What is its molecular formula?',
      options: ['$CH_2O$', '$C_2H_4O_2$', '$C_3H_6O_3$', '$C_4H_8O_4$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nMolecular Mass $= 2 \\times \\text{Vapour Density} = 2 \\times 30 = 60$.\nEmpirical formula mass of $CH_2O = 12 + 2(1) + 16 = 30$.\nThe multiplying factor $n = \\frac{\\text{Molecular Mass}}{\\text{Empirical Mass}} = \\frac{60}{30} = 2$.\nMolecular Formula $= (CH_2O)_2 = C_2H_4O_2$.'
    },
    {
      id: 'mc-q8',
      question: 'What is the mass percentage of oxygen in ethanol ($C_2H_5OH$)?',
      options: ['$34.7\\%$', '$52.1\\%$', '$13.0\\%$', '$26.1\\%$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMolar mass of $C_2H_5OH = 2(12) + 6(1) + 16 = 24 + 6 + 16 = 46 \\text{ g/mol}$.\nMass of oxygen in one mole = $16 \\text{ g}$.\nMass percentage of Oxygen $= \\frac{16}{46} \\times 100\\% \\approx 34.78\\%$.'
    },
    {
      id: 'mc-q9',
      question: 'Vapour density of a gas with respect to oxygen is $2$. What is the molar mass of the gas?',
      options: ['$16 \\text{ g/mol}$', '$32 \\text{ g/mol}$', '$64 \\text{ g/mol}$', '$4 \\text{ g/mol}$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nRelative Vapour Density (w.r.t $O_2$) $= \\frac{\\text{Molar mass of Gas}}{\\text{Molar mass of } O_2}$.\nGiven relative V.D. = 2.\n$2 = \\frac{M_{gas}}{32} \\implies M_{gas} = 64 \\text{ g/mol}$.'
    },
    {
      id: 'mc-q10',
      question: 'Two elements X (atomic mass 75) and Y (atomic mass 16) combine to form a compound containing 75.8% X. The empirical formula is:',
      options: ['$XY$', '$X_2Y$', '$X_2Y_3$', '$X_2Y_5$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n% of X = 75.8, % of Y = $100 - 75.8 = 24.2$.\nMoles of X $= \\frac{75.8}{75} \\approx 1.01$.\nMoles of Y $= \\frac{24.2}{16} \\approx 1.51$.\nRatio X:Y $= 1.01 : 1.51 = 1 : 1.5 = 2 : 3$.\nEmpirical formula is $X_2Y_3$.'
    },
    {
      id: 'mc-q11',
      question: '10 g of $CaCO_3$ is heated. What volume of $CO_2$ is liberated at STP?',
      options: ['$2.24 \\text{ L}$', '$1.12 \\text{ L}$', '$22.4 \\text{ L}$', '$4.48 \\text{ L}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nReaction: $CaCO_3(s) \\to CaO(s) + CO_2(g)$.\n1 mole of $CaCO_3$ (100 g) gives 1 mole of $CO_2$ ($22.4 \\text{ L}$ at STP).\n10 g of $CaCO_3$ is $0.1$ moles.\nVolume of $CO_2 = 0.1 \\times 22.4 \\text{ L} = 2.24 \\text{ L}$.'
    },
    {
      id: 'mc-q12',
      question: 'Equal masses of $H_2, O_2$, and $CH_4$ are placed in a container. The ratio of their partial pressures is:',
      options: ['$1 : 1 : 1$', '$16 : 1 : 2$', '$1 : 16 : 8$', '$16 : 2 : 1$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nPartial pressure is directly proportional to the number of moles.\nLet mass of each be $m$.\nMoles of $H_2 = m/2$\nMoles of $O_2 = m/32$\nMoles of $CH_4 = m/16$\nRatio of moles = $m/2 : m/32 : m/16$.\nMultiply by 32: $16 : 1 : 2$.'
    },
    {
      id: 'mc-q13',
      question: 'Molarity of a solution containing $4.0 \\text{ g}$ of $NaOH$ dissolved in $250 \\text{ mL}$ of solution is:',
      options: ['$0.1 \\text{ M}$', '$0.4 \\text{ M}$', '$0.2 \\text{ M}$', '$0.8 \\text{ M}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nMolar mass of $NaOH = 40 \\text{ g/mol}$.\nMoles of $NaOH = 4.0 / 40 = 0.1 \\text{ mol}$.\nVolume in Liters $= 250 / 1000 = 0.25 \\text{ L}$.\nMolarity $M = \\frac{n}{V} = \\frac{0.1}{0.25} = 0.4 \\text{ M}$.'
    },
    {
      id: 'mc-q14',
      question: 'How many grams of $H_2SO_4$ are present in $100 \\text{ mL}$ of a $0.2 \\text{ M}$ solution?',
      options: ['$1.96 \\text{ g}$', '$9.8 \\text{ g}$', '$0.98 \\text{ g}$', '$19.6 \\text{ g}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMoles = Molarity $\\times$ Volume in Liters = $0.2 \\times 0.1 = 0.02 \\text{ mol}$.\nMolar mass of $H_2SO_4 = 2(1) + 32 + 4(16) = 98 \\text{ g/mol}$.\nMass $= \\text{Moles} \\times \\text{Molar mass} = 0.02 \\times 98 = 1.96 \\text{ g}$.'
    },
    {
      id: 'mc-q15',
      question: 'What is the molality of an aqueous solution whose mole fraction of solute is $0.2$?',
      options: ['$13.88 \\text{ m}$', '$11.11 \\text{ m}$', '$55.55 \\text{ m}$', '$0.25 \\text{ m}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMole fraction of solute $X_B = 0.2$. Mole fraction of solvent (water) $X_A = 0.8$.\nRatio of moles $n_B/n_A = 0.2/0.8 = 1/4$.\nAssume $n_B = 1 \\text{ mol}$, then $n_A = 4 \\text{ mol}$.\nMass of solvent (water) $= 4 \\times 18 = 72 \\text{ g} = 0.072 \\text{ kg}$.\nMolality $m = \\frac{\\text{Moles of solute}}{\\text{Mass of solvent (kg)}} = \\frac{1}{0.072} \\approx 13.88 \\text{ mol/kg}$.'
    },
    {
      id: 'mc-q16',
      question: '$10 \\text{ g}$ of $H_2$ reacts with $64 \\text{ g}$ of $O_2$ to form water. The amount of water formed is:',
      options: ['$90 \\text{ g}$', '$72 \\text{ g}$', '$74 \\text{ g}$', '$36 \\text{ g}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nReaction: $2H_2 + O_2 \\to 2H_2O$.\nMoles of $H_2 = 10 / 2 = 5 \\text{ mol}$.\nMoles of $O_2 = 64 / 32 = 2 \\text{ mol}$.\nAccording to stoichiometry, 1 mol $O_2$ needs 2 mol $H_2$. So 2 mol $O_2$ needs 4 mol $H_2$.\nSince we have 5 mol $H_2$, $O_2$ is the limiting reagent.\n2 mol $O_2$ produces $2 \\times 2 = 4 \\text{ mol}$ of $H_2O$.\nMass of $H_2O = 4 \\times 18 = 72 \\text{ g}$.'
    },
    {
      id: 'mc-q17',
      question: 'An organic compound contains $C = 40\\%$, $H = 6.66\\%$, and $O = 53.34\\%$. Its empirical formula is:',
      options: ['$CH_2O$', '$CH_2O_2$', '$C_2H_4O_3$', '$C_2H_2O$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMoles of C = $40 / 12 = 3.33$\nMoles of H = $6.66 / 1 = 6.66$\nMoles of O = $53.34 / 16 = 3.33$\nDivide by smallest (3.33):\nC = 1, H = 2, O = 1.\nEmpirical formula is $CH_2O$.'
    },
    {
      id: 'mc-q18',
      question: 'If $0.5 \\text{ moles}$ of $BaCl_2$ is mixed with $0.2 \\text{ moles}$ of $Na_3PO_4$, the maximum number of moles of $Ba_3(PO_4)_2$ that can be formed is:',
      options: ['$0.7$', '$0.5$', '$0.2$', '$0.1$'],
      answer: 3,
      explanation: '**Step-by-step Solution:**\nReaction: $3BaCl_2 + 2Na_3PO_4 \\to Ba_3(PO_4)_2 + 6NaCl$.\nFrom stoichiometry, 3 moles of $BaCl_2$ react with 2 moles of $Na_3PO_4$.\nFor $0.5$ mol $BaCl_2$, required $Na_3PO_4 = (2/3) \\times 0.5 = 0.33 \\text{ mol}$.\nWe only have $0.2$ mol $Na_3PO_4$, so $Na_3PO_4$ is the limiting reagent.\n2 moles of $Na_3PO_4$ yield 1 mole of $Ba_3(PO_4)_2$.\n$0.2$ moles of $Na_3PO_4$ yield $0.1$ moles of $Ba_3(PO_4)_2$.'
    },
    {
      id: 'mc-q19',
      question: 'The equivalent weight of $KMnO_4$ in acidic medium is (Molar mass = M):',
      options: ['$M/3$', '$M/5$', '$M/6$', '$M/1$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nIn acidic medium, the half reaction is: $MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+} + 4H_2O$.\nThe oxidation state of Mn changes from +7 to +2. The change in oxidation number (n-factor) is 5.\nEquivalent weight $= \\frac{\\text{Molar mass}}{\\text{n-factor}} = M/5$.'
    },
    {
      id: 'mc-q20',
      question: 'What volume of $0.1 \\text{ M } H_2SO_4$ is required to completely neutralize $20 \\text{ mL}$ of $0.2 \\text{ M } NaOH$?',
      options: ['$10 \\text{ mL}$', '$20 \\text{ mL}$', '$40 \\text{ mL}$', '$5 \\text{ mL}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nUse the normality equation: $N_1 V_1 = N_2 V_2$.\nFor $H_2SO_4$, basicity is 2, so Normality $N_1 = 2 \\times 0.1 = 0.2 \\text{ N}$.\nFor $NaOH$, acidity is 1, so Normality $N_2 = 1 \\times 0.2 = 0.2 \\text{ N}$.\n$0.2 \\times V_1 = 0.2 \\times 20 \\implies V_1 = 20 \\text{ mL}$.'
    },
    {
      id: 'mc-q21',
      question: 'A $5 \\text{ M}$ solution of $H_2SO_4$ is diluted from $1 \\text{ L}$ to $10 \\text{ L}$. What is the normality of the resulting solution?',
      options: ['$0.5 \\text{ N}$', '$1.0 \\text{ N}$', '$5.0 \\text{ N}$', '$10.0 \\text{ N}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nInitial Molarity $M_1 = 5 \\text{ M}$. Initial Normality $N_1 = 2 \\times 5 = 10 \\text{ N}$ (since n-factor for $H_2SO_4 = 2$).\nDilution equation: $N_1 V_1 = N_2 V_2$.\n$10 \\times 1 = N_2 \\times 10 \\implies N_2 = 1.0 \\text{ N}$.'
    },
    {
      id: 'mc-q22',
      question: 'The mass of $CO_2$ produced by the complete combustion of $16 \\text{ g}$ of methane ($CH_4$) is:',
      options: ['$22 \\text{ g}$', '$44 \\text{ g}$', '$88 \\text{ g}$', '$16 \\text{ g}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nReaction: $CH_4 + 2O_2 \\to CO_2 + 2H_2O$.\n1 mole of $CH_4$ produces 1 mole of $CO_2$.\nMolar mass of $CH_4 = 16 \\text{ g/mol}$. So $16 \\text{ g}$ is exactly $1$ mole.\nThis yields 1 mole of $CO_2$, which has a mass of $44 \\text{ g}$.'
    },
    {
      id: 'mc-q23',
      question: 'If the density of a $3 \\text{ M}$ solution of $NaCl$ is $1.25 \\text{ g/mL}$, calculate the molality of the solution. (Molar mass of $NaCl = 58.5 \\text{ g/mol}$)',
      options: ['$2.79 \\text{ m}$', '$3.00 \\text{ m}$', '$2.40 \\text{ m}$', '$3.50 \\text{ m}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nAssume $1 \\text{ L}$ ($1000 \\text{ mL}$) of solution.\nMass of solution $= 1000 \\text{ mL} \\times 1.25 \\text{ g/mL} = 1250 \\text{ g}$.\nMoles of solute ($NaCl$) $= 3 \\text{ mol}$.\nMass of solute $= 3 \\times 58.5 = 175.5 \\text{ g}$.\nMass of solvent $= 1250 - 175.5 = 1074.5 \\text{ g} = 1.0745 \\text{ kg}$.\nMolality $m = \\frac{3}{1.0745} \\approx 2.79 \\text{ m}$.'
    },
    {
      id: 'mc-q24',
      question: 'How many significant figures are in $0.002040$?',
      options: ['3', '4', '6', '7'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nLeading zeros are never significant. The non-zero digits are significant ($2, 4$). Zeros between non-zero digits are significant ($0$). Trailing zeros in a decimal number are significant ($0$).\nThus, the significant digits are $2, 0, 4, 0$ (total 4).'
    },
    {
      id: 'mc-q25',
      question: 'Equivalent mass of a trivalent metal is $9$. Its atomic mass is:',
      options: ['$3$', '$9$', '$27$', '$18$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nEquivalent Mass $= \\frac{\\text{Atomic Mass}}{\\text{Valency}}$.\nGiven Equivalent Mass $= 9$ and Valency (n-factor) $= 3$ (since it is trivalent).\nAtomic Mass $= 9 \\times 3 = 27$.'
    },
    {
      id: 'mc-q26',
      question: '$20 \\text{ mL}$ of $CO$ is mixed with $20 \\text{ mL}$ of $O_2$ and sparked. What is the total volume of gases at the end of the reaction under identical conditions?',
      options: ['$20 \\text{ mL}$', '$30 \\text{ mL}$', '$40 \\text{ mL}$', '$10 \\text{ mL}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nReaction: $2CO + O_2 \\to 2CO_2$.\nBy Gay-Lussac\'s law, volume ratio is $2 : 1 \\to 2$.\n$20 \\text{ mL}$ of CO requires $10 \\text{ mL}$ of $O_2$ and produces $20 \\text{ mL}$ of $CO_2$.\n$CO$ is the limiting reagent (consumed completely).\n$O_2$ remaining $= 20 - 10 = 10 \\text{ mL}$.\nTotal volume = $CO_2$ produced + $O_2$ unreacted $= 20 + 10 = 30 \\text{ mL}$.'
    },
    {
      id: 'mc-q27',
      question: 'The volume of $1 \\text{ drop}$ of water is $0.05 \\text{ mL}$. Number of water molecules in 1 drop is (Density = $1 \\text{ g/mL}$):',
      options: ['$1.67 \\times 10^{21}$', '$3.34 \\times 10^{21}$', '$6.02 \\times 10^{23}$', '$1.67 \\times 10^{22}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMass of 1 drop = $0.05 \\text{ mL} \\times 1 \\text{ g/mL} = 0.05 \\text{ g}$.\nMoles of water = $\\frac{0.05}{18} \\text{ mol}$.\nNumber of molecules $= \\frac{0.05}{18} \\times 6.022 \\times 10^{23} = \\frac{5}{1800} \\times 6.022 \\times 10^{23} \\approx 1.67 \\times 10^{21}$.'
    },
    {
      id: 'mc-q28',
      question: 'A molar solution is one that contains one mole of a solute in:',
      options: ['$1000 \\text{ g}$ of solvent', '$1 \\text{ L}$ of solution', '$1 \\text{ L}$ of solvent', '$1000 \\text{ g}$ of solution'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nBy definition, Molarity ($M$) is the number of moles of solute dissolved per Litre ($1 \\text{ L}$) of the entire *solution*. (Molality is per $1000 \\text{ g}$ of solvent).'
    },
    {
      id: 'mc-q29',
      question: 'If the atomic mass of carbon was taken as 24 instead of 12, then the mass of one mole of substance would:',
      options: ['Be halved', 'Double', 'Remain unchanged', 'Increase 4 times'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nThe concept of a \'mole\' is defined as the number of atoms in exactly $12 \\text{ g}$ of C-12. If the reference standard changes so that 1 mole is the number of atoms in $24 \\text{ g}$ of carbon, Avogadro\'s number effectively doubles. Thus, the mass of one mole of any substance would double.'
    },
    {
      id: 'mc-q30',
      question: 'Mixture of $X = 0.02 \\text{ mol}$ of $[Co(NH_3)_5SO_4]Br$ and $0.02 \\text{ mol}$ of $[Co(NH_3)_5Br]SO_4$ is treated with excess $AgNO_3$. Total moles of precipitate formed is:',
      options: ['$0.02$', '$0.04$', '$0.01$', '$0.00$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nThe first complex has $Br^-$ outside the coordination sphere (ionizable), which reacts with $Ag^+$ to form a precipitate of $AgBr$. Amount of $AgBr = 0.02 \\text{ mol}$.\nThe second complex has $SO_4^{2-}$ outside, which does not precipitate with $Ag^+$.\nTotal precipitate = $0.02 \\text{ mol}$.'
    },
    {
      id: 'mc-q31',
      question: 'Assuming complete dissociation, which of the following solutions has the highest freezing point?',
      options: ['$1.0 \\text{ M } NaCl$', '$1.0 \\text{ M } CaCl_2$', '$1.0 \\text{ M } AlCl_3$', '$1.0 \\text{ M } C_6H_{12}O_6$'],
      answer: 3,
      explanation: '**Step-by-step Solution:**\nDepression in freezing point $\\Delta T_f = i \\cdot K_f \\cdot m$. Higher $i$ means more depression, leading to a *lower* freezing point.\nTo get the *highest* freezing point, we need the *lowest* depression, meaning the lowest van \'t Hoff factor $i$.\n$NaCl$: $i=2$. $CaCl_2$: $i=3$. $AlCl_3$: $i=4$. Glucose ($C_6H_{12}O_6$): $i=1$ (non-electrolyte).\nGlucose has the lowest $i$, hence the highest freezing point.'
    },
    {
      id: 'mc-q32',
      question: 'The empirical formula of a hydrocarbon is $CH_2$. If $1 \\text{ g}$ of the gas occupies $0.56 \\text{ L}$ at STP, the molecular formula is:',
      options: ['$C_2H_4$', '$C_3H_6$', '$C_4H_8$', '$C_5H_{10}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nMoles of gas $= \\frac{0.56}{22.4} = 0.025 \\text{ mol}$.\nMolar mass $= \\frac{\\text{Mass}}{\\text{Moles}} = \\frac{1}{0.025} = 40 \\text{ g/mol}$.\nEmpirical mass of $CH_2 = 12 + 2 = 14$. The closest multiple is $14 \\times 3 = 42$ ($C_3H_6$).'
    },
    {
      id: 'mc-q33',
      question: 'What is the equivalent mass of $Na_2CO_3$ when it is used as a base? (Molar mass = 106)',
      options: ['106', '53', '26.5', '212'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nIn acid-base reactions, the n-factor of a salt is the total positive or negative charge on the ions. For $Na_2CO_3$, it dissociates into $2Na^+$ and $CO_3^{2-}$.\nThe total charge is 2 (it can accept $2 H^+$ ions).\nEquivalent Mass $= \\frac{\\text{Molar mass}}{\\text{n-factor}} = \\frac{106}{2} = 53$.'
    },
    {
      id: 'mc-q34',
      question: 'The number of moles of $KMnO_4$ that will be needed to react with one mole of sulfite ion ($SO_3^{2-}$) in acidic solution is:',
      options: ['$2/5$', '$3/5$', '$4/5$', '$1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nIn acidic medium, $KMnO_4$ ($Mn^{+7}$) reduces to $Mn^{+2}$ (n-factor = 5).\nSulfite ($SO_3^{2-}$, $S^{+4}$) oxidizes to sulfate ($SO_4^{2-}$, $S^{+6}$) (n-factor = 2).\nEquating equivalents: $n_1 \\times 5 = n_2 \\times 2$.\nFor 1 mole of sulfite ($n_2 = 1$): $n_1 \\times 5 = 1 \\times 2 \\implies n_1 = 2/5 \\text{ moles}$.'
    },
    {
      id: 'mc-q35',
      question: 'If $3.01 \\times 10^{20}$ molecules are removed from $98 \\text{ mg}$ of $H_2SO_4$, then the number of moles of $H_2SO_4$ left are:',
      options: ['$0.1 \\times 10^{-3}$', '$0.5 \\times 10^{-3}$', '$1.66 \\times 10^{-3}$', '$9.95 \\times 10^{-2}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nInitial mass = $98 \\text{ mg} = 98 \\times 10^{-3} \\text{ g}$.\nInitial moles = $\\frac{98 \\times 10^{-3}}{98} = 10^{-3} = 0.001 \\text{ mol}$.\nMoles removed = $\\frac{3.01 \\times 10^{20}}{6.02 \\times 10^{23}} = 0.5 \\times 10^{-3} \\text{ mol}$.\nMoles left = $10^{-3} - 0.5 \\times 10^{-3} = 0.5 \\times 10^{-3} \\text{ mol}$.'
    },
    {
      id: 'mc-q36',
      question: 'The maximum amount of $BaSO_4$ precipitated on mixing $20 \\text{ mL}$ of $0.5 \\text{ M } BaCl_2$ with $20 \\text{ mL}$ of $1 \\text{ M } H_2SO_4$ is:',
      options: ['$0.25 \\text{ mol}$', '$0.01 \\text{ mol}$', '$0.5 \\text{ mol}$', '$0.02 \\text{ mol}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nReaction: $BaCl_2 + H_2SO_4 \\to BaSO_4 + 2HCl$.\nMoles of $BaCl_2 = 20 \\times 10^{-3} \\times 0.5 = 0.01 \\text{ mol}$.\nMoles of $H_2SO_4 = 20 \\times 10^{-3} \\times 1 = 0.02 \\text{ mol}$.\n$BaCl_2$ is the limiting reagent.\n1 mole of $BaCl_2$ gives 1 mole of $BaSO_4$.\nThus, $0.01 \\text{ mol}$ of $BaSO_4$ is precipitated.'
    },
    {
      id: 'mc-q37',
      question: 'How much oxygen is required for complete combustion of $580 \\text{ g}$ of butane ($C_4H_{10}$)?',
      options: ['$2080 \\text{ g}$', '$1040 \\text{ g}$', '$580 \\text{ g}$', '$2900 \\text{ g}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nReaction: $2C_4H_{10} + 13O_2 \\to 8CO_2 + 10H_2O$.\nMolar mass of butane = $4(12) + 10 = 58 \\text{ g/mol}$.\nMoles of butane = $580 / 58 = 10 \\text{ mol}$.\nFrom stoichiometry, 2 moles of butane need 13 moles of $O_2$.\n10 moles of butane need $(13/2) \\times 10 = 65 \\text{ moles}$ of $O_2$.\nMass of $O_2 = 65 \\times 32 = 2080 \\text{ g}$.'
    },
    {
      id: 'mc-q38',
      question: 'Which of the following concentration factors is affected by a change in temperature?',
      options: ['Molarity', 'Molality', 'Mole fraction', 'Weight percentage'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMolarity is defined as moles of solute per unit volume of solution ($V$). Since the volume of a liquid expands or contracts with temperature changes, the molarity will change.\nMolality, mole fraction, and weight percentage are based strictly on mass, which is independent of temperature.'
    },
    {
      id: 'mc-q39',
      question: 'The number of moles of electron required to deposit 1 gram equivalent of a metal is:',
      options: ['1', 'Depends on valency', '0.5', '2'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nBy Faraday\'s First Law of Electrolysis, the mass deposited is proportional to charge. Specifically, 1 Faraday of charge ($96500 \\text{ C}$, which is the charge of 1 mole of electrons) will always deposit exactly 1 gram equivalent of any substance, regardless of its valency.'
    },
    {
      id: 'mc-q40',
      question: 'Percentage of Se in peroxidase anhydrous enzyme is $0.5\\%$ by weight (At. wt. of Se = 78.4). Then minimum molecular weight of peroxidase anhydrous enzyme is:',
      options: ['$1.568 \\times 10^4$', '$1.568 \\times 10^3$', '$15.68$', '$1.568 \\times 10^5$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nFor the minimum molecular weight, the enzyme molecule must contain at least one atom of Selenium.\nSo, $0.5\\%$ of Minimum Molecular Weight (MW) = Atomic weight of Se.\n$\\frac{0.5}{100} \\times MW = 78.4$\n$MW = \\frac{78.4 \\times 100}{0.5} = 7840 \\times 2 = 15680 = 1.568 \\times 10^4$.'
    },
    {
      id: 'mc-q41',
      question: 'A compound contains 8% Sulphur by mass. The minimum molecular weight of the compound is:',
      options: ['$200$', '$400$', '$155$', '$320$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nMinimum molecular weight implies there is at least 1 atom of Sulfur (atomic weight 32) per molecule.\n$\\frac{8}{100} \\times MW = 32$\n$MW = \\frac{32 \\times 100}{8} = 4 \\times 100 = 400$.'
    },
    {
      id: 'mc-q42',
      question: '25 mL of a solution of barium hydroxide on titration with $0.1 \\text{ M}$ solution of hydrochloric acid gave a titer value of 35 mL. The molarity of barium hydroxide solution is:',
      options: ['$0.07 \\text{ M}$', '$0.14 \\text{ M}$', '$0.28 \\text{ M}$', '$0.35 \\text{ M}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nNormality of $HCl = 0.1 \\text{ N}$ (since basicity is 1).\nReaction: $Ba(OH)_2 + 2HCl \\to BaCl_2 + 2H_2O$.\nEquivalents of acid = Equivalents of base.\n$N_1 V_1 = N_2 V_2 \\implies 0.1 \\times 35 = N_2 \\times 25 \\implies N_2 = 3.5 / 25 = 0.14 \\text{ N}$.\nFor $Ba(OH)_2$, the acidity (n-factor) is 2. Molarity = Normality / 2 = $0.14 / 2 = 0.07 \\text{ M}$.'
    },
    {
      id: 'mc-q43',
      question: 'The ratio of masses of oxygen and nitrogen in a particular gaseous mixture is 1:4. The ratio of number of their molecules is:',
      options: ['1:4', '7:32', '1:8', '3:16'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nLet mass of $O_2$ be $w$ and mass of $N_2$ be $4w$.\nMoles of $O_2 = w/32$.\nMoles of $N_2 = 4w/28 = w/7$.\nRatio of molecules = Ratio of moles = $(w/32) : (w/7) = 7 : 32$.'
    },
    {
      id: 'mc-q44',
      question: 'How many grams of $CaCO_3$ will react completely with $50 \\text{ mL}$ of $0.5 \\text{ M } HCl$?',
      options: ['$1.25 \\text{ g}$', '$2.50 \\text{ g}$', '$0.625 \\text{ g}$', '$5.0 \\text{ g}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nReaction: $CaCO_3 + 2HCl \\to CaCl_2 + H_2O + CO_2$.\nMoles of $HCl = 0.5 \\times 50 \\times 10^{-3} = 0.025 \\text{ mol}$.\n2 moles of $HCl$ react with 1 mole of $CaCO_3$.\nMoles of $CaCO_3$ required = $0.025 / 2 = 0.0125 \\text{ mol}$.\nMolar mass of $CaCO_3 = 100 \\text{ g/mol}$.\nMass = $0.0125 \\times 100 = 1.25 \\text{ g}$.'
    },
    {
      id: 'mc-q45',
      question: '$1 \\text{ g}$ of a mixture of $Na_2CO_3$ and $NaHCO_3$ contains equimolar amounts of both. What is the mass of $Na_2CO_3$ in the mixture?',
      options: ['$0.558 \\text{ g}$', '$0.442 \\text{ g}$', '$0.500 \\text{ g}$', '$0.600 \\text{ g}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nLet moles of each be $x$.\nMolar mass of $Na_2CO_3 = 106 \\text{ g/mol}$. Molar mass of $NaHCO_3 = 84 \\text{ g/mol}$.\nTotal mass $= 106x + 84x = 1$\n$190x = 1 \\implies x = 1/190 \\text{ mol}$.\nMass of $Na_2CO_3 = 106 \\times (1/190) \\approx 0.5578 \\text{ g} \\approx 0.558 \\text{ g}$.'
    },
    {
      id: 'mc-q46',
      question: 'What volume of oxygen at STP is required to completely burn $10 \\text{ mL}$ of $C_2H_6$ (ethane)?',
      options: ['$20 \\text{ mL}$', '$25 \\text{ mL}$', '$35 \\text{ mL}$', '$70 \\text{ mL}$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nReaction: $2C_2H_6 + 7O_2 \\to 4CO_2 + 6H_2O$.\nFrom Gay-Lussac\'s law, volume ratio matches mole ratio.\n2 volumes of ethane require 7 volumes of oxygen.\n$10 \\text{ mL}$ of ethane requires $\\frac{7}{2} \\times 10 = 35 \\text{ mL}$ of oxygen.'
    },
    {
      id: 'mc-q47',
      question: 'The empirical formula of a compound is $CH$. Its molecular weight is 78. The molecular formula is:',
      options: ['$C_2H_2$', '$C_4H_4$', '$C_6H_6$', '$C_8H_8$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nEmpirical mass of $CH = 12 + 1 = 13$.\nGiven molecular mass = 78.\nMultiplier $n = \\frac{\\text{Molecular Mass}}{\\text{Empirical Mass}} = 78 / 13 = 6$.\nMolecular formula $= (CH)_6 = C_6H_6$ (Benzene).'
    },
    {
      id: 'mc-q48',
      question: 'If 10 volumes of dihydrogen gas react with 5 volumes of dioxygen gas, how many volumes of water vapor would be produced?',
      options: ['5', '10', '15', '20'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nReaction: $2H_2(g) + O_2(g) \\to 2H_2O(g)$.\nRatio of volumes is $2 : 1 \\to 2$.\n10 volumes of $H_2$ will react with 5 volumes of $O_2$ to produce exactly 10 volumes of $H_2O$ vapor.'
    },
    {
      id: 'mc-q49',
      question: 'Calculate the number of atoms in $0.5 \\text{ g}$ of $He$. (At. mass He = 4)',
      options: ['$7.52 \\times 10^{22}$', '$1.50 \\times 10^{23}$', '$3.01 \\times 10^{23}$', '$6.02 \\times 10^{23}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMoles of He $= 0.5 / 4 = 0.125 \\text{ mol}$.\nNumber of atoms $= 0.125 \\times 6.022 \\times 10^{23} = 0.75275 \\times 10^{23} = 7.52 \\times 10^{22}$ atoms.'
    },
    {
      id: 'mc-q50',
      question: 'If $N_A$ is Avogadro\'s number, then the number of valence electrons in $4.2 \\text{ g}$ of nitride ions ($N^{3-}$) is:',
      options: ['$2.4 N_A$', '$4.2 N_A$', '$1.6 N_A$', '$3.2 N_A$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMoles of $N^{3-} = \\frac{4.2}{14} = 0.3 \\text{ mol}$.\nA neutral Nitrogen atom has 5 valence electrons. The $N^{3-}$ ion has gained 3 electrons, making it $5+3 = 8$ valence electrons (a full octet).\nTotal moles of valence electrons $= 0.3 \\times 8 = 2.4 \\text{ mol}$.\nTotal number of valence electrons $= 2.4 N_A$.'
    }
  ]
};

export default quizSet;
