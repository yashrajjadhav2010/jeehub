import { QuizSet } from '../../../types';

const mockTest1: QuizSet = {
  id: "mock-1",
  title: "JEE Primary Simulation Exam 1",
  subjectId: "mock-tests" as any,
  chapterId: "full-syllabus",
  difficulty: "mock" as any,
  questions: [
    {
      id: "mock1-p1",
      question: "The magnitude of the vector $\\vec{A} = 3\\hat{i} + 4\\hat{j} + 12\\hat{k}$ is:",
      options: ["$11$", "$12$", "$13$", "$14$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nMagnitude $|A| = \\sqrt{x^2 + y^2 + z^2} = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$."
    },
    {
      id: "mock1-p2",
      question: "The derivative of $y = x^3 - 2x^2 + 5x - 1$ with respect to $x$ is:",
      options: ["$3x^2 - 4x + 5$", "$3x^2 - 2x + 5$", "$x^2 - 4x + 5$", "$3x^2 - 4x - 1$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n$dy/dx = \\frac{d}{dx}(x^3 - 2x^2 + 5x - 1) = 3x^2 - 4x + 5$."
    },
    {
      id: "mock1-p3",
      question: "If the position of a particle is given by $x = t^2 + 2t$, its velocity at $t = 2s$ is:",
      options: ["$4$ m/s", "$6$ m/s", "$8$ m/s", "$2$ m/s"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nVelocity $v = dx/dt = 2t + 2$. At $t = 2$, $v = 2(2) + 2 = 6$ m/s."
    },
    {
      id: "mock1-p4",
      question: "The dot product of two mutually perpendicular vectors is:",
      options: ["$1$", "$-1$", "$0$", "Infinity"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nDot product is $A \\cdot B = |A||B| \\cos\\theta$. For perpendicular vectors, $\\theta = 90^\\circ$ and $\\cos(90^\\circ) = 0$."
    },
    {
      id: "mock1-p5",
      question: "The angle between the vectors $\\vec{A} = \\hat{i} + \\hat{j}$ and $\\vec{B} = \\hat{i} - \\hat{j}$ is:",
      options: ["$0^\\circ$", "$45^\\circ$", "$90^\\circ$", "$180^\\circ$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n$\\vec{A} \\cdot \\vec{B} = (1)(1) + (1)(-1) = 0$. Since dot product is zero, the vectors are orthogonal (angle is $90^\\circ$)."
    },
    {
      id: "mock1-p6",
      question: "The value of the integral $\\int_{0}^{2} (2x + 3) dx$ is:",
      options: ["$8$", "$10$", "$12$", "$14$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n$\\int (2x + 3) dx = x^2 + 3x$. Evaluated from $0$ to $2$: $(2^2 + 3(2)) - (0 + 0) = 4 + 6 = 10$."
    },
    {
      id: "mock1-p7",
      question: "If $\\vec{A} = 2\\hat{i} + 3\\hat{j}$ and $\\vec{B} = 4\\hat{i} - 2\\hat{j}$, then $\\vec{A} + \\vec{B}$ is:",
      options: ["$6\\hat{i} + \\hat{j}$", "$6\\hat{i} - \\hat{j}$", "$2\\hat{i} - 5\\hat{j}$", "$8\\hat{i} - 6\\hat{j}$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n$\\vec{A} + \\vec{B} = (2+4)\\hat{i} + (3-2)\\hat{j} = 6\\hat{i} + \\hat{j}$."
    },
    {
      id: "mock1-p8",
      question: "The cross product of unit vectors $\\hat{i} \\times \\hat{j}$ is equal to:",
      options: ["$0$", "$1$", "$-\\hat{k}$", "$\\hat{k}$"],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\nBy right hand rule, the cross product of the unit vectors along positive x and y axes gives the unit vector along positive z axis: $\\hat{k}$."
    },
    {
      id: "mock1-p9",
      question: "A function $y = f(x)$ has a local maximum when:",
      options: ["$dy/dx = 0$ and $d^2y/dx^2 > 0$", "$dy/dx = 0$ and $d^2y/dx^2 < 0$", "$dy/dx > 0$ and $d^2y/dx^2 = 0$", "$dy/dx < 0$ and $d^2y/dx^2 < 0$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nFor a local maximum, the first derivative must be zero (critical point) and the second derivative must be negative (concave down)."
    },
    {
      id: "mock1-p10",
      question: "The projection of vector $\\vec{A} = 2\\hat{i} + 3\\hat{j}$ on the x-axis is:",
      options: ["$2$", "$3$", "$\\sqrt{13}$", "$5$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nThe projection on the x-axis is the x-component of the vector, which is 2."
    },
    {
      id: "mock1-p11",
      question: "What is the derivative of $\\sin(2x)$ with respect to $x$?",
      options: ["$\\cos(2x)$", "$2\\cos(2x)$", "$-2\\cos(2x)$", "$-\\cos(2x)$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nUsing the chain rule, $\\frac{d}{dx} \\sin(u) = \\cos(u) \\cdot \\frac{du}{dx}$. Thus $\\frac{d}{dx} \\sin(2x) = 2\\cos(2x)$."
    },
    {
      id: "mock1-p12",
      question: "If vectors $\\vec{P} = a\\hat{i} + 2\\hat{j}$ and $\\vec{Q} = 2\\hat{i} - 3\\hat{j}$ are perpendicular, the value of $a$ is:",
      options: ["$2$", "$3$", "$-3$", "$4$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nFor perpendicular vectors, $\\vec{P} \\cdot \\vec{Q} = 0$. $2a + 2(-3) = 0 \\implies 2a - 6 = 0 \\implies a = 3$."
    },
    {
      id: "mock1-p13",
      question: "The area under a velocity-time graph represents:",
      options: ["Acceleration", "Displacement", "Force", "Momentum"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n$\\int v dt = \\int (dx/dt) dt = \\Delta x$, which is displacement."
    },
    {
      id: "mock1-p14",
      question: "The unit vector in the direction of vector $\\vec{A} = 3\\hat{i} + 4\\hat{j}$ is:",
      options: ["$(3\\hat{i} + 4\\hat{j}) / 5$", "$(3\\hat{i} + 4\\hat{j}) / 25$", "$(4\\hat{i} + 3\\hat{j}) / 5$", "$(3\\hat{i} + 4\\hat{j}) / 7$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nUnit vector $\\hat{u} = \\vec{A} / |A|$. $|A| = \\sqrt{3^2 + 4^2} = 5$. Thus $\\hat{u} = (3\\hat{i} + 4\\hat{j}) / 5$."
    },
    {
      id: "mock1-p15",
      question: "Evaluation of $\\int \\cos(x) dx$ yields:",
      options: ["$-\\sin(x) + C$", "$\\sin(x) + C$", "$-\\cos(x) + C$", "$\\sec(x) + C$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nThe integral of the cosine function is the sine function plus a constant: $\\sin(x) + C$."
    },
    {
      id: "mock1-p16",
      question: "The cross product of a vector with itself ($\\vec{A} \\times \\vec{A}$) is:",
      options: ["$1$", "$|A|^2$", "Null vector", "$2\\vec{A}$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nThe angle between a vector and itself is $0^\\circ$. $\\vec{A} \\times \\vec{A} = |A||A| \\sin(0^\\circ) \\hat{n} = \\vec{0}$."
    },
    {
      id: "mock1-p17",
      question: "Which of the following operations is commutative?",
      options: ["Vector addition", "Vector cross product", "Matrix multiplication", "Vector subtraction"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nVector addition is commutative: $\\vec{A} + \\vec{B} = \\vec{B} + \\vec{A}$. Cross product and subtraction are anti-commutative."
    },
    {
      id: "mock1-p18",
      question: "If $y = e^{3x}$, then $dy/dx$ is:",
      options: ["$e^{3x}$", "$(1/3)e^{3x}$", "$3e^{3x}$", "$9e^{3x}$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nUsing chain rule: $\\frac{d}{dx} e^{ax} = ae^{ax}$. Hence $\\frac{d}{dx} e^{3x} = 3e^{3x}$."
    },
    {
      id: "mock1-p19",
      question: "The components of a vector of magnitude 10 acting at an angle of $30^\\circ$ with the x-axis are:",
      options: ["$5\\sqrt{3} \\hat{i} + 5 \\hat{j}$", "$5 \\hat{i} + 5\\sqrt{3} \\hat{j}$", "$10 \\hat{i} + 10 \\hat{j}$", "$5 \\hat{i} + 5 \\hat{j}$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n$A_x = 10\\cos(30^\\circ) = 10(\\sqrt{3}/2) = 5\\sqrt{3}$. $A_y = 10\\sin(30^\\circ) = 10(1/2) = 5$. Vector is $5\\sqrt{3}\\hat{i} + 5\\hat{j}$."
    },
    {
      id: "mock1-p20",
      question: "The integral $\\int (1/x) dx$ is:",
      options: ["$-1/x^2 + C$", "$\\ln|x| + C$", "$x + C$", "$e^x + C$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nThe integral of $1/x$ is the natural logarithm of the absolute value of $x$."
    },
    {
      id: "mock1-p21",
      question: "If $|A| = 4$, $|B| = 5$, and the angle between them is $60^\\circ$, what is the value of the dot product $\\vec{A} \\cdot \\vec{B}$?",
      type: "integer",
      answer: 10,
      explanation: "**Detailed Explanation:**\n\n$\\vec{A} \\cdot \\vec{B} = |A||B|\\cos(60^\\circ) = 4 \\times 5 \\times (1/2) = 10$."
    },
    {
      id: "mock1-p22",
      question: "The position of a particle is $x = 5t^2 - 4t + 10$. Find its acceleration (in $\\text{m/s}^2$).",
      type: "integer",
      answer: 10,
      explanation: "**Detailed Explanation:**\n\n$v = dx/dt = 10t - 4$. $a = dv/dt = 10$ $\\text{m/s}^2$."
    },
    {
      id: "mock1-p23",
      question: "Find the minimum value of the function $y = x^2 - 6x + 15$.",
      type: "integer",
      answer: 6,
      explanation: "**Detailed Explanation:**\n\nThe quadratic opens upwards. Local minimum occurs at $x = -b/(2a) = 6/2 = 3$. Minimum value $y = 3^2 - 6(3) + 15 = 9 - 18 + 15 = 6$."
    },
    {
      id: "mock1-p24",
      question: "Find the value of the definite integral $\\int_0^2 3x^2 dx$.",
      type: "integer",
      answer: 8,
      explanation: "**Detailed Explanation:**\n\n$\\int 3x^2 dx = x^3$. Evaluated from $0$ to $2$: $2^3 - 0^3 = 8$."
    },
    {
      id: "mock1-p25",
      question: "If $\\vec{A} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$, find the square of its magnitude ($|A|^2$).",
      type: "integer",
      answer: 9,
      explanation: "**Detailed Explanation:**\n\n$|A|^2 = x^2 + y^2 + z^2 = 2^2 + (-1)^2 + 2^2 = 4 + 1 + 4 = 9$."
    },
    {
      id: "mock1-c1",
      question: "The IUPAC name for the element with atomic number 104 is:",
      options: ["Unnilquadium", "Ununnilium", "Unnilbium", "Ununquadium"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n1 = un, 0 = nil, 4 = quad. Hence Unnilquadium."
    },
    {
      id: "mock1-c2",
      question: "Which of the following elements has the highest electronegativity?",
      options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nFluorine is the most electronegative element in the periodic table (Pauling scale value of 4.0)."
    },
    {
      id: "mock1-c3",
      question: "The element with the highest electron affinity in the periodic table is:",
      options: ["Fluorine", "Chlorine", "Bromine", "Oxygen"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nChlorine has the highest electron affinity. Fluorine's small size leads to inter-electronic repulsions."
    },
    {
      id: "mock1-c4",
      question: "Which of the following is isoelectronic with the Neon (Ne) atom?",
      options: ["$O^-$", "$Na^+$", "$Mg^+$", "$Cl^-$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nNeon has 10 electrons. $Na^+$ has $11 - 1 = 10$ electrons."
    },
    {
      id: "mock1-c5",
      question: "In the second period, the element with the highest first ionization enthalpy is:",
      options: ["Lithium", "Fluorine", "Nitrogen", "Neon"],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\nNeon, being a noble gas, has a fully filled stable octet resulting in highest ionization enthalpy."
    },
    {
      id: "mock1-c6",
      question: "Choose the correct order of atomic radii:",
      options: ["$Li > Be > B$", "$B > Be > Li$", "$Li < B < Be$", "$Be > Li > B$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nAtomic radius decreases across a period from left to right. Hence $Li > Be > B$."
    },
    {
      id: "mock1-c7",
      question: "The element with atomic number 26 belongs to which block of the periodic table?",
      options: ["s-block", "p-block", "d-block", "f-block"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nAtomic number 26 is Iron (Fe), which is a transition metal in the d-block."
    },
    {
      id: "mock1-c8",
      question: "Which of the following is an amphoteric oxide?",
      options: ["$Na_2O$", "$MgO$", "$Al_2O_3$", "$SO_3$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n$Al_2O_3$ is amphoteric as it reacts with both acids and bases."
    },
    {
      id: "mock1-c9",
      question: "The correct order of shielding effect of subshells is:",
      options: ["$s > p > d > f$", "$f > d > p > s$", "$p > s > d > f$", "$d > f > p > s$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nThe s-orbital is closest to nucleus and provides maximum shielding, followed by p, d, and f."
    },
    {
      id: "mock1-c10",
      question: "Diagonal relationship is shown by:",
      options: ["Li and Mg", "Na and Mg", "Be and B", "B and C"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nLithium shows properties similar to Magnesium due to similar charge-to-size ratio."
    },
    {
      id: "mock1-c11",
      question: "Which group of the periodic table is known as the Chalcogens?",
      options: ["Group 15", "Group 16", "Group 17", "Group 18"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nGroup 16, the oxygen family, are known as ore-forming elements or chalcogens."
    },
    {
      id: "mock1-c12",
      question: "The lanthanide contraction is responsible for the fact that:",
      options: ["Zr and Y have about the same radius", "Zr and Nb have similar oxidation states", "Zr and Hf have about the same radius", "Zr and Zn have similar chemical properties"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nDue to poor shielding by 4f electrons, the atomic radius of Hf (period 6) is almost identical to Zr (period 5)."
    },
    {
      id: "mock1-c13",
      question: "First ionization energy of Nitrogen is greater than that of Oxygen because of:",
      options: ["Smaller size of Nitrogen", "Greater effective nuclear charge of Nitrogen", "Half-filled p-orbitals in Nitrogen", "Higher electronegativity of Nitrogen"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nNitrogen ($2s^2 2p^3$) has a stable half-filled configuration making it harder to remove an electron."
    },
    {
      id: "mock1-c14",
      question: "The most basic oxide among the following is:",
      options: ["$K_2O$", "$Al_2O_3$", "$SO_2$", "$NO_2$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n$K_2O$ is an alkali metal oxide, which is highly basic. $SO_2, NO_2$ are acidic, $Al_2O_3$ is amphoteric."
    },
    {
      id: "mock1-c15",
      question: "Which of the following pairs contains a metalloid?",
      options: ["Na and K", "Si and Ge", "S and Cl", "Cu and Zn"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nSilicon (Si) and Germanium (Ge) both exhibit properties intermediate between metals and non-metals."
    },
    {
      id: "mock1-c16",
      question: "According to IUPAC nomenclature, the symbol for the element with atomic number 118 is:",
      options: ["Uuo", "Uun", "Uno", "Uuu"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n1 = un, 1 = un, 8 = oct. Hence Ununoctium (Uuo)."
    },
    {
      id: "mock1-c17",
      question: "Which set of elements has the valence shell electron configuration $ns^2 np^5$?",
      options: ["Alkali metals", "Alkaline earth metals", "Halogens", "Noble gases"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nGroup 17 elements (Halogens) have 7 valence electrons: $ns^2 np^5$."
    },
    {
      id: "mock1-c18",
      question: "Moving down Group 1, the metallic character:",
      options: ["Increases", "Decreases", "Remains the same", "First increases then decreases"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nAs size increases down the group, ionization energy decreases, making it easier to lose electrons (higher metallic character)."
    },
    {
      id: "mock1-c19",
      question: "Which of the following oxidation states is most common for lanthanides?",
      options: ["+2", "+3", "+4", "+5"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nThe +3 oxidation state is the most characteristic and stable oxidation state among lanthanides."
    },
    {
      id: "mock1-c20",
      question: "The second ionization enthalpy of Na is higher than that of Mg because:",
      options: ["Na has a larger atomic size", "Na+ has a stable noble gas core configuration", "Mg has a lower effective nuclear charge", "Mg has a larger atomic size"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nRemoving the second electron from Na means removing it from a highly stable $Ne$-core."
    },
    {
      id: "mock1-c21",
      question: "What is the group number of the element with atomic number 15 in the modern periodic table?",
      type: "integer",
      answer: 15,
      explanation: "**Detailed Explanation:**\n\nAtomic number 15 is Phosphorus, with valence configuration $3s^2 3p^3$ (5 valence electrons). Group = 10 + 5 = 15."
    },
    {
      id: "mock1-c22",
      question: "How many unpaired electrons are present in the $Fe^{3+}$ ion (Atomic number of Fe = 26)?",
      type: "integer",
      answer: 5,
      explanation: "**Detailed Explanation:**\n\nFe is $[Ar] 4s^2 3d^6$. $Fe^{3+}$ is $[Ar] 3d^5$. There are 5 unpaired electrons."
    },
    {
      id: "mock1-c23",
      question: "How many elements are present in the 4th period of the modern periodic table?",
      type: "integer",
      answer: 18,
      explanation: "**Detailed Explanation:**\n\nThe 4th period involves filling of 4s, 3d, and 4p subshells (2+10+6 = 18 elements)."
    },
    {
      id: "mock1-c24",
      question: "What is the number of valence electrons in an atom of Phosphorus (P)?",
      type: "integer",
      answer: 5,
      explanation: "**Detailed Explanation:**\n\nPhosphorus is in group 15, its configuration is $[Ne] 3s^2 3p^3$, hence 5 valence electrons."
    },
    {
      id: "mock1-c25",
      question: "If an element has the IUPAC name \"Ununpentium\", what is the last digit of its atomic number?",
      type: "integer",
      answer: 5,
      explanation: "**Detailed Explanation:**\n\n\"pent\" indicates the digit 5. Hence the last digit is 5."
    },
    {
      id: "mock1-m1",
      question: "If set A has 3 elements, then the number of elements in its power set P(A) is:",
      options: ["$3$", "$6$", "$8$", "$9$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nThe number of subsets (power set) of a set with $n$ elements is $2^n$. Here $2^3 = 8$."
    },
    {
      id: "mock1-m2",
      question: "For any set A, the value of A $\\cup$ A' (where A' is the complement of A) is:",
      options: ["A", "Null set ($\\Phi$)", "Universal set ($U$)", "A'"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nThe union of a set and its complement yields the entire universal set."
    },
    {
      id: "mock1-m3",
      question: "Which of the following is equivalent to $\\log(a/b)$?",
      options: ["$\\log a / \\log b$", "$\\log a - \\log b$", "$\\log(a) \\cdot \\log(1/b)$", "$\\log(a - b)$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nUsing division prop of logs, $\\log(a/b) = \\log(a) - \\log(b)$."
    },
    {
      id: "mock1-m4",
      question: "The value of $\\log_2 (8)$ is:",
      options: ["$2$", "$3$", "$4$", "$8$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n$8 = 2^3$, so $\\log_2(2^3) = 3$."
    },
    {
      id: "mock1-m5",
      question: "The solution to the inequality $x^2 - 4 < 0$ is:",
      options: ["$x < -2$ or $x > 2$", "$-2 < x < 2$", "$x < 2$", "$x > -2$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n$x^2 < 4 \\implies |x| < 2 \\implies -2 < x < 2$."
    },
    {
      id: "mock1-m6",
      question: "According to De Morgan's Laws, $(A \\cup B)'$ is equal to:",
      options: ["$A' \\cup B'$", "$A' \\cap B'$", "$A \\cap B$", "$A \\cup B$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nThe complement of a union is the intersection of complements: $(A \\cup B)' = A' \\cap B'$."
    },
    {
      id: "mock1-m7",
      question: "The domain of the function $f(x) = \\log(x)$ is:",
      options: ["$x > 0$", "$x \\ge 0$", "All real numbers", "$x \\ne 0$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nThe argument of a logarithm must be strictly positive."
    },
    {
      id: "mock1-m8",
      question: "If $|x| \\le 5$, then the values of $x$ lie in the interval:",
      options: ["$(-\\infty, 5]$", "$[0, 5]$", "$[-5, 5]$", "$(-5, 5)$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n$|x| \\le 5 \\implies -5 \\le x \\le 5$, which is $[-5, 5]$."
    },
    {
      id: "mock1-m9",
      question: "The value of $\\log_a (1)$ for any valid base $a$ is:",
      options: ["$a$", "$1$", "$0$", "Not defined"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n$a^0 = 1$, so $\\log_a(1) = 0$."
    },
    {
      id: "mock1-m10",
      question: "If $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5, 6\\}$, what is $A - B$?",
      options: ["$\\{5, 6\\}$", "$\\{1, 2\\}$", "$\\{3, 4\\}$", "$\\{1, 2, 5, 6\\}$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n$A - B$ removes elements of $B$ from $A$. $\\{3, 4\\}$ are removed, leaving $\\{1, 2\\}$."
    },
    {
      id: "mock1-m11",
      question: "The property $\\log_b (a) \\cdot \\log_a (b)$ equals:",
      options: ["$ab$", "$a/b$", "$1$", "$0$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nUsing base change formula: $(\\log a / \\log b) \\cdot (\\log b / \\log a) = 1$."
    },
    {
      id: "mock1-m12",
      question: "The solution set of $(x-1)(x-3) > 0$ is:",
      options: ["$(1, 3)$", "$(-\\infty, 1) \\cup (3, \\infty)$", "$[1, 3]$", "$(-\\infty, 1] \\cup [3, \\infty)$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nThe quadratic opens upward and has roots 1 and 3. It is positive outside the roots."
    },
    {
      id: "mock1-m13",
      question: "Let $n(A) = 10$, $n(B) = 15$, and $n(A \\cap B) = 5$. Then $n(A \\cup B)$ is:",
      options: ["$20$", "$25$", "$30$", "$15$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 10 + 15 - 5 = 20$."
    },
    {
      id: "mock1-m14",
      question: "Which of the following sets is an empty set?",
      options: ["$\\{x : x$ is an even prime number$\\}$", "$\\{x : x^2 = 4$ and $x$ is odd$\\}$", "$\\{0\\}$", "$\\{x : x$ is a real number and $x^2 > 0\\}$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nFor $x^2 = 4$, $x$ must be $2$ or $-2$, both of which are even. Hence no real odd number satisfies this."
    },
    {
      id: "mock1-m15",
      question: "If $a < b$ and $c < 0$, then:",
      options: ["$ac < bc$", "$ac > bc$", "$ac = bc$", "Cannot be determined"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nMultiplying an inequality by a negative number flips the inequality sign."
    },
    {
      id: "mock1-m16",
      question: "The base of the natural logarithm ($\\ln$) is:",
      options: ["$10$", "$2$", "$e$", "$\\pi$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nThe natural logarithm uses Euler's number $e \\approx 2.718$."
    },
    {
      id: "mock1-m17",
      question: "What is the value of $2^{\\log_2 16}$?",
      options: ["$2$", "$4$", "$8$", "$16$"],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\nBy identity $a^{\\log_a x} = x$. Hence $2^{\\log_2 16} = 16$."
    },
    {
      id: "mock1-m18",
      question: "The intersection of a set A and the universal set U is:",
      options: ["U", "$\\Phi$", "A", "A'"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nA is a subset of U, so their intersection is A."
    },
    {
      id: "mock1-m19",
      question: "In interval notation, $x \\ge 7$ is written as:",
      options: ["$(7, \\infty)$", "$[7, \\infty)$", "$(-\\infty, 7]$", "$[7, \\infty]$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nThe square bracket signifies inclusion of 7 and it extends to infinity."
    },
    {
      id: "mock1-m20",
      question: "If $\\log_{10} (x) = 2$, then $x$ equals:",
      options: ["$20$", "$100$", "$1000$", "$10$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n$x = 10^2 = 100$."
    },
    {
      id: "mock1-m21",
      question: "How many integers satisfy the inequality $x^2 < 10$?",
      type: "integer",
      answer: 7,
      explanation: "**Detailed Explanation:**\n\nIntegers are -3, -2, -1, 0, 1, 2, 3 (a total of 7 integers)."
    },
    {
      id: "mock1-m22",
      question: "Find the value of $x$ if $\\log_3 (x) = 4$.",
      type: "integer",
      answer: 81,
      explanation: "**Detailed Explanation:**\n\n$x = 3^4 = 81$."
    },
    {
      id: "mock1-m23",
      question: "Let set A have 5 elements and set B have 4 elements. What is the maximum possible number of elements in $A \\cup B$?",
      type: "integer",
      answer: 9,
      explanation: "**Detailed Explanation:**\n\nThe union is maximum when intersection is null. Max elements = $5 + 4 = 9$."
    },
    {
      id: "mock1-m24",
      question: "Find the minimum value of the expression $y = x^2 + 8$.",
      type: "integer",
      answer: 8,
      explanation: "**Detailed Explanation:**\n\n$x^2 \\ge 0$, so minimum value of $x^2 + 8$ occurs at $x = 0$ giving 8."
    },
    {
      id: "mock1-m25",
      question: "If the number of proper subsets of a set is 15, how many elements does the set contain?",
      type: "integer",
      answer: 4,
      explanation: "**Detailed Explanation:**\n\nProper subsets = $2^n - 1 = 15 \\implies 2^n = 16 \\implies n = 4$."
    }
  ]
};

export default mockTest1;
