import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render } from "test-utils";
import { DiamondBox } from "../";

describe("DiamondBox", () => {
  it("renders", () => {
    const { container } = render(<DiamondBox />);
    expect(container).toMatchSnapshot();
  });
  it("renders gray bg", () => {
    const { container } = render(<DiamondBox bg="gray.500" />);
    expect(container).toMatchSnapshot();
  });
  it("renders size 8", () => {
    const { container } = render(<DiamondBox size={8} />);
    expect(container).toMatchSnapshot();
  });
});
