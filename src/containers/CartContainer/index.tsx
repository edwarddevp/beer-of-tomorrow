import { PageHeading } from "@/components/PageHeading";
import { Grid, Container } from "@chakra-ui/react";
import { CartList } from "@/components/CartList";
import { CartPay } from "@/components/CartPay";
import * as styles from "./styles";

export const CartContainer = () => {
  return (
    <Container {...styles.container}>
      <PageHeading title="Cart" />
      <Grid>
        <CartList />
        <CartPay />
      </Grid>
    </Container>
  );
};
