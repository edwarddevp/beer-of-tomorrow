import * as types from "@/constants/actionTypes";
import mockBeerItems from "@/utils/mock-beer-items";
import { beerDetails } from "@/constants/beerDetails";
import { cart } from "../cart";

describe("cart reducer", () => {
  it("should return initial state", () => {
    expect(cart(undefined, { type: "" })).toEqual({
      data: [],
      isLoading: false,
      error: null,
    });
  });
  it("CART_ITEM_PENDING", () => {
    expect(cart(undefined, { type: types.CART_ITEM_PENDING })).toEqual({
      data: [],
      isLoading: true,
      error: null,
    });
  });
  it("CART_ITEM_FAILED", () => {
    expect(
      cart(undefined, { type: types.CART_ITEM_FAILED, payload: "Error" })
    ).toEqual({
      data: [],
      isLoading: false,
      error: "Error",
    });
  });
  it("Update Cart Items", () => {
    const mockCartItems = mockBeerItems.map((beer) => ({
      ...beerDetails,
      quantity: 5,
    }));
    expect(
      cart(undefined, {
        type: types.GET_CART_ITEMS,
        payload: mockCartItems,
      })
    ).toEqual({
      data: mockCartItems,
      isLoading: false,
      error: null,
    });
  });
});
