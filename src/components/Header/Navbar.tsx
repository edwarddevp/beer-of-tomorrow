import {
  Flex,
  Spacer,
  Image,
  Button,
  HStack,
  IconButton,
  Icon,
  Link,
  Divider,
  Grid,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaVk, FaFacebookF } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/configs/store";
import { useEffect } from "react";
import { getCartItems } from "@/actions/cartActions";
import { CartBeer } from "src/reducers/cart";
import * as styles from "./styles";

export const Navbar = () => {
  const buttonSize = useBreakpointValue({ base: "xs", sm: "sm", lg: "md" });
  const cart = useSelector((state: RootState) => state.cart.data);
  const dispatch = useDispatch();
  const itemsNumber = cart.reduce(
    (acc: number, beer: CartBeer) => beer.quantity + acc,
    0
  );

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  console.log(cart);
  return (
    <Grid px={[0, 4]} gap={[4, null, 8]}>
      <Flex as="nav" alignItems="center" py={[0, 2]}>
        <HStack {...styles.leftActions}>
          <Link href="#" isExternal>
            Lorem Ipsum
          </Link>
          <Link href="#" isExternal>
            Lorem Ipsum
          </Link>
          <Link href="https://vk.com/?lang=es" isExternal>
            <Icon as={FaVk} {...styles.mediaIcons("brands.vk")} />
          </Link>
          <Link href="https://www.facebook.com/" isExternal>
            <Icon as={FaFacebookF} {...styles.mediaIcons("brands.facebook")} />
          </Link>
        </HStack>
        <Spacer d={["none", null, "block"]} />
        <NextLink href="/">
          <a>
            <Image {...styles.logoImage} />
          </a>
        </NextLink>
        <Spacer />
        <HStack spacing={4} pl={[0, null, null, 12]}>
          <NextLink href="/about-us">
            <Button size={buttonSize}>About us</Button>
          </NextLink>
          <NextLink href="/cart">
            <a>
              <Box pos="relative">
                <IconButton
                  size={buttonSize}
                  icon={<IoBagHandleOutline />}
                  {...styles.cartButton}
                />
                {Boolean(cart.length) && (
                  <Flex {...styles.cartItemsNumber}>{itemsNumber}</Flex>
                )}
              </Box>
            </a>
          </NextLink>
        </HStack>
      </Flex>
      <Divider />
    </Grid>
  );
};
