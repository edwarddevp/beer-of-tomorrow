import { Fragment, useEffect } from "react";
import {
  Divider,
  Flex,
  Spacer,
  Text,
  Box,
  Image,
  Button,
  HStack,
  IconButton,
  Icon,
  Link,
  Container,
  useBreakpointValue,
  Fade,
  Grid,
} from "@chakra-ui/react";
import { Beer } from "@/utils/types";
import { DiamondBox } from "../DiamondBox";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaVk, FaFacebookF } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getHeaderBeers } from "@/actions/index";
import { RootState } from "@/configs/store";
import * as styles from "./styles";

// interface HeaderProps {}

export const Header = () => {
  const buttonSize = useBreakpointValue({ base: "sm", sm: "md", lg: "lg" });
  const headerBeers = useSelector(
    (state: RootState) => state.getHeaderBeers.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeaderBeers());
  }, []);

  return (
    <Box as="header" bg="backgrounds.header" pos="relative">
      <Container {...styles.container}>
        <Flex alignItems="center" px={[0, 4]} py={[0, 2]}>
          <HStack {...styles.leftActions}>
            <Link href="https://chakra-ui.com" isExternal>
              Lorem Ipsum
            </Link>
            <Link href="https://chakra-ui.com" isExternal>
              Lorem Ipsum
            </Link>
            <Link href="https://chakra-ui.com" isExternal>
              <Icon as={FaVk} {...styles.mediaIcons("brands.vk")} />
            </Link>
            <Link href="https://chakra-ui.com" isExternal>
              <Icon
                as={FaFacebookF}
                {...styles.mediaIcons("brands.facebook")}
              />
            </Link>
          </HStack>
          <Spacer d={["none", null, "block"]} />
          <Image {...styles.logoImage} />
          <Spacer />
          <HStack spacing={4} pl={[0, null, null, 12]}>
            <Button size={buttonSize}>Lorem Ipsum Lorem</Button>
            <IconButton
              size={buttonSize}
              aria-label="Cart"
              variant="primary-outline"
              fontSize="lg"
              icon={<IoBagHandleOutline />}
            />
          </HStack>
        </Flex>
        <Box px={4}>
          <Divider />
        </Box>
        <Fade in={Boolean(headerBeers.length)}>
          <Grid>
            <HStack {...styles.beersHeader}>
              {headerBeers?.map((item: Beer, i: number) => (
                <Fragment key={item?.id}>
                  <Text textAlign="center" minW="60px">
                    {item?.name}
                  </Text>
                  {i < headerBeers.length - 1 ? (
                    <Box>
                      <DiamondBox size="0.30rem" />
                    </Box>
                  ) : null}
                </Fragment>
              ))}
            </HStack>
          </Grid>
        </Fade>
      </Container>
      {/* <Box {...styles.headerBottomFigure}>
        asdasdasdas
      </Box> */}
    </Box>
  );
};
