import React from "react";
import EearthCanvas from "./Earth";

function EarthPart() {
  return (
    <>
      <div className="h-full animate-slide-in-right">
        <EearthCanvas />
      </div>
    </>
  );
}

export default EarthPart;
