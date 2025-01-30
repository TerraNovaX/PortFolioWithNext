import { infoPerso } from "@/Data/data";
import React from "react";
import { FaPhone, FaRegAddressBook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const ContactInfo = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center justify-center ">
        <div className=" flex items-center  w-16 h-16 ">
          <FaPhone className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg text-white font-bold">Phone</h1>
          <h1 className="text-base text-white text-opacity-70">
            {infoPerso.phone}
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className=" flex items-center w-16 h-16 ">
          <MdOutlineEmail className="w-9 h-9 text-white" />
        </div>
        <div>
          <h1 className="text-lg text-white font-bold">Email address</h1>
          <h1 className="text-base text-white text-opacity-70">
            {infoPerso.email}
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className=" flex items-center  w-16 h-16 ">
          <FaRegAddressBook className="w-9 h-9 text-white" />
        </div>
        <div>
          <h1 className="text-lg text-white font-bold">Address</h1>
          <h1 className="text-base text-white text-opacity-70">
            {infoPerso.address}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
