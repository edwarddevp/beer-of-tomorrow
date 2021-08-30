import { RootState } from "@/configs/store";
import { Grid, Button, Heading, VStack, HStack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { CartBeer } from "src/reducers/cart";
import { useToast } from "@chakra-ui/react";
import { removeAllCartItem } from "@/actions/cartActions";

interface CartPayProps {}

export const CartPay = ({}: CartPayProps) => {
  const toast = useToast();
  const cart = useSelector((state: RootState) => state.cart.data);
  const isLoading = useSelector((state: RootState) => state.cart.isLoading);
  const dispatch = useDispatch();
  const itemsNumber = cart.reduce(
    (acc: number, beer: CartBeer) => beer.quantity + acc,
    0
  );
  const itemsPrice = cart.reduce(
    (acc: number, beer: CartBeer) => beer.target_og * beer.quantity + acc,
    0
  );
  console.log(isLoading);

  const handlePurchased = async () => {
    try {
      if (itemsNumber > 0) {
        toast({
          title: "Items Purchased.",
          description: "The items inside the cart have been purchased.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        dispatch(removeAllCartItem());
      } else {
        toast({
          title: "The cart is empty.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: "Error in purchase.",
        description: "Error, try again later.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Grid
      py={[0, null, 8]}
      gap={[4, null, 8]}
      alignItems="center"
      templateColumns={["1fr", null, "auto 1fr auto"]}
    >
      <HStack spacing={6}>
        <Heading size="lg">Amount:</Heading>
        <VStack alignItems="flex-start">
          <Text color="gray.600">{itemsNumber} beers to pay</Text>
          <Heading fontWeight="bold" fontSize="3xl">
            ${itemsPrice}
          </Heading>
        </VStack>
      </HStack>
      <div />
      <Button
        w={["100%", null, 56]}
        h={16}
        onClick={handlePurchased}
        isDisabled={isLoading || itemsNumber <= 0}
      >
        Purchase Now
      </Button>
    </Grid>
  );
};
