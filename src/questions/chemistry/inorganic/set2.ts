import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set2',
  title: 'Basic Inorganic Chemistry - Set 2',
  chapterId: 'inorganic',
  subjectId: 'chemistry',
  questions: [
    {
      id: 'inorg-s2-1',
      question: 'Which of the following has the highest bond dissociation energy?',
      options: ['$F_2$', '$Cl_2$', '$Br_2$', '$I_2$'],
      answer: 1,
      explanation: '**Derivation:**\nChlorine ($Cl_2$) has the highest bond dissociation energy among halogens. $F_2$ has lower energy due to lone pair-lone pair repulsions between the small fluorine atoms.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-2',
      question: 'The geometry of $Ni(CO)_4$ is:',
      options: ['Square Planar', 'Tetrahedral', 'Octahedral', 'Trigonal Bipyramidal'],
      answer: 1,
      explanation: '**Analysis:**\nIn $Ni(CO)_4$, Nickel is in $0$ oxidation state and undergoes $sp^3$ hybridization, resulting in a tetrahedral geometry.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-3',
      question: 'Which of the following is known as "King of Chemicals"?',
      options: ['Hydrochloric acid', 'Nitric acid', 'Sulfuric acid', 'Phosphoric acid'],
      answer: 2,
      explanation: '**Fact:**\nSulfuric acid ($H_2SO_4$) is known as the "King of Chemicals" because of its immense variety of industrial applications.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-4',
      question: 'Which of the following elements has the maximum electron affinity?',
      options: ['O', 'S', 'Se', 'Te'],
      answer: 1,
      explanation: '**Reasoning:**\nSulfur has a higher electron affinity than Oxygen because Oxygen has a very small size, which leads to higher electron-electron repulsion in its $2p$ subshell.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-5',
      question: 'The composition of "Invar" alloy is:',
      options: ['Fe + Ni', 'Fe + Cr', 'Cu + Zn', 'Cu + Sn'],
      answer: 0,
      explanation: '**Analysis:**\nInvar is an alloy of iron (64%) and nickel (36%) known for its uniquely low coefficient of thermal expansion.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-6',
      question: 'What is the oxidation state of Iron in Brown Ring Complex $[Fe(H_2O)_5(NO)]SO_4$?',
      options: ['+1', '+2', '+3', '0'],
      answer: 0,
      explanation: '**Derivation:**\nIn the Brown Ring Complex, $NO$ exists as $NO^+$, and Iron is in $+1$ oxidation state.',
      difficulty: 'hard'
    },
    {
      id: 'inorg-s2-7',
      question: 'Which of the following is a "superphosphate" fertilizer component?',
      options: ['$Ca(H_2PO_4)_2$', '$Ca_3(PO_4)_2$', '$(NH_4)_3PO_4$', '$K_3PO_4$'],
      answer: 0,
      explanation: '**Composition:**\nSuperphosphate is primarily calcium dihydrogen phosphate, $Ca(H_2PO_4)_2$.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-8',
      question: 'The permanent hardness of water is caused by the presence of:',
      options: ['Bicarbonates of Ca and Mg', 'Chlorides and Sulfates of Ca and Mg', 'Carbonates of Na and K', 'Nitrates of Na and K'],
      answer: 1,
      explanation: '**Reason:**\nPermanent hardness is due to soluble chlorides and sulfates of Calcium and Magnesium.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-9',
      question: 'Which gas is produced when Aluminum nitride reacts with water?',
      options: ['$N_2$', '$NH_3$', '$NO_2$', '$N_2O$'],
      answer: 1,
      explanation: '**Reaction:**\n$AlN + 3H_2O \\rightarrow Al(OH)_3 + NH_3$\n\nAmmonia gas is evolved.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-10',
      question: 'The "philosopher\'s wool" is:',
      options: ['ZnO', 'PbO', 'MgO', '$Al_2O_3$'],
      answer: 0,
      explanation: '**Fact:**\nZinc oxide ($ZnO$) is known as "philosopher\'s wool" when prepared by burning zinc in air.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-11',
      question: 'Which of the following is correct for the shape of $SF_4$?',
      options: ['Tetrahedral', 'Square Planar', 'See-saw', 'Trigonal Bipyramidal'],
      answer: 2,
      explanation: '**VSEPR Analysis:**\n$SF_4$ has 4 bond pairs and 1 lone pair. Its geometry is based on trigonal bipyramidal but the shape is called see-saw.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-12',
      question: 'The basicity of Orthophosphoric acid ($H_3PO_4$) is:',
      options: ['1', '2', '3', '4'],
      answer: 2,
      explanation: '**Derivation:**\n$H_3PO_4$ has three displaceable hydrogen atoms attached to oxygen atoms, making it a tribasic acid.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-13',
      question: 'Which ligand is used in the treatment of lead poisoning?',
      options: ['EDTA', '$CN^-$', '$NH_3$', 'en'],
      answer: 0,
      explanation: '**Medical Fact:**\nCalcium-EDTA chelate is used to remove lead from the body by forming a stable, soluble lead-EDTA complex.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-14',
      question: 'What is the hybridization of Carbon in Diamond?',
      options: ['$sp$', '$sp^2$', '$sp^3$', '$sp^3d$'],
      answer: 2,
      explanation: '**Structure:**\nIn diamond, each carbon atom is covalently bonded to four other carbon atoms in a tetrahedral arrangement using $sp^3$ hybridization.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-15',
      question: 'Which of the following noble gases can form compounds with Fluorine easily?',
      options: ['He', 'Ne', 'Ar', 'Xe'],
      answer: 3,
      explanation: '**Trend:**\nXenon has a lower ionization energy compared to other noble gases, allowing it to form stable compounds with highly electronegative elements like Oxygen and Fluorine.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-16',
      question: 'Bordeaux mixture consists of:',
      options: ['$CuSO_4$ + Lime', '$ZnSO_4$ + Lime', '$FeSO_4$ + Lime', '$Al_2(SO_4)_3$ + Lime'],
      answer: 0,
      explanation: '**Fact:**\nBordeaux mixture is a mixture of Copper(II) sulfate and Calcium hydroxide (Lime) used as a fungicide.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-17',
      question: 'The most abundant metal in Earth\'s crust is:',
      options: ['Fe', 'Al', 'Ca', 'Na'],
      answer: 1,
      explanation: '**Analysis:**\nAluminum is the most abundant metal (~8% of Earth\'s crust), while Oxygen is the most abundant element overall.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-18',
      question: 'The process used for the purification of Nickel is:',
      options: ['Mond\'s process', 'Van-Arkel process', 'Zone refining', 'Liquation'],
      answer: 0,
      explanation: '**Industrial Process:**\nMond\'s process uses Nickel tetracarbonyl formation to purify Nickel.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-19',
      question: 'Which of the following gives "White Fumes" when exposed to moist air?',
      options: ['$AlCl_3$', '$MgCl_2$', 'NaCl', 'KCl'],
      answer: 0,
      explanation: '**Reaction:**\n$AlCl_3$ undergoes hydrolysis with moisture in air to produce $HCl$ gas, which appears as white fumes.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-20',
      question: 'The formula of Lunar Caustic is:',
      options: ['$AgNO_3$', 'AgCl', 'AgBr', 'AgI'],
      answer: 0,
      explanation: '**Fact:**\nSilver nitrate ($AgNO_3$) is called Lunar Caustic because it was historically associated with the Moon (Luna).',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-21',
      question: 'Which of the following is correct order of thermal stability of carbonates?',
      options: ['$Li_2CO_3 > Na_2CO_3 > K_2CO_3$', '$K_2CO_3 > Na_2CO_3 > Li_2CO_3$', '$Na_2CO_3 > K_2CO_3 > Li_2CO_3$', '$Li_2CO_3 = Na_2CO_3 = K_2CO_3$'],
      answer: 1,
      explanation: '**Trend:**\nThermal stability of alkali metal carbonates increases down the group as the size of the cation increases and polarizing power decreases.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-22',
      question: 'The hybridization of Phosphorus in $PCl_5$ is:',
      options: ['$sp^3$', '$sp^3d$', '$sp^3d^2$', '$sp^3d^3$'],
      answer: 1,
      explanation: '**Analysis:**\nPhosphorus in $PCl_5$ has 5 bond pairs and no lone pairs, leading to $sp^3d$ hybridization and trigonal bipyramidal geometry.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-23',
      question: 'In which of the following molecules all bond lengths are not equal?',
      options: ['$BF_3$', '$NF_3$', '$PF_5$', '$SF_6$'],
      answer: 2,
      explanation: '**Geometry:**\nIn $PF_5$, axial bonds are longer than equatorial bonds due to greater repulsion experienced from equatorial bond pairs.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-24',
      question: 'The magnetic moment of Bohr magneton (BM) is calculated using:',
      options: ['$\\sqrt{n(n+1)}$', '$\\sqrt{n(n+2)}$', '$\\sqrt{n(n+3)}$', '$\\sqrt{n(n+4)}$'],
      answer: 1,
      explanation: '**Formula:**\nSpin-only magnetic moment $\\mu = \\sqrt{n(n+2)}$ BM, where $n$ is the number of unpaired electrons.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-25',
      question: 'Which of the following is "Inorganic Graphite"?',
      options: ['Boron Nitride ($BN$)$_x$', 'Borazine', 'Diborane', 'Borax'],
      answer: 0,
      explanation: '**Fact:**\nHexagonal Boron Nitride is called inorganic graphite due to its similar layered structure.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-26',
      question: 'The color of $CrO_5$ in organic solvent (ether) is:',
      options: ['Blue', 'Green', 'Yellow', 'Orange'],
      answer: 0,
      explanation: '**Analysis:**\nChromium pentoxide ($CrO_5$), also called butterfly complex, forms a deep blue color solution in ether.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-27',
      question: 'Which element belongs to the $4f$ series?',
      options: ['Uranium', 'Cerium', 'Thorium', 'Plutonium'],
      answer: 1,
      explanation: '**Fact:**\nCerium ($Z=58$) is the first element of the $4f$ (Lanthanide) series.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-28',
      question: 'The catalyst used in Contact Process for $H_2SO_4$ manufacture is:',
      options: ['Fe', 'Mo', '$V_2O_5$', 'Pt'],
      answer: 2,
      explanation: '**Industrial Process:**\nVanadium pentoxide ($V_2O_5$) is used as a catalyst in the oxidation of $SO_2$ to $SO_3$ in the Contact process.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-29',
      question: 'What is the coordination number of Al in anhydrous $AlCl_3$?',
      options: ['3', '4', '6', '12'],
      answer: 2,
      explanation: '**Analysis:**\nIn solid state anhydrous $AlCl_3$, each Aluminum is surrounded by six Chlorine atoms in a lattice.',
      difficulty: 'hard'
    },
    {
      id: 'inorg-s2-30',
      question: 'Which of the following is a "coined metal"?',
      options: ['Pb', 'Zn', 'Au', 'Ti'],
      answer: 2,
      explanation: '**Fact:**\nMetals like Gold (Au), Silver (Ag), and Copper (Cu) are called coinage metals.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-31',
      question: 'The primary valence of Co in $[Co(NH_3)_6]Cl_3$ is:',
      options: ['3', '6', '9', '0'],
      answer: 0,
      explanation: '**Werner\'s Theory:**\nPrimary valence corresponds to the oxidation state of the metal, which is $+3$ in this complex.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-32',
      question: 'Which of the following is not a greenhouse gas?',
      options: ['$CO_2$', '$CH_4$', '$N_2O$', '$O_2$'],
      answer: 3,
      explanation: '**Environmental Fact:**\nOxygen ($O_2$) is not a greenhouse gas. Major greenhouse gases include $CO_2$, methane, and water vapor.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-33',
      question: 'The formal charge on C in $CO$ is:',
      options: ['0', '+1', '-1', '+2'],
      answer: 2,
      explanation: '**Calculation:**\nIn the Lewis structure $:C \equiv O:$, Carbon has a formal charge of $-1$ and Oxygen has $+1$.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-34',
      question: 'The most stable oxidation state of Thallium ($Tl$) is:',
      options: ['+1', '+3', '+2', '+4'],
      answer: 0,
      explanation: '**Inert Pair Effect:**\nDue to the inert pair effect, the $+1$ oxidation state is more stable than $+3$ for heavier elements of Group 13 like $Tl$.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-35',
      question: 'Which of the following is "Salt-Cake"?',
      options: ['$Na_2SO_4$', 'NaCl', '$Na_2CO_3$', 'NaOH'],
      answer: 0,
      explanation: '**Industrial Fact:**\nSodium sulfate ($Na_2SO_4$) obtained as a byproduct in the manufacture of $HCl$ is called salt-cake.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-36',
      question: 'Structure of $BeCl_2$ in the vapor phase above $1200$ K is:',
      options: ['Linear', 'Dimeric', 'Polymeric', 'Angular'],
      answer: 0,
      explanation: '**Geometry:**\nAt very high temperatures ($>1200$ K), $BeCl_2$ exists as a linear monomer.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-37',
      question: 'Which element has the lowest boiling point in the periodic table?',
      options: ['Hydrogen', 'Helium', 'Nitrogen', 'Neon'],
      answer: 1,
      explanation: '**Fact:**\nHelium has the lowest boiling point ($4.2$ K) of any substance.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-38',
      question: 'The "red" color of the ruby is due to the presence of:',
      options: ['$Mn^{3+}$', '$Cr^{3+}$', '$Fe^{3+}$', '$Co^{2+}$'],
      answer: 1,
      explanation: '**Impurity Analysis:**\nThe red color of ruby is due to $Cr^{3+}$ ions present as trace impurities in $Al_2O_3$ lattice.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-39',
      question: 'Which of the following is correct regarding the basic strength of hydroxides?',
      options: ['$NaOH > Mg(OH)_2 > Al(OH)_3$', '$Al(OH)_3 > Mg(OH)_2 > NaOH$', '$Mg(OH)_2 > NaOH > Al(OH)_3$', '$NaOH = Mg(OH)_2 = Al(OH)_3$'],
      answer: 0,
      explanation: '**Trend:**\nBasic strength decreases across a period. $NaOH$ is a strong base, while $Al(OH)_3$ is amphoteric.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-40',
      question: 'The "Laughing Gas" is:',
      options: ['NO', '$NO_2$', '$N_2O$', '$N_2O_5$'],
      answer: 2,
      explanation: '**Fact:**\nNitrous oxide ($N_2O$) is known as laughing gas.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-41',
      question: 'Which of the following contains a Co-C bond?',
      options: ['Chlorophyll', 'Haemoglobin', 'Vitamin $B_{12}$', 'Cis-platin'],
      answer: 2,
      explanation: '**Bio-inorganic Fact:**\nVitamin $B_{12}$ (Cyanocobalamin) contains a Cobalt-Carbon bond.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-42',
      question: 'What is the hybridization of Pt in $[PtCl_4]^{2-}$?',
      options: ['$sp^3$', '$dsp^2$', '$sp^3d^2$', '$d^2sp^3$'],
      answer: 1,
      explanation: '**Analysis:**\nPt(II) complexes with coordination number 4 are almost always square planar involving $dsp^2$ hybridization.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-43',
      question: 'Which of the following is "Dry Ice"?',
      options: ['Solid $CO_2$', 'Solid $SO_2$', 'Liquid $N_2$', 'Solid $H_2O$'],
      answer: 0,
      explanation: '**Fact:**\nSolid Carbon Dioxide is called dry ice because it sublimes directly into gas without melting.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-44',
      question: 'Which method is used for the extraction of Magnesium from sea water?',
      options: ['Dow\'s process', 'Hall-Heroult process', 'Castner\'s process', 'Serpeck\'s process'],
      answer: 0,
      explanation: '**Industrial Process:**\nDow\'s process is used to extract Magnesium from sea water via $MgCl_2$ electrolysis.',
      difficulty: 'hard'
    },
    {
      id: 'inorg-s2-45',
      question: 'The geometry of $BrF_5$ is:',
      options: ['Square Pyramidal', 'Octahedral', 'Trigonal Bipyramidal', 'Pentagonal Bipyramidal'],
      answer: 0,
      explanation: '**VSEPR Analysis:**\n$BrF_5$ has 5 bond pairs and 1 lone pair. Steric number 6 leads to octahedral geometry, but the shape is square pyramidal.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-46',
      question: 'Which property of alkali metals increases with atomic number?',
      options: ['Ionization Energy', 'Electronegativity', 'Atomic Radius', 'Hydration Enthalpy'],
      answer: 2,
      explanation: '**Trend:**\nAtomic radius increases down the group as more shells are added.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-47',
      question: 'In the manufacture of Chlorine by Deacon\'s process, the catalyst used is:',
      options: ['$CuCl_2$', 'Ni', 'Fe', 'Pt'],
      answer: 0,
      explanation: '**Process:**\n$CuCl_2$ is used as a catalyst in Deacon\'s process for $Cl_2$ manufacture.',
      difficulty: 'medium'
    },
    {
      id: 'inorg-s2-48',
      question: 'Which of the following elements is used in photoelectric cells?',
      options: ['Li', 'Na', 'K', 'Cs'],
      answer: 3,
      explanation: '**Trend:**\nCesium (Cs) has the lowest ionization energy, making it very responsive to light for the photoelectric effect.',
      difficulty: 'easy'
    },
    {
      id: 'inorg-s2-49',
      question: 'The "microcosmic salt" is:',
      options: ['$Na(NH_4)HPO_4$', '$Na_2HPO_4$', '$NH_4Cl$', '$Na_2CO_3$'],
      answer: 0,
      explanation: '**Fact:**\nSodium ammonium hydrogen phosphate $Na(NH_4)HPO_4 \\cdot 4H_2O$ is known as microcosmic salt.',
      difficulty: 'hard'
    },
    {
      id: 'inorg-s2-50',
      question: 'Which is the correct order of bond angle in hydrides of Group 15?',
      options: ['$NH_3 > PH_3 > AsH_3$', '$AsH_3 > PH_3 > NH_3$', '$NH_3 = PH_3 = AsH_3$', '$PH_3 > NH_3 > AsH_3$'],
      answer: 0,
      explanation: '**Trend:**\nBond angle decreases down the group from $NH_3$ (~107°) to $PH_3$ (~93°) due to decreasing electronegativity of the central atom.',
      difficulty: 'medium'
    }
  ]
};

export default quizSet;
