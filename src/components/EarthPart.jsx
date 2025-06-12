import React from "react";
import EearthCanvas from "./Earth";

function EarthPart() {
  return (
    <>
      <div className="mt-32 h-[300px] animate-slide-in-right">
        <EearthCanvas />
      </div>
    </>
  );
}

export default EarthPart;
