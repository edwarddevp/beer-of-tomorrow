import { useSelector } from "react-redux";
import { Grid, Text } from "@chakra-ui/react";
import { RootState } from "@/configs/store";
import * as styles from "./styles";

interface BeerFeaturesProps {}

export const BeerFeatures = (props: BeerFeaturesProps) => {
  const beer = useSelector((state: RootState) => state.getBeerById.data);
  return (
    <Grid gap={8}>
      <Grid gap={4}>
        <Text as="h3" {...styles.title}>
          Descripction
        </Text>
        <Text>{beer.description}</Text>
      </Grid>
      <Grid gap={4}>
        <Text {...styles.title}>Lorem ipsum dolor sit amet</Text>
        <Text>
          nteger tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim.
        </Text>
      </Grid>
      <Grid gap={4}>
        <Text as="h3" {...styles.title}>
          Magnis dis parturient montes
        </Text>
        <Text>
          Quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
          Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
          Nullam accumsan lorem in dui.estibulum purus quam, scelerisque ut,
          mollis sed, nonummy id, metus. Nullam accumsan lorem in dui.
        </Text>
      </Grid>
      <Grid gap={4}>
        <Text as="h3" {...styles.title}>
          Magnis dis parturient montes
        </Text>
        <Text>
          Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
          consectetuer eget, posuere ut, mauris. Praesent adipiscing.
        </Text>
      </Grid>
      <Grid gap={2}>
        <Text as="h3" {...styles.title}>
          Praesent adipiscing.
        </Text>
        <Text>
          Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        </Text>
      </Grid>
    </Grid>
  );
};
