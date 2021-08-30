import { PageHeading } from "@/components/PageHeading";
import { Grid } from "@chakra-ui/react";
import { CartList } from "@/components/CartList";
import { CartPay } from "@/components/CartPay";
import * as styles from "./styles";

export const CartContainer = () => {
  return (
    <>
      <PageHeading title="Cart" />
      <Grid {...styles.container}>
        <CartList />
        <CartPay />
      </Grid>
    </>
  );
};
