import React from "react";
import { NavLink } from "react-router-dom";
import * as SC from "./Navbar.style";

const Navbar = () => {
  return (
    <SC.NavbarBox>
      <NavLink to="/" activeStyle={{ textDecoration: "underline" }} exact>
        About me
      </NavLink>
      <NavLink to="/projects" activeStyle={{ textDecoration: "underline" }}>
        Projects
      </NavLink>
      <NavLink to="/techStack" activeStyle={{ textDecoration: "underline" }}>
        Tech Stack
      </NavLink>
    </SC.NavbarBox>
  );
};

export default Navbar;
