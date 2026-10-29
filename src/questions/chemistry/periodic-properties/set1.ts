import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set1',
  title: 'Periodic Properties - Set 1',
  chapterId: 'periodic-properties',
  subjectId: 'chemistry',
  questions: [
    {
      id: 'pp-s1-1',
      question: 'The IUPAC symbol for the element with atomic number 119 is:',
      options: ['Uue', 'Uun', 'Uuq', 'Uhe'],
      answer: 0,
      explanation: 'According to IUPAC nomenclature for $Z > 100$:\n\n$1 = un$\n$1 = un$\n$9 = enn$\n\nThus, 119 is ununennium, symbol **Uue**.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-2',
      question: 'The elements in which electrons are progressively filled in 4f-orbital are called:',
      options: ['Actinoids', 'Transition elements', 'Lanthanoids', 'Halogens'],
      answer: 2,
      explanation: 'The progressive filling of $4f$ orbitals occurs in the **Lanthanide series** ($Z = 58$ to $71$). Actinoids involve the $5f$ orbital.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-3',
      question: 'Which of the following orders of ionic radii is correctly represented?',
      options: ['$H^- > H^+ > H$', '$Na^+ > F^- > O^{2-}$', '$F^- > O^{2-} > Na^+$', '$O^{2-} > F^- > Na^+$'],
      answer: 3,
      explanation: 'For isoelectronic species ($O^{2-}, F^-, Na^+$ all have 10 electrons), ionic radius is inversely proportional to the nuclear charge ($Z$).\n\n$Z$ values are $O(8), F(9), Na(11)$. So radius order is $O^{2-} > F^- > Na^+$.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-4',
      question: 'The first ionization enthalpy of Nitrogen is greater than that of Oxygen because of:',
      options: ['Greater effective nuclear charge of Nitrogen', 'Stable half-filled 2p subshell of Nitrogen', 'Smaller size of Nitrogen', 'High electronegativity of Oxygen'],
      answer: 1,
      explanation: 'Nitrogen has the electronic configuration $1s^2 2s^2 2p^3$ (exactly **half-filled** 2p orbitals), giving it extra exchange energy and stability, making it harder to remove an electron compared to Oxygen ($2p^4$).',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-5',
      question: 'Among the halogens, the correct order of negative electron gain enthalpy is:',
      options: ['$F > Cl > Br > I$', '$Cl > F > Br > I$', '$I > Br > Cl > F$', '$Cl > Br > F > I$'],
      answer: 1,
      explanation: 'Normally, electron affinity decreases down a group.\n\nHowever, Fluorine has a very small $2p$ orbital, leading to strong interelectronic repulsions when an incoming electron is added.\n\nChlorine accommodates the electron more easily. Order: $Cl > F > Br > I$.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-6',
      question: 'Which of the following elements has the lowest first ionization enthalpy?',
      options: ['Alkali metals', 'Alkaline earth metals', 'Halogens', 'Noble gases'],
      answer: 0,
      explanation: 'Alkali metals ($ns^1$) have the largest atomic radii in their respective periods and readily lose their single valence electron to achieve a stable noble gas configuration. Hence, they have the lowest first IE.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-7',
      question: 'The property that decreases from top to bottom in a group and increases from left to right in a period is:',
      options: ['Atomic radius', 'Metallic character', 'Electronegativity', 'Screening effect'],
      answer: 2,
      explanation: 'Electronegativity increases left to right due to increasing effective nuclear charge and decreases top to bottom due to increasing atomic size and shielding.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-8',
      question: 'The element with the highest electronegativity on the Pauling scale is:',
      options: ['Chlorine', 'Oxygen', 'Nitrogen', 'Fluorine'],
      answer: 3,
      explanation: 'Fluorine is the most electronegative element in the periodic table, assigned a value of 4.0 on the Pauling scale.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-9',
      question: 'Identify the most acidic oxide among the following:',
      options: ['$Na_2O$', '$MgO$', '$Al_2O_3$', '$Cl_2O_7$'],
      answer: 3,
      explanation: 'Acidic character of oxides increases left to right across a period.\n\n$Na_2O$ is strongly basic, $Al_2O_3$ is amphoteric, and $Cl_2O_7$ is strongly acidic.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-10',
      question: 'The anomalous properties of the second period elements (Li, Be, B) are mainly due to:',
      options: ['Large size and low electronegativity', 'Small size, high electronegativity, and absence of d-orbitals', 'Presence of vacant d-orbitals', 'Low ionization enthalpy'],
      answer: 1,
      explanation: 'Elements of the second period lack $d$-orbitals, restricting their max covalency to 4. Their exceptionally small size and high electronegativity lead to high charge density.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-11',
      question: 'The diagonal relationship between Lithium and Magnesium is due to their similar:',
      options: ['Ionization enthalpies', 'Polarizing power (Charge/size ratio)', 'Electron affinities', 'Atomic masses'],
      answer: 1,
      explanation: 'Diagonal relationships exist because the charge-to-size ratio (polarizing power) remains almost constant between these diagonally placed elements.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-12',
      question: 'Due to d-block contraction (poor shielding of 3d electrons), the atomic radius of Gallium (Ga) is:',
      options: ['Much larger than Aluminum (Al)', 'Equal to Indium (In)', 'Slightly less than Aluminum (Al)', 'Larger than Thallium (Tl)'],
      answer: 2,
      explanation: 'Poor shielding of $3d$ electrons in Gallium increases the effective nuclear charge, pulling valence electrons closer.\n\n($Ga = 135$ pm, $Al = 143$ pm).',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-13',
      question: 'Which of the following sets represents a collection of isoelectronic species?',
      options: ['$K^+, Cl^-, Ca^{2+}, Sc^{3+}$', '$Ba^{2+}, Sr^{2+}, K^+, Ca^{2+}$', '$N^{3-}, O^{2-}, F^-, S^{2-}$', '$Li^+, Na^+, Mg^{2+}, Ca^{2+}$'],
      answer: 0,
      explanation: 'Isoelectronic species have the same number of electrons.\n\n$K^+ (18), Cl^- (18), Ca^{2+} (18), Sc^{3+} (18)$ all have 18 electrons.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-14',
      question: 'Successive ionization enthalpies of an element are 800, 2427, 3658, 25024, and 32824 kJ/mol. The element belongs to group:',
      options: ['1', '2', '3', '13'],
      answer: 2,
      explanation: 'The sudden jump between $IE_3$ (3658) and $IE_4$ (25024) indicates that the 4th electron is removed from a stable core. Thus, it has 3 valence electrons (Group 13 or 3).',
      difficulty: 'hard'
    },
    {
      id: 'pp-s1-15',
      question: 'The basic strength of the hydroxides of alkaline earth metals increases in the order:',
      options: ['$Be(OH)_2 < Mg(OH)_2 < Ca(OH)_2 < Ba(OH)_2$', '$Ba(OH)_2 < Ca(OH)_2 < Mg(OH)_2 < Be(OH)_2$', '$Mg(OH)_2 < Be(OH)_2 < Ca(OH)_2 < Ba(OH)_2$', '$Be(OH)_2 < Ca(OH)_2 < Mg(OH)_2 < Ba(OH)_2$'],
      answer: 0,
      explanation: 'Atomic size increases down the group, weakening the M-O bond and making it easier to release $OH^-$ ions.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-16',
      question: 'Which of the following is the correct order of second ionization enthalpy for C, N, O, and F?',
      options: ['$F > O > N > C$', '$O > F > N > C$', '$O > N > F > C$', '$N > O > F > C$'],
      answer: 1,
      explanation: '$O^+$ has a half-filled $2p^3$ configuration, which is exceptionally stable, making its second IE higher than that of $F^+$.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s1-17',
      question: 'The general outer electronic configuration of d-block elements is:',
      options: ['$(n-1)d^{1-10} ns^{1-2}$', '$(n-1)d^{1-10} ns^2$', '$nd^{1-10} ns^{0-2}$', '$(n-1)d^{1-10} ns^{0-2}$'],
      answer: 3,
      explanation: 'The configuration accounts for exceptions like Palladium ($5s^0$) and Copper ($4s^1$).',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-18',
      question: 'Gadolinium ($Z = 64$) has the electronic configuration $[Xe] 4f^7 5d^1 6s^2$. The $5d^1$ electron is present because:',
      options: ['The 5d subshell is lower in energy than 4f', 'It provides extra stability by making the 4f subshell exactly half-filled', 'The 6s subshell is completely filled', 'The f-block only allows a maximum of 6 electrons'],
      answer: 1,
      explanation: 'One electron shifts to $5d$ to maintain the highly stable exactly half-filled $4f^7$ configuration.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-19',
      question: "According to Mendeleev's periodic law, properties of elements are periodic functions of their:",
      options: ['Atomic number', 'Atomic volume', 'Atomic weight', 'Valence electrons'],
      answer: 2,
      explanation: "Mendeleev classified elements based on **Atomic Weight**. The Modern Law uses Atomic Number.",
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-20',
      question: 'The radius of a noble gas is expressed as its:',
      options: ['Covalent radius', 'Ionic radius', 'Metallic radius', 'van der Waals radius'],
      answer: 3,
      explanation: 'Noble gases do not form stable covalent bonds; their size is measured by the non-bonded distance (van der Waals radius).',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-21',
      question: 'Among $O, S, Se, Te$, the element with the lowest negative electron gain enthalpy is:',
      options: ['O', 'S', 'Se', 'Te'],
      answer: 0,
      explanation: "Oxygen has the least negative electron gain enthalpy in its group due to high electron-electron repulsion in its tiny $2p$ subshell.",
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-22',
      question: "The term 'Lanthanide contraction' refers to:",
      options: ['Decrease in density of lanthanides', 'Steady decrease in atomic and ionic radii of lanthanides', 'Decrease in oxidation state of lanthanides', 'Increase in basicity of lanthanide hydroxides'],
      answer: 1,
      explanation: 'It is the steady decrease in size from Lanthanum to Lutetium due to poor shielding by $4f$ electrons.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-23',
      question: 'An element has the configuration $[Ar] 4s^1 3d^5$. Its group and period numbers are:',
      options: ['Group 6, Period 4', 'Group 7, Period 4', 'Group 6, Period 3', 'Group 11, Period 4'],
      answer: 0,
      explanation: 'Highest $n=4$ (Period 4).\n\nValence electrons = $1 + 5 = 6$ (Group 6).\n\nThis is Chromium.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-24',
      question: 'In the Modern Periodic Table, the block of an element depends on:',
      options: ['The subshell receiving the last electron', 'Its atomic mass', 'Its principal quantum number', 'Its electronegativity'],
      answer: 0,
      explanation: 'Elements are classified into blocks based on which subshell receives the differentiating (last) electron.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-25',
      question: 'Which of the following oxides is strictly neutral?',
      options: ['$CO_2$', '$NO_2$', '$N_2O$', '$SO_2$'],
      answer: 2,
      explanation: '$CO, NO,$ and $N_2O$ are neutral non-metal oxides.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-26',
      question: 'The correct order of metallic character is:',
      options: ['$Si > P > S > Cl$', '$Na > Mg > Al > Si$', '$Cl > S > P > Si$', '$Al > Mg > Na > K$'],
      answer: 1,
      explanation: 'Metallic character decreases left to right as atoms hold valence electrons more tightly due to increasing nuclear charge.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-27',
      question: 'For a given principal quantum number $n$, the energy of subshells follows the order:',
      options: ['$s > p > d > f$', '$f > d > p > s$', '$s = p = d = f$', '$p > s > f > d$'],
      answer: 1,
      explanation: 'Due to penetration effects, the energy order is $s < p < d < f$. Higher energy subshells are further from the nucleus.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-28',
      question: 'An atom with the configuration $[Rn] 7s^2 5f^{14} 6d^1$ belongs to which block?',
      options: ['s-block', 'p-block', 'd-block', 'f-block'],
      answer: 2,
      explanation: 'The $5f$ is full. The differentiating electron enters $6d$. It is Lawrencium (d-block).',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-29',
      question: 'Which of the following is true for amphoteric character down a group?',
      options: ['It continuously increases', 'It continuously decreases', 'It remains constant', 'First increases then decreases'],
      answer: 1,
      explanation: 'Metallic character increases down a group, increasing basicity and decreasing amphoteric/acidic character.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-30',
      question: 'The highest oxidation state achieved in the periodic table is:',
      options: ['+7 by Manganese (Mn)', '+8 by Osmium (Os)', '+6 by Chromium (Cr)', '+9 by Iridium (Ir)'],
      answer: 1,
      explanation: 'Osmium ($Os$) and Ruthenium ($Ru$) exhibit +8 in oxides like $OsO_4$.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-31',
      question: 'According to the Allred-Rochow scale, electronegativity is related to:',
      options: ['Ionization Energy and Electron Affinity', 'Effective nuclear charge and covalent radius', 'Bond dissociation energy', 'Electron density'],
      answer: 1,
      explanation: 'Allred-Rochow scale:\n\n$EN = 0.359 \\frac{Z_{eff}}{r^2} + 0.744$.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s1-32',
      question: 'Among the alkali metal ions, the highest ionic mobility in aqueous solution is shown by:',
      options: ['$Li^+$', '$Na^+$', '$K^+$', '$Rb^+$'],
      answer: 3,
      explanation: '$Li^+$ is the smallest bare ion, highly hydrated, and thus the largest/slowest in water.\n\n$Rb^+$ is least hydrated and moves fastest.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-33',
      question: 'If the atomic number of an element is 118, it would be a:',
      options: ['Halogen', 'Alkali metal', 'Noble gas', 'Carbon family element'],
      answer: 2,
      explanation: 'Element 118 (Oganesson) completes the $7p^6$ configuration, placing it in the Noble Gas group.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-34',
      question: 'The correct order of electron gain enthalpy (negative sign) for chalcogens is:',
      options: ['$O > S > Se > Te$', '$S > Se > Te > O$', '$S > O > Se > Te$', '$Te > Se > S > O$'],
      answer: 1,
      explanation: 'Oxygen is anomalous due to small size. Order: $S > Se > Te > O$.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-35',
      question: 'Why do transition metals exhibit variable oxidation states?',
      options: ['Empty p-orbitals', 'Small energy difference between (n-1)d and ns', 'Large size', 'High electropositivity'],
      answer: 1,
      explanation: 'The energies of $(n-1)d$ and $ns$ are very close, allowing both to participate in bonding.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-36',
      question: 'The size of an isoelectronic cation is smaller than its parent atom because:',
      options: ['Fewer shells', 'Effective nuclear charge per electron increases', 'Screening increases', 'Neutrons are lost'],
      answer: 1,
      explanation: 'Protons stay the same but electrons decrease, increasing $Z_{eff}$ and pulling electrons closer.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-37',
      question: 'Which group of elements is known as the Chalcogens?',
      options: ['Group 15', 'Group 16', 'Group 17', 'Group 18'],
      answer: 1,
      explanation: 'Group 16 (O, S, Se, Te, Po) are ore-formers.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-38',
      question: 'The melting point of Group 1 metals (Alkali metals) from Li to Cs:',
      options: ['Increases steadily', 'Decreases steadily', 'Remains constant', 'First increases then decreases'],
      answer: 1,
      explanation: 'Metallic bonds weaken as atomic size increases, lowering melting points.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-39',
      question: 'The correct order of ionic radii for $Y^{3+}, La^{3+}, Eu^{3+}, Lu^{3+}$ is:',
      options: ['$La^{3+} > Eu^{3+} > Lu^{3+} > Y^{3+}$', '$Y^{3+} > La^{3+} > Eu^{3+} > Lu^{3+}$', '$Lu^{3+} > Eu^{3+} > La^{3+} > Y^{3+}$', '$La^{3+} > Y^{3+} > Eu^{3+} > Lu^{3+}$'],
      answer: 0,
      explanation: 'Due to lanthanide contraction, size decreases $La^{3+} > Eu^{3+} > Lu^{3+}$.\n\n$Y^{3+}$ is smallest due to being in the period above.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s1-40',
      question: 'In the periodic table, the element with the maximum electron affinity is:',
      options: ['Fluorine', 'Chlorine', 'Oxygen', 'Gold'],
      answer: 1,
      explanation: 'Chlorine is higher than Fluorine because $F$ has severe interelectronic repulsions due to small size.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-41',
      question: 'Which of the following is true for $IE_1$ and $IE_2$ of $Na$ and $Mg$?',
      options: ['$IE_1(Na) > IE_1(Mg)$ and $IE_2(Na) < IE_2(Mg)$', '$IE_1(Na) < IE_1(Mg)$ and $IE_2(Na) > IE_2(Mg)$', '$IE_1(Na) > IE_1(Mg)$ and $IE_2(Na) > IE_2(Mg)$', 'Both equal'],
      answer: 1,
      explanation: '$IE_1(Mg) > IE_1(Na)$ (stable $s^2$).\n\n$IE_2(Na) > IE_2(Mg)$ (removing from noble gas core $2p^6$).',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-42',
      question: 'Across a period in the d-block, atomic radii:',
      options: ['Decrease continuously', 'Increase continuously', 'Decrease initially, then stay constant, then increase slightly', 'Remain constant'],
      answer: 2,
      explanation: 'Shielding initially lags, then balances nuclear charge, then electron repulsions in filled shells cause a slight rise at the end.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-43',
      question: 'Which of the following elements exhibits the most pronounced Inert Pair Effect?',
      options: ['Aluminum (Al)', 'Gallium (Ga)', 'Thallium (Tl)', 'Indium (In)'],
      answer: 2,
      explanation: 'Inert pair effect is most prominent in heavy elements like Thallium, Lead, and Bismuth.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-44',
      question: 'The general electronic configuration of Lanthanides is:',
      options: ['$[Xe] 4f^{1-14} 5d^{0-1} 6s^2$', '$[Rn] 5f^{1-14} 6d^{0-1} 7s^2$', '$[Xe] 4f^{1-14} 5d^1 6s^2$', '$[Kr] 4d^{1-10} 5s^2$'],
      answer: 0,
      explanation: 'Configuration shows filling of $4f$ and occasional $5d^1$ for stability.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-45',
      question: 'Among the following oxides, which is the most basic?',
      options: ['$ZnO$', '$Al_2O_3$', '$Na_2O$', '$K_2O$'],
      answer: 3,
      explanation: '$K_2O$ is most basic because $K$ is more electropositive than $Na$, and basicity increases down a group.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-46',
      question: 'Which periodic property does NOT have an assigned unit?',
      options: ['Ionization Enthalpy', 'Electron Gain Enthalpy', 'Electronegativity', 'Atomic Radius'],
      answer: 2,
      explanation: 'Electronegativity is relative (dimensionless).',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-47',
      question: 'The pair of elements that do NOT exhibit a diagonal relationship is:',
      options: ['Li and Mg', 'Be and Al', 'B and Si', 'C and P'],
      answer: 3,
      explanation: 'Li-Mg, Be-Al, and B-Si pairs are diagonal. C-P is not.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s1-48',
      question: 'Arrange N, O, P, S in increasing order of first ionization energies.',
      options: ['$P < S < O < N$', '$S < P < O < N$', '$S < P < N < O$', '$P < S < N < O$'],
      answer: 1,
      explanation: 'N > O (half-filled). P > S (half-filled).\n\n$N$ and $O$ are higher than $P$ and $S$.\n\nOrder: $S < P < O < N$.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s1-49',
      question: "Which is true about screening constant ($\\sigma$) from Slater's rules?",
      options: ['Highest for s-electrons', 'Highest for f-electrons', 'Depends only on n', 'Decreases as Z increases'],
      answer: 0,
      explanation: '$s$-electrons penetrate closest and screen outer electrons best.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s1-50',
      question: 'The basic structural unit of silicates is:',
      options: ['$SiO_3^{2-}$', '$SiO_4^{4-}$', '$Si_2O_7^{6-}$', '$SiO_2$'],
      answer: 1,
      explanation: 'All silicates are built from the $SiO_4^{4-}$ tetrahedron.',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
