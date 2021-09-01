import { addCartItem } from "@/actions/cartActions";
import { removeCartItem } from "@/actions/cartActions";
import { updateCartItemQuantity } from "@/actions/cartActions";
import { removeAllCartItem } from "@/actions/cartActions";
import * as types from "@/constants/actionTypes";
import mockBeerItems from "@/utils/mock-beer-items";
import { getCartItems } from "../cartActions";
import { create } from "@/utils/mockStoreFuctions";
import "@/utils/mockLocalStorage";

describe("getCartItems action", () => {
  it("getCartItems", async () => {
    const { store, invoke } = create();
    await invoke(getCartItems());
    expect(store.dispatch.mock.results[0].value).toStrictEqual({
      type: types.CART_ITEM_PENDING,
    });
    expect(store.dispatch.mock.results[1].value).toStrictEqual({
      type: types.GET_CART_ITEMS,
      payload: [],
    });
    expect(store.dispatch.mock.calls.length).toBe(2);
  });
});

describe("addCartItem action", () => {
  it("addCartItem", async () => {
    const { store, invoke } = create();
    await invoke(addCartItem(mockBeerItems[0]));
    expect(store.dispatch.mock.results[0].value).toStrictEqual({
      type: types.CART_ITEM_PENDING,
    });
    expect(store.dispatch.mock.results[1].value).toStrictEqual({
      type: types.ADD_CART_ITEM,
      payload: [{ ...mockBeerItems[0], quantity: 1 }],
    });
    expect(store.dispatch.mock.calls.length).toBe(2);
  });
});

describe("removeCartItem action", () => {
  it("removeCartItem", async () => {
    const { store, invoke } = create();
    await invoke(addCartItem(mockBeerItems[0]));
    await invoke(removeCartItem(1));
    expect(store.dispatch.mock.results[2].value).toStrictEqual({
      type: types.CART_ITEM_PENDING,
    });
    expect(store.dispatch.mock.results[3].value).toStrictEqual({
      type: types.REMOVE_CART_ITEM,
      payload: [],
    });
    expect(store.dispatch.mock.calls.length).toBe(4);
  });
});

describe("updateCartItemQuantity action", () => {
  it("updateCartItemQuantity", async () => {
    const { store, invoke } = create();
    await invoke(removeCartItem(1));
    await invoke(updateCartItemQuantity(1, 5));
    expect(store.dispatch.mock.results[2].value).toStrictEqual({
      type: types.CART_ITEM_PENDING,
    });
    expect(store.dispatch.mock.results[3].value).toStrictEqual({
      type: types.UPDATE_CART_ITEM_QUANTITY,
      payload: [],
    });
    expect(store.dispatch.mock.calls.length).toBe(4);
  });
});

describe("removeAllCartItem action", () => {
  it("removeAllCartItem", async () => {
    const { store, invoke } = create();
    await invoke(removeCartItem(1));
    await invoke(removeAllCartItem());
    expect(store.dispatch.mock.results[2].value).toStrictEqual({
      type: types.CART_ITEM_PENDING,
    });
    expect(store.dispatch.mock.results[3].value).toStrictEqual({
      type: types.REMOVE_ALL_CART_ITEM,
      payload: [],
    });
    expect(store.dispatch.mock.calls.length).toBe(4);
  });
});
