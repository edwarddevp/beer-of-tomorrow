import { CartBeer } from "src/reducers/cart";

export const getBeerData = (beer: Partial<CartBeer>) => {
  const isInOffert = beer.ibu ? beer.ibu > 40 : false;
  const beerNameSplit = beer.name ? beer.name.split(" ") : "";
  const beerName =
    beerNameSplit.length > 1
      ? beerNameSplit?.[0] + " " + beerNameSplit?.[1]
      : beer.name;
  return { isInOffert, beerName };
};
