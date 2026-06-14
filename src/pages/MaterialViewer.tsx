import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Bookmark, BrainCircuit, CheckCheck, Clock, Download, FileText, Info, AlertTriangle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { cn } from '../lib/utils';

interface MaterialData {
  id: string;
  title: string;
  subject: string;
  category: string;
  content: string;
}

const mockDb: Record<string, MaterialData> = {
  'rotational-motion-short-notes': {
    id: 'rotational-motion-short-notes',
    title: 'Rotational Motion',
    subject: 'Physics',
    category: 'Revision Notes',
    content: `### ROTATIONAL MOTION - JEE SHORT NOTES

**1. ROTATIONAL MOTION**
Motion of a body about a fixed axis. (e.g., Ceiling Fan, Wheel, Earth Rotation)

---

**2. ANGULAR DISPLACEMENT & VELOCITY**
* **Angular Displacement ($\\theta$):** $\\theta = \\frac{s}{R}$. Unit: Radian (rad). 1 Revolution = $2\\pi$ rad.
* **Angular Velocity ($\\omega$):** $\\omega = \\frac{d\\theta}{dt}$. Unit: rad/s. Relation with linear velocity: $v = R\\omega$.
* **Angular Acceleration ($\\alpha$):** $\\alpha = \\frac{d\\omega}{dt}$. Unit: rad/$s^2$. Relation with tangential acceleration: $a_t = R\\alpha$.

---

**3. ROTATIONAL KINEMATICS**
Similar to linear kinematics:
* $\\omega = \\omega_0 + \\alpha t$
* $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$
* $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$

---

**4. TORQUE ($\\tau$)**
Rotational equivalent of force.
* $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$
* Magnitude: $\\tau = rF \\sin\\theta$. Unit: N·m
* Direction: Given by Right Hand Rule.

---

**5. MOMENT OF INERTIA (I)**
Rotational equivalent of mass. Depends on mass distribution.
* **Point Masses:** $I = \\Sigma mr^2$
* **Continuous Body:** $I = \\int r^2 dm$. Unit: kg·$m^2$
* **Radius of Gyration (K):** $I = MK^2 \\implies K = \\sqrt{\\frac{I}{M}}$. Unit: metre (m).

---

**6. THEOREMS OF MOMENT OF INERTIA**
* **Parallel Axis Theorem:** $I = I_{cm} + Md^2$ (where d = Distance between axes)
* **Perpendicular Axis Theorem (For Plane Lamina):** $I_z = I_x + I_y$

---

**7. MOMENT OF INERTIA OF STANDARD BODIES & RADIUS OF GYRATION**
* **Ring about Centre:** $I = MR^2 \\implies K = R$
* **Disc about Centre / Solid Cylinder:** $I = \\frac{1}{2}MR^2 \\implies K = \\frac{R}{\\sqrt{2}}$
* **Hollow Cylinder:** $I = MR^2$
* **Solid Sphere:** $I = \\frac{2}{5}MR^2 \\implies K = \\sqrt{\\frac{2}{5}}R$
* **Hollow Sphere:** $I = \\frac{2}{3}MR^2$
* **Rod about Centre:** $I = \\frac{1}{12}ML^2 \\implies K = \\frac{L}{\\sqrt{12}}$
* **Rod about End:** $I = \\frac{1}{3}ML^2$

---

**8. NEWTON'S SECOND LAW FOR ROTATION**
* $\\tau_{net} = I\\alpha$ *(Most Important Formula)*

---

**9. ANGULAR MOMENTUM (L)**
* **General:** $\\vec{L} = \\vec{r} \\times \\vec{p}$
* **For Circular Motion:** $L = mvr$
* **For Rigid Body:** $L = I\\omega$ (Unit: kg·$m^2$/s)
    * Ring: $L = MR^2\\omega$, Disc: $L = \\frac{1}{2}MR^2\\omega$

---

**10. CONSERVATION OF ANGULAR MOMENTUM**
* If External Torque = 0, then $\\vec{L} = \\text{Constant}$.
* $I_1\\omega_1 = I_2\\omega_2$

---

**11. WORK, ENERGY & POWER IN ROTATION**
* **Rotational Kinetic Energy:** $K = \\frac{1}{2}I\\omega^2$ *(Most Important Formula)*
* **Work Done:** $W = \\tau\\theta$ (Unit: Joule)
* **Power:** $P = \\tau\\omega$ (Unit: Watt)

---

**12. ROLLING MOTION**
Combination of Translation and Rotation.
* **Pure Rolling Condition:** $v = R\\omega$
* **Total Kinetic Energy:** $K_{total} = K_{trans} + K_{rot} = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2$

---

**13. ROLLING DOWN AN INCLINE**
* **Acceleration:** $a = \\frac{g\\sin\\theta}{1 + \\frac{I}{MR^2}}$
* Smaller $I \\implies$ Greater Acceleration.
* **Order of Acceleration down incline:**
  Ring < Hollow Sphere < Disc < Solid Sphere

---

**14. JEE MUST-REMEMBER FACTS**
* Torque causes angular acceleration.
* Moment of inertia depends on mass distribution.
* Angular momentum conserved if external torque is zero.
* Ring has maximum I among common bodies for the same mass and radius.
* Solid sphere reaches bottom first on rough incline.`
  },
  'work-power-energy-short-notes': {
    id: 'work-power-energy-short-notes',
    title: 'Work, Power & Energy',
    subject: 'Physics',
    category: 'Revision Notes',
    content: `### WORK POWER ENERGY - JEE SHORT NOTES

**1. WORK**
Work is said to be done when a force causes displacement.
* **Formula:** $W = \\vec{F} \\cdot \\vec{s} = Fs \\cos\\theta$ (Where F = Force, s = Displacement, $\\theta$ = Angle)
* **Unit:** Joule (J)
* **Dimension:** $[M L^2 T^{-2}]$

---

**2. SPECIAL CASES OF WORK**
* **$\\theta = 0^\\circ$:** $W = Fs$ (Maximum Positive Work)
* **$\\theta = 90^\\circ$:** $W = 0$ (No Work Done)
* **$\\theta = 180^\\circ$:** $W = -Fs$ (Maximum Negative Work)

---

**3. WORK DONE BY VARIABLE FORCE**
* $W = \\int F dx$
* Area under F-x graph = Work Done

---

**4. ENERGY**
Capacity to do work. Unit: Joule (J). Types: Kinetic Energy, Potential Energy, Mechanical Energy.

---

**5. KINETIC ENERGY (K.E.)**
Energy possessed due to motion.
* $K = \\frac{1}{2}mv^2$
* **Unit:** Joule; **Dimension:** $[M L^2 T^{-2}]$
* **In terms of momentum (p):** $K = \\frac{p^2}{2m}$
    * For same momentum: $K \\propto \\frac{1}{m}$
    * For same kinetic energy: $p \\propto \\sqrt{m}$

---

**6. WORK-ENERGY THEOREM**
Net Work Done = Change in Kinetic Energy
* $W_{net} = \\Delta K$ *(Most Important Theorem)*

---

**7. POTENTIAL ENERGY (P.E.)**
Energy possessed due to position or configuration.
* **Gravitational Potential Energy (Near Earth Surface):** $U = mgh$ (h = Height from reference level)
* **Spring Potential Energy:** $U = \\frac{1}{2}kx^2$ (k = Spring Constant, x = Compression/Extension) *(Most Important Formula)*

---

**8. CONSERVATIVE & NON-CONSERVATIVE FORCES**
* **Conservative Force:** Work done is path independent. (e.g., Gravitational Force, Electrostatic Force, Spring Force)
    * $F = -\\frac{dU}{dx}$ (Slope of U-x graph = -Force)
* **Non-Conservative Force:** Work done depends on path. (e.g., Friction, Air Resistance)

---

**9. MECHANICAL ENERGY**
Total Energy: $E = K + U$
* **Conservation of Mechanical Energy:** If only conservative forces act, Total Mechanical Energy remains constant: $K_1 + U_1 = K_2 + U_2$

---

**10. POWER**
Rate of doing work. Unit: Watt (W) = 1 J/s.
* **Average Power:** $P_{avg} = \\frac{W}{t}$
* **Instantaneous Power:** $P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v}$ *(Most Important Formula)*

---

**11. EFFICIENCY**
* $\\eta = \\frac{\\text{Output Power}}{\\text{Input Power}}$
* Percentage Efficiency: $\\eta\\% = \\eta \\times 100$

---

**12. SPRING FORCE & WORK DONE**
* **Hooke's Law:** $F = -kx$ (Negative sign indicates restoring nature)
* **Work done by spring:** $W = \\frac{1}{2}k(x_1^2 - x_2^2)$
    * Special Case ($0 \\to x$): $W = -\\frac{1}{2}kx^2$

---

**13. COLLISIONS**
* Momentum is conserved in all collisions.
* **Elastic Collision:** Momentum conserved, Kinetic Energy conserved.
* **Inelastic Collision:** Momentum conserved, Kinetic Energy not conserved.

---

**14. ESCAPE VELOCITY**
Minimum velocity needed to escape Earth's gravity.
* $V_e = \\sqrt{2gR}$ *(Most Important Formula)*

---

**15. JEE MUST-REMEMBER FACTS**
* Work, Energy, and Power are all scalar quantities.
* Work done by centripetal force = 0.
* Mechanical energy is conserved only when non-conservative forces are absent.
* P = Fv when force and velocity are along the same direction.`
  },
  'vectors-short-notes': {
    id: 'vectors-short-notes',
    title: 'Vectors - JEE Short Notes',
    subject: 'Physics',
    category: 'Short Notes',
    content: `### VECTORS - JEE SHORT NOTES

**1. BASICS & DIRECTION COSINES**
* **Unit Vector:** A vector of magnitude 1. $\\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|}$
* **Collinear Vectors:** Two vectors $\\vec{a}$ and $\\vec{b}$ are collinear if $\\vec{a} = \\lambda\\vec{b}$ for some scalar $\\lambda$.
* **Direction Cosines (DC):** If a vector makes angles $\\alpha$, $\\beta$, and $\\gamma$ with the x, y, and z axes respectively, the DCs are $l = \\cos\\alpha$, $m = \\cos\\beta$, $n = \\cos\\gamma$.
    * **Key Relation:** $l^2 + m^2 + n^2 = 1$
    * **Direction Ratios (DR):** Any numbers proportional to DCs. If $a, b, c$ are DRs, then $l = \\pm \\frac{a}{\\sqrt{a^2+b^2+c^2}}$, etc.
* **Section Formula:**
    * Internal Division: $\\vec{r} = \\frac{m\\vec{b} + n\\vec{a}}{m + n}$
    * External Division: $\\vec{r} = \\frac{m\\vec{b} - n\\vec{a}}{m - n}$

---

**2. SCALAR (DOT) PRODUCT**
* **Formula:** $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$
* **Properties:**
    * Commutative: $\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$
    * Self-Dot: $\\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2 = a^2$
    * Orthogonal Condition: If $\\vec{a} \\perp \\vec{b}$, then $\\vec{a} \\cdot \\vec{b} = 0$.
* **Projection of a Vector:**
    * Scalar projection of $\\vec{a}$ on $\\vec{b}$: $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$
    * Vector projection of $\\vec{a}$ on $\\vec{b}$: $\\left( \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\right) \\vec{b}$

---

**3. VECTOR (CROSS) PRODUCT**
* **Formula:** $\\vec{a} \\times \\vec{b} = |\\vec{a}||\\vec{b}|\\sin\\theta \\hat{n}$ (where $\\hat{n}$ is a unit vector perpendicular to both $\\vec{a}$ and $\\vec{b}$ given by the right-hand rule).
* **Properties:**
    * Anti-commutative: $\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$
    * Parallel Condition: If $\\vec{a} \\parallel \\vec{b}$, then $\\vec{a} \\times \\vec{b} = \\vec{0}$.
* **Geometrical Applications:**
    * Area of Triangle: $\\frac{1}{2}|\\vec{a} \\times \\vec{b}|$ (where $\\vec{a}$ and $\\vec{b}$ are adjacent sides).
    * Area of Parallelogram: $|\\vec{a} \\times \\vec{b}|$ (adjacent sides) OR $\\frac{1}{2}|\\vec{d}_1 \\times \\vec{d}_2|$ (where $\\vec{d}_1$ and $\\vec{d}_2$ are diagonals).
* **Lagrange's Identity:** $|\\vec{a} \\times \\vec{b}|^2 = |\\vec{a}|^2|\\vec{b}|^2 - (\\vec{a} \\cdot \\vec{b})^2$

---

**4. SCALAR TRIPLE PRODUCT (STP)**
* **Formula:** $[\\vec{a} \\ \\vec{b} \\ \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$
* **Geometrical Meaning:** Represents the volume of a parallelepiped with coterminous edges $\\vec{a}$, $\\vec{b}$, and $\\vec{c}$. Volume = $|[\\vec{a} \\ \\vec{b} \\ \\vec{c}]|$
* **Properties:**
    * Cyclic permutation preserves value: $[\\vec{a} \\ \\vec{b} \\ \\vec{c}] = [\\vec{b} \\ \\vec{c} \\ \\vec{a}] = [\\vec{c} \\ \\vec{a} \\ \\vec{b}]$
    * Swapping two vectors changes the sign: $[\\vec{a} \\ \\vec{b} \\ \\vec{c}] = -[\\vec{b} \\ \\vec{a} \\ \\vec{c}]$
    * If any two vectors are parallel or identical, STP is zero.
* **Coplanar Condition:** Three vectors are coplanar if and only if $[\\vec{a} \\ \\vec{b} \\ \\vec{c}] = 0$.
* **Volume of Tetrahedron:** $V = \\frac{1}{6}|[\\vec{a} \\ \\vec{b} \\ \\vec{c}]|$

---

**5. VECTOR TRIPLE PRODUCT (VTP)**
* **Formula:** $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$
    * *Mnemonic:* **BAC - CAB**
* **Key Concept:** The resulting vector is coplanar with $\\vec{b}$ and $\\vec{c}$ (lies in their plane) and is perpendicular to $\\vec{a}$.
* **Note:** Vector cross product is NOT associative: $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) \\neq (\\vec{a} \\times \\vec{b}) \\times \\vec{c}$ (unless specific conditions apply).`
  },
  'kinematics-equations': {
    id: 'kinematics-equations',
    title: 'Kinematics Equations',
    subject: 'Physics',
    category: 'Formula Sheet',
    content: `### KINEMATICS - JEE SHORT NOTES

**1. MOTION IN 1D & CALCULUS APPROACH**
* **Basic Definitions:**
    * Average Velocity = $\\frac{\\Delta s}{\\Delta t}$
    * Instantaneous Velocity $v = \\frac{ds}{dt}$
    * Average Acceleration = $\\frac{\\Delta v}{\\Delta t}$
    * Instantaneous Acceleration $a = \\frac{dv}{dt} = v\\frac{dv}{ds}$
* **Equations of Motion (For Constant Acceleration ONLY):**
    * $v = u + at$
    * $s = ut + \\frac{1}{2}at^2$
    * $v^2 = u^2 + 2as$
    * Distance in $n^{th}$ second: $s_n = u + \\frac{a}{2}(2n - 1)$
* **Stopping Distance:** $s = \\frac{u^2}{2a}$ (where $a$ is retardation).
* **Free Fall (under gravity, taking downward as negative):**
    * $a = -g$
    * Time to reach max height: $t = \\frac{u}{g}$
    * Max height reached: $H = \\frac{u^2}{2g}$

---

**2. GRAPHICAL ANALYSIS**
* **Position-Time (s-t) Graph:**
    * Slope = Velocity ($v = \\tan\\theta$)
    * Concavity upwards means positive acceleration ($a > 0$); downwards means negative acceleration ($a < 0$).
* **Velocity-Time (v-t) Graph:**
    * Slope = Acceleration ($a = \\tan\\theta$)
    * Area under curve = Displacement (taking sign into account) or Distance (taking strictly positive area).
* **Acceleration-Time (a-t) Graph:**
    * Area under curve = Change in velocity ($\\Delta v$).

---

**3. PROJECTILE MOTION (2D MOTION)**
* **Components:** Initial velocity $u$ at angle $\\theta$ with horizontal.
    * $u_x = u\\cos\\theta$ (constant throughout motion, as $a_x = 0$)
    * $u_y = u\\sin\\theta$ (changes due to gravity, $a_y = -g$)
* **Key Formulas:**
    * **Time of Flight ($T$):** $T = \\frac{2u\\sin\\theta}{g}$
    * **Maximum Height ($H$):** $H = \\frac{u^2\\sin^2\\theta}{2g}$
    * **Horizontal Range ($R$):** $R = \\frac{u^2\\sin(2\\theta)}{g}$
        * *Note:* Range is maximum when $\\theta = 45^\\circ$ ($R_{max} = \\frac{u^2}{g}$).
        * *Note:* Range is same for complementary angles $\\theta$ and $(90^\\circ - \\theta)$.
* **Equation of Trajectory:**
    * $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$
    * Alternate form (very useful): $y = x\\tan\\theta \\left(1 - \\frac{x}{R}\\right)$
* **Projectile on an Inclined Plane (Angle of incline $\\alpha$, projection angle $\\theta$ from horizontal):**
    * Time of flight: $T = \\frac{2u\\sin(\\theta - \\alpha)}{g\\cos\\alpha}$

---

**4. RELATIVE MOTION**
* **1D Relative Motion:**
    * Velocity of A w.r.t B: $\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B$
    * Acceleration of A w.r.t B: $\\vec{a}_{AB} = \\vec{a}_A - \\vec{a}_B$
* **River-Boat Problem:** Let $v_{br}$ be velocity of boat w.r.t river, $v_r$ be velocity of river flow, $d$ be river width.
    * **Crossing in Shortest Time:** Boat must head perpendicular to river flow.
        * $t_{min} = \\frac{d}{v_{br}}$
        * Drift = $v_r \\times t_{min}$
    * **Crossing along Shortest Path (Zero Drift):** Boat must head at an angle $\\theta$ upstream from the perpendicular.
        * Condition: $\\sin\\theta = \\frac{v_r}{v_{br}}$ (Requires $v_{br} > v_r$)
        * Time taken: $t = \\frac{d}{\\sqrt{v_{br}^2 - v_r^2}}$
* **Rain-Man Problem:**
    * $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m$ (Velocity of rain w.r.t man)
    * To protect himself, the man should hold his umbrella opposite to the direction of $\\vec{v}_{rm}$.`
  },
  'laws-of-motion': {
    id: 'laws-of-motion',
    title: 'Laws of Motion',
    subject: 'Physics',
    category: 'Formula Sheet',
    content: `### NEWTON'S LAWS OF MOTION (NLM) & FRICTION - JEE SHORT NOTES

**1. NEWTON'S LAWS OF MOTION**
* **First Law (Law of Inertia):** A body continues in its state of rest or uniform motion unless acted upon by a net external force. ($\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{constant}$).
* **Second Law:** The rate of change of momentum is directly proportional to the applied net force. 
    * $\\vec{F}_{net} = \\frac{d\\vec{p}}{dt}$
    * If mass is constant: $\\vec{F}_{net} = m\\vec{a}$
    * Variable mass system (e.g., rocket propulsion): $F_{thrust} = u_{rel}\\frac{dm}{dt}$
* **Third Law:** For every action, there is an equal and opposite reaction. Action and reaction forces act on *different* bodies simultaneously.

---

**2. COMMON FORCES & FBD (Free Body Diagram)**
* **Weight ($W$):** Acts vertically downwards. $W = mg$.
* **Normal Reaction ($N$):** Acts perpendicular (normal) to the surfaces in contact. It is an electromagnetic pushing force.
* **Tension ($T$):** Acts along the length of a taut string, away from the body it is pulling. (Assume string is massless and inextensible unless stated otherwise).
* **Spring Force ($F_s$):** Restoring force $F_s = -kx$ (where $k$ is spring constant, $x$ is extension/compression).
* **Shortcut for System Acceleration:** * $a = \\frac{\\text{Net Driving Force}}{\\text{Total Mass of the System}}$ (Applicable only if all bodies move with the same acceleration magnitude).

---

**3. STANDARD CASES & FORMULAS**
* **Atwood Machine (Two masses $m_1, m_2$ suspended over a smooth pulley, $m_2 > m_1$):**
    * Acceleration: $a = \\frac{(m_2 - m_1)g}{m_1 + m_2}$
    * Tension: $T = \\frac{2m_1 m_2 g}{m_1 + m_2}$
    * Force on pulley clamp: $F_c = 2T$
* **Mass $m_1$ on smooth horizontal table connected to $m_2$ hanging vertically:**
    * $a = \\frac{m_2 g}{m_1 + m_2}$
    * $T = \\frac{m_1 m_2 g}{m_1 + m_2}$
* **Motion on a Smooth Inclined Plane (angle $\\theta$):**
    * Component of weight down the incline: $mg\\sin\\theta$
    * Normal reaction: $N = mg\\cos\\theta$
    * Acceleration down incline: $a = g\\sin\\theta$

---

**4. PSEUDO FORCE (Non-Inertial Frames)**
* Used when analyzing motion from an accelerating reference frame.
* Formula: $\\vec{F}_p = -m\\vec{a}_0$
    * $m$ = mass of the object being observed.
    * $\\vec{a}_0$ = acceleration of the observer's frame (with respect to ground).
    * The negative sign indicates the pseudo force acts in the *opposite* direction to the frame's acceleration.
* **Classic Example (Pendulum in accelerating car with acceleration $a$):**
    * Angle made with vertical: $\\tan\\theta = \\frac{a}{g}$
    * Effective gravity: $g_{eff} = \\sqrt{g^2 + a^2}$
    * Tension in string: $T = m\\sqrt{g^2 + a^2}$

---

**5. FRICTION**
* **Static Friction ($f_s$):** Self-adjusting force that opposes impending motion.
    * It ranges from $0 \\le f_s \\le f_{s(max)}$
    * Limiting friction (max static): $f_{s(max)} = \\mu_s N$
* **Kinetic Friction ($f_k$):** Opposes actual relative motion. It is constant.
    * $f_k = \\mu_k N$ (Generally, $\\mu_k < \\mu_s$)
* **Angle of Friction ($\\theta$):** The angle the resultant of limiting friction and Normal reaction makes with the Normal reaction. 
    * $\\tan\\theta = \\mu_s$
* **Angle of Repose ($\\alpha$):** Minimum angle of an inclined plane at which a block just starts to slide.
    * $\\tan\\alpha = \\mu_s$
* **Block on a Rough Inclined Plane (Angle $\\theta$):**
    * If $\\theta < \\alpha$: Block is at rest. Friction $f = mg\\sin\\theta$ (Static).
    * If $\\theta = \\alpha$: Block is about to slide. Friction $f = \\mu_s mg\\cos\\theta$.
    * If $\\theta > \\alpha$: Block slides down. Acceleration $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$.

---

**6. CUTTING OF STRINGS & SPRINGS**
* **Springs:** The spring force ($kx$) does **not** change instantaneously just after a cut is made elsewhere in the system (unless the spring itself is cut), because deformation $x$ requires time to change.
* **Strings:** Tension ($T$) changes **instantaneously** (drops to zero or adjusts to a new value immediately) because a string cannot sustain any slack or requires no macroscopic deformation to transmit force.`
  },
  'periodic-properties': {
    id: 'periodic-properties',
    title: 'Periodic Properties',
    subject: 'Chemistry',
    category: 'Revision Notes',
    content: `### PERIODIC PROPERTIES - JEE SHORT NOTES

**1. EFFECTIVE NUCLEAR CHARGE (Zeff)**
* Attraction experienced by valence electrons towards the nucleus.
* Zeff = Z – S
  where Z = Atomic Number
        S = Shielding Constant

**Trend:**
* Across a Period: Increases
* Down a Group: Slightly Increases

Higher Zeff $\\implies$ Smaller Atomic Size, Higher Ionization Energy, Higher Electronegativity.

---

**2. ATOMIC RADIUS**
Distance between the nucleus and the outermost shell.

**Trend:**
* Across a Period: Decreases (Due to increase in Zeff)
* Down a Group: Increases (Due to addition of new shells)

Example: Li > Be > B > C > N > O > F

---

**3. IONIC RADIUS**
**Cations (+):**
* Smaller than parent atom.
* Example: Na⁺ < Na

**Anions (−):**
* Larger than parent atom.
* Example: Cl⁻ > Cl

**Isoelectronic Species:**
* Greater nuclear charge $\\implies$ Smaller size
* Order: N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺

---

**4. IONIZATION ENERGY (IE)**
Energy required to remove the most loosely bound electron.

**Trend:**
* Across a Period: Increases
* Down a Group: Decreases

**Important Exceptions:**
* Be > B (Electron removed from 2p orbital in B)
* N > O (Extra stability of half-filled p³ configuration)

Highest IE: Noble Gases
Lowest IE: Alkali Metals

---

**5. ELECTRON AFFINITY (EA)**
Energy released when an electron is added to a gaseous atom.

**Trend:**
* Across a Period: Generally Increases
* Down a Group: Generally Decreases

**Important Exceptions:**
* Cl > F
* Noble gases have nearly zero or positive EA.

Order: Cl > F > Br > I

---

**6. ELECTRONEGATIVITY (EN)**
Tendency of an atom to attract shared electron pair.

**Trend:**
* Across a Period: Increases
* Down a Group: Decreases

Highest Electronegativity: Fluorine (4.0)
Lowest Electronegativity: Francium

---

**7. METALLIC CHARACTER**
Tendency to lose electrons.

**Trend:**
* Across a Period: Decreases
* Down a Group: Increases

Most Metallic Element: Cesium / Francium

---

**8. NON-METALLIC CHARACTER**
Tendency to gain electrons.

**Trend:**
* Across a Period: Increases
* Down a Group: Decreases

Most Non-Metallic Element: Fluorine

---

**9. OXIDIZING AND REDUCING NATURE**
**Oxidizing Power:** Ability to gain electrons.
Order: F₂ > Cl₂ > Br₂ > I₂

**Reducing Power:** Ability to lose electrons.
Order: Li < Na < K < Rb < Cs

---

**10. ACIDIC AND BASIC CHARACTER OF OXIDES**
**Across a Period:** Basic $\\to$ Amphoteric $\\to$ Acidic
Example: Na₂O $\\to$ MgO $\\to$ Al₂O₃ $\\to$ SiO₂ $\\to$ P₂O₅ $\\to$ SO₃

**Down a Group:**
* Basic character increases.
* Acidic character decreases.

---

**MOST IMPORTANT JEE EXCEPTIONS**
1. Be > B (Ionization Energy)
2. N > O (Ionization Energy)
3. Cl > F (Electron Affinity)
4. Ga < Al (Atomic Radius Anomaly)
5. Noble Gases $\\to$ Highest IE and nearly zero EA`
  }
};

