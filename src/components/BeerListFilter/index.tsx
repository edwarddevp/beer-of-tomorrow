import { Box, Grid, Heading, Accordion, Divider } from "@chakra-ui/react";
import { FilterCollapseItem } from "./FilterCollapseItem";
import { useForm } from "react-hook-form";
import * as styles from "./styles";
import { RadioButtons } from "../Commons/RadioButtons";
import { hops } from "@/constants/beerData";
import { useEffect } from "react";
import { Input } from "../Commons/Input";
import { Range } from "../Commons/Range";
import { useDispatch } from "react-redux";
import { getBeers } from "@/actions/beerActions";

export interface FormBeerFilterValues {
  beer_name: string;
  hops: "Fuggles" | "First Gold" | "Cascade" | "";
  malt: "Maris Otter Extra Pale" | "Caramalt" | "Munich" | "";
  abv: [number, number];
}

export const BeerListFilter = () => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormBeerFilterValues>({
    defaultValues: {
      beer_name: "",
      hops: "",
      malt: "",
      abv: [0, 0],
    },
  });
  const watchAllFields = watch();

  useEffect(() => {
    const onSubmit = (data: FormBeerFilterValues) => {
      const params = {
        beer_name: data.beer_name,
        hops: data.hops,
        malt: data.malt,
        abv_gt: "",
        abv_lt: "",
      };
      if (!(data.abv[0] === 0 && data.abv[1] === 0)) {
        params.abv_gt = data.abv[0].toString();
        params.abv_lt = data.abv[1].toString();
      }

      dispatch(getBeers(params));
    };
    // handleSubmit(onSubmit);
    onSubmit(watchAllFields);
  }, [watchAllFields, dispatch]);

  return (
    <Box d={["none", null, null, "block"]}>
      <Grid
        transition="all 0.5s ease"
        bg="backgrounds.cards"
        borderWidth={2}
        borderColor="backgrounds.cardsBorders"
        p={8}
        pos="relative"
        gap={8}
      >
        <Heading as="h2" size="lg">
          Beer&lsquo;s Filter
        </Heading>
        <Accordion allowMultiple>
          <Grid gap={4} color="gray.600">
            <FilterCollapseItem name="Beer Name">
              <Input
                name="beer_name"
                helper="Find Beer By Name"
                register={register}
                registerProps={{ minLength: 3 }}
              />
            </FilterCollapseItem>
            <Divider />
            <FilterCollapseItem name="ABV">
              <Range<FormBeerFilterValues> name="abv" control={control} />
            </FilterCollapseItem>
            <Divider />
            <FilterCollapseItem name="Hops">
              <RadioButtons<FormBeerFilterValues>
                control={control}
                name="hops"
                data={hops}
              />
            </FilterCollapseItem>
            <Divider />
            <FilterCollapseItem name="Malt">
              <RadioButtons<FormBeerFilterValues>
                control={control}
                name="malt"
                data={hops}
              />
            </FilterCollapseItem>
          </Grid>
        </Accordion>
        {/* <Box {...styles.filterTopRightFigure}>asadasdasd</Box> */}
      </Grid>
    </Box>
  );
};
