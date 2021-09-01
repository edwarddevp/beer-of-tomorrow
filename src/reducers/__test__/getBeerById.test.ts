import * as types from "@/constants/actionTypes";
import mockBeerItems from "@/utils/mock-beer-items";
import { getBeerById } from "../getBeerById";

describe("getBeerById reducer", () => {
  it("should return initial state", () => {
    expect(getBeerById(undefined, { type: "" })).toEqual({
      data: {},
      isLoading: false,
      errors: [],
    });
  });
  it("GET_BEER_BY_ID_PENDING", () => {
    expect(
      getBeerById(undefined, { type: types.GET_BEER_BY_ID_PENDING })
    ).toEqual({
      data: {},
      isLoading: true,
      errors: [],
    });
  });
  it("GET_BEER_BY_ID_FAILED", () => {
    expect(
      getBeerById(undefined, {
        type: types.GET_BEER_BY_ID_FAILED,
        payload: ["Error"],
      })
    ).toEqual({
      data: {},
      isLoading: false,
      errors: ["Error"],
    });
  });
  it("GET_BEER_BY_ID_SUCCESS", () => {
    expect(
      getBeerById(undefined, {
        type: types.GET_BEER_BY_ID_SUCCESS,
        payload: mockBeerItems[0],
      })
    ).toEqual({
      data: mockBeerItems[0],
      isLoading: false,
      errors: [],
    });
  });
});
