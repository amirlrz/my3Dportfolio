import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { myProjects } from "../constants";
import ProjectCard from "./ProjectCard";

function Works() {
  useGSAP(() => {
    gsap.to("#project", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#project",
        toggleActions: "play none none none",
        scrub: 1,
        end: "+=200",
      },
    });
  }, []);
  return (
    <>
      <p className="ml-3 mt-16 text-gray-400 text-xs">My Projects </p>
      <h2
        id="project"
        className="ml-6 text-3xl font-bold opacity-0 -translate-x-16 "
      >
        Projects.
      </h2>
      <div className="flex  flex-wrap justify-start gap-10 mx-10 mt-10">
        {myProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
}

export default Works;
