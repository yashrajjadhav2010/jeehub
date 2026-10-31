export interface MaterialData {
  id: string;
  title: string;
  subject: string;
  category: string;
  content: string;
  flashcards?: Array<{ front: string; back: string }>;
}

export const additionalMaterials: Record<string, MaterialData> = {
  "straight-lines-mindmap": {
    id: "straight-lines-mindmap",
    title: "Straight Lines Mind Map",
    subject: "Mathematics",
    category: "Mind Map",
    content: `### STRAIGHT LINES - JEE INTERACTIVE MIND MAP

* **INCLINATION & SLOPE**
  * **Inclination ($\\theta$)** -> $0^\\circ \\le \\theta < 180^\\circ$, angle with positive X-axis measured anticlockwise
  * **Slope Formula** -> $m = \\tan\\theta = \\frac{y_2 - y_1}{x_2 - x_1}$
  * **Horizontal Line** -> $m = 0$ ($\\theta = 0^\\circ$)
  * **Vertical Line** -> Slope is undefined ($\\theta = 90^\\circ$)
  * **Parallel to X-axis** -> $m = 0$, **Parallel to Y-axis** -> $m = \\infty$

* **STANDARD EQUATIONS OF A LINE**
  * **Slope-Intercept Form** -> $y = mx + c$ ($c = \\text{y-intercept}$)
  * **Point-Slope Form** -> $y - y_1 = m(x - x_1)$
  * **Two-Point Form** -> $\\frac{y - y_1}{y_2 - y_1} = \\frac{x - x_1}{x_2 - x_1}$
  * **Intercept Form** -> $\\frac{x}{a} + \\frac{y}{b} = 1$ ($a = \\text{x-intercept}, b = \\text{y-intercept}$)
  * **Normal Form** -> $x\\cos\\alpha + y\\sin\\alpha = p$ ($p \\ge 0$, $\\alpha \\in [0, 2\\pi)$)
  * **Parametric (Symmetric) Form** -> $\\frac{x - x_1}{\\cos\\theta} = \\frac{y - y_1}{\\sin\\theta} = r$
  * **General Form** -> $Ax + By + C = 0$, Slope $m = -A/B$

* **ANGLE & CONDITIONS BETWEEN TWO LINES**
  * **Acute Angle** -> $\\tan\\theta = \\left| \\frac{m_2 - m_1}{1 + m_1 m_2} \\right|$
  * **General Form Angle** -> $\\tan\\theta = \\left| \\frac{A_1 B_2 - A_2 B_1}{A_1 A_2 + B_1 B_2} \\right|$
  * **Parallel Condition** -> $m_1 = m_2$ or $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} \\neq \\frac{C_1}{C_2}$
  * **Perpendicular Condition** -> $m_1 m_2 = -1$ or $A_1 A_2 + B_1 B_2 = 0$
  * **Coincident Condition** -> $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2}$

* **DISTANCE FORMULAS & REFLECTIONS**
  * **Point-to-Line Distance** -> $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$
  * **Distance Between Parallel Lines** -> $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$ *(Make $A, B$ coefficients identical first!)*
  * **Foot of Perpendicular** $(h,k) -> \\frac{h - x_1}{A} = \\frac{k - y_1}{B} = -\\frac{Ax_1 + By_1 + C}{A^2 + B^2}$
  * **Image / Reflection** $(h',k') -> \\frac{h' - x_1}{A} = \\frac{k' - y_1}{B} = -2\\frac{Ax_1 + By_1 + C}{A^2 + B^2}$

* **FAMILY OF LINES & ANGLE BISECTORS**
  * **Intersection Family** -> $L_1 + \\lambda L_2 = 0$ (Passes through intersection of $L_1=0$ and $L_2=0$)
  * **Parallel Line Family** -> $Ax + By + \\lambda = 0$
  * **Perpendicular Line Family** -> $Bx - Ay + \\lambda = 0$
  * **Angle Bisectors Equation** -> $\\frac{A_1x + B_1y + C_1}{\\sqrt{A_1^2 + B_1^2}} = \\pm \\frac{A_2x + B_2y + C_2}{\\sqrt{A_2^2 + B_2^2}}$
  * **Acute/Obtuse Determination** -> When $C_1, C_2 > 0$: if $A_1A_2 + B_1B_2 > 0$, '$+$' gives obtuse bisector.

* **TRIANGLE CENTERS & CONCURRENCY**
  * **Concurrency of 3 Lines** -> $\\begin{vmatrix} A_1 & B_1 & C_1 \\\\ A_2 & B_2 & C_2 \\\\ A_3 & B_3 & C_3 \\end{vmatrix} = 0$
  * **Centroid ($G$)** -> $(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3})$ (Divides median $2:1$)
  * **Incentre ($I$)** -> $(\\frac{ax_1+bx_2+cx_3}{a+b+c}, \\frac{ay_1+by_2+cy_3}{a+b+c})$
  * **Euler Line** -> Orthocentre ($H$), Centroid ($G$), and Circumcentre ($O$) are collinear: $H-G-O$ in ratio $2:1$`,
    flashcards: [
      { front: "Slope of perpendicular line if m₁ is given", back: "m₂ = -1 / m₁" },
      { front: "Distance between parallel lines Ax+By+C₁=0 and Ax+By+C₂=0", back: "d = |C₁ - C₂| / √(A² + B²)" },
      { front: "Condition for concurrency of 3 lines", back: "Determinant of their coefficients = 0" },
      { front: "Euler line ratio for H, G, O", back: "HG : GO = 2 : 1" }
    ]
  },
  "circles-short-notes": {
    id: "circles-short-notes",
    title: "Circles & Conic Sections",
    subject: "Mathematics",
    category: "Revision Notes",
    content: `# CHAPTER: CIRCLES (COORDINATE GEOMETRY)

### Class 11 Mathematics | JEE Main + Advanced Revision Guide

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. STANDARD EQUATIONS OF CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**1.1 Central Form**
Circle with centre $(h, k)$ and radius $r$:
$$(x - h)^2 + (y - k)^2 = r^2$$

**1.2 General Equation of Circle**
$$x^2 + y^2 + 2gx + 2fy + c = 0$$
* **Centre:** $(-g, -f)$
* **Radius:** $r = \\sqrt{g^2 + f^2 - c}$
  * If $g^2 + f^2 - c > 0 \\implies$ Real circle
  * If $g^2 + f^2 - c = 0 \\implies$ Point circle (radius $= 0$)
  * If $g^2 + f^2 - c < 0 \\implies$ Imaginary circle

**1.3 Diametric Form**
Circle with endpoints of diameter $A(x_1, y_1)$ and $B(x_2, y_2)$:
$$(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$$

**1.4 Parametric Equations**
For $x^2 + y^2 = r^2$:
$$x = r\\cos\\theta, \\quad y = r\\sin\\theta \\quad (0 \\le \\theta < 2\\pi)$$
For $(x - h)^2 + (y - k)^2 = r^2$:
$$x = h + r\\cos\\theta, \\quad y = k + r\\sin\\theta$$

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. INTERCEPTS MADE BY CIRCLE ON AXES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For circle $x^2 + y^2 + 2gx + 2fy + c = 0$:
* **Intercept on X-axis:** $2\\sqrt{g^2 - c}$
  * If $g^2 = c \\implies$ Circle touches the X-axis
* **Intercept on Y-axis:** $2\\sqrt{f^2 - c}$
  * If $f^2 = c \\implies$ Circle touches the Y-axis
* **Circle touches both axes:** $g^2 = f^2 = c = r^2$

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. POSITION OF A POINT RELATIVE TO CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let $S \\equiv x^2 + y^2 + 2gx + 2fy + c = 0$ and point $P(x_1, y_1)$.
Value of $S_1 = x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c$:
* $S_1 > 0 \\implies$ Point $P$ lies **outside** the circle
* $S_1 = 0 \\implies$ Point $P$ lies **on** the circle
* $S_1 < 0 \\implies$ Point $P$ lies **inside** the circle

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. LINE AND A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Distance $p$ from centre to line $y = mx + c$:
* If $p > r \\implies$ Line does not intersect circle (Secant-free)
* If $p = r \\implies$ Line touches the circle (**Tangent**)
* If $p < r \\implies$ Line cuts the circle in two real points (**Secant**)

**Condition of Tangency for $x^2 + y^2 = a^2$ and $y = mx + c$:**
$$c = \\pm a\\sqrt{1 + m^2}$$
Equation of Tangent:
$$y = mx \\pm a\\sqrt{1 + m^2}$$

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. TANGENTS TO A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* **Point Form ($P$ on circle):** $T = 0$
  $$xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0$$
* **Parametric Form:**
  $$x\\cos\\theta + y\\sin\\theta = a$$
* **Length of Tangent from External Point $P(x_1, y_1)$:**
  $$L = \\sqrt{S_1}$$

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. CHORD OF CONTACT & DIRECTOR CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**6.1 Chord of Contact**
Equation of chord of contact from external point $P(x_1, y_1)$ to circle $S = 0$:
$$T = 0$$
**6.2 Director Circle**
Locus of point of intersection of perpendicular tangents:
$$x^2 + y^2 = 2a^2$$
*(Concentric with original circle, radius $= \\sqrt{2}a$)*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. ORTHOGONALITY OF TWO CIRCLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two circles intersect orthogonally if the tangents at their points of intersection are perpendicular:
$$2g_1g_2 + 2f_1f_2 = c_1 + c_2$$

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. RADICAL AXIS & COMMON TANGENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* **Radical Axis:** Locus of points from which lengths of tangents to two circles are equal:
  $$S_1 - S_2 = 0$$
* **Number of Common Tangents:**
  * $d > r_1 + r_2 \\implies$ **4 Common Tangents** (2 Direct, 2 Transverse)
  * $d = r_1 + r_2 \\implies$ **3 Common Tangents** (Touch externally)
  * $|r_1 - r_2| < d < r_1 + r_2 \\implies$ **2 Common Tangents** (Intersect)
  * $d = |r_1 - r_2| \\implies$ **1 Common Tangent** (Touch internally)
  * $d < |r_1 - r_2| \\implies$ **0 Common Tangents** (One inside the other)`,
    flashcards: [
      { front: "General circle centre and radius", back: "Centre = (-g, -f), Radius = √(g² + f² - c)" },
      { front: "Condition for circle to touch X-axis", back: "g² = c" },
      { front: "Condition of tangency for x² + y² = a²", back: "c = ± a√(1 + m²)" },
      { front: "Orthogonality condition for two circles", back: "2g₁g₂ + 2f₁f₂ = c₁ + c₂" },
      { front: "Equation of Director Circle of x² + y² = a²", back: "x² + y² = 2a²" }
    ]
  },
  "circles-mindmap": {
    id: "circles-mindmap",
    title: "Circles Mind Map",
    subject: "Mathematics",
    category: "Mind Map",
    content: `### CIRCLES - JEE INTERACTIVE MIND MAP

* **EQUATIONS OF CIRCLE**
  * **Central Form** -> $(x-h)^2 + (y-k)^2 = r^2$
  * **General Form** -> $x^2+y^2+2gx+2fy+c=0$
    * Centre $= (-g, -f)$, Radius $= \\sqrt{g^2+f^2-c}$
  * **Diametric Form** -> $(x-x_1)(x-x_2) + (y-y_1)(y-y_2) = 0$
  * **Parametric Form** -> $x = h + r\\cos\\theta, y = k + r\\sin\\theta$

* **INTERCEPTS & AXIS TOUCHING**
  * **X-Intercept** -> $2\\sqrt{g^2-c}$, touches X-axis if $g^2 = c$
  * **Y-Intercept** -> $2\\sqrt{f^2-c}$, touches Y-axis if $f^2 = c$
  * **Touches Both Axes** -> $g^2 = f^2 = c = r^2$

* **TANGENTS & NORMALS**
  * **Slope Form** -> $y = mx \\pm a\\sqrt{1+m^2}$
  * **Point Form** -> $T = 0$ ($xx_1 + yy_1 = a^2$)
  * **Length of Tangent** -> $L = \\sqrt{S_1}$
  * **Normal** -> Always passes through centre!

* **CHORDS & DIRECTOR CIRCLE**
  * **Chord of Contact** -> $T = 0$ from external point
  * **Chord with Midpoint $(x_1, y_1)$** -> $T = S_1$
  * **Director Circle** -> $x^2 + y^2 = 2a^2$ (Locus of $\\perp$ tangents)

* **TWO CIRCLES & COMMON TANGENTS**
  * **$d > r_1 + r_2$** -> $4$ common tangents (Circles separate)
  * **$d = r_1 + r_2$** -> $3$ common tangents (Touch externally)
  * **$|r_1 - r_2| < d < r_1 + r_2$** -> $2$ common tangents (Intersect)
  * **$d = |r_1 - r_2|$** -> $1$ common tangent (Touch internally)
  * **Radical Axis** -> $S_1 - S_2 = 0$
  * **Orthogonality** -> $2g_1g_2 + 2f_1f_2 = c_1 + c_2$`,
    flashcards: [
      { front: "Equation of chord with given midpoint (x₁, y₁)", back: "T = S₁" },
      { front: "Length of tangent from point P(x₁, y₁)", back: "L = √S₁" },
      { front: "Radius of Director Circle of x² + y² = r²", back: "R = √2 · r" }
    ]
  },
  "chemical-bonding-short-notes": {
    id: "chemical-bonding-short-notes",
    title: "Chemical Bonding & Molecular Structure",
    subject: "Chemistry",
    category: "Revision Notes",
    content: `# CHAPTER: CHEMICAL BONDING & MOLECULAR STRUCTURE

### Class 11 Chemistry | JEE Main + Advanced Master Revision

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. TYPES OF CHEMICAL BONDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* **Ionic (Electrovalent) Bond:** Transfer of electrons between electropositive and electronegative elements.
  * Favored by: Low Ionization Enthalpy of metal, High Electron Gain Enthalpy of non-metal, High Lattice Enthalpy.
* **Covalent Bond:** Mutual sharing of electron pairs (Lewis-Langmuir theory).
* **Coordinate (Dative) Bond:** Shared electron pair donated by one atom only (e.g., $NH_4^+$, $H_3O^+$).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. FAJAN'S RULES (COVALENT CHARACTER IN IONIC BONDS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Covalent character increases with:
1. **Small cation size** (e.g., $LiCl > NaCl > KCl$).
2. **Large anion size** (e.g., $AgI > AgBr > AgCl > AgF$).
3. **High charge on cation or anion** (e.g., $AlCl_3 > MgCl_2 > NaCl$).
4. **Pseudo-inert gas configuration** of cation ($18e^-$ outer shell, e.g., $Cu^+, Ag^+$ polarize more than $Na^+, K^+$).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. VSEPR THEORY & SHAPES OF MOLECULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Repulsion Order:**
$$\\text{Lone Pair - Lone Pair} > \\text{Lone Pair - Bond Pair} > \\text{Bond Pair - Bond Pair}$$

| Steric Number | Lone Pairs | Geometry | Shape | Examples |
|---|---|---|---|---|
| 2 | 0 | Linear | Linear | $BeCl_2, CO_2$ |
| 3 | 0 | Trigonal Planar | Trigonal Planar | $BF_3, BCl_3$ |
| 3 | 1 | Trigonal Planar | Bent / V-shaped | $SO_2, O_3$ |
| 4 | 0 | Tetrahedral | Tetrahedral | $CH_4, CCl_4$ |
| 4 | 1 | Tetrahedral | Trigonal Pyramidal | $NH_3, PCl_3$ |
| 4 | 2 | Tetrahedral | Bent / Angular | $H_2O, OF_2$ |
| 5 | 0 | Trigonal Bipyramidal | Trigonal Bipyramidal | $PCl_5$ |
| 5 | 1 | Trigonal Bipyramidal | Seesaw | $SF_4$ |
| 5 | 2 | Trigonal Bipyramidal | T-shaped | $ClF_3$ |
| 5 | 3 | Trigonal Bipyramidal | Linear | $XeF_2, I_3^-$ |
| 6 | 0 | Octahedral | Octahedral | $SF_6$ |
| 6 | 1 | Octahedral | Square Pyramidal | $BrF_5, IF_5$ |
| 6 | 2 | Octahedral | Square Planar | $XeF_4$ |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. HYBRIDIZATION SHORTCUT FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Steric Number ($H$):
$$H = \\frac{1}{2} [ V + M - C + A ]$$
Where:
* $V =$ Valence electrons of central atom
* $M =$ Number of monovalent atoms ($H, F, Cl, Br, I$)
* $C =$ Cationic charge
* $A =$ Anionic charge

**Mapping:**
* $H = 2 \\implies sp$ (Linear, $180^\\circ$)
* $H = 3 \\implies sp^2$ (Trigonal planar, $120^\\circ$)
* $H = 4 \\implies sp^3$ (Tetrahedral, $109.5^\\circ$)
* $H = 5 \\implies sp^3d$ (Trigonal bipyramidal)
* $H = 6 \\implies sp^3d^2$ (Octahedral)
* $H = 7 \\implies sp^3d^3$ (Pentagonal bipyramidal)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. MOLECULAR ORBITAL THEORY (MOT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* **Bond Order (BO):**
  $$BO = \\frac{N_b - N_a}{2}$$
  * $BO > 0 \\implies$ Molecule is stable.
  * $BO = 0 \\implies$ Molecule cannot exist (e.g., $He_2, Ne_2$).
* **Magnetic Behavior:**
  * Unpaired electrons present $\\implies$ **Paramagnetic** (e.g., $O_2, B_2$).
  * All electrons paired $\\implies$ **Diamagnetic** (e.g., $N_2, C_2$).
* **Electronic Configuration:**
  * **For $\\le 14$ electrons ($B_2, C_2, N_2$):**
    $$\\sigma 1s < \\sigma^* 1s < \\sigma 2s < \\sigma^* 2s < (\\pi 2p_x = \\pi 2p_y) < \\sigma 2p_z$$
  * **For $> 14$ electrons ($O_2, F_2$):**
    $$\\sigma 1s < \\sigma^* 1s < \\sigma 2s < \\sigma^* 2s < \\sigma 2p_z < (\\pi 2p_x = \\pi 2p_y)$$

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. HYDROGEN BONDING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dipole-dipole attraction between $H$ bonded to highly electronegative atom ($F, O, N$).
* **Intermolecular H-Bonding:** Between two different molecules (e.g., $H_2O, HF$, p-nitrophenol). Increases boiling point and solubility.
* **Intramolecular H-Bonding:** Within the same molecule forming a chelate ring (e.g., o-nitrophenol, salicylaldehyde). Lowers boiling point, increases volatility.`,
    flashcards: [
      { front: "Hybridization steric number formula", back: "H = 1/2 [V + M - C + A]" },
      { front: "Bond Order Formula in MOT", back: "BO = (Nb - Na) / 2" },
      { front: "Why is O₂ paramagnetic according to MOT?", back: "It contains 2 unpaired electrons in degenerate π*2px and π*2py orbitals" },
      { front: "Order of electron pair repulsions in VSEPR", back: "lp-lp > lp-bp > bp-bp" }
    ]
  },
  "quadratic-equations-short-notes": {
    id: "quadratic-equations-short-notes",
    title: "Quadratic Equations & Complex Numbers",
    subject: "Mathematics",
    category: "Revision Notes",
    content: `# CHAPTER: QUADRATIC EQUATIONS & COMPLEX NUMBERS

### Class 11 Mathematics | JEE Main + Advanced

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. ROOTS & DISCRIMINANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For $ax^2 + bx + c = 0$ ($a \\neq 0$):
Roots:
$$x = \\frac{-b \\pm \\sqrt{D}}{2a}, \\quad \\text{where } D = b^2 - 4ac$$

* **Nature of Roots:**
  * $D > 0 \\implies$ Real and distinct roots.
  * $D = 0 \\implies$ Real and equal roots (repeated root $x = -b/2a$).
  * $D < 0 \\implies$ Complex conjugate roots ($p \\pm iq$).
  * If $a, b, c \\in \\mathbb{Q}$ and $D$ is a perfect square $\\implies$ Rational roots.
  * If $a, b, c \\in \\mathbb{Q}$ and $D$ is not a perfect square $\\implies$ Conjugate surd roots ($p \\pm \\sqrt{q}$).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. RELATION BETWEEN ROOTS AND COEFFICIENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If $\\alpha, \\beta$ are roots of $ax^2 + bx + c = 0$:
* **Sum of roots:** $\\alpha + \\beta = -\\frac{b}{a}$
* **Product of roots:** $\\alpha\\beta = \\frac{c}{a}$
* **Difference of roots:** $|\\alpha - \\beta| = \\frac{\\sqrt{D}}{|a|}$

**Newton's Theorem (High Yield for JEE Main):**
If $S_n = \\alpha^n + \\beta^n$, then:
$$a S_n + b S_{n-1} + c S_{n-2} = 0$$

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. LOCATION OF ROOTS (CRITICAL JEE TOPIC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let $f(x) = ax^2 + bx + c$ ($a > 0$):
* **Both roots greater than $k$:**
  1. $D \\ge 0$
  2. $-\\frac{b}{2a} > k$
  3. $a f(k) > 0$
* **Both roots less than $k$:**
  1. $D \\ge 0$
  2. $-\\frac{b}{2a} < k$
  3. $a f(k) > 0$
* **$k$ lies between the roots:**
  $$a f(k) < 0$$
* **Both roots lie in interval $(k_1, k_2)$:**
  1. $D \\ge 0$
  2. $k_1 < -\\frac{b}{2a} < k_2$
  3. $a f(k_1) > 0$ and $a f(k_2) > 0$

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. COMMON ROOTS OF TWO QUADRATICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* **One common root:** Between $a_1x^2 + b_1x + c_1 = 0$ and $a_2x^2 + b_2x + c_2 = 0$:
  $$(c_1a_2 - c_2a_1)^2 = (a_1b_2 - a_2b_1)(b_1c_2 - b_2c_1)$$
* **Both roots common:**
  $$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$$

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. COMPLEX NUMBERS & DE MOIVRE'S THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* **Standard Form:** $z = x + iy$, $|z| = \\sqrt{x^2+y^2}$, $\\bar{z} = x - iy$
* **Euler's Form:** $z = r e^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)$
* **Cube Roots of Unity:** $1, \\omega, \\omega^2$
  * $1 + \\omega + \\omega^2 = 0$
  * $\\omega^3 = 1$
  * $\\omega = \\frac{-1 + i\\sqrt{3}}{2}, \\quad \\omega^2 = \\frac{-1 - i\\sqrt{3}}{2}$`,
    flashcards: [
      { front: "Newton's Theorem for αⁿ + βⁿ in ax² + bx + c = 0", back: "a·Sₙ + b·Sₙ₋₁ + c·Sₙ₋₂ = 0" },
      { front: "Condition for number k to lie strictly between the roots", back: "a · f(k) < 0" },
      { front: "Sum and product of cube roots of unity", back: "1 + ω + ω² = 0, and ω³ = 1" }
    ]
  }
};
