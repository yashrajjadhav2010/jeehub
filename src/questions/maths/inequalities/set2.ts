import { QuizSet } from '../../../types';

const set2: QuizSet = {
  id: "set2",
  title: "Inequalities Set 2",
  subjectId: "maths",
  chapterId: "inequalities",
  difficulty: "medium",
  questions: [
    {
      id: "inequalities-s2-q1",
      question: "Find the solution set for the linear inequality: $3(x-2) + 5 \\le 4x - 1$.",
      options: ["$x \\ge 0$", "$x \\le 0$", "$x \\ge 2$", "$x \\in \\mathbb{R}$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nExpand the left side: $3x - 6 + 5 \\le 4x - 1$.\nSimplify: $3x - 1 \\le 4x - 1$.\nSubtract $3x$ from both sides: $-1 \\le x - 1$.\nAdd 1 to both sides: $0 \\le x$, which is $x \\ge 0$."
    },
    {
      id: "inequalities-s2-q2",
      question: "Find the solution interval satisfying the system: $2x-3 < x+2$ and $3x+5 \\ge x-1$.",
      options: ["$x \\in [-3, 5)$", "$x \\in (-3, 5]$", "$x \\in (-\\infty, 5)$", "$x \\in [-3, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFirst inequality: $2x - x < 2 + 3 \\implies x < 5$.\nSecond inequality: $3x - x \\ge -1 - 5 \\implies 2x \\ge -6 \\implies x \\ge -3$.\nTaking the intersection of $x < 5$ and $x \\ge -3$ gives $[-3, 5)$."
    },
    {
      id: "inequalities-s2-q3",
      question: "Solve the double inequality: $-5 \\le \\frac{2-3x}{4} < 2$.",
      options: ["$x \\in (-2, \\frac{22}{3}]$", "$x \\in [-\\frac{22}{3}, 2)$", "$x \\in (-2, 22]$", "$x \\in [-2, \\frac{22}{3})$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nMultiply all parts by 4: $-20 \\le 2 - 3x < 8$.\nSubtract 2 from all parts: $-22 \\le -3x < 6$.\nDivide by $-3$ and flip the inequality signs: $\\frac{22}{3} \\ge x > -2$.\nWriting this in standard interval notation gives $x \\in (-2, \\frac{22}{3}]$."
    },
    {
      id: "inequalities-s2-q4",
      question: "Solve the linear fractional inequality: $\\frac{3x+4}{2} - \\frac{x-1}{3} > x + 2$.",
      options: ["$x > -2$", "$x < -2$", "$x > 2$", "$x > -1$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nMultiply the entire inequality by 6 (LCM of 2 and 3) to clear fractions:\n$3(3x+4) - 2(x-1) > 6(x+2)$.\nExpand: $9x + 12 - 2x + 2 > 6x + 12$.\nSimplify: $7x + 14 > 6x + 12$.\nSubtract $6x$ and 14: $x > -2$."
    },
    {
      id: "inequalities-s2-q5",
      question: "What is the largest integer $x$ satisfying the inequality $\\frac{x}{2} + \\frac{x}{3} < 10$?",
      options: ["$11$", "$12$", "$10$", "$9$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFind a common denominator on the left: $\\frac{3x + 2x}{6} < 10$.\n$\\frac{5x}{6} < 10 \\implies 5x < 60 \\implies x < 12$.\nThe largest integer strictly less than 12 is 11."
    },
    {
      id: "inequalities-s2-q6",
      question: "Find the solution set of the quadratic inequality: $2x^2 - 7x + 3 \\le 0$.",
      options: ["$x \\in [\\frac{1}{2}, 3]$", "$x \\in (-\\infty, \\frac{1}{2}] \\cup [3, \\infty)$", "$x \\in (\\frac{1}{2}, 3)$", "$x \\in [-3, -\\frac{1}{2}]$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFactor the quadratic by splitting the middle term: $2x^2 - 6x - x + 3 \\le 0 \\implies 2x(x-3) - 1(x-3) \\le 0 \\implies (2x-1)(x-3) \\le 0$.\nThe critical points are $x = 1/2$ and $x = 3$.\nSince it is a $\\le 0$ inequality for an upward-opening parabola, the solution is between the roots: $[1/2, 3]$."
    },
    {
      id: "inequalities-s2-q7",
      question: "Solve for $x$: $-x^2 + 6x - 8 > 0$.",
      options: ["$x \\in (2, 4)$", "$x \\in (-\\infty, 2) \\cup (4, \\infty)$", "$x \\in [2, 4]$", "$\\emptyset$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nMultiply by $-1$ and flip the inequality sign: $x^2 - 6x + 8 < 0$.\nFactor the quadratic: $(x-2)(x-4) < 0$.\nThe roots are 2 and 4. The product is negative strictly between the roots: $(2, 4)$."
    },
    {
      id: "inequalities-s2-q8",
      question: "Solve the cubic inequality: $x^3 - 6x^2 + 11x - 6 \\ge 0$.",
      options: ["$x \\in [1, 2] \\cup [3, \\infty)$", "$x \\in (-\\infty, 1] \\cup [2, 3]$", "$x \\in [1, 3]$", "$x \\ge 3$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nBy rational root theorem, test $x=1$: $1 - 6 + 11 - 6 = 0$. So $(x-1)$ is a factor.\nDivide to get the remaining quadratic: $x^3 - 6x^2 + 11x - 6 = (x-1)(x^2 - 5x + 6) = (x-1)(x-2)(x-3) \\ge 0$.\nCritical points are 1, 2, 3. Sign chart from right to left: $(+), (-), (+), (-)$.\nWe need the $\\ge 0$ regions: $[1, 2] \\cup [3, \\infty)$."
    },
    {
      id: "inequalities-s2-q9",
      question: "Find the solution set of $x^4 - 5x^2 + 4 < 0$.",
      options: ["$x \\in (-2, -1) \\cup (1, 2)$", "$x \\in (-2, 2)$", "$x \\in (-\\infty, -2) \\cup (2, \\infty)$", "$x \\in (-1, 1)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nLet $u = x^2$. The inequality becomes $u^2 - 5u + 4 < 0$, which factors as $(u-1)(u-4) < 0$.\nThis implies $1 < u < 4$, or $1 < x^2 < 4$.\nTaking the square root of both sides gives two regions for $x$: $1 < x < 2$ and $-2 < x < -1$.\nThus, $x \\in (-2, -1) \\cup (1, 2)$."
    },
    {
      id: "inequalities-s2-q10",
      question: "Solve the inequality: $(x-1)^2(x+2)(x-3)^3 < 0$.",
      options: ["$x \\in (-2, 1) \\cup (1, 3)$", "$x \\in (-2, 3)$", "$x \\in (-\\infty, -2) \\cup (3, \\infty)$", "$x \\in [-2, 3]$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nThe term $(x-1)^2$ is strictly positive for $x \\ne 1$. It does not change the sign of the product.\nThe term $(x-3)^3$ has the same sign behavior as $(x-3)^1$.\nThe inequality simplifies to $(x+2)(x-3) < 0$, with the restriction $x \\ne 1$.\nThe solution to $(x+2)(x-3) < 0$ is $(-2, 3)$. Removing $x=1$ yields $(-2, 1) \\cup (1, 3)$."
    },
    {
      id: "inequalities-s2-q11",
      question: "Solve the quadratic inequality: $x^2 - 4x + 5 < 0$.",
      options: ["$\\emptyset$ (No real solution)", "$x \\in (1, 5)$", "$x \\in \\mathbb{R}$", "$x < 5$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nComplete the square: $x^2 - 4x + 4 + 1 < 0 \\implies (x-2)^2 + 1 < 0$.\nSince $(x-2)^2 \\ge 0$ for all real $x$, adding 1 makes the expression strictly positive (minimum value is 1).\nTherefore, it can never be less than zero. There is no real solution."
    },
    {
      id: "inequalities-s2-q12",
      question: "Find the solution set for $x^2 - 4x + 4 > 0$.",
      options: ["$x \\in \\mathbb{R} \\setminus \\{2\\}$", "$x > 2$", "$x \\in \\mathbb{R}$", "$x < 2$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFactor the quadratic into a perfect square: $(x-2)^2 > 0$.\nA perfect square is always non-negative. It is strictly greater than zero for all real numbers except where it equals zero.\nIt equals zero at $x = 2$. Therefore, the solution is all real numbers except 2: $\\mathbb{R} \\setminus \\{2\\}$."
    },
    {
      id: "inequalities-s2-q13",
      question: "How many integral solutions exist for the inequality $x^2 - 8x + 15 \\le 0$?",
      options: ["$3$", "$2$", "$4$", "$5$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFactor the quadratic: $(x-3)(x-5) \\le 0$.\nThe critical points are 3 and 5. Since it's $\\le 0$ opening upwards, the solution lies between the roots: $x \\in [3, 5]$.\nThe integers in this inclusive interval are 3, 4, and 5.\nThere are exactly 3 integral solutions."
    },
    {
      id: "inequalities-s2-q14",
      question: "Solve the inequality: $x(x-2) \\ge 3$.",
      options: ["$x \\in (-\\infty, -1] \\cup [3, \\infty)$", "$x \\in [-1, 3]$", "$x \\in (-\\infty, -3] \\cup [1, \\infty)$", "$x \\in [1, 3]$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nExpand and bring all terms to one side: $x^2 - 2x - 3 \\ge 0$.\nFactor the quadratic: $(x-3)(x+1) \\ge 0$.\nThe critical points are $-1$ and $3$. Since we want the region $\\ge 0$, we take the outside intervals: $(-\\infty, -1] \\cup [3, \\infty)$."
    },
    {
      id: "inequalities-s2-q15",
      question: "Solve for $x$: $x^2 - 5x < -6$.",
      options: ["$x \\in (2, 3)$", "$x \\in (-\\infty, 2) \\cup (3, \\infty)$", "$x \\in [-2, -3]$", "$x \\in (-3, -2)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nBring all terms to one side: $x^2 - 5x + 6 < 0$.\nFactor the quadratic: $(x-2)(x-3) < 0$.\nThe critical points are 2 and 3. The parabola is negative strictly between its roots: $x \\in (2, 3)$."
    },
    {
      id: "inequalities-s2-q16",
      question: "Solve the rational inequality: $\\frac{x-3}{x+2} \\le 0$.",
      options: ["$x \\in (-2, 3]$", "$x \\in [-2, 3]$", "$x \\in (-\\infty, -2) \\cup [3, \\infty)$", "$x \\in (-2, 3)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nThe critical points are $x=3$ (from numerator) and $x=-2$ (from denominator).\nA sign chart reveals the fraction is negative between the roots: $-2 < x < 3$.\nBecause it's $\\le 0$, we include the numerator's root ($x=3$) but must keep the denominator's root ($x=-2$) open to avoid division by zero. Thus, $(-2, 3]$."
    },
    {
      id: "inequalities-s2-q17",
      question: "Find the solution set for $\\frac{2x-1}{x-4} > 1$.",
      options: ["$x \\in (-\\infty, -3) \\cup (4, \\infty)$", "$x \\in (-3, 4)$", "$x \\in (-\\infty, 3) \\cup (4, \\infty)$", "$x \\in (4, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nSubtract 1 from both sides: $\\frac{2x-1}{x-4} - 1 > 0$.\nGet a common denominator: $\\frac{2x-1 - (x-4)}{x-4} > 0 \\implies \\frac{x+3}{x-4} > 0$.\nThe critical points are $-3$ and $4$. The fraction is positive outside these roots: $(-\\infty, -3) \\cup (4, \\infty)$."
    },
    {
      id: "inequalities-s2-q18",
      question: "Solve the inequality: $\\frac{x^2-5x+6}{x-1} \\le 0$.",
      options: ["$x \\in (-\\infty, 1) \\cup [2, 3]$", "$x \\in (1, 2] \\cup [3, \\infty)$", "$x \\in (-\\infty, 1] \\cup [2, 3]$", "$x \\in [1, 2] \\cup [3, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFactor the numerator: $\\frac{(x-2)(x-3)}{x-1} \\le 0$.\nCritical points are $1, 2, 3$. Sign chart from right to left: $(+) \\text{ for } x>3$, $(-) \\text{ for } 2<x<3$, $(+) \\text{ for } 1<x<2$, $(-) \\text{ for } x<1$.\nWe want the $\\le 0$ regions. Exclude $x=1$ (denominator): $(-\\infty, 1) \\cup [2, 3]$."
    },
    {
      id: "inequalities-s2-q19",
      question: "Find the solution set of $\\frac{x+1}{x^2-4} > 0$.",
      options: ["$x \\in (-2, -1) \\cup (2, \\infty)$", "$x \\in (-\\infty, -2) \\cup (-1, 2)$", "$x \\in [-2, -1] \\cup [2, \\infty)$", "$x \\in (-1, 2) \\cup (2, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFactor the denominator: $\\frac{x+1}{(x-2)(x+2)} > 0$.\nCritical points are $-2, -1, 2$. Sign chart right to left: $(+), (-), (+), (-)$.\nWe need strictly positive regions: $(-2, -1) \\cup (2, \\infty)$."
    },
    {
      id: "inequalities-s2-q20",
      question: "Solve for $x$: $\\frac{1}{x-2} \\ge \\frac{1}{x+1}$.",
      options: ["$x \\in (-\\infty, -1) \\cup (2, \\infty)$", "$x \\in (-1, 2)$", "$x \\in (-\\infty, -1] \\cup [2, \\infty)$", "$x \\in [-1, 2]$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nBring everything to one side: $\\frac{1}{x-2} - \\frac{1}{x+1} \\ge 0$.\nCommon denominator: $\\frac{(x+1) - (x-2)}{(x-2)(x+1)} \\ge 0 \\implies \\frac{3}{(x-2)(x+1)} \\ge 0$.\nSince $3 > 0$, the denominator must be strictly positive: $(x-2)(x+1) > 0$.\nThe roots are $-1$ and $2$. The product is positive outside the roots: $(-\\infty, -1) \\cup (2, \\infty)$."
    },
    {
      id: "inequalities-s2-q21",
      question: "Solve the inequality: $\\frac{x^2-9}{x^2-1} < 0$.",
      options: ["$x \\in (-3, -1) \\cup (1, 3)$", "$x \\in (-\\infty, -3) \\cup (-1, 1) \\cup (3, \\infty)$", "$x \\in [-3, -1) \\cup (1, 3]$", "$x \\in (-1, 1)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFactor both polynomials: $\\frac{(x-3)(x+3)}{(x-1)(x+1)} < 0$.\nCritical points are $-3, -1, 1, 3$. The expression alternates signs across these points.\nPositive for $x>3$. Negative for $1<x<3$. Positive for $-1<x<1$. Negative for $-3<x<-1$. Positive for $x<-3$.\nWe want the strictly negative regions: $(-3, -1) \\cup (1, 3)$."
    },
    {
      id: "inequalities-s2-q22",
      question: "Find the solution set of $\\frac{2}{x} < 3$.",
      options: ["$x \\in (-\\infty, 0) \\cup (2/3, \\infty)$", "$x \\in (0, 2/3)$", "$x > 2/3$", "$x < 2/3$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nBring 3 to the left: $\\frac{2}{x} - 3 < 0 \\implies \\frac{2-3x}{x} < 0$.\nMultiply numerator by $-1$ and flip sign: $\\frac{3x-2}{x} > 0$.\nCritical points are $0$ and $2/3$. The expression is positive outside these roots: $(-\\infty, 0) \\cup (2/3, \\infty)$."
    },
    {
      id: "inequalities-s2-q23",
      question: "Solve the inequality: $\\frac{x-1}{x^2+x+1} > 0$.",
      options: ["$x > 1$", "$x \\in (-1, 1)$", "$x \\in \\mathbb{R} \\setminus \\{1\\}$", "$x < 1$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nExamine the denominator $x^2 + x + 1$. Its discriminant is $b^2 - 4ac = 1 - 4 = -3 < 0$.\nSince the discriminant is negative and the leading coefficient is positive, $x^2 + x + 1 > 0$ for all real $x$.\nThus, the fraction's sign depends entirely on the numerator: $x - 1 > 0 \\implies x > 1$."
    },
    {
      id: "inequalities-s2-q24",
      question: "Find the solution set for $\\frac{(x-1)(x-2)^2}{x-3} \\le 0$.",
      options: ["$x \\in [1, 3)$", "$x \\in (1, 3)$", "$x \\in [1, 2] \\cup (2, 3)$", "$x \\in (-\\infty, 1] \\cup (3, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nThe term $(x-2)^2$ is always non-negative. It equals zero at $x=2$, which satisfies the $\\le 0$ inequality.\nFor $x \\ne 2$, the inequality simplifies to $\\frac{x-1}{x-3} \\le 0$.\nThis fraction is negative between its roots: $x \\in [1, 3)$.\nSince $x=2$ falls safely within this interval, the final solution is simply $[1, 3)$."
    },
    {
      id: "inequalities-s2-q25",
      question: "Solve for $x$: $\\frac{x^2-3x+2}{x^2+3x+2} \\ge 0$.",
      options: ["$x \\in (-\\infty, -2) \\cup (-1, 1] \\cup [2, \\infty)$", "$x \\in [-2, -1] \\cup [1, 2]$", "$x \\in (-\\infty, -2] \\cup [-1, 1] \\cup [2, \\infty)$", "$x \\in (-2, -1) \\cup (1, 2)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFactor both quadratic expressions: $\\frac{(x-1)(x-2)}{(x+1)(x+2)} \\ge 0$.\nCritical points are $-2, -1, 1, 2$. Denominator roots ($-2, -1$) must be excluded.\nSign chart from right to left: $(+), (-), (+), (-), (+)$.\nWe want the $\\ge 0$ regions: $(-\\infty, -2) \\cup (-1, 1] \\cup [2, \\infty)$."
    },
    {
      id: "inequalities-s2-q26",
      question: "Solve the absolute value inequality: $|2x - 3| < 5$.",
      options: ["$x \\in (-1, 4)$", "$x \\in (-\\infty, -1) \\cup (4, \\infty)$", "$x \\in (-4, 1)$", "$x < 4$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nThe absolute value inequality unfolds to: $-5 < 2x - 3 < 5$.\nAdd 3 to all parts: $-2 < 2x < 8$.\nDivide by 2: $-1 < x < 4$."
    },
    {
      id: "inequalities-s2-q27",
      question: "Find the solution set of $|3x + 1| \\ge 7$.",
      options: ["$x \\in (-\\infty, -\\frac{8}{3}] \\cup [2, \\infty)$", "$x \\in [-\\frac{8}{3}, 2]$", "$x \\in (-\\infty, -2] \\cup [\\frac{8}{3}, \\infty)$", "$x \\ge 2$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nThe inequality unfolds into two separate conditions: $3x + 1 \\ge 7$ OR $3x + 1 \\le -7$.\nCase 1: $3x \\ge 6 \\implies x \\ge 2$.\nCase 2: $3x \\le -8 \\implies x \\le -8/3$.\nThe solution is the union of these intervals: $(-\\infty, -8/3] \\cup [2, \\infty)$."
    },
    {
      id: "inequalities-s2-q28",
      question: "Solve the inequality: $|x-2| \\le |x+4|$.",
      options: ["$x \\ge -1$", "$x \\le -1$", "$x \\in [-4, 2]$", "$x \\ge 1$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nSince both sides are non-negative, square both sides to eliminate the absolute values: $(x-2)^2 \\le (x+4)^2$.\nExpand: $x^2 - 4x + 4 \\le x^2 + 8x + 16$.\nSubtract $x^2$ from both sides: $-4x + 4 \\le 8x + 16$.\nRearrange: $-12 \\le 12x \\implies x \\ge -1$."
    },
    {
      id: "inequalities-s2-q29",
      question: "Find the solution set for $||x| - 2| < 1$.",
      options: ["$x \\in (-3, -1) \\cup (1, 3)$", "$x \\in (1, 3)$", "$x \\in (-3, 3)$", "$x \\in (-\\infty, -3) \\cup (3, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nUnfold the outer absolute value: $-1 < |x| - 2 < 1$.\nAdd 2 to all parts: $1 < |x| < 3$.\nThis means $|x| > 1$ AND $|x| < 3$.\n$|x| < 3 \\implies -3 < x < 3$.\n$|x| > 1 \\implies x > 1 \\text{ OR } x < -1$.\nIntersection of these conditions gives $x \\in (-3, -1) \\cup (1, 3)$."
    },
    {
      id: "inequalities-s2-q30",
      question: "Solve the inequality: $|x^2 - 4| < 5$.",
      options: ["$x \\in (-3, 3)$", "$x \\in (-\\infty, -3) \\cup (3, \\infty)$", "$x \\in (-1, 3)$", "$x \\in (-3, -1) \\cup (1, 3)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nUnfold the absolute value: $-5 < x^2 - 4 < 5$.\nAdd 4 to all parts: $-1 < x^2 < 9$.\nSince $x^2 \\ge 0$ for all real $x$, the left inequality ($-1 < x^2$) is always true$.\nWe only need to solve $x^2 < 9$, which yields $-3 < x < 3$."
    },
    {
      id: "inequalities-s2-q31",
      question: "Find the solution set of $\\frac{1}{|x-2|} > 2$.",
      options: ["$x \\in (1.5, 2) \\cup (2, 2.5)$", "$x \\in (1.5, 2.5)$", "$x \\in (-\\infty, 1.5) \\cup (2.5, \\infty)$", "$x \\in (2, 2.5)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nSince $|x-2| > 0$ for $x \\ne 2$, we can cross-multiply and divide: $|x-2| < 1/2$.\nUnfold the absolute value: $-0.5 < x - 2 < 0.5$.\nAdd 2 to all parts: $1.5 < x < 2.5$.\nHowever, the original expression is undefined at $x=2$. We must exclude it: $(1.5, 2) \\cup (2, 2.5)$."
    },
    {
      id: "inequalities-s2-q32",
      question: "Solve the inequality: $|x-1| + |x-2| \\ge 3$.",
      options: ["$x \\in (-\\infty, 0] \\cup [3, \\infty)$", "$x \\in [0, 3]$", "$x \\in (-\\infty, 1] \\cup [2, \\infty)$", "$x \\ge 3$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nCheck critical points $x=1$ and $x=2$ to divide into 3 cases.\nCase 1 ($x \\ge 2$): Both positive. $(x-1) + (x-2) \\ge 3 \\implies 2x - 3 \\ge 3 \\implies 2x \\ge 6 \\implies x \\ge 3$.\nCase 2 ($1 \\le x < 2$): First positive, second negative. $(x-1) - (x-2) \\ge 3 \\implies 1 \\ge 3$ (False).\nCase 3 ($x < 1$): Both negative. $-(x-1) - (x-2) \\ge 3 \\implies -2x + 3 \\ge 3 \\implies -2x \\ge 0 \\implies x \\le 0$.\nCombining valid regions: $(-\\infty, 0] \\cup [3, \\infty)$."
    },
    {
      id: "inequalities-s2-q33",
      question: "Find the solution set of $|x^2 - 3x| < 2$.",
      options: ["$x \\in (\\frac{3-\\sqrt{17}}{2}, 1) \\cup (2, \\frac{3+\\sqrt{17}}{2})$", "$x \\in (1, 2)$", "$x \\in (\\frac{3-\\sqrt{17}}{2}, \\frac{3+\\sqrt{17}}{2})$", "$x \\in (-1, 2) \\cup (3, 4)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nUnfold the absolute value: $-2 < x^2 - 3x < 2$. This gives two inequalities.\nLeft: $x^2 - 3x + 2 > 0 \\implies (x-1)(x-2) > 0 \\implies x \\in (-\\infty, 1) \\cup (2, \\infty)$.\nRight: $x^2 - 3x - 2 < 0$. Roots via quadratic formula are $\\frac{3 \\pm \\sqrt{9 - 4(-2)}}{2} = \\frac{3 \\pm \\sqrt{17}}{2}$. Solution is $x \\in (\\frac{3-\\sqrt{17}}{2}, \\frac{3+\\sqrt{17}}{2})$.\nIntersecting the two solutions gives the final answer: $(\\frac{3-\\sqrt{17}}{2}, 1) \\cup (2, \\frac{3+\\sqrt{17}}{2})$."
    },
    {
      id: "inequalities-s2-q34",
      question: "Solve the inequality: $\\frac{|x+2|}{x} < 1$.",
      options: ["$x \\in (-\\infty, 0)$", "$x \\in (-\\infty, -2)$", "$x \\in (0, \\infty)$", "$x \\in (-2, 0)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nCase 1 ($x > 0$): $|x+2|$ is positive ($x+2$). The inequality is $\\frac{x+2}{x} < 1 \\implies x+2 < x \\implies 2 < 0$. This is false. No solution for $x>0$.\nCase 2 ($x < 0$): $|x+2| \\ge 0$, and the denominator $x$ is negative. A positive/zero divided by a negative is always negative, which is strictly less than 1$.\nTherefore, the inequality holds true for all $x < 0$."
    },
    {
      id: "inequalities-s2-q35",
      question: "Find the solution set of $|2x-1| < x+2$.",
      options: ["$x \\in (-1/3, 3)$", "$x \\in (-\\infty, 3)$", "$x \\in (-1/3, \\infty)$", "$x \\in (-2, 3)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFor an absolute value to be less than an expression, that expression must be positive: $x+2 > 0 \\implies x > -2$.\nUnfold: $-(x+2) < 2x - 1 < x+2$.\nRight side: $2x - 1 < x + 2 \\implies x < 3$.\nLeft side: $-x - 2 < 2x - 1 \\implies -1 < 3x \\implies x > -1/3$.\nIntersection of $x > -2, x < 3, x > -1/3$ is $(-1/3, 3)$."
    },
    {
      id: "inequalities-s2-q36",
      question: "Solve the inequality: $|x-3| > 2x-1$.",
      options: ["$x \\in (-\\infty, 4/3)$", "$x \\in (4/3, \\infty)$", "$x \\in (-\\infty, 0.5) \\cup (4/3, \\infty)$", "$x \\in (0.5, 4/3)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nCase 1 ($2x-1 < 0 \\implies x < 0.5$): The absolute value (positive/zero) is always greater than a negative number. So all $x < 0.5$ are valid.\nCase 2 ($2x-1 \\ge 0 \\implies x \\ge 0.5$): The inequality unfolds to $x-3 > 2x-1$ OR $x-3 < -(2x-1)$.\nFirst branch: $-2 > x \\implies x < -2$ (contradicts $x \\ge 0.5$).\nSecond branch: $x-3 < -2x+1 \\implies 3x < 4 \\implies x < 4/3$. With $x \\ge 0.5$, we get $[0.5, 4/3)$.\nCombining Case 1 and Case 2 gives $(-\\infty, 4/3)$."
    },
    {
      id: "inequalities-s2-q37",
      question: "Find the solution set of $\\frac{|x-1|}{x+2} < 1$.",
      options: ["$x \\in (-\\infty, -2) \\cup (-0.5, \\infty)$", "$x \\in (-0.5, \\infty)$", "$x \\in (-\\infty, -2)$", "$x \\in (-2, -0.5)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nCase 1 ($x+2 < 0 \\implies x < -2$): The fraction is positive/zero divided by a negative, which is negative, always $< 1$. So $(-\\infty, -2)$ is valid.\nCase 2 ($x+2 > 0 \\implies x > -2$): Since denominator is positive, cross-multiply: $|x-1| < x+2$.\nUnfold: $-(x+2) < x-1 < x+2$.\nRight side: $x-1 < x+2 \\implies -1 < 2$ (Always true).\nLeft side: $-x-2 < x-1 \\implies -1 < 2x \\implies x > -0.5$.\nCombining with $x > -2$ gives $(-0.5, \\infty)$.\nTotal solution is $(-\\infty, -2) \\cup (-0.5, \\infty)$."
    },
    {
      id: "inequalities-s2-q38",
      question: "Solve the inequality: $x^2 - |x| - 6 < 0$.",
      options: ["$x \\in (-3, 3)$", "$x \\in (-\\infty, -3) \\cup (3, \\infty)$", "$x \\in (-2, 3)$", "$x \\in (-3, 2)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nSince $x^2 = |x|^2$, rewrite as $|x|^2 - |x| - 6 < 0$.\nFactor the quadratic in terms of $|x|$: $(|x| - 3)(|x| + 2) < 0$.\nBecause $|x| + 2$ is strictly positive for all $x$, we can divide by it without affecting the sign.\nThis leaves $|x| - 3 < 0 \\implies |x| < 3$.\nUnfolding the absolute value yields $-3 < x < 3$."
    },
    {
      id: "inequalities-s2-q39",
      question: "Find the solution set of $|x-1| \\le 2x$.",
      options: ["$x \\in [1/3, \\infty)$", "$x \\in [-1, \\infty)$", "$x \\in [1/3, 1]$", "$x \\in [1, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFor an absolute value to be less than or equal to an expression, that expression must be non-negative: $2x \\ge 0 \\implies x \\ge 0$.\nUnfold: $-2x \\le x - 1 \\le 2x$.\nRight side: $x - 1 \\le 2x \\implies x \\ge -1$.\nLeft side: $-2x \\le x - 1 \\implies 3x \\ge 1 \\implies x \\ge 1/3$.\nThe intersection of $x \\ge 0$, $x \\ge -1$, and $x \\ge 1/3$ is $[1/3, \\infty)$."
    },
    {
      id: "inequalities-s2-q40",
      question: "How many integral solutions satisfy the inequality $|x-3| < 4$?",
      options: ["$7$", "$6$", "$8$", "$9$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nUnfold the absolute value: $-4 < x - 3 < 4$.\nAdd 3 to all parts: $-1 < x < 7$.\nThe integers within this strict interval are: 0, 1, 2, 3, 4, 5, 6$.\nCounting them, there are exactly 7 integral solutions."
    },
    {
      id: "inequalities-s2-q41",
      question: "Solve the logarithmic inequality: $\\log_2(x-1) < 3$.",
      options: ["$x \\in (1, 9)$", "$x < 9$", "$x \\in (0, 9)$", "$x \\in (1, 8)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFirst, identify the domain of the logarithm: $x - 1 > 0 \\implies x > 1$.\nSince the base (2) is greater than 1, we exponentiate both sides without flipping the inequality sign: $x - 1 < 2^3$.\n$x - 1 < 8 \\implies x < 9$.\nIntersecting with the domain $x > 1$ gives $x \\in (1, 9)$."
    },
    {
      id: "inequalities-s2-q42",
      question: "Find the solution set of $\\log_{0.5}(2x-1) > 1$.",
      options: ["$x \\in (0.5, 0.75)$", "$x < 0.75$", "$x \\in (0, 0.75)$", "$x > 0.75$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nDomain: $2x - 1 > 0 \\implies x > 0.5$.\nSince the base ($0.5$) is less than 1, exponentiating both sides requires FLIPPING the inequality sign: $2x - 1 < 0.5^1$.\n$2x - 1 < 0.5 \\implies 2x < 1.5 \\implies x < 0.75$.\nIntersecting with the domain gives $x \\in (0.5, 0.75)$."
    },
    {
      id: "inequalities-s2-q43",
      question: "Solve the inequality: $\\log_3(x^2 - 8) > 0$.",
      options: ["$x \\in (-\\infty, -3) \\cup (3, \\infty)$", "$x \\in (-3, 3)$", "$x \\in (-\\infty, -2\\sqrt{2}) \\cup (2\\sqrt{2}, \\infty)$", "$x > 3$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nDomain: $x^2 - 8 > 0 \\implies x^2 > 8$.\nBase is 3 ($>1$), so: $x^2 - 8 > 3^0 \\implies x^2 - 8 > 1$.\n$x^2 > 9$.\nTaking the square root gives $|x| > 3$, which unfolds to $x \\in (-\\infty, -3) \\cup (3, \\infty)$.\nThis range naturally satisfies the domain $x^2 > 8$."
    },
    {
      id: "inequalities-s2-q44",
      question: "Find the solution set of $\\log_{1/3}(x^2 - x - 2) \\ge -1$.",
      options: ["$x \\in [\\frac{1-\\sqrt{21}}{2}, -1) \\cup (2, \\frac{1+\\sqrt{21}}{2}]$", "$x \\in [-1, 2]$", "$x \\in [\\frac{1-\\sqrt{21}}{2}, \\frac{1+\\sqrt{21}}{2}]$", "$x \\in (-\\infty, -1) \\cup (2, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nDomain: $x^2 - x - 2 > 0 \\implies (x-2)(x+1) > 0 \\implies x \\in (-\\infty, -1) \\cup (2, \\infty)$.\nBase is $1/3$ ($<1$), so FLIP the sign: $x^2 - x - 2 \\le (1/3)^{-1} = 3$.\n$x^2 - x - 5 \\le 0$. Roots are $\\frac{1 \\pm \\sqrt{1 - 4(-5)}}{2} = \\frac{1 \\pm \\sqrt{21}}{2}$.\nThe quadratic is $\\le 0$ between these roots: $x \\in [\\frac{1-\\sqrt{21}}{2}, \\frac{1+\\sqrt{21}}{2}]$.\nIntersecting with the domain gives the final answer: $[\\frac{1-\\sqrt{21}}{2}, -1) \\cup (2, \\frac{1+\\sqrt{21}}{2}]$."
    },
    {
      id: "inequalities-s2-q45",
      question: "Solve the inequality: $\\log_2(\\log_3 x) < 1$.",
      options: ["$x \\in (1, 9)$", "$x \\in (3, 9)$", "$x \\in (0, 9)$", "$x \\in (1, 8)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nDomain of inner log: $x > 0$.\nDomain of outer log: $\\log_3 x > 0 \\implies x > 1$.\nSolve the outer inequality (base 2 > 1, no flip): $\\log_3 x < 2^1 = 2$.\nSolve the inner inequality (base 3 > 1, no flip): $x < 3^2 = 9$.\nCombining with the domain restriction $x > 1$ yields $x \\in (1, 9)$."
    },
    {
      id: "inequalities-s2-q46",
      question: "Find the solution set of $\\log_x(4) < 2$.",
      options: ["$x \\in (0, 1) \\cup (2, \\infty)$", "$x > 2$", "$x \\in (1, 2)$", "$x \\in (0, 2)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nBase domain: $x > 0, x \\ne 1$. We must consider two cases.\nCase 1 ($x > 1$): No sign flip. $\\log_x 4 < \\log_x x^2 \\implies 4 < x^2 \\implies x > 2$ (since $x>0$). Intersecting with $x>1$ gives $(2, \\infty)$.\nCase 2 ($0 < x < 1$): FLIP the sign. $\\log_x 4 < \\log_x x^2 \\implies 4 > x^2$. This is true for all $x \\in (0, 1)$.\nThe union of both cases gives $x \\in (0, 1) \\cup (2, \\infty)$."
    },
    {
      id: "inequalities-s2-q47",
      question: "Solve the inequality: $\\log_2(x) + \\log_2(x-2) \\le 3$.",
      options: ["$x \\in (2, 4]$", "$x \\in [-2, 4]$", "$x \\in (0, 4]$", "$x \\in (2, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nDomain: $x > 0$ and $x - 2 > 0 \\implies x > 2$.\nUse log addition rule: $\\log_2(x(x-2)) \\le 3$.\nExponentiate (base 2 > 1, no flip): $x^2 - 2x \\le 2^3 = 8$.\n$x^2 - 2x - 8 \\le 0 \\implies (x-4)(x+2) \\le 0 \\implies x \\in [-2, 4]$.\nIntersecting this interval with the domain $x > 2$ gives $(2, 4]$."
    },
    {
      id: "inequalities-s2-q48",
      question: "Find the solution set for $\\frac{\\log_2(x-1)}{x-3} < 0$.",
      options: ["$x \\in (2, 3)$", "$x \\in (1, 2) \\cup (3, \\infty)$", "$x \\in (1, 3)$", "$x \\in (3, \\infty)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nDomain: $x - 1 > 0 \\implies x > 1$. The denominator restricts $x \\ne 3$.\nThe numerator $\\log_2(x-1)$ equals 0 at $x-1 = 1 \\implies x = 2$. It is positive for $x > 2$ and negative for $1 < x < 2$.\nThe denominator $x-3$ is positive for $x > 3$ and negative for $x < 3$.\nSign chart for $1 < x < 2$: (neg)/(neg) = positive.\nSign chart for $2 < x < 3$: (pos)/(neg) = negative.\nSign chart for $x > 3$: (pos)/(pos) = positive.\nWe want the strictly negative region, so $x \\in (2, 3)$."
    },
    {
      id: "inequalities-s2-q49",
      question: "Solve the logarithmic inequality: $\\log_{0.5}(x^2 - 5x + 6) > -1$.",
      options: ["$x \\in (1, 2) \\cup (3, 4)$", "$x \\in (1, 4)$", "$x \\in (-\\infty, 2) \\cup (3, \\infty)$", "$x \\in (2, 3)$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nDomain: $x^2 - 5x + 6 > 0 \\implies (x-2)(x-3) > 0 \\implies x \\in (-\\infty, 2) \\cup (3, \\infty)$.\nBase is $0.5$ ($<1$), so FLIP the sign: $x^2 - 5x + 6 < 0.5^{-1} = 2$.\n$x^2 - 5x + 4 < 0 \\implies (x-1)(x-4) < 0 \\implies x \\in (1, 4)$.\nIntersecting the solution $(1, 4)$ with the domain $(-\\infty, 2) \\cup (3, \\infty)$ gives $(1, 2) \\cup (3, 4)$."
    },
    {
      id: "inequalities-s2-q50",
      question: "Find the domain of the function $f(x) = \\sqrt{\\log_{1/2}(x-2)}$.",
      options: ["$x \\in (2, 3]$", "$x \\in [3, \\infty)$", "$x \\in (2, \\infty)$", "$x \\in (-\\infty, 3]$"],
      answer: 0,
      explanation: "**Step-by-step Solution:**\nFor the square root to be real, the term inside must be non-negative: $\\log_{1/2}(x-2) \\ge 0$.\nDomain of the log requires $x - 2 > 0 \\implies x > 2$.\nSolve the log inequality (base 1/2 < 1, FLIP sign): $x - 2 \\le (1/2)^0 = 1 \\implies x \\le 3$.\nIntersecting the log domain ($x > 2$) with the inequality solution ($x \\le 3$) gives the full domain: $x \\in (2, 3]$."
    }
  ]
};

export default set2;
