import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ParticleField } from "./ParticleField";
import { DriftingDust } from "./DriftingDust";
import { FloatingAccents } from "./FloatingAccents";

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
