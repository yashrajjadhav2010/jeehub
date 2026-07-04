import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { jsPDF } from "jspdf";
import {
  ArrowLeft,
  Bookmark,
  BrainCircuit,
  CheckCheck,
  Clock,
  Download,
  FileText,
  Info,
  AlertTriangle,
  Network,
  Layers,
  Plus,
  Minus,
  Sparkles,
  Library,
  Loader2,
  X,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { cn } from "../lib/utils";

interface MaterialData {
  id: string;
  title: string;
  subject: string;
  category: string;
  content: string;
  flashcards?: Array<{ front: string; back: string }>;
}

const mockDb: Record<string, MaterialData> = {
  "rotational-motion-short-notes": {
    id: "rotational-motion-short-notes",
    title: "Rotational Motion",
    subject: "Physics",
    category: "Revision Notes",
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
* Solid sphere reaches bottom first on rough incline.`,
  },
  "work-power-energy-short-notes": {
    id: "work-power-energy-short-notes",
    title: "Work, Power & Energy",
    subject: "Physics",
    category: "Revision Notes",
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
* P = Fv when force and velocity are along the same direction.`,
  },
  "vectors-short-notes": {
    id: "vectors-short-notes",
    title: "Vectors - JEE Short Notes",
    subject: "Physics",
    category: "Short Notes",
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
* **Note:** Vector cross product is NOT associative: $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) \\neq (\\vec{a} \\times \\vec{b}) \\times \\vec{c}$ (unless specific conditions apply).`,
  },
  "kinematics-equations": {
    id: "kinematics-equations",
    title: "Kinematics Equations",
    subject: "Physics",
    category: "Formula Sheet",
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
    * To protect himself, the man should hold his umbrella opposite to the direction of $\\vec{v}_{rm}$.`,
  },
  "laws-of-motion": {
    id: "laws-of-motion",
    title: "Laws of Motion",
    subject: "Physics",
    category: "Formula Sheet",
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
* **Strings:** Tension ($T$) changes **instantaneously** (drops to zero or adjusts to a new value immediately) because a string cannot sustain any slack or requires no macroscopic deformation to transmit force.`,
  },
  "periodic-properties": {
    id: "periodic-properties",
    title: "Periodic Properties",
    subject: "Chemistry",
    category: "Revision Notes",
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
5. Noble Gases $\\to$ Highest IE and nearly zero EA`,
  },
  "unit-and-dimension": {
    id: "unit-and-dimension",
    title: "Unit & Dimension",
    subject: "Physics",
    category: "Revision Notes",
    content: `### UNIT & DIMENSION - SHORT NOTES

**1. FUNDAMENTAL QUANTITIES & UNITS**
* Length (L) -> meter (m)
* Mass (M) -> kilogram (kg)
* Time (T) -> second (s)
* Electric Current (I or A) -> ampere (A)
* Temperature (K or $\\theta$) -> kelvin (K)
* Luminous Intensity (Cd) -> candela (cd)
* Amount of Substance (mol) -> mole (mol)

**2. DIMENSIONAL ANALYSIS**
* Used to check the correctness of physical equations (Principle of Homogeneity).
* Convert units from one system to another: $n_1u_1 = n_2u_2$.
* Example: Force $[MLT^{-2}]$, Energy/Work $[ML^2T^{-2}]$, Power $[ML^2T^{-3}]$.

**3. ERROR ANALYSIS**
* Absolute Error: $|a_{mean} - a_i|$
* Relative Error: $\\frac{\\Delta a_{mean}}{a_{mean}}$
* Percentage Error: Relative Error $\\times 100\\%$
* If $Z = A^p B^q / C^r$, then fractional error is $\\frac{\\Delta Z}{Z} = p\\frac{\\Delta A}{A} + q\\frac{\\Delta B}{B} + r\\frac{\\Delta C}{C}$.`,
  },
  "atomic-structure": {
    id: "atomic-structure",
    title: "Atomic Structure",
    subject: "Chemistry",
    category: "Revision Notes",
    content: `### ATOMIC STRUCTURE - SHORT NOTES

**1. BOHR'S MODEL (For H-like species)**
* Angular Momentum: $mvr = \\frac{nh}{2\\pi}$
* Radius: $r_n = 0.529 \\cdot \\frac{n^2}{Z} \\, \\text{\\AA}$
* Energy: $E_n = -13.6 \\cdot \\frac{Z^2}{n^2} \\, \\text{eV/atom}$
* Velocity: $v_n = 2.18 \\times 10^6 \\cdot \\frac{Z}{n} \\, \\text{m/s}$

**2. QUANTUM NUMBERS**
* Principal ($n$): Size and energy of the orbital.
* Azimuthal ($l$): Shape of the orbital ($l = 0 \\dots n-1$).
* Magnetic ($m_l$): Orientation in space ($-l \\dots +l$).
* Spin ($m_s$): $+1/2$ or $-1/2$.

**3. IMPORTANT PRINCIPLES**
* **Pauli's Exclusion Principle:** No two electrons in an atom can have the same set of four quantum numbers.
* **Aufbau Principle:** Electrons fill lower energy atomic orbitals before filling higher energy ones.
* **Hund's Rule:** Orbitals of equal energy are each occupied by one electron before any pairing occurs.`,
  },
  waves: {
    id: "waves",
    title: "Waves",
    subject: "Physics",
    category: "Revision Notes",
    content: `### WAVES - SHORT NOTES

**1. EQUATION OF A PROGRESSIVE WAVE**
* $y = A \\sin(\\omega t - kx + \\phi)$
* Wave velocity: $v = \\frac{\\omega}{k} = f \\lambda$
* Particle velocity: $v_p = \\frac{dy}{dt} = -v \\cdot \\text{Slope}$

**2. VELOCITY OF WAVES**
* Transverse in String: $v = \\sqrt{\\frac{T}{\\mu}}$ (where $\\mu$ is linear mass density)
* Longitudinal in Gas (Laplace): $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma RT}{M}}$

**3. INTERFERENCE & BEATS**
* Intensity $I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$
* Constructive: $\\phi = 2n\\pi$, Destructive: $\\phi = (2n+1)\\pi$
* Beat frequency: $f_B = |f_1 - f_2|$

**4. DOPPLER EFFECT**
* Apparent Frequency: $f' = f \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right)$`,
  },
  "kinematics-mindmap": {
    id: "kinematics-mindmap",
    title: "Kinematics Mind Map",
    subject: "Physics",
    category: "Mind Map",
    content: `### KINEMATICS - JEE MIND MAP

* **MOTION IN 1D**
  * **Distance vs Displacement** -> Path length vs Shortest path
  * **Speed vs Velocity** -> Scalar vs Vector
  * **Acceleration** -> Rate of change of velocity
  * **Graph Analysis** -> s-t (slope=v), v-t (slope=a, area=s), a-t (area=$\\Delta v$)
  * **Equations of Motion** -> $v = u+at$, $s=ut+\\frac{1}{2}at^2$, $v^2=u^2+2as$ (valid for constant acceleration)
  * **Motion under Gravity** -> Free fall, $a = -g$

* **MOTION IN 2D / 3D**
  * **Vectors** -> Addition, Subtraction, Resolution
  * **Equations in Vector Form** -> $\\vec{v} = \\vec{u} + \\vec{a}t$
  * **Projectile Motion**
    * Trajectory -> $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$
    * Time of Flight -> $T = \\frac{2u\\sin\\theta}{g}$
    * Maximum Height -> $H = \\frac{u^2\\sin^2\\theta}{2g}$
    * Horizontal Range -> $R = \\frac{u^2\\sin2\\theta}{g}$
  * **Relative Motion**
    * $\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B$
    * River-Boat Problems -> Shortest path vs Shortest time
    * Rain-Man Problems -> $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m$

* **CIRCULAR MOTION (Kinematics)**
  * **Angular Variables** -> $\\theta, \\omega, \\alpha$
  * **Relation with Linear** -> $v = R\\omega$, $a_t = R\\alpha$
  * **Accelerations** -> Centripetal ($a_c = \\frac{v^2}{R}$), Tangential ($a_t$)
  * **Total Acceleration** -> $a = \\sqrt{a_c^2 + a_t^2}$

* **TIPS FOR JEE**
  * Always set a sign convention and stick to it.
  * For relative motion, try to bring one body to rest.`,
  },
  "laws-of-motion-mindmap": {
    id: "laws-of-motion-mindmap",
    title: "Laws of Motion Mind Map",
    subject: "Physics",
    category: "Mind Map",
    content: `### LAWS OF MOTION - JEE MIND MAP

* **NEWTON'S LAWS**
  * **First Law** -> Inertia (Rest, Motion, Direction)
  * **Second Law** -> $\\vec{F} = \\frac{d\\vec{p}}{dt} = m\\vec{a}$ (if mass is constant)
  * **Third Law** -> Action-Reaction pairs (act on different bodies)

* **FORCES IN NATURE & MECHANICS**
  * **Weight ($mg$)** -> Always vertically downwards
  * **Normal Reaction ($N$)** -> Perpendicular to contact surfaces
  * **Tension ($T$)** -> Pulling force along strings
  * **Spring Force ($F_s = -kx$)** -> Restoring force
  * **Friction ($f$)** -> Opposes relative motion

* **FREE BODY DIAGRAMS (FBD)**
  * Isolate the body.
  * Draw all external forces acting *on* the body.
  * Resolve forces along and perpendicular to acceleration.
  * Apply $\\Sigma F_x = ma_x$, $\\Sigma F_y = ma_y$.

* **FRICTION**
  * **Static Friction ($f_s$)** -> Self-adjusting up to limiting value $f_{s,max} = \\mu_s N$
  * **Kinetic Friction ($f_k$)** -> Constant when sliding, $f_k = \\mu_k N$
  * Angle of Friction & Angle of Repose

* **DYNAMICS OF CIRCULAR MOTION**
  * **Centripetal Force** -> Net force towards center = $\\frac{mv^2}{R}$
  * Conical Pendulum, Banking of Roads, Turning of Car

* **PSEUDO FORCE**
  * Concept -> Used in non-inertial (accelerating) frames
  * Magnitude -> $-m\\vec{a}_{frame}$
  * Direction -> Opposite to frame's acceleration

* **TIPS FOR JEE**
  * Massless string -> uniform tension.
  * Pulley massless & frictionless -> same tension on both sides.`,
  },
  "unit-dimension-mindmap": {
    id: "unit-dimension-mindmap",
    title: "Unit & Dimension Mind Map",
    subject: "Physics",
    category: "Mind Map",
    content: `### UNIT & DIMENSION - JEE MIND MAP

* **PHYSICAL QUANTITIES & UNITS**
  * **Fundamental** -> Mass (kg), Length (m), Time (s), Temp (K), Current (A), Amount (mol), Luminous Intensity (cd)
  * **Derived** -> Combinations of fundamental units (e.g., Velocity, Force)
  * **Supplementary** -> Plane Angle (rad), Solid Angle (sr)

* **DIMENSIONAL ANALYSIS**
  * **Significance** -> Expressing physical quantities in terms of [M, L, T, A, K, mol, cd]
  * **Applications**
    * Checking correctness of equations (Principle of Homogeneity)
    * Deriving relations among physical quantities
    * Converting units from one system to another

* **SIGNIFICANT FIGURES & ROUNDING OFF**
  * Non-zero digits are significant.
  * Zeros between non-zeros are significant.
  * Trailing zeros in a decimal number are significant.
  * Operations -> Follow rule of lowest significant figures (multiplication/division) or least decimal places (addition/subtraction).

* **ERRORS IN MEASUREMENT**
  * **Types** -> Systematic, Random, Least Count Error
  * **Error Calculation**
    * Absolute Error, Mean Absolute Error
    * Relative/Fractional Error
    * Percentage Error
  * **Propagation of Errors**
    * Addition/Subtraction -> $\\Delta Z = \\Delta A + \\Delta B$
    * Multiplication/Division -> $\\frac{\\Delta Z}{Z} = \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B}$
    * Powers -> $\\frac{\\Delta Z}{Z} = n\\frac{\\Delta A}{A}$

* **VERNIER CALLIPERS & SCREW GAUGE**
  * **Vernier Callipers** -> $LC = 1\\text{MSD} - 1\\text{VSD}$
  * **Screw Gauge** -> $LC = \\frac{\\text{Pitch}}{\\text{No. of divisions on circular scale}}$`,
  },
  "periodic-properties-mindmap": {
    id: "periodic-properties-mindmap",
    title: "Periodic Properties Mind Map",
    subject: "Chemistry",
    category: "Mind Map",
    content: `### PERIODIC PROPERTIES - JEE MIND MAP

* **MODERN PERIODIC TABLE**
  * Based on Atomic Number (Moseley's Law)
  * Groups (1-18) and Periods (1-7)
  * s, p, d, f blocks

* **EFFECTIVE NUCLEAR CHARGE ($Z_{eff}$)**
  * $Z_{eff} = Z - \\sigma$ (Slater's Rules)
  * Driving force for most periodic trends
  * Increases across a period, remains nearly constant down a group

* **ATOMIC RADIUS**
  * Meaning: distance from nucleus to outermost electron
  * Covalent, Metallic, Van der Waals Radius
  * **Trend:** Decreases across a period, Increases down a group
  * **Exceptions:** 3d series (nearly constant in middle), Ga < Al, Lanthanide contraction

* **IONIC RADIUS**
  * Cation < Neutral Atom
  * Anion > Neutral Atom
  * Isoelectronic Series: Radius $\\propto \\frac{1}{Z}$

* **IONIZATION ENTHALPY (IE)**
  * Energy required to remove an electron from an isolated gaseous atom
  * **Trend:** Increases across a period, Decreases down a group
  * **Exceptions:** Be > B, N > O, Mg > Al, P > S (due to half/fully-filled stability)

* **ELECTRON GAIN ENTHALPY ($\\Delta_{eg}H$) / ELECTRON AFFINITY (EA)**
  * Enthalpy change when an electron is added to an isolated gaseous atom
  * **Trend:** Becomes more negative across a period, less negative down a group
  * **Exceptions:** Cl > F, S > O, P > N (due to interelectronic repulsion in small 2p orbitals)

* **ELECTRONEGATIVITY (EN)**
  * Tendency to attract shared electron pair
  * **Scales:** Pauling, Mulliken, Allred-Rochow
  * **Trend:** Increases across a period, Decreases down a group
  * Highest for Fluorine`,
  },
  "vectors-mindmap": {
    id: "vectors-mindmap",
    title: "Vector & Calculus Mind Map",
    subject: "Mathematics/Physics",
    category: "Mind Map",
    content: `### VECTOR & CALCULUS - JEE MIND MAP

* **TYPES OF VECTORS**
  * Null, Unit, Equal, Collinear, Coplanar, Position Vector

* **VECTOR ADDITION**
  * **Triangle Law** & **Parallelogram Law**
  * Resultant Magnitude -> $R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$
  * Resultant Direction -> $\\tan\\alpha = \\frac{B\\sin\\theta}{A + B\\cos\\theta}$
  * Polygon Law -> Multiple vectors

* **RESOLUTION OF VECTORS**
  * 2D $\\to$ $A_x = A\\cos\\theta$, $A_y = A\\sin\\theta$
  * 3D $\\to$ Components along X, Y, Z axes using direction cosines ($\\cos\\alpha, \\cos\\beta, \\cos\\gamma$)

* **VECTOR MULTIPLICATION**
  * **Dot / Scalar Product** -> $\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta$. Commutative. Used to find angle between vectors. Work, Power.
  * **Cross / Vector Product** -> $\\vec{A} \\times \\vec{B} = AB\\sin\\theta \\hat{n}$. Anti-commutative. Directed by Right-Hand Rule. Torque, Angular momentum. Area of parallelogram.

* **BASIC CALCULUS FOR PHYSICS**
  * **Differentiation**
    * Meaning: Rate of change, slope of tangent
    * Rules: Power rule, Product rule, Quotient rule, Chain rule
    * Maxima & Minima -> $\\frac{dy}{dx} = 0$, $\\frac{d^2y}{dx^2} < 0$ (Max), $> 0$ (Min)
  * **Integration**
    * Meaning: Area under the curve
    * Definite and Indefinite Integrals
    * Standard formulas: $\\int x^n dx$, $\\int \\sin x dx$, $\\int \\cos x dx$`,
  },
  "work-power-energy-mindmap": {
    id: "work-power-energy-mindmap",
    title: "Work, Power & Energy Mind Map",
    subject: "Physics",
    category: "Mind Map",
    content: `### WORK, POWER & ENERGY - JEE MIND MAP

* **WORK (W)**
  * $W = \\vec{F} \\cdot \\vec{s} = Fs\\cos\\theta$
  * **Variable Force:** $W = \\int \\vec{F} \\cdot d\\vec{s}$
  * Work done is Area under F-x curve.
  * Depends on the frame of reference.

* **ENERGY**
  * **Kinetic Energy (K):** $K = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}$
  * **Potential Energy (U):** Defined only for conservative forces.
    * $F = -\\frac{dU}{dx}$
    * Gravitational PE: $U = mgh$
    * Spring PE: $U = \\frac{1}{2}kx^2$

* **WORK-ENERGY THEOREM**
  * $W_{net} = \\Delta K$
  * Net work done by ALL forces (conservative, non-conservative, pseudo) = Change in KE.

* **CONSERVATION OF MECHANICAL ENERGY**
  * When $W_{non-conservative} = 0$, then $K_i + U_i = K_f + U_f$
  * Mechanical Energy ($E = K + U$) remains constant.

* **POWER (P)**
  * Rate of doing work.
  * Average Power: $P_{avg} = \\frac{W}{\\Delta t}$
  * Instantaneous Power: $P_{inst} = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v}$

* **VERTICAL CIRCULAR MOTION**
  * Minimum velocity at bottom to complete circle: $v_{min} = \\sqrt{5gR}$
  * Tension at bottom: $T_{bottom} = 6mg$ (when critical velocity)
  * String vs Rod conditions differ.

* **COLLISIONS**
  * **Coefficient of Restitution (e):** $e = \\frac{\\text{Velocity of Separation}}{\\text{Velocity of Approach}}$
  * **Elastic ($e=1$):** Both Momentum & KE conserved.
  * **Inelastic ($0<e<1$):** Only Momentum conserved.
  * **Perfectly Inelastic ($e=0$):** Bodies stick together.`,
  },
  "rotational-motion-mindmap": {
    id: "rotational-motion-mindmap",
    title: "Rotational Motion Mind Map",
    subject: "Physics",
    category: "Mind Map",
    content: `### ROTATIONAL MOTION - JEE MIND MAP

* **RIGID BODY DYNAMICS**
  * Kinematics -> $\\omega, \\alpha, \\theta$
  * Center of Mass (COM) frame analysis

* **MOMENT OF INERTIA (I)**
  * $I = \\int r^2 dm$
  * Standard Objects: Ring ($MR^2$), Disc ($\\frac{MR^2}{2}$), Solid Sphere ($\\frac{2MR^2}{5}$), Hollow Sphere ($\\frac{2MR^2}{3}$), Rod ($\\frac{ML^2}{12}$)
  * **Theorems:**
    * Parallel Axis: $I = I_{cm} + Md^2$
    * Perpendicular Axis: $I_z = I_x + I_y$ (for 2D bodies)

* **TORQUE & EQUILIBRIUM**
  * $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = I\\alpha$
  * Translational equilibrium: $\\Sigma \\vec{F} = 0$
  * Rotational equilibrium: $\\Sigma \\vec{\\tau} = 0$ (about any axis)
  * Couple and Moment of Couple

* **ANGULAR MOMENTUM (L)**
  * $\\vec{L} = \\vec{r} \\times \\vec{p} = I\\omega$
  * **Conservation of Angular Momentum:** If $\\tau_{ext} = 0$, then $\\vec{L} = \\text{constant}$

* **ROTATIONAL KINETIC ENERGY**
  * $K_{rot} = \\frac{1}{2}I\\omega^2$
  * **Rolling Motion:** Combined Translation & Rotation. Total E = $K_{trans} + K_{rot}$
  * Pure Rolling condition: $v_{cm} = R\\omega$, $a_{cm} = R\\alpha$ (no slipping)

* **ROLLING ON INCLINED PLANE**
  * Acceleration: $a = \\frac{g\\sin\\theta}{1 + \\frac{k^2}{R^2}}$
  * Velocity at bottom: $v = \\sqrt{\\frac{2gh}{1 + \\frac{k^2}{R^2}}}$
  * Condition for Pure Rolling: Friction $f = \\frac{mg\\sin\\theta}{1 + \\frac{R^2}{k^2}} \\le \\mu mg\\cos\\theta$

* **COLLISION OF POINT MASS WITH RIGID BODY**
  * Conserve Angular Momentum about the hinge/pivot.`,
  },
  "atomic-structure-mindmap": {
    id: "atomic-structure-mindmap",
    title: "Atomic Structure Mind Map",
    subject: "Chemistry",
    category: "Mind Map",
    content: `### ATOMIC STRUCTURE - JEE MIND MAP

* **SUBATOMIC PARTICLES**
  * Electron (J.J. Thomson)
  * Proton (Goldstein)
  * Neutron (Chadwick)

* **MODELS OF ATOM**
  * Thomson's Plum Pudding Model
  * Rutherford's Nuclear Model -> Alpha scattering, defined nucleus
  * **Bohr's Model** -> For H and H-like species
    * Postulates: Stationary orbits, Quantization of Angular Momentum ($mvr = \\frac{nh}{2\\pi}$)
    * Radius: $r_n = 0.529 \\frac{n^2}{Z} \\text{ \\AA}$
    * Velocity: $v_n = 2.18 \\times 10^6 \\frac{Z}{n} \\text{ m/s}$
    * Energy: $E_n = -13.6 \\frac{Z^2}{n^2} \\text{ eV}$

* **HYDROGEN SPECTRUM**
  * Lyman (UV) -> $n_1=1$
  * Balmer (Visible) -> $n_1=2$
  * Paschen, Brackett, Pfund (IR) -> $n_1=3, 4, 5$
  * Rydberg Formula: $\\frac{1}{\\lambda} = R_H Z^2 \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$

* **WAVE NATURE OF MATTER & UNCERTAINTY**
  * **De Broglie Wavelength:** $\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mE_K}}$
  * **Heisenberg's Uncertainty Principle:** $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$

* **QUANTUM MECHANICAL MODEL**
  * Schrodinger Wave Equation
  * **Quantum Numbers:**
    * Principal ($n$) -> Shell, size, energy
    * Azimuthal ($l$) -> Subshell, shape ($0$ to $n-1$)
    * Magnetic ($m_l$) -> Orbital, orientation ($-l$ to $+l$)
    * Spin ($m_s$) -> Spin state of electron ($+\\frac{1}{2}, -\\frac{1}{2}$)

* **FILLING OF ELECTRONS**
  * **Aufbau Principle** -> Increasing order of energy $(n+l)$ rule
  * **Pauli's Exclusion Principle** -> No two electrons can have same 4 quantum numbers
  * **Hund's Rule of Maximum Multiplicity** -> Pairing occurs only after each orbital is singly occupied`,
  },
  "waves-mindmap": {
    id: "waves-mindmap",
    title: "Waves Mind Map",
    subject: "Physics",
    category: "Mind Map",
    content: `### WAVES - JEE MIND MAP

* **INTRODUCTION & TYPES**
  * Definition -> Transfer of energy and momentum without bulk transport of matter.
  * Mechanical (Transverse & Longitudinal) vs Non-Mechanical
  * Wave Equation: $y = f(t - x/v)$ or $y = f(t + x/v)$
  * General 1D Wave Eq: $\\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2}\\frac{\\partial^2 y}{\\partial t^2}$

* **PROGRESSIVE WAVES**
  * Standard Form: $y = A\\sin(\\omega t - kx + \\phi)$
  * Wave velocity $v = \\frac{\\omega}{k} = f\\lambda$
  * Particle velocity $v_p = \\frac{\\partial y}{\\partial t} = -v \\cdot \\frac{\\partial y}{\\partial x}$

* **WAVES ON A STRING**
  * Velocity: $v = \\sqrt{\\frac{T}{\\mu}}$ ($T$=Tension, $\\mu$=mass/length)
  * Power Transmission: $P = \\frac{1}{2}\\mu \\omega^2 A^2 v$
  * Intensity: $I = \\frac{P}{Area} = \\frac{1}{2}\\rho \\omega^2 A^2 v$

* **SUPERPOSITION & INTERFERENCE**
  * $y = y_1 + y_2$
  * Constructive -> Path diff $= n\\lambda$, Phase diff $= 2n\\pi$, $I_{max} = (\\sqrt{I_1}+\\sqrt{I_2})^2$
  * Destructive -> Path diff $= (2n-1)\\frac{\\lambda}{2}$, Phase diff $= (2n-1)\\pi$, $I_{min} = (\\sqrt{I_1}-\\sqrt{I_2})^2$

* **STANDING WAVES (Stationary Waves)**
  * $y = 2A\\cos(kx)\\sin(\\omega t)$
  * Nodes (Amplitude = 0) and Antinodes (Amplitude = Max)
  * Distance between consecutive Node & Antinode = $\\lambda/4$
  * **Strings fixed at both ends:** $f_n = \\frac{n}{2L}\\sqrt{\\frac{T}{\\mu}}$

* **SOUND WAVES**
  * Longitudinal pressure waves.
  * Velocity in fluid: $v = \\sqrt{\\frac{B}{\\rho}}$ (Newton's formula, Laplace Correction $\\to v = \\sqrt{\\frac{\\gamma P}{\\rho}}$)
  * Velocity in Solid: $v = \\sqrt{\\frac{Y}{\\rho}}$

* **ACOUSTIC PHENOMENA**
  * **Organ Pipes:**
    * Open Both Ends: All harmonics present. $f_n = \\frac{nv}{2L}$
    * Closed One End: Only odd harmonics. $f_{2n-1} = \\frac{(2n-1)v}{4L}$
  * **Beats:** $f_{beat} = |f_1 - f_2|$
  * **Doppler Effect:** $f' = f \\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)`,
  },
  "centre-of-mass-mindmap": {
    id: "centre-of-mass-mindmap",
    title: "Centre of Mass & Collisions",
    subject: "Physics",
    category: "Mind Map",
    content: `### CENTRE OF MASS - JEE MIND MAP

* **CENTRE OF MASS (COM)**
  * Discrete System $\\to \\vec{r}_{com} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i}$
  * Continuous System $\\to \\vec{r}_{com} = \\frac{\\int \\vec{r} dm}{\\int dm}$
  * Uniform Bodies $\\to$ COM at geometric center
  * Cavity Problems $\\to$ Treat removed part as negative mass

* **MOTION OF COM**
  * Velocity $\\to \\vec{v}_{com} = \\frac{\\sum m_i \\vec{v}_i}{\\sum m_i}$
  * Acceleration $\\to \\vec{a}_{com} = \\frac{\\sum m_i \\vec{a}_i}{\\sum m_i} = \\frac{\\vec{F}_{ext}}{M}$
  * If $\\vec{F}_{ext} = 0 \\to \\vec{v}_{com}$ is constant (momentum conserved)
  * Internal forces do not affect COM motion

* **MOMENTUM & IMPULSE**
  * Linear Momentum $\\to \\vec{p} = m\\vec{v}$
  * Impulse $\\to \\vec{J} = \\int \\vec{F} dt = \\Delta \\vec{p}$
  * Conservation of Linear Momentum $\\to$ Initial = Final Momentum (if $F_{ext}=0$)

* **COLLISIONS**
  * Line of Impact (LOI) $\\to$ Common normal at contact
  * Coefficient of Restitution $\\to e = \\frac{\\text{Velocity of separation along LOI}}{\\text{Velocity of approach along LOI}}$
  * Elastic Collision $\\to e=1$, KE internal system conserved
  * Inelastic Collision $\\to 0 < e < 1$, KE lost
  * Perfectly Inelastic $\\to e=0$, bodies stick together
  
* **OBLIQUE ELASTIC COLLISIONS**
  * Components along LOI $\\to$ Use 1D collision eqns & 'e'
  * Components perpendicular to LOI $\\to$ Unchanged (no impulse)
  * Oblique Elastic with equal masses $\\to$ Particles emerge at 90° if one was at rest

* **VARIABLE MASS SYSTEM**
  * Thrust Force $\\to \\vec{F}_{th} = \\vec{v}_{rel} \\cdot \\frac{dm}{dt}$
  * Rocket Equation $\\to v = u - gt + v_r \\ln(m_0/m)$`,
  },
  "thermodynamics-mindmap": {
    id: "thermodynamics-mindmap",
    title: "Thermodynamics",
    subject: "Physics",
    category: "Mind Map",
    content: `### THERMODYNAMICS - JEE MIND MAP

* **BASIC CONSTRUCTS & STATE VARIABLES**
  * Thermal Equilibrium $\\to$ Zeroth Law (Defines Temperature)
  * State variables $\\to P, V, T, n, U$
  * Equation of State $\\to PV = nRT$ (Ideal Gas)
  * Internal Energy ($U$) $\\to U = \\frac{f}{2}nRT$ ($f$=degrees of freedom)

* **FIRST LAW OF THERMODYNAMICS**
  * Energy Conservation $\\to \\Delta Q = \\Delta U + \\Delta W$
  * Work Done $\\to dW = P \\cdot dV \\to W = \\int P dV$
  * Heat Capacity $\\to$ Molar ($C = \\frac{\\Delta Q}{n\\Delta T}$)
  * $C_p - C_v = R$ (Mayer's Formula)

* **THERMODYNAMIC PROCESSES**
  * Isobaric ($P=const$) $\\to W = P\\Delta V$, $Q = nC_p\\Delta T$
  * Isochoric ($V=const$) $\\to W = 0$, $Q = \\Delta U = nC_v\\Delta T$
  * Isothermal ($T=const$) $\\to \\Delta U = 0$, $W = Q = nRT \\ln(V_2/V_1)$
  * Adiabatic ($Q=0$) $\\to PV^\\gamma = const$, $W = \\frac{nR(T_1-T_2)}{\\gamma-1}$
  * Polytropic ($PV^x = const$) $\\to C = C_v + \\frac{R}{1-x}$

* **SECOND LAW & HEAT ENGINES**
  * Kelvin-Planck Eq $\\to$ Cannot convert all heat to work
  * Efficiency $\\to \\eta = \\frac{W}{Q_{in}} = 1 - \\frac{Q_{out}}{Q_{in}}$
  * Carnot Cycle $\\to$ Max theoretical $\\eta = 1 - \\frac{T_L}{T_H}$
  * Refrigerator / COP $\\to \\beta = \\frac{Q_L}{W} = \\frac{T_L}{T_H - T_L}$

* **KINETIC THEORY OF GASES**
  * Pressure $\\to P = \\frac{1}{3}\\rho v_{rms}^2$
  * RMS Velocity $\\to v_{rms} = \\sqrt{3RT/M}$
  * Average Kinetic Energy $\\to \\frac{3}{2}kT$ per molecule
  * Maxwell's Distribution $\\to$ $v_{mp} < v_{avg} < v_{rms}$`,
  },
  "chemical-bonding-mindmap": {
    id: "chemical-bonding-mindmap",
    title: "Chemical Bonding",
    subject: "Chemistry",
    category: "Mind Map",
    content: `### CHEMICAL BONDING - JEE MIND MAP

* **IONIC BOND AND LATTICE**
  * Transfer of electrons (Metals + Non-metals)
  * Favourable factors $\\to$ Low IE, High EA, High Lattice E
  * Lattice Energy $\\to$ Born-Haber cycle
  * Lattice E $\\propto \\frac{q_1 q_2}{r_1+r_2}$

* **COVALENT BOND & LEWIS SP**
  * Sharing of valence electrons
  * Lewis dot structures, Octet Rule and Exceptions (e.g. $BF_3, PCl_5$)
  * Formal Charge $\\to V - L - \\frac{S}{2}$
  * VSEPR Theory $\\to$ Determines molecular geometry via $e^-$ pair repulsions ($lp$-$lp$ > $lp$-$bp$ > $bp$-$bp$)

* **FAJAN'S RULE & POLARIZATION**
  * Covalent character in ionic bonds
  * High polarization $\\to$ small highly charged cation + large anion
  * More polarization $\\to$ more covalent nature, lower melting point, distinct colour

* **VALENCE BOND THEORY (VBT)**
  * Orbital Overlap $\\to$ $\\sigma$ (head-on), $\\pi$ (sideways)
  * Hybridization $\\to$ mixing of atomic orbitals (sp, sp2, sp3, sp3d, sp3d2)
  * Steric Number Formula $\\to \\frac{1}{2}(V+M-C+A)$
  * Resonance $\\to$ Delocalization of $\\pi$ electrons

* **MOLECULAR ORBITAL THEORY (MOT)**
  * Linear Combination of Atomic Orbitals (LCAO)
  * Bonding MO (lower E) & Antibonding MO (higher E)
  * Bond Order $\\to = \\frac{N_b - N_a}{2}$
  * Up to $N_2$ ($\\sigma_{2pz}$ goes higher) vs $O_2/F_2$ regular order
  * Magnetism $\\to$ Paired=Diamagnetic, Unpaired=Paramagnetic

* **DIPOLE MOMENT & HYDROGEN BOND**
  * Dipole moment $\\to \\vec{\\mu} = q \\times \\vec{d}$ (measured in Debye)
  * Polyatomic $\\to$ Vector sum of individual bond dipoles
  * Hydrogen Bond $\\to$ Weak interaction between $H$ and highly EN atom ($N,O,F$)
  * Inter-molecular vs Intra-molecular (affects BP and Solubility)`,
  },
  "goc-mindmap": {
    id: "goc-mindmap",
    title: "General Organic Chemistry",
    subject: "Chemistry",
    category: "Mind Map",
    content: `### GOC - JEE MIND MAP

* **INDUCTIVE EFFECT (+I / -I)**
  * Permanent shifting of $\\sigma$-electrons toward more EN atom
  * Distance dependent (vanishes after 3-4 carbons)
  * +I Groups $\\to$ Alkyls ($-CH_3$ etc), $-O^-, -NH^-$
  * -I Groups $\\to$ $-NO_2 > -CN > -COOH > -F > -Cl$, etc
  * Uses $\\to$ Stability of carbocations, Acidic/Basic strength

* **RESONANCE & MESOMERIC EFFECT (+M / -M)**
  * Delocalisation of $\\pi$-bonds or lone pairs
  * Essential conditions $\\to$ Conjugated system
  * +M Groups $\\to$ Donate lone pair ($-OH, -NH_2, -OR, -halogen$ - *halogens have net -I dominant*)
  * -M Groups $\\to$ Withdraw $\\pi$ $e^-$ ($-NO_2, -CN, -C=O$) 
  * Resonance generally stronger than Inductive Effect (except halogens on ring)

* **HYPERCONJUGATION (Baker-Nathan Effect)**
  * Delocalization of $\\sigma$ $C-H$ electrons into adjacent empty/p-orbital
  * "No-bond resonance"
  * Condition $\\to \\alpha$-Hydrogens relative to $sp^2$ carbon
  * Applications $\\to$ Alkene stability, Carbocation/Free radical stability (More $\\alpha-H \\to$ more stable)

* **REACTION INTERMEDIATES**
  * Carbocations ($C^+$) $\\to$ $sp^2, 6e^-$, electrophile. Stability $3^\\circ > 2^\\circ > 1^\\circ$. Can rearrange!
  * Carbanions ($C^-$) $\\to$ $sp^3, 8e^-$, nucleophile. Stability $1^\\circ > 2^\\circ > 3^\\circ$
  * Free Radicals ($C^\\bullet$) $\\to$ $sp^2, 7e^-$. Stability $3^\\circ > 2^\\circ > 1^\\circ$ (via hyperconjugation)
  * Carbenes & Nitrenes $\\to$ Highly reactive, sextet species

* **AROMATICITY (Huckel's Rule)**
  * Cyclic, Planar, Complete conjugation
  * Aromatic $\\to$ $4n+2$ $\\pi$ electrons (Highly stable)
  * Anti-aromatic $\\to$ $4n$ $\\pi$ electrons (Highly unstable)
  * Non-aromatic $\\to$ Doesn't fit above rules
  * Stability Order $\\to$ Aromatic > Non-aromatic > Anti-aromatic

* **ACIDITY & BASICITY**
  * Acidic Strength $\\propto$ Stability of conjugate base (anion)
  * Electron Withdrawing (-I, -M) increases acidity
  * Electron Donating (+I, +M) decreases acidity
  * Basic Strength $\\propto$ Availability of lone pair
  * Ortho-effect $\\to$ Ortho substituted benzoic acid/anilines anomalies`,
  },
  "algebra-mindmap": {
    id: "algebra-mindmap",
    title: "Algebra Fundamentals",
    subject: "Mathematics",
    category: "Mind Map",
    content: `### ALGEBRA - JEE MIND MAP

* **QUADRATIC EQUATIONS**
  * Standard Form $ax^2 + bx + c = 0$
  * Roots $\\to \\alpha, \\beta = \\frac{-b \\pm \\sqrt{D}}{2a}$
  * Nature of Roots $\\to$ depends on $D = b^2 - 4ac$ ($D>0$ real/distinct, $D=0$ real/equal, $D<0$ complex)
  * Location of Roots $\\to$ Conditions using $af(k)$, $D$, and vertex $-b/2a$

* **COMPLEX NUMBERS**
  * $z = x + iy$ and Polar form $z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$
  * Modulus $|z| = \\sqrt{x^2+y^2}$ and Argument $\\theta = \\tan^{-1}(y/x)$
  * Properties $\\to |z_1z_2| = |z_1||z_2|$, $\\arg(z_1z_2) = \\arg(z_1)+\\arg(z_2)$
  * De Moivre's $\\to (\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$
  * Cube Roots of Unity $\\to 1, \\omega, \\omega^2$. $1+\\omega+\\omega^2 = 0$, $\\omega^3=1$

* **PROGRESSIONS & SERIES**
  * **A.P.** $\\to T_n = a+(n-1)d$, $S_n = \\frac{n}{2}(2a+(n-1)d)$
  * **G.P.** $\\to T_n = ar^{n-1}$, $S_n = a\\frac{1-r^n}{1-r}$, $S_\\infty = \\frac{a}{1-r}$ ($|r|<1$)
  * AM $\\ge$ GM $\\ge$ HM $\\to$ Powerful tool for maximum/minimum problems

* **PERMUTATIONS & COMBINATIONS**
  * Fundamental Principle of Counting (Multiplication, Addition)
  * Permutations $\\to ^nP_r = \\frac{n!}{(n-r)!}$ (Order matters)
  * Combinations $\\to ^nC_r = \\frac{n!}{r!(n-r)!}$ (Order doesn't matter)
  * Identical objects distribution $\\to$ Beggar method / Stars & Bars $\\to ^{n+r-1}C_{r-1}$

* **BINOMIAL THEOREM**
  * Expansion $\\to (x+y)^n = \\sum ^nC_r x^{n-r} y^r$
  * General Term $\\to T_{r+1} = ^nC_r x^{n-r} y^r$
  * Properties $\\to \\sum ^nC_r = 2^n$, $\\sum ^nC_r (-1)^r = 0$

* **MATRICES & DETERMINANTS**
  * Determinant Properties $\\to |AB| = |A||B|$, $|kA| = k^n|A|$
  * Adjoint $\\to A(\\text{adj} A) = |A|I$, $|\\text{adj} A| = |A|^{n-1}$
  * Inverse $\\to A^{-1} = \\frac{\\text{adj} A}{|A|}$
  * Cramer's Rule $\\to$ System consistency conditions`,
  },
  "calculus-mindmap": {
    id: "calculus-mindmap",
    title: "Calculus Fundamentals",
    subject: "Mathematics",
    category: "Mind Map",
    content: `### CALCULUS - JEE MIND MAP

* **FUNCTIONS & LIMITS**
  * Domain & Range $\\to$ Allowable inputs & resulting outputs
  * Types $\\to$ One-One, Onto, Even/Odd, Periodic
  * L'Hopital's Rule $\\to$ For $0/0$ or $\\infty/\\infty$ forms
  * Standard Limits $\\to \\frac{\\sin x}{x} = 1$, $(1+x)^{1/x} = e$

* **DIFFERENTIABILITY & A.O.D.**
  * Rolles Theorem & LMVT $\\to f'(c) = 0$ or $f'(c) = \\frac{f(b)-f(a)}{b-a}$
  * Maxima & Minima $\\to$ critical points where $f'(x)=0$, check $f''(x)$
  * Monotonicity $\\to f'(x) > 0$ strictly increasing
  * Tangent & Normal $\\to$ slope is $f'(x_0)$ and $-1/f'(x_0)$

* **INDEFINITE INTEGRALS**
  * Substitution $\\to$ $x = \\tan\\theta$, etc for standard algebra combinations
  * By Parts $\\to \\int u v dx = u\\int v - \\int (u' \\int v)$ (ILATE Rule)
  * Standard Special Forms $\\to$ $\\int \\frac{dx}{x^2+a^2}$, $\\int e^x(f(x)+f'(x))dx$

* **DEFINITE INTEGRALS**
  * King's Property $\\to \\int_a^b f(x) dx = \\int_a^b f(a+b-x) dx$
  * Even/Odd $\\to \\int_{-a}^a f(x) dx$ (0 if odd, $2\\int_0^a$ if even)
  * Periodic $\\to \\int_0^{nT} f(x) dx = n \\int_0^T f(x) dx$
  * Limit of a Sum $\\to$ Integral as summation $\\lim \\frac{1}{n} \\sum f(r/n)$
  * Newton-Leibniz $\\to \\frac{d}{dx} \\int_{g(x)}^{h(x)} f(t) dt$

* **AREA UNDER CURVE & DE**
  * Area $\\to \\int (Upper - Lower) dx$
  * Symmetrical curves $\\to$ calculate one quadrant and multiply
  * Homogeneous D.E. $\\to$ subs $y=vx$
  * Linear Differential Equation (LDE) $\\to$ $\\frac{dy}{dx} + Py = Q$
  * Integrating Factor $\\to IF = e^{\\int P dx}$`,
  },
  "electrostatics-mindmap": {
    id: "electrostatics-mindmap",
    title: "Electrostatics",
    subject: "Physics",
    category: "Mind Map",
    content: `### ELECTROSTATICS - JEE MIND MAP

* **ELECTRIC CHARGE & FIELD**
  * Coulomb's Law $\\to F = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1q_2}{r^2}$
  * Electric Field $\\to \\vec{E} = \\frac{\\vec{F}}{q}$
  * Field due to Point Charge $\\to E = \\frac{kq}{r^2}$
  * Superposition Principle $\\to \\vec{E}_{net} = \\sum \\vec{E}_i$
  * Continuous Charge Distributions $\\to E = \\int dE$

* **ELECTRIC FLUX & GAUSS'S LAW**
  * Electric Flux $\\to \\Phi_E = \\int \\vec{E} \\cdot d\\vec{A}$
  * Gauss's Law $\\to \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{enclosed}}{\\epsilon_0}$
  * Applications: Lines, Sheets, Spheres
  * Spherical Shell $\\to$ Inside: $E=0$, Outside: $E=\\frac{kq}{r^2}$

* **ELECTRIC POTENTIAL & ENERGY**
  * Potential Difference $\\to \\Delta V = -\\int \\vec{E} \\cdot d\\vec{r}$
  * Point Charge Potential $\\to V = \\frac{kq}{r}$
  * Equipotential Surfaces $\\to \\vec{E} \\perp$ surface, work done = $0$
  * Potential Energy $\\to U = \\frac{kq_1q_2}{r}$
  * Relation $\\to \\vec{E} = -\\nabla V$

* **ELECTRIC DIPOLE**
  * Dipole Moment $\\to \\vec{p} = q\\vec{2a}$ (from -q to +q)
  * Field on Axis $\\to E \\approx \\frac{2kp}{r^3}$, on Equator $\\to E \\approx \\frac{kp}{r^3}$
  * Torque in uniform field $\\to \\vec{\\tau} = \\vec{p} \\times \\vec{E}$
  * Potential Energy $\\to U = -\\vec{p} \\cdot \\vec{E}$

* **CAPACITANCE & DIELECTRICS**
  * Capacitance definition $\\to C = \\frac{Q}{V}$
  * Parallel Plate Capacitor $\\to C = \\frac{\\epsilon_0 A}{d}$
  * Combinations $\\to$ Series: $\\frac{1}{C_{eq}} = \\sum \\frac{1}{C_i}$, Parallel: $C_{eq} = \\sum C_i$
  * Energy stored $\\to U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$
  * Dielectrics $\\to C' = \\kappa C_0$, Field $E' = \\frac{E_0}{\\kappa}$`,
  },
  "optics-mindmap": {
    id: "optics-mindmap",
    title: "Optics",
    subject: "Physics",
    category: "Mind Map",
    content: `### OPTICS - JEE MIND MAP

* **REFLECTION OF LIGHT**
  * Laws of Reflection $\\to \\angle i = \\angle r$
  * Plane Mirror $\\to$ Virtual, erect, same size, laterally inverted
  * Spherical Mirrors $\\to$ Concave & Convex
  * Mirror Formula $\\to \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$
  * Magnification $\\to m = -\\frac{v}{u}$

* **REFRACTION OF LIGHT**
  * Snell's Law $\\to \\mu_1 \\sin i = \\mu_2 \\sin r$
  * Apparent Depth $\\to d_{app} = \\frac{d_{real}}{\\mu_{rel}}$
  * Total Internal Reflection (TIR) $\\to$ from denser to rarer, $i > i_c$
  * Critical Angle $\\to \\sin i_c = \\frac{\\mu_r}{\\mu_d}$

* **LENSES & PRISMS**
  * Lens Maker's Formula $\\to \\frac{1}{f} = (\\mu_{rel} - 1)(\\frac{1}{R_1} - \\frac{1}{R_2})$
  * Thin Lens Formula $\\to \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$
  * Power of Lens $\\to P = \\frac{1}{f}$ (in diopters)
  * Prism Formula $\\to \\mu = \\frac{\\sin((A+\\delta_m)/2)}{\\sin(A/2)}$

* **WAVE OPTICS (INTERFERENCE)**
  * Huygens' Principle $\\to$ Wavefronts and secondary wavelets
  * Constructive $\\to \\Delta \\phi = 2n\\pi$, $\\Delta x = n\\lambda$
  * Destructive $\\to \\Delta \\phi = (2n-1)\\pi$, $\\Delta x = (n-0.5)\\lambda$
  * YDSE $\\to$ Fringe width $\\beta = \\frac{\\lambda D}{d}$
  * Intensity $\\to I = I_1 + I_2 + 2\\sqrt{I_1I_2}\\cos\\phi$

* **DIFFRACTION & POLARIZATION**
  * Single Slit Diffraction $\\to$ Central max wider & brighter
  * Condition for Minima $\\to a \\sin \\theta = n\\lambda$
  * Polarization $\\to$ Restriction of E-vector vibration
  * Malus' Law $\\to I = I_0 \\cos^2 \\theta$
  * Brewster's Law $\\to \\mu = \\tan i_p$`,
  },
  "hydrocarbons-mindmap": {
    id: "hydrocarbons-mindmap",
    title: "Hydrocarbons",
    subject: "Chemistry",
    category: "Mind Map",
    content: `### HYDROCARBONS - JEE MIND MAP

* **ALKANES**
  * General formula $\\to C_nH_{2n+2}$ (Saturated)
  * Preparation $\\to$ Wurtz reaction, Decarboxylation, Kolbe's electrolysis
  * Properties $\\to$ Inertness, Free radical halogenation
  * Conformations $\\to$ Staggered (most stable) vs Eclipsed (least stable)
  * Isomerism $\\to$ Chain & Position isomerism

* **ALKENES**
  * General formula $\\to C_nH_{2n}$ (Unsaturated, 1 double bond)
  * Preparation $\\to$ Dehydrohalogenation, Dehydration of alcohols
  * Electrophilic Addition $\\to$ Markovnikov's rule
  * Anti-Markovnikov $\\to$ Peroxide effect (only with HBr)
  * Ozonolysis $\\to$ Cleavage of C=C to form carbonyls

* **ALKYNES**
  * General formula $\\to C_nH_{2n-2}$ (Unsaturated, 1 triple bond)
  * Terminal Alkynes $\\to$ Acidic nature, reacts with Na, $\\text{AgNO}_3$
  * Preparation $\\to$ Dehydrohalogenation of dihalides, from Calcium carbide
  * Hydration $\\to$ Forms aldehydes/ketones (tautomerism involved)
  * Polymerization $\\to$ Cyclic polymerization to form benzene

* **AROMATIC HYDROCARBONS**
  * Benzene $\\to$ Planar, highly stable due to resonance/aromaticity
  * Preparation $\\to$ Heating phenol with Zn dust, Aromatization
  * Electrophilic Substitution (EAS) $\\to$ Halogenation, Nitration, Sulfonation
  * Friedel-Crafts $\\to$ Alkylation (R-X, AlCl3) and Acylation (R-COCl, AlCl3)
  * Directing Groups $\\to$ ortho/para directing (activating) vs meta directing (deactivating)

* **REAGENTS & TESTS**
  * Baeyer's reagent $\\to$ Cold alk. KMnO4, test for unsaturation
  * Bromine water test $\\to$ Decolorizes in presence of C=C or C≡C
  * Tollens' reagent $\\to$ Ammoniacal AgNO3, test for terminal alkynes
  * Lindlar's catalyst $\\to$ Alkyne to cis-alkene
  * Birch reduction $\\to$ Alkyne to trans-alkene
  * NBS $\\to$ Allylic and benzylic bromination`,
  },
  "equilibrium-mindmap": {
    id: "equilibrium-mindmap",
    title: "Chemical Equilibrium",
    subject: "Chemistry",
    category: "Mind Map",
    content: `### CHEMICAL EQUILIBRIUM - JEE MIND MAP

* **LAW OF MASS ACTION**
  * Rate of reaction $\\propto$ active mass of reactants
  * Equilibrium Constant ($K_c$) $\\to \\frac{[Products]^y}{[Reactants]^x}$
  * Gas phase ($K_p$) $\\to$ in terms of partial pressures
  * Relation: $K_p = K_c(RT)^{\\Delta n_g}$
  * Properties of K $\\to$ Independent of conc/pressure, depends on T

* **LE CHATELIER'S PRINCIPLE**
  * System shifts to counteract imposed change
  * Change in Conc $\\to$ add reactant (forward shift)
  * Change in Pressure $\\to$ increase P shifts to fewer moles
  * Change in Temp $\\to$ increase T favors endothermic rxn
  * Add Inert Gas $(\\text{Constant V})$ $\\to$ No effect
  * Add Inert Gas $(\\text{Constant P})$ $\\to$ Shifts to higher moles

* **IONIC EQUILIBRIUM BASICS**
  * Arrhenius, Bronsted-Lowry, Lewis concepts
  * Autoprotolysis of Water $\\to K_w = [H^+][OH^-] = 10^{-14}$ at 298K
  * pH Scale $\\to pH = -\\log_{10}[H^+]$, $pH + pOH = 14$
  * Ostwald's Dilution Law $\\to \\alpha = \\sqrt{\\frac{K_a}{C}}$ (weak electrolytes)
  * Common Ion Effect $\\to$ Suppresses dissociation of weak electrolyte

* **HYDROLYSIS & BUFFERS**
  * Salt Hydrolysis $\\to$ Cationic (SA+WB, pH<7), Anionic (WA+SB, pH>7)
  * Buffer Solutions $\\to$ Resist changes in pH
  * Acidic Buffer (WA + Salt of WA&SB) $\\to pH = pK_a + \\log{\\frac{[Salt]}{[Acid]}}$
  * Basic Buffer (WB + Salt of WB&SA) $\\to pOH = pK_b + \\log{\\frac{[Salt]}{[Base]}}$
  * Maximum Buffer Capacity $\\to$ when $[Salt] = [Acid]$ ($pH = pK_a$)

* **SOLUBILITY PRODUCT ($K_{sp}$)**
  * $A_xB_y(s) \\rightleftharpoons xA^{y+}(aq) + yB^{x-}(aq)$
  * $K_{sp} = [A^{y+}]^x [B^{x-}]^y = (xS)^x (yS)^y$
  * Ionic Product ($IP$ or $Q$) vs $K_{sp}$
  * If $IP > K_{sp} \\to$ Precipitation occurs
  * If $IP < K_{sp} \\to$ Solution is unsaturated`,
  },
  "coordinate-geometry-mindmap": {
    id: "coordinate-geometry-mindmap",
    title: "Coordinate Geometry",
    subject: "Mathematics",
    category: "Mind Map",
    content: `### COORDINATE GEOMETRY - JEE MIND MAP

* **STRAIGHT LINES**
  * Distance Formula $\\to \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$
  * Section Formula $\\to \\frac{mx_2+nx_1}{m+n}, \\frac{my_2+ny_1}{m+n}$
  * Area of Triangle $\\to \\frac{1}{2}|x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|$
  * Slopes & Equations $\\to y-y_1 = m(x-x_1)$, Point-slope, Two-point, Intercept form
  * Perpendicular Distance $\\to \\frac{|ax_1+by_1+c|}{\\sqrt{a^2+b^2}}$
  * Family of Lines $\\to L_1 + \\lambda L_2 = 0$

* **CIRCLES**
  * Standard Form $\\to (x-h)^2 + (y-k)^2 = r^2$
  * General Form $\\to x^2+y^2+2gx+2fy+c=0$ (Center: $-g,-f$, r: $\\sqrt{g^2+f^2-c}$)
  * Tangent $\\to T=0$, Normal passes through center
  * Length of Tangent $\\to \\sqrt{S_1}$
  * Power of a Point $\\to S_1 = x_1^2+y_1^2+2gx_1+2fy_1+c$
  * Common Tangents, Orthogonality ($2g_1g_2+2f_1f_2 = c_1+c_2$)

* **PARABOLA**
  * Standard eqn $\\to y^2=4ax$
  * Focus $(a,0)$, Directrix $x = -a$
  * Parametric Form $\\to x=at^2, y=2at$
  * Focal Chord properties
  * Tangent $\\to yy_1=2a(x+x_1)$ or $y=mx+\\frac{a}{m}$
  * Normal $\\to y = -tx+2at+at^3$

* **ELLIPSE**
  * Standard eqn $\\to \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a>b$)
  * Eccentricity $\\to e = \\sqrt{1 - b^2/a^2}$
  * Foci $(\\pm ae, 0)$, Directrices $x = \\pm a/e$
  * Sum of Focal Distances $= 2a$
  * Tangent $\\to y = mx \\pm \\sqrt{a^2m^2+b^2}$

* **HYPERBOLA**
  * Standard eqn $\\to \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$
  * Eccentricity $\\to e = \\sqrt{1 + b^2/a^2}$
  * Foci $(\\pm ae, 0)$, Directrices $x = \\pm a/e$
  * Asymptotes $\\to y = \\pm (b/a)x$
  * Rectangular Hyperbola $\\to x^2-y^2=a^2$, or $xy = c^2$`,
  },
  "probability-mindmap": {
    id: "probability-mindmap",
    title: "Probability & Statistics",
    subject: "Mathematics",
    category: "Mind Map",
    content: `### PROBABILITY & STATISTICS - JEE MIND MAP

* **CLASSICAL PROBABILITY**
  * Defined as $\\frac{\\text{Favorable Outcomes}}{\\text{Total Outcomes}}$
  * Sample Space ($S$), Event ($E$)
  * Limits: $0 \\le P(E) \\le 1$, $\\sum P(E_i) = 1$
  * Addition Theorem $\\to P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$
  * Mutually Exclusive $\\to P(A \\cap B) = 0$

* **CONDITIONAL PROBABILITY**
  * $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$
  * independent Events $\\to P(A \\cap B) = P(A) \\cdot P(B)$
  * Multiplication Theorem $\\to P(A \\cap B) = P(A) \\cdot P(B|A)$
  * Baye's Theorem $\\to P(E_i|A) = \\frac{P(E_i)P(A|E_i)}{\\sum P(E_k)P(A|E_k)}$
  * Total Probability Law

* **RANDOM VARIABLES & DISTRIBUTIONS**
  * Probability Distribution (PMF, PDF)
  * Expected Value (Mean) $\\to E(X) = \\sum x_i p_i$
  * Variance ($\\text{Var}(X)$) $\\to E(X^2) - (E(X))^2$
  * Binomial Distribution $\\to P(X=r) = ^nC_r p^r q^{n-r}$
  * Mean is $np$, Variance is $npq$

* **STATISTICS BASICS**
  * Mean ($\\bar{x}$), Median (middle), Mode (most frequent)
  * Mean of Grouped Data $\\to \\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$
  * Measure of Dispersion (Spread) $\\to$ Range, Mean Deviation
  * Coefficient of Variation $\\to CV = \\frac{\\sigma}{\\bar{x}} \\times 100\\%$

* **VARIANCE & STANDARD DEVIATION**
  * Variance ($\\sigma^2$) $\\to \\frac{\\sum(x_i - \\bar{x})^2}{n} = \\frac{\\sum x_i^2}{n} - \\bar{x}^2$
  * Std Deviation ($\\sigma$) $\\to \\sqrt{\\text{Variance}}$
  * Properties $\\to$ Shift of origin (addition/subtraction) does NOT change variance
  * Scale change (multiply by $k$) $\\to$ variance is multiplied by $k^2$, SD by $|k|$`,
  },
};

