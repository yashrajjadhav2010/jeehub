import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set3',
  title: 'Quadratic Equations - Set 3 (Advanced)',
  chapterId: 'quadratic-equations',
  subjectId: 'maths',
  questions: [
    {
      id: 'quad-s3-1',
      question: 'Let $\\alpha$ and $\\beta$ be the roots of the equation $x^2 - x + 1 = 0$. Then $\\alpha^{2023} + \\beta^{2023}$ is equal to:',
      options: ['$1$', '$-1$', '$2$', '$-2$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nThe roots of $x^2 - x + 1 = 0$ are $-\\omega$ and $-\\omega^2$, where $\\omega$ is the complex cube root of unity (since $x^3+1 = (x+1)(x^2-x+1)=0$).\n$\\alpha^{2023} + \\beta^{2023} = (-\\omega)^{2023} + (-\\omega^2)^{2023} = -[\\omega^{2023} + \\omega^{4046}]$.\nSince $2023 = 3 \\times 674 + 1$, $\\omega^{2023} = \\omega$. And $\\omega^{4046} = \\omega^{3 \\times 1348 + 2} = \\omega^2$.\nThus, the sum is $-(\\omega + \\omega^2)$. Since $1 + \\omega + \\omega^2 = 0$, we have $\\omega + \\omega^2 = -1$. So, $-(-1) = 1$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-2',
      question: 'If the equation $ax^2 + bx + c = 0$ ($a,b,c \\in \\mathbb{R}$) has no real roots, and $a+b+c < 0$, then which of the following is true?',
      options: ['$c > 0$', '$c = 0$', '$c < 0$', 'Cannot be determined'],
      answer: 2,
      explanation: '**Step-by-Step Solution:**\nLet $f(x) = ax^2 + bx + c$. Since there are no real roots, the graph never crosses the x-axis. Thus, $f(x)$ is strictly positive or strictly negative.\nGiven $f(1) = a+b+c < 0$, the parabola must open downwards ($a < 0$) and be strictly negative everywhere.\nTherefore, $f(0) = c < 0$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-3',
      question: 'If the roots of $x^2 + 2ax + b = 0$ are real and distinct, and they differ by at most $2m$, then $b$ lies in:',
      options: ['$(a^2 - m^2, a^2)$', '$[a^2 - m^2, a^2)$', '$(a^2, a^2 + m^2)$', '$(a^2 - m^2, \\infty)$'],
      answer: 1,
      explanation: '**Step-by-Step Solution:**\nRoots distinct $\\implies \\Delta > 0 \\implies 4a^2 - 4b > 0 \\implies b < a^2$.\nDifference $|\\alpha - \\beta| = \\sqrt{\\Delta} = 2\\sqrt{a^2 - b}$.\nGiven $2\\sqrt{a^2 - b} \\le 2m \\implies a^2 - b \\le m^2 \\implies b \\ge a^2 - m^2$.\nIntersection: $b \\in [a^2 - m^2, a^2)$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-4',
      question: 'If $x, y \\in \\mathbb{R}$ satisfy $x^2 + y^2 - 2x - 4y + 5 = 0$, what is the maximum value of $3x + 4y$?',
      options: ['$11$', '$14$', '$5$', '$15$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nRewrite: $(x-1)^2 + (y-2)^2 = 0$.\nThis represents a point $(1, 2)$.\nValue $= 3(1) + 4(2) = 11$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-5',
      question: 'Find the integer values of $a$ for which $x^2 + ax + a = 0$ has integer roots.',
      options: ['0, 4', '0, 2', '2, 4', '-2, 4'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nLet roots be $m, n$. $m+n = -a, mn = a \\implies m+n+mn = 0$.\nAdd 1: $(m+1)(n+1) = 1$.\nFactors of 1 are $(1,1)$ or $(-1,-1)$.\nCase 1: $m=0, n=0 \\implies a=0$.\nCase 2: $m=-2, n=-2 \\implies a=4$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-6',
      question: 'If the roots of $ax^2 + bx + c = 0$ are $\\alpha, \\beta$, then roots of $cx^2 + bx + a = 0$ are:',
      options: ['$-\\alpha, -\\beta$', '$1/\\alpha, 1/\\beta$', '$\\alpha+1, \\beta+1$', '$\\alpha^2, \\beta^2$'],
      answer: 1,
      explanation: '**Step-by-Step Solution:**\nSubstitute $x = 1/t$ in $ax^2 + bx + c = 0$ to get $a/t^2 + b/t + c = 0 \\implies ct^2 + bt + a = 0$.\nThus roots are reciprocals.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s3-7',
      question: "If $f(x) > 0$ for all real $x$, then the roots of $f(x) + f'(x) + f''(x) = 0$ are:",
      options: ['Real and distinct', 'Real and equal', 'Imaginary', 'Varies'],
      answer: 2,
      explanation: "**Step-by-Step Solution:**\n$f(x) = ax^2+bx+c$. $f(x) > 0 \\implies a > 0, b^2-4ac < 0$.\nNew equation: $ax^2 + (b+2a)x + (a+b+c) = 0$.\n$\\Delta_{new} = (b+2a)^2 - 4a(a+b+c) = b^2 - 4ac < 0$.\nRoots are imaginary.",
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-8',
      question: 'The number of real solutions of $e^x + e^{-x} = 2 - x^2$ is:',
      options: ['0', '1', '2', 'Infinite'],
      answer: 1,
      explanation: '**Step-by-Step Solution:**\nLHS $\\ge 2$ (AM-GM), equality at $x=0$.\nRHS $\\le 2$, equality at $x=0$.\nOnly $x=0$ is a solution.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-9',
      question: 'If $x^2 + 2x + 3 = 0$ and $ax^2 + bx + c = 0$ ($a,b,c \\in \\mathbb{R}$) have a common root, find $a:b:c$.',
      options: ['$1:2:3$', '$3:2:1$', '$1:3:2$', '$3:1:2$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$x^2+2x+3=0$ has imaginary roots. They occur in conjugate pairs. Thus if one is common, both are common.\n$a/1 = b/2 = c/3$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-10',
      question: 'Sum of real $x$ satisfying $(x^2 - 5x + 5)^{x^2 + 4x - 60} = 1$ is:',
      options: ['$1$', '$-4$', '$3$', '$-1$'],
      answer: 2,
      explanation: '**Step-by-Step Solution:**\nExpo=0: $x=6, -10$. Base=1: $x=1, 4$. Base=-1: $x=2$ (since expo is even), $x=3$ (expo is odd, reject).\nSum $= 6 - 10 + 1 + 4 + 2 = 3$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-11',
      question: 'If roots of $x^2 - 10cx - 11d = 0$ are $a, b$ and roots of $x^2 - 10ax - 11b = 0$ are $c, d$, find $a+b+c+d$.',
      options: ['$1210$', '$-1210$', '$121$', '$-121$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nUsing sum/product relations and solving symmetric equations gives $a+c=121$. Total sum $10(a+c) = 1210$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-12',
      question: 'Probability that $x^2 + px + q = 0$ has real roots if $p, q \\in \\{1, 2, 3, 4\\}$:',
      options: ['$7/16$', '$9/16$', '$1/2$', '$5/16$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nNeed $p^2 \\ge 4q$. Favorable: (2,1), (3,1), (3,2), (4,1), (4,2), (4,3), (4,4). Total 7/16.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-13',
      question: 'Smallest integer $k$ for which both roots of $x^2 - 8kx + 16(k^2 - k + 1) = 0$ are real and $\\ge 4$:',
      options: ['$2$', '$3$', '$4$', '$1$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$\\Delta > 0 \\implies k > 1$. Vertex $> 4 \\implies k > 1$. $f(4) \\ge 0 \\implies k^2 - 3k + 2 \\ge 0 \\implies k \\ge 2$. Smallest is 2.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-14',
      question: 'If $a > 0$ and $ax^2 + bx + c = 0$ has roots $\\alpha < -1$ and $\\beta > 1$, then:',
      options: ['$a - |b| + c < 0$', '$a + |b| + c > 0$', '$a - |b| + c > 0$', '$a + |b| + c < 0$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$-1$ and $1$ are between roots $\\implies f(-1) < 0$ and $f(1) < 0$.\n$a-b+c < 0$ and $a+b+c < 0 \\implies a-|b|+c < 0$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-15',
      question: 'Number of real roots of $|x|^2 - 3|x| + 2 = 0$:',
      options: ['1', '2', '3', '4'],
      answer: 3,
      explanation: '**Step-by-Step Solution:**\n$|x| = 1, 2 \\implies x = \\pm 1, \\pm 2$.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s3-16',
      question: 'Number of real roots of $x^2 + 5|x| + 4 = 0$:',
      options: ['0', '2', '4', 'Infinite'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$|x| = -1, -4$ is impossible.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s3-17',
      question: 'Roots of $cx^2 + bx + a = 0$ in terms of roots $\\alpha, \\beta$ of $ax^2+bx+c=0$:',
      options: ['Identical', 'Opposite', 'Reciprocals', 'Squares'],
      answer: 2,
      explanation: '**Step-by-Step Solution:**\nCoefficient reversal reciprocates roots.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s3-18',
      question: 'Minimum value of $f(x) = x^4 - 4x^3 + 4x^2 + c$:',
      options: ['$c$', '$c-1$', '$c-4$', '$0$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$f(x) = [x(x-2)]^2 + c \\ge c$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-19',
      question: 'If $2x^2 + 6xy + 5y^2 = 1$, maximum of $x^2+y^2$:',
      options: ['$\\frac{7 + 3\\sqrt{5}}{2}$', '$\\frac{7 - 3\\sqrt{5}}{2}$', '$\\frac{3 + \\sqrt{5}}{2}$', '$\\sqrt{5}$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nUsing polar coordinates, max $r^2 = 1 / (3.5 - 1.5\\sqrt{5}) = (7+3\\sqrt{5})/2$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-20',
      question: 'For what $a$ does $\\sin^4 x + \\cos^4 x = a$ have real solutions?',
      options: ['$a \\in [1/2, 1]$', '$a \\in [0, 1]$', '$a \\in [-1, 1]$', '$a \\in [1/4, 1/2]$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nExpression is $1 - \\frac{1}{2}\\sin^2 2x$, which ranges from $1/2$ to $1$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-21',
      question: 'If roots of $x^2-3x+a=0$ and $x^2-12x+b=0$ form an increasing GP, $(a, b)$ is:',
      options: ['$(2, 32)$', '$(2, 16)$', '$(4, 32)$', '$(4, 16)$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$A(1+r)=3, Ar^2(1+r)=12 \\implies r=2, A=1$. Roots $1, 2, 4, 8$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-22',
      question: 'Sum of real $x$ for $2^{x^2} + 2^{2-x^2} = 5$:',
      options: ['$0$', '$2$', '$-2$', '$4$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$t + 4/t = 5 \\implies t=1, 4$. $x^2=0, 2$. Sum $0 + \\sqrt{2} - \\sqrt{2} = 0$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-23',
      question: 'If $P(1)=0, P(2)=0, P(3)=4$, then $P(4)$ is:',
      options: ['$12$', '$8$', '$16$', '$20$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$P(x) = 2(x-1)(x-2)$. $P(4) = 2(3)(2) = 12$.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s3-24',
      question: 'If $x^3 - 3x + a = 0$ has three distinct real roots, then:',
      options: ['$a \\in (-2, 2)$', '$a \\in (-1, 1)$', '$a \\in (-3, 3)$', '$a \\in (0, 2)$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nLocal max/min signs must differ. $f(-1)f(1) < 0 \\implies (a+2)(a-2) < 0$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-25',
      question: 'If $a, b, c$ are positive and in H.P., then $ax^2 + 2bx + c = 0$ has:',
      options: ['Real roots', 'Equal roots', 'Imaginary roots', 'Rational roots'],
      answer: 2,
      explanation: '**Step-by-Step Solution:**\n$\\Delta = 4b^2 - 4ac$. Substituting $b = 2ac/(a+c)$ shows $\\Delta < 0$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-26',
      question: 'If $x^2+px+q=0$ and $x^2+qx+p=0$ have a common root, the equation for other roots is:',
      options: ['$x^2 + x + pq = 0$', '$x^2 - x + pq = 0$', '$x^2 + px + q = 0$', '$x^2 + x - pq = 0$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nCommon root is 1 $\\implies 1+p+q=0$. Other roots are $p, q$. Equation is $x^2-(p+q)x+pq = 0 \\implies x^2+x+pq=0$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-27',
      question: 'Minimum value of $(x^1+2x+1)/(x^2+2x+7)$:',
      options: ['$0$', '$1/7$', '$1$', 'None'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$(x+1)^2 / [(x+1)^2 + 6] \\ge 0$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-28',
      question: 'Sum of real roots of $(x-1)(x-2)(x-3)(x-4) = 120$:',
      options: ['$5$', '$10$', '$0$', '$7$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$(x^2-5x+4)(x^2-5x+6)=120 \\implies t^2-1=120$. $x^2-5x-6=0$ gives roots $6, -1$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-29',
      question: 'Equation with roots $\\alpha+\\beta, \\beta+\\gamma, \\gamma+\\alpha$ for $x^3-6x^2+11x-6=0$:',
      options: ['$x^3 - 12x^2 + 47x - 60 = 0$', '$x^3 - 12x^2 + 48x - 64 = 0$', '$x^3-6x^2+11x-6=0$', 'None'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nRoots are $1,2,3$. New roots $3,4,5$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-30',
      question: 'If roots are $\\sec^2\\theta, \\csc^2\\theta$ for $x^2+ax+b=0$, then:',
      options: ['$a+b=0$', '$a=b$', '$b-a=0$', '$a-b=0$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nSum $= 1/s^2c^2$ and Product $= 1/s^2c^2$. So $-a = b$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-31',
      question: 'Solution set of $(x^2-5x+6)/(x^2+x+1) < 0$:',
      options: ['$(2, 3)$', '$(-1, 2)$', '$(3, \\infty)$', 'All real'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nDenominator is always positive. Numerator $< 0 \\implies x \\in (2, 3)$.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s3-32',
      question: 'Number of integer solutions of $(x^2-x-2)/(x^2-3x+2) \\le 0$:',
      options: ['2', '1', '0', '3'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$(x+1)/(x-1) \\le 0$ for $x \\ne 2$. Interval $[-1, 1)$. Integers: $-1, 0$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-33',
      question: 'If $a,b,c$ are odd, roots of $ax^2+bx+c=0$ cannot be:',
      options: ['Rational', 'Irrational', 'Complex', 'Real'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$\\Delta \\equiv 5 \\pmod 8$, which cannot be a perfect square.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-34',
      question: 'Range of $m$ for roots of opposite sign in $x^2-(m-1)x+2m=0$:',
      options: ['$m < 0$', '$m > 0$', '$(-1, 1)$', 'None'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nProduct $= 2m < 0 \\implies m < 0$.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s3-35',
      question: 'If $f(x)=x$ has no real roots, number of roots of $f(f(x))=x$:',
      options: ['0', '2', '4', 'Infinite'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nIf $f(x)>x$ always, then $f(f(x)) > f(x) > x$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-36',
      question: 'Max value of $y = \\sin^2 x - 3\\sin x + 2$:',
      options: ['6', '2', '0', '4'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nLet $t = -1 \\implies y = 1 + 3 + 2 = 6$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-37',
      question: 'Value of $a$ that minimizes sum of squares of roots of $x^2-(a-2)x-a-1=0$:',
      options: ['1', '2', '0', '-1'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$S = (a-2)^2 + 2(a+1) = a^2 - 2a + 6$. Min at $a = 1$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-38',
      question: 'Value of $(x^2-x+1)/(x^2+x+1)$ at $x=1/2$:',
      options: ['$3/7$', '$1/3$', '$7/3$', '$1$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$(0.75)/(1.75) = 3/7$.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s3-39',
      question: 'If $x^2+px+1$ is a factor of $ax^3+bx+c$, then:',
      options: ['$a^2-c^2=ab$', '$a^2+c^2=ab$', '$a^2-c^2=-ab$', 'None'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nThird root is $-c/a$. Comparing coeffs yields the relation.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-40',
      question: 'Necessary condition for $P(P(x))=0$ to have only real roots ($P$ is quadratic):',
      options: ['$b^2-4c \\ge 0$', '$b^2-4c < 0$', '$b=c$', '$b<0$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$P(y)=0$ must itself have real roots.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-41',
      question: 'Value of $1/\\alpha\\beta + 1/\\beta\\gamma + 1/\\gamma\\alpha$ for standard cubic:',
      options: ['$p/r$', '$q/r$', '$-p/r$', '$1/r$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$(\\gamma+\\alpha+\\beta)/\\alpha\\beta\\gamma = p/r$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-42',
      question: 'Number of real solutions of $x^2-4x+3-\\log_2 x = 0$:',
      options: ['2', '1', '3', '0'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$x=1$ and one root in $(3, 4)$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-43',
      question: 'Find $a+b+c+d$ if they are roots of crossed quadratics:',
      options: ['$1210$', '$-1210$', '$0$', '$121$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nClassical symmetric solving yields 1210.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-44',
      question: 'Minimum value of $x^2 + 2xy + 3y^2 - 4x - 8y + 15$:',
      options: ['9', '1', '0', '5'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nCompleting the square: $(x+y-2)^2 + 2(y-1)^2 + 9$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-45',
      question: 'Root relationship for $a^2x^2+bx+c=0$ and its variance:',
      options: ['$\\alpha < \\gamma < \\beta$', '$\\gamma < \\alpha$', '$\\gamma > \\beta$', 'None'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nUsing signs of $f(\\alpha)$ and $f(\\beta)$ with IVT.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s3-46',
      question: 'Condition for roots to be consecutive integers:',
      options: ['$b^2-4c=1$', '$b^2-4c=0$', '$b^2-4c=4$', 'None'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nDifference squared is 1.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s3-47',
      question: 'Roots of $x^4 - 10x^2 + 9 = 0$:',
      options: ['$\\pm 1, \\pm 3$', '$\\pm 2, \\pm 3$', '$\\pm 1, \\pm 9$', 'None'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$x^2 = 1, 9$.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s3-48',
      question: 'Equation with reciprocal roots of $x^3-3x+1=0$:',
      options: ['$y^3 - 3y^2 + 1 = 0$', '$y^3 + 3y^2 - 1 = 0$', 'Same', 'None'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nSubstitute $x=1/y$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-49',
      question: 'Solution set for $|x-1|+|x-2|+|x-3| \\ge 6$:',
      options: ['$(-\\infty, 0] \\cup [4, \\infty)$', '$[0, 4]$', 'All real', 'None'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nTesting intervals. Min is at median ($x=2$, value 2). Values $\ge 6$ occur at outer wings.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s3-50',
      question: 'If $a+c=b$, then a root of $ax^2+bx+c=0$ is:',
      options: ['$-1$', '$1$', '$0$', '$2$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$f(-1) = a-b+c$. If $a+c=b$, $f(-1)=0$.',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
