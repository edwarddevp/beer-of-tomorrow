import { Beer, RequestType } from "@/utils/types";
import * as types from "@/constants/actionTypes";
import { AnyAction } from "redux";

const initialState: RequestType<Beer | {}> = {
  data: {},
  isLoading: false,
  errors: [],
};

export const getBeerById = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_BEER_BY_ID_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_BEER_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case types.GET_BEER_BY_ID_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
