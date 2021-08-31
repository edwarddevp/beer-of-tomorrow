import { BeerList } from "@/components/BeerList";
import { PageHeading } from "@/components/PageHeading";
import { Grid, Container } from "@chakra-ui/react";
import * as styles from "./styles";
import dynamic from "next/dynamic";

const BeerListFilter = dynamic<{}>(
  import("@/components/BeerListFilter").then((mod) => mod.BeerListFilter),
  {
    ssr: false,
  }
);

export const HomeContainer = () => {
  return (
    <Container {...styles.container}>
      <PageHeading title="Shopping List" />
      <Grid {...styles.containerMain}>
        <BeerListFilter />
        <BeerList />
      </Grid>
    </Container>
  );
};
