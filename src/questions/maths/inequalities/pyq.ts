import { QuizSet } from '../../../types';

const pyq: QuizSet = {
  id: "pyq",
  title: "Previous Year Questions",
  subjectId: "maths",
  chapterId: "inequalities",
  difficulty: "pyq",
  questions: [
    {
      id: "inequalities-pyq-q1",
      question: "Solve for $x$: $\\log_{0.5}(x^2 - 5x + 6) > -1$. (JEE Advanced 2008)",
      options: ["$x \\in (1, 2) \\cup (3, 4)$", "$x \\in (-\\infty, 2) \\cup (3, \\infty)$", "$x \\in (1, 4)$", "$x \\in (2, 3)$"],
      answer: 0,
      explanation: "**Expert Solution:**\nThe domain is $x^2 - 5x + 6 > 0 \\implies (x-2)(x-3) > 0 \\implies x \\in (-\\infty, 2) \\cup (3, \\infty)$.\nGiven $\\log_{0.5}(x^2 - 5x + 6) > -1$.\nSince the base is less than 1, $x^2 - 5x + 6 < 0.5^{-1} = 2$.\n$x^2 - 5x + 4 < 0 \\implies (x-1)(x-4) < 0 \\implies x \\in (1, 4)$.\nTaking the intersection with the domain gives $x \\in (1, 2) \\cup (3, 4)$."
    },
    {
      id: "inequalities-pyq-q2",
      question: "Find the set of all real $x$ for which $\\frac{x^2 - 3x + 2}{x^2 - 7x + 12} > 0$. (JEE Main 2013)",
      options: ["$x \\in (-\\infty, 1) \\cup (4, \\infty)$", "$x \\in (1, 2) \\cup (3, 4)$", "$x \\in (-\\infty, 1) \\cup (2, 3) \\cup (4, \\infty)$", "$x \\in (2, 3)$"],
      answer: 2,
      explanation: "**Expert Solution:**\nFactorizing numerator and denominator: $\\frac{(x-1)(x-2)}{(x-3)(x-4)} > 0$.\nThe roots are $1, 2, 3, 4$.\nUsing the wavy curve method, the expression is positive for $x \\in (-\\infty, 1) \\cup (2, 3) \\cup (4, \\infty)$."
    }
  ]
};

export default pyq;
