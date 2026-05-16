import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set1',
  title: 'Basic Math: Differentiation - Set 1',
  chapterId: 'differentiation',
  subjectId: 'physics',
  questions: [
    {
      id: 'diff-p-1',
      question: 'If position x = 5t², what is the velocity v at any time t?',
      options: ['5t', '10t', '2.5t', '10t²'],
      answer: 1,
      explanation: 'Using the power rule: $d/dt(at^n) = ant^{n-1}$.\n\nHere $x = 5t^2$, so $v = dx/dt = 5(2)t^1 = 10t$.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-2',
      question: 'The displacement of a particle is given by x = 2t + 5. Its velocity is:',
      options: ['2', '5', '0', '2t'],
      answer: 0,
      explanation: '$v = dx/dt = d/dt(2t + 5)$.\n\nDerivative of $2t$ is 2, derivative of constant 5 is 0.\n\nSo $v = 2$.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-3',
      question: 'If velocity v = 3t² + 2t, find the acceleration a at t = 1s.',
      options: ['5 m/s²', '8 m/s²', '6 m/s²', '3 m/s²'],
      answer: 1,
      explanation: '$a = dv/dt = d/dt(3t^2 + 2t) = 6t + 2$.\n\nAt $t = 1$, $a = 6(1) + 2 = 8 \\text{ m/s}^2$.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-4',
      question: 'The derivative of a constant (like the speed of light c in vacuum) with respect to time is:',
      options: ['c', '1', 'Infinity', '0'],
      answer: 3,
      explanation: 'The derivative represents the rate of change. Since a constant does not change, its derivative is always 0.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-5',
      question: 'If position x = A sin(ωt), what is the velocity v?',
      options: ['A cos(ωt)', 'Aω cos(ωt)', '-Aω cos(ωt)', 'ω sin(ωt)'],
      answer: 1,
      explanation: 'Using the chain rule: $d/dt(\\sin(ut)) = u \\cos(ut)$.\n\nSo $v = dx/dt = A \\times \\omega \\times \\cos(\\omega t) = A\\omega \\cos(\\omega t)$.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-6',
      question: 'Acceleration is defined as the first derivative of ______ with respect to time.',
      options: ['Displacement', 'Velocity', 'Force', 'Mass'],
      answer: 1,
      explanation: 'Acceleration (a) is the rate of change of velocity, so a = dv/dt.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-7',
      question: 'If x = t³ - 3t, at what time t is the velocity zero?',
      options: ['0s', '1s', '2s', '3s'],
      answer: 1,
      explanation: '$v = dx/dt = 3t^2 - 3$.\n\nSetting $v = 0$: $3t^2 - 3 = 0 \\implies 3t^2 = 3 \\implies t^2 = 1 \\implies t = 1 \\text{s}$ (time is positive).',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-8',
      question: 'The slope of a displacement-time (x-t) graph represents:',
      options: ['Acceleration', 'Distance', 'Velocity', 'Momentum'],
      answer: 2,
      explanation: 'The slope at any point on an x-t graph is dx/dt, which is velocity.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-9',
      question: 'If v = u + at (where u and a are constants), then dv/dt is:',
      options: ['u', 'at', 'a', '0'],
      answer: 2,
      explanation: '$dv/dt = d/dt(u) + d/dt(at)$.\n\nSince $u$ is constant, $d/dt(u) = 0$.\n\nSince $a$ is constant, $d/dt(at) = a$.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-10',
      question: 'If velocity v = 10, find acceleration a.',
      options: ['10', '0', '1', 'Cannot be determined'],
      answer: 1,
      explanation: 'v = 10 is a constant. Its derivative a = dv/dt is 0.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-11',
      question: 'If position x = 4t⁴, find acceleration a at any time t.',
      options: ['16t³', '48t²', '12t²', '48t'],
      answer: 1,
      explanation: '$v = dx/dt = 16t^3$.\n\n$a = dv/dt = d/dt(16t^3) = 16(3)t^2 = 48t^2$.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-12',
      question: 'The derivative of y = ln(x) with respect to x is:',
      options: ['eˣ', 'x', '1/x', 'ln(x)'],
      answer: 2,
      explanation: 'The standard derivative of the natural logarithm ln(x) is 1/x.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-13',
      question: 'If x = cos(t), find the rate of change of x at t = π/2.',
      options: ['0', '1', '-1', '0.5'],
      answer: 2,
      explanation: 'Rate of change = $dx/dt = -\\sin(t)$.\n\nAt $t = \\pi/2$, $dx/dt = -\\sin(\\pi/2) = -1$.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-14',
      question: 'If mass m is constant, force F = dP/dt where momentum P = mv. Find F in terms of acceleration.',
      options: ['F = m * dv/dt', 'F = m * a', 'Both A and B', 'F = v * dm/dt'],
      answer: 2,
      explanation: 'F = d(mv)/dt. Since m is constant, F = m * (dv/dt). Since dv/dt = a, F = ma.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-15',
      question: 'What is d/dx (sin x + cos x)?',
      options: ['cos x + sin x', 'cos x - sin x', '-cos x + sin x', '0'],
      answer: 1,
      explanation: 'Derivative of sin x is cos x. Derivative of cos x is -sin x. So the sum is cos x - sin x.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-16',
      question: 'If x = 1/t, then dx/dt is:',
      options: ['ln(t)', '-1/t²', '1/t²', 't⁻¹'],
      answer: 1,
      explanation: 'x = t⁻¹. By power rule: dx/dt = -1 * t⁻² = -1/t².',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-17',
      question: 'If kinetic energy K = 0.5mv², find dK/dv (rate of change of K with speed v, mass m is constant).',
      options: ['mv', '0.5mv', 'mv²', 'v'],
      answer: 0,
      explanation: 'dK/dv = d/dv(0.5mv²) = 0.5m * 2v = mv. This derivative is the momentum P.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-18',
      question: 'Find d/dx (e⁻³ˣ).',
      options: ['e⁻³ˣ', '-3e⁻³ˣ', '3e⁻³ˣ', '-1/3 e⁻³ˣ'],
      answer: 1,
      explanation: 'Using the chain rule: $d/dx(e^{ax}) = ae^{ax}$.\n\nHere $a = -3$, so the result is $-3e^{-3x}$.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-19',
      question: 'If potential energy U = mgh and h varies with time, dU/dt is:',
      options: ['mg', 'mg * dh/dt', 'mgh', '0'],
      answer: 1,
      explanation: '$dU/dt = d/dt(mgh)$.\n\nSince $m$ and $g$ are constants, $dU/dt = mg \\times (dh/dt)$.\n\nNote that $dh/dt$ is vertical velocity.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-20',
      question: 'The derivative of tan(x) is:',
      options: ['sec²(x)', 'sec(x)', 'cos²(x)', '1/cos(x)'],
      answer: 0,
      explanation: 'Standard derivative: d/dx(tan x) = sec² x.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-21',
      question: 'If v = kx² where k is a constant, find acceleration a in terms of v or x.',
      options: ['2kx', '2k²x³', 'kv²', 'k²x'],
      answer: 1,
      explanation: 'a = dv/dt. Using chain rule: a = (dv/dx) * (dx/dt). dx/dt = v. So a = v * (dv/dx). dv/dx = 2kx. a = (kx²) * (2kx) = 2k²x³.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-22',
      question: 'If x = t² - 4t + 4, what is the position of the particle when velocity is zero?',
      options: ['4', '2', '0', '-4'],
      answer: 2,
      explanation: '$v = dx/dt = 2t - 4$.\n\n$v = 0$ at $t = 2\\text{s}$.\n\nAt $t = 2\\text{s}$, $x = (2)^2 - 4(2) + 4 = 4 - 8 + 4 = 0$.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-23',
      question: 'Find d/dt (sin² t).',
      options: ['2 sin t', 'cos² t', '2 sin t cos t', 'sin 2t'],
      answer: 2,
      explanation: '$d/dt(\\sin^2 t) = 2 \\sin t \\times d/dt(\\sin t) = 2 \\sin t \\cos t$.\n\nThis is also equal to $\\sin(2t)$.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-24',
      question: 'If power P = dW/dt, and work W = Fx where F is constant force, then P equals:',
      options: ['F * dx/dt', 'F * v', 'Both A and B', 'Work / Time'],
      answer: 2,
      explanation: 'P = d(Fx)/dt = F * dx/dt. Since dx/dt = v, P = Fv.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-25',
      question: 'The derivative of log₁₀(x) is:',
      options: ['1/x', '1 / (x ln 10)', 'ln(10) / x', 'log₁₀(e)'],
      answer: 1,
      explanation: 'Using the change of base formula: log₁₀(x) = ln(x) / ln(10). Derivative is (1/ln 10) * (1/x).',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-26',
      question: 'If x = 5t + 10t², find deceleration if any.',
      options: ['-20', '0', '10', '20'],
      answer: 1,
      explanation: '$v = 5 + 20t$.\n\n$a = dv/dt = 20$.\n\nAcceleration is constant 20, so deceleration is 0.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-27',
      question: 'Find d/dx (x * eˣ).',
      options: ['eˣ', 'xeˣ', 'eˣ(x+1)', 'eˣ(x-1)'],
      answer: 2,
      explanation: 'Product rule: $d/dx(uv) = u\'v + uv\'$.\n\nSo $d/dx(x \\times e^x) = 1 \\times e^x + x \\times e^x = e^x(x+1)$.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-28',
      question: 'What is the second derivative of position x with respect to time?',
      options: ['Velocity', 'Speed', 'Acceleration', 'Jerk'],
      answer: 2,
      explanation: 'First derivative dx/dt is velocity. Second derivative d²x/dt² is acceleration.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-29',
      question: 'If y = xⁿ, then nth derivative dⁿy/dxⁿ is:',
      options: ['n!', '0', 'n', '1'],
      answer: 0,
      explanation: 'Each derivative reduces the power by 1. After n derivatives, xⁿ becomes n * (n-1) * ... * 1 * x⁰ = n!.',
      difficulty: 'easy'
    },
    {
      id: 'diff-p-30',
      question: 'If resistance R = V/I and I varies with time while V is constant, dR/dt is:',
      options: ['V / (dI/dt)', '-V/I² * (dI/dt)', '0', '1/I * dV/dt'],
      answer: 1,
      explanation: 'Using quotient rule or power rule for R = V * I⁻¹: dR/dt = V * (-1 * I⁻²) * dI/dt = -V/I² * (dI/dt).',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
