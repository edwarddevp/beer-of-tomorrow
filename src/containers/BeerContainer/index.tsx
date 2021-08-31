import dynamic from "next/dynamic";
import { Grid, Container } from "@chakra-ui/react";
import { BeerFeaturesAside } from "@/components/BeerFeaturesAside";
import { BeerFeatures } from "@/components/BeerFeatures";
import { ImageGallery } from "@/components/Commons/ImageGallery";
import { BeerDetails } from "@/components/BeerDetails";
import * as styles from "./styles";

const BeersRecommended = dynamic<{}>(
  import("@/components/BeersRecommended").then((mod) => mod.BeersRecommended)
);

export const BeerContainer = () => {
  return (
    <Container {...styles.container}>
      <Grid {...styles.beerDetailsContainer}>
        <BeerDetails />
        <ImageGallery />
      </Grid>
      <Grid {...styles.beerFeaturesContainer}>
        <BeerFeatures />
        <BeerFeaturesAside />
      </Grid>
      <Grid>
        <BeersRecommended />
      </Grid>
    </Container>
  );
};
