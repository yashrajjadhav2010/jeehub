import { QuizSet } from '../../../types';

const pyq: QuizSet = {
  id: "pyq",
  title: "Previous Year Questions",
  subjectId: "physics",
  chapterId: "differentiation",
  difficulty: "pyq",
  questions: [
    {
      id: "diff-pyq-q1",
      question: "If $y(x) = x^x, x > 0$, then the value of $y''(1)$ is: (JEE Main 2024)",
      options: [
        "$2$",
        "$1$",
        "$0$",
        "$-1$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Take natural logarithm on both sides:\n$\\ln(y) = x \\ln(x)$\n\n**Step 2:** Differentiate with respect to $x$:\n$\\frac{1}{y} y' = \\ln(x) + x \\cdot \\frac{1}{x}$\n$y' = y(\\ln(x) + 1) = x^x(\\ln(x) + 1)$\n\n**Step 3:** Differentiate again using product rule:\n$y'' = \\frac{d}{dx}[x^x](\\ln(x) + 1) + x^x \\frac{d}{dx}[\\ln(x) + 1]$\n$y'' = [x^x(\\ln(x) + 1)](\\ln(x) + 1) + x^x \\cdot \\frac{1}{x}$\n$y'' = x^x(\\ln(x) + 1)^2 + x^{x-1}$\n\n**Step 4:** Substitute $x = 1$:\n$y''(1) = 1^1(\\ln(1) + 1)^2 + 1^{1-1}$\n$y''(1) = 1(0 + 1)^2 + 1 = 1 + 1 = 2$\n\n*(Asked in JEE Main 2024, 27th January, Shift 1)*"
    },
    {
      id: "diff-pyq-q2",
      question: "If $f(x) = |x - 2| + |x - 5|$, then the derivative $f'(x)$ at $x = 3$ is: (JEE Main 2024)",
      options: [
        "$2$",
        "$-2$",
        "$0$",
        "$1$"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Analyze function near $x = 3$.\nFor $x = 3$, $x - 2 > 0$ so $|x - 2| = x - 2$.\nAlso $x - 5 < 0$ so $|x - 5| = -(x - 5) = 5 - x$.\n\n**Step 2:** Rewrite the function for interval $2 < x < 5$:\n$f(x) = (x - 2) + (5 - x) = 3$\n\n**Step 3:** Differentiate:\nSince $f(x) = 3$ is constant, $f'(x) = 0$.\nTherefore, $f'(3) = 0$.\n\n*(Asked in JEE Main 2024, 30th January, Shift 2)*"
    },
    {
      id: "diff-pyq-q8",
      question: "If $f(x) = \\log_x (\\ln x)$, then $f'(x)$ at $x = e$ is: (JEE Main 2021)",
      options: [
        "$e$",
        "$1/e$",
        "$e^{-1}$",
        "$e^{-2}$"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Change the base of logarithm:\n$f(x) = \\frac{\\ln(\\ln x)}{\\ln x}$\n\n**Step 2:** Use quotient rule:\n$f'(x) = \\frac{\\ln x \\cdot \\frac{d}{dx}(\\ln(\\ln x)) - \\ln(\\ln x) \\cdot \\frac{d}{dx}(\\ln x)}{(\\ln x)^2}$\n$f'(x) = \\frac{\\ln x \\cdot (\\frac{1}{\\ln x} \\cdot \\frac{1}{x}) - \\ln(\\ln x) \\cdot \\frac{1}{x}}{(\\ln x)^2}$\n$f'(x) = \\frac{\\frac{1}{x} - \\frac{\\ln(\\ln x)}{x}}{(\\ln x)^2}$\n\n**Step 3:** Evaluate at $x = e$:\nSince $\\ln e = 1$ and $\\ln(\\ln e) = \\ln(1) = 0$:\n$f'(e) = \\frac{\\frac{1}{e} - 0}{1^2} = \\frac{1}{e} = e^{-1}$\n\n*(Asked in JEE Main 2021, 27th August, Shift 2)*"
    },
    {
      id: "diff-pyq-q9",
      question: "The derivative of $\\tan^{-1} \\left[ \\frac{\\sqrt{1+x^2} - 1}{x} \\right]$ with respect to $\\tan^{-1} x$ is: (JEE Main 2020)",
      options: [
        "$1$",
        "$1/2$",
        "$2$",
        "$1/4$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nLet $u = \\tan^{-1} \\left[ \\frac{\\sqrt{1+x^2} - 1}{x} \\right]$ and $v = \\tan^{-1} x$. We need $du/dv$.\n\n**Step 1:** Substitute $x = \\tan\\theta$.\n$v = \\theta$.\n\n**Step 2:** Simplify $u$:\n$\\sqrt{1+x^2} = \\sqrt{1+\\tan^2\\theta} = \\sec\\theta$\n$u = \\tan^{-1} \\left[ \\frac{\\sec\\theta - 1}{\\tan\\theta} \\right] = \\tan^{-1} \\left[ \\frac{1 - \\cos\\theta}{\\sin\\theta} \\right]$\n$u = \\tan^{-1} \\left[ \\frac{2 \\sin^2(\\theta/2)}{2 \\sin(\\theta/2)\\cos(\\theta/2)} \\right]$\n$u = \\tan^{-1} \\left[ \\tan(\\theta/2) \\right] = \\frac{\\theta}{2}$\n\n**Step 3:** Relate $u$ and $v$:\nSince $v = \\theta$, we have $u = \\frac{v}{2}$.\n\n**Step 4:** Differentiate:\n$\\frac{du}{dv} = \\frac{1}{2}$\n\n*(Asked in JEE Main 2020, 3rd September, Shift 1)*"
    },
    {
      id: "diff-pyq-q10",
      question: "If $f(x) = x |x|$, then the value of $f''(x)$ for $x < 0$ is: (JEE Main 2020)",
      options: [
        "$2$",
        "$-2$",
        "$0$",
        "Does not exist"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** For $x < 0$, $|x| = -x$.\nSo, $f(x) = x(-x) = -x^2$.\n\n**Step 2:** Find first derivative:\n$f'(x) = -2x$\n\n**Step 3:** Find second derivative:\n$f''(x) = -2$\n\n*(Asked in JEE Main 2020, 9th January, Shift 1)*"
    },
    {
      id: "diff-pyq-q11",
      question: "If $y^2 + \\ln(\\cos^2 x) = y$, then $y''(0)$ evaluates to: (JEE Main 2024)",
      options: [
        "$2$",
        "$0$",
        "$-2$",
        "$1$"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Find $y$ at $x = 0$.\n$y^2 + \\ln(\\cos^2(0)) = y \\implies y^2 + \\ln(1) = y \\implies y^2 - y = 0$.\n$y = 0$ or $y = 1$. (Testing standard base branch near origin: $y=0$).\n\n**Step 2:** Differentiate implicitly:\n$2yy' + \\frac{1}{\\cos^2 x} \\cdot 2\\cos x(-\\sin x) = y'$\n$2yy' - 2\\tan x = y'$\n\n**Step 3:** Substitute $x = 0, y = 0$:\n$2(0)y' - 2(0) = y' \\implies y' = 0$\n\n**Step 4:** Differentiate again:\n$2(y')^2 + 2yy'' - 2\\sec^2 x = y''$\n\n**Step 5:** Substitute $x=0, y=0, y'=0$:\n$2(0)^2 + 2(0)y'' - 2(1) = y'' \\implies y'' = -2$\n\n*(Asked in JEE Main 2024, 1st February, Shift 2)*"
    },
    {
      id: "diff-pyq-q12",
      question: "If $f(x) = \\sin x$ and $g(x) = \\ln|x|$, then the derivative of the composite function $f(g(x))$ at $x = -1$ is: (JEE Main 2024)",
      options: [
        "$1$",
        "$-1$",
        "$0$",
        "$\\cos(1)$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Setup composite function $h(x) = f(g(x))$:\n$h(x) = \\sin(\\ln|x|)$\n\n**Step 2:** Apply chain rule:\n$h'(x) = \\cos(\\ln|x|) \\cdot \\frac{d}{dx}(\\ln|x|)$\n$h'(x) = \\cos(\\ln|x|) \\cdot \\frac{1}{x}$\n\n**Step 3:** Evaluate at $x = -1$:\n$h'(-1) = \\cos(\\ln 1) \\cdot (\\frac{1}{-1}) = \\cos(0) \\cdot (-1) = 1 \\cdot (-1) = -1$\n\n*(Asked in JEE Main 2024, 5th April, Shift 1)*"
    },
    {
      id: "diff-pyq-q13",
      question: "The value of $\\frac{d}{dx} [ \\sec(\\tan^{-1} x) ]$ is: (JEE Main 2023)",
      options: [
        "$\\frac{x}{\\sqrt{1 + x^2}}$",
        "$\\frac{1}{\\sqrt{1 + x^2}}$",
        "$x \\sqrt{1 + x^2}$",
        "$\\sqrt{1 + x^2}$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Let $\\theta = \\tan^{-1} x$, so $\\tan\\theta = x$.\nFor a right triangle with opposite $= x$ and adjacent $= 1$, hypotenuse $= \\sqrt{1+x^2}$.\n$\\sec\\theta = \\frac{\\text{hypotenuse}}{\\text{adjacent}} = \\sqrt{1+x^2}$.\n\n**Step 2:** Substitute back:\nThe expression becomes $\\frac{d}{dx} [ \\sqrt{1+x^2} ]$.\n\n**Step 3:** Differentiate:\n$\\frac{d}{dx}(1+x^2)^{1/2} = \\frac{1}{2}(1+x^2)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{1+x^2}}$.\n\n*(Asked in JEE Main 2023, 13th April, Shift 2)*"
    },
    {
      id: "diff-pyq-q14",
      question: "If $f(x) = \\cos x \\cdot \\cos 2x \\cdot \\cos 4x \\cdot \\cos 8x$, then $f'(\\pi/4)$ is: (JEE Main 2022)",
      options: [
        "$1$",
        "$-1$",
        "$0$",
        "$\\sqrt{2}$"
      ],
      answer: 3,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Notice that at $x = \\pi/4$, the term $\\cos(2x) = \\cos(\\pi/2) = 0$.\n\n**Step 2:** Using the extended product rule, $f'(x)$ will have a sum of terms. All terms will contain $\\cos(2x)$ as a factor, EXCEPT the term where $\\cos(2x)$ itself is differentiated.\n\n**Step 3:** That non-zero term at $x=\\pi/4$ is:\n$[\\frac{d}{dx}(\\cos 2x)] \\cdot [\\cos x \\cos 4x \\cos 8x]$\n$= -2\\sin(2x) \\cdot \\cos x \\cos 4x \\cos 8x$\n\n**Step 4:** Evaluate at $\\pi/4$:\n$-2\\sin(\\pi/2) \\cdot \\cos(\\pi/4) \\cos(\\pi) \\cos(2\\pi)$\n$= -2(1) \\cdot \\left(\\frac{1}{\\sqrt{2}}\\right) (-1) (1) = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$.\n\n*(Asked in JEE Main 2022, 28th June, Shift 2)*"
    },
    {
      id: "diff-pyq-q15",
      question: "If $x^y = e^{x - y}$, then $\\frac{dy}{dx}$ is equal to: (JEE Main 2021)",
      options: [
        "$\\frac{\\ln x}{(1 + \\ln x)^2}$",
        "$\\frac{1 + \\ln x}{\\ln x}$",
        "$\\frac{\\ln x}{(1 - \\ln x)^2}$",
        "$\\frac{1 - \\ln x}{\\ln x}$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Take natural logarithm of both sides:\n$\\ln(x^y) = \\ln(e^{x-y}) \\implies y \\ln x = x - y$\n\n**Step 2:** Isolate $y$:\n$y + y \\ln x = x \\implies y(1 + \\ln x) = x \\implies y = \\frac{x}{1 + \\ln x}$\n\n**Step 3:** Differentiate using quotient rule:\n$\\frac{dy}{dx} = \\frac{(1 + \\ln x) \\cdot 1 - x \\cdot (0 + \\frac{1}{x})}{(1 + \\ln x)^2}$\n$\\frac{dy}{dx} = \\frac{1 + \\ln x - 1}{(1 + \\ln x)^2} = \\frac{\\ln x}{(1 + \\ln x)^2}$.\n\n*(Asked in JEE Main 2021, 18th March, Shift 1)*"
    },
    {
      id: "diff-pyq-q16",
      question: "The derivative of $\\sin^{-1}(2x\\sqrt{1-x^2})$ with respect to $\\cos^{-1}(\\sqrt{1-x^2})$ for $x \\in (0, 1/\\sqrt{2})$ is: (JEE Main 2021)",
      options: [
        "$1$",
        "$2$",
        "$1/2$",
        "$-2$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\nLet $u = \\sin^{-1}(2x\\sqrt{1-x^2})$ and $v = \\cos^{-1}(\\sqrt{1-x^2})$.\n\n**Step 1:** Substitute $x = \\sin\\theta$. Since $x \\in (0, 1/\\sqrt{2})$, $\\theta \\in (0, \\pi/4)$.\n\n**Step 2:** Simplify $u$:\n$u = \\sin^{-1}(2 \\sin\\theta \\cos\\theta) = \\sin^{-1}(\\sin 2\\theta) = 2\\theta$ (since $2\\theta \\in [0, \\pi/2]$).\n\n**Step 3:** Simplify $v$:\n$v = \\cos^{-1}(\\sqrt{1 - \\sin^2\\theta}) = \\cos^{-1}(\\cos\\theta) = \\theta$.\n\n**Step 4:** Relate and differentiate:\n$u = 2v$\n$\\frac{du}{dv} = 2$\n\n*(Asked in JEE Main 2021, 26th August, Shift 1)*"
    },
    {
      id: "diff-pyq-q17",
      question: "If $f(x) = (x^2 - 1)^n$, then the degree of the polynomial expression of the nth derivative $f^{(n)}(x)$ is: (JEE Main 2020)",
      options: [
        "$2n$",
        "$n$",
        "$n - 1$",
        "$0$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Find the degree of $f(x)$.\n$f(x) = (x^2 - 1)^n$, which expands to a polynomial of degree $2n$.\n\n**Step 2:** Impact of differentiation on degree.\nEach derivative reduces the degree of a polynomial by $1$.\n\n**Step 3:** After $n$ derivatives, the degree is reduced by $n$.\nFinal degree = $2n - n = n$.\n\n*(Asked in JEE Main 2020, 7th January, Shift 2)*"
    },
    {
      id: "diff-pyq-q18",
      question: "The derivative of $e^{x^3}$ with respect to $\\log_{10}(x)$ is: (JEE Main 2024)",
      options: [
        "$3x^3 e^{x^3} \\ln 10$",
        "$\\frac{3x^2 e^{x^3}}{\\ln 10}$",
        "$3x^3 e^{x^3}$",
        "$3x^2 e^{x^3} \\ln 10$"
      ],
      answer: 0,
      explanation: "**Detailed Explanation:**\n\nLet $u = e^{x^3}$ and $v = \\log_{10}(x) = \\frac{\\ln x}{\\ln 10}$.\n\n**Step 1:** Differentiate $u$ with respect to $x$:\n$\\frac{du}{dx} = e^{x^3} \\cdot 3x^2$\n\n**Step 2:** Differentiate $v$ with respect to $x$:\n$\\frac{dv}{dx} = \\frac{1}{x \\ln 10}$\n\n**Step 3:** Divide to find $du/dv$:\n$\\frac{du}{dv} = \\frac{du/dx}{dv/dx} = \\frac{3x^2 e^{x^3}}{1 / (x \\ln 10)} = 3x^3 e^{x^3} \\ln 10$.\n\n*(Asked in JEE Main 2024, 6th April, Shift 2)*"
    },
    {
      id: "diff-pyq-q19",
      question: "If $y = \\ln(x + \\sqrt{x^2 + 1})$, then $(x^2 + 1) y'' + x y'$ is equal to: (JEE Main 2022)",
      options: [
        "$1$",
        "$0$",
        "$-1$",
        "$2$"
      ],
      answer: 1,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Differentiate $y$ w.r.t $x$:\n$y' = \\frac{1}{x + \\sqrt{x^2 + 1}} \\left( 1 + \\frac{2x}{2\\sqrt{x^2+1}} \\right)$\n$y' = \\frac{1}{x + \\sqrt{x^2 + 1}} \\left( \\frac{\\sqrt{x^2+1} + x}{\\sqrt{x^2+1}} \\right) = \\frac{1}{\\sqrt{x^2+1}}$\n\n**Step 2:** Rearrange and square:\n$\\sqrt{x^2+1} \\cdot y' = 1 \\implies (x^2 + 1)(y')^2 = 1$\n\n**Step 3:** Differentiate again:\n$(x^2 + 1) \\cdot 2y' y'' + 2x(y')^2 = 0$\n\n**Step 4:** Cancel $2y'$ (since $y' \\neq 0$):\n$(x^2 + 1)y'' + xy' = 0$.\n\n*(Asked in JEE Main 2022, 24th June, Shift 2)*"
    },
    {
      id: "diff-pyq-q20",
      question: "If $f(x) = \\cos^{-1}(4x^3 - 3x)$, then the value of $f'(1/2)$ is: (JEE Main 2023)",
      options: [
        "$3 / \\sqrt{3}$",
        "$-3 / \\sqrt{3}$",
        "$-6 / \\sqrt{3}$",
        "$6 / \\sqrt{3}$"
      ],
      answer: 2,
      explanation: "**Detailed Explanation:**\n\n**Step 1:** Substitute $x = \\cos\\theta$.\n$4x^3 - 3x = 4\\cos^3\\theta - 3\\cos\\theta = \\cos 3\\theta$.\n\n**Step 2:** Rewrite $f(x)$ locally near $x=1/2$ (quadrant where principal value applies):\n$f(x) = \\cos^{-1}(\\cos 3\\theta) = 3\\theta = 3\\cos^{-1}x$.\n\n**Step 3:** Differentiate:\n$f'(x) = -\\frac{3}{\\sqrt{1-x^2}}$.\n\n**Step 4:** Evaluate at $x = 1/2$:\n$f'(1/2) = -\\frac{3}{\\sqrt{1 - 1/4}} = -\\frac{3}{\\sqrt{3/4}} = -\\frac{6}{\\sqrt{3}}$.\n\n*(Asked in JEE Main 2023, 24th January, Shift 2)*"
    }
  ]
};

export default pyq;
