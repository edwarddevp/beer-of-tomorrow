import { Beer, RequestType } from "@/utils/types";
import * as types from "@/constants/actionTypes";
import { AnyAction } from "redux";

const initialState: RequestType<Beer[]> = {
  isLoading: false,
  data: [],
  errors: [],
};

export const getRecomendedBeers = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_RECOMENDED_BEERS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_RECOMENDED_BEERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case types.GET_RECOMENDED_BEERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
