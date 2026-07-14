with open("src/questions/physics/newtons-laws-of-motion/pyq.ts", "w") as f:
    f.write(r"""import { QuizSet } from '../../../types';

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
    },
    {
      id: "nlm-pyq-q11",
      question: "A player caught a cricket ball of mass $150\\text{ g}$ moving at a speed of $20\\text{ m/s}$. If the catching process is completed in $0.1\\text{ s}$, the magnitude of force exerted by the ball on the hand of the player is: (JEE Main April 8, 2024 (I))",
      options: [
        "$150\\text{ N}$",
        "$3\\text{ N}$",
        "$30\\text{ N}$",
        "$300\\text{ N}$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**1. Identify given values and convert mass into SI units:**\nMass of the ball ($m$) $= 150\\text{ g} = 0.15\\text{ kg}$\nInitial velocity ($u$) $= 20\\text{ m/s}$\nFinal velocity ($v$) $= 0\\text{ m/s}$ (since the ball is caught and brought to rest)\nTime interval ($\\Delta t$) $= 0.1\\text{ s}$\n\n**2. Apply Newton's Second Law of Motion:**\nMagnitude of Force ($F$) $= |\\Delta P / \\Delta t| = |m(v - u) / \\Delta t|$\n\n**3. Substitute the values:**\n$F = 0.15 \\times (20 - 0) / 0.1$\n$F = 3 / 0.1 = 30\\text{ N}$"
    },
    {
      id: "nlm-pyq-q12",
      question: "A wooden block of mass $5\\text{ kg}$ rests on soft horizontal floor. When an iron cylinder of mass $25\\text{ kg}$ is placed on the top of the block, the floor yields and the block and the cylinder together go down with an acceleration of $0.1\\text{ ms}^{-2}$. The action force of the system on the floor is equal to: (JEE Main April 5, 2024 (I))",
      options: [
        "$297\\text{ N}$",
        "$294\\text{ N}$",
        "$291\\text{ N}$",
        "$196\\text{ N}$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**1. Treat the wooden block and the iron cylinder as a single combined system:**\nTotal mass ($M$) $= 5\\text{ kg} + 25\\text{ kg} = 30\\text{ kg}$\nDownward acceleration ($a$) $= 0.1\\text{ ms}^{-2}$\nAcceleration due to gravity ($g$) $= 9.8\\text{ ms}^{-2}$\n\n**2. Let N be the normal reaction force exerted upward by the floor on the system:**\nWrite the equation of motion for downward travel:\nNet Force $= M \\times a$\n$Mg - N = Ma$\n\n**3. Rearrange to find the normal reaction force N:**\n$N = M(g - a)$\n$N = 30(9.8 - 0.1)$\n$N = 30 \\times 9.7 = 291\\text{ N}$\n\n**4. Apply Newton's Third Law:**\nThe downward action force exerted by the system on the floor is equal in magnitude to this upward normal reaction force.\nAction Force $= 291\\text{ N}$"
    },
    {
      id: "nlm-pyq-q13",
      question: "A particle moves in $x-y$ plane under the influence of a force $\\vec{F}$ such that its linear momentum is $\\vec{P}(t) = \\hat{i} \\cos(kt) - \\hat{j} \\sin(kt)$. If $k$ is constant, the angle between $\\vec{F}$ and $\\vec{P}$ will be: (JEE Main April 5, 2024 (II))",
      options: [
        "$\\pi / 2$",
        "$\\pi / 6$",
        "$\\pi / 4$",
        "$\\pi / 3$"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n**1. According to Newton's Second Law, force is the time derivative of linear momentum:**\n$\\vec{F} = \\frac{d\\vec{P}}{dt}$\n\n**2. Differentiate the given momentum vector with respect to time $t$:**\n$\\vec{F} = \\frac{d}{dt} [\\hat{i} \\cos(kt) - \\hat{j} \\sin(kt)]$\n$\\vec{F} = -k \\sin(kt)\\hat{i} - k \\cos(kt)\\hat{j}$\n\n**3. Find the angle between the two vectors by computing their dot product $\\vec{F} \\cdot \\vec{P}$:**\n$\\vec{F} \\cdot \\vec{P} = [ -k \\sin(kt) ][ \\cos(kt) ] + [ -k \\cos(kt) ][ -\\sin(kt) ]$\n$\\vec{F} \\cdot \\vec{P} = -k \\sin(kt)\\cos(kt) + k \\sin(kt)\\cos(kt) = 0$\n\n**4. Since the dot product is exactly zero, the vectors are perpendicular (orthogonal) to each other:**\nAngle $= 90^\\circ = \\pi / 2\\text{ radians}$"
    },
    {
      id: "nlm-pyq-q14",
      question: "A spherical body of mass $100\\text{ g}$ is dropped from a height of $10\\text{ m}$ from the ground. After hitting the ground, the body rebounds to a height of $5\\text{ m}$. The impulse of force imparted by the ground to the body is given by : (given, $g = 9.8\\text{ m/s}^2$) (JEE Main Jan. 30, 2024 (I))",
      options: [
        "$4.32\\text{ kg ms}^{-1}$",
        "$43.2\\text{ kg ms}^{-1}$",
        "$23.9\\text{ kg ms}^{-1}$",
        "$2.39\\text{ kg ms}^{-1}$"
      ],
      answer: 3,
      explanation: "**Detailed Solution:**\n\n**1. List the given parameters and convert to SI units:**\nMass ($m$) $= 100\\text{ g} = 0.1\\text{ kg}$\nInitial height ($h_1$) $= 10\\text{ m}$\nRebound height ($h_2$) $= 5\\text{ m}$\n\n**2. Calculate the velocity just before hitting the ground ($v_1$), taking downwards as positive:**\n$v_1 = \\sqrt{2gh_1} = \\sqrt{2 \\times 9.8 \\times 10} = \\sqrt{196} = 14\\text{ m/s}$ (downwards)\n\n**3. Calculate the velocity just after rebound ($v_2$), taking upwards as negative:**\n$v_2 = -\\sqrt{2gh_2} = -\\sqrt{2 \\times 9.8 \\times 5} = -\\sqrt{98} \\approx -9.9\\text{ m/s}$ (upwards)\n\n**4. Calculate the impulse (change in momentum):**\nImpulse $= |\\Delta P| = m|v_1 - v_2| = 0.1 \\times |14 - (-9.9)|$\nImpulse $= 0.1 \\times 23.9 = 2.39\\text{ kg ms}^{-1}$"
    },
    {
      id: "nlm-pyq-q15",
      question: "A body of mass $1000\\text{ kg}$ is moving horizontally with a velocity $6\\text{ m/s}$. If $200\\text{ kg}$ extra mass is added, the final velocity (in m/s) is: (JEE Main Jan. 27, 2024 (I))",
      options: [
        "6",
        "2",
        "3",
        "5"
      ],
      answer: 3,
      explanation: "**Detailed Solution:**\n\n**1. Since no external horizontal force acts on the system, apply the law of conservation of linear momentum:**\nInitial Momentum = Final Momentum\n$m_1v_1 = (m_1 + m_2)v_2$\n\n**2. Substitute the given values ($m_1 = 1000\\text{ kg}$, $v_1 = 6\\text{ m/s}$, $m_2 = 200\\text{ kg}$):**\n$1000 \\times 6 = (1000 + 200) \\times v_2$\n$6000 = 1200 \\times v_2$\n\n**3. Solve for final velocity $v_2$:**\n$v_2 = 6000 / 1200 = 5\\text{ m/s}$"
    },
    {
      id: "nlm-pyq-q16",
      question: "A bullet $10\\text{ g}$ leaves the barrel of gun with a velocity of $600\\text{ m/s}$. If the barrel of gun is $50\\text{ cm}$ long and mass of gun is $3\\text{ kg}$, then value of impulse supplied to the gun will be: (JEE Main April 13, 2023 (I))",
      options: [
        "$12\\text{ Ns}$",
        "$6\\text{ Ns}$",
        "$36\\text{ Ns}$",
        "$3\\text{ Ns}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. According to Newton's Third Law (or Conservation of Momentum):**\nThe magnitude of impulse supplied to the gun is equal to the magnitude of impulse supplied to the bullet.\n\n**2. Calculate the momentum of the bullet leaving from rest:**\nMass of bullet ($m$) $= 10\\text{ g} = 0.01\\text{ kg}$\nVelocity of bullet ($v$) $= 600\\text{ m/s}$\nImpulse = Change in momentum of bullet $= m \\times v$\nImpulse $= 0.01\\text{ kg} \\times 600\\text{ m/s} = 6\\text{ Ns}$"
    },
    {
      id: "nlm-pyq-q17",
      question: "Three forces $\\vec{F}_1 = 10\\text{ N}$, $\\vec{F}_2 = 8\\text{ N}$, $\\vec{F}_3 = 6\\text{ N}$ are acting on a particle of mass $5\\text{ kg}$. The forces $\\vec{F}_2$ and $\\vec{F}_3$ are applied perpendicularly so that particle remains at rest. If the force $\\vec{F}_1$ is removed, then the acceleration of the particle is: (JEE Main April 12, 2023 (I))",
      options: [
        "$2\\text{ ms}^{-2}$",
        "$0.5\\text{ ms}^{-2}$",
        "$4.8\\text{ ms}^{-2}$",
        "$7\\text{ ms}^{-2}$"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n**1. Initially, the particle is at rest under all three forces:**\nThis means the net resultant force is zero:\n$\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0 \\implies \\vec{F}_1 = -(\\vec{F}_2 + \\vec{F}_3)$\n\n**2. Since $\\vec{F}_2$ and $\\vec{F}_3$ are perpendicular, their resultant magnitude is:**\n$|\\vec{F}_2 + \\vec{F}_3| = \\sqrt{F_2^2 + F_3^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10\\text{ N}$\n\n**3. Therefore, the magnitude of $\\vec{F}_1$ balances this resultant exactly ($10\\text{ N}$).**\nWhen $\\vec{F}_1$ is removed, the remaining net force acting on the particle is simply the resultant of $\\vec{F}_2$ and $\\vec{F}_3$:\nNet Force $= 10\\text{ N}$\n\n**4. Find the acceleration using Newton's Second Law ($m = 5\\text{ kg}$):**\n$a = \\frac{\\text{Net Force}}{\\text{mass}} = \\frac{10}{5} = 2\\text{ ms}^{-2}$"
    },
    {
      id: "nlm-pyq-q18",
      question: "An average force of $125\\text{ N}$ is applied on a machine gun firing bullets each of mass $10\\text{ g}$ at the speed of $250\\text{ m/s}$ to keep it in position. The number of bullets fired per second by the machine gun is : (JEE Main April 11, 2023 (I))",
      options: [
        "5",
        "50",
        "100",
        "255"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Let the number of bullets fired per second be $n$.**\n\n**2. The force required to hold the gun is equal to the rate of change of momentum of the bullets:**\nForce $= n \\times m \\times v$\n\n**3. Convert parameters to SI units:**\nMass of each bullet ($m$) $= 10\\text{ g} = 0.01\\text{ kg}$\nSpeed ($v$) $= 250\\text{ m/s}$\nForce ($F$) $= 125\\text{ N}$\n\n**4. Substitute values and solve for $n$:**\n$125 = n \\times 0.01 \\times 250$\n$125 = n \\times 2.5$\n$n = \\frac{125}{2.5} = 50\\text{ bullets per second}$"
    },
    {
      id: "nlm-pyq-q19",
      question: "A body of mass $500\\text{ g}$ moves along x-axis such that its velocity varies with displacement $x$ according to the relation $v = 10\\sqrt{x}\\text{ m/s}$. The force acting on the body is: (JEE Main April 11, 2023 (II))",
      options: [
        "$166\\text{ N}$",
        "$25\\text{ N}$",
        "$125\\text{ N}$",
        "$5\\text{ N}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Write down the given velocity-displacement relationship and mass in SI units:**\n$v = 10x^{1/2}$\nMass ($m$) $= 500\\text{ g} = 0.5\\text{ kg}$\n\n**2. Find the spatial derivative of velocity (dv/dx):**\n$\\frac{dv}{dx} = 10 \\times \\frac{1}{2} x^{-1/2} = \\frac{5}{\\sqrt{x}}$\n\n**3. Calculate acceleration ($a$) using the space-dependent formula $a = v \\frac{dv}{dx}$:**\n$a = (10\\sqrt{x}) \\times \\left(\\frac{5}{\\sqrt{x}}\\right) = 50\\text{ m/s}^2$\n\n**4. Calculate the net force using $F = ma$:**\n$F = 0.5\\text{ kg} \\times 50\\text{ m/s}^2 = 25\\text{ N}$"
    },
    {
      id: "nlm-pyq-q20",
      question: "At any instant the velocity of a particle of mass $500\\text{ g}$ is $(2t \\hat{i} + 3t^2 \\hat{j})\\text{ ms}^{-1}$. If the force acting on the particle at $t = 1\\text{ s}$ is $(\\hat{i} + x \\hat{j})\\text{ N}$. Then the value of $x$ will be: (JEE Main April 8, 2023 (I))",
      options: [
        "3",
        "4",
        "6",
        "2"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n**1. Identify the given parameters and convert mass to SI units:**\nMass ($m$) $= 500\\text{ g} = 0.5\\text{ kg}$\nVelocity vector $\\vec{v}(t) = 2t \\hat{i} + 3t^2 \\hat{j}$\n\n**2. Find the acceleration vector $\\vec{a}(t)$ by differentiating velocity with respect to time $t$:**\n$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d}{dt} [2t \\hat{i} + 3t^2 \\hat{j}] = 2 \\hat{i} + 6t \\hat{j}$\n\n**3. Evaluate the acceleration vector at $t = 1\\text{ s}$:**\n$\\vec{a}(1) = 2 \\hat{i} + 6(1) \\hat{j} = 2 \\hat{i} + 6 \\hat{j}\\text{ m/s}^2$\n\n**4. Calculate the net force vector acting on the particle at $t = 1\\text{ s}$ using $\\vec{F} = m\\vec{a}$:**\n$\\vec{F} = 0.5 \\times (2 \\hat{i} + 6 \\hat{j}) = 1 \\hat{i} + 3 \\hat{j}\\text{ N}$\n\n**5. Compare this calculated force with the given force expression $(\\hat{i} + x \\hat{j})\\text{ N}$:**\n$x = 3$"
    },
    {
      id: "nlm-pyq-q21",
      question: "A cricket player catches a ball of mass $120\\text{ g}$ moving with $25\\text{ m/s}$ speed. If the catching process is completed in $0.1\\text{ s}$ then the magnitude of force exerted by the ball on the hand of player will be (in SI unit) : (JEE Main Feb. 1, 2024 (II))",
      options: [
        "30",
        "24",
        "12",
        "25"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n**1. Identify the given parameters and convert mass into kilograms (SI unit):**\nMass of the ball ($m$) $= 120\\text{ g} = 0.12\\text{ kg}$\nInitial speed ($u$) $= 25\\text{ m/s}$\nFinal speed ($v$) $= 0\\text{ m/s}$ (since the ball is caught and brought to rest)\nTime interval ($\\Delta t$) $= 0.1\\text{ s}$\n\n**2. Apply Newton's Second Law of Motion:**\nForce ($F$) $= |\\Delta P / \\Delta t| = |m(v - u) / \\Delta t|$\n\n**3. Substitute the numerical values:**\n$F = 0.12 \\times |0 - 25| / 0.1$\n$F = (0.12 \\times 25) / 0.1 = 3 / 0.1 = 30\\text{ N}$"
    },
    {
      id: "nlm-pyq-q22",
      question: "A machine gun of mass $10\\text{ kg}$ fires $20\\text{ g}$ bullets at the rate of $180$ bullets per minute with a speed of $100\\text{ m s}^{-1}$ each. The recoil velocity of the gun is : (JEE Main Jan. 30, 2023 (II))",
      options: [
        "$0.02\\text{ m/s}$",
        "$2.5\\text{ m/s}$",
        "$1.5\\text{ m/s}$",
        "$0.6\\text{ m/s}$"
      ],
      answer: 3,
      explanation: "**Detailed Solution:**\n\n**1. Identify the parameters and convert them to SI units:**\nMass of gun ($M$) $= 10\\text{ kg}$\nMass of each bullet ($m$) $= 20\\text{ g} = 0.02\\text{ kg}$\nVelocity of bullet ($v$) $= 100\\text{ m/s}$\nNumber of bullets fired per second ($n$) $= 180 / 60 = 3\\text{ bullets/second}$\n\n**2. Apply the law of conservation of linear momentum per unit time:**\nThe rate of forward momentum given to the bullets must equal the rate of backward momentum gained by the gun:\n$M \\times V = n \\times m \\times v$\n\n**3. Substitute the values and solve for the gun's recoil velocity ($V$):**\n$10 \\times V = 3 \\times 0.02 \\times 100 = 6$\n$V = 6 / 10 = 0.6\\text{ m/s}$"
    },
    {
      id: "nlm-pyq-q23",
      question: "Force acts for $20\\text{ s}$ on a body of mass $20\\text{ kg}$, starting from rest, after which the force ceases and then body describes $50\\text{ m}$ in the next $10\\text{ s}$. The value of force will be : (JEE Main Jan. 29, 2023 (II))",
      options: [
        "$40\\text{ N}$",
        "$5\\text{ N}$",
        "$20\\text{ N}$",
        "$10\\text{ N}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Analyze the second phase when the force ceases:**\nWith no net force acting on it, the body moves with a constant maximum velocity ($v_{\\max}$):\n$v_{\\max} = \\text{Distance} / \\text{Time} = 50\\text{ m} / 10\\text{ s} = 5\\text{ m/s}$\n\n**2. Analyze the first phase when the uniform force is acting:**\nThe body accelerates from rest ($u = 0$) to $v_{\\max} = 5\\text{ m/s}$ in time $t = 20\\text{ s}$:\n$v_{\\max} = u + at \\implies 5 = 0 + a \\times 20$\n$a = 5 / 20 = 0.25\\text{ m/s}^2$\n\n**3. Calculate the applied force using Newton's Second Law ($m = 20\\text{ kg}$):**\n$F = ma = 20\\text{ kg} \\times 0.25\\text{ m/s}^2 = 5\\text{ N}$"
    },
    {
      id: "nlm-pyq-q24",
      question: "In two different experiments, an object of mass $5\\text{ kg}$ moving with a speed of $25\\text{ ms}^{-1}$ hits two different walls and comes to rest within (i) $3\\text{ second}$, (ii) $5\\text{ seconds}$, respectively. Choose the correct option out of the following : (JEE Main July 28, 2022 (I))",
      options: [
        "Impulse and average force acting on the object will be same for both the cases.",
        "Impulse will be same for both the cases but the average force will be different.",
        "Average force will be same for both the cases but the impulse will be different.",
        "Average force and impulse will be different for both the cases."
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Analyze impulse:**\nImpulse is equal to the change in linear momentum ($\\Delta P$). In both experiments, the identical object ($m = 5\\text{ kg}$) starts with the same initial velocity ($u = 25\\text{ ms}^{-1}$) and comes to a complete stop ($v = 0\\text{ ms}^{-1}$):\nImpulse $= \\Delta P = m(v - u) = 5(0 - 25) = -125\\text{ Ns}$\nSince the initial and final states are identical in both cases, the impulse will be the same.\n\n**2. Analyze average force:**\nAverage force is the rate of change of momentum over the given time interval ($\\Delta t$):\n$F_{\\text{avg}} = \\text{Impulse} / \\Delta t$\nSince the time intervals are completely different ($\\Delta t_1 = 3\\text{ s}$ and $\\Delta t_2 = 5\\text{ s}$), the denominator changes, which makes the average forces different for each case."
    },
    {
      id: "nlm-pyq-q25",
      question: "A balloon has mass of $10\\text{ g}$ in air. The air escapes from the balloon at a uniform rate with velocity $4.5\\text{ cm/s}$. If the balloon shrinks in $5\\text{ s}$ completely. Then, the average force acting on that balloon will be (in dyne). (JEE Main July 28, 2022 (I))",
      options: [
        "3",
        "9",
        "12",
        "18"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Identify parameters in the CGS metric system:**\nInitial mass of air escaping ($m$) $= 10\\text{ g}$\nTime interval for complete deflation ($\\Delta t$) $= 5\\text{ s}$\nConstant escape velocity of air ($v$) $= 4.5\\text{ cm/s}$\n\n**2. Calculate the uniform rate of mass ejection ($dm/dt$):**\n$dm/dt = \\text{Total mass} / \\text{Total time} = 10\\text{ g} / 5\\text{ s} = 2\\text{ g/s}$\n\n**3. Calculate the thrust force exerted on the balloon using the variable mass system formula:**\n$F = v \\times (dm/dt) = 4.5\\text{ cm/s} \\times 2\\text{ g/s} = 9\\text{ dyne}$"
    },
    {
      id: "nlm-pyq-q26",
      question: "A man of $60\\text{ kg}$ is running on the road and suddenly jumps into a stationary trolly car of mass $120\\text{ kg}$. Then the trolly car starts moving with velocity $2\\text{ ms}^{-1}$. The velocity of the running man was ____________ $\\text{ms}^{-1}$. When he jumps into the car. (JEE Main June 28, 2022 (I))",
      options: [
        "2",
        "4",
        "6",
        "8"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**1. Apply the law of conservation of linear momentum in the horizontal direction:**\nInitial Momentum = Final Momentum\n$(m_{\\text{man}} \\times u_{\\text{man}}) + (m_{\\text{trolley}} \\times u_{\\text{trolley}}) = (m_{\\text{man}} + m_{\\text{trolley}}) \\times v_{\\text{final}}$\n\n**2. Substitute the given parameters:**\n$m_{\\text{man}} = 60\\text{ kg}$, $m_{\\text{trolley}} = 120\\text{ kg}$, $u_{\\text{trolley}} = 0$, $v_{\\text{final}} = 2\\text{ ms}^{-1}$\n$(60 \\times u_{\\text{man}}) + 0 = (60 + 120) \\times 2$\n$60 u_{\\text{man}} = 180 \\times 2 = 360$\n\n**3. Solve for initial velocity:**\n$u_{\\text{man}} = 360 / 60 = 6\\text{ ms}^{-1}$"
    },
    {
      id: "nlm-pyq-q27",
      question: "A block of mass $2\\text{ kg}$ moving on a horizontal surface with speed of $4\\text{ ms}^{-1}$ enters a rough surface ranging from $x = 0.5\\text{ m}$ to $x = 1.5\\text{ m}$. The retarding force in this range of rough surface is related to distance by $F = -kx$ where $k = 12\\text{ Nm}^{-1}$. The speed of the block as it just crosses the rough surface will be: (JEE Main June 28, 2022 (II))",
      options: [
        "Zero",
        "$1.5\\text{ ms}^{-1}$",
        "$2.0\\text{ ms}^{-1}$",
        "$2.5\\text{ ms}^{-1}$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**1. Apply Work-Energy Theorem:**\n$W = \\Delta K = K_{\\text{final}} - K_{\\text{initial}} = \\frac{1}{2} m v_f^2 - \\frac{1}{2} m v_i^2$\n\n**2. Calculate work done by variable force:**\n$W = \\int_{0.5}^{1.5} (-kx) dx = -k \\left[ \\frac{x^2}{2} \\right]_{0.5}^{1.5}$\n$W = -\\frac{12}{2} [(1.5)^2 - (0.5)^2] = -6 [2.25 - 0.25] = -12\\text{ J}$\n\n**3. Equate to change in kinetic energy:**\n$-12 = \\frac{1}{2}(2)(v_f^2) - \\frac{1}{2}(2)(4^2) = v_f^2 - 16$\n$v_f^2 = 16 - 12 = 4 \\implies v_f = 2.0\\text{ ms}^{-1}$"
    },
    {
      id: "nlm-pyq-q28",
      question: "A batsman hits back a ball of mass $0.4\\text{ kg}$ straight in the direction of the bowler without changing its initial speed of $15\\text{ ms}^{-1}$. The impulse imparted to the ball is ____________ $\\text{Ns}$. (JEE Main June 26, 2022 (II))",
      options: [
        "6",
        "12",
        "18",
        "24"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Establish direction:**\nLet initial velocity towards batsman be $+i$.\n$u = 15\\text{ ms}^{-1}$\nBall is hit straight back, so final velocity is reversed:\n$v = -15\\text{ ms}^{-1}$\n\n**2. Calculate impulse (change in momentum):**\n$\\text{Impulse} = m(v - u) = 0.4(-15 - 15) = 0.4(-30) = -12\\text{ Ns}$\nMagnitude of impulse = $12\\text{ Ns}$"
    },
    {
      id: "nlm-pyq-q29",
      question: "An object of mass $5\\text{ kg}$ is thrown vertically upwards from the ground. The air resistance produces a constant retarding force of $10\\text{ N}$ throughout the motion. The ratio of time of ascent to the time of descent will be equal to : [Use $g = 10\\text{ ms}^{-2}$] (JEE Main June 24, 2022 (II))",
      options: [
        "$1 : 1$",
        "$\\sqrt{2} : \\sqrt{3}$",
        "$\\sqrt{3} : \\sqrt{2}$",
        "$2 : 3$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Identify forces:**\nWeight $W = mg = 50\\text{ N}$ (downwards)\nAir resistance $F_{\\text{air}} = 10\\text{ N}$ (opposes motion)\n\n**2. Ascent (moving up):**\nBoth gravity and air resistance act downwards.\nNet force $F_{\\text{net}} = W + F_{\\text{air}} = 60\\text{ N}$\nAcceleration $a_1 = 60 / 5 = 12\\text{ ms}^{-2}$\nTime $t_1 = \\sqrt{2h/a_1}$\n\n**3. Descent (moving down):**\nGravity acts downwards, air resistance acts upwards.\nNet force $F_{\\text{net}} = W - F_{\\text{air}} = 40\\text{ N}$\nAcceleration $a_2 = 40 / 5 = 8\\text{ ms}^{-2}$\nTime $t_2 = \\sqrt{2h/a_2}$\n\n**4. Ratio:**\n$t_1 / t_2 = \\sqrt{a_2 / a_1} = \\sqrt{8 / 12} = \\sqrt{2/3} = \\sqrt{2} : \\sqrt{3}$"
    },
    {
      id: "nlm-pyq-q30",
      question: "A force $\\vec{F} = (40\\hat{i} + 10\\hat{j})\\text{ N}$ acts on a body of mass $5\\text{ kg}$. If the body starts from rest, its position vector $\\vec{r}$ at time $t = 10\\text{ s}$, will be: (JEE Main July 25, 2021 (II))",
      options: [
        "$(100\\hat{i} + 400\\hat{j})\\text{ m}$",
        "$(100\\hat{i} + 100\\hat{j})\\text{ m}$",
        "$(400\\hat{i} + 100\\hat{j})\\text{ m}$",
        "$(400\\hat{i} + 400\\hat{j})\\text{ m}$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**1. Find acceleration vector:**\n$\\vec{a} = \\vec{F} / m = (40\\hat{i} + 10\\hat{j}) / 5 = 8\\hat{i} + 2\\hat{j}\\text{ ms}^{-2}$\n\n**2. Use displacement equation (starts from rest $\\vec{u}=0$):**\n$\\vec{r} = \\frac{1}{2} \\vec{a} t^2$\n\n**3. Substitute $t = 10\\text{ s}$:**\n$\\vec{r} = \\frac{1}{2} (8\\hat{i} + 2\\hat{j}) (10)^2 = 100 (4\\hat{i} + \\hat{j}) = 400\\hat{i} + 100\\hat{j}\\text{ m}$"
    },
    {
      id: "nlm-pyq-q31",
      question: "A boy pushes a box of mass $2\\text{ kg}$ with a force $\\vec{F} = (20\\hat{i} + 10\\hat{j})\\text{ N}$ on a frictionless surface. If the box was initially at rest, then _________ $\\text{m}$ is displacement along the x-axis after $10\\text{ s}$. (JEE Main Feb. 26, 2021 (I))",
      options: [
        "100",
        "200",
        "250",
        "500"
      ],
      answer: 3,
      explanation: "**Detailed Solution:**\n\n**1. Extract horizontal component of force:**\n$F_x = 20\\text{ N}$\n\n**2. Calculate acceleration along x-axis:**\n$a_x = F_x / m = 20 / 2 = 10\\text{ ms}^{-2}$\n\n**3. Calculate displacement along x-axis:**\n$x = u_x t + \\frac{1}{2} a_x t^2 = 0 + \\frac{1}{2}(10)(10^2) = 5 \\times 100 = 500\\text{ m}$"
    },
    {
      id: "nlm-pyq-q32",
      question: "A particle moving in the xy plane experiences a velocity dependent force $\\vec{F} = k(v_y\\hat{i} + v_x\\hat{j})$, where $v_x$ and $v_y$ are x and y components of its velocity $\\vec{v}$. If $\\vec{a}$ is the acceleration of the particle, then which of the following statements is true for the particle? (JEE Main Sep. 06, 2020 (II))",
      options: [
        "quantity $\\vec{v} \\times \\vec{a}$ is constant in time",
        "$\\vec{F}$ arises due to a magnetic field",
        "kinetic energy of particle is constant in time",
        "quantity $\\vec{v} \\cdot \\vec{a}$ is constant in time"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n**1. Compute dot product $\\vec{F} \\cdot \\vec{v}$:**\n$\\vec{F} \\cdot \\vec{v} = k(v_y v_x + v_x v_y) = 2kv_x v_y \\neq 0$, so KE is not constant.\n\n**2. Evaluate $\\vec{v} \\times \\vec{a}$:**\n$m \\vec{a} = k(v_y\\hat{i} + v_x\\hat{j}) \\implies m \\frac{dv_x}{dt} = k v_y$ and $m \\frac{dv_y}{dt} = k v_x$\nNow, $\\vec{v} \\times \\vec{a} = (v_x\\hat{i} + v_y\\hat{j}) \\times \\frac{k}{m}(v_y\\hat{i} + v_x\\hat{j}) = \\frac{k}{m} (v_x^2 - v_y^2)\\hat{k}$\n\n**3. Differentiate $(v_x^2 - v_y^2)$ with respect to time:**\n$\\frac{d}{dt}(v_x^2 - v_y^2) = 2v_x \\frac{dv_x}{dt} - 2v_y \\frac{dv_y}{dt} = 2v_x (\\frac{k v_y}{m}) - 2v_y (\\frac{k v_x}{m}) = 0$\nThus $(v_x^2 - v_y^2)$ is constant, making $\\vec{v} \\times \\vec{a}$ constant in time."
    },
    {
      id: "nlm-pyq-q33",
      question: "A spaceship in space sweeps stationary interplanetary dust. As a result, its mass increases at a rate $dM(t)/dt = b v^2(t)$, where $v(t)$ is its instantaneous velocity. The instantaneous acceleration of the satellite is : (JEE Main Sep. 05, 2020 (II))",
      options: [
        "$-b v^3(t)$",
        "$-b v^3(t) / M(t)$",
        "$-2b v^3(t) / M(t)$",
        "$-b v^3(t) / 2M(t)$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Thrust force for a variable mass system:**\n$F_{\\text{thrust}} = -u_{\\text{rel}} \\frac{dM}{dt}$\nSince dust is stationary, relative velocity $u_{\\text{rel}} = v$.\n$F_{\\text{thrust}} = -v (bv^2) = -bv^3$\n\n**2. Acceleration:**\n$F = M a \\implies a = \\frac{F_{\\text{thrust}}}{M(t)} = -\\frac{b v^3(t)}{M(t)}$"
    },
    {
      id: "nlm-pyq-q34",
      question: "A small ball of mass $m$ is thrown upward with velocity $u$ from the ground. The ball experiences a resistive force $mkv^2$, where $v$ is its speed. The maximum height attained by the ball is : (JEE Main Sep. 04, 2020 (II))",
      options: [
        "$(1 / 2k) \\tan^{-1}(k u^2 / g)$",
        "$(1 / k) \\ln(1 + k u^2 / 2g)$",
        "$(1 / k) \\tan^{-1}(k u^2 / 2g)$",
        "$(1 / 2k) \\ln(1 + k u^2 / g)$"
      ],
      answer: 3,
      explanation: "**Detailed Solution:**\n\n**1. Net force during ascent:**\n$F_{\\text{net}} = -(mg + mkv^2)$\n$m a = -m(g + kv^2) \\implies a = -(g + kv^2)$\n\n**2. Express acceleration as $v \\frac{dv}{dy}$:**\n$v \\frac{dv}{dy} = -(g + kv^2) \\implies \\frac{v dv}{g + kv^2} = -dy$\n\n**3. Integrate from $y = 0$ ($v = u$) to $y = H$ ($v = 0$):**\n$\\int_{u}^{0} \\frac{v dv}{g + kv^2} = \\int_{0}^{H} -dy$\nLet $z = g + kv^2 \\implies dz = 2kv dv$\n$\\frac{1}{2k} [\\ln(g + kv^2)]_u^0 = -H$\n$\\frac{1}{2k} (\\ln g - \\ln(g + ku^2)) = -H \\implies H = \\frac{1}{2k} \\ln\\left(\\frac{g + ku^2}{g}\\right) = \\frac{1}{2k} \\ln\\left(1 + \\frac{ku^2}{g}\\right)$"
    },
    {
      id: "nlm-pyq-q35",
      question: "A particle of mass $m$ is moving in a straight line with momentum $p$. Starting at time $t = 0$, a force $F = kt$ acts in the same direction on the moving particle during time interval $T$ so that its momentum changes from $p$ to $3p$. Here $k$ is a constant. The value of $T$ is : (JEE Main 11 Jan. 2019 II)",
      options: [
        "$2 \\sqrt{k/p}$",
        "$2 \\sqrt{p/k}$",
        "$\\sqrt{2k/p}$",
        "$\\sqrt{2p/k}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Change in momentum is integral of force:**\n$\\Delta p = \\int_0^T F dt = \\int_0^T kt dt$\n\n**2. Substitute given limits:**\n$3p - p = k \\left[\\frac{t^2}{2}\\right]_0^T$\n$2p = \\frac{kT^2}{2}$\n\n**3. Solve for $T$:**\n$T^2 = \\frac{4p}{k} \\implies T = 2 \\sqrt{\\frac{p}{k}}$"
    },
    {
      id: "nlm-pyq-q36",
      question: "A particle of mass $m$ is acted upon by a force $F$ given by the empirical law $F = (R / t^2) v(t)$. If this law is to be tested experimentally by observing the motion starting from rest, the best way is to plot : (JEE Main Online April 10, 2016)",
      options: [
        "$\\log v(t)$ against $1/t$",
        "$v(t)$ against $t^2$",
        "$\\log v(t)$ against $1/t^2$",
        "$\\log v(t)$ against $t$"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n**1. Rewrite force in terms of acceleration:**\n$m \\frac{dv}{dt} = \\frac{R}{t^2} v$\n\n**2. Separate variables:**\n$\\frac{dv}{v} = \\frac{R}{m} \\frac{dt}{t^2}$\n\n**3. Integrate:**\n$\\int \\frac{dv}{v} = \\frac{R}{m} \\int t^{-2} dt$\n$\\ln v = -\\frac{R}{m t} + C$\n\n**4. Convert to base-10 logarithm:**\n$2.303 \\log v = -\\frac{R}{m} \\left(\\frac{1}{t}\\right) + C$\n$\\log v = -\\frac{R}{2.303 m} \\left(\\frac{1}{t}\\right) + C'$\nThis matches the linear equation $y = mx + c$, so plotting $\\log v(t)$ against $1/t$ yields a straight line."
    },
    {
      id: "nlm-pyq-q37",
      question: "A body of mass $5\\text{ kg}$ under the action of constant force $\\vec{F} = F_x\\hat{i} + F_y\\hat{j}$ has velocity at $t = 0\\text{ s}$ as $\\vec{v} = (6\\hat{i} - 2\\hat{j})\\text{ m/s}$ and at $t = 10\\text{ s}$ as $\\vec{v} = +6\\hat{j}\\text{ m/s}$. The force $\\vec{F}$ is: (JEE Main Online April 11, 2014)",
      options: [
        "$(-3\\hat{i} + 4\\hat{j})\\text{ N}$",
        "$(-3/5\\hat{i} + 4/5\\hat{j})\\text{ N}$",
        "$(3\\hat{i} - 4\\hat{j})\\text{ N}$",
        "$(3/5\\hat{i} - 4/5\\hat{j})\\text{ N}$"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n**1. Identify initial and final velocities:**\n$\\vec{u} = 6\\hat{i} - 2\\hat{j}$\n$\\vec{v} = 0\\hat{i} + 6\\hat{j}$\n$t = 10\\text{ s}$\n\n**2. Calculate acceleration:**\n$\\vec{a} = \\frac{\\vec{v} - \\vec{u}}{t} = \\frac{(0 - 6)\\hat{i} + (6 - (-2))\\hat{j}}{10} = \\frac{-6\\hat{i} + 8\\hat{j}}{10} = -0.6\\hat{i} + 0.8\\hat{j}\\text{ ms}^{-2}$\n\n**3. Calculate force:**\n$\\vec{F} = m\\vec{a} = 5(-0.6\\hat{i} + 0.8\\hat{j}) = -3\\hat{i} + 4\\hat{j}\\text{ N}$"
    }
  ]
};

export default pyq;
""")
