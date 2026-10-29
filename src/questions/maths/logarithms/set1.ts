import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set1',
  title: 'Logarithms - Set 1',
  chapterId: 'logarithms',
  subjectId: 'maths',
  difficulty: 'easy',
  questions: [
    {
      id: 'log-s1-1',
      question: 'What is the value of $\\log_2 8$?',
      options: ['$2$', '$3$', '$4$', '$8$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_2 8$.\n\nConverting this from logarithmic form to exponential form gives:\n$$2^x = 8$$\n\nWe know that $2 \\times 2 \\times 2 = 8$, so:\n$$2^3 = 8$$\n\nComparing the bases, we find:\n$$x = 3$$\n\nTherefore, the value of $\\log_2 8$ is $3$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-2',
      question: 'Evaluate $\\log_5 125$.',
      options: ['$3$', '$5$', '$25$', '$125$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_5 125$.\n\nRewriting this in exponential form:\n$$5^x = 125$$\n\nWe know that:\n$$125 = 5 \\times 5 \\times 5 = 5^3$$\n\nSo we can write:\n$$5^x = 5^3$$\n\nEquating exponents of the same base:\n$$x = 3$$\n\nThus, $\\log_5 125 = 3$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-3',
      question: 'What is the value of $\\log_{10} 10000$?',
      options: ['$2$', '$3$', '$4$', '$5$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_{10} 10000$.\n\nConvert from logarithmic to exponential form:\n$$10^x = 10000$$\n\nExpress $10000$ as a power of $10$ by counting the zeroes:\n$$10000 = 10^4$$\n\nTherefore:\n$$10^x = 10^4 \\implies x = 4$$\n\nSo, $\\log_{10} 10000 = 4$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-4',
      question: 'Evaluate $\\log_3 81$.',
      options: ['$3$', '$4$', '$9$', '$27$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_3 81$.\n\nConverting to exponential form:\n$$3^x = 81$$\n\nLet\'s check powers of $3$:\n- $3^1 = 3$\n- $3^2 = 9$\n- $3^3 = 27$\n- $3^4 = 81$\n\nHence, we can express $81$ as $3^4$:\n$$3^x = 3^4$$\n\nEquating the exponents gives:\n$$x = 4$$\n\nTherefore, $\\log_3 81 = 4$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-5',
      question: 'Find the value of $\\log_7 1$.',
      options: ['$0$', '$1$', '$7$', 'Undefined'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_7 1$.\n\nConverting to exponential form:\n$$7^x = 1$$\n\nWe know from indices property that any non-zero real number raised to the power of $0$ is equal to $1$:\n$$7^0 = 1$$\n\nTherefore, comparing the exponents:\n$$x = 0$$\n\nThus, the value of $\\log_7 1$ is $0$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-6',
      question: 'Evaluate $\\log_4 4$.',
      options: ['$0$', '$1$', '$4$', '$16$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_4 4$.\n\nConverting to exponential form:\n$$4^x = 4$$\n\nUsing powers of indices, any number itself represents that number raised to the power $1$:\n$$4^1 = 4$$\n\nSo:\n$$4^x = 4^1 \\implies x = 1$$\n\nTherefore, $\\log_4 4 = 1$. In general, $\\log_a a = 1$ for any valid base $a$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-7',
      question: 'What is the value of $\\log_2 \\left(\\frac{1}{8}\\right)$?',
      options: ['$3$', '$-3$', '$1/3$', '$-1/3$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_2 \\left(\\frac{1}{8}\\right)$.\n\nConverting compiling-to exponential format:\n$$2^x = \\frac{1}{8}$$\n\nWe know that $8 = 2^3$. So we can write the reciprocal using negative exponents:\n$$\\frac{1}{8} = \\frac{1}{2^3} = 2^{-3}$$\n\nSubstituting this back into our equation:\n$$2^x = 2^{-3}$$\n\nEquating exponents of the same base:\n$$x = -3$$\n\nThus, $\\log_2 \\left(\\frac{1}{8}\\right) = -3$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-8',
      question: 'Evaluate $\\log_{10} 0.01$.',
      options: ['$2$', '$-2$', '$0.1$', '$-1$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_{10} 0.01$.\n\nRewriting in exponential form:\n$$10^x = 0.01$$\n\nLet\'s construct the decimal $0.01$ as a fraction:\n$$0.01 = \\frac{1}{100}$$\n\nExpress $100$ as $10^2$:\n$$\\frac{1}{100} = \\frac{1}{10^2} = 10^{-2}$$\n\nSubstitute this back into the equation:\n$$10^x = 10^{-2}$$\n\nEquating the powers:\n$$x = -2$$\n\nTherefore, $\\log_{10} 0.01 = -2$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-9',
      question: 'If $\\log_x 25 = 2$, find the value of $x$.',
      options: ['$5$', '$12.5$', '$50$', '$625$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\nGiven the equation:\n$$\\log_x 25 = 2$$\n\nConvert this expression to its exponential form:\n$$x^2 = 25$$\n\nTaking the square root on both sides:\n$$x = \\pm 5$$\n\nBy definition of logarithmic base, the base $x$ must be strictly positive ($x > 0$) and not equal to $1$ ($x \\neq 1$).\n\nTherefore, we reject the negative root $x = -5$.\n\nThus, the only valid solution is:\n$$x = 5$$',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-10',
      question: 'If $\\log_2 x = 5$, find the value of $x$.',
      options: ['$10$', '$25$', '$32$', '$64$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n\nGiven the logarithmic equation:\n$$\\log_2 x = 5$$\n\nConvert from logarithmic form to its equivalent exponential form.\nThe base is $2$, the exponent is $5$, and the result is $x$:\n$$x = 2^5$$\n\nCalculate the expansion of $2^5$:\n$$2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$$\n\nHence, the value of $x$ is $32$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-11',
      question: 'Simplify $\\log_3 27 + \\log_3 9$.',
      options: ['$5$', '$6$', '$15$', '$36$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\nWe can solve this using two direct methods:\n\n**Method 1: Evaluating logarithmic terms individually**\n\n1. Let $u = \\log_3 27 \\implies 3^u = 27 = 3^3 \\implies u = 3$\n2. Let $v = \\log_3 9 \\implies 3^v = 9 = 3^2 \\implies v = 2$\n\nNow add the individual values:\n$$\\log_3 27 + \\log_3 9 = 3 + 2 = 5$$\n\n**Method 2: Using the logarithmic product formula**\n\nApply the rule $\\log_a M + \\log_a N = \\log_a(M \\times N)$:\n$$\\log_3 27 + \\log_3 9 = \\log_3(27 \\times 9)$$\n$$27 \\times 9 = 243$$\n$$\\log_3 243 = x \\implies 3^x = 243$$\n\nSince $3^5 = 243$, we find $x = 5$.\n\nBoth methods lead to the same solution: $5$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-12',
      question: 'Simplify $\\log_2 32 - \\log_2 4$.',
      options: ['$2$', '$3$', '$8$', '$28$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nWe can simplify this expression using two methods:\n\n**Method 1: Evaluating terms individually**\n\n1. Let $u = \\log_2 32 \\implies 2^u = 32 = 2^5 \\implies u = 5$\n2. Let $v = \\log_2 4 \\implies 2^v = 4 = 2^2 \\implies v = 2$\n\nSubtracting the values:\n$$\\log_2 32 - \\log_2 4 = 5 - 2 = 3$$\n\n**Method 2: Using the logarithmic quotient rule**\n\nApply the rule $\\log_a M - \\log_a N = \\log_a\\left(\\frac{M}{N}\\right)$:\n$$\\log_2 32 - \\log_2 4 = \\log_2\\left(\\frac{32}{4}\\right)$$\n$$\\frac{32}{4} = 8$$\n$$\\log_2 8 = y \\implies 2^y = 8 = 2^3 \\implies y = 3$$\n\nThus, the simplified result is $3$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-13',
      question: 'Solve for $x$: $\\log_5 x + \\log_5 2 = \\log_5 10$.',
      options: ['$2$', '$5$', '$8$', '$20$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nGiven the equation:\n$$\\log_5 x + \\log_5 2 = \\log_5 10$$\n\nApply the logarithmic product rule $\\log_a M + \\log_a N = \\log_a(M \\cdot N)$ on the left-hand side:\n$$\\log_5(x \\cdot 2) = \\log_5 10$$\n$$\\log_5(2x) = \\log_5 10$$\n\nSince both sides have base $5$, we can equate their arguments:\n$$2x = 10$$\n\nDivide by $2$:\n$$x = 5$$\n\nChecking our value: $\\log_5 5$ is defined, so $x = 5$ is the actual solution.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-14',
      question: 'Solve for $x$: $2 \\log_3 x = \\log_3 36 - \\log_3 4$.',
      options: ['$2$', '$3$', '$4$', '$9$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nGiven equation:\n$$2 \\log_3 x = \\log_3 36 - \\log_3 4$$\n\n1. Apply the power rule $n \\log_a M = \\log_a(M^n)$ to the left-hand side:\n$$2 \\log_3 x = \\log_3\\left(x^2\\right)$$\n\n2. Apply the quotient rule $\\log_a M - \\log_a N = \\log_a\\left(\\frac{M}{N}\\right)$ to the right-hand side:\n$$\\log_3 36 - \\log_3 4 = \\log_3\\left(\\frac{36}{4}\\right) = \\log_3 9$$\n\n3. Equate both simplified sides:\n$$\\log_3\\left(x^2\\right) = \\log_3 9$$\n\nSince the bases are identical, we equate the arguments:\n$$x^2 = 9 \\implies x = \\pm 3$$\n\nSince $x$ is the argument of the logarithm in the original term $2 \\log_3 x$, it must be strictly positive ($x > 0$). Thus we reject $x = -3$.\n\nHence, the only solution is:\n$$x = 3$$',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-15',
      question: 'Evaluate $\\log_4 8$.',
      options: ['$2$', '$1.5$', '$0.5$', '$3$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_4 8$.\n\nConvert this logarithmic equation to exponential form:\n$$4^x = 8$$\n\nExpress both numbers as powers of the base $2$:\n- $4 = 2^2 \\implies 4^x = (2^2)^x = 2^{2x}$\n- $8 = 2^3$\n\nSubstitute these powers back into the equation:\n$$2^{2x} = 2^3$$\n\nSince bases are equal, we can equate the exponents:\n$$2x = 3$$\n$$x = \\frac{3}{2} = 1.5$$\n\nSo, $\\log_4 8 = 1.5$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-16',
      question: 'Evaluate $\\log_9 27$.',
      options: ['$1.5$', '$2$', '$3$', '$4.5$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_9 27$.\n\nConverting to exponential form:\n$$9^x = 27$$\n\nExpress both bases as exponent powers of $3$:\n- $9 = 3^2 \\implies 9^x = (3^2)^x = 3^{2x}$\n- $27 = 3^3$\n\nNow substitute these powers back into the exponential equation:\n$$3^{2x} = 3^3$$\n\nSince both sides share the same base, their powers must be equal:\n$$2x = 3 \\implies x = \\frac{3}{2} = 1.5$$\n\nThus, $\\log_9 27 = 1.5$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-17',
      question: 'What is the value of $\\log_{\\sqrt{2}} 4$?',
      options: ['$2$', '$4$', '$8$', '$16$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_{\\sqrt{2}} 4$.\n\nConverting to exponential form:\n$$(\\sqrt{2})^x = 4$$\n\nExpress both bases as powers of $2$:\n- $\\sqrt{2} = 2^{1/2} \\implies (\\sqrt{2})^x = (2^{1/2})^x = 2^{x/2}$\n- $4 = 2^2$\n\nSubstitute these representations back into the equation:\n$$2^{x/2} = 2^2$$\n\nEquating the powers:\n$$\\frac{x}{2} = 2$$\n\nMultiply both sides by $2$:\n$$x = 4$$\n\nHence, $\\log_{\\sqrt{2}} 4 = 4$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-18',
      question: 'Evaluate $\\log_{1/2} 8$.',
      options: ['$-3$', '$3$', '$-4$', '$1/3$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_{1/2} 8$.\n\nConverting to exponential form:\n$$\\left(\\frac{1}{2}\\right)^x = 8$$\n\nExpress both sides as powers of $2$:\n- $\\frac{1}{2} = 2^{-1} \\implies \\left(\\frac{1}{2}\\right)^x = (2^{-1})^x = 2^{-x}$\n- $8 = 2^3$\n\nSubstitute these representations into the equation:\n$$2^{-x} = 2^3$$\n\nEquating exponents of the base $2$:\n$$-x = 3 \\implies x = -3$$\n\nThus, $\\log_{1/2} 8 = -3$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-19',
      question: 'Simplify $\\log_{10} 2 + \\log_{10} 50$.',
      options: ['$2$', '$100$', '$\\log_{10} 52$', '$1$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\nGiven logarithmic sum:\n$$\\log_{10} 2 + \\log_{10} 50$$\n\nApply the product property of logarithms $\\log_a M + \\log_a N = \\log_a(M \\times N)$:\n$$\\log_{10} 2 + \\log_{10} 50 = \\log_{10}(2 \\times 50)$$\n\nCalculate the product inside the argument:\n$$2 \\times 50 = 100$$\n\nSo the expression simplifies to:\n$$\\log_{10} 100$$\n\nSince $10^2 = 100$:\n$$\\log_{10} 100 = 2$$\n\nThus, the simplified value is $2$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-20',
      question: 'If $\\log_a b = 2$ and $\\log_b c = 3$, find $\\log_a c$.',
      options: ['$5$', '$6$', '$1.5$', '$8$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nWe can find this value using two clear methods:\n\n**Method 1: Change of Base / Chain Rule**\n\nThe base-change product property states:\n$$\\log_a c = \\log_a b \\times \\log_b c$$\n\nGiven the values:\n- $\\log_a b = 2$\n- $\\log_b c = 3$\n\nSubstitute directly:\n$$\\log_a c = 2 \\times 3 = 6$$\n\n**Method 2: Exponential Substitution**\n\nConvert both equations into exponent representations:\n- $\\log_a b = 2 \\implies a^2 = b$\n- $\\log_b c = 3 \\implies b^3 = c$\n\nNow substitute the first equation $b = a^2$ into the second:\n$$c = (a^2)^3 = a^{2 \\times 3} = a^6$$\n\nRewriting $c = a^6$ back into its logarithmic form:\n$$\\log_a c = 6$$\n\nBoth methods give the exact result: $6$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-21',
      question: 'What is the value of $e^{\\ln 5}$?',
      options: ['$1$', '$e$', '$5$', '$e^5$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n\nThe natural logarithm $\\ln(x)$ represents the logarithm with base $e$, i.e., $\\ln 5 = \\log_e 5$.\n\nAccording to the fundamental identity of logarithms:\n$$a^{\\log_a x} = x$$\n\nIn this problem, the exponential base is $e$ and the logarithm base is also $e$:\n$$e^{\\ln 5} = e^{\\log_e 5} = 5$$\n\nTherefore, the value is $5$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-22',
      question: 'Evaluate $10^{\\log_{10} 7}$.',
      options: ['$1$', '$7$', '$10$', '$70$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nThis expression uses the fundamental cancellation property of exponents and logarithms:\n$$a^{\\log_a x} = x$$\n\nHere the outer base is $10$ and the internal logarithm possesses base $10$. They directly cancel each other out:\n$$10^{\\log_{10} 7} = 7$$\n\nHence, the simplified value is $7$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-23',
      question: 'Evaluate $\\log_2(\\log_3 81)$.',
      options: ['$1$', '$2$', '$3$', '$4$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nWe start by evaluating the internal term in the bracket:\n$$y = \\log_3 81$$\n\nConverting to exponential form:\n$$3^y = 81$$\n\nWe know that $3^4 = 81$, so:\n$$y = 4 \\implies \\log_3 81 = 4$$\n\nNow substitute this value back into the outer logarithm expression:\n$$\\log_2(\\log_3 81) = \\log_2(4)$$\n\nEvaluate $\\log_2 4$:\n$$2^z = 4 \\implies 2^z = 2^2 \\implies z = 2$$\n\nThus, the value of the composite expression is $2$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-24',
      question: 'Evaluate $\\log_5(\\log_2 32)$.',
      options: ['$0$', '$1$', '$2$', '$5$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nFirst, evaluate the inner logarithm argument:\n$$y = \\log_2 32$$\n\nConverting to exponential form:\n$$2^y = 32$$\n\nSince $2^5 = 32$, we find:\n$$y = 5 \\implies \\log_2 32 = 5$$\n\nNow substitute this back into the outer logarithmic statement:\n$$\\log_5(\\log_2 32) = \\log_5(5)$$\n\nUsing the identity $\\log_a a = 1$:\n$$\\log_5 5 = 1$$\n\nTherefore, the overall evaluated result is $1$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-25',
      question: 'If $\\log x = -1$ (assume base 10), find the value of $x$.',
      options: ['$-10$', '$0$', '$0.1$', '$1$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n\nWhen a logarithm is written without an explicit base, like $\\log x$, the common convention is that it refers to base $10$:\n$$\\log_{10} x = -1$$\n\nConvert this equation into exponential form:\n$$x = 10^{-1}$$\n\nApplying negative power exponent property:\n$$10^{-1} = \\frac{1}{10} = 0.1$$\n\nTherefore, the value of $x$ is $0.1$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-26',
      question: 'If $\\log_x(1/27) = -3$, find the value of $x$.',
      options: ['$3$', '$1/3$', '$9$', '$27$'],
      answer: 0,
      explanation: '**Step-by-step Solution:**\n\nGiven the equation:\n$$\\log_x\\left(\\frac{1}{27}\\right) = -3$$\n\nConvert this into equivalent exponential form:\n$$x^{-3} = \\frac{1}{27}$$\n\nExpress the fraction $\\frac{1}{27}$ as a power of base $3$:\n$$\\frac{1}{27} = \\frac{1}{3^3} = 3^{-3}$$\n\nSubstitute this representation back into our equation:\n$$x^{-3} = 3^{-3}$$\n\nEquating both sides, we find:\n$$x = 3$$\n\nSince the base $3$ is positive and not equal to $1$, it is a valid base. Thus, $x = 3$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-27',
      question: 'What is the value of $\\log_3(1/9)$?',
      options: ['$2$', '$-2$', '$1/2$', '$-1/2$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nLet $x = \\log_3\\left(\\frac{1}{9}\\right)$.\n\nConverting from logarithmic form to exponential form:\n$$3^x = \\frac{1}{9}$$\n\nExpress $\\frac{1}{9}$ as a power of $3$ using negative indices:\n$$\\frac{1}{9} = \\frac{1}{3^2} = 3^{-2}$$\n\nSubstituting this back into our equation:\n$$3^x = 3^{-2}$$\n\nComparing exponents on the same base:\n$$x = -2$$\n\nThus, $\\log_3(1/9) = -2$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-28',
      question: 'Simplify $\\log_2 16 + \\log_2 8$.',
      options: ['$5$', '$6$', '$7$', '$128$'],
      answer: 2,
      explanation: '**Step-by-step Solution:**\n\nWe can find this simplified value in two direct ways:\n\n**Method 1: Evaluating logarithmic terms individually**\n\n1. Let $u = \\log_2 16 \\implies 2^u = 16 = 2^4 \\implies u = 4$\n2. Let $v = \\log_2 8 \\implies 2^v = 8 = 2^3 \\implies v = 3$\n\nAdd the evaluated parts:\n$$\\log_2 16 + \\log_2 8 = 4 + 3 = 7$$\n\n**Method 2: Applying product rule**\n\nApply the rule $\\log_a M + \\log_a N = \\log_a(M \\times N)$:\n$$\\log_2 16 + \\log_2 8 = \\log_2(16 \\times 8) = \\log_2(128)$$\n\nSince $2^7 = 128$, the simplified term is $7$.\n\nBoth paths give the exact same answer: $7$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-29',
      question: 'If $\\ln x = 0$, what is $x$?',
      options: ['$0$', '$1$', '$e$', '$10$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\n$\\ln x$ is the notation for the natural logarithm (base $e$):\n$$\\log_e x = 0$$\n\nTranslate from logarithmic form to its equivalent exponential form:\n$$x = e^0$$\n\nRecall from the rules of exponents that any non-zero real number raised to the power of $0$ equals $1$:\n$$x = 1$$\n\nTherefore, $x = 1$.',
      difficulty: 'easy'
    },
    {
      id: 'log-s1-30',
      question: 'Evaluate $3^{\\log_3 8}$.',
      options: ['$3$', '$8$', '$24$', '$81$'],
      answer: 1,
      explanation: '**Step-by-step Solution:**\n\nAccording to the fundamental base cancellation property of exponentiation and logarithms:\n$$a^{\\log_a x} = x$$\n\nHere, the base of the exponent is $3$ and the base of the logarithm is also $3$. They directly cancel each other:\n$$3^{\\log_3 8} = 8$$\n\nThus, the evaluated solution is $8$.',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
