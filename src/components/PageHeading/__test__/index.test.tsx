import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render } from "test-utils";
import { PageHeading } from "../";

describe("PageHeading", () => {
  it("renders", () => {
    const { container } = render(<PageHeading title="Hello" />);
    expect(container).toMatchSnapshot();
  });
  it("renders title", () => {
    const { getByText } = render(<PageHeading title="Good Morning" />);
    expect(getByText("Good Morning")).toBeTruthy();
  });
});
