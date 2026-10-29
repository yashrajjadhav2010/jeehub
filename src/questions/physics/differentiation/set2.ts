import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set2',
  title: 'Basic Math: Differentiation - Set 2 (Moderate)',
  chapterId: 'differentiation',
  subjectId: 'physics',
  difficulty: 'medium',
  questions: [
    {
      id: 'diff-p-mod-1',
      question: 'The position of a particle is given by $x = t^3 - 6t^2 + 9t + 5$ meters. At what time is the velocity of the particle zero?',
      options: ['1s and 3s', '2s and 4s', '3s only', '1s only'],
      answer: 0,
      explanation: 'Velocity is the derivative of position: $v = dx/dt = 3t^2 - 12t + 9$.\n\nSetting $v = 0$: $3t^2 - 12t + 9 = 0 \\implies t^2 - 4t + 3 = 0$.\n\nFactorizing: $(t-1)(t-3) = 0$. So $t = 1\\text{s}$ and $t = 3\\text{s}$.',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-2',
      question: 'A particle moves along a straight line such that its velocity $v = k\\sqrt{x}$, where $k$ is a constant and $x$ is displacement. The acceleration of the particle is:',
      options: ['Proportional to $x$', 'Zero', 'Constant', 'Proportional to $\\sqrt{x}$'],
      answer: 2,
      explanation: 'Acceleration $a = v(dv/dx)$.\n\nGiven $v = kx^{1/2}$, then $dv/dx = (k/2)x^{-1/2} = k/(2\\sqrt{x})$.\n\nSo $a = (k\\sqrt{x}) \\times (k/(2\\sqrt{x})) = k^2/2$.\n\nSince $k$ is constant, $a$ is constant.',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-3',
      question: 'The momentum $p$ of an object varies with time $t$ as $p = 4t^2 - 3t + 2$. The force acting on the object at $t = 2\\text{s}$ is:',
      options: ['13 N', '16 N', '10 N', '8 N'],
      answer: 0,
      explanation: 'Force is the rate of change of momentum: $F = dp/dt = d/dt(4t^2 - 3t + 2) = 8t - 3$.\n\nAt $t = 2\\text{s}$, $F = 8(2) - 3 = 13\\text{ }\\text{N}$.',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-4',
      question: 'The radius of a spherical balloon is increasing at a rate of $2\\text{ cm/s}$. At what rate is its volume increasing when the radius is $5\\text{ cm}$?',
      options: ['100π cm³/s', '200π cm³/s', '50π cm³/s', '150π cm³/s'],
      answer: 1,
      explanation: 'Volume $V = (4/3)\\pi r^3$. Rate of change $dV/dt = 4\\pi r^2 (dr/dt)$.\n\nGiven $dr/dt = 2\\text{ cm/s}$ and $r = 5\\text{ cm}$:\n\n$dV/dt = 4\\pi(5^2)(2) = 200\\pi \\text{ cm}^3/\\text{s}.$',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-5',
      question: "A particle's kinetic energy $K$ varies with time $t$ as $K = \\alpha t^3$. The power delivered to the particle varies with time as:",
      options: ['$t^3$', '$t^2$', '$t$', 'Constant'],
      answer: 1,
      explanation: 'Power $P = dW/dt = dK/dt$.\n\n$P = d/dt(\\alpha t^3) = 3\\alpha t^2$.\n\nSo $P \\propto t^2$.',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-6',
      question: 'The height of a projectile is given by $y = 20t - 5t^2$ meters. The maximum height reached by the projectile is:',
      options: ['20 m', '10 m', '15 m', '25 m'],
      answer: 0,
      explanation: 'Maximum height occur when vertical velocity $dy/dt = 0$.\n\n$dy/dt = 20 - 10t = 0 \\implies t = 2\\text{s}.$\n\nAt $t=2$, $y = 20(2) - 5(2^2) = 40 - 20 = 20\\text{ m}.$',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-7',
      question: 'The electric charge $q$ flowing through a circuit is given by $q(t) = 3\\sin(2t)$ Coulombs. The maximum current in the circuit is:',
      options: ['3 A', '6 A', '1.5 A', '2 A'],
      answer: 1,
      explanation: 'Current $I = dq/dt = d/dt(3\\sin(2t)) = 6\\cos(2t)$.\n\nThe maximum value of $I$ is $6\\text{ A}$ (when $\\cos(2t) = 1$).',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-8',
      question: "A particle's velocity is given by $v(x) = c/x$, where $c$ is a positive constant. Its acceleration is proportional to:",
      options: ['$x^{-2}$', '$x^{-3}$', '$x^{-1}$', '$x^2$'],
      answer: 1,
      explanation: 'Acceleration $a = v(dv/dx)$.\n\n$dv/dx = -c/x^2$. So $a = (c/x) \\times (-c/x^2) = -c^2/x^3$.\n\nThus $a \\propto x^{-3}$.',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-9',
      question: 'Magnetic flux $\\Phi$ through a coil changes as $\\Phi = 5t^2 - 4t + 1$ Wb. The magnitude of induced EMF at $t = 1\\text{s}$ is:',
      options: ['10 V', '6 V', '4 V', '2 V'],
      answer: 1,
      explanation: 'Magnitude of induced EMF $|\\mathcal{E}| = |d\\Phi/dt|$.\n\n$d\\Phi/dt = 10t - 4$. At $t=1$, $d\\Phi/dt = 6\\text{ V}.$',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-10',
      question: 'A shadow of a $2\\text{m}$ tall man walking away from a $6\\text{m}$ lamppost at $1\\text{ m/s}$ lengthens at a rate of:',
      options: ['0.5 m/s', '1 m/s', '1.5 m/s', '2 m/s'],
      answer: 0,
      explanation: 'Let $x$ be distance of man from pole and $s$ be length of shadow. By similar triangles:\n\n$s/2 = (x+s)/6 \\implies 6s = 2x + 2s \\implies 4s = 2x \\implies s = 0.5x$.\n\nDifferentiating wrt time: $ds/dt = 0.5(dx/dt)$. Since $dx/dt = 1$, $ds/dt = 0.5\\text{ m/s}.$',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-11',
      question: "The angular position of a rotating wheel is $\\theta(t) = 2t^3 - t^2$. Its angular acceleration at $t = 2\\text{ s}$ is:",
      options: ['20 rad/s²', '22 rad/s²', '24 rad/s²', '18 rad/s²'],
      answer: 1,
      explanation: '$\\\\omega = d\\\\theta/dt = 6t^2 - 2t$.\\\\n\\\\n$\\\\alpha = d\\\\omega/dt = 12t - 2$.\\\\n\\\\nAt $t=2$, $\\\\alpha = 12(2) - 2 = 22\\\\text{ rad/s}^2$.',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-12',
      question: 'A car\'s position is $x = A\\sin(\\omega t)$. The magnitude of its acceleration is maximum when its velocity is:',
      options: ['Maximum', 'Zero', '$A\\omega/\\sqrt{2}$', '$A\\omega$'],
      answer: 1,
      explanation: '$v = dx/dt = A\\omega\\cos(\omega t)$.\n\n$a = dv/dt = -A\\omega^2\\sin(\omega t)$.\n\n$|a|$ is max when $\\sin(\omega t) = \\pm 1$. In that case, $\\cos(\\omega t) = 0$, so $v = 0$.',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-13',
      question: 'The work done by a force is $W = 4x^3 - 2x$. The force applied at $x=2\\text{ m}$ is:',
      options: ['46 N', '24 N', '48 N', '22 N'],
      answer: 0,
      explanation: '$F = dW/dx = 12x^2 - 2$.\n\nAt $x=2$, $F = 12(4) - 2 = 46\\text{ N}$.',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-14',
      question: 'A particle\'s acceleration $a$ varies with time as $a = 6t$. If it starts from rest, the distance traveled in $2\\text{ s}$ is:',
      options: ['8 m', '12 m', '16 m', '4 m'],
      answer: 0,
      explanation: '$v = \\int a \\, dt = 3t^2 + C$. At $t=0, v=0 \\implies C=0$.\n\n$x = \\int v \\, dt = t^3 + C\'$. At $t=0, x=0 \\implies C\'=0$.\n\nAt $t=2$, $x = 8\\text{ m}$.',
      difficulty: 'medium'
    },
    {
      id: 'diff-p-mod-15',
      question: 'The volume of a melting ice cube (assuming it stays cubic) decreases at a constant rate of $6\\text{ cm}^3/\\text{min}$. The rate of change of its side length when the side is $2\\text{ cm}$ is:',
      options: ['-0.5 cm/min', '-1 cm/min', '-1.5 cm/min', '-2 cm/min'],
      answer: 0,
      explanation: '$V = s^3 \\implies dV/dt = 3s^2(ds/dt)$.\n\n$-6 = 3(2^2)(ds/dt) = 12(ds/dt) \\implies ds/dt = -0.5\\text{ cm/min}.$',
      difficulty: 'medium'
    }
  ]
};

export default quizSet;
