import { combineReducers } from "redux";
import { getBeers } from "./getBeers";
import { getBeerById } from "./getBeerById";
import { getRecomendedBeers } from "./getRecomendedBeers";
import { getHeaderBeers } from "./getHeaderBeers";
import { cart } from "./cart";

const reducers = combineReducers({
  getBeers,
  getBeerById,
  getRecomendedBeers,
  getHeaderBeers,
  cart,
});

export default reducers;
