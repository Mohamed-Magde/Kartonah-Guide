import React from "react";
import AboutService from "./about-components/AboutService";
import AboutTeam from "./about-components/AboutTeam";
import AboutTitle from "./about-components/AboutTitle";
import AboutWhy from "./about-components/AboutWhy";

import "./scss/main.css";
const About = () => {
  return (
    <>
      <AboutTitle />
      <AboutWhy />
      <AboutTeam />
      <AboutService />
    </>
  );
};

export default About;
