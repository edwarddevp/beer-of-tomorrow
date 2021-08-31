import { Grid, Container } from "@chakra-ui/react";
import { BeersRecommended } from "@/components/BeersRecommended";
import { BeerFeaturesAside } from "@/components/BeerFeaturesAside";
import { BeerFeatures } from "@/components/BeerFeatures";
import { ImageGallery } from "@/components/Commons/ImageGallery";
import { BeerDetails } from "@/components/BeerDetails";
import * as styles from "./styles";

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
