import * as types from "@/constants/actionTypes";
import { Beer } from "@/utils/types";
import { AnyAction } from "redux";

export interface CartBeer extends Beer {
  quantity: number;
}

const initialState: CartBeer[] = [];

export const cart = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_CART_ITEMS:
      return action.payload;
    case types.ADD_CART_ITEM:
      return [...state, action.payload];
    case types.REMOVE_CART_ITEM:
      return state.filter((beer) => beer.id !== action.payload);
    case types.UPDATE_CART_ITEM_QUANTITY:
      const { id, quantity } = action.payload;
      return state.map((beer) =>
        beer.id === id ? { ...beer, quantity } : beer
      );
    case types.REMOVE_ALL_CART_ITEM:
      return [];
    default:
      return state;
  }
};
