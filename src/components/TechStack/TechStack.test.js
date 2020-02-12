import React from "react";
import { render } from "@testing-library/react";
import TechStack from "./TeckStack";
import StackMap from "./StackContainer/StackMap";

it("renders the Projects component", () => {
  render(<TechStack />);
});

it("renders the ProjectsMap component", () => {
  render(<StackMap />);
});