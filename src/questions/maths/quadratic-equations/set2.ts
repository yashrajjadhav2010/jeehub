import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set2',
  title: 'Quadratic Equations - Set 2',
  chapterId: 'quadratic-equations',
  subjectId: 'maths',
  questions: [
    {
      id: 'quad-s2-1',
      question: 'Let $\\alpha, \\beta$ be the roots of the equation $x^2 - 6x - 2 = 0$. If $a_n = \\alpha^n - \\beta^n$, for $n \\ge 1$, then the value of $\\frac{a_{10} - 2a_8}{2a_9}$ is:',
      options: ['$1$', '$2$', '$3$', '$4$'],
      answer: 2,
      explanation: '**Step-by-Step Solution:**\nSince $\\alpha, \\beta$ are roots of $x^2 - 6x - 2 = 0$, they satisfy the equation:\n$\\alpha^2 - 6\\alpha - 2 = 0 \\implies \\alpha^2 - 2 = 6\\alpha$\nMultiply by $\\alpha^8$: $\\alpha^{10} - 2\\alpha^8 = 6\\alpha^9$\nSimilarly for $\\beta$: $\\beta^{10} - 2\\beta^8 = 6\\beta^9$\nSubtracting the two: $(\\alpha^{10} - \\beta^{10}) - 2(\\alpha^8 - \\beta^8) = 6(\\alpha^9 - \\beta^9)$\n$a_{10} - 2a_8 = 6a_9$\nTherefore, $\\frac{a_{10} - 2a_8}{2a_9} = \\frac{6a_9}{2a_9} = 3$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-2',
      question: 'If $\\alpha, \\beta$ are the roots of $x^2 - x - 1 = 0$, and $P_n = \\alpha^n + \\beta^n$, then $P_{n+1}$ equals:',
      options: ['$P_n + P_{n-1}$', '$P_n - P_{n-1}$', '$P_{n-1} - P_n$', '$2P_n + P_{n-1}$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nFor $x^2 - x - 1 = 0$, we have $\\alpha^2 - \\alpha - 1 = 0 \\implies \\alpha^2 = \\alpha + 1$.\nMultiplying by $\\alpha^{n-1}$ gives $\\alpha^{n+1} = \\alpha^n + \\alpha^{n-1}$.\nSimilarly, $\\beta^{n+1} = \\beta^n + \\beta^{n-1}$.\nAdding them yields $P_{n+1} = P_n + P_{n-1}$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-3',
      question: 'If $\\alpha, \\beta$ are roots of $x^2 + px + q = 0$, then the value of $\\alpha^3 + \\beta^3$ is:',
      options: ['$p^3 - 3pq$', '$-p^3 + 3pq$', '$p^3 + 3pq$', '$-p^3 - 3pq$'],
      answer: 1,
      explanation: '**Step-by-Step Solution:**\nSum $\\alpha+\\beta = -p$ and Product $\\alpha\\beta = q$.\n$\\alpha^3 + \\beta^3 = (\\alpha+\\beta)^3 - 3\\alpha\\beta(\\alpha+\\beta)$\n$= (-p)^3 - 3(q)(-p)$\n$= -p^3 + 3pq$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-4',
      question: 'Let $\\alpha, \\beta$ be the roots of $x^2 - px + r = 0$ and $\\alpha/2, 2\\beta$ be the roots of $x^2 - qx + r = 0$. Then the value of $r$ is:',
      options: ['$\\frac{2}{9}(p-q)(2q-p)$', '$\\frac{2}{9}(q-p)(2p-q)$', '$\\frac{2}{9}(p-2q)(2q-p)$', '$\\frac{2}{9}(2p-q)(2q-p)$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nFrom eq 1: $\\alpha+\\beta = p$ and $\\alpha\\beta = r$.\nFrom eq 2: $\\frac{\\alpha}{2} + 2\\beta = q$ and $(\\frac{\\alpha}{2})(2\\beta) = \\alpha\\beta = r$.\nSolve for $\\alpha, \\beta$: $\\beta = p - \\alpha$. Substitute into second: $\\frac{\\alpha}{2} + 2(p-\\alpha) = q \\implies 2p - \\frac{3\\alpha}{2} = q \\implies \\alpha = \\frac{2}{3}(2p-q)$.\nThen $\\beta = p - \\frac{2}{3}(2p-q) = \\frac{2q-p}{3}$.\n$r = \\alpha\\beta = \\frac{2}{9}(2p-q)(2q-p)$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-5',
      question: 'If the sum of the roots of the quadratic equation $ax^2+bx+c=0$ is equal to the sum of the squares of their reciprocals, then $\\frac{a}{c}, \\frac{b}{a}, \\frac{c}{b}$ are in:',
      options: ['A.P.', 'G.P.', 'H.P.', 'None of these'],
      answer: 2,
      explanation: '**Step-by-Step Solution:**\n$\\alpha+\\beta = -b/a, \\alpha\\beta = c/a$.\nGiven: $\\alpha+\\beta = \\frac{1}{\\alpha^2} + \\frac{1}{\\beta^2} = \\frac{\\alpha^2+\\beta^2}{(\\alpha\\beta)^2} = \\frac{(\\alpha+\\beta)^2 - 2\\alpha\\beta}{(\\alpha\\beta)^2}$.\n$-b/a = \\frac{(-b/a)^2 - 2(c/a)}{(c/a)^2} = \\frac{b^2 - 2ac}{c^2}$.\n$-bc^2 = ab^2 - 2a^2c \\implies 2a^2c = ab^2 + bc^2$.\nDivide by $abc$: $\\frac{2a}{b} = \\frac{b}{c} + \\frac{c}{a}$.\nThis shows $\\frac{c}{a}, \\frac{a}{b}, \\frac{b}{c}$ are in AP. Thus $\\frac{a}{c}, \\frac{b}{a}, \\frac{c}{b}$ are in Harmonic Progression (H.P.).',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-6',
      question: 'The values of $a$ for which both roots of the equation $x^2 - 2ax + a^2 - 1 = 0$ lie between $-2$ and $4$ are:',
      options: ['$(-1, 3)$', '$(-2, 4)$', '$(-1, 2)$', '$(-3, 1)$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nFind the roots explicitly: $x = \\frac{2a \\pm \\sqrt{4a^2 - 4(a^2-1)}}{2} = a \\pm 1$.\nWe need both roots in $(-2, 4)$, so $-2 < a - 1$ and $a + 1 < 4$.\nFrom the first: $a > -1$. From the second: $a < 3$.\nThus, $a \\in (-1, 3)$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-7',
      question: 'For the equation $x^2 - (m-3)x + m = 0$, what is the condition on $m$ such that both roots are strictly greater than $2$?',
      options: ['$m \\in [9, 10)$', '$m \\in (9, 10]$', '$m \\in [9, 10]$', '$m > 10$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nConditions for both roots $> 2$:\n1) $\\Delta \\ge 0 \\implies m^2 - 10m + 9 \\ge 0 \\implies m \\in (\\infty, 1] \\cup [9, \\infty)$.\n2) $-b/2a > 2 \\implies \\frac{m-3}{2} > 2 \\implies m > 7$.\n3) $f(2) > 0 \\implies 4 - 2(m-3) + m > 0 \\implies 10 - m > 0 \\implies m < 10$.\nIntersection: $m \\in [9, 10)$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-8',
      question: 'If exactly one root of the equation $x^2 - ax + 2 = 0$ lies in the interval $(0, 3)$, then $a$ belongs to:',
      options: ['$(11/3, \\infty)$', '$(2, 11/3)$', '$(-\\infty, 2)$', '$(0, 3)$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nCondition for exactly one root in $(k_1, k_2)$ is $f(k_1) \\cdot f(k_2) < 0$.\n$f(0) = 2 > 0$.\n$f(3) = 9 - 3a + 2 = 11 - 3a$.\nSo $2 \\times (11 - 3a) < 0 \\implies 11 - 3a < 0 \\implies a > 11/3$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-9',
      question: 'If both roots of $x^2 - mx + 1 = 0$ are less than unity, then $m$ lies in:',
      options: ['$m < -2$', '$m \\le -2$', '$m > 2$', 'No such $m$ exists'],
      answer: 1,
      explanation: '**Step-by-Step Solution:**\nConditions for both roots $< 1$:\n1) $\\Delta \\ge 0 \\implies m^2 - 4 \\ge 0 \\implies |m| \\ge 2$.\n2) $-b/2a < 1 \\implies m/2 < 1 \\implies m < 2$.\n3) $f(1) > 0 \\implies 2 - m > 0 \\implies m < 2$.\nIntersection gives $m \\le -2$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-10',
      question: 'Find the values of $k$ for which $0$ lies strictly between the roots of $x^2 - 2x + (k^2 - 4) = 0$.',
      options: ['$k \\in (-2, 2)$', '$k > 2$', '$k < -2$', 'No real $k$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nFor $p$ to lie between the roots, $a \\cdot f(p) < 0$.\n$1 \\cdot f(0) < 0 \\implies k^2 - 4 < 0 \\implies k^2 < 4 \\implies k \\in (-2, 2)$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-11',
      question: 'The roots of $x^2 - 2ax + a^2 + a - 3 = 0$ are real and less than $3$. Then $a$ lies in:',
      options: ['$a < 2$', '$a \\le 2$', '$a < 3$', '$a < 4$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n1) $\\Delta \\ge 0 \\implies 12 - 4a \\ge 0 \\implies a \\le 3$.\n2) $-b/2a < 3 \\implies a < 3$.\n3) $f(3) > 0 \\implies a^2 - 5a + 6 > 0 \\implies (a-2)(a-3) > 0 \\implies a < 2$ or $a > 3$.\nIntersection: $a < 2$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-12',
      question: 'If the equation $x^2 - ax + b = 0$ and $x^2 - bx + a = 0$ have a common root ($a \\ne b$), what is the value of $a+b$?',
      options: ['$1$', '$-1$', '$0$', '$2$'],
      answer: 1,
      explanation: '**Step-by-Step Solution:**\nLet $\\alpha$ be the common root.\nSubtracting the two equations gives: $(b-a)\\alpha + (b-a) = 0$.\nSince $a \\ne b$, $\\alpha + 1 = 0 \\implies \\alpha = -1$.\nSubstitute $\\alpha = -1$ into the first equation: $(-1)^2 - a(-1) + b = 0 \implies 1 + a + b = 0 \implies a+b = -1$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-13',
      question: 'The equations $kx^2 + x + k = 0$ and $kx^2 + kx + 1 = 0$ have exactly one root in common. The value of $k$ ($k \\ne 0, 1$) is:',
      options: ['$-1/2$', '$1/2$', '$1$', '$-1$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nLet $\\alpha$ be the common root. Subtract equations:\n$(1-k)\\alpha + (k-1) = 0 \\implies (1-k)(\\alpha - 1) = 0$.\nSince $k \\ne 1$, $\\alpha = 1$.\nSubstitute $\\alpha = 1$ in $kx^2 + x + k = 0$ gives $k(1)^2 + 1 + k = 0 \\implies 2k + 1 = 0 \\implies k = -1/2$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-14',
      question: 'The maximum value of $y = \\frac{x^2 - x + 1}{x^2 + x + 1}$ for real $x$ is:',
      options: ['$3$', '$1/3$', '$2$', '$1$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$yx^2 + yx + y = x^2 - x + 1 \\implies (y-1)x^2 + (y+1)x + (y-1) = 0$.\nFor $x \\in \\mathbb{R}$, $\\Delta \\ge 0 \\implies (y+1)^2 - 4(y-1)^2 \\ge 0$.\n$(y+1 - 2y + 2)(y+1 + 2y - 2) \\ge 0 \\implies (3-y)(3y-1) \\ge 0 \\implies y \\in [1/3, 3]$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-15',
      question: 'The range of the function $f(x) = \\frac{x^2 - 3x + 4}{x^2 + 3x + 4}$ is:',
      options: ['$[1/7, 7]$', '$[1/3, 3]$', '$[1/5, 5]$', '$[1/4, 4]$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$(y-1)x^2 + 3(y+1)x + 4(y-1) = 0$. $\\Delta \\ge 0 \implies 9(y+1)^2 - 16(y-1)^2 \ge 0$.\n$(3y+3 - 4y+4)(3y+3 + 4y-4) \ge 0 \implies (7-y)(7y-1) \ge 0 \\implies y \\in [1/7, 7]$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-16',
      question: 'Find the range of $y = \\frac{x}{x^2 + 1}$.',
      options: ['$[-1/2, 1/2]$', '$[-1, 1]$', '$(-1/2, 1/2)$', '$[0, 1]$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$yx^2 - x + y = 0$. $\\Delta \\ge 0 \\implies 1 - 4y^2 \\ge 0 \\implies y^2 \\le 1/4 \\implies -1/2 \\le y \\le 1/2$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-17',
      question: 'The expression $\\frac{x^2 + 2x + 1}{x^2 + 2x + 7}$ takes values in the interval:',
      options: ['$[0, 1)$', '$[0, 1]$', '$[1/7, 1]$', '$(0, 1/7]$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nLet $t = (x+1)^2 \\ge 0$. Expression is $y = \\frac{t}{t+6} = 1 - \\frac{6}{t+6}$.\nAs $t$ goes from $0$ to $\\infty$, $y$ goes from $0$ to $1$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-18',
      question: 'For real $x$, the value of $\\frac{x^2 + 14x + 9}{x^2 + 2x + 3}$ lies in the interval:',
      options: ['$[-5, 4]$', '$[-4, 5]$', '$[-5, 5]$', '$(-5, 4)$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$(y-1)x^2 + 2(y-7)x + 3(y-3) = 0$. $\\Delta \\ge 0 \\implies (y-7)^2 - 3(y-1)(y-3) \\ge 0$.\n$-2y^2 - 2y + 40 \\ge 0 \\implies y^2 + y - 20 \\le 0 \\implies (y+5)(y-4) \\le 0$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-19',
      question: 'Minimum value of $f(x) = |x-1| + |x-2| + |x-3|$ is:',
      options: ['$1$', '$2$', '$3$', '$0$'],
      answer: 1,
      explanation: '**Step-by-Step Solution:**\nFor $\\sum |x - a_i|$, minimum occurs at the median. Points are $1, 2, 3$; median is $2$. $f(2) = 1 + 0 + 1 = 2$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-20',
      question: 'If $\\alpha, \\beta$ are the roots of $x^2 + p x + q = 0$, what is the equation with roots $\\alpha^2, \\beta^2$?',
      options: ['$x^2 - (p^2 - 2q)x + q^2 = 0$', '$x^2 + (p^2 - 2q)x + q^2 = 0$', '$x^2 - (p^2 + 2q)x + q^2 = 0$', '$x^2 - p^2 x + q^2 = 0$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nSum $S = \\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = p^2 - 2q$. Product $P = q^2$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-21',
      question: 'If the ratio of the roots of $x^2 + bx + c = 0$ is the same as the ratio of roots of $x^2 + qx + r = 0$, then:',
      options: ['$b^2 r = q^2 c$', '$b^2 c = q^2 r$', '$br^2 = cq^2$', '$bc^2 = qr^2$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nRatio $m:n \\implies \\frac{b^2}{c} = \\frac{(m+n)^2}{mn} = \\frac{q^2}{r}$. Thus $b^2 r = q^2 c$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-22',
      question: 'For what values of $a$ is the expression $x^2 - (a-3)x + a > 0$ for all real $x$?',
      options: ['$1 < a < 9$', '$1 \\le a \\le 9$', '$a < 1$ or $a > 9$', '$a > 9$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nNeed $\\Delta < 0 \implies (a-3)^2 - 4a < 0 \\implies a^2 - 10a + 9 < 0 \\implies (a-1)(a-9) < 0$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-23',
      question: 'The number of real solutions to $x^2 - 5|x| + 6 = 0$ is:',
      options: ['4', '2', '0', '1'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$|x| = 2, 3 \\implies x = \\pm 2, \\pm 3$.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s2-24',
      question: 'The number of real solutions to $x^2 + 5|x| + 6 = 0$ is:',
      options: ['0', '2', '4', '1'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$|x| = -2, -3$ have no real solutions.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s2-25',
      question: 'The number of real roots of $(x^2 - 5x + 5)^{x^2 - 9x + 20} = 1$ is:',
      options: ['5', '4', '3', '2'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nCase 1: Expo=0 $\\implies x=4, 5$. Case 2: Base=1 $\\implies x=1, 4$. Case 3: Base=-1 & Expo even $\\implies x=2, 3$. Unique: $\{1,2,3,4,5\}$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-26',
      question: 'Solve for $x$: $3^{2x} - 10 \\cdot 3^x + 9 = 0$. The sum of roots is:',
      options: ['$2$', '$10$', '$0$', '$3$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$t = 3^x \\implies t^2 - 10t + 9 = 0 \\implies t=1, 9 \\implies x=0, 2$. Sum $= 2$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-27',
      question: 'The number of real solutions of $\\log_2 (x^2 - 4x + 3) = \\log_2 (x+3)$ is:',
      options: ['2', '1', '0', '3'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$x^2-5x=0 \\implies x=0, 5$. Both satisfy log domains.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-28',
      question: 'The roots of $\\sqrt{2x+9} + x = 13$ are:',
      options: ['$8$', '$8, 20$', '$20$', '$5$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$2x+9 = (13-x)^2 \implies x^2-28x+160=0 \implies x=8, 20$. $x=20$ is extraneous.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-29',
      question: 'Solve for $x$: $x - \\frac{2}{x} = 1$. The roots are:',
      options: ['$2, -1$', '$-2, 1$', '$2, 1$', '$-2, -1$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$x^2-x-2=0 \\implies (x-2)(x+1)=0$.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s2-30',
      question: 'If $x, y, z$ are real and $x^2+y^2+z^2-2x-4y-6z+14=0$, then $x+y+z$ is:',
      options: ['$6$', '$14$', '$0$', '$-6$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$(x-1)^2 + (y-2)^2 + (z-3)^2 = 0 \\implies x=1, y=2, z=3$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-31',
      question: 'If $\\alpha$ is a root of $x^2 + x + 1 = 0$, what is the value of $\\alpha^{2024} + \\frac{1}{\\alpha^{2024}}$?',
      options: ['$-1$', '$1$', '$2$', '$-2$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$\\alpha = \\omega \\implies \\omega^{2024} = \\omega^2$. $\\omega^2 + 1/\\omega^2 = \\omega^2 + \\omega = -1$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-32',
      question: 'If $2^{2x} - 3 \\cdot 2^{x+2} + 32 = 0$, the sum of the roots is:',
      options: ['$3$', '$5$', '$4$', '$8$'],
      answer: 1,
      explanation: '**Step-by-Step Solution:**\n$t^2 - 12t + 32 = 0 \\implies t=4, 8 \\implies x=2, 3$. Sum $= 5$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-33',
      question: 'If $x^2-ax+b=0$ and $x^2-px+q=0$ have a root in common, and the second has equal roots, then $b+q$ is:',
      options: ['$ap/2$', '$2ap$', '$ap$', '$a/p$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nEqual roots $\\implies q = p^2/4$, root is $p/2$. Substitute $p/2$ into first eq: $(p/2)^2 - a(p/2) + b = 0 \\implies q - ap/2 + b = 0 \\implies b+q = ap/2$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-34',
      question: 'Number of integers $m$ for which $x^2+mx+4=0$ has integer roots:',
      options: ['$4$', '$2$', '$6$', '$0$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nProduct $= 4$. Pairs $(1,4), (-1,-4), (2,2), (-2,-2)$. $m$ is $-5, 5, -4, 4$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-35',
      question: 'If roots of $ax^2+bx+c=0$ are $\\sin \\theta, \\cos \\theta$, then:',
      options: ['$a^2+b^2=2ac$', '$a^2-b^2+2ac=0$', '$b^2=a^2+2ac$', '$b^2=a^2-2ac$'],
      answer: 2,
      explanation: '**Step-by-Step Solution:**\n$(-b/a)^2 = \\sin^2 + \\cos^2 + 2\\sin\\cos = 1 + 2(c/a) \\implies b^2/a^2 = (a+2c)/a \\implies b^2 = a^2 + 2ac$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-36',
      question: 'The equation $x - \\frac{2}{x-1} = 1 - \\frac{2}{x-1}$ has:',
      options: ['No root', 'One root', 'Two roots', 'Infinite roots'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nApparent root $x=1$ makes denominator zero. Thus extraneous.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-37',
      question: 'If roots of $(x-a)(x-b) + (x-b)(x-c) + (x-c)(x-a) = 0$ are equal, then:',
      options: ['$a=b=c$', '$a+b+c=0$', '$a^2+b^2+c^2=0$', 'None'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$\\Delta = 0 \\implies \\sum a^2 - \\sum ab = 0 \\implies \\frac{1}{2}\\sum (a-b)^2 = 0 \\implies a=b=c$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-38',
      question: 'If $\\alpha$ is a root of $x^4 + x^2 + 1 = 0$, then $\\alpha^{12}$ is:',
      options: ['$1$', '$-1$', '$0$', '$\\alpha^2$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$x^4+x^2+1 = (x^2-x+1)(x^2+x+1) \\implies$ roots satisfy $\\alpha^6 = 1$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-39',
      question: 'Number of real solutions of $2^{x} + 2^{-x} = 2 \\cos x$ is:',
      options: ['1', '2', '0', 'Infinite'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nLHS $\\ge 2$ (AM-GM), RHS $\\le 2$. Both equal $2$ only at $x=0$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-40',
      question: 'Roots of $x^{2/3} - 3x^{1/3} + 2 = 0$ are:',
      options: ['$1, 8$', '$1, 2$', '$-1, 8$', '$1, 4$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$t^2 - 3t + 2 = 0 \\implies t=1, 2 \\implies x = 1^3, 2^3 = 1, 8$.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s2-41',
      question: 'Sum of roots is $3$, sum of cubes is $7$. The equation is:',
      options: ['$9x^2 - 27x + 20 = 0$', '$x^2 - 3x + 2 = 0$', '$9x^2 - 27x - 20 = 0$', '$x^2 + 3x + 2 = 0$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$7 = 3^3 - 3P(3) \\implies 7 = 27 - 9P \\implies P = 20/9$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-42',
      question: 'If roots of $x^2 + bx + c = 0$ differ by $1$, then:',
      options: ['$b^2 = 4c + 1$', '$b^2 = 4c - 1$', '$b^2 = c + 1$', '$b^2 = c - 1$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$(\\alpha-\\beta)^2 = 1 \\implies (\\alpha+\\beta)^2 - 4\\alpha\\beta = 1 \\implies b^2 - 4c = 1$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-43',
      question: 'If $ax^2 + 2x + a < 0$ for all $x \\in \\mathbb{R}$, then:',
      options: ['$a < -1$', '$-1 < a < 1$', '$a > 1$', '$a > 0$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$a < 0$ and $\\Delta < 0 \implies 4 - 4a^2 < 0 \\implies a^2 > 1 \\implies a < -1$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-44',
      question: 'If $x, y$ are real and satisfy $x^2 + y^2 - 4x - 2y + 5 = 0$, what is $x+y$?',
      options: ['$3$', '$5$', '$0$', '$-3$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$(x-2)^2 + (y-1)^2 = 0 \\implies x=2, y=1$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-45',
      question: 'If one root of $ax^2 + bx + c = 0$ is $3 + 4i$ ($a,b,c \\in \\mathbb{R}$), $b/a$ is:',
      options: ['$-6$', '$6$', '$25$', '$-25$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nSum $= (3+4i)+(3-4i) = 6 = -b/a$.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s2-46',
      question: 'If $\\alpha, \\beta$ are roots of $x^2 - px + q = 0$, the sum of infinite series $\\alpha + \\alpha^2...$ and $\\beta + \\beta^2...$ is:',
      options: ['$\\frac{p - 2q}{1 - p + q}$', '$\\frac{p + 2q}{1 + p + q}$', '$\\frac{p}{1 - p + q}$', '$\\frac{p - q}{1 - p + q}$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nSum $= \\frac{\\alpha}{1-\\alpha} + \\frac{\\beta}{1-\\beta} = \\frac{(\\alpha+\\beta) - 2\\alpha\\beta}{1 - (\\alpha+\\beta) + \\alpha\\beta} = \\frac{p-2q}{1-p+q}$.',
      difficulty: 'hard'
    },
    {
      id: 'quad-s2-47',
      question: 'If roots of $x^2-6x+a=0$ satisfy $3\\alpha + 2\\beta = 16$, then $a$ is:',
      options: ['$8$', '$-8$', '$9$', '$5$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$2\\alpha+2\\beta=12$. Subtracting gives $\\alpha=4$. $\\beta=2$. $a = 4 \\times 2 = 8$.',
      difficulty: 'medium'
    },
    {
      id: 'quad-s2-48',
      question: 'The value of $\\sqrt{6 + \\sqrt{6 + ...}}$ is:',
      options: ['$3$', '$-2$', '$2$', '$6$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\n$x = \\sqrt{6+x} \\implies x^2-x-6=0 \\implies x=3, -2$. Root must be positive.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s2-49',
      question: 'Minimum value of $x^2 - 4x + 7$ is:',
      options: ['$7$', '$3$', '$4$', '$-3$'],
      answer: 1,
      explanation: '**Step-by-Step Solution:**\nVertex at $x = 2$. $4 - 8 + 7 = 3$.',
      difficulty: 'easy'
    },
    {
      id: 'quad-s2-50',
      question: 'Maximum value of $-2x^2 + 8x - 5$ is:',
      options: ['$3$', '$5$', '$8$', '$-5$'],
      answer: 0,
      explanation: '**Step-by-Step Solution:**\nVertex at $x = 2$. $-8 + 16 - 5 = 3$.',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
