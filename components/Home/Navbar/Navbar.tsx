import React from "react";
import Image from "next/image";

import { navLinks } from "@/constants/constants";
const Navbar = () => {
  return (
    <div className=" fixed h-[12vh] z-[10] w-full ">
      <div className="flex items-center h-full justify-between w-[95%] mx-auto">
        {/* LOGO */}
        <Image
          src="/images/Salma.png"
          alt="Papillon"
          width={100}
          height={100}
          className="ml-[-1.5rem] sm:ml-0"
        />
        {/* NAV LINK */}
        <div className="flex items-center space-x-10">
          <div className=" flex items-center space-x-8">
            {navLinks.map((navLink) => {
              return (
                <a
                  href={navLink.url}
                  key={navLink.id}
                  className="text-white font-semibold">
                  <p className="nav__link">{navLink.label}</p>
                </a>
              );
            })}
          </div>
          {/** BUTTON */}
          <div className="flex items-center space-x-4">
            <button className="px-8 py-3 text-blue text-blue-600 font-semibold text-sm rounded-md bg-white hover:bg-gray-200 transition-all duration-200">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
