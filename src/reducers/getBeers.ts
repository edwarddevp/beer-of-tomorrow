import { Beer, RequestListType } from "@/utils/types";
import * as types from "@/constants/actionTypes";
import { AnyAction } from "redux";

const initialState: RequestListType<Beer[]> = {
  isLoading: false,
  data: [],
  errors: [],
  filter: "",
  options: {
    page: 1,
    per_page: 9,
  },
  noMoreItems: false,
};

export const getBeers = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_BEERS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_BEERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.beers,
        filter: action.payload.filter,
        noMoreItems: action.payload.noMoreItems,
        options: {
          ...state.options,
          page: 2,
        },
      };
    case types.GET_MORE_BEERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, ...action.payload.beers],
        noMoreItems: action.payload.noMoreItems,
        options: {
          ...state.options,
          page: state.options.page + 1,
        },
      };
    case types.GET_BEERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
