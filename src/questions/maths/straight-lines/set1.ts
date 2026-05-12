import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'set1',
  title: 'Straight Lines - Set 1',
  chapterId: 'straight-lines',
  subjectId: 'maths',
  questions: [
    {
      id: 'sl-1',
      question: 'What is the slope of a line whose inclination with the positive direction of the x-axis is 150°?',
      options: ['√3', '-1/√3', '-√3', '1/√3'],
      answer: 1,
      explanation: 'Slope m = tan(150°) = tan(180° - 30°) = -tan(30°) = -1/√3.',
      difficulty: 'easy'
    },
    {
      id: 'sl-2',
      question: 'A line passes through (3, 4) and (5, -2). What is its slope?',
      options: ['-3', '3', '1/3', '-1/3'],
      answer: 0,
      explanation: 'm = (y2 - y1) / (x2 - x1) = (-2 - 4) / (5 - 3) = -6 / 2 = -3.',
      difficulty: 'easy'
    },
    {
      id: 'sl-3',
      question: 'If the points (x, 2), (1, 4), and (3, 8) are collinear, what is the value of x?',
      options: ['0', '1', '-1', '2'],
      answer: 0,
      explanation: 'Slopes must be equal: (4 - 2)/(1 - x) = (8 - 4)/(3 - 1) => 2/(1-x) = 4/2 = 2 => 1-x = 1 => x = 0.',
      difficulty: 'easy'
    },
    {
      id: 'sl-4',
      question: 'What is the equation of the x-axis?',
      options: ['x = 0', 'y = x', 'y = 0', 'xy = 0'],
      answer: 2,
      explanation: 'On the x-axis, the y-coordinate of every point is zero, so the equation is y = 0.',
      difficulty: 'easy'
    },
    {
      id: 'sl-5',
      question: 'Find the equation of a line parallel to the y-axis and passing through (-4, 5).',
      options: ['y = 5', 'x = 5', 'y = -4', 'x = -4'],
      answer: 3,
      explanation: 'A line parallel to the y-axis has the form x = k. Since it passes through (-4, 5), x = -4.',
      difficulty: 'easy'
    },
    {
      id: 'sl-6',
      question: 'What is the y-intercept of the line 5x - 2y + 10 = 0?',
      options: ['5', '-5', '2', '10'],
      answer: 0,
      explanation: 'Put x = 0 into the equation: -2y + 10 = 0 => 2y = 10 => y = 5.',
      difficulty: 'easy'
    },
    {
      id: 'sl-7',
      question: 'The equation of a line with slope 2 and y-intercept -3 is:',
      options: ['y = 2x + 3', 'y = -3x + 2', 'y = 2x - 3', '2x - y - 3 = 0'],
      answer: 2,
      explanation: 'Using slope-intercept form y = mx + c, we get y = 2x - 3.',
      difficulty: 'easy'
    },
    {
      id: 'sl-8',
      question: 'A line makes an angle of 45° with the positive x-axis and passes through (2, 2). Its equation is:',
      options: ['x - y = 0', 'x + y = 4', 'x - y = 4', 'x + y = 0'],
      answer: 0,
      explanation: 'm = tan(45°) = 1. Equation: y - 2 = 1(x - 2) => y = x or x - y = 0.',
      difficulty: 'easy'
    },
    {
      id: 'sl-9',
      question: 'Find the equation of the line passing through (0, 0) and (a, b).',
      options: ['bx - ay = 0', 'ax - by = 0', 'x/a + y/b = 1', 'abx - y = 0'],
      answer: 0,
      explanation: 'Slope m = b/a. Equation is y - 0 = (b/a)(x - 0) => ay = bx => bx - ay = 0.',
      difficulty: 'easy'
    },
    {
      id: 'sl-10',
      question: 'The x-intercept and y-intercept of 3x + 4y = 12 are respectively:',
      options: ['3, 4', '4, 3', '-4, -3', '12, 12'],
      answer: 1,
      explanation: 'Divide by 12: x/4 + y/3 = 1. x-intercept is 4, y-intercept is 3.',
      difficulty: 'easy'
    },
    {
      id: 'sl-11',
      question: 'If a line makes equal and positive intercepts on the coordinate axes and passes through (3, 4), its equation is:',
      options: ['x + y = 7', 'x - y = -1', '4x + 3y = 24', 'x + y = 1'],
      answer: 0,
      explanation: 'Intercept form with a=b: x/a + y/a = 1 => x+y=a. Passes through (3,4) => 3+4=a => a=7. So x+y=7.',
      difficulty: 'easy'
    },
    {
      id: 'sl-12',
      question: 'What is the perpendicular distance from the origin to the line 3x - 4y = 10?',
      options: ['2', '-2', '10', '5'],
      answer: 0,
      explanation: 'Distance d = |Ax1 + By1 + C| / √(A² + B²) = |0 - 0 - 10| / √(3² + (-4)²) = 10 / 5 = 2.',
      difficulty: 'easy'
    },
    {
      id: 'sl-13',
      question: 'Reduce the equation √3x + y - 8 = 0 to normal form (x cosα + y sinα = p). What is p?',
      options: ['8', '4', '2', '4√3'],
      answer: 1,
      explanation: 'Divide by √(√3)² + 1² = 2. We get (√3/2)x + (1/2)y = 4. Here p = 4.',
      difficulty: 'easy'
    },
    {
      id: 'sl-14',
      question: 'Two lines a1x + b1y + c1 = 0 and a2x + b2y + c2 = 0 are perpendicular if:',
      options: ['a1a2 + b1b2 = 0', 'a1b2 - a2b1 = 0', 'a1/a2 = b1/b2', 'a1b1 + a2b2 = 0'],
      answer: 0,
      explanation: 'Product of slopes is -1: (-a1/b1)(-a2/b2) = -1 => a1a2 = -b1b2 => a1a2 + b1b2 = 0.',
      difficulty: 'easy'
    },
    {
      id: 'sl-15',
      question: 'Find the angle between the lines y = (2-√3)x + 5 and y = (2+√3)x - 7.',
      options: ['30°', '45°', '60°', '90°'],
      answer: 2,
      explanation: 'tanθ = |(m1 - m2) / (1 + m1m2)| = |((2-√3) - (2+√3)) / (1 + (2-√3)(2+√3))| = |-2√3 / (1 + (4-3))| = √3. So θ = 60°.',
      difficulty: 'easy'
    },
    {
      id: 'sl-16',
      question: 'Find the distance between the parallel lines 3x - 4y + 7 = 0 and 3x - 4y + 5 = 0.',
      options: ['2/5', '12/5', '2', '2/25'],
      answer: 0,
      explanation: 'Distance d = |C1 - C2| / √(A² + B²) = |7 - 5| / √(3² + (-4)²) = 2/5.',
      difficulty: 'easy'
    },
    {
      id: 'sl-17',
      question: 'The lines 2x - 3y = 5 and 3x + 2y = 8 are:',
      options: ['Parallel', 'Perpendicular', 'Coincident', 'Intersecting at 45°'],
      answer: 1,
      explanation: 'Slopes are 2/3 and -3/2. Product is -1, so they are perpendicular.',
      difficulty: 'easy'
    },
    {
      id: 'sl-18',
      question: 'Find the equation of the line passing through (1, 2) and parallel to 4x + 3y - 5 = 0.',
      options: ['4x + 3y - 10 = 0', '3x - 4y + 5 = 0', '4x + 3y + 10 = 0', '4x - 3y + 2 = 0'],
      answer: 0,
      explanation: 'Parallel line has form 4x + 3y + k = 0. Pass (1,2): 4(1) + 3(2) + k = 0 => 10 + k = 0 => k = -10.',
      difficulty: 'easy'
    },
    {
      id: 'sl-19',
      question: 'The point of intersection of x = a and y = b is:',
      options: ['(b, a)', '(0, 0)', '(a, b)', '(a, 0)'],
      answer: 2,
      explanation: 'The vertical line x=a and horizontal line y=b intersect strictly at the coordinates (a, b).',
      difficulty: 'easy'
    },
    {
      id: 'sl-20',
      question: 'The area of the triangle formed by x = 0, y = 0, and 3x + 4y = 12 is:',
      options: ['12', '6', '24', '7'],
      answer: 1,
      explanation: 'Intercepts are 4 and 3. Area = 1/2 × 4 × 3 = 6 square units.',
      difficulty: 'easy'
    },
    {
      id: 'sl-21',
      question: 'What is the value of k if x + 2y - 3 = 0, 2x - y + 4 = 0, and kx - y + 1 = 0 are concurrent lines?',
      options: ['-1', '1', '2', '0'],
      answer: 0,
      explanation: 'Solve first two: x+2y=3, 2x-y=-4 => x=-1, y=2. Substitute in third: k(-1) - 2 + 1 = 0 => -k - 1 = 0 => k=-1.',
      difficulty: 'easy'
    },
    {
      id: 'sl-22',
      question: 'The image of the point (3, 8) in the line x + 3y = 7 is:',
      options: ['(1, -4)', '(-1, -4)', '(-3, -8)', '(2, 5)'],
      answer: 1,
      explanation: 'Formula: (x - 3)/1 = (y - 8)/3 = -2(3 + 3(8) - 7)/(1² + 3²) = -2(20)/10 = -4. x = 3 - 4 = -1, y = 8 - 12 = -4.',
      difficulty: 'easy'
    },
    {
      id: 'sl-23',
      question: 'If the slope of a line is undefined, the line is parallel to the:',
      options: ['x-axis', 'y-axis', 'Line y-x', 'Line y=-x'],
      answer: 1,
      explanation: 'An undefined slope (division by zero) occurs when the change in x is 0, which corresponds to a vertical line, parallel to the y-axis.',
      difficulty: 'easy'
    },
    {
      id: 'sl-24',
      question: 'What is the distance of the point (2, 3) from the line 4x - 3y + 10 = 0?',
      options: ['1.8', '1.2', '2.0', '1.5'],
      answer: 0,
      explanation: 'd = |4(2) - 3(3) + 10| / √(4² + (-3)²) = |8 - 9 + 10| / 5 = 9 / 5 = 1.8.',
      difficulty: 'easy'
    },
    {
      id: 'sl-25',
      question: 'The vertices of a triangle are (0,0), (3,0), and (0,4). Its orthocenter is:',
      options: ['(1, 1)', '(3, 4)', '(0, 0)', '(1.5, 2)'],
      answer: 2,
      explanation: 'It is a right-angled triangle at the origin (0,0). For any right triangle, the orthocenter lies exactly at the vertex with the right angle.',
      difficulty: 'easy'
    },
    {
      id: 'sl-26',
      question: 'The equation of the line bisecting the line segment joining (3, -4) and (1, 2) perpendicularly is:',
      options: ['x - 3y - 5 = 0', 'x - 3y + 5 = 0', 'x + 3y + 5 = 0', '3x + y - 5 = 0'],
      answer: 0,
      explanation: 'Midpoint: (2, -1). Slope: -3. Perpendicular slope: 1/3. y + 1 = 1/3(x - 2) => 3y + 3 = x - 2 => x - 3y - 5 = 0.',
      difficulty: 'easy'
    },
    {
      id: 'sl-27',
      question: 'In the equation y = mx + c, if m > 0 and c < 0, the line passes through which quadrants?',
      options: ['I, II, III', 'I, III, IV', 'II, III, IV', 'I, II, IV'],
      answer: 1,
      explanation: 'Positive slope and negative y-intercept means it crosses below the origin and rises, passing through I, III, and IV.',
      difficulty: 'easy'
    },
    {
      id: 'sl-28',
      question: 'The coordinates of the foot of the perpendicular from (0, 0) to x + y - 4 = 0 is:',
      options: ['(2, 2)', '(4, 0)', '(0, 4)', '(-2, -2)'],
      answer: 0,
      explanation: 'Line is y = -x + 4. Perpendicular through origin is y = x. Intersection: x = -x + 4 => 2x = 4 => x = 2, y = 2.',
      difficulty: 'easy'
    },
    {
      id: 'sl-29',
      question: 'If the lines px + qy + r = 0, qx + ry + p = 0, and rx + py + q = 0 are concurrent, then:',
      options: ['p+q+r=0', 'p=q=r', 'Both A and B', 'pq+qr+rp=0'],
      answer: 2,
      explanation: 'The determinant of coefficients is zero, which leads to (p+q+r)(p²+q²+r²-pq-qr-rp)=0.',
      difficulty: 'easy'
    },
    {
      id: 'sl-30',
      question: 'The distance between the lines 5x + 12y - 1 = 0 and 10x + 24y + 24 = 0 is:',
      options: ['1', '2', '26/13', '1/2'],
      answer: 0,
      explanation: 'Divide 2nd by 2: 5x + 12y + 12 = 0. d = |12 - (-1)| / √(5² + 12²) = 13 / 13 = 1.',
      difficulty: 'easy'
    },
    {
      id: 'sl-31',
      question: 'A line passes through (1, 2) and makes an angle θ with the x-axis where tanθ = 3. Find its x-intercept.',
      options: ['1/3', '2/3', '-1/3', '4'],
      answer: 0,
      explanation: 'y - 2 = 3(x - 1) => y = 3x - 1. x-intercept (y=0): 3x = 1 => x = 1/3.',
      difficulty: 'easy'
    },
    {
      id: 'sl-32',
      question: 'The reflection of the line x=a in the y-axis is:',
      options: ['x = -a', 'y = a', 'y = -a', 'x = a'],
      answer: 0,
      explanation: 'Reflecting across the y-axis negates the x-coordinates, so x=a becomes x=-a.',
      difficulty: 'easy'
    },
    {
      id: 'sl-33',
      question: 'What is the locus of a point whose distance from the x-axis is twice its distance from the y-axis?',
      options: ['y = 2x', 'y = ± 2x', 'x = ± 2y', 'y² = 4x'],
      answer: 1,
      explanation: 'Distance to x-axis is |y|, to y-axis is |x|. |y| = 2|x| => y = ± 2x.',
      difficulty: 'easy'
    },
    {
      id: 'sl-34',
      question: 'The lines x = c and y = c (where c ≠ 0) are:',
      options: ['Parallel', 'Perpendicular', 'Coincident', 'None of these'],
      answer: 1,
      explanation: 'x=c is vertical, y=c is horizontal. They are perpendicular.',
      difficulty: 'easy'
    },
    {
      id: 'sl-35',
      question: 'For what value of λ are the lines 3x - 4y + 5 = 0 and 6x - λy + 8 = 0 parallel?',
      options: ['4', '-8', '8', '-4'],
      answer: 2,
      explanation: '3/6 = -4/-λ => 1/2 = 4/λ => λ = 8.',
      difficulty: 'easy'
    },
    {
      id: 'sl-36',
      question: 'Find the equation of the line passing through the intersection of x+y=3 and 2x-y=0 and the origin.',
      options: ['y = 2x', 'y = x', 'x + y = 0', 'y = x/2'],
      answer: 0,
      explanation: 'Intersection: (1, 2). Line through (0,0) and (1,2) is y=2x.',
      difficulty: 'easy'
    },
    {
      id: 'sl-37',
      question: 'The centroid of a triangle is (2, 3) and two of its vertices are (5, 6) and (-1, 4). The third vertex is:',
      options: ['(2, -1)', '(2, 1)', '(0, 0)', '(4, -1)'],
      answer: 0,
      explanation: 'x: (5 - 1 + x3)/3 = 2 => x3 = 2. y: (6 + 4 + y3)/3 = 3 => y3 = -1.',
      difficulty: 'easy'
    },
    {
      id: 'sl-38',
      question: 'Area of the quadrilateral formed by the lines |x| + |y| = 2 is:',
      options: ['8', '4', '2', '16'],
      answer: 0,
      explanation: 'Diagonal length d = 4. Area = 1/2 * d * d = 8.',
      difficulty: 'easy'
    },
    {
      id: 'sl-39',
      question: 'Which of these points lies on the same side of the line 3x - 4y = 12 as the origin?',
      options: ['(4, 1)', '(5, 1)', '(0, -4)', '(1, -3)'],
      answer: 0,
      explanation: 'L(x,y) = 3x - 4y - 12. L(0,0) = -12. L(4,1) = 12 - 4 - 12 = -4 (same sign).',
      difficulty: 'easy'
    },
    {
      id: 'sl-40',
      question: 'Two lines y = m1x and y = m2x are such that m1 and m2 are roots of x² - 4x + 1 = 0. The angle between them is:',
      options: ['30°', '45°', '60°', '90°'],
      answer: 2,
      explanation: 'tanθ = |m1-m2|/(1+m1m2) = √(4²-4)/2 = √3, so θ = 60°.',
      difficulty: 'easy'
    },
    {
      id: 'sl-41',
      question: 'If the line 3x + 4y - 1 = 0 is translated parallel to itself by 2 units, the new equation could be:',
      options: ['3x + 4y + 9 = 0', '3x + 4y - 3 = 0', '3x + 4y + 2 = 0', '3x + 4y - 2 = 0'],
      answer: 0,
      explanation: 'Distance = |k - (-1)| / 5 = 2 => |k+1| = 10 => k = 9.',
      difficulty: 'easy'
    },
    {
      id: 'sl-42',
      question: 'The points (1, 1), (2, 3), and (3, 5) form:',
      options: ['An equilateral triangle', 'A right triangle', 'An isosceles triangle', 'A straight line'],
      answer: 3,
      explanation: 'Slopes are equal: (3-1)/(2-1) = 2 and (5-3)/(3-2) = 2. Collinear.',
      difficulty: 'easy'
    },
    {
      id: 'sl-43',
      question: 'Equation of the line perpendicular to x-axis and passing through (a, b) is:',
      options: ['y = b', 'x = a', 'x = b', 'y = a'],
      answer: 1,
      explanation: 'Vertical line has form x = const. Passing through (a,b), x=a.',
      difficulty: 'easy'
    },
    {
      id: 'sl-44',
      question: 'The ratio in which the line 3x + y - 9 = 0 divides the segment joining (1, 3) and (2, 7) is:',
      options: ['3:4 externally', '3:4 internally', '4:3 internally', '4:3 externally'],
      answer: 1,
      explanation: 'Ratio = -L(1,3)/L(2,7) = -(3(1)+3-9)/(3(2)+7-9) = -(-3/4) = 3/4.',
      difficulty: 'easy'
    },
    {
      id: 'sl-45',
      question: 'The normal form of the line x + y = √2 is:',
      options: ['x cos(45°) + y sin(45°) = 1', 'x cos(45°) + y sin(45°) = √2', 'x cos(135°) + y sin(135°) = 1', 'x cos(90°) + y sin(90°) = 1'],
      answer: 0,
      explanation: 'Divide by √2: (1/√2)x + (1/√2)y = 1 => x cos(45°) + y sin(45°) = 1.',
      difficulty: 'easy'
    },
    {
      id: 'sl-46',
      question: 'If the lines y = 3x + 1 and 2y = x + 3 are equally inclined to the line y = mx + 4, what is m?',
      options: ['(1-3)/(1+3)', '-1 or 1', '1/2 or 2', '1 ± √2'],
      answer: 1,
      explanation: 'Using angle bisector logic, the slopes are -1 or 1.',
      difficulty: 'easy'
    },
    {
      id: 'sl-47',
      question: 'The circumcenter of the triangle formed by x=0, y=0, and 3x+4y=12 is:',
      options: ['(2, 1.5)', '(1.5, 2)', '(2, 2)', '(3, 4)'],
      answer: 0,
      explanation: 'Midpoint of hypotenuse (0,3) to (4,0) is (2, 1.5).',
      difficulty: 'easy'
    },
    {
      id: 'sl-48',
      question: 'If the coordinate axes are rotated by 45°, the equation x² - y² = a² becomes:',
      options: ['X² + Y² = a²', 'XY = a² / 2', 'XY = -a² / 2', 'X² - Y² = 2a²'],
      answer: 2,
      explanation: 'Rotation transformation results in -2XY = a² => XY = -a²/2.',
      difficulty: 'easy'
    },
    {
      id: 'sl-49',
      question: 'Line L is perpendicular to 5x-y=1 and the area of the triangle formed by L and coordinate axes is 5. Equation of L is:',
      options: ['x + 5y = ± 5√2', 'x - 5y = 5', 'x + 5y = ± 10', '5x + y = ± 10'],
      answer: 0,
      explanation: 'Slope -1/5. x+5y=c. Area = 1/2 * |c * c/5| = 5 => c² = 50 => c = ± 5√2.',
      difficulty: 'easy'
    },
    {
      id: 'sl-50',
      question: 'Find the slope of the line which makes an angle of 30° with the positive y-axis, measured anticlockwise.',
      options: ['√3', '-√3', '1/√3', '-1/√3'],
      answer: 1,
      explanation: 'Inclination θ = 90° + 30° = 120°. m = tan(120°) = -√3.',
      difficulty: 'easy'
    }
  ]
};

export default quizSet;
