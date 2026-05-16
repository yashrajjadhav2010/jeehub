import { QuizSet } from '../../../types';

const kinematicsSet02: QuizSet = {
  id: 'set-02',
  title: 'Kinematics - Set 02',
  chapterId: 'kinematics',
  subjectId: 'physics',
  difficulty: 'medium',
  questions: [
    {
      id: 'pk2-q1',
      question: 'A particle\'s velocity varies with displacement $x$ as $v = \\alpha \\sqrt{x}$, where $\\alpha$ is a constant. The acceleration of the particle is:',
      options: ['$\\alpha^2 / 2$', '$\\alpha / 2$', '$\\alpha^2 x$', 'Constant but dependent on time'],
      answer: 0,
      explanation: 'Acceleration $a = v \\frac{dv}{dx}$.\n\nGiven $v = \\alpha x^{1/2}$,\n$\\frac{dv}{dx} = \\frac{\\alpha}{2} x^{-1/2} = \\frac{\\alpha}{2\\sqrt{x}}$.\n\nThus $a = (\\alpha \\sqrt{x}) \\left( \\frac{\\alpha}{2\\sqrt{x}} \\right) = \\frac{\\alpha^2}{2}$.'
    },
    {
      id: 'pk2-q2',
      question: 'The position of a particle along the x-axis is given by $x = t^3 - 3t^2$ meters. The total distance traveled by the particle in the first 3 seconds is:',
      options: ['$0 \\text{ m}$', '$4 \\text{ m}$', '$8 \\text{ m}$', '$6 \\text{ m}$'],
      answer: 2,
      explanation: 'Velocity $v = 3t^2 - 6t = 3t(t-2)$.\nIt changes direction at $t=2$.\n\n$x(0)=0, x(2)=-4, x(3)=0$.\n\nDistance $= |x(2)-x(0)| + |x(3)-x(2)|$\n$= |-4-0| + |0-(-4)| = 4 + 4 = 8 \\text{ m}$.'
    },
    {
      id: 'pk2-q3',
      question: 'The acceleration of a particle is given by $a = 2t \\text{ m/s}^2$. If it starts from rest at the origin, its displacement after $3 \\text{ s}$ is:',
      options: ['$18 \\text{ m}$', '$9 \\text{ m}$', '$27 \\text{ m}$', '$6 \\text{ m}$'],
      answer: 1,
      explanation: '$v = \\int a \\, dt = t^2$.\n\nDisplacement $x = \\int v \\, dt = \\int t^2 \\, dt = t^3/3$.\n\nAt $t=3$, $x = 27/3 = 9 \\text{ m}$.'
    },
    {
      id: 'pk2-q4',
      question: 'A projectile is fired with speed $u$. The angle of projection for which the maximum height equals the horizontal range is:',
      options: ['$\\tan^{-1}(1/4)$', '$\\tan^{-1}(4)$', '$\\tan^{-1}(2)$', '$45^\\circ$'],
      answer: 1,
      explanation: '$R = \\frac{u^2 \\sin(2\\theta)}{g}$ and $H = \\frac{u^2 \\sin^2 \\theta}{2g}$.\n\nSetting $R=H$ gives $4 \\cos \\theta = \\sin \\theta \\implies \\tan \\theta = 4$.'
    },
    {
      id: 'pk2-q5',
      question: 'A man walking at $3 \\text{ km/h}$ finds rain falling vertically. Increasing his speed to $6 \\text{ km/h}$, it appears to meet him at $45^\\circ$ to the vertical. The actual speed of rain is:',
      options: ['$3 \\text{ km/h}$', '$3\\sqrt{2} \\text{ km/h}$', '$5 \\text{ km/h}$', '$4 \\text{ km/h}$'],
      answer: 1,
      explanation: 'Actual velocity $\\vec{v}_r = x\\hat{i} - y\\hat{j}$.\n\nCase 1: $x-3=0 \\implies x=3$.\n\nCase 2: $\\tan 45^\\circ = |x-6|/y = 3/y = 1 \\implies y=3$.\n\nSpeed $= \\sqrt{3^2+3^2} = 3\\sqrt{2} \\text{ km/h}$.'
    },
    {
      id: 'pk2-q6',
      question: 'A boat with speed $5 \\text{ km/h}$ in still water crosses a $1 \\text{ km}$ river along the shortest path in $15$ minutes. The river velocity is:',
      options: ['$3 \\text{ km/h}$', '$4 \\text{ km/h}$', '$2 \\text{ km/h}$', '$1 \\text{ km/h}$'],
      answer: 0,
      explanation: '$v_{net} = 1/(15/60) = 4 \\text{ km/h}$.\n\nShortest path: $v_s^2 = v_{net}^2 + v_r^2 \\implies 25 = 16 + v_r^2 \\implies v_r = 3 \\text{ km/h}$.'
    },
    {
      id: 'pk2-q7',
      question: 'The equation of a projectile\'s trajectory is $y = \\sqrt{3}x - \\frac{g x^2}{2}$. The horizontal range is:',
      options: ['$2\\sqrt{3}/g$', '$\\sqrt{3}/g$', '$3/g$', '$2/g$'],
      answer: 0,
      explanation: 'Factor $y = \\sqrt{3}x (1 - \\frac{gx}{2\\sqrt{3}})$.\n\nRange $R$ is where $y=0$ for $x>0$, so $R = 2\\sqrt{3}/g$.'
    },
    {
      id: 'pk2-q8',
      question: 'Two particles are projected with $u_1, u_2$ at $\\theta_1, \\theta_2$. If their relative velocity remains horizontal, then:',
      options: ['$u_1 \\cos\\theta_1 = u_2 \\cos\\theta_2$', '$u_1 \\sin\\theta_1 = u_2 \\sin\\theta_2$', '$u_1 = u_2$', '$\\theta_1 = \\theta_2$'],
      answer: 1,
      explanation: 'Relative vertical velocity $\\Delta v_y = (u_1\\sin\\theta_1 - gt) - (u_2\\sin\\theta_2 - gt) = 0$.\n\nThus, $u_1\\sin\\theta_1 = u_2\\sin\\theta_2$.'
    },
    {
      id: 'pk2-q9',
      question: 'A body thrown horizontally at $10 \\text{ m/s}$ from a tower. After $1 \\text{ s}$, the angle made by its velocity with the horizontal is:',
      options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
      answer: 1,
      explanation: '$v_x = 10, v_y = gt = 10$.\n\n$\\tan\\theta = 10/10 = 1 \\implies \\theta = 45^\\circ$.'
    },
    {
      id: 'pk2-q10',
      question: 'Ratio of initial speeds is $2:3$ for two bodies thrown vertically. Ratio of max heights attained is:',
      options: ['$2:3$', '$4:9$', '$\\sqrt{2}:\\sqrt{3}$', '$8:27$'],
      answer: 1,
      explanation: '$H = u^2/2g \\implies H \\propto u^2$.\n\nRatio $= (2/3)^2 = 4/9$.'
    },
    {
      id: 'pk2-q11',
      question: 'The displacement $x$ varies as $x = 4t^2 - 15t + 25$. Find position, velocity, and acceleration at $t=0$.',
      options: ['$25\\text{m}, 15\\text{m/s}, 8\\text{m/s}^2$', '$25\\text{m}, -15\\text{m/s}, 8\\text{m/s}^2$', '$25\\text{m}, -15\\text{m/s}, 4\\text{m/s}^2$', '$0\\text{m}, -15\\text{m/s}, 8\\text{m/s}^2$'],
      answer: 1,
      explanation: '$x(0)=25$.\n$v = 8t-15 \\implies v(0)=-15$.\n$a = 8$.'
    },
    {
      id: 'pk2-q12',
      question: 'A stone dropped travels $5/9$ of height in the last second. The time of fall is:',
      options: ['$3 \\text{ s}$', '$4 \\text{ s}$', '$5 \\text{ s}$', '$6 \\text{ s}$'],
      answer: 0,
      explanation: '$H = 5t^2$.\n\n$S_t = 5(2t-1)$.\n\n$5(2t-1) = (5/9)(5t^2)$.\n\n$18t - 9 = 5t^2 \\implies 5t^2 - 18t + 9 = 0$.\n\nRoots are $3, 0.6$. Since $t>1$, $t=3$.'
    },
    {
      id: 'pk2-q13',
      question: 'A body slides down a $45^\\circ$ rough plane with $\\mu_k = 0.5$. Ratio of acceleration to $g$ is:',
      options: ['$\\frac{1}{2\\sqrt{2}}$', '$\\frac{1}{2}$', '$\\frac{1}{\\sqrt{2}}$', '$\\frac{1}{4}$'],
      answer: 0,
      explanation: '$a = g(\\sin 45^\\circ - 0.5 \\cos 45^\\circ)$.\n\n$a = g(\\frac{1}{\\sqrt{2}} - \\frac{1}{2\\sqrt{2}}) = g \\frac{1}{2\\sqrt{2}}$.'
    },
    {
      id: 'pk2-q14',
      question: 'Two trains $50 \\text{ m}$ long moving in opposite directions at $10 \\text{ m/s}$ and $15 \\text{ m/s}$. Crossing time is:',
      options: ['$2 \\text{ s}$', '$4 \\text{ s}$', '$10 \\text{ s}$', '$5 \\text{ s}$'],
      answer: 1,
      explanation: '$v_{rel} = 25$.\n$d_{total} = 100$.\n\n$t = 100/25 = 4 \\text{ s}$.'
    },
    {
      id: 'pk2-q15',
      question: 'A boy swims at $5 \\text{ m/s}$ at $60^\\circ$ with river flow. River width $100 \\text{ m}$. Time to cross is:',
      options: ['$20 \\text{ s}$', '$40/\\sqrt{3} \\text{ s}$', '$20/\\sqrt{3} \\text{ s}$', '$40 \\text{ s}$'],
      answer: 1,
      explanation: '$v_{\\perp} = 5 \\sin 60^\\circ = 5\\sqrt{3}/2$.\n\n$t = 100 / (5\\sqrt{3}/2) = 40/\\sqrt{3} \\text{ s}$.'
    },
    {
      id: 'pk2-q16',
      question: 'While rising up for a projectile, the magnitude of rate of change of momentum is:',
      options: ['$mg$', '$mg \\sin\\theta$', '$mg \\cos\\theta$', 'zero'],
      answer: 0,
      explanation: 'Rate of change of momentum = Net force = $mg$.'
    },
    {
      id: 'pk2-q17',
      question: 'Particle moving in circle with speed $v$. Change in velocity over semi-circle is:',
      options: ['$v$', '$2v$', '$\\sqrt{2}v$', 'Zero'],
      answer: 1,
      explanation: '$\\Delta v = |v\\hat{j} - (-v\\hat{j})| = 2v$.'
    },
    {
      id: 'pk2-q18',
      question: 'Particle starting from rest travels $s_1$ in first $10 \\text{ s}$ and $s_2$ in next $10 \\text{ s}$. Relation:',
      options: ['$s_2 = s_1$', '$s_2 = 2s_1$', '$s_2 = 3s_1$', '$s_2 = 4s_1$'],
      answer: 2,
      explanation: '$s_1 = 0.5a(100) = 50a$.\n\n$s_1+s_2 = 0.5a(400) = 200a$.\n\n$s_2 = 150a = 3s_1$.'
    },
    {
      id: 'pk2-q19',
      question: 'If $y = Ax - Bx^2$ is trajectory, max height is:',
      options: ['$A^2/B$', '$A^2/2B$', '$A^2/4B$', '$A/2B$'],
      answer: 2,
      explanation: 'Max height at $x = A/2B$.\n\n$y = A(A/2B) - B(A/2B)^2 = A^2/2B - A^2/4B = A^2/4B$.'
    },
    {
      id: 'pk2-q20',
      question: 'Velocity $v$ as function of height $h$ for vertical throw is (graph):',
      options: ['Straight line', 'Parabola along h-axis', 'Parabola along v-axis', 'Circle'],
      answer: 1,
      explanation: '$v^2 = u^2 - 2gh \\implies h = (u^2 - v^2)/2g$.\n\nThis is a parabola opening along $h$-axis.'
    },
    {
      id: 'pk2-q21',
      question: 'Dropped from $H$ reaches ground in $t$. From $H/2$, time taken is:',
      options: ['$t/2$', '$t/\\sqrt{2}$', '$\\sqrt{2}t$', '$t/4$'],
      answer: 1,
      explanation: '$t \\propto \\sqrt{H}$.\n\nRatio $= \\sqrt{(H/2)/H} = 1/\\sqrt{2}$.'
    },
    {
      id: 'pk2-q22',
      question: 'Velocity $v = v_0 + gt + ft^2$. If $x(0)=0$, displacement at $t=1$ is:',
      options: ['$v_0 + g/2 + f/3$', '$v_0 + g + f$', '$v_0 + g/2 + f$', '$v_0/2 + g/2 + f/3$'],
      answer: 0,
      explanation: '$\\int_0^1 (v_0 + gt + ft^2) dt = [v_0t + gt^2/2 + ft^3/3]_0^1$.\n\n$= v_0 + g/2 + f/3$.'
    },
    {
      id: 'pk2-q23',
      question: 'Rain $30 \\text{ m/s}$ down. Woman $10 \\text{ m/s}$ North to South. Umbrella direction?',
      options: ['$\\tan^{-1}(3)$ vertical', '$\\tan^{-1}(1/3)$ South vertical', '$\\tan^{-1}(1/3)$ North vertical', '$\\tan^{-1}(3)$ North vertical'],
      answer: 1,
      explanation: '$\\vec{v}_{rw} = -30\\hat{k} + 10\\hat{j}$.\n\nRelative to her, rain comes North to South (downwards and forward).\n\nShe tilts it South (forward) at $\\tan\\theta = 10/30 = 1/3$.'
    },
    {
      id: 'pk2-q24',
      question: 'Condition for collision between two particles with $v_1, v_2$ and $r_1, r_2$:',
      options: ['$(\\vec{r}_1 - \\vec{r}_2)/|\\vec{r}_1 - \\vec{r}_2| = (\\vec{v}_2 - \\vec{v}_1)/|\\vec{v}_2 - \\vec{v}_1|$', '$\\vec{r}_1 \\cdot \\vec{v}_1 = \\vec{r}_2 \\cdot \\vec{v}_2$', '$\\vec{r}_1 \\times \\vec{v}_1 = \\vec{r}_2 \\times \\vec{v}_2$', '$\\vec{r}_1 - \\vec{r}_2 = \\vec{v}_1 - \\vec{v}_2$'],
      answer: 0,
      explanation: '$\\vec{r}_1 + \\vec{v}_1t = \\vec{r}_2 + \\vec{v}_2 t \\implies \\vec{r}_1 - \\vec{r}_2 = (\\vec{v}_2 - \\vec{v}_1)t$.\n\nSince $t>0$, unit vectors must be same.'
    },
    {
      id: 'pk2-q25',
      question: 'Particle in circle radius $R$ constant speed $v$. Average velocity between points at $60^\\circ$ center:',
      options: ['$3v/\\pi$', '$v/\\pi$', '$2v/\\pi$', '$v/2$'],
      answer: 0,
      explanation: 'Displacement = $R$.\n\nTime $t = \\text{arc length}/v = (R\\pi/3)/v = \\pi R / 3v$.\n\n$v_{avg} = R / (\\pi R / 3v) = 3v/\\pi$.'
    },
    {
      id: 'pk2-q26',
      question: 'Initial velocity $\\hat{i} + 2\\hat{j}$. Trajectory equation ($g=10$):',
      options: ['$y = x - 5x^2$', '$y = 2x - 5x^2$', '$y = 2x - 25x^2$', '$y = 2x - 2.5x^2$'],
      answer: 1,
      explanation: '$x = t, y = 2t - 5t^2 \\implies y = 2x - 5x^2$.'
    },
    {
      id: 'pk2-q27',
      question: 'One-D motion $x^2 = at^2 + 2bt + c$. Acceleration varies as:',
      options: ['$x^{-3}$', '$x^{-3/2}$', '$x^{-2}$', '$x^{-1}$'],
      answer: 0,
      explanation: 'Differentiating twice leads to $a = (ac - b^2)/x^3$.'
    },
    {
      id: 'pk2-q28',
      question: 'Upward object has $v_1$ at $h$ and $v_2$ at $2h$. If $v_1 = 2v_2$, max height is:',
      options: ['$2.5h$', '$2.33h$', '$2.67h$', '$3h$'],
      answer: 1,
      explanation: '$v_1^2 = u^2 - 2gh, v_2^2 = u^2 - 4gh$.\n\n$4v_2^2 = v_1^2 \\implies 4u^2 - 16gh = u^2 - 2gh$.\n\n$3u^2 = 14gh \\implies H = u^2/2g = 7/3(h) \\approx 2.33h$.'
    },
    {
      id: 'pk2-q29',
      question: 'Boat crosses port A to B on opposite sides. Shortest path time $T$. River width?',
      options: ['$T \\sqrt{v_B^2 - v_W^2}$', '$T \\sqrt{v_W^2 - v_B^2}$', '$T(v_B - v_W)$', '$T(v_B + v_W)$'],
      answer: 0,
      explanation: 'Net velocity $= \\sqrt{v_B^2 - v_W^2}$.\n\nWidth $= \\text{Net Vel} \\times T$.'
    },
    {
      id: 'pk2-q30',
      question: 'Projectile thrown over triangle base $R$, grazing vertex $(x, y)$ with base angles $\\alpha, \\beta$ and projection $\\theta$:',
      options: ['$\\tan\\theta = \\tan\\alpha + \\tan\\beta$', '$\\tan\\theta = \\tan\\alpha - \\tan\\beta$', '$\\tan\\theta = \\cot\\alpha + \\cot\\beta$', '$\\tan\\theta = \\sin\\alpha + \\sin\\beta$'],
      answer: 0,
      explanation: 'From $y = x(R-x)\\tan\\theta / R$,\nwe get $\\tan\\theta = y/x + y/(R-x) = \\tan\\alpha + \\tan\\beta$.'
    },
    {
      id: 'pk2-q31',
      question: 'Speed $v = b\\sqrt{x}$ along x-axis. Speed at time $t = \\tau$ (if $x(0)=0$):',
      options: ['$b^2 \\tau / 2$', '$b^2 \\tau$', '$b^2 \\tau^2 / 2$', '$b \\tau / 2$'],
      answer: 0,
      explanation: '$\\int x^{-1/2} dx = \\int b dt \\implies 2\\sqrt{x} = b\\tau$.\n\nThen $v = b\\sqrt{x} = b(b\\tau/2) = b^2\\tau/2$.'
    },
    {
      id: 'pk2-q32',
      question: 'Balloon moving at $u$ up. Stone dropped at $h$ hits ground in $t$. Then $h$ is:',
      options: ['$h = ut + \\frac{1}{2}gt^2$', '$h = \\frac{1}{2}gt^2 - ut$', '$h = ut - \\frac{1}{2}gt^2$', '$h = gt^2 - ut$'],
      answer: 1,
      explanation: 'Displacement $-h = ut - 0.5gt^2 \\implies h = 0.5gt^2 - ut$.'
    },
    {
      id: 'pk2-q33',
      question: 'Two projectiles range same, speeds same. Ratio of max heights $H_1 / H_2$:',
      options: ['$\\tan^2\\theta_1$', '$\\cot^2\\theta_1$', '$1$', '$\\sin^2\\theta_1$'],
      answer: 0,
      explanation: '$\theta_2 = 90 - \theta_1$.\n\n$H_1/H_2 = \\sin^2\\theta_1 / \\sin^2(90-\\theta_1) = \\tan^2\\theta_1$.'
    },
    {
      id: 'pk2-q34',
      question: 'Range $R$ and time $T$ of projectile. Angle of projection:',
      options: ['$\\tan^{-1}(gT^2 / 2R)$', '$\\tan^{-1}(gT^2 / R)$', '$\\tan^{-1}(2R / gT^2)$', '$\\tan^{-1}(R / gT^2)$'],
      answer: 0,
      explanation: 'From $T = 2u\\sin\\theta/g$ and $R = (2u^2\\sin\\theta\\cos\\theta)/g$,\nratio gives $\\tan\\theta = gT^2/2R$.'
    },
    {
      id: 'pk2-q35',
      question: 'Balls dropped from $h_1, h_2$ hit ground simultaneously. Time difference in drops:',
      options: ['$\\sqrt{2h_1/g} - \\sqrt{2h_2/g}$', '$\\sqrt{(h_1-h_2)/g}$', '$\\sqrt{h_1^2-h_2^2/g^2}$', '$(h_1-h_2)/g$'],
      answer: 0,
      explanation: '$\Delta t = |t_1 - t_2| = |\\sqrt{2h_1/g} - \\sqrt{2h_2/g}|$.'
    },
    {
      id: 'pk2-q36',
      question: 'Initial velocity $\\vec{v}_0 = \\hat{i} + 2\\hat{j}$. Cartesian equation ($g=10$):',
      options: ['$y = 2x - 5x^2$', '$y = 2x - 5x^2$', '$y = 2x - 2.5x^2$', '$y = x - 2.5x^2$'],
      answer: 0,
      explanation: 'Corrected values: $u_x=1, u_y=2 \\implies y = 2x - 5x^2$.'
    },
    {
      id: 'pk2-q37',
      question: 'Starting from rest in circle radius $R$, tangential acceleration $a_t$. Time when $a_c = a_t$:',
      options: ['$\\sqrt{R/a_t}$', '$\\sqrt{2R/a_t}$', '$R/a_t$', '$a_t/R$'],
      answer: 0,
      explanation: '$v = a_t t$, $a_c = v^2/R = a_t^2 t^2 / R$.\n\nSetting $a_c = a_t \\implies t^2 = R/a_t$.'
    },
    {
      id: 'pk2-q38',
      question: 'In uniform circular motion, $\\vec{v}$ and $\\vec{a}$ are:',
      options: ['Always perpendicular', 'Always parallel', 'At $45^\\circ$', 'At varying angle'],
      answer: 0,
      explanation: 'Velocity is tangential, acceleration is radial.'
    },
    {
      id: 'pk2-q39',
      question: 'Range $R = 4\\sqrt{3} H$. Angle of projection:',
      options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
      answer: 0,
      explanation: '$\\tan\\theta = 4H/R = 4/(4\\sqrt{3}) = 1/\\sqrt{3} \\implies \\theta = 30^\\circ$.'
    },
    {
      id: 'pk2-q40',
      question: 'Velocity at max height is half of initial. Angle of projection:',
      options: ['$60^\\circ$', '$30^\\circ$', '$45^\\circ$',' $75^\\circ$'],
      answer: 0,
      explanation: '$u\\cos\\theta = u/2 \\implies \\cos\\theta = 1/2 \\implies \\theta = 60^\\circ$.'
    },
    {
      id: 'pk2-q41',
      question: 'Displacement $s = t^3 - 6t^2 + 3t + 4$. Velocity when acceleration is 0:',
      options: ['$-9 \\text{ m/s}$', '$-12 \\text{ m/s}$', '$3 \\text{ m/s}$', '$42 \\text{ m/s}$'],
      answer: 0,
      explanation: '$a = 6t-12 = 0 \\implies t=2$.\n\n$v(2) = 3(4)-24+3 = -9$.'
    },
    {
      id: 'pk2-q42',
      question: 'Bus $10 \\text{ m/s}$, Scooterist seeks to overtake in $100 \\text{ s}$ from $1 \\text{ km}$ behind. Speed needed?',
      options: ['$20 \\text{ m/s}$', '$10 \\text{ m/s}$', '$30 \\text{ m/s}$', '$40 \\text{ m/s}$'],
      answer: 0,
      explanation: '$v_{rel} = 1000/100 = 10 \\text{ m/s}$.\n\n$v - 10 = 10 \\implies v = 20 \\text{ m/s}$.'
    },
    {
      id: 'pk2-q43',
      question: 'Train $100 \\text{ m}$ long speed $60 \\text{ km/h}$. Time to cross $1 \\text{ km}$ bridge:',
      options: ['$66 \\text{ s}$', '$60 \\text{ s}$', '$6 \\text{ s}$', '$72 \\text{ s}$'],
      answer: 0,
      explanation: '$d = 1100$, $v = 60(5/18) = 50/3$.\n\n$t = 1100 / (50/3) = 66 \\text{ s}$.'
    },
    {
      id: 'pk2-q44',
      question: 'Stone thrown up. At height $H/2$, speed is $10 \\text{ m/s}$. Max height attained? ($g=10$):',
      options: ['$10 \\text{ m}$', '$15 \\text{ m}$', '$20 \\text{ m}$', '$5 \\text{ m}$'],
      answer: 0,
      explanation: '$v^2 = u^2 - 2g(H/2) \\implies 100 = 2gH - gH = gH$.\n\nThus, $H = 10 \\text{ m}$.'
    },
    {
      id: 'pk2-q45',
      question: 'Equation $s = \\frac{1}{2}gt^2$ represents:',
      options: ['Dropped from rest', 'Thrown upwards', 'Uniform velocity', 'SHM'],
      answer: 0,
      explanation: 'It derives from $s = ut + 0.5at^2$ with $u=0, a=g$.'
    },
    {
      id: 'pk2-q46',
      question: 'Magnitudes $3, 4$, dot product $6$. Magnitude of cross product?',
      options: ['$6\\sqrt{3}$', '$6$', '$12$', '$6\\sqrt{2}$'],
      answer: 0,
      explanation: '$\\cos\\theta = 6/(3*4) = 1/2 \\implies \\theta = 60^\\circ$.\n\n$|v_1 \\times v_2| = 3*4*(\\sqrt{3}/2) = 6\\sqrt{3}$.'
    },
    {
      id: 'pk2-q47',
      question: 'Particle moves East $5 \\text{ m/s}$, in $10 \\text{ s}$ changes to North $5 \\text{ m/s}$. Average acceleration:',
      options: ['$\\frac{1}{\\sqrt{2}} \\text{ m/s}^2$ North-West', '$\\frac{1}{\\sqrt{2}} \\text{ m/s}^2$ North-East', '$\\frac{1}{2} \\text{ m/s}^2$ North-West', 'Zero'],
      answer: 0,
      explanation: '$\\vec{a} = (5\\hat{j} - 5\\hat{i})/10 = -0.5\\hat{i} + 0.5\\hat{j}$.\n\nMagnitude $= \\sqrt{0.5^2+0.5^2} = 1/\\sqrt{2}$.\n\nDirection North-West.'
    },
    {
      id: 'pk2-q48',
      question: 'Ratio of max height to square of time of flight for projectile:',
      options: ['$g/8$', '$g/4$', '$g/2$', '$g$'],
      answer: 0,
      explanation: '$H/T^2 = (u^2\\sin^2\\theta/2g) / (4u^2\\sin^2\\theta/g^2) = g/8$.'
    },
    {
      id: 'pk2-q49',
      question: 'Half distance at $v_1$, second half at $v_2$. Average speed:',
      options: ['$2v_1v_2/(v_1+v_2)$', '$(v_1+v_2)/2$', '$\\sqrt{v_1v_2}$', '$v_1v_2/(v_1+v_2)$'],
      answer: 0,
      explanation: 'Harmonic mean of speeds for equal distances.'
    },
    {
      id: 'pk2-q50',
      question: 'Freely falling crosses A at $v$. Velocity after further $h$ is:',
      options: ['$\\sqrt{v^2 + 2gh}$', '$v + \\sqrt{2gh}$', '$v^2 + 2gh$', '$\\sqrt{v^2 - 2gh}$'],
      answer: 0,
      explanation: '$V^2 = v^2 + 2gh$.'
    }
  ]
};

export default kinematicsSet02;
