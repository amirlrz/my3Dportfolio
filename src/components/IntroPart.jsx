import { useEffect, useRef } from "react";
import gsap from "gsap";

const NAME = "Amir Mohamad Lorzade";
const ROLE = "Frontend Engineer · Next.JS / React & Three.js";
const PHOTO_SRC = "/assets/next.png";

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.230.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function BubbleProfile() {
  const containerRef = useRef(null);
  const bigBubbleRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        bigBubbleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 }
      )
        .fromTo(
          linkedinRef.current,
          { x: -60, scale: 0, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          githubRef.current,
          { x: 60, scale: 0, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, duration: 0.8 },
          "-=0.6"
        );

      if (!prefersReducedMotion) {
        [bigBubbleRef.current, linkedinRef.current, githubRef.current].forEach(
          (el, i) => {
            gsap.to(el, {
              y: i === 0 ? -15 : -10,
              duration: 3 + i,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        );
      }

      const magnetic = (el, strength = 0.3) => {
        const onMove = (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(el, {
            x: x * strength,
            y: y * strength,
            scale: 1.08,
            duration: 0.3,
          });
        };
        const onLeave = () =>
          gsap.to(el, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          });
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
      };

      magnetic(bigBubbleRef.current, 0.15);
      magnetic(linkedinRef.current);
      magnetic(githubRef.current);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#030014]">
      <div
        ref={containerRef}
        className="relative z-10  flex flex-col items-center justify-center h-full gap-10 px-6"
      >
        {/* Status eyebrow */}
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </div>

        {/* Constellation cluster */}
        <div className="relative flex flex-row items-center justify-center gap-10 md:gap-16">
          <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#915eff]/50 to-transparent" />

          <a
            ref={linkedinRef}
            href="https://www.linkedin.com/in/amir-mohamad-lorzad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 shadow-lg transition-colors hover:bg-[#0a66c2]/20 hover:text-[#0a66c2] hover:border-[#0a66c2]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915eff]"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>

          <div
            ref={bigBubbleRef}
            className="relative z-10 w-40 h-40 md:w-64 md:h-64 rounded-full cursor-pointer"
          >
            <div className="absolute -inset-[6px] rounded-full bg-[conic-gradient(from_0deg,#915eff,transparent_60%,#915eff)] animate-[spin_8s_linear_infinite] opacity-70 blur-[2px]" />
            <div className="relative w-full h-full   overflow-hidden ">
              <img
                src={PHOTO_SRC}
                alt={NAME}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <a
            ref={githubRef}
            href="https://github.com/amirlrz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 shadow-lg transition-colors hover:bg-white/10 hover:text-white hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915eff]"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">
            {NAME}
          </h1>
          <p className="mt-1 text-sm md:text-base text-white/50">{ROLE}</p>
        </div>
      </div>
    </section>
  );
}
