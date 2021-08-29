import { Box, Container } from "@chakra-ui/react";
import * as styles from "./styles";
import { Navbar } from "./Navbar";
import { HeaderBeersList } from "./HeaderBeersList";

export const Header = () => {
  return (
    <Box as="header" bg="backgrounds.header" pos="relative">
      <Container {...styles.container}>
        <Navbar />
        <HeaderBeersList />
      </Container>
      {/* <Box {...styles.headerBottomFigure}>
        asdasdasdas
      </Box> */}
    </Box>
  );
};
