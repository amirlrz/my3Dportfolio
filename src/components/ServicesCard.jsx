import React from "react";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function ServicesCard({ data }) {
  useGSAP(() => {
    gsap.to("#pic", {
      rotation: 360,
      duration: 0.05,
      scrollTrigger: {
        trigger: "#card-anim",
        scrub: 1,
        end: "+=400",
      },
    });
  }, []);
  useGSAP(() => {
    gsap.to("#card-anim", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#card-anim",
        scrub: 1,
        end: "+=500",
      },
    });
  }, []);
  return (
    <>
      <Tilt glareEnable={false} tiltEnable={window.innerWidth > 768}>
        <div
          id="card-anim"
          className="   bg-black-tertiary rounded-[20px] 
       min-h-[280px]  flex justify-evenly items-center border
        border-[#915eff]/55  w-[250px] translate-x-20 
       flex-col"
        >
          {data.title}
          <img
            id="pic"
            className=""
            width={100}
            src={data.icon}
            alt="skill-logo"
          />
        </div>
      </Tilt>
    </>
  );
}

export default ServicesCard;
