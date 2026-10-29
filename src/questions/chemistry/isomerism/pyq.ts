import { QuizSet } from '../../../types';

const pyq: QuizSet = {
  id: "pyq",
  title: "Previous Year Questions",
  description: "JEE Main & Advanced Previous Year Questions for Isomerism",
  subjectId: "chemistry",
  chapterId: "isomerism",
  difficulty: "pyq",
  questions: [
    {
      id: "isomerism-pyq-q1",
      question: "Isomers which can be interconverted through rotation around a single bond are [JEE 1992]",
      options: [
        "(A) Conformers",
        "(B) Diastereomers",
        "(C) Enantiomers",
        "(D) Positional isomers"
      ],
      answer: 0,
      explanation: "Conformational isomers (or conformers) are a form of stereoisomerism where the isomers can be interconverted exclusively by rotation about formally single bonds (such as a C–C $\\sigma$-bond). This rotation changes the dihedral angle between attached substituents, creating variations like staggered and eclipsed forms. Since single bonds allow free rotation at room temperature, these conformers are generally in dynamic equilibrium with each other."
    },
    {
      id: "isomerism-pyq-q2",
      question: "The given compound shows: [JEE 1995(Scr.)]\n\n![Compound](https://i.ibb.co/hRTDp2MR/image.png)",
      options: [
        "(A) geometrical isomerism",
        "(B) optical isomerism",
        "(C) geometrical & optical isomerism",
        "(D) tautomerism"
      ],
      answer: 1,
      explanation: "Let's break down the molecule's structural features:\n\n1. **Geometrical Isomerism Check**:\nLook at the carbon-carbon double bond ($\\text{C}=\\text{C}$). The left double-bonded carbon atom is attached to two identical methyl ($-\\text{CH}_3$) groups. For geometrical isomerism to exist, each carbon involved in the double bond must be attached to two completely different groups. Therefore, it **cannot** show geometrical isomerism.\n\n2. **Optical Isomerism Check**:\nLook at the saturated carbon atom adjacent to the carboxylic acid group ($-\\text{COOH}$). This specific carbon is attached to four completely distinct groups or atoms:\n- A hydrogen atom ($-\\text{H}$)\n- A methyl group ($-\\text{CH}_3$)\n- A carboxylic acid group ($-\\text{COOH}$)\n- An asymmetric alkene group ($-\\text{CH}=\\text{C(CH}_3)_2$)\n\nSince it is a chiral center (asymmetric carbon), the molecule is non-superimposable on its mirror image and exhibits optical isomerism."
    },
    {
      id: "isomerism-pyq-q3",
      question: "How many optically active stereoisomers are possible for butane-2,3-diol? [JEE 1997]",
      options: [
        "(A) 1",
        "(B) 2",
        "(C) 3",
        "(D) 4"
      ],
      answer: 1,
      explanation: "Let's look at the structure of butane-2,3-diol:\n$$\\text{CH}_3 - \\text{*CH(OH)} - \\text{*CH(OH)} - \\text{CH}_3$$\n\nThe molecule contains a total of $n = 2$ chiral carbons (marked with *). Because both ends of the molecule are identical ($-\\text{CH}_3$ and $-\\text{OH}$ groups), the molecule is symmetrical.\n\nFor a symmetrical molecule with an even number of chiral centers, the stereoisomers are divided into two types:\n1. **Optically Active Forms (Enantiomers)**:\n$$\\text{Number of enantiomers } (a) = 2^{n-1} = 2^{2-1} = 2^1 = 2 \\text{ (one } d\\text{-form and one } l\\text{-form)}$$\n\n2. **Optically Inactive Forms (Meso compounds)**:\n$$\\text{Number of meso forms } (m) = 2^{(n/2)-1} = 2^{(2/2)-1} = 2^0 = 1$$\n\nThe total number of stereoisomers is $2 + 1 = 3$. However, the question specifically asks for **optically active** stereoisomers. The meso isomer is optically inactive due to internal compensation (it has a plane of symmetry). Therefore, only the 2 enantiomeric forms are optically active."
    },
    {
      id: "isomerism-pyq-q4",
      question: "When cyclohexane is poured on water, it floats, because: [JEE 1997]",
      options: [
        "(A) cyclohexane is in 'boat' form",
        "(B) cyclohexane is in 'chair' form",
        "(C) cyclohexane is in 'crown' form",
        "(D) cyclohexane is less dense than water"
      ],
      answer: 3,
      explanation: "The ability of a substance to float or sink in water is a physical phenomenon determined by its relative density and solubility, rather than its conformational shape.\n\nCyclohexane ($\\text{C}_6\\text{H}_{12}$) is a non-polar hydrocarbon that is completely immiscible in polar water. Its density is approximately $0.78\\text{ g/cm}^3$, which is significantly less than the density of water ($1.00\\text{ g/cm}^3$). Because it is lighter than water and does not dissolve in it, it floats cleanly on the surface."
    },
    {
      id: "isomerism-pyq-q5",
      question: "Which of the following compounds will show geometrical isomerism? [JEE 1998]",
      options: [
        "(A) 2-butene",
        "(B) propene",
        "(C) 1-phenylpropene",
        "(D) 2-methyl-2-butene"
      ],
      answer: 0,
      explanation: "For a molecule containing a carbon-carbon double bond ($\\text{C}=\\text{C}$) to show geometrical isomerism, both double-bonded carbons must be individually attached to two non-identical groups.\n\nLet's evaluate the options:\n- **(A) 2-butene** ($\\text{CH}_3\\text{-CH}=\\text{CH-CH}_3$): Each carbon of the double bond holds a hydrogen atom ($-\\text{H}$) and a methyl group ($-\\text{CH}_3$). Since both pairs are different, it shows *cis* and *trans* configurations.\n- **(B) propene** ($\\text{CH}_2=\\text{CH-CH}_3$): The terminal carbon holds two identical hydrogen atoms, so it cannot show geometrical isomerism.\n- **(C) 1-phenylpropene** ($\\text{C}_6\\text{H}_5\\text{-CH}=\\text{CH-CH}_3$): One double-bonded carbon holds $-\\text{H}$ and $-\\text{C}_6\\text{H}_5$ (phenyl), while the other holds $-\\text{H}$ and $-\\text{CH}_3$. Both sides have non-identical groups, so it exhibits geometrical isomerism.\n- **(D) 2-methyl-2-butene** ($(\\text{CH}_3)_2\\text{C}=\\text{CH-CH}_3$): One of the double-bonded carbons is attached to two identical methyl groups, so it cannot show geometrical isomerism.\n\n*(Note: Depending on the specific format of the 1998 examination, both options A and C are scientifically valid correct options.)*"
    },
    {
      id: "isomerism-pyq-q6",
      question: "Which of the following compounds will exhibit geometrical isomerism? [JEE 2000 (Scr.)]",
      options: [
        "(A) 1-Phenyl-2-butene",
        "(B) 3-Phenyl-1-butene",
        "(C) 2-Phenyl-1-butene",
        "(D) 1,1-Diphenyl-1-propene"
      ],
      answer: 0,
      explanation: "Let's analyze the substitution patterns across the double bonds for each given compound:\n\n- **(A) 1-Phenyl-2-butene**: $\\text{C}_6\\text{H}_5\\text{-CH}_2\\text{-CH}=\\text{CH-CH}_3$\nThe double bond lies between carbon-2 and carbon-3. Carbon-2 is attached to a hydrogen ($-\\text{H}$) and a benzyl-like group ($-\\text{CH}_2\\text{C}_6\\text{H}_5$). Carbon-3 is attached to a hydrogen ($-\\text{H}$) and a methyl group ($-\\text{CH}_3$). Because neither carbon possesses identical attached groups, this compound successfully exhibits *cis/trans* geometrical isomerism.\n- **(B) 3-Phenyl-1-butene**: $\\text{CH}_2=\\text{CH-CH(C}_6\\text{H}_5)\\text{-CH}_3$\nThe double bond is at a terminal position ($\\text{CH}_2=$), meaning the first carbon has two identical hydrogen atoms. Thus, it cannot show geometrical isomerism.\n- **(C) 2-Phenyl-1-butene**: $\\text{CH}_2=\\text{C(C}_6\\text{H}_5)\\text{-CH}_2\\text{-CH}_3$\nIt contains a terminal double bond ($\\text{CH}_2=$) with identical hydrogens on the first carbon. Thus, it cannot show geometrical isomerism.\n- **(D) 1,1-Diphenyl-1-propene**: $(\\text{C}_6\\text{H}_5)_2\\text{C}=\\text{CH-CH}_3$\nOne of the double-bonded carbons is attached to two identical phenyl groups ($-\\text{C}_6\\text{H}_5$), which breaks the requirement for geometrical isomerism."
    },
    {
      id: "isomerism-pyq-q7",
      question: "The number of isomers for the compound with molecular formula $\\text{C}_2\\text{BrClFI}$ is [JEE 2001 (Scr.)]",
      options: [
        "(A) 3",
        "(B) 4",
        "(C) 5",
        "(D) 6"
      ],
      answer: 3,
      explanation: "The molecular formula $\\text{C}_2\\text{BrClFI}$ represents a fully substituted, derivative alkene of ethene ($\\text{C}_2\\text{H}_4$), where all four hydrogen positions are occupied by four distinct halogens: Bromine ($\\text{Br}$), Chlorine ($\\text{Cl}$), Fluorine ($\\text{F}$), and Iodine ($\\text{I}$).\n\nTo find the total number of structural and geometrical isomers, let's fix one halogen (for example, $\\text{Br}$) on the first carbon ($\\text{C}_1$) and pair it with each of the remaining three halogens systematically:\n\n1. **Case 1: $\\text{Br}$ and $\\text{Cl}$ are attached to $\\text{C}_1$**\nThe remaining halogens ($\\text{F}$ and $\\text{I}$) must attach to $\\text{C}_2$. This pairing produces **2 geometrical isomers**:\n- One where $\\text{Br}$ is *cis* to $\\text{F}$\n- One where $\\text{Br}$ is *cis* to $\\text{I}$\n\n2. **Case 2: $\\text{Br}$ and $\\text{F}$ are attached to $\\text{C}_1$**\nThe remaining halogens ($\\text{Cl}$ and $\\text{I}$) attach to $\\text{C}_2$. This produces **2 geometrical isomers**:\n- One where $\\text{Br}$ is *cis* to $\\text{Cl}$\n- One where $\\text{Br}$ is *cis* to $\\text{I}$\n\n3. **Case 3: $\\text{Br}$ and $\\text{I}$ are attached to $\\text{C}_1$**\nThe remaining halogens ($\\text{Cl}$ and $\\text{F}$) attach to $\\text{C}_2$. This produces **2 geometrical isomers**:\n- One where $\\text{Br}$ is *cis* to $\\text{Cl}$\n- One where $\\text{Br}$ is *cis* to $\\text{F}$\n\nAdding all combinations together: $2 + 2 + 2 = 6$ total isomers are possible."
    },
    {
      id: "isomerism-pyq-q8",
      question: "Which of the following compounds exhibits stereoisomerism? [JEE 2002 (Scr.)]",
      options: [
        "(A) 2-methylbutene-1",
        "(B) 3-methylbutyne-1",
        "(C) 3-methylbutanoic acid",
        "(D) 2-methylbutanoic acid"
      ],
      answer: 3,
      explanation: "Stereoisomerism (specifically optical isomerism) requires the presence of an asymmetric or chiral carbon atom—a carbon atom that is bonded to four entirely different groups or atoms.\n\nLet's analyze the structures of the options:\n- **(A) 2-methylbutene-1**: $\\text{CH}_2=\\text{C(CH}_3)\\text{-CH}_2\\text{-CH}_3$. The molecule contains a terminal double bond with identical hydrogen atoms on C-1 and no chiral centers, so it cannot show stereoisomerism.\n- **(B) 3-methylbutyne-1**: $\\text{CH}\\equiv\\text{C-CH(CH}_3)_2$. There are no chiral centers because the C-3 carbon is attached to two identical methyl groups.\n- **(C) 3-methylbutanoic acid**: $(\\text{CH}_3)_2\\text{CH-CH}_2\\text{-COOH}$. No chiral carbon exists as the C-3 carbon is bonded to two identical methyl groups.\n- **(D) 2-methylbutanoic acid**: $\\text{CH}_3\\text{-CH}_2\\text{-*CH(CH}_3)\\text{-COOH}$. The carbon atom at position 2 ($\\text{*C}$) is a chiral center because it is bonded to four unique groups: a hydrogen atom ($-\\text{H}$), a methyl group ($-\\text{CH}_3$), an ethyl group ($-\\text{CH}_2\\text{CH}_3$), and a carboxylic acid group ($-\\text{COOH}$). Because of this asymmetry, it exhibits optical stereoisomerism."
    },
    {
      id: "isomerism-pyq-q9",
      question: "In the given conformation, if $\\text{C}_2$ is rotated about $\\text{C}_2-\\text{C}_3$ bond anticlockwise by an angle of $120^\\circ$ then the conformation obtained is [JEE 2004 (Scr.)]\n\n![Conformation](https://i.ibb.co/JLxkrV6/image.png)",
      options: [
        "(A) fully eclipsed conformation",
        "(B) partially eclipsed conformation",
        "(C) gauche conformation",
        "(D) staggered conformation"
      ],
      answer: 2,
      explanation: "Let's analyze the initial Newman projection of n-butane along the $\\text{C}_2-\\text{C}_3$ bond:\n- **Front Carbon ($\\text{C}_2$, the Y-junction)**: The $1\\text{-CH}_3$ group is positioned at the bottom ($180^\\circ$ or 6 o'clock position), and the two $-\\text{H}$ atoms are at the top-left ($300^\\circ$) and top-right ($60^\\circ$).\n- **Back Carbon ($\\text{C}_3$, the outer circle)**: The $4\\text{-CH}_3$ group is positioned at the top ($0^\\circ$ or 12 o'clock position), and the two $-\\text{H}$ atoms are at the bottom-right ($120^\\circ$) and bottom-left ($240^\\circ$).\nThis represents the highly stable **anti conformation** (a type of staggered conformation) where the dihedral angle between the two bulky methyl groups is $180^\\circ$.\n\nNow, let's rotate the front carbon ($\\text{C}_2$) **anticlockwise by $120^\\circ$** while keeping the back carbon stationary:\n- The $1\\text{-CH}_3$ group moves from $180^\\circ$ anticlockwise to $60^\\circ$ (the top-right position).\n- The front $-\\text{H}$ atoms move to the top-left and bottom positions.\n\nThe back carbon groups remain unchanged, meaning the $4\\text{-CH}_3$ group is still at $0^\\circ$ (top position).\n\nFollowing this rotation, the new dihedral angle between the $1\\text{-CH}_3$ group (now at $60^\\circ$) and the $4\\text{-CH}_3$ group (at $0^\\circ$) becomes exactly **$60^\\circ$**. The front and back groups still alternate perfectly, keeping the structure staggered. A staggered conformation where the two bulky methyl groups are located at a $60^\\circ$ angle relative to each other is specifically termed the **gauche conformation**."
    }
  ]
};

export default pyq;
