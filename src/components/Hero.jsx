import React from "react";
import styles from "../styles";
//import ComputerCanvas from "./ComputerCanvas";
import { motion } from "framer-motion";
import BubbleProfile from "./IntroPart";
function Hero() {
  return (
    <section id="Home" className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute 
      inset-0 top-[40px] max-w-7xl mx-auto 
      flex flex-row items-start gap-5
      `}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-4 h-4 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 inset-0 bg-gradient-to-b from-[#915eff] via-[#26056d] via-[51%] to-[#000000] to-[90%] " />
        </div>
        <div>
          <h1 className="text-white text-3xl font-bold ">
            Hi , I'm <span className="text-[#915eff]">Amir</span>
          </h1>
          <p className="mt-2">
            Frontend Developer passionate about creating{" "}
            <br className="sm:block" />
            elegant and scalable web applications
            <br className="sm:block" />
            with React and Next.js.
          </p>
        </div>
      </div>
      {/* <ComputerCanvas /> */}
      <div className="mt-20">
        <BubbleProfile />
      </div>
      <div
        className="absolute max-sm:bottom-20  bottom-5 w-full flex justify-center
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
