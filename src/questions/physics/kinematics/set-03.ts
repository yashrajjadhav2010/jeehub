import { QuizSet } from '../../../types';

const kinematicsSet03: QuizSet = {
  id: 'set-03',
  title: 'Kinematics - Set 03',
  chapterId: 'kinematics',
  subjectId: 'physics',
  difficulty: 'hard',
  questions: [
    {
      id: 'pk3-q1',
      question: 'A particle moves along the x-axis with velocity $v = \\alpha \\sqrt{x}$, where $\\alpha$ is a positive constant. What is the average velocity of the particle averaged over the distance from $x=0$ to $x=x_0$?',
      options: ['$\\frac{\\alpha \\sqrt{x_0}}{2}$', '$\\frac{2\\alpha \\sqrt{x_0}}{3}$', '$\\alpha \\sqrt{x_0}$', '$\\frac{\\alpha \\sqrt{x_0}}{\\sqrt{2}}$'],
      answer: 1,
      explanation: 'Average velocity over a distance $x_0$ is defined as:\n$v_{avg} = \\frac{\\text{Total distance}}{\\text{Total time}} = \\frac{x_0}{t_0}$, where $t_0 = \\int_0^{x_0} \\frac{dx}{v}$.\n\nAlternatively, if we average over distance:\n$v_{avg, \text{ dist}} = \\frac{\\int v \\, dx}{\\int dx}$.\n\nCalculating the integral over distance:\n$\\int_0^{x_0} v \\, dx = \\int_0^{x_0} \\alpha x^{1/2} \\, dx = \\alpha \\left[ \\frac{2}{3}x^{3/2} \\right]_0^{x_0} = \\frac{2}{3}\\alpha x_0^{3/2}$.\n\nTotal distance is $\\int_0^{x_0} dx = x_0$.\n\nThus, $v_{avg} = \\frac{\\frac{2}{3}\\alpha x_0^{3/2}}{x_0} = \\frac{2}{3}\\alpha \\sqrt{x_0}$.'
    },
    {
      id: 'pk3-q2',
      question: 'A particle moves such that its acceleration is $a = -k \\sqrt{v}$, where $v$ is velocity and $k$ is a constant. If initial velocity is $v_0$, the distance travelled before it comes to rest is:',
      options: ['$\\frac{2v_0^{3/2}}{3k}$', '$\\frac{v_0^{3/2}}{k}$', '$\\frac{2v_0^{5/2}}{5k}$', '$\\frac{v_0^2}{2k}$'],
      answer: 0,
      explanation: 'Use $a = v \\frac{dv}{dx} = -k \\sqrt{v}$.\n\n$\\sqrt{v} \\, dv = -k \\, dx$.\n\nIntegrate from $v = v_0$ to $0$, and $x = 0$ to $x_f$:\n\n$\\int_{v_0}^0 v^{1/2} \\, dv = -k \\int_0^{x_f} dx$.\n\n$\\left[ \\frac{2}{3}v^{3/2} \\right]_{v_0}^0 = -k x_f$.\n\n$0 - \\frac{2}{3}v_0^{3/2} = -k x_f \\implies x_f = \\frac{2v_0^{3/2}}{3k}$.'
    },
    {
      id: 'pk3-q3',
      question: 'A particle\'s coordinates are $x = A\\sin(\\omega t)$, $y = A\\cos(\\omega t)$, and $z = bt$. The magnitude of its acceleration is:',
      options: ['$A\\omega^2$', '$\\sqrt{A^2\\omega^4 + b^2}$', '$A\\omega$', '$A\\omega^2 + b$'],
      answer: 0,
      explanation: 'Differentiate to find velocity components:\n$v_x = A\\omega\\cos(\\omega t)$,\n$v_y = -A\\omega\\sin(\\omega t)$,\n$v_z = b$.\n\nDifferentiate again for acceleration:\n$a_x = -A\\omega^2\\sin(\\omega t)$,\n$a_y = -A\\omega^2\\cos(\\omega t)$,\n$a_z = 0$.\n\nMagnitude $|a| = \\sqrt{(-A\\omega^2\\sin\\omega t)^2 + (-A\\omega^2\\cos\\omega t)^2 + 0^2}$\n$= \\sqrt{A^2\\omega^4(\\sin^2\\omega t + \\cos^2\\omega t)} = A\\omega^2$.'
    },
    {
      id: 'pk3-q4',
      question: 'The retardation of a particle is given by $a = -\\alpha v^2$. If the initial velocity is $u$, the velocity $v$ as a function of time $t$ is:',
      options: ['$v = \\frac{u}{1+\\alpha ut}$', '$v = u e^{-\\alpha t}$', '$v = \\frac{u}{\\sqrt{1+2\\alpha ut}}$', '$v = u - \\alpha t^2$'],
      answer: 0,
      explanation: '$\\frac{dv}{dt} = -\\alpha v^2 \\implies \\frac{dv}{v^2} = -\\alpha \\, dt$.\n\nIntegrate from $u$ to $v$ and $0$ to $t$:\n\n$\\int_u^v v^{-2} \\, dv = -\\alpha \\int_0^t dt$.\n\n$\\left[ -\\frac{1}{v} \\right]_u^v = -\\alpha t$.\n\n$-\\frac{1}{v} + \\frac{1}{u} = -\\alpha t$.\n\n$\\frac{1}{v} = \\frac{1}{u} + \\alpha t = \\frac{1+\\alpha ut}{u}$.\n\nTherefore, $v = \\frac{u}{1+\\alpha ut}$.'
    },
    {
      id: 'pk3-q5',
      question: 'A point moves such that its distance from the origin at any time is $r = a e^{bt}$. If the angle it makes with the x-axis is $\\theta = ct$, the radial and transverse components of its velocity are respectively:',
      options: ['$ab e^{bt}$ and $ac e^{bt}$', '$a e^{bt}$ and $abc e^{bt}$', '$b e^{bt}$ and $c e^{bt}$', '$ab e^{bt}$ and $a(b+c)e^{bt}$'],
      answer: 0,
      explanation: 'In polar coordinates, velocity components are $v_r = \\dot{r}$ and $v_\\theta = r\\dot{\\theta}$.\n\nGiven $r = a e^{bt}$, differentiating yields $v_r = \\dot{r} = ab e^{bt}$.\n\nGiven $\\theta = ct$, differentiating yields $\\dot{\\theta} = c$.\n\nThe transverse velocity is $v_\\theta = r\\dot{\\theta} = (a e^{bt})(c) = ac e^{bt}$.'
    },
    {
      id: 'pk3-q6',
      question: 'A particle starts from rest with acceleration $a = k/x^2$ where $x$ is the distance from the origin. If it starts at $x=x_0$, its velocity $v$ at position $x$ is proportional to:',
      options: ['$\\sqrt{\\frac{x - x_0}{x x_0}}$', '$\\sqrt{\\frac{x_0 - x}{x x_0}}$', '$\\sqrt{\\frac{1}{x} - \\frac{1}{x_0}}$', '$\\sqrt{\\frac{1}{x_0} - \\frac{1}{x}}$'],
      answer: 3,
      explanation: '$v \\frac{dv}{dx} = \\frac{k}{x^2} \\implies v \\, dv = \\frac{k}{x^2} \\, dx$.\n\nIntegrate from $v=0$ to $v$ and $x=x_0$ to $x$:\n\n$\\frac{v^2}{2} = \\left[ -\\frac{k}{x} \\right]_{x_0}^x = -\\frac{k}{x} - \\left(-\\frac{k}{x_0}\\right) = k\\left(\\frac{1}{x_0} - \\frac{1}{x}\\right)$.\n\nTherefore, $v = \\sqrt{2k} \\sqrt{\\frac{1}{x_0} - \\frac{1}{x}}$.\n\nThus, $v \\propto \\sqrt{\\frac{1}{x_0} - \\frac{1}{x}}$.'
    },
    {
      id: 'pk3-q7',
      question: 'A car moves along a straight line such that its velocity $v$ depends on position $s$ as $v = \\alpha - \\beta s$. The time taken by the car to come to rest from $s=0$ is:',
      options: ['$1/\\beta$', '$\\infty$', '$1/\\alpha$', '$\\alpha/\\beta$'],
      answer: 1,
      explanation: '$v = \\frac{ds}{dt} = \\alpha - \\beta s \\implies \\frac{ds}{\\alpha - \\beta s} = dt$.\n\nIntegrate from $s=0$ to $s = \\alpha/\\beta$ (where $v=0$):\n\n$\\int_0^{\\alpha/\\beta} \\frac{ds}{\\alpha - \\beta s} = \\int_0^t dt$.\n\n$\\left[ -\\frac{1}{\\beta} \\ln(\\alpha - \\beta s) \\right]_0^{\\alpha/\\beta} = t$.\n\n$t = -\\frac{1}{\\beta} [\\ln(0) - \\ln(\\alpha)]$.\n\nSince $\\ln(0) \\to -\\infty$, the time taken is infinite.'
    },
    {
      id: 'pk3-q8',
      question: 'A particle\'s acceleration is $a = -\\omega^2 x$. If $v = 0$ at $x = A$, what is the expression for velocity $v$ in terms of $x$?',
      options: ['$v = \\pm \\omega \\sqrt{A^2 - x^2}$', '$v = \\pm \\omega(A - x)$', '$v = \\pm \\omega \\sqrt{x^2 - A^2}$', '$v = -\\omega x$'],
      answer: 0,
      explanation: '$v \\frac{dv}{dx} = -\\omega^2 x \\implies v \\, dv = -\\omega^2 x \\, dx$.\n\nIntegrate from $v=0$ to $v$ and $x=A$ to $x$:\n\n$\\int_0^v v \\, dv = -\\omega^2 \\int_A^x x \\, dx$.\n\n$\\frac{v^2}{2} = -\\omega^2 \\left( \\frac{x^2}{2} - \\frac{A^2}{2} \\right) = \\frac{\\omega^2}{2} (A^2 - x^2)$.\n\nThus, $v^2 = \\omega^2(A^2 - x^2) \\implies v = \\pm \\omega \\sqrt{A^2 - x^2}$.'
    },
    {
      id: 'pk3-q9',
      question: 'If the equation of a 1D motion is $t = \\alpha x^2 + \\beta x$, the retardation of the particle is:',
      options: ['$2\\alpha v^3$', '$2\\alpha v^2$', '$2\\beta v^3$', '$2\\beta v^2$'],
      answer: 0,
      explanation: 'Differentiate with respect to $t$:\n$1 = 2\\alpha x \\frac{dx}{dt} + \\beta \\frac{dx}{dt} = (2\\alpha x + \\beta)v$.\n\nSo, $v = (2\\alpha x + \\beta)^{-1}$.\n\nAcceleration $a = \\frac{dv}{dt} = \\frac{dv}{dx} \\frac{dx}{dt} = v \\frac{dv}{dx}$.\n\n$\\frac{dv}{dx} = -(2\\alpha x + \\beta)^{-2} (2\\alpha) = -2\\alpha v^2$.\n\nThus, $a = v (-2\\alpha v^2) = -2\\alpha v^3$.\n\nRetardation is the negative of acceleration, hence $2\\alpha v^3$.'
    },
    {
      id: 'pk3-q10',
      question: 'The velocity of a particle is $v = a \\hat{i} + b x \\hat{j}$. The equation of its trajectory, assuming it starts from the origin, is:',
      options: ['$y = \\frac{b}{2a} x^2$', '$y = \\frac{a}{2b} x^2$', '$y = \\frac{b}{a} x^2$', '$y = \\frac{b}{2a} x$'],
      answer: 0,
      explanation: '$v_x = \\frac{dx}{dt} = a \implies dx = a \\, dt \implies x = at$ (since $x(0)=0$).\n\n$v_y = \\frac{dy}{dt} = bx$.\n\nSubstitute $t$: $v_y = \\frac{dy}{dx} \\frac{dx}{dt} = a \\frac{dy}{dx} = bx$.\n\nSo $a \\, dy = bx \\, dx$.\n\nIntegrate: $a y = \\frac{b}{2} x^2 \\implies y = \\frac{b}{2a} x^2$.'
    },
    {
      id: 'pk3-q11',
      question: 'Three particles A, B, and C are situated at the vertices of an equilateral triangle of side $L$. Each moves with constant speed $v$. A points towards B, B towards C, C towards A. The trajectory is:',
      options: ['Spiral', 'Circle', 'Straight line', 'Ellipse'],
      answer: 0,
      explanation: 'Due to the continuous changing of direction strictly towards the adjacent moving vertex, the velocity vector continuously rotates.\n\nThe particles spiral inwards, perfectly preserving the equilateral triangle shape, eventually meeting at the centroid.\n\nThe mathematical curve is a logarithmic spiral.'
    },
    {
      id: 'pk3-q12',
      question: 'In the previous problem, what is the time taken by the particles to meet?',
      options: ['$\\frac{2L}{3v}$', '$\\frac{L}{v}$', '$\\frac{L}{\\sqrt{3}v}$', '$\\frac{3L}{2v}$'],
      answer: 0,
      explanation: 'Analyze the relative velocity of approach between A and B.\n\nA moves directly towards B with speed $v$.\n\nB moves towards C at an angle of $120^\\circ$ relative to the line connecting A and B.\n\nThe component of B\'s velocity along the line AB is $v \\cos(120^\\circ) = -v/2$.\n\nRelative speed of approach $v_{app} = v_A - v_{B, \\text{along AB}} = v - (-v/2) = 3v/2$.\n\nTime $t = L/(3v/2) = 2L/3v$.'
    },
    {
      id: 'pk3-q13',
      question: 'Six particles are situated at the vertices of a regular hexagon of side $a$. Each moves with speed $v$ towards the next. The time they take to meet is:',
      options: ['$\\frac{2a}{v}$', '$\\frac{a}{v}$', '$\\frac{a}{2v}$', '$\\frac{\\sqrt{3}a}{v}$'],
      answer: 0,
      explanation: 'For a regular hexagon, the interior angle is $120^\\circ$ and the exterior angle is $60^\\circ$.\n\nIf particle A is moving towards B, and B is moving towards C, the velocity of B makes an angle of $60^\\circ$ with the line AB.\n\nThe component of B\'s velocity along the line AB (moving away from A) is $v \\cos(60^\\circ)$.\n\nThe net rate of decrease of the distance between them (velocity of approach) is:\n$v_{app} = v_A - v_{B, \\text{along AB}} = v - v \\cos(60^\\circ) = v - v/2 = v/2$.\n\nTime to meet is $t = \\frac{\\text{Initial separation}}{\\text{Approach velocity}} = \\frac{a}{v/2} = \\frac{2a}{v}$.'
    },
    {
      id: 'pk3-q14',
      question: 'A ship A moves West at $10 \\text{ km/h}$. Ship B, $100 \\text{ km}$ South of A, moves North at $10 \\text{ km/h}$. After what time is the distance shortest?',
      options: ['$5 \\text{ h}$', '$5\\sqrt{2} \\text{ h}$', '$10 \\text{ h}$', '$0 \\text{ h}$'],
      answer: 0,
      explanation: 'The relative velocity of ship B with respect to A is:\n$\\vec{v}_{BA} = \\vec{v}_B - \\vec{v}_A = (10\\hat{j}) - (-10\\hat{i}) = 10\\hat{i} + 10\\hat{j}$.\n\nInitial relative position is $\\vec{r}_{BA,0} = \\vec{r}_{B,0} - \\vec{r}_{A,0} = -100\\hat{j}$.\n\nRelative position at time $t$ is:\n$\\vec{r}_{BA}(t) = \\vec{r}_{BA,0} + \\vec{v}_{BA}t = -100\\hat{j} + (10t\\hat{i} + 10t\\hat{j}) = 10t\\hat{i} + (10t - 100)\\hat{j}$.\n\nThe square of the distance is:\n$D^2 = (10t)^2 + (10t - 100)^2 = 100t^2 + 100t^2 - 2000t + 10000 = 200t^2 - 2000t + 10000$.\n\nSetting derivative with respect to $t$ to zero:\n$d(D^2)/dt = 400t - 2000 = 0 \\implies t = 5 \\text{ h}$.'
    },
    {
      id: 'pk3-q15',
      question: 'In the previous problem, the shortest distance between the ships is:',
      options: ['$50\\sqrt{2} \\text{ km}$', '$50 \\text{ km}$', '$100/\\sqrt{2} \\text{ km}$', 'Both A and C'],
      answer: 3,
      explanation: 'At $t=5$, $D^2 = 50^2 + (50-100)^2 = 2500 + 2500 = 5000$.\n\nThus $D = \\sqrt{5000} = 50\\sqrt{2} \\text{ km}$.\n\nNote that $100/\\sqrt{2} = 50\\sqrt{2}$, so both A and C are correct.'
    },
    {
      id: 'pk3-q16',
      question: 'A river flows with $v_r = v_0 (1 - y^2/d^2)$ where $d$ is half-width and $y$ from center. A boat swims with constant speed $u$ across. The drift is:',
      options: ['$\\frac{2v_0 d}{3u}$', '$\\frac{4v_0 d}{3u}$', '$\\frac{v_0 d}{u}$', '$\\frac{v_0 d}{3u}$'],
      answer: 1,
      explanation: 'The motion is across the river (y-direction) and along the river (x-direction).\n\nTime to cross: $dt = dy/u$.\n\nThe boat\'s velocity in the x-direction is the river velocity: $v_x(y) = v_0 (1 - y^2/d^2)$.\n\nTotal drift $x = \\int_{-d}^d v_x(y) \\, dt = \\int_{-d}^d v_0 (1 - y^2/d^2) \\frac{dy}{u}$.\n\nEvaluating the integral:\n$x = \\frac{v_0}{u} \\left[ y - \\frac{y^3}{3d^2} \\right]_{-d}^d = \\frac{v_0}{u} \\left[ (d - d/3) - (-d + d/3) \\right]$\n\n$x = \\frac{v_0}{u} \\left[ \\frac{2d}{3} + \\frac{2d}{3} \\right] = \\frac{4v_0 d}{3u}$.'
    },
    {
      id: 'pk3-q17',
      question: 'Two particles collide at time $t$. Which relation is true?',
      options: ['$(\\vec{r}_1 - \\vec{r}_2) \\times (\\vec{v}_1 - \\vec{v}_2) = 0$', '$(\\vec{r}_1 - \\vec{r}_2) \\cdot (\\vec{v}_1 - \\vec{v}_2) = 0$', '$|\\vec{r}_1 - \\vec{r}_2| = |\\vec{v}_1 - \\vec{v}_2|t$', 'Both A and C'],
      answer: 3,
      explanation: 'Collision means $\\vec{r}_1 - \\vec{r}_2 = t(\\vec{v}_2 - \\vec{v}_1)$.\n\nThis implies vectors are parallel (cross product 0) and magnitude equality holds.'
    },
    {
      id: 'pk3-q18',
      question: 'A dog at $v$ chasing rabbit at $u$ ($v>u$) along straight line. Perpendicular sep $L$. Dog catches rabbit in time:',
      options: ['$\\frac{v L}{v^2 - u^2}$', '$\\frac{u L}{v^2 - u^2}$', '$\\frac{L}{v - u}$', '$\\frac{L}{\\sqrt{v^2 - u^2}}$'],
      answer: 0,
      explanation: 'Solving the differential equation for pure pursuit where dog\'s velocity always points to rabbit yields:\n\nCapture time $T = vL/(v^2 - u^2)$.'
    },
    {
      id: 'pk3-q19',
      question: 'Plane goes North distance $L$ with airspeed $v$ in East wind $w$. Round trip time?',
      options: ['$\\frac{2vL}{v^2 - w^2}$', '$\\frac{2L}{\\sqrt{v^2 - w^2}}$', '$\\frac{2vL}{v^2 + w^2}$', '$\\frac{L}{v-w} + \\frac{L}{v+w}$'],
      answer: 1,
      explanation: 'Northward velocity component $v_{net} = \\sqrt{v^2 - w^2}$.\n\nTotal time $= 2L / \\sqrt{v^2 - w^2}$.'
    },
    {
      id: 'pk3-q20',
      question: 'Two cars $20, 10 \\text{ m/s}$ move to $60^\\circ$ intersection from $200, 100 \\text{ m}$. Shortest distance?',
      options: ['$0 \\text{ m}$', '$50 \\text{ m}$', '$100 \\text{ m}$', '$25 \\text{ m}$'],
      answer: 0,
      explanation: 'Both cars reach the intersection at exactly $t=10 \\text{ s}$.\n\nThe shortest distance is 0.'
    },
    {
      id: 'pk3-q21',
      question: 'Projectile fired horizontally at $u$ from top of wedge inclination $\\alpha$. Distance along wedge?',
      options: ['$\\frac{2u^2 \\sin\\alpha}{g \\cos^2\\alpha}$', '$\\frac{2u^2 \\tan\\alpha}{g}$', '$\\frac{u^2 \\sin\\alpha}{g \\cos^2\\alpha}$', '$\\frac{2u^2}{g \\cos\\alpha}$'],
      answer: 0,
      explanation: 'Intersection of $y = -gx^2/2u^2$ and $y = -x\\tan\\alpha$.\n\n$x = 2u^2\\tan\\alpha/g$.\n\nDistance $L = x/\\cos\\alpha = 2u^2\\sin\\alpha / (g\\cos^2\\alpha)$.'
    },
    {
      id: 'pk3-q22',
      question: 'Projectile thrown up incline $\\theta$ at $\\alpha$ to horizontal. Hits plane horizontally. Condition?',
      options: ['$\\tan\\alpha = 2\\tan\\theta$', '$\\tan\\alpha = \\tan\\theta$', '$\\cot\\alpha = 2\\tan\\theta$', '$\\tan\\theta = 2\\tan\\alpha$'],
      answer: 0,
      explanation: 'Hits horizontally means it\'s at max height:\n$y = H, x = R_{horiz}/2$.\n\n$H/ (R/2) = \\tan\\theta$.\n\nSince $\\tan\\alpha = 4H/R$, we get $\\tan\\alpha = 2\\tan\\theta$.'
    },
    {
      id: 'pk3-q23',
      question: 'Ratio of radius of curvature at highest point ($\\rho_1$) and projection point ($\\rho_2$):',
      options: ['$\\cos^3\\theta$', '$\\cos^2\\theta$', '$\\sec^3\\theta$', '$\\sin^3\\theta$'],
      answer: 0,
      explanation: '$\\rho_1 = (u\\cos\\theta)^2/g$.\n\n$\\rho_2 = u^2/(g\\cos\\theta)$.\n\nRatio $= \\cos^3\\theta$.'
    },
    {
      id: 'pk3-q24',
      question: 'Time at which velocity is perpendicular to initial velocity $u$ at angle $\\theta$:',
      options: ['$\\frac{u}{g\\sin\\theta}$', '$\\frac{u}{g\\cos\\theta}$', '$\\frac{2u}{g\\sin\\theta}$', 'Never'],
      answer: 0,
      explanation: 'The initial velocity vector is:\n$\\vec{u} = u \\cos \\theta \\hat{i} + u \\sin \\theta \\hat{j}$.\n\nThe velocity at time $t$ is:\n$\\vec{v}(t) = u \\cos \\theta \\hat{i} + (u \\sin \\theta - gt) \\hat{j}$.\n\nFor $\\vec{v}(t)$ to be perpendicular to $\\vec{u}$, their dot product must be zero:\n$\\vec{u} \\cdot \\vec{v}(t) = (u \\cos \\theta)(u \\cos \\theta) + (u \\sin \\theta)(u \\sin \\theta - gt) = 0$.\n\n$u^2 \\cos^2 \\theta + u^2 \\sin^2 \\theta - u g t \\sin \\theta = 0$.\n\n$u^2 (\\cos^2 \\theta + \\sin^2 \\theta) = u g t \\sin \\theta$.\n\n$u^2 = u g t \\sin \\theta \\implies t = \\frac{u}{g \\sin \\theta}$.'
    },
    {
      id: 'pk3-q25',
      question: 'Speed of particle when velocity is perpendicular to initial velocity:',
      options: ['$u\\cot\\theta$', '$u\\tan\\theta$', '$u\\cos\\theta$', '$u$'],
      answer: 0,
      explanation: 'From the previous problem, at the time $t = u / (g \\sin \\theta)$, the velocity components are:\n$v_x = u \\cos \\theta$\n$v_y = u \\sin \\theta - g(u/g \\sin \\theta) = u \\sin \\theta - u / \\sin \\theta = \\frac{u \\sin^2 \\theta - u}{\\sin \\theta} = \\frac{-u \\cos^2 \\theta}{\\sin \\theta} = -u \\cos \\theta \\cot \\theta$.\n\nMagnitude $|v| = \\sqrt{v_x^2 + v_y^2} = \\sqrt{(u \\cos \\theta)^2 + (-u \\cos \\theta \\cot \\theta)^2}$\n$= u \\cos \\theta \\sqrt{1 + \\cot^2 \\theta} = u \\cos \\theta \\sqrt{\\csc^2 \\theta}$\n$= u \\cos \\theta \\csc \\theta = u \\cot \\theta$.'
    },
    {
      id: 'pk3-q26',
      question: 'Condition for max range up inclined plane angle $\\alpha$ launched at $\\theta$ to horizontal:',
      options: ['$\\theta = \\frac{\\pi}{4} + \\frac{\\alpha}{2}$', '$\\theta = \\frac{\\pi}{4} - \\frac{\\alpha}{2}$', '$\\theta = \\frac{\\pi}{2} - \\frac{\\alpha}{2}$', '$\\theta = \\frac{\\pi}{4}$'],
      answer: 0,
      explanation: 'Range $R \\propto \\sin(2\\theta-\\alpha) - \\sin\\alpha$.\n\nMax when $2\\theta-\\alpha = \\pi/2 \\implies \\theta = \\pi/4 + \\alpha/2$.'
    },
    {
      id: 'pk3-q27',
      question: 'Radius of curvature of $y = \\alpha x^2$ at origin:',
      options: ['$\\frac{1}{2\\alpha}$', '$\\frac{v_0^2}{2\\alpha}$', '$\\frac{1}{\\alpha}$', '$\\frac{v_0^2}{\\alpha}$'],
      answer: 0,
      explanation: '$\\rho = (1+y\'^2)^{3/2}/y\'\'$.\n\nAt $x=0, y\'=0, y\'\'=2\\alpha$.\n\nSo $\\rho = 1/2\\alpha$.'
    },
    {
      id: 'pk3-q28',
      question: 'Radius of curvature at max height for $y = x - x^2/40$:',
      options: ['$20 \\text{ m}$', '$40 \\text{ m}$', '$10 \\text{ m}$', '$80 \\text{ m}$'],
      answer: 0,
      explanation: 'At max height, $\\rho = 1/|y\'\'|$.\n\n$y\'\' = -1/20$.\n\nSo $\\rho = 20 \\text{ m}$.'
    },
    {
      id: 'pk3-q29',
      question: 'Throw ball horizontally from building A to B distance $d$ and depth $h$. Required speed $u$?',
      options: ['$d\\sqrt{\\frac{g}{2h}}$', '$d\\sqrt{\\frac{2g}{h}}$', '$\\frac{d}{h}\\sqrt{g}$', '$h\\sqrt{\\frac{g}{2d}}$'],
      answer: 0,
      explanation: '$t = \\sqrt{2h/g}$.\n\n$u = d/t = d\\sqrt{g/2h}$.'
    },
    {
      id: 'pk3-q30',
      question: 'Locus of vertices of projectiles with speed $u$ and varying angle $\\theta$:',
      options: ['Ellipse', 'Circle', 'Parabola', 'Hyperbola'],
      answer: 0,
      explanation: '$x = u^2\\sin 2\\theta / 2g$.\n$y = u^2\\sin^2\\theta / 2g$.\n\nThis leads to the ellipse equation $(x/(u^2/2g))^2 + ((y-u^2/4g)/(u^2/4g))^2 = 1$.'
    },
    {
      id: 'pk3-q31',
      question: 'Midpoint velocity of rod $L$ sliding on axes with end A speed $v$ at angle $\\theta$ with x-axis:',
      options: ['$\\frac{v}{2\\sin\\theta}$', '$\\frac{v}{2\\cos\\theta}$', '$v/2$', '$\\frac{v\\tan\\theta}{2}$'],
      answer: 0,
      explanation: '$x^2+y^2=L^2 \\implies \\dot{y} = -v\\cot\\theta$.\n\n$v_m = 0.5\\sqrt{v^2 + v^2\\cot^2\\theta} = v\\csc\\theta / 2 = v / (2\\sin\\theta)$.'
    },
    {
      id: 'pk3-q32',
      question: 'Pulley constraint $u$ and $v$ when string makes angle $\\theta$ with horizontal:',
      options: ['$u = v\\sin\\theta$', '$u = v\\cos\\theta$', '$v = u\\sin\\theta$', '$v = u\\cos\\theta$'],
      answer: 0,
      explanation: '$l^2 = y^2 + d^2 \implies 2l(dl/dt) = 2y(dy/dt) \implies l(-u) = y(-v)$.\n\n$u = v(y/l) = v\\sin\\theta$.'
    },
    {
      id: 'pk3-q33',
      question: 'Normal acceleration of particle $v = a \\hat{i} + b x \\hat{j}$ at origin:',
      options: ['$ab$', '$a^2/b$', '$b^2/a$', 'Zero'],
      answer: 0,
      explanation: 'At origin $x=0, v=a\\hat{i}$.\n\nAcceleration $a = b(dx/dt)\\hat{j} = ba\\hat{j}$.\n\nSince $a$ is perpendicular to $v$, normal acc $= ab$.'
    },
    {
      id: 'pk3-q34',
      question: 'Particle moves speed $v$ along $r = a(1+\\cos\\theta)$. Angular velocity $\\dot{\\theta}$ prop to:',
      options: ['$\\sec(\\theta/2)$', '$\\csc(\\theta/2)$', '$\\cos(\\theta/2)$', '$\\sin(\\theta/2)$'],
      answer: 0,
      explanation: '$v^2 = \\dot{r}^2 + r^2\\dot{\\theta}^2 = 4a^2\\dot{\\theta}^2\\cos^2(\\theta/2)$.\n\nFor constant $v$, $\\dot{\\theta} \\propto 1/\\cos(\\theta/2) = \\sec(\\theta/2)$.'
    },
    {
      id: 'pk3-q35',
      question: 'Acceleration magnitude on $y=x^2/2$ with constant $v_x=2$:',
      options: ['$4 \\text{ m/s}^2$', '$2 \\text{ m/s}^2$', '$8 \\text{ m/s}^2$', '$0$'],
      answer: 0,
      explanation: '$v_y = xv_x = 2x$.\n$a_y = 2v_x = 4$.\n$a_x = 0$.\n\nTotal magnitude $a=4$.'
    },
    {
      id: 'pk3-q36',
      question: 'Ball acceleration seen from elevator accelerating $g/2$ downwards:',
      options: ['$g/2$ downwards', '$3g/2$ downwards', '$g$ downwards', '$g/2$ upwards'],
      answer: 0,
      explanation: 'The relative velocity of the ball with respect to the elevator is:\n$\\vec{a}_{rel} = \\vec{a}_{ball} - \\vec{a}_{elevator}$.\n\nThe ball is in free fall, so $\\vec{a}_{ball} = g$ (downwards).\n\nThe elevator is moving with $\\vec{a}_{elevator} = g/2$ (downwards).\n\nTaking downwards as positive:\n$a_{rel} = g - g/2 = g/2$ (downwards).'
    },
    {
      id: 'pk3-q37',
      question: 'Time for min relative velocity between $v$ (uniform) and $a$ (starting rest from same point) at angle $\\theta$:',
      options: ['$\\frac{v\\cos\\theta}{a}$', '$\\frac{v\\sin\\theta}{a}$', '$\\frac{v}{a\\cos\\theta}$', '$v/a$'],
      answer: 0,
      explanation: '$V^2 = a^2t^2 - 2avt\\cos\\theta + v^2$.\n\nMinimized at $d(V^2)/dt = 0 \\implies 2a^2t = 2av\\cos\\theta$.\n\n$t = v\\cos\\theta/a$.'
    },
    {
      id: 'pk3-q38',
      question: 'Volume of safety paraboloid of revolution for projectile:',
      options: ['$\\frac{\\pi u^4}{2g^2}$', '$\\frac{\\pi u^4}{g^2}$', '$\\frac{\\pi u^2}{2g}$', '$0$'],
      answer: 0,
      explanation: 'Safety envelope $y = u^2/2g - gx^2/2u^2$.\n\nVolume $= \\int_0^{u^2/2g} \\pi x^2 dy$.\n\n$= \\int \\pi (2u^2/g)(u^2/2g - y) dy = \\pi u^4/2g^2$.'
    },
    {
      id: 'pk3-q39',
      question: 'Displacement if $a = \\cos t$ and $x(0)=v(0)=0$:',
      options: ['$t - \\sin t$', '$1 - \\cos t$', '$\\sin t - t$', '$t - \\cos t$'],
      answer: 1,
      explanation: '$v = \\sin t$.\n$x = \\int \\sin t \\, dt = -\\cos t + 1$.'
    },
    {
      id: 'pk3-q40',
      question: 'Work done on particle with $v = \\alpha \\sqrt{x}$ in time $t$ is prop to:',
      options: ['$t^2$', '$t$', '$t^3$', '$t^4$'],
      answer: 0,
      explanation: '$x = \\alpha^2 t^2 / 4$.\n$v = \\alpha^2 t / 2$.\n\nWork $= \\Delta K = 0.5mv^2 \\propto t^2$.'
    },
    {
      id: 'pk3-q41',
      question: 'Reachability condition for target $(x,y)$ with speed $u$:',
      options: ['$y \\le \\frac{u^2}{2g} - \\frac{gx^2}{2u^2}$', 'Always reachable', '$x^2+y^2 \\le u^4/g^2$', 'Linear boundary'],
      answer: 0,
      explanation: 'Condition for real roots of trajectory quadratic in $\\tan\\theta$ gives the safety envelope.'
    },
    {
      id: 'pk3-q42',
      question: 'Power delivered to block dragged at angle $\\theta$ distance $x$ in time $t$ from rest:',
      options: ['$\\frac{2Tx\\cos\\theta}{t}$', '$\\frac{Tx\\cos\\theta}{t}$', '$\\frac{Tx}{t}$', '$\\frac{2Tx}{t}$'],
      answer: 0,
      explanation: '$v = 2x/t$ for constant acceleration.\n\n$P = Fv\\cos\\theta = T(2x/t)\\cos\\theta$.'
    },
    {
      id: 'pk3-q43',
      question: 'Total time for journey distance $S$ with acceleration $a_1$ and retardation $a_2$:',
      options: ['$\\sqrt{2S \\left(\\frac{1}{a_1} + \\frac{1}{a_2}\\right)}$', '$\\sqrt{2S(a_1+a_2)}$', 'Linear relation', 'Fractional root'],
      answer: 0,
      explanation: '$S = 0.5 T v$ and $T = v(1/a_1 + 1/a_2)$.\n\nCombining yields the result.'
    },
    {
      id: 'pk3-q44',
      question: 'Relation $t_1 t_2$ for range $R$ of projectile:',
      options: ['$2R/g$', '$R/g$', '$R^2/g$', '$\\sqrt{R}$'],
      answer: 0,
      explanation: '$t_1 = 2u\\sin\\theta / g$.\n$t_2 = 2u\\cos\\theta / g$.\n\n$t_1 t_2 = 2/g (2u^2\\sin\\theta\\cos\\theta / g) = 2R/g$.'
    },
    {
      id: 'pk3-q45',
      question: 'Terminal velocity for drag $a = g - kv$:',
      options: ['$g/k$', '$k/g$', '$g$', '$0$'],
      answer: 0,
      explanation: '$a=0 \\implies g-kv=0 \\implies v=g/k$.'
    },
    {
      id: 'pk3-q46',
      question: 'Velocity as function of time for drag $a = g - kv$:',
      options: ['$v = \\frac{g}{k}(1 - e^{-kt})$', '$v = \\frac{g}{k} e^{-kt}$', 'Logarithmic', 'Linear'],
      answer: 0,
      explanation: 'Derivation leads to exponential solution $v = g/k (1 - e^{-kt})$.'
    },
    {
      id: 'pk3-q47',
      question: 'Non-trivial root for zero acceleration of $v = x^2 - x$:',
      options: ['$1/2$', '$1$', '$0$', '$2$'],
      answer: 0,
      explanation: '$a = v(dv/dx) = (x^2-x)(2x-1)$.\n\nRoots are $0, 1, 1/2$.\n\nNon-trivial force balance at $1/2$.'
    },
    {
      id: 'pk3-q48',
      question: 'Total distance $y = t^3 - 3t$ from $t=0$ to $t=2$:',
      options: ['$6$', '$2$', '$4$', '$0$'],
      answer: 0,
      explanation: '$v=0$ at $t=1$.\n\nDistance $|y(1)-y(0)| + |y(2)-y(1)| = |-2-0| + |2-(-2)| = 2+4=6$.'
    },
    {
      id: 'pk3-q49',
      question: 'Ant acceleration magnitude $r=vt, \\theta=\\omega t$:',
      options: ['$\\sqrt{4v^2\\omega^2 + v^2\\omega^4 t^2}$', '$2v\\omega$', 'Linear', 'Scalar'],
      answer: 0,
      explanation: 'Polar acceleration: $a_r = -v\\omega^2 t, a_\\theta = 2v\\omega$.\n\nMagnitude is the vector sum.'
    },
    {
      id: 'pk3-q50',
      question: 'Acceleration of rim contact point for wheel $R$ rolling at $V$:',
      options: ['$V^2/R$ upwards', 'Zero velocity', 'Zero acceleration', '$V^2/R$ downwards'],
      answer: 0,
      explanation: 'Velocity is 0 but centripetal acceleration relative to center points radially up with $V^2/R$.'
    }
  ]
};

export default kinematicsSet03;
