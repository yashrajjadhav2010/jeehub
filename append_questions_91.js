import fs from 'fs';
const file = 'src/questions/physics/kinematics/pyq.ts';
let content = fs.readFileSync(file, 'utf8');

const newQuestions = String.raw`    },
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
`;

content = content.replace('    }\n  ]\n};\n', newQuestions);
fs.writeFileSync(file, content);
