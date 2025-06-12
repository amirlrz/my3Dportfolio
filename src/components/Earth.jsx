import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "./Loader";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Earth() {
  const earth = useGLTF("./models/planet/scene.gltf");
  return (
    <group scale={3.5}>
      <primitive object={earth.scene} />
    </group>
  );
}
const EearthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EearthCanvas;
