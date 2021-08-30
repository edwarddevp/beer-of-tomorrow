import { RootState } from "@/configs/store";
import { Grid, Heading, chakra } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { CartBeer } from "src/reducers/cart";
import { CartListItem } from "@/components/CartListItem";
import NextLink from "next/link";

interface CartListProps {}

export const CartList = ({}: CartListProps) => {
  const cart = useSelector((state: RootState) => state.cart.data);
  return (
    <Grid gap={16}>
      {cart.length ? (
        cart.map((beer: CartBeer) => <CartListItem key={beer.id} beer={beer} />)
      ) : (
        <Grid placeItems="center" py={24} gap={4}>
          <Heading>The cart is empty</Heading>
          <NextLink href="/">
            <a>
              <Heading size="md">
                <chakra.span
                  borderBottomWidth="1px"
                  pb={".2rem"}
                  color="gray.400"
                  borderColor="gray.400"
                >
                  Got to shopping list
                </chakra.span>
              </Heading>
            </a>
          </NextLink>
        </Grid>
      )}
    </Grid>
  );
};
