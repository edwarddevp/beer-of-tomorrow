import { useSelector } from "react-redux";
import { Grid, Heading } from "@chakra-ui/react";
import { RootState } from "@/configs/store";
import { BeerListItem } from "../BeerListItem";
import { Beer } from "@/utils/types";

interface BeersRecommendedProps {}

export const BeersRecommended = (props: BeersRecommendedProps) => {
  const beers = useSelector(
    (state: RootState) => state.getRecomendedBeers.data
  );
  return (
    <Grid gap={8}>
      <Heading as="h2">Similars Beers</Heading>
      <Grid
        templateColumns={["1fr", "repeat(2,1fr)", null, "repeat(4,1fr)"]}
        gap={8}
      >
        {beers.map((beer: Beer) => (
          <BeerListItem key={beer.id} beer={beer} />
        ))}
      </Grid>
    </Grid>
  );
};
