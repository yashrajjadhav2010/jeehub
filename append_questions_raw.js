import fs from 'fs';
const file = 'src/questions/physics/kinematics/pyq.ts';
let content = fs.readFileSync(file, 'utf8');

const newQuestions = String.raw`    },
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
    }
  ]
};
`;

content = content.replace('    }\n  ]\n};\n', newQuestions);
fs.writeFileSync(file, content);
