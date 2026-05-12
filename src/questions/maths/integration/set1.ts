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
      explanation: 'Using the formula ∫ e^x [f(x) + f\'(x)] dx = e^x f(x) + C. Here f(x) = sin x and f\'(x) = cos x.',
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
      explanation: 'Using the property ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a-x) dx, both Sin and Cos terms swap. Adding the two integrals gives 2I = ∫₀^(π/2) 1 dx = π/2, so I = π/4.',
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
      explanation: '∫ (1 / (1 + e^x)) dx = ∫ ((1 + e^x - e^x)/(1 + e^x)) dx = ∫ (1 - e^x/(1+e^x)) dx = x - ln(1+e^x) + C. Alternatively, multiply top and bottom by e^-x to get ∫ (e^-x / (e^-x + 1)) dx = -ln(e^-x + 1) + C, which is equivalent.',
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
      explanation: 'Using ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a-x) dx, we get ∫₀¹ (1-x)x⁹⁹ dx = ∫₀¹ (x⁹⁹ - x¹⁰⁰) dx = [x¹⁰⁰/100 - x¹⁰¹/101]₀¹ = 1/100 - 1/101 = 1/10100.',
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
      explanation: 'Multiply and divide by x³, getting ∫ x³ dx / (x⁴(x⁴+1)). Let x⁴ = t, then 4x³ dx = dt. 1/4 ∫ dt / (t(t+1)) = 1/4 ∫ (1/t - 1/(t+1)) dt = 1/4 (ln t - ln(t+1)) = 1/4 ln(x⁴/(x⁴+1)) + C.',
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
      explanation: 'Let xe^x = t. Then (e^x + xe^x) dx = dt => e^x(1+x) dx = dt. The integral becomes ∫ sec²t dt = tan t + C = tan(xe^x) + C.',
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
      explanation: 'Since sin⁻¹(√x) + cos⁻¹(√x) = π/2, cos⁻¹(√x) = π/2 - sin⁻¹(√x). The expression becomes ∫ (sin⁻¹(√x) - (π/2 - sin⁻¹(√x))) dx = ∫ (2sin⁻¹(√x) - π/2) dx = 2∫ sin⁻¹(√x) dx - (π/2)x + C.',
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
      explanation: 'Divide and multiply by √2: 1/√2 ∫ dx / (1/√2 sin x + 1/√2 cos x) = 1/√2 ∫ dx / (sin(x + π/4)). This is 1/√2 ∫ csc(x + π/4) dx = 1/√2 ln|tan((x + π/4)/2)| = 1/√2 ln|tan(x/2 + π/8)| + C.',
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
      explanation: '∫₀^π |cos x| dx = ∫₀^(π/2) cos x dx + ∫_(π/2)^π (-cos x) dx = [sin x]₀^(π/2) - [sin x]_(π/2)^π = (1-0) - (0-1) = 2.',
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
      explanation: 'Using Integration by Parts: ∫ 1 * ln x dx = x ln x - ∫ x * (1/x) dx = x ln x - x + C.',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