export default function MaterialViewer() {
  const { materialId } = useParams();
  const [data, setData] = useState<MaterialData | null>(null);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    if (materialId && mockDb[materialId]) {
      setData(mockDb[materialId]);
    } else {
      setData(mockDb['vectors-short-notes']); // Fallback to vectors for now
    }
  }, [materialId]);

  if (!data) return null;

  return (
    <div className="space-y-8 pb-20 max-w-4xl mx-auto px-4 sm:px-0">
      <Link to="/study" className="inline-flex items-center gap-2 text-emerald-900/40 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wide group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Archive
      </Link>

      <div className="bg-white rounded-[2rem] sm:rounded-[3rem] border-2 border-emerald-50 shadow-2xl shadow-emerald-900/5 p-6 sm:p-12">
        <header className="mb-10 sm:mb-12 border-b-2 border-emerald-50 pb-8 sm:pb-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">
              {data.subject}
            </span>
            <span className="w-1 h-1 rounded-full bg-emerald-200" />
            <span className="text-emerald-900/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              {data.category}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black heading-display tracking-tight text-emerald-950 uppercase mb-4">
            {data.title}
          </h1>
          <div className="flex items-center gap-6 text-emerald-900/40">
             <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide"><Clock size={14} /> 5 Min Read</span>
             <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide"><CheckCheck size={14} /> JEE Syllabus Aligned</span>
          </div>
        </header>

        <article className="prose prose-emerald prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-emerald-950 prose-p:text-emerald-900/80 prose-strong:text-emerald-900 prose-li:marker:text-primary prose-a:text-primary hover:prose-a:text-emerald-600">
           {/* We add a custom wrapper for react-markdown to style math properly */}
           <div className="markdown-body">
             <ReactMarkdown 
               remarkPlugins={[remarkMath, remarkGfm]} 
               rehypePlugins={[rehypeKatex]}
               components={{
                 h3: ({node, ...props}) => <h3 className="flex items-center gap-2 pt-6 border-t-2 border-emerald-50" {...props} />,
                 table: ({node, ...props}) => (
                   <div className="w-full overflow-x-auto my-4 md:my-6 rounded-xl border border-gray-100 shadow-sm">
                     <table className="w-full text-left border-collapse min-w-[500px]" {...props} />
                   </div>
                 )
               }}
             >
               {data.content}
             </ReactMarkdown>
           </div>
        </article>
      </div>
      
      <div className="bg-emerald-50/50 p-6 sm:p-8 rounded-3xl border-2 border-emerald-100/50 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-emerald-900/60">
           <Info size={24} className="text-emerald-400" />
           <p className="text-sm font-medium">Was this material helpful for your revision?</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-6 py-3 bg-white text-emerald-900 font-bold text-xs uppercase tracking-widest border-2 border-emerald-100 rounded-xl hover:border-primary/50 transition-colors shadow-sm">
             Needs Improvement
          </button>
          <button className="flex-1 sm:flex-none px-6 py-3 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-colors shadow-lg shadow-primary/20 flex justify-center items-center gap-2">
             <Bookmark size={14} /> Save
          </button>
        </div>
      </div>
    </div>
  );
}
