import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { MoleculeData, ATOM_COLORS, ATOM_RADII } from '../data/moleculesData';

interface VisualizerToggles {
  showLonePairs: boolean;
  showBondAngles: boolean;
  showElectronGeometry: boolean;
  showAtomLabels: boolean;
  autoRotate: boolean;
}

interface ComponentProps {
  molecule: MoleculeData;
  toggles: VisualizerToggles;
}

// Single Atom Sphere Component
function AtomMesh({
  position,
  symbol,
  element,
  showLabel,
  isCentral = false
}: {
  position: [number, number, number];
  symbol: string;
  element: string;
  showLabel: boolean;
  isCentral?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const color = ATOM_COLORS[symbol] || ATOM_COLORS.Default;
  const radius = (ATOM_RADII[symbol] || ATOM_RADII.Default) * (isCentral ? 1.15 : 1.0);

  return (
    <group position={position}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          color={color}
          roughness={0.25}
          metalness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Glossy inner glow halo */}
      <mesh scale={[1.05, 1.05, 1.05]}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Floating 3D Badge Label */}
      {showLabel && (
        <Html
          position={[0, radius + 0.2, 0]}
          center
          className="pointer-events-none select-none z-10"
        >
          <div className="px-1.5 py-0.5 bg-black/80 backdrop-blur-md rounded border border-white/20 text-center flex items-center justify-center whitespace-nowrap shadow-lg">
            <span className="text-[10px] font-black text-white leading-none tracking-wider">{symbol}</span>
          </div>
        </Html>
      )}
    </group>
  );
}

// Bond Cylinders Component
function BondMesh({
  start,
  end,
  type = 'single'
}: {
  start: [number, number, number];
  end: [number, number, number];
  type: 'single' | 'double' | 'triple';
}) {
  const pA = useMemo(() => new THREE.Vector3(...start), [start]);
  const pB = useMemo(() => new THREE.Vector3(...end), [end]);

  const { midpoint, orientation, length, perpVector } = useMemo(() => {
    const dir = new THREE.Vector3().subVectors(pB, pA);
    const len = dir.length();
    const mid = new THREE.Vector3().addVectors(pA, pB).multiplyScalar(0.5);

    const unitDir = dir.clone().normalize();
    const quat = new THREE.Quaternion();
    quat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), unitDir);

    // Perpendicular vector for double/triple bond spacing
    let perp = new THREE.Vector3(0, 0, 1).cross(unitDir);
    if (perp.lengthSq() < 0.001) {
      perp = new THREE.Vector3(1, 0, 0).cross(unitDir);
    }
    perp.normalize();

    return { midpoint: mid, orientation: quat, length: len, perpVector: perp };
  }, [pA, pB]);

  const cylinderRadius = 0.08;
  const offsetDistance = 0.13;

  if (type === 'double') {
    const off = perpVector.clone().multiplyScalar(offsetDistance);
    const pA1 = pA.clone().add(off);
    const pB1 = pB.clone().add(off);
    const pA2 = pA.clone().sub(off);
    const pB2 = pB.clone().sub(off);

    return (
      <group>
        <SingleCylinder start={pA1} end={pB1} radius={0.065} />
        <SingleCylinder start={pA2} end={pB2} radius={0.065} />
      </group>
    );
  }

  if (type === 'triple') {
    const off1 = perpVector.clone().multiplyScalar(offsetDistance * 1.1);
    const axis = new THREE.Vector3().subVectors(pB, pA).normalize();
    const off2 = off1.clone().applyAxisAngle(axis, (2 * Math.PI) / 3);
    const off3 = off1.clone().applyAxisAngle(axis, (4 * Math.PI) / 3);

    return (
      <group>
        <SingleCylinder start={pA.clone().add(off1)} end={pB.clone().add(off1)} radius={0.055} />
        <SingleCylinder start={pA.clone().add(off2)} end={pB.clone().add(off2)} radius={0.055} />
        <SingleCylinder start={pA.clone().add(off3)} end={pB.clone().add(off3)} radius={0.055} />
      </group>
    );
  }

  return <SingleCylinder start={pA} end={pB} radius={cylinderRadius} />;
}

