import React from "react";
import Tilt from "react-parallax-tilt";
function ProjectCard({ project }) {
  const { img, id, title, tags, description, source_code_link, Link } = project;
  return (
    <>
      <Tilt glareEnable={false} tiltEnable={window.innerWidth > 768}>
        <div
          key={project.id}
          className="   bg-black-tertiary rounded-[20px] 
       min-h-[180px]  flex justify-evenly items-center border  
        border-[#915eff]/55  w-[250px] h-[350px]
       flex-col"
        >
          <img
            className=" object-cover rounded-2xl  px-1 "
            src={img}
            alt={id}
          />
          <div className="flex justify-start ">
            <h2 className="font-bold flex justify-start ">{title}</h2>
          </div>
          <div className="absolute  inset-0 flex justify-end">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="to-black-500 w-12 h-12 rounded-full 
            flex justify-center items-center cursor-pointer
            "
            >
              <img
                src="/assets/github-logo.png"
                alt="github"
                className="  object-contain"
              />
            </div>
          </div>
          <div>
            <p className="text-sm mt-3 mx-2 ">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
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
          <div
            className={`cursor-pointer absolute -right-5 -bottom-6 text-md py-1 text-green-600 border border-[#915eff]/55 hover:bg-black-300 -z-10 hover:text-white rounded-full px-2  bg-black-tertiary ${
              Link ? "block" : "hidden"
            }`}
            onClick={() => window.open(Link, "_blank")}
          >
            <p>{Link ? "Go" : ""}</p>
          </div>
        </div>
      </Tilt>
    </>
  );
}

export default ProjectCard;
