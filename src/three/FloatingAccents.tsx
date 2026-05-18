import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function FloatingAccents({ count = 7 }: { count?: number }) {
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
    [count],
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
