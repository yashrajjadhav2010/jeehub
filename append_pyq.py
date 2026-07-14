import json

with open("src/questions/physics/newtons-laws-of-motion/pyq.ts", "r") as f:
    pyq = f.read()

new_qs = r"""    {
      id: "nlm-pyq-q26",
      question: "A man of $60\text{ kg}$ is running on the road and suddenly jumps into a stationary trolly car of mass $120\text{ kg}$. Then the trolly car starts moving with velocity $2\text{ ms}^{-1}$. The velocity of the running man was ____________ $\text{ms}^{-1}$. When he jumps into the car. (JEE Main June 28, 2022 (I))",
      options: [
        "2",
        "4",
        "6",
        "8"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**1. Apply the law of conservation of linear momentum in the horizontal direction:**\nInitial Momentum = Final Momentum\n$(m_{\text{man}} \times u_{\text{man}}) + (m_{\text{trolley}} \times u_{\text{trolley}}) = (m_{\text{man}} + m_{\text{trolley}}) \times v_{\text{final}}$\n\n**2. Substitute the given parameters:**\n$m_{\text{man}} = 60\text{ kg}$, $m_{\text{trolley}} = 120\text{ kg}$, $u_{\text{trolley}} = 0$, $v_{\text{final}} = 2\text{ ms}^{-1}$\n$(60 \times u_{\text{man}}) + 0 = (60 + 120) \times 2$\n$60 u_{\text{man}} = 180 \times 2 = 360$\n\n**3. Solve for initial velocity:**\n$u_{\text{man}} = 360 / 60 = 6\text{ ms}^{-1}$"
    },
    {
      id: "nlm-pyq-q27",
      question: "A block of mass $2\text{ kg}$ moving on a horizontal surface with speed of $4\text{ ms}^{-1}$ enters a rough surface ranging from $x = 0.5\text{ m}$ to $x = 1.5\text{ m}$. The retarding force in this range of rough surface is related to distance by $F = -kx$ where $k = 12\text{ Nm}^{-1}$. The speed of the block as it just crosses the rough surface will be: (JEE Main June 28, 2022 (II))",
      options: [
        "Zero",
        "$1.5\text{ ms}^{-1}$",
        "$2.0\text{ ms}^{-1}$",
        "$2.5\text{ ms}^{-1}$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**1. Apply Work-Energy Theorem:**\n$W = \Delta K = K_{\text{final}} - K_{\text{initial}} = \frac{1}{2} m v_f^2 - \frac{1}{2} m v_i^2$\n\n**2. Calculate work done by variable force:**\n$W = \int_{0.5}^{1.5} (-kx) dx = -k \left[ \frac{x^2}{2} \right]_{0.5}^{1.5}$\n$W = -\frac{12}{2} [(1.5)^2 - (0.5)^2] = -6 [2.25 - 0.25] = -12\text{ J}$\n\n**3. Equate to change in kinetic energy:**\n$-12 = \frac{1}{2}(2)(v_f^2) - \frac{1}{2}(2)(4^2) = v_f^2 - 16$\n$v_f^2 = 16 - 12 = 4 \implies v_f = 2.0\text{ ms}^{-1}$"
    },
    {
      id: "nlm-pyq-q28",
      question: "A batsman hits back a ball of mass $0.4\text{ kg}$ straight in the direction of the bowler without changing its initial speed of $15\text{ ms}^{-1}$. The impulse imparted to the ball is ____________ $\text{Ns}$. (JEE Main June 26, 2022 (II))",
      options: [
        "6",
        "12",
        "18",
        "24"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Establish direction:**\nLet initial velocity towards batsman be $+i$.\n$u = 15\text{ ms}^{-1}$\nBall is hit straight back, so final velocity is reversed:\n$v = -15\text{ ms}^{-1}$\n\n**2. Calculate impulse (change in momentum):**\n$\text{Impulse} = m(v - u) = 0.4(-15 - 15) = 0.4(-30) = -12\text{ Ns}$\nMagnitude of impulse = $12\text{ Ns}$"
    },
    {
      id: "nlm-pyq-q29",
      question: "An object of mass $5\text{ kg}$ is thrown vertically upwards from the ground. The air resistance produces a constant retarding force of $10\text{ N}$ throughout the motion. The ratio of time of ascent to the time of descent will be equal to : [Use $g = 10\text{ ms}^{-2}$] (JEE Main June 24, 2022 (II))",
      options: [
        "$1 : 1$",
        "$\sqrt{2} : \sqrt{3}$",
        "$\sqrt{3} : \sqrt{2}$",
        "$2 : 3$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Identify forces:**\nWeight $W = mg = 50\text{ N}$ (downwards)\nAir resistance $F_{\text{air}} = 10\text{ N}$ (opposes motion)\n\n**2. Ascent (moving up):**\nBoth gravity and air resistance act downwards.\nNet force $F_{\text{net}} = W + F_{\text{air}} = 60\text{ N}$\nAcceleration $a_1 = 60 / 5 = 12\text{ ms}^{-2}$\nTime $t_1 = \sqrt{2h/a_1}$\n\n**3. Descent (moving down):**\nGravity acts downwards, air resistance acts upwards.\nNet force $F_{\text{net}} = W - F_{\text{air}} = 40\text{ N}$\nAcceleration $a_2 = 40 / 5 = 8\text{ ms}^{-2}$\nTime $t_2 = \sqrt{2h/a_2}$\n\n**4. Ratio:**\n$t_1 / t_2 = \sqrt{a_2 / a_1} = \sqrt{8 / 12} = \sqrt{2/3} = \sqrt{2} : \sqrt{3}$"
    },
    {
      id: "nlm-pyq-q30",
      question: "A force $\vec{F} = (40\hat{i} + 10\hat{j})\text{ N}$ acts on a body of mass $5\text{ kg}$. If the body starts from rest, its position vector $\vec{r}$ at time $t = 10\text{ s}$, will be: (JEE Main July 25, 2021 (II))",
      options: [
        "$(100\hat{i} + 400\hat{j})\text{ m}$",
        "$(100\hat{i} + 100\hat{j})\text{ m}$",
        "$(400\hat{i} + 100\hat{j})\text{ m}$",
        "$(400\hat{i} + 400\hat{j})\text{ m}$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n**1. Find acceleration vector:**\n$\vec{a} = \vec{F} / m = (40\hat{i} + 10\hat{j}) / 5 = 8\hat{i} + 2\hat{j}\text{ ms}^{-2}$\n\n**2. Use displacement equation (starts from rest $\vec{u}=0$):**\n$\vec{r} = \frac{1}{2} \vec{a} t^2$\n\n**3. Substitute $t = 10\text{ s}$:**\n$\vec{r} = \frac{1}{2} (8\hat{i} + 2\hat{j}) (10)^2 = 100 (4\hat{i} + \hat{j}) = 400\hat{i} + 100\hat{j}\text{ m}$"
    },
    {
      id: "nlm-pyq-q31",
      question: "A boy pushes a box of mass $2\text{ kg}$ with a force $\vec{F} = (20\hat{i} + 10\hat{j})\text{ N}$ on a frictionless surface. If the box was initially at rest, then _________ $\text{m}$ is displacement along the x-axis after $10\text{ s}$. (JEE Main Feb. 26, 2021 (I))",
      options: [
        "100",
        "200",
        "250",
        "500"
      ],
      answer: 3,
      explanation: "**Detailed Solution:**\n\n**1. Extract horizontal component of force:**\n$F_x = 20\text{ N}$\n\n**2. Calculate acceleration along x-axis:**\n$a_x = F_x / m = 20 / 2 = 10\text{ ms}^{-2}$\n\n**3. Calculate displacement along x-axis:**\n$x = u_x t + \frac{1}{2} a_x t^2 = 0 + \frac{1}{2}(10)(10^2) = 5 \times 100 = 500\text{ m}$"
    },
    {
      id: "nlm-pyq-q32",
      question: "A particle moving in the xy plane experiences a velocity dependent force $\vec{F} = k(v_y\hat{i} + v_x\hat{j})$, where $v_x$ and $v_y$ are x and y components of its velocity $\vec{v}$. If $\vec{a}$ is the acceleration of the particle, then which of the following statements is true for the particle? (JEE Main Sep. 06, 2020 (II))",
      options: [
        "quantity $\vec{v} \times \vec{a}$ is constant in time",
        "$\vec{F}$ arises due to a magnetic field",
        "kinetic energy of particle is constant in time",
        "quantity $\vec{v} \cdot \vec{a}$ is constant in time"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n**1. Compute dot product $\vec{F} \cdot \vec{v}$:**\n$\vec{F} \cdot \vec{v} = k(v_y v_x + v_x v_y) = 2kv_x v_y \neq 0$, so KE is not constant.\n\n**2. Evaluate $\vec{v} \times \vec{a}$:**\n$m \vec{a} = k(v_y\hat{i} + v_x\hat{j}) \implies m \frac{dv_x}{dt} = k v_y$ and $m \frac{dv_y}{dt} = k v_x$\nNow, $\vec{v} \times \vec{a} = (v_x\hat{i} + v_y\hat{j}) \times \frac{k}{m}(v_y\hat{i} + v_x\hat{j}) = \frac{k}{m} (v_x^2 - v_y^2)\hat{k}$\n\n**3. Differentiate $(v_x^2 - v_y^2)$ with respect to time:**\n$\frac{d}{dt}(v_x^2 - v_y^2) = 2v_x \frac{dv_x}{dt} - 2v_y \frac{dv_y}{dt} = 2v_x (\frac{k v_y}{m}) - 2v_y (\frac{k v_x}{m}) = 0$\nThus $(v_x^2 - v_y^2)$ is constant, making $\vec{v} \times \vec{a}$ constant in time."
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
      explanation: "**Detailed Solution:**\n\n**1. Thrust force for a variable mass system:**\n$F_{\text{thrust}} = -u_{\text{rel}} \frac{dM}{dt}$\nSince dust is stationary, relative velocity $u_{\text{rel}} = v$.\n$F_{\text{thrust}} = -v (bv^2) = -bv^3$\n\n**2. Acceleration:**\n$F = M a \implies a = \frac{F_{\text{thrust}}}{M(t)} = -\frac{b v^3(t)}{M(t)}$"
    },
    {
      id: "nlm-pyq-q34",
      question: "A small ball of mass $m$ is thrown upward with velocity $u$ from the ground. The ball experiences a resistive force $mkv^2$, where $v$ is its speed. The maximum height attained by the ball is : (JEE Main Sep. 04, 2020 (II))",
      options: [
        "$(1 / 2k) \tan^{-1}(k u^2 / g)$",
        "$(1 / k) \ln(1 + k u^2 / 2g)$",
        "$(1 / k) \tan^{-1}(k u^2 / 2g)$",
        "$(1 / 2k) \ln(1 + k u^2 / g)$"
      ],
      answer: 3,
      explanation: "**Detailed Solution:**\n\n**1. Net force during ascent:**\n$F_{\text{net}} = -(mg + mkv^2)$\n$m a = -m(g + kv^2) \implies a = -(g + kv^2)$\n\n**2. Express acceleration as $v \frac{dv}{dy}$:**\n$v \frac{dv}{dy} = -(g + kv^2) \implies \frac{v dv}{g + kv^2} = -dy$\n\n**3. Integrate from $y = 0$ ($v = u$) to $y = H$ ($v = 0$):**\n$\int_{u}^{0} \frac{v dv}{g + kv^2} = \int_{0}^{H} -dy$\nLet $z = g + kv^2 \implies dz = 2kv dv$\n$\frac{1}{2k} [\ln(g + kv^2)]_u^0 = -H$\n$\frac{1}{2k} (\ln g - \ln(g + ku^2)) = -H \implies H = \frac{1}{2k} \ln\left(\frac{g + ku^2}{g}\right) = \frac{1}{2k} \ln\left(1 + \frac{ku^2}{g}\right)$"
    },
    {
      id: "nlm-pyq-q35",
      question: "A particle of mass $m$ is moving in a straight line with momentum $p$. Starting at time $t = 0$, a force $F = kt$ acts in the same direction on the moving particle during time interval $T$ so that its momentum changes from $p$ to $3p$. Here $k$ is a constant. The value of $T$ is : (JEE Main 11 Jan. 2019 II)",
      options: [
        "$2 \sqrt{k/p}$",
        "$2 \sqrt{p/k}$",
        "$\sqrt{2k/p}$",
        "$\sqrt{2p/k}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n**1. Change in momentum is integral of force:**\n$\Delta p = \int_0^T F dt = \int_0^T kt dt$\n\n**2. Substitute given limits:**\n$3p - p = k \left[\frac{t^2}{2}\right]_0^T$\n$2p = \frac{kT^2}{2}$\n\n**3. Solve for $T$:**\n$T^2 = \frac{4p}{k} \implies T = 2 \sqrt{\frac{p}{k}}$"
    },
    {
      id: "nlm-pyq-q36",
      question: "A particle of mass $m$ is acted upon by a force $F$ given by the empirical law $F = (R / t^2) v(t)$. If this law is to be tested experimentally by observing the motion starting from rest, the best way is to plot : (JEE Main Online April 10, 2016)",
      options: [
        "$\log v(t)$ against $1/t$",
        "$v(t)$ against $t^2$",
        "$\log v(t)$ against $1/t^2$",
        "$\log v(t)$ against $t$"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n**1. Rewrite force in terms of acceleration:**\n$m \frac{dv}{dt} = \frac{R}{t^2} v$\n\n**2. Separate variables:**\n$\frac{dv}{v} = \frac{R}{m} \frac{dt}{t^2}$\n\n**3. Integrate:**\n$\int \frac{dv}{v} = \frac{R}{m} \int t^{-2} dt$\n$\ln v = -\frac{R}{m t} + C$\n\n**4. Convert to base-10 logarithm:**\n$2.303 \log v = -\frac{R}{m} \left(\frac{1}{t}\right) + C$\n$\log v = -\frac{R}{2.303 m} \left(\frac{1}{t}\right) + C'$\nThis matches the linear equation $y = mx + c$, so plotting $\log v(t)$ against $1/t$ yields a straight line."
    },
    {
      id: "nlm-pyq-q37",
      question: "A body of mass $5\text{ kg}$ under the action of constant force $\vec{F} = F_x\hat{i} + F_y\hat{j}$ has velocity at $t = 0\text{ s}$ as $\vec{v} = (6\hat{i} - 2\hat{j})\text{ m/s}$ and at $t = 10\text{ s}$ as $\vec{v} = +6\hat{j}\text{ m/s}$. The force $\vec{F}$ is: (JEE Main Online April 11, 2014)",
      options: [
        "$(-3\hat{i} + 4\hat{j})\text{ N}$",
        "$(-3/5\hat{i} + 4/5\hat{j})\text{ N}$",
        "$(3\hat{i} - 4\hat{j})\text{ N}$",
        "$(3/5\hat{i} - 4/5\hat{j})\text{ N}$"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n**1. Identify initial and final velocities:**\n$\vec{u} = 6\hat{i} - 2\hat{j}$\n$\vec{v} = 0\hat{i} + 6\hat{j}$\n$t = 10\text{ s}$\n\n**2. Calculate acceleration:**\n$\vec{a} = \frac{\vec{v} - \vec{u}}{t} = \frac{(0 - 6)\hat{i} + (6 - (-2))\hat{j}}{10} = \frac{-6\hat{i} + 8\hat{j}}{10} = -0.6\hat{i} + 0.8\hat{j}\text{ ms}^{-2}$\n\n**3. Calculate force:**\n$\vec{F} = m\vec{a} = 5(-0.6\hat{i} + 0.8\hat{j}) = -3\hat{i} + 4\hat{j}\text{ N}$"
    }
"""

pyq = pyq.replace("  ]\n};\n\nexport default pyq;", ",\n" + new_qs + "  ]\n};\n\nexport default pyq;")

# In order to make it completely correct and not have to escape all the `\` again,
# I used a raw string in python `r"""..."""`. This means \n is literally \ and n. 
# And \t is literally \ and t. So it translates directly into correct JS string escapes.
# Wait, if I write \n directly to the file, it will be `\n` in JS, which means newline!
# But in JSON/TS, `\n` inside a string literal means a newline character, so it's correct!
# Let's write to file.
with open("src/questions/physics/newtons-laws-of-motion/pyq.ts", "w") as f:
    f.write(pyq)
