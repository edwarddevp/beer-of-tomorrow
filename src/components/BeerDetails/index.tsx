import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Grid, Heading, Text, Icon, HStack } from "@chakra-ui/react";
import { FaBeer } from "react-icons/fa";
import { GiGrapes } from "react-icons/gi";
import { RootState } from "@/configs/store";
import { PageHeading } from "@/components/PageHeading";
import { beerDetails } from "@/constants/beerDetails";
import { splitItem } from "@/utils/splitItem";
import { BeerDetailsCart } from "../BeerDetailsCart";
import * as styles from "./styles";

interface BeerDetailsProps {}

export const BeerDetails = (props: BeerDetailsProps) => {
  const beer = useSelector((state: RootState) => state.getBeerById.data);
  const beerIngredient = beer?.ingredients?.hops?.[0];

  return (
    <Grid {...styles.container}>
      <PageHeading title={beer?.name} {...styles.pageHeading} />
      <Grid {...styles.content}>
        <Grid {...styles.details}>
          <HStack spacing={2}>
            <Icon as={GiGrapes} {...styles.icons} />
            <Text fontWeight="500">{beerIngredient?.name}</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaBeer} {...styles.icons} />
            <Text fontWeight="500">
              {beerIngredient?.amount?.value}
              {beerIngredient?.amount?.unit}
            </Text>
          </HStack>
        </Grid>
        <Grid templateColumns="1fr 1fr" gap={4}>
          {beerDetails.map((item, i: number) => (
            <Fragment key={i}>
              <Text color="gray.600">{item?.label}</Text>
              <Text fontWeight="500">
                {item?.render
                  ? item.render
                  : `${splitItem(item.value, beer)}${item?.suffix || ""}`}
              </Text>
            </Fragment>
          ))}
        </Grid>
        <BeerDetailsCart />
        <Heading as="h3" size="xl" color="gray.500">
          Venta Distributions
        </Heading>
      </Grid>
    </Grid>
  );
};
