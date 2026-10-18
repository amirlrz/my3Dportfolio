import { useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  return (
    <>
      <Tilt glareEnable={false} tiltEnable={window.innerWidth > 768}>
        <button
          ref={trigger}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-label={`View ${project.title.trim()} project details and gallery`}
          className="group flex h-[350px] w-[250px] flex-col overflow-hidden rounded-[20px] border border-[#915eff]/55 bg-[#030014] text-left text-white transition-colors hover:border-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
        >
          <div className="h-[140px] w-full shrink-0 overflow-hidden">
            <img src={project.img} alt={project.title.trim()} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-3 p-4">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-white/60">{project.description.trim()}</p>
            <div className="flex flex-wrap gap-2 text-[10px] text-violet-300">
              {project.tags.map((tag) => <span key={tag.name}>#{tag.name}</span>)}
            </div>
            <span className="mt-auto text-xs font-medium text-violet-300">View project & gallery &rarr;</span>
          </div>
        </button>
      </Tilt>
      {open && <ProjectModal project={project} returnFocusRef={trigger} onClose={() => setOpen(false)} />}
    </>
  );
}
