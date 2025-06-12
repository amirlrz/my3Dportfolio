import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { workExperiences } from "../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ExperienceCard from "./ExperienceCard";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  useGSAP(() => {
    gsap.to("#experience", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#experience",
        toggleActions: "play none none none",
        scrub: 1,
        end: "+=200",
      },
    });
  }, []);
  return (
    <>
      <div className="ml-5">
        <p className="ml-3 mt-16 text-gray-400 text-xs">what I Have Done </p>
        <h2
          id="experience"
          className="ml-2 text-3xl font-bold opacity-0 translate-y-16 "
        >
          Work Experience.
        </h2>
        <div className="mt-8 mx-2">
          <VerticalTimeline layout="1-column-left">
            <div className="mt-2 flex flex-col gap-5 ">
              {workExperiences.map((experience) => (
                <ExperienceCard experience={experience} key={experience.id} />
              ))}
            </div>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Experience;
