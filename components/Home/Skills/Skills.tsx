import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="pt-16 pb-16 ">
      <SectionHeading>SKILLS</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-4 gap-4 items-center">
        {skillsData.map((skill) => {
          return (
            <div key={skill.id}>
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
