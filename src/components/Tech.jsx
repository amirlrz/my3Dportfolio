import React from "react";
import { technologies } from "../constants";
import BallCanvas from "./BallCanvas";

function Tech() {
  return (
    <div
      id="projects"
      className=" items-center gap-10 mx-2
     justify-center flex mt-24 flex-wrap flex-row"
    >
      {technologies.map((technology) => (
        <div className="w-20 h-20" key={technology.name}>
          <BallCanvas icon={technology.icon} key={technology.name} />
        </div>
      ))}
    </div>
  );
}

export default Tech;
