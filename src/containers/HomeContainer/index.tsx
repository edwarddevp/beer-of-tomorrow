import { BeerList } from "@/components/BeerList";
import { PageHeading } from "@/components/PageHeading";
import { Grid } from "@chakra-ui/react";
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
    <>
      <PageHeading title="Shopping List" />
      <Grid {...styles.container}>
        <BeerListFilter />
        <BeerList />
      </Grid>
    </>
  );
};
