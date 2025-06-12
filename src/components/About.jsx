import React from "react";
import ServicesCard from "./ServicesCard";
import { services } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.to("#overview", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#overview",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });
  }, []);
  useGSAP(() => {
    gsap.to("#text", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#text",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div id="About">
      <div>
        <p className="ml-2 text-gray-400 text-xs">INTRODUCTION </p>
        <h2
          id="overview"
          className="ml-2 text-3xl font-bold opacity-0 translate-y-8 "
        >
          Overrview.
        </h2>
      </div>
      <div className="mx-3">
        <p id="text" className="mx-2 opacity-0 translate-y-5 ">
          <span className="font-bold text-[#915eff]/90">
            Frontend Developer | React & Next.js
          </span>{" "}
          <br />
          AmirMohamad, 26
          <br />
          <br />
          Passionate about transforming ideas into high-performance web
          experiences. I specialize in:
          <br />
          ⚡Core Skills: React.js, Next.js, JavaScript/TypeScript
          <br />⚡ Styling: Tailwind CSS,Mui, responsive design principles
          <br />⚡ Backend Familiarity: Basic Supabase/Firebase integration
          <br />
          ⚡WordPress: Custom theme development and API connections
          <br />
          <span className="font-bold text-[#915eff]/100">
            What I bring to projects:
          </span>
          <br />• Clean, maintainable code with growing TypeScript adoption
          <br /> • Focus on performance optimization and accessibility basics
          <br /> • Collaborative approach to problem-solving <br />• Quick
          learner for new technologies when needed
        </p>
        <br />
        <div className="mx-2">
          <h2 className="font-bold text-[#915eff]/90">Technical Toolkit:</h2> ▸
          Frontend: React.js | Next.js | JavaScript (ES6+) | TypeScript <br />▸
          Styling: Tailwind CSS | CSS Modules <br />▸ CMS: WordPress (Custom
          Themes, REST API, SEO Optimization) <br /> ▸ Backend Integration:
          Supabase | WordPress REST API <br />▸ Tools: Git | Figma
        </div>
      </div>
      <div
        className="mt-20 flex flex-wrap gap-10
     px-2  justify-center
     

      "
      >
        {services.map((services) => (
          <ServicesCard data={services} key={services.id} />
        ))}
      </div>
    </div>
  );
}

export default About;
