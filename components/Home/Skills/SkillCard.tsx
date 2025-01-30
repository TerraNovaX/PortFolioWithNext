import React from "react";
import Image from "next/image";
type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { image, title, percent } = skill;
  return (
    <div className="p-6  hover:bg-gray-100 duration-300 transition-all cursor-pointer text-center rounded-lg bg-white">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-4 font-[600]">{title}</h1>
      <div className="bg-blue-500 mt-4 rounded-lg p-2 text-white opacity-40">
        {percent}
      </div>
    </div>
  );
};
export default SkillCard;
