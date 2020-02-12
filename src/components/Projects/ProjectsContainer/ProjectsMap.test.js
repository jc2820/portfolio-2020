import React from "react";
import { render } from "@testing-library/react";
import ProjectsMap from "./ProjectsMap";

it("renders project images down to the last in array", () => {
    const { getByTitle } = render(<ProjectsMap />);
    const calcImg = getByTitle("A Screengrab of my calculator app");
    expect(calcImg).toBeInTheDocument();
  });