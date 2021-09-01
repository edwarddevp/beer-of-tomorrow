import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { fireEvent, prettyDOM, render, within } from "test-utils";
import { BeerDetailsCart } from "../";
import "@/utils/mockLocalStorage";

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
describe("BeerDetailsCart", () => {
  it("renders", () => {
    const { container } = render(<BeerDetailsCart />);
    expect(container).toMatchSnapshot();
  });
  it("handleAdd", async () => {
    const { getByLabelText } = render(<BeerDetailsCart noToast />);
    const counter = within(getByLabelText("Item Quantity in the Cart"));
    counter.getByText("0");
    const addButton = getByLabelText("Add");
    fireEvent.click(addButton);
    await sleep(500);
    counter.getByText("1");
  });
  it("handleSubstrack", async () => {
    const { getByLabelText } = render(<BeerDetailsCart noToast />);
    const counter = within(getByLabelText("Item Quantity in the Cart"));
    counter.getByText("1");
    const addButton = getByLabelText("Add");
    const Substrack = getByLabelText("Add");
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(Substrack);
    await sleep(500);
    counter.getByText("2");
  });
});
