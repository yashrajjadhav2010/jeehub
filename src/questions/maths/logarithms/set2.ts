import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set2',
  title: 'Logarithms - Set 2',
  chapterId: 'logarithms',
  subjectId: 'maths',
  difficulty: 'medium',
  questions: [
    {
      id: 'log-s2-1',
      question: 'Solve for $x$: $\\log_2(x-1) + \\log_2(x+1) = 3$.',
      options: ['$3$', '$4$', '$\\pm 3$', '$8$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain constraints:** $x-1 > 0 \\implies x > 1$, and $x+1 > 0 \\implies x > -1$. Thus combined domain is $x > 1$.\n2. **Apply Product Rule:**\n$$\\log_2((x-1)(x+1)) = 3 \\implies \\log_2(x^2 - 1) = 3$$\n3. **Exponential Form:**\n$$x^2 - 1 = 2^3 = 8 \\implies x^2 = 9$$\n4. This yields $x = \\pm 3$. Since $x > 1$, we reject $x = -3$.\n\nHence, the only solution is $x = 3$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-2',
      question: 'If $\\log_{10} x = y$, what is $\\log_{1000} x^2$?',
      options: ['$2y/3$', '$3y/2$', '$y/3$', '$6y$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Apply Base-Change Property:** Recall that $\\log_{b^n} a^m = \\frac{m}{n} \\log_b a$.\n2. Here, the base is $1000 = 10^3$, and the argument is $x^2$:\n$$\\log_{1000} x^2 = \\log_{10^3} x^2 = \\frac{2}{3} \\log_{10} x$$\n3. Since $\\log_{10} x = y$, our expression becomes:\n$$\\frac{2y}{3}$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-3',
      question: 'Solve the equation: $\\log_x(2x + 3) = 2$.',
      options: ['$3$', '$-1, 3$', '$1$', '$2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain constraints:** $x > 0$, $x \\neq 1$, and $2x + 3 > 0 \\implies x > -1.5$. Thus, combined domain is $x > 0$ and $x \\neq 1$.\n2. **Exponential Form:**\n$$x^2 = 2x + 3 \\implies x^2 - 2x - 3 = 0$$\n3. **Solve the Quadratic:**\n$$(x - 3)(x + 1) = 0 \\implies x = 3 \\quad \\text{or} \\quad x = -1$$\n4. Since $x > 0$, we reject $x = -1$. The only valid solution is $x = 3$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-4',
      question: 'Evaluate: $\\log_2(\\log_3(\\log_4 64))$.',
      options: ['$0$', '$1$', '$-1$', 'Undefined'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Start from the innermost logarithm: Since $4^3 = 64$, we have:\n$$\\log_4 64 = 3$$\n2. Substitute into next level:\n$$\\log_3(3) = 1$$\n3. Substitute into outer level:\n$$\\log_2(1) = 0$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-5',
      question: 'Solve for $x$: $x^{\\log_{10} x} = 100x$.',
      options: ['$100 \\text{ and } 0.1$', '$10 \\text{ and } 0.1$', '$100 \\text{ and } 0.01$', '$10$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Take $\\log_{10}$ on both sides:\n$$\\log_{10}\\left(x^{\\log_{10} x}\\right) = \\log_{10}(100x)$$\n2. Multiplied by exponent power rules:\n$$(\\log_{10} x)(\\log_{10} x) = \\log_{10} 100 + \\log_{10} x \\implies (\\log_{10} x)^2 - \\log_{10} x - 2 = 0$$\n3. Let $y = \\log_{10} x$. Then:\n$$y^2 - y - 2 = 0 \\implies (y - 2)(y + 1) = 0 \\implies y = 2 \\quad \\text{or} \\quad y = -1$$\n4. Solve back for $x$:\n- $\\log_{10} x = 2 \\implies x = 10^2 = 100$\n- $\\log_{10} x = -1 \\implies x = 10^{-1} = 0.1$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-6',
      question: 'Find the value of $x$: $\\log_4(x+2) - \\log_4(x-1) = 1/2$.',
      options: ['$4$', '$3$', '$2$', '$5$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain constraints:** $x+2 > 0$ and $x-1 > 0 \\implies x > 1$.\n2. **Apply Quotient rule:**\n$$\\log_4\\left(\\frac{x+2}{x-1}\\right) = \\frac{1}{2}$$\n3. **Exponential Form:**\n$$\\frac{x+2}{x-1} = 4^{1/2} = 2 \\implies x+2 = 2(x-1)$$\n4. **Solve:**\n$$x+2 = 2x - 2 \\implies x = 4$$\nSince $4 > 1$, it is a valid solution.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-7',
      question: 'Simplify: $\\frac{1}{\\log_2 30} + \\frac{1}{\\log_3 30} + \\frac{1}{\\log_5 30}$.',
      options: ['$1$', '$30$', '$0$', '$2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Convert terms using Base Change reciprocal property:** Recall that $\\frac{1}{\\log_a b} = \\log_b a$.\n2. Rewrite the terms:\n$$\\log_{30} 2 + \\log_{30} 3 + \\log_{30} 5$$\n3. **Apply Product rule:**\n$$\\log_{30}(2 \\times 3 \\times 5) = \\log_{30}(30) = 1$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-8',
      question: 'Solve the inequality: $\\log_{1/2}(x - 3) > -1$.',
      options: ['$x \\in (3, 5)$', '$x > 5$', '$x < 5$', '$x \\in (3, 5.5)$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain constraint:** $x-3 > 0 \\implies x > 3$.\n2. **Solve inequality:** Since the base is $\\frac{1}{2} < 1$, flip the inequality sign:\n$$x-3 < \\left(\\frac{1}{2}\\right)^{-1} \\implies x-3 < 2 \\implies x < 5$$\n3. Combining with domain gives:\n$$x \\in (3, 5)$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-9',
      question: 'If $a^2 + b^2 = 7ab$, find the value of $\\log\\left(\\frac{a+b}{3}\\right)$.',
      options: ['$\\frac{1}{2}(\\log a + \\log b)$', '$\\log a + \\log b$', '$2(\\log a + \\log b)$', '$\\frac{1}{3}(\\log a + \\log b)$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Add $2ab$ to both sides of the equation:\n$$a^2 + 2ab + b^2 = 9ab \\implies (a+b)^2 = 9ab$$\n2. Divide by 9:\n$$\\frac{(a+b)^2}{9} = ab \\implies \\left(\\frac{a+b}{3}\\right)^2 = ab$$\n3. Take logarithm of both sides:\n$$\\log\\left(\\left(\\frac{a+b}{3}\\right)^2\\right) = \\log(ab) \\implies 2 \\log\\left(\\frac{a+b}{3}\\right) = \\log a + \\log b$$\n4. Divide by 2:\n$$\\log\\left(\\frac{a+b}{3}\\right) = \\frac{1}{2}(\\log a + \\log b)$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-10',
      question: 'Evaluate: $7^{\\log_7 3 + \\log_7 2}$.',
      options: ['$6$', '$5$', '$9$', '$36$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Simplify the exponent:** Use the Product property of logarithms:\n$$\\log_7 3 + \\log_7 2 = \\log_7(3 \\times 2) = \\log_7 6$$\n2. **Apply fundamental base-identity:**\n$$7^{\\log_7 6} = 6$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-11',
      question: 'Find $x$ if $\\log_x 8 + \\log_x 4 = 5$.',
      options: ['$2$', '$4$', '$8$', '$16$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Use Product Property of logarithms:\n$$\\log_x(8 \\times 4) = 5 \\implies \\log_x 32 = 5$$\n2. Exponential Form:\n$$x^5 = 32$$\n3. Since $2^5 = 32$, we get $x = 2$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-12',
      question: 'Solve the equation: $3^{\\log_3(x^2 - 4x)} = 5$.',
      options: ['$5, -1$', '$5$', '$-1$', '$4, -1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain constraints:** $x^2 - 4x > 0 \\implies x(x-4) > 0 \\implies x < 0$ or $x > 4$.\n2. Simplify LHS using $a^{\\log_a y} = y$:\n$$x^2 - 4x = 5 \\implies x^2 - 4x - 5 = 0$$\n3. **Solve the quadratic equation:**\n$$(x - 5)(x + 1) = 0 \\implies x = 5 \\quad \\text{or} \\quad x = -1$$\nBoth $5$ and $-1$ lie in the active domain constraint.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-13',
      question: 'Find the value of $\\log_2 3 \\cdot \\log_3 4 \\cdot \\log_4 5 \\cdots \\log_{31} 32$.',
      options: ['$5$', '$32$', '$2$', '$10$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Apply base-change formula $\\log_a b = \\frac{\\log b}{\\log a}$:\n$$\\frac{\\log 3}{\\log 2} \\cdot \\frac{\\log 4}{\\log 3} \\cdot \\frac{\\log 5}{\\log 4} \\cdots \\frac{\\log 32}{\\log 31}$$\n2. Notice telescoping cancellations of terms, leaving only:\n$$\\frac{\\log 32}{\\log 2} = \\log_2 32$$\n3. Since $2^5 = 32$, the final result is 5.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-14',
      question: 'Solve: $\\log_2 x + \\log_4 x + \\log_{16} x = \\frac{21}{4}$.',
      options: ['$8$', '$16$', '$4$', '$32$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Convert all logarithms to base 2:\n$$\\log_4 x = \\log_{2^2} x = \\frac{1}{2} \\log_2 x$$\n$$\\log_{16} x = \\log_{2^4} x = \\frac{1}{4} \\log_2 x$$\n2. Substitute in the equation:\n$$\\log_2 x + \\frac{1}{2} \\log_2 x + \\frac{1}{4} \\log_2 x = \\frac{21}{4}$$\n3. Combine terms:\n$$\\left(1 + \\frac{1}{2} + \\frac{1}{4}\\right) \\log_2 x = \\frac{21}{4} \\implies \\frac{7}{4} \\log_2 x = \\frac{21}{4}$$\n4. Divide by $\\frac{7}{4}$:\n$$\\log_2 x = 3 \\implies x = 2^3 = 8$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-15',
      question: 'Solve the inequality: $\\log_3(x^2 - 8) > 0$.',
      options: ['$x \\in (-\\infty, -3) \\cup (3, \\infty)$', '$x \\in (-3, 3)$', '$x \\in (-\\infty, -\\sqrt{8}) \\cup (\\sqrt{8}, \\infty)$', '$x > 3$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Domain check: $x^2 - 8 > 0 \\implies |x| > \\sqrt{8}$.\n2. Solve logarithmic part (base $3 > 1$, inequality sign maintained):\n$$x^2 - 8 > 3^0 \\implies x^2 - 8 > 1 \\implies x^2 > 9$$\n3. This yields $|x| > 3 \\implies x < -3 \\text{ or } x > 3$.\n4. Since $3 > \\sqrt{8}$, this condition is stricter and thus becomes the final interval:\n$$x \\in (-\\infty, -3) \\cup (3, \\infty)$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-16',
      question: 'If $x = \\log_a(bc), y = \\log_b(ca), z = \\log_c(ab)$, then find the value of $\\frac{1}{1+x} + \\frac{1}{1+y} + \\frac{1}{1+z}$.',
      options: ['$1$', '$0$', '$abc$', '$3$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Simplify the denominator elements:\n$$1+x = \\log_a a + \\log_a bc = \\log_a(abc)$$\n$$1+y = \\log_b b + \\log_b ca = \\log_b(abc)$$\n$$1+z = \\log_c c + \\log_c ab = \\log_c(abc)$$\n2. Using reciprocal identity $\\frac{1}{\\log_p q} = \\log_q p$, we sum the reciprocals:\n$$\\log_{abc} a + \\log_{abc} b + \\log_{abc} c = \\log_{abc}(abc) = 1$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-17',
      question: 'If $\\log_{10} 2 = 0.3010$, find the number of digits in $2^{50}$.',
      options: ['$16$', '$15$', '$17$', '$14$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Let $x = 2^{50}$. The number of digits of $x$ is equal to $\\lfloor \\log_{10} x \\rfloor + 1$.\n2. Take logarithm base 10:\n$$\\log_{10}(2^{50}) = 50 \\log_{10} 2 = 50 \\times 0.3010 = 15.05$$\n3. Floor value is 15. Number of digits:\n$$15 + 1 = 16$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-18',
      question: 'Find the domain of $f(x) = \\sqrt{\\log_2(x-1)}$.',
      options: ['$x \\ge 2$', '$x > 1$', '$x \\in (1, 2]$', '$x \\ge 1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Logarithm constraint:** $x-1 > 0 \\implies x > 1$.\n2. **Square root constraint:** $\\log_2(x-1) \\ge 0$.\n3. Solve the logarithmic inequality:\n$$x-1 \\ge 2^0 \\implies x-1 \\ge 1 \\implies x \\ge 2$$\nThe intersection of $x > 1$ and $x \\ge 2$ is $x \\ge 2$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-19',
      question: 'Solve the system of equations: $\\log x + \\log y = 2$ and $x - y = 15$. (Assume base 10)',
      options: ['$x=20, y=5$', '$x=25, y=10$', '$x=5, y=-10$', 'No solution'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Combine the logs: $\\log(xy) = 2 \\implies xy = 10^2 = 100$.\n2. Substitute $x = y + 15$ from second equation:\n$$(y + 15)y = 100 \\implies y^2 + 15y - 100 = 0 \\implies (y + 20)(y - 5) = 0$$\n3. Since arguments must be positive, $y = 5$.\n4. Thus, $x = y + 15 = 20$. Solution is $(20, 5)$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-20',
      question: 'Solve the inequality: $\\log_{x^2}(x+2) < 1$.',
      options: ['$x \\in (-2, -1) \\cup (-1, 0) \\cup (0, 1) \\cup (2, \\infty)$', '$x \\in (2, \\infty)$', '$x \\in (-1, 0) \\cup (0, 1)$', '$x \\in (-2, 2)$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain:** $x+2 > 0 \\implies x > -2$. Base $x^2 > 0, x^2 \\neq 1 \\implies x \\ne 0, \\pm 1$. Domain: $x \\in (-2, \\infty) \\setminus \\{-1, 0, 1\\}$.\n2. **Case 1: $x^2 > 1 \\implies x \\in (-\\infty, -1) \\cup (1, \\infty)$:**\n$$x+2 < x^2 \\implies x^2 - x - 2 > 0 \\implies (x-2)(x+1) > 0$$\nThis gives $x < -1$ or $x > 2$. Intersection: $x \\in (-2, -1) \\cup (2, \\infty)$.\n3. **Case 2: $0 < x^2 < 1 \\implies x \\in (-1, 0) \\cup (0, 1)$:**\n$$x+2 > x^2 \\implies x^2 - x - 2 < 0 \\implies (x-2)(x+1) < 0$$\nThis gives $x \\in (-1, 2)$. Intersection: $x \\in (-1, 0) \\cup (0, 1)$.\n4. Union of Case 1 and Case 2: $x \\in (-2, -1) \\cup (-1, 0) \\cup (0, 1) \\cup (2, \\infty)$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-21',
      question: 'If $\\log_2 x = a$ and $\\log_5 y = a$, find $10^a$.',
      options: ['$xy$', '$x/y$', '$x+y$', '$10xy$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Exponential equivalent: $x = 2^a$ and $y = 5^a$.\n2. Multiply both values:\n$$x \\cdot y = 2^a \\cdot 5^a = (2 \\cdot 5)^a = 10^a$$\nTherefore, $10^a = xy$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-22',
      question: 'Solve for $x$: $5^{\\log x} + 5x^{\\log 5} = 30$. (Assume base 10)',
      options: ['$10$', '$5$', '$100$', '$1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Apply base-swapping identity $a^{\\log_b c} = c^{\\log_b a}$:\n$$x^{\\log 5} = 5^{\\log x}$$\n2. Rewrite the equation:\n$$5^{\\log x} + 5 \\cdot 5^{\\log x} = 30 \\implies 6 \\cdot 5^{\\log x} = 30 \\implies 5^{\\log x} = 5$$\n3. Equating exponents:\n$$\\log x = 1 \\implies x = 10^1 = 10$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-23',
      question: 'Find the value of $x$ for which $\\log_2(5 \\cdot 2^x + 1), \\log_4(2^{1-x} + 1), 1$ are in Arithmetic Progression (A.P.).',
      options: ['$\\log_2(2/5)$', '$1$', '$\\log_2(5)$', '$2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. If A, B, C are in A.P., then $2B = A + C$:\n$$2 \\log_4(2^{1-x} + 1) = \\log_2(5 \\cdot 2^x + 1) + 1$$\n2. Note $2 \\log_4 y = 2 \\log_{2^2} y = \\log_2 y$:\n$$\\log_2(2^{1-x} + 1) = \\log_2(5 \\cdot 2^x + 1) + \\log_2 2 \\implies \\log_2(2^{1-x} + 1) = \\log_2(2(5 \\cdot 2^x + 1))$$\n3. Equating arguments:\n$$2^{1-x} + 1 = 10 \\cdot 2^x + 2 \\implies \\frac{2}{2^x} + 1 = 10 \\cdot 2^x + 2$$\n4. Let $y = 2^x$. Then $\\frac{2}{y} + 1 = 10y + 2 \\implies 10y^2 + y - 2 = 0$.\nBy quadratic formula: $y = 2/5$ or $y = -1/2$. Since $2^x > 0$, $2^x = 2/5 \\implies x = \\log_2(2/5)$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-24',
      question: 'Evaluate: $\\log_{10} \\tan 1^\\circ + \\log_{10} \\tan 2^\\circ + \\dots + \\log_{10} \\tan 89^\\circ$.',
      options: ['$0$', '$1$', '$-1$', 'Undefined'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Convert summation of logs to log of products:\n$$\\log_{10}\\left(\\tan 1^\\circ \\cdot \\tan 2^\\circ \\dots \\tan 89^\\circ\\right)$$\n2. Group complementary angles using $\\tan(90^\\circ - \\theta) = \\cot \\theta$:\n$$\\tan 1^\\circ \\cdot \\tan 89^\\circ = \\tan 1^\\circ \\cdot \\cot 1^\\circ = 1$$\nThis pairs all elements to 1. The middle term $\\tan 45^\\circ$ is also 1.\n3. The product inside log is 1:\n$$\\log_{10}(1) = 0$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-25',
      question: 'Find the number of real solutions of the equation $\\log_{10}(-x) = \\log_{10}(x^2)$.',
      options: ['$1$', '$0$', '$2$', '$3$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain:** $-x > 0 \\implies x < 0$, and $x^2 > 0 \\implies x \\ne 0$. Domain is $x < 0$.\n2. Equate arguments:\n$$-x = x^2 \\implies x^2 + x = 0 \\implies x(x + 1) = 0$$\n3. This gives $x = 0$ or $x = -1$.\nSince $x < 0$, $x = 0$ is rejected. Valid solution is $x = -1$. There is exactly $1$ solution.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-26',
      question: 'Solve the inequality: $\\log_{0.5}(x^2 - x) \\ge -1$.',
      options: ['$x \\in [-1, 0) \\cup (1, 2]$', '$x \\in [-1, 2]$', '$x \\in (-\\infty, -1] \\cup [2, \\infty)$', '$x \\in (0, 1)$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain:** $x^2 - x > 0 \\implies x(x-1) > 0 \\implies x \\in (-\\infty, 0) \\cup (1, \\infty)$.\n2. Solve log (flip sign due to base $0.5 < 1$):\n$$x^2 - x \\le (0.5)^{-1} = 2 \\implies x^2 - x - 2 \\le 0 \\implies (x-2)(x+1) \\le 0$$\nThis gives $x \\in [-1, 2]$.\n3. Intersection with domain:\n$$x \\in [-1, 0) \\cup (1, 2]$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-27',
      question: 'If $\\log_b a = 3$ and $\\log_b c = 4$, evaluate $\\log_a (c^2 b)$.',
      options: ['$3$', '$8/3$', '$2$', '$11/3$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Convert the expression using base change to base $b$:\n$$\\log_a (c^2 b) = \\frac{\\log_b(c^2 b)}{\\log_b a}$$\n2. Expand numerator:\n$$\\log_b(c^2 b) = 2 \\log_b c + \\log_b b = 2(4) + 1 = 9$$\n3. Substitute values:\n$$\\frac{9}{3} = 3$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-28',
      question: 'Find the domain of the function $f(x) = \\log_{10} (1 - \\log_{10}(x^2 - 5x + 16))$.',
      options: ['$x \\in (2, 3)$', '$x \\in (-\\infty, 2) \\cup (3, \\infty)$', '$x \\in [2, 3]$', '$x \\in (1, 4)$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Inner quadratic: $D = 25 - 64 < 0$. So $x^2 - 5x + 16 > 0$ for all real $x$.\n2. Outer argument condition:\n$$1 - \\log_{10}(x^2 - 5x + 16) > 0 \\implies \\log_{10}(x^2 - 5x + 16) < 1$$\n3. Since base is $10 > 1$, we get:\n$$x^2 - 5x + 16 < 10^1 = 10 \\implies x^2 - 5x + 6 < 0 \\implies (x-2)(x-3) < 0$$\nThis yields $x \\in (2, 3)$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-29',
      question: 'If $x = \\log_3 5, y = \\log_5 7, z = \\log_7 9$, evaluate $x \\cdot y \\cdot z$.',
      options: ['$2$', '$1$', '$3$', '$4$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Multiple chain base properties:\n$$xyz = \\log_3 5 \\cdot \\log_5 7 \\cdot \\log_7 9$$\n2. Consolidate bases successively:\n$$\\log_3 7 \\cdot \\log_7 9 = \\log_3 9 = 2$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-30',
      question: 'Solve for $x$: $x^{\\sqrt{x}} = (\\sqrt{x})^x$.',
      options: ['$x=4 \\text{ and } x=1$', '$x=2 \\text{ and } x=1$', '$x=4$', '$x=2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Rewrite RHS: $(\\sqrt{x})^x = (x^{1/2})^x = x^{x/2}$.\n2. Equation is: $x^{\\sqrt{x}} = x^{x/2}$.\n3. Equate power expressions by taking $\\ln$ on both sides:\n$$\\sqrt{x} \\ln x = \\frac{x}{2} \\ln x \\implies \\ln x \\left(\\sqrt{x} - \\frac{x}{2}\\right) = 0$$\n4. **Case 1:** $\\ln x = 0 \\implies x = 1$.\n5. **Case 2:** $\\sqrt{x} = x/2 \\implies x = x^2/4 \\implies x^2 - 4x = 0 \\implies x = 4\\quad (\\text{since } x > 0)$.\nCombining cases, solutions are $1$ and $4$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-31',
      question: 'Find the number of real solutions of $\\log_2 x + \\log_x 2 = 5/2$.',
      options: ['$2$', '$1$', '$0$', '$4$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. By reciprocal base rule: $\\log_x 2 = \\frac{1}{\\log_2 x}$.\n2. Let $t = \\log_2 x$. The equation becomes:\n$$t + \\frac{1}{t} = \\frac{5}{2} \\implies 2t^2 - 5t + 2 = 0 \\implies (2t-1)(t-2) = 0$$\n3. Thus $t = 1/2$ or $t = 2$.\n- $\\log_2 x = 1/2 \\implies x = \\sqrt{2}$\n- $\\log_2 x = 2 \\implies x = 4$\nBoth are valid real solutions, so there are 2 solutions.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-32',
      question: 'Solve the inequality: $\\frac{\\log_2(x-1)}{x-3} < 0$.',
      options: ['$x \\in (2, 3)$', '$x \\in (1, 2) \\cup (3, \\infty)$', '$x \\in (1, 3)$', '$x \\in (-\\infty, 2) \\cup (3, \\infty)$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain:** $x-1 > 0 \\implies x > 1$. And $x \\ne 3$.\n2. Critical zero/poles for sign-chart are $x = 2$ (where numerator is 0) and $x = 3$ (where pole occurs).\n3. Test intervals inside $(1, \\infty)$:\n- $(1, 2)$: Num is (-), Den is (-). Quotient is (+).\n- $(2, 3)$: Num is (+), Den is (-). Quotient is (-). **Valid**\n- $(3, \\infty)$: Num is (+), Den is (+). Quotient is (+).\nThus, the solution is $x \\in (2, 3)$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-33',
      question: 'If $a, b, c$ are in Geometric Progression (G.P.), then $\\log_x a, \\log_x b, \\log_x c$ are in:',
      options: ['Arithmetic Progression (A.P.)', 'Geometric Progression (G.P.)', 'Harmonic Progression (H.P.)', 'None of these'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Since $a, b, c$ are in G.P. we have:\n$$b^2 = ac$$\n2. Take $\\log_x$ of both sides:\n$$\\log_x (b^2) = \\log_x(ac) \\implies 2\\log_x b = \\log_x a + \\log_x c$$\nThis is the arithmetic mean condition, confirming that $\\log_x a, \\log_x b, \\log_x c$ are in A.P.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-34',
      question: 'Find the minimum value of $f(x) = \\log_2 x + \\log_x 2$ for $x > 1$.',
      options: ['$2$', '$1$', '$0$', '$2.5$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Let $t = \\log_2 x$. Since $x > 1 \\implies t > 0$, the expression is:\n$$f(t) = t + \\frac{1}{t}$$\n2. For positive $t$, by AM-GM inequality:\n$$\\frac{t + 1/t}{2} \\ge \\sqrt{t \\cdot \\frac{1}{t}} = 1 \\implies t + \\frac{1}{t} \\ge 2$$\nMinimum value is 2, occurring when $t = 1 \\implies x = 2$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-35',
      question: 'Solve the inequality: $\\log_{1/2}|x| > 1$.',
      options: ['$x \\in (-1/2, 1/2) \\setminus \\{0\\}$', '$x \\in (-2, 2) \\setminus \\{0\\}$', '$x \\in (-1/2, 1/2)$', '$x \\in (-\\infty, -1/2) \\cup (1/2, \\infty)$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain:** $|x| > 0 \\implies x \\ne 0$.\n2. Solve: Since base is $1/2 < 1$, flip the inequality:\n$$|x| < \\left(\\frac{1}{2}\\right)^1 = \\frac{1}{2} \\implies -1/2 < x < 1/2$$\n3. Combining with domain:\n$$x \\in (-1/2, 1/2) \\setminus \\{0\\}$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-36',
      question: 'Find the number of digits in $3^{40}$. (Given $\\log_{10} 3 = 0.4771$)',
      options: ['$20$', '$19$', '$21$', '$18$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Let $N = 3^{40}$. Logarithm is:\n$$\\log_{10} N = 40 \\log_{10} 3 = 40 \\times 0.4771 = 19.084$$\n2. The characteristic (integer part) is 19.\nThe number of digits is $19 + 1 = 20$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-37',
      question: 'Solve: $\\log_x(x^2) - \\log_x(x^3) + \\log_x(x^4) = 3$.',
      options: ['All $x > 0 \\text{ and } x \\neq 1$', 'No solution', '$x = 3$', '$x = 10$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Use Power Rule of logarithms:\n$$2 \\log_x x - 3 \\log_x x + 4 \\log_x x = 3$$\n2. Since $\\log_x x = 1$ in the valid domain:\n$$2 - 3 + 4 = 3 \\implies 3 = 3$$\nThis identity is always true for the domain $x > 0, x \\neq 1$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-38',
      question: 'Evaluate: $e^{\\ln 2 + \\ln 3}$.',
      options: ['$6$', '$5$', '$e^5$', '$e^6$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Sum of natural logarithms:\n$$\\ln 2 + \\ln 3 = \\ln(2 \\times 3) = \\ln 6$$\n2. Exponential natural-log cancel identity:\n$$e^{\\ln 6} = 6$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-39',
      question: 'Solve the equation: $x^{\\log_2 x} = 16$.',
      options: ['$4 \\text{ and } 1/4$', '$2 \\text{ and } -2$', '$4$', '$16 \\text{ and } 1/16$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Domain: $x > 0$.\n2. Take log base 2 on both sides:\n$$\\log_2\\left(x^{\\log_2 x}\\right) = \\log_2 16 \\implies (\\log_2 x)(\\log_2 x) = 4$$\n3. Thus:\n$$(\\log_2 x)^2 = 4 \\implies \\log_2 x = \\pm 2$$\n- $\\log_2 x = 2 \\implies x = 4$\n- $\\log_2 x = -2 \\implies x = 1/4$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-40',
      question: 'Determine the set of real $x$ for which $\\log_2(x^2 - 5x + 6) < 1$.',
      options: ['$x \\in (1, 2) \\cup (3, 4)$', '$x \\in (1, 4)$', '$x \\in (2, 3)$', '$x \\in (-\\infty, 1) \\cup (4, \\infty)$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain constraints:** $x^2 - 5x + 6 > 0 \\implies (x-2)(x-3) > 0 \\implies x \\in (-\\infty, 2) \\cup (3, \\infty)$.\n2. Solve active log inequality (base $2 > 1$):\n$$x^2 - 5x + 6 < 2^1 = 2 \\implies x^2 - 5x + 4 < 0 \\implies (x-1)(x-4) < 0$$\nThis gives $x \\in (1, 4)$.\n3. Overlap of constraints:\n$$x \\in (1, 2) \\cup (3, 4)$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-41',
      question: 'Find the value of $\\frac{1}{\\log_2 N} + \\frac{1}{\\log_3 N} + \\dots + \\frac{1}{\\log_{100} N}$ where $N = 100!$.',
      options: ['$1$', '$100$', '$0$', '$N$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Reciprocal base property converted:\n$$\\log_N 2 + \\log_N 3 + \\dots + \\log_N 100$$\n2. Combine items inside multiplication summation property:\n$$\\log_N(2 \\times 3 \\times \\dots \\times 100) = \\log_N(100!)$$\n3. Since $N = 100!$, we have $\\log_N N = 1$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-42',
      question: 'Solve for $x$: $\\log(x+1) + \\log(x-1) = \\log 3$. (Base 10)',
      options: ['$2$', '$-2, 2$', '$4$', '$\\pm 2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain:** $x+1 > 0$ and $x-1 > 0 \\implies x > 1$.\n2. Product summation properties:\n$$\\log((x+1)(x-1)) = \\log 3 \\implies x^2 - 1 = 3 \\implies x^2 = 4$$\n3. This gives $x = \\pm 2$. Rejecting $x = -2$ since $x > 1$, we find $x = 2$.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-43',
      question: 'Find $x$ if $3^{\\log x} + x^{\\log 3} = 54$. (Base 10)',
      options: ['$1000$', '$100$', '$10$', '$3$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Base change exchange rule $a^{\\log b} = b^{\\log a}$:\n$$x^{\\log 3} = 3^{\\log x}$$\n2. Substitute in equation:\n$$3^{\\log x} + 3^{\\log x} = 54 \\implies 2 \\cdot 3^{\\log x} = 54 \\implies 3^{\\log x} = 27$$\n3. Express 27 as $3^3$:\n$$3^{\\log x} = 3^3 \\implies \\log x = 3 \\implies x = 10^3 = 1000$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-44',
      question: 'Solve the inequality $\\frac{1}{\\log_2 x} \\le \\frac{1}{\\log_2(x+2)}$.',
      options: ['$x \\in (0, 1)$', '$x \\in (1, \\infty)$', '$x \\in (0, \\infty)$', 'No solution'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain Conditions:** For $\\log_2 x \\implies x > 0, x \\ne 1$. For $\\log_2(x+2) \\implies x+2 > 0 \\implies x > -2$. Combining: $x \\in (0, 1) \\cup (1, \\infty)$.\n2. Note that $x+2 > x \\implies \\log_2(x+2) > \\log_2 x$. Thus, the numerator $\\log_2(x+2) - \\log_2 x$ is always positive.\n3. Rearrange inequality:\n$$\\frac{1}{\\log_2 x} - \\frac{1}{\\log_2(x+2)} \\le 0 \\implies \\frac{\\log_2(x+2) - \\log_2 x}{\\log_2 x \\cdot \\log_2(x+2)} \\le 0$$\n4. Since numerator is positive, the denominator must be negative:\n$$\\log_2 x \\cdot \\log_2(x+2) < 0$$\n5. Since $x > 0 \\implies x+2 > 2 \\implies \\log_2(x+2) > 1 > 0$, we must have:\n$$\\log_2 x < 0 \\implies 0 < x < 1$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-45',
      question: 'If $f(x) = \\sqrt{\\log_x(x-1)}$, find the domain of $f(x)$.',
      options: ['$x \\ge 2$', '$x > 1$', '$x > 2$', 'No real solution'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain of log:** $x-1 > 0 \\implies x > 1$. Base $x > 0, x \\ne 1$. Combined domain of log term is $x > 1$.\n2. **Square root condition:** $\\log_x(x-1) \\ge 0$.\n3. Since base $x > 1$ from the domain, we can exponentiate without flipping the inequality:\n$$x-1 \\ge x^0 \\implies x-1 \\ge 1 \\implies x \\ge 2$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-46',
      question: 'Evaluate the sum $\\sum_{k=1}^{89} \\log_5 (\\tan k^\\circ)$.',
      options: ['$0$', '$1$', '$5$', 'Undefined'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Convert summation to product inside common log:\n$$\\log_5(\\tan 1^\\circ \\cdot \\tan 2^\\circ \\cdots \\tan 89^\\circ)$$\n2. Group complementary elements:\n$$\\tan 1^\\circ \\cdot \\tan 89^\\circ = \\tan 1^\\circ \\cdot \\cot 1^\\circ = 1$$\nSum pairs all resolve to product of 1. Middle term $\\tan 45^\\circ$ is also 1.\n3. Log of 1 is zero:\n$$\\log_5 1 = 0$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-47',
      question: 'Solve the inequality: $\\log_{1/3} \\left( \\frac{2-3x}{x} \\right) \\ge -1$.',
      options: ['$x \\in [1/3, 2/3)$', '$x \\in (0, 1/3]$', '$x \\in (0, 2/3)$', '$x \\in [1/3, \\infty)$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain:** $\\frac{2-3x}{x} > 0 \\implies x \\in (0, 2/3)$.\n2. Solve: Since base is $1/3 < 1$, flip inequality sign:\n$$\\frac{2-3x}{x} \\le \\left(\\frac{1}{3}\\right)^{-1} = 3$$\n3. Shift elements:\n$$\\frac{2-3x}{x} - 3 \\le 0 \\implies \\frac{2-6x}{x} \\le 0$$\nRoots are $0, 1/3$. Active negative intervals: $x \\in (-\\infty, 0) \\cup [1/3, \\infty)$.\n4. Intersect with domain $(0, 2/3)$:\n$$x \\in [1/3, 2/3)$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-48',
      question: 'If $\\log_2 3 = a$ and $\\log_3 5 = b$, what is $\\log_{12} 30$ in terms of $a$ and $b$?',
      options: ['$\\frac{1+a+ab}{2+a}$', '$\\frac{a(1+b)}{2+a}$', '$\\frac{a+b}{1+2a}$', '$\\frac{1+ab}{2+a}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Using chain rule, find $\\log_2 5$:\n$$\\log_2 5 = \\log_2 3 \\cdot \\log_3 5 = ab$$\n2. Set base change to base 2:\n$$\\log_{12} 30 = \\frac{\\log_2 30}{\\log_2 12}$$\n3. Expand using properties:\n$$\\log_2 30 = \\log_2(2 \\cdot 3 \\cdot 5) = 1 + a + ab$$\n$$\\log_2 12 = \\log_2(4 \\cdot 3) = 2 + a$$\n4. Combine expressions:\n$$\\frac{1 + a + ab}{2 + a}$$',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-49',
      question: 'Find the number of integers satisfying $| \\log_2 x - 1 | < 2$.',
      options: ['$7$', '$6$', '$5$', '$8$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. Open absolute value inequality:\n$$-2 < \\log_2 x - 1 < 2 \\implies -1 < \\log_2 x < 3$$\n2. Convert to exponentiation bounds (base $2 > 1$):\n$$2^{-1} < x < 2^3 \\implies 0.5 < x < 8$$\n3. Integer values inside bounded interval: $\\{1, 2, 3, 4, 5, 6, 7\\}$.\nThere are exactly 7 valid integers.',
      difficulty: 'medium'
    },
    {
      id: 'log-s2-50',
      question: 'Solve the equation: $\\log_4(x-1) = \\log_2(x-3)$.',
      options: ['$5$', '$2, 5$', '$4$', 'No real solution'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\n1. **Domain requirements:** $x-1 > 0$ and $x-3 > 0 \\implies x > 3$.\n2. Convert bases using base expansion of $4 = 2^2$:\n$$\\frac{1}{2} \\log_2(x-1) = \\log_2(x-3) \\implies \\log_2(x-1) = \\log_2((x-3)^2)$$\n3. Equate arguments:\n$$x-1 = (x-3)^2 \\implies x-1 = x^2 - 6x + 9 \\implies x^2 - 7x + 10 = 0$$\n$$(x-2)(x-5) = 0 \\implies x = 2 \\quad \\text{or} \\quad x = 5$$\n4. Check domain $x > 3$: reject $x = 2$. Solution is $x = 5$.',
      difficulty: 'medium'
    }
  ]
};

export default quizSet;
