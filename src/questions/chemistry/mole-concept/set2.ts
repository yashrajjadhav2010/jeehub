import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set2',
  title: 'Mole Concept - Set 2 (Advanced Concepts)',
  chapterId: 'mole-concept',
  subjectId: 'chemistry',
  difficulty: 'medium',
  questions: [
    {
      id: 'mc-s2-q1',
      question: 'What is the percentage of free $SO_3$ in a sample of oleum labeled as $104.5\\%$?',
      options: ['$20\\%$', '$25\\%$', '$40\\%$', '$45\\%$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n104.5% oleum means that 100 g of oleum requires 4.5 g of $H_2O$ to convert all free $SO_3$ into $H_2SO_4$.\nReaction: $SO_3 + H_2O \\to H_2SO_4$.\nMolar mass of $SO_3 = 80 \\text{ g/mol}$, $H_2O = 18 \\text{ g/mol}$.\n18 g of $H_2O$ reacts with 80 g of $SO_3$.\n4.5 g of $H_2O$ reacts with $\\frac{80}{18} \\times 4.5 = 20 \\text{ g}$ of $SO_3$.\nSince the original sample was 100 g, the percentage of free $SO_3$ is exactly $20\\%$.'
    },
    {
      id: 'mc-s2-q2',
      question: 'The volume strength of a $1.5 \\text{ M}$ solution of $H_2O_2$ is approximately:',
      options: ['$11.2 \\text{ V}$', '$16.8 \\text{ V}$', '$22.4 \\text{ V}$', '$33.6 \\text{ V}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nThe relation between Molarity ($M$) and Volume Strength ($V$) of $H_2O_2$ is $V = 11.2 \\times M$.\nFor a $1.5 \\text{ M}$ solution:\n$V = 11.2 \\times 1.5 = 16.8 \\text{ Volumes}$.'
    },
    {
      id: 'mc-s2-q3',
      question: 'If 100 mL of $10 \\text{ V}$ $H_2O_2$ solution is mixed with 200 mL of $20 \\text{ V}$ $H_2O_2$ solution, the volume strength of the resulting mixture is:',
      options: ['$15 \\text{ V}$', '$16.67 \\text{ V}$', '$13.33 \\text{ V}$', '$30 \\text{ V}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nVolume strength is an extensive property related to concentration. We can use the mixing formula: $V_{mix} = \\frac{V_1 S_1 + V_2 S_2}{V_1 + V_2}$.\n$V_{mix} = \\frac{(100 \\times 10) + (200 \\times 20)}{100 + 200}$.\n$V_{mix} = \\frac{1000 + 4000}{300} = \\frac{5000}{300} = 16.66... \\approx 16.67 \\text{ V}$.'
    },
    {
      id: 'mc-s2-q4',
      question: 'If $100 \\text{ g}$ of a $104.5\\%$ oleum sample is diluted with $4.5 \\text{ g}$ of water, what is the mass of pure $H_2SO_4$ formed?',
      options: ['$104.5 \\text{ g}$', '$100 \\text{ g}$', '$109 \\text{ g}$', '$98 \\text{ g}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nThe labeling \'$104.5\\%\' means exactly that if you add $4.5 \\text{ g}$ of water to $100 \\text{ g}$ of this oleum, all the free $SO_3$ will convert to $H_2SO_4$, resulting in a pure $100\\%$ $H_2SO_4$ solution.\nBy conservation of mass, Total Mass = Mass of oleum + Mass of water added = $100 \\text{ g} + 4.5 \\text{ g} = 104.5 \\text{ g}$ of pure $H_2SO_4$.'
    },
    {
      id: 'mc-s2-q5',
      question: 'A sample of $H_2O_2$ solution labeled as \'28 V\' has a percentage strength (w/v) of approximately:',
      options: ['$3.0\\%$', '$6.0\\%$', '$8.5\\%$', '$17.0\\%$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nPercentage strength (w/v) $= \\frac{17}{56} \\times \\text{Volume Strength}$.\nOr use Molarity: $V = 11.2 \\times M \\implies M = 28 / 11.2 = 2.5 \\text{ mol/L}$.\nStrength in g/L $= M \\times \\text{Molar mass of } H_2O_2 = 2.5 \\times 34 = 85 \\text{ g/L}$.\nPercentage strength (w/v) $= \\text{Strength in g/100 mL} = \\frac{85}{10} = 8.5\\%$.'
    },
    {
      id: 'mc-s2-q6',
      question: 'Calculate the molarity of pure water if its density is $1 \\text{ g/mL}$.',
      options: ['$1 \\text{ M}$', '$18 \\text{ M}$', '$55.5 \\text{ M}$', '$100 \\text{ M}$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nAssume 1 Litre ($1000 \\text{ mL}$) of water.\nMass of 1 L water $= 1000 \\text{ mL} \\times 1 \\text{ g/mL} = 1000 \\text{ g}$.\nMolar mass of $H_2O = 18 \\text{ g/mol}$.\nNumber of moles $n = \\frac{1000}{18} \\approx 55.55 \\text{ mol}$.\nMolarity $= \\frac{n}{V(L)} = \\frac{55.55}{1} = 55.5 \\text{ M}$.'
    },
    {
      id: 'mc-s2-q7',
      question: '$10 \\text{ mL}$ of a gaseous hydrocarbon is exploded with $100 \\text{ mL}$ of oxygen. The residual gas on cooling occupies $90 \\text{ mL}$, of which $20 \\text{ mL}$ is absorbed by KOH. The formula of the hydrocarbon is:',
      options: ['$CH_4$', '$C_2H_6$', '$C_2H_4$', '$C_3H_8$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nHydrocarbon formula $C_xH_y$. Volume $= 10 \\text{ mL}$.\nVolume of $CO_2$ formed is absorbed by KOH $\\implies V_{CO_2} = 20 \\text{ mL}$.\nFrom stoichiometry: 1 vol of $C_xH_y$ gives $x$ vols of $CO_2$.\n$10x = 20 \\implies x = 2$.\nTotal residual gas $= 90 \\text{ mL}$. So unreacted $O_2 = 90 - 20 = 70 \\text{ mL}$.\nReacted $O_2 = 100 - 70 = 30 \\text{ mL}$.\nVolume of $O_2$ required $= 10(x + y/4) = 30$.\nSubstitute $x=2$: $10(2 + y/4) = 30 \\implies 2 + y/4 = 3 \\implies y/4 = 1 \\implies y = 4$.\nHydrocarbon is $C_2H_4$.'
    },
    {
      id: 'mc-s2-q8',
      question: '$10 \\text{ mL}$ of a gaseous hydrocarbon is exploded with excess oxygen. Upon cooling, a contraction of $25 \\text{ mL}$ is observed. When passed through KOH, a further contraction of $20 \\text{ mL}$ occurs. Find the formula of the hydrocarbon.',
      options: ['$C_2H_6$', '$C_2H_4$', '$C_3H_8$', '$C_3H_6$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n1) Contraction in KOH $= V_{CO_2} = 20 \\text{ mL}$.\n$10x = 20 \\implies x = 2$.\n2) First contraction on cooling $= V_{\\text{reactants}} - V_{\\text{products (gases)}}$.\n$V_{\\text{hydrocarbon}} + V_{O_2} - V_{CO_2} = 25 \\text{ mL}$. (Water is liquid).\n$10 + 10(x + y/4) - 10x = 25$.\n$10 + 10(y/4) = 25 \\implies 2.5y = 15 \\implies y = 6$.\nThe hydrocarbon is $C_2H_6$.'
    },
    {
      id: 'mc-s2-q9',
      question: 'An equal mixture of $NO$ and $NO_2$ by mass is present. What is the average molar mass of the mixture?',
      options: ['$38 \\text{ g/mol}$', '$36.2 \\text{ g/mol}$', '$34.5 \\text{ g/mol}$', '$42 \\text{ g/mol}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nLet the mass of each gas be $w$.\nMolar mass of $NO = 30 \\text{ g/mol}$. Molar mass of $NO_2 = 46 \\text{ g/mol}$.\nTotal mass $= w + w = 2w$.\nTotal moles $= \\frac{w}{30} + \\frac{w}{46} = \\frac{46w + 30w}{1380} = \\frac{76w}{1380}$.\nAverage molar mass $M_{avg} = \\frac{\\text{Total Mass}}{\\text{Total Moles}} = \\frac{2w}{76w / 1380} = \\frac{2760}{76} \\approx 36.3 \\text{ g/mol}$.\nClosest option is $36.2 \\text{ g/mol}$ (Exact is 36.31).'
    },
    {
      id: 'mc-s2-q10',
      question: 'The vapour density of a mixture containing $NO_2$ and $N_2O_4$ is $38.3$ at $300 \\text{ K}$. What is the mole fraction of $NO_2$ in the mixture?',
      options: ['$0.33$', '$0.67$', '$0.50$', '$0.20$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nAverage molar mass $M_{mix} = 2 \\times \\text{Vapour Density} = 2 \\times 38.3 = 76.6 \\text{ g/mol}$.\nLet mole fraction of $NO_2$ be $x$. Mole fraction of $N_2O_4$ is $1-x$.\n$M_{NO_2} = 46, M_{N_2O_4} = 92$.\n$x(46) + (1-x)(92) = 76.6$\n$46x + 92 - 92x = 76.6$\n$46x = 92 - 76.6 = 15.4$\n$x = 15.4 / 46 = 0.334$.\nMole fraction of $NO_2$ is approximately $0.33$.'
    },
    {
      id: 'mc-s2-q11',
      question: 'Calculate the degree of dissociation ($\\alpha$) of $PCl_5$ if the vapour density of the equilibrium mixture is $60$. (Molar mass of $PCl_5 = 208.5$)',
      options: ['$0.73$', '$0.50$', '$0.33$', '$0.85$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$PCl_5 \\rightleftharpoons PCl_3 + Cl_2$. (1 mole gives 2 moles, so $n=2$).\nAverage molar mass of mixture $M_{mix} = 2 \\times 60 = 120$.\nInitial molar mass $M = 208.5$.\nFormula for degree of dissociation: $\\alpha = \\frac{M - M_{mix}}{M_{mix}(n-1)}$.\n$\\alpha = \\frac{208.5 - 120}{120(2-1)} = \\frac{88.5}{120} = 0.7375 \\approx 0.73$.'
    },
    {
      id: 'mc-s2-q12',
      question: 'A gaseous mixture contains 40% $H_2$ and 60% $He$ by volume. What is its vapour density?',
      options: ['$1.6$', '$3.2$', '$2.0$', '$1.0$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nBy Avogadro\'s law, volume % is equal to mole %.\n$M_{mix} = x_1 M_1 + x_2 M_2$.\n$M_{mix} = (0.40 \\times 2) + (0.60 \\times 4) = 0.8 + 2.4 = 3.2 \\text{ g/mol}$.\nVapour density $= M_{mix} / 2 = 3.2 / 2 = 1.6$.'
    },
    {
      id: 'mc-s2-q13',
      question: '$20 \\text{ mL}$ of $CO$ is mixed with $50 \\text{ mL}$ of $O_2$ and exploded. What is the composition of the mixture after cooling to room temperature?',
      options: ['$20 \\text{ mL } CO_2 + 30 \\text{ mL } O_2$', '$20 \\text{ mL } CO_2 + 40 \\text{ mL } O_2$', '$40 \\text{ mL } CO_2 + 10 \\text{ mL } O_2$', '$20 \\text{ mL } CO_2$ only'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nReaction: $2CO + O_2 \\to 2CO_2$.\nFrom stoichiometry, 2 vol of $CO$ reacts with 1 vol of $O_2$ to give 2 vol of $CO_2$.\n$20 \\text{ mL}$ of $CO$ will react completely (limiting reagent) with $10 \\text{ mL}$ of $O_2$.\nIt will produce $20 \\text{ mL}$ of $CO_2$.\nUnreacted $O_2$ remaining $= 50 - 10 = 40 \\text{ mL}$.\nFinal mixture = $20 \\text{ mL } CO_2 + 40 \\text{ mL } O_2$.'
    },
    {
      id: 'mc-s2-q14',
      question: 'A metal oxide contains 53% metal by mass. The equation for the reduction of the oxide by hydrogen is $M_2O_3 + 3H_2 \\to 2M + 3H_2O$. What is the atomic weight of the metal M?',
      options: ['$27$', '$56$', '$9$', '$18$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMass of metal = $53\\%$, Mass of oxygen = $47\\%$.\nFormula is $M_2O_3$. The mass of oxygen in 1 mole is $3 \\times 16 = 48 \\text{ g}$.\nSince 47 g of O combined with 53 g of M.\n48 g of O combines with $\\frac{53}{47} \\times 48 = 54.12 \\text{ g}$ of M total.\nWith 2 atoms, atomic weight is $54.12 / 2 \\approx 27$.'
    },
    {
      id: 'mc-s2-q15',
      question: 'An organic compound contains $C, H, N$. It has $20\\% C$, $6.67\\% H$, and $46.67\\% N$. The remaining is oxygen. Its empirical formula is:',
      options: ['$CH_4N_2O$', '$C_2H_8N_2O$', '$CH_2NO$', '$CH_4N_2O_2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nOxygen $\% = 100 - (20 + 6.67 + 46.67) = 26.66\\%$.\nMoles: C = $20/12 = 1.66$, H = $6.67/1 = 6.67$, N = $46.67/14 = 3.33$, O = $26.66/16 = 1.66$.\nRatio: C = 1, H = 4, N = 2, O = 1. Empirical formula is $CH_4N_2O$.'
    },
    {
      id: 'mc-s2-q16',
      question: 'In the reaction $A + 2B \\to C + 3D$, 5 moles of A and 8 moles of B are allowed to react. What is the amount of C formed and what is the limiting reagent?',
      options: ['4 moles, B is limiting', '5 moles, A is limiting', '8 moles, B is limiting', '4 moles, A is limiting'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nRatio A: $5/1 = 5$, B: $8/2 = 4$. B is Limiting Reagent.\nFrom 8 moles of B, $(1/2) \\times 8 = 4$ moles of C are formed.'
    },
    {
      id: 'mc-s2-q17',
      question: 'Consider the sequential reactions: $A \\to 2B$ (Yield = 80%), $B \\to 3C$ (Yield = 50%). If we start with 10 moles of A, how many moles of C are produced?',
      options: ['24 moles', '30 moles', '12 moles', '15 moles'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nActual B = $10 \\times 2 \\times 0.8 = 16$ moles.\nActual C = $16 \\times 3 \\times 0.5 = 24$ moles.'
    },
    {
      id: 'mc-s2-q18',
      question: 'What mass of an 80% pure $CaCO_3$ sample is required to completely neutralize 50 mL of $0.5 \\text{ M } HCl$?',
      options: ['$1.56 \\text{ g}$', '$1.25 \\text{ g}$', '$2.50 \\text{ g}$', '$3.12 \\text{ g}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMoles $HCl = 0.025$. Moles $CaCO_3$ required = $0.0125$.\nPure mass $= 0.0125 \\times 100 = 1.25\\text{g}$.\nSample mass $= 1.25 / 0.8 = 1.5625\\text{g}$.'
    },
    {
      id: 'mc-s2-q19',
      question: 'Equal weights of $X$ (At. wt. = 36) and $Y$ (At. wt. = 24) are reacted to form the compound $X_2Y_3$. Which is the limiting reagent?',
      options: ['X is limiting', 'Y is limiting', 'Both are consumed completely', 'Cannot be determined'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n$2X + 3Y \\to X_2Y_3$. Moles: $w/36$ and $w/24$.\nRatio X: $(w/36)/2 = w/72$. Ratio Y: $(w/24)/3 = w/72$. Both consumed completely.'
    },
    {
      id: 'mc-s2-q21',
      question: 'Potassium chlorate ($KClO_3$) decomposes to $KCl$ and $O_2$. If 12.25 g of $KClO_3$ (Molar mass = 122.5) produces 1.44 L of $O_2$ at STP, what is the percentage yield of the reaction?',
      options: ['$42.8\\%$', '$60.0\\%$', '$85.7\\%$', '$100\\%$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$2KClO_3 \\to 2KCl + 3O_2$. Moles $KClO_3 = 0.1$. Theoretical $O_2 = 0.15$ mol = $3.36\\text{L}$.\nYield = $(1.44/3.36) \\times 100 = 42.8\\%$.'
    },
    {
      id: 'mc-s2-q22',
      question: 'The molarity of a $20\\%$ (w/v) solution of $NaOH$ is:',
      options: ['$5 \\text{ M}$', '$2 \\text{ M}$', '$0.5 \\text{ M}$', '$4 \\text{ M}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$20\\% (w/v) = 20\\text{g}$ in $100\\text{mL}$. Moles = $20/40 = 0.5$ mol in $0.1\\text{L}$. Molarity = $5 \\text{ M}$.'
    },
    {
      id: 'mc-s2-q23',
      question: '100 mL of $0.1 \\text{ M } HCl$ is mixed with 100 mL of $0.2 \\text{ M } H_2SO_4$. The molarity of $H^+$ ions in the final solution is:',
      options: ['$0.15 \\text{ M}$', '$0.25 \\text{ M}$', '$0.30 \\text{ M}$', '$0.50 \\text{ M}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nTotal $H^+$ mmol = $(100 \\times 0.1) + (100 \\times 0.2 \\times 2) = 10 + 40 = 50$ mmol.\nTotal Volume = $200\\text{mL}$. $[H^+] = 50/200 = 0.25 \\text{ M}$.'
    },
    {
      id: 'mc-s2-q24',
      question: 'What volume of water must be added to 300 mL of $0.2 \\text{ M } HNO_3$ to make it a $0.05 \\text{ M}$ solution?',
      options: ['$900 \\text{ mL}$', '$1200 \\text{ mL}$', '$600 \\text{ mL}$', '$300 \\text{ mL}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$M_1V_1 = M_2V_2 \\implies 0.2 \\times 300 = 0.05 \\times V_2 \\implies V_2 = 1200\\text{mL}$.\nWater added = $1200 - 300 = 900\\text{mL}$.'
    },
    {
      id: 'mc-s2-q25',
      question: 'A mixture of $2 \\text{ moles}$ of $CO$ and $1 \\text{ mole}$ of $O_2$ is ignited. If total pressure initially was $P_0$, what is the final pressure at the same temperature and volume?',
      options: ['$P_0$', '$2/3 P_0$', '$3/2 P_0$', '$1/2 P_0$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n$2CO + O_2 \\to 2CO_2$. Initial moles = 3. Final moles = 2. Since $V, T$ constant, $P \\propto n$. $P_{final} = (2/3)P_0$.'
    },
    {
      id: 'mc-s2-q26',
      question: 'The n-factor of $K_2Cr_2O_7$ in acidic medium is:',
      options: ['3', '5', '6', '1'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n$Cr_2O_7^{2-} + 14H^+ + 6e^- \\to 2Cr^{3+} + 7H_2O$. Change in oxidation state is 6 per unit.'
    },
    {
      id: 'mc-s2-q27',
      question: 'Equivalent weight of a metal is $E$. What is the equivalent weight of its oxide?',
      options: ['$E + 16$', '$E + 8$', '$2E + 16$', '$E + 32$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n$E_{\\text{oxide}} = E_{\\text{metal}} + E_{\\text{oxygen}} = E + 16/2 = E + 8$.'
    },
    {
      id: 'mc-s2-q28',
      question: 'How many moles of $KMnO_4$ are required to oxidize 1 mole of Ferrous Oxalate ($FeC_2O_4$) in acidic medium?',
      options: ['$3/5$', '$1/5$', '$2/5$', '$1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$FeC_2O_4 \\to Fe^{3+} + 2CO_2 + 3e^-$ (n-factor = 3). $KMnO_4$ (n-factor = 5).\n$n_1 \\times 5 = 1 \\times 3 \\implies n_1 = 3/5$.'
    },
    {
      id: 'mc-s2-q29',
      question: 'In the reaction $I_2 + 2S_2O_3^{2-} \\to 2I^- + S_4O_6^{2-}$, the equivalent weight of Iodine ($I_2$) is (Molar mass = M):',
      options: ['$M$', '$M/2$', '$2M$', '$M/4$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n$I_2 + 2e^- \\to 2I^-$ (n-factor = 2). $E = M/2$.'
    },
    {
      id: 'mc-s2-q30',
      question: 'The normality of a $1 \\text{ M}$ solution of $H_3PO_3$ is:',
      options: ['$1 \\text{ N}$', '$2 \\text{ N}$', '$3 \\text{ N}$', '$0.5 \\text{ N}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n$H_3PO_3$ is dibasic (n-factor = 2). $N = M \\times 2 = 2 \\text{ N}$.'
    },
    {
      id: 'mc-s2-q31',
      question: 'In the standardization of $Na_2S_2O_3$ using $K_2Cr_2O_7$, $KI$ is added. The n-factor of $K_2Cr_2O_7$ in this iodometric titration is:',
      options: ['3', '6', '1', '2'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nDichromate reduces from $+6$ to $+3$, involving 6 electrons per molecule.'
    },
    {
      id: 'mc-s2-q32',
      question: '$20 \\text{ mL}$ of a mixture of $Na_2CO_3$ and $NaHCO_3$ requires $15 \\text{ mL}$ of $0.1 \\text{ N } HCl$ for neutralization using phenolphthalein. The same volume requires $40 \\text{ mL}$ of the same acid using methyl orange. What is the ratio of equivalents of $Na_2CO_3$ to $NaHCO_3$?',
      options: ['$3 : 1$', '$1 : 1$', '$3 : 2$', '$2 : 1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nPhph: $1/2$ eq $Na_2CO_3 = 15$ mmol $\\implies$ eq $Na_2CO_3 = 30$. MO: eq $Na_2CO_3$ + eq $NaHCO_3 = 40$ mmol $\\implies$ eq $NaHCO_3 = 10$. Ratio $3:1$.'
    },
    {
      id: 'mc-s2-q33',
      question: 'What volume of $0.2 \\text{ M } K_2Cr_2O_7$ is required to oxidize $50 \\text{ mL}$ of $0.1 \\text{ M } FeSO_4$ in acidic medium?',
      options: ['$4.16 \\text{ mL}$', '$8.33 \\text{ mL}$', '$25 \\text{ mL}$', '$12.5 \\text{ mL}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$n_1M_1V_1 = n_2M_2V_2 \\implies 6 \\times 0.2 \\times V = 1 \\times 0.1 \\times 50 \\implies 1.2V = 5 \\implies V = 4.16\\text{mL}$.'
    },
    {
      id: 'mc-s2-q34',
      question: 'The oxidation state of Iron in $Fe_3O_4$ is:',
      options: ['+2', '+3', '+8/3', '+4'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n$3x + 4(-2) = 0 \\implies 3x = 8 \\implies x = +8/3$.'
    },
    {
      id: 'mc-s2-q35',
      question: 'If 1 gram of a metal carbonate yields 0.56 grams of metal oxide on heating, the equivalent weight of the metal is:',
      options: ['20', '28', '12', '40'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$MCO_3 \\to MO + CO_2$. $CO_2$ loss = $0.44\\text{g} = 0.02$ eq. $Eq_{MO} = 0.56/(E+8) = 0.02 \\implies E+8 = 28 \\implies E = 20$.'
    },
    {
      id: 'mc-s2-q36',
      question: 'A $100 \\text{ mL}$ solution of $0.1 \\text{ N } I_2$ requires how many grams of $Na_2S_2O_3 \\cdot 5H_2O$ (Molar mass = 248) for complete reaction?',
      options: ['$2.48 \\text{ g}$', '$1.24 \\text{ g}$', '$4.96 \\text{ g}$', '$0.248 \\text{ g}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\neq $I_2 = 100 \\times 0.1 = 10$ meq. $10$ meq hypo = $10$ mmol = $0.01$ mol. Mass = $0.01 \\times 248 = 2.48\\text{g}$.'
    },
    {
      id: 'mc-s2-q37',
      question: 'The equivalent weight of $H_3PO_4$ in the reaction: $H_3PO_4 + 2NaOH \\to Na_2HPO_4 + 2H_2O$ is (Molar mass = M):',
      options: ['$M$', '$M/2$', '$M/3$', '$2M$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nn-factor is the number of $H^+$ replaced, which is 2 here. $E = M/2$.'
    },
    {
      id: 'mc-s2-q38',
      question: 'What is the molality of pure liquid water? (Density = $1 \\text{ g/mL}$)',
      options: ['$18 \\text{ m}$', '$55.5 \\text{ m}$', '$100 \\text{ m}$', 'Undefined'],
      answer: 3,
      explanation: '**Step-by-step Solution:**\nMolality is moles of solute per kg of solvent. In pure liquid water, there is no solute.'
    },
    {
      id: 'mc-s2-q39',
      question: '2 moles of an ideal gas A and 3 moles of ideal gas B are mixed. If molecular weight of A is 20 and B is 40, the vapour density of the mixture is:',
      options: ['$16$', '$32$', '$30$', '$64$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$M_{avg} = (2 \\times 20 + 3 \\times 40)/5 = 32$. $VD = 32/2 = 16$.'
    },
    {
      id: 'mc-s2-q40',
      question: 'Determine the n-factor of $FeS_2$ in the reaction where it oxidizes completely to $Fe_2O_3$ and $SO_2$.',
      options: ['11', '15', '10', '1'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$Fe^{2+} \\to Fe^{3+} + 1e^-$ and $2S^{-1} \\to 2S^{+4} + 10e^-$. Total shift = $1 + 10 = 11$.'
    },
    {
      id: 'mc-s2-q41',
      question: 'A compound has the empirical formula $CH_2O$. Its vapour density is 45. What is its molecular formula?',
      options: ['$C_2H_4O_2$', '$C_3H_6O_3$', '$CH_2O$', '$C_4H_8O_4$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n$M = 2 \\times 45 = 90$. Empirical weight = 30. $n = 90/30 = 3$. Formula: $C_3H_6O_3$.'
    },
    {
      id: 'mc-s2-q42',
      question: 'The percentage of an element M is 53% in its oxide of formula $M_2O_3$. Its atomic mass is about:',
      options: ['27', '45', '56', '9'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$2M/(2M+48) = 0.53 \\implies 2M = 1.06M + 25.44 \\implies 0.94M = 25.44 \\implies M \\approx 27$.'
    },
    {
      id: 'mc-s2-q43',
      question: 'Specific heat of a metal is $0.16 \\text{ cal/g}^\\circ\\text{C}$. Its equivalent weight is 12. What is its exact atomic weight?',
      options: ['24', '40', '36', '48'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nApprox $MW = 6.4/0.16 = 40$. Valency $= 40/12 \\approx 3$. Exact $MW = 12 \\times 3 = 36$.'
    },
    {
      id: 'mc-s2-q44',
      question: 'The specific gravity of a solution is 1.8. It contains 80% (w/w) $H_2SO_4$. The volume of this solution required to make 2 L of $0.2 \\text{ M } H_2SO_4$ is:',
      options: ['$27.2 \\text{ mL}$', '$25 \\text{ mL}$', '$54 \\text{ mL}$', '$13.6 \\text{ mL}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$M = (10 \\times 80 \\times 1.8)/98 = 14.69 \\text{ M}$. $14.69 \\times V = 0.2 \\times 2000 \\implies V = 27.2\\text{mL}$.'
    },
    {
      id: 'mc-s2-q45',
      question: '$BaCl_2$ and $Na_2SO_4$ react to form $BaSO_4$. If $0.5 \\text{ mole}$ of $BaCl_2$ and $0.2 \\text{ mole}$ of $Na_2SO_4$ are mixed, how many moles of $BaSO_4$ are precipitated?',
      options: ['0.5', '0.2', '0.7', '0.3'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nStoichiometry 1:1. Sulfate is limiting (0.2 mol), so 0.2 mol precipitate forms.'
    },
    {
      id: 'mc-s2-q46',
      question: 'Determine the volume of $0.1 \\text{ M } KMnO_4$ needed to oxidize $100 \\text{ mL}$ of $0.1 \\text{ M } H_2O_2$ in an acidic medium.',
      options: ['$40 \\text{ mL}$', '$20 \\text{ mL}$', '$10 \\text{ mL}$', '$100 \\text{ mL}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$5 \\times 0.1 \\times V = 2 \\times 0.1 \\times 100 \\implies 0.5V = 20 \\implies V = 40\\text{mL}$.'
    },
    {
      id: 'mc-s2-q47',
      question: 'A 200 g sample of an unknown carbonate $MCO_3$ on heating gives 112 L of $CO_2$ gas at STP. The atomic weight of metal M is:',
      options: ['12', '24', '40', 'Unable to determine'],
      answer: 3,
      explanation: '**Step-by-step Solution:**\nMoles $CO_2 = 112/22.4 = 5$ mol. Molar mass $MCO_3 = 200/5 = 40$ g/mol. Since $CO_3$ weighs 60, this is impossible.'
    },
    {
      id: 'mc-s2-q48',
      question: 'If 1 L of $O_2$ gas weighs 1.43 g at STP, what is the weight of 1 L of $SO_2$ gas at STP?',
      options: ['2.86 g', '1.43 g', '0.715 g', '4.29 g'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nDensity $\\propto M$. $M_{SO_2}/M_{O_2} = 64/32 = 2$. So density $= 2 \\times 1.43 = 2.86\\text{g/L}$.'
    },
    {
      id: 'mc-s2-q49',
      question: 'What is the empirical formula of Vanadium oxide if 2.74 g of the metal oxide contains 1.53 g of metal? (Atomic weight of V = 51)',
      options: ['$V_2O_3$', '$V_2O_5$', '$VO_2$', '$V_2O_7$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nMoles V = $1.53/51 = 0.03$. Moles O = $1.21/16 = 0.075$. Ratio $1:2.5 = 2:5$.'
    },
    {
      id: 'mc-s2-q50',
      question: 'Which has the maximum number of molecules among the following?',
      options: ['$44 \\text{ g } CO_2$', '$48 \\text{ g } O_3$', '$8 \\text{ g } H_2$', '$64 \\text{ g } SO_2$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nMoles: $CO_2$=1, $O_3$=1, $H_2$=4, $SO_2$=1. $H_2$ has most moles.'
    }
  ]
};

export default quizSet;
