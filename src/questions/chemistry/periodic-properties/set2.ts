import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set2',
  title: 'Periodic Properties - Set 2',
  chapterId: 'periodic-properties',
  subjectId: 'chemistry',
  questions: [
    {
      id: 'pp-s2-1',
      question: 'The correct order of second ionization enthalpy ($IE_2$) for the elements $V, Cr, Mn$, and $Fe$ is:',
      options: ['$Cr > Mn > V > Fe$', '$Cr > Fe > Mn > V$', '$Mn > Cr > Fe > V$', '$Fe > Mn > Cr > V$'],
      answer: 0,
      explanation: '**Expert Solution:**\nElectronic configurations:\n\n- $V: [Ar] 3d^3 4s^2 \\to V^+: [Ar] 3d^3 4s^1$\n- $Cr: [Ar] 3d^5 4s^1 \\to Cr^+: [Ar] 3d^5$\n- $Mn: [Ar] 3d^5 4s^2 \\to Mn^+: [Ar] 3d^5 4s^1$\n- $Fe: [Ar] 3d^6 4s^2 \\to Fe^+: [Ar] 3d^6 4s^1$\n\nTo find $IE_2$, we remove an electron from the $+1$ cation. $Cr^+$ has a highly stable exactly **half-filled** $d^5$ configuration, making its $IE_2$ exceptionally high. Therefore, Cr has the highest $IE_2$ among these. The order is $Cr > Mn > V > Fe$.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-2',
      question: 'Which of the following oxides is expected to exhibit paramagnetic behavior?',
      options: ['$CO_2$', '$ClO_2$', '$SO_2$', '$SiO_2$'],
      answer: 1,
      explanation: '**Expert Solution:**\n$ClO_2$ (Chlorine dioxide) is an **odd-electron molecule**. Chlorine has 7 valence electrons and two Oxygens bring $2 \\times 6 = 12$. Total valence electrons = 19 (an odd number). Any molecule with an odd number of electrons must have at least one unpaired electron, making it paramagnetic.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-3',
      question: 'Identify the element that has the highest first ionization enthalpy.',
      options: ['Helium (He)', 'Neon (Ne)', 'Fluorine (F)', 'Nitrogen (N)'],
      answer: 0,
      explanation: '**Expert Solution:**\nIonization energy generally increases across a period and decreases down a group. Helium is at the top right of the periodic table, having a completely filled $1s^2$ shell very close to the nucleus without any inner shielding electrons. Thus, Helium has the highest first ionization enthalpy of all elements.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-4',
      question: 'The $IE_1$ and $IE_2$ of four elements are given below (in kJ/mol). Which element is most likely to be an alkaline earth metal?',
      options: ['$IE_1=520, IE_2=7300$', '$IE_1=419, IE_2=3051$', '$IE_1=590, IE_2=1145$', '$IE_1=2372, IE_2=5251$'],
      answer: 2,
      explanation: '**Expert Solution:**\nAn alkaline earth metal (Group 2) has 2 valence electrons ($ns^2$). Therefore, it will easily lose two electrons, meaning $IE_1$ and $IE_2$ will be relatively low. The major jump will occur at $IE_3$. Looking at the options, $590 \\to 1145$ is a normal progression. Options 1 and 2 show a massive jump after $IE_1$, typical of Group 1 metals. Option 4 is extremely high, typical of a noble gas.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-5',
      question: 'Among $Al_2O_3, SiO_2, P_2O_3$, and $SO_2$, the correct order of acidic strength is:',
      options: ['$SO_2 < P_2O_3 < SiO_2 < Al_2O_3$', '$Al_2O_3 < SiO_2 < P_2O_3 < SO_2$', '$Al_2O_3 < P_2O_3 < SiO_2 < SO_2$', '$SiO_2 < SO_2 < Al_2O_3 < P_2O_3$'],
      answer: 1,
      explanation: '**Expert Solution:**\nAs we move across a period from left to right ($Al \\to Si \\to P \\to S$), the non-metallic character increases, which increases the electronegativity of the central atom. This leads to a continuous increase in the acidic character of their oxides. $Al_2O_3$ is amphoteric, while $SO_2$ is strongly acidic.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-6',
      question: 'Which of the following properties exhibits a strict, exception-less increase across a period from left to right?',
      options: ['Ionization Enthalpy', 'Electron Gain Enthalpy', 'Effective Nuclear Charge ($Z_{eff}$)', 'Atomic Radius'],
      answer: 2,
      explanation: '**Expert Solution:**\n- Ionization enthalpy has exceptions (e.g., Be > B, N > O).\n- Electron gain enthalpy has exceptions (Noble gases are positive).\n- Atomic radius decreases, but noble gases have large van der Waals radii.\n- **Effective Nuclear Charge ($Z_{eff}$)** increases continuously and without exception as protons are added to the nucleus but electrons are added to the same shell (where they shield each other poorly).',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-7',
      question: 'The correct order of ionic mobility in aqueous solution for the alkali metal ions is:',
      options: ['$Li^+ > Na^+ > K^+ > Rb^+$', '$Rb^+ > K^+ > Na^+ > Li^+$', '$Na^+ > K^+ > Rb^+ > Li^+$', '$Li^+ > Rb^+ > K^+ > Na^+$'],
      answer: 1,
      explanation: '**Expert Solution:**\nIn aqueous solution, the smallest bare ion ($Li^+$) has the highest charge density. This intensely attracts water molecules, leading to the largest **hydrated radius** ($Li^+(aq)$). A larger hydrated radius creates more drag/friction, resulting in the lowest ionic mobility. Thus, mobility follows the order of bare ionic size reversed: $Rb^+ > K^+ > Na^+ > Li^+$.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-8',
      question: 'The IUPAC name for the element with atomic number 106 is:',
      options: ['Unnilhexium', 'Unnilpentium', 'Ununhexium', 'Unniloctium'],
      answer: 0,
      explanation: '**Expert Solution:**\nFollowing IUPAC nomenclature for $Z > 100$:\n\n- $1 = un$\n- $0 = nil$\n- $6 = hex$\n- Ending = $ium$\n\nName: **Un-nil-hex-ium**.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s2-9',
      question: 'Which of the following sets contains only amphoteric oxides?',
      options: ['$ZnO, Al_2O_3, PbO, SnO_2$', '$CO, NO, N_2O, H_2O$', '$Na_2O, K_2O, BaO, CaO$', '$SO_2, Cl_2O_7, P_4O_{10}, NO_2$'],
      answer: 0,
      explanation: '**Expert Solution:**\n**Amphoteric oxides** can react with both acids and bases. Common examples include oxides of Zn, Al, Pb, Sn, Be, and Ga ($ZnO, Al_2O_3, PbO, SnO_2$). Set 2 contains neutral oxides. Set 3 contains basic oxides. Set 4 contains acidic oxides.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-10',
      question: 'Considering the diagonal relationship, Beryllium (Be) shares maximum similarities with:',
      options: ['Magnesium (Mg)', 'Boron (B)', 'Aluminum (Al)', 'Silicon (Si)'],
      answer: 2,
      explanation: '**Expert Solution:**\nThe diagonal relationship occurs due to similar **polarizing power** ($Charge / Size$ ratio). Be (Period 2, Group 2) is diagonally related to Al (Period 3, Group 13). Both form covalent compounds, possess amphoteric oxides ($BeO, Al_2O_3$), and their carbides yield methane on hydrolysis.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-11',
      question: 'The phenomenon of "Lanthanide Contraction" is primarily responsible for:',
      options: ['The unusually high density of alkali metals', 'The similar atomic radii of Zr (4d) and Hf (5d)', 'The exception in $IE_1$ between N and O', 'The high electronegativity of Halogens'],
      answer: 1,
      explanation: '**Expert Solution:**\nLanthanide contraction is the poor shielding effect of $4f$ electrons. As a result, the 5d series elements (like Hf, Ta, W) experience a higher effective nuclear charge, pulling their electrons closer. This perfectly cancels out the expected size increase from adding a new shell, making their radii nearly identical to the 4d elements above them (Zr, Nb, Mo).',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-12',
      question: 'What is the correct order of the first electron affinity for the oxygen group (Group 16)?',
      options: ['$O > S > Se > Te$', '$S > Se > Te > O$', '$S > O > Se > Te$', '$Te > Se > S > O$'],
      answer: 1,
      explanation: '**Expert Solution:**\nElectron affinity (negative electron gain enthalpy) generally decreases down a group. However, Oxygen is an anomaly; its extremely small size causes intense electron-electron repulsion when an incoming electron is added, making its EA the least negative in the entire group. Therefore, $S$ has the highest EA, and $O$ has the lowest: $S > Se > Te > O$.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-13',
      question: 'Among $O^{2-}, F^-, Na^+, Mg^{2+}$, the species with the lowest ionization energy is:',
      options: ['$Mg^{2+}$', '$Na^+$', '$F^-$', '$O^{2-}$'],
      answer: 3,
      explanation: '**Expert Solution:**\nThese are isoelectronic species (all have 10 electrons). The species with the lowest nuclear charge (fewest protons) will hold its electrons the most loosely. Oxygen has only 8 protons holding 10 electrons, making it the easiest to remove an electron from. Thus, $O^{2-}$ has the lowest IE.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-14',
      question: 'The "Inert Pair Effect" causes which of the following oxidation states to be the most stable for Bismuth (Bi)?',
      options: ['+5', '+3', '+1', '-3'],
      answer: 1,
      explanation: '**Expert Solution:**\nBismuth is in Group 15 (valence configuration $6s^2 6p^3$). Due to the poor shielding of the inner $4f$ and $5d$ electrons, the $6s^2$ electrons are strongly attracted to the nucleus and do not readily participate in bonding (**Inert Pair Effect**). Thus, losing only the three $6p$ electrons to form the $+3$ state is much more stable than the $+5$ state.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-15',
      question: 'Arrange the following in decreasing order of van der Waals radius: $Cl, H, O, N$.',
      options: ['$Cl > N > O > H$', '$Cl > O > N > H$', '$N > O > Cl > H$', '$H > O > N > Cl$'],
      answer: 0,
      explanation: '**Expert Solution:**\nvan der Waals radius generally tracks with overall atomic size. Chlorine is in Period 3 and is much larger than the Period 2 elements. Between Nitrogen and Oxygen (Period 2), size decreases left to right, so $N > O$. Hydrogen is the smallest atom. Thus: **$Cl > N > O > H$**.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-16',
      question: 'Which of the following graphs correctly represents the variation of electronegativity with the percentage s-character in hybridized orbitals?',
      options: ['Exponential decrease', 'Linear increase', 'Parabolic decrease', 'Remains constant'],
      answer: 1,
      explanation: '**Expert Solution:**\n$s$-orbitals are closer to the nucleus than $p$-orbitals. Therefore, an orbital with a higher percentage of $s$-character ($sp = 50\\%$, $sp^2 = 33.3\\%$, $sp^3 = 25\\%$) holds bonding electrons more tightly. Electronegativity increases linearly with $s$-character ($sp > sp^2 > sp^3$).',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-17',
      question: 'The hydration enthalpy of alkaline earth metal ions decreases in the order:',
      options: ['$Be^{2+} > Mg^{2+} > Ca^{2+} > Sr^{2+} > Ba^{2+}$', '$Ba^{2+} > Sr^{2+} > Ca^{2+} > Mg^{2+} > Be^{2+}$', '$Mg^{2+} > Be^{2+} > Ca^{2+} > Ba^{2+} > Sr^{2+}$', '$Ca^{2+} > Mg^{2+} > Be^{2+} > Sr^{2+} > Ba^{2+}$'],
      answer: 0,
      explanation: '**Expert Solution:**\nHydration enthalpy depends on the charge-to-size ratio (charge density) of the ion. Since all these ions have a $+2$ charge, the hydration enthalpy is inversely proportional to their ionic radius. $Be^{2+}$ is the smallest and therefore has the highest hydration enthalpy.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-18',
      question: 'Which of the following species has the highest paramagnetism?',
      options: ['$Zn^{2+}$', '$Cu^+$', '$Mn^{2+}$', '$Fe^{2+}$'],
      answer: 2,
      explanation: '**Expert Solution:**\nParamagnetism is proportional to the number of unpaired electrons.\n\n- $Zn^{2+} ([Ar] 3d^{10})$ = 0 unpaired\n- $Cu^+ ([Ar] 3d^{10})$ = 0 unpaired\n- $Fe^{2+} ([Ar] 3d^6)$ = 4 unpaired\n- $Mn^{2+} ([Ar] 3d^5)$ = 5 unpaired\n\nWith 5 unpaired electrons, $Mn^{2+}$ exhibits the maximum paramagnetism.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-19',
      question: 'The correct order of basic strength of the following oxides is:',
      options: ['$K_2O > CaO > MgO > Al_2O_3$', '$Al_2O_3 > MgO > CaO > K_2O$', '$CaO > K_2O > MgO > Al_2O_3$', '$K_2O > MgO > CaO > Al_2O_3$'],
      answer: 0,
      explanation: '**Expert Solution:**\nBasic character of oxides decreases across a period (left to right) and increases down a group. Potassium is a Group 1 metal (most basic), Ca is below Mg in Group 2 (so Ca > Mg), and Al is in Group 13 (amphoteric). Thus: **$K_2O > CaO > MgO > Al_2O_3$**.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-20',
      question: 'Which of the following statements regarding the Allred-Rochow electronegativity scale is true?',
      options: ['It is based on bond dissociation energies.', 'It is the arithmetic mean of IE and EA.', 'It calculates the electrostatic force exerted by the effective nuclear charge on valence electrons.', 'It is an arbitrary scale assigning 4.0 to Fluorine without mathematical basis.'],
      answer: 2,
      explanation: '**Expert Solution:**\n- Pauling scale is based on bond dissociation energies.\n- Mulliken scale is the average of IE and EA.\n- **Allred-Rochow scale** is physically grounded in Coulomb\'s law, measuring the electrostatic force: $EN = 0.359 \\frac{Z_{eff}}{r^2} + 0.744$.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-21',
      question: 'Which transition metal series exhibits the highest degree of variation in oxidation states?',
      options: ['3d series', '4d series', '5d series', 'Actinides'],
      answer: 0,
      explanation: '**Expert Solution:**\nWhile actinides also show wide variations, among the standard transition metals, the **3d series** (specifically near the middle, like Manganese showing $+2$ to $+7$) exhibits the most classic and widely studied variation in stable, diverse oxidation states due to the very close energy levels of the $3d$ and $4s$ subshells.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-22',
      question: 'The exact position of Hydrogen in the periodic table is debated because it resembles:',
      options: ['Alkali metals and Alkaline earth metals', 'Alkali metals and Halogens', 'Halogens and Noble gases', 'Chalcogens and Halogens'],
      answer: 1,
      explanation: '**Expert Solution:**\nHydrogen resembles **Alkali metals** (it has an $ns^1$ configuration and can lose 1 electron to form $H^+$). It also heavily resembles **Halogens** (it is a diatomic gas, needs only 1 electron to achieve a noble gas configuration, and can form $H^-$ hydrides).',
      difficulty: 'easy'
    },
    {
      id: 'pp-s2-23',
      question: "An element 'X' belongs to the 4th period and 15th group. Its electronic configuration is:",
      options: ['$[Ar] 3d^{10} 4s^2 4p^3$', '$[Ar] 4s^2 4p^3$', '$[Kr] 4d^{10} 5s^2 5p^3$', '$[Ar] 3d^5 4s^2 4p^3$'],
      answer: 0,
      explanation: '**Expert Solution:**\nPeriod 4 means the outermost shell is $n=4$. Group 15 means it has 5 valence electrons ($ns^2 np^3$). To reach the $4p$ subshell, the $3d$ subshell must be completely filled. Thus, the configuration is **$[Ar] 3d^{10} 4s^2 4p^3$** (Arsenic).',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-24',
      question: 'In the extraction of Aluminum by the Hall-Héroult process, what is added to alumina to increase its conductivity and lower its melting point?',
      options: ['Fluorspar and Cryolite', 'Bauxite and Coke', 'Limestone and Silica', 'Calcium Silicate'],
      answer: 0,
      explanation: '**Expert Solution:**\nPure alumina ($Al_2O_3$) has a very high melting point ($2050^\\circ C$) and is a poor conductor of electricity. Adding **Cryolite** ($Na_3AlF_6$) and **Fluorspar** ($CaF_2$) drastically lowers the melting point to about $900^\\circ C$ and makes the melt highly conductive.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-25',
      question: 'Which element among the following has the highest number of isotopes?',
      options: ['Oxygen', 'Carbon', 'Tin', 'Polonium'],
      answer: 2,
      explanation: '**Expert Solution:**\n**Tin (Sn)** possesses the highest number of stable isotopes of any element in the periodic table, having 10 stable isotopes. This is related to its "magic number" of protons ($Z = 50$).',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-26',
      question: 'The true order of the sizes of the iodine species is:',
      options: ['$I > I^+ > I^-$', '$I^- > I > I^+$', '$I^+ > I > I^-$', '$I^- > I^+ > I$'],
      answer: 1,
      explanation: '**Expert Solution:**\nAdding an electron increases interelectronic repulsion and shielding, swelling the electron cloud ($I^-$ is largest). Removing an electron increases the effective nuclear charge, shrinking the cloud ($I^+$ is smallest). Thus, **$I^- > I > I^+$**.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s2-27',
      question: 'The most basic oxide among the Lanthanides is:',
      options: ['$Lu_2O_3$', '$Gd_2O_3$', '$La_2O_3$', '$Ce_2O_3$'],
      answer: 2,
      explanation: '**Expert Solution:**\nDue to the Lanthanide contraction, atomic and ionic sizes decrease steadily from La to Lu. As the $Ln^{3+}$ ion gets smaller, the covalent character of the $Ln-O$ bond increases, making it harder to release $OH^-$ ions in water. Thus, basicity strictly decreases from $La(OH)_3$ down to $Lu(OH)_3$. **Lanthanum ($La_2O_3$)** is the most basic.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-28',
      question: 'Which block of the periodic table contains exclusively metallic elements?',
      options: ['s-block', 'p-block', 'd-block', 'Both s and d block'],
      answer: 2,
      explanation: '**Expert Solution:**\nThe $p$-block contains metals, metalloids, and non-metals. The $s$-block contains metals, but also Hydrogen (a non-metal). The **d-block** and **f-block** contain exclusively metallic elements.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-29',
      question: 'Identify the non-metal that is a liquid at standard room temperature.',
      options: ['Mercury', 'Bromine', 'Iodine', 'Gallium'],
      answer: 1,
      explanation: '**Expert Solution:**\nMercury and Gallium are metals. Iodine is a solid non-metal. **Bromine ($Br_2$)** is the only non-metal that is a liquid at standard room temperature and pressure.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s2-30',
      question: 'The highest electron affinity (most negative) among the Group 15 elements belongs to:',
      options: ['Nitrogen (N)', 'Phosphorus (P)', 'Arsenic (As)', 'Bismuth (Bi)'],
      answer: 1,
      explanation: '**Expert Solution:**\nNitrogen has a stable half-filled $2p^3$ configuration and a tiny size, giving it a near-zero or slightly positive electron affinity. **Phosphorus** is larger, accommodating the incoming electron more easily without disrupting half-filled stability as harshly, giving it the highest negative electron gain enthalpy in Group 15.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-31',
      question: 'The melting point of Group 14 elements initially increases from Carbon to Silicon, but then dramatically decreases. Why?',
      options: ['Transition from giant covalent networks to metallic bonding', 'Increase in the inert pair effect', 'Decrease in atomic size', 'Decrease in effective nuclear charge'],
      answer: 0,
      explanation: '**Expert Solution:**\nCarbon (Diamond) and Silicon form incredibly strong **giant covalent network** lattices, resulting in massive melting points. However, as we move to Tin and Lead, the bonding becomes purely **metallic**, which is significantly weaker than a covalent network, causing a sharp drop in melting point.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-32',
      question: 'The process of heating a sulfide ore strongly in the presence of excess air is known as:',
      options: ['Calcination', 'Roasting', 'Smelting', 'Refining'],
      answer: 1,
      explanation: '**Expert Solution:**\n**Roasting** is specifically used for sulfide ores to convert them to oxides (e.g., $2ZnS + 3O_2 \\to 2ZnO + 2SO_2$). Calcination is heating in the absence of air, usually for carbonate or hydrated ores.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-33',
      question: 'Which of the following cations is expected to be colorless in aqueous solution?',
      options: ['$Cu^{2+}$', '$Ti^{3+}$', '$Sc^{3+}$', '$V^{3+}$'],
      answer: 2,
      explanation: '**Expert Solution:**\nColor in transition metal ions is typically caused by $d-d$ electron transitions. $Sc$ has the configuration $[Ar] 3d^1 4s^2$. The $Sc^{3+}$ ion loses all 3 valence electrons, leaving a **$3d^0$** configuration. With no $d$-electrons available for transition, it is completely colorless.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-34',
      question: 'The correct order of penetrating power of atomic orbitals for a given principal quantum number $n$ is:',
      options: ['$s > p > d > f$', '$f > d > p > s$', '$p > s > d > f$', '$s = p = d = f$'],
      answer: 0,
      explanation: '**Expert Solution:**\nPenetration describes how close an electron can get to the nucleus. Because $s$-orbitals have a probability density maximum exactly at the nucleus, they penetrate the best. The order of penetrating power is strictly **$s > p > d > f$**.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-35',
      question: 'Among the following, the isoelectronic pair is:',
      options: ['$CO$ and $NO^+$', '$O_2$ and $N_2$', '$CN^-$ and $O_2^+$', '$CO_2$ and $SO_2$'],
      answer: 0,
      explanation: '**Expert Solution:**\nCalculate total electrons:\n\n- $CO$: 6 (C) + 8 (O) = 14 electrons.\n- $NO^+$: 7 (N) + 8 (O) - 1 (charge) = 14 electrons.\n\nThey are isoelectronic.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-36',
      question: 'Elements of Group 16 are generally called:',
      options: ['Pnictogens', 'Chalcogens', 'Halogens', 'Noble gases'],
      answer: 1,
      explanation: '**Expert Solution:**\nGroup 16 elements (O, S, Se, Te, Po) are called **Chalcogens**, derived from Greek words meaning "ore-forming", because most metal ores are oxides or sulfides. (Group 15 are Pnictogens).',
      difficulty: 'easy'
    },
    {
      id: 'pp-s2-37',
      question: 'Which of the following elements requires the least energy to remove an electron?',
      options: ['Fluorine', 'Cesium', 'Francium', 'Helium'],
      answer: 2,
      explanation: '**Expert Solution:**\nIonization energy decreases down a group. Alkali metals have the lowest IE. **Francium** is at the very bottom of the alkali metal group, and Therefore its valence electron is furthest from the nucleus and most shielded, requiring the absolute least energy to remove.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-38',
      question: 'What happens to the acidic character of hydrides of Group 17 ($HF, HCl, HBr, HI$) as we move down the group?',
      options: ['Increases', 'Decreases', 'Remains same', 'First increases then decreases'],
      answer: 0,
      explanation: '**Expert Solution:**\nAcidic strength depends on how easily the H-X bond breaks to release $H^+$. As we move down the group, the size of the halogen atom increases drastically, making the H-X bond length longer and the bond dissociation energy weaker. Therefore, **$HI$** breaks easiest and is the strongest acid: **$HF < HCl < HBr < HI$**.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-39',
      question: 'The most common oxidation states of the Lanthanide elements is:',
      options: ['+2', '+3', '+4', '+6'],
      answer: 1,
      explanation: '**Expert Solution:**\nWhile some lanthanides can show $+2$ (like Eu) or $+4$ (like Ce) to achieve stable $f^0, f^7,$ or $f^{14}$ configurations, the dominant, most stable, and universal oxidation state for the entire Lanthanide series is **$+3$**.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s2-40',
      question: "Which pair of elements below exhibits an 'anomalous' electronic configuration compared to the expected Aufbau principle?",
      options: ['Cu and Zn', 'Cr and Cu', 'Fe and Co', 'Ti and V'],
      answer: 1,
      explanation: '**Expert Solution:**\n**Chromium ($Z=24$)** is expected to be $4s^2 3d^4$, but is actually $4s^1 3d^5$ (half-filled stability). **Copper ($Z=29$)** is expected to be $4s^2 3d^9$, but is actually $4s^1 3d^{10}$ (fully-filled stability).',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-41',
      question: 'The property that generally differentiates metals from non-metals is:',
      options: ['Metals have high ionization enthalpies', 'Metals are good oxidizing agents', 'Metals form basic oxides, non-metals form acidic oxides', 'Metals have high electronegativity'],
      answer: 2,
      explanation: '**Expert Solution:**\nMetals are electropositive, meaning they easily lose electrons (low IE, low EN). A key chemical differentiator is that **metal oxides react with water to form bases** (e.g., $Na_2O \\to NaOH$), whereas non-metal oxides form acids.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s2-42',
      question: 'The element with atomic number 112 belongs to which group?',
      options: ['Group 12', 'Group 14', 'Group 16', 'Group 18'],
      answer: 0,
      explanation: '**Expert Solution:**\nRadon (Rn) is the noble gas closing Period 6 with $Z = 86$. Period 7 adds: 2 $s$-electrons, 14 $f$-electrons, and 10 $d$-electrons. $86 + 2 + 14 + 10 = 112$. The 112th element (**Copernicium, Cn**) completes the $6d$ subshell, placing it exactly under Zinc, Cadmium, and Mercury in **Group 12**.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-43',
      question: 'Which of the following sequences represents the correct order of increasing basicity?',
      options: ['$Al_2O_3 < MgO < Na_2O$', '$Na_2O < MgO < Al_2O_3$', '$MgO < Al_2O_3 < Na_2O$', '$Al_2O_3 < Na_2O < MgO$'],
      answer: 0,
      explanation: '**Expert Solution:**\nBasicity of oxides depends on the metallic character of the central atom. Metallic character increases to the left of a period. Aluminum is amphoteric, Magnesium is basic, and Sodium is highly basic. Therefore: **$Al_2O_3 < MgO < Na_2O$**.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-44',
      question: 'The shielding effect of inner electrons follows the order:',
      options: ['$s > p > d > f$', '$f > d > p > s$', '$p > s > d > f$', '$s = p = d = f$'],
      answer: 0,
      explanation: '**Expert Solution:**\nDue to their spherical shape and high penetration near the nucleus, $s$-orbitals shield outer electrons extremely well. In contrast, the highly diffused shapes of $d$ and $f$ orbitals leave "gaps". Thus, shielding power is **$s > p > d > f$**.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-45',
      question: 'Among the elements of the second period (Li to Ne), the element with the highest electron affinity is:',
      options: ['Fluorine', 'Neon', 'Oxygen', 'Lithium'],
      answer: 0,
      explanation: '**Expert Solution:**\nNeon has a stable octet, so its EA is positive (endothermic). Among the rest, the tendency to gain an electron increases to the right. **Fluorine** is exactly one electron away from an octet and has the highest effective nuclear charge in the period, giving it the highest EA.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-46',
      question: 'Which of the following d-block elements does NOT exhibit variable oxidation states?',
      options: ['Scandium (Sc)', 'Iron (Fe)', 'Copper (Cu)', 'Manganese (Mn)'],
      answer: 0,
      explanation: '**Expert Solution:**\n**Scandium** has the configuration $[Ar] 3d^1 4s^2$. It invariably loses all three of its valence electrons to form the highly stable, noble-gas-like $Sc^{3+}$ ion. It does not exhibit any other stable oxidation states.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s2-47',
      question: 'The effective nuclear charge ($Z_{eff}$) acting on the valence electrons of an atom:',
      options: ['Is identical to the atomic number (Z)', 'Is less than Z due to the shielding effect of inner electrons', 'Is greater than Z due to penetration', 'Depends solely on the number of neutrons'],
      answer: 1,
      explanation: '**Expert Solution:**\nThe actual pull felt by a valence electron is reduced by the repulsive forces of the negatively charged inner electrons standing between it and the nucleus. Thus, **$Z_{eff} = Z - \\sigma$**, where $\\sigma$ is the shielding constant.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s2-48',
      question: 'The most stable oxidation state of Thallium (Tl) is +1, not +3. This is best explained by:',
      options: ['The Lanthanide Contraction', 'The Inert Pair Effect', 'High Electronegativity', 'Diagonal Relationship'],
      answer: 1,
      explanation: '**Expert Solution:**\nThallium is the heaviest member of Group 13. The poor shielding by its inner $4f$ and $5d$ electrons exposes the $6s^2$ electrons to a high effective nuclear charge, holding them tightly to the nucleus. Only the single $6p$ electron is easily lost, making $+1$ much more stable than $+3$ (**Inert Pair Effect**).',
      difficulty: 'hard'
    },
    {
      id: 'pp-s2-49',
      question: 'Which group in the periodic table contains solid, liquid, and gaseous elements at room temperature?',
      options: ['Group 1 (Alkali Metals)', 'Group 15 (Pnictogens)', 'Group 17 (Halogens)', 'Group 18 (Noble Gases)'],
      answer: 2,
      explanation: '**Expert Solution:**\n**Group 17 (Halogens)** perfectly demonstrates this: Fluorine and Chlorine are gases, Bromine is a liquid, and Iodine and Astatine are solids at standard room temperature and pressure.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s2-50',
      question: "The term 'Metalloid' refers to elements that:",
      options: ['Exhibit only metallic properties', 'Exhibit only non-metallic properties', 'Exhibit intermediate properties between metals and non-metals', 'Are highly radioactive transition metals'],
      answer: 2,
      explanation: '**Expert Solution:**\n**Metalloids** (like Boron, Silicon, Germanium, Arsenic, Antimony, Tellurium) form a zigzag diagonal line on the p-block. They typically look like metals but behave chemically more like non-metals, and many act as excellent semiconductors.',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
