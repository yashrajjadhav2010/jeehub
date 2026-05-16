import { QuizSet } from '../../../types';

const vectorsSet02: QuizSet = {
  id: 'set-02',
  title: 'Vectors - Set 02',
  chapterId: 'vectors',
  subjectId: 'physics',
  difficulty: 'medium',
  questions: [
    {
      id: 'pv2-q1',
      question: 'Two vectors $\\vec{P}$ and $\\vec{Q}$ of magnitudes $5$ and $12$ units respectively are added. If the magnitude of their resultant is $13$ units, the angle between the two vectors is:',
      options: ['$0^\\circ$', '$60^\\circ$', '$90^\\circ$', '$180^\\circ$'],
      answer: 2,
      explanation: 'Using the magnitude formula:\n$R^2 = P^2 + Q^2 + 2PQ \\cos \\theta$.\n\nSubstituting the values:\n$13^2 = 5^2 + 12^2 + 2(5)(12) \\cos \\theta$\n$169 = 25 + 144 + 120 \\cos \\theta$\n$169 = 169 + 120 \\cos \\theta \\implies 120 \\cos \\theta = 0 \\implies \\cos \\theta = 0$.\n\nThus, $\\theta = 90^\\circ$.'
    },
    {
      id: 'pv2-q2',
      question: 'A vector displacement moves from point $A(2, 1, 3)$ to point $B(4, 3, 2)$. If a constant force $\\vec{F} = 3\\hat{i} + 2\\hat{j} - \\hat{k}$ acts along this path, the work done (given by $\\vec{F} \\cdot \\vec{s}$) is:',
      options: ['$15$', '$11$', '$9$', '$5$'],
      answer: 1,
      explanation: 'The displacement vector:\n$\\vec{s} = \\vec{r}_B - \\vec{r}_A = (4-2)\\hat{i} + (3-1)\\hat{j} + (2-3)\\hat{k} = 2\\hat{i} + 2\\hat{j} - \\hat{k}$.\n\nWork done:\n$W = \\vec{F} \\cdot \\vec{s} = (3\\hat{i} + 2\\hat{j} - \\hat{k}) \\cdot (2\\hat{i} + 2\\hat{j} - \\hat{k})$\n$= (3)(2) + (2)(2) + (-1)(-1) = 6 + 4 + 1 = 11$.'
    },
    {
      id: 'pv2-q3',
      question: 'Evaluate the cross product (torque) $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ where $\\vec{r} = 3\\hat{i} + 2\\hat{j} + 3\\hat{k}$ and $\\vec{F} = 2\\hat{i} - 3\\hat{j} + 4\\hat{k}$.',
      options: ['$17\\hat{i} + 6\\hat{j} - 13\\hat{k}$', '$-17\\hat{i} + 6\\hat{j} + 13\\hat{k}$', '$17\\hat{i} - 6\\hat{j} - 13\\hat{k}$', '$8\\hat{i} - 6\\hat{j} + 12\\hat{k}$'],
      answer: 2,
      explanation: 'Using the determinant method:\n$\\vec{\\tau} = \\hat{i}[(2)(4) - (3)(-3)] - \\hat{j}[(3)(4) - (3)(2)] + \\hat{k}[(3)(-3) - (2)(2)]$\n$= \\hat{i}(8+9) - \\hat{j}(12-6) + \\hat{k}(-9-4) = 17\\hat{i} - 6\\hat{j} - 13\\hat{k}$.'
    },
    {
      id: 'pv2-q4',
      question: 'Two vectors $\\vec{P} = 2\\hat{i} + a\\hat{j} + \\hat{k}$ and $\\vec{Q} = 4\\hat{i} - 2\\hat{j} - 2\\hat{k}$ are strictly perpendicular to each other. The value of scalar $a$ is:',
      options: ['$-3$', '$2$', '$4$', '$3$'],
      answer: 3,
      explanation: 'For perpendicular vectors, $\\vec{P} \\cdot \\vec{Q} = 0$. So $(2)(4) + (a)(-2) + (1)(-2) = 0 \\implies 8 - 2a - 2 = 0 \\implies 6 = 2a \\implies a = 3$.'
    },
    {
      id: 'pv2-q5',
      question: 'The scalar projection of vector $\\vec{v} = 4\\hat{i} - 3\\hat{j} + 2\\hat{k}$ along the direction of vector $\\vec{A} = \\hat{i} + 2\\hat{j} - 2\\hat{k}$ is:',
      options: ['$-6$', '$2/3$', '$-2$', '$-6/29$'],
      answer: 2,
      explanation: 'Scalar projection = $\\vec{v} \\cdot \\vec{A}/|\\vec{A}|$. $\\vec{v} \\cdot \\vec{A} = (4)(1) + (-3)(2) + (2)(-2) = 4 - 6 - 4 = -6$. Magnitude $|\\vec{A}| = \\sqrt{1^2 + 2^2 + (-2)^2} = \\sqrt{9} = 3$. So projection = $-6/3 = -2$.'
    },
    {
      id: 'pv2-q6',
      question: 'If the sum of two distinct unit vectors is also a unit vector, the angle between the two original unit vectors is:',
      options: ['$60^\\circ$', '$90^\\circ$', '$120^\\circ$', '$150^\\circ$'],
      answer: 2,
      explanation: 'Given $|\\hat{a}| = 1, |\\hat{b}| = 1, |\\hat{a} + \\hat{b}| = 1$.\n\nSquaring both sides:\n$|\\hat{a}|^2 + |\\hat{b}|^2 + 2\\hat{a}\\cdot\\hat{b} = 1$\n$1 + 1 + 2 \\cos \\theta = 1$\n$2 \\cos \\theta = -1 \\implies \\cos \\theta = -1/2$.\n\nThus, $\\theta = 120^\\circ$.'
    },
    {
      id: 'pv2-q7',
      question: 'A vector $\\vec{A}$ makes angles $\\alpha, \\beta, \\gamma$ with the X, Y, and Z axes respectively. The value of $\\sin^2 \\alpha + \\sin^2 \\beta + \\sin^2 \\gamma$ is:',
      options: ['$0$', '$1$', '$2$', '$3$'],
      answer: 2,
      explanation: 'We know $\\cos^2 \\alpha + \\cos^2 \\beta + \\cos^2 \\gamma = 1$.\n\nUsing $\\cos^2 \\theta = 1 - \\sin^2 \\theta$, we get:\n$(1-\\sin^2 \\alpha) + (1-\\sin^2 \\beta) + (1-\\sin^2 \\gamma) = 1$\n$3 - (\\sin^2 \\alpha + \\sin^2 \\beta + \\sin^2 \\gamma) = 1$\n$\\sin^2 \\alpha + \\sin^2 \\beta + \\sin^2 \\gamma = 2$.'
    },
    {
      id: 'pv2-q8',
      question: 'The area of a triangle formed by two vectors $\\vec{a} = 2\\hat{i} + \\hat{j} - \\hat{k}$ and $\\vec{b} = \\hat{i} - \\hat{j} + 2\\hat{k}$ acting as its adjacent sides is:',
      options: ['$\\frac{\\sqrt{14}}{2}$', '$\\sqrt{35}$', '$\\frac{\\sqrt{35}}{2}$', '$14$'],
      answer: 2,
      explanation: 'Area = $\\frac{1}{2}|\\vec{a} \\times \\vec{b}|$.\n\n$\\vec{a} \\times \\vec{b} = \\hat{i}(2-1) - \\hat{j}(4-(-1)) + \\hat{k}(-2-1) = \\hat{i} - 5\\hat{j} - 3\\hat{k}$.\n\nMagnitude = $\\sqrt{1^2 + (-5)^2 + (-3)^2} = \\sqrt{1 + 25 + 9} = \\sqrt{35}$.\n\nArea = $\\sqrt{35}/2$.'
    },
    {
      id: 'pv2-q9',
      question: 'For any two vectors $\\vec{a}$ and $\\vec{b}$, the value of $|\\vec{a} \\times \\vec{b}|^2 + (\\vec{a} \\cdot \\vec{b})^2$ evaluates to:',
      options: ['$0$', '$a^2 + b^2$', '$a^2b^2$', '$2a^2b^2$'],
      answer: 2,
      explanation: 'Lagrange\'s Identity: $(ab \\sin \\theta)^2 + (ab \\cos \\theta)^2 = a^2 b^2 (\\sin^2 \\theta + \\cos^2 \\theta) = a^2 b^2$.'
    },
    {
      id: 'pv2-q10',
      question: 'The diagonals of a parallelogram are $\\vec{D}_1 = 3\\hat{i} + \\hat{j} - 2\\hat{k}$ and $\\vec{D}_2 = \\hat{i} - 3\\hat{j} + 4\\hat{k}$. What is the area?',
      options: ['$5\\sqrt{3}$', '$10\\sqrt{3}$', '$10$', '$5\\sqrt{6}$'],
      answer: 0,
      explanation: 'Area of parallelogram given diagonals = $\\frac{1}{2}|\\vec{D}_1 \\times \\vec{D}_2|$.\n\n$\\vec{D}_1 \\times \\vec{D}_2 = -2\\hat{i} - 14\\hat{j} - 10\\hat{k}$.\n\nMagnitude = $\\sqrt{4 + 196 + 100} = \\sqrt{300} = 10\\sqrt{3}$.\n\nArea = $10\\sqrt{3}/2 = 5\\sqrt{3}$.'
    },
    {
      id: 'pv2-q11',
      question: 'Find the volume of the parallelepiped formed by edge vectors $\\vec{a} = 2\\hat{i} - 3\\hat{j}$, $\\vec{b} = \\hat{i} + \\hat{j} - \\hat{k}$, and $\\vec{c} = 3\\hat{i} - \\hat{k}$.',
      options: ['$-4$', '$4$', '$8$', '$0$'],
      answer: 1,
      explanation: 'Volume = $|\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})| = \\begin{vmatrix} 2 & -3 & 0 \\\\ 1 & 1 & -1 \\\\ 3 & 0 & -1 \\end{vmatrix}$. Expanding along R1: $2(-1-0) - (-3)(-1-(-3)) = 2(-1) + 3(2) = -2 + 6 = 4$.'
    },
    {
      id: 'pv2-q12',
      question: 'The magnitude of the component of velocity $\\vec{v} = 3\\hat{i} + 4\\hat{j}$ perpendicular to $\\hat{n} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$ is:',
      options: ['$3.5$', '$0.5$', '$\\frac{1}{\\sqrt{2}}$', '$\\frac{7}{\\sqrt{2}}$'],
      answer: 2,
      explanation: 'Parallel component magnitude $v_{\\parallel} = \\vec{v}\\cdot\\hat{n} = (3+4)/\\sqrt{2} = 7/\\sqrt{2}$.\n\nParallel component vector:\n$\\vec{v}_{\\parallel} = (7/\\sqrt{2})\\hat{n} = (7/2)(\\hat{i}+\\hat{j}) = 3.5\\hat{i}+3.5\\hat{j}$.\n\nPerpendicular component:\n$\\vec{v}_{\\perp} = \\vec{v} - \\vec{v}_{\\parallel} = (3-3.5)\\hat{i} + (4-3.5)\\hat{j} = -0.5\\hat{i} + 0.5\\hat{j}$.\n\nMagnitude $|v_{\\perp}| = \\sqrt{0.5^2 + 0.5^2} = \\sqrt{0.5} = 1/\\sqrt{2}$.'
    },
    {
      id: 'pv2-q13',
      question: 'The scalar projection of $(\\vec{A} + \\vec{B})$ onto $(\\vec{A} - \\vec{B})$ where $\\vec{A} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ and $\\vec{B} = \\hat{i} - 2\\hat{j} + 3\\hat{k}$ is:',
      options: ['$14$', '$\\sqrt{42}$', '$0$', '$\\frac{1}{\\sqrt{42}}$'],
      answer: 2,
      explanation: '$\\vec{U} = \\vec{A}+\\vec{B} = 3\\hat{i}+\\hat{j}+2\\hat{k}$, $\\vec{V} = \\vec{A}-\\vec{B} = \\hat{i}+5\\hat{j}-4\\hat{k}$. Scalar projection = $\\vec{U}\\cdot\\vec{V}/|\\vec{V}|$. $\\vec{U}\\cdot\\vec{V} = 3(1) + 1(5) + 2(-4) = 3+5-8=0$. The projection is zero.'
    },
    {
      id: 'pv2-q14',
      question: 'Two distinct vectors satisfy $|\\vec{a} + \\vec{b}| = |\\vec{a} - \\vec{b}|$. This guarantees that:',
      options: ['Parallel', 'Perpendicular', 'Equal magnitude', 'Unit vectors'],
      answer: 1,
      explanation: 'Squaring gives $|\\vec{a}|^2 + |\\vec{b}|^2 + 2\\vec{a}\\cdot\\vec{b} = |\\vec{a}|^2 + |\\vec{b}|^2 - 2\\vec{a}\\cdot\\vec{b} \\implies 4\\vec{a}\\cdot\\vec{b} = 0 \\implies \\vec{a}\\cdot\\vec{b} = 0$.'
    },
    {
      id: 'pv2-q15',
      question: 'Resultant $\\vec{R} = \\vec{A} + \\vec{B}$ is perpendicular to $\\vec{A}$, and $R = B/2$. The angle between $\\vec{A}$ and $\\vec{B}$ is:',
      options: ['$120^\\circ$', '$150^\\circ$', '$135^\\circ$', '$180^\\circ$'],
      answer: 1,
      explanation: '$\\vec{R}\\cdot\\vec{A} = 0 \\implies (\\vec{A}+\\vec{B})\\cdot\\vec{A} = 0 \\implies A^2 + AB\\cos\\theta = 0 \\implies \\cos\\theta = -A/B$.\n\nFrom $R^2 = A^2+B^2+2AB\\cos\\theta$, we get $R^2 = B^2-A^2$.\n\nGiven $R=B/2$, so $B^2/4 = B^2-A^2 \\implies A^2 = 3B^2/4 \\implies A/B = \\sqrt{3}/2$.\n\nThus $\\cos\\theta = -\\sqrt{3}/2 \\implies \\theta = 150^\\circ$.'
    },
    {
      id: 'pv2-q16',
      question: 'Three vectors magnitudes 3, 4, 5. Each perpendicular to the sum of other two. Magnitude of $|\\vec{a} + \\vec{b} + \\vec{c}|$?',
      options: ['$5\\sqrt{2}$', '$12$', '$50$', '$0$'],
      answer: 0,
      explanation: 'Given $\\vec{a}\\cdot(\\vec{b}+\\vec{c})=0, \\vec{b}\\cdot(\\vec{a}+\\vec{c})=0, \\vec{c}\\cdot(\\vec{a}+\\vec{b})=0$. Summing gives $2(\\vec{a}\\cdot\\vec{b}+\\vec{b}\\cdot\\vec{c}+\\vec{c}\\cdot\\vec{a})=0$. $|\\vec{a}+\\vec{b}+\\vec{c}|^2 = a^2+b^2+c^2 + 2\\text{sum} = 3^2+4^2+5^2+0 = 50 \\implies$ magnitude = $\\sqrt{50} = 5\\sqrt{2}$.'
    },
    {
      id: 'pv2-q17',
      question: '$\\vec{A}$ points North, $\\vec{B}$ points East. In what direction does $\\vec{A} \\times \\vec{B}$ point?',
      options: ['North-East', 'South-West', 'Downward', 'Upward'],
      answer: 2,
      explanation: 'Using right hand rule: fingers North (y), curl towards East (x). Thumb points Down (-z).'
    },
    {
      id: 'pv2-q18',
      question: 'Evaluate vector triple product: $\\hat{i} \\times (\\hat{j} \\times \\hat{k})$.',
      options: ['$\\hat{i}$', '$\\hat{j}$', '$\\hat{k}$', '$\\vec{0}$'],
      answer: 3,
      explanation: '$\\hat{j} \\times \\hat{k} = \\hat{i}$. So $\\hat{i} \\times \\hat{i} = \\vec{0}$.'
    },
    {
      id: 'pv2-q19',
      question: 'If $\\vec{P} = \\hat{i} - 2\\hat{j} + 3\\hat{k}$ is parallel to $\\vec{Q} = x\\hat{i} + y\\hat{j} + z\\hat{k}$, then:',
      options: ['$x+y+z=0$', '$x/1 = y/-2 = z/3$', '$1/x = -2/y = 3/z = 0$', '$x-2y+3z=0$'],
      answer: 1,
      explanation: 'Collinear vectors have proportional components.'
    },
    {
      id: 'pv2-q20',
      question: 'Angle between vector $\\vec{V} = \\hat{i} + \\hat{j}$ and the z-axis?',
      options: ['$0^\\circ$', '$45^\\circ$', '$90^\\circ$', '$180^\\circ$'],
      answer: 2,
      explanation: 'Dot product with $\\hat{k}$ is zero, so the vector is perpendicular to the z-axis.'
    },
    {
      id: 'pv2-q21',
      question: 'The vector $\\vec{C} = \\vec{A} \\times (\\vec{A} \\times \\vec{B})$ is coplanar with:',
      options: ['Only A', 'Only B', 'Plane of A and B', 'Plane perpendicular to A and B'],
      answer: 2,
      explanation: 'Using $\\vec{A} \\times (\\vec{A} \\times \\vec{B}) = \\vec{A}(\\vec{A}\\cdot\\vec{B}) - \\vec{B}(\\vec{A}\\cdot\\vec{A})$, which is a linear combination of A and B.'
    },
    {
      id: 'pv2-q22',
      question: 'If $|\\vec{A} \\times \\vec{B}| = AB$, then vectors are:',
      options: ['Parallel', 'Anti-parallel', 'Perpendicular', 'Null'],
      answer: 2,
      explanation: '$AB \\sin \\theta = AB \\implies \\sin \\theta = 1 \\implies \\theta = 90^\\circ$.'
    },
    {
      id: 'pv2-q23',
      question: 'If $\\vec{a} \\cdot \\vec{b} = \\sqrt{3} |\\vec{a} \\times \\vec{b}|$, the angle $\\theta$ is:',
      options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
      answer: 0,
      explanation: '$ab \\cos \\theta = \\sqrt{3} ab \\sin \\theta \\implies \\tan \\theta = 1/\\sqrt{3} \\implies \\theta = 30^\\circ$.'
    },
    {
      id: 'pv2-q24',
      question: 'Calculate $|(3\\hat{i} + 4\\hat{j}) \\times (7\\hat{i} + 24\\hat{j})|$.',
      options: ['$44$', '$50$', '$0$', '$100$'],
      answer: 0,
      explanation: 'Cross product magnitude = $|(3)(24) - (4)(7)| = |72 - 28| = 44$.'
    },
    {
      id: 'pv2-q25',
      question: '$(\\vec{v}_1 - \\vec{v}_2) \\cdot (\\vec{v}_1 + \\vec{v}_2)$ simplifies to:',
      options: ['$v_1^2 + v_2^2$', '$v_1^2 - v_2^2$', '$2\\vec{v}_1 \\cdot \\vec{v}_2$', '$0$'],
      answer: 1,
      explanation: 'Expanding dot product: $\\vec{v}_1\\cdot\\vec{v}_1 - \\vec{v}_2\\cdot\\vec{v}_2 = v_1^2 - v_2^2$.'
    },
    {
      id: 'pv2-q26',
      question: 'If $\\vec{C} = \\vec{A} + \\vec{B}$ and $A^2 + B^2 = C^2$, angle between A and B?',
      options: ['$0^\\circ$', '$60^\\circ$', '$90^\\circ$', '$180^\\circ$'],
      answer: 2,
      explanation: 'Pythagorean theorem holds for vectors only if they are perpendicular.'
    },
    {
      id: 'pv2-q27',
      question: 'If $\\vec{a} \\times \\vec{b} = \\vec{c}$, which is INCORRECT?',
      options: ['c perp a', 'c perp b', 'c coplanar with a, b', 'c mag is ab sin theta'],
      answer: 2,
      explanation: 'Cross product is always perpendicular to the plane of the two vectors.'
    },
    {
      id: 'pv2-q28',
      question: 'At time $t$, $x = 3t^2$ and $y = 4t^2$. Velocity magnitude at $t = 1$?',
      options: ['$5$', '$10$', '$7$', '$14$'],
      answer: 1,
      explanation: '$v_x = 6t, v_y = 8t$. At $t=1, v_x=6, v_y=8$. Magnitude = $\sqrt{6^2+8^2} = 10$.'
    },
    {
      id: 'pv2-q29',
      question: 'Magnitude of difference $|\\hat{n}_1 - \\hat{n}_2|$ of two unit vectors?',
      options: ['$2\\sin(\\theta/2)$', '$2\\cos(\\theta/2)$', '$\\hat{n}_1 \\cdot \\hat{n}_2$', '$|\\hat{n}_1 \\times \\hat{n}_2|$'],
      answer: 0,
      explanation: 'Calculated using $2(1-\\cos \\theta) = 4\\sin^2(\\theta/2)$.'
    },
    {
      id: 'pv2-q30',
      question: '$\vec{C}$ perp to both $\vec{A}=2\hat{i}+3\hat{j}$ and $\vec{B}=\hat{i}+4\hat{j}$. $\vec{C}$ is parallel to:',
      options: ['x-axis', 'y-axis', 'z-axis', 'y=x'],
      answer: 2,
      explanation: 'Both A and B are in the xy-plane, so a vector perpendicular to both must be the z-axis.'
    }
  ]
};

export default vectorsSet02;
