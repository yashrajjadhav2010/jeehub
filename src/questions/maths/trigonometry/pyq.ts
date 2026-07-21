import { QuizSet } from '../../../types';

const trigonometryPyq: QuizSet = {
  id: "pyq",
  title: "Trigonometry PYQs",
  subjectId: "maths",
  chapterId: "trigonometry",
  difficulty: "pyq",
  questions: [
    {
      id: "trig-pyq-1",
      question: "Suppose $\sin^3 x \sin 3x = \sum_{m=0}^n C_m \cos mx$ is an identity in $x$, where $C_0, C_1, \dots, C_n$ are constants, and $C_n \neq 0$. Then the value of $n$ is: (JEE 1981)",
      options: [
        "3",
        "4",
        "6",
        "8"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n1. **Express $\sin^3 x$ using a multiple-angle identity:**\nRecall the standard triple-angle identity for sine:\n$$\sin 3x = 3\sin x - 4\sin^3 x \implies \sin^3 x = \frac{3\sin x - \sin 3x}{4}$$\n\n2. **Expand the left-hand side equation:**\nSubstitute $\sin^3 x$ back into the given expression:\n$$\sin^3 x \sin 3x = \left(\frac{3\sin x - \sin 3x}{4}\right) \sin 3x = \frac{3\sin x \sin 3x - \sin^2 3x}{4}$$\n\n3. **Apply product-to-sum identities:**\nUsing the formula $2\sin A \sin B = \cos(A-B) - \cos(A+B)$:\n* $3\sin x \sin 3x = \frac{3}{2}[\cos(3x - x) - \cos(3x + x)] = \frac{3}{2}\cos 2x - \frac{3}{2}\cos 4x$\n* $\sin^2 3x = \frac{1 - \cos 6x}{2}$\n\n4. **Combine the simplified terms:**\nSubstitute these expansions back into our fraction:\n$$\sin^3 x \sin 3x = \frac{1}{4} \left[ \left(\frac{3}{2}\cos 2x - \frac{3}{2}\cos 4x\right) - \left(\frac{1 - \cos 6x}{2}\right) \right]$$\n$$\sin^3 x \sin 3x = -\frac{1}{8} + \frac{3}{8}\cos 2x - \frac{3}{8}\cos 4x + \frac{1}{8}\cos 6x$$\n\n5. **Determine $n$:**\nComparing this to the given summation $\sum_{m=0}^n C_m \cos mx$, the highest frequency multiple of $x$ inside any cosine term is $m = 6$, where its non-zero coefficient is $C_6 = \frac{1}{8}$. Therefore, $n$ must equal 6."
    },
    {
      id: "trig-pyq-2",
      question: "The solution set of the system of equations $x + y = \frac{2\pi}{3}$, $\cos x + \cos y = \frac{3}{2}$, where $x$ and $y$ are real, is: (JEE 1987)",
      options: [
        "$\\left\\{ \\left(\\frac{\\pi}{3}, \\frac{\\pi}{3}\\right) \\right\\}$",
        "$\\left\\{ \\left(\\frac{\\pi}{6}, \\frac{\\pi}{2}\\right), \\left(\\frac{\\pi}{2}, \\frac{\\pi}{6}\\right) \\right\\}$",
        "$\\emptyset$",
        "Infinite solutions"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n1. **Simplify using sum-to-product formula:**\nApply the formula $\cos A + \cos B = 2\cos\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)$ to the second equation:\n$$2 \cos\left(\frac{x+y}{2}\right) \cos\left(\frac{x-y}{2}\right) = \frac{3}{2}$$\n\n2. **Substitute the known value of $(x+y)$:**\nGiven that $x + y = \frac{2\pi}{3}$, substitute this directly into our identity:\n$$2 \cos\left(\frac{2\pi / 3}{2}\right) \cos\left(\frac{x-y}{2}\right) = \frac{3}{2}$$\n$$2 \cos\left(\frac{\pi}{3}\right) \cos\left(\frac{x-y}{2}\right) = \frac{3}{2}$$\n\n3. **Analyze the range boundaries:**\nSince we know $\cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$:\n$$2 \left(\frac{1}{2}\right) \cos\left(\frac{x-y}{2}\right) = \frac{3}{2} \implies \cos\left(\frac{x-y}{2}\right) = \frac{3}{2} = 1.5$$\n\n4. **Check for valid solutions:**\nFor all real parameters of $x$ and $y$, the absolute range constraint of a standard cosine function is $-1 \leq \cos \theta \leq 1$. Because $1.5 > 1$, no real values can fulfill this condition."
    },
    {
      id: "trig-pyq-3",
      question: "The set of all $x$ in the interval $[0, \pi]$ for which $2 \sin^2 x - 3 \sin x + 1 \geq 0$, is: (JEE 1987)",
      options: [
        "$\\left[0, \\frac{\\pi}{6}\\right] \\cup \\left[\\frac{5\\pi}{6}, \\pi\\right]$",
        "$\\left[0, \\frac{\\pi}{6}\\right] \\cup \\left\\{\\frac{\\pi}{2}\\right\\} \\cup \\left[\\frac{5\\pi}{6}, \\pi\\right]$",
        "$\\left[\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right]$",
        "$\\left[0, \\frac{\\pi}{2}\\right]$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n1. **Substitute a dummy variable:**\nLet $t = \sin x$. Because the domain given is $x \in [0, \pi]$, our range limits are bounded by $t \in [0, 1]$.\n\n2. **Solve the quadratic inequality:**\nFactor the expression:\n$$2t^2 - 3t + 1 \geq 0 \implies (2t - 1)(t - 1) \geq 0$$\nThis evaluates to true when:\n$$t \leq \frac{1}{2} \quad \text{or} \quad t \geq 1$$\n\n3. **Intersect boundaries with our domain limit $[0, 1]$:**\n* **Interval A:** $0 \leq \sin x \leq \frac{1}{2}$. In $[0, \pi]$, this occurs when $x \in \left[0, \frac{\pi}{6}\right] \cup \left[\frac{5\pi}{6}, \pi\right]$.\n* **Interval B:** $\sin x \geq 1$. Since sine cannot exceed 1, this simplifies precisely to $\sin x = 1$, giving $x = \frac{\pi}{2}$."
    },
    {
      id: "trig-pyq-4",
      question: "The sides of a triangle inscribed in a given circle subtend angles $\alpha, \beta$ and $\gamma$ at the centre. The minimum value of the arithmetic mean of $\cos\left(\alpha + \frac{\pi}{2}\right)$, $\cos\left(\beta + \frac{\pi}{2}\right)$ and $\cos\left(\gamma + \frac{\pi}{2}\right)$ is equal to: (JEE 1987)",
      options: [
        "$\\frac{\\sqrt{3}}{2}$",
        "$-\\frac{\\sqrt{3}}{2}$",
        "$-\\frac{1}{2}$",
        "$\\frac{1}{2}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n1. **Simplify the trigonometric terms:**\nUsing the quadrant rule $\cos\left(\theta + \frac{\pi}{2}\right) = -\sin\theta$, we can rewrite each term:\n$$\text{Arithmetic Mean (AM)} = \frac{- \sin\alpha - \sin\beta - \sin\gamma}{3} = -\frac{1}{3}(\sin\alpha + \sin\beta + \sin\gamma)$$\n\n2. **Relate angles at the center:**\nFor any circle circumscribing a complete triangle, the sum of the angles subtended by its three sides at the center is always equal to a full rotation:\n$$\alpha + \beta + \gamma = 2\pi$$\n\n3. **Maximize the inner sum using Jensen's Inequality:**\nThe function $f(\theta) = \sin\theta$ is strictly concave on the interval $(0, \pi)$. By Jensen's Inequality for concave functions:\n$$\frac{\sin\alpha + \sin\beta + \sin\gamma}{3} \leq \sin\left(\frac{\alpha + \beta + \gamma}{3}\right)$$\nSubstitute $\alpha + \beta + \gamma = 2\pi$:\n$$\sin\alpha + \sin\beta + \sin\gamma \leq 3\sin\left(\frac{2\pi}{3}\right) = 3\left(\frac{\sqrt{3}}{2}\right) = \frac{3\sqrt{3}}{2}$$\n\n4. **Find the minimum of the overall arithmetic mean:**\nSince we multiply the expression by a negative value ($-\frac{1}{3}$), the maximum value of the sum yields the minimum value for the final answer:\n$$\text{Minimum AM} = -\frac{1}{3} \left( \frac{3\sqrt{3}}{2} \right) = -\frac{\sqrt{3}}{2}$$"
    },
    {
      id: "trig-pyq-5",
      question: "The value of $\sin \frac{\pi}{14} \sin \frac{3\pi}{14} \sin \frac{5\pi}{14} \sin \frac{7\pi}{14} \sin \frac{9\pi}{14} \sin \frac{11\pi}{14} \sin \frac{13\pi}{14}$ is equal to: (JEE 1991)",
      options: [
        "$\\frac{1}{16}$",
        "$\\frac{1}{32}$",
        "$\\frac{1}{64}$",
        "$\\frac{1}{128}$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n1. **Simplify the middle term:**\nNotice that $\sin \frac{7\pi}{14} = \sin \frac{\pi}{2} = 1$. The expression reduces to 6 terms.\n\n2. **Use symmetry pairs:**\nSince $\sin(\pi - \theta) = \sin\theta$, we can pair the remaining symmetric angles across the quadrant line:\n* $\sin \frac{13\pi}{14} = \sin \frac{\pi}{14}$\n* $\sin \frac{11\pi}{14} = \sin \frac{3\pi}{14}$\n* $\sin \frac{9\pi}{14} = \sin \frac{5\pi}{14}$\n\nOur expression becomes a squared product:\n$$P = \left( \sin \frac{\pi}{14} \sin \frac{3\pi}{14} \sin \frac{5\pi}{14} \right)^2$$\n\n3. **Convert sines into cosines:**\nUse the identities $\sin\theta = \cos\left(\frac{\pi}{2} - \theta\right)$:\n* $\sin \frac{\pi}{14} = \cos\left(\frac{7\pi}{14} - \frac{\pi}{14}\right) = \cos \frac{3\pi}{7}$\n* $\sin \frac{3\pi}{14} = \cos\left(\frac{7\pi}{14} - \frac{3\pi}{14}\right) = \cos \frac{2\pi}{7}$\n* $\sin \frac{5\pi}{14} = \cos\left(\frac{7\pi}{14} - \frac{5\pi}{14}\right) = \cos \frac{\pi}{7}$\n\nNow evaluate the product inside the square, $A = \cos \frac{\pi}{7} \cos \frac{2\pi}{7} \cos \frac{3\pi}{7}$. Since $\cos \frac{3\pi}{7} = -\cos \frac{4\pi}{7}$:\n$$A = -\cos \frac{\pi}{7} \cos \frac{2\pi}{7} \cos \frac{4\pi}{7}$$\n\n4. **Use the cosine product formula:**\nMultiply and divide by $2^3 \sin \frac{\pi}{7}$ using the rule $2\sin\theta\cos\theta = \sin2\theta$:\n$$A = -\frac{\sin\left(2^3 \cdot \frac{\pi}{7}\right)}{8 \sin \frac{\pi}{7}} = -\frac{\sin \frac{8\pi}{7}}{8 \sin \frac{\pi}{7}} = -\frac{-\sin \frac{\pi}{7}}{8 \sin \frac{\pi}{7}} = \frac{1}{8}$$\n\n5. **Square the inner value:**\n$$P = A^2 = \left(\frac{1}{8}\right)^2 = \frac{1}{64}$$"
    },
    {
      id: "trig-pyq-6",
      question: "If $K = \sin(\pi/18)\sin(5\pi/18)\sin(7\pi/18)$, then the numerical value of $K$ is: (JEE 1993)",
      options: [
        "$\\frac{1}{2}$",
        "$\\frac{1}{4}$",
        "$\\frac{1}{8}$",
        "$\\frac{1}{16}$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n1. **Convert sines into cosines:**\nUsing $\sin\theta = \cos\left(90^\circ - \theta\right)$ where $90^\circ = \frac{9\pi}{18}$:\n* $\sin \frac{\pi}{18} = \cos\left(\frac{9\pi - \pi}{18}\right) = \cos \frac{4\pi}{9}$\n* $\sin \frac{5\pi}{18} = \cos\left(\frac{9\pi - 5\pi}{18}\right) = \cos \frac{2\pi}{9}$\n* $\sin \frac{7\pi}{18} = \cos\left(\frac{9\pi - 7\pi}{18}\right) = \cos \frac{\pi}{9}$\n\n2. **Rearrange into product format:**\n$$K = \cos \frac{\pi}{9} \cos \frac{2\pi}{9} \cos \frac{4\pi}{9}$$\n\n3. **Apply the continuous doubling formula for cosines:**\nRecall: $\prod_{r=0}^{n-1} \cos(2^r \theta) = \frac{\sin(2^n \theta)}{2^n \sin \theta}$.\nHere, $\theta = \frac{\pi}{9}$ and $n = 3$:\n$$K = \frac{\sin\left(2^3 \cdot \frac{\pi}{9}\right)}{2^3 \sin \frac{\pi}{9}} = \frac{\sin \frac{8\pi}{9}}{8 \sin \frac{\pi}{9}}$$\n\n4. **Reduce using reference angles:**\nSince $\sin \frac{8\pi}{9} = \sin\left(\pi - \frac{\pi}{9}\right) = \sin \frac{\pi}{9}$:\n$$K = \frac{\sin \frac{\pi}{9}}{8 \sin \frac{\pi}{9}} = \frac{1}{8}$$"
    },
    {
      id: "trig-pyq-7",
      question: "If $A > 0, B > 0$ and $A + B = \pi / 3$, then the maximum value of $\tan A \tan B$ is: (JEE 1993)",
      options: [
        "$\\frac{1}{\\sqrt{3}}$",
        "$\\frac{1}{3}$",
        "$3$",
        "$1$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n1. **Convert the product into a fraction of cosines:**\nUsing the definitions $\tan \theta = \frac{\sin \theta}{\cos \theta}$ and product-to-sum identities:\n$$\tan A \tan B = \frac{\sin A \sin B}{\cos A \cos B} = \frac{\frac{1}{2}[\cos(A-B) - \cos(A+B)]}{\frac{1}{2}[\cos(A-B) + \cos(A+B)]}$$\n\n2. **Substitute the given sum value $A + B = \pi/3$:**\nSince $\cos(\pi/3) = \frac{1}{2}$, substitute this into the equation:\n$$\tan A \tan B = \frac{\cos(A-B) - \frac{1}{2}}{\cos(A-B) + \frac{1}{2}}$$\n\n3. **Maximize by analyzing the variable expression:**\nLet $t = \cos(A-B)$. The function $f(t) = \frac{t - 1/2}{t + 1/2} = 1 - \frac{1}{t + 1/2}$ is strictly increasing with respect to $t$.\nTo maximize the value of the entire expression, we must maximize $t = \cos(A-B)$.\n\n4. **Find the maximum threshold:**\nThe maximum value a cosine function can achieve is $1$, which happens when the angle argument is $0$:\n$$\cos(A-B) = 1 \implies A - B = 0 \implies A = B$$\n\n5. **Calculate the numerical maximum value:**\nSince $A = B$ and $A + B = \pi/3$, we find $A = B = \pi/6$:\n$$\tan\left(\frac{\pi}{6}\right) \tan\left(\frac{\pi}{6}\right) = \frac{1}{\sqrt{3}} \cdot \frac{1}{\sqrt{3}} = \frac{1}{3}$$"
    },
    {
      id: "trig-pyq-8",
      question: "General value of $\theta$ satisfying the equation $\tan^2 \theta + \sec 2\theta = 1$ is: (JEE 1996)",
      options: [
        "$n\pi \text{ or } n\pi \pm \frac{\pi}{3}$",
        "$n\pi \pm \frac{\pi}{6}$",
        "$2n\pi \pm \frac{\pi}{3}$",
        "$n\pi$ only"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\n\n1. **Express $\sec 2\theta$ in terms of $\tan \theta$:**\nRecall the double-angle identity: $\sec 2\theta = \frac{1}{\cos 2\theta} = \frac{1 + \tan^2 \theta}{1 - \tan^2 \theta}$.\nSubstitute this into the primary equation:\n$$\tan^2 \theta + \frac{1 + \tan^2 \theta}{1 - \tan^2 \theta} = 1$$\n\n2. **Simplify the algebraic equation:**\nLet $u = \tan^2 \theta$. The equation becomes:\n$$u + \frac{1+u}{1-u} = 1$$\nMultiply the entire equation by $(1-u)$ (given that $u \neq 1 \implies \theta \neq n\pi \pm \frac{\pi}{4}$):\n$$u(1-u) + (1+u) = 1-u$$\n$$u - u^2 + 1 + u = 1 - u \implies 3u - u^2 = 0$$\n$$u(3 - u) = 0$$\n\n3. **Solve for both cases:**\n* **Case 1:** $u = 0 \implies \tan^2 \theta = 0 \implies \tan \theta = 0$\n  The general solution is: $\theta = n\pi, \; n \in \mathbb{Z}$\n* **Case 2:** $u = 3 \implies \tan^2 \theta = 3 \implies \tan \theta = \pm\sqrt{3}$\n  Since $\tan(\pi/3) = \sqrt{3}$, the general solution is: $\theta = n\pi \pm \frac{\pi}{3}, \; n \in \mathbb{Z}$"
    },
    {
      id: "trig-pyq-9",
      question: "The real roots of the equation $\cos^7 x + \sin^4 x = 1$ in the interval $(-\pi, \pi)$ are: (JEE 1997)",
      options: [
        "$0, \pm \frac{\pi}{4}$",
        "$0, \pm \frac{\pi}{2}$",
        "$\pm \frac{\pi}{2}, \pi$",
        "$0, \frac{\pi}{3}, \frac{2\pi}{3}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n1. **Analyze with boundary inequalities:**\nFor any real value of $x$, we know that $|\cos x| \leq 1$ and $|\sin x| \leq 1$. This implies:\n$$\cos^7 x \leq \cos^2 x$$\n$$\sin^4 x \leq \sin^2 x$$\n\n2. **Add the two inequalities together:**\n$$\cos^7 x + \sin^4 x \leq \cos^2 x + \sin^2 x$$\nUsing the standard Pythagorean identity $\cos^2 x + \sin^2 x = 1$:\n$$\cos^7 x + \sin^4 x \leq 1$$\n\n3. **Determine conditions for equality:**\nFor the given expression to exactly equal $1$, both underlying boundary inequalities must simultaneously reach equality:\n* $\cos^7 x = \cos^2 x \implies \cos^2 x(\cos^5 x - 1) = 0 \implies \cos x = 0 \text{ or } \cos x = 1$\n* $\sin^4 x = \sin^2 x \implies \sin^2 x(\sin^2 x - 1) = 0 \implies \sin x = 0 \text{ or } \sin x = \pm 1$\n\n4. **Find valid sets within the open interval $(-\pi, \pi)$:**\n* If $\cos x = 1$, then $\sin x = 0$. In the given open interval, this yields $x = 0$.\n* If $\cos x = 0$, then $\sin x = \pm 1$. In the given open interval, this yields $x = \frac{\pi}{2}$ and $x = -\frac{\pi}{2}$.\n\nCombining these, the complete set of roots is $\left\{0, -\frac{\pi}{2}, \frac{\pi}{2}\right\}$."
    },
    {
      id: "trig-pyq-10",
      question: "The value of the expression $\sqrt{3} \csc 20^\circ - \sec 20^\circ$ is equal to: (JEE 1988)",
      options: [
        "$2$",
        "$2 \sin 20^\circ / \sin 40^\circ$",
        "$4$",
        "$4 \sin 20^\circ / \sin 40^\circ$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n1. **Convert to basic sine and cosine functions:**\nExpress cosecant and secant in terms of sine and cosine:\n$$\sqrt{3} \csc 20^\circ - \sec 20^\circ = \frac{\sqrt{3}}{\sin 20^\circ} - \frac{1}{\cos 20^\circ}$$\n\n2. **Combine into a single fraction:**\n$$= \frac{\sqrt{3}\cos 20^\circ - \sin 20^\circ}{\sin 20^\circ \cos 20^\circ}$$\n\n3. **Apply trigonometric identities to numerator and denominator:**\nMultiply and divide the numerator by $2$, and use the identity $2\sin\theta\cos\theta = \sin 2\theta$ for the denominator:\n$$= \frac{2 \left( \frac{\sqrt{3}}{2}\cos 20^\circ - \frac{1}{2}\sin 20^\circ \right)}{\frac{1}{2} (2\sin 20^\circ \cos 20^\circ)}$$\n\n4. **Simplify using the sine difference identity:**\nSince $\sin 60^\circ = \frac{\sqrt{3}}{2}$ and $\cos 60^\circ = \frac{1}{2}$:\n$$= \frac{4 (\sin 60^\circ \cos 20^\circ - \cos 60^\circ \sin 20^\circ)}{\sin 40^\circ}$$\n$$= \frac{4 \sin(60^\circ - 20^\circ)}{\sin 40^\circ} = \frac{4 \sin 40^\circ}{\sin 40^\circ} = 4$$"
    },
    {
      id: "trig-pyq-11",
      question: "The general solution of $\sin x - 3 \sin 2x + \sin 3x = \cos x - 3 \cos 2x + \cos 3x$ is: (JEE 1989)",
      options: [
        "$n\pi + \frac{\pi}{8}$",
        "$\frac{n\pi}{2} + \frac{\pi}{8}$",
        "$(-1)^n \frac{n\pi}{2} + \frac{\pi}{8}$",
        "$2n\pi + \cos^{-1} \frac{3}{2}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n1. **Group and rearrange terms on both sides:**\nGroup the $x$ and $3x$ terms together to apply sum-to-product formulas:\n* **LHS:** $(\sin 3x + \sin x) - 3\sin 2x = 2\sin 2x \cos x - 3\sin 2x = \sin 2x (2\cos x - 3)$\n* **RHS:** $(\cos 3x + \cos x) - 3\cos 2x = 2\cos 2x \cos x - 3\cos 2x = \cos 2x (2\cos x - 3)$\n\n2. **Equate the terms:**\n$$\sin 2x (2\cos x - 3) = \cos 2x (2\cos x - 3)$$\n$$(\sin 2x - \cos 2x)(2\cos x - 3) = 0$$\n\n3. **Analyze the factors:**\n* Since the range of cosine is bounded by $[-1, 1]$, $2\cos x - 3 \neq 0$ for any real value of $x$.\n* Therefore, we must have:\n  $$\sin 2x - \cos 2x = 0 \implies \tan 2x = 1$$\n\n4. **Find the general solution:**\n$$2x = n\pi + \frac{\pi}{4} \implies x = \frac{n\pi}{2} + \frac{\pi}{8}, \; n \in \mathbb{Z}$$"
    },
    {
      id: "trig-pyq-12",
      question: "The equation $(\cos p - 1)x^2 + (\cos p)x + \sin p = 0$ in the variable $x$, has real roots. Then $p$ can take any value in the interval: (JEE 1990)",
      options: [
        "$(0, 2\pi)$",
        "$(-\pi, 0)$",
        "$\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$",
        "$(0, \pi)$"
      ],
      answer: 3,
      explanation: "**Detailed Solution:**\n\n1. **Examine the standard quadratic condition:**\nFor a quadratic equation $ax^2 + bx + c = 0$ to have real roots, its discriminant $D = b^2 - 4ac \geq 0$.\nAlternatively, if the leading coefficient $a$ and constant term $c$ have opposite signs ($ac < 0$), then $-4ac > 0$, which mathematically guarantees that $D = b^2 - 4ac > 0$ is always positive.\n\n2. **Evaluate the coefficients across intervals:**\nLet's check the behavior of $a = \cos p - 1$ and $c = \sin p$ inside the interval $(0, \pi)$:\n* For any $p \in (0, \pi)$, $\cos p < 1 \implies a = \cos p - 1 < 0$ (strictly negative).\n* For any $p \in (0, \pi)$, $\sin p > 0 \implies c = \sin p > 0$ (strictly positive).\n\n3. **Conclusion:**\nSince $a < 0$ and $c > 0$ throughout the entire interval $(0, \pi)$, the product $ac$ is always negative. This automatically ensures real roots exist without needing to compute complex inequalities."
    },
    {
      id: "trig-pyq-13",
      question: "Number of solutions of the equation $\tan x + \sec x = 2\cos x$ lying in the interval $[0, 2\pi]$ is: (JEE 1993)",
      options: [
        "$0$",
        "$1$",
        "$2$",
        "$3$"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\n\n1. **Convert to basic fractions:**\n$$\frac{\sin x}{\cos x} + \frac{1}{\cos x} = 2\cos x \quad (\text{where } \cos x \neq 0)$$\n$$\sin x + 1 = 2\cos^2 x$$\n\n2. **Transform into a quadratic equation in terms of sine:**\nSubstitute $\cos^2 x = 1 - \sin^2 x$:\n$$\sin x + 1 = 2(1 - \sin^2 x)$$\n$$2\sin^2 x + \sin x - 1 = 0$$\n\n3. **Factor and solve:**\n$$(2\sin x - 1)(\sin x + 1) = 0$$\nThis yields two possibilities:\n* $\sin x = \frac{1}{2}$\n* $\sin x = -1$\n\n4. **Verify constraints in $[0, 2\pi]$:**\n* If $\sin x = -1 \implies x = \frac{3\pi}{2}$. However, at $x = \frac{3\pi}{2}$, $\cos x = 0$, which makes $\tan x$ and $\sec x$ undefined. This solution is rejected.\n* If $\sin x = \frac{1}{2} \implies x = \frac{\pi}{6}$ or $x = \frac{5\pi}{6}$. Both values are perfectly valid as $\cos x \neq 0$.\n\nThus, there are exactly 2 valid solutions."
    },
    {
      id: "trig-pyq-14",
      question: "Let $0 < x < \frac{\pi}{4}$ then $(\sec 2x - \tan 2x)$ equals: (JEE 1994)",
      options: [
        "$\tan\left(x - \frac{\pi}{4}\right)$",
        "$\tan\left(\frac{\pi}{4} - x\right)$",
        "$\tan\left(x + \frac{\pi}{4}\right)$",
        "$\tan^2\left(x + \frac{\pi}{4}\right)$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\n\n1. **Simplify using basic identity expressions:**\n$$\sec 2x - \tan 2x = \frac{1 - \sin 2x}{\cos 2x}$$\n\n2. **Apply perfect square and difference of squares expansions:**\n* We know that $1 - \sin 2x = \cos^2 x + \sin^2 x - 2\sin x\cos x = (\cos x - \sin x)^2$\n* We also know that $\cos 2x = \cos^2 x - \sin^2 x = (\cos x - \sin x)(\cos x + \sin x)$\n\n3. **Substitute and reduce the fraction:**\n$$= \frac{(\cos x - \sin x)^2}{(\cos x - \sin x)(\cos x + \sin x)} = \frac{\cos x - \sin x}{\cos x + \sin x}$$\n\n4. **Convert to a single tangent identity:**\nDivide both the numerator and the denominator by $\cos x$:\n$$= \frac{1 - \tan x}{1 + \tan x} = \tan\left(\frac{\pi}{4} - x\right)$$"
    }
  ]
};

export default trigonometryPyq;
