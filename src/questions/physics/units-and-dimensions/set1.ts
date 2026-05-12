import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set1',
  title: 'Units and Dimensions - Set 1',
  chapterId: 'units-and-dimensions',
  subjectId: 'physics',
  questions: [
    {
      id: 'ud-s1-1',
      question: 'Which of the following is not a fundamental physical quantity in SI system?',
      options: ['Length', 'Time', 'Mass', 'Density'],
      answer: 3,
      explanation: '**Derivation:**\nFundamental quantities are those that cannot be defined in terms of other physical quantities. In the SI system, there are 7 base units: Length (meter), Mass (kilogram), Time (second), Electric Current (ampere), Thermodynamic Temperature (kelvin), Amount of Substance (mole), and Luminous Intensity (candela). Density is a derived quantity, calculated as:\n\n$$\\text{Density} = \\frac{\\text{Mass}}{\\text{Volume}}$$',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-2',
      question: 'The dimensional formula of Surface Tension is:',
      options: ['$[MT^{-2}]$', '$[MLT^{-2}]$', '$[ML^{-1}T^{-2}]$', '$[MT^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nSurface Tension ($T$) is defined as the force acting per unit length of an imaginary line drawn on the surface of a liquid.\n\nFormula: $T = \\frac{\\text{Force}}{\\text{Length}}$\n\nDimensions of Force $[F] = [MLT^{-2}]$\nDimensions of Length $[L] = [L]$\n\nCalculation: $[T] = \\frac{[MLT^{-2}]}{[L]} = [MT^{-2}]$.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-3',
      question: 'What are the dimensions of Planck\'s constant?',
      options: ['$[ML^2T^{-1}]$', '$[MLT^{-1}]$', '$[ML^2T^{-2}]$', '$[MLT^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nPlanck\'s constant ($h$) relates the energy of a photon to its frequency.\n\nFormula: $E = h\\nu \\implies h = \\frac{E}{\\nu}$\n\nFrequency $\\nu = \\frac{1}{\\text{Time}}$, so $[\\nu] = [T^{-1}]$\nEnergy $[E] = [ML^2T^{-2}]$\n\nCalculation: $[h] = \\frac{[ML^2T^{-2}]}{[T^{-1}]} = [ML^2T^{-1}]$.\n\n*Note: This matches the dimensions of Angular Momentum ($L = mvr$).*',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-4',
      question: 'Which of the following pairs have the same dimensions?',
      options: ['Force and Power', 'Torque and Work', 'Momentum and Energy', 'Pressure and Force'],
      answer: 1,
      explanation: '**Derivation:**\n\n- **Torque** = Force $\\times$ perpendicular distance = $[MLT^{-2}] \\times [L] = [ML^2T^{-2}]$\n- **Work** = Force $\\times$ displacement = $[MLT^{-2}] \\times [L] = [ML^2T^{-2}]$\n\nThus, Torque and Work share identical dimensions. Other pairs like Force $[MLT^{-2}]$ and Power $[ML^2T^{-3}]$ do not.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-5',
      question: 'The dimensions of Universal Gravitational Constant ($G$) are:',
      options: ['$[M^{-1}L^3T^{-2}]$', '$[ML^3T^{-2}]$', '$[M^{-1}L^3T^{-1}]$', '$[ML^2T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nAccording to Newton\'s law of gravitation, $F = G \\frac{m_1 m_2}{r^2}$.\n\nRearranging for $G$: $G = \\frac{F r^2}{m_1 m_2}$\n\nDimensions of Force $[F] = [MLT^{-2}]$, Distance $[r] = [L]$, and Mass $[m] = [M]$.\n\nCalculation: $[G] = \\frac{[MLT^{-2}] [L^2]}{[M^2]} = [M^{-1}L^3T^{-2}]$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-6',
      question: 'A student measures the length of a rod as 3.50 cm. The precision of the measurement is:',
      options: ['1 cm', '0.1 cm', '0.01 cm', '0.001 cm'],
      answer: 2,
      explanation: '**Derivation:**\nThe precision of a measurement is determined by the last significant decimal place. Since the measurement is recorded as 3.50 cm (with two decimal places), the instrument used must have a resolution or smallest division of 0.01 cm (100 divisions per cm).',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-7',
      question: 'How many significant figures are in 0.007 m²?',
      options: ['1', '2', '3', '4'],
      answer: 0,
      explanation: '**Derivation:**\nSignificant figure rules state that leading zeros (zeros to the left of the first non-zero digit) are not significant. They only serve to indicate the position of the decimal point. In 0.007, only the digit 7 is significant, resulting in one significant figure.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-8',
      question: 'The error in the measurement of the radius of a sphere is 2%. The error in the measurement of its volume will be:',
      options: ['2%', '4%', '6%', '8%'],
      answer: 2,
      explanation: '**Derivation:**\nThe volume of a sphere is given by $V = \\frac{4}{3}\\pi r^3$. According to error propagation rules for powers, the relative error in $V$ is triple the relative error in $r$.\n\nCalculation: $\\frac{\\Delta V}{V} = 3 \\times \\frac{\\Delta r}{r} = 3 \\times 2\\% = 6\\%$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-9',
      question: 'Which of the following is a dimensionless quantity?',
      options: ['Strain', 'Stress', 'Specific Heat', 'Surface Tension'],
      answer: 0,
      explanation: '**Derivation:**\n\n- **Stress** = Force / Area = $[ML^{-1}T^{-2}]$\n- **Specific Heat** = Heat / (Mass $\\times$ Temp) = $[L^2T^{-2}K^{-1}]$\n- **Surface Tension** = Force / Length = $[MT^{-2}]$\n\n**Strain** is defined as $\\frac{\\text{Change in length}}{\\text{Original length}} = \\frac{[L]}{[L]} = [1]$, making it dimensionless.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-10',
      question: 'The dimensional formula for coefficient of viscosity ($\\eta$) is:',
      options: ['$[ML^{-1}T^{-1}]$', '$[MLT^{-1}]$', '$[ML^{-2}T^{-2}]$', '$[ML^{-1}T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nAccording to Stokes\' Law, viscous force $F = 6\\pi\\eta rv$. \n\nRearranging: $\\eta = \\frac{F}{6\\pi rv}$.\n\nDimensions of Force $[F] = [MLT^{-2}]$, radius $[r] = [L]$, and velocity $[v] = [LT^{-1}]$.\n\nCalculation: $[\\eta] = \\frac{[MLT^{-2}]}{[L] [LT^{-1}]} = [ML^{-1}T^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s1-11',
      question: 'The dimensions of $1 / (\\mu_0 \\epsilon_0)$ are same as that of:',
      options: ['Velocity', 'Acceleration', 'Velocity squared', 'Force'],
      answer: 2,
      explanation: '**Derivation:**\nIn electromagnetic theory, the speed of light in vacuum ($c$) is given by $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$.\n\nSquaring both sides gives $c^2 = \\frac{1}{\\mu_0 \\epsilon_0}$.\n\nSince $c$ is velocity $[LT^{-1}]$, $c^2$ is velocity squared $[L^2 T^{-2}]$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-12',
      question: 'If force ($F$), length ($L$) and time ($T$) are fundamental units, what are the dimensions of mass?',
      options: ['$[FL^{-1}T^2]$', '$[FLT^{-2}]$', '$[FL^{-1}T^{-2}]$', '$[FLT^2]$'],
      answer: 0,
      explanation: '**Derivation:**\nFrom Newton\'s second law, Force = Mass $\\times$ Acceleration.\n\nAcceleration = $\\frac{\\text{Length}}{\\text{Time}^2} = [LT^{-2}]$.\n\nSo $F = M [LT^{-2}]$. Rearranging for $M$: $M = \\frac{F}{[LT^{-2}]} = [FL^{-1}T^2]$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-13',
      question: 'The number of significant figures in 120.00 is:',
      options: ['2', '3', '5', '4'],
      answer: 2,
      explanation: '**Derivation:**\nTrailing zeros in a number containing a decimal point are significant. In 120.00, both zeros after the decimal point and the zero after the digits 1 and 2 are significant. Thus, 1, 2, 0, 0, 0 totals 5 significant figures.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-14',
      question: 'Dimensional formula of electric potential is:',
      options: ['$[ML^2T^{-3}A^{-1}]$', '$[ML^2T^{-2}A^{-1}]$', '$[MLT^{-3}A^{-1}]$', '$[ML^2T^{-3}A^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nElectric potential ($V$) is defined as Work done per unit Charge.\n\nFormula: $V = \\frac{W}{q}$\n\nCharge $q = \\text{Current} \\times \\text{Time} = [AT]$.\nDimensions of Work $[W] = [ML^2T^{-2}]$.\n\nCalculation: $[V] = \\frac{[ML^2T^{-2}]}{[AT]} = [ML^2T^{-3}A^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s1-15',
      question: 'The physical quantity having dimensions $[ML^2T^{-3}]$ is:',
      options: ['Work', 'Power', 'Pressure', 'Impulse'],
      answer: 1,
      explanation: '**Derivation:**\n\n- **Work** $[W] = [ML^2T^{-2}]$\n- **Pressure** $[P] = [ML^{-1}T^{-2}]$\n- **Impulse** $[I] = [MLT^{-1}]$\n\n**Power** is the rate of doing work: $P = \\frac{\\text{Work}}{\\text{Time}} = \\frac{[ML^2T^{-2}]}{[T]} = [ML^2T^{-3}]$.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-16',
      question: 'Frequency has the same dimensions as:',
      options: ['Velocity gradient', 'Linear momentum', 'Energy', 'Potential gradient'],
      answer: 0,
      explanation: '**Derivation:**\nFrequency ($f$) = $1 / \\text{Time Period} = [T^{-1}]$.\n\n**Velocity gradient** is defined as $\\frac{\\text{Change in velocity}}{\\text{unit distance}} = \\frac{dv}{dx}$.\n\nDimensions: $\\frac{[LT^{-1}]}{[L]} = [T^{-1}]$.\n\nThus, they share identical dimensions.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-17',
      question: 'In the equation $v = at + b$, if $v$ is velocity and $t$ is time, the dimensions of $a$ and $b$ are:',
      options: ['$[LT^{-2}], [LT^{-1}]$', '$[L], [LT^{-1}]$', '$[LT^{-2}], [L]$', '$[L], [T]$'],
      answer: 0,
      explanation: '**Derivation:**\nBy the Principle of Homogeneity, each term in an equation must have the same dimension as the LHS.\n\nSince $[v] = [LT^{-1}]$, then $[at] = [LT^{-1}]$ and $[b] = [LT^{-1}]$.\n\nSolving for $a$: $[a] = \\frac{[LT^{-1}]}{[T]} = [LT^{-2}]$ (Acceleration).',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-18',
      question: 'What is the least count of a Vernier caliper if 10 divisions of the Vernier scale coincide with 9 divisions of the main scale (1 MSD = 1 mm)?',
      options: ['0.1 mm', '0.01 mm', '1 mm', '0.5 mm'],
      answer: 0,
      explanation: '**Derivation:**\nLeast Count (LC) = 1 MSD - 1 VSD.\n\nGiven 10 VSD = 9 MSD, thus 1 VSD = 0.9 MSD.\nLC = 1 mm - 0.9 mm = 0.1 mm.\n\nAlternatively, LC = $\\frac{1 \\text{ MSD}}{\\text{Number of VSD}} = \\frac{1 \\text{ mm}}{10} = 0.1 \\text{ mm}$.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-19',
      question: 'The dimensions of permittivity of free space ($\\epsilon_0$) are:',
      options: ['$[M^{-1}L^{-3}T^4A^2]$', '$[ML^3T^{-4}A^{-2}]$', '$[ML^{-3}T^4A^2]$', '$[M^{-1}L^3T^{-4}A^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nFrom Coulomb\'s law, $F = k \\frac{q_1 q_2}{r^2} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r^2}$.\n\nRearranging for $\\epsilon_0$: $\\epsilon_0 = \\frac{q^2}{4\\pi F r^2}$\n\nDimensions of charge $[q] = [AT]$, Force $[F] = [MLT^{-2}]$, distance $[r] = [L]$.\n\nCalculation: $[\\epsilon_0] = \\frac{[A^2T^2]}{[MLT^{-2}] [L^2]} = [M^{-1}L^{-3}T^4A^2]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s1-20',
      question: 'Dimensional formula of pressure is same as that of:',
      options: ['Stress', 'Strain', 'Momentum', 'Force'],
      answer: 0,
      explanation: '**Derivation:**\nPressure = $\\frac{\\text{Force}}{\\text{Area}} = \\frac{[MLT^{-2}]}{[L^2]} = [ML^{-1}T^{-2}]$.\n\n**Stress** is also defined as Force / Area acting on a body, so its dimensions are also $[ML^{-1}T^{-2}]$. Strain is dimensionless.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-21',
      question: 'Which of the following is the unit of impulse?',
      options: ['N-s', 'N/s', 'N-m', 'N/m'],
      answer: 0,
      explanation: '**Derivation:**\nImpulse is the product of a large force acting for a very short time.\n\nFormula: $\\text{Impulse} = \\text{Force} \\times \\text{Time}$\n\nThe SI unit for Force is Newton (N) and for Time is second (s), giving N-s. In base units, it is kg m/s.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-22',
      question: 'Light year is a unit of:',
      options: ['Time', 'Distance', 'Intensity of light', 'Mass'],
      answer: 1,
      explanation: '**Derivation:**\nA light year is the astronomical distance that light travels in a vacuum in one Julian year (365.25 days). It is a unit of distance, not time.\n\n1 light year $\\approx 9.46 \\times 10^{15}$ meters.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-23',
      question: 'The dimensions of Boltzmann constant ($k_B$) are:',
      options: ['$[ML^2T^{-2}K^{-1}]$', '$[ML^2T^{-1}K^{-1}]$', '$[MLT^{-2}K^{-1}]$', '$[ML^2T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nKinetic energy of a gas molecule is $E = \\frac{3}{2} k_B T$.\n\nRearranging for $k_B$: $k_B = \\frac{E}{T}$\n\nDimensions of Energy $[E] = [ML^2T^{-2}]$ and Temperature $[T] = [K]$.\n\nCalculation: $[k_B] = \\frac{[ML^2T^{-2}]}{[K]} = [ML^2T^{-2}K^{-1}]$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-24',
      question: 'What is the dimension of self-inductance?',
      options: ['$[ML^2T^{-2}A^{-2}]$', '$[ML^2T^{-1}A^{-2}]$', '$[MLT^{-2}A^{-2}]$', '$[ML^2T^{-2}A^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nEnergy stored in an inductor is $U = \\frac{1}{2} L I^2$.\n\nRearranging for $L$: $L = \\frac{2U}{I^2}$\n\nDimensions of Energy $[U] = [ML^2T^{-2}]$ and Current $[I] = [A]$.\n\nCalculation: $[L] = \\frac{[ML^2T^{-2}]}{[A^2]} = [ML^2T^{-2}A^{-2}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s1-25',
      question: 'If the error in measurement of mass of a cube is 3% and error in its side is 2%, the error in its density will be:',
      options: ['5%', '7%', '9%', '11%'],
      answer: 2,
      explanation: '**Derivation:**\nDensity $\\rho = \\frac{\\text{Mass}}{\\text{Volume}} = \\frac{M}{L^3}$. \n\nThe percentage error in density is given by the sum of percentage error in mass and thrice the percentage error in side length.\n\nCalculation: $\\frac{\\Delta \\rho}{\\rho} = \\frac{\\Delta M}{M} + 3 \\cdot \\frac{\\Delta L}{L} = 3\\% + 3(2\\%) = 9\\%$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-26',
      question: 'Which of the following has dimensions $[ML^{-1}T^{-2}]$?',
      options: ['Modulus of elasticity', 'Surface Tension', 'Viscosity', 'Angular Momentum'],
      answer: 0,
      explanation: '**Derivation:**\n**Modulus of elasticity** = $\\frac{\\text{Stress}}{\\text{Strain}}$. \n\nSince Strain is dimensionless, the dimension of Modulus equals that of Stress:\n\n$$\\text{Stress} = \\frac{\\text{Force}}{\\text{Area}} = \\frac{[MLT^{-2}]}{[L^2]} = [ML^{-1}T^{-2}]$$\n\nSurface Tension is $[MT^{-2}]$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-27',
      question: 'The dimensions of solar constant are:',
      options: ['$[MT^{-3}]$', '$[MLT^{-3}]$', '$[ML^2T^{-3}]$', '$[M^2T^{-3}]$'],
      answer: 0,
      explanation: '**Derivation:**\nSolar constant is defined as the amount of solar energy received per unit area per unit time.\n\nFormula: $S = \\frac{\\text{Energy}}{\\text{Area} \\times \\text{Time}}$\n\nDimensions: $\\frac{[ML^2T^{-2}]}{[L^2] [T]} = [MT^{-3}]$. \n\n*Note: It represents power per unit area.*',
      difficulty: 'hard'
    },
    {
      id: 'ud-s1-28',
      question: 'A screw gauge has pitch 0.5 mm and 50 divisions on its circular scale. The least count is:',
      options: ['0.01 mm', '0.001 mm', '0.05 mm', '0.1 mm'],
      answer: 0,
      explanation: '**Derivation:**\nThe least count of a screw gauge is the ratio of its pitch to the total number of divisions on the circular scale.\n\nCalculation: LC = $\\frac{0.5 \\text{ mm}}{50} = 0.01 \\text{ mm}$.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-29',
      question: 'Dimensional formula for thermal conductivity is:',
      options: ['$[MLT^{-3}K^{-1}]$', '$[ML^2T^{-3}K^{-1}]$', '$[MLT^{-2}K^{-1}]$', '$[ML^2T^{-2}K^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nRate of heat flow $\\frac{Q}{t} = kA \\frac{dT}{dx}$.\n\nRearranging for $k$: $k = \\frac{(Q/t) \\cdot dx}{A \\cdot dT}$\n\nDimensions: $[ML^2T^{-3}] \\cdot \\frac{[L]}{[L^2][K]} = [MLT^{-3}K^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s1-30',
      question: 'Parsec is the unit of:',
      options: ['Time', 'Frequency', 'Distance', 'Angular acceleration'],
      answer: 2,
      explanation: '**Derivation:**\nA parsec (parallax second) is a unit of distance used in astronomy. It is defined as the distance at which an object has a parallax of one arcsecond when viewed from Earth\'s orbit.\n\n1 parsec $\\approx 3.08 \\times 10^{16}$ meters.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-31',
      question: 'The dimensions of impulse are same as that of:',
      options: ['Momentum', 'Force', 'Energy', 'Acceleration'],
      answer: 0,
      explanation: '**Derivation:**\nImpulse is defined as the change in linear momentum: $J = \\Delta p$.\n\nDimensions of Momentum $[p] = mv = [MLT^{-1}]$.\n\nImpulse = Force $\\times$ Time = $[MLT^{-2}] \\times [T] = [MLT^{-1}]$.\n\nThus, they are dimensionally identical.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-32',
      question: 'Dimension of $\\sqrt{LC}$ is same as that of:',
      options: ['Frequency', 'Time', 'Velocity', 'Acceleration'],
      answer: 1,
      explanation: '**Derivation:**\nIn an LC oscillating circuit, the time period is given by $T = 2\\pi \\sqrt{LC}$. \n\nSince $2\\pi$ is dimensionless, the quantity $\\sqrt{LC}$ must have the same dimension as time $[T]$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-33',
      question: 'How many significant figures are in 1.0070?',
      options: ['3', '4', '5', '2'],
      answer: 2,
      explanation: '**Derivation:**\nRules for significant figures: \n1. Non-zero digits are significant.\n2. Zeros between non-zero digits (captured zeros) are significant.\n3. Trailing zeros after a decimal point are significant. \n\nThus, 1, 0, 0, 7, and 0 are all significant, totaling 5.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-34',
      question: 'The error in measurement of area of a square is 4%. What is the error in measurement of its side?',
      options: ['2%', '4%', '8%', '16%'],
      answer: 0,
      explanation: '**Derivation:**\nArea $A = s^2$. Relational error formula: $\\frac{\\Delta A}{A} = 2 \\times \\frac{\\Delta s}{s}$. \n\nGiven $\\frac{\\Delta A}{A} = 4\\%$, then $4\\% = 2 \\times \\frac{\\Delta s}{s} \\implies \\frac{\\Delta s}{s} = 2\\%$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-35',
      question: 'Dimensional formula for magnetic flux is:',
      options: ['$[ML^2T^{-2}A^{-1}]$', '$[MLT^{-2}A^{-1}]$', '$[ML^2T^{-1}A^{-1}]$', '$[ML^2T^{-3}A^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nMagnetic flux $\\Phi = B \\times \\text{Area}$. \n\nFrom magnetic force $F = qvB$, we have $B = \\frac{F}{qv}$. So $\\Phi = \\frac{F \\cdot \\text{Area}}{qv}$.\n\nDimensions: $\\frac{[MLT^{-2}] [L^2]}{[AT] [LT^{-1}]} = [ML^2T^{-2}A^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s1-36',
      question: 'In SI system, the unit of radioactivity is:',
      options: ['Curie', 'Rutherford', 'Becquerel', 'Roentgen'],
      answer: 2,
      explanation: '**Derivation:**\nThe SI base unit for radioactivity is the Becquerel (Bq). It is defined as one nuclear disintegration per second. Curie and Rutherford are non-SI units.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-37',
      question: 'Which of the following is not a unit of time?',
      options: ['Microsecond', 'Leap year', 'Light year', 'Lunar month'],
      answer: 2,
      explanation: '**Derivation:**\nA light year is the distance light travels in one year. Therefore, it is a unit of length (distance), not time.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-38',
      question: 'The dimensions of Stefan-Boltzmann constant ($\\sigma$) are:',
      options: ['$[MT^{-3}K^{-4}]$', '$[ML^2T^{-3}K^{-4}]$', '$[MT^{-2}K^{-4}]$', '$[ML^2T^{-3}K^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nAccording to Stefan\'s law, Power $P = \\sigma A T^4$.\n\nRearranging for $\\sigma$: $\\sigma = \\frac{P}{A T^4}$\n\nDimensions: Power $[P] = [ML^2T^{-3}]$, Area $[A] = [L^2]$, Temperature $[T] = [K]$.\n\nCalculation: $[\\sigma] = \\frac{[ML^2T^{-3}]}{[L^2][K^4]} = [MT^{-3}K^{-4}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s1-39',
      question: 'Magnetic permeability ($\\mu$) has dimensions:',
      options: ['$[MLT^{-2}A^{-2}]$', '$[ML^2T^{-2}A^{-2}]$', '$[MLT^{-1}A^{-2}]$', '$[ML^2T^{-1}A^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nUsing the formula for magnetic force between two current-carrying wires: $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi r}$.\n\nRearranging: $\\mu_0 = \\frac{F \\cdot r}{L \\cdot I^2}$\n\nDimensions: $\\frac{[MLT^{-2}] [L]}{[L] [A^2]} = [MLT^{-2}A^{-2}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s1-40',
      question: 'What is the dimension of resistance in terms of fundamental SI units?',
      options: ['$[ML^2T^{-3}A^{-2}]$', '$[ML^2T^{-2}A^{-2}]$', '$[MLT^{-3}A^{-2}]$', '$[ML^2T^{-3}A^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nResistance $R = \\frac{V}{I}$. Potential $V = \\frac{\\text{Work}}{\\text{Charge}} = \\frac{[ML^2T^{-2}]}{[AT]} = [ML^2T^{-3}A^{-1}]$.\n\nCalculation: $[R] = \\frac{[ML^2T^{-3}A^{-1}]}{[A]} = [ML^2T^{-3}A^{-2}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s1-41',
      question: 'Dimensional formula for torque is:',
      options: ['$[ML^2T^{-2}]$', '$[MLT^{-2}]$', '$[ML^2T^{-1}]$', '$[MLT^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nTorque is the rotational analogue of force. It is the product of force and its perpendicular distance from the axis of rotation.\n\nFormula: $\\text{Torque} = \\text{Force} \\times r$\n\nDimensions: $[MLT^{-2}] \\times [L] = [ML^2T^{-2}]$. \n\n*Note: Same as work and energy.*',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-42',
      question: 'The dimensions of universal gas constant ($R$) are:',
      options: ['$[ML^2T^{-2}K^{-1}mol^{-1}]$', '$[ML^2T^{-1}K^{-1}mol^{-1}]$', '$[MLT^{-2}K^{-1}mol^{-1}]$', '$[ML^2T^{-3}K^{-1}mol^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nFrom the ideal gas law, $PV = nRT$.\n\nRearranging for $R$: $R = \\frac{PV}{nT}$\n\nDimensions of Pressure $[P] = [ML^{-1}T^{-2}]$, Volume $[V] = [L^3]$, amount of substance $[n] = [mol]$, and temp $[T] = [K]$.\n\nCalculation: $[R] = \\frac{[ML^{-1}T^{-2}] [L^3]}{[mol] [K]} = [ML^2T^{-2}K^{-1}mol^{-1}]$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-43',
      question: 'A physical quantity is defined as $X = a^2 b^3 / c^4$. The percentage error in $a, b, c$ are 2%, 1%, 3% respectively. The percentage error in $X$ is:',
      options: ['19%', '7%', '13%', '15%'],
      answer: 0,
      explanation: '**Derivation:**\nThe relative error in a product/quotient is the sum of the relative errors of its factors, weighted by their powers.\n\nCalculation: $\\% \\text{ error in } X = 2(2\\%) + 3(1\\%) + 4(3\\%) = 4\\% + 3\\% + 12\\% = 19\\%$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-44',
      question: 'Which of the following is correct SI unit for luminous intensity?',
      options: ['Mole', 'Candela', 'Kelvin', 'Ampere'],
      answer: 1,
      explanation: '**Derivation:**\nThe SI base unit for luminous intensity is the Candela (cd). Mole is for substance amount, Kelvin for temperature, and Ampere for electric current.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-45',
      question: 'Dimensional formula for entropy is same as that of:',
      options: ['Thermal capacity', 'Specific heat', 'Latent heat', 'Gas constant'],
      answer: 0,
      explanation: '**Derivation:**\nEntropy change $\\Delta S = \\frac{\\Delta Q}{T}$. \n\nDimensions: $\\frac{[ML^2T^{-2}]}{[K]} = [ML^2T^{-2}K^{-1}]$.\n\n**Thermal capacity** is the heat energy required to raise the temperature of a given mass of substance by 1K.\n\nDimensions: $\\frac{\\text{Heat}}{\\text{Temp}} = \\frac{[ML^2T^{-2}]}{[K]}$. \n\nThus, they have identical dimensions. Specific heat is $[L^2T^{-2}K^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s1-46',
      question: 'What are the dimensions of $E/B$ in an electromagnetic wave?',
      options: ['$[LT^{-1}]$', '$[L^{-1}T]$', '$[LT^{-2}]$', '$[L^2T^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nIn an electromagnetic wave, the ratio of the magnitudes of the electric field ($E$) to the magnetic field ($B$) is equal to the speed of light in the medium ($c$). \n\nSpeed is distance per time, so its dimension is $[LT^{-1}]$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-47',
      question: 'Which of the following represents the correct unit of pressure?',
      options: ['Pa', 'N/m', 'N-m', 'N/m³'],
      answer: 0,
      explanation: '**Derivation:**\nPressure is defined as force per unit area. \n\nBase unit: Newton per square meter (N/m²). This derived unit is named the Pascal (Pa) in the SI system.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-48',
      question: 'The dimensions of specific heat are:',
      options: ['$[L^2T^{-2}K^{-1}]$', '$[ML^2T^{-2}K^{-1}]$', '$[MLT^{-2}K^{-1}]$', '$[L^2T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nSpecific heat capacity ($c$) is defined as the heat energy required to raise the temperature of unit mass of substance by 1K.\n\nFormula: $Q = mc \\Delta T \\implies c = \\frac{Q}{m \\Delta T}$\n\nDimensions: $\\frac{[ML^2T^{-2}]}{[M] [K]} = [L^2T^{-2}K^{-1}]$.',
      difficulty: 'medium'
    },
    {
      id: 'ud-s1-49',
      question: 'Solid angle is measured in:',
      options: ['Radian', 'Steradian', 'Degree', 'Candela'],
      answer: 1,
      explanation: '**Derivation:**\nThe SI supplementary unit for solid angle is the steradian (sr). Radians are used for plane angles, Degrees for non-SI plane angles, and Candela for luminous intensity.',
      difficulty: 'easy'
    },
    {
      id: 'ud-s1-50',
      question: 'In the relation $P = (a-t^2)/(bx)$, $P$ is pressure, $x$ is distance and $t$ is time. The dimensions of $a/b$ are:',
      options: ['$[MT^{-2}]$', '$[ML^{-1}T^{-2}]$', '$[ML^2T^{-2}]$', '$[LT^{-3}]$'],
      answer: 0,
      explanation: '**Derivation:**\nBy the Principle of Homogeneity, each term in the numerator ($a - t^2$) must have the same dimension, so $[a] = [t^2] = [T^2]$. \n\nAlso, $[P] = \\frac{[T^2]}{[b] [L]}$. Rearranging for $[b]$:\n\n$[b] = \\frac{[T^2]}{[P] [L]} = \\frac{[T^2]}{[ML^{-1}T^{-2}] [L]} = [M^{-1}T^4]$.\n\nCalculation: $[a/b] = \\frac{[T^2]}{[M^{-1}T^4]} = [MT^{-2}]$.',
      difficulty: 'hard'
    }
  ]
};

export default quizSet;
