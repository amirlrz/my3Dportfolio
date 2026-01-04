import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BubbleProfile() {
  const containerRef = useRef(null);
  const bigBubbleRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
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

      // Floating animation
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

      // Magnetic hover effect
      const magnetic = (el) => {
        el.addEventListener("mousemove", (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(el, {
            x: x * 0.3,
            y: y * 0.3,
            scale: 1.1,
            duration: 0.3,
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          });
        });
      };

      magnetic(bigBubbleRef.current);
      magnetic(linkedinRef.current);
      magnetic(githubRef.current);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-row items-center justify-center gap-6 md:gap-10 h-screen "
    >
      {/* LinkedIn */}
      <a
        ref={linkedinRef}
        href="https://www.linkedin.com/in/amir-mohamad-lorzad"
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-xl cursor-pointer"
      >
        Linkdin
      </a>

      {/* Main Bubble */}
      <div
        ref={bigBubbleRef}
        className="
    w-40 h-40 md:w-72 md:h-72
    rounded-full bg-black
    overflow-hidden
    border-4 border-white
    cursor-pointer
    shadow-[0_0_40px_#915eff]
    hover:shadow-[0_0_70px_#915eff]
    transition-shadow duration-300
  "
      >
        <img
          src="/assets/FullSize.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* GitHub */}
      <a
        ref={githubRef}
        href="https://github.com/amirlrz"
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-900 flex items-center justify-center shadow-xl cursor-pointer"
      >
        Github
      </a>
    </div>
  );
}
