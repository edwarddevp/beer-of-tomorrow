import { AppDispatch } from "@/configs/store";
import * as types from "@/constants/actionTypes";
import { AnyObject } from "@/utils/types";

const punkApi: string = process.env.NEXT_PUBLIC_PUNK_API || "";

export const getBeers =
  (filter: AnyObject) => async (dispatch: AppDispatch) => {
    dispatch({ type: types.GET_BEERS_PENDING });
    try {
      const filterfields = filter
        ? Object.keys(filter)
            .map((key) =>
              filter[key] ? key + "=" + filter[key].replace(" ", "_") : ""
            )
            .filter((item) => Boolean(item))
            .join("&")
        : "";
      console.log(punkApi + (filterfields ? "?" + filterfields : ""));
      const res = await fetch(
        punkApi + (filterfields ? "?" + filterfields : "")
      );
      const beers = await res.json();
      dispatch({ type: types.GET_BEERS_SUCCESS, payload: beers });
    } catch (error) {
      dispatch({ type: types.GET_BEERS_FAILED, payload: error });
    }
  };

export const getBeerById = () => async (dispatch: AppDispatch) => {
  dispatch({ type: types.GET_BEER_BY_ID_PENDING });
  try {
    const res = await fetch(punkApi);
    const beers = await res.json();
    dispatch({ type: types.GET_BEER_BY_ID_SUCCESS, payload: beers });
  } catch (error) {
    dispatch({ type: types.GET_BEER_BY_ID_FAILED, payload: error });
  }
};

export const getRecomendedBeers = () => async (dispatch: AppDispatch) => {
  dispatch({ type: types.GET_RECOMENDED_BEERS_PENDING });
  try {
    const res = await fetch(punkApi);
    const beers = await res.json();
    dispatch({ type: types.GET_RECOMENDED_BEERS_SUCCESS, payload: beers });
  } catch (error) {
    dispatch({ type: types.GET_RECOMENDED_BEERS_FAILED, payload: error });
  }
};

export const getHeaderBeers = () => async (dispatch: AppDispatch) => {
  dispatch({ type: types.GET_HEADER_BEERS_PENDING });
  try {
    const res = await fetch(punkApi + "?page=2&per_page=5");
    const beers = await res.json();
    dispatch({ type: types.GET_HEADER_BEERS_SUCCESS, payload: beers });
  } catch (error) {
    dispatch({ type: types.GET_HEADER_BEERS_FAILED, payload: error });
  }
};
