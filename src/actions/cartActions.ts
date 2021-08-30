import { AppDispatch } from "@/configs/store";
import * as types from "@/constants/actionTypes";
import { Beer } from "@/utils/types";
import { CartBeer } from "src/reducers/cart";

const localStorageKey: string =
  process.env.NEXT_PUBLIC_LOCAL_STORAGE_CART || "";

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const getCartItemsFromLocalStorage = async () => {
  const beerCartString = localStorage.getItem(localStorageKey);
  if (beerCartString) {
    return await JSON.parse(beerCartString);
  } else {
    localStorage.setItem(localStorageKey, "");
    return [];
  }
};

export const getCartItems = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: types.CART_ITEM_PENDING,
    });
  } catch (e) {
    dispatch({
      type: types.CART_ITEM_FAILED,
      payload: e,
    });
  }
  const beerCart = await getCartItemsFromLocalStorage();
  dispatch({
    type: types.GET_CART_ITEMS,
    payload: beerCart,
  });
};

export const addCartItem = (beer: Beer) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: types.CART_ITEM_PENDING,
    });
    const beerCart = await getCartItemsFromLocalStorage();

    let beerCartUpdated;
    if (beerCart.find((_beer: CartBeer) => _beer.id === beer.id)) {
      beerCartUpdated = beerCart.map((_beer: CartBeer) =>
        _beer.id === beer.id
          ? {
              ..._beer,
              quantity: _beer.quantity + 1,
            }
          : _beer
      );
      dispatch({ type: types.ADD_CART_ITEM, payload: beerCartUpdated });
    } else {
      beerCartUpdated = [
        ...beerCart,
        {
          ...beer,
          quantity: 1,
        },
      ];
      dispatch({ type: types.ADD_CART_ITEM, payload: beerCartUpdated });
    }
    const beerCartString = JSON.stringify(beerCartUpdated);
    localStorage.setItem(localStorageKey, beerCartString);
  } catch (e) {
    dispatch({
      type: types.CART_ITEM_FAILED,
      payload: e,
    });
  }
};

export const removeCartItem = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: types.CART_ITEM_PENDING,
    });

    const beerCart = await getCartItemsFromLocalStorage();
    const beerCartUpdated = beerCart.filter((beer: CartBeer) => beer.id !== id);
    const beerCartString = JSON.stringify(beerCartUpdated);
    localStorage.setItem(localStorageKey, beerCartString);
    dispatch({ type: types.REMOVE_CART_ITEM, payload: beerCartUpdated });
  } catch (e) {
    dispatch({
      type: types.CART_ITEM_FAILED,
      payload: e,
    });
  }
};

export const updateCartItemQuantity =
  (id: number, quantity: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: types.CART_ITEM_PENDING,
      });
      const beerCart = await getCartItemsFromLocalStorage();
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
      dispatch({
        type: types.UPDATE_CART_ITEM_QUANTITY,
        payload: beerCartUpdated,
      });
    } catch (e) {
      dispatch({
        type: types.CART_ITEM_FAILED,
        payload: e,
      });
    }
  };

export const removeAllCartItem = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: types.CART_ITEM_PENDING,
    });
    await sleep(2000);
    localStorage.setItem(localStorageKey, "[]");
    dispatch({
      type: types.REMOVE_ALL_CART_ITEM,
      payload: [],
    });
  } catch (e) {
    dispatch({
      type: types.CART_ITEM_FAILED,
      payload: e,
    });
  }
};
