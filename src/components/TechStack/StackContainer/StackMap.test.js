import React from "react";
import { render } from "@testing-library/react";
import StackMap from "./StackMap";

it("renders tech stack svgs", () => {
  const { getByTitle } = render(<StackMap />);
  const svg = getByTitle("SketchUp");
  expect(svg).toBeInTheDocument();
});
