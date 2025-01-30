import About from "@/components/About/About";
import Hero from "@/components/Home/Hero/Hero";
import Skills from "@/components/Home/Skills/Skills";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default page;
