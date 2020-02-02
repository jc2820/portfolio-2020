import React from "react";
import { Link } from "react-router-dom";
import * as SC from "./Navbar.style";

const Navbar = () => {
  return (
    <SC.NavbarBox>
      <Link to="/">About me</Link>
      <Link to="/techStack">Tech Stack</Link>
      <Link to="/projects">Projects</Link>
    </SC.NavbarBox>
  );
};

export default Navbar;
