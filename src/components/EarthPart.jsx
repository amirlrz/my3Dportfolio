import React from "react";
import EearthCanvas from "./Earth";

function EarthPart() {
  return (
    <>
      <div className="mt-16 h-[500px] animate-slide-in-right">
        <EearthCanvas />
      </div>
    </>
  );
}

export default EarthPart;
