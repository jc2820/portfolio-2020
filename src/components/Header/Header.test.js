import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

it("renders the correct heading", () => {
  const { getByText } = render(<Header />);
  const heading = getByText(/Jamie Carter/i);
  expect(heading).toBeInTheDocument();
});
