import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./Loader";
import {
  Decal,
  Environment,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import Loader2 from "./Loader2";

const BallCanvas = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          flatShading
        ></Decal>
      </mesh>
    </Float>
  );
};
const Ball = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      <Suspense fallback={<Loader2 />}>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <Environment preset="city" />
        <BallCanvas imgUrl={icon} />
        <OrbitControls enableZoom={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Ball;
