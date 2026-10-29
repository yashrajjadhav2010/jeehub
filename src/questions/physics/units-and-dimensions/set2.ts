import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set2',
  title: 'Units and Dimensions (Advanced) - Set 2',
  chapterId: 'units-and-dimensions',
  subjectId: 'physics',
  questions: [
    {
      id: 'ud-s2-1',
      question: 'The dimensional formula for Gravitational Potential is:',
      options: ['$[M^0 L^2 T^{-2}]$', '$[M L^2 T^{-2}]$', '$[M L T^{-2}]$', '$[M^0 L^3 T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nGravitational Potential ($V$) is defined as the work done per unit mass to bring an object from infinity to a point.\n\nFormula: $V = \\frac{\\text{Work}}{\\text{Mass}} = \\frac{W}{m}$\n\nDimensions of Work $[W] = [M L^2 T^{-2}]$\nDimensions of Mass $[m] = [M]$\n\nCalculation: $[V] = \\frac{[M L^2 T^{-2}]}{[M]} = [M^0 L^2 T^{-2}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-2',
      question: 'What is the dimensional formula of Compressibility?',
      options: ['$[M^{-1} L T^2]$', '$[M L^{-1} T^{-2}]$', '$[M^{-1} L^2 T^2]$', '$[M L^2 T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nCompressibility ($K$) is the reciprocal of Bulk Modulus ($B$).\n\nFormula: $K = \\frac{1}{B} = \\frac{1}{\\text{Pressure}} = \\frac{\\text{Area}}{\\text{Force}}$\n\nDimensions of Force $[F] = [M L T^{-2}]$\nDimensions of Area $[A] = [L^2]$\n\nCalculation: $[K] = \\frac{[L^2]}{[M L T^{-2}]} = [M^{-1} L T^2]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-3',
      question: 'The dimensional formula for Action (as defined in physics) is identical to that of:',
      options: ['Angular Momentum', 'Force', 'Energy', 'Power'],
      answer: 0,
      explanation: '**Derivation:**\nAction ($S$) is defined as the integral of energy over time.\n\nFormula: $S = \\text{Energy} \\times \\text{Time}$\n\nDimensions of Action: $[M L^2 T^{-2}] \\times [T] = [M L^2 T^{-1}]$\nAngular Momentum ($L = mvr$) dimensions: $[M] [L T^{-1}] [L] = [M L^2 T^{-1}]$\n\nTherefore, Action and Angular Momentum have identical dimensions.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-4',
      question: 'The dimensional formula for Surface Energy is:',
      options: ['$[M T^{-2}]$', '$[M L^2 T^{-2}]$', '$[M L T^{-2}]$', '$[M L^2 T^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nSurface Energy is defined as the potential energy per unit area of a liquid surface.\n\nFormula: $S.E. = \\frac{\\text{Energy}}{\\text{Area}}$\n\nDimensions of Energy $[E] = [M L^2 T^{-2}]$\nDimensions of Area $[A] = [L^2]$\n\nCalculation: $[S.E.] = \\frac{[M L^2 T^{-2}]}{[L^2]} = [M L^0 T^{-2}] = [M T^{-2}]$.\n\n*Note: This is exactly the same as the dimension of Surface Tension.*',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-5',
      question: 'Find the dimensional formula for Kinematic Viscosity.',
      options: ['$[L^2 T^{-1}]$', '$[M L^{-1} T^{-1}]$', '$[L^2 T^{-2}]$', '$[M^0 L T^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nKinematic Viscosity ($\\nu$) is defined as the ratio of dynamic viscosity ($\\eta$) to density ($\\rho$).\n\nFormula: $\\nu = \\frac{\\eta}{\\rho}$\n\nDimensions of $\\eta$: $[M L^{-1} T^{-1}]$ (from $F = 6\\pi\\eta rv$)\nDimensions of $\\rho$: $[M L^{-3}]$\n\nCalculation: $[\\nu] = \\frac{[M L^{-1} T^{-1}]}{[M L^{-3}]} = [M^0 L^2 T^{-1}] = [L^2 T^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-6',
      question: 'The dimensions of Angular Impulse are:',
      options: ['$[M L^2 T^{-1}]$', '$[M L^2 T^{-2}]$', '$[M L T^{-1}]$', '$[M L^2 T]$'],
      answer: 0,
      explanation: '**Derivation:**\nAngular Impulse ($J_\\theta$) is defined as the integral of torque over time, which equals the change in angular momentum.\n\nFormula: $J_\\theta = \\tau \\times \\Delta t$\n\nDimensions of Torque $[\\tau] = [M L^2 T^{-2}]$\nDimensions of Time $[t] = [T]$\n\nCalculation: $[J_\\theta] = [M L^2 T^{-2}] \\times [T] = [M L^2 T^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-7',
      question: 'The dimensional formula for Velocity Gradient is:',
      options: ['$[T^{-1}]$', '$[L T^{-1}]$', '$[L^{-1} T^{-1}]$', '$[M^0 L^0 T^0]$'],
      answer: 0,
      explanation: '**Derivation:**\nA gradient of any physical quantity is the rate of change of that quantity with respect to distance.\n\nFormula: $\\text{Velocity Gradient} = \\frac{dv}{dx}$\n\nDimensions of Velocity $[v] = [L T^{-1}]$\nDimensions of Distance $[x] = [L]$\n\nCalculation: $[dv/dx] = \\frac{[L T^{-1}]}{[L]} = [T^{-1}]$.\n\n*Note: It has the same dimension as Frequency.*',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-8',
      question: 'The dimensional formula for Entropy ($S$) is:',
      options: ['$[M L^2 T^{-2} \\Theta^{-1}]$', '$[M L^2 T^{-2} \\Theta]$', '$[M L T^{-2} \\Theta^{-1}]$', '$[M L^2 T^{-1} \\Theta^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nEntropy is the measure of disorder, defined thermodynamically as heat transfer per unit temperature.\n\nFormula: $\\Delta S = \\frac{\\Delta Q}{T}$\n\nDimensions of Heat/Energy $[Q] = [M L^2 T^{-2}]$\nDimensions of Temperature $[T] = [\\Theta]$\n\nCalculation: $[S] = \\frac{[M L^2 T^{-2}]}{[\\Theta]} = [M L^2 T^{-2} \\Theta^{-1}]$.\n\n*Note: Matches Heat Capacity and Boltzmann Constant.*',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-9',
      question: 'Find the dimensional formula for Latent Heat ($L$).',
      options: ['$[L^2 T^{-2}]$', '$[M L^2 T^{-2}]$', '$[M L T^{-2}]$', '$[M^0 L^2 T^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nLatent Heat is the amount of heat energy required to change the state of a unit mass of a substance.\n\nFormula: $Q = m L \\implies L = \\frac{Q}{m}$\n\nDimensions of Heat Energy $[Q] = [M L^2 T^{-2}]$\nDimensions of Mass $[m] = [M]$\n\nCalculation: $[L] = \\frac{[M L^2 T^{-2}]}{[M]} = [M^0 L^2 T^{-2}] = [L^2 T^{-2}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-10',
      question: 'The dimensional formula for Thermal Resistance ($R_{th}$) is:',
      options: ['$[M^{-1} L^{-2} T^3 \\Theta]$', '$[M L^2 T^{-3} \\Theta^{-1}]$', '$[M L^2 T^{-2} \\Theta^{-1}]$', '$[M^{-1} L^2 T^3 \\Theta]$'],
      answer: 0,
      explanation: '**Derivation:**\nThermal Resistance is analogous to electrical resistance. It relates temperature difference to heat current (power).\n\nFormula: $R_{th} = \\frac{\\Delta T}{H}$, where $H = \\frac{dQ}{dt}$ (Heat Power).\n\nDimensions of Temp $[\\Delta T] = [\\Theta]$\nDimensions of Power $[H] = \\frac{[M L^2 T^{-2}]}{[T]} = [M L^2 T^{-3}]$\n\nCalculation: $[R_{th}] = \\frac{[\\Theta]}{[M L^2 T^{-3}]} = [M^{-1} L^{-2} T^3 \\Theta]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-11',
      question: "The dimensions of Wien's Constant ($b$) are:",
      options: ['$[L \\Theta]$', '$[L^2 \\Theta]$', '$[M L T^{-1} \\Theta]$', '$[L \\Theta^{-1}]$'],
      answer: 0,
      explanation: "**Derivation:**\nWien's Displacement Law states that the wavelength of maximum emission is inversely proportional to absolute temperature.\n\nFormula: $\\lambda_{max} \\times T = b$\n\nDimensions of Wavelength $[\\lambda] = [L]$\nDimensions of Temperature $[T] = [\\Theta]$\n\nCalculation: $[b] = [L] \\times [\\Theta] = [L \\Theta]$.",
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-12',
      question: 'Find the dimension of the Coefficient of Thermal Expansion ($\\alpha$).',
      options: ['$[\\Theta^{-1}]$', '$[L \\Theta^{-1}]$', '$[M^0 L^0 T^0 \\Theta]$', '$[L^{-1} \\Theta^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nThe fractional change in length/volume per unit change in temperature.\n\nFormula: $\\Delta L = L_0 \\alpha \\Delta T \\implies \\alpha = \\frac{\\Delta L}{L_0 \\Delta T}$\n\nDimensions of $[\\Delta L / L_0] = [1]$ (Dimensionless strain)\nDimensions of Temp $[\\Delta T] = [\\Theta]$\n\nCalculation: $[\\alpha] = \\frac{1}{[\\Theta]} = [\\Theta^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-13',
      question: 'The dimensional formula for Solar Constant is:',
      options: ['$[M T^{-3}]$', '$[M L^2 T^{-3}]$', '$[M L T^{-2}]$', '$[M T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nThe Solar Constant is defined as the solar energy received per unit time per unit area perpendicular to the rays.\n\nFormula: $S = \\frac{\\text{Energy}}{\\text{Area} \\times \\text{Time}} = \\frac{\\text{Power}}{\\text{Area}}$\n\nDimensions of Energy $[E] = [M L^2 T^{-2}]$\nDimensions of Area $\\times$ Time $= [L^2 T]$\n\nCalculation: $[S] = \\frac{[M L^2 T^{-2}]}{[L^2 T]} = [M L^0 T^{-3}] = [M T^{-3}]$.\n\n*Note: Matches the dimensions of Intensity.*',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-14',
      question: 'The dimension of Magnetic Pole Strength ($m$) is:',
      options: ['$[A L]$', '$[A L^2]$', '$[M L T^{-2} A^{-1}]$', '$[A T]$'],
      answer: 0,
      explanation: '**Derivation:**\nMagnetic dipole moment ($M$) is the product of pole strength ($m$) and magnetic length ($2l$).\n\nFormula: $M = m \\times 2l$\nWe also know Magnetic Moment $M = I \\times A$ (Current $\\times$ Area).\n\nDimensions of $M = [A] [L^2] = [A L^2]$\n\nCalculation: $[m] = \\frac{[M]}{[2l]} = \\frac{[A L^2]}{[L]} = [A L]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-15',
      question: 'The dimensional formula for Electric Dipole Moment ($p$) is:',
      options: ['$[A T L]$', '$[A T L^2]$', '$[M L T^{-1} A]$', '$[A T^{-1} L]$'],
      answer: 0,
      explanation: '**Derivation:**\nElectric Dipole Moment is the product of charge and the separation distance.\n\nFormula: $p = q \\times 2d$\n\nDimensions of Charge $[q] = [A T]$ (since $I = q/t$)\nDimensions of Distance $[2d] = [L]$\n\nCalculation: $[p] = [A T] \\times [L] = [A T L]$ or $[M^0 L T A]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-16',
      question: 'Find the dimension of Mobility ($\\mu$) of charge carriers.',
      options: ['$[M^{-1} T^2 A]$', '$[M L T^{-2} A]$', '$[M^{-1} L^2 T A]$', '$[M^{-1} T^3 A]$'],
      answer: 0,
      explanation: '**Derivation:**\nMobility is defined as the drift velocity per unit electric field.\n\nFormula: $\\mu = \\frac{v_d}{E}$\n\nElectric field $E = \\frac{F}{q} \\implies [E] = \\frac{[M L T^{-2}]}{[A T]} = [M L T^{-3} A^{-1}]$\nVelocity $[v_d] = [L T^{-1}]$\n\nCalculation: $[\\mu] = \\frac{[L T^{-1}]}{[M L T^{-3} A^{-1}]} = [M^{-1} L^0 T^2 A] = [M^{-1} T^2 A]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-17',
      question: 'The dimensional formula for the Poynting Vector ($\\vec{S}$) is:',
      options: ['$[M T^{-3}]$', '$[M L^2 T^{-3}]$', '$[M L T^{-2}]$', '$[M L^2 T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nThe Poynting Vector represents the directional energy flux (the rate of energy transfer per unit area) of an electromagnetic field.\n\nFormula: $S = \\frac{\\text{Power}}{\\text{Area}} = \\frac{\\text{Energy}}{\\text{Area} \\times \\text{Time}}$\n\nDimensions of Energy $[E] = [M L^2 T^{-2}]$\n\nCalculation: $[S] = \\frac{[M L^2 T^{-2}]}{[L^2] [T]} = [M T^{-3}].\n\n*Note: Matches Solar Constant and Intensity.*',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-18',
      question: 'What are the dimensions of the Bohr Magneton ($\\mu_B$)?',
      options: ['$[A L^2]$', '$[A L]$', '$[M L^2 T^{-1} A]$', '$[M^{-1} L^2 T A]$'],
      answer: 0,
      explanation: '**Derivation:**\nThe Bohr Magneton is the natural unit of magnetic dipole moment for an electron.\n\nFormula: $\\mu_B = \\frac{e h}{4\\pi m_e}$\nAlternatively, since it is a magnetic moment, it must have the exact same dimensions as macroscopic magnetic moment ($M = IA$).\n\nDimensions of Current $[I] = [A]$\nDimensions of Area $[A] = [L^2]$\n\nCalculation: $[\\mu_B] = [A L^2]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-19',
      question: 'The dimensional formula for Conductance ($G$) is:',
      options: ['$[M^{-1} L^{-2} T^3 A^2]$', '$[M L^2 T^{-3} A^{-2}]$', '$[M^{-1} L^{-2} T^4 A^2]$', '$[M L T^{-3} A^2]$'],
      answer: 0,
      explanation: '**Derivation:**\nConductance is the reciprocal of Electrical Resistance.\n\nFormula: $G = \\frac{1}{R} = \\frac{I}{V}$\n\nVoltage $V = \\frac{W}{q} \\implies [V] = \\frac{[M L^2 T^{-2}]}{[A T]} = [M L^2 T^{-3} A^{-1}]$\nResistance $R = \\frac{V}{I} \\implies [R] = \\frac{[M L^2 T^{-3} A^{-1}]}{[A]} = [M L^2 T^{-3} A^{-2}]$\n\nCalculation: $[G] = \\frac{1}{[R]} = [M^{-1} L^{-2} T^3 A^2]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-20',
      question: 'The dimensional formula for Magnetic Flux ($\\Phi_B$) is:',
      options: ['$[M L^2 T^{-2} A^{-1}]$', '$[M L^2 T^{-1} A^{-1}]$', '$[M L T^{-2} A^{-1}]$', '$[M L^3 T^{-2} A^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nFrom Faraday\'s Law, Induced EMF (Voltage) equals the rate of change of magnetic flux.\n\nFormula: $\\mathcal{E} = \\frac{d\\Phi_B}{dt} \\implies \\Phi_B = \\mathcal{E} \\times dt$\n\nVoltage $[\\mathcal{E}] = [M L^2 T^{-3} A^{-1}]$ (Work/Charge)\n\nCalculation: $[\\Phi_B] = [M L^2 T^{-3} A^{-1}] \\times [T] = [M L^2 T^{-2} A^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-21',
      question: 'The quantity $E/B$ (ratio of Electric field to Magnetic field) has the dimensions of:',
      options: ['$[L T^{-1}]$', '$[L T^{-2}]$', '$[L^2 T^{-1}]$', '$[M^0 L^0 T^0]$'],
      answer: 0,
      explanation: '**Derivation:**\nLorentz force relates electric and magnetic forces. An undeflected particle in crossed E and B fields obeys $qE = qvB$.\n\nFormula: $v = \\frac{E}{B}$\n\nTherefore, the ratio of Electric field to Magnetic field represents Velocity.\n\nCalculation: $[E/B] = [v] = [L T^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-22',
      question: 'What are the dimensions of $CR^2$ (Capacitance $\\times$ Resistance squared)?',
      options: ['$[M L^2 T^{-2} A^{-2}]$', '$[M L^2 T^{-1} A^{-2}]$', '$[T]$', '$[L^2 T^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nWe know the time constant of an RC circuit is $\\tau = RC$, which has dimension $[T]$.\n\nThe expression is $CR^2 = (RC) \\times R$.\n\nDimensions of $RC = [T]$\nDimensions of Resistance $R = [M L^2 T^{-3} A^{-2}]$\n\nCalculation: $[CR^2] = [T] \\times [M L^2 T^{-3} A^{-2}] = [M L^2 T^{-2} A^{-2}]$.\n\n*Note: Matches the dimensions of Inductance (L).*',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-23',
      question: 'The quantity $\\frac{L}{RCV}$ has the dimensions of:',
      options: ['$[A^{-1}]$', '$[A]$', '$[T^{-1}]$', '$[M L^2 T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nLet\'s break down the components:\n\n1. $L/R$ is the time constant of an inductive circuit $\\implies [L/R] = [T]$.\n2. $CV$ is the charge stored in a capacitor $\\implies [CV] = [Q] = [A T]$.\n\nCalculation: $\\frac{[L/R]}{[CV]} = \\frac{[T]}{[A T]} = [A^{-1}]$.\n\nThis is the reciprocal of current.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-24',
      question: 'The dimensional formula for $\\sqrt{LC}$ is:',
      options: ['$[T]$', '$[T^{-1}]$', '$[L T^{-1}]$', '$[M^0 L^0 T^0]$'],
      answer: 0,
      explanation: '**Derivation:**\nThe resonant angular frequency of an LC circuit is given by $\\omega = \\frac{1}{\\sqrt{LC}}$.\n\nSince $\\omega$ has dimensions of $[T^{-1}]$, the quantity $\\sqrt{LC}$ must be the reciprocal.\n\nCalculation: $[\\sqrt{LC}] = \\frac{1}{[\\omega]} = \\frac{1}{[T^{-1}]} = [T]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-25',
      question: 'The dimensions of $\\frac{1}{\\mu_0 \\epsilon_0}$ are:',
      options: ['$[L^2 T^{-2}]$', '$[L T^{-1}]$', '$[L^{-2} T^2]$', '$[L^{-1} T]$'],
      answer: 0,
      explanation: '**Derivation:**\nFrom Maxwell\'s equations, the speed of light in a vacuum is $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$.\n\nSquaring both sides gives $c^2 = \\frac{1}{\\mu_0 \\epsilon_0}$.\n\nDimensions of Velocity $c = [L T^{-1}]$\n\nCalculation: $[1/\\mu_0\\epsilon_0] = [c^2] = [L T^{-1}]^2 = [L^2 T^{-2}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-26',
      question: 'In the equation $F = a\\sqrt{x} + bt^2$, the dimensions of $a/b$ are:',
      options: ['$[L^{-1/2} T^2]$', '$[L^{1/2} T^{-2}]$', '$[L^{-1/2} T^{-2}]$', '$[L^2 T^{-1/2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nBy the Principle of Homogeneity, each term must have the dimensions of Force $[M L T^{-2}]$.\n\n$[a\\sqrt{x}] = [F] \\implies [a] [L^{1/2}] = [M L T^{-2}] \\implies [a] = [M L^{1/2} T^{-2}]$.\n$[bt^2] = [F] \\implies [b] [T^2] = [M L T^{-2}] \\implies [b] = [M L T^{-4}]$.\n\nCalculation: $[a/b] = \\frac{[M L^{1/2} T^{-2}]}{[M L T^{-4}]} = [L^{1/2 - 1} T^{-2 - (-4)}] = [L^{-1/2} T^2]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-27',
      question: 'In the equation $P = \\frac{\\alpha}{\\beta} e^{-\\frac{\\alpha z}{k_B \\theta}}$, the dimensional formula of $\\beta$ is:',
      options: ['$[M^0 L^2 T^0]$', '$[M L^2 T^{-2}]$', '$[M^0 L^0 T^0]$', '$[M L T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\n\n1. The exponent must be dimensionless: $[\\frac{\\alpha z}{k_B \\theta}] = 1$.\nThermal energy $[k_B \\theta] = [M L^2 T^{-2}]$. Distance $[z] = [L]$.\n$[\\alpha] [L] / [M L^2 T^{-2}] = 1 \\implies [\\alpha] = [M L T^{-2}]$\n\n2. Entire equation: $[P] = [\\alpha / \\beta]$.\nPressure $[P] = [M L^{-1} T^{-2}]$.\n$[\\beta] = \\frac{[\\alpha]}{[P]} = \\frac{[M L T^{-2}]}{[M L^{-1} T^{-2}]} = [M^0 L^2 T^0]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-28',
      question: 'The velocity $v$ of a particle depends on time $t$ as $v = \\alpha t + \\frac{\\beta}{t + \\gamma}$. The dimensions of $\\alpha, \\beta, \\gamma$ are respectively:',
      options: ['$[L T^{-2}], [L], [T]$', '$[L T^{-1}], [L T], [T^2]$', '$[L], [L T], [T]$', '$[L T^{-2}], [L T^{-1}], [T]$'],
      answer: 0,
      explanation: '**Derivation:**\n\n1. $\\gamma$ is added to $t$, so $[\\gamma] = [T]$.\n2. $[\\alpha t] = [v] \\implies [\\alpha] [T] = [L T^{-1}] \\implies [\\alpha] = [L T^{-2}]$.\n3. $[\\frac{\\beta}{t+\\gamma}] = [v] \\implies \\frac{[\\beta]}{[T]} = [L T^{-1}] \\implies [\\beta] = [L]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-29',
      question: 'Given the integral $\\int \\frac{dx}{\\sqrt{2ax - x^2}} = a^n \\sin^{-1}\\left(\\frac{x}{a} - 1\\right)$. What is the value of $n$?',
      options: ['$0$', '$1$', '$-1$', '$1/2$'],
      answer: 0,
      explanation: '**Derivation:**\nCheck dimensions of both sides.\n\nLHS: $dx$ has dimension $[L]$. The term inside the square root ($2ax - x^2$) implies $a$ has dimension $[L]$. The root has dimension $[L]$.\nTherefore, LHS $= \\int \\frac{[L]}{\\sqrt{[L^2]}} = \\int \\frac{[L]}{[L]} = [M^0 L^0 T^0]$\n\nRHS: $\\sin^{-1}$ function is an angle, which is dimensionless. So RHS $= [a^n] = [L^n]$.\n\nFor LHS = RHS, $[L^0] = [L^n] \\implies n = 0$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-30',
      question: 'The position $x$ of a particle depends on time $t$ as $x = A \\cos(\\omega t) + B \\sin(\\omega t)$. The dimensions of $A/B$ are:',
      options: ['$[M^0 L^0 T^0]$', '$[L]$', '$[T^{-1}]$', '$[L T]$'],
      answer: 0,
      explanation: '**Derivation:**\nBy the Principle of Homogeneity, terms added together must have identical dimensions.\n\nThus, $[A \\cos(\\omega t)] = [B \\sin(\\omega t)] = [x] = [L]$.\n\nSince trigonometric functions are dimensionless, $[A] = [L]$ and $[B] = [L]$.\n\nCalculation: $[A/B] = [L]/[L] = [M^0 L^0 T^0]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-31',
      question: 'In the equation $y = A \\sin(kx - \\omega t)$, the dimension of $k$ is:',
      options: ['$[L^{-1}]$', '$[L]$', '$[T^{-1}]$', '$[L T^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nThe argument of the sine function must be a dimensionless angle.\n\nTherefore, $[kx] = 1$.\n\nSince $x$ is distance $[L]$, we have $[k] [L] = 1 \\implies [k] = [L^{-1}]$.\n\n*Note: $k$ is the wave number ($2\\pi/\\lambda$).*',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-32',
      question: 'A quantity $X$ is given by $X = \\epsilon_0 L \\frac{\\Delta V}{\\Delta t}$. The dimensions of $X$ are the same as that of:',
      options: ['Current', 'Resistance', 'Voltage', 'Charge'],
      answer: 0,
      explanation: '**Derivation:**\nWe know Capacitance $C = \\frac{\\epsilon_0 A}{d}$. Dimensions of $A/d = [L^2]/[L] = [L]$.\n\nSo, $[\\epsilon_0 L]$ has the dimensions of Capacitance $[C]$.\n\nThe given expression $X = C \\frac{\\Delta V}{\\Delta t}$.\n\nFrom $Q = CV$, differentiating gives $\\frac{dQ}{dt} = C \\frac{dV}{dt}$.\n\nThus, $X = dQ/dt$, which is Electric Current $[A]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-33',
      question: 'If Velocity ($v$), Time ($T$), and Force ($F$) are chosen as fundamental quantities, the dimensional formula for Mass is:',
      options: ['$[F v^{-1} T]$', '$[F v T^{-1}]$', '$[F v^{-2} T]$', '$[F^2 v T]$'],
      answer: 0,
      explanation: '**Derivation:**\nWrite the defining equation involving these quantities: Force = Mass $\\times$ Acceleration.\n\nFormula: $F = M \\times \\frac{v}{T}$.\n\nRearrange to solve for Mass: $M = \\frac{F \\times T}{v}$.\n\nCalculation: $[M] = [F] [T] [v^{-1}] = [F v^{-1} T]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-34',
      question: 'If Energy ($E$), Velocity ($v$), and Time ($T$) are fundamental quantities, the dimension of Surface Tension is:',
      options: ['$[E v^{-2} T^{-2}]$', '$[E v^{-1} T^{-2}]$', '$[E v^{-2} T^{-1}]$', '$[E^2 v^{-1} T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nSurface Tension ($S$) = Force / Length = Energy / Area.\n\nFormula: $S = \\frac{E}{A} = \\frac{E}{L^2}$.\n\nWe need to express Length ($L$) in terms of new fundamentals. $L = v \\times T$.\nSo, $L^2 = v^2 T^2$.\n\nCalculation: $[S] = \\frac{E}{(vT)^2} = [E v^{-2} T^{-2}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-35',
      question: "If the speed of light ($c$), Planck's constant ($h$), and Gravitational constant ($G$) are fundamental units, Mass is proportional to:",
      options: ['$\\sqrt{hc/G}$', '$\\sqrt{hG/c}$', '$\\sqrt{h/Gc}$', '$\\sqrt{cG/h}$'],
      answer: 0,
      explanation: '**Derivation:**\nLet $M \\propto c^x h^y G^z$.\n$[M^1 L^0 T^0] = [L T^{-1}]^x [M L^2 T^{-1}]^y [M^{-1} L^3 T^{-2}]^z$.\n\nEquating powers leads to: $x = 1/2, y = 1/2, z = -1/2$.\n\nResult: $c^{1/2} h^{1/2} G^{-1/2} = \\sqrt{\\frac{hc}{G}}$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-36',
      question: 'Using the same fundamentals ($c, h, G$), the dimension of Length is proportional to:',
      options: ['$\\sqrt{hG/c^3}$', '$\\sqrt{hc/G^3}$', '$\\sqrt{hG/c^5}$', '$\\sqrt{Gc/h^3}$'],
      answer: 0,
      explanation: '**Derivation:**\nLet $L \\propto c^x h^y G^z$.\n$[M^0 L^1 T^0] = [L T^{-1}]^x [M L^2 T^{-1}]^y [M^{-1} L^3 T^{-2}]^z$.\n\nSolving leads to: $x = -3/2, y = 1/2, z = 1/2$.\n\nResult: $c^{-3/2} h^{1/2} G^{1/2} = \\sqrt{\\frac{hG}{c^3}}$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-37',
      question: 'Using the same fundamentals ($c, h, G$), the dimension of Time is proportional to:',
      options: ['$\\sqrt{hG/c^5}$', '$\\sqrt{hG/c^3}$', '$\\sqrt{hc^5/G}$', '$\\sqrt{G/hc^5}$'],
      answer: 0,
      explanation: '**Derivation:**\nWe know that Velocity $c = \\frac{\\text{Length}}{\\text{Time}} \\implies \\text{Time} = \\frac{\\text{Length}}{c}$.\n\nFrom previous, Length $\\propto \\sqrt{\\frac{hG}{c^3}}$.\n\nCalculation: Time $\\propto \\frac{\\sqrt{hG/c^3}}{c} = \\sqrt{\\frac{hG}{c^5}}$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-38',
      question: 'If Momentum ($P$), Area ($A$), and Time ($T$) are fundamental quantities, the dimensional formula for Energy is:',
      options: ['$[P A^{1/2} T^{-1}]$', '$[P A T^{-1}]$', '$[P^2 A^{1/2} T^{-1}]$', '$[P A^{-1/2} T]$'],
      answer: 0,
      explanation: '**Derivation:**\nEnergy $E = \\text{Force} \\times \\text{Distance}$.\n\nForce = Change in Momentum / Time = $P / T$.\nDistance = $\\sqrt{\\text{Area}} = A^{1/2}$.\n\nCalculation: $E = \\left(\\frac{P}{T}\\right) \\times A^{1/2} = [P A^{1/2} T^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-39',
      question: 'What is the dimensional formula for the Rydberg Constant ($R_H$)?',
      options: ['$[L^{-1}]$', '$[L]$', '$[T^{-1}]$', '$[M L^{-1} T^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nFrom the Rydberg formula: $\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$.\n\nSince $n$ are dimensionless integers, $R_H$ must have the same dimension as $1/\\lambda$.\n\nCalculation: $[R_H] = \\frac{1}{[L]} = [L^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-40',
      question: 'The dimensional formula for the Hubble Constant ($H_0$) is:',
      options: ['$[T^{-1}]$', '$[L T^{-1}]$', '$[L^{-1} T]$', '$[M^0 L^0 T^0]$'],
      answer: 0,
      explanation: "**Derivation:**\nHubble's Law: $v = H_0 \\times D$.\n\n$H_0 = \\frac{v}{D}$.\n\nDimensions: $\\frac{[L T^{-1}]}{[L]} = [T^{-1}]$. Same as frequency.",
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-41',
      question: 'Find the dimensional formula for the Faraday Constant ($F$).',
      options: ['$[A T \\text{ mol}^{-1}]$', '$[A T]$', '$[A T^{-1} \\text{ mol}^{-1}]$', '$[M L^2 T^{-2} \\text{ mol}^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nFaraday constant is the electric charge per mole of electrons.\n\nFormula: $F = e \\times N_A$.\n\nDimensions of charge $[e] = [A T]$\nDimensions of $N_A = [\\text{mol}^{-1}]$\n\nCalculation: $[F] = [A T \\text{ mol}^{-1}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-42',
      question: 'The dimensional formula for Intensity of a wave is:',
      options: ['$[M T^{-3}]$', '$[M L^2 T^{-3}]$', '$[M L T^{-2}]$', '$[M L^{-1} T^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nIntensity is defined as power transferred per unit area.\n\nFormula: $I = \\frac{\\text{Power}}{\\text{Area}}$\n\nDimensions: $\\frac{[M L^2 T^{-3}]}{[L^2]} = [M T^{-3}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-43',
      question: 'What is the dimensional formula for Radiation Pressure?',
      options: ['$[M L^{-1} T^{-2}]$', '$[M L^2 T^{-2}]$', '$[M L T^{-2}]$', '$[M T^{-3}]$'],
      answer: 0,
      explanation: '**Derivation:**\nRadiation Pressure is simply Pressure.\n\nFormula: $P = \\frac{\\text{Force}}{\\text{Area}}$\n\nDimensions: $[M L^{-1} T^{-2}]$. *Note: Matches Energy Density.*',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-44',
      question: 'The dimension of Magnetic Susceptibility ($\\chi_m$) is:',
      options: ['$[M^0 L^0 T^0]$', '$[M L T^{-2} A^{-2}]$', '$[M^{-1} L^{-3} T^4 A^2]$', '$[L^{-1} A]$'],
      answer: 0,
      explanation: '**Derivation:**\n$M = \\chi_m H$.\n\nBoth Magnetization ($M$) and Intensity ($H$) have same units ($A/m$). Thus $\\chi_m$ is dimensionless.\n\nCalculation: $[\\chi_m] = [M^0 L^0 T^0]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-45',
      question: 'Find the dimensional formula for the Gyromagnetic Ratio.',
      options: ['$[M^{-1} T A]$', '$[M L^2 T^{-1} A]$', '$[M^{-1} L A T]$', '$[M A T^{-1}]$'],
      answer: 0,
      explanation: '**Derivation:**\nRatio of magnetic dipole moment to angular momentum.\n\nFormula: $\\gamma = \\frac{\\mu_m}{L} = \\frac{[A L^2]}{[M L^2 T^{-1}]} = [M^{-1} T A]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-46',
      question: 'Which of the following quantities has the dimension of $[M^0 L^0 T^0]$?',
      options: ['Refractive Index', 'Coefficient of Friction', 'Solid Angle', 'All of the above'],
      answer: 3,
      explanation: '**Derivation:**\n\n- Refractive Index: Ratio of velocities.\n- Coefficient of Friction: Ratio of forces.\n- Solid Angle: Ratio of areas.\n\nAll are pure dimensionless ratios.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-47',
      question: 'The dimensional formula for Electrical Permeability $\\times$ Electrical Permittivity ($\\mu_0 \\epsilon_0$) is:',
      options: ['$[L^{-2} T^2]$', '$[L^2 T^{-2}]$', '$[L T^{-1}]$', '$[L^{-1} T]$'],
      answer: 0,
      explanation: '**Derivation:**\n$c^2 = \\frac{1}{\\mu_0 \\epsilon_0} \\implies \\mu_0 \\epsilon_0 = \\frac{1}{c^2}$.\n\nDimensions: $\\frac{1}{[L T^{-1}]^2} = [L^{-2} T^2]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-48',
      question: 'If $C$ is light speed, $G$ is gravitational constant, and $e$ is electronic charge, the dimensions of $\\frac{e^2}{\\epsilon_0 G m_e^2}$ are:',
      options: ['$[M^0 L^0 T^0]$', '$[M L T^{-1}]$', '$[M L^2 T^{-2}]$', '$[A T]$'],
      answer: 0,
      explanation: '**Derivation:**\nThis is the ratio of Electrostatic Force to Gravitational Force between two electrons. Being a ratio of two forces, it is dimensionless.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-49',
      question: 'The dimensional formula for Coefficient of Self Induction ($L$) is:',
      options: ['$[M L^2 T^{-2} A^{-2}]$', '$[M L^2 T^{-1} A^{-2}]$', '$[M L T^{-2} A^{-2}]$', '$[M L^2 T^{-3} A^{-2}]$'],
      answer: 0,
      explanation: '**Derivation:**\nEnergy stored $U = \\frac{1}{2} L I^2 \\implies L = \\frac{2U}{I^2}$.\n\nDimensions: $\\frac{[M L^2 T^{-2}]}{[A^2]} = [M L^2 T^{-2} A^{-2}]$.',
      difficulty: 'hard'
    },
    {
      id: 'ud-s2-50',
      question: 'The physical quantity having the dimension $[M L^2 T^{-3} A^{-2}]$ is:',
      options: ['Electrical Resistance', 'Electrical Conductance', 'Magnetic Flux', 'Capacitance'],
      answer: 0,
      explanation: '**Derivation:**\nPower $P = I^2 R \\implies R = P/I^2$.\n\nDimensions: $\\frac{[M L^2 T^{-3}]}{[A^2]} = [M L^2 T^{-3} A^{-2}]$. Matches Electrical Resistance.',
      difficulty: 'hard'
    }
  ]
};

export default quizSet;
