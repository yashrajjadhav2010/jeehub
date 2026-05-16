import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set1',
  title: 'Integral Calculus - Set 1',
  chapterId: 'integration',
  subjectId: 'maths',
  questions: [
    {
      id: 'int-1',
      question: 'Evaluate high precision integral: ∫ e^x (sin x + cos x) dx',
      options: [
        'e^x sin x + C',
        'e^x cos x + C',
        'e^x (sin x - cos x) + C',
        '-e^x cos x + C'
      ],
      answer: 0,
      explanation: 'Using the formula: $\\int e^x [f(x) + f\'(x)] dx = e^x f(x) + C$.\n\nHere $f(x) = \\sin x$ and $f\'(x) = \\cos x$.',
      difficulty: 'easy'
    },
    {
      id: 'int-2',
      question: 'Find the value of ∫₀^(π/2) (sin^n x / (sin^n x + cos^n x)) dx',
      options: [
        'π',
        'π/2',
        'π/4',
        '1'
      ],
      answer: 2,
      explanation: 'Using the property $\\int_0^a f(x) dx = \\int_0^a f(a-x) dx$, both Sin and Cos terms swap.\n\nAdding the two integrals gives $2I = \\int_0^{\\pi/2} 1 dx = \\pi/2$.\n\nSo $I = \\pi/4$.',
      difficulty: 'medium'
    },
    {
      id: 'int-3',
      question: 'Evaluate ∫ (1 / (1 + e^x)) dx',
      options: [
        'ln(1 + e^x) + C',
        'x - ln(1 + e^x) + C',
        'ln(e^x / (1+e^x)) + C',
        '-ln(1 + e^-x) + C'
      ],
      answer: 1,
      explanation: '$\\int \\frac{1}{1 + e^x} dx = \\int \\frac{1 + e^x - e^x}{1 + e^x} dx = \\int (1 - \\frac{e^x}{1+e^x}) dx = x - \\ln(1+e^x) + C$.\n\nAlternatively, multiply top and bottom by $e^{-x}$ to get $\\int \\frac{e^{-x}}{e^{-x} + 1} dx = -\\ln(e^{-x} + 1) + C$, which is equivalent.',
      difficulty: 'medium'
    },
    {
      id: 'int-4',
      question: 'The value of ∫₀¹ x(1-x)⁹⁹ dx is:',
      options: [
        '1/100',
        '1/101',
        '1/10100',
        '1/9900'
      ],
      answer: 2,
      explanation: 'Using $\\int_0^a f(x) dx = \\int_0^a f(a-x) dx$, we get:\n\n$\\int_0^1 (1-x)x^{99} dx = \\int_0^1 (x^{99} - x^{100}) dx$\n\n$= [x^{100}/100 - x^{101}/101]_0^1 = 1/100 - 1/101 = 1/10100$.',
      difficulty: 'medium'
    },
    {
      id: 'int-5',
      question: 'Evaluate ∫ dx / (x(x⁴ + 1))',
      options: [
        '1/4 ln(x⁴/(x⁴+1)) + C',
        'ln(x/(x⁴+1)) + C',
        '1/4 ln((x⁴+1)/x⁴) + C',
        '4 ln(x⁴/(x⁴+1)) + C'
      ],
      answer: 0,
      explanation: 'Multiply and divide by $x^3$, getting $\\int \\frac{x^3 dx}{x^4(x^4+1)}$.\n\nLet $x^4 = t$, then $4x^3 dx = dt$.\n\n$1/4 \\int \\frac{dt}{t(t+1)} = 1/4 \\int (\\frac{1}{t} - \\frac{1}{t+1}) dt = 1/4 (\\ln t - \\ln(t+1)) = 1/4 \\ln(x^4/(x^4+1)) + C$.',
      difficulty: 'hard'
    },
    {
      id: 'int-6',
      question: 'The integral ∫ e^x (1+x) / cos²(xe^x) dx is equal to:',
      options: [
        'tan(xe^x) + C',
        'cos(xe^x) + C',
        'sec(xe^x) + C',
        'cot(xe^x) + C'
      ],
      answer: 0,
      explanation: 'Let $xe^x = t$. Then $(e^x + xe^x) dx = dt \\implies e^x(1+x) dx = dt$.\n\nThe integral becomes $\\int \\sec^2 t dt = \\tan t + C = \\tan(xe^x) + C$.',
      difficulty: 'medium'
    },
    {
      id: 'int-7',
      question: 'Evaluate ∫ sin⁻¹(√x) dx - ∫ cos⁻¹(√x) dx',
      options: [
        '∫ (π/2) dx',
        'Calculated as 2∫ sin⁻¹(√x) dx - (π/2)x + C',
        'None of these',
        'x(2sin⁻¹(√x) - 1) + √(x(1-x)) + C'
      ],
      answer: 1,
      explanation: 'Since $\\sin^{-1}(\\sqrt{x}) + \\cos^{-1}(\\sqrt{x}) = \\pi/2$, $\\cos^{-1}(\\sqrt{x}) = \\pi/2 - \\sin^{-1}(\\sqrt{x})$.\n\nThe expression becomes:\n$\\int (\\sin^{-1}(\\sqrt{x}) - (\\pi/2 - \\sin^{-1}(\\sqrt{x}))) dx$\n$= \\int (2\\sin^{-1}(\\sqrt{x}) - \\pi/2) dx = 2\\int \\sin^{-1}(\\sqrt{x}) dx - (\\pi/2)x + C$.',
      difficulty: 'hard'
    },
    {
      id: 'int-8',
      question: 'Find ∫ dx / (sin x + cos x)',
      options: [
        '1/√2 ln|tan(x/2 + π/8)| + C',
        'ln|tan(x/2)| + C',
        '√2 ln|tan(x/2 + π/8)| + C',
        '1/√2 ln|tan(x/2 - π/8)| + C'
      ],
      answer: 0,
      explanation: 'Divide and multiply by $\\sqrt{2}$:\n\n$1/\\sqrt{2} \\int \\frac{dx}{\\frac{1}{\\sqrt{2}} \\sin x + \\frac{1}{\\sqrt{2}} \\cos x} = 1/\\sqrt{2} \\int \\frac{dx}{\\sin(x + \\pi/4)}$.\n\nThis is $1/\\sqrt{2} \\int \\csc(x + \\pi/4) dx = 1/\\sqrt{2} \\ln|\\tan((x + \\pi/4)/2)| = 1/\\sqrt{2} \\ln|\\tan(x/2 + \\pi/8)| + C$.',
      difficulty: 'hard'
    },
    {
      id: 'int-9',
      question: 'Evaluate ∫₀^π |cos x| dx',
      options: [
        '0',
        '1',
        '2',
        '4'
      ],
      answer: 2,
      explanation: '$\\int_0^\\pi |\\cos x| dx = \\int_0^{\\pi/2} \\cos x dx + \\int_{\\pi/2}^\\pi (-\\cos x) dx$\n\n$= [\\sin x]_0^{\\pi/2} - [\\sin x]_{\\pi/2}^\\pi = (1-0) - (0-1) = 2$.',
      difficulty: 'easy'
    },
    {
      id: 'int-10',
      question: 'Find ∫ ln x dx',
      options: [
        '1/x + C',
        'x ln x - x + C',
        'x ln x + x + C',
        'ln x / x + C'
      ],
      answer: 1,
      explanation: 'Using Integration by Parts:\n\n$\\int 1 \\cdot \\ln x dx = x \\ln x - \\int x \\cdot (1/x) dx = x \\ln x - x + C$.',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
