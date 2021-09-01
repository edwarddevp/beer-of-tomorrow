import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { fireEvent, render } from "test-utils";
import { ImageGallery } from "../";

describe("Image Gallery", () => {
  it("renders", () => {
    const { container } = render(<ImageGallery />);
    expect(container).toMatchSnapshot();
  });
  it("renders aside Elements", () => {
    const { getByAltText } = render(<ImageGallery />);
    expect(getByAltText("Beer-Image-0")).toBeTruthy();
  });
  it("Aside elements events", () => {
    const { getByAltText, container } = render(<ImageGallery />);
    const image = getByAltText("Beer-Image-0");
    fireEvent.mouseOver(image);
    fireEvent.click(image);
    fireEvent.mouseLeave(image);
    expect(container).toMatchSnapshot();
  });
});
