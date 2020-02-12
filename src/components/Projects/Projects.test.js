import React from "react";
import { render } from "@testing-library/react";
import Projects from "./Projects";
import ProjectsMap from "./ProjectsContainer/ProjectsMap";

it("renders the Projects component", () => {
  render(<Projects />);
});

it("renders the ProjectsMap component", () => {
  render(<ProjectsMap />);
});
