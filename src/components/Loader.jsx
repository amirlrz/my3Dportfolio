import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-5">
        {/* Animated Fancy Ball */}
        <div className="relative w-20 h-20">
          {/* Glow ball with shine */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#915eff] to-blue-600 shadow-xl animate-bounce shadow-blue-500/50 border-4 border-white/20" />

          {/* Shimmering ring */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-spin-slow opacity-30" />

          {/* Shadow on ground */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-12 h-3 bg-blue-200/30 rounded-full blur-sm opacity-50 animate-pulse" />
        </div>

        {/* Fun text with shimmer */}
        {/* <p className="text-white font-semibold text-[15px] tracking-wider animate-pulse">
          Preparing 3D World...
        </p> */}

        {/* Progress */}
        <p className="text-sm text-cyan-200 font-mono">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
