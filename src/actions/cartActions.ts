import { AppDispatch } from "@/configs/store";
import * as types from "@/constants/actionTypes";
import { Beer } from "@/utils/types";
import { CartBeer } from "src/reducers/cart";

const localStorageKey: string =
  process.env.NEXT_PUBLIC_LOCAL_STORAGE_CART || "";

const getCartItemsFromLocalStorage = async () => {
  try {
    const beerCartString = localStorage.getItem(localStorageKey);
    if (beerCartString) {
      return await JSON.parse(beerCartString);
    } else {
      localStorage.setItem(localStorageKey, "");
      return [];
    }
  } catch (e) {
    return [];
  }
};

export const getCartItems = () => async () => {
  const beerCart = await getCartItemsFromLocalStorage();
  return {
    type: types.GET_CART_ITEMS,
    payload: beerCart,
  };
};

export const addCartItem = (beer: Beer) => async () => {
  const beerCart = await getCartItemsFromLocalStorage();
  try {
    const beerCartUpdated = [
      ...beerCart,
      {
        ...beer,
        quantity: 1,
      },
    ];
    const beerCartString = JSON.stringify(beerCartUpdated);
    localStorage.setItem(localStorageKey, beerCartString);
    return {
      type: types.ADD_CART_ITEM,
      payload: beerCartUpdated,
    };
  } catch (e) {}
};

export const removeCartItem = (id: number) => async () => {
  const beerCart = await getCartItemsFromLocalStorage();
  try {
    const beerCartUpdated = beerCart.filter((beer: CartBeer) => beer.id !== id);
    const beerCartString = JSON.stringify(beerCartUpdated);
    localStorage.setItem(localStorageKey, beerCartString);
    return {
      type: types.REMOVE_CART_ITEM,
      payload: beerCartUpdated,
    };
  } catch (e) {}
};

export const updateCartItemQuantity =
  (id: number, quantity: number) => async () => {
    const beerCart = await getCartItemsFromLocalStorage();
    try {
      const beerCartUpdated = beerCart.map((beer: CartBeer) =>
        beer.id === id
          ? {
              ...beer,
              quantity,
            }
          : beer
      );
      const beerCartString = JSON.stringify(beerCartUpdated);
      localStorage.setItem(localStorageKey, beerCartString);
      return {
        type: types.UPDATE_CART_ITEM_QUANTITY,
        payload: beerCartUpdated,
      };
    } catch (e) {}
  };

export const removeAllCartItem = () => async () => {
  try {
    localStorage.setItem(localStorageKey, "[]");
    return {
      type: types.REMOVE_ALL_CART_ITEM,
      payload: [],
    };
  } catch (e) {}
};
