import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader2 = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Animated Bouncing Ball */}
        <div className="relative w-10 h-10">
          <div className="w-10 h-10 bg-[#915eff] rounded-full animate-bounce" />
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-10 h-2 bg-gray-300 rounded-full blur-sm opacity-60 animate-pulse" />
        </div>
      </div>
    </Html>
  );
};

export default Loader2;
