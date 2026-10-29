import { QuizSet } from '../../../types';

const kinematicsSet01: QuizSet = {
  id: 'set-01',
  title: 'Kinematics - Set 01',
  chapterId: 'kinematics',
  subjectId: 'physics',
  difficulty: 'easy',
  questions: [
    {
      id: 'pk1-q1',
      question: 'A car covers the first half of the distance between two places at a speed of $40 \\text{ km/h}$ and the second half at $60 \\text{ km/h}$. What is the average speed of the car for the entire journey?',
      options: ['$50 \\text{ km/h}$', '$48 \\text{ km/h}$', '$52 \\text{ km/h}$', '$45 \\text{ km/h}$'],
      answer: 1,
      explanation: 'When equal distances are covered at speeds $v_1$ and $v_2$, the average speed is given by the harmonic mean formula:\n\n$v_{avg} = \\frac{2v_1 v_2}{v_1 + v_2}$.\n\nSubstituting $v_1 = 40$ and $v_2 = 60$:\n\n$v_{avg} = \\frac{2(40)(60)}{40 + 60} = \\frac{4800}{100} = 48 \\text{ km/h}$.'
    },
    {
      id: 'pk1-q2',
      question: 'A body starts from rest and moves with constant acceleration. What is the ratio of the distance covered in the $n^{\\text{th}}$ second to the total distance covered in $n$ seconds?',
      options: ['$\\frac{2n-1}{n^2}$', '$\\frac{1}{n^2}$', '$\\frac{2n-1}{2n^2}$', '$\\frac{2n+1}{n^2}$'],
      answer: 0,
      explanation: 'The distance covered in the $n^{\\text{th}}$ second is $D_n = u + \\frac{a}{2}(2n-1)$.\n\nFor $u=0$, $D_n = \\frac{a}{2}(2n-1)$.\n\nTotal distance in $n$ seconds is $S_n = \\frac{1}{2}an^2$.\n\nRatio $D_n/S_n = \\frac{\\frac{a}{2}(2n-1)}{\\frac{1}{2}an^2} = \\frac{2n-1}{n^2}$.'
    },
    {
      id: 'pk1-q3',
      question: 'The area under a velocity-time graph represents which physical quantity?',
      options: ['Acceleration', 'Momentum', 'Displacement', 'Force'],
      answer: 2,
      explanation: 'The definite integral $\\int v \\, dt$ represents the area under the velocity-time curve, which corresponds exactly to the displacement of the particle.'
    },
    {
      id: 'pk1-q4',
      question: 'A stone is dropped from a height $h$. It hits the ground with a certain velocity $v$. If the same stone is dropped from a height $4h$, its velocity when it hits the ground will be:',
      options: ['$4v$', '$2v$', '$16v$', '$v$'],
      answer: 1,
      explanation: 'Using $v^2 = u^2 + 2gs$:\n\n$v = \\sqrt{2gh}$.\n\nFor $4h$: $v\' = \\sqrt{2g(4h)} = 2\\sqrt{2gh} = 2v$.'
    },
    {
      id: 'pk1-q5',
      question: 'For a projectile fired at an angle $\\theta$ with the horizontal, the maximum horizontal range for a given initial speed is achieved when $\\theta$ is equal to:',
      options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
      answer: 1,
      explanation: 'The horizontal range $R = \\frac{u^2 \\sin(2\\theta)}{g}$.\n\n$R$ is maximized when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$.'
    },
    {
      id: 'pk1-q6',
      question: 'A body is thrown vertically upwards with an initial velocity $u$. The maximum height reached by the body is:',
      options: ['$\\frac{u^2}{2g}$', '$\\frac{u^2}{g}$', '$\\frac{u}{2g}$', '$\\frac{2u^2}{g}$'],
      answer: 0,
      explanation: 'At the maximum height $h$, the final velocity $v = 0$.\n\nUsing $v^2 = u^2 + 2as$:\n\n$0 = u^2 - 2gh \\implies h = \\frac{u^2}{2g}$.'
    },
    {
      id: 'pk1-q7',
      question: 'If the displacement of a particle is given by $x = t^3 - 6t^2 + 3t + 4$ meters, its velocity at $t = 2$ seconds is:',
      options: ['$15 \\text{ m/s}$', '$-3 \\text{ m/s}$', '$-9 \\text{ m/s}$', '$3 \\text{ m/s}$'],
      answer: 2,
      explanation: 'Velocity $v = \\frac{dx}{dt} = 3t^2 - 12t + 3$.\n\nFor $t = 2$:\n\n$v(2) = 3(4) - 24 + 3 = 12 - 24 + 3 = -9 \\text{ m/s}$.'
    },
    {
      id: 'pk1-q8',
      question: 'A particle moves in a circle of radius $R$ with a constant speed $v$. Its centripetal acceleration is:',
      options: ['$\\frac{v^2}{R}$ away from the center', '$\\frac{v^2}{R}$ towards the center', '$\\frac{v}{R}$ towards the center', 'Zero'],
      answer: 1,
      explanation: 'To maintain uniform circular motion, an object must have a centripetal acceleration pointing towards the center with magnitude $a_c = \\frac{v^2}{R}$.'
    },
    {
      id: 'pk1-q9',
      question: 'An object is projected with an initial velocity of $20 \\text{ m/s}$ at an angle of $30^\\circ$ to the horizontal. Its time of flight is (take $g = 10 \\text{ m/s}^2$):',
      options: ['$4 \\text{ s}$', '$1 \\text{ s}$', '$3 \\text{ s}$', '$2 \\text{ s}$'],
      answer: 3,
      explanation: 'Time of flight $T = \\frac{2u \\sin \\theta}{g} = \\frac{2(20) \\sin(30^\\circ)}{10} = \\frac{40(0.5)}{10} = 2 \\text{ s}$.'
    },
    {
      id: 'pk1-q10',
      question: 'The slope of the tangent to a position-time graph at any specific instant gives:',
      options: ['Average velocity', 'Instantaneous acceleration', 'Instantaneous velocity', 'Average acceleration'],
      answer: 2,
      explanation: 'The slope of the tangent line at a specific point on an $x-t$ graph is the derivative $\\frac{dx}{dt}$, which represents the instantaneous velocity.'
    },
    {
      id: 'pk1-q11',
      question: 'For a moving body, the ratio of the distance covered to the magnitude of its displacement is always:',
      options: ['$\\ge 1$', '$\\le 1$', '$= 1$', '$< 1$'],
      answer: 0,
      explanation: 'Since a straight line is the shortest path between two points, $\\text{Distance} \\ge |\\text{Displacement}| \\implies \\frac{\\text{Distance}}{|\\text{Displacement}|} \\ge 1$.'
    },
    {
      id: 'pk1-q12',
      question: 'A car starts from rest and moves with a constant acceleration. If it covers $120 \\text{ m}$ in $10 \\text{ s}$, what is its acceleration?',
      options: ['$1.2 \\text{ m/s}^2$', '$2.4 \\text{ m/s}^2$', '$12 \\text{ m/s}^2$', '$24 \\text{ m/s}^2$'],
      answer: 1,
      explanation: '$s = ut + \\frac{1}{2}at^2$.\n\nFor $u=0, s=120, t=10$:\n\n$120 = \\frac{1}{2}a(100) = 50a \\implies a = 2.4 \\text{ m/s}^2$.'
    },
    {
      id: 'pk1-q13',
      question: 'A vehicle moving at $72 \\text{ km/h}$ is brought to rest in a distance of $20 \\text{ m}$. The uniform retardation is:',
      options: ['$10 \\text{ m/s}^2$', '$5 \\text{ m/s}^2$', '$7.2 \\text{ m/s}^2$', '$20 \\text{ m/s}^2$'],
      answer: 0,
      explanation: '$u = 72 \\times \\frac{5}{18} = 20 \\text{ m/s}$.\n\n$v=0, s=20$.\n\n$v^2 = u^2 + 2as \\implies 0 = 400 + 40a \\implies a = -10$.\n\nRetardation is $10 \\text{ m/s}^2$.'
    },
    {
      id: 'pk1-q14',
      question: 'Two bodies of different masses $m_1$ and $m_2$ are dropped simultaneously from heights $h_1$ and $h_2$ respectively. The ratio of the times taken by them to reach the ground is:',
      options: ['$m_1 : m_2$', '$h_1 : h_2$', '$\\sqrt{h_1} : \\sqrt{h_2}$', '$h_1^2 : h_2^2$'],
      answer: 2,
      explanation: '$t = \\sqrt{\\frac{2h}{g}}$.\n\nThe time is independent of mass.\n\nSo $t_1 / t_2 = \\sqrt{h_1 / h_2}$.'
    },
    {
      id: 'pk1-q15',
      question: 'A particle travels along a semicircular path of radius $R$. The ratio of the distance traveled to the magnitude of its displacement is:',
      options: ['$\\pi / 2$', '$\\pi$', '$2\\pi$', '$1$'],
      answer: 0,
      explanation: 'Distance = $\\pi R$. Displacement = $2R$. Ratio = $\\frac{\\pi R}{2R} = \\frac{\\pi}{2}$.'
    },
    {
      id: 'pk1-q16',
      question: 'An object thrown vertically upwards returns to the thrower after $6 \\text{ s}$. The initial velocity of the object was (take $g = 10 \\text{ m/s}^2$):',
      options: ['$60 \\text{ m/s}$', '$30 \\text{ m/s}$', '$15 \\text{ m/s}$', '$10 \\text{ m/s}$'],
      answer: 1,
      explanation: 'Total time of flight $T = \\frac{2u}{g}$.\n\n$6 = \\frac{2u}{10} \\implies 2u = 60 \\implies u = 30 \\text{ m/s}$.'
    },
    {
      id: 'pk1-q17',
      question: 'A ball is dropped from a tall building. How far does it fall during the first $3 \\text{ s}$? (take $g = 10 \\text{ m/s}^2$)',
      options: ['$15 \\text{ m}$', '$30 \\text{ m}$', '$45 \\text{ m}$', '$90 \\text{ m}$'],
      answer: 2,
      explanation: '$s = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(3)^2 = 5(9) = 45 \\text{ m}$.'
    },
    {
      id: 'pk1-q18',
      question: 'The maximum height reached by a projectile fired with speed $u$ at an angle $\\theta$ is:',
      options: ['$\\frac{u^2 \\sin(2\\theta)}{g}$', '$\\frac{u^2 \\sin^2\\theta}{2g}$', '$\\frac{2u \\sin\\theta}{g}$', '$\\frac{u^2 \\sin\\theta}{2g}$'],
      answer: 1,
      explanation: 'Vertical motion: $v_y^2 = u_y^2 + 2a_y H \\implies 0 = (u \\sin \\theta)^2 - 2gH \\implies H = \\frac{u^2 \\sin^2 \\theta}{2g}$.'
    },
    {
      id: 'pk1-q19',
      question: 'For a given initial speed, two angles of projection $\\theta_1$ and $\\theta_2$ give the exact same horizontal range. What is the relation between them?',
      options: ['$\\theta_1 + \\theta_2 = 90^\\circ$', '$\\theta_1 - \\theta_2 = 90^\\circ$', '$\\theta_1 + \\theta_2 = 180^\\circ$', '$\\theta_1 = 2\\theta_2$'],
      answer: 0,
      explanation: 'Complementary angles ($\\theta$ and $90^\\circ - \\theta$) give the same horizontal range.'
    },
    {
      id: 'pk1-q20',
      question: 'At what angle of projection is the horizontal range equal to the maximum height?',
      options: ['$\\tan^{-1}(1)$', '$\\tan^{-1}(2)$', '$\\tan^{-1}(4)$', '$45^\\circ$'],
      answer: 2,
      explanation: 'Range $R = \\frac{u^2 \\sin(2\\theta)}{g}$ and Max Height $H = \\frac{u^2 \\sin^2 \\theta}{2g}$.\n\nSetting $R=H$ gives:\n\n$2 \\sin \\theta \\cos \\theta = \\frac{\\sin^2 \\theta}{2} \\implies 4 \\cos \\theta = \\sin \\theta \\implies \\tan \\theta = 4$.'
    },
    {
      id: 'pk1-q21',
      question: 'The slope of a velocity-time graph represents:',
      options: ['Displacement', 'Distance', 'Acceleration', 'Jerk'],
      answer: 2,
      explanation: 'The rate of change of velocity with respect to time $\\frac{dv}{dt}$ is Acceleration.'
    },
    {
      id: 'pk1-q22',
      question: 'The area under an acceleration-time graph represents:',
      options: ['Displacement', 'Final Velocity', 'Change in Velocity', 'Distance'],
      answer: 2,
      explanation: '$\\int a \\, dt = \\Delta v$. The area represents the change in velocity.'
    },
    {
      id: 'pk1-q23',
      question: 'A body is dropped from rest. What is the ratio of distances fallen in the $1^{\\text{st}}, 2^{\\text{nd}}$, and $3^{\\text{rd}}$ seconds respectively?',
      options: ['$1:2:3$', '$1:4:9$', '$1:3:5$', '$1:1:1$'],
      answer: 2,
      explanation: '$D_n = \\frac{g}{2}(2n-1)$. Ratio is $1:3:5$.'
    },
    {
      id: 'pk1-q24',
      question: 'A particle moves $3 \\text{ m}$ East, then $4 \\text{ m}$ North. What is the magnitude of its total displacement?',
      options: ['$7 \\text{ m}$', '$5 \\text{ m}$', '$1 \\text{ m}$', '$12 \\text{ m}$'],
      answer: 1,
      explanation: '$|\\vec{s}| = \\sqrt{3^2 + 4^2} = 5 \\text{ m}$.'
    },
    {
      id: 'pk1-q25',
      question: 'The horizontal velocity of a projectile at its highest point is:',
      options: ['Zero', '$u \\sin \\theta$', '$u \\cos \\theta$', '$u$'],
      answer: 2,
      explanation: 'Since $a_x = 0$, the horizontal component of velocity remains constant and equals $u \\cos \\theta$.'
    },
    {
      id: 'pk1-q26',
      question: 'The vertical velocity of a projectile at its highest point is:',
      options: ['Zero', '$u \\sin \\theta$', '$u \\cos \\theta$', '$u$'],
      answer: 0,
      explanation: 'At the highest point, the vertical motion stops momentarily before reversing. Thus $v_y = 0$.'
    },
    {
      id: 'pk1-q27',
      question: 'Car A moves at $15 \\text{ m/s}$ North. Car B moves at $25 \\text{ m/s}$ South. What is the relative speed of Car A with respect to Car B?',
      options: ['$10 \\text{ m/s}$', '$40 \\text{ m/s}$', '$15 \\text{ m/s}$', '$25 \\text{ m/s}$'],
      answer: 1,
      explanation: '$v_{AB} = v_A - v_B = 15 - (-25) = 40 \\text{ m/s}$.'
    },
    {
      id: 'pk1-q28',
      question: 'A boat has a speed of $5 \\text{ m/s}$ in still water. It crosses a river flowing at $3 \\text{ m/s}$ along the shortest possible path. If the river is $40 \\text{ m}$ wide, the time taken to cross is:',
      options: ['$8 \\text{ s}$', '$13.3 \\text{ s}$', '$10 \\text{ s}$', '$5 \\text{ s}$'],
      answer: 2,
      explanation: 'Shortest path: $v_{net} = \\sqrt{v_{boat}^2 - v_{river}^2} = \\sqrt{25 - 9} = 4 \\text{ m/s}$.\n\nTime $t = 40/4 = 10 \\text{ s}$.'
    },
    {
      id: 'pk1-q29',
      question: 'The equation of trajectory for a projectile fired from the origin is of the mathematical form $y = Ax - Bx^2$. What shape does this represent?',
      options: ['Straight line', 'Circle', 'Ellipse', 'Parabola'],
      answer: 3,
      explanation: 'Any polynomial of degree 2 in $x$ represents a Parabola.'
    },
    {
      id: 'pk1-q30',
      question: 'A motorcycle accelerates from rest at a constant rate of $4 \\text{ m/s}^2$. What is its speed after covering a distance of $18 \\text{ m}$?',
      options: ['$12 \\text{ m/s}$', '$72 \\text{ m/s}$', '$8 \\text{ m/s}$', '$144 \\text{ m/s}$'],
      answer: 0,
      explanation: '$v^2 = u^2 + 2as \\implies v^2 = 0 + 2(4)(18) = 144 \\implies v = 12 \\text{ m/s}$.'
    }
  ]
};

export default kinematicsSet01;
