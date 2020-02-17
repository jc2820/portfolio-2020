import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders the heading in the app page", () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Jamie Carter/i);
  expect(heading).toBeInTheDocument();
});

it("renders the navbar links", () => {
  const { getByText } = render(<App />);
  const aboutLink = getByText(/about\/contact/i);
  const techStackLink = getByText(/Tech Stack/i);
  const projectsLink = getByText(/Projects/i);
  expect(aboutLink).toBeInTheDocument();
  expect(techStackLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
});
