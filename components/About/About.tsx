import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
const About = () => {
  return (
    <div className="pt-16 pb-16 ">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-2 gap-8 items-center mt-20">
        <div>
          <h1 className="text-back text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-100">
            {aboutInfo.description}
          </p>
          <div className="mt-8 ">
            <div className="flex items-center space-x-2 mb-6 ">
              <div className="w-7 h-7 bg-purple-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-lg font-bold text-gray-200">
                FrontEnd Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6 ">
              <div className="w-7 h-7 bg-yellow-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-lg font-bold text-gray-200">
                BackEnd Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6 ">
              <div className="w-7 h-7 bg-yellow-500 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-lg font-bold text-gray-200">
                FullStack Development
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16 items-center mx-auto">
          <div>
            <Image
              src="/images/Customers-list.png"
              alt="customers"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.client}
            </p>
            <p className="text-base text-gray-400 text-center">
              Satisfied customers
            </p>
          </div>
          <div>
            <Image
              src="/images/experience.svg"
              alt="experience"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.experience}
            </p>
            <p className="text-base text-gray-400 text-center">
              Years Experience
            </p>
          </div>
          <div>
            <Image
              src="/images/checkList.png"
              alt="customers"
              width={90}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.project}
            </p>
            <p className="text-base text-gray-400 text-center">
              Completed Project
            </p>
          </div>
          <div>
            <Image
              src="/images/fusee1.png"
              alt="fusee"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.website}
            </p>
            <p className="text-base text-gray-400 text-center">
              Website Lauched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
