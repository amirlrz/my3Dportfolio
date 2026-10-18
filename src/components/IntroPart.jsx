import { useEffect, useRef } from "react";
import gsap from "gsap";

const NAME = "Amir Mohamad Lorzade";
const ROLE = "Frontend Engineer · Next.js / React & Three.js";
const PHOTO_SRC = "/assets/pro.png";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function BubbleProfile() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.from(".profile-reveal", {
        y: 24,
        opacity: 0,
        scale: 0.96,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="profile-hero relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#050313] px-4 pt-24 pb-16 text-white sm:px-6"
    >
      {/* Lightweight background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(120,65,230,.19), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(55,30,130,.12), transparent 45%)",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center,black,transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Status */}
        <div className="profile-status profile-reveal mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 sm:text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/50 motion-reduce:animate-none" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </div>

        {/* Profile constellation */}
        <div className="profile-reveal relative flex w-full items-center justify-center gap-4 sm:gap-10 md:gap-16">
          <div className="absolute left-[12%] right-[12%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/amir-mohamad-lorzad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="profile-float-slow relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#15102b] text-white/75 shadow-[0_0_30px_rgba(100,60,200,.12)] transition-[background-color,border-color,color,box-shadow] duration-300 hover:border-[#0a66c2]/60 hover:bg-[#0a66c2]/20 hover:text-[#63aaff] hover:shadow-[0_0_30px_rgba(10,102,194,.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400 sm:h-20 sm:w-20"
          >
            <LinkedinIcon />
          </a>

          {/* Main portrait */}
          <div className="profile-portrait profile-float relative z-10 h-40 w-40 shrink-0 rounded-full sm:h-56 sm:w-56">
            <div className="absolute -inset-3 rounded-full border border-violet-400/15" />

            <div className="absolute -inset-[5px] rounded-full bg-gradient-to-br from-[#b38aff] via-[#5c35a5] to-[#241447] opacity-90" />

            <div className="relative h-full w-full overflow-hidden rounded-full border-[4px] border-[#0c071f] bg-[#161027]">
              <img
                src={PHOTO_SRC}
                alt={NAME}
                width="512"
                height="512"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="block h-full w-full rounded-full object-cover object-[center_25%]"
              />
            </div>

            {/* Decorative orbital dot */}
            <span
              aria-hidden="true"
              className="absolute -right-1 top-[20%] h-3 w-3 rounded-full border-2 border-[#050313] bg-violet-300 shadow-[0_0_14px_rgba(180,130,255,.7)]"
            />
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/amirlrz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="profile-float-slow relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#15102b] text-white/75 shadow-[0_0_30px_rgba(100,60,200,.12)] transition-[background-color,border-color,color,box-shadow] duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400 sm:h-20 sm:w-20"
            style={{ animationDelay: "-2s" }}
          >
            <GithubIcon />
          </a>
        </div>

        {/* Identity */}
        <div className="profile-identity profile-reveal mt-6 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-violet-300/75">
            Hello, I'm
          </p>

          <h1 className="bg-gradient-to-b from-white via-white to-violet-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-5xl">
            {NAME}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-white/50 sm:text-lg">
            {ROLE}
          </p>
        </div>

        {/* CTA */}
        <div className="profile-actions profile-reveal mt-6 flex flex-wrap items-center justify-center gap-3 [&>a]:px-4 [&>a]:text-xs sm:[&>a]:px-7 sm:[&>a]:text-sm">
          <a
            href="#projects"
            className="rounded-full bg-violet-600 px-7 py-3 text-sm font-medium text-white shadow-[0_8px_35px_rgba(124,58,237,.22)] transition-colors hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          >
            Explore My Work ↗
          </a>

          <a
            href="tel:+14376771813"
            className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
