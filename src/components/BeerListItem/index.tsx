import React from "react";
import {
  Image,
  Heading,
  Text,
  Grid,
  VStack,
  Box,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useDispatch } from "react-redux";
import { IoBagHandleOutline } from "react-icons/io5";
import { addCartItem } from "@/actions/cartActions";
import { BeerItemPrice } from "@/components/BeerItemPrice";
import { getBeerData } from "@/utils/getBeerData";
import { Beer } from "@/utils/types";
import * as styles from "./styles";

export const BeerListItem: React.FC<Beer> = (beer) => {
  const toast = useToast();
  const { beerName, isInOffert } = getBeerData(beer);

  const dispatch = useDispatch();

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
    <Grid {...styles.cartButtonContainer(beer.id)}>
      <Grid {...styles.bottomRoundBorderContainer}>
        <NextLink href={`/beers/${beer?.id}`}>
          <a>
            <Grid {...styles.itemContainer}>
              <VStack>
                <Heading
                  size="md"
                  color={isInOffert ? "primary.500" : "gold.800"}
                >
                  {beerName}
                </Heading>
                <Heading size="lg">{beerName}</Heading>
              </VStack>
              {beer.image_url ? (
                <Image
                  src={beer.image_url}
                  alt={beer.name}
                  h={["250px", "350px"]}
                  w="auto"
                />
              ) : (
                <VStack {...styles.imageNotAvailable}>
                  <Heading textAlign="center">Image</Heading>
                  <Heading textAlign="center">Not Available</Heading>
                </VStack>
              )}
              <BeerItemPrice beer={beer} isInOffert={isInOffert} />
              <Box />
              {isInOffert && (
                <Box {...styles.offerMessage}>
                  <Text fontSize="xs">-30%</Text>
                </Box>
              )}
            </Grid>
          </a>
        </NextLink>
        <Box {...styles.bottonRoundBorder} />
      </Grid>
      <IconButton
        onClick={handleAddToCart}
        {...styles.addToCart(beer.id)}
        icon={<IoBagHandleOutline />}
      />
    </Grid>
  );
};
