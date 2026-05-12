import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set3',
  title: 'Sequence and Series - Set 3 (JEE Advanced / Hardest)',
  chapterId: 'sequence-and-series',
  subjectId: 'maths',
  questions: [
    {
      id: 'seq-s3-1',
      question: 'Evaluate the limit: $\\lim_{n \\to \\infty} \\sum_{k=1}^n \\frac{k}{k^4 + k^2 + 1}$.',
      options: ['$1/2$', '$1$', '$1/4$', '$0$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nFactor the denominator: $k^4 + k^2 + 1 = (k^2+1)^2 - k^2 = (k^2 - k + 1)(k^2 + k + 1)$.\nRewrite the general term $T_k = \\frac{k}{(k^2 - k + 1)(k^2 + k + 1)}$.\nNotice $(k^2 + k + 1) - (k^2 - k + 1) = 2k$. So, $T_k = \\frac{1}{2} \\left( \\frac{1}{k^2 - k + 1} - \\frac{1}{k^2 + k + 1} \\right)$.\nThis is a telescoping sum: $a_k - a_{k+1}$ where $a_k = \\frac{1}{k^2-k+1}$.\n$S_n = \\frac{1}{2} [ a_1 - a_{n+1} ] = \\frac{1}{2} [ 1 - \\frac{1}{n^2+n+1} ]$.\nLimit as $n \\to \\infty$ is $1/2$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-2',
      question: 'The value of the infinite product $\\prod_{n=2}^{\\infty} \\left( 1 - \\frac{1}{n^2} \\right)$ is:',
      options: ['$1/2$', '$1$', '$0$', '$\\pi/2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nGeneral term $P_n = 1 - \\frac{1}{n^2} = \\frac{n^2 - 1}{n^2} = \\frac{(n-1)(n+1)}{n \\cdot n}$.\nPartial product $P_N = \\left( \\frac{1 \\cdot 3}{2 \\cdot 2} \\right) \\left( \\frac{2 \\cdot 4}{3 \\cdot 3} \\right) \\dots \\left( \\frac{(N-1)(N+1)}{N \\cdot N} \\right)$.\nCancellation pattern: Only first numerator (1), first denominator (2), last denominator (N), and last numerator (N+1) survive.\n$P_N = \\frac{1}{2} \\cdot \\frac{N+1}{N}$.\nAs $N \\to \\infty$, limit is $1/2$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-3',
      question: 'Evaluate the sum $\\sum_{n=1}^{\\infty} \\frac{1}{n\\sqrt{n+1} + (n+1)\\sqrt{n}}$.',
      options: ['$1$', '$1/2$', '$2$', '$\\infty$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nRationalize $T_n = \\frac{1}{\\sqrt{n}\\sqrt{n+1}(\\sqrt{n} + \\sqrt{n+1})} = \\frac{\\sqrt{n+1} - \\sqrt{n}}{\\sqrt{n}\\sqrt{n+1}}$.\n$T_n = \\frac{1}{\\sqrt{n}} - \\frac{1}{\\sqrt{n+1}}$.\nTelescoping sum collapses to $1/\\sqrt{1} - \\text{limit}_{n \\to \\infty} \\frac{1}{\\sqrt{n+1}} = 1 - 0 = 1$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-4',
      question: 'The sum of the series $\\sum_{k=1}^{\\infty} \\tan^{-1}\\left( \\frac{2k}{2 + k^2 + k^4} \\right)$ is:',
      options: ['$\\pi/4$', '$\\pi/2$', '$\\pi$', '$0$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$T_k = \\tan^{-1}\\left( \\frac{2k}{1 + (1 + k^2 + k^4)} \\right) = \\tan^{-1}\\left( \\frac{(k^2+k+1) - (k^2-k+1)}{1 + (k^2+k+1)(k^2-k+1)} \\right)$.\n$T_k = \\tan^{-1}(k^2+k+1) - \\tan^{-1}(k^2-k+1)$.\nSum from $k=1$ to $N$: $S_N = \\tan^{-1}(N^2+N+1) - \\tan^{-1}(1)$.\nLimit as $N \\to \\infty$: $\\pi/2 - \\pi/4 = \\pi/4$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-5',
      question: 'Evaluate $\\sum_{n=1}^{\\infty} \\frac{2n+1}{n^2(n+1)^2}$.',
      options: ['$1$', '$1/2$', '$2$', '$1/4$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$2n+1 = (n+1)^2 - n^2$.\n$T_n = \\frac{(n+1)^2 - n^2}{n^2(n+1)^2} = \\frac{1}{n^2} - \\frac{1}{(n+1)^2}$.\nTelescoping sum: $1/1^2 - \\text{limit} = 1$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-6',
      question: 'If $x, y > 0$ and $x+y=5$, the maximum value of $x^2 y^3$ is:',
      options: ['$108$', '$125$', '$72$', '$144$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nUse weighted AM-GM on $x/2, x/2, y/3, y/3, y/3$.\nSum $= x+y = 5$. $n=5$.\n$(5/5)^5 \\ge (x/2)^2 (y/3)^3 \\implies 1 \\ge x^2 y^3 / (4 \\cdot 27) \\implies x^2 y^3 \\le 108$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-7',
      question: 'For positive real numbers $a, b, c$, what is the minimum value of $\\frac{a}{b+c} + \\frac{b}{c+a} + \\frac{c}{a+b}$?',
      options: ['$3/2$', '$3$', '$1$', '$2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nThis is Nesbitt\'s Inequality. Let $S = \\sum a/(b+c)$.\n$S+3 = \\sum (a/(b+c) + 1) = \\sum (a+b+c)/(b+c) = (a+b+c) \\sum 1/(b+c)$.\nBy AM-HM, $(x+y+z)(1/x+1/y+1/z) \\ge 9$. Here $x=b+c, y=c+a, z=a+b \\implies x+y+z=2(a+b+c)$.\nSo $1/2(x+y+z)(1/x+1/y+1/z) \\ge 9/2$. Then $S+3 \\ge 4.5 \\implies S \\ge 1.5$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-8',
      question: 'If $a, b, c > 0$ such that $a+b+c=1$, the minimum value of $\\left(\\frac{1}{a}-1\\right)\\left(\\frac{1}{b}-1\\right)\\left(\\frac{1}{c}-1\\right)$ is:',
      options: ['$8$', '$27$', '$9$', '$6$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$(1/a-1) = (b+c)/a$. Expression is $\\frac{(b+c)(c+a)(a+b)}{abc}$.\nBy AM-GM, $b+c \\ge 2\\sqrt{bc}$, $c+a \\ge 2\\sqrt{ca}$, $a+b \\ge 2\\sqrt{ab}$.\nProduct $\\ge 8\\sqrt{b^2 c^2 a^2} / abc = 8$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-9',
      question: 'If $x, y, z$ are positive reals, the minimum value of $\\frac{x^2}{y+z} + \\frac{y^2}{z+x} + \\frac{z^2}{x+y}$ is:',
      options: ['$\\frac{x+y+z}{2}$', '$x+y+z$', '$\\frac{3}{2}$', '$\\sqrt{x+y+z}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nBy Titu\'s Lemma (Cauchy-Schwarz): $\\sum a_i^2/b_i \\ge (\\sum a_i)^2 / \\sum b_i$.\nMin value $= (x+y+z)^2 / (2(x+y+z)) = (x+y+z)/2$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-10',
      question: 'For positive $a, b, c$, the expression $\\frac{a^3}{b} + \\frac{b^3}{c} + \\frac{c^3}{a}$ is always greater than or equal to:',
      options: ['$a^2+b^2+c^2$', '$ab+bc+ca$', '$a+b+c$', 'Both A and B'],
      answer: 3,
      explanation: '**Step-by-step Solution:**\nBy AM-GM, $a^3/b + a^3/b + b^2 \\ge 3a^2$. Summing cyclically: $2\\sum a^3/b + \\sum b^2 \\ge 3\\sum a^2 \\implies \\sum a^3/b \\ge \\sum a^2$.\nSince $\\sum a^2 \\ge \\sum ab$, both bounds are satisfied.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-11',
      question: 'If a sequence is defined by $a_1 = 1$ and $a_{n} = a_{n-1} + n(n-1)$, find $a_n$.',
      options: ['$1 + \\frac{n(n-1)(n+1)}{3}$', '$1 + \\frac{n(n-1)(n+1)}{6}$', '$1 + \\frac{n(n-1)(2n-1)}{6}$', '$\\frac{n(n+1)(n+2)}{3}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$a_n - a_1 = \\sum_{k=2}^n k(k-1) = \\sum_{m=1}^{n-1} m(m+1)$.\nUsing $\\sum r(r+1) = \\frac{n(n+1)(n+2)}{3}$, we get $a_n = 1 + \\frac{(n-1)n(n+1)}{3}$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-12',
      question: 'The sum of the first $n$ terms of the series $1 + 5 + 14 + 30 + 55 + \\dots$ is:',
      options: ['$\\frac{n(n+1)(n+2)(n+3)}{24}$', '$\\frac{n(n+1)(n+2)(2n+1)}{24}$', '$\\frac{n^2(n+1)^2}{12}$', '$\\frac{n(n+1)(n+2)}{6}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$T_k = \\sum_{j=1}^k j^2 = \\frac{k(k+1)(2k+1)}{6}$.\n$S_n = \\sum_{k=1}^n \\frac{2k^3 + 3k^2 + k}{6} = \\frac{1}{6} [ 2 \\frac{n^2(n+1)^2}{4} + 3 \\frac{n(n+1)(2n+1)}{6} + \\frac{n(n+1)}{2} ]$.\nFactoring yields $\\frac{n(n+1)(n+2)(n+3)}{24}$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-13',
      question: 'Let $a, b, c$ be the sides of a triangle. Then $\\frac{a}{b+c-a} + \\frac{b}{c+a-b} + \\frac{c}{a+b-c}$ is always greater than or equal to:',
      options: ['$3$', '$1$', '$3/2$', '$2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nLet $x=b+c-a, y=c+a-b, z=a+b-c$. Then $a=(y+z)/2$. Expression becomes $\\frac{y+z}{2x} + \\dots = 1/2 \\sum (y/x+x/y) \\ge 1/2(2+2+2) = 3$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-14',
      question: 'Let $a_1, a_2, \\dots, a_n$ be an A.P. with common difference $d$. What is the sum $\\sum_{k=1}^{n-1} \\frac{1}{\\sqrt{a_k} + \\sqrt{a_{k+1}}}$?',
      options: ['$\\frac{\\sqrt{a_n} - \\sqrt{a_1}}{d}$', '$\\frac{n-1}{\\sqrt{a_1} + \\sqrt{a_n}}$', 'Both A and B', 'None of these'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\nRationalize: $T_k = \\frac{\\sqrt{a_{k+1}} - \\sqrt{a_k}}{d}$. Sum is $\\frac{\\sqrt{a_n} - \\sqrt{a_1}}{d}$.\nMultiply by conjugate: $\\frac{a_n - a_1}{d(\\sqrt{a_n} + \\sqrt{a_1})} = \\frac{(n-1)d}{d(\\sqrt{a_n} + \\sqrt{a_1})} = \\frac{n-1}{\\sqrt{a_n} + \\sqrt{a_1}}$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-15',
      question: 'Find the sum of the series: $\\frac{1}{1! \\cdot 2023!} + \\frac{1}{2! \\cdot 2022!} + \\dots + \\frac{1}{2023! \\cdot 1!}$.',
      options: ['$\\frac{2^{2024} - 2}{2024!}$', '$\\frac{2^{2024}}{2024!}$', '$\\frac{2^{2023} - 1}{2024!}$', '$\\frac{2^{2023}}{2023!}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nMultiply by $2024!$: $\\sum_{k=1}^{2023} \\frac{2024!}{k!(2024-k)!} = \\sum_{k=1}^{2023} \\binom{2024}{k}$.\nSum is $2^{2024} - \\binom{2024}{0} - \\binom{2024}{2024} = 2^{2024} - 2$. Divide by $2024!$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-16',
      question: 'If $H_n = 1 + \\frac{1}{2} + \\dots + \\frac{1}{n}$, then $\\sum_{k=1}^n H_k$ is equal to:',
      options: ['$(n+1)H_n - n$', '$nH_n - n$', '$(n+1)H_{n+1} - n$', '$n H_{n+1} - n$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$\\sum_{k=1}^n \\sum_{j=1}^k 1/j = \\sum_{j=1}^n \\sum_{k=j}^n 1/j = \\sum_{j=1}^n \\frac{n-j+1}{j} = (n+1)\\sum 1/j - \\sum 1 = (n+1)H_n - n$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-17',
      question: 'The value of $\\lim_{n \\to \\infty} \\left( \\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\dots + \\frac{1}{n(n+1)} \\right)^n$ is:',
      options: ['$e^{-1}$', '$1/e$', '$1$', 'Both A and B'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nInner sum $S_n = 1 - 1/(n+1) = n/(n+1)$.\nLimit $= \\lim (1 - 1/(n+1))^n = e^{-1}$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-18',
      question: 'Consider the sequence $a_1 = 1$ and $a_{n+1} = a_n + e^{-a_n}$. As $n \\to \\infty$, the asymptotic behavior of $a_n$ is:',
      options: ['$\\ln n$', '$n$', '$e^n$', '$\\sqrt{n}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$a_{n+1} - a_n = e^{-a_n} \\sim da/dn \\implies e^a da = dn \\implies e^a = n \\implies a = \\ln n$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-19',
      question: 'If $a, b, c$ are in G.P. and $x = \\log_k a, y = \\log_k b, z = \\log_k c$, then $x, y, z$ form an A.P. with common difference:',
      options: ['$\\log_k r$', '$r$', '$\\log_r k$', '$1/r$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$b=ar, c=ar^2$. $y-x = \\log_k(ar) - \\log_k a = \\log_k r$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-20',
      question: 'The sum of the series $1 - \\frac{1}{2} + \\frac{1}{4} - \\frac{1}{8} + \\dots$ is:',
      options: ['$2/3$', '$3/2$', '$1/3$', '$1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nInfinite G.P. with $a=1, r=-1/2$. Sum $= 1 / (1 - (-1/2)) = 1 / 1.5 = 2/3$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-21',
      question: 'Let $\\sum x_i = 1$ ($x_i > 0$). The minimum value of $\\sum \\frac{1}{x_i}$ is:',
      options: ['$n^2$', '$n$', '$1/n$', '$n^n$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nBy AM-HM, $(\\sum x_i)/n \\ge n / (\\sum 1/x_i)$.\n$1/n \\ge n / S \\implies S \\ge n^2$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-22',
      question: 'If $a, b, c$ are sides of a triangle, the maximum value of $\\frac{ab+bc+ca}{a^2+b^2+c^2}$ is:',
      options: ['$1$', '$1/2$', '$2$', '$3/2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$a^2+b^2+c^2 \\ge ab+bc+ca$ for any reals. Ratio $\\le 1$. Equality at $a=b=c$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-23',
      question: 'Find the value of $\\lim_{n \\to \\infty} \\sum_{k=1}^n \\frac{1}{\\sqrt{n^2 + k^2}}$.',
      options: ['$\\ln(1+\\sqrt{2})$', '$\\pi/4$', '$1$', '$\\ln 2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nRiemann sum: $\\int_0^1 \\frac{1}{\\sqrt{1+x^2}} dx = [\\ln(x + \\sqrt{1+x^2})]_0^1 = \\ln(1+\\sqrt{2})$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-24',
      question: 'Evaluate the sum $\\sum_{n=1}^\\infty \\frac{n^3}{n!}$.',
      options: ['$5e$', '$2e$', '$3e$', '$e$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$n^3 = n(n-1)(n-2) + 3n(n-1) + n$.\nSum $= \\sum \\frac{1}{(n-3)!} + 3 \\sum \\frac{1}{(n-2)!} + \\sum \\frac{1}{(n-1)!} = e + 3e + e = 5e$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-25',
      question: 'If $S_n = \\sum_{k=0}^{n-1} (1/2)^k$, find $2 - S_n$.',
      options: ['$2^{1-n}$', '$2^{-n}$', '$2^{n-1}$', '$1-2^{-n}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$S_n = 2(1 - (1/2)^n) = 2 - 2(1/2)^n = 2 - 2^{1-n}$.\n$2 - S_n = 2^{1-n}$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-26',
      question: 'If $a, b, c$ are in A.P. and $a, b, c+1$ are in G.P. ($a,b,c \\in \\mathbb{Z}^+$), then:',
      options: ['$a = (b-a)^2$', '$a = b-a$', '$a = 2(b-a)$', '$a = (b-c)^2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$(a+d)^2 = a(a+2d+1) \\implies a^2+2ad+d^2 = a^2+2ad+a \\implies d^2 = a$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-27',
      question: 'In a G.P., $S_3 : S_6 = 125 : 152$. Common ratio $r$ is:',
      options: ['$3/5$', '$2/5$', '$1/5$', '$4/5$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$S_6 / S_3 = r^3+1 = 152/125 \\implies r^3 = 27/125 \\implies r=3/5$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-28',
      question: 'For what values of $x$ does $1 + \\cos^2 x + \\cos^4 x + \\dots = 2$?',
      options: ['$x = n\\pi \\pm \\pi/4$', '$x = n\\pi \\pm \\pi/3$', '$x = n\\pi \\pm \\pi/6$', '$x = 2n\\pi \\pm \\pi/4$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$1/(1-\\cos^2 x) = 1/\\sin^2 x = 2 \\implies \\sin^2 x = 1/2 \\implies x = n\\pi \\pm \\pi/4$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-29',
      question: 'A.M. of two numbers is 34, G.M. is 16. Difference $|a-b|$ is:',
      options: ['$60$', '$64$', '$30$', '$45$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$a+b=68, ab=256$. $(a-b)^2 = (a+b)^2 - 4ab = 4624 - 1024 = 3600 \\implies |a-b|=60$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-30',
      question: 'Evaluate $\\sum_{n=1}^\\infty \\frac{2n-1}{2^n}$.',
      options: ['$3$', '$2$', '$4$', '$1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nStandard AGP: $S = 1/2 + 3/4 + 5/8 ... \\implies S/2 = 1/4 + 3/8 ... \\implies S/2 = 1/2 + 2(1/4 + 1/8 ...) = 1/2 + 1 = 3/2 \\implies S=3$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-31',
      question: 'Given $\\sum_{r=1}^n r^4 = f(n)$. Then $\\sum_{r=1}^n (2r-1)^4$ is:',
      options: ['$f(2n) - 16f(n)$', '$f(2n) - 8f(n)$', '$f(2n) - 4f(n)$', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nSum(odds) = Total(2n) - Sum(evens) = $f(2n) - \\sum (2r)^4 = f(2n) - 16f(n)$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-32',
      question: 'Sum $\\frac{1}{\\sqrt{x_1} + \\sqrt{x_2}} + \\dots + \\frac{1}{\\sqrt{x_{n-1}} + \\sqrt{x_n}}$ for A.P. is:',
      options: ['$\\frac{n-1}{\\sqrt{x_1} + \\sqrt{x_n}}$', '$\\frac{n}{\\dots}$', 'Both A and B', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nRationalize: $1/d (\\sqrt{x_n} - \\sqrt{x_1}) = (x_n-x_1) / [d(\\sqrt{x_n}+\\sqrt{x_1})] = (n-1)/(\\sqrt{x_n}+\\sqrt{x_1})$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-33',
      question: 'If $a, b, c$ are in H.P., then $(1/a+1/b-1/c)(1/b+1/c-1/a)$ is:',
      options: ['$\\frac{4}{ac} - \\frac{3}{b^2}$', '$\\frac{4}{b^2} - \\frac{3}{ac}$', '$\\frac{1}{a^2} + \\frac{1}{c^2}$', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nLet $x,y,z$ be reciprocals (A.P.). $(y+(x-z))(y-(x-z)) = y^2 - (x-z)^2 = y^2 - (4y^2 - 4xz) = 4xz - 3y^2$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-34',
      question: 'Evaluate $\\sum_{n=1}^\\infty \\frac{1}{n(n+1)(n+2)(n+3)}$.',
      options: ['$1/18$', '$1/12$', '$1/6$', '$1/24$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$T_n = 1/3 [ 1/(n(n+1)(n+2)) - 1/((n+1)(n+2)(n+3)) ]$. Sum $= 1/3 [ 1/(1 \\cdot 2 \\cdot 3) ] = 1/18$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-35',
      question: 'Find $S_\\infty$ for $\\sum_{r=1}^n \\frac{r}{1+r^2+r^4}$.',
      options: ['$1/2$', '$1$', '$1/4$', '$\\infty$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$T_r = 1/2 [ 1/(r^2-r+1) - 1/(r^2+r+1) ]$. Sum $= 1/2 [ 1/1 - 0 ] = 1/2$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-36',
      question: 'The coefficient of $x^n$ in the expansion of $\\frac{1+x}{(1-x)^2}$ is:',
      options: ['$2n+1$', '$2n-1$', '$n+1$', '$n$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$(1+x) \\sum (k+1)x^k \\implies$ coeff of $x^n$ is $(n+1) + n = 2n+1$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-37',
      question: 'If $a, b, c$ in G.P. and $a-b, c-a, b-c$ in H.P., then $a+4b+c$ is:',
      options: ['$0$', '$1$', '$abc$', '$3b$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nAlgebraic substitution leads to $(a+b+c)^2 = 9b^2$ under specific conditions, resulting in 0.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-38',
      question: 'What is the $2000^{th}$ term of $1, 2, 2, 3, 3, 3, 4, 4, 4, 4, \\dots$?',
      options: ['63', '62', '64', '61'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nLast index of $k$ is $k(k+1)/2$. $62 \\cdot 63 / 2 = 1953$. $63 \\cdot 64 / 2 = 2016$. So term is 63.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-39',
      question: 'If $a,b,c$ (A.P.), $b,c,d$ (G.P.), $c,d,e$ (H.P.), then $a,c,e$ are in:',
      options: ['G.P.', 'A.P.', 'H.P.', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$c^2 = ae$ is a known property for this interlocking sequence relation.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-40',
      question: 'Find sum $\\sum_{i=1}^\\infty \\sum_{j=1}^\\infty \\frac{1}{3^i 3^j}$ where $i \\ne j$.',
      options: ['$1/8$', '$1/4$', '$1/2$', '$1/12$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nTotal sum $= (1/2)(1/2) = 1/4$. Diagonal sum $(i=j) = \\sum (1/9)^i = 1/8$. Result $= 1/4 - 1/8 = 1/8$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-41',
      question: 'Positive integer $k$ for which $\\sum_{n=1}^k (\\sqrt{n+1} - \\sqrt{n}) = 9$ is:',
      options: ['$99$', '$100$', '$81$', '$80$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nTelescoping: $\\sqrt{k+1} - 1 = 9 \\implies \\sqrt{k+1} = 10 \\implies k=99$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-42',
      question: 'Evaluate $\\lim_{n \\to \\infty} \\frac{1}{n^3} \\sum_{k=1}^n k^2$.',
      options: ['$1/3$', '$1/2$', '$1$', '$0$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nRiemann sum for $\\int_0^1 x^2 dx = 1/3$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-43',
      question: 'Value of $\\sum_{n=1}^\\infty \\frac{n}{n^4+n^2+1}$ is:',
      options: ['$1/2$', '$1/4$', '$1$', '$0$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nProved in Q1/Q35, telescoping sum is 1/2.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-44',
      question: 'If $a_1=1, a_n = a_{n-1} + (-1)^n n$, then $a_{100}$ is:',
      options: ['$52$', '$-50$', '$50$', '$51$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$a_{100} = 1 + (2-3) + (4-5) + \\dots + (98-99) + 100 = 1 - 49 + 100 = 52$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-45',
      question: 'Value of $\\sum_{k=1}^\\infty \\frac{1}{(2k-1)(2k+1)}$ is:',
      options: ['$1/2$', '$1/4$', '$1$', '$2$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$1/2 [ 1/1 - 1/3 + 1/3 - \\dots ] = 1/2$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-46',
      question: 'If $a,b,c,d$ are distinct positive G.P. terms, then:',
      options: ['$a+d > b+c$', '$a+d < b+c$', 'Equal', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$(a+d)-(b+c) = a(1-r)^2(1+r) > 0$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-47',
      question: 'If $S_n = cn^2$, the sum of squares of terms is:',
      options: ['$\\frac{c^2n(4n^2-1)}{3}$', '$\\frac{cn(4n^2-1)}{3}$', 'None', '$\\frac{c^2n(n+1)}{2}$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$T_n = c(2n-1)$. $\\sum T_n^2 = c^2 \\sum (2n-1)^2 = c^2 \\frac{n(4n^2-1)}{3}$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-48',
      question: 'For $x>0$, min value of $x^3 + 1/x^3$ is:',
      options: ['$2$', '$3$', '$1$', '$0$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nAM-GM result is 2.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-49',
      question: 'Limit of $1/\\sqrt{n} \\sum 1/(\\sqrt{x_k}+\\sqrt{x_{k+1}})$ for A.P. is:',
      options: ['$1/\\sqrt{d}$', '$\\sqrt{d}$', '0', '$1/d$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\nTelescoping sum simplified by $\\sqrt{n}$ factor results in $1/\\sqrt{d}$.',
      difficulty: 'hard'
    },
    {
      id: 'seq-s3-50',
      question: 'Sum of $1 + \\frac{1^2+2^2}{2!} + \\frac{1^2+2^2+3^2}{3!} + \\dots \\infty$ is:',
      options: ['$\\frac{17}{6}e$', '$\\frac{11}{6}e$', '$3e$', 'None'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n$T_n = \\frac{n(n+1)(2n+1)}{6n!}$. Summing over factorial components gives $17e/6$.',
      difficulty: 'hard'
    }
  ]
};

export default quizSet;
