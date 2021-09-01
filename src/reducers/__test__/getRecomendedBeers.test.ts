import * as types from "@/constants/actionTypes";
import mockBeerItems from "@/utils/mock-beer-items";
import { getRecomendedBeers } from "../getRecomendedBeers";

describe("getRecomendedBeers reducer", () => {
  it("should return initial state", () => {
    expect(getRecomendedBeers(undefined, { type: "" })).toEqual({
      data: [],
      isLoading: false,
      errors: [],
    });
  });
  it("GET_RECOMENDED_BEERS_PENDING", () => {
    expect(
      getRecomendedBeers(undefined, {
        type: types.GET_RECOMENDED_BEERS_PENDING,
      })
    ).toEqual({
      data: [],
      isLoading: true,
      errors: [],
    });
  });
  it("GET_RECOMENDED_BEERS_FAILED", () => {
    expect(
      getRecomendedBeers(undefined, {
        type: types.GET_RECOMENDED_BEERS_FAILED,
        payload: ["Error"],
      })
    ).toEqual({
      data: [],
      isLoading: false,
      errors: ["Error"],
    });
  });
  it("GET_RECOMENDED_BEERS_SUCCESS", () => {
    expect(
      getRecomendedBeers(undefined, {
        type: types.GET_RECOMENDED_BEERS_SUCCESS,
        payload: mockBeerItems[0],
      })
    ).toEqual({
      data: mockBeerItems[0],
      isLoading: false,
      errors: [],
    });
  });
});
