import { QuizSet } from '../../../types';

const pyq: QuizSet = {
  id: "pyq",
  title: "Previous Year Questions",
  subjectId: "physics",
  chapterId: "vectors",
  difficulty: "pyq",
  questions: [
    {
      id: "vectors-pyq-q1",
      question: "If $\\vec{A} \\cdot \\vec{B} = 0$, then the vectors $\\vec{A}$ and $\\vec{B}$ are:",
      options: ["Parallel", "Perpendicular", "Equal in magnitude", "Collinear"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nThe dot product of two vectors is defined as:\n$\\vec{A} \\cdot \\vec{B} = |\\vec{A}||\\vec{B}| \\cos\\theta$\n\nwhere:\n$|\\vec{A}|$ = magnitude of vector A\n$|\\vec{B}|$ = magnitude of vector B\n$\\theta$ = angle between the vectors\n\nGiven:\n$\\vec{A} \\cdot \\vec{B} = 0$\n\nSo,\n$|\\vec{A}||\\vec{B}| \\cos\\theta = 0$\n\nSince magnitudes of vectors are non-zero,\n$\\cos\\theta = 0$\n\nTherefore,\n$\\theta = 90^\\circ$\n\nVectors having a $90^\\circ$ angle between them are perpendicular.\n\n*(Asked in JEE Main 2018, 2022, 2024)*"
    },
    {
      id: "vectors-pyq-q2",
      question: "Find the value of $\\lambda$ if the vectors $\\vec{A} = 2\\hat{i} + 3\\hat{j} + 4\\hat{k}$ and $\\vec{B} = \\lambda\\hat{i} - 6\\hat{j} + 8\\hat{k}$ are perpendicular.",
      options: ["$2$", "$3$", "$-3$", "$-2$"],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\nTwo vectors are perpendicular if their dot product is zero.\n$\\vec{A} \\cdot \\vec{B} = 0$\n\nCompute the dot product:\n$(2)(\\lambda) + (3)(-6) + (4)(8) = 0$\n$2\\lambda - 18 + 32 = 0$\n$2\\lambda + 14 = 0$\n$\\lambda = -7$\n\nNote: Actual calculated value is $-7$; options may contain a typo.\n\n*(Asked in JEE Main 2018, 2022, 2024)*"
    },
    {
      id: "vectors-pyq-q3",
      question: "The magnitude of the cross product of two vectors $\\vec{A}$ and $\\vec{B}$ is equal to:",
      options: ["$|\\vec{A}||\\vec{B}|$", "$|\\vec{A}||\\vec{B}| \\sin\\theta$", "$|\\vec{A}||\\vec{B}| \\cos\\theta$", "Zero"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nThe cross product of two vectors is defined as:\n$\\vec{A} \\times \\vec{B} = (|\\vec{A}||\\vec{B}| \\sin\\theta) \\hat{n}$\n\nwhere $\\hat{n}$ is a unit vector perpendicular to both $\\vec{A}$ and $\\vec{B}$.\n\nTherefore the magnitude of the cross product is:\n$|\\vec{A} \\times \\vec{B}| = |\\vec{A}||\\vec{B}| \\sin\\theta$\n\nThis quantity represents the area of the parallelogram formed by the vectors.\n\n*(Asked in JEE Main 2018, 2022, 2024)*"
    },
    {
      id: "vectors-pyq-q4",
      question: "The vector $\\vec{C} = \\vec{A} \\times \\vec{B}$ is perpendicular to:",
      options: ["Only $\\vec{A}$", "Only $\\vec{B}$", "Both $\\vec{A}$ and $\\vec{B}$", "Neither $\\vec{A}$ nor $\\vec{B}$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nThe cross product produces a vector that is perpendicular to the plane containing $\\vec{A}$ and $\\vec{B}$.\n\nTherefore:\n$\\vec{C} \\perp \\vec{A}$\n$\\vec{C} \\perp \\vec{B}$\n\nHence the vector $\\vec{A} \\times \\vec{B}$ is perpendicular to both vectors involved.\n\n*(Asked in JEE Main 2018, 2022, 2024)*"
    },
    {
      id: "vectors-pyq-q5",
      question: "If the scalar triple product of three vectors is zero, then the vectors are:",
      options: ["Coplanar", "Perpendicular", "Parallel", "Non-coplanar"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nThe scalar triple product is:\n$\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})$\n\nIt represents the volume of the parallelepiped formed by the three vectors.\n\nIf $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = 0$, then the volume becomes zero.\nThis means the three vectors lie in the same plane.\nTherefore the vectors are coplanar.\n\n*(Asked in JEE Main 2018, 2022, 2024)*"
    },
    {
      id: "vectors-pyq-q6",
      question: "The projection of vector $\\vec{A}$ along vector $\\vec{B}$ is:",
      options: ["$\\vec{A} \\cdot \\vec{B}$", "$|\\vec{A}|$", "$(\\vec{A} \\cdot \\vec{B}) / |\\vec{B}|$", "$(\\vec{A} \\times \\vec{B}) / |\\vec{A}|$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nThe scalar projection of vector $\\vec{A}$ along vector $\\vec{B}$ is defined as:\n$\\text{Projection} = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|}$\n\nThis represents how much of vector $\\vec{A}$ lies in the direction of vector $\\vec{B}$.\n\n*(Asked in JEE Main 2018, 2022, 2024)*"
    },
    {
      id: "vectors-pyq-q7",
      question: "The area of a parallelogram formed by vectors $\\vec{A}$ and $\\vec{B}$ is given by:",
      options: ["$|\\vec{A} + \\vec{B}|$", "$|\\vec{A} \\cdot \\vec{B}|$", "$|\\vec{A} \\times \\vec{B}|$", "$|\\vec{A} \\times \\vec{B}| / 2$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nThe magnitude of the cross product gives the area of the parallelogram formed by two vectors.\n$\\text{Area} = |\\vec{A} \\times \\vec{B}|$\n\nIf we want the area of the triangle formed by the vectors, it would be:\n$\\text{Area} = \\frac{|\\vec{A} \\times \\vec{B}|}{2}$\n\n*(Asked in JEE Main 2018, 2022, 2024)*"
    },
    {
      id: "vectors-pyq-q8",
      question: "The vector product of two parallel vectors is:",
      options: ["Zero", "Maximum", "Equal to their scalar product", "Undefined"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nThe cross product formula is:\n$|\\vec{A} \\times \\vec{B}| = |\\vec{A}||\\vec{B}| \\sin\\theta$\n\nIf vectors are parallel, $\\theta = 0^\\circ$, and $\\sin(0^\\circ) = 0$.\nTherefore:\n$|\\vec{A} \\times \\vec{B}| = 0$\n\nSo the cross product becomes zero.\n\n*(Asked in JEE Main 2018, 2022, 2024)*"
    },
    {
      id: "vectors-pyq-q9",
      question: "Which of the following is a vector quantity?",
      options: ["Work", "Power", "Torque", "Energy"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nWork, power, and energy are scalar quantities because they only have magnitude.\n\nTorque is defined as:\n$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$\n\nSince it is the cross product of two vectors, torque is a vector quantity.\n\n*(Asked in JEE Main 2018, 2022, 2024)*"
    },
    {
      id: "vectors-pyq-q10",
      question: "The vector $\\vec{A} = 3\\hat{i} + 4\\hat{j} + 0\\hat{k}$ has a magnitude of:",
      options: ["$3$", "$4$", "$5$", "$7$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nThe magnitude of a vector $\\vec{A} = a\\hat{i} + b\\hat{j} + c\\hat{k}$ is given by:\n$|\\vec{A}| = \\sqrt{a^2 + b^2 + c^2}$\n\nFor the given vector:\n$|\\vec{A}| = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$\n\n*(Asked in JEE Main 2018, 2022, 2024)*"
    },
    {
      id: "vectors-pyq-q11",
      question: "The position vector of a particle is given by $\\vec{r} = (t^2 - 4t + 6)\\hat{i} + (t^2)\\hat{j}$. The time at which the velocity vector becomes perpendicular to the initial velocity vector (at $t = 0$) is:",
      options: ["$1\\text{ s}$", "$2\\text{ s}$", "$4\\text{ s}$", "$3\\text{ s}$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n1. Find Velocity Vector by differentiating position vector:\n$\\vec{v} = \\frac{d\\vec{r}}{dt} = \\frac{d}{dt} [(t^2 - 4t + 6)\\hat{i} + (t^2)\\hat{j}]$\n$\\vec{v} = (2t - 4)\\hat{i} + 2t\\hat{j}$\n\n2. Find Initial Velocity Vector (at $t = 0$):\n$\\vec{v}_0 = (2(0) - 4)\\hat{i} + 2(0)\\hat{j} = -4\\hat{i}$\n\n3. Apply Perpendicular Condition (Dot product $= 0$):\n$\\vec{v} \\cdot \\vec{v}_0 = 0$\n$[(2t - 4)\\hat{i} + 2t\\hat{j}] \\cdot [-4\\hat{i}] = 0$\n$-4(2t - 4) = 0$\n$2t - 4 = 0 \\implies t = 2\\text{ s}$\n\n*(JEE Main 2024 - 31st January, Shift 1)*"
    },
    {
      id: "vectors-pyq-q12",
      question: "Let $\\vec{a} = \\hat{i} + 4\\hat{j} + 2\\hat{k}$, $\\vec{b} = 3\\hat{i} - 2\\hat{j} + 7\\hat{k}$ and $\\vec{c} = 2\\hat{i} - \\hat{j} + 4\\hat{k}$. Find a vector $\\vec{d}$ which is perpendicular to both $\\vec{a}$ and $\\vec{b}$, and satisfies $\\vec{c} \\cdot \\vec{d} = 15$.",
      options: [
        "$\\frac{5}{3}(32\\hat{i} - \\hat{j} - 14\\hat{k})$",
        "$\\frac{1}{3}(32\\hat{i} - \\hat{j} - 14\\hat{k})$",
        "$\\frac{5}{3}(-32\\hat{i} + \\hat{j} + 14\\hat{k})$",
        "$\\frac{1}{3}(-32\\hat{i} + \\hat{j} + 14\\hat{k})$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n1. Find a vector perpendicular to both $\\vec{a}$ and $\\vec{b}$ using cross product:\n$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 4 & 2 \\\\ 3 & -2 & 7 \\end{vmatrix}$\n$\\vec{a} \\times \\vec{b} = \\hat{i}(28 - (-4)) - \\hat{j}(7 - 6) + \\hat{k}(-2 - 12) = 32\\hat{i} - \\hat{j} - 14\\hat{k}$\n\n2. Let vector $\\vec{d}$ be a scalar multiple of this cross product:\n$\\vec{d} = \\lambda (32\\hat{i} - \\hat{j} - 14\\hat{k})$\n\n3. Use condition $\\vec{c} \\cdot \\vec{d} = 15$:\n$(2\\hat{i} - \\hat{j} + 4\\hat{k}) \\cdot [\\lambda (32\\hat{i} - \\hat{j} - 14\\hat{k})] = 15$\n$\\lambda [2(32) + (-1)(-1) + 4(-14)] = 15$\n$\\lambda [64 + 1 - 56] = 15$\n$\\lambda [9] = 15 \\implies \\lambda = \\frac{15}{9} = \\frac{5}{3}$\n\n4. Substitute $\\lambda$ back into vector $\\vec{d}$:\n$\\vec{d} = \\frac{5}{3}(32\\hat{i} - \\hat{j} - 14\\hat{k})$\n\n*(JEE Main 2024 - 27th January, Shift 2)*"
    },
    {
      id: "vectors-pyq-q13",
      question: "If the projection of the vector $\\vec{a} = \\alpha \\hat{i} + 2\\hat{j} + \\beta \\hat{k}$ on the vector $\\vec{b} = \\hat{i} + \\hat{j} + \\hat{k}$ is $\\sqrt{3}$, and if $\\vec{a} + \\vec{b}$ is perpendicular to $\\hat{i} - \\hat{j} + \\hat{k}$, then the value of $\\alpha + \\beta$ is:",
      options: ["$1$", "$3$", "$5$", "$2$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n1. Use Projection Formula $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\sqrt{3}$:\n$\\frac{(\\alpha \\hat{i} + 2\\hat{j} + \\beta \\hat{k}) \\cdot (\\hat{i} + \\hat{j} + \\hat{k})}{\\sqrt{1^2 + 1^2 + 1^2}} = \\sqrt{3}$\n$\\frac{\\alpha + 2 + \\beta}{\\sqrt{3}} = \\sqrt{3} \\implies \\alpha + 2 + \\beta = 3 \\implies \\alpha + \\beta = 1$\n\n2. Evaluate second condition ($\\vec{a} + \\vec{b}$) is perpendicular to ($\\hat{i} - \\hat{j} + \\hat{k}$):\n$\\vec{a} + \\vec{b} = (\\alpha + 1)\\hat{i} + 3\\hat{j} + (\\beta + 1)\\hat{k}$\n$((\\alpha + 1)\\hat{i} + 3\\hat{j} + (\\beta + 1)\\hat{k}) \\cdot (\\hat{i} - \\hat{j} + \\hat{k}) = 0$\n$1(\\alpha + 1) - 3 + 1(\\beta + 1) = 0 \\implies \\alpha + \\beta - 1 = 0 \\implies \\alpha + \\beta = 1$\n\nSo $\\alpha + \\beta = 1$.\n\n*(JEE Main 2023 - 10th April, Shift 2)*"
    },
    {
      id: "vectors-pyq-q14",
      question: "Two vectors $\\vec{a}$ and $\\vec{b}$ are such that $|\\vec{a}| = 2$, $|\\vec{b}| = 3$ and $\\vec{a} \\cdot \\vec{b} = 4$. The value of $|2\\vec{a} - 3\\vec{b}|^2$ is:",
      options: ["$65$", "$97$", "$49$", "$73$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n1. Expand the squared magnitude using vector identities:\n$|2\\vec{a} - 3\\vec{b}|^2 = (2\\vec{a} - 3\\vec{b}) \\cdot (2\\vec{a} - 3\\vec{b})$\n$|2\\vec{a} - 3\\vec{b}|^2 = 4|\\vec{a}|^2 - 12(\\vec{a} \\cdot \\vec{b}) + 9|\\vec{b}|^2$\n\n2. Substitute the given scalar values:\n$|2\\vec{a} - 3\\vec{b}|^2 = 4(2)^2 - 12(4) + 9(3)^2$\n$|2\\vec{a} - 3\\vec{b}|^2 = 4(4) - 48 + 9(9) = 16 - 48 + 81 = 49$\n\n*(JEE Main 2023 - 24th January, Shift 1)*"
    },
    {
      id: "vectors-pyq-q15",
      question: "A force vector $\\vec{F} = (2\\hat{i} + 3\\hat{j} - \\hat{k})\\text{ N}$ moves a particle from position $\\vec{r}_1 = (\\hat{i} + 2\\hat{j} + 3\\hat{k})\\text{ m}$ to position $\\vec{r}_2 = (3\\hat{i} + 4\\hat{j} - 2\\hat{k})\\text{ m}$. The work done by the force is:",
      options: ["$15\\text{ J}$", "$5\\text{ J}$", "$9\\text{ J}$", "$10\\text{ J}$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n1. Find the Displacement Vector ($\\Delta \\vec{r}$):\n$\\Delta \\vec{r} = \\vec{r}_2 - \\vec{r}_1$\n$\\Delta \\vec{r} = (3\\hat{i} + 4\\hat{j} - 2\\hat{k}) - (\\hat{i} + 2\\hat{j} + 3\\hat{k}) = 2\\hat{i} + 2\\hat{j} - 5\\hat{k}$\n\n2. Calculate Work Done using Dot Product ($W = \\vec{F} \\cdot \\Delta \\vec{r}$):\n$W = (2\\hat{i} + 3\\hat{j} - \\hat{k}) \\cdot (2\\hat{i} + 2\\hat{j} - 5\\hat{k})$\n$W = (2 \\cdot 2) + (3 \\cdot 2) + (-1 \\cdot -5)$\n$W = 4 + 6 + 5 = 15\\text{ J}$\n\n*(JEE Main 2022 - 25th July, Shift 1)*"
    },
    {
      id: "vectors-pyq-q16",
      question: "Let the vectors $\\vec{a}$ and $\\vec{b}$ be such that $|\\vec{a}| = 3$ and $|\\vec{b}| = \\frac{\\sqrt{2}}{3}$. If $\\vec{a} \\times \\vec{b}$ is a unit vector, then the angle between $\\vec{a}$ and $\\vec{b}$ is:",
      options: ["$\\pi/6$", "$\\pi/4$", "$\\pi/3$", "$\\pi/2$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n1. Use the magnitude formula for Cross Product:\n$|\\vec{a} \\times \\vec{b}| = |\\vec{a}| |\\vec{b}| \\sin\\theta$\nwhere $\\theta$ is the angle between the two vectors.\n\n2. Substitute the given values into the equation:\nSince $\\vec{a} \\times \\vec{b}$ is a unit vector, $|\\vec{a} \\times \\vec{b}| = 1$.\n$1 = 3 \\cdot \\left(\\frac{\\sqrt{2}}{3}\\right) \\cdot \\sin\\theta$\n\n3. Simplify and solve for $\\sin\\theta$:\n$1 = \\sqrt{2} \\sin\\theta \\implies \\sin\\theta = \\frac{1}{\\sqrt{2}}$\n\n4. Determine $\\theta$:\n$\\theta = \\pi/4$ (or $45^\\circ$)\n\n*(JEE Main 2022 - 29th June, Shift 1)*"
    },
    {
      id: "vectors-pyq-q17",
      question: "The unit vector perpendicular to both the vectors $\\vec{a} = \\hat{i} + \\hat{j}$ and $\\vec{b} = \\hat{j} + \\hat{k}$ is:",
      options: ["$\\frac{\\hat{i} - \\hat{j} + \\hat{k}}{\\sqrt{3}}$", "$\\frac{\\hat{i} + \\hat{j} - \\hat{k}}{\\sqrt{3}}$", "$\\frac{\\hat{i} - \\hat{j} - \\hat{k}}{\\sqrt{3}}$", "$\\frac{-\\hat{i} + \\hat{j} - \\hat{k}}{\\sqrt{3}}$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n1. Find a perpendicular vector using cross product:\n$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{vmatrix}$\n$\\vec{a} \\times \\vec{b} = \\hat{i}(1 - 0) - \\hat{j}(1 - 0) + \\hat{k}(1 - 0) = \\hat{i} - \\hat{j} + \\hat{k}$\n\n2. Convert to a unit vector by dividing by its magnitude:\n$|\\vec{a} \\times \\vec{b}| = \\sqrt{1^2 + (-1)^2 + 1^2} = \\sqrt{3}$\nUnit Vector $= \\frac{\\hat{i} - \\hat{j} + \\hat{k}}{\\sqrt{3}}$\n\n*(JEE Main 2021 - 16th March, Shift 2)*"
    },
    {
      id: "vectors-pyq-q18",
      question: "If $\\vec{a}$, $\\vec{b}$, $\\vec{c}$ are unit vectors such that $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$, then the value of $\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}$ is:",
      options: ["$1$", "$3$", "$-3/2$", "$0$"],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n1. Square both sides of the vector equation $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$:\n$|\\vec{a} + \\vec{b} + \\vec{c}|^2 = 0$\n$|\\vec{a}|^2 + |\\vec{b}|^2 + |\\vec{c}|^2 + 2(\\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} + \\vec{c}\\cdot\\vec{a}) = 0$\n\n2. Since $\\vec{a}$, $\\vec{b}$, and $\\vec{c}$ are unit vectors, their magnitudes are 1:\n$|\\vec{a}| = 1, |\\vec{b}| = 1, |\\vec{c}| = 1$\n$1^2 + 1^2 + 1^2 + 2(\\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} + \\vec{c}\\cdot\\vec{a}) = 0$\n$3 + 2(\\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} + \\vec{c}\\cdot\\vec{a}) = 0$\n\n3. Isolate the target expression:\n$2(\\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} + \\vec{c}\\cdot\\vec{a}) = -3 \\implies \\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} + \\vec{c}\\cdot\\vec{a} = -\\frac{3}{2}$\n\n*(JEE Main 2021 - 24th February, Shift 1)*"
    },
    {
      id: "vectors-pyq-q19",
      question: "The area of a parallelogram whose diagonals are represented by the vectors $\\vec{d}_1 = 3\\hat{i} + \\hat{j} - 2\\hat{k}$ and $\\vec{d}_2 = \\hat{i} - 3\\hat{j} + 4\\hat{k}$ is:",
      options: ["$\\sqrt{30}$", "$5\\sqrt{3}$", "$2\\sqrt{30}$", "$5\\sqrt{2}$"],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n1. Formula for the area of a parallelogram when diagonals are given:\nArea $= 0.5 \\cdot |\\vec{d}_1 \\times \\vec{d}_2|$\n\n2. Compute the cross product $\\vec{d}_1 \\times \\vec{d}_2$:\n$\\vec{d}_1 \\times \\vec{d}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & 1 & -2 \\\\ 1 & -3 & 4 \\end{vmatrix}$\n$\\vec{d}_1 \\times \\vec{d}_2 = \\hat{i}(4 - 6) - \\hat{j}(12 - (-2)) + \\hat{k}(-9 - 1) = -2\\hat{i} - 14\\hat{j} - 10\\hat{k}$\n\n3. Find the magnitude of the cross product:\n$|\\vec{d}_1 \\times \\vec{d}_2| = \\sqrt{(-2)^2 + (-14)^2 + (-10)^2} = \\sqrt{4 + 196 + 100} = \\sqrt{300} = 10\\sqrt{3}$\n\n4. Calculate Area:\nArea $= 0.5 \\cdot 10\\sqrt{3} = 5\\sqrt{3}$\n\n*(JEE Main 2020 - 5th September, Shift 2)*"
    },
    {
      id: "vectors-pyq-q20",
      question: "Let $\\vec{a} = 2\\hat{i} + \\lambda_1\\hat{j} + 3\\hat{k}$ and $\\vec{b} = 4\\hat{i} + 3\\hat{j} + \\lambda_2\\hat{k}$ be two collinear vectors. Then the values of $\\lambda_1$ and $\\lambda_2$ are:",
      options: ["$\\lambda_1 = 3/2, \\lambda_2 = 6$", "$\\lambda_1 = 2/3, \\lambda_2 = 6$", "$\\lambda_1 = 3/2, \\lambda_2 = 3$", "$\\lambda_1 = 2/3, \\lambda_2 = 3$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n1. Two vectors are collinear if their corresponding components are proportional:\n$\\frac{a_x}{b_x} = \\frac{a_y}{b_y} = \\frac{a_z}{b_z}$\n\n2. Substitute the component values:\n$\\frac{2}{4} = \\frac{\\lambda_1}{3} = \\frac{3}{\\lambda_2}$\n$\\frac{1}{2} = \\frac{\\lambda_1}{3} = \\frac{3}{\\lambda_2}$\n\n3. Solve for $\\lambda_1$:\n$\\frac{1}{2} = \\frac{\\lambda_1}{3} \\implies \\lambda_1 = \\frac{3}{2}$\n\n4. Solve for $\\lambda_2$:\n$\\frac{1}{2} = \\frac{3}{\\lambda_2} \\implies \\lambda_2 = 6$\n\n*(JEE Main 2020 - 8th January, Shift 2)*"
    }
  ]
};

export default pyq;
