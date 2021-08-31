import { AppDispatch, RootState } from "@/configs/store";
import * as types from "@/constants/actionTypes";
import { AnyObject } from "@/utils/types";

const punkApi: string = process.env.NEXT_PUBLIC_PUNK_API || "";

export const getBeers =
  (filter: AnyObject) => async (dispatch: AppDispatch, getState: RootState) => {
    dispatch({ type: types.GET_BEERS_PENDING });
    try {
      const { per_page } = getState().getBeers.options;
      const filterfields = filter
        ? Object.keys(filter)
            .map((key) =>
              filter[key] ? key + "=" + filter[key].replace(" ", "_") : ""
            )
            .filter((item) => Boolean(item))
            .join("&")
        : "";
      const paginate = `?page=1&per_page=${per_page}`;
      const filterString = filterfields ? "&" + filterfields : "";
      const res = await fetch(punkApi + paginate + filterString);
      const beers = await res.json();
      dispatch({
        type: types.GET_BEERS_SUCCESS,
        payload: {
          beers,
          filter: filterString,
          noMoreItems: beers.length < per_page,
        },
      });
    } catch (error) {
      dispatch({ type: types.GET_BEERS_FAILED, payload: error });
    }
  };

export const getMoreBeers =
  () => async (dispatch: AppDispatch, getState: RootState) => {
    dispatch({ type: types.GET_BEERS_PENDING });
    try {
      const {
        filter,
        options: { page, per_page },
      } = getState().getBeers;
      const paginate = `?page=${page}&per_page=${per_page}`;
      const res = await fetch(punkApi + paginate + filter);
      const beers = await res.json();
      dispatch({
        type: types.GET_MORE_BEERS_SUCCESS,
        payload: { beers, noMoreItems: beers.length < per_page },
      });
    } catch (error) {
      dispatch({ type: types.GET_BEERS_FAILED, payload: error });
    }
  };

export const getBeerById =
  (id: string | string[]) => async (dispatch: AppDispatch) => {
    dispatch({ type: types.GET_BEER_BY_ID_PENDING });
    try {
      const res = await fetch(punkApi + "/" + id);
      const beers = await res.json();
      dispatch({ type: types.GET_BEER_BY_ID_SUCCESS, payload: beers[0] });
    } catch (error) {
      dispatch({ type: types.GET_BEER_BY_ID_FAILED, payload: error });
    }
  };

export const getRecomendedBeers =
  (hops: string | string[]) => async (dispatch: AppDispatch) => {
    dispatch({ type: types.GET_RECOMENDED_BEERS_PENDING });
    try {
      const res = await fetch(punkApi + "?hops=" + hops + "&page=1&per_page=4");
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
