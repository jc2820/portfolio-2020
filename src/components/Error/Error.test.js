import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error";

it("renders the correct heading", () => {
  const { getByText } = render(<Error />);
  const heading = getByText(/404/i);
  expect(heading).toBeInTheDocument();
});