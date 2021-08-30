import { Container, Box } from "@chakra-ui/react";
import * as styles from "./styles";

import { FooterFirstRow } from "./FooterFirstRow";
import { FooterSecondRow } from "./FooterSecondRow";
import { FooterCopyright } from "./FooterCopyright";

export const Footer = () => {
  return (
    <Box as="footer" pos="relative" bg="backgrounds.footer">
      <Container {...styles.container}>
        <FooterFirstRow />
        <FooterSecondRow />
      </Container>
      <FooterCopyright />
      {/* <Box {...styles.footerTopFigure}>asdasdasdas</Box> */}
    </Box>
  );
};
