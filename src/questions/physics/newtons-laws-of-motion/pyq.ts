import { QuizSet } from '../../../types';

const pyq: QuizSet = {
  id: "pyq",
  title: "Previous Year Questions",
  subjectId: "physics",
  chapterId: "newtons-laws-of-motion",
  difficulty: "pyq",
  questions: [
    {
      id: "nlm-pyq-q1",
      question: "A body of mass $1\\text{ kg}$ is suspended with the help of two strings making angles of $60^\\circ$ and $30^\\circ$ with the horizontal ceiling as shown.\n\nFind the magnitude of tensions $T_1$ and $T_2$ respectively.\n\nTake: $g = 10\\text{ m/s}^2$\n\n![Diagram](https://i.ibb.co/7x3Rwsy5/NLM-01.png)\n\n(JEE Main 2023 / 2021)",
      options: [
        "$5\\text{ N} , 5\\sqrt{3}\\text{ N}$",
        "$5\\sqrt{3}\\text{ N} , 5\\text{ N}$",
        "$5\\sqrt{3}\\text{ N} , 5\\sqrt{3}\\text{ N}$",
        "$5\\text{ N} , 5\\text{ N}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**Step 1: Draw Free Body Diagram (FBD)**\nThe mass is in equilibrium under the action of:\n- Tension $T_1$\n- Tension $T_2$\n- Weight $mg$ acting downward\n\nSince the body is in equilibrium:\n\\Sigma F_x = 0  \n\\Sigma F_y = 0\n\n**Horizontal Equilibrium**\n$T_1 \\cos 60^\\circ = T_2 \\cos 30^\\circ$\n$T_1(1/2) = T_2(\\sqrt{3}/2)$\n$T_1 = \\sqrt{3} T_2$\n\n**Vertical Equilibrium**\n$T_1 \\sin 60^\\circ + T_2 \\sin 30^\\circ = mg$\nSubstitute values:\n$T_1(\\sqrt{3}/2) + T_2(1/2) = 10$\n\nSubstitute $T_1 = \\sqrt{3} T_2$\n$(\\sqrt{3}T_2)(\\sqrt{3}/2) + T_2(1/2) = 10$\n$(3/2)T_2 + (1/2)T_2 = 10$\n$2T_2 = 10 \\implies T_2 = 5\\text{ N}$\n\n**Find $T_1$**\n$T_1 = \\sqrt{3} \\times 5 = 5\\sqrt{3}\\text{ N}$\n\nFinal Answer:\n$T_1 = 5\\sqrt{3}\\text{ N}$  \n$T_2 = 5\\text{ N}$"
    },
    {
      id: "nlm-pyq-q2",
      question: "A cubic block of mass $m$ slides down a rough inclined plane inclined at $60^\\circ$ with constant acceleration $g/2$.\n\nFind the coefficient of kinetic friction $\\mu_k$.\n\n![Diagram](https://i.ibb.co/MxJPBKtV/NLM-02.png)\n\n(JEE Main 2022)",
      options: [
        "$\\sqrt{3} - 1$",
        "$\\sqrt{3}/2$",
        "$\\sqrt{2}/3$",
        "$1 - \\sqrt{3}/2$"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n**Step 1: Forces acting on the block**\nAlong incline:\n- Component of weight $= mg \\sin\\theta$\n- Friction force $= f_k = \\mu_k N$\n\nNormal reaction:\n$N = mg \\cos\\theta$\n\n**Apply Newton's Second Law**\nNet force along incline:\n$mg \\sin\\theta - f_k = ma$\nSubstitute friction:\n$mg \\sin\\theta - \\mu_k mg \\cos\\theta = ma$\n\nGiven:\n$\\theta = 60^\\circ$\n$a = g/2$\n\nSubstitute values:\n$mg \\sin 60^\\circ - \\mu_k mg \\cos 60^\\circ = m(g/2)$\nCancel $mg$:\n$\\sin 60^\\circ - \\mu_k \\cos 60^\\circ = 1/2$\nSubstitute trigonometric values:\n$(\\sqrt{3}/2) - \\mu_k(1/2) = 1/2$\nMultiply entire equation by 2:\n$\\sqrt{3} - \\mu_k = 1 \\implies \\mu_k = \\sqrt{3} - 1$"
    },
    {
      id: "nlm-pyq-q3",
      question: "A balloon and its contents have total mass $M$ and move upward with constant acceleration $a$.\n\nWhat mass $\\Delta m$ should be released so that the balloon accelerates upward with acceleration $3a$? Assume buoyant force remains constant. (JEE Main 2020)",
      options: [
        "$\\frac{3Ma}{2a - g}$",
        "$\\frac{3Ma}{2a + g}$",
        "$\\frac{2Ma}{3a + g}$",
        "$\\frac{2Ma}{3a - g}$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**Initial Condition**\nLet buoyant force be $F_B$.\nApplying Newton's Second Law:\n$F_B - Mg = Ma \\implies F_B = M(g + a)$\n\n**After Releasing Mass $\\Delta m$**\nNew mass: $(M - \\Delta m)$\nNew acceleration: $3a$\n\nApply Newton's Second Law again:\n$F_B - (M - \\Delta m)g = (M - \\Delta m)(3a)$\n\n**Substitute $F_B$**\n$M(g + a) - (M - \\Delta m)g = (M - \\Delta m)(3a)$\nExpand terms:\n$Mg + Ma - Mg + \\Delta mg = 3Ma - 3a\\Delta m$\nSimplify:\n$Ma + \\Delta mg = 3Ma - 3a\\Delta m$\n\n**Collect $\\Delta m$ terms**\n$\\Delta mg + 3a\\Delta m = 2Ma$\n$\\Delta m(g + 3a) = 2Ma \\implies \\Delta m = \\frac{2Ma}{3a + g}$"
    },
    {
      id: "nlm-pyq-q4",
      question: "Two blocks of masses $m_1 = 2\\text{ kg}$ and $m_2 = 3\\text{ kg}$ are placed in contact on a smooth horizontal surface.\n\nA horizontal force $F = 10\\text{ N}$ is applied on block $m_1$.\n\nFind the contact force between the two blocks.\n\n![Diagram](https://i.ibb.co/pjd8YR2t/NLM-03.png)\n\n(JEE Main 2023)",
      options: [
        "$2\\text{ N}$",
        "$4\\text{ N}$",
        "$6\\text{ N}$",
        "$8\\text{ N}$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**Step 1: Understand the motion**\nSince the surface is smooth (frictionless), both blocks move together with the same acceleration.\n\n**Find Common Acceleration**\nTotal mass of system:\n$m_{\\text{total}} = m_1 + m_2 = 2 + 3 = 5\\text{ kg}$\n\nUsing Newton's Second Law:\n$F = ma \\implies a = \\frac{F}{m_1 + m_2} = \\frac{10}{5} = 2\\text{ m/s}^2$\n\n**Find Contact Force**\nNow isolate block $m_2$.\nThe only horizontal force acting on $m_2$ is the contact force exerted by $m_1$.\n\nUsing Newton's Second Law:\n$N_c = m_2 \\times a = 3 \\times 2 = 6\\text{ N}$"
    },
    {
      id: "nlm-pyq-q5",
      question: "A small block of mass $m$ is kept on a smooth wedge of mass $M$ and inclination $\\theta$.\n\nWhat horizontal acceleration $a$ must be given to the wedge so that the block remains stationary relative to the wedge?\n\n![Diagram](https://i.ibb.co/jvSwx2cC/NLM-04.png)\n\n(JEE Main 2022)",
      options: [
        "$g \\sin\\theta$",
        "$g \\cos\\theta$",
        "$g \\tan\\theta$",
        "$g \\cot\\theta$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**Step 1: Observe from wedge frame**\nThe wedge is accelerating horizontally.\nTherefore, the wedge frame becomes a non-inertial frame.\nA pseudo force acts on the block opposite to the acceleration.\n\nPseudo force magnitude:\n$F_{\\text{pseudo}} = ma$\n\n**Resolve Forces Along Incline**\nFor the block to remain stationary relative to the wedge:\nNet force along incline must be zero.\n\nForces along incline:\n1. Component of gravity downward:\n$mg \\sin\\theta$\n2. Component of pseudo force upward along incline:\n$ma \\cos\\theta$\n\n**Apply Equilibrium Condition**\n$ma \\cos\\theta = mg \\sin\\theta$\nCancel $m$:\n$a \\cos\\theta = g \\sin\\theta \\implies a = g \\frac{\\sin\\theta}{\\cos\\theta} = g \\tan\\theta$"
    },
    {
      id: "nlm-pyq-q6",
      question: "A block of mass $m = 10\\text{ kg}$ is pulled along a rough horizontal floor by a force $F$ acting at an angle $30^\\circ$ above the horizontal.\n\nIf the coefficient of static friction is $\\mu_s = 1/\\sqrt{3}$, find the minimum force required to just start the motion.\n\nTake: $g = 10\\text{ m/s}^2$\n\n![Diagram](https://i.ibb.co/twC8DwWg/NLM-05.png)\n\n(JEE Main 2024)",
      options: [
        "$25\\text{ N}$",
        "$50\\text{ N}$",
        "$75\\text{ N}$",
        "$100\\text{ N}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**Step 1: Resolve the applied force**\nHorizontal component:\n$F \\cos 30^\\circ$\nVertical component:\n$F \\sin 30^\\circ$\nThe vertical component reduces the normal reaction.\n\n**Find Normal Reaction**\nVertical equilibrium:\n$N + F \\sin 30^\\circ = mg \\implies N = mg - F \\sin 30^\\circ$\n\n**Apply Limiting Friction Condition**\nFor motion to just begin:\nHorizontal pull = Maximum static friction\n$F \\cos 30^\\circ = \\mu_s N$\n\nSubstitute $N$:\n$F \\cos 30^\\circ = \\mu_s(mg - F \\sin 30^\\circ)$\n\n**Substitute Numerical Values**\n$F(\\sqrt{3}/2) = (1/\\sqrt{3})[100 - F(1/2)]$\nMultiply both sides by $\\sqrt{3}$:\n$(3/2)F = 100 - (1/2)F$\nBring terms together:\n$(3/2)F + (1/2)F = 100 \\implies 2F = 100 \\implies F = 50\\text{ N}$"
    },
    {
      id: "nlm-pyq-q7",
      question: "A block of mass $m_1 = 5\\text{ kg}$ is placed on a smooth incline of angle $30^\\circ$.\n\nIt is connected over a frictionless pulley to a hanging block of mass $m_2 = 5\\text{ kg}$.\n\nFind the acceleration of the block on the incline. Take: $g = 10\\text{ m/s}^2$\n\n![Diagram](https://i.ibb.co/HpHXBz6d/NLM-06.png)\n\n(JEE Main 2023)",
      options: [
        "$1.5\\text{ m/s}^2$",
        "$2.5\\text{ m/s}^2$",
        "$5\\text{ m/s}^2$",
        "$0.5\\text{ m/s}^2$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**Step 1: Forces acting on each block**\nFor hanging block:\nDownward force = $m_2 g$\n\nFor block on incline:\nComponent down incline = $m_1 g \\sin 30^\\circ$\n\n**Equation for Hanging Block**\n$m_2 g - T = m_2 a$\n$5(10) - T = 5a \\implies 50 - T = 5a$       ---- (1)\n\n**Equation for Inclined Block**\n$T - m_1 g \\sin 30^\\circ = m_1 a$\n$T - 5(10)(1/2) = 5a \\implies T - 25 = 5a$       ---- (2)\n\n**Add Equations (1) and (2)**\n$50 - T + T - 25 = 5a + 5a$\n$25 = 10a \\implies a = 2.5\\text{ m/s}^2$"
    },
    {
      id: "nlm-pyq-q8",
      question: "A lift accelerates upward with acceleration $2\\text{ m/s}^2$ and later decelerates with retardation $4\\text{ m/s}^2$.\n\nA man of mass $60\\text{ kg}$ stands on a weighing machine inside the lift.\n\nFind the ratio of maximum reading to minimum reading. Take: $g = 10\\text{ m/s}^2$ (JEE Main 2023)",
      options: [
        "$3 : 1$",
        "$1 : 2$",
        "$2 : 1$",
        "$4 : 3$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**Maximum Reading**\nMaximum apparent weight occurs when lift accelerates upward.\n$R_{\\text{max}} = m(g + a) = 60(10 + 2) = 60 \\times 12 = 720\\text{ N}$\n\n**Minimum Reading**\nDuring upward retardation, acceleration acts downward.\n$R_{\\text{min}} = m(g - a) = 60(10 - 4) = 60 \\times 6 = 360\\text{ N}$\n\n**Find Ratio**\nRatio = $R_{\\text{max}} / R_{\\text{min}} = 720 / 360 = 2 / 1$"
    },
    {
      id: "nlm-pyq-q9",
      question: "A horizontal force varies with time as $F(t) = 6t\\text{ N}$.\n\nIt acts on a particle of mass $2\\text{ kg}$ initially at rest.\n\nFind the velocity of the particle at $t = 4\\text{ s}$. (JEE Main 2022)",
      options: [
        "$12\\text{ m/s}$",
        "$24\\text{ m/s}$",
        "$36\\text{ m/s}$",
        "$48\\text{ m/s}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**Step 1: Use impulse-momentum theorem**\nImpulse = Change in momentum\n$\\int F dt = m(v - u)$\nSince particle starts from rest: $u = 0$\n\n**Integrate Force Function**\n$\\int_{0}^{4} 6t dt = [3t^2]_{0}^{4} = 3(16) = 48\\text{ N}\\cdot\\text{s}$\n\n**Find Final Velocity**\nImpulse = $mv$\n$48 = 2v \\implies v = 24\\text{ m/s}$"
    },
    {
      id: "nlm-pyq-q10",
      question: "A sphere of mass $2\\text{ kg}$ is held stationary by three coplanar forces.\n\nTwo forces are perpendicular to each other and have magnitudes $F_1 = 12\\text{ N}$ and $F_2 = 16\\text{ N}$.\n\nFind the magnitude of the third force $F_3$ required for equilibrium. (JEE Main 2021)",
      options: [
        "$14\\text{ N}$",
        "$28\\text{ N}$",
        "$20\\text{ N}$",
        "$10\\text{ N}$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**Step 1: Condition for equilibrium**\nFor equilibrium:\n$\\Sigma F = 0$\nTherefore the third force must balance the resultant of $F_1$ and $F_2$.\n\n**Find Resultant of $F_1$ and $F_2$**\nSince forces are perpendicular:\n$R = \\sqrt{F_1^2 + F_2^2} = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20\\text{ N}$\n\n**Magnitude of Third Force**\nFor equilibrium: $F_3 = R = 20\\text{ N}$"
    }
  ]
};

export default pyq;
