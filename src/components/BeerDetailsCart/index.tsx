import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Text,
  Flex,
  Spacer,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { RootState } from "@/configs/store";
import { CartBeer } from "src/reducers/cart";
import { FaMinus, FaPlus } from "react-icons/fa";
import { addCartItem, updateCartItemQuantity } from "@/actions/cartActions";
import { IoBagHandleOutline } from "react-icons/io5";
import { BiShareAlt } from "react-icons/bi";
import { getBeerData } from "@/utils/getBeerData";
import { BeerItemPrice } from "../BeerItemPrice";
import * as styles from "./styles";

interface BeerDetailsCartProps {}

export const BeerDetailsCart = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const beer = useSelector((state: RootState) => state.getBeerById.data);
  const cart = useSelector((state: RootState) => state.cart.data);
  const { isInOffert } = getBeerData(beer);
  const cartBeerQuantity =
    cart.find((item: CartBeer) => item.id === beer.id)?.quantity || 0;
  const isLoading = useSelector(
    (state: RootState) => state.getBeerById.isLoading
  );

  const handleAdd = () => {
    if (cartBeerQuantity === 0) {
      handleAddToCart();
    } else {
      dispatch(updateCartItemQuantity(beer.id, cartBeerQuantity + 1));
    }
  };

  const handleSubstrack = () => {
    dispatch(updateCartItemQuantity(beer.id, cartBeerQuantity - 1));
  };

  const handleAddToCart = async () => {
    await dispatch(addCartItem(beer));
    toast({
      title: "Beer Added.",
      description: "Beer Added To the cart.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  return (
    <Grid {...styles.cartItemContainer}>
      <BeerItemPrice
        isInOffert={isInOffert}
        beer={{
          target_og: beer.target_og,
        }}
        {...styles.beerPriceStack}
      />
      <Grid alignContent="center">
        <Flex {...styles.plusMinusContainer}>
          <IconButton
            isDisabled={isLoading}
            onClick={handleSubstrack}
            icon={<FaMinus />}
            aria-label="Substrack"
            {...styles.iconButtons}
          />
          <Spacer />
          {cartBeerQuantity}
          <Spacer />
          <IconButton
            isDisabled={isLoading}
            onClick={handleAdd}
            icon={<FaPlus />}
            aria-label="Add"
            {...styles.iconButtons}
          />
          <IconButton
            ml={4}
            isDisabled={isLoading}
            onClick={handleAddToCart}
            icon={<IoBagHandleOutline />}
            {...styles.addToCart}
          />
        </Flex>
      </Grid>
      <IconButton
        icon={<BiShareAlt />}
        isDisabled={isLoading}
        {...styles.share}
      />
    </Grid>
  );
};
