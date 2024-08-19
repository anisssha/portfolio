import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/anishaProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-14 text-6xl font-thin tracking-tight lg:mt-13 lg:text-5xl"
          >
            Anisha Kumari Shrestha
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            dragConstraints={{ left: -100, right: 100 }}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            Full Stack Developer
          </motion.span>
        <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:p-8">
          <div className="max-w-sm lg:max-w-md mt-[-20px]">
            {/* <motion.img
            initial={{x:100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1 ,delay:1.2}}
              src={profilePic}
              alt="Anisha Shrestha"
              className="w-full h-auto object-cover"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
