import React from "react";
import { motion } from "framer-motion";
import BubbleProfile from "./IntroPart";
function Hero() {
  return (
    <section id="Home" className="relative w-full min-h-[100svh] mx-auto">
      <div>
        <BubbleProfile />
      </div>
      <div
        className="absolute max-sm:hidden [@media(max-height:700px)]:hidden z-40 bottom-3 w-full flex justify-center
      items-center
      "
      >
        <a href="#About">
          <div
            className="w-[30px] h-[50px] rounded-3xl border-4
  border-black-500 flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-2 rounded-full bg-black-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
