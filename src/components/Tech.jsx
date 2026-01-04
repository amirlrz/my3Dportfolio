import React from "react";
import { technologies } from "../constants";
import BallCanvas from "./BallCanvas";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Tech() {
  useGSAP(() => {
    gsap.to("#Skills", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#Skills",
        toggleActions: "play none none none",
        scrub: 1,
        end: "+=200",
      },
    });
  }, []);
  return (
    <>
      <div className="ml-5">
        <p className="ml-3 mt-16 text-gray-400 text-xs">
          Technical Proficiencies{" "}
        </p>
        <h2
          id="Skills"
          className="ml-2 text-3xl font-bold opacity-0 translate-y-16 "
        >
          {"<Skills />"}
        </h2>
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
      </div>
    </>
  );
}

export default Tech;
