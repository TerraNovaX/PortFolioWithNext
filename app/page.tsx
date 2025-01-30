import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Home/Hero/Hero";
import Skills from "@/components/Home/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Projects />
    </div>
  );
};

export default page;
