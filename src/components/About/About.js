import React from "react";
import AboutBox from "./AboutBox/AboutBox";
import * as SC from "./About.style";
import Contact from "./ContactBar/Contact";

const About = () => {
  return (
    <SC.About>
      <AboutBox />
      <Contact />
    </SC.About>
  );
};

export default About;
