import { Fragment, useEffect } from "react";
import { Text, Box, HStack, Fade, Grid } from "@chakra-ui/react";
import { Beer } from "@/utils/types";
import { DiamondBox } from "../DiamondBox";
import { useDispatch, useSelector } from "react-redux";
import { getHeaderBeers } from "@/actions/index";
import { RootState } from "@/configs/store";
import * as styles from "./styles";
import NextLink from "next/link";

export const HeaderBeersList = () => {
  const headerBeers = useSelector(
    (state: RootState) => state.getHeaderBeers.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeaderBeers());
  }, []);

  return (
    <Fade in={Boolean(headerBeers.length)}>
      <Grid>
        <HStack {...styles.beersHeader}>
          {headerBeers?.map((item: Beer, i: number) => (
            <Fragment key={item?.id}>
              <NextLink href={`/${item?.id}`}>
                <a>
                  <Text
                    textAlign="center"
                    minW="60px"
                    cursor="pointer"
                    pb={1}
                    borderBottomWidth="1px"
                    borderColor="backgrounds.header"
                    _hover={{
                      color: "primary.500",

                      borderColor: "primary.500",
                    }}
                  >
                    {item?.name}
                  </Text>
                </a>
              </NextLink>
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
  );
};
