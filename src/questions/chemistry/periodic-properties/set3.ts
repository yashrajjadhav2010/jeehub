import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set3',
  title: 'Periodic Properties - Set 3',
  chapterId: 'periodic-properties',
  subjectId: 'chemistry',
  questions: [
    {
      id: 'pp-s3-1',
      question: 'Compare the first ionization energy ($IE_1$) of Gallium (Ga) and Aluminum (Al).',
      options: ['$IE_1(Al) > IE_1(Ga)$', '$IE_1(Ga) > IE_1(Al)$', '$IE_1(Al) = IE_1(Ga)$', 'Cannot be determined'],
      answer: 1,
      explanation: '**Expert Solution:**\nGenerally, IE decreases down a group. However, Ga ($[Ar] 3d^{10} 4s^2 4p^1$) has 10 inner d-electrons which offer very poor shielding. This results in a higher effective nuclear charge ($Z_{eff}$) for the valence electrons in Ga compared to Al. Therefore, the first ionization energy of Ga is slightly greater than that of Al.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-2',
      question: 'The atomic radii of Group 13 elements follow the order:',
      options: ['$B < Al < Ga < In < Tl$', '$B < Ga < Al < In < Tl$', '$B < Al < In < Ga < Tl$', '$B < Ga < Al < Tl < In$'],
      answer: 1,
      explanation: '**Expert Solution:**\nDue to "d-block contraction" (poor shielding of 3d electrons), the effective nuclear charge on the valence shell of Gallium increases significantly. This pulls the electrons closer to the nucleus, making the atomic radius of Ga (135 pm) slightly smaller than that of Al (143 pm). The correct order is $B < Ga < Al < In < Tl$.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-3',
      question: 'Arrange the following oxides in order of increasing acidic character: $N_2O_5, P_4O_{10}, As_4O_{10}, Sb_4O_{10}$',
      options: ['$N_2O_5 < P_4O_{10} < As_4O_{10} < Sb_4O_{10}$', '$Sb_4O_{10} < As_4O_{10} < P_4O_{10} < N_2O_5$', '$P_4O_{10} < N_2O_5 < Sb_4O_{10} < As_4O_{10}$', '$As_4O_{10} < Sb_4O_{10} < P_4O_{10} < N_2O_5$'],
      answer: 1,
      explanation: '**Expert Solution:**\nAcidic character of oxides generally decreases down a group as the non-metallic character of the central atom decreases. Therefore, the highest oxide of Nitrogen is the most acidic, and the highest oxide of Antimony is the least acidic ($Sb_4O_{10}$ is actually amphoteric). Order: $Sb_4O_{10} < As_4O_{10} < P_4O_{10} < N_2O_5$.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-4',
      question: 'Which element has the highest melting point in the 3d transition series?',
      options: ['Titanium (Ti)', 'Vanadium (V)', 'Chromium (Cr)', 'Manganese (Mn)'],
      answer: 2,
      explanation: '**Expert Solution:**\nIn the 3d series, melting point increases with the number of unpaired d-electrons contributing to metallic bonding. Chromium ($3d^5 4s^1$) has a maximum of 6 unpaired electrons participating in strong interatomic metallic bonding, giving it the highest melting point. Manganese experiences an anomaly (low MP) due to its stable half-filled $d^5$ configuration limiting its participation in metallic bonding.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-5',
      question: 'Why is the density of Potassium (K) less than that of Sodium (Na)?',
      options: ['K has a higher atomic mass', 'K has a loosely packed BCC structure', 'Abnormal increase in atomic volume due to vacant 3d orbitals in K', 'Na has a higher ionization energy'],
      answer: 2,
      explanation: '**Expert Solution:**\nDensity = Mass / Volume. From Na to K, while atomic mass increases, the atomic volume increases abnormally more. This large increase in volume is attributed to the presence of vacant 3d orbitals in the 3rd shell of Potassium, expanding the atomic size disproportionately, lowering its overall density compared to Sodium.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-6',
      question: 'Which of the following species has the highest proton affinity (strongest base)?',
      options: ['$F^-$', '$OH^-$', '$NH_2^-$', '$CH_3^-$'],
      answer: 3,
      explanation: '**Expert Solution:**\nProton affinity is the tendency to accept a proton (basic strength). Across a period (C, N, O, F), electronegativity increases. Carbon is the least electronegative and thus holds its lone pair the loosest, making it the most willing to donate it to a proton. Therefore, the methide ion ($CH_3^-$) is the strongest base.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-7',
      question: 'How do the second ionization energies ($IE_2$) of Nitrogen and Oxygen compare?',
      options: ['$IE_2(N) > IE_2(O)$', '$IE_2(O) > IE_2(N)$', '$IE_2(N) = IE_2(O)$', 'Cannot be determined'],
      answer: 1,
      explanation: '**Expert Solution:**\n$N^+ = 1s^2 2s^2 2p^2$ and $O^+ = 1s^2 2s^2 2p^3$. For the second ionization, we are removing an electron from a stable half-filled $2p^3$ configuration in $O^+$. In contrast, $N^+$ is $2p^2$. Thus, removing an electron from $O^+$ requires significantly more energy. $IE_2(O) > IE_2(N)$.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-8',
      question: 'The electronegativity of elements down Group 13 (B to Tl):',
      options: ['Continuously decreases', 'Continuously increases', 'Decreases from B to Al, then marginally increases', 'Decreases from B to Ga, then remains constant'],
      answer: 2,
      explanation: '**Expert Solution:**\nElectronegativity usually decreases down a group. However, in Group 13, EN decreases from Boron (2.0) to Aluminum (1.5), but then slightly increases for Gallium (1.6), Indium (1.7), and Thallium (1.8). This anomaly is due to the poor shielding by inner d and f electrons in the heavier elements.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-9',
      question: 'Identify the set containing only amphoteric oxides:',
      options: ['$BeO, ZnO, PbO, Al_2O_3$', '$CO_2, SO_2, NO_2, P_2O_5$', '$Na_2O, CaO, BaO, MgO$', '$N_2O, CO, NO, H_2O$'],
      answer: 0,
      explanation: '**Expert Solution:**\nAmphoteric oxides react with both strong acids and strong bases. The classic examples are oxides of Be, Zn, Al, Pb, Sn, Ga, and Sb. Therefore, $BeO, ZnO, PbO, Al_2O_3$ are all amphoteric.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-10',
      question: 'In a given period, the element with the maximum negative electron gain enthalpy is a:',
      options: ['Alkali Metal', 'Chalcogen', 'Halogen', 'Noble Gas'],
      answer: 2,
      explanation: '**Expert Solution:**\nHalogens (Group 17) have the general configuration $ns^2 np^5$. They are exactly one electron short of a highly stable noble gas octet. Because of their high effective nuclear charge and small size within their period, they release the maximum energy when accepting an electron.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-11',
      question: 'The correct decreasing order of ionic radii for $N^{3-}, O^{2-}, F^-, Na^+, Mg^{2+}, Al^{3+}$ is:',
      options: ['$N^{3-} > O^{2-} > F^- > Na^+ > Mg^{2+} > Al^{3+}$', '$Al^{3+} > Mg^{2+} > Na^+ > F^- > O^{2-} > N^{3-}$', '$N^{3-} > F^- > O^{2-} > Na^+ > Mg^{2+} > Al^{3+}$', '$Al^{3+} > Mg^{2+} > Na^+ > N^{3-} > O^{2-} > F^-$'],
      answer: 0,
      explanation: '**Expert Solution:**\nThese ions are isoelectronic (10 electrons). For isoelectronic species, the ionic radius is inversely proportional to the atomic number ($Z$). Order of $Z$: N(7), O(8), F(9), Na(11), Mg(12), Al(13). Lower $Z$ has the weakest pull, making it the largest. Order: $N^{3-} > O^{2-} > F^- > Na^+ > Mg^{2+} > Al^{3+}$.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-12',
      question: 'Which transition metal in the 3d series has the highest density?',
      options: ['Iron (Fe)', 'Cobalt (Co)', 'Nickel (Ni)', 'Copper (Cu)'],
      answer: 3,
      explanation: '**Expert Solution:**\nDensity generally increases across a transition series because atomic mass increases while radius decreases or stays constant. In the 3d series, Copper has the highest density (approx $8.9$ g/cm³).',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-13',
      question: 'Among $H_2O, H_2S, H_2Se, H_2Te$, which has the lowest boiling point?',
      options: ['$H_2O$', '$H_2S$', '$H_2Se$', '$H_2Te$'],
      answer: 1,
      explanation: '**Expert Solution:**\nGenerally, boiling point increases down the group. However, $H_2O$ has an anomalously high boiling point due to strong hydrogen bonding. Thus, the boiling point drops sharply at $H_2S$ and then increases. $H_2S$ has the lowest boiling point.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-14',
      question: 'Which of the following elements can form compounds in a +8 oxidation state?',
      options: ['Manganese (Mn)', 'Iron (Fe)', 'Osmium (Os)', 'Chromium (Cr)'],
      answer: 2,
      explanation: '**Expert Solution:**\nThe highest known oxidation state for any element is +8, achieved by Osmium (Os) and Ruthenium (Ru) in compounds like $OsO_4$ and $RuO_4$.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-15',
      question: "According to Slater's rules, the shielding constant ($\\sigma$) for the 4s electron in Potassium (Z=19) is:",
      options: ['16.8', '17.2', '18.0', '15.0'],
      answer: 0,
      explanation: '**Expert Solution:**\nK = $1s^2, 2s^2 2p^6, 3s^2 3p^6, 4s^1$. For the $4s$ electron:\n\n- 8 electrons in (n-1) shell $\\times 0.85 = 6.8$\n- 10 electrons in (n-2) and deeper shells $\\times 1.00 = 10.0$\n- Total $\\sigma = 6.8 + 10.0 = 16.8$.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-16',
      question: 'Which of the following factor is responsible for the inert pair effect in Thallium (Tl)?',
      options: ['High basicity', 'Poor shielding of 4f and 5d electrons', 'Complete shielding by s-electrons', 'Large atomic radius'],
      answer: 1,
      explanation: '**Expert Solution:**\nThe inert pair effect is the reluctance of the $ns^2$ electrons to bond in heavy post-transition elements. This occurs because inner $4f$ and $5d$ electrons provide very poor shielding, leading to a high effective nuclear charge that holds the $6s^2$ electrons tightly.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-17',
      question: 'The basicity of lanthanide hydroxides $Ln(OH)_3$ from $La(OH)_3$ to $Lu(OH)_3$:',
      options: ['Increases', 'Decreases', 'Remains constant', 'First increases then decreases'],
      answer: 1,
      explanation: '**Expert Solution:**\nDue to lanthanide contraction, the size of $Ln^{3+}$ ion decreases from La to Lu. Smaller cations cause greater polarization of $OH^-$, increasing the covalent character of the bond and making it harder to release $OH^-$ in water. Thus, basicity decreases.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-18',
      question: 'Which of the following elements has the lowest melting point?',
      options: ['Tungsten (W)', 'Mercury (Hg)', 'Gallium (Ga)', 'Cesium (Cs)'],
      answer: 1,
      explanation: '**Expert Solution:**\nMercury (Hg) has the lowest melting point of all metals ($-38.8^\\circ C$) because its $6s^2$ valence electrons are pulled tightly to the nucleus due to poor shielding by $4f/5d$ electrons, preventing them from participating in metallic bonding.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-19',
      question: 'The correct order of electron affinity for the following halogens is:',
      options: ['$F > Cl > Br > I$', '$Cl > F > Br > I$', '$Cl > Br > F > I$', '$F > Br > Cl > I$'],
      answer: 1,
      explanation: '**Expert Solution:**\nChlorine has the highest electron affinity. Fluorine is smaller, so adding an electron causes significant interelectronic repulsion in the compact $2p$ subshell, lowering the energy released. Order: $Cl > F > Br > I$.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-20',
      question: 'The predominant oxidation states of Group 14 elements (C to Pb) are +2 and +4. As we move down the group:',
      options: ['The stability of +4 increases and +2 decreases', 'The stability of +2 increases and +4 decreases', 'Both +2 and +4 stability increase', 'Both +2 and +4 stability decrease'],
      answer: 1,
      explanation: '**Expert Solution:**\nDue to the inert pair effect, the $ns^2$ valence electrons in heavier elements (like Sn and Pb) resist participating in bonding. Thus, the lower oxidation state (+2) becomes more stable than the +4 state as we descend.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-21',
      question: 'According to Pauling scale, the electronegativity difference between two bonded atoms determines the:',
      options: ['Lattice energy', 'Percentage ionic character of the bond', 'Bond length', 'Isotopic distribution'],
      answer: 1,
      explanation: "**Expert Solution:**\nPauling established that a greater difference in electronegativity between two atoms corresponds to a higher ionic character in the bond.",
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-22',
      question: 'The pair of amphoteric hydroxides is:',
      options: ['$Al(OH)_3, LiOH$', '$Be(OH)_2, Mg(OH)_2$', '$B(OH)_3, Be(OH)_2$', '$Be(OH)_2, Zn(OH)_2$'],
      answer: 3,
      explanation: '**Expert Solution:**\nBeryllium and Zinc are classic elements whose oxides and hydroxides are amphoteric (reacting with both strong acids and strong bases). $LiOH$ and $Mg(OH)_2$ are basic, and $B(OH)_3$ is acidic.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-23',
      question: 'In which period are the 5f orbitals progressively filled?',
      options: ['Period 5', 'Period 6', 'Period 7', 'Period 8'],
      answer: 2,
      explanation: '**Expert Solution:**\nThe filling of the $5f$ orbitals occurs in the Actinide series. Since f-orbitals follow the $(n-2)$ rule ($n-2=5$), this places them in Period 7.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-24',
      question: 'The third ionization enthalpy is unusually high for which of the following elements?',
      options: ['Magnesium (Mg)', 'Aluminum (Al)', 'Silicon (Si)', 'Phosphorus (P)'],
      answer: 0,
      explanation: '**Expert Solution:**\nMagnesium ($[Ne] 3s^2$) loses 2 electrons easily. Removing a third electron requires breaking the highly stable Noble Gas core ($2p^6$), resulting in a massive jump for $IE_3$.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-25',
      question: 'Which element has the largest atomic radius in Period 3?',
      options: ['Sodium (Na)', 'Argon (Ar)', 'Chlorine (Cl)', 'Magnesium (Mg)'],
      answer: 1,
      explanation: '**Expert Solution:**\nGenerally, atomic radius decreases across a period. However, for Noble Gases like Argon, we measure the **van der Waals radius**, which is significantly larger than the metallic/covalent radii of other elements in the period.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-26',
      question: 'Which of the following factors does NOT affect the magnitude of electron affinity?',
      options: ['Atomic size', 'Effective nuclear charge', 'Stable electronic configuration', 'Number of neutrons'],
      answer: 3,
      explanation: '**Expert Solution:**\nElectron affinity depends on atomic size, $Z_{eff}$, and electronic configuration. Neutrons do not affect the electrostatic forces determining electron affinity.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-27',
      question: 'The acidic character of the hydrides of Group 15 elements follows the order:',
      options: ['$NH_3 > PH_3 > AsH_3 > SbH_3$', '$SbH_3 > AsH_3 > PH_3 > NH_3$', '$PH_3 > NH_3 > AsH_3 > SbH_3$', '$NH_3 > SbH_3 > AsH_3 > PH_3$'],
      answer: 1,
      explanation: '**Expert Solution:**\nAs we move down the group, the central atom gets larger, $E-H$ bond length increases, and bond dissociation energy decreases. It becomes easier to release $H^+$, increasing acidic strength.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-28',
      question: 'Which of the following exhibits a diagonal relationship with Boron?',
      options: ['Aluminum', 'Carbon', 'Silicon', 'Magnesium'],
      answer: 2,
      explanation: '**Expert Solution:**\nBoron (Period 2, Group 13) exhibits a diagonal relationship with Silicon (Period 3, Group 14). Both are metalloids and form covalent chlorides that hydrolyze in water.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-29',
      question: 'The most common and stable oxidation state of Actinides is:',
      options: ['+2', '+3', '+4', '+6'],
      answer: 1,
      explanation: '**Expert Solution:**\nLike the Lanthanides, the Actinides predominantly exhibit a +3 oxidation state, though they show a greater variety of higher oxidation states due to small energy gaps in valence subshells.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-30',
      question: 'Which of the following species has the highest polarizing power?',
      options: ['$Na^+$', '$Mg^{2+}$', '$Al^{3+}$', '$K^+$'],
      answer: 2,
      explanation: "**Expert Solution:**\nAccording to Fajan's rules, polarizing power is proportional to charge density ($Charge / Size$). $Al^{3+}$ has the highest charge and the smallest radius among these, giving it the highest polarizing power.",
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-31',
      question: 'The order of screening effect for electrons in s, p, d, and f orbitals of the same shell is:',
      options: ['$s > p > d > f$', '$f > d > p > s$', '$p > s > d > f$', '$d > f > p > s$'],
      answer: 0,
      explanation: '**Expert Solution:**\n$s$-orbitals penetrate closest to the nucleus, providing the strongest shield. $d$ and $f$ orbitals are diffused and offer very poor shielding. Order: $s > p > d > f$.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-32',
      question: 'The maximum covalency of Nitrogen is:',
      options: ['3', '4', '5', '6'],
      answer: 1,
      explanation: '**Expert Solution:**\nNitrogen ($n=2$) has only four orbitals ($2s$ and three $2p$) available and lacks $d$-orbitals. Thus, it can form a maximum of 4 covalent bonds (e.g., $NH_4^+$).',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-33',
      question: 'Which pair of elements has almost identical atomic radii?',
      options: ['Na and K', 'Zr and Hf', 'Al and Ga', 'Fe and Co'],
      answer: 1,
      explanation: '**Expert Solution:**\nZirconium ($4d$) and Hafnium ($5d$) have nearly identical radii due to Lanthanide Contraction, which cancels the expected size increase from the new shell.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-34',
      question: 'The element with the highest electrical conductivity at room temperature is:',
      options: ['Copper (Cu)', 'Silver (Ag)', 'Gold (Au)', 'Aluminum (Al)'],
      answer: 1,
      explanation: '**Expert Solution:**\nSilver (Ag) has the highest electrical conductivity of any metal at room temperature due to its single free $s$-electron and efficient crystal lattice.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-35',
      question: 'If the atomic number of an element is 114, its systematic IUPAC name is:',
      options: ['Ununquadium', 'Ununbium', 'Ununhexium', 'Ununseptium'],
      answer: 0,
      explanation: '**Expert Solution:**\n$1 = un$, $1 = un$, $4 = quad$. Systematic name: **Ununquadium** (official name: Flerovium).',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-36',
      question: 'The correct order of electronegativity of the following elements is:',
      options: ['$F > O > N > C$', '$F > N > O > C$', '$O > F > N > C$', '$N > O > F > C$'],
      answer: 0,
      explanation: '**Expert Solution:**\nElectronegativity strictly increases across a period from left to right: $C < N < O < F$.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-37',
      question: 'Which of the following elements exhibits the highest oxidation state?',
      options: ['Chromium (Cr)', 'Manganese (Mn)', 'Ruthenium (Ru)', 'Vanadium (V)'],
      answer: 2,
      explanation: '**Expert Solution:**\nRuthenium (Ru) and Osmium (Os) can achieve a **+8** oxidation state (e.g., $RuO_4$). Manganese peaks at +7.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-38',
      question: "The effective nuclear charge ($Z_{eff}$) acting on the 3d electron in Zinc (Z=30) is:",
      options: ['8.85', '21.15', '6.85', '4.15'],
      answer: 0,
      explanation: "**Expert Solution:**\nConfiguration: $(1s^2) (2s^2 2p^6) (3s^2 3p^6) (3d^{10}) (4s^2)$. For a $3d$ electron: $\\sigma = (9 \\times 0.35) + (18 \\times 1.00) = 21.15$. $Z_{eff} = 30 - 21.15 = 8.85$.",
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-39',
      question: 'Which of the following is true for the Chalcogens?',
      options: ['They are exclusively metals', 'They form oxides that are basic in nature', 'Their electronegativity decreases from top to bottom', 'They have the highest ionization energy in their period'],
      answer: 2,
      explanation: '**Expert Solution:**\nChalcogens (Group 16) see a decrease in electronegativity down the group as atomic size increases.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-40',
      question: 'The first ionization enthalpy of Be is higher than that of B because:',
      options: ['Be has a higher nuclear charge', 'Be has a larger atomic radius', 'The 2s electron in Be is more penetrating than the 2p electron in B', 'B has a completely filled shell'],
      answer: 2,
      explanation: '**Expert Solution:**\nBe ($2s^2$) vs B ($2s^2 2p^1$). $s$-orbitals penetrate deeper than $p$-orbitals, making the $2s$ electrons harder to remove. Also, the $2p$ electron in B is partially shielded by the full $2s$ subshell.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-41',
      question: 'Which of the following trends is INCORRECT?',
      options: ['Atomic radius: $Li > Be > B > C$', 'First ionization energy: $O > N > C > B$', 'Electron affinity: $Cl > F > Br > I$', 'Electronegativity: $F > Cl > Br > I$'],
      answer: 1,
      explanation: '**Expert Solution:**\nNitrogen has a higher $IE_1$ than Oxygen due to its exactly half-filled $2p^3$ subshell. The correct trend is $N > O > C > B$.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-42',
      question: 'In the d-block series, density generally:',
      options: ['Decreases steadily', 'Increases steadily', 'Increases to a maximum in the middle and then decreases', 'Remains constant'],
      answer: 2,
      explanation: '**Expert Solution:**\nMass increases while volume reaches a minimum near the middle (strong metallic bonding). Density reaches a maximum in the middle of the transition series.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-43',
      question: "The formula for the basic oxide formed by a Group 2 element 'M' is:",
      options: ['$M_2O$', '$MO$', '$MO_2$', '$M_2O_3$'],
      answer: 1,
      explanation: '**Expert Solution:**\nGroup 2 metals exhibit a +2 oxidation state. Oxygen is -2. Criss-crossing gives $MO$ (e.g., $MgO, CaO$).',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-44',
      question: 'Which element exists as a red-brown liquid at 298 K?',
      options: ['Iodine', 'Carbon', 'Bromine', 'Phosphorus'],
      answer: 2,
      explanation: '**Expert Solution:**\nBromine ($Br_2$) is the only non-metal that is a liquid at standard room temperature and pressure.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-45',
      question: 'Among the following, the most covalent compound is:',
      options: ['$NaCl$', '$MgCl_2$', '$AlCl_3$', '$SiCl_4$'],
      answer: 3,
      explanation: "**Expert Solution:**\nAccording to Fajan's rules, covalent character increases with cation charge and decreasing size. $Si^{4+}$ has the highest charge density among these, making $SiCl_4$ highly covalent.",
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-46',
      question: 'The diagonal relationship in the periodic table is caused by:',
      options: ['Similar atomic weights', 'Similar ionic potential (charge/size)', 'Same number of valence electrons', 'Same principal quantum number'],
      answer: 1,
      explanation: '**Expert Solution:**\nMoving down and right cancels out competing size/charge trends, resulting in a similar **ionic potential** and similar chemical properties.',
      difficulty: 'medium'
    },
    {
      id: 'pp-s3-47',
      question: 'In the modern periodic table, metalloids are found in the:',
      options: ['s-block', 'p-block', 'd-block', 'f-block'],
      answer: 1,
      explanation: '**Expert Solution:**\nMetalloids form a diagonal band exclusively within the **p-block**, separating metals from non-metals.',
      difficulty: 'easy'
    },
    {
      id: 'pp-s3-48',
      question: 'Successive IE (eV) are 8.3, 25.1, 37.9, 259.3, 340.1. The element is in:',
      options: ['Group 1', 'Group 2', 'Group 13', 'Group 14'],
      answer: 2,
      explanation: '**Expert Solution:**\nThe massive jump between $IE_3$ and $IE_4$ indicates that the 4th electron comes from a stable core. The element has 3 valence electrons (Group 13).',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-49',
      question: 'Which of the following has the highest hydration enthalpy?',
      options: ['$Na^+$', '$K^+$', '$Mg^{2+}$', '$Ca^{2+}$'],
      answer: 2,
      explanation: '**Expert Solution:**\nHydration enthalpy depends on charge density. $+2$ ions are higher than $+1$. Between $Mg^{2+}$ and $Ca^{2+}$, Magnesium is smaller, giving it a higher charge density.',
      difficulty: 'hard'
    },
    {
      id: 'pp-s3-50',
      question: 'Which noble gas does not possess a complete octet?',
      options: ['Helium', 'Neon', 'Argon', 'Krypton'],
      answer: 0,
      explanation: '**Expert Solution:**\nHelium ($1s^2$) has a stable **duplet** since the first shell can only hold 2 electrons.',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
