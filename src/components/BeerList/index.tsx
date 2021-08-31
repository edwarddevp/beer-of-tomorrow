import { getMoreBeers } from "@/actions/beerActions";
import { RootState } from "@/configs/store";
import { Beer } from "@/utils/types";
import { Grid, Fade, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { BeerListItem } from "../BeerListItem";

export const BeerList = () => {
  const beers = useSelector((state: RootState) => state.getBeers.data);
  const isLoading = useSelector((state: RootState) => state.getBeers.isLoading);
  const noMoreItems = useSelector(
    (state: RootState) => state.getBeers.noMoreItems
  );
  const dispatch = useDispatch();

  const handleShowMore = () => {
    dispatch(getMoreBeers());
  };

  return (
    <Fade in={!isLoading}>
      <Grid templateColumns="repeat(auto-fill,minmax(250px, 1fr))" gap={8}>
        {beers.map((beer: Beer) => (
          <BeerListItem key={beer.id} {...beer} />
        ))}
      </Grid>
      {!noMoreItems && (
        <Grid py={8} pt={16} justifyContent="center">
          <Button
            w={64}
            h={16}
            fontSize={"24px"}
            variant="primary-outline"
            onClick={handleShowMore}
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Show More Beers...
          </Button>
        </Grid>
      )}
    </Fade>
  );
};
