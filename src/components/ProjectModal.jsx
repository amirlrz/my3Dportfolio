import { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, returnFocusRef, onClose }) {
  const dialog = useRef(null);
  const headingId = useId();
  const [active, setActive] = useState(0);
  const media = useMemo(() => [
    ...[...new Set([project.img, ...(project.images || []), project.hoverImg].filter(Boolean))]
      .map((src) => ({ type: "photo", src })),
    ...[...new Set((project.videos || []).filter(Boolean))]
      .map((src) => ({ type: "video", src })),
  ], [project]);
  const hasVideo = media.some((item) => item.type === "video");
  const itemLabel = hasVideo ? "item" : "photo";

  useEffect(() => {
    const element = dialog.current;
    const previousFocus = returnFocusRef.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [returnFocusRef]);

  const move = (direction) => setActive((current) => (current + direction + media.length) % media.length);

  return createPortal(
    <dialog
      ref={dialog}
      aria-labelledby={headingId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      onKeyDown={(event) => {
        // Let the native video player handle seeking and volume keys.
        if (event.target.tagName === "VIDEO" || media.length < 2) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      className="project-dialog m-auto max-h-[90svh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-3xl border border-violet-400/30 bg-[#0c071f] p-0 text-white shadow-2xl"
    >
      <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-white/10 bg-[#0c071f] px-5 py-4 sm:px-8">
        <h2 id={headingId} className="text-lg font-semibold sm:text-2xl">{project.title.trim()}</h2>
        <button type="button" autoFocus onClick={onClose} aria-label="Close project details" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-2xl hover:bg-white/10 focus-visible:outline-violet-400">&times;</button>
      </div>
      <div className="space-y-6 p-5 sm:p-8">
        {media.length > 0 && (
          <section aria-label="Project gallery" className="space-y-3">
            <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:h-[420px]">
              {media[active].type === "video" ? (
                <video key={media[active].src} src={media[active].src} controls playsInline preload="none" aria-label={`${project.title.trim()} demo video`} className="h-full w-full object-contain">
                  Your browser does not support video playback.
                </video>
              ) : (
                <img src={media[active].src} alt={`${project.title.trim()} screenshot ${active + 1}`} className="h-full w-full object-contain" />
              )}
              {media.length > 1 && !hasVideo && <>
                <button type="button" onClick={() => move(-1)} aria-label={`Previous ${itemLabel}`} className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/80 text-2xl hover:bg-violet-700">&lsaquo;</button>
                <button type="button" onClick={() => move(1)} aria-label={`Next ${itemLabel}`} className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/80 text-2xl hover:bg-violet-700">&rsaquo;</button>
              </>}
            </div>
            <div className="flex items-center justify-center gap-4">
              {hasVideo && <button type="button" onClick={() => move(-1)} aria-label="Previous item" className="rounded-lg border border-white/20 px-3 py-2 hover:bg-white/10">&lsaquo;</button>}
              <p aria-live="polite" aria-atomic="true" className="text-center text-xs text-white/60">{hasVideo ? "Item" : "Photo"} {active + 1} of {media.length}</p>
              {hasVideo && <button type="button" onClick={() => move(1)} aria-label="Next item" className="rounded-lg border border-white/20 px-3 py-2 hover:bg-white/10">&rsaquo;</button>}
            </div>
            {media.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {media.map((item, index) => (
                  <button key={`${item.type}:${item.src}`} type="button" onClick={() => setActive(index)} aria-label={`Show ${item.type} ${index + 1}`} aria-pressed={active === index} className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 ${active === index ? "border-violet-400" : "border-white/15 hover:border-white/50"}`}>
                    {item.type === "video" ? <span className="text-xs text-violet-200">&#9654; Video</span> : <img src={item.src} alt="" loading="lazy" className="h-full w-full object-cover" />}
                  </button>
                ))}
              </div>
            )}
          </section>
        )}
        <section aria-label="Project description" className="space-y-4">
          <h3 className="text-lg font-semibold">About this project</h3>
          <p className="whitespace-pre-line text-sm leading-7 text-white/75 sm:text-base">{project.description.trim()}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => <span key={tag.name} className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">{tag.name}</span>)}
          </div>
        </section>
        <div className="flex flex-wrap gap-3 border-t border-white/10 pt-5">
          {project.Link && <a href={project.Link} target="_blank" rel="noopener noreferrer" className="rounded-full bg-violet-600 px-5 py-3 text-sm font-medium hover:bg-violet-500">Visit live site </a>}
          {project.source_code_link && <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-5 py-3 text-sm hover:bg-white/10">View source code</a>}
        </div>
      </div>
    </dialog>, document.body
  );
}
