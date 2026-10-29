import { QuizSet } from '../../../types';

const pyq: QuizSet = {
  id: "pyq",
  title: "Previous Year Questions",
  subjectId: "physics",
  chapterId: "work-power-energy",
  difficulty: "pyq",
  questions: [
    {
      id: "wpe-pyq-q1",
      question: "Two bodies are having kinetic energies in the ratio $16 : 9$. If they have same linear momentum, the ratio of their masses respectively is:",
      year: "JEE Main (13th April Shift-I 2023)",
      options: [
        "$3 : 4$",
        "$4 : 3$",
        "$9 : 16$",
        "$16 : 9$"
      ],
      answer: 2,
      explanation: `#### **Step 1: Use the relationship between kinetic energy and momentum**
The relationship between kinetic energy ($K$) and linear momentum ($p$) of a body of mass $m$ is given by:
$$K = \\frac{p^2}{2m}$$

---

#### **Step 2: Relate kinetic energy and mass under constant momentum**
Since it is given that both bodies have the same linear momentum ($p_1 = p_2 = p$), kinetic energy becomes inversely proportional to the mass:
$$K \\propto \\frac{1}{m}$$

Therefore, the ratio of their kinetic energies is:
$$\\frac{K_1}{K_2} = \\frac{m_2}{m_1}$$

---

#### **Step 3: Solve for the ratio of their masses**
Given that $\\frac{K_1}{K_2} = \\frac{16}{9}$:
$$\\frac{16}{9} = \\frac{m_2}{m_1}$$

Taking the reciprocal to find the ratio respectively ($\\frac{m_1}{m_2}$):
$$\\frac{m_1}{m_2} = \\frac{9}{16}$$

### **Correct Answer:**
**(c) $9 : 16$**`
    },
    {
      id: "wpe-pyq-q2",
      question: `Given below are two statements:  
**Statement I:** A truck and a car moving with the same kinetic energy are brought to rest by applying brakes which provide equal retarding forces. Both come to rest in equal distance.  
**Statement II:** A car moving towards east takes a turn and moves towards north, the speed remains unchanged. The acceleration of the car is zero.  

In the light of above statements, choose the most appropriate answer from the options given below:`,
      year: "JEE Main (12th April Shift-I 2023)",
      options: [
        "Statement I is incorrect but Statement II is correct.",
        "Statement I is correct but Statement II is incorrect.",
        "Both Statement I and Statement II are correct.",
        "Both Statement I and Statement II are incorrect."
      ],
      answer: 1,
      explanation: `#### **Analysis of Statement I:**
According to the **Work-Energy Theorem**, the work done by the retarding force equals the change in kinetic energy of the vehicle:
$$W = F \\cdot d = \\Delta K$$
$$F \\cdot d = K_{\\text{initial}} - K_{\\text{final}}$$

Since both vehicles are brought to rest, $K_{\\text{final}} = 0$, which gives:
$$F \\cdot d = K_{\\text{initial}}$$

We are given that:
1. They have the same initial kinetic energy ($K_{\\text{initial}}$).
2. The brakes provide equal retarding forces ($F$).

Since both $K_{\\text{initial}}$ and $F$ are equal for both vehicles, the stopping distance $d$ must also be equal ($d = \\frac{K_{\\text{initial}}}{F}$). Therefore, **Statement I is correct**.

---

#### **Analysis of Statement II:**
Acceleration ($\\vec{a}$) is defined as the rate of change of the **velocity vector**:
$$\\vec{a} = \\frac{d\\vec{v}}{dt}$$

Velocity has both magnitude (speed) and direction. Even though the speed remains unchanged when the car turns from east to north, its **direction changes**. A change in direction means the velocity vector changes ($\\Delta \\vec{v} \\neq 0$). Thus, a non-zero net acceleration acts on the car. Therefore, **Statement II is incorrect**.

### **Conclusion:**
Statement I is correct but Statement II is incorrect.

### **Correct Answer:**
**(b) Statement I is correct but Statement II is incorrect.**`
    },
    {
      id: "wpe-pyq-q3",
      question: "For a body projected at an angle with the horizontal from the ground. Choose the correct statement.",
      year: "JEE Main (1st Feb Shift-II 2023)",
      options: [
        "The horizontal component of velocity is zero at the highest point.",
        "The vertical component of momentum is maximum at the highest point.",
        "Gravitational potential energy is maximum at the highest point.",
        "The Kinetic Energy (KE) is zero at the highest point of projectile motion."
      ],
      answer: 2,
      explanation: `Let a body be projected with an initial velocity $u$ at an angle $\\theta$ with the horizontal. Let's analyze what happens at the **highest point** of its trajectory:

*   **Option (a) is incorrect:** Air resistance is neglected, so there is no horizontal acceleration. The horizontal component of velocity remains constant throughout the motion and is equal to $u\\cos\\theta$ everywhere, including the highest point.
*   **Option (b) is incorrect:** At the highest point, the vertical component of velocity becomes exactly zero ($v_y = 0$). Consequently, the vertical component of momentum ($p_y = m v_y$) is zero, which is its minimum value, not maximum.
*   **Option (c) is correct:** Gravitational potential energy is given by $U = mgh$. Since the height $h$ reaches its absolute maximum value ($h = H_{\\text{max}}$) at the top of the flight, the gravitational potential energy is **maximum at the highest point**.
*   **Option (d) is incorrect:** At the highest point, while the vertical velocity is zero, the horizontal velocity component ($u\\cos\\theta$) is still present. Therefore, the kinetic energy is non-zero and equals $\\frac{1}{2}m(u\\cos\\theta)^2$.

### **Correct Answer:**
**(c) Gravitational potential energy is maximum at the highest point.**`
    },
    {
      id: "wpe-pyq-q4",
      question: "A stone is projected at angle $30^\\circ$ to the horizontal. The ratio of kinetic energy of the stone at point of projection to its kinetic energy at the highest point of flight will be:",
      year: "JEE Main (29th Jan Shift-I 2023)",
      options: [
        "$1 : 2$",
        "$4 : 1$",
        "$1 : 4$",
        "$4 : 3$"
      ],
      answer: 3,
      explanation: `#### **Step 1: Express kinetic energy at the point of projection**
Let the mass of the stone be $m$ and its initial velocity at the point of projection be $u$. 
The initial kinetic energy ($K_1$) is:
$$K_1 = \\frac{1}{2}mu^2$$

---

#### **Step 2: Express kinetic energy at the highest point**
At the highest point of projectile motion, the vertical component of velocity becomes zero ($v_y = 0$). Only the horizontal component remains, which is constant throughout the flight:
$$v_x = u \\cos\\theta$$

Given the projection angle $\\theta = 30^\\circ$:
$$v_x = u \\cos 30^\\circ = u \\left(\\frac{\\sqrt{3}}{2}\\right)$$

The kinetic energy at the highest point ($K_2$) is:
$$K_2 = \\frac{1}{2}m(v_x)^2 = \\frac{1}{2}m\\left(u\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{1}{2}mu^2 \\left(\\frac{3}{4}\\right)$$

---

#### **Step 3: Find the ratio**
Now, calculate the ratio of the initial kinetic energy to the kinetic energy at the highest point ($\\frac{K_1}{K_2}$):
$$\\frac{K_1}{K_2} = \\frac{\\frac{1}{2}mu^2}{\\frac{1}{2}mu^2 \\left(\\frac{3}{4}\\right)} = \\frac{1}{\\frac{3}{4}} = \\frac{4}{3}$$

Thus, the ratio is $4 : 3$.

### **Correct Answer:**
**(d) $4 : 3$**`
    },
    {
      id: "wpe-pyq-q5",
      question: "If momentum of a body is increased by $20\\%$, then its kinetic energy increases by:",
      year: "JEE Main (29th July Shift-II 2022)",
      options: [
        "$36\\%$",
        "$40\\%$",
        "$44\\%$",
        "$48\\%$"
      ],
      answer: 2,
      explanation: `#### **Step 1: Understand the formula relating kinetic energy and momentum**
The kinetic energy ($K$) of a body of mass $m$ with linear momentum $p$ is given by:
$$K = \\frac{p^2}{2m}$$

---

#### **Step 2: Calculate the new momentum**
Let the initial momentum be $p_1$. If the momentum is increased by $20\\%$, the new momentum ($p_2$) is:
$$p_2 = p_1 + 20\\% \\text{ of } p_1 = p_1 + 0.2p_1 = 1.2p_1$$

---

#### **Step 3: Relate the new kinetic energy to the initial kinetic energy**
Since the mass $m$ remains unchanged, the new kinetic energy ($K_2$) can be calculated as:
$$K_2 = \\frac{p_2^2}{2m} = \\frac{(1.2p_1)^2}{2m} = 1.44 \\left(\\frac{p_1^2}{2m}\\right) = 1.44K_1$$

---

#### **Step 4: Find the percentage increase**
The percentage increase in kinetic energy is given by:
$$\\% \\text{ increase} = \\left(\\frac{K_2 - K_1}{K_1}\\right) \\times 100\\%$$
$$\\% \\text{ increase} = \\left(\\frac{1.44K_1 - K_1}{K_1}\\right) \\times 100\\% = 0.44 \\times 100\\% = 44\\%$$

### **Correct Answer:**
**(c) $44\\%$**`
    },
    {
      id: "wpe-pyq-q6",
      question: "A ball is projected with kinetic energy $E$, at an angle of $60^\\circ$ to the horizontal. The kinetic energy of this ball at the highest point of its flight will become:",
      year: "JEE Main (29th July Shift-I 2022)",
      options: [
        "zero",
        "$E / 2$",
        "$E / 4$",
        "$E$"
      ],
      answer: 2,
      explanation: `#### **Step 1: Define initial kinetic energy**
Let the initial velocity of projection be $u$ and the mass of the ball be $m$. The initial kinetic energy $E$ at the point of projection is:
$$E = \\frac{1}{2}mu^2$$

---

#### **Step 2: Determine the velocity at the highest point**
At the peak of its trajectory, the vertical velocity component vanishes completely, leaving only the horizontal component of velocity:
$$v = u \\cos\\theta$$

Given the angle of projection $\\theta = 60^\\circ$:
$$v = u \\cos 60^\\circ = u \\left(\\frac{1}{2}\\right) = \\frac{u}{2}$$

---

#### **Step 3: Calculate the new kinetic energy**
The kinetic energy at this highest point ($E'$) is:
$$E' = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\left(\\frac{u}{2}\\right)^2 = \\frac{1}{4} \\left(\\frac{1}{2}mu^2\\right)$$

Substituting the initial value $E = \\frac{1}{2}mu^2$:
$$E' = \\frac{E}{4}$$

### **Correct Answer:**
**(c) $E / 4$**`
    },
    {
      id: "wpe-pyq-q7",
      question: "Potential energy as a function of $r$ is given by $U = \\frac{A}{r^{10}} - \\frac{B}{r^5}$, where $r$ is the interatomic distance, $A$ and $B$ are positive constants. The equilibrium distance between the two atoms will be:",
      year: "JEE Main (24th June Shift-II 2022)",
      options: [
        "$\\left(\\frac{A}{B}\\right)^{1/5}$",
        "$\\left(\\frac{B}{A}\\right)^{1/5}$",
        "$\\left(\\frac{2A}{B}\\right)^{1/5}$",
        "$\\left(\\frac{B}{2A}\\right)^{1/5}$"
      ],
      answer: 2,
      explanation: `#### **Step 1: Relate conservative force to potential energy**
The relationship between a conservative internal force ($F$) and the potential energy ($U$) of a system is given by:
$$F = -\\frac{dU}{dr}$$

At **equilibrium**, the net conservative force between the atoms must be exactly zero ($F = 0$):
$$-\\frac{dU}{dr} = 0 \\implies \\frac{dU}{dr} = 0$$

---

#### **Step 2: Differentiate $U$ with respect to $r$**
Given the potential energy function:
$$U = A r^{-10} - B r^{-5}$$

Differentiating with respect to $r$:
$$\\frac{dU}{dr} = A(-10r^{-11}) - B(-5r^{-6})$$
$$\\frac{dU}{dr} = -\\frac{10A}{r^{11}} + \\frac{5B}{r^6}$$

---

#### **Step 3: Solve for the equilibrium distance $r$**
Equating the derivative to zero:
$$-\\frac{10A}{r^{11}} + \\frac{5B}{r^6} = 0$$
$$\\frac{5B}{r^6} = \\frac{10A}{r^{11}}$$

Cross-multiplying and simplifying:
$$\\frac{r^{11}}{r^6} = \\frac{10A}{5B}$$
$$r^5 = \\frac{2A}{B}$$
$$r = \\left(\\frac{2A}{B}\\right)^{1/5}$$

### **Correct Answer:**
**(c) $\\left(\\frac{2A}{B}\\right)^{1/5}$**`
    },
    {
      id: "wpe-pyq-q8",
      question: "A block moving horizontally on a smooth surface with a speed of $40\\text{ m/s}$ splits into two parts with masses in the ratio of $1:2$. If the smaller part moves at $60\\text{ m/s}$ in the same direction, then the fractional change in kinetic energy is:",
      year: "JEE Main (31st Aug Shift-II 2021)",
      options: [
        "$\\frac{1}{3}$",
        "$\\frac{2}{3}$",
        "$\\frac{1}{8}$",
        "$\\frac{1}{4}$"
      ],
      answer: 2,
      explanation: `#### **Step 1: Set up the values and initial kinetic energy**
Let the total mass of the block be $3m$. The masses of the two split parts are $m$ (smaller) and $2m$ (larger).
*   Initial mass, $M = 3m$
*   Initial speed, $v = 40\\text{ m/s}$

The initial kinetic energy ($K_i$) is:
$$K_i = \\frac{1}{2} M v^2 = \\frac{1}{2} (3m) (40)^2 = \\frac{1}{2} \\cdot 3m \\cdot 1600 = 2400m$$

---

#### **Step 2: Find the velocity of the larger part using momentum conservation**
Since no external horizontal forces act on the smooth surface, the linear momentum is conserved:
$$P_i = P_f$$
$$M v = m_1 v_1 + m_2 v_2$$

Substituting the given values ($v_1 = 60\\text{ m/s}$ for the smaller mass $m$, and let $v_2$ be the velocity of the mass $2m$):
$$(3m)(40) = m(60) + (2m)v_2$$
$$120m = 60m + 2mv_2$$
$$60m = 2mv_2 \\implies v_2 = 30\\text{ m/s}$$

---

#### **Step 3: Calculate the final kinetic energy**
$$K_f = \\frac{1}{2} m_1 v_1^2 + \\frac{1}{2} m_2 v_2^2$$
$$K_f = \\frac{1}{2} m (60)^2 + \\frac{1}{2} (2m) (30)^2$$
$$K_f = \\frac{1}{2} m (3600) + m (900) = 1800m + 900m = 2700m$$

---

#### **Step 4: Find the fractional change in kinetic energy**
The fractional change is given by:
$$\\text{Fractional Change} = \\frac{K_f - K_i}{K_i} = \\frac{2700m - 2400m}{2400m} = \\frac{300m}{2400m} = \\frac{1}{8}$$

### **Correct Answer:**
**(c) $\\frac{1}{8}$**`
    },
    {
      id: "wpe-pyq-q9",
      question: "A porter lifts a heavy suitcase of mass $80\\text{ kg}$ and at the destination lowers it down by a distance of $80\\text{ cm}$ with a constant velocity. Calculate the work done by the porter in lowering the suitcase. [Take, $g = 9.8\\text{ ms}^{-2}$]",
      year: "JEE Main (22nd July Shift-II 2021)",
      options: [
        "$-62720.0\\text{ J}$",
        "$-627.2\\text{ J}$",
        "$+627.2\\text{ J}$",
        "$784.0\\text{ J}$"
      ],
      answer: 1,
      explanation: `#### **Step 1: Analyze the forces acting on the suitcase**
The suitcase is being lowered with a **constant velocity**, meaning its acceleration is zero ($a = 0$). 
By Newton's second law, the net force acting on it is zero:
$$F_{\\text{net}} = 0 \\implies F_{\\text{porter}} - mg = 0 \\implies F_{\\text{porter}} = mg$$

Thus, the force applied by the porter is directed **upward** to balance gravity:
$$F_{\\text{porter}} = 80 \\times 9.8 = 784\\text{ N (Upward)}$$

---

#### **Step 2: Apply the work formula**
The displacement ($s$) is downwards:
$$s = 80\\text{ cm} = 0.8\\text{ m (Downward)}$$

Since the porter's upward force and the downward displacement are in opposite directions, the angle between them is $\\theta = 180^\\circ$.
$$W = F_{\\text{porter}} \\cdot s \\cdot \\cos(180^\\circ)$$
$$W = 784 \\times 0.8 \\times (-1) = -627.2\\text{ J}$$

### **Correct Answer:**
**(b) $-627.2\\text{ J}$**`
    },
    {
      id: "wpe-pyq-q10",
      question: "If the kinetic energy of a moving body becomes four times of its initial kinetic energy, then the percentage change in its momentum will be:",
      year: "JEE Main (20th July Shift-II 2021)",
      options: [
        "$100\\%$",
        "$200\\%$",
        "$300\\%$",
        "$400\\%$"
      ],
      answer: 0,
      explanation: `#### **Step 1: Establish the relationship between momentum and kinetic energy**
The relationship between linear momentum ($p$) and kinetic energy ($K$) is:
$$p = \\sqrt{2mK} \\implies p \\propto \\sqrt{K}$$

---

#### **Step 2: Find the ratio of final to initial momentum**
We are given that the final kinetic energy is four times the initial value ($K_f = 4K_i$):
$$\\frac{p_f}{p_i} = \\sqrt{\\frac{K_f}{K_i}} = \\sqrt{\\frac{4K_i}{K_i}} = \\sqrt{4} = 2$$
$$p_f = 2p_i$$

---

#### **Step 3: Calculate the percentage change**
$$\\% \\text{ change in momentum} = \\left(\\frac{p_f - p_i}{p_i}\\right) \\times 100\\%$$
$$\\% \\text{ change in momentum} = \\left(\\frac{2p_i - p_i}{p_i}\\right) \\times 100\\% = 1 \\times 100\\% = 100\\%$$

### **Correct Answer:**
**(a) $100\\%$**`
    },
    {
      id: "wpe-pyq-q11",
      question: "A bullet of mass $200\\text{ g}$ having initial kinetic energy $90\\text{ J}$ is shot inside a long swimming pool as shown in the figure. If its kinetic energy reduces to $40\\text{ J}$ within $1\\text{ s}$, the minimum length of the pool the bullet has to travel so that it completely comes to rest is:",
      diagramUrl: "https://i.ibb.co/fG2dJbQz/image.png",
      year: "JEE Main (28th July Shift-II 2022)",
      options: [
        "$45\\text{ m}$",
        "$90\\text{ m}$",
        "$125\\text{ m}$",
        "$25\\text{ m}$"
      ],
      answer: 0,
      explanation: `#### **Step 1: Calculate the initial and intermediate velocities**
Given data:
*   Mass of the bullet, $m = 200\\text{ g} = 0.2\\text{ kg}$
*   Initial kinetic energy, $K_i = 90\\text{ J}$
*   Kinetic energy at $t = 1\\text{ s}$, $K_1 = 40\\text{ J}$

Using the formula for kinetic energy ($K = \\frac{1}{2}mv^2$):
1.  **Initial velocity ($u$):**
    $$K_i = \\frac{1}{2}mu^2 \\implies 90 = \\frac{1}{2}(0.2)u^2$$
    $$90 = 0.1u^2 \\implies u^2 = 900 \\implies u = 30\\text{ m/s}$$

2.  **Velocity at $t = 1\\text{ s}$ ($v_1$):**
    $$K_1 = \\frac{1}{2}mv_1^2 \\implies 40 = \\frac{1}{2}(0.2)v_1^2$$
    $$40 = 0.1v_1^2 \\implies v_1^2 = 400 \\implies v_1 = 20\\text{ m/s}$$

---

#### **Step 2: Find the retardation of the bullet**
Assuming a constant retarding force from the water, the acceleration ($a$) remains uniform. Using the first equation of motion:
$$v_1 = u + at$$
$$20 = 30 + a(1) \\implies a = -10\\text{ m/s}^2$$

So, the uniform retardation is $10\\text{ m/s}^2$.

---

#### **Step 3: Calculate the total distance required to come to rest**
To find the minimum length of the pool required for the bullet to completely stop, set the final velocity to zero ($v_f = 0$):
Using the third equation of motion:
$$v_f^2 = u^2 + 2as$$
$$0 = (30)^2 + 2(-10)s$$
$$0 = 900 - 20s$$
$$20s = 900 \\implies s = 45\\text{ m}$$

### **Correct Answer:**
**(a) $45\\text{ m}$**`
    },
    {
      id: "wpe-pyq-q12",
      question: `This question has Statement I and Statement II. Of the four choices given after the statements, choose the one that best describes the two statements.  
If two springs $S_1$ and $S_2$ of force constants $k_1$ and $k_2$ respectively are stretched by the same force, it is found that more work is done on spring $S_1$ than on spring $S_2$.  

**Statement I:** If stretched by the same amount, work done on $S_1$ will be more than that on $S_2$.  
**Statement II:** $k_1 < k_2$`,
      year: "AIEEE 2012",
      options: [
        "Statement I is false, Statement II is true",
        "Statement I is true, Statement II is false",
        "Statement I is true, Statement II is true; Statement II is the correct explanation of Statement I",
        "Statement I is true, Statement II is true; Statement II is not the correct explanation of Statement I"
      ],
      answer: 0,
      explanation: `#### **Step 1: Analyze the initial condition to check Statement II**
The work done ($W$) on a spring with force constant $k$ when stretched by a force $F$ is given by:
$$W = \\frac{F^2}{2k}$$

We are given that when both springs are stretched by the **same force** ($F$), more work is done on $S_1$ than on $S_2$ ($W_1 > W_2$):
$$\\frac{F^2}{2k_1} > \\frac{F^2}{2k_2} \\implies \\frac{1}{k_1} > \\frac{1}{k_2} \\implies k_1 < k_2$$

Therefore, **Statement II is true**.

---

#### **Step 2: Analyze Statement I**
The work done ($W$) on a spring when stretched by a distance $x$ is given by:
$$W = \\frac{1}{2} k x^2$$

If both springs are stretched by the **same amount** ($x_1 = x_2 = x$):
$$\\frac{W_1}{W_2} = \\frac{\\frac{1}{2}k_1 x^2}{\\frac{1}{2}k_2 x^2} = \\frac{k_1}{k_2}$$

Since we already established that $k_1 < k_2$, it follows that:
$$W_1 < W_2$$

This means the work done on $S_1$ is *less* than that on $S_2$. Therefore, **Statement I is false**.

### **Conclusion:**
Statement I is false, Statement II is true.

### **Correct Answer:**
**(a) Statement I is false, Statement II is true**`
    },
    {
      id: "wpe-pyq-q13",
      question: "An athlete in the Olympic games covers a distance of $100\\text{ m}$ in $10\\text{ s}$. His kinetic energy can be estimated to be in the range:",
      year: "AIEEE 2008",
      options: [
        "$200\\text{ J} - 500\\text{ J}$",
        "$2 \\times 10^5\\text{ J} - 3 \\times 10^5\\text{ J}$",
        "$20000\\text{ J} - 50000\\text{ J}$",
        "$2000\\text{ J} - 5000\\text{ J}$"
      ],
      answer: 3,
      explanation: `#### **Step 1: Estimate the average speed of the athlete**
The athlete covers a distance of $100\\text{ m}$ in $10\\text{ s}$. The average velocity ($v$) is:
$$v = \\frac{\\text{Distance}}{\\text{Time}} = \\frac{100\\text{ m}}{10\\text{ s}} = 10\\text{ m/s}$$

---

#### **Step 2: Estimate the mass and calculate Kinetic Energy**
The mass ($m$) of a typical adult athlete generally ranges from $60\\text{ kg}$ to $100\\text{ kg}$. 

Using the kinetic energy formula ($K = \\frac{1}{2}mv^2$):
*   For a lower mass limit ($m = 60\\text{ kg}$):
    $$K_{\\text{lower}} = \\frac{1}{2} \\times 60 \\times (10)^2 = 3000\\text{ J}$$
*   For an upper mass limit ($m = 100\\text{ kg}$):
    $$K_{\\text{upper}} = \\frac{1}{2} \\times 100 \\times (10)^2 = 5000\\text{ J}$$

Thus, the estimated kinetic energy falls squarely within the range of $2000\\text{ J} - 5000\\text{ J}$.

### **Correct Answer:**
**(d) $2000\\text{ J} - 5000\\text{ J}$**`
    },
    {
      id: "wpe-pyq-q14",
      question: "A block of mass $0.50\\text{ kg}$ is moving with a speed of $2.00\\text{ ms}^{-1}$ on a smooth surface. It strikes another mass of $1.00\\text{ kg}$ and then they move together as a single body. The energy loss during the collision is:",
      year: "AIEEE 2008",
      options: [
        "$0.16\\text{ J}$",
        "$1.00\\text{ J}$",
        "$0.67\\text{ J}$",
        "$0.34\\text{ J}$"
      ],
      answer: 2,
      explanation: `#### **Step 1: Apply conservation of linear momentum**
Since the two bodies stick and move together as a single unit, this is a completely inelastic collision.
*   $m_1 = 0.50\\text{ kg}, \\quad u_1 = 2.00\\text{ m/s}$
*   $m_2 = 1.00\\text{ kg}, \\quad u_2 = 0\\text{ m/s}$

Let $v$ be the common final velocity of the combined mass:
$$m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$$
$$(0.50 \\times 2.00) + (1.00 \\times 0) = (0.50 + 1.00)v$$
$$1.00 = 1.50v \\implies v = \\frac{1}{1.5} = \\frac{2}{3}\\text{ m/s}$$

---

#### **Step 2: Calculate the initial and final kinetic energies**
*   **Initial Kinetic Energy ($K_i$):**
    $$K_i = \\frac{1}{2} m_1 u_1^2 = \\frac{1}{2} \\times 0.50 \\times (2)^2 = 1.00\\text{ J}$$

*   **Final Kinetic Energy ($K_f$):**
    $$K_f = \\frac{1}{2} (m_1 + m_2) v^2 = \\frac{1}{2} \\times 1.50 \\times \\left(\\frac{2}{3}\\right)^2 = \\frac{1}{2} \\times \\frac{3}{2} \\times \\frac{4}{9} = \\frac{1}{3}\\text{ J} \\approx 0.33\\text{ J}$$

---

#### **Step 3: Determine the energy loss**
$$\\text{Energy Loss} = K_i - K_f = 1.00 - 0.33 = 0.67\\text{ J}$$

### **Correct Answer:**
**(c) $0.67\\text{ J}$**`
    },
    {
      id: "wpe-pyq-q15",
      question: "A $2\\text{ kg}$ block slides on a horizontal floor with a speed of $4\\text{ m/s}$. It strikes an uncompressed spring and compresses it till the block is motionless. The kinetic friction force is $15\\text{ N}$ and spring constant is $10000\\text{ N/m}$. The spring compresses by:",
      year: "AIEEE 2007",
      options: [
        "$5.5\\text{ cm}$",
        "$2.5\\text{ cm}$",
        "$11.0\\text{ cm}$",
        "$8.5\\text{ cm}$"
      ],
      answer: 0,
      explanation: `#### **Step 1: Set up the Work-Energy Theorem**
According to the Work-Energy Theorem, the net work done by all forces equals the change in kinetic energy:
$$W_{\\text{spring}} + W_{\\text{friction}} = \\Delta K$$

Let $x$ be the maximum compression of the spring. When the block comes to rest, its final velocity is zero.
$$-\\frac{1}{2} k x^2 - f_k x = 0 - \\frac{1}{2} m v^2$$
$$\\frac{1}{2} k x^2 + f_k x = \\frac{1}{2} m v^2$$

---

#### **Step 2: Substitute values into the equation**
Given data: $m = 2\\text{ kg}$, $v = 4\\text{ m/s}$, $f_k = 15\\text{ N}$, $k = 10000\\text{ N/m}$
$$\\frac{1}{2} (10000) x^2 + 15x = \\frac{1}{2} (2) (4)^2$$
$$5000x^2 + 15x = 16$$
$$5000x^2 + 15x - 16 = 0$$

---

#### **Step 3: Solve the quadratic equation for $x$**
Using the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$:
$$x = \\frac{-15 \\pm \\sqrt{15^2 - 4(5000)(-16)}}{2(5000)}$$
$$x = \\frac{-15 \\pm \\sqrt{225 + 320000}}{10000} = \\frac{-15 \\pm \\sqrt{320225}}{10000}$$
$$\\sqrt{320225} \\approx 565.88$$

Since compression distance $x$ must be positive:
$$x = \\frac{-15 + 565.88}{10000} = \\frac{550.88}{10000} = 0.0551\\text{ m}$$

Converting to centimeters:
$$x \\approx 5.5\\text{ cm}$$

### **Correct Answer:**
**(a) $5.5\\text{ cm}$**`
    },
    {
      id: "wpe-pyq-q16",
      question: "A force acts on a $2\\text{ kg}$ object, so that its position is given as a function of time as $x = 3t^2 + 5$. What is the work done by this force in first 5 seconds?",
      year: "JEE Main (9th Jan Shift-II 2019)",
      options: [
        "$850\\text{ J}$",
        "$900\\text{ J}$",
        "$950\\text{ J}$",
        "$875\\text{ J}$"
      ],
      answer: 1,
      explanation: `#### **Step 1: Determine the velocity as a function of time**
The position $x$ is given by:
$$x = 3t^2 + 5$$

Differentiating position with respect to time gives velocity ($v$):
$$v = \\frac{dx}{dt} = \\frac{d}{dt}(3t^2 + 5) = 6t$$

---

#### **Step 2: Find the initial and final velocities**
*   **At $t = 0\\text{ s}$ (initial velocity $v_i$):**
    $$v_i = 6(0) = 0\\text{ m/s}$$
*   **At $t = 5\\text{ s}$ (final velocity $v_f$):**
    $$v_f = 6(5) = 30\\text{ m/s}$$

---

#### **Step 3: Calculate the work done using the Work-Energy Theorem**
According to the Work-Energy Theorem, the work done by a net force equals the change in kinetic energy ($\\Delta K$) of the object:
$$W = \\Delta K = \\frac{1}{2}m(v_f^2 - v_i^2)$$

Substituting the values ($m = 2\\text{ kg}$):
$$W = \\frac{1}{2} \\times 2 \\times (30^2 - 0^2) = 900\\text{ J}$$

### **Correct Answer:**
**(b) $900\\text{ J}$**`
    },
    {
      id: "wpe-pyq-q17",
      question: "A particle is moving in a circular path of radius $a$ under the action of an attractive potential $U = -\\frac{k}{2r^2}$. Its total energy is:",
      year: "JEE Main 2018",
      options: [
        "$-\\frac{k}{4a^2}$",
        "$\\frac{k}{2a^2}$",
        "zero",
        "$-\\frac{3k}{2a^2}$"
      ],
      answer: 2,
      explanation: `#### **Step 1: Find the conservative force acting on the particle**
The relationship between a central conservative force ($F$) and potential energy ($U$) is:
$$F = -\\frac{dU}{dr}$$

Given $U = -\\frac{k}{2r^2} = -\\frac{k}{2}r^{-2}$, differentiate with respect to $r$:
$$F = -\\frac{d}{dr}\\left(-\\frac{k}{2}r^{-2}\\right) = -\\left(-\\frac{k}{2}(-2r^{-3})\\right) = -\\frac{k}{r^3}$$

The negative sign confirms it is an attractive force acting radially inward.

---

#### **Step 2: Relate the attractive force to centripetal force**
This attractive force acts as the centripetal force required to keep the particle in a circular track:
$$\\frac{m v^2}{r} = \\frac{k}{r^3} \\implies m v^2 = \\frac{k}{r^2}$$

---

#### **Step 3: Calculate Kinetic Energy and Total Energy**
*   **Kinetic Energy ($K$):**
    $$K = \\frac{1}{2}mv^2 = \\frac{k}{2r^2}$$

*   **Total Energy ($E$):**
    $$E = K + U = \\frac{k}{2r^2} + \\left(-\\frac{k}{2r^2}\\right) = 0$$

Since the total energy is $0$ at any distance $r$, it remains zero when $r = a$.

### **Correct Answer:**
**(c) zero**`
    },
    {
      id: "wpe-pyq-q18",
      question: "A body of mass $m = 10^{-2}\\text{ kg}$ is moving in a medium and experiences a frictional force $F = -kv^2$. Its initial speed is $v_0 = 10\\text{ ms}^{-1}$. If, after $10\\text{ s}$, its energy is $\\frac{1}{8}mv_0^2$, the value of $k$ will be:",
      year: "JEE Main 2017",
      options: [
        "$10^{-3}\\text{ kgs}^{-1}$",
        "$10^{-4}\\text{ kgm}^{-1}$",
        "$10^{-1}\\text{ kgm}^{-1}\\text{s}^{-1}$",
        "$10^{-3}\\text{ kgm}^{-1}$"
      ],
      answer: 1,
      explanation: `#### **Step 1: Determine the final velocity from the energy condition**
Let $v$ be the final velocity at $t = 10\\text{ s}$. The final kinetic energy is given as:
$$\\frac{1}{2}mv^2 = \\frac{1}{8}mv_0^2 \\implies v^2 = \\frac{1}{4}v_0^2 \\implies v = \\frac{1}{2}v_0$$

Given $v_0 = 10\\text{ m/s}$, the final velocity is:
$$v = \\frac{10}{2} = 5\\text{ m/s}$$

---

#### **Step 2: Set up the differential equation from Newton's second law**
$$F = m\\frac{dv}{dt} = -kv^2$$
$$\\frac{dv}{v^2} = -\\frac{k}{m}dt$$

Integrating both sides from $t=0$ (where velocity is $v_0$) to $t=10$ (where velocity is $v$):
$$\\int_{v_0}^{v} v^{-2} \\, dv = -\\frac{k}{m} \\int_{0}^{t} dt$$
$$\\left[ -\\frac{1}{v} \\right]_{v_0}^{v} = -\\frac{k}{m}t \\implies \\frac{1}{v} - \\frac{1}{v_0} = \\frac{k}{m}t$$

---

#### **Step 3: Calculate the value of $k$**
Substitute the known values ($v_0 = 10$, $v = 5$, $t = 10$, and $m = 10^{-2}\\text{ kg}$):
$$\\frac{1}{5} - \\frac{1}{10} = \\frac{k}{10^{-2}} \\times 10$$
$$\\frac{1}{10} = 1000k \\implies k = \\frac{1}{10000} = 10^{-4}\\text{ kg}\\cdot\\text{m}^{-1}$$

### **Correct Answer:**
**(b) $10^{-4}\\text{ kgm}^{-1}$**`
    },
    {
      id: "wpe-pyq-q19",
      question: "A person trying to lose weight by burning fat lifts a mass of $10\\text{ kg}$ upto a height of $1\\text{ m}$, 1000 times. Assume that the potential energy lost each time he lowers the mass is dissipated. How much fat will he use up considering the work done only when the weight is lifted up? Fat supplies $3.8 \\times 10^7\\text{ J}$ of energy per kg which is converted into mechanical energy with a $20\\%$ of efficiency rate. (Take, $g = 9.8\\text{ ms}^{-2}$)",
      year: "JEE Main 2016",
      options: [
        "$2.45 \\times 10^{-3}\\text{ kg}$",
        "$6.45 \\times 10^{-3}\\text{ kg}$",
        "$9.89 \\times 10^{-3}\\text{ kg}$",
        "$12.89 \\times 10^{-3}\\text{ kg}$"
      ],
      answer: 3,
      explanation: `#### **Step 1: Calculate the total mechanical work done**
The work done in lifting the mass once is equivalent to the gain in potential energy:
$$W_1 = mgh = 10 \\times 9.8 \\times 1 = 98\\text{ J}$$

Since the process is repeated 1000 times, the total mechanical work done is:
$$W_{\\text{total}} = 1000 \\times 98 = 9.8 \\times 10^4\\text{ J}$$

---

#### **Step 2: Relate fat energy output to work using efficiency**
Let $M$ be the mass of fat used up (in kg). 
*   Total energy supplied by the fat $= M \\times (3.8 \\times 10^7)\\text{ J}$
*   Since the efficiency is $20\\%$, only a fraction of this chemical energy becomes useful mechanical work:
$$\\text{Useful Mechanical Work} = \\text{Efficiency} \\times \\text{Total Fat Energy}$$
$$9.8 \\times 10^4 = 0.20 \\times M \\times (3.8 \\times 10^7)$$

---

#### **Step 3: Solve for mass $M$**
$$9.8 \\times 10^4 = M \\times (7.6 \\times 10^6)$$
$$M = \\frac{9.8 \\times 10^4}{7.6 \\times 10^6} = \\frac{9.8}{760} \\approx 0.01289\\text{ kg} = 12.89 \\times 10^{-3}\\text{ kg}$$

### **Correct Answer:**
**(d) $12.89 \\times 10^{-3}\\text{ kg}$**`
    },
    {
      id: "wpe-pyq-q20",
      question: "When a rubber band is stretched by a distance $x$, it exerts a restoring force of magnitude $F = ax + bx^2$, where $a$ and $b$ are constants. The work done in stretching the unstretched rubber band by $L$ is:",
      year: "JEE Main 2014",
      options: [
        "$aL^2 + bL^3$",
        "$\\frac{1}{2}(aL^2 + bL^3)$",
        "$\\frac{aL^2}{2} + \\frac{bL^3}{3}$",
        "$\\frac{1}{2}\\left(\\frac{aL^2}{2} + \\frac{bL^3}{3}\\right)$"
      ],
      answer: 2,
      explanation: `#### **Step 1: Understand the formula for work done by a variable force**
The work done ($W$) by an external force to stretch a rubber band against its variable restoring force $F(x)$ from an initial extension $x_1$ to a final extension $x_2$ is given by the integral:
$$W = \\int_{x_1}^{x_2} F(x) \\, dx$$

---

#### **Step 2: Set up the integral**
The rubber band is initially unstretched, which means the initial position is $x_1 = 0$. It is stretched by a total distance of $L$, so the final position is $x_2 = L$.

Substituting the given restoring force equation $F = ax + bx^2$:
$$W = \\int_{0}^{L} (ax + bx^2) \\, dx$$

---

#### **Step 3: Integrate and apply limits**
Using the power rule of integration ($\\int x^n \\, dx = \\frac{x^{n+1}}{n+1}$):
$$W = \\left[ \\frac{ax^2}{2} + \\frac{bx^3}{3} \\right]_{0}^{L}$$

Applying the upper limit ($L$) and lower limit ($0$):
$$W = \\left( \\frac{aL^2}{2} + \\frac{bL^3}{3} \\right) - (0 + 0)$$
$$W = \\frac{aL^2}{2} + \\frac{bL^3}{3}$$

### **Correct Answer:**
**(c) $\\frac{aL^2}{2} + \\frac{bL^3}{3}$**`
    },
    {
      id: "wpe-pyq-q21",
      question: "The momentum of a body is increased by $50\\%$. The percentage increase in the kinetic energy of the body is _________ $\\%$.",
      type: "integer",
      year: "JEE Main (8th April Shift-I 2023)",
      answer: 125,
      explanation: `#### **Step 1: Understand the formula relating kinetic energy and momentum**
The relationship between kinetic energy ($K$) and linear momentum ($p$) of a body of mass $m$ is given by:
$$K = \\frac{p^2}{2m} \\implies K \\propto p^2$$

---

#### **Step 2: Calculate the new momentum**
Let the initial momentum be $p_1$. If the momentum is increased by $50\\%$, the final momentum ($p_2$) becomes:
$$p_2 = p_1 + 50\\% \\text{ of } p_1 = p_1 + 0.5p_1 = 1.5p_1$$

---

#### **Step 3: Find the ratio of kinetic energies**
Since the mass $m$ of the body stays constant:
$$\\frac{K_2}{K_1} = \\left(\\frac{p_2}{p_1}\\right)^2 = (1.5)^2 = 2.25 \\implies K_2 = 2.25K_1$$

---

#### **Step 4: Calculate the percentage increase**
The percentage increase in kinetic energy is:
$$\\% \\text{ increase} = \\left(\\frac{K_2 - K_1}{K_1}\\right) \\times 100\\%$$
$$\\% \\text{ increase} = \\left(\\frac{2.25K_1 - K_1}{K_1}\\right) \\times 100\\% = 1.25 \\times 100\\% = 125\\%$$

### **Correct Answer:**
**125**`
    },
    {
      id: "wpe-pyq-q22",
      question: "A body of mass $5\\text{ kg}$ is moving with a momentum of $10\\text{ kg}\\cdot\\text{ms}^{-1}$. Now, a force of $2\\text{ N}$ acts on the body in the direction of its motion for $5\\text{ s}$. The increase in the kinetic energy of the body is _________ $\\text{J}$.",
      type: "integer",
      year: "JEE Main (8th April Shift-II 2023)",
      answer: 30,
      explanation: `#### **Step 1: Calculate the initial velocity and initial kinetic energy**
Given data:
*   Mass, $m = 5\\text{ kg}$
*   Initial momentum, $p_1 = 10\\text{ kg}\\cdot\\text{ms}^{-1}$
*   Force, $F = 2\\text{ N}$
*   Time, $t = 5\\text{ s}$

The initial kinetic energy ($K_1$) can be found directly from momentum:
$$K_1 = \\frac{p_1^2}{2m} = \\frac{10^2}{2 \\times 5} = \\frac{100}{10} = 10\\text{ J}$$

---

#### **Step 2: Calculate the final momentum using Impulse**
According to the Impulse-Momentum Theorem, the change in momentum equals the impulse applied by the force:
$$\\Delta p = F \\cdot t$$
$$p_2 - p_1 = 2 \\times 5 = 10$$
$$p_2 = p_1 + 10 = 10 + 10 = 20\\text{ kg}\\cdot\\text{ms}^{-1}$$

---

#### **Step 3: Calculate the final kinetic energy and increase**
The final kinetic energy ($K_2$) is:
$$K_2 = \\frac{p_2^2}{2m} = \\frac{20^2}{2 \\times 5} = \\frac{400}{10} = 40\\text{ J}$$

The increase in kinetic energy ($\\Delta K$) is:
$$\\Delta K = K_2 - K_1 = 40 - 10 = 30\\text{ J}$$

### **Correct Answer:**
**30**`
    },
    {
      id: "wpe-pyq-q23",
      question: "A force $\\mathbf{F} = (2 + 3x)\\hat{\\mathbf{i}}$ acts on a particle in the $x$ direction where $F$ is in newton and $x$ is in meter. The work done by this force during a displacement from $x = 0$ to $x = 4\\text{ m}$ is _________ $\\text{J}$.",
      type: "integer",
      year: "JEE Main (11th April Shift-I 2023)",
      answer: 32,
      explanation: `#### **Step 1: Set up the work integral for a variable force**
Since the force depends on the position $x$, the work done ($W$) is calculated using integration:
$$W = \\int_{x_1}^{x_2} F \\, dx$$

---

#### **Step 2: Substitute limits and integrate**
Given limits are from $x = 0$ to $x = 4\\text{ m}$:
$$W = \\int_{0}^{4} (2 + 3x) \\, dx$$
$$W = \\left[ 2x + \\frac{3x^2}{2} \\right]_{0}^{4}$$

---

#### **Step 3: Apply limits**
$$W = \\left( 2(4) + \\frac{3(4)^2}{2} \\right) - \\left( 2(0) + \\frac{3(0)^2}{2} \\right)$$
$$W = \\left( 8 + \\frac{3 \\times 16}{2} \\right) = 8 + 24 = 32\\text{ J}$$

### **Correct Answer:**
**32**`
    },
    {
      id: "wpe-pyq-q24",
      question: "A particle of mass $10\\text{ g}$ moves in a straight line with retardation $2x$, where $x$ is the displacement in SI units. Its loss of kinetic energy for above displacement is $\\left(\\frac{10}{x}\\right)^{-n}\\text{ J}$. The value of $n$ will be _______.",
      type: "integer",
      year: "JEE Main (6th April Shift-I 2023)",
      answer: 2,
      explanation: `#### **Step 1: Express force as a function of displacement**
Given data:
*   Mass, $m = 10\\text{ g} = 10 \\times 10^{-3}\\text{ kg} = 10^{-2}\\text{ kg}$
*   Retardation, $a = -2x$

According to Newton's Second Law, the retarding force acting on the particle is:
$$F = m \\cdot a = 10^{-2} \\cdot (-2x) = -2 \\times 10^{-2}x\\text{ N}$$

---

#### **Step 2: Use the Work-Energy Theorem to find the loss of kinetic energy**
The work done by a retarding force equals the change in kinetic energy. The loss of kinetic energy ($\\Delta K_{\\text{loss}}$) is equivalent to the work done against the retardation:
$$\\Delta K_{\\text{loss}} = \\int_{0}^{x} |F| \\, dx = \\int_{0}^{x} 2 \\times 10^{-2}x \\, dx$$
$$\\Delta K_{\\text{loss}} = 2 \\times 10^{-2} \\left[ \\frac{x^2}{2} \\right]_{0}^{x} = 10^{-2}x^2\\text{ J}$$

---

#### **Step 3: Compare with the given format to solve for $n$**
Rewrite our derived value in the format given in the problem statement $\\left(\\frac{10}{x}\\right)^{-n}$:
$$\\Delta K_{\\text{loss}} = 10^{-2}x^2 = \\frac{x^2}{10^2} = \\left(\\frac{x}{10}\\right)^2 = \\left(\\frac{10}{x}\\right)^{-2}$$

Comparing $\\left(\\frac{10}{x}\\right)^{-2}$ with $\\left(\\frac{10}{x}\\right)^{-n}$:
$$n = 2$$

### **Correct Answer:**
**2**`
    },
    {
      id: "wpe-pyq-q25",
      question: "To maintain a speed of $80\\text{ km/h}$ by a bus of mass $500\\text{ kg}$ on a plane rough road for $4\\text{ km}$ distance, the work done by the engine of the bus will be _________ $\\text{kJ}$. [The coefficient of friction between tyre of bus and road is $0.04$]",
      type: "integer",
      year: "JEE Main (12th April Shift-I 2023)",
      answer: 800,
      explanation: `#### **Step 1: Calculate the force required to maintain constant speed**
Since the bus is moving at a constant speed, the net force is zero. Therefore, the driving force ($F$) provided by the engine must exactly balance the kinetic frictional resistance force ($f_k$):
$$F = f_k = \\mu_k \\cdot N$$

On a level plane road, the normal reaction force is equal to the weight ($N = mg$):
$$F = \\mu_k \\cdot m \\cdot g$$

Substitute the given values (taking standard $g = 10\\text{ m/s}^2$ for typical numerical grid patterns):
$$F = 0.04 \\times 500 \\times 10 = 200\\text{ N}$$

---

#### **Step 2: Calculate the work done**
The distance travelled is $d = 4\\text{ km} = 4000\\text{ m}$.
$$W = F \\cdot d = 200\\text{ N} \\times 4000\\text{ m} = 800000\\text{ J}$$

---

#### **Step 3: Convert the final answer to kilojoules ($\\text{kJ}$)**
$$W = \\frac{800000}{1000} = 800\\text{ kJ}$$

### **Correct Answer:**
**800**`
    },
    {
      id: "wpe-pyq-q26",
      question: "A block of mass $10\\text{ kg}$ is moving along $X$-axis under the action of force $F = 5x\\text{ N}$. The work done by the force in moving the block from $x = 2\\text{ m}$ to $x = 4\\text{ m}$ will be _________ $\\text{J}$.",
      type: "integer",
      year: "JEE Main (15th April Shift-I 2023)",
      answer: 30,
      explanation: `#### **Step 1: Use the work integral equation**
Because the force is a function of position $x$, we integrate the force across the boundaries:
$$W = \\int_{x_1}^{x_2} F \\, dx$$

---

#### **Step 2: Integrate with given values**
Limits are $x = 2$ to $x = 4$:
$$W = \\int_{2}^{4} 5x \\, dx = 5 \\left[ \\frac{x^2}{2} \\right]_{2}^{4}$$

---

#### **Step 3: Compute the final value**
$$W = \\frac{5}{2} \\left[ 4^2 - 2^2 \\right]$$
$$W = \\frac{5}{2} [16 - 4] = \\frac{5}{2} \\times 12 = 5 \\times 6 = 30\\text{ J}$$

### **Correct Answer:**
**30**`
    },
    {
      id: "wpe-pyq-q27",
      question: "A $0.4\\text{ kg}$ mass takes $8\\text{ s}$ to reach ground when dropped from a certain height $P$ above surface of earth. The loss of potential energy in the last second of fall is _________ $\\text{J}$. (Take, $g = 10\\text{ m/s}^2$)",
      type: "integer",
      year: "JEE Main (29th Jan Shift-I 2023)",
      answer: 300,
      explanation: `#### **Step 1: Understand loss of potential energy**
The loss of gravitational potential energy ($\\Delta U$) as an object falls a certain distance is equal to the work done by gravity over that same vertical distance:
$$\\Delta U = mgh$$
where $h$ is the distance traveled by the object during that specific time interval.

---

#### **Step 2: Calculate the distance traveled in the last second**
The object is dropped from rest ($u = 0$) and takes a total time of $n = 8\\text{ s}$ to hit the ground. The last second of the fall is the $8^{\\text{th}}$ second.

The formula for the distance traveled in the $n^{\\text{th}}$ second of free fall is given by:
$$S_n = u + \\frac{g}{2}(2n - 1)$$

Substituting $u = 0$, $g = 10\\text{ m/s}^2$, and $n = 8$:
$$S_8 = 0 + \\frac{10}{2}(2(8) - 1)$$
$$S_8 = 5(16 - 1) = 5 \\times 15 = 75\\text{ m}$$

---

#### **Step 3: Calculate the loss of potential energy**
Using the distance traveled in the last second ($h = 75\\text{ m}$) and the mass ($m = 0.4\\text{ kg}$):
$$\\Delta U = mgh = 0.4 \\times 10 \\times 75 = 4 \\times 75 = 300\\text{ J}$$

### **Correct Answer:**
**300**`
    },
    {
      id: "wpe-pyq-q28",
      question: "A small particle moves to position $5\\hat{\\mathbf{i}} - 2\\hat{\\mathbf{j}} + \\hat{\\mathbf{k}}$ from its initial position $2\\hat{\\mathbf{i}} + 3\\hat{\\mathbf{j}} - 4\\hat{\\mathbf{k}}$ under the action of force $5\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} + 7\\hat{\\mathbf{k}}\\text{ N}$. The value of work done will be _________ $\\text{J}$.",
      type: "integer",
      year: "JEE Main (1st Feb Shift-I 2023)",
      answer: 40,
      explanation: `#### **Step 1: Calculate the displacement vector**
The displacement vector ($\\mathbf{d}$) is the difference between the final position vector ($\\mathbf{r}_f$) and the initial position vector ($\\mathbf{r}_i$):
$$\\mathbf{r}_i = 2\\hat{\\mathbf{i}} + 3\\hat{\\mathbf{j}} - 4\\hat{\\mathbf{k}}$$
$$\\mathbf{r}_f = 5\\hat{\\mathbf{i}} - 2\\hat{\\mathbf{j}} + \\hat{\\mathbf{k}}$$

$$\\mathbf{d} = \\mathbf{r}_f - \\mathbf{r}_i = (5 - 2)\\hat{\\mathbf{i}} + (-2 - 3)\\hat{\\mathbf{j}} + (1 - (-4))\\hat{\\mathbf{k}}$$
$$\\mathbf{d} = 3\\hat{\\mathbf{i}} - 5\\hat{\\mathbf{j}} + 5\\hat{\\mathbf{k}}\\text{ m}$$

---

#### **Step 2: Compute work done via dot product**
Work done ($W$) by a constant force is defined as the scalar dot product of the force vector ($\\mathbf{F}$) and the displacement vector ($\\mathbf{d}$):
$$\\mathbf{F} = 5\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} + 7\\hat{\\mathbf{k}}$$

$$W = \\mathbf{F} \\cdot \\mathbf{d} = (5)(3) + (2)(-5) + (7)(5)$$
$$W = 15 - 10 + 35 = 40\\text{ J}$$

### **Correct Answer:**
**40**`
    },
    {
      id: "wpe-pyq-q29",
      question: "A lift of mass $m = 500\\text{ kg}$ is descending with speed of $2\\text{ ms}^{-1}$. Its supporting cable begins to slip thus allowing it to fall with a constant acceleration of $2\\text{ ms}^{-2}$. The kinetic energy of the lift at the end of fall through to a distance of $6\\text{ m}$ will be _________ $\\text{kJ}$.",
      type: "integer",
      year: "JEE Main (31st Jan Shift-I 2023)",
      answer: 7,
      explanation: `#### **Step 1: Determine the final velocity of the lift**
Given parameters for the descent:
*   Initial speed, $u = 2\\text{ m/s}$
*   Constant downward acceleration, $a = 2\\text{ m/s}^2$
*   Distance of fall, $s = 6\\text{ m}$

Using the third equation of motion:
$$v^2 = u^2 + 2as$$
$$v^2 = (2)^2 + 2(2)(6)$$
$$v^2 = 4 + 24 = 28\\text{ m}^2\\text{/s}^2$$

---

#### **Step 2: Calculate the final Kinetic Energy**
Using the mass $m = 500\\text{ kg}$:
$$K = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 500 \\times 28$$
$$K = 250 \\times 28 = 7000\\text{ J}$$

---

#### **Step 3: Convert the energy value to kilojoules ($\\text{kJ}$)**
$$K = \\frac{7000}{1000} = 7\\text{ kJ}$$

### **Correct Answer:**
**7**`
    },
    {
      id: "wpe-pyq-q30",
      question: "A uniform chain of $6\\text{ m}$ length is placed on a table, such that a part of its length is hanging over the edge of the table. The system is at rest. The coefficient of static friction between the chain and the surface of the table is $0.5$, the maximum length of the chain hanging from the table is _________ $\\text{m}$.",
      type: "integer",
      year: "JEE Main (25th June Shift-I 2022)",
      answer: 2,
      explanation: `#### **Step 1: Set up the equilibrium equations**
Let the total length of the uniform chain be $L = 6\\text{ m}$, and its total mass be $M$.
The mass per unit length of the chain is $\\lambda = \\frac{M}{L}$.

Let $x$ be the maximum length of the chain hanging over the edge. 
*   Length of the chain remaining on the table $= L - x$
*   Mass of the hanging portion, $m_1 = \\lambda x$
*   Mass of the portion on the table, $m_2 = \\lambda(L - x)$

---

#### **Step 2: Balance the driving force and maximum static friction**
For the chain to stay at rest at its maximum hanging configuration, the downward pulling weight of the hanging segment must balance the maximum limiting static friction acting on the table segment:
$$\\text{Weight of hanging segment} = \\text{Limiting Friction force}$$
$$m_1 g = \\mu_s N$$

Since the normal reaction force on the table is equal to the weight of the segment on the table ($N = m_2 g$):
$$m_1 g = \\mu_s m_2 g \\implies m_1 = \\mu_s m_2$$

---

#### **Step 3: Solve for the hanging length $x$**
Substitute the mass expressions into the friction equation:
$$\\lambda x = \\mu_s \\lambda (L - x)$$
$$x = \\mu_s (L - x)$$

Given $\\mu_s = 0.5$ and $L = 6\\text{ m}$:
$$x = 0.5(6 - x)$$
$$x = 3 - 0.5x$$
$$1.5x = 3 \\implies x = \\frac{3}{1.5} = 2\\text{ m}$$

### **Correct Answer:**
**2**`
    }
  ]
};

export default pyq;
