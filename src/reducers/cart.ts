import * as types from "@/constants/actionTypes";
import { Beer } from "@/utils/types";
import { AnyAction } from "redux";

export interface CartBeer extends Beer {
  quantity: number;
}

interface initalValue {
  data: CartBeer[];
  isLoading: boolean;
  error: any;
}

const initialState: initalValue = {
  data: [],
  isLoading: false,
  error: null,
};

export const cart = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.CART_ITEM_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.CART_ITEM_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.GET_CART_ITEMS:
    case types.ADD_CART_ITEM:
    case types.REMOVE_CART_ITEM:
    case types.UPDATE_CART_ITEM_QUANTITY:
    case types.REMOVE_ALL_CART_ITEM:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
