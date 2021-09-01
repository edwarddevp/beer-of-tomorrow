import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render } from "test-utils";
import { BeerDetails } from "../";

describe("BeerDetails", () => {
  it("renders", () => {
    const { container } = render(<BeerDetails />);
    expect(container).toMatchSnapshot();
  });
  it("shows images items aside", () => {
    const { getByText } = render(<BeerDetails />);
    expect(getByText("Venta Distribution")).toBeTruthy();
  });
});
