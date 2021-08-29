import { Grid, Text, Link } from "@chakra-ui/react";
import * as styles from "./styles";

export const FooterCopyright = () => {
  return (
    <Grid placeItems="center" py={4} bg="backgrounds.copyright">
      <Text textAlign="center">
        Venta Distribution © 2021, All rights reserved{" "}
        <Link {...styles.footerLink}>Lorem Ipsum</Link>
      </Text>
    </Grid>
  );
};
