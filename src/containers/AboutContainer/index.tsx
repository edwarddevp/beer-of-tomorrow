import { PageHeading } from "@/components/PageHeading";
import { Grid, Container } from "@chakra-ui/react";
import { CartList } from "@/components/CartList";
import { CartPay } from "@/components/CartPay";
import * as styles from "./styles";

export const AboutContainer = () => {
  return (
    <Container {...styles.container}>
      <PageHeading title="About Us" />
      <Grid>
        <CartList />
        <CartPay />
      </Grid>
    </Container>
  );
};
