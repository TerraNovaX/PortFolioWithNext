import { BaseInfo } from "@/Data/data";
import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full pt-[4vh] h-screen  overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-2 items-center gap-12">
          {/** CONTENT */}
          <div>
            <h1 className="text-4xl mb-5 text-white font-semibold">
              I am {BaseInfo.name}
            </h1>
            <h1 className="text-back text-6xl font-bold text-white leading-[3.5rem]">
              {BaseInfo.position}
            </h1>
            <p className="mt-6 text-sm text-gray-100">{BaseInfo.description}</p>
            <button
              className="px-6 py-1.5 text-blue-600 font-semibold text-sm transition-all 
            duration-200 rounded-md mt-8 bg-white hover:bg-gray-200 flex items-center space-x-2">
              <span>Download CV</span>
            </button>
          </div>
          {/** IMAGE content */}
          <div className="mx-auto  block  border-[3.5px] border-white overflow-x-hidden ">
            <Image
              src="/images/imageFemme.png"
              alt="image femme"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
