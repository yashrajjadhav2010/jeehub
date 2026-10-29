import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set2',
  title: 'Sequence and Series - Set 2 (Advanced)',
  chapterId: 'sequence-and-series',
  subjectId: 'maths',
  questions: [
    {
      id: 'seq-s2-1',
      question: 'If the $m^{th}$ term of an A.P. is $1/n$ and the $n^{th}$ term is $1/m$, what is the sum of the first $mn$ terms?',
      options: ['$\\frac{1}{2}(mn - 1)$', '$\\frac{1}{2}(mn + 1)$', '$mn + 1$', '$mn - 1$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nLet the first term be $a$ and common difference be $d$.\n1) $T_m = a + (m-1)d = 1/n$\n2) $T_n = a + (n-1)d = 1/m$\nSubtracting (2) from (1): $(m-n)d = 1/n - 1/m = (m-n)/mn \\implies d = 1/mn$.\nSubstitute $d$ into (1): $a + (m-1)/mn = 1/n \\implies a = 1/mn$.\nSum of $mn$ terms: $S_{mn} = \\frac{mn}{2} [ 2a + (mn-1)d ] = \\frac{mn}{2} [ \\frac{2}{mn} + \\frac{mn-1}{mn} ] = \\frac{1}{2}(mn + 1)$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-2',
      question: 'If $a, b, c$ are in G.P. and $a+b+c = xb$, then $x$ cannot lie in the interval:',
      options: ['$(-1, 3)$', '$(-2, 2)$', '$[-1, 3]$', '$[-2, 2]$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nLet $a=a, b=ar, c=ar^2$. Then $a(1+r+r^2) = x(ar) \\implies r^2 + (1-x)r + 1 = 0$.\nFor $r$ to be real, $\\Delta \\ge 0 \\implies (1-x)^2 - 4 \\ge 0 \\implies x^2-2x-3 \\ge 0 \\implies (x-3)(x+1) \\ge 0$.\nSo $x \\le -1$ or $x \\ge 3$. Thus $x$ cannot be in $(-1, 3)$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-3',
      question: 'For an A.P., if $S_n$ denotes the sum of the first $n$ terms, then $S_{3n} : (S_{2n} - S_n)$ is always equal to:',
      options: ['$2 : 1$', '$3 : 1$', '$4 : 1$', '$1 : 1$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nLet $C_1=S_n, C_2=S_{2n}-S_n, C_3=S_{3n}-S_{2n}$.\n$C_1, C_2, C_3$ are in A.P. (sums of equal chunks).\n$S_{3n} = C_1 + C_2 + C_3 = 3C_2$.\nRatio $S_{3n}/C_2 = 3$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-4',
      question: 'The sum of an infinite geometric series is 2, and the sum of its cubes is 24. Find the first term ($a$) and common ratio ($r$).',
      options: ['$a = 3, r = -1/2$', '$a = 3, r = 1/2$', '$a = 3/2, r = 1/4$', '$a = 4, r = -1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$a/(1-r) = 2$ and $a^3/(1-r^3) = 24$.\nSubstitute $a=2(1-r)$: $8(1-r)^3 / [(1-r)(1+r+r^2)] = 24 \\implies (1-r)^2 / (1+r+r^2) = 3$.\n$1-2r+r^2 = 3+3r+3r^2 \\implies 2r^2+5r+2=0 \\implies r=-1/2$ (since $|r|<1$). $a = 2(1.5) = 3$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-5',
      question: 'If $\\log_x a, a^{x/2},$ and $\\log_b x$ are in G.P., then what is $x$?',
      options: ['$x = \\log_a b$', '$x = \\log_b a$', '$x = \\log_a (\\log_b a)$', 'Cannot be determined'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n$(a^{x/2})^2 = (\\log_x a)(\\log_b x) \\implies a^x = \\frac{\\log a}{\\log x} \\cdot \\frac{\\log x}{\\log b} = \\log_b a$.\nTake $\\log_a$ of both sides: $x = \\log_a (\\log_b a)$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-6',
      question: 'Evaluate the sum $\\sum_{k=1}^n \\frac{k}{(k+1)!}$.',
      options: ['$1 - \\frac{1}{n!}$', '$1 - \\frac{1}{(n+1)!}$', '$\\frac{1}{2} - \\frac{1}{(n+1)!}$', '$1 - \\frac{1}{(n+2)!}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n$T_k = \\frac{(k+1)-1}{(k+1)!} = \\frac{1}{k!} - \\frac{1}{(k+1)!}$.\nSum collapses to $1/1! - 1/(n+1)!$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-7',
      question: 'The sum $1^2 - 2^2 + 3^2 - 4^2 + \\dots + (2n-1)^2 - (2n)^2$ is:',
      options: ['$n(2n+1)$', '$-n(2n+1)$', '$-n(2n-1)$', '$n(2n-1)$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nPair terms: $(k^2 - (k+1)^2) = -(2k+1)$.\nSum $= -(1+2) - (3+4) - \\dots - (2n-1+2n) = -\\sum_{1}^{2n} k = -\\frac{2n(2n+1)}{2} = -n(2n+1)$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-8',
      question: 'Let $S_n = \\sum_{k=1}^n \\frac{1}{k(k+1)(k+2)}$. Find $\\lim_{n \\to \\infty} S_n$.',
      options: ['$1/2$', '$1/4$', '$1/6$', '$1/8$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n$T_k = \\frac{1}{2} [ \\frac{1}{k(k+1)} - \\frac{1}{(k+1)(k+2)} ]$.\n$S_{\\infty} = \\frac{1}{2} [ \\frac{1}{1 \\cdot 2} ] = 1/4$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-9',
      question: 'Sum of first $n$ terms of $1 + (1+2) + (1+2+3) + \\dots$ is:',
      options: ['$\\frac{n(n+1)(2n+1)}{6}$', '$\\frac{n(n+1)(n+2)}{6}$', '$\\frac{n(n+1)(n+2)}{3}$', '$\\left(\\frac{n(n+1)}{2}\\right)^2$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n$T_k = k(k+1)/2$. Sum $= \\frac{1}{2} [ \\sum k^2 + \\sum k ] = \\frac{1}{2} [ \\frac{n(n+1)(2n+1)}{6} + \\frac{n(n+1)}{2} ] = \\frac{n(n+1)(n+2)}{6}$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-10',
      question: 'Evaluate $\\sum_{r=1}^n r(r+1)(r+2)$.',
      options: ['$\\frac{n(n+1)(n+2)(n+3)}{4}$', '$\\frac{n(n+1)(n+2)(n+3)}{3}$', '$\\frac{n(n+1)(n+2)}{4}$', '$\\frac{n^2(n+1)^2}{4}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nUse formula: $\\sum_{r=1}^n \\frac{r(r+1)...(r+k-1)}{k} = \\frac{n(n+1)...(n+k)}{k+1}$. Here $k=3$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-11',
      question: 'Sum to infinity of $1 + 2x + 3x^2 + 4x^3 + \\dots$ ($|x| < 1$) is:',
      options: ['$\\frac{1}{1-x}$', '$\\frac{1}{(1-x)^2}$', '$\\frac{1}{(1-x)^3}$', '$\\frac{1+x}{(1-x)^2}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nThis is $(1-x)^{-2}$ by Binomial expansion or simple AGP differentiation of $1/(1-x)$.',
      difficulty: 'easy'
    },
    {
      id: 'seq-s2-12',
      question: 'Evaluate $S = 1 + \\frac{4}{5} + \\frac{7}{5^2} + \\frac{10}{5^3} + \\dots$ to infinity.',
      options: ['$35/16$', '$5/16$', '$15/8$', '$25/16$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$S = 1 + 4(1/5) + 7(1/5)^2 ...$\n$(1/5)S = 1/5 + 4(1/5)^2 ...$\n$(4/5)S = 1 + 3(1/5)/(1-1/5) = 1 + 3/4 = 7/4 \\implies S = 35/16$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-13',
      question: 'Sum of $n$ terms of $1 + 3x + 5x^2 + 7x^3 + \\dots$ is:',
      options: ['$\\frac{1 - x^n}{(1-x)^2} - \\frac{(2n-1)x^n}{1-x}$', '$\\frac{1 + x - (2n+1)x^n + (2n-1)x^{n+1}}{(1-x)^2}$', 'None', '$\\frac{1+x}{(1-x)^2}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\nStandard AGP formula derivation yields the expression.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-14',
      question: 'If $1 + 2x + 3x^2 + \\dots \\infty = 25/16$, find $x$ ($|x| < 1$):',
      options: ['$1/5$', '$4/5$', '$1/4$', '$1/2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$1/(1-x)^2 = 25/16 \\implies 1/(1-x) = 5/4 \\implies 1-x = 4/5 \\implies x = 1/5$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-15',
      question: 'Sum of $1 \\cdot 2^2 + 2 \\cdot 3^2 + 3 \\cdot 4^2 + \\dots$ up to $n$ terms:',
      options: ['None', '$\\frac{n(n+1)(n+2)(3n+5)}{12}$', '$\\frac{n(n+1)(n+2)}{3}$', '$\\frac{n(n+1)(2n+1)}{6}$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n$T_k = k(k+1)^2 = k^3+2k^2+k$. Summing these yields the formula.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-16',
      question: 'If $a, b, c > 0$, the minimum value of $(a+b)(b+c)(c+a)$ is:',
      options: ['$3abc$', '$6abc$', '$8abc$', '$9abc$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n$a+b \\ge 2\\sqrt{ab}$, etc. Multiplying gives $8abc$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-17',
      question: 'If $x > 0$, the minimum value of $x^x$ is:',
      options: ['$e^{-1/e}$', '$e^{1/e}$', '$1/e$', '$1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$y=x^x \\implies y\'=x^x(1+\\ln x)$. $y\'=0 \\implies \\ln x = -1 \\implies x = 1/e$. $y = (1/e)^{1/e} = e^{-1/e}$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-18',
      question: 'Minimum value of $2^{\\sin^2 x} + 2^{\\cos^2 x}$:',
      options: ['$2\\sqrt{2}$', '$2$', '$1$', '$3$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$AM \\ge GM \\implies (2^{\\sin^2 x} + 2^{\\cos^2 x})/2 \\ge \\sqrt{2^{\\sin^2 x + \\cos^2 x}} = \\sqrt{2}$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-19',
      question: 'If $a, b, c$ are in H.P., then $\frac{a}{b+c}, \\frac{b}{c+a}, \\frac{c}{a+b}$ are in:',
      options: ['A.P.', 'G.P.', 'H.P.', 'None'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nProperty: if $a,b,c$ in HP, then $a/(b+c), b/(a+c), c/(a+b)$ are in HP.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-20',
      question: 'If $a \\ne b$, arithmetic mean $A$, geometric $G$, harmonic $H$, which is strictly true?',
      options: ['$A > G > H$', '$A \\ge G \\ge H$', '$A < G < H$', '$A = G = H$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nEquality holds only if terms are equal. For distinct numbers, $A>G>H$.',
      difficulty: 'easy'
    },
    {
      id: 'seq-s2-21',
      question: 'Fractional equivalent of $1.2\\overline{34}$:',
      options: ['$1222/990$', '$1222/999$', '$1234/990$', '$1212/990$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$x = 1.23434... \\implies 10x = 12.3434...$ and $1000x = 1234.3434...$ subtraction gives $990x = 1222$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-22',
      question: 'Sum of $1 + 1/2! + 1/3! + \\dots \\infty$ is:',
      options: ['$e$', '$e-1$', '$e+1$', '$\\ln 2$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n$e^1 = 1 + 1/1! + 1/2! ... = 1 + 1 + 1/2! ...$. Our sum starts from $1 = 1/1!$. So it is $e-1$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-23',
      question: 'Evaluate $\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$.',
      options: ['2', '1', '3', '4'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nStandard AGP sum with $a=1/2, d=1, r=1/2$. Sum $= 2$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-24',
      question: 'Evaluate $\\sum_{n=1}^{\\infty} \\frac{n^2}{2^n}$.',
      options: ['6', '4', '8', '3'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nApplying AGP methods twice or using derivative of $1/(1-x)$ results in 6.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-25',
      question: 'Sum of $\\ln 2 + \\ln \\sqrt{2} + \\ln \\sqrt[4]{2} + \\dots$ is:',
      options: ['$\\ln 4$', '$\\ln 2$', '$\\ln 8$', 'Infinite'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$\\ln 2 (1 + 1/2 + 1/4 ...) = \\ln 2 (2) = \\ln 4$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-26',
      question: 'If $S_1, S_2, S_3$ are sums of $n, 2n, 3n$ terms of a G.P., then:',
      options: ['$S_1(S_3 - S_2) = (S_2 - S_1)^2$', '$S_2^2 = S_1 S_3$', '$S_1+S_3=2S_2$', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nAlgebraic substitution of $S_n$ formula proves the identity.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-27',
      question: 'Three positive numbers in GP. If 2nd is increased by 8, it is AP. If last is then increased by 64, it is GP. The numbers are:',
      options: ['$4, 12, 36$', '$4, 20, 100$', '$2, 6, 18$', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$4, 12, 36$ (GP). $4, 20, 36$ (AP, $d=16$). $4, 20, 100$ (GP, $r=5$).',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-28',
      question: 'Sum of first 20 terms of $1 \\cdot 3 + 2 \\cdot 5 + 3 \\cdot 7 + \\dots$ is:',
      options: ['$5950$', '$5840$', '$6020$', '$6160$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$T_k = 2k^2+k$. $\\sum_{1}^{20} (2k^2+k) = 2(20)(21)(41)/6 + (20)(21)/2 = 5740 + 210 = 5950$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-29',
      question: 'If $x = \\sum a^n, y = \\sum b^n$, then $\\sum (ab)^n$ is:',
      options: ['$\\frac{xy}{x+y-1}$', '$\\frac{x+y}{xy-1}$', 'None', '$\\frac{x+y}{x+y-1}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$a = (x-1)/x, b = (y-1)/y$. Sum $= 1/(1-ab) = xy/(x+y-1)$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-30',
      question: 'Value of $0.2^{\\log_{\\sqrt{5}} (1/2)}$:',
      options: ['4', '2', '1/2', '1/4'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$0.2 = 5^{-1}, \\sqrt{5} = 5^{1/2}$. Exp $= 5^{-\\log_{5^{1/2}}(1/2)} = 5^{-2\\log_5(1/2)} = 5^{\\log_5(4)} = 4$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-31',
      question: '$a,b,c$ in GP, $x$ is AM of $a,b$, $y$ is AM of $b,c$. What is $a/x + c/y$?',
      options: ['2', '1', '3', '0'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$x=(a+b)/2, y=(b+c)/2$. $a/x+c/y = 2a/(a+b) + 2c/(b+c) = 2[ a/(a+ar) + ar^2/(ar+ar^2) ] = 2[ 1/(1+r) + r/(1+r) ] = 2$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-32',
      question: '$n^{th}$ term of $3, 7, 13, 21, \\dots$:',
      options: ['$n^2 + n + 1$', '$n^2 + 2n$', '$2n^2 + 1$', '$n^2+1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nQuadratic sequence $n^2+n+1$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-33',
      question: 'If $a,b,c$ in HP, $(a-b)/(b-c)$ is:',
      options: ['$a/c$', '$c/a$', '$a/b$', '$b/c$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$(a-b)/ab = (b-c)/bc \\implies (a-b)/(b-c) = a/c$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-34',
      question: 'Sum of $n$ terms of $1/(1\\cdot2\\cdot3) + 1/(2\\cdot3\\cdot4) + \\dots$:',
      options: ['$\\frac{1}{4} - \\frac{1}{2(n+1)(n+2)}$', 'None', '$\\frac{1}{4} + \\dots$', '1/2'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nTelescoping series collapses to $1/4 - 1/(2(n+1)(n+2))$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-35',
      question: 'If $a_i$ in HP, then $a_1 a_2 + a_2 a_3 + \\dots + a_{n-1} a_n$ is:',
      options: ['$(n-1)a_1 a_n$', '$n a_1 a_n$', 'None', 'Sum of terms'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nTelescoping sum with $d = (1/a_{k+1}-1/a_k)$ yields $(n-1)a_1 a_n$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-36',
      question: 'Sum of infinite series $1/2 + 3/4 + 5/8 + \\dots$:',
      options: ['3', '4', '2', '5'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nStandard AGP sum with $r=1/2$. Final sum is 3.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-37',
      question: 'If $H$ is HM between $a, b$, value of $(H+a)/(H-a) + (H+b)/(H-b)$:',
      options: ['2', '1', '0', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nSubstitution of $H=2ab/(a+b)$ yields 2.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-38',
      question: 'Value of $2^{1/4} \\cdot 4^{1/8} \\cdot 8^{1/16} \\dots \\infty$:',
      options: ['2', '1', '4', '$\\sqrt{2}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nExponent is $1/4+2/8+3/16... = 1$. $2^1 = 2$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-39',
      question: 'If $x,y,z$ in GP and $a^x=b^y=c^z$, then:',
      options: ['$\\log_b a = \\log_c b$', 'False', 'None', 'AP'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$y^2=xz \\implies (\\log a/b)^2$ logic shows they are equal.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-40',
      question: 'If $S_p/S_q = p^2/q^2$, find $a_6/a_{21}$:',
      options: ['$11/41$', '$121/1681$', 'None', '11/21'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$T_n$ ratio matches sum ratio at specific $n$. $2n-1$ mapping gives $11/41$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-41',
      question: 'Sum of $n$ terms of $1/(1\\cdot3) + 2/(1\\cdot3\\cdot5) + \\dots$:',
      options: ['$\\frac{1}{2} [ 1 - \\frac{1}{1\\cdot 3 \\dots (2n+1)} ]$', 'None', '1', '1/2'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$T_n = \\frac{1}{2} [ \\frac{1}{P_{n-1}} - \\frac{1}{P_n} ]$ telescoping.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-42',
      question: 'Value of $x = \\sqrt{2+\\sqrt{2+\\dots}}$:',
      options: ['2', '-1', '1', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$x^2-x-2=0 \\implies x=2$ (pos).',
      difficulty: 'easy'
    },
    {
      id: 'seq-s2-43',
      question: 'If $a,b,c$ in GP, $x,y$ AMs, then $b/x + b/y$ is:',
      options: ['2', '1', '3', '0'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nSimilar to $a/x+c/y=2$ proof.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-44',
      question: 'Sum of $1^2 + 3^2 + 5^2 + \\dots$ up to $n$ terms:',
      options: ['Both A and B', '$\\frac{n(4n^2 - 1)}{3}$', '$\\frac{n(2n-1)(2n+1)}{3}$', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$T_k = (2k-1)^2$. Summing gives the factored forms.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-45',
      question: 'In infinite GP, if sum is $S$ and sum of squares is $S_2$, common ratio $r$ is:',
      options: ['$\\frac{S^2 - S_2}{S^2 + S_2}$', 'None', 'S/S2', '1-S2/S2'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$S=a/(1-r), S_2=a^2/(1-r^2)$. Algebra yields the result.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-46',
      question: 'Identity $a(q-r)+b(r-p)+c(p-q)$ for AP terms:',
      options: ['0', '1', 'Sum', 'Product'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nCyclic sum of linear terms is 0.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-47',
      question: 'Sum of series $1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\dots$ up to $n$ terms:',
      options: ['$\\frac{n(n+1)(n+2)}{3}$', '$\\frac{n(n+1)(2n+1)}{6}$', 'None', 'Sum cubes'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$T_k = k^2+k$. Sum $= n(n+1)(2n+1)/6 + n(n+1)/2 = n(n+1)(n+2)/3$.',
      difficulty: 'medium'
    },
    {
      id: 'seq-s2-48',
      question: 'If $\\ln a, \\ln b, \\ln c$ in AP, then $a,b,c$ in:',
      options: ['G.P.', 'A.P.', 'H.P.', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$2\\ln b = \\ln a + \\ln c \\implies b^2=ac$.',
      difficulty: 'easy'
    },
    {
      id: 'seq-s2-49',
      question: 'Common terms to $3,7,11...407$ and $2,9,16...709$:',
      options: ['14', '15', '13', '16'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nFirst term 23, $D=28$. $23+28(n-1) \\le 407 \\implies n=14$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s2-50',
      question: 'Min value of $a/b + b/c + c/a$ for pos $a,b,c$:',
      options: ['3', '1', '0', 'abc'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$AM \\ge GM \\implies (a/b+b/c+c/a)/3 \\ge (1)^{1/3} = 1 \\implies 3$.',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
