import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
//import { motion } from "framer-motion";

function ProjectCard({ project }) {
  const {
    img,
    id,
    title,
    tags,
    description,
    source_code_link,
    Link,
    hoverImg,
  } = project;

  const [showMore, setShowMore] = useState(false);
  const [isLongText, setIsLongText] = useState(false);
  //const [isHovered, setIsHovered] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    const checkLines = () => {
      if (descRef.current) {
        const lineHeight = parseFloat(
          getComputedStyle(descRef.current).lineHeight
        );
        const lines = descRef.current.scrollHeight / lineHeight;
        setIsLongText(lines > 8);
      }
    };

    checkLines();

    // Add resize event listener
    window.addEventListener("resize", checkLines);

    return () => window.removeEventListener("resize", checkLines);
  }, []);

  return (
    <Tilt glareEnable={false} tiltEnable={window.innerWidth > 768}>
      <div
        key={id}
        className={`bg-black-tertiary rounded-[20px] 
        min-h-[180px] flex justify-evenly items-center border  
        border-[#915eff]/55 w-[250px] transition-all duration-300 ease-in-out
        ${showMore ? "h-[700px]" : "h-[350px]"} flex-col relative`}
      >
        <div className="relative w-full h-[140px] overflow-hidden rounded-xl mt-2">
          <img
            src={showMore ? hoverImg : img}
            alt={id}
            className="object-fill w-full h-full "
          />
        </div>
        {/* Title */}
        <div className="flex justify-start">
          <h2 className="font-bold flex justify-start">{title}</h2>
        </div>
        {/* GitHub Icon */}
        <div className="absolute inset-0 flex justify-end">
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="to-black-500 w-12 h-12 rounded-full 
                flex justify-center items-center cursor-pointer"
            >
              <img
                src="/assets/github-logo.png"
                alt="github"
                className="object-contain"
              />
            </div>
          )}
        </div>
        {/* Description */}
        <div className="px-2 text-sm  max-w-[95%] text-start relative">
          <p
            ref={descRef}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showMore ? "max-h-[500px]" : "max-h-[160px]"
            }`}
          >
            {description}
          </p>
          {isLongText && (
            <button
              className="text-blue-400 text-xs mt-1 mb-1 underline"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className="text-[10px]"
              style={{ color: tag.color }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        {/* External Link Button */}
        {Link && (
          <div
            className="cursor-pointer w-full text-center  text-md py-1 text-green-600 border border-[#915eff]/55 hover:bg-black-300 hover:text-white rounded-full px-2 bg-black-tertiary z-10"
            onClick={() => window.open(Link, "_blank")}
          >
            <p>Go</p>
          </div>
        )}
      </div>
    </Tilt>
  );
}

export default ProjectCard;