function SingleCylinder({
  start,
  end,
  radius
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  radius: number;
}) {
  const dir = new THREE.Vector3().subVectors(end, start);
  const len = dir.length();
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const quat = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    dir.clone().normalize()
  );

  return (
    <mesh position={mid} quaternion={quat} castShadow receiveShadow>
      <cylinderGeometry args={[radius, radius, len, 32]} />
      <meshStandardMaterial
        color="#E2E8F0"
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
}

// Translucent Electron Cloud / Lone Pair Lobe
function LonePairLobe({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const vec = useMemo(() => new THREE.Vector3(...position), [position]);
  const len = vec.length();
  const quat = useMemo(() => {
    return new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      vec.clone().normalize()
    );
  }, [vec]);

  // Gentle pulse animation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 3 + len) * 0.05;
      groupRef.current.scale.set(s, s * 1.1, s);
    }
  });

  return (
    <group ref={groupRef} position={vec.clone().multiplyScalar(0.7)} quaternion={quat}>
      {/* Outer translucent cloud lobe */}
      <mesh position={[0, 0.45, 0]}>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshPhysicalMaterial
          color="#A855F7"
          transmission={0.8}
          opacity={0.45}
          transparent
          roughness={0.1}
          ior={1.2}
          thickness={0.5}
          emissive="#C084FC"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Wireframe shell for depth */}
      <mesh position={[0, 0.45, 0]}>
        <sphereGeometry args={[0.39, 16, 16]} />
        <meshBasicMaterial
          color="#E9D5FF"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Electron pair dots inside cloud */}
      <mesh position={[-0.1, 0.45, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#F43F5E" />
      </mesh>
      <mesh position={[0.1, 0.45, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#F43F5E" />
      </mesh>

      {/* Label */}
      <Html position={[0, 0.7, 0]} center className="pointer-events-none select-none z-10">
        <div className="px-1.5 py-0.5 bg-purple-950/90 text-purple-300 font-black text-[9px] rounded-sm border border-purple-500/40 shadow-sm backdrop-blur-md whitespace-nowrap">
          2e⁻
        </div>
      </Html>
    </group>
  );
}

// Bond Angles Curved Arc & 3D Text Overlay
function BondAngleArcs({
  centralPos,
  atoms,
  angleText
}: {
  centralPos: [number, number, number];
  atoms: MoleculeData['atoms'];
  angleText: string;
}) {
  const c = useMemo(() => new THREE.Vector3(...centralPos), [centralPos]);

  // Generate angle arcs between outer atoms
  const arcs = useMemo(() => {
    if (atoms.length < 3) return [];
    const outerAtoms = atoms.slice(1);
    const list: Array<{ arcPoints: THREE.Vector3[]; angleVal: string; labelPos: THREE.Vector3 }> = [];

    for (let i = 0; i < outerAtoms.length; i++) {
      for (let j = i + 1; j < outerAtoms.length; j++) {
        const vA = new THREE.Vector3(...outerAtoms[i].position).sub(c).normalize();
        const vB = new THREE.Vector3(...outerAtoms[j].position).sub(c).normalize();

        const dot = THREE.MathUtils.clamp(vA.dot(vB), -1, 1);
        const rad = Math.acos(dot);
        const deg = Math.round((rad * 180) / Math.PI);

        // Arc curve points at radius 0.65
        const arcRadius = 0.65;
        const curvePoints: THREE.Vector3[] = [];
        const steps = 24;

        const qStart = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 0, 0), vA);
        const qEnd = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 0, 0), vB);

        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          const q = qStart.clone().slerp(qEnd, t);
          const pt = new THREE.Vector3(1, 0, 0).applyQuaternion(q).multiplyScalar(arcRadius).add(c);
          curvePoints.push(pt);
        }

        const midVector = new THREE.Vector3().addVectors(vA, vB).normalize();
        const labelPos = c.clone().add(midVector.multiplyScalar(0.85));

        list.push({
          arcPoints: curvePoints,
          angleVal: `${deg}°`,
          labelPos
        });
      }
    }
    // Limit to max 3 primary arcs to keep screen clean
    return list.slice(0, 3);
  }, [c, atoms]);

  return (
    <group>
      {arcs.map((arc, idx) => {
        const lineGeo = new THREE.BufferGeometry().setFromPoints(arc.arcPoints);
        return (
          <group key={idx}>
            {/* Curved Arc Line */}
            <primitive object={new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: '#F59E0B', linewidth: 3 }))} />

            {/* Angle Value Tag */}
            <Html position={arc.labelPos} center className="pointer-events-none select-none z-10">
              <div className="px-1.5 py-0.5 bg-amber-950/90 text-amber-400 font-black text-[9px] rounded-sm border border-amber-500/50 shadow-md backdrop-blur-md flex items-center gap-1 whitespace-nowrap">
                {angleText || arc.angleVal}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

// Translucent Polyhedron Wireframe for Electron Geometry
function ElectronGeometryPolyhedron({
  centralPos,
  atoms,
  lonePairs
}: {
  centralPos: [number, number, number];
  atoms: MoleculeData['atoms'];
  lonePairs: MoleculeData['lonePairs'];
}) {
  const points = useMemo(() => {
    const list: THREE.Vector3[] = [];
    atoms.slice(1).forEach((a) => list.push(new THREE.Vector3(...a.position)));
    lonePairs.forEach((lp) => list.push(new THREE.Vector3(...lp.position)));
    return list;
  }, [atoms, lonePairs]);

  const wireframeGeo = useMemo(() => {
    if (points.length < 2) return null;
    const geometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    // Connect all vertices to outline geometric cage
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        linePositions.push(points[i].x, points[i].y, points[i].z);
        linePositions.push(points[j].x, points[j].y, points[j].z);
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    return geometry;
  }, [points]);

  if (!wireframeGeo) return null;

  return (
    <group position={centralPos}>
      <primitive object={new THREE.LineSegments(wireframeGeo, new THREE.LineDashedMaterial({ color: '#38BDF8', dashSize: 0.1, gapSize: 0.05, linewidth: 2 }))} />
    </group>
  );
}

// Main 3D Molecule Scene
function SceneContent({ molecule, toggles }: ComponentProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Auto rotation animation if enabled
  useFrame((_, delta) => {
    if (toggles.autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  const centralAtom = molecule.atoms[0];

  return (
    <group ref={groupRef}>
      {/* Central & Outer Atoms */}
      {molecule.atoms.map((atom, idx) => (
        <AtomMesh
          key={`atom-${idx}-${atom.symbol}`}
          position={atom.position}
          symbol={atom.symbol}
          element={atom.element}
          showLabel={toggles.showAtomLabels}
          isCentral={idx === 0}
        />
      ))}

      {/* Bonds */}
      {molecule.bonds.map((bond, idx) => {
        const fromPos = molecule.atoms[bond.fromIndex]?.position;
        const toPos = molecule.atoms[bond.toIndex]?.position;
        if (!fromPos || !toPos) return null;
        return (
          <BondMesh
            key={`bond-${idx}`}
            start={fromPos}
            end={toPos}
            type={bond.type}
          />
        );
      })}

      {/* Lone Pairs */}
      {toggles.showLonePairs &&
        molecule.lonePairs.map((lp, idx) => (
          <LonePairLobe key={`lp-${idx}`} position={lp.position} />
        ))}

      {/* Bond Angles */}
      {toggles.showBondAngles && (
        <BondAngleArcs
          centralPos={centralAtom.position}
          atoms={molecule.atoms}
          angleText={molecule.bondAngle}
        />
      )}

      {/* Electron Geometry Wireframe */}
      {toggles.showElectronGeometry && (
        <ElectronGeometryPolyhedron
          centralPos={centralAtom.position}
          atoms={molecule.atoms}
          lonePairs={molecule.lonePairs}
        />
      )}
    </group>
  );
}

export default function Molecular3DCanvas({ molecule, toggles }: ComponentProps) {
  return (
    <div className="w-full h-full relative bg-gradient-to-b from-gray-950 via-slate-950 to-emerald-950 overflow-hidden">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 1.2, 5.5], fov: 45 }}
        className="touch-none outline-none"
      >
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-5, -4, -5]} intensity={0.5} color="#38BDF8" />
        <pointLight position={[0, 0, 4]} intensity={0.8} color="#10B981" />

        <Float speed={toggles.autoRotate ? 1.5 : 0} rotationIntensity={0.2} floatIntensity={0.3}>
          <SceneContent molecule={molecule} toggles={toggles} />
        </Float>

        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.8}
          zoomSpeed={1.0}
          panSpeed={0.8}
          minDistance={2.0}
          maxDistance={12.0}
        />
      </Canvas>

      {/* Subtle Grid / Floor glow effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,150,105,0.08)_70%,rgba(2,6,23,0.8)_100%)]" />
    </div>
  );
}
