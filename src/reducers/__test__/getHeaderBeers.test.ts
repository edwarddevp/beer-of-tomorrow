import * as types from "@/constants/actionTypes";
import mockBeerItems from "@/utils/mock-beer-items";
import { getHeaderBeers } from "../getHeaderBeers";

describe("getHeaderBeers reducer", () => {
  it("should return initial state", () => {
    expect(getHeaderBeers(undefined, { type: "" })).toEqual({
      data: [],
      isLoading: false,
      errors: [],
    });
  });
  it("GET_HEADER_BEERS_PENDING", () => {
    expect(
      getHeaderBeers(undefined, { type: types.GET_HEADER_BEERS_PENDING })
    ).toEqual({
      data: [],
      isLoading: true,
      errors: [],
    });
  });
  it("GET_HEADER_BEERS_FAILED", () => {
    expect(
      getHeaderBeers(undefined, {
        type: types.GET_HEADER_BEERS_FAILED,
        payload: ["Error"],
      })
    ).toEqual({
      data: [],
      isLoading: false,
      errors: ["Error"],
    });
  });
  it("GET_HEADER_BEERS_SUCCESS", () => {
    expect(
      getHeaderBeers(undefined, {
        type: types.GET_HEADER_BEERS_SUCCESS,
        payload: mockBeerItems[0],
      })
    ).toEqual({
      data: mockBeerItems[0],
      isLoading: false,
      errors: [],
    });
  });
});
