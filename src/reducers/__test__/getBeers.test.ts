import * as types from "@/constants/actionTypes";
import mockBeerItems from "@/utils/mock-beer-items";
import { getBeers } from "../getBeers";

describe("getBeers reducer", () => {
  it("should return initial state", () => {
    expect(getBeers(undefined, { type: "" })).toEqual({
      isLoading: false,
      data: [],
      errors: [],
      filter: "",
      options: {
        page: 1,
        per_page: 9,
      },
      noMoreItems: false,
    });
  });
  it("GET_BEERS_PENDING", () => {
    expect(getBeers(undefined, { type: types.GET_BEERS_PENDING })).toEqual({
      isLoading: true,
      data: [],
      errors: [],
      filter: "",
      options: {
        page: 1,
        per_page: 9,
      },
      noMoreItems: false,
    });
  });
  it("GET_BEERS_FAILED", () => {
    expect(
      getBeers(undefined, {
        type: types.GET_BEERS_FAILED,
        payload: ["Error"],
      })
    ).toEqual({
      isLoading: false,
      data: [],
      errors: ["Error"],
      filter: "",
      options: {
        page: 1,
        per_page: 9,
      },
      noMoreItems: false,
    });
  });
  it("GET_BEERS_SUCCESS", () => {
    expect(
      getBeers(undefined, {
        type: types.GET_BEERS_SUCCESS,
        payload: {
          beers: mockBeerItems,
          filter: "",
          noMoreItems: false,
        },
      })
    ).toEqual({
      isLoading: false,
      data: mockBeerItems,
      errors: [],
      filter: "",
      options: {
        page: 2,
        per_page: 9,
      },
      noMoreItems: false,
    });
  });
  it("GET_MORE_BEERS_SUCCESS", () => {
    expect(
      getBeers(undefined, {
        type: types.GET_MORE_BEERS_SUCCESS,
        payload: {
          beers: [2],
          filter: "",
          noMoreItems: true,
        },
      })
    ).toEqual({
      isLoading: false,
      data: [2],
      errors: [],
      filter: "",
      options: {
        page: 2,
        per_page: 9,
      },
      noMoreItems: true,
    });
  });
});
