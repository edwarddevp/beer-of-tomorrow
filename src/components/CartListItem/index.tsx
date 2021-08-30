import {
  Grid,
  Image,
  VStack,
  Heading,
  Flex,
  Spacer,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { CartBeer } from "src/reducers/cart";
import { BeerItemPrice } from "@/components/BeerItemPrice";
import { getBeerData } from "@/utils/getBeerData";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeCartItem, updateCartItemQuantity } from "@/actions/cartActions";
import * as styles from "./styles";
import { RootState } from "@/configs/store";

interface CartListItemProps {
  beer: CartBeer;
}

export const CartListItem = ({ beer }: CartListItemProps) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.cart.isLoading);
  const { beerName, isInOffert } = getBeerData(beer);

  const handleAdd = () => {
    dispatch(updateCartItemQuantity(beer.id, beer.quantity + 1));
  };

  const handleSubstrack = () => {
    dispatch(updateCartItemQuantity(beer.id, beer.quantity - 1));
  };

  const handleRemove = () => {
    dispatch(removeCartItem(beer.id));
  };

  return (
    <Grid {...styles.cartItemContainer(beer.id)}>
      <Grid justifyItems="center" {...styles.rowSpan}>
        {beer.image_url ? (
          <Grid>
            <Image src={beer.image_url} alt={beer.name} {...styles.image} />
          </Grid>
        ) : (
          <VStack {...styles.imageNotAvailable}>
            <Heading textAlign="center">Image</Heading>
            <Heading textAlign="center">Not Available</Heading>
          </VStack>
        )}
      </Grid>
      <Grid py={[0, null, null, 4]} gap={4} {...styles.rowSpan}>
        <VStack alignItems="flex-start" spacing={1}>
          <Heading size="md" color={isInOffert ? "primary.500" : "gold.800"}>
            {beerName}
          </Heading>
          <Heading size="xl">{beerName}</Heading>
        </VStack>
        <BeerItemPrice
          beer={beer}
          isInOffert={isInOffert}
          {...styles.beerPrice}
          {...styles.beerPriceStack}
        />
      </Grid>
      <Grid alignContent="center" {...styles.colSpan}>
        <Flex {...styles.plusMinusContainer}>
          <IconButton
            isDisabled={isLoading}
            onClick={handleSubstrack}
            icon={<FaMinus />}
            aria-label="Substrack"
            {...styles.iconButtons}
          />
          <Spacer />
          {beer.quantity}
          <Spacer />
          <IconButton
            isDisabled={isLoading}
            onClick={handleAdd}
            icon={<FaPlus />}
            aria-label="Add"
            {...styles.iconButtons}
          />
        </Flex>
      </Grid>
      <Grid placeItems="center" {...styles.colSpan}>
        <BeerItemPrice
          isInOffert={isInOffert}
          beer={{
            target_og: parseFloat((beer.target_og * beer.quantity).toFixed(2)),
          }}
          {...styles.beerPrice}
        />
      </Grid>
      <Grid placeSelf="center" {...styles.bottonRoundBorder}>
        <IconButton
          isDisabled={isLoading}
          onClick={handleRemove}
          icon={<RiDeleteBinLine />}
          {...styles.removeFromCart(beer.id)}
        />
      </Grid>
    </Grid>
  );
};
