import React from "react";
import { render } from "@testing-library/react";
import TechStack from "./TeckStack";
import StackMap from "./StackContainer/StackMap";

it("renders the TechStack component", () => {
  render(<TechStack />);
});

it("renders the StackMap component", () => {
  render(<StackMap />);
});