import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 border-4 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
        <p className="mt-4 text-white font-medium">{progress.toFixed(2)}</p>
      </div>
    </Html>
  );
};

export default Loader;
