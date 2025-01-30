import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const SectionHeading = ({ children }: Props) => {
  return (
    <h1
      className=" w-fit text-center bg-white px-4 py-3 mx-auto text-blue-700 text-2xl 
    uppercase -rotate-6">
      {children}
    </h1>
  );
};

export default SectionHeading;