function MindMapViewer({ data }: { data: MaterialData }) {
  const [expandedNodes, setExpandedNodes] = useState<Record<number, boolean>>(
    {},
  );

  const toggleNode = (idx: number) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const lines = data.content.split("\n");
  const titleLine = lines.find((l) => l.startsWith("###"));
  const title = titleLine ? titleLine.replace("###", "").trim() : data.title;

  const sections: { title: string; content: string }[] = [];
  let currentTitle = "";
  let currentContent: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line === titleLine) continue;
    if (line.trim() === "") {
      currentContent.push("");
      continue;
    }

    const isTopLevel = line.match(/^(\s*)\*\s+\*\*(.*?)\*\*/);

    if (isTopLevel && isTopLevel[1].length === 0) {
      if (currentTitle) {
        sections.push({
          title: currentTitle,
          content: currentContent.join("\n"),
        });
      }
      currentTitle = isTopLevel[2].trim();
      currentContent = [];
      const remainder = line.replace(/^\*\s+\*\*.*?\*\*/, "").trim();
      if (remainder) {
        currentContent.push(`* ${remainder.replace(/^->\s*/, "")}`);
      }
    } else {
      if (currentTitle) {
        currentContent.push(line.replace(/^ {2}/, ""));
      }
    }
  }
  if (currentTitle) {
    sections.push({ title: currentTitle, content: currentContent.join("\n") });
  }

  return (
    <div className="w-full h-full p-4 sm:p-8 overflow-auto relative font-sans hide-scrollbar">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

      {/* Main container: column on mobile, row on desktop */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center min-w-full md:min-w-max min-h-[600px] py-4 md:py-10">
        {/* === ROOT NODE AREA === */}
        <div className="flex flex-col md:flex-row items-start md:items-center relative z-20 shrink-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#00c6ff] to-[#0072ff] p-[2px] rounded-2xl shadow-[0_0_30px_rgba(0,198,255,0.2)] md:shadow-[0_0_30px_rgba(0,198,255,0.3)] relative z-20 shrink-0 w-[260px] sm:w-[300px] md:w-80 ml-2 md:ml-0"
          >
            <div className="bg-[#0B0C10] rounded-2xl px-5 py-4 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c6ff] animate-pulse" />
                <span className="text-[#00c6ff] text-[10px] font-bold uppercase tracking-widest">
                  {data.subject}
                </span>
              </div>
              <h2 className="text-white font-black text-lg md:text-xl leading-snug">
                {title}
              </h2>
            </div>
          </motion.div>

          {/* Desktop connecting line (horizontal) */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block h-0.5 bg-gradient-to-r from-[#0072ff] to-[#00c6ff] relative z-0 origin-left"
          />

          {/* Mobile connecting line (vertical) */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 32 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:hidden w-0.5 bg-gradient-to-b from-[#0072ff] to-[#00c6ff] relative z-0 origin-top ml-[24px]"
          />
        </div>

        {/* === SECTIONS AREA === */}
        <div className="flex flex-col justify-center relative w-full md:w-auto mt-0 md:my-auto">
          {/* Global Spine */}
          {sections.length > 1 && (
            <div className="absolute w-0.5 bg-[#00c6ff] opacity-40 ml-[24px] md:ml-0 top-[32px] md:top-[40px] bottom-[32px] md:bottom-[40px] z-0" />
          )}

          {/* First section top connect for mobile (to bridge the gap between root node's line and global spine) */}
          <div className="md:hidden absolute w-0.5 bg-[#00c6ff] opacity-40 ml-[24px] top-0 h-[32px] md:h-0 z-0" />

          {sections.map((sec, idx) => {
            const isExpanded = expandedNodes[idx];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-start w-full md:w-auto",
                  "pb-6 md:pb-8",
                )}
              >
                {/* Horizontal branch from spine to the node */}
                <div className="absolute top-[32px] md:top-[40px] h-0.5 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] opacity-40 ml-[24px] md:ml-0 w-6 md:w-8 z-0" />

                {/* Node content wrapper */}
                <div className="ml-[48px] md:ml-8 z-10 flex flex-col md:flex-row items-start gap-3 md:gap-6 relative w-[calc(100%-48px)] md:w-auto">
                  {/* The clickable button */}
                  <div
                    onClick={() => toggleNode(idx)}
                    className={cn(
                      "w-full sm:w-[280px] md:w-[320px] rounded-2xl p-4 md:p-5 border transition-all duration-300 cursor-pointer shadow-lg shrink-0 flex flex-col group mt-[2px] md:mt-[8px]",
                      isExpanded
                        ? "bg-[#161B22] border-[#00c6ff] shadow-[#00c6ff]/10"
                        : "bg-[#11141A] border-white/10 hover:border-white/30 hover:bg-[#161B22]",
                    )}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <h3
                        className={cn(
                          "font-bold text-sm leading-snug transition-colors",
                          isExpanded
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white",
                        )}
                      >
                        {sec.title}
                      </h3>
                      <button
                        className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all",
                          isExpanded
                            ? "bg-[#00c6ff] text-black"
                            : "bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white",
                        )}
                      >
                        {isExpanded ? (
                          <Minus size={14} strokeWidth={3} />
                        ) : (
                          <Plus size={14} strokeWidth={3} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* The expandable markdown content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                          transformOrigin: "top left",
                        }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative w-full md:w-auto origin-top-left md:origin-left"
                      >
                        {/* Connector from node to content (Desktop only) */}
                        <div className="hidden md:block absolute left-[-24px] top-[32px] w-6 h-0.5 bg-white/10 z-0" />

                        {/* Connector from node to content (Mobile only) */}
                        <div className="md:hidden absolute left-6 top-[-12px] w-0.5 h-3 bg-white/10 z-0" />

                        <div className="bg-[#11141A] rounded-2xl border border-white/10 p-5 md:p-8 w-full md:min-w-[320px] md:max-w-[450px] shadow-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <Network size={100} />
                          </div>
                          <div className="relative z-10 font-medium text-[13px] md:text-sm text-gray-300 leading-relaxed markdown-content prose-invert">
                            <style>{`
                               .markdown-content p { margin-bottom: 0.75rem; color: #cbd5e1; }
                               .markdown-content ul { list-style-type: disc; padding-left: 1.25rem; margin-bottom: 0.75rem; }
                               .markdown-content li { margin-bottom: 0.25rem; color: #94a3b8; }
                               .markdown-content strong { color: #f8fafc; font-weight: 700; }
                               .markdown-content code { background: rgba(0,198,255,0.1); color: #00c6ff; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: monospace; font-size: 0.85em; }
                            `}</style>
                            <ReactMarkdown
                              remarkPlugins={[remarkMath, remarkGfm]}
                              rehypePlugins={[rehypeKatex]}
                            >
                              {sec.content}
                            </ReactMarkdown>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const FlashcardViewer = ({ content }: { content: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const cards = React.useMemo(() => {
    const blocks = content.split(/---/);
    return blocks
      .map((b) => {
        const match = b.match(/\*\*(.*?)\*\*/);
        if (match) {
          const title = match[1];
          const rest = b.replace(match[0], "").trim();
          return { front: title.replace(/^\d+\.\s*/, ""), back: rest };
        }
        return null;
      })
      .filter(Boolean) as { front: string; back: string }[];
  }, [content]);

  if (cards.length === 0)
    return (
      <div className="p-10 text-center text-emerald-900/40 font-bold uppercase tracking-widest">
        No flashcards available for this material.
      </div>
    );

  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto space-y-8 my-10">
      {/* Top Header & Progress */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-900/40 flex items-center gap-2">
            <Library size={14} /> Flashcards
          </p>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20 flex items-center gap-1.5">
            <Sparkles size={12} /> Spaced Repetition
          </span>
        </div>

        <div className="flex items-center gap-4 w-full">
          <span className="text-sm font-black text-emerald-950 w-12 text-right">
            {currentIndex + 1} / {cards.length}
          </span>
          <div className="h-2 flex-1 bg-emerald-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>
      </div>

      {/* Card Container */}
      <div className="w-full aspect-[4/3] sm:aspect-[16/10] perspective-1000 group relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full absolute inset-0"
          >
            <motion.div
              className="w-full h-full relative preserve-3d cursor-pointer touch-pan-y"
              initial={false}
              animate={{ rotateY: flipped ? 180 : 0 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, { offset }) => {
                const swipe = offset.x;
                if (swipe < -60 && currentIndex < cards.length - 1) {
                  setFlipped(false);
                  setTimeout(() => setCurrentIndex(currentIndex + 1), 150);
                } else if (swipe > 60 && currentIndex > 0) {
                  setFlipped(false);
                  setTimeout(() => setCurrentIndex(currentIndex - 1), 150);
                }
              }}
              onClick={() => setFlipped(!flipped)}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-white border-2 border-emerald-100 rounded-[2rem] sm:rounded-[3rem] shadow-xl shadow-emerald-900/5 overflow-hidden flex flex-col group-hover:shadow-2xl transition-shadow duration-300">
                {/* Subtle dot pattern background */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

                <div className="relative flex-1 p-6 sm:p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 sm:mb-8 shadow-inner">
                    <BrainCircuit size={32} className="sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-emerald-950 uppercase leading-tight tracking-tight px-4">
                    {cards[currentIndex].front}
                  </h3>
                </div>

                <div className="relative h-16 sm:h-20 bg-emerald-50/50 border-t border-emerald-50 flex items-center justify-center">
                  <p className="text-[10px] sm:text-xs font-black text-primary/60 uppercase tracking-widest flex items-center gap-2">
                    <Layers size={14} /> Tap to flip • Swipe to navigate
                  </p>
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 backface-hidden bg-gradient-to-br from-emerald-900 to-emerald-950 border-2 border-emerald-800 rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div className="flex-1 p-6 sm:p-12 overflow-y-auto custom-scrollbar flex flex-col justify-center">
                  <div className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto w-full text-center sm:text-left">
                    <ReactMarkdown
                      remarkPlugins={[remarkMath, remarkGfm]}
                      rehypePlugins={[rehypeKatex]}
                    >
                      {cards[currentIndex].back}
                    </ReactMarkdown>
                  </div>
                </div>

                <div className="h-16 sm:h-20 bg-black/20 border-t border-white/5 flex items-center justify-center shrink-0">
                  <p className="text-[10px] sm:text-xs font-black text-emerald-400/60 uppercase tracking-widest flex items-center gap-2">
                    <Layers size={14} /> Tap to flip • Swipe to navigate
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4 w-full max-w-md pt-4">
        <button
          onClick={() => {
            setFlipped(false);
            setTimeout(
              () => setCurrentIndex(Math.max(0, currentIndex - 1)),
              150,
            );
          }}
          disabled={currentIndex === 0}
          className="flex-1 py-4 px-6 rounded-2xl bg-white border-2 border-emerald-100 text-emerald-900 font-black uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-50 transition-colors shadow-sm active:scale-95"
        >
          <ArrowLeft size={18} /> Prev
        </button>
        <button
          onClick={() => {
            setFlipped(false);
            setTimeout(
              () =>
                setCurrentIndex(Math.min(cards.length - 1, currentIndex + 1)),
              150,
            );
          }}
          disabled={currentIndex === cards.length - 1}
          className="flex-1 py-4 px-6 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-500 transition-colors shadow-xl shadow-primary/20 active:scale-95"
        >
          Next <ArrowLeft size={18} className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default function MaterialViewer() {
  const { materialId } = useParams();
  const [data, setData] = useState<MaterialData | null>(null);
  const [viewMode, setViewMode] = useState<"notes" | "flashcards">("notes");
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportDescription, setReportDescription] = useState('');
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);

  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportDescription.trim()) return;
    setIsSubmittingReport(true);
    try {
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      const { db } = await import('../lib/firebase');
      
      const userEmail = localStorage.getItem('operatorName') || 'Candidate';
      
      await addDoc(collection(db, 'reports'), {
        materialId: materialId,
        materialTitle: data?.title,
        description: reportDescription,
        reporter: userEmail,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      setReportSuccess(true);
      setTimeout(() => {
        setIsReportModalOpen(false);
        setReportSuccess(false);
        setReportDescription('');
      }, 2000);
    } catch (err) {
      console.error('Failed to submit report', err);
    } finally {
      setIsSubmittingReport(false);
    }
  };

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    async function loadMaterial() {
      if (!materialId) return;

      // 1. Try to fetch from Firestore first!
      try {
        const { doc, getDoc } = await import('firebase/firestore');
        const { db } = await import('../lib/firebase');
        const docSnap = await getDoc(doc(db, 'custom_materials', materialId));
        if (docSnap.exists()) {
          const fetchedData = docSnap.data();
          setData({
            id: materialId,
            title: fetchedData.title || '',
            subject: fetchedData.subject || '',
            category: fetchedData.category || '',
            content: fetchedData.content || '',
            flashcards: fetchedData.flashcards || []
          });
          return;
        }
      } catch (e) {
        console.error("Error fetching material from Firestore", e);
      }

      // 2. Fallback to mockDb
      if (mockDb[materialId]) {
        setData(mockDb[materialId]);
      } else {
        setData({
          id: materialId || "unknown",
          title: "Material Not Found",
          subject: "System",
          category: "Error",
          content: `### HTTP 404: Not Found\n\nThe requested material ID \`${materialId}\` is not available in the database.\n\nKeys available: ${Object.keys(mockDb).join(", ")}`,
        });
      }
    }

    loadMaterial();
  }, [materialId]);

  const downloadMaterialPDF = () => {
    if (!data) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const drawWatermark = () => {
      doc.saveGraphicsState();
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(24);
      doc.setTextColor(230, 230, 230); // very subtle light gray watermark
      
      // Add multiple watermarks diagonally across the page
      for (let x = -pageWidth; x < pageWidth * 2; x += 100) {
        for (let y = -pageHeight; y < pageHeight * 2; y += 80) {
          doc.text("JEE TAPASYA", x, y, {
            align: "center",
            angle: 30
          });
        }
      }
      doc.restoreGraphicsState();
    };

    // Helper to draw header on every page
    const drawHeader = (pageNumber: number) => {
      // Top background bar
      doc.setFillColor(240, 253, 244); // emerald-50
      doc.rect(0, 0, pageWidth, 16, "F");

      // Top Header Text
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(6, 78, 59); // emerald-900
      doc.text(`JEE TAPASYA — ${data.subject.toUpperCase()} NOTES`, 15, 10.5);

      // Category on the right
      doc.text(data.category.toUpperCase(), pageWidth - 15, 10.5, { align: "right" });

      // Bottom Footer
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Page ${pageNumber}`, pageWidth / 2, pageHeight - 10, { align: "center" });
      doc.text("Class Notes & Formulae • JEE Tapasya Learning Archive", 15, pageHeight - 10);
    };

    let pageNum = 1;
    drawWatermark();
    drawHeader(pageNum);

    let yOffset = 32;

    // Document Subject & Category
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(5, 150, 105); // emerald-500
    doc.text(`${data.subject.toUpperCase()} • ${data.category.toUpperCase()}`, 15, yOffset);
    yOffset += 8;

    // Document Title
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(6, 78, 59); // emerald-900
    const titleLines = doc.splitTextToSize(data.title.toUpperCase(), pageWidth - 30);
    doc.text(titleLines, 15, yOffset);
    yOffset += (titleLines.length * 8) + 5;

    // Beautiful divider line
    doc.setDrawColor(16, 185, 129); // emerald-500
    doc.setLineWidth(0.8);
    doc.line(15, yOffset, pageWidth - 15, yOffset);
    yOffset += 12;

    // Set font for body content
    doc.setFont("Helvetica", "normal");
    doc.setLineWidth(0.2); // reset line width

    // Clean up content and split by lines
    const contentLines = data.content.split("\n");

    contentLines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) {
        yOffset += 4; // empty space
        return;
      }

      let fontSize = 10;
      let fontType = "normal";
      let textColor = [30, 41, 59]; // slate-800
      let indent = 15;
      let textToRender = trimmed;
      let leadingSpace = 6;

      if (trimmed.startsWith("###")) {
        fontSize = 12;
        fontType = "bold";
        textColor = [6, 78, 59]; // emerald-900
        textToRender = trimmed.replace(/^###\s*/, "").toUpperCase();
        leadingSpace = 10;
      } else if (trimmed.startsWith("##")) {
        fontSize = 14;
        fontType = "bold";
        textColor = [6, 78, 59]; // emerald-900
        textToRender = trimmed.replace(/^##\s*/, "").toUpperCase();
        leadingSpace = 12;
      } else if (trimmed.startsWith("#")) {
        fontSize = 16;
        fontType = "bold";
        textColor = [6, 78, 59]; // emerald-900
        textToRender = trimmed.replace(/^#\s*/, "").toUpperCase();
        leadingSpace = 14;
      } else if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
        indent = 20;
        textToRender = "• " + trimmed.replace(/^[-*]\s*/, "");
      } else if (/^\d+\./.test(trimmed)) {
        indent = 20;
        textToRender = trimmed;
      } else {
        textToRender = trimmed;
      }

      // Decode basic LaTeX / markdown symbols
      textToRender = textToRender.replace(/\*\*/g, ""); // Remove bold markers
      textToRender = textToRender.replace(/\$/g, ""); // Remove inline math markers
      textToRender = textToRender.replace(/\\_/g, "_"); // Fix underscore escape
      textToRender = textToRender.replace(/\\{/g, "{").replace(/\\}/g, "}");
      textToRender = textToRender.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "$1/$2"); // \frac{a}{b} -> a/b
      textToRender = textToRender.replace(/\^\{([^}]+)\}/g, "^$1"); // ^{2} -> ^2
      textToRender = textToRender.replace(/_\{([^}]+)\}/g, "_$1"); // _{1} -> _1
      textToRender = textToRender.replace(/\^2/g, "²");
      textToRender = textToRender.replace(/\^3/g, "³");
      textToRender = textToRender.replace(/\^-1/g, "⁻¹");
      textToRender = textToRender.replace(/\^-2/g, "⁻²");
      textToRender = textToRender.replace(/\^-3/g, "⁻³");
      textToRender = textToRender.replace(/_1/g, "₁");
      textToRender = textToRender.replace(/_2/g, "₂");
      textToRender = textToRender.replace(/_3/g, "₃");
      textToRender = textToRender.replace(/_0/g, "₀");
      textToRender = textToRender.replace(/_\{mean\}/g, "ₘₑₐₙ");
      textToRender = textToRender.replace(/_i/g, "ᵢ");
      textToRender = textToRender.replace(/_f/g, "𝒻");
      textToRender = textToRender.replace(/\\alpha/g, "α");
      textToRender = textToRender.replace(/\\beta/g, "β");
      textToRender = textToRender.replace(/\\gamma/g, "γ");
      textToRender = textToRender.replace(/\\theta/g, "θ");
      textToRender = textToRender.replace(/\\Delta/g, "Δ");
      textToRender = textToRender.replace(/\\pi/g, "π");
      textToRender = textToRender.replace(/\\mu/g, "μ");
      textToRender = textToRender.replace(/\\Sigma/g, "Σ");
      textToRender = textToRender.replace(/\\Omega/g, "Ω");
      textToRender = textToRender.replace(/\\phi/g, "φ");
      textToRender = textToRender.replace(/\\lambda/g, "λ");
      textToRender = textToRender.replace(/\\to/g, "→");
      textToRender = textToRender.replace(/\\rightarrow/g, "→");
      textToRender = textToRender.replace(/\\infty/g, "∞");
      textToRender = textToRender.replace(/\\approx/g, "≈");
      textToRender = textToRender.replace(/\\neq/g, "≠");
      textToRender = textToRender.replace(/\\le/g, "≤");
      textToRender = textToRender.replace(/\\ge/g, "≥");
      textToRender = textToRender.replace(/\\times/g, "×");
      textToRender = textToRender.replace(/\\cdot/g, "·");
      textToRender = textToRender.replace(/\\sqrt\{([^}]+)\}/g, "√$1");
      textToRender = textToRender.replace(/\\pm/g, "±");
      textToRender = textToRender.replace(/\\circ/g, "°");
      textToRender = textToRender.replace(/\\rightarrow/g, "→");

      // Format text wrapping
      const wrapped = doc.splitTextToSize(textToRender, pageWidth - indent - 15);
      const height = wrapped.length * (fontSize * 0.5) + leadingSpace;

      // Check if page overflow
      if (yOffset + height > pageHeight - 20) {
        doc.addPage();
        pageNum++;
        drawWatermark();
        drawHeader(pageNum);
        yOffset = 25;
      }

      // Apply settings and draw
      doc.setFont("Helvetica", fontType);
      doc.setFontSize(fontSize);
      doc.setTextColor(textColor[0], textColor[1], textColor[2]);
      doc.text(wrapped, indent, yOffset + (fontSize * 0.3));

      yOffset += height;
    });

    doc.save(`JEE_Tapasya_${data.title.replace(/\s+/g, "_")}.pdf`);
  };

  if (!data) return null;

  if (data.category === "Mind Map") {
    return createPortal(
      <div className="fixed inset-0 z-[9999] bg-[#0B0C10] flex flex-col w-[100dvw] h-[100dvh] overflow-hidden font-sans">
        {/* Navbar Component for Full Screen View */}
        <div className="flex-none px-4 py-4 md:px-8 md:py-5 flex justify-between items-center relative z-50 border-b border-white/5 bg-[#11141A]/90 backdrop-blur-md shadow-lg shadow-black/50">
          <Link
            to="/study"
            className="inline-flex items-center gap-2 text-[#00c6ff]/60 hover:text-[#00c6ff] transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Overview
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c6ff] animate-pulse" />
            <span className="text-[#00c6ff] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              {data.subject} MIND MAP
            </span>
          </div>
        </div>

        {/* Mind Map Area */}
        <div className="flex-1 overflow-hidden bg-[#0B0C10] relative">
          <MindMapViewer data={data} />
        </div>
      </div>,
      document.body,
    );
  }

  return (
    <div
      className={cn(
        "space-y-6 sm:space-y-8 pb-20 mx-auto",
        data?.category === "Mind Map" ? "max-w-6xl" : "max-w-4xl",
      )}
    >
      <div className="px-4 sm:px-0">
        <Link
          to="/study"
          className="inline-flex items-center gap-2 text-emerald-900/40 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wide group mt-4 sm:mt-0"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Archive
        </Link>
      </div>

      <div
        className={cn(
          "px-4 sm:px-0 transition-all duration-500",
          data.category === "Mind Map"
            ? "max-w-6xl"
            : "bg-white sm:rounded-[3rem] border-y-2 sm:border-2 border-emerald-50 sm:shadow-2xl sm:shadow-emerald-900/5 p-5 px-6 sm:p-12",
        )}
      >
        {data.category !== "Mind Map" && (
          <header className="mb-8 sm:mb-12 border-b-2 border-emerald-50 pb-6 sm:pb-10">
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-emerald-900/40">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide">
                  <Clock size={14} /> 5 Min Read
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide">
                  <CheckCheck size={14} /> JEE Syllabus Aligned
                </span>
                <button 
                  onClick={() => setIsReportModalOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-red-400 hover:text-red-600 transition-colors animate-fade-in"
                >
                  <AlertTriangle size={14} /> Report Mistake
                </button>
                <button 
                  onClick={downloadMaterialPDF}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-emerald-600 hover:text-emerald-800 transition-colors animate-fade-in"
                >
                  <Download size={14} /> Download PDF
                </button>
              </div>
              <div className="flex bg-emerald-50 p-1 rounded-xl w-full sm:w-auto">
                <button
                  onClick={() => setViewMode("notes")}
                  className={cn(
                    "flex-1 sm:flex-none px-4 py-2 text-xs font-black uppercase tracking-widest rounded-lg transition-all",
                    viewMode === "notes"
                      ? "bg-white text-emerald-950 shadow-sm"
                      : "text-emerald-900/40 hover:text-emerald-900",
                  )}
                >
                  Notes
                </button>
                <button
                  onClick={() => setViewMode("flashcards")}
                  className={cn(
                    "flex-1 sm:flex-none px-4 py-2 text-xs font-black uppercase tracking-widest rounded-lg transition-all",
                    viewMode === "flashcards"
                      ? "bg-white text-emerald-950 shadow-sm"
                      : "text-emerald-900/40 hover:text-emerald-900",
                  )}
                >
                  Flashcards
                </button>
              </div>
            </div>
          </header>
        )}

        {data.category !== "Mind Map" && viewMode === "notes" && (
          <article className="prose prose-emerald prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-emerald-950 prose-p:text-emerald-900/80 prose-strong:text-emerald-900 prose-li:marker:text-primary prose-a:text-primary hover:prose-a:text-emerald-600">
            {/* We add a custom wrapper for react-markdown to style math properly */}
            <div className="markdown-body">
              <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  h3: ({ node, ...props }) => (
                    <h3
                      className="flex items-center gap-2 pt-6 border-t-2 border-emerald-50"
                      {...props}
                    />
                  ),
                  table: ({ node, ...props }) => (
                    <div className="w-full overflow-x-auto my-4 md:my-6 rounded-xl border border-gray-100 shadow-sm">
                      <table
                        className="w-full text-left border-collapse min-w-[500px]"
                        {...props}
                      />
                    </div>
                  ),
                }}
              >
                {data.content}
              </ReactMarkdown>
            </div>
          </article>
        )}

        {data.category !== "Mind Map" && viewMode === "flashcards" && (
          <FlashcardViewer content={data.content} />
        )}
      </div>

      <div className="px-4 sm:px-0">
        <div className="bg-emerald-50/50 p-6 sm:p-8 rounded-3xl border-2 border-emerald-100/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-emerald-900/60">
            <Info size={24} className="text-emerald-400" />
            <p className="text-sm font-medium">
              Was this material helpful for your revision?
            </p>
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
      
      {/* Report Issue Modal */}
      <AnimatePresence>
        {isReportModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-emerald-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setIsReportModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-emerald-900/40 hover:text-emerald-950 hover:bg-emerald-50 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-2xl font-black text-emerald-950 heading-display uppercase tracking-tight mb-2">Report Issue</h3>
              <p className="text-emerald-900/60 font-medium text-sm mb-6 leading-relaxed">
                Found a mistake in the short notes or mind map? Let us know and we'll fix it.
              </p>
              
              {reportSuccess ? (
                <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-200 font-bold text-center">
                  Report submitted successfully! Thank you.
                </div>
              ) : (
                <form onSubmit={handleReportSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-2">Describe the issue</label>
                    <textarea 
                      value={reportDescription}
                      onChange={(e) => setReportDescription(e.target.value)}
                      placeholder="e.g. In section 3, the formula for moment of inertia is incorrect..."
                      className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 text-sm font-medium focus:outline-none focus:border-primary/50 focus:bg-white transition-colors min-h-[120px] resize-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmittingReport || !reportDescription.trim()}
                    className="w-full py-4 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-600 active:scale-[0.98] transition-all disabled:opacity-50 disabled:active:scale-100 shadow-xl shadow-primary/20 flex justify-center items-center h-14"
                  >
                    {isSubmittingReport ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      "Submit Report"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
