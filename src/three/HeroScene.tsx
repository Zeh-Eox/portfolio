import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField({ count = 2800 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.ty = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const accent = new THREE.Color("#c6ff3d");
    const bright = new THREE.Color("#f5f5f5");
    const dim = new THREE.Color("#6a6a6a");

    for (let i = 0; i < count; i++) {
      // Spherical distribution biased outward for a galaxy-like cloud
      const r = 2.5 + Math.pow(Math.random(), 0.55) * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const roll = Math.random();
      let c: THREE.Color;
      if (roll < 0.035) c = accent;
      else if (roll < 0.35) c = bright;
      else c = dim;

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((_, delta) => {
    if (!points.current) return;
    mouse.current.x += (mouse.current.tx - mouse.current.x) * delta * 2.2;
    mouse.current.y += (mouse.current.ty - mouse.current.y) * delta * 2.2;

    points.current.rotation.y += delta * 0.04 + mouse.current.x * delta * 0.25;
    points.current.rotation.x = mouse.current.y * 0.18;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function DriftingDust({ count = 600 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const velocities = useRef<Float32Array | null>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
      vel[i * 3] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 1] = Math.random() * 0.04 + 0.01;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    velocities.current = vel;
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!points.current || !velocities.current) return;
    const geo = points.current.geometry as THREE.BufferGeometry;
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const v = velocities.current;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] += v[i] * delta * 60;
      arr[i + 1] += v[i + 1] * delta * 60;
      arr[i + 2] += v[i + 2] * delta * 60;
      if (arr[i + 1] > 4.5) arr[i + 1] = -4.5;
      if (arr[i] > 7) arr[i] = -7;
      if (arr[i] < -7) arr[i] = 7;
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        color="#ffffff"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function FloatingAccents({ count = 7 }: { count?: number }) {
  const group = useRef<THREE.Group>(null);
  const orbs = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        radius: 2.2 + Math.random() * 2.4,
        speed: 0.1 + Math.random() * 0.18,
        phase: (i / count) * Math.PI * 2 + Math.random() * 0.5,
        yPhase: Math.random() * Math.PI * 2,
        yAmp: 0.8 + Math.random() * 1.4,
        scale: 0.04 + Math.random() * 0.05,
      })),
    [count]
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const o = orbs[i];
      child.position.x = Math.cos(t * o.speed + o.phase) * o.radius;
      child.position.z = Math.sin(t * o.speed + o.phase) * o.radius - 1;
      child.position.y = Math.sin(t * 0.45 + o.yPhase) * o.yAmp;
    });
  });

  return (
    <group ref={group}>
      {orbs.map((o, i) => (
        <mesh key={i} scale={o.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#c6ff3d" />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#0a0a0a"]} />
      <fog attach="fog" args={["#0a0a0a", 6, 18]} />
      <Suspense fallback={null}>
        <ParticleField />
        <DriftingDust />
        <FloatingAccents />
      </Suspense>
    </Canvas>
  );
}
