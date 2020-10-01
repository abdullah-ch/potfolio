import React from "react";

import About from "../About/About";
import NavBar from "../NavBar/NavBar";
import Skill from "../Skill/Skill";
import Blogs from "../Blogs/Blogs";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projects/Projects";

const Main = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Skill />
      <Projects />
      <Blogs />
      <ContactMe /> 
    </div>
  );
};

export default Main;
