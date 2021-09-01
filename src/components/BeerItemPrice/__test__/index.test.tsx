import mockBeerItems from "@/utils/mock-beer-items";
import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render } from "test-utils";
import { BeerItemPrice } from "../";

describe("BeerItemPrice", () => {
  it("renders", () => {
    const { container } = render(
      <BeerItemPrice beer={mockBeerItems[0]} isInOffert={false} />
    );
    expect(container).toMatchSnapshot();
  });
  it("renders isInOffer", () => {
    const { container } = render(
      <BeerItemPrice beer={mockBeerItems[0]} isInOffert={true} />
    );
    expect(container).toMatchSnapshot();
  });
  it("If item doesn't have a price", () => {
    const { container } = render(<BeerItemPrice beer={{}} isInOffert={true} />);
    expect(container).toMatchSnapshot();
  });
});
