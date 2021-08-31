import { RootState } from "@/configs/store";
import { Beer } from "@/utils/types";
import { Grid, Fade, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BeerListItem } from "../BeerListItem";

export const BeerList = () => {
  const beers = useSelector((state: RootState) => state.getBeers.data);
  const isLoading = useSelector((state: RootState) => state.getBeers.isLoading);
  const [numberOfItemsShown, setNumberOfItemsShown] = useState<number>(9);

  useEffect(() => {
    setNumberOfItemsShown(9);
  }, [beers]);

  const handleShowMore = () => {
    setNumberOfItemsShown(numberOfItemsShown + 9);
  };

  return (
    <Fade in={!isLoading}>
      <Grid templateColumns="repeat(auto-fill,minmax(250px, 1fr))" gap={8}>
        {beers.slice(0, numberOfItemsShown).map((beer: Beer) => (
          <BeerListItem key={beer.id} {...beer} />  
        ))}
      </Grid>
      {numberOfItemsShown < beers.length && (
        <Grid py={8} pt={16} justifyContent="center">
          <Button
            w={64}
            h={16}
            fontSize={"24px"}
            variant="primary-outline"
            onClick={handleShowMore}
          >
            Show More Beers...
          </Button>
        </Grid>
      )}
    </Fade>
  );
};
