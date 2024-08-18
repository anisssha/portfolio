import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/anishaProfile.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="pb-14 text-6xl font-thin tracking-tight lg:mt-13 lg:text-5xl">
            Anisha Kumari Shrestha
          </h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            Full Stack Developer
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
            {HERO_CONTENT}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:p-8">
          <div className="max-w-sm lg:max-w-md mt-[-20px]">
            {/* <img
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
