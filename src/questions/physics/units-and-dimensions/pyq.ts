import { QuizSet } from '../../../types';

const pyq: QuizSet = {
  id: "pyq",
  title: "Previous Year Questions",
  subjectId: "physics",
  chapterId: "units-and-dimensions",
  difficulty: "pyq",
  questions: [
    {
      id: "units-dimensions-pyq-q1",
      question: "The relation is given by $E = \\frac{B - x^2}{At}$. Dimensional formula of $AB$ is? (Where $E$ = Energy, $x$ = length, $t$ = time). (JEE Main 2024)",
      options: [
        "$[M^{-1} L^{0} T^{1}]$",
        "$[M^{-1} L^{2} T^{1}]$",
        "$[M^{1} L^{2} T^{0}]$",
        "$[M^{-1} L^{2} T^{-1}]$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nHomogeneity implies $[B] = [x^2] = [L^2]$.\n\nRewrite for A:\n$A = \\frac{B - x^2}{Et} = \\frac{[L^2]}{[ML^2T^{-2}] \\cdot [T]} = [M^{-1}T^1]$.\n\nNow find $[AB]$:\n$[AB] = [M^{-1}T^1] \\cdot [L^2] = [M^{-1} L^2 T^1]$.\n\n*(Asked in JEE Main 2024, 31st Jan, Shift 2)*"
    },
    {
      id: "units-dimensions-pyq-q2",
      question: "Angular impulse dimensions are the same as: (JEE Main 2024)",
      options: [
        "Linear momentum",
        "Angular momentum",
        "Torque",
        "Force"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nAngular impulse is defined as the change in angular momentum, so its dimensions are the same as angular momentum $[ML^2T^{-1}]$.\n\nFor reference:\nLinear momentum is $[MLT^{-1}]$\nTorque is $[ML^2T^{-2}]$\nForce is $[MLT^{-2}]$\n\n*(Asked in JEE Main 2024, 27th Jan, Shift 1)*"
    },
    {
      id: "units-dimensions-pyq-q3",
      question: "If Force ($F$), Length ($L$), Time ($T$) are fundamental quantities, the dimension of mass is: (JEE Main 2023)",
      options: [
        "$[F L^{-1} T^{2}]$",
        "$[F L T^{-2}]$",
        "$[F L^{-1} T^{-1}]$",
        "$[F L^{1} T^{2}]$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nLet $[M] = [F]^a[L]^b[T]^c$.\n\nSubstitute the known dimensional formulas:\n$[M] = ([MLT^{-2}])^a [L]^b [T]^c$\n$[M] = [M^a L^{a+b} T^{-2a+c}]$\n\nEquating powers of $M, L, T$:\n$a = 1$\n$a + b = 0 \\implies b = -1$\n$-2a + c = 0 \\implies c = 2$\n\nTherefore, dimension of mass is $[FL^{-1}T^{2}]$.\n\n*(Asked in JEE Main 2023, 15th Apr, Shift 1)*"
    },
    {
      id: "units-dimensions-pyq-q4",
      question: "The dimensional formula of $\\frac{1}{2} \\varepsilon_0 E^2$ (where $\\varepsilon_0$ is permittivity of free space and $E$ is electric field) is: (JEE Main 2024)",
      options: [
        "$[M^1 L^2 T^{-2}]$",
        "$[M^1 L^{-1} T^{-2}]$",
        "$[M^1 L^{-2} T^{-1}]$",
        "$[M^1 L^0 T^{-3}]$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nThe given expression $\\frac{1}{2} \\varepsilon_0 E^2$ represents the energy density (Energy per unit Volume) of an electric field.\n\nEnergy density = $\\frac{\\text{Energy}}{\\text{Volume}}$\nDimensions = $\\frac{[ML^2T^{-2}]}{[L^3]} = [ML^{-1}T^{-2}]$\n\n*(Asked in JEE Main 2024, 30th Jan, Shift 2)*"
    },
    {
      id: "units-dimensions-pyq-q5",
      question: "Match List-I (Torque, Stress, Latent Heat, Power) to List-II (Dimensions):\nA. Torque \nB. Stress \nC. Latent Heat \nD. Power\n\nI. $[M L^{-1} T^{-2}]$\nII. $[M L^2 T^{-2}]$\nIII. $[M L^2 T^{-3}]$\nIV. $[L^2 T^{-2}]$ (JEE Main 2023)",
      options: [
        "A-II, B-I, C-IV, D-III",
        "A-IV, B-I, C-II, D-III",
        "A-II, B-III, C-IV, D-I",
        "A-I, B-II, C-IV, D-III"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nLet's find the dimensional formula for each quantity:\n**Torque** = Force $\\times$ Perpendicular distance = $[MLT^{-2}] \\cdot [L] = [ML^2T^{-2}]$ (Matches II)\n**Stress** = Force / Area = $[MLT^{-2}] / [L^2] = [ML^{-1}T^{-2}]$ (Matches I)\n**Latent Heat** = Heat / Mass = $[ML^2T^{-2}] / [M] = [L^2T^{-2}]$ (Matches IV)\n**Power** = Work / Time = $[ML^2T^{-2}] / [T] = [ML^2T^{-3}]$ (Matches III)\n\nTherefore, the correct match is A-II, B-I, C-IV, D-III.\n\n*(Asked in JEE Main 2023, 11th Apr, Shift 2)*"
    },
    {
      id: "units-dimensions-pyq-q6",
      question: "If velocity ($c$), gravitational constant ($G$), and Planck's constant ($h$) are taken as fundamental quantities, the dimensions of Time are: (JEE Main 2022)",
      options: [
        "$[h^{1/2} G^{1/2} c^{-5/2}]$",
        "$[h^{1/2} G^{1/2} c^{-3/2}]$",
        "$[h^{-1/2} G^{1/2} c^{1/2}]$",
        "$[h^{1/2} G^{-1/2} c^{-5/2}]$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nLet $[T] = k[h]^a[G]^b[c]^d$.\nSubstitute dimensions:\n$[h] = [ML^2T^{-1}]$\n$[G] = [M^{-1}L^3T^{-2}]$\n$[c] = [LT^{-1}]$\n\n$[T^1] = [ML^2T^{-1}]^a [M^{-1}L^3T^{-2}]^b [LT^{-1}]^d$\n$[T^1] = M^{a-b} L^{2a+3b+d} T^{-a-2b-d}$\n\nEquating powers:\n1) $a - b = 0 \\implies a = b$\n2) $2a + 3b + d = 0 \\implies 5a + d = 0 \\implies d = -5a$\n3) $-a - 2b - d = 1 \\implies -3a - (-5a) = 1 \\implies 2a = 1 \\implies a = 1/2$\n\nSo, $a = 1/2$, $b = 1/2$, $d = -5/2$.\nTherefore, $[T] = [h^{1/2} G^{1/2} c^{-5/2}]$.\n\n*(Asked in JEE Main 2022, 28th June, Shift 1)*"
    },
    {
      id: "units-dimensions-pyq-q7",
      question: "The quantity $X$ is given by $X = \\frac{I \\cdot F \\cdot v^2}{W \\cdot L^3}$. If $I$ is moment of inertia, $F$ is force, $v$ is velocity, $W$ is work, and $L$ is length, then the dimensional formula of $X$ matches with that of: (JEE Main 2021)",
      options: [
        "Energy density",
        "Surface tension",
        "Viscosity",
        "Young's Modulus"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nLet's write dimensions of all components:\n$[I] = [ML^2]$\n$[F] = [MLT^{-2}]$\n$[v] = [LT^{-1}]$\n$[W] = [ML^2T^{-2}]$\n$[L] = [L]$\n\nSubstitute into the formula:\n$[X] = \\frac{[ML^2] \\cdot [MLT^{-2}] \\cdot [LT^{-1}]^2}{[ML^2T^{-2}] \\cdot [L^3]}$\n$[X] = \\frac{[ML^2] \\cdot [MLT^{-2}] \\cdot [L^2T^{-2}]}{[ML^5T^{-2}]}$\n$[X] = \\frac{[M^2L^5T^{-4}]}{[ML^5T^{-2}]}$\n$[X] = [M^1 L^0 T^{-2}]$\n\nThis is the dimensional formula for Surface Tension (Force/Length $= [MLT^{-2}]/[L] = [MT^{-2}]$).\n\n*(Asked in JEE Main 2021, 27th Aug, Shift 1)*"
    },
    {
      id: "units-dimensions-pyq-q8",
      question: "Which of the following pairs does NOT have identical dimensions? (JEE Main 2021)",
      options: [
        "Torque and Work",
        "Momentum and Impulse",
        "Tension and Surface Tension",
        "Light year and Wavelength"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\nLet's check the dimensions of each pair:\n1. Torque ($[ML^2T^{-2}]$) and Work ($[ML^2T^{-2}]$) -> Identical\n2. Momentum ($[MLT^{-1}]$) and Impulse ($[MLT^{-1}]$) -> Identical\n3. Tension is a force ($[MLT^{-2}]$) and Surface Tension is force per unit length ($[MT^{-2}]$) -> **Not Identical**\n4. Light year (distance, $[L]$) and Wavelength (distance, $[L]$) -> Identical\n\n*(Asked in JEE Main 2021, 25th Feb, Shift 2)*"
    },
    {
      id: "units-dimensions-pyq-q9",
      question: "What are the dimensions of the fine-structure constant $P = \\frac{e^2}{4\\pi \\varepsilon_0 hc}$? (JEE Main 2020)",
      options: [
        "$[M^1 L^1 T^{-2}]$",
        "$[M^0 L^0 T^0]$",
        "$[M^0 L^1 T^{-1}]$",
        "$[M^1 L^2 T^{-1}]$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nThe fine-structure constant is a pure number in physics, hence it is dimensionless.\n\nLet's verify by checking the dimensions:\n$[e^2/ (4\\pi \\varepsilon_0)] = [Force \\times Distance^2] = [ML^3T^{-2}]$\n$[hc] = [Energy \\times Time] \\times [Distance/Time] = [ML^2T^{-2}] \\times [T] \\times [LT^{-1}] = [ML^3T^{-2}]$\n\nRatio $= \\frac{[ML^3T^{-2}]}{[ML^3T^{-2}]} = [M^0 L^0 T^0]$\n\n*(Asked in JEE Main 2020, 9th Jan, Shift 1)*"
    },
    {
      id: "units-dimensions-pyq-q10",
      question: "A force is given by $F = ax + bt^2$, where $x$ is distance and $t$ is time. The dimensions of $\\frac{a}{b}$ are: (JEE Main 2020)",
      options: [
        "$[M^0 L^{-1} T^2]$",
        "$[M^0 L^1 T^{-2}]$",
        "$[M^0 L^{-1} T^{-2}]$",
        "$[M^1 L^{-1} T^2]$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nBy principle of homogeneity, each term in the sum must have dimensions of Force ($[MLT^{-2}]$).\nSo, $[ax] = [F] \\implies [a] = [F]/[x] = [MLT^{-2}] / [L] = [MT^{-2}]$\nAnd, $[bt^2] = [F] \\implies [b] = [F]/[t^2] = [MLT^{-2}] / [T^2] = [MLT^{-4}]$\n\nNow, find the dimensions of $a/b$:\n$[a/b] = \\frac{[MT^{-2}]}{[MLT^{-4}]} = [M^0 L^{-1} T^2]$\n\n*(Asked in JEE Main 2020, 7th Jan, Shift 1)*"
    },
    {
      id: "units-dimensions-pyq-q11",
      question: "The dimensions of the solar constant (energy received per unit area per unit time) are: (JEE Main 2024)",
      options: [
        "$[M^1 L^2 T^{-3}]$",
        "$[M^1 L^0 T^{-3}]$",
        "$[M^1 L^1 T^{-2}]$",
        "$[M^0 L^0 T^{-2}]$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nSolar Constant is defined as Energy per unit Area per unit Time.\nSolar Constant = $\\frac{\\text{Energy}}{\\text{Area} \\cdot \\text{Time}}$\n\nDimensions = $\\frac{[ML^2T^{-2}]}{[L^2] \\cdot [T]} = [M^1 L^0 T^{-3}]$\n\n*(Asked in JEE Main 2024, 4th Apr, Shift 2)*"
    },
    {
      id: "units-dimensions-pyq-q12",
      question: "The dimension of the quantity $\\frac{1}{\\mu_0 \\varepsilon_0}$ is: (JEE Main 2023)",
      options: [
        "$[L^2 T^{-2}]$",
        "$[L T^{-1}]$",
        "$[L^{-1} T]$",
        "$[L^{-2} T^2]$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nWe know that the speed of electromagnetic waves (like light) in a vacuum is related to permeability and permittivity by:\n$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$\n\nSquaring both sides:\n$c^2 = \\frac{1}{\\mu_0 \\varepsilon_0}$\n\nSo, the dimension of $\\frac{1}{\\mu_0 \\varepsilon_0}$ is the square of velocity.\nDimensions = $[LT^{-1}]^2 = [L^2 T^{-2}]$\n\n*(Asked in JEE Main 2023, 6th Apr, Shift 1)*"
    },
    {
      id: "units-dimensions-pyq-q13",
      question: "The dimension of self-inductance ($L$) is: (JEE Main 2024)",
      options: [
        "$[M^1 L^2 T^{-2} A^{-2}]$",
        "$[M^1 L^1 T^{-2} A^{-1}]$",
        "$[M^1 L^2 T^{-1} A^{-2}]$",
        "$[M^2 L^2 T^{-2} A^{-1}]$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nThe energy stored in an inductor is given by:\n$U = \\frac{1}{2} L I^2$\nWhere $U$ is energy and $I$ is current.\n\nRearranging to find dimensions of $L$:\n$[L] = \\frac{[U]}{[I^2]} = \\frac{[ML^2T^{-2}]}{[A^2]} = [M^1 L^2 T^{-2} A^{-2}]$\n\n*(Asked in JEE Main 2024, 29th Jan, Shift 1)*"
    },
    {
      id: "units-dimensions-pyq-q14",
      question: "Dimensions of Stefan-Boltzmann constant ($\\sigma$) are: (JEE Main 2022)",
      options: [
        "$[M^1 L^1 T^{-3} K^{-4}]$",
        "$[M^1 L^0 T^{-3} K^{-4}]$",
        "$[M^1 L^2 T^{-2} K^{-4}]$",
        "$[M^0 L^2 T^{-3} K^{-4}]$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nAccording to Stefan-Boltzmann Law, the radiated power (Energy per unit Time) per unit area is proportional to the fourth power of temperature.\n$\\frac{\\text{Energy}}{\\text{Time}} = \\sigma \\cdot \\text{Area} \\cdot \\text{Temp}^4$\n\n$[ML^2T^{-3}] = [\\sigma] \\cdot [L^2] \\cdot [K^4]$\n$[\\sigma] = \\frac{[ML^2T^{-3}]}{[L^2 K^4]} = [M^1 L^0 T^{-3} K^{-4}]$\n\n*(Asked in JEE Main 2022, 25th July, Shift 2)*"
    },
    {
      id: "units-dimensions-pyq-q15",
      question: "If pressure $P$, velocity $V$, and time $T$ are taken as fundamental physical quantities, the dimensional formula of force is: (JEE Main 2021)",
      options: [
        "$[P V^2 T^2]$",
        "$[P V^1 T^2]$",
        "$[P V^2 T^1]$",
        "$[P V^2 T^0]$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nForce ($F$) = Pressure ($P$) $\\times$ Area ($A$)\nArea has dimensions of Length$^2$ ($[L^2]$).\nSince $[V] = [LT^{-1}]$, we have $[L] = [VT]$.\nSo, Area $[A] = [L^2] = [V^2 T^2]$.\n\nTherefore, Force $[F] = [P] \\cdot [V^2 T^2] = [P V^2 T^2]$.\n\n*(Asked in JEE Main 2021, 20th Jul, Shift 2)*"
    },
    {
      id: "units-dimensions-pyq-q16",
      question: "The dimensional formula for coefficient of viscosity ($\\eta$) is: (JEE Main 2023)",
      options: [
        "$[M^1 L^{-1} T^{-1}]$",
        "$[M^1 L^1 T^{-1}]$",
        "$[M^1 L^{-1} T^{-2}]$",
        "$[M^1 L^{-2} T^{-1}]$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nUsing Stokes' Law for viscous force:\n$F = 6 \\pi \\eta r v$\nWhere $F$ is force, $r$ is radius, $v$ is velocity.\n\n$[\\eta] = \\frac{[F]}{[r][v]} = \\frac{[MLT^{-2}]}{[L] \\cdot [LT^{-1}]} = [M^1 L^{-1} T^{-1}]$\n\n*(Asked in JEE Main 2023, 25th Jan, Shift 1)*"
    },
    {
      id: "units-dimensions-pyq-q17",
      question: "Which of the following quantities has dimensions of time in the denominator with the highest power? (JEE Main 2024)",
      options: [
        "Pressure",
        "Power",
        "Acceleration",
        "Torque"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nLet's check the dimensions of each quantity:\n**Pressure** = Force/Area = $[ML^{-1}T^{-2}]$ (Time power is -2)\n**Power** = Work/Time = $[ML^2T^{-3}]$ (Time power is -3)\n**Acceleration** = Velocity/Time = $[LT^{-2}]$ (Time power is -2)\n**Torque** = Force $\\times$ Distance = $[ML^2T^{-2}]$ (Time power is -2)\n\nPower has $T^{-3}$, which corresponds to the time term in denominator with highest power (parameter of 3).\n\n*(Asked in JEE Main 2024, 8th Apr, Shift 1)*"
    },
    {
      id: "units-dimensions-pyq-q18",
      question: "Dimensions of magnetic permeability ($\\mu_0$) of vacuum are: (JEE Main 2022)",
      options: [
        "$[M^1 L^1 T^{-2} A^{-2}]$",
        "$[M^1 L^2 T^{-2} A^{-1}]$",
        "$[M^1 L^1 T^{-1} A^{-2}]$",
        "$[M^1 L^2 T^{-1} A^{-2}]$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nUsing Ampere's force law, the force per unit length between two parallel currents is:\n$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2 \\pi d}$\n\nRearranging for $\\mu_0$:\n$[\\mu_0] = \\frac{[F/L] \\cdot [d]}{[I^2]} = \\frac{([MLT^{-2}]/[L]) \\cdot [L]}{[A^2]} = \\frac{[MT^{-2}] \\cdot [L]}{[A^2]} = [M^1 L^1 T^{-2} A^{-2}]$\n\n*(Asked in JEE Main 2022, 27th June, Shift 2)*"
    },
    {
      id: "units-dimensions-pyq-q19",
      question: "Which of the following physical quantities has the dimension of $[M^1 L^2 T^{-3} A^{-1}]$? (JEE Main 2023)",
      options: [
        "Electric Potential",
        "Resistance",
        "Electric Flux",
        "Capacitance"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nLet's evaluate the dimension of Electric Potential ($V$):\n$V = \\frac{\\text{Work}}{\\text{Charge}}$\n\nDimensions of Work ($W$) = $[ML^2T^{-2}]$\nDimensions of Charge ($Q$) = $[\\text{Current} \\times \\text{Time}] = [AT]$\n\n$[V] = \\frac{[ML^2T^{-2}]}{[AT]} = [M^1 L^2 T^{-3} A^{-1}]$\n\n*(Asked in JEE Main 2023, 13th Apr, Shift 1)*"
    },
    {
      id: "units-dimensions-pyq-q20",
      question: "The dimensional formula for Planck's constant ($h$) is identical to that of: (JEE Main 2021)",
      options: [
        "Linear Momentum",
        "Angular Momentum",
        "Energy",
        "Power"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nPlanck's constant can be derived from $E = h\\nu$ (where $\\nu$ is frequency).\n$[h] = \\frac{[E]}{[\\nu]} = \\frac{[ML^2T^{-2}]}{[T^{-1}]} = [ML^2T^{-1}]$\n\nNow look at Angular Momentum ($L$):\n$L = mvr$\n$[L] = [M] \\cdot [LT^{-1}] \\cdot [L] = [ML^2T^{-1}]$\n\nBoth match perfectly.\n\n*(Asked in JEE Main 2021, 25th Jul, Shift 2)*"
    }
  ]
};

export default pyq;
