import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function DriftingDust({ count = 600 }: { count?: number }) {
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
