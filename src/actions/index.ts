import { AppDispatch } from "@/configs/store";
import * as types from "@/constants/actionTypes";

export const getBeers = () => async (dispatch: AppDispatch) => {
  dispatch({ type: types.GET_BEERS_PENDING });
  try {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const beers = await res.json();
    dispatch({ type: types.GET_BEERS_SUCCESS, payload: beers });
  } catch (error) {
    dispatch({ type: types.GET_BEERS_FAILED, payload: error });
  }
};

export const getBeerById = () => async (dispatch: AppDispatch) => {
  dispatch({ type: types.GET_BEER_BY_ID_PENDING });
  try {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const beers = await res.json();
    dispatch({ type: types.GET_BEER_BY_ID_SUCCESS, payload: beers });
  } catch (error) {
    dispatch({ type: types.GET_BEER_BY_ID_FAILED, payload: error });
  }
};

export const getRecomendedBeers = () => async (dispatch: AppDispatch) => {
  dispatch({ type: types.GET_RECOMENDED_BEERS_PENDING });
  try {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const beers = await res.json();
    dispatch({ type: types.GET_RECOMENDED_BEERS_SUCCESS, payload: beers });
  } catch (error) {
    dispatch({ type: types.GET_RECOMENDED_BEERS_FAILED, payload: error });
  }
};

export const getHeaderBeers = () => async (dispatch: AppDispatch) => {
  dispatch({ type: types.GET_HEADER_BEERS_PENDING });
  try {
    const res = await fetch(
      "https://api.punkapi.com/v2/beers?page=2&per_page=5"
    );
    const beers = await res.json();
    dispatch({ type: types.GET_HEADER_BEERS_SUCCESS, payload: beers });
  } catch (error) {
    dispatch({ type: types.GET_HEADER_BEERS_FAILED, payload: error });
  }
};
