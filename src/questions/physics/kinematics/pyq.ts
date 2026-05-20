import { QuizSet } from '../../../types';

const pyq: QuizSet = {
  id: "pyq",
  title: "Previous Year Questions",
  subjectId: "physics",
  chapterId: "kinematics",
  difficulty: "pyq",
  questions: [
    {
      id: "kinematics-pyq-q1",
      question: "The position vector of an ant moving in the Y–Z plane is given by $S = 2t^2 \\hat{j} + 5 \\hat{k}$ (metres), where $t$ is in seconds. Find the magnitude and direction of the velocity of the ant at $t = 1\\text{ s}$. (JEE Main 2024)",
      options: [
        "$4\\text{ m/s}$ along positive y-axis",
        "$4\\text{ m/s}$ along positive x-axis",
        "$5\\text{ m/s}$ along positive z-axis",
        "$2\\text{ m/s}$ along positive y-axis"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1: Write the position vector**\n$S = 2t^2 \\hat{j} + 5 \\hat{k}$\n\n**Step 2: Velocity is the derivative of position vector**\n$v = \\frac{dS}{dt} = \\frac{d}{dt} (2t^2 \\hat{j} + 5 \\hat{k}) = 4t \\hat{j}$\n\n**Step 3: Substitute $t = 1\\text{ s}$**\n$v = 4(1) \\hat{j} = 4\\hat{j}\\text{ m/s}$\n\n**Step 4: Find magnitude and direction**\nMagnitude = $|v| = 4\\text{ m/s}$\nDirection = Along positive y-axis ($\\hat{j}$ direction)\n\n*(Asked in JEE Main 2024, 27 January, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q2",
      question: "A particle starts from origin at $t = 0$ with velocity $5\\hat{i}\\text{ m/s}$ and moves in the X–Y plane under a constant acceleration $\\vec{a} = (3\\hat{i} + 2\\hat{j})\\text{ m/s}^2$. If the x-coordinate of the particle becomes $84\\text{ m}$, the speed of the particle is $\\sqrt{\\alpha}\\text{ m/s}$. Find the value of $\\alpha$. (JEE Main 2024)",
      options: ["$673$", "$576$", "$625$", "$700$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Initial velocity components: $u_x = 5\\text{ m/s}, u_y = 0\\text{ m/s}$. Acceleration: $a_x = 3\\text{ m/s}^2, a_y = 2\\text{ m/s}^2$.\nGiven $x = 84\\text{ m}$.\n\n**Step 2:** Use equation of motion in x-direction:\n$x = u_x t + \\frac{1}{2} a_x t^2 \\implies 84 = 5t + \\frac{1}{2}(3)t^2 \\implies 84 = 5t + 1.5t^2$\nMultiply by 2: $168 = 10t + 3t^2 \\implies 3t^2 + 10t - 168 = 0$\n\n**Step 3:** Solve quadratic equation:\n$(3t + 28)(t - 6) = 0 \\implies t = 6\\text{ s}$\n\n**Step 4:** Find velocity components at $t = 6\\text{ s}$:\n$v_x = u_x + a_x t = 5 + 3(6) = 23\\text{ m/s}$\n$v_y = u_y + a_y t = 0 + 2(6) = 12\\text{ m/s}$\n\n**Step 5:** Find speed:\n$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{23^2 + 12^2} = \\sqrt{529 + 144} = \\sqrt{673}$\nComparing with $\\sqrt{\\alpha}$, we get $\\alpha = 673$.\n\n*(Asked in JEE Main 2024, 27 January, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q3",
      question: "A bullet fired into a fixed target loses one third of its velocity after travelling $4\\text{ cm}$. It penetrates further $D \\times 10^{-3}\\text{ m}$ before coming to rest. Find the value of $D$. (JEE Main 2024)",
      options: ["$32$", "$16$", "$24$", "$40$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let initial velocity = $u$. After losing one-third velocity, $v = u - u/3 = 2u/3$.\nDistance travelled $s = 4\\text{ cm} = 0.04\\text{ m}$.\n\n**Step 2:** Apply equation of motion:\n$v^2 = u^2 - 2as \\implies (2u/3)^2 = u^2 - 2a(0.04)$\n$4u^2/9 = u^2 - 0.08a \\implies 0.08a = 5u^2/9 \\implies a = \\frac{5u^2}{9 \\times 0.08}$\n\n**Step 3:** Bullet comes to rest for the second phase:\nInitial velocity = $2u/3$, Final velocity = $0$.\n$0 = (2u/3)^2 - 2ax \\implies 2ax = 4u^2/9 \\implies x = \\frac{4u^2}{18a}$\n\n**Step 4:** Substitute $a$:\n$x = \\left(\\frac{4u^2}{18}\\right) \\times \\left(\\frac{9 \\times 0.08}{5u^2}\\right) = \\frac{4 \\times 0.08}{10} = 0.032\\text{ m}$\nConvert to format $D \\times 10^{-3}\\text{ m}$: $x = 32 \\times 10^{-3}\\text{ m}$. Therefore $D = 32$.\n\n*(Asked in JEE Main 2024, 27 January, Shift 2. Note: NTA declared this a BONUS as 32 wasn\\'t in original options.)*"
    },
    {
      id: "kinematics-pyq-q4",
      question: "A body starts from rest with constant acceleration. It covers displacement $S_1$ in the first $(p - 1)$ seconds and $S_2$ in the first $p$ seconds. Find the time required to cover displacement $(S_1 + S_2)$. (JEE Main 2021)",
      options: [
        "$(2p + 1)\\text{ s}$",
        "$\\sqrt{2p^2 - 2p + 1}\\text{ s}$",
        "$(2p - 1)\\text{ s}$",
        "$(2p^2 - 2p + 1)\\text{ s}$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Displacement equation: $S = ut + \\frac{1}{2}at^2$. Since body starts from rest, $u = 0$.\n\n**Step 2:** Displacement in first $(p - 1)$ seconds:\n$S_1 = \\frac{1}{2}a(p - 1)^2$\n\n**Step 3:** Displacement in first $p$ seconds:\n$S_2 = \\frac{1}{2}ap^2$\n\n**Step 4:** Add displacements:\n$S_1 + S_2 = \\frac{1}{2}a[(p - 1)^2 + p^2] = \\frac{1}{2}a(p^2 - 2p + 1 + p^2) = \\frac{1}{2}a(2p^2 - 2p + 1)$\n\n**Step 5:** Let total time be $t$. $S_1 + S_2 = \\frac{1}{2}at^2$.\nEquating both: $\\frac{1}{2}at^2 = \\frac{1}{2}a(2p^2 - 2p + 1)$\n$t^2 = 2p^2 - 2p + 1 \\implies t = \\sqrt{2p^2 - 2p + 1}$\n\n*(Asked in JEE Main 2021, 27 August, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q5",
      question: "A particle of mass $m$ is projected with velocity $u$ making an angle $30^\\circ$ with the horizontal. The magnitude of angular momentum of the projectile about the point of projection when the particle is at its maximum height $h$ is: (JEE Main 2024)",
      options: [
        "$\\frac{\\sqrt{3}}{16} \\frac{mu^3}{g}$",
        "$\\frac{3}{2} \\frac{mu^2}{g}$",
        "$\\frac{mu^3}{2g}$",
        "Zero"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Angular momentum about the point of projection is $L = m \\times v \\times r_{\\perp}$, where $r_{\\perp}$ is the perpendicular distance from the line of motion to the origin.\n\n**Step 2:** At maximum height, vertical velocity = $0$, horizontal velocity = $u \\cos\\theta$.\nPerpendicular distance from origin to line of motion = maximum height ($h$).\nTherefore, $L = m(v_x)h$.\n\n**Step 3:** Horizontal velocity $v_x = u \\cos 30^\\circ = u \\frac{\\sqrt{3}}{2}$.\n\n**Step 4:** Maximum height $h = \\frac{u^2 \\sin^2 30^\\circ}{2g} = \\frac{u^2 (1/2)^2}{2g} = \\frac{u^2}{8g}$.\n\n**Step 5:** Substitute values:\n$L = m \\left(u \\frac{\\sqrt{3}}{2}\\right) \\left(\\frac{u^2}{8g}\\right) = \\frac{\\sqrt{3}}{16} \\frac{mu^3}{g}$\n\n*(Asked in JEE Main 2024, 30 January, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q6",
      question: "The displacement and the increase in velocity of a moving particle in the time interval from $t$ to $(t + 1)\\text{ s}$ are $125\\text{ m}$ and $50\\text{ m/s}$ respectively. The distance travelled by the particle in the $(t + 2)$th second is ______ m. (JEE Main 2024)",
      options: ["$175\\text{ m}$", "$150\\text{ m}$", "$125\\text{ m}$", "$200\\text{ m}$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1: Find acceleration**\nChange in velocity = $50\\text{ m/s}$, time interval = $1\\text{ s}$.\n$a = \\frac{\\Delta v}{\\Delta t} = \\frac{50}{1} = 50\\text{ m/s}^2$.\n\n**Step 2: Displacement from $t$ to $t+1$**\n$S = v_t(1) + \\frac{1}{2}a(1)^2 \\implies 125 = v_t + 25 \\implies v_t = 100\\text{ m/s}$.\n\n**Step 3: Velocity at $t + 1$**\n$v_{t+1} = v_t + a = 100 + 50 = 150\\text{ m/s}$.\n\n**Step 4: Distance in $(t+2)$th second**\nThis corresponds to displacement between $(t+1)$ and $(t+2)$ (a $1\\text{ s}$ interval with initial velocity $v_{t+1}$).\n$S = v_{t+1}(1) + \\frac{1}{2}a(1)^2 = 150(1) + \\frac{1}{2}(50)(1)^2 = 150 + 25 = 175\\text{ m}$.\n\n*(Asked in JEE Main 2024, 30 January, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q7",
      question: "A particle moves in a circle of radius $R$ with uniform speed and completes one revolution in time $T$. If it is projected with the same speed at an angle $\\theta$ to the horizontal and the maximum height attained is $4R$, then $\\theta$ is: (JEE Main 2024)",
      options: [
        "$\\sin^{-1}\\left[\\left(\\frac{\\pi^2 R}{2gT^2}\\right)^{1/2}\\right]$",
        "$\\sin^{-1}\\left[\\left(\\frac{2gT^2}{\\pi^2 R}\\right)^{1/2}\\right]$",
        "$\\cos^{-1}\\left[\\left(\\frac{2gT^2}{\\pi^2 R}\\right)^{1/2}\\right]$",
        "$\\cos^{-1}\\left[\\left(\\frac{\\pi^2 R}{2gT^2}\\right)^{1/2}\\right]$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Speed in circular motion:\n$v = \\frac{\\text{distance}}{\\text{time}} = \\frac{2\\pi R}{T}$.\n\n**Step 2:** Maximum height in projectile motion:\n$H = \\frac{v^2 \\sin^2\\theta}{2g}$. Given $H = 4R$.\n\n**Step 3:** Substitute velocity:\n$4R = \\frac{\\left(\\frac{2\\pi R}{T}\\right)^2 \\sin^2\\theta}{2g} = \\frac{\\frac{4\\pi^2 R^2}{T^2} \\sin^2\\theta}{2g} = \\frac{2\\pi^2 R^2 \\sin^2\\theta}{gT^2}$.\n\n**Step 4:** Simplify and divide by $R$:\n$4 = \\frac{2\\pi^2 R \\sin^2\\theta}{gT^2} \\implies 2 = \\frac{\\pi^2 R \\sin^2\\theta}{gT^2}$.\n\n**Step 5:** Solve for $\\sin\\theta$:\n$\\sin^2\\theta = \\frac{2gT^2}{\\pi^2 R} \\implies \\sin\\theta = \\sqrt{\\frac{2gT^2}{\\pi^2 R}}$.\n$\\theta = \\sin^{-1}\\left[\\left(\\frac{2gT^2}{\\pi^2 R}\\right)^{1/2}\\right]$.\n\n*(Asked in JEE Main 2024, 1 February, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q8",
      question: "Train A moves north with speed $72\\text{ km/h}$ and Train B moves south with speed $108\\text{ km/h}$ on parallel tracks. Find the velocity of B with respect to A and the velocity of ground with respect to B (North = positive, South = negative). (JEE Main 2024)",
      options: [
        "$-30\\text{ m/s}, \\, 50\\text{ m/s}$",
        "$-50\\text{ m/s}, \\, -30\\text{ m/s}$",
        "$-50\\text{ m/s}, \\, 30\\text{ m/s}$",
        "$50\\text{ m/s}, \\, -30\\text{ m/s}$"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Convert speeds to m/s:\n$72\\text{ km/h} = 20\\text{ m/s}$ (Train A)\n$108\\text{ km/h} = 30\\text{ m/s}$ (Train B)\n\n**Step 2:** Choose direction (North = positive, South = negative):\n$v_A = +20\\text{ m/s}$\n$v_B = -30\\text{ m/s}$\n\n**Step 3:** Velocity of B relative to A:\n$v_{B/A} = v_B - v_A = -30 - 20 = -50\\text{ m/s}$.\n\n**Step 4:** Velocity of ground relative to B:\n$v_{G/B} = v_G - v_B$. (Velocity of ground is zero, $v_G = 0$).\n$v_{G/B} = 0 - (-30) = +30\\text{ m/s}$.\n\n*(Asked in JEE Main 2024, 1 February, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q9",
      question: "A particle moves along the x-axis under a variable force. Its position is given by $x = -3t^3 + 18t^2 + 16t$. Find the velocity when acceleration becomes zero. (JEE Main 2024)",
      options: ["$52\\text{ m/s}$", "$36\\text{ m/s}$", "$16\\text{ m/s}$", "$72\\text{ m/s}$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Velocity function:\n$v = \\frac{dx}{dt} = \\frac{d}{dt}(-3t^3 + 18t^2 + 16t) = -9t^2 + 36t + 16$.\n\n**Step 2:** Acceleration function:\n$a = \\frac{dv}{dt} = \\frac{d}{dt}(-9t^2 + 36t + 16) = -18t + 36$.\n\n**Step 3:** Set acceleration to zero:\n$-18t + 36 = 0 \\implies t = 2\\text{ s}$.\n\n**Step 4:** Velocity at $t = 2\\text{ s}$:\n$v = -9(2)^2 + 36(2) + 16 = -36 + 72 + 16 = 52\\text{ m/s}$.\n\n*(Asked in JEE Main 2024, 1 February, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q10",
      question: "A particle starts from rest at $x = 0$ and moves along the x-axis with velocity $v = 4\\sqrt{x}\\text{ (m/s)}$. Find the acceleration. (JEE Main 2024)",
      options: ["$8\\text{ m/s}^2$", "$4\\text{ m/s}^2$", "$16\\text{ m/s}^2$", "$2\\text{ m/s}^2$"],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Express velocity:\n$v = 4\\sqrt{x} = 4x^{1/2}$.\n\n**Step 2:** Acceleration formula when velocity depends on position:\n$a = v \\frac{dv}{dx}$.\n\n**Step 3:** Differentiate velocity w.r.t $x$:\n$\\frac{dv}{dx} = \\frac{d}{dx} (4x^{1/2}) = 4\\left(\\frac{1}{2}\\right)x^{-1/2} = \\frac{2}{\\sqrt{x}}$.\n\n**Step 4:** Substitute into acceleration formula:\n$a = (4\\sqrt{x}) \\left(\\frac{2}{\\sqrt{x}}\\right) = 8\\text{ m/s}^2$.\n\n*(Asked in JEE Main 2024, 1 February, Shift 2)*"
    }
  ]
};

export default pyq;
