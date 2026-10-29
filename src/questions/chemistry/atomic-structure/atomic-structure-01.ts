import { QuizSet } from '../../../types';

const quizSet: QuizSet = {
  id: 'atomic-structure-01',
  title: 'Atomic Structure Level 1',
  subjectId: 'chemistry',
  chapterId: 'atomic-structure',
  difficulty: 'easy',
  questions: [
    {
      id: 'chem-atomic-1-1',
      question: 'Which of the following quantum numbers determines the shape of an orbital?',
      options: ['Principal quantum number (n)', 'Azimuthal quantum number (l)', 'Magnetic quantum number (ml)', 'Spin quantum number (ms)'],
      answer: 1,
      explanation: 'The azimuthal quantum number (l) is related to the shape of the orbital (s, p, d, f).',
    },
    {
      id: 'chem-atomic-1-2',
      question: 'What is the maximum number of electrons that can be accommodated in the d-subshell?',
      options: ['2', '6', '10', '14'],
      answer: 2,
      explanation: 'For a d-subshell, l = 2. The number of orbitals = 2l + 1 = 5. Each orbital can hold 2 electrons, so 5 × 2 = 10 electrons.',
    },
    {
      id: 'chem-atomic-1-3',
      question: 'The energy of an electron in the nth Bohr orbit of hydrogen atom is:',
      options: ['-13.6 / n² eV', '-13.6 × n² eV', '-13.6 / n eV', '-13.6 × n eV'],
      answer: 0,
      explanation: 'The energy of the electron in the nth orbit for a hydrogen-like species is given by E_n = -13.6 × (Z² / n²) eV. For H, Z=1, so E_n = -13.6 / n² eV.',
    },
    {
      id: 'chem-atomic-1-4',
      question: 'According to Heisenberg\'s Uncertainty Principle, it is impossible to precisely determine the:',
      options: ['Position and momentum simultaneously', 'Momentum and energy simultaneously', 'Position and velocity simultaneously but not momentum', 'Mass and velocity simultaneously'],
      answer: 0,
      explanation: 'Heisenberg\'s Uncertainty Principle states that it is impossible to determine simultaneously the exact position and exact momentum (or velocity) of an electron.',
    },
    {
      id: 'chem-atomic-1-5',
      question: 'Which rule states that "pairing of electrons in the orbitals belonging to the same subshell does not take place until each orbital belonging to that subshell has got one electron each"?',
      options: ['Aufbau Principle', 'Pauli Exclusion Principle', 'Hund\'s Rule of Maximum Multiplicity', 'Bohr-Bury Rule'],
      answer: 2,
      explanation: 'Hund\'s Rule of Maximum Multiplicity dictates how electrons fill degenerate orbitals (orbitals with the same energy level).',
    }
  ]
};

export default quizSet;
