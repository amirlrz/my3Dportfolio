import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, Environment, Html } from "@react-three/drei";
import Loader from "./Loader";
import { DRACOLoader, GLTFLoader } from "three-stdlib";

// Computer Model Component
const ComputerModel = ({ isMobile }) => {
  const useDracoGLTF = (path) => {
    const loader = useLoader(GLTFLoader, path, (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco"); // حتما پوشه draco را داخل public بذار
      loader.setDRACOLoader(dracoLoader);
      console.log("✅ Draco loader activated!");
    });
    return loader;
  };

  const { scene } = useDracoGLTF("./models/desktop/scene.gltf");

  const groupRef = useRef();
  useEffect(() => {
    return () => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry?.dispose?.();
          if (child.material.map) child.material.map.dispose?.();
          child.material?.dispose?.();
        }
      });
    };
  }, [scene]);

  // Scale down materials for mobile
  useEffect(() => {
    if (isMobile) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material.roughness = 1; // Reduce shader complexity
          child.material.metalness = 0; // Disable expensive metalness
        }
      });
    }
  }, [scene, isMobile]);
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const posAttr = child.geometry?.attributes?.position;
        if (!posAttr || !posAttr.count) {
          console.warn("Invalid mesh geometry: ", child.name);
          child.visible = false; // یا scene.remove(child)
          return;
        }

        // کاهش shader complexity برای موبایل
        if (isMobile) {
          child.material.roughness = 1;
          child.material.metalness = 0;
        }
      }
    });
  }, [scene, isMobile]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const posAttr = child.geometry?.attributes?.position;
        const valid =
          posAttr &&
          posAttr.isBufferAttribute &&
          Number.isInteger(posAttr.count) &&
          posAttr.count * posAttr.itemSize === posAttr.array.length;

        if (!valid) {
          console.warn("Invalid mesh removed:", child.name);
          child.visible = false;
          return;
        }

        // Mobile optimization
        if (isMobile) {
          child.material.roughness = 1;
          child.material.metalness = 0;
        }
      }
    });
  }, [scene, isMobile]);

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={isMobile ? 0.1 : 0.15}
        position={isMobile ? [0.4, -1.5, -0.6] : [0, -1.65, -1.5]}
      />
    </group>
  );
};

// WebGL Fallback Component
const WebGLFallback = () => (
  <Html center>
    <div style={{ textAlign: "center", color: "white" }}>
      <p>3D content not supported on your device</p>
      <img
        src="/fallback-laptop.jpg"
        alt="Laptop"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  </Html>
);

// Main Canvas Component
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);
  const controlsRef = useRef();

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setWebGLAvailable(false);
    } catch (e) {
      setWebGLAvailable(false);
    }

    // Handle mobile detection
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  if (!webGLAvailable) {
    return <WebGLFallback />;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows={false} // Disable shadows on mobile
      dpr={Math.min(window.devicePixelRatio, 1.2)} // Cap DPR at 2 for performance
      camera={{
        position: [20, 3, 5],
        fov: 25,
        near: 0.1, // Better for mobile
        far: 1000,
      }}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: isMobile ? "low-power" : "high-performance",
        antialias: false, // Disable AA for better performance
      }}
    >
      <Suspense fallback={<Loader />}>
        {/* Simplified lighting for mobile */}
        {isMobile ? (
          <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 5]} intensity={0.8} />
          </>
        ) : (
          <>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
              position={[20, 50, 10]}
              angle={0.12}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize={1024} // Reduced from 2048
            />
            <pointLight position={[10, 10, 5]} intensity={0.5} />
          </>
        )}

        {/* Lighter environment for mobile */}
        <Environment preset="city" />

        {/* Computer Model */}
        <ComputerModel isMobile={isMobile} />

        {/* Simplified controls for mobile */}
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          enablePan={false}
          dampingFactor={isMobile ? 0.1 : 0.2} // Smoother on mobile
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
