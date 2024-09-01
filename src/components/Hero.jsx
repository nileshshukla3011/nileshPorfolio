//import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "/assets/profile-pic.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-8 text-4xl font-thin tracking-tight lg:mt-16 lg:text-5xl text-center lg:text-left">
              Nilesh Kumar Shukla
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent text-center lg:text-left">
              Software Developer
            </span>
            <p className="my-4 max-w-xl py-4 font-light tracking-tighter text-center lg:text-left">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <img
              src={profilePic}
              alt="Nilesh Kumar Shukla"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
