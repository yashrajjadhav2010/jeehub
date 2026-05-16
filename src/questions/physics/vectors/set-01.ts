import { QuizSet } from '../../../types';

const vectorsSet01: QuizSet = {
  id: 'set-01',
  title: 'Vectors - Set 01',
  chapterId: 'vectors',
  subjectId: 'physics',
  difficulty: 'easy',
  questions: [
    {
      id: 'pv1-q1',
      question: 'The magnitude of the vector $\\vec{A} = 3\\hat{i} + 4\\hat{j} - 5\\hat{k}$ is:',
      options: ['$50$', '$5\\sqrt{2}$', '$12$', '$5\\sqrt{3}$'],
      answer: 1,
      explanation: 'The magnitude of a vector $\\vec{A} = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k}$ is given by:\n\n$|\\vec{A}| = \\sqrt{A_x^2 + A_y^2 + A_z^2}$.\n\nSubstituting the components:\n\n$|\\vec{A}| = \\sqrt{3^2 + 4^2 + (-5)^2} = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2}$.'
    },
    {
      id: 'pv1-q2',
      question: 'A unit vector in the direction of the vector $\\vec{P} = \\hat{i} + \\hat{j} + \\hat{k}$ is:',
      options: ['$\\frac{\\hat{i} + \\hat{j} + \\hat{k}}{3}$', '$\\frac{\\hat{i} + \\hat{j} + \\hat{k}}{\\sqrt{3}}$', '$\\hat{i} + \\hat{j} + \\hat{k}$', '$\\frac{\\hat{i} + \\hat{j} + \\hat{k}}{2}$'],
      answer: 1,
      explanation: 'A unit vector $\\hat{n}$ in the direction of $\\vec{P}$ is defined as $\\hat{n} = \\vec{P}/|\\vec{P}|$.\n\nThe magnitude $|\\vec{P}| = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$.\n\nDividing the vector by its magnitude gives:\n\n$\\hat{n} = \\frac{\\hat{i} + \\hat{j} + \\hat{k}}{\\sqrt{3}}$.'
    },
    {
      id: 'pv1-q3',
      question: 'If the magnitude of the sum of two vectors is equal to the magnitude of their difference ($|\\vec{A} + \\vec{B}| = |\\vec{A} - \\vec{B}|$), then the angle between them is:',
      options: ['$0^\\circ$', '$45^\\circ$', '$90^\\circ$', '$180^\\circ$'],
      answer: 2,
      explanation: 'Squaring both sides $|\\vec{A} + \\vec{B}|^2 = |\\vec{A} - \\vec{B}|^2$ gives:\n\n$A^2 + B^2 + 2\\vec{A}\\cdot\\vec{B} = A^2 + B^2 - 2\\vec{A}\\cdot\\vec{B}$.\n\nThis simplifies to $4\\vec{A}\\cdot\\vec{B} = 0$, meaning $\\vec{A}\\cdot\\vec{B} = 0$.\n\nSince the dot product is zero, the angle $\\theta = 90^\\circ$.'
    },
    {
      id: 'pv1-q4',
      question: 'For a vector $\\vec{A} = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k}$, the direction cosines satisfy the relation:',
      options: ['$\\cos \\alpha + \\cos \\beta + \\cos \\gamma = 1$', '$\\cos^2 \\alpha + \\cos^2 \\beta + \\cos^2 \\gamma = 1$', '$\\sin^2 \\alpha + \\sin^2 \\beta + \\sin^2 \\gamma = 1$', 'Both B and C'],
      answer: 1,
      explanation: 'Direction cosines are defined as:\n\n$\\cos \\alpha = A_x/A, \\cos \\beta = A_y/A, \\cos \\gamma = A_z/A$.\n\nSquaring and adding them gives:\n\n$(A_x^2 + A_y^2 + A_z^2)/A^2 = A^2/A^2 = 1$.'
    },
    {
      id: 'pv1-q5',
      question: 'Two forces of magnitudes $8 \\text{ N}$ and $6 \\text{ N}$ act on a particle. Which of the following CANNOT be the magnitude of their resultant?',
      options: ['$2 \\text{ N}$', '$10 \\text{ N}$', '$14 \\text{ N}$', '$1 \\text{ N}$'],
      answer: 3,
      explanation: 'The resultant magnitude $R$ must satisfy $|A - B| \\le R \\le |A + B|$.\n\nHere, $8-6=2$ and $8+6=14$, so $2 \\le R \\le 14$.\n\n$1 \\text{ N}$ is outside this range.'
    },
    {
      id: 'pv1-q6',
      question: 'A vector is pointing purely towards the North. If it is multiplied by $-2$, the new vector points towards:',
      options: ['North', 'South', 'East', 'West'],
      answer: 1,
      explanation: 'Multiplying a vector by a negative scalar reverses its direction by $180^\\circ$. The opposite of North is South.'
    },
    {
      id: 'pv1-q7',
      question: 'The component of vector $\\vec{a} = 2\\hat{i} + 3\\hat{j}$ along the x-axis is:',
      options: ['$3$', '$2$', '$2\\hat{i}$', '$\\sqrt{13}$'],
      answer: 1,
      explanation: 'In the vector $\\vec{a} = a_x\\hat{i} + a_y\\hat{j}$, the component along the x-axis is the scalar $a_x = 2$.'
    },
    {
      id: 'pv1-q8',
      question: 'A displacement vector is given by $\\vec{r} = 3\\hat{i} + 4\\hat{j} \\text{ m}$. The angle it makes with the positive x-axis is:',
      options: ['$\\tan^{-1}(3/4)$', '$\\sin^{-1}(3/5)$', '$53^\\circ$', '$37^\\circ$'],
      answer: 2,
      explanation: 'The angle $\\theta$ is given by $\\tan \\theta = y/x = 4/3$. This corresponds to $\\theta \\approx 53^\\circ$ in a 3-4-5 triangle.'
    },
    {
      id: 'pv1-q9',
      question: 'If $\\vec{A} = 2\\hat{i} - 3\\hat{j}$ and $\\vec{B} = \\hat{i} + 2\\hat{j}$, find the magnitude of $\\vec{A} + 2\\vec{B}$.',
      options: ['$4$', '$5$', '$\\sqrt{17}$', '$\\sqrt{15}$'],
      answer: 2,
      explanation: 'First, $2\\vec{B} = 2\\hat{i} + 4\\hat{j}$.\n\nThe sum $\\vec{R} = \\vec{A} + 2\\vec{B} = (2+2)\\hat{i} + (-3+4)\\hat{j} = 4\\hat{i} + \\hat{j}$.\n\nMagnitude $|\\vec{R}| = \\sqrt{4^2 + 1^2} = \\sqrt{17}$.'
    },
    {
      id: 'pv1-q10',
      question: 'Two forces of equal magnitude $F$ act on a particle at an angle of $120^\\circ$ to each other. The magnitude of their resultant is:',
      options: ['$F$', '$F\\sqrt{2}$', '$F\\sqrt{3}$', '$2F$'],
      answer: 0,
      explanation: 'Using $R = \\sqrt{F^2 + F^2 + 2F^2 \\cos 120^\\circ}$, and $\\cos 120^\\circ = -1/2$:\n\n$R = \\sqrt{2F^2 - F^2} = F$.'
    },
    {
      id: 'pv1-q11',
      question: 'The dot product of $\\vec{A} = 3\\hat{i} - 2\\hat{j} + \\hat{k}$ and $\\vec{B} = 4\\hat{i} + 5\\hat{j} - 2\\hat{k}$ is:',
      options: ['$0$', '$12$', '$4$', '$-4$'],
      answer: 0,
      explanation: '$\\vec{A}\\cdot\\vec{B} = (3)(4) + (-2)(5) + (1)(-2) = 12 - 10 - 2 = 0$.\n\nThe vectors are perpendicular.'
    },
    {
      id: 'pv1-q12',
      question: 'Under what condition is the dot product of two non-zero vectors $\\vec{A}$ and $\\vec{B}$ negative?',
      options: ['Angle is $0^\\circ$', 'Angle is between $0^\\circ$ and $90^\\circ$', 'Angle is exactly $90^\\circ$', 'Angle is between $90^\\circ$ and $180^\\circ$'],
      answer: 3,
      explanation: 'Since $\\vec{A}\\cdot\\vec{B} = AB \\cos \\theta$, the product is negative when $\\cos \\theta$ is negative, which occurs for obtuse angles ($90^\\circ < \\theta \\le 180^\\circ$).'
    },
    {
      id: 'pv1-q13',
      question: 'Work done is calculated as $\\vec{F} \\cdot \\vec{d}$. If $\\vec{F} = 2\\hat{i} + 3\\hat{j} \\text{ N}$ and $\\vec{d} = -\\hat{i} + 2\\hat{j} \\text{ m}$, the work done is:',
      options: ['$4 \\text{ J}$', '$8 \\text{ J}$', '$0 \\text{ J}$', '$-4 \\text{ J}$'],
      answer: 0,
      explanation: '$W = (2)(-1) + (3)(2) = -2 + 6 = 4 \\text{ J}$.'
    },
    {
      id: 'pv1-q14',
      question: 'If $\\vec{P} = 2\\hat{i} + a\\hat{j} + \\hat{k}$ is perpendicular to $\\vec{Q} = 4\\hat{i} - 2\\hat{j} - 2\\hat{k}$, then $a$ is:',
      options: ['$2$', '$3$', '$4$', '$-3$'],
      answer: 1,
      explanation: 'Perpendicular vectors mean $\\vec{P}\\cdot\\vec{Q} = 0$.\n\nSo $(2)(4) + (a)(-2) + (1)(-2) = 0 \\implies 8 - 2a - 2 = 0 \\implies 6 = 2a \\implies a = 3$.'
    },
    {
      id: 'pv1-q15',
      question: 'The projection of vector $\\vec{A} = \\hat{i} - \\hat{j}$ onto vector $\\vec{B} = \\hat{i} + \\hat{j}$ is:',
      options: ['$1$', '$\\sqrt{2}$', '$0$', '$-1$'],
      answer: 2,
      explanation: 'Projection is $\\vec{A}\\cdot\\vec{B}/|\\vec{B}|$. Here $\\vec{A}\\cdot\\vec{B} = 1(1) + (-1)(1) = 0$, so the projection is $0$.'
    },
    {
      id: 'pv1-q16',
      question: 'The angle between the vector $\\vec{A} = \\hat{i} + \\sqrt{3}\\hat{j}$ and the y-axis is:',
      options: ['$30^\\circ$', '$60^\\circ$', '$45^\\circ$', '$90^\\circ$'],
      answer: 0,
      explanation: 'Using $\\cos \\theta = \\vec{A}\\cdot\\hat{j}/A$, where $\\vec{A}\\cdot\\hat{j} = \\sqrt{3}$ and $A = \\sqrt{1+3} = 2$.\n\nSo $\\cos \\theta = \\sqrt{3}/2 \\implies \\theta = 30^\\circ$.'
    },
    {
      id: 'pv1-q17',
      question: 'Evaluate $(\\hat{i} + \\hat{j}) \\cdot (\\hat{j} + \\hat{k})$.',
      options: ['$0$', '$1$', '$2$', '$\\sqrt{2}$'],
      answer: 1,
      explanation: 'The dot product is $1(0) + 1(1) + 0(1) = 1$.'
    },
    {
      id: 'pv1-q18',
      question: 'The cross product of $\\hat{i}$ and $\\hat{j}$ (i.e., $\\hat{i} \\times \\hat{j}$) is:',
      options: ['$0$', '$1$', '$\\hat{k}$', '$-\\hat{k}$'],
      answer: 2,
      explanation: 'By the right-hand rule, $\\hat{i} \\times \\hat{j} = \\hat{k}$ in the standard cyclic order.'
    },
    {
      id: 'pv1-q19',
      question: 'If $\\vec{A} \\times \\vec{B} = \\vec{0}$ and neither is a null vector, then the vectors are:',
      options: ['Perpendicular', 'Parallel or anti-parallel', 'Equal in magnitude', 'Unit vectors'],
      answer: 1,
      explanation: 'Magnitude $|\\vec{A} \\times \\vec{B}| = AB \\sin \\theta$. If it is zero, $\\sin \\theta = 0$, which means $\\theta = 0^\\circ$ or $180^\\circ$.'
    },
    {
      id: 'pv1-q20',
      question: 'The area of a parallelogram whose adjacent sides are represented by vectors $\\vec{A} = 3\\hat{i} + \\hat{j}$ and $\\vec{B} = \\hat{j} + 2\\hat{k}$ is:',
      options: ['$7$', '$\\sqrt{41}$', '$\\sqrt{45}$', '$6$'],
      answer: 0,
      explanation: '$\\vec{A} \\times \\vec{B} = 2\\hat{i} - 6\\hat{j} + 3\\hat{k}$.\n\nThe area is the magnitude: $\\sqrt{2^2 + (-6)^2 + 3^2} = \\sqrt{49} = 7$.'
    },
    {
      id: 'pv1-q21',
      question: 'The area of a parallelogram whose adjacent sides are $\\vec{A} = 3\\hat{i} + 4\\hat{j}$ and $\\vec{B} = \\hat{i} + \\hat{j}$ is:',
      options: ['$1$', '$7$', '$5$', '$12$'],
      answer: 0,
      explanation: '$\\vec{A} \\times \\vec{B} = (A_x B_y - A_y B_x)\\hat{k} = (3(1) - 4(1))\\hat{k} = -1\\hat{k}$. The area is the magnitude, which is 1.'
    },
    {
      id: 'pv1-q22',
      question: 'A force $\\vec{F} = 4\\hat{i} - 3\\hat{k}$ acts at a point $\\vec{r} = 2\\hat{j}$. The torque about the origin is:',
      options: ['$-6\\hat{i} - 8\\hat{k}$', '$8\\hat{i} - 6\\hat{j}$', '$-6\\hat{i} - 8\\hat{j}$', '$6\\hat{i} + 8\\hat{k}$'],
      answer: 0,
      explanation: '$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$. i:(2*-3-0)=-6, j:-(0*-3-0)=0, k:(0*0-2*4)=-8. So $-6\\hat{i} - 8\\hat{k}$.'
    },
    {
      id: 'pv1-q23',
      question: 'The magnitude of cross product of two vectors is equal to their dot product. The angle between them is:',
      options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
      answer: 1,
      explanation: '$AB \\sin \\theta = AB \\cos \\theta \\implies \\tan \\theta = 1 \\implies \\theta = 45^\\circ$.'
    },
    {
      id: 'pv1-q24',
      question: 'If $\\hat{n}$ is a unit vector, then the magnitude of $\\hat{n} \\times \\hat{n}$ is:',
      options: ['$1$', '$0$', '$2$', 'Undefined'],
      answer: 1,
      explanation: 'Any vector crossed with itself is the null vector, magnitude 0.'
    },
    {
      id: 'pv1-q25',
      question: 'The scalar triple product $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})$ represents:',
      options: ['Area of triangle', 'Volume of parallelepiped', 'Area of parallelogram', 'Equation of a plane'],
      answer: 1,
      explanation: 'Geometrically, the scalar triple product gives the volume of a parallelepiped with edges $\\vec{A}, \\vec{B}, \\vec{C}$.'
    },
    {
      id: 'pv1-q26',
      question: 'A car moves east at $10 \\text{ m/s}$, and a truck moves north at $10 \\text{ m/s}$. Velocity of truck relative to car is:',
      options: ['$0$', '$10$', '$10\\sqrt{2}$', '$20$'],
      answer: 2,
      explanation: '$\\vec{v}_{T/C} = \\vec{v}_T - \\vec{v}_C = 10\\hat{j} - 10\\hat{i}$.\n\nMagnitude: $\\sqrt{10^2 + 10^2} = 10\\sqrt{2} \\text{ m/s}$.'
    },
    {
      id: 'pv1-q27',
      question: 'Rain vertically at $3 \\text{ m/s}$, man walk horizontally at $4 \\text{ m/s}$. Speed of rain wrt man is:',
      options: ['$1$', '$5$', '$7$', '$4$'],
      answer: 1,
      explanation: '$\\vec{v}_{R/M} = -3\\hat{j} - 4\\hat{i}$.\n\nMagnitude: $\\sqrt{3^2 + 4^2} = 5 \\text{ m/s}$.'
    },
    {
      id: 'pv1-q28',
      question: 'In previous problem, at what angle from vertical should man hold umbrella?',
      options: ['$\\tan^{-1}(3/4)$', '$\\tan^{-1}(4/3)$', '$45^\\circ$', '$\\tan^{-1}(5/3)$'],
      answer: 1,
      explanation: '$\\tan \\theta = \\text{horizontal component} / \\text{vertical component} = 4/3$.'
    },
    {
      id: 'pv1-q29',
      question: 'Swimmer in still water at $4 \\text{ km/h}$, cross river flow $3 \\text{ km/h}$ along shortest path. Net velocity?',
      options: ['$5$', '$7$', '$1$', '$\\sqrt{7}$'],
      answer: 3,
      explanation: 'Shortest path means net velocity is across the river.\n\n$v_{swim}^2 = v_{net}^2 + v_{river}^2$.\n\n$4^2 = v_{net}^2 + 3^2 \\implies v_{net} = \\sqrt{7} \\text{ km/h}$.'
    },
    {
      id: 'pv1-q30',
      question: 'If $\\vec{A} = 3\\hat{i} + 4\\hat{j}$, vector with magnitude 25 and parallel to $\\vec{A}$ is:',
      options: ['$15\\hat{i} + 20\\hat{j}$', '$25\\hat{i} + 25\\hat{j}$', '$21\\hat{i} + 28\\hat{j}$', '$7\\hat{i} + 24\\hat{j}$'],
      answer: 0,
      explanation: 'Magnitude of $\\vec{A}$ is 5. Multiply $\\vec{A}$ by $25/5 = 5$ to get $15\\hat{i} + 20\\hat{j}$.'
    },
    {
      id: 'pv1-q31',
      question: 'Value of $x$ for which $\\vec{a} = x\\hat{i} - 2\\hat{j} + 5\\hat{k}$ and $\\vec{b} = 2\\hat{i} + x\\hat{j} - \\hat{k}$ are orthogonal:',
      options: ['$2.5$', 'No real $x$ exists', '$5$', '$-5$'],
      answer: 1,
      explanation: '$\\vec{a}\\cdot\\vec{b} = 2x - 2x - 5 = -5$. This can never be zero.'
    },
    {
      id: 'pv1-q32',
      question: 'Minimum number of non-zero coplanar vectors of unequal magnitudes to produce zero resultant?',
      options: ['2', '3', '4', '5'],
      answer: 1,
      explanation: 'Two unequal vectors can never cancel. Three unequal vectors can form a closed triangle.'
    },
    {
      id: 'pv1-q33',
      question: 'Initial point $(2, -3, 1)$, terminal point $(5, -1, 4)$. Position vector?',
      options: ['$7\\hat{i} - 4\\hat{j} + 5\\hat{k}$', '$3\\hat{i} + 2\\hat{j} + 3\\hat{k}$', '$-3\\hat{i} - 2\\hat{j} - 3\\hat{k}$', '$3\\hat{i} - 4\\hat{j} + 3\\hat{k}$'],
      answer: 1,
      explanation: 'Vector is $(5-2)\\hat{i} + (-1-(-3))\\hat{j} + (4-1)\\hat{k} = 3\\hat{i} + 2\\hat{j} + 3\\hat{k}$.'
    },
    {
      id: 'pv1-q34',
      question: 'Value of $(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B})$ is:',
      options: ['$A^2 - B^2$', '$0$', '$A^2 + B^2$', '$2\\vec{A}\\cdot\\vec{B}$'],
      answer: 0,
      explanation: '$A^2 - \\vec{A}\\cdot\\vec{B} + \\vec{A}\\cdot\\vec{B} - B^2 = A^2 - B^2$.'
    },
    {
      id: 'pv1-q35',
      question: 'Sum $\\hat{i}\\cdot(\\hat{j}\\times\\hat{k}) + \\hat{j}\\cdot(\\hat{i}\\times\\hat{k}) + \\hat{k}\\cdot(\\hat{i}\\times\\hat{j})$ is:',
      options: ['$0$', '$1$', '$2$', '$3$'],
      answer: 1,
      explanation: '$1(1) + 1(-1) + 1(1) = 1$.'
    },
    {
      id: 'pv1-q36',
      question: 'Vector magnitude 5 at $60^\\circ$ with positive x-axis is:',
      options: ['$5\\cos 60^\\circ\\hat{i} + 5\\sin 60^\\circ\\hat{j}$', '$5\\sin 60^\\circ\\hat{i} + 5\\cos 60^\\circ\\hat{j}$', '$2.5\\hat{i} + 2.5\\hat{j}$', '$5\\hat{i} + 5\\sqrt{3}\\hat{j}$'],
      answer: 0,
      explanation: 'Resolving components gives $x = 5 \\cos 60^\\circ$ and $y = 5 \\sin 60^\\circ$.'
    },
    {
      id: 'pv1-q37',
      question: 'Max magnitude of cross product when angle is:',
      options: ['$0^\\circ$', '$45^\\circ$', '$90^\\circ$', '$180^\\circ$'],
      answer: 2,
      explanation: 'Since cross product magnitude is $AB \\sin \\theta$, it is max when $\\sin \\theta = 1$ ($90^\\circ$).'
    },
    {
      id: 'pv1-q38',
      question: 'Resultant of $\\vec{A} + \\vec{B} + \\vec{C}$ where $\\vec{C}$ is not coplanar with $\\vec{A}, \\vec{B}$:',
      options: ['Can be zero', 'Cannot be zero', 'Lies in plane of A, B', 'Is unit vector'],
      answer: 1,
      explanation: 'Three vectors must be coplanar to form a closed loop (zero resultant).'
    },
    {
      id: 'pv1-q39',
      question: 'Which operation is physically meaningless?',
      options: ['Add vector to scalar', 'Multiply vector by scalar', 'Dot product', 'Cross product'],
      answer: 0,
      explanation: 'Vectors and scalars cannot be added together as they exist in different spaces.'
    },
    {
      id: 'pv1-q40',
      question: 'Area of triangle formed by $\\vec{A}$ and $\\vec{B}$ as adjacent sides:',
      options: ['$\\frac{1}{2}|\\vec{A}\\cdot\\vec{B}|$', '$|\\vec{A}\\times\\vec{B}|$', '$\\frac{1}{2}|\\vec{A}\\times\\vec{B}|$', '$|\\vec{A}||\\vec{B}|$'],
      answer: 2,
      explanation: 'Parallelogram area is $|\\vec{A} \\times \\vec{B}|$, and triangle is half of it.'
    },
    {
      id: 'pv1-q41',
      question: 'If $|\\vec{P} + \\vec{Q}| = |\\vec{P}| = |\\vec{Q}|$, angle between $\\vec{P}$ and $\\vec{Q}$?',
      options: ['$60^\\circ$', '$90^\\circ$', '$120^\\circ$', '$180^\\circ$'],
      answer: 2,
      explanation: '$x^2 = x^2 + x^2 + 2x^2 \\cos \\theta \\implies \\cos \\theta = -1/2 \\implies 120^\\circ$.'
    },
    {
      id: 'pv1-q42',
      question: 'Value of $(\\vec{a}\\times\\vec{b}) \\cdot (\\vec{a}\\times\\vec{b})$ is:',
      options: ['$a^2b^2 - (\\vec{a}\\cdot\\vec{b})^2$', '$a^2b^2 + (\\vec{a}\\cdot\\vec{b})^2$', '$0$', '$a^2b^2$'],
      answer: 0,
      explanation: 'Lagrange\'s identity: $|\\vec{a} \\times \\vec{b}|^2 = a^2 b^2 \\sin^2 \\theta = a^2 b^2 (1 - \\cos^2 \\theta) = a^2 b^2 - (ab \\cos \\theta)^2$.'
    },
    {
      id: 'pv1-q43',
      question: 'If $\\vec{A}\\cdot\\vec{B} = 0$ and $\\vec{A}\\cdot\\vec{C} = 0$, then $\\vec{A}$ is parallel to:',
      options: ['$\\vec{B}$', '$\\vec{C}$', '$\\vec{B}\\times\\vec{C}$', '$\\vec{B}\\cdot\\vec{C}$'],
      answer: 2,
      explanation: '$\\vec{A}$ is perpendicular to both B and C, so it points along their cross product direction.'
    },
    {
      id: 'pv1-q44',
      question: 'Projection vector of $\\hat{i}+\\hat{j}$ along $\\hat{i}-\\hat{j}$:',
      options: ['$\\hat{i}-\\hat{j}$', '$\\hat{i}+\\hat{j}$', '$\\vec{0}$', '$1$'],
      answer: 2,
      explanation: 'Dot product is zero, so the projection is the null vector.'
    },
    {
      id: 'pv1-q45',
      question: 'River West to East at 5m/s. Swimmer 10m/s cross South to North in shortest time. Direction?',
      options: ['Due North', 'Due East', '$30^\\circ$ West of North', '$30^\\circ$ East of North'],
      answer: 0,
      explanation: 'Shortest time occurs when velocity across river is maximized, so swim due North.'
    },
    {
      id: 'pv1-q46',
      question: 'If $\\vec{a} = 2\\hat{i} + 3\\hat{j}$ and $\\vec{b} = p\\hat{i} + 6\\hat{j}$ are parallel, $p$ is:',
      options: ['$3$', '$4$', '$6$', '$2$'],
      answer: 1,
      explanation: 'Ratio of components: $2/p = 3/6 = 1/2 \\implies p = 4$.'
    },
    {
      id: 'pv1-q47',
      question: 'Angle between body diagonals of a cube?',
      options: ['$\\cos^{-1}(1/3)$', '$\\cos^{-1}(1/2)$', '$\\cos^{-1}(1/\\sqrt{3})$', '$90^\\circ$'],
      answer: 0,
      explanation: 'Calculated using dot product of $(1,1,1)$ and $(-1,1,1)$.'
    },
    {
      id: 'pv1-q48',
      question: 'Component of $\\vec{a}$ perpendicular to $\\vec{b}$:',
      options: ['Projection of a on b', 'a - Projection of a on b', 'a X b', 'Unit vector'],
      answer: 1,
      explanation: 'Perpendicular component is the total vector minus the parallel component.'
    },
    {
      id: 'pv1-q49',
      question: 'For unit vectors $\\hat{A}$ and $\\hat{B}$ with angle $\\theta$, $|\\hat{A} - \\hat{B}|$ is:',
      options: ['$2\\sin(\\theta/2)$', '$2\\cos(\\theta/2)$', '$\\sin\\theta$', '$\\cos\\theta$'],
      answer: 0,
      explanation: 'Using $2(1-\\cos\\theta) = 4\\sin^2(\\theta/2)$ and taking square root.'
    },
    {
      id: 'pv1-q50',
      question: 'If vectors $\\vec{A} = \\hat{i} + \\hat{j} + \\hat{k}$, $\\vec{B} = \\hat{i} - \\hat{j} + \\hat{k}$, and $\\vec{C} = \\hat{i} + 2\\hat{j} + x\\hat{k}$ are coplanar, find the value of $x$.',
      options: ['$1$', '$2$', '$3$', '$0$'],
      answer: 0,
      explanation: 'Three vectors are coplanar if their scalar triple product (determinant) is zero.\n\n$\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 2 & x \\end{vmatrix} = 1(-x-2) - 1(x-1) + 1(2-(-1)) = -2x+2 = 0 \\implies x=1$.'
    },
    {
      id: 'pv1-q51',
      question: 'Max value of $|\\vec{u}\\cdot\\vec{v}| + |\\vec{u}\\times\\vec{v}|$ with $u=3, v=4$?',
      options: ['$12$', '$24$', '$12\\sqrt{2}$', '$7$'],
      answer: 2,
      explanation: 'Maximizing $12(\\sin\\theta + \\cos\\theta)$ gives $12\\sqrt{2}$ at $45^\\circ$.'
    }
  ]
};

export default vectorsSet01;
