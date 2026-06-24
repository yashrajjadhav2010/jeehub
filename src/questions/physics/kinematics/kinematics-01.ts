import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'kinematics-01',
  title: 'Kinematics Level 1',
  subjectId: 'physics',
  chapterId: 'kinematics',
  difficulty: 'medium',
  questions: [
    {
      id: 'phy-kin-1-1',
      question: 'A particle starts from rest and accelerates constantly at 2 m/s² for 10 s. What is its final velocity?',
      options: ['10 m/s', '20 m/s', '5 m/s', '40 m/s'],
      answer: 1,
      explanation: 'Using v = u + at. Here u = 0, a = 2, t = 10. Thus, v = 0 + 2(10) = 20 m/s.',
    },
    {
      id: 'phy-kin-1-2',
      question: 'A car travels half the distance with speed v₁ and the other half with speed v₂. Its average speed is:',
      options: ['(v₁ + v₂) / 2', '2v₁v₂ / (v₁ + v₂)', 'sqrt(v₁v₂)', 'v₁v₂ / (v₁ + v₂)'],
      answer: 1,
      explanation: 'Let the total distance be 2d. Time taken for first half = d/v₁, second half = d/v₂. Total time = d/v₁ + d/v₂. Average speed = 2d / (d/v₁ + d/v₂) = 2v₁v₂ / (v₁ + v₂).',
    },
    {
      id: 'phy-kin-1-3',
      question: 'A ball is thrown vertically upwards with a velocity of 20 m/s. Taking g = 10 m/s², what is the maximum height reached?',
      options: ['10 m', '20 m', '30 m', '40 m'],
      answer: 1,
      explanation: 'Using v² = u² - 2gh. At maximum height, v = 0. So, 0 = 20² - 2(10)h => 400 = 20h => h = 20 m.',
    },
    {
      id: 'phy-kin-1-4',
      question: 'The position x of a particle varies with time t as x = at² - bt³. The acceleration of the particle will be zero at time t equal to:',
      options: ['a/b', '2a/3b', 'a/3b', 'Zero'],
      answer: 2,
      explanation: 'x = at² - bt³. Velocity v = dx/dt = 2at - 3bt². Acceleration a\' = dv/dt = 2a - 6bt. Setting a\' = 0 gives 2a = 6bt => t = a/3b.',
    },
    {
      id: 'phy-kin-1-5',
      question: 'A body is dropped from a height h. The ratio of distances fallen in successive equal time intervals is:',
      options: ['1 : 2 : 3', '1 : 3 : 5', '1 : 4 : 9', '1 : 1 : 1'],
      answer: 1,
      explanation: 'Galileo\'s law of odd numbers: The distances fallen from rest in equal intervals of time are in the ratio of consecutive odd numbers, i.e., 1 : 3 : 5 : 7 : ...',
    }
  ]
};

export default quizSet;
