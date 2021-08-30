import { AnyObject } from "@/utils/types";
import { Text, HStack, VStack } from "@chakra-ui/react";
import { CartBeer } from "src/reducers/cart";
import * as styles from "./styles";

interface BeerItemPriceProps {
  beer: Partial<CartBeer>;
  isInOffert: boolean;
  alignItems?: string;
  priceStyles?: AnyObject;
  subPriceStyles?: AnyObject;
  stackStyles?: AnyObject;
}

export const BeerItemPrice = ({
  beer,
  isInOffert,
  alignItems,
  priceStyles,
  subPriceStyles,
  stackStyles,
}: BeerItemPriceProps) => {
  if (!beer.target_og) return null;

  return (
    <VStack spacing={0} alignItems={alignItems}>
      {isInOffert ? (
        <HStack spacing={2} {...stackStyles}>
          <Text color="primary.500" {...styles.price} {...priceStyles}>
            ${beer.target_og}
          </Text>
          <Text {...styles.unerlinedPrice} {...subPriceStyles}>
            ${(beer.target_og - beer.target_og * 0.03).toFixed(2)}
          </Text>
        </HStack>
      ) : (
        <Text color="black" {...styles.price}>
          ${beer.target_og}
        </Text>
      )}

      {beer.ebc && (
        <Text color="gray.500" fontSize={["lg", "xl"]}>
          $ {beer.ebc}
        </Text>
      )}
    </VStack>
  );
};
