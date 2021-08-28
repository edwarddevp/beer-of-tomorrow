import { combineReducers } from "redux";
import { getBeers } from "./getBeers";
import { getBeerById } from "./getBeerById";
import { getRecomendedBeers } from "./getRecomendedBeers";
import { getHeaderBeers } from "./getHeaderBeers";

const reducers = combineReducers({
  getBeers,
  getBeerById,
  getRecomendedBeers,
  getHeaderBeers,
});

export default reducers;
