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
    },
    {
      id: "kinematics-pyq-q11",
      question: "A particle moving in a straight line covers half the distance with speed 6 m/s. The other half is covered in two equal time intervals with speeds 9 m/s and 15 m/s respectively. The average speed of the particle during the motion is : [April 9, 2024 (I)]",
      options: [
        "8.8 m/s",
        "10 m/s",
        "9.2 m/s",
        "8 m/s"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the total distance be $2d$. The first half distance is $d$ and the second half distance is $d$.\n**Step 2:** Time taken for the first half: $t_1 = d / 6$\n**Step 3:** For the second half, let the two equal time intervals be $t'$. Distance $1$ + Distance $2 = d \\implies 9t' + 15t' = d \\implies 24t' = d \\implies t' = d / 24$.\n**Step 4:** Total time for the second half: $t_2 = 2t' = 2(d / 24) = d / 12$.\n**Step 5:** Total time ($T$) $= t_1 + t_2 = (d / 6) + (d / 12) = (2d + d) / 12 = 3d / 12 = d / 4$.\n**Step 6:** Average Speed $= \\text{Total Distance} / \\text{Total Time} = 2d / (d / 4) = 2 \\times 4 = 8\\text{ m/s}$.\n\n*(Asked in JEE Main 2024, April 9, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q12",
      question: "A train starting from rest first accelerates uniformly up to a speed of 80 km/h for time t, then it moves with a constant speed for time 3t. The average speed of the train for this duration of journey will be (in km/h) : [April 6, 2024 (I)]",
      options: [
        "80",
        "70",
        "30",
        "40"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Distance covered during the uniform acceleration phase ($d_1$): $d_1 = \\text{Average velocity} \\times \\text{time} = \\frac{0 + 80}{2} \\times t = 40t$.\n**Step 2:** Distance covered during the constant speed phase ($d_2$): $d_2 = \\text{Speed} \\times \\text{time} = 80 \\times 3t = 240t$.\n**Step 3:** Total Distance $= d_1 + d_2 = 40t + 240t = 280t$. Total Time $= t + 3t = 4t$.\n**Step 4:** Average Speed $= \\text{Total Distance} / \\text{Total Time} = 280t / 4t = 70\\text{ km/h}$.\n\n*(Asked in JEE Main 2024, April 6, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q13",
      question: "A cyclist starts from the point P of a circular ground of radius 2 km and travels along its circumference to the point S. The displacement of a cyclist is : [April 4, 2024 (II)]",
      options: [
        "6 km",
        "$\\sqrt{8}\\text{ km}$",
        "4 km",
        "8 km"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** From the given context, P and S are points separated by a quarter of the circumference (the angle between radius OP and radius OS is 90 degrees). Both lengths are equal to the ground radius ($r = 2\\text{ km}$).\n**Step 2:** Displacement is the shortest straight-line path from initial point P to final point S.\n**Step 3:** Apply Pythagoras theorem in the right-angled triangle POS: $\\text{Displacement (PS)} = \\sqrt{OP^2 + OS^2} = \\sqrt{2^2 + 2^2} = \\sqrt{4 + 4} = \\sqrt{8}\\text{ km}$.\n\n*(Asked in JEE Main 2024, April 4, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q14",
      question: "A person travels x distance with velocity $v_1$ and then x distance with velocity $v_2$ in the same direction. The average velocity of the person is v, then the relation between v, $v_1$ and $v_2$ will be : [April 10, 2023 (II)]",
      options: [
        "$v = v_1 + v_2$",
        "$v = \\frac{v_1 + v_2}{2}$",
        "$\\frac{2}{v} = \\frac{1}{v_1} + \\frac{1}{v_2}$",
        "$\\frac{1}{v} = \\frac{1}{v_1} + \\frac{1}{v_2}$"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Write down individual times taken for each part of the journey: $t_1 = \\frac{x}{v_1}$, $t_2 = \\frac{x}{v_2}$.\n**Step 2:** Express the formula for average velocity ($v$): $v = \\frac{\\text{Total Distance}}{\\text{Total Time}} = \\frac{x + x}{t_1 + t_2} = \\frac{2x}{\\frac{x}{v_1} + \\frac{x}{v_2}}$.\n**Step 3:** Factor out and simplify $x$ from the denominator: $v = \\frac{2}{\\frac{1}{v_1} + \\frac{1}{v_2}}$.\n**Step 4:** Rearrange the equation: $\\frac{2}{v} = \\frac{1}{v_1} + \\frac{1}{v_2}$.\n\n*(Asked in JEE Main 2023, April 10, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q15",
      question: "A particle is moving with constant speed in a circular path. When the particle turns by an angle 90°, the ratio of instantaneous velocity to its average velocity is $\\pi : x\\sqrt{2}$. The value of x will be : [April 6, 2023 (I)]",
      options: [
        "2",
        "5",
        "1",
        "7"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the constant speed (magnitude of instantaneous velocity) be $v$.\n**Step 2:** For a turning angle $\\theta = 90^\\circ = \\frac{\\pi}{2}$ radians, Displacement $= 2r \\sin(\\frac{\\theta}{2}) = 2r \\sin(45^\\circ) = 2r \\times \\frac{1}{\\sqrt{2}} = \\sqrt{2}r$.\n**Step 3:** Time taken to travel the arc length: $t = \\frac{\\text{Distance}}{\\text{Speed}} = \\frac{r\\theta}{v} = \\frac{r\\pi}{2v}$.\n**Step 4:** Find average velocity $= \\frac{\\text{Displacement}}{\\text{Time}} = \\frac{\\sqrt{2}r}{\\frac{r\\pi}{2v}} = \\frac{2\\sqrt{2}v}{\\pi}$.\n**Step 5:** Ratio of instantaneous velocity to average velocity $= \\frac{v}{\\frac{2\\sqrt{2}v}{\\pi}} = \\frac{\\pi}{2\\sqrt{2}}$.\n**Step 6:** Compare this with the given ratio structure ($\\frac{\\pi}{x\\sqrt{2}}$), we get $x = 2$.\n\n*(Asked in JEE Main 2023, April 6, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q16",
      question: "An object moves with speed $v_1$, $v_2$ and $v_3$ along a line segment AB, BC and CD respectively as shown in figure. Where AB = BC and AD = 3AB, then average speed of the object will be: [Feb. 1, 2023 (I)]",
      options: [
        "$\\frac{v_1 v_2 v_3}{3(v_1v_2 + v_2v_3 + v_3v_1)}$",
        "$\\frac{3 v_1 v_2 v_3}{v_1v_2 + v_2v_3 + v_3v_1}$",
        "$\\frac{v_1 + v_2 + v_3}{3}$",
        "$\\frac{v_1 + v_2 + v_3}{3 v_1 v_2 v_3}$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let AB = $d$. Since AB = BC, then BC = $d$. Given AD = $3\\text{AB} = 3d$. Since AD = AB + BC + CD, we have $3d = d + d + \\text{CD} \\implies \\text{CD} = d$. Therefore, all three segments are equal: AB = BC = CD = $d$.\n**Step 2:** Find time taken for each segment: $t_1 = \\frac{d}{v_1}$, $t_2 = \\frac{d}{v_2}$, $t_3 = \\frac{d}{v_3}$.\n**Step 3:** Total time ($T$) $= t_1 + t_2 + t_3 = \\frac{d}{v_1} + \\frac{d}{v_2} + \\frac{d}{v_3} = d \\left( \\frac{v_2v_3 + v_1v_3 + v_1v_2}{v_1 v_2 v_3} \\right)$.\n**Step 4:** Average Speed $= \\frac{\\text{Total Distance}}{\\text{Total Time}} = \\frac{3d}{d (v_1v_2 + v_2v_3 + v_3v_1) / (v_1 v_2 v_3)} = \\frac{3 v_1 v_2 v_3}{v_1v_2 + v_2v_3 + v_3v_1}$.\n\n*(Asked in JEE Main 2023, Feb 1, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q17",
      question: "A body is moving with constant speed, in a circle of radius 10 m. The body completes one revolution in 4 s. At the end of 3rd second, the displacement of body (in m) from its starting point is: [Jan. 31, 2023 (II)]",
      options: [
        "30",
        "$15\\pi$",
        "$5\\pi$",
        "$10\\sqrt{2}$"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** One complete revolution ($360^\\circ$) takes 4 seconds.\n**Step 2:** Calculate the angular path covered in 3 seconds: Angle per second $= 360^\\circ / 4 = 90^\\circ$. Angle in 3 seconds $= 3 \\times 90^\\circ = 270^\\circ$.\n**Step 3:** After rotating $270^\\circ$ from the initial point, the body is located at a position perpendicular to the starting position ($90^\\circ$ away from the origin in the reverse direction).\n**Step 4:** The straight line joining the initial point and final point forms the hypotenuse of a right-angled triangle with sides equal to the radius ($r = 10\\text{ m}$).\n**Step 5:** Apply Pythagoras theorem: Displacement $= \\sqrt{r^2 + r^2} = r\\sqrt{2} = 10\\sqrt{2}\\text{ m}$.\n\n*(Asked in JEE Main 2023, Jan 31, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q18",
      type: "integer",
      question: "A horse rider covers half the distance with 5 m/s speed. The remaining part of the distance was travelled with speed 10 m/s for half the time and with speed 15 m/s for other half of the time. The mean speed of the rider averaged over the whole time of motion is $x/7\\text{ m/s}$. The value of $x$ is : [Jan. 30, 2023 (I)]",
      answer: 50,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the total distance be $2d$. First half distance $= d$, Second half distance $= d$.\n**Step 2:** Time taken for the first half: $t_1 = d / 5$.\n**Step 3:** For the second half, let the equal time intervals be $t'$. Distance covered in second half $= (10 \\times t') + (15 \\times t') = d \\implies 25t' = d \\implies t' = d / 25$.\n**Step 4:** Total time for the second half: $t_2 = 2t' = 2d / 25$.\n**Step 5:** Total time of the entire journey ($T$): $T = t_1 + t_2 = (d / 5) + (2d / 25) = (5d + 2d) / 25 = 7d / 25$.\n**Step 6:** Average Speed $= \\frac{\\text{Total Distance}}{\\text{Total Time}} = \\frac{2d}{7d / 25} = \\frac{50}{7}\\text{ m/s}$.\n**Step 7:** Comparing with the given expression ($x / 7$), we get $x = 50$.\n\n*(Asked in JEE Main 2023, Jan 30, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q19",
      question: "A vehicle travels 4 km with speed of 3 km/h and another 4 km with speed of 5 km/h, then its average speed is : [Jan. 30, 2023 (II)]",
      options: [
        "4.25 km/h",
        "3.50 km/h",
        "4.00 km/h",
        "3.75 km/h"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Since the vehicle covers two equal distances (4 km each) with different speeds $v_1$ and $v_2$, we can directly apply the equal-distance average speed formula: Average Speed $= \\frac{2 v_1 v_2}{v_1 + v_2}$.\n**Step 2:** Substitute the given speeds ($v_1 = 3\\text{ km/h}$, $v_2 = 5\\text{ km/h}$): Average Speed $= \\frac{2 \\times 3 \\times 5}{3 + 5} = \\frac{30}{8} = 3.75\\text{ km/h}$.\n\n*(Asked in JEE Main 2023, Jan 30, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q20",
      question: "A person moved from A to B on a circular path as shown in figure. If the distance travelled by him is 60 m, then the magnitude of displacement would be : [July 25, 2022 (I)] (Given $\\cos 135^\\circ = -0.7$)",
      options: [
        "42 m",
        "47 m",
        "19 m",
        "40 m"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** The distance traveled along the circular arc is given by: Distance $= r \\theta$. Given angle $\\theta = 135^\\circ = 135 \\times \\frac{\\pi}{180} = \\frac{3\\pi}{4}$ radians. $60 = r \\times \\frac{3\\pi}{4} \\implies r = \\frac{80}{\\pi}$ meters.\n**Step 2:** Approximate the radius value (using $\\pi \\approx 3.1416$): $r \\approx \\frac{80}{3.1416} \\approx 25.46\\text{ m}$.\n**Step 3:** Find the straight-line displacement (chord length AB) using the cosine rule in triangle OAB: $\\text{AB}^2 = r^2 + r^2 - 2 r r \\cos(135^\\circ) = 2r^2(1 - \\cos 135^\\circ)$.\n**Step 4:** Substitute $\\cos 135^\\circ = -0.7$: $\\text{AB}^2 = 2r^2(1 - (-0.7)) = 2r^2(1.7) = 3.4r^2 \\implies \\text{AB} = r\\sqrt{3.4}$.\n**Step 5:** Calculate final numerical value: $\\text{AB} \\approx 25.46 \\times 1.844 \\approx 46.95\\text{ m} \\approx 47\\text{ m}$.\n\n*(Asked in JEE Main 2022, July 25, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q21",
      question: "Given below are two statements:\nStatement I: Area under velocity-time graph gives the distance travelled by the body in a given time.\nStatement II: Area under acceleration-time graph is equal to the change in velocity in the given time.\nIn the light of given statements, choose the correct answer from the options given below. [April 8, 2023 (II)]",
      options: [
        "Both Statement I and Statement II are true.",
        "Statement I is correct but Statement II is false.",
        "Statement I is incorrect but Statement II is true.",
        "Both Statement I and Statement II are false."
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Analyze Statement I: The area under a velocity-time (v-t) graph represents the **displacement** of the body, not necessarily the total distance travelled (unless velocity is always positive). To find the total distance, we must compute the total area under the speed-time graph. Therefore, Statement I is incorrect.\n**Step 2:** Analyze Statement II: By definition, acceleration is the rate of change of velocity: $a = \\frac{dv}{dt} \\implies dv = a dt$. Integrating both sides over a given time interval gives $\\Delta v = \\int a dt$. Hence, the area under the acceleration-time (a-t) graph is equal to the change in velocity. Statement II is true.\n\n*(Asked in JEE Main 2023, April 8, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q22",
      question: "A particle starts with an initial velocity of $10.0\\text{ ms}^{-1}$ along x-direction and accelerates uniformly at the rate of $2.0\\text{ ms}^{-2}$. The time taken by the particle to reach the velocity of $60.0\\text{ ms}^{-1}$ is _______ s. [April 6, 2023 (II)]",
      options: [
        "6",
        "3",
        "30",
        "25"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Identify the given variables for uniform acceleration: Initial velocity ($u$) = $10.0\\text{ ms}^{-1}$, Acceleration ($a$) = $2.0\\text{ ms}^{-2}$, Final velocity ($v$) = $60.0\\text{ ms}^{-1}$.\n**Step 2:** Use the first equation of motion: $v = u + at$.\n**Step 3:** Substitute the values into the equation: $60.0 = 10.0 + 2.0t \\implies 50.0 = 2.0t \\implies t = \\frac{50.0}{2.0} = 25\\text{ s}$.\n\n*(Asked in JEE Main 2023, April 6, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q23",
      type: "integer",
      question: "For a train engine moving with speed of $20\\text{ ms}^{-1}$, the driver must apply brakes at a distance of 500 m before the station for the train to come to rest at the station. If the brakes were applied at half of this distance, the train engine would cross the station with speed $\\sqrt{x}\\text{ ms}^{-1}$. The value of $x$ is _______. [Feb. 1, 2023 (II)] (Assuming same retardation is produced by brakes)",
      answer: 200,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Find the uniform retardation ($a$) produced by the brakes using the initial condition: Initial speed ($u$) = $20\\text{ ms}^{-1}$, Final speed at the station ($v$) = $0\\text{ ms}^{-1}$, Braking distance ($s$) = 500 m.\n**Step 2:** Using the third equation of motion: $v^2 = u^2 + 2as \\implies 0^2 = 20^2 + 2a(500) \\implies 0 = 400 + 1000a \\implies 1000a = -400 \\implies a = -0.4\\text{ ms}^{-2}$.\n**Step 3:** Calculate the speed when brakes are applied at half of the initial distance: New braking distance before reaching the station ($s'$) = $500 / 2 = 250\\text{ m}$. Let the speed with which it crosses the station be $v'$.\n**Step 4:** Using the same third equation of motion: $(v')^2 = u^2 + 2as' \\implies (v')^2 = 20^2 + 2(-0.4)(250) \\implies (v')^2 = 400 - 200 = 200 \\implies v' = \\sqrt{200}\\text{ ms}^{-1}$.\n**Step 5:** Compare the result with the given form $\\sqrt{x}$: $\\sqrt{x} = \\sqrt{200} \\implies x = 200$.\n\n*(Asked in JEE Main 2023, Feb 1, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q24",
      question: "If $t = \\sqrt{x} + 4$, then $(dx/dt)_{t=4}$ is: [July 29, 2022 (I)]",
      options: [
        "4",
        "Zero",
        "8",
        "16"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Express position $x$ in terms of time $t$: $t = \\sqrt{x} + 4 \\implies \\sqrt{x} = t - 4$.\n**Step 2:** Square both sides: $x = (t - 4)^2$.\n**Step 3:** Differentiate position $x$ with respect to time $t$ to get velocity ($dx/dt$): $\\frac{dx}{dt} = \\frac{d}{dt} [(t - 4)^2] = 2(t - 4)$.\n**Step 4:** Evaluate the derivative at $t = 4\\text{ s}$: $(dx/dt)_{t=4} = 2(4 - 4) = 0$.\n\n*(Asked in JEE Main 2022, July 29, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q25",
      question: "The velocity of the bullet becomes one third after it penetrates 4 cm in a wooden block. Assuming that bullet is facing a constant resistance during its motion in the block. The bullet stops completely after travelling at $(4 + x)\\text{ cm}$ inside the block. The value of $x$ is: [July 27, 2022 (II)]",
      options: [
        "2.0",
        "1.0",
        "0.5",
        "1.5"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the initial velocity of the bullet be $u$ and constant deceleration be $a$.\n**Step 2:** For the first 4 cm of penetration, the final velocity is $v_1 = u/3$. Using $v^2 = u^2 + 2as$: $(u/3)^2 = u^2 + 2a(4) \\implies \\frac{u^2}{9} = u^2 + 8a \\implies 8a = -\\frac{8u^2}{9} \\implies a = -\\frac{u^2}{9}$.\n**Step 3:** Let the total penetration distance to come to rest completely ($v_2 = 0$) be $S = 4 + x$. Using $v^2 = u^2 + 2aS$: $0 = u^2 + 2(-\\frac{u^2}{9})(4 + x) \\implies 0 = u^2 \\left[ 1 - \\frac{2}{9}(4 + x) \\right]$.\n**Step 4:** Since $u \\neq 0$, solve for $x$: $1 = \\frac{2}{9}(4 + x) \\implies \\frac{9}{2} = 4 + x \\implies 4.5 = 4 + x \\implies x = 0.5$.\n\n*(Asked in JEE Main 2022, July 27, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q26",
      type: "integer",
      question: "A car is moving with speed of 150 km/h and after applying the break it will move 27 m before it stops. If the same car is moving with a speed of one third the reported speed then it will stop after travelling _______ m distance. [July 25, 2022 (I)]",
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** The stopping distance ($s$) under constant braking retardation ($a$) is given by the third equation of motion: $v^2 = u^2 + 2as \\implies 0 = u^2 - 2as \\implies s = \\frac{u^2}{2a}$.\n**Step 2:** Since the car and braking force are identical, acceleration (retardation) is constant, meaning stopping distance is proportional to the square of the initial speed: $s \\propto u^2$.\n**Step 3:** When the initial speed is reduced to one-third ($u' = u/3$), the new stopping distance ($s'$) will be: $s' \\propto (u/3)^2 \\implies s' = s / 9$.\n**Step 4:** Substitute the original stopping distance ($s = 27\\text{ m}$): $s' = 27 / 9 = 3\\text{ m}$.\n\n*(Asked in JEE Main 2022, July 25, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q27",
      type: "integer",
      question: "A particle is moving in a straight line such that its velocity is increasing at $5\\text{ ms}^{-1}$ per meter. The acceleration of the particle is _______ $\\text{ms}^{-2}$ at a point where its velocity is $20\\text{ ms}^{-1}$. [July 25, 2022 (II)]",
      answer: 100,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** The rate of change of velocity with respect to distance is given as: $\\frac{dv}{dx} = 5\\text{ s}^{-1}$.\n**Step 2:** Acceleration in terms of spatial derivative is given by the formula: $a = v \\frac{dv}{dx}$.\n**Step 3:** Substitute the given velocity ($v = 20\\text{ ms}^{-1}$) and $\\frac{dv}{dx}$ into the equation: $a = 20\\text{ ms}^{-1} \\times 5\\text{ s}^{-1} = 100\\text{ ms}^{-2}$.\n\n*(Asked in JEE Main 2022, July 25, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q28",
      question: "A small toy starts moving from the position of rest under a constant acceleration. If it travels a distance of 10 m in t s, the distance travelled by the toy in the next t s will be : [June 29, 2022 (II)]",
      options: [
        "10 m",
        "20 m",
        "30 m",
        "40 m"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** The toy starts from rest, so initial velocity $u = 0$.\n**Step 2:** Distance covered in the first $t$ seconds ($s_1$): $s_1 = ut + \\frac{1}{2}at^2 \\implies 10 = \\frac{1}{2}at^2$.\n**Step 3:** Distance covered in total time of $2t$ seconds from start ($s_{\\text{total}}$): $s_{\\text{total}} = \\frac{1}{2}a(2t)^2 = 4 \\left( \\frac{1}{2}at^2 \\right) = 4 \\times 10 = 40\\text{ m}$.\n**Step 4:** The distance covered in the **next** $t$ seconds is the difference between total distance and first interval distance: $s_2 = s_{\\text{total}} - s_1 = 40\\text{ m} - 10\\text{ m} = 30\\text{ m}$.\n\n*(Asked in JEE Main 2022, June 29, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q29",
      question: "Two buses P and Q start from a point at the same time and move in a straight line and their positions are represented by $X_P(t) = \\alpha t + \\beta t^2$ and $X_Q(t) = f t - t^2$. At what time, both the buses have same velocity ? [June 25, 2022 (II)]",
      options: [
        "$\\frac{\\alpha - f}{1 + \\beta}$",
        "$\\frac{\\alpha + f}{2(\\beta - 1)}$",
        "$\\frac{\\alpha + f}{2(1 + \\beta)}$",
        "$\\frac{f - \\alpha}{2(1 + \\beta)}$"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Differentiate the position equations to obtain the velocity functions of both buses:\n$v_P(t) = \\frac{d(X_P)}{dt} = \\frac{d}{dt} [\\alpha t + \\beta t^2] = \\alpha + 2\\beta t$\n$v_Q(t) = \\frac{d(X_Q)}{dt} = \\frac{d}{dt} [f t - t^2] = f - 2t$\n**Step 2:** Set their velocities equal to find the matching time condition: $v_P(t) = v_Q(t) \\implies \\alpha + 2\\beta t = f - 2t$.\n**Step 3:** Group terms containing $t$ on one side: $2\\beta t + 2t = f - \\alpha \\implies 2t(\\beta + 1) = f - \\alpha$.\n**Step 4:** Solve for time $t$: $t = \\frac{f - \\alpha}{2(1 + \\beta)}$.\n\n*(Asked in JEE Main 2022, June 25, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q30",
      type: "integer",
      question: "If the velocity of a body related to displacement $x$ is given by $v = \\sqrt{5000 + 24x}\\text{ m/s}$, then the acceleration of the body is _________ $\\text{m/s}^2$. [Aug. 27, 2021 (I)]",
      answer: 12,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Write down the given velocity-displacement relationship: $v = \\sqrt{5000 + 24x}$.\n**Step 2:** Square both sides to eliminate the square root: $v^2 = 5000 + 24x$.\n**Step 3:** Differentiate both sides with respect to position $x$: $\\frac{d}{dx} [v^2] = \\frac{d}{dx} [5000 + 24x] \\implies 2v \\frac{dv}{dx} = 24$.\n**Step 4:** Recall that acceleration ($a$) is given by the formula $a = v \\frac{dv}{dx}$: $2a = 24 \\implies a = 12\\text{ m/s}^2$.\n\n*(Asked in JEE Main 2021, Aug 27, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q31",
      question: "The instantaneous velocity of a particle moving in a straight line is given as $v = \\alpha t + \\beta t^2$, where $\\alpha$ and $\\beta$ are constants. The distance travelled by the particle between 1s and 2s is: [July 25, 2021 (II)]",
      options: [
        "$3\\alpha + 7\\beta$",
        "$\\frac{3}{2}\\alpha + \\frac{7}{3}\\beta$",
        "$\\frac{\\alpha}{2} + \\frac{\\beta}{3}$",
        "$\\frac{3}{2}\\alpha + \\frac{7}{2}\\beta$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Distance ($s$) is the definite integral of velocity ($v$) with respect to time ($t$): $s = \\int_{1}^{2} v dt$.\n**Step 2:** Substitute the expression for velocity: $s = \\int_{1}^{2} (\\alpha t + \\beta t^2) dt$.\n**Step 3:** Integrate each term with respect to $t$: $s = \\left[ \\frac{\\alpha t^2}{2} + \\frac{\\beta t^3}{3} \\right]_1^2$.\n**Step 4:** Substitute the upper and lower limits: $s = \\left[ \\frac{\\alpha (2)^2}{2} + \\frac{\\beta (2)^3}{3} \\right] - \\left[ \\frac{\\alpha (1)^2}{2} + \\frac{\\beta (1)^3}{3} \\right] = \\left[ 2\\alpha + \\frac{8}{3}\\beta \\right] - \\left[ \\frac{1}{2}\\alpha + \\frac{1}{3}\\beta \\right]$.\n**Step 5:** Combine like terms: $s = (2 - \\frac{1}{2})\\alpha + (\\frac{8}{3} - \\frac{1}{3})\\beta = \\frac{3}{2}\\alpha + \\frac{7}{3}\\beta$.\n\n*(Asked in JEE Main 2021, July 25, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q32",
      question: "A scooter accelerates from rest for time $t_1$ at constant rate $a_1$ and then retards at constant rate $a_2$ for time $t_2$ and comes to rest. The correct value of $t_1/t_2$ will be: [Feb. 26, 2021 (II)]",
      options: [
        "$\\frac{a_1 + a_2}{a_1}$",
        "$\\frac{a_1}{a_2}$",
        "$\\frac{a_2}{a_1}$",
        "$\\frac{a_1 + a_2}{a_2}$"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Analyze the acceleration phase: The scooter starts from rest ($u = 0$) and reaches a maximum velocity ($v_{\\text{max}}$) in time $t_1$ with acceleration $a_1$. $v_{\\text{max}} = 0 + a_1 t_1 \\implies v_{\\text{max}} = a_1 t_1$.\n**Step 2:** Analyze the retardation phase: The scooter starts with initial velocity $v_{\\text{max}}$ and comes to rest ($v = 0$) in time $t_2$ under retardation $a_2$. $0 = v_{\\text{max}} - a_2 t_2 \\implies v_{\\text{max}} = a_2 t_2$.\n**Step 3:** Equate both expressions for $v_{\\text{max}}$ since they represent the same peak velocity: $a_1 t_1 = a_2 t_2$.\n**Step 4:** Rearrange the terms to find the ratio $t_1 / t_2$: $\\frac{t_1}{t_2} = \\frac{a_2}{a_1}$.\n\n*(Asked in JEE Main 2021, Feb 26, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q33",
      type: "integer",
      question: "The distance x covered by a particle in one dimensional motion varies with time t as $x^2 = at^2 + 2bt + c$. If the acceleration of the particle depends on x as $x^n$, where n is an integer, the value of n is _______. [Jan 9, 2020 (I)]",
      answer: -3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Start with the given equation: $x^2 = at^2 + 2bt + c$.\n**Step 2:** Differentiate both sides with respect to time $t$: $2x \\frac{dx}{dt} = 2at + 2b \\implies xv = at + b$  (Equation 1) (where $v = dx/dt$ is velocity).\n**Step 3:** Differentiate Equation 1 with respect to time $t$ again using the product rule: $v \\frac{dx}{dt} + x \\frac{dv}{dt} = a \\implies v^2 + xA = a$ (where $A = dv/dt$ is acceleration) $\\implies xA = a - v^2$.\n**Step 4:** Multiply both sides by $x^2$ to eliminate velocity $v$ using Equation 1: $x^3 A = ax^2 - (xv)^2$.\n**Step 5:** Substitute the values of $x^2$ and $(xv)$ into the expression: $x^3 A = a(at^2 + 2bt + c) - (at + b)^2 = a^2t^2 + 2abt + ac - (a^2t^2 + 2abt + b^2) = ac - b^2$.\n**Step 6:** Express acceleration $A$ in terms of $x$: $A = \\frac{ac - b^2}{x^3} = (ac - b^2) x^{-3}$.\n**Step 7:** Since $(ac - b^2)$ is a constant, acceleration $A \\propto x^{-3}$. Comparing this with $x^n$: $n = -3$.\n\n*(Asked in JEE Main 2020, Jan 9, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q34",
      question: "A bullet of mass 20g has an initial speed of $1\\text{ ms}^{-1}$, just before it starts penetrating a mud wall of thickness 20 cm. If the wall offers a mean resistance of $2.5 \\times 10^{-2}\\text{ N}$, the speed of the bullet after emerging from the other side of the wall is close to : [April 10, 2019 (II)]",
      options: [
        "$0.1\\text{ ms}^{-1}$",
        "$0.7\\text{ ms}^{-1}$",
        "$0.3\\text{ ms}^{-1}$",
        "$0.4\\text{ ms}^{-1}$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** List the given parameters and convert them to SI units: Mass ($m$) = 20 g = 0.02 kg, Initial speed ($u$) = $1\\text{ ms}^{-1}$, Distance/Thickness ($s$) = 20 cm = 0.2 m, Resistive Force ($F$) = $2.5 \\times 10^{-2}\\text{ N}$ = 0.025 N.\n**Step 2:** Use the Work-Energy Theorem (Work done by resistive force = Change in kinetic energy): $W = K_{\\text{final}} - K_{\\text{initial}} \\implies -Fs = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2$.\n**Step 3:** Substitute the values: $-0.025 \\times 0.2 = \\frac{1}{2}(0.02)v^2 - \\frac{1}{2}(0.02)(1)^2 \\implies -0.005 = 0.01v^2 - 0.01$.\n**Step 4:** Rearrange and solve for $v^2$: $0.01v^2 = 0.01 - 0.005 \\implies 0.01v^2 = 0.005 \\implies v^2 = \\frac{0.005}{0.01} = 0.5$.\n**Step 5:** Calculate the final velocity $v$: $v = \\sqrt{0.5} \\approx 0.707\\text{ ms}^{-1}$. The value is closest to $0.7\\text{ ms}^{-1}$.\n\n*(Asked in JEE Main 2019, April 10, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q35",
      question: "The position of a particle as a function of time t, is given by $x(t) = at + bt^2 - ct^3$ where, a, b and c are constants. When the particle attains zero acceleration, then its velocity will be: [April 9, 2019 (II)]",
      options: [
        "$a + \\frac{b^2}{4c}$",
        "$a + \\frac{b^2}{3c}$",
        "$a + \\frac{b^2}{c}$",
        "$a + \\frac{b^2}{2c}$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Find the velocity function $v(t)$ by differentiating position $x(t)$ with respect to $t$: $v(t) = \\frac{dx}{dt} = \\frac{d}{dt} [at + bt^2 - ct^3] = a + 2bt - 3ct^2$.\n**Step 2:** Find the acceleration function $A(t)$ by differentiating velocity $v(t)$ with respect to $t$: $A(t) = \\frac{dv}{dt} = \\frac{d}{dt} [a + 2bt - 3ct^2] = 2b - 6ct$.\n**Step 3:** Find the time $t$ when acceleration becomes zero: $2b - 6ct = 0 \\implies 6ct = 2b \\implies t = \\frac{2b}{6c} = \\frac{b}{3c}$.\n**Step 4:** Substitute $t = \\frac{b}{3c}$ into the velocity function to find the required velocity: $v = a + 2b(\\frac{b}{3c}) - 3c(\\frac{b}{3c})^2 = a + \\frac{2b^2}{3c} - 3c(\\frac{b^2}{9c^2}) = a + \\frac{2b^2}{3c} - \\frac{b^2}{3c} = a + \\frac{b^2}{3c}$.\n\n*(Asked in JEE Main 2019, April 9, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q36",
      question: "If $t = \\sqrt{x} + 4$, then $(dx/dt)_{t=4}$ is: [July 29, 2022 (I)]",
      options: [
        "4",
        "Zero",
        "8",
        "16"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Express position $x$ in terms of time $t$: $t = \\sqrt{x} + 4 \\implies \\sqrt{x} = t - 4$.\n**Step 2:** Square both sides: $x = (t - 4)^2$.\n**Step 3:** Differentiate position $x$ with respect to time $t$ to get velocity ($dx/dt$): $\\frac{dx}{dt} = \\frac{d}{dt} [(t - 4)^2] = 2(t - 4)$.\n**Step 4:** Evaluate the derivative at $t = 4\\text{ s}$: $(dx/dt)_{t=4} = 2(4 - 4) = 0$.\n\n*(Asked in JEE Main 2022, July 29, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q37",
      question: "The velocity of the bullet becomes one third after it penetrates 4 cm in a wooden block. Assuming that bullet is facing a constant resistance during its motion in the block. The bullet stops completely after travelling at $(4 + x)\\text{ cm}$ inside the block. The value of $x$ is: [July 27, 2022 (II)]",
      options: [
        "2.0",
        "1.0",
        "0.5",
        "1.5"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the initial velocity of the bullet be $u$ and constant deceleration be $a$.\n**Step 2:** For the first 4 cm of penetration, the final velocity is $v_1 = u/3$. Using $v^2 = u^2 + 2as$: $(u/3)^2 = u^2 + 2a(4) \\implies \\frac{u^2}{9} = u^2 + 8a \\implies 8a = -\\frac{8u^2}{9} \\implies a = -\\frac{u^2}{9}$.\n**Step 3:** Let the total penetration distance to come to rest completely ($v_2 = 0$) be $S = 4 + x$. Using $v^2 = u^2 + 2aS$: $0 = u^2 + 2(-\\frac{u^2}{9})(4 + x) \\implies 0 = u^2 \\left[ 1 - \\frac{2}{9}(4 + x) \\right]$.\n**Step 4:** Since $u \\neq 0$, solve for $x$: $1 = \\frac{2}{9}(4 + x) \\implies \\frac{9}{2} = 4 + x \\implies 4.5 = 4 + x \\implies x = 0.5$.\n\n*(Asked in JEE Main 2022, July 27, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q38",
      type: "integer",
      question: "A car is moving with speed of 150 km/h and after applying the break it will move 27 m before it stops. If the same car is moving with a speed of one third the reported speed then it will stop after travelling _______ m distance. [July 25, 2022 (I)]",
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** The stopping distance ($s$) under constant braking retardation ($a$) is given by the third equation of motion: $v^2 = u^2 + 2as \\implies 0 = u^2 - 2as \\implies s = \\frac{u^2}{2a}$.\n**Step 2:** Since the car and braking force are identical, acceleration (retardation) is constant, meaning stopping distance is proportional to the square of the initial speed: $s \\propto u^2$.\n**Step 3:** When the initial speed is reduced to one-third ($u' = u/3$), the new stopping distance ($s'$) will be: $s' \\propto (u/3)^2 \\implies s' = s / 9$.\n**Step 4:** Substitute the original stopping distance ($s = 27\\text{ m}$): $s' = 27 / 9 = 3\\text{ m}$.\n\n*(Asked in JEE Main 2022, July 25, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q39",
      type: "integer",
      question: "A particle is moving in a straight line such that its velocity is increasing at $5\\text{ ms}^{-1}$ per meter. The acceleration of the particle is _______ $\\text{ms}^{-2}$ at a point where its velocity is $20\\text{ ms}^{-1}$. [July 25, 2022 (II)]",
      answer: 100,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** The rate of change of velocity with respect to distance is given as: $\\frac{dv}{dx} = 5\\text{ s}^{-1}$.\n**Step 2:** Acceleration in terms of spatial derivative is given by the formula: $a = v \\frac{dv}{dx}$.\n**Step 3:** Substitute the given velocity ($v = 20\\text{ ms}^{-1}$) and $\\frac{dv}{dx}$ into the equation: $a = 20\\text{ ms}^{-1} \\times 5\\text{ s}^{-1} = 100\\text{ ms}^{-2}$.\n\n*(Asked in JEE Main 2022, July 25, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q40",
      question: "A small toy starts moving from the position of rest under a constant acceleration. If it travels a distance of 10 m in t s, the distance travelled by the toy in the next t s will be : [June 29, 2022 (II)]",
      options: [
        "10 m",
        "20 m",
        "30 m",
        "40 m"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** The toy starts from rest, so initial velocity $u = 0$.\n**Step 2:** Distance covered in the first $t$ seconds ($s_1$): $s_1 = ut + \\frac{1}{2}at^2 \\implies 10 = \\frac{1}{2}at^2$.\n**Step 3:** Distance covered in total time of $2t$ seconds from start ($s_{\\text{total}}$): $s_{\\text{total}} = \\frac{1}{2}a(2t)^2 = 4 \\left( \\frac{1}{2}at^2 \\right) = 4 \\times 10 = 40\\text{ m}$.\n**Step 4:** The distance covered in the **next** $t$ seconds is the difference between total distance and first interval distance: $s_2 = s_{\\text{total}} - s_1 = 40\\text{ m} - 10\\text{ m} = 30\\text{ m}$.\n\n*(Asked in JEE Main 2022, June 29, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q41",
      question: "Two buses P and Q start from a point at the same time and move in a straight line and their positions are represented by $X_P(t) = \\alpha t + \\beta t^2$ and $X_Q(t) = f t - t^2$. At what time, both the buses have same velocity ? [June 25, 2022 (II)]",
      options: [
        "$\\frac{\\alpha - f}{1 + \\beta}$",
        "$\\frac{\\alpha + f}{2(\\beta - 1)}$",
        "$\\frac{\\alpha + f}{2(1 + \\beta)}$",
        "$\\frac{f - \\alpha}{2(1 + \\beta)}$"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Differentiate the position equations to obtain the velocity functions of both buses:\n$v_P(t) = \\frac{d(X_P)}{dt} = \\frac{d}{dt} [\\alpha t + \\beta t^2] = \\alpha + 2\\beta t$\n$v_Q(t) = \\frac{d(X_Q)}{dt} = \\frac{d}{dt} [f t - t^2] = f - 2t$\n**Step 2:** Set their velocities equal to find the matching time condition: $v_P(t) = v_Q(t) \\implies \\alpha + 2\\beta t = f - 2t$.\n**Step 3:** Group terms containing $t$ on one side: $2\\beta t + 2t = f - \\alpha \\implies 2t(\\beta + 1) = f - \\alpha$.\n**Step 4:** Solve for time $t$: $t = \\frac{f - \\alpha}{2(1 + \\beta)}$.\n\n*(Asked in JEE Main 2022, June 25, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q42",
      type: "integer",
      question: "If the velocity of a body related to displacement x is given by $v = \\sqrt{5000 + 24x}\\text{ m/s}$, then the acceleration of the body is _________ $\\text{m/s}^2$. [Aug. 27, 2021 (I)]",
      answer: 12,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Write down the given velocity-displacement relationship: $v = \\sqrt{5000 + 24x}$.\n**Step 2:** Square both sides to eliminate the square root: $v^2 = 5000 + 24x$.\n**Step 3:** Differentiate both sides with respect to position $x$: $\\frac{d}{dx} [v^2] = \\frac{d}{dx} [5000 + 24x] \\implies 2v \\frac{dv}{dx} = 24$.\n**Step 4:** Recall that acceleration ($a$) is given by the formula $a = v \\frac{dv}{dx}$: $2a = 24 \\implies a = 12\\text{ m/s}^2$.\n\n*(Asked in JEE Main 2021, Aug 27, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q43",
      question: "The instantaneous velocity of a particle moving in a straight line is given as $v = \\alpha t + \\beta t^2$, where $\\alpha$ and $\\beta$ are constants. The distance travelled by the particle between 1s and 2s is: [July 25, 2021 (II)]",
      options: [
        "$3\\alpha + 7\\beta$",
        "$\\frac{3}{2}\\alpha + \\frac{7}{3}\\beta$",
        "$\\frac{\\alpha}{2} + \\frac{\\beta}{3}$",
        "$\\frac{3}{2}\\alpha + \\frac{7}{2}\\beta$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Distance ($s$) is the definite integral of velocity ($v$) with respect to time ($t$): $s = \\int_{1}^{2} v dt$.\n**Step 2:** Substitute the expression for velocity: $s = \\int_{1}^{2} (\\alpha t + \\beta t^2) dt$.\n**Step 3:** Integrate each term with respect to $t$: $s = \\left[ \\frac{\\alpha t^2}{2} + \\frac{\\beta t^3}{3} \\right]_1^2$.\n**Step 4:** Substitute the upper and lower limits: $s = \\left[ \\frac{\\alpha (2)^2}{2} + \\frac{\\beta (2)^3}{3} \\right] - \\left[ \\frac{\\alpha (1)^2}{2} + \\frac{\\beta (1)^3}{3} \\right] = \\left[ 2\\alpha + \\frac{8}{3}\\beta \\right] - \\left[ \\frac{1}{2}\\alpha + \\frac{1}{3}\\beta \\right]$.\n**Step 5:** Combine like terms: $s = (2 - \\frac{1}{2})\\alpha + (\\frac{8}{3} - \\frac{1}{3})\\beta = \\frac{3}{2}\\alpha + \\frac{7}{3}\\beta$.\n\n*(Asked in JEE Main 2021, July 25, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q44",
      question: "A scooter accelerates from rest for time $t_1$ at constant rate $a_1$ and then retards at constant rate $a_2$ for time $t_2$ and comes to rest. The correct value of $t_1/t_2$ will be: [Feb. 26, 2021 (II)]",
      options: [
        "$\\frac{a_1 + a_2}{a_1}$",
        "$\\frac{a_1}{a_2}$",
        "$\\frac{a_2}{a_1}$",
        "$\\frac{a_1 + a_2}{a_2}$"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Analyze the acceleration phase: The scooter starts from rest ($u = 0$) and reaches a maximum velocity ($v_{\\text{max}}$) in time $t_1$ with acceleration $a_1$. $v_{\\text{max}} = 0 + a_1 t_1 \\implies v_{\\text{max}} = a_1 t_1$.\n**Step 2:** Analyze the retardation phase: The scooter starts with initial velocity $v_{\\text{max}}$ and comes to rest ($v = 0$) in time $t_2$ under retardation $a_2$. $0 = v_{\\text{max}} - a_2 t_2 \\implies v_{\\text{max}} = a_2 t_2$.\n**Step 3:** Equate both expressions for $v_{\\text{max}}$ since they represent the same peak velocity: $a_1 t_1 = a_2 t_2$.\n**Step 4:** Rearrange the terms to find the ratio $t_1 / t_2$: $\\frac{t_1}{t_2} = \\frac{a_2}{a_1}$.\n\n*(Asked in JEE Main 2021, Feb 26, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q45",
      type: "integer",
      question: "The distance x covered by a particle in one dimensional motion varies with time t as $x^2 = at^2 + 2bt + c$. If the acceleration of the particle depends on x as $x^n$, where n is an integer, the value of n is _______. [Jan 9, 2020 (I)]",
      answer: -3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Start with the given equation: $x^2 = at^2 + 2bt + c$.\n**Step 2:** Differentiate both sides with respect to time $t$: $2x \\frac{dx}{dt} = 2at + 2b \\implies xv = at + b$  (Equation 1) (where $v = dx/dt$ is velocity).\n**Step 3:** Differentiate Equation 1 with respect to time $t$ again using the product rule: $v \\frac{dx}{dt} + x \\frac{dv}{dt} = a \\implies v^2 + xA = a$ (where $A = dv/dt$ is acceleration) $\\implies xA = a - v^2$.\n**Step 4:** Multiply both sides by $x^2$ to eliminate velocity $v$ using Equation 1: $x^3 A = ax^2 - (xv)^2$.\n**Step 5:** Substitute the values of $x^2$ and $(xv)$ into the expression: $x^3 A = a(at^2 + 2bt + c) - (at + b)^2 = a^2t^2 + 2abt + ac - (a^2t^2 + 2abt + b^2) = ac - b^2$.\n**Step 6:** Express acceleration $A$ in terms of $x$: $A = \\frac{ac - b^2}{x^3} = (ac - b^2) x^{-3}$.\n**Step 7:** Since $(ac - b^2)$ is a constant, acceleration $A \\propto x^{-3}$. Comparing this with $x^n$: $n = -3$.\n\n*(Asked in JEE Main 2020, Jan 9, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q46",
      question: "A bullet of mass 20g has an initial speed of $1\\text{ ms}^{-1}$, just before it starts penetrating a mud wall of thickness 20 cm. If the wall offers a mean resistance of $2.5 \\times 10^{-2}\\text{ N}$, the speed of the bullet after emerging from the other side of the wall is close to : [April 10, 2019 (II)]",
      options: [
        "$0.1\\text{ ms}^{-1}$",
        "$0.7\\text{ ms}^{-1}$",
        "$0.3\\text{ ms}^{-1}$",
        "$0.4\\text{ ms}^{-1}$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** List the given parameters and convert them to SI units: Mass ($m$) = 20 g = 0.02 kg, Initial speed ($u$) = $1\\text{ ms}^{-1}$, Distance/Thickness ($s$) = 20 cm = 0.2 m, Resistive Force ($F$) = $2.5 \\times 10^{-2}\\text{ N}$ = 0.025 N.\n**Step 2:** Use the Work-Energy Theorem (Work done by resistive force = Change in kinetic energy): $W = K_{\\text{final}} - K_{\\text{initial}} \\implies -Fs = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2$.\n**Step 3:** Substitute the values: $-0.025 \\times 0.2 = \\frac{1}{2}(0.02)v^2 - \\frac{1}{2}(0.02)(1)^2 \\implies -0.005 = 0.01v^2 - 0.01$.\n**Step 4:** Rearrange and solve for $v^2$: $0.01v^2 = 0.01 - 0.005 \\implies 0.01v^2 = 0.005 \\implies v^2 = \\frac{0.005}{0.01} = 0.5$.\n**Step 5:** Calculate the final velocity $v$: $v = \\sqrt{0.5} \\approx 0.707\\text{ ms}^{-1}$. The value is closest to $0.7\\text{ ms}^{-1}$.\n\n*(Asked in JEE Main 2019, April 10, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q47",
      question: "The position of a particle as a function of time t, is given by $x(t) = at + bt^2 - ct^3$ where, a, b and c are constants. When the particle attains zero acceleration, then its velocity will be: [April 9, 2019 (II)]",
      options: [
        "$a + \\frac{b^2}{4c}$",
        "$a + \\frac{b^2}{3c}$",
        "$a + \\frac{b^2}{c}$",
        "$a + \\frac{b^2}{2c}$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Find the velocity function $v(t)$ by differentiating position $x(t)$ with respect to $t$: $v(t) = \\frac{dx}{dt} = \\frac{d}{dt} [at + bt^2 - ct^3] = a + 2bt - 3ct^2$.\n**Step 2:** Find the acceleration function $A(t)$ by differentiating velocity $v(t)$ with respect to $t$: $A(t) = \\frac{dv}{dt} = \\frac{d}{dt} [a + 2bt - 3ct^2] = 2b - 6ct$.\n**Step 3:** Find the time $t$ when acceleration becomes zero: $2b - 6ct = 0 \\implies 6ct = 2b \\implies t = \\frac{2b}{6c} = \\frac{b}{3c}$.\n**Step 4:** Substitute $t = \\frac{b}{3c}$ into the velocity function to find the required velocity: $v = a + 2b(\\frac{b}{3c}) - 3c(\\frac{b}{3c})^2 = a + \\frac{2b^2}{3c} - 3c(\\frac{b^2}{9c^2}) = a + \\frac{2b^2}{3c} - \\frac{b^2}{3c} = a + \\frac{b^2}{3c}$.\n\n*(Asked in JEE Main 2019, April 9, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q48",
      question: "In a car race on straight road, car A takes a time t less than car B at the finish and passes finishing point with a speed 'v' more than of car B. Both the cars start from rest and travel with constant acceleration $a_1$ and $a_2$ respectively. Then 'v' is equal to: [Jan. 9, 2019 (II)]",
      options: [
        "$\\frac{2 a_1 a_2}{a_1 + a_2} t$",
        "$\\sqrt{2 a_1 a_2} t$",
        "$\\sqrt{a_1 a_2} t$",
        "$\\frac{a_1 + a_2}{2} t$"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the total distance of the race track be $S$. Both cars start from rest (initial velocity = 0).\n**Step 2:** Let car B take time $t_B$ to finish and have a final velocity $v_B$. Using equations of motion for car B: $S = \\frac{1}{2} a_2 t_B^2 \\implies t_B = \\sqrt{\\frac{2S}{a_2}}$ and $v_B = a_2 t_B = a_2 \\sqrt{\\frac{2S}{a_2}} = \\sqrt{2a_2 S}$.\n**Step 3:** Car A takes time $t$ less and reaches with speed $v$ more, so $t_A = t_B - t$ and $v_A = v_B + v$. Using equations of motion for car A: $S = \\frac{1}{2} a_1 t_A^2 \\implies t_A = \\sqrt{\\frac{2S}{a_1}}$ and $v_A = a_1 t_A = a_1 \\sqrt{\\frac{2S}{a_1}} = \\sqrt{2a_1 S}$.\n**Step 4:** Write the given relations for differences: $t = t_B - t_A = \\sqrt{\\frac{2S}{a_2}} - \\sqrt{\\frac{2S}{a_1}} = \\sqrt{2S} (\\frac{1}{\\sqrt{a_2}} - \\frac{1}{\\sqrt{a_1}})$ (Eq 1) and $v = v_A - v_B = \\sqrt{2a_1 S} - \\sqrt{2a_2 S} = \\sqrt{2S} (\\sqrt{a_1} - \\sqrt{a_2})$ (Eq 2).\n**Step 5:** Divide Eq 2 by Eq 1: $\\frac{v}{t} = \\frac{\\sqrt{2S} (\\sqrt{a_1} - \\sqrt{a_2})}{\\sqrt{2S} (\\frac{\\sqrt{a_1} - \\sqrt{a_2}}{\\sqrt{a_1 a_2}})} = \\sqrt{a_1 a_2}$.\n**Step 6:** Solve for $v$: $v = \\sqrt{a_1 a_2} t$.\n\n*(Asked in JEE Main 2019, Jan 9, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q49",
      question: "An automobile, travelling at 40 km/h, can be stopped at a distance of 40 m by applying brakes. If the same automobile is travelling at 80 km/h, the minimum stopping distance, in metres, is (assume no skidding) [Online April 15, 2018]",
      options: [
        "75 m",
        "160 m",
        "100 m",
        "150 m"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Under uniform maximum braking retardation ($a$), the stopping distance ($s$) is given by the third equation of motion: $v^2 = u^2 + 2as \\implies 0 = u^2 - 2as \\implies s = \\frac{u^2}{2a}$.\n**Step 2:** Since it is the same automobile on the same road condition, the maximum deceleration ($a$) is constant. Therefore, stopping distance is directly proportional to the square of initial speed: $s \\propto u^2$.\n**Step 3:** Determine the factor by which initial speed changes: New speed ($u'$) = 80 km/h, Original speed ($u$) = 40 km/h, $u' / u = 80 / 40 = 2$ (The speed is doubled).\n**Step 4:** Calculate the new stopping distance ($s'$): $s' / s = (u' / u)^2 = 2^2 = 4 \\implies s' = 4s = 4 \\times 40\\text{ m} = 160\\text{ m}$.\n\n*(Asked in JEE Main 2018, April 15)*"
    },
    {
      id: "kinematics-pyq-q50",
      question: "A body projected vertically upwards with a certain speed from the top of a tower reaches the ground in $t_1$. If it is projected vertically downwards from the same point with the same speed, it reaches the ground in $t_2$. Time required to reach the ground, if it is dropped from the top of the tower, is : [April 6, 2024 (II)]",
      options: [
        "$\\sqrt{t_1 t_2}$",
        "$\\sqrt{t_1 - t_2}$",
        "$\\sqrt{t_1 / t_2}$",
        "$\\sqrt{t_1 + t_2}$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the height of the tower be $h$, initial speed be $u$, and downward acceleration due to gravity be $g$. Taking the downward direction as positive.\n**Step 2:** Case 1 (Projected vertically upwards): Initial velocity is $-u$. $h = -ut_1 + \\frac{1}{2}gt_1^2$ (Eq 1).\n**Step 3:** Case 2 (Projected vertically downwards): Initial velocity is $+u$. $h = ut_2 + \\frac{1}{2}gt_2^2$ (Eq 2).\n**Step 4:** To eliminate $u$, multiply Eq 1 by $t_2$ and Eq 2 by $t_1$, then add them:\n$h t_2 = -ut_1 t_2 + \\frac{1}{2}gt_1^2 t_2$\n$h t_1 = ut_1 t_2 + \\frac{1}{2}gt_2^2 t_1$\nAdding them gives $h(t_1 + t_2) = \\frac{1}{2}gt_1 t_2(t_1 + t_2) \\implies h = \\frac{1}{2}gt_1 t_2$ (Eq 3).\n**Step 5:** Case 3 (Dropped from the top): Initial velocity is 0. Let the time taken be $t$. $h = \\frac{1}{2}gt^2$ (Eq 4).\n**Step 6:** Equating Eq 3 and Eq 4: $\\frac{1}{2}gt^2 = \\frac{1}{2}gt_1 t_2 \\implies t^2 = t_1 t_2 \\implies t = \\sqrt{t_1 t_2}$.\n\n*(Asked in JEE Main 2024, April 6, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q51",
      question: "Train A is moving along two parallel rail tracks towards north with speed 72 km/h and train B is moving towards south with speed 108 km/h. Velocity of train B with respect to A and velocity of ground with respect to B are (in $\\text{ms}^{-1}$) : [Feb. 1, 2024 (II)]",
      options: [
        "-50 and -30",
        "-50 and 30",
        "-30 and 50",
        "50 and -30"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Establish a coordinate system. Let North be the positive direction ($\\hat{j}$) and South be the negative direction ($-\\hat{j}$).\n**Step 2:** Convert speeds from km/h to m/s: Velocity of A ($v_A$) = $+72 \\times (5/18) = +20\\text{ m/s}$. Velocity of B ($v_B$) = $-108 \\times (5/18) = -30\\text{ m/s}$. Velocity of Ground ($v_G$) = $0\\text{ m/s}$.\n**Step 3:** Find the velocity of train B with respect to A ($v_{BA}$): $v_{BA} = v_B - v_A = -30 - 20 = -50\\text{ m/s}$.\n**Step 4:** Find the velocity of ground with respect to B ($v_{GB}$): $v_{GB} = v_G - v_B = 0 - (-30) = +30\\text{ m/s}$.\n\n*(Asked in JEE Main 2024, Feb 1, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q52",
      question: "Two trains 'A' and 'B' of length 'l' and '4l' are travelling into a tunnel of length 'L' in parallel tracks from opposite directions with velocities 108 km/h and 72 km/h, respectively. If train 'A' takes 35 s less time than train 'B' to cross the tunnel then, length 'L' of tunnel is: (Given L = 60l) [April 13, 2023 (I)]",
      options: [
        "1200 m",
        "2700 m",
        "1800 m",
        "900 m"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Convert speeds to m/s: Speed of A ($v_A$) = $108 \\times (5/18) = 30\\text{ m/s}$. Speed of B ($v_B$) = $72 \\times (5/18) = 20\\text{ m/s}$.\n**Step 2:** Set up total distance required to completely cross the tunnel: Total distance for A = $L + l$, Total distance for B = $L + 4l$.\n**Step 3:** Express time taken by both trains: $t_A = \\frac{L + l}{v_A} = \\frac{L + l}{30}$, $t_B = \\frac{L + 4l}{v_B} = \\frac{L + 4l}{20$.\n**Step 4:** Use the given time difference condition ($t_B - t_A = 35\\text{ s}$): $\\frac{L + 4l}{20} - \\frac{L + l}{30} = 35$.\n**Step 5:** Given $L = 60l$, substitute $l = L/60$ into the expression: $\\frac{L + 4(L/60)}{20} - \\frac{L + L/60}{30} = 35 \\implies \\frac{64L/60}{20} - \\frac{61L/60}{30} = 35 \\implies \\frac{64L}{1200} - \\frac{61L}{1800} = 35$.\n**Step 6:** Find a common denominator (3600): $\\frac{3(64L) - 2(61L)}{3600} = 35 \\implies \\frac{192L - 122L}{3600} = 35 \\implies \\frac{70L}{3600} = 35 \\implies \\frac{2L}{3600} = 1 \\implies 2L = 3600 \\implies L = 1800\\text{ m}$.\n\n*(Asked in JEE Main 2023, April 13, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q53",
      question: "A passenger sitting in a train A moving at 90 km/h observes another train B moving in the opposite direction for 8 s. If the velocity of the train B is 54 km/h, then length of train B is : [April 13, 2023 (II)]",
      options: [
        "80 m",
        "200 m",
        "120 m",
        "320 m"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Since the passenger is inside train A, they act as a moving observer. The distance covered relative to the observer during the crossing period is strictly the total length of train B ($L_B$).\n**Step 2:** Since the trains are moving in opposite directions, find their relative speed ($v_{\\text{rel}}$): $v_A = 90\\text{ km/h} = 90 \\times (5/18) = 25\\text{ m/s}$, $v_B = 54\\text{ km/h} = 54 \\times (5/18) = 15\\text{ m/s}$. $v_{\\text{rel}} = v_A + v_B = 25 + 15 = 40\\text{ m/s}$.\n**Step 3:** Calculate the length of train B using the observed crossing duration ($t = 8\\text{ s}$): $L_B = v_{\\text{rel}} \\times t = 40\\text{ m/s} \\times 8\\text{ s} = 320\\text{ m}$.\n\n*(Asked in JEE Main 2023, April 13, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q54",
      question: "Train A and train B are running on parallel tracks in the opposite directions with speeds of 36 km/hour and 72 km/hour, respectively. A person is walking in train A in the direction opposite to its motion with a speed of 1.8 km/hour w.r.t train A. Speed (in $\\text{ms}^{-1}$) of this person as observed from train B will be close to : (take the distance between the tracks as negligible) [Sep. 2, 2020 (I)]",
      options: [
        "$29.5\\text{ ms}^{-1}$",
        "$28.5\\text{ ms}^{-1}$",
        "$31.5\\text{ ms}^{-1}$",
        "$30.5\\text{ ms}^{-1}$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Set up a coordinate system where Train A moves in the positive x-direction ($+\\hat{i}$). Therefore, Train B moves in the opposite direction ($-\\hat{i}$). $v_A = +36\\text{ km/h}$, $v_B = -72\\text{ km/h}$.\n**Step 2:** The person is walking inside Train A, opposite to the direction of Train A's motion ($-\\hat{i}$): $v_{pA} = -1.8\\text{ km/h}$.\n**Step 3:** Find the velocity of the person with respect to the ground ($v_p$): $v_p = v_A + v_{pA} = 36 - 1.8 = +34.2\\text{ km/h}$.\n**Step 4:** Find the velocity of the person with respect to Train B ($v_{pB}$): $v_{pB} = v_p - v_B = 34.2 - (-72) = 34.2 + 72 = 106.2\\text{ km/h}$.\n**Step 5:** Convert this relative speed into m/s: $v_{pB} = 106.2 \\times (5 / 18) = 5.9 \\times 5 = 29.5\\text{ ms}^{-1}$.\n\n*(Asked in JEE Main 2020, Sep 2, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q55",
      question: "A passenger train of length 60 m travels at a speed of 80 km/hr. Another freight train of length 120 m travels at a speed of 30 km/h. The ratio of times taken by the passenger train to completely cross the freight train when: (i) they are moving in same direction, and (ii) in the opposite directions is: [Jan. 12, 2019 (II)]",
      options: [
        "11 / 5",
        "5 / 2",
        "3 / 2",
        "25 / 11"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** In both scenarios, the total relative distance to be covered to completely pass each other is the sum of the lengths of both trains: Total Distance ($D$) = $60\\text{ m} + 120\\text{ m} = 180\\text{ m}$.\n**Step 2:** Find relative speeds for both cases (converting to km/h first is fine since we need a ratio): Speed of passenger train ($v_1$) = 80 km/h, Speed of freight train ($v_2$) = 30 km/h.\n(i) Same direction relative speed: $v_{\\text{same}} = v_1 - v_2 = 80 - 30 = 50\\text{ km/h}$.\n(ii) Opposite direction relative speed: $v_{\\text{opp}} = v_1 + v_2 = 80 + 30 = 110\\text{ km/h}$.\n**Step 3:** Time taken is inversely proportional to relative speed since total distance $D$ is identical: $\\frac{t_1}{t_2} = \\frac{v_{\\text{opp}}}{v_{\\text{same}}} = \\frac{110}{50} = \\frac{11}{5}$.\n\n*(Asked in JEE Main 2019, Jan 12, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q56",
      question: "A person standing on an open ground hears the sound of a jet aeroplane, coming from north at an angle 60° with ground level. But he finds the aeroplane right vertically above his position. If v is the speed of sound, speed of the plane is: [Jan. 12, 2019 (II)]",
      options: [
        "$\\frac{\\sqrt{3}}{2} v$",
        "$\\frac{2v}{\\sqrt{3}}$",
        "v",
        "$\\frac{v}{2}$"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the height of the airplane when it is vertically above the person be $h$.\n**Step 2:** The sound heard by the person now was emitted by the airplane at an earlier position when it was further back north.\n**Step 3:** Let the time taken for sound to travel from that past position to the person's ears be $t$. Distance travelled by sound line-of-sight = $vt$.\n**Step 4:** In that same time $t$, the airplane travelled forward with speed $v_p$ to end up directly overhead. Horizontal distance travelled by airplane = $v_p t$.\n**Step 5:** This forms a right-angled triangle where the hypotenuse is the sound path ($vt$), the base is the plane's path ($v_p t$), and the base angle with the horizontal ground level is $60^\\circ$.\n**Step 6:** Use the cosine trigonometric ratio: $\\cos(60^\\circ) = \\frac{\\text{Base}}{\\text{Hypotenuse}} \\implies \\frac{1}{2} = \\frac{v_p t}{v t} \\implies \\frac{1}{2} = \\frac{v_p}{v} \\implies v_p = \\frac{v}{2}$.\n\n*(Asked in JEE Main 2019, Jan 12, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q91",
      type: "integer",
      question: "A ball of mass 0.5 kg is dropped from the height of 10m. The height, at which the magnitude of velocity becomes equal to the magnitude of acceleration due to gravity, is ............. m. (Use g = 10 m/s²). [NCERT : P L-18, 19 | June 26, 2022 (I)]",
      answer: 5,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Identify the condition required: Magnitude of velocity ($v$) equals the magnitude of acceleration due to gravity ($g = 10\\text{ m/s}^2$).\nTherefore, required velocity $v = 10\\text{ m/s}$.\n**Step 2:** Let the distance fallen from the top to reach this velocity be $y$. The ball is dropped from rest, so initial velocity $u = 0$.\nUsing the third equation of motion: $v^2 = u^2 + 2gy \\implies (10)^2 = 0 + 2(10)y \\implies 100 = 20y \\implies y = 5\\text{ m}$.\n**Step 3:** The ball has fallen 5 m from a total initial height of 10 m. Calculate the current height from the ground: Height = $10\\text{ m} - 5\\text{ m} = 5\\text{ m}$.\n\n*(Asked in JEE Main 2022, June 26, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q92",
      type: "integer",
      question: "A ball is projected vertically upward with an initial velocity of $50\\text{ ms}^{-1}$ at $t = 0\\text{s}$. At $t = 2\\text{s}$, another ball is projected vertically upward with same velocity. At t = ________ s, second ball will meet the first ball (g = $10\\text{ ms}^{-2}$). [NCERT : P L-18, 19 | June 26, 2022 (II)]",
      answer: 6,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the time when they meet be $t$ (measured from $t = 0$, the launch of the first ball).\n**Step 2:** Write the position equation for the first ball at time $t$: $y_1 = ut - \\frac{1}{2}gt^2 = 50t - 5t^2$.\n**Step 3:** The second ball is launched at $t = 2\\text{s}$, so its total travel time at time $t$ is $(t - 2)$. Write its position equation: $y_2 = 50(t - 2) - 5(t - 2)^2 = 50t - 100 - 5(t^2 - 4t + 4) = 50t - 100 - 5t^2 + 20t - 20 = 70t - 5t^2 - 120$.\n**Step 4:** Set the positions equal to find the meeting time ($y_1 = y_2$): $50t - 5t^2 = 70t - 5t^2 - 120 \\implies 50t = 70t - 120 \\implies 20t = 120 \\implies t = 6\\text{ s}$.\n\n*(Asked in JEE Main 2022, June 26, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q93",
      question: "Water droplets are coming from an open tap at a particular rate. The spacing between a droplet observed at 4th second after its fall to the next droplet is 34.3 m. At what rate the droplets are coming from the tap? (Take g = 9.8 m/s²) [NCERT : P L-18, 19 | June 25, 2022 (I)]",
      options: [
        "3 drops / 2 seconds",
        "2 drops / second",
        "1 drop / second",
        "1 drop / 7 seconds"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the time interval between consecutive drops be $\\Delta t$.\n**Step 2:** The leading drop has been falling for $t_1 = 4\\text{ seconds}$. Its position from the tap is: $y_1 = \\frac{1}{2}gt_1^2 = \\frac{1}{2}(9.8)(4)^2 = 4.9 \\times 16 = 78.4\\text{ m}$.\n**Step 3:** The next drop has been falling for $t_2 = (4 - \\Delta t)\\text{ seconds}$. Its position from the tap is: $y_2 = \\frac{1}{2}g(4 - \\Delta t)^2 = 4.9(4 - \\Delta t)^2$.\n**Step 4:** The given spacing between them is 34.3 m: $y_1 - y_2 = 34.3 \\implies 78.4 - 4.9(4 - \\Delta t)^2 = 34.3 \\implies 4.9(4 - \\Delta t)^2 = 78.4 - 34.3 = 44.1$.\n**Step 5:** Solve for $\\Delta t$: $(4 - \\Delta t)^2 = 44.1 / 4.9 = 9 \\implies 4 - \\Delta t = 3 \\implies \\Delta t = 1\\text{ second}$.\n**Step 6:** Since the interval between consecutive drops is 1 second, the rate is 1 drop per second.\n\n*(Asked in JEE Main 2022, June 25, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q94",
      type: "integer",
      question: "From the top of a tower, a ball is thrown vertically upward which reaches the ground in 6s. A second ball thrown vertically downward from the same position with the same speed reaches the ground in 1.5 s. A third ball released from the rest from the same location, will reach the ground in _______ s. [NCERT : P L-18, 19 | June 24, 2022 (I)]",
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the height of the tower be $h$, the projection speed be $u$, and the time for a freely dropped ball to reach the ground be $t$.\n**Step 2:** A standard kinematic result relates the time of upward projection ($t_1$), downward projection ($t_2$), and a free drop ($t$) from the same height with identical speeds: $t = \\sqrt{t_1 t_2}$.\n**Step 3:** Substitute the given values ($t_1 = 6\\text{ s}$, $t_2 = 1.5\\text{ s}$): $t = \\sqrt{6 \\times 1.5} = \\sqrt{9} = 3\\text{ s}$.\n\n*(Asked in JEE Main 2022, June 24, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q95",
      question: "Water drops are falling from a nozzle of a shower onto the floor, from a height of 9.8 m. The drops fall at a regular interval of time. When the first drop strikes the floor, at that instant, the third drop begins to fall. Locate the position of second drop from the floor when the first drop strikes the floor. [NCERT : P L-18, 19 | Aug. 27, 2021 (II)]",
      options: [
        "4.18m",
        "2.94m",
        "2.45m",
        "7.35m"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the regular time interval between consecutive drops be $\\Delta t$.\n**Step 2:** When the 1st drop strikes the floor, it has been falling for a total time of $2\\Delta t$. The 3rd drop is just leaving the nozzle (time = 0), and the 2nd drop has been falling for a time of $1\\Delta t$.\n**Step 3:** Find the total time taken by the 1st drop to hit the ground (height $H = 9.8\\text{ m}$, $g = 9.8\\text{ m/s}^2$): $H = \\frac{1}{2}gT^2 \\implies 9.8 = \\frac{1}{2}(9.8)T^2 \\implies T^2 = 2 \\implies T = \\sqrt{2}\\text{ s}$.\n**Step 4:** Since $T = 2\\Delta t$, we find the interval $\\Delta t$: $2\\Delta t = \\sqrt{2} \\implies \\Delta t = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}\\text{ s}$.\n**Step 5:** Calculate the distance fallen by the 2nd drop from the nozzle in time $\\Delta t$: $y_2 = \\frac{1}{2}g(\\Delta t)^2 = \\frac{1}{2}(9.8)(\\frac{1}{\\sqrt{2}})^2 = 4.9 \\times \\frac{1}{2} = 2.45\\text{ m}$.\n**Step 6:** Find the position of the 2nd drop measured upwards from the floor: Height from floor = Total height - Distance fallen = $9.8\\text{ m} - 2.45\\text{ m} = 7.35\\text{ m}$.\n\n*(Asked in JEE Main 2021, Aug 27, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q86",
      question: "A juggler throws balls vertically upwards with same initial velocity in air. When the first ball reaches its highest position, he throws the next ball. Assuming the juggler throws n balls per second, the maximum height the balls can reach is [NCERT : P L-18, 19 | July 29, 2022 (II)]",
      options: [
        "$g/2n$",
        "$g/n$",
        "$2gn$",
        "$g/2n^2$"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Identify the time interval between consecutive throws: Since the juggler throws $n$ balls per second, the time interval between two consecutive throws is $\\Delta t = 1/n$.\n**Step 2:** Relate the interval to the highest position: The problem states that when a ball reaches its maximum height, the next ball is thrown. The time taken to reach the maximum height is equal to the time of ascent ($t$). Therefore, $t = \\Delta t = 1/n$.\n**Step 3:** Express initial velocity ($u$) using the time of ascent ($v = 0$ at highest point): $v = u - gt \\implies 0 = u - g(1/n) \\implies u = g/n$.\n**Step 4:** Calculate the maximum height ($H$) reached by the balls: $H = \\frac{u^2}{2g} = \\frac{(g/n)^2}{2g} = \\frac{g^2}{2gn^2} = \\frac{g}{2n^2}$.\n\n*(Asked in JEE Main 2022, July 29, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q87",
      question: "A NCC parade is going at a uniform speed of 9 km/h under a mango tree on which a monkey is sitting at a height of 19.6 m. At any particular instant, the monkey drops a mango. A cadet will receive the mango whose distance from the tree at time of drop is : (Given g = 9.8 m/s²) [NCERT : P L-18, 19 | July 28, 2022 (I)]",
      options: [
        "5m",
        "10m",
        "19.8m",
        "24.5m"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Convert the uniform speed of the parade/cadet from km/h to m/s: Speed ($v$) = $9 \\times (5/18) = 2.5\\text{ m/s}$.\n**Step 2:** Calculate the time ($t$) taken for the dropped mango to fall freely to the ground from a height of $H = 19.6\\text{ m}$: $H = \\frac{1}{2}gt^2 \\implies 19.6 = \\frac{1}{2}(9.8)t^2 \\implies 19.6 = 4.9t^2 \\implies t^2 = 19.6 / 4.9 = 4 \\implies t = 2\\text{ s}$.\n**Step 3:** Calculate the horizontal distance covered by the cadet in these 2 seconds so that they arrive exactly under the tree to receive it: Distance = Speed $\\times$ Time = $2.5\\text{ m/s} \\times 2\\text{ s} = 5\\text{ m}$.\n\n*(Asked in JEE Main 2022, July 28, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q88",
      type: "integer",
      question: "A ball is thrown vertically upwards with a velocity of 19.6 ms⁻¹ from the top of a tower. The ball strikes the ground after 6s. The height from the ground up to which the ball can rise will be (k/5) m. The value of k is _______. (use g = 9.8 m/s²) [NCERT : PL-18, 19 | July 28, 2022 (II)]",
      answer: 392,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Set up the displacement equation from the top of the tower to find the height of the tower ($h$). Let the upward direction be positive: Initial velocity ($u$) = $+19.6\\text{ ms}^{-1}$, Time of travel ($t$) = 6 s, Acceleration ($a$) = $-g = -9.8\\text{ ms}^{-2}$.\n**Step 2:** Find displacement ($s$), which will be equal to $-h$ (downward from the launch point): $s = ut + \\frac{1}{2}at^2 \\implies -h = (19.6)(6) + \\frac{1}{2}(-9.8)(6)^2 \\implies -h = 117.6 - 4.9(36) = 117.6 - 176.4 = -58.8\\text{ m} \\implies h = 58.8\\text{ m}$ (Height of the tower).\n**Step 3:** Calculate the extra maximum height ($H_{\\text{max}}$) the ball rises above the top of the tower: $H_{\\text{max}} = \\frac{u^2}{2g} = \\frac{(19.6)^2}{2(9.8)} = \\frac{19.6 \\times 19.6}{19.6} = 19.6\\text{ m}$.\n**Step 4:** Find the total maximum height from the ground up to which the ball can rise ($H_{\\text{total}}$): $H_{\\text{total}}$ = Height of tower + $H_{\\text{max}} = 58.8 + 19.6 = 78.4\\text{ m}$.\n**Step 5:** Compare this value with the given expression ($k/5$) to solve for $k$: $k/5 = 78.4 \\implies k = 78.4 \\times 5 = 392$.\n\n*(Asked in JEE Main 2022, July 28, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q96",
      question: "Water droplets are coming from an open tap at a particular rate. The spacing between a droplet observed at 4th second after its fall to the next droplet is 34.3 m. At what rate the droplets are coming from the tap? (Take g = 9.8 m/s²) [NCERT : P L-18, 19 | July 25, 2021 (I)]",
      options: [
        "3 drops / 2 seconds",
        "2 drops / second",
        "1 drop / second",
        "1 drop / 7 seconds"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the time interval between consecutive drops be $\\Delta t$.\n**Step 2:** The leading drop has been falling for $t_1 = 4\\text{ seconds}$. Its position measured downwards from the tap is: $y_1 = \\frac{1}{2}gt_1^2 = \\frac{1}{2}(9.8)(4)^2 = 4.9 \\times 16 = 78.4\\text{ m}$.\n**Step 3:** The next drop has been falling for $t_2 = (4 - \\Delta t)\\text{ seconds}$. Its position is: $y_2 = \\frac{1}{2}g(4 - \\Delta t)^2 = 4.9(4 - \\Delta t)^2$.\n**Step 4:** The given spacing between them is 34.3 m: $y_1 - y_2 = 34.3 \\implies 78.4 - 4.9(4 - \\Delta t)^2 = 34.3 \\implies 4.9(4 - \\Delta t)^2 = 78.4 - 34.3 = 44.1$.\n**Step 5:** Solve for $\\Delta t$: $(4 - \\Delta t)^2 = 44.1 / 4.9 = 9 \\implies 4 - \\Delta t = 3 \\implies \\Delta t = 1\\text{ second}$.\n**Step 6:** Since the regular interval between consecutive drops is 1 second, the rate is 1 drop per second.\n\n*(Asked in JEE Main 2021, July 25, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q97",
      question: "A balloon was moving upwards with a uniform velocity of 10 m/s. An object of finite mass is dropped from the balloon when it was at a height of 75 m from the ground level. The height of the balloon from the ground when object strikes the ground was around: (takes the value of g as 10 m/s²) [NCERT : P L-18, 19 | July 25, 2021 (II)]",
      options: [
        "300m",
        "200m",
        "125m",
        "250m"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Analyze the motion of the dropped object. Because it is released from a moving balloon, it inherits the balloon's upward velocity. Initial velocity of object ($u$) = $+10\\text{ m/s}$ (upwards), Net displacement to reach the ground ($s$) = $-75\\text{ m}$ (downwards), Acceleration due to gravity ($a$) = $-g = -10\\text{ m/s}^2$.\n**Step 2:** Use the second equation of motion to find the flight time ($t$) of the object: $s = ut + \\frac{1}{2}at^2 \\implies -75 = 10t + \\frac{1}{2}(-10)t^2 \\implies -75 = 10t - 5t^2$.\n**Step 3:** Rearrange into a standard quadratic equation: $5t^2 - 10t - 75 = 0 \\implies t^2 - 2t - 15 = 0 \\implies (t - 5)(t + 3) = 0$. Since time cannot be negative, $t = 5\\text{ seconds}$.\n**Step 4:** Calculate how much higher the balloon travels during these 5 seconds at its constant uniform speed: Extra height traveled by balloon = Speed $\\times$ Time = $10\\text{ m/s} \\times 5\\text{ s} = 50\\text{ m}$.\n**Step 5:** Find the final total height of the balloon from the ground: Total Height = Initial height + Extra height = $75\\text{ m} + 50\\text{ m} = 125\\text{ m}$.\n\n*(Asked in JEE Main 2021, July 25, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q90",
      question: "Two balls A and B are placed at the top of 180 m tall tower. Ball A is released from the top at t = 0 s. Ball B is thrown vertically down with an initial velocity 'u' at t = 2 s. After a certain time, both balls meet 100 m above the ground. Find the value of 'u' in $\\text{ms}^{-1}$. [use g = $10\\text{ ms}^{-2}$] : [NCERT : P L-18, 19 | June 29, 2022 (I)]",
      options: [
        "10",
        "15",
        "20",
        "30"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Determine the downward distance ($s$) traveled by both balls from the top of the tower to the meeting point: Height of the tower = 180 m, Meeting point height from ground = 100 m, Downward displacement ($s$) = $180\\text{ m} - 100\\text{ m} = 80\\text{ m}$.\n**Step 2:** Analyze the motion of Ball A (released from rest, $u = 0$ at $t = 0\\text{ s}$): $s = ut_A + \\frac{1}{2}gt_A^2 \\implies 80 = 0 + \\frac{1}{2}(10)t_A^2 \\implies 80 = 5t_A^2 \\implies t_A^2 = 16 \\implies t_A = 4\\text{ seconds}$. This means the balls meet at the absolute time $t = 4\\text{ s}$.\n**Step 3:** Analyze the motion of Ball B (thrown downward at $t = 2\\text{ s}$): Since Ball B is thrown at $t = 2\\text{ s}$ and meets Ball A at $t = 4\\text{ s}$, its total time of travel ($t_B$) is: $t_B = 4\\text{ s} - 2\\text{ s} = 2\\text{ seconds}$.\n**Step 4:** Use the displacement equation for Ball B to find its initial velocity '$u$': $s = ut_B + \\frac{1}{2}gt_B^2 \\implies 80 = u(2) + \\frac{1}{2}(10)(2)^2 \\implies 80 = 2u + 5(4) \\implies 80 = 2u + 20 \\implies 2u = 60 \\implies u = 30\\text{ ms}^{-1}$.\n\n*(Asked in JEE Main 2022, June 29, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q99",
      question: "A stone is dropped from the top of a building. When it crosses a point 5 m below the top, another stone starts to fall from a point 25 m below the top. Both stones reach the bottom of building simultaneously. The height of the building is [NCERT : P L-18, 19 | Feb. 25, 2021 (II)]",
      options: [
        "35m",
        "45m",
        "25m",
        "50m"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let the total height of the building be $H$. Take acceleration due to gravity $g = 10\\text{ m/s}^2$.\n**Step 2:** Find the time ($t_1$) and velocity ($v$) of the first stone when it has fallen 5 m from the top: $s = \\frac{1}{2}gt_1^2 \\implies 5 = \\frac{1}{2}(10)t_1^2 \\implies t_1 = 1\\text{ s}$ and $v = gt_1 = 10(1) = 10\\text{ m/s}$ (downwards).\n**Step 3:** Let the remaining time for both stones to reach the ground simultaneously from this instant be $t$.\n**Step 4:** Set up the distance equation for the first stone to cover the remaining height ($H - 5$): $H - 5 = vt + \\frac{1}{2}gt^2 \\implies H - 5 = 10t + 5t^2$ (Eq 1).\n**Step 5:** Set up the distance equation for the second stone, which starts from rest from a point 25 m below the top to cover the remaining height ($H - 25$): $H - 25 = 0t + \\frac{1}{2}gt^2 \\implies H - 25 = 5t^2$ (Eq 2).\n**Step 6:** Subtract Eq 2 from Eq 1 to find the time $t$: $(H - 5) - (H - 25) = (10t + 5t^2) - 5t^2 \\implies 20 = 10t \\implies t = 2\\text{ s}$.\n**Step 7:** Substitute $t = 2\\text{ s}$ back into Eq 2 to find $H$: $H - 25 = 5(2)^2 \\implies H - 25 = 20 \\implies H = 45\\text{ m}$.\n\n*(Asked in JEE Main 2021, Feb 25, Shift 2)*"
    },
    {
      id: "kinematics-pyq-q100",
      question: "A helicopter rises from rest on the ground vertically upwards with a constant acceleration g. A food packet is dropped from the helicopter when it is at a height h. The time taken by the packet to reach the ground is close to [g is the acceleration due to gravity] : [NCERT : P L-18, 19 | Sep. 5, 2020 (I)]",
      options: [
        "$t = \\frac{2}{3} \\sqrt{\\frac{h}{g}}$",
        "$t = 1.8 \\sqrt{\\frac{h}{g}}$",
        "$t = \\sqrt{\\frac{2h}{3g}}$",
        "$t = 3.4 \\sqrt{\\frac{h}{g}}$"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Find the upward velocity ($v$) of the helicopter when it reaches a height $h$ from rest ($u = 0$) with upward acceleration $g$: $v^2 = u^2 + 2gh = 0 + 2gh \\implies v = \\sqrt{2gh}$ (upwards).\n**Step 2:** When the food packet is released, it inherits the upward velocity of the helicopter. Taking the upward direction as positive: Initial velocity of packet ($u_p$) = $+\\sqrt{2gh}$, Net displacement to ground ($s$) = $-h$, Acceleration ($a$) = $-g$.\n**Step 3:** Use the second equation of motion for the packet: $s = u_p t + \\frac{1}{2}at^2 \\implies -h = \\sqrt{2gh} t - \\frac{1}{2}gt^2$.\n**Step 4:** Rearrange this into a standard quadratic equation in terms of $t$: $\\frac{1}{2}gt^2 - \\sqrt{2gh} t - h = 0$. Multiply the entire equation by $2/g$: $t^2 - 2\\sqrt{\\frac{2h}{g}} t - \\frac{2h}{g} = 0$.\n**Step 5:** Solve for $t$ using the quadratic formula ($t = \\frac{-B \\pm \\sqrt{B^2 - 4AC}}{2A}$): $t = \\frac{2\\sqrt{2h/g} + \\sqrt{(-2\\sqrt{2h/g})^2 - 4(1)(-2h/g)}}{2} = \\frac{2\\sqrt{2h/g} + \\sqrt{8h/g + 8h/g}}{2} = \\frac{2\\sqrt{2h/g} + \\sqrt{16h/g}}{2} = \\sqrt{\\frac{2h}{g}} + 2\\sqrt{\\frac{h}{g}} = (\\sqrt{2} + 2) \\sqrt{\\frac{h}{g}}$.\n**Step 6:** Substitute the numerical value $\\sqrt{2} \\approx 1.414$: $t = (1.414 + 2) \\sqrt{\\frac{h}{g}} = 3.414 \\sqrt{\\frac{h}{g}} \\approx 3.4 \\sqrt{\\frac{h}{g}}$.\n\n*(Asked in JEE Main 2020, Sep 5, Shift 1)*"
    },
    {
      id: "kinematics-pyq-q105",
      question: "From a tower of height H, a particle is thrown vertically upwards with a speed u. The time taken by the particle, to hit the ground, is n times that taken by it to reach the highest point of its path. The relation between H, u and n is: [NCERT : PL-18, 19 | 2014]",
      options: [
        "$2gH = n^2u^2$",
        "$gH = (n - 2)^2u^2$",
        "$2gH = nu^2(n - 2)$",
        "$gH = (n - 2)u^2$"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Find the time taken to reach the highest point ($t_{\\text{up}}$): At the highest point, velocity is 0. $v = u - gt_{\\text{up}} \\implies 0 = u - gt_{\\text{up}} \\implies t_{\\text{up}} = u/g$.\n**Step 2:** Express the total time taken to hit the ground ($T$): According to the problem statement, $T = n t_{\\text{up}} = n(u/g)$.\n**Step 3:** Use the displacement equation for the entire journey. Take the upward direction as positive: Initial velocity = $+u$, Displacement = $-H$ (downward from the top of the tower), Acceleration = $-g$. $s = uT + \\frac{1}{2}aT^2 \\implies -H = u(nu/g) - \\frac{1}{2}g(nu/g)^2$.\n**Step 4:** Simplify the expression: $-H = \\frac{nu^2}{g} - \\frac{n^2u^2}{2g}$. Multiply the entire equation by $-2g$: $2gH = -2nu^2 + n^2u^2 \\implies 2gH = nu^2(n - 2)$.\n\n*(Asked in JEE Main 2014)*"
    },
    {
      id: "kinematics-pyq-q106",
      question: "A parachutist after bailing out falls 50 m without friction. When parachute opens, it decelerates at $2\\text{ m/s}^2$. He reaches the ground with a speed of $3\\text{ m/s}$. At what height, did he bail out ? [NCERT : PL-18, 19 | 2005]",
      options: [
        "182m",
        "91m",
        "111m",
        "293m"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Analyze the first phase of the motion (free fall for 50 m, initial velocity $u = 0$, $g = 9.8\\text{ m/s}^2$): $v_1^2 = u^2 + 2gs_1 \\implies v_1^2 = 0 + 2(9.8)(50) = 980$.\n**Step 2:** Analyze the second phase of the motion (deceleration with $a = -2\\text{ m/s}^2$ until final velocity $v = 3\\text{ m/s}$): $v^2 = v_1^2 + 2as_2 \\implies (3)^2 = 980 + 2(-2)s_2 \\implies 9 = 980 - 4s_2 \\implies 4s_2 = 980 - 9 = 971 \\implies s_2 = 971 / 4 = 242.75\\text{ m}$.\n**Step 3:** Calculate the total height from which he bailed out ($H$): $H = s_1 + s_2 = 50\\text{ m} + 242.75\\text{ m} = 292.75\\text{ m} \\approx 293\\text{ m}$.\n*(Note: The options provided in historical papers might vary, sometimes $g=10$ is used giving 247.75m or $243\\text{m}$ is treated as the answer for $s_2$. Assuming standard context, $293\\text{m}$ is the closest total height.)*\n\n*(Asked in JEE Main 2005)*"
    },
    {
      id: "kinematics-pyq-q107",
      question: "A ball is released from the top of a tower of height h meters. It takes T seconds to reach the ground. What is the position of the ball at T/3 second [NCERT : PL-18, 19 | 2004]",
      options: [
        "$8h/9$ from the ground",
        "$7h/9$ from the ground",
        "$h/9$ from the ground",
        "$17h/18$ from the ground"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Relate the total height $h$ to the total time $T$ using the second equation of motion (initial velocity $u = 0$): $h = \\frac{1}{2}gT^2$.\n**Step 2:** Calculate the distance fallen from the top in time $t = T/3$: $y = \\frac{1}{2}g(T/3)^2 = \\frac{1}{2}g(T^2/9) = \\frac{1}{9}[\\frac{1}{2}gT^2] = h/9$ (from the top).\n**Step 3:** Determine the position of the ball relative to the ground: Height from ground = Total height - Distance fallen from top = $h - h/9 = 8h/9$.\n\n*(Asked in JEE Main 2004)*"
    }
  ]
};

export default pyq;
