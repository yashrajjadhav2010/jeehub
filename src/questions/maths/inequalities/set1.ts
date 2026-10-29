import { QuizSet } from '../../../types';

const set1: QuizSet = {
  id: "set1",
  title: "Inequalities Set 1",
  subjectId: "maths",
  chapterId: "inequalities",
  difficulty: "easy",
  questions: [
    {
      id: "inequalities-s1-q1",
      question: "Solve the linear inequality: $2x - 3 < 5$.",
      options: ["$x > 4$", "$x < 1$", "$x < 4$", "$x \\le 4$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nAdding 3 to both sides gives $2x < 8$.\nDividing by 2 yields $x < 4$."
    },
    {
      id: "inequalities-s1-q2",
      question: "Solve the inequality: $-3x \\ge 12$.",
      options: ["$x \\ge -4$", "$x \\le -4$", "$x \\le 4$", "$x < -4$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nDividing both sides by $-3$ requires flipping the inequality sign.\nThis gives $x \\le -4$."
    },
    {
      id: "inequalities-s1-q3",
      question: "Find the solution set for $5x - 7 \\le 3x + 9$.",
      options: ["$x \\le 1$", "$x \\ge 8$", "$x < 8$", "$x \\le 8$"],
      answer: 3,
      explanation: "**Step-by-step Solution:**\nSubtracting $3x$ from both sides gives $2x - 7 \\le 9$.\nAdding 7 gives $2x \\le 16$.\nDividing by 2 gives $x \\le 8$."
    },
    {
      id: "inequalities-s1-q4",
      question: "Solve for $x$: $\\frac{x}{2} + 3 > 5$.",
      options: ["$x > 4$", "$x > 1$", "$x > 16$", "$x < 4$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nSubtracting 3 from both sides gives $\\frac{x}{2} > 2$.\nMultiplying by 2 yields $x > 4$."
    },
    {
      id: "inequalities-s1-q5",
      question: "Solve the inequality: $4 - 2x < x - 5$.",
      options: ["$x < -3$", "$x > 3$", "$x > -3$", "$x < 3$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nAdding $2x$ to both sides gives $4 < 3x - 5$.\nAdding 5 gives $9 < 3x$, so $3 < x$, which is $x > 3$."
    },
    {
      id: "inequalities-s1-q6",
      question: "Solve the compound inequality: $-2 \\le 3x + 4 < 13$.",
      options: ["$-2 \\le x < 3$", "$-6 \\le x < 9$", "$-2 < x \\le 3$", "$2 \\le x < 5$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nSubtract 4 from all parts: $-6 \\le 3x < 9$.\nDivide by 3: $-2 \\le x < 3$."
    },
    {
      id: "inequalities-s1-q7",
      question: "Find the solution set for the system: $2x - 5 > 1$ and $3x + 1 < 16$.",
      options: ["$x \\in (3, 5)$", "$x \\in [3, 5]$", "$x \\in (-\\infty, 3) \\cup (5, \\infty)$", "$x \\in (2, 5)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFirst inequality: $2x > 6 \\implies x > 3$.\nSecond inequality: $3x < 15 \\implies x < 5$.\nThe intersection of these two conditions is $3 < x < 5$, or $(3, 5)$."
    },
    {
      id: "inequalities-s1-q8",
      question: "Solve the inequality: $\\frac{2x-1}{3} \\ge 1$.",
      options: ["$x \\ge 1$", "$x \\le 2$", "$x > 2$", "$x \\ge 2$"],
      answer: 3,
      explanation: "**Step-by-step Solution:**\nMultiply by 3: $2x - 1 \\ge 3$.\nAdd 1: $2x \\ge 4$.\nDivide by 2: $x \\ge 2$."
    },
    {
      id: "inequalities-s1-q9",
      question: "Find the interval for $x$ given $-5 < -2x + 1 \\le 3$.",
      options: ["$[-1, 3)$", "$(-3, 1]$", "$(-1, 3]$", "$[1, 3)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nSubtract 1 from all parts: $-6 < -2x \\le 2$.\nDivide by $-2$ and flip all signs: $3 > x \\ge -1$.\nRewriting in standard interval notation gives $[-1, 3)$."
    },
    {
      id: "inequalities-s1-q10",
      question: "Solve for $x$: $x - 2 \\le 5x + 10$.",
      options: ["$x \\le -3$", "$x \\ge -3$", "$x \\ge 3$", "$x \\le 3$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nSubtracting $x$ gives $-2 \\le 4x + 10$.\nSubtracting 10 gives $-12 \\le 4x$.\nDividing by 4 gives $-3 \\le x$, which is the same as $x \\ge -3$."
    },
    {
      id: "inequalities-s1-q11",
      question: "What is the largest integer $x$ satisfying $3x - 4 < 10$?",
      options: ["$4$", "$5$", "$3$", "$14$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nSolving gives $3x < 14 \\implies x < 14/3 \\implies x < 4.66$.\nThe largest integer strictly less than 4.66 is 4."
    },
    {
      id: "inequalities-s1-q12",
      question: "Find the smallest integer $x$ satisfying $5 - 2x \\le -3$.",
      options: ["$3$", "$4$", "$5$", "$-4$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nSubtracting 5 gives $-2x \\le -8$.\nDividing by $-2$ flips the sign to $x \\ge 4$.\nThe smallest integer that is greater than or equal to 4 is 4."
    },
    {
      id: "inequalities-s1-q13",
      question: "Solve the inequality: $2(x-3) - 3(x-4) > 0$.",
      options: ["$x > 6$", "$x < -6$", "$x < 6$", "$x > -6$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nExpanding gives $2x - 6 - 3x + 12 > 0$.\nSimplifying yields $-x + 6 > 0$, so $6 > x$, meaning $x < 6$."
    },
    {
      id: "inequalities-s1-q14",
      question: "Solve for $x$: $\\frac{x-1}{2} - \\frac{x-2}{3} \\ge 1$.",
      options: ["$x \\le 5$", "$x \\ge 5$", "$x \\ge 1$", "$x \\ge 7$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nMultiply the entire inequality by 6 (the LCM of 2 and 3) to clear fractions:\n$3(x-1) - 2(x-2) \\ge 6$.\nExpand: $3x - 3 - 2x + 4 \\ge 6$.\nSimplify: $x + 1 \\ge 6 \\implies x \\ge 5$."
    },
    {
      id: "inequalities-s1-q15",
      question: "Solve the inequality: $3(2-x) \\ge 2(1-x)$.",
      options: ["$x \\ge 4$", "$x \\le -4$", "$x \\ge -4$", "$x \\le 4$"],
      answer: 3,
      explanation: "**Step-by-step Solution:**\nExpanding gives $6 - 3x \\ge 2 - 2x$.\nAdding $3x$ to both sides gives $6 \\ge 2 + x$.\nSubtracting 2 gives $4 \\ge x$, which is $x \\le 4$."
    },
    {
      id: "inequalities-s1-q16",
      question: "Solve the quadratic inequality: $x^2 - 4 < 0$.",
      options: ["$x \\in (-2, 2)$", "$x \\in (-\\infty, -2) \\cup (2, \\infty)$", "$x \\in [-2, 2]$", "$x < 2$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFactoring gives $(x-2)(x+2) < 0$. The roots are $-2$ and $2$.\nThe parabola opens upwards, so it is negative between the roots. Thus, $x \\in (-2, 2)$."
    },
    {
      id: "inequalities-s1-q17",
      question: "Solve the inequality: $x^2 - 5x + 6 \\ge 0$.",
      options: ["$x \\in [2, 3]$", "$x \\in (-\\infty, 2] \\cup [3, \\infty)$", "$x \\in (2, 3)$", "$x \\in (-\\infty, -3] \\cup [-2, \\infty)$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nFactoring gives $(x-2)(x-3) \\ge 0$. The roots are 2 and 3.\nUsing the wavy curve method, the product is positive outside the roots. Since it is $\\ge$, the endpoints are included: $(-\\infty, 2] \\cup [3, \\infty)$."
    },
    {
      id: "inequalities-s1-q18",
      question: "Find the solution set for $x^2 < 9$.",
      options: ["$x < 3$", "$x > -3$", "$x \\in (-3, 3)$", "$x \\in (-\\infty, -3) \\cup (3, \\infty)$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nTaking the square root of both sides yields $|x| < 3$.\nThis absolute value inequality unfolds to $-3 < x < 3$, or $(-3, 3)$."
    },
    {
      id: "inequalities-s1-q19",
      question: "Solve for $x$: $x^2 + x - 12 \\le 0$.",
      options: ["$x \\in [-4, 3]$", "$x \\in [-3, 4]$", "$x \\in (-\\infty, -4] \\cup [3, \\infty)$", "$x \\in (-4, 3)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFactoring the quadratic yields $(x+4)(x-3) \\le 0$.\nThe roots are $-4$ and $3$. Since we want the region where the parabola is $\\le 0$, the solution is between the roots, inclusive: $[-4, 3]$."
    },
    {
      id: "inequalities-s1-q20",
      question: "Find the solution set of $x^2 - 6x + 9 > 0$.",
      options: ["$x > 3$", "$x \\in \\mathbb{R}$", "$x \\in \\mathbb{R} \\setminus \\{3\\}$", "No real solution"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nThe expression factors into a perfect square: $(x-3)^2 > 0$.\nA perfect square is always positive, EXCEPT when it is zero (which occurs at $x = 3$).\nThus, it is strictly greater than zero for all real numbers except 3."
    },
    {
      id: "inequalities-s1-q21",
      question: "Solve the inequality: $2x^2 - 5x - 3 < 0$.",
      options: ["$x \\in (-\\infty, -1/2) \\cup (3, \\infty)$", "$x \\in (-3, 1/2)$", "$x \\in (-1/2, 3)$", "$x \\in [-1/2, 3]$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nFactoring gives $(2x+1)(x-3) < 0$.\nThe roots are $-1/2$ and $3$. Since it's a 'less than' inequality opening upwards, the solution lies strictly between the roots: $(-1/2, 3)$."
    },
    {
      id: "inequalities-s1-q22",
      question: "Solve the inequality: $-x^2 + 4x - 3 > 0$.",
      options: ["$x \\in (-\\infty, 1) \\cup (3, \\infty)$", "$x \\in (1, 3)$", "$x \\in (-3, -1)$", "No real solution"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nMultiply by $-1$ and flip the inequality sign: $x^2 - 4x + 3 < 0$.\nFactoring gives $(x-1)(x-3) < 0$.\nThe roots are $1$ and $3$. The solution lies between them: $(1, 3)$."
    },
    {
      id: "inequalities-s1-q23",
      question: "Find the solution set for $x^2 \\ge x$.",
      options: ["$x \\ge 1$", "$x \\in [0, 1]$", "$x \\in (-\\infty, 0] \\cup [1, \\infty)$", "$x \\in (-\\infty, 0) \\cup (1, \\infty)$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nSubtract $x$ to get $x^2 - x \\ge 0$.\nFactoring yields $x(x-1) \\ge 0$. The roots are 0 and 1.\nThe product is positive outside these roots, so the solution is $(-\\infty, 0] \\cup [1, \\infty)$."
    },
    {
      id: "inequalities-s1-q24",
      question: "Solve the inequality: $x^2 + 4 > 0$.",
      options: ["$x > -2$", "$x \\in (-2, 2)$", "$\\emptyset$ (No solution)", "$x \\in \\mathbb{R}$"],
      answer: 3,
      explanation: "**Step-by-step Solution:**\nFor any real number $x$, $x^2 \\ge 0$.\nAdding 4 guarantees $x^2 + 4 \\ge 4 > 0$.\nThis inequality holds true for all real numbers."
    },
    {
      id: "inequalities-s1-q25",
      question: "Find the solution set for $x^2 + 2x + 5 < 0$.",
      options: ["$x \\in \\mathbb{R}$", "$\\emptyset$ (No real solution)", "$x < -1$", "$x \\in (-5, -1)$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nCompleting the square gives $(x+1)^2 + 4 < 0$.\nSince a square is non-negative, adding 4 makes it strictly positive. It can never be less than zero.\nTherefore, there is no real solution."
    },
    {
      id: "inequalities-s1-q26",
      question: "Solve the polynomial inequality: $(x-1)(x-2)(x-3) > 0$.",
      options: ["$x \\in (1, 2) \\cup (3, \\infty)$", "$x \\in (-\\infty, 1) \\cup (2, 3)$", "$x > 3$", "$x \\in (1, 3)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nThe roots are 1, 2, 3. Using the wavy curve method, starting from the right (where $x>3$), the sign is positive.\nThe signs alternate passing through the roots: $(-, +, -, +)$.\nWe want the positive intervals: $(1, 2) \\cup (3, \\infty)$."
    },
    {
      id: "inequalities-s1-q27",
      question: "Solve the inequality: $(x+1)^2 (x-2) \\le 0$.",
      options: ["$x \\le 2$", "$x \\in [-1, 2]$", "$x \\ge 2$", "$x \\in (-\\infty, 2] \\setminus \\{-1\\}$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nSince $(x+1)^2 \\ge 0$ for all real $x$, the sign of the expression depends entirely on $(x-2)$.\nThus, $x-2 \\le 0 \\implies x \\le 2$.\nNotice that $x = -1$ satisfies this interval and correctly yields $0 \\le 0$, so no points need to be excluded."
    },
    {
      id: "inequalities-s1-q28",
      question: "Find the solution set for $x^3 - 4x \\ge 0$.",
      options: ["$x \\in [-2, 2]$", "$x \\in (-\\infty, -2] \\cup [2, \\infty)$", "$x \\in [-2, 0] \\cup [2, \\infty)$", "$x \\ge 2$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nFactor the expression: $x(x^2 - 4) = x(x-2)(x+2) \\ge 0$.\nThe roots are $-2, 0, 2$. By the wavy curve method, the intervals alternate signs.\nThe expression is positive on $[-2, 0]$ and $[2, \\infty)$."
    },
    {
      id: "inequalities-s1-q29",
      question: "Solve the inequality: $x(x+3)(x-4) < 0$.",
      options: ["$x \\in (-3, 0) \\cup (4, \\infty)$", "$x \\in (-\\infty, -3) \\cup (0, 4)$", "$x \\in [-3, 0] \\cup [4, \\infty)$", "$x \\in (-3, 4)$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nThe roots are $-3, 0, 4$.\nEvaluating signs from right to left gives $(+, -, +, -)$.\nWe need the strictly negative intervals: $(-\\infty, -3) \\cup (0, 4)$."
    },
    {
      id: "inequalities-s1-q30",
      question: "Find the solution for $(2-x)(x+1) \\ge 0$.",
      options: ["$x \\in (-\\infty, -1] \\cup [2, \\infty)$", "$x \\in [-1, 2]$", "$x \\in [-2, 1]$", "$x \\ge 2$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nMultiply by $-1$ to standardize the factors: $(x-2)(x+1) \\le 0$.\nThe roots are $-1$ and $2$. The product is negative or zero between them.\nThus, the solution is $x \\in [-1, 2]$."
    },
    {
      id: "inequalities-s1-q31",
      question: "Solve the inequality: $x^2(x-5) > 0$.",
      options: ["$x > 5$", "$x \\in (0, 5)$", "$x \\in \\mathbb{R} \\setminus \\{0\\}$", "$x \\in (-\\infty, 0) \\cup (5, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nSince $x^2 \\ge 0$ always, it does not change the sign of the overall expression.\nThe expression is positive strictly when $x - 5 > 0$, so $x > 5$.\n(Note: $x=0$ gives $0 > 0$ which is false, but $0$ is not in the interval $x>5$ anyway)."
    },
    {
      id: "inequalities-s1-q32",
      question: "Find the solution set of $(x-1)^3 (x+2) \\le 0$.",
      options: ["$x \\in (-\\infty, -2] \\cup [1, \\infty)$", "$x \\in [-2, 1]$", "$x \\le 1$", "$x \\in [-1, 2]$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nAn odd power has the same sign-change behavior as a power of 1.\nThe inequality behaves identical to $(x-1)(x+2) \\le 0$.\nThe roots are $-2$ and $1$. The product is non-positive between them, yielding $[-2, 1]$."
    },
    {
      id: "inequalities-s1-q33",
      question: "Solve the inequality: $x^4 - 1 \\le 0$.",
      options: ["$x \\in [-1, 1]$", "$x \\le 1$", "$x \\in (-\\infty, -1] \\cup [1, \\infty)$", "$x = 1, -1$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFactor as a difference of squares: $(x^2-1)(x^2+1) \\le 0$.\nSince $x^2+1$ is strictly positive for all real numbers, we can divide by it.\nThis simplifies the inequality to $x^2 - 1 \\le 0$, which factors to $(x-1)(x+1) \\le 0$.\nThe solution is $[-1, 1]$."
    },
    {
      id: "inequalities-s1-q34",
      question: "Find the solution set for $(x-2)(x-4)^2 < 0$.",
      options: ["$x \\in (2, 4)$", "$x < 4$", "$x < 2$", "$x \\in (-\\infty, 2) \\cup (2, 4)$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nThe term $(x-4)^2$ is strictly positive for all $x \\ne 4$.\nTherefore, the overall sign depends only on $(x-2)$. The expression is negative strictly when $x - 2 < 0$.\nThus, $x < 2$."
    },
    {
      id: "inequalities-s1-q35",
      question: "Solve the inequality: $(x^2+1)(x-3) > 0$.",
      options: ["$x \\in (-\\infty, 3)$", "$x \\in (-1, 3)$", "$x > 3$", "$x \\in \\mathbb{R} \\setminus \\{-1, 3\\}$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nSince $(x^2+1)$ is positive for all real numbers, we can divide both sides by it without flipping the inequality sign.\nThis leaves $x - 3 > 0$, giving $x > 3$."
    },
    {
      id: "inequalities-s1-q36",
      question: "Solve the rational inequality: $\\frac{x-2}{x+3} > 0$.",
      options: ["$x \\in (-3, 2)$", "$x \\in (-\\infty, -3) \\cup (2, \\infty)$", "$x \\in [-3, 2]$", "$x > 2$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nThe critical points are $-3$ (from the denominator) and $2$ (from the numerator).\nUsing a sign chart, the expression is positive for $x < -3$ (negative/negative) and $x > 2$ (positive/positive).\nThus, $(-\\infty, -3) \\cup (2, \\infty)$."
    },
    {
      id: "inequalities-s1-q37",
      question: "Find the solution set for $\\frac{x+1}{x-1} \\le 0$.",
      options: ["$x \\in [-1, 1]$", "$x \\in (-1, 1)$", "$x \\in [-1, 1)$", "$x \\in (-\\infty, -1] \\cup (1, \\infty)$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nThe critical points are $-1$ and $1$.\nThe fraction is negative when the numerator and denominator have opposite signs, which is strictly between $-1$ and $1$.\nWe include $-1$ because the inequality is $\\le$, but we must exclude $1$ to avoid division by zero. Thus, $[-1, 1)$."
    },
    {
      id: "inequalities-s1-q38",
      question: "Solve the inequality: $\\frac{2x-5}{x+2} < 1$.",
      options: ["$x < 7$", "$x \\in (-2, 7)$", "$x \\in (-\\infty, -2) \\cup (7, \\infty)$", "$x \\in (2.5, \\infty)$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nSubtract 1 from both sides to compare to zero: $\\frac{2x-5}{x+2} - 1 < 0$.\nGet a common denominator: $\\frac{2x-5 - (x+2)}{x+2} < 0 \\implies \\frac{x-7}{x+2} < 0$.\nThe critical points are $-2$ and $7$. The fraction is negative strictly between them: $(-2, 7)$."
    },
    {
      id: "inequalities-s1-q39",
      question: "Solve for $x$: $\\frac{1}{x} > 1$.",
      options: ["$x > 1$", "$x < 1$", "$x \\in (0, 1)$", "$x \\in (-\\infty, 0) \\cup (1, \\infty)$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nSubtract 1 to get $\\frac{1}{x} - 1 > 0 \\implies \\frac{1-x}{x} > 0$.\nThe critical points are 0 and 1. Testing regions shows the fraction is positive strictly between 0 and 1.\nThus, $x \\in (0, 1)$."
    },
    {
      id: "inequalities-s1-q40",
      question: "Find the solution set for $\\frac{x^2-4}{x} \\ge 0$.",
      options: ["$x \\in [-2, 2]$", "$x \\in [-2, 0) \\cup [2, \\infty)$", "$x \\in (-\\infty, -2] \\cup (0, 2]$", "$x \\in (-2, 0) \\cup (2, \\infty)$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nFactor the numerator to get $\\frac{(x-2)(x+2)}{x} \\ge 0$.\nCritical points are $-2, 0, 2$. A sign chart gives positive regions at $[-2, 0)$ and $[2, \\infty)$.\nNotice that $0$ is excluded with a parenthesis to prevent division by zero."
    },
    {
      id: "inequalities-s1-q41",
      question: "Solve the inequality: $\\frac{x-3}{x^2+1} < 0$.",
      options: ["$x \\in (-\\infty, -1) \\cup (1, 3)$", "$x \\in (3, \\infty)$", "$x < 3$", "No real solution"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nSince $x^2+1$ is strictly positive for all real $x$, it does not affect the sign of the inequality.\nThe fraction's sign depends entirely on the numerator. Thus $x - 3 < 0 \\implies x < 3$."
    },
    {
      id: "inequalities-s1-q42",
      question: "Find the solution set for $\\frac{x^2 - 1}{x^2 - 9} \\le 0$.",
      options: ["$x \\in (-3, 3)$", "$x \\in [-1, 1]$", "$x \\in (-3, -1] \\cup [1, 3)$", "$x \\in (-\\infty, -3) \\cup [-1, 1] \\cup (3, \\infty)$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nFactor everything: $\\frac{(x-1)(x+1)}{(x-3)(x+3)} \\le 0$.\nCritical points are $-3, -1, 1, 3$. A sign chart shows it is negative on $(-3, -1]$ and $[1, 3)$.\nThe brackets correctly include the numerator's roots while excluding division by zero at $\\pm3$."
    },
    {
      id: "inequalities-s1-q43",
      question: "Solve for $x$: $\\frac{3}{x-2} \\le 1$.",
      options: ["$x \\ge 5$", "$x \\in (-\\infty, 2) \\cup [5, \\infty)$", "$x \\in (2, 5]$", "$x \\in (-\\infty, 5]$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nSubtract 1: $\\frac{3 - (x-2)}{x-2} \\le 0 \\implies \\frac{5-x}{x-2} \\le 0$.\nMultiply numerator by -1 (and flip sign): $\\frac{x-5}{x-2} \\ge 0$.\nThe roots are 2 and 5. The expression is positive on $(-\\infty, 2)$ and $[5, \\infty)$."
    },
    {
      id: "inequalities-s1-q44",
      question: "Find the solution set for $\\frac{x}{x-1} \\ge 2$.",
      options: ["$x \\in (1, 2]$", "$x \\ge 2$", "$x \\in [1, 2]$", "$x \\in (-\\infty, 1) \\cup [2, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nSubtract 2: $\\frac{x - 2(x-1)}{x-1} \\ge 0 \\implies \\frac{2-x}{x-1} \\ge 0$.\nMultiply by -1 (and flip sign): $\\frac{x-2}{x-1} \\le 0$.\nThe roots are 1 and 2. It is negative on $(1, 2]$. (Excluding 1 to avoid division by zero)."
    },
    {
      id: "inequalities-s1-q45",
      question: "Solve the inequality: $\\frac{x^2+3x+2}{x-3} < 0$.",
      options: ["$x \\in (-2, -1) \\cup (3, \\infty)$", "$x \\in (-\\infty, -2) \\cup (-1, 3)$", "$x \\in (-1, 3)$", "$x \\in (-\\infty, 3)$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nFactor the numerator: $\\frac{(x+1)(x+2)}{x-3} < 0$.\nCritical points are $-2, -1, 3$.\nTesting regions gives strictly negative values for $x < -2$ and $-1 < x < 3$."
    },
    {
      id: "inequalities-s1-q46",
      question: "Solve the system of inequalities: $2x+1 > 3$ and $x^2 \\le 16$.",
      options: ["$x \\in (1, 4]$", "$x \\in [1, 4]$", "$x \\in (-4, 1)$", "$x \\in (1, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFirst inequality: $2x > 2 \\implies x > 1$.\nSecond inequality: $x^2 \\le 16 \\implies -4 \\le x \\le 4$.\nThe intersection of $x > 1$ and $[-4, 4]$ is the interval $(1, 4]$."
    },
    {
      id: "inequalities-s1-q47",
      question: "Find the solution set for the system: $x^2 - 5x + 6 < 0$ and $x > 2.5$.",
      options: ["$x \\in (2, 3)$", "$x \\in (2.5, \\infty)$", "$x \\in (2.5, 3)$", "$x \\in (2, 2.5)$"],
      answer: 2,
      explanation: "**Step-by-step Solution:**\nQuadratic inequality: $(x-2)(x-3) < 0 \\implies x \\in (2, 3)$.\nLinear inequality: $x > 2.5$.\nThe intersection of these two sets is strictly $(2.5, 3)$."
    },
    {
      id: "inequalities-s1-q48",
      question: "Solve the absolute value inequality: $|x - 2| < 3$.",
      options: ["$x \\in (-1, 5)$", "$x < 5$", "$x \\in (-\\infty, -1) \\cup (5, \\infty)$", "$x \\in (-5, 5)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nThe inequality $|x - 2| < 3$ unfolds to the compound inequality $-3 < x - 2 < 3$.\nAdding 2 to all parts yields $-1 < x < 5$."
    },
    {
      id: "inequalities-s1-q49",
      question: "Solve for $x$: $\\frac{1}{|x-1|} > 1$.",
      options: ["$x \\in (0, 2)$", "$x \\in (0, 1) \\cup (1, 2)$", "$x \\in (-\\infty, 0) \\cup (2, \\infty)$", "$x > 2$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nSince absolute value is always positive (for $x \\ne 1$), we can safely cross-multiply: $1 > |x-1|$.\nThis unfolds to $-1 < x - 1 < 1$, which gives $0 < x < 2$.\nBecause $x \\ne 1$ (to avoid division by zero), the final solution is $(0, 1) \\cup (1, 2)$."
    },
    {
      id: "inequalities-s1-q50",
      question: "Find the values of $x$ satisfying both $(x-1)(x-2) \\ge 0$ and $\\frac{x-3}{x-1} < 0$.",
      options: ["$x \\in (1, 2]$", "$x \\in [2, 3)$", "$x \\in (1, 3)$", "$x \\in [2, \\infty)$"],
      answer: 1,
      explanation: "**Step-by-step Solution:**\nFirst inequality: Roots 1, 2. Positive on $(-\\infty, 1] \\cup [2, \\infty)$.\nSecond inequality: Roots 1, 3. Negative on $(1, 3)$.\nIntersecting $(-\\infty, 1] \\cup [2, \\infty)$ with $(1, 3)$ gives the overlap interval $[2, 3)$."
    }
  ]
};

export default set1;
