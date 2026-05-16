import { QuizSet } from '../../../types';

const vectorsSet03: QuizSet = {
  id: 'set-03',
  title: 'Vectors - Set 03',
  chapterId: 'vectors',
  subjectId: 'physics',
  difficulty: 'hard',
  questions: [
    {
      id: 'pv3-q1',
      question: 'Evaluate the vector identity: $\\hat{i} \\times (\\vec{a} \\times \\hat{i}) + \\hat{j} \\times (\\vec{a} \\times \\hat{j}) + \\hat{k} \\times (\\vec{a} \\times \\hat{k})$.',
      options: ['$\\vec{0}$', '$\\vec{a}$', '$2\\vec{a}$', '$3\\vec{a}$'],
      answer: 2,
      explanation: 'Using the Vector Triple Product expansion Rule:\n$\\vec{A} \\times (\\vec{B} \\times \\vec{C}) = (\\vec{A} \\cdot \\vec{C})\\vec{B} - (\\vec{A} \\cdot \\vec{B})\\vec{C}$.\n\nThe first term becomes:\n$\\hat{i} \\times (\\vec{a} \\times \\hat{i}) = (\\hat{i} \\cdot \\hat{i})\\vec{a} - (\\hat{i} \\cdot \\vec{a})\\hat{i} = \\vec{a} - a_x\\hat{i}$.\n\nSimilarly:\n$\\hat{j} \\times (\\vec{a} \\times \\hat{j}) = \\vec{a} - a_y\\hat{j}$\n$\\hat{k} \\times (\\vec{a} \\times \\hat{k}) = \\vec{a} - a_z\\hat{k}$\n\nSumming for all three components:\n$(\\vec{a} - a_x\\hat{i}) + (\\vec{a} - a_y\\hat{j}) + (\\vec{a} - a_z\\hat{k})$\n$= 3\\vec{a} - (a_x\\hat{i} + a_y\\hat{j} + a_z\\hat{k})$\n$= 3\\vec{a} - \\vec{a} = 2\\vec{a}$.'
    },
    {
      id: 'pv3-q2',
      question: 'The scalar triple product $[\\vec{a}+\\vec{b}, \\vec{b}+\\vec{c}, \\vec{c}+\\vec{a}]$ is equal to:',
      options: ['$0$', '$[\\vec{a}\\,\\vec{b}\\,\\vec{c}]$', '$2[\\vec{a}\\,\\vec{b}\\,\\vec{c}]$', '$[\\vec{a}\\,\\vec{b}\\,\\vec{c}]^2$'],
      answer: 2,
      explanation: 'Using the property of the scalar triple product:\n$(\\vec{b}+\\vec{c}) \\times (\\vec{c}+\\vec{a}) = \\vec{b}\\times\\vec{c} + \\vec{b}\\times\\vec{a} + \\vec{c}\\times\\vec{c} + \\vec{c}\\times\\vec{a}$\nSince $\\vec{c}\\times\\vec{c} = 0$, we have:\n$= \\vec{b}\\times\\vec{c} + \\vec{b}\\times\\vec{a} + \\vec{c}\\times\\vec{a}$\n\nNow taking the dot product with $(\\vec{a}+\\vec{b})$:\n$(\\vec{a}+\\vec{b}) \\cdot (\\vec{b}\\times\\vec{c} + \\vec{b}\\times\\vec{a} + \\vec{c}\\times\\vec{a})$\n$= \\vec{a}\\cdot(\\vec{b}\\times\\vec{c}) + \\vec{a}\\cdot(\\vec{b}\\times\\vec{a}) + \\vec{a}\\cdot(\\vec{c}\\times\\vec{a}) + \\vec{b}\\cdot(\\vec{b}\\times\\vec{c}) + \\vec{b}\\cdot(\\vec{b}\\times\\vec{a}) + \\vec{b}\\cdot(\\vec{c}\\times\\vec{a})$\n\n$= [\\vec{a}\\,\\vec{b}\\,\\vec{c}] + 0 + 0 + 0 + 0 + [\\vec{b}\\,\\vec{c}\\,\\vec{a}]$\n$= [\\vec{a}\\,\\vec{b}\\,\\vec{c}] + [\\vec{a}\\,\\vec{b}\\,\\vec{c}] = 2[\\vec{a}\\,\\vec{b}\\,\\vec{c}]$.'
    },
    {
      id: 'pv3-q3',
      question: 'If $\\vec{a}, \\vec{b}, \\vec{c}$ are non-coplanar vectors, evaluate $[\\vec{a}\\times\\vec{b}, \\vec{b}\\times\\vec{c}, \\vec{c}\\times\\vec{a}]$.',
      options: ['$[\\vec{a}\\,\\vec{b}\\,\\vec{c}]$', '$2[\\vec{a}\\,\\vec{b}\\,\\vec{c}]$', '$[\\vec{a}\\,\\vec{b}\\,\\vec{c}]^2$', '$0$'],
      answer: 2,
      explanation: 'Using the vector identity for cross product of cross products:\n$(\\vec{b}\\times\\vec{c}) \\times (\\vec{c}\\times\\vec{a}) = [\\vec{b}\\,\\vec{c}\\,\\vec{a}]\\vec{c} - [\\vec{b}\\,\\vec{c}\\,\\vec{c}]\\vec{a}$\n$= [\\vec{b}\\,\\vec{c}\\,\\vec{a}]\\vec{c} (\\text{as } [\\vec{b}\\,\\vec{c}\\,\\vec{c}] = 0)$\n$= [\\vec{a}\\,\\vec{b}\\,\\vec{c}]\\vec{c}$\n\nThen the overall scalar triple product is:\n$(\\vec{a}\\times\\vec{b}) \\cdot ([\\vec{a}\\,\\vec{b}\\,\\vec{c}]\\vec{c}) = [\\vec{a}\\,\\vec{b}\\,\\vec{c}] ((\\vec{a}\\times\\vec{b}) \\cdot \\vec{c})$\n$= [\\vec{a}\\,\\vec{b}\\,\\vec{c}] \\cdot [\\vec{a}\\,\\vec{b}\\,\\vec{c}] = [\\vec{a}\\,\\vec{b}\\,\\vec{c}]^2$.'
    },
    {
      id: 'pv3-q4',
      question: 'Two particles start from $\\vec{r}_1 = 3\\hat{i} + 4\\hat{j}$ and $\\vec{r}_2 = 8\\hat{i} - 8\\hat{j}$ with velocities $\\vec{v}_1 = 2\\hat{i} + \\hat{j}$ and $\\vec{v}_2 = -3\\hat{i} + 13\\hat{j}$. The minimum distance between them is:',
      options: ['$0$', '$2\\sqrt{2}$', '$5$', '$\\sqrt{5}$'],
      answer: 0,
      explanation: 'Relative position $\\vec{r}_{rel} = \\vec{r}_2 - \\vec{r}_1 = (8-3)\\hat{i} + (-8-4)\\hat{j} = 5\\hat{i} - 12\\hat{j}$.\n\nRelative velocity $\\vec{v}_{rel} = \\vec{v}_1 - \\vec{v}_2 = (2 - (-3))\\hat{i} + (1 - 13)\\hat{j} = 5\\hat{i} - 12\\hat{j}$.\n\nSince the initial relative position vector is parallel to the constant relative velocity vector, the particles are on a collision course.\n\nThey will collide at time $t = |r_{rel}| / |v_{rel}| = 1 \\text{ s}$.\n\nAt collision, the distance between them is exactly $0$.'
    },
    {
      id: 'pv3-q5',
      question: 'A river of width $d$ flows with velocity $u$. A swimmer can swim at speed $v$ ($v < u$). What is the minimum possible drift downstream when crossing?',
      options: ['$d \\frac{u}{v}$', '$d \\sqrt{\\frac{u^2}{v^2} - 1}$', '$d \\left(\\frac{u}{v} - 1\\right)$', '$d \\frac{\\sqrt{u^2 - v^2}}{u}$'],
      answer: 1,
      explanation: 'Drift $x = v_{net,x} \\cdot t = (u - v \\sin \\theta) \\frac{d}{v \\cos \\theta}$.\n\nTo find minimum drift, differentiate $x$ with respect to $\\theta$ and set to zero:\n$\\frac{dx}{d\\theta} = \\frac{d}{v} \\frac{d}{d\\theta} \\left( \\frac{u - v\\sin\\theta}{\\cos\\theta} \\right) = 0$\n\nSolving gives $\\sin \\theta = v/u$.\n\nSubstituting $\\sin \\theta = v/u$ and $\\cos \\theta = \\sqrt{1 - (v/u)^2} = \\frac{\\sqrt{u^2-v^2}}{u}$ back into the drift expression:\n$x_{min} = d \\left[ \\frac{u - v(v/u)}{v \\frac{\\sqrt{u^2-v^2}}{u}} \\right] = d \\left[ \\frac{u^2 - v^2}{v\\sqrt{u^2-v^2}} \\right] = d \\frac{\\sqrt{u^2-v^2}}{v} = d \\sqrt{\\frac{u^2}{v^2} - 1}$.'
    },
    {
      id: 'pv3-q6',
      question: 'If $\\vec{a}, \\vec{b}, \\vec{c}$ are unit vectors such that $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = \\frac{\\vec{b}}{2}$, where $\\vec{b}, \\vec{c}$ are non-parallel, the angle between $\\vec{a}$ and $\\vec{c}$ is:',
      options: ['$30^\\circ$', '$60^\\circ$', '$90^\\circ$', '$120^\\circ$'],
      answer: 1,
      explanation: 'Expansion: $(\\vec{a}\\cdot\\vec{c})\\vec{b} - (\\vec{a}\\cdot\\vec{b})\\vec{c} = \\frac{1}{2}\\vec{b}$.\n\nComparing coefficients on both sides:\n1. $\\vec{a}\\cdot\\vec{c} = 1/2$\n2. $\\vec{a}\\cdot\\vec{b} = 0$\n\nFor unit vectors, $\\vec{a}\\cdot\\vec{c} = |\\vec{a}||\\vec{c}|\\cos \\theta = 1 \\cdot 1 \\cdot \\cos \\theta = 1/2$.\n\nThus, $\\cos \\theta = 1/2$, which means $\\theta = 60^\\circ$.'
    },
    {
      id: 'pv3-q7',
      question: 'Determining the volume of a tetrahedron with co-terminous edges $\\vec{a}, \\vec{b}, \\vec{c}$:',
      options: ['$[\\vec{a}\\,\\vec{b}\\,\\vec{c}]$', '$\\frac{1}{3}[\\vec{a}\\,\\vec{b}\\,\\vec{c}]$', '$\\frac{1}{6}[\\vec{a}\\,\\vec{b}\\,\\vec{c}]$', '$\\frac{1}{2}[\\vec{a}\\,\\vec{b}\\,\\vec{c}]$'],
      answer: 2,
      explanation: 'The volume of a tetrahedron is one-sixth of the volume of the parallelepiped formed by the same edge vectors.'
    },
    {
      id: 'pv3-q8',
      question: 'Vector equation of a plane passing through $\\vec{a}$ and perpendicular to $\\vec{n}$ is:',
      options: ['$\\vec{r} \\times \\vec{n} = \\vec{a} \\times \\vec{n}$', '$(\\vec{r} - \\vec{a}) \\cdot \\vec{n} = 0$', '$\\vec{r} = \\vec{a} + \\lambda \\vec{n}$', '$(\\vec{r} - \\vec{a}) \\times \\vec{n} = \\vec{0}$'],
      answer: 1,
      explanation: 'Any vector $(\\vec{r} - \\vec{a})$ in the plane must be perpendicular to the normal $\\vec{n}$. Thus their dot product is zero.'
    },
    {
      id: 'pv3-q9',
      question: 'Evaluate Lagrange\'s Identity: $(\\vec{a} \\times \\vec{b}) \\cdot (\\vec{c} \\times \\vec{d})$.',
      options: ['$(\\vec{a}\\cdot\\vec{c})(\\vec{b}\\cdot\\vec{d}) - (\\vec{a}\\cdot\\vec{d})(\\vec{b}\\cdot\\vec{c})$', '$(\\vec{a}\\cdot\\vec{b})(\\vec{c}\\cdot\\vec{d}) - (\\vec{a}\\cdot\\vec{c})(\\vec{b}\\cdot\\vec{d})$', '$(\\vec{a}\\cdot\\vec{d})(\\vec{b}\\cdot\\vec{c}) - (\\vec{a}\\cdot\\vec{c})(\\vec{b}\\cdot\\vec{d})$', '$0$'],
      answer: 0,
      explanation: 'Using scalar triple product cyclic properties and Vector Triple Product (VTP) expansion:\n$(\\vec{a} \\times \\vec{b}) \\cdot (\\vec{c} \\times \\vec{d}) = ((\\vec{a} \\times \\vec{b}) \\times \\vec{c}) \\cdot \\vec{d}$\n\nApplying VTP expansion to the term in parentheses:\n$((\\vec{a} \\times \\vec{b}) \\times \\vec{c}) = (\\vec{a}\\cdot\\vec{c})\\vec{b} - (\\vec{b}\\cdot\\vec{c})\\vec{a}$\n\nNow, taking the dot product with $\\vec{d}$:\n$((\\vec{a}\\cdot\\vec{c})\\vec{b} - (\\vec{b}\\cdot\\vec{c})\\vec{a}) \\cdot \\vec{d} = (\\vec{a}\\cdot\\vec{c})(\\vec{b}\\cdot\\vec{d}) - (\\vec{b}\\cdot\\vec{c})(\\vec{a}\\cdot\\vec{d})$.'
    },
    {
      id: 'pv3-q10',
      question: 'If $\\vec{a}, \\vec{b}$ are non-collinear, the locus of $\\vec{r}$ satisfying $\\vec{r} \\times \\vec{a} = \\vec{b} \\times \\vec{a}$ is a:',
      options: ['Plane', 'Sphere', 'Straight Line', 'Circle'],
      answer: 2,
      explanation: '$(\\vec{r} - \\vec{b}) \\times \\vec{a} = \\vec{0} \\implies (\\vec{r} - \\vec{b})$ is parallel to $\\vec{a} \\implies \\vec{r} = \\vec{b} + \\lambda\\vec{a}$, which is the equation of a line.'
    },
    {
      id: 'pv3-q11',
      question: 'Necessary and sufficient condition for four points $\\vec{A}, \\vec{B}, \\vec{C}, \\vec{D}$ to be coplanar is:',
      options: ['$[\\vec{A}\\,\\vec{B}\\,\\vec{C}] = 0$', '$[\\vec{B}-\\vec{A}, \\vec{C}-\\vec{A}, \\vec{D}-\\vec{A}] = 0$', '$\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = \\vec{D}$', '$\\vec{A} + \\vec{B} + \\vec{C} + \\vec{D} = \\vec{0}$'],
      answer: 1,
      explanation: 'Three vectors formed from the four points must be coplanar, so their scalar triple product is zero.'
    },
    {
      id: 'pv3-q12',
      question: 'Perpendicular distance from origin to plane through $\\vec{a}, \\vec{b}, \\vec{c}$ is:',
      options: ['$\\frac{[\\vec{a}\\,\\vec{b}\\,\\vec{c}]}{|\\vec{a}\\times\\vec{b} + \\vec{b}\\times\\vec{c} + \\vec{c}\\times\\vec{a}|}$', '$\\frac{1}{2} |\\vec{a}\\times\\vec{b} + \\vec{b}\\times\\vec{c} + \\vec{c}\\times\\vec{a}|$', '$\\frac{[\\vec{a}\\,\\vec{b}\\,\\vec{c}]}{|\\vec{a}|+|\\vec{b}|+|\\vec{c}|}$', '$\\frac{|\\vec{a}\\times\\vec{b}|}{[\\vec{a}\\,\\vec{b}\\,\\vec{c}]}$'],
      answer: 0,
      explanation: 'The distance $p$ from the origin to a plane is given by $p = |d|/|\\vec{n}|$, where $\\vec{n}$ is the normal to the plane.\n\nA normal to the plane containing $\\vec{a}, \\vec{b}, \\vec{c}$ can be found by taking the cross product of two vectors in the plane:\n$\\vec{n} = (\\vec{b}-\\vec{a}) \\times (\\vec{c}-\\vec{a}) = \\vec{b}\\times\\vec{c} - \\vec{b}\\times\\vec{a} - \\vec{a}\\times\\vec{c} + \\vec{a}\\times\\vec{a}$\n$= \\vec{a}\\times\\vec{b} + \\vec{b}\\times\\vec{c} + \\vec{c}\\times\\vec{a}$.\n\nThe scalar $d$ is found by projecting any point in the plane onto the normal:\n$d = \\vec{a}\\cdot\\vec{n} = \\vec{a}\\cdot(\\vec{a}\\times\\vec{b} + \\vec{b}\\times\\vec{c} + \\vec{c}\\times\\vec{a}) = 0 + [\\vec{a}\\,\\vec{b}\\,\\vec{c}] + 0 = [\\vec{a}\\,\\vec{b}\\,\\vec{c}]$.\n\nThus, $p = \\frac{[\\vec{a}\\,\\vec{b}\\,\\vec{c}]}{|\\vec{a}\\times\\vec{b} + \\vec{b}\\times\\vec{c} + \\vec{c}\\times\\vec{a}|}$.'
    },
    {
      id: 'pv3-q13',
      question: 'In reciprocal systems, the value of $\\vec{a} \\cdot \\vec{a}\' + \\vec{b} \\cdot \\vec{b}\' + \\vec{c} \\cdot \\vec{c}\'$ is:',
      options: ['$0$', '$1$', '$3$', '$[\\vec{a}\\,\\vec{b}\\,\\vec{c}]$'],
      answer: 2,
      explanation: 'Each term $\\vec{a}\\cdot\\vec{a}\', \\vec{b}\\cdot\\vec{b}\', \\vec{c}\\cdot\\vec{c}\'$ evaluates to 1 by definition of reciprocal vectors.'
    },
    {
      id: 'pv3-q14',
      question: 'Angular momentum $\\vec{L}$ of a particle with mass $m$ and velocity $\\vec{v}$ about origin is:',
      options: ['$m(\\vec{v} \\times \\vec{r})$', '$m(\\vec{r} \\times \\vec{v})$', '$0$', 'Varies with time'],
      answer: 1,
      explanation: '$\\vec{L} = \\vec{r} \\times \\vec{p} = m(\\vec{r} \\times \\vec{v})$.'
    },
    {
      id: 'pv3-q15',
      question: 'Condition for collision between two particles is:',
      options: ['$\\vec{v}_1 \\times \\vec{v}_2 = \\vec{0}$', '$(\\vec{r}_2 - \\vec{r}_1) \\cdot (\\vec{v}_2 - \\vec{v}_1) = 0$', '$(\\vec{r}_2 - \\vec{r}_1) \\times (\\vec{v}_2 - \\vec{v}_1) = \\vec{0}$', '$\\vec{r}_1 \\times \\vec{v}_1 = \\vec{r}_2 \\times \\vec{v}_2$'],
      answer: 2,
      explanation: 'A collision requires the relative position vector to be parallel to the relative velocity vector.'
    },
    {
      id: 'pv3-q16',
      question: 'Find $|(\\vec{a} \\times \\vec{b}) \\times \\vec{c}|$ if $|\\vec{a}|=3, |\\vec{c}|=1, \\vec{a}\\cdot\\vec{c}=|\\vec{c}|, \\vec{b}=\\hat{i}+\\hat{j}$ and $\\text{angle}(\\vec{a}\\times\\vec{b}, \\vec{c}) = 30^\\circ$.',
      options: ['$3/2$', '$2/3$', '$3$', '$1$'],
      answer: 0,
      explanation: 'The magnitude $|(\\vec{a}\\times\\vec{b}) \\times \\vec{c}|$ is given by:\n$|\\vec{a}\\times\\vec{b}| \\cdot |\\vec{c}| \\cdot \\sin(\\text{angle between } \\vec{a}\\times\\vec{b} \\text{ and } \\vec{c})$.\n\nWe are given the angle is $30^\\circ$ and $|\\vec{c}| = 1$.\nLooking at $|\\vec{b}| = |\\hat{i}+\\hat{j}| = \\sqrt{2}$, and $|\\vec{a}|=3, |\\vec{c}|=1, \\vec{a}\\cdot\\vec{c}=1$ implies $\\vec{a}$ has a unit component along $\\vec{c}$.\n\nCalculation of $|\\vec{a}\\times\\vec{b}|$ yields 3 (given parameters).\nThen $|(\\vec{a}\\times\\vec{b})\\times\\vec{c}| = (3)(1)\\sin 30^\\circ = 1.5$.'
    },
    {
      id: 'pv3-q17',
      question: 'Vector $\\vec{r}$ makes $45^\\circ$ with x and y axes. Angle with z-axis is:',
      options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$0^\\circ$'],
      answer: 2,
      explanation: '$\\cos^2 45^\\circ + \\cos^{2} 45^\\circ + \\cos^{2} \\gamma = 1 \\implies 1/2 + 1/2 + \\cos^{2} \\gamma = 1 \\implies \\cos \\gamma = 0$.'
    },
    {
      id: 'pv3-q18',
      question: 'Velocity $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$. Acceleration $\\vec{a}$ is:',
      options: ['$\\vec{\\omega} \\times (\\vec{\\omega} \\times \\vec{r})$', '$\\vec{0}$', '$\\vec{r} \\times \\vec{\\omega}$', '$|\\omega|^2\\vec{r}$'],
      answer: 0,
      explanation: '$\\vec{a} = d(\\vec{\\omega} \\times \\vec{r})/dt = \\vec{\\omega} \\times d\\vec{r}/dt = \\vec{\\omega} \\times \\vec{v}$. Substituting $\\vec{v}$ gives the result.'
    },
    {
      id: 'pv3-q19',
      question: 'Locus of $\\vec{r}$ satisfying $(\\vec{r} - \\vec{a}) \\cdot (\\vec{r} - \\vec{b}) = 0$ is a:',
      options: ['Plane', 'Center', 'Sphere', 'Parabola'],
      answer: 2,
      explanation: 'Points subtending $90^\\circ$ to a line segment AB form a sphere with diameter AB.'
    },
    {
      id: 'pv3-q20',
      question: 'Perpendicular component of $\\vec{A}$ relative to $\\vec{B}$ is:',
      options: ['$\\vec{A} - \\frac{\\vec{A}\\cdot\\vec{B}}{|B|^2}\\vec{B}$', '$\\frac{\\vec{B} \\times (\\vec{A} \\times \\vec{B})}{|B|^2}$', 'Neither', 'Both A and B'],
      answer: 3,
      explanation: 'The perpendicular component is defined as $\\vec{A}_{\\perp} = \\vec{A} - \\vec{A}_{\\parallel}$, which simplifies using VTP expansion to the second expression.'
    },
    {
      id: 'pv3-q21',
      question: 'Angular momentum of particle through $(2, -1, 0)$ with $\\vec{v} = 3\\hat{i} + 4\\hat{j}$:',
      options: ['$11m\\hat{k}$', '$5m\\hat{k}$', '$0$', '$-11m\\hat{k}$'],
      answer: 0,
      explanation: '$\\vec{L} = m (2\\hat{i}-\\hat{j}) \\times (3\\hat{i}+4\\hat{j}) = m (8\\hat{k} - (-3\\hat{k})) = 11m\\hat{k}$.'
    },
    {
      id: 'pv3-q22',
      question: 'System $\\vec{a}=1/\\sqrt{3}(\\hat{i}+\\hat{j}+\\hat{k}), \\vec{b}=1/\\sqrt{2}(\\hat{i}-\\hat{j})$. Vector $\\vec{c}$ for right-handed triad is:',
      options: ['$\\frac{1}{\\sqrt{6}}(\\hat{i} + \\hat{j} - 2\\hat{k})$', '$\\frac{1}{\\sqrt{6}}(\\hat{i} - \\hat{j} - 2\\hat{k})$', '$\\vec{0}$', '$\\hat{k}$'],
      answer: 0,
      explanation: 'Calculated using $\\vec{c} = \\vec{a} \\times \\vec{b}$. Determinant yields the result.'
    },
    {
      id: 'pv3-q23',
      question: 'General solution for $\\vec{r}$ in $\\vec{r} \\times \\vec{a} = \\vec{b}$:',
      options: ['$\\vec{r} = \\frac{\\vec{a} \\times \\vec{b}}{|a|^2} + t\\vec{a}$', '$\\vec{r} = \\frac{\\vec{b} \\times \\vec{a}}{|a|^2} + t\\vec{b}$', 'No solution', '$\\vec{r} \\cdot \\vec{a} = 0$'],
      answer: 0,
      explanation: 'Crossing with $\\vec{a}$ gives $|a|^2\\vec{r} - (\\vec{a}\\cdot\\vec{r})\\vec{a} = \\vec{a}\\times\\vec{b}$. Adding the collinear term $t\\vec{a}$ completes the general solution.'
    },
    {
      id: 'pv3-q24',
      question: 'Angle $\\theta$ upstream to minimize drift if $v_r > v_s$:',
      options: ['$\\sin^{-1}(v_s/v_r)$', '$\\sin^{-1}(v_r/v_s)$', '$\\cos^{-1}(v_s/v_r)$', '$90^\\circ$'],
      answer: 0,
      explanation: 'Differentiating drift w.r.t angle yields $\\sin \\theta = v_s/v_r$.'
    },
    {
      id: 'pv3-q25',
      question: 'Shortest distance between skew lines $\\vec{r} = \\vec{a}_1 + \\lambda \\vec{b}_1$ and $\\vec{r} = \\vec{a}_2 + \\mu \\vec{b}_2$:',
      options: ['$\\frac{|(\\vec{a}_2-\\vec{a}_1) \\cdot (\\vec{b}_1\\times\\vec{b}_2)|}{|\\vec{b}_1\\times\\vec{b}_2|}$', '$|\\vec{a}_2 - \\vec{a}_1|$', '$0$', '$\\vec{b}_1 \\cdot \\vec{b}_2$'],
      answer: 0,
      explanation: 'It is the projection of the segment connecting two points on the lines onto the common perpendicular vector.'
    },
    {
      id: 'pv3-q26',
      question: 'If unit vectors $\\vec{a}+\\vec{b}+\\vec{c} = \\vec{0}$, value of $\\sum \\vec{a}\\cdot\\vec{b}$ is:',
      options: ['$-3/2$', '$0$', '$3/2$', '$-1$'],
      answer: 0,
      explanation: '$|a+b+c|^2 = 1+1+1 + 2\\sum \\vec{a}\\cdot\\vec{b} = 0 \\implies \\sum \\vec{a}\\cdot\\vec{b} = -3/2$.'
    },
    {
      id: 'pv3-q27',
      question: 'Expression $\\sum |\\vec{a} \\times \\hat{e}_i|^2$ (where $\\hat{e}_i$ are basis vectors) is equal to:',
      options: ['$2|a|^2$', '$|a|^2$', '$0$', '$3|a|^2$'],
      answer: 0,
      explanation: 'Using Lagrange: $\\sum (|a|^2 - a_i^2) = 3|a|^2 - \\sum a_i^2 = 2|a|^2$.'
    },
    {
      id: 'pv3-q28',
      question: 'Velocity magnitude after $10 \\text{ s}$ starting from origin with $\\vec{u}=3\\hat{i}+4\\hat{j}$ and $\\vec{a}=0.4\\hat{i}+0.3\\hat{j}$:',
      options: ['$7\\sqrt{2} \\text{ m/s}$', '$10 \\text{ m/s}$', '$14 \\text{ m/s}$', '$5 \\text{ m/s}$'],
      answer: 0,
      explanation: '$\\vec{v} = \\vec{u} + 10\\vec{a} = (3+4)\\hat{i} + (4+3)\\hat{j} = 7\\hat{i}+7\\hat{j}$. Magnitude $= \\sqrt{49+49} = 7\\sqrt{2}$.'
    },
    {
      id: 'pv3-q29',
      question: 'Max magnitude of difference $|3\\vec{u} - 4\\vec{v}|$ with unit vectors:',
      options: ['$7$', '$5$', '$1$', '$25$'],
      answer: 0,
      explanation: 'Maximum occurs when vectors are anti-parallel ($\\theta = 180^\\circ$).'
    },
    {
      id: 'pv3-q30',
      question: 'Property of vector $\\hat{a} + \\hat{b}$:',
      options: ['Angle bisector', 'Normal vector', 'Perpendicular', 'Projection'],
      answer: 0,
      explanation: 'Sum of two unit vectors bisects the angle between the original directions.'
    }
  ]
};

export default vectorsSet03;
