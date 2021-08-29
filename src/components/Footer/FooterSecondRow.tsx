import { Grid, GridItem, Heading, Icon, Text } from "@chakra-ui/react";
import { LinkUnderlined } from "../Commons/LinkUnderlined";
import { FaVk, FaFacebookF } from "react-icons/fa";
import * as styles from "./styles";

export const FooterSecondRow = () => {
  return (
    <Grid {...styles.secondRowStyles}>
      <GridItem {...styles.gridItemStyle} colSpan={[1, 2, 1]}>
        <Heading as="h6" size="lg">
          Lorem Ipsum
        </Heading>
        <Grid
          templateColumns="repeat(2,1fr)"
          columnGap={8}
          rowGap={4}
          {...styles.rowListStyle}
        >
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
        </Grid>
      </GridItem>
      <GridItem {...styles.gridItemStyle}>
        <Heading as="h6" size="lg">
          Lorem Ipsum
        </Heading>
        <Grid {...styles.gridItemStyle}>
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
          <LinkUnderlined fontWeight="bold" color="primary.500">
            Lorem Ipsum
          </LinkUnderlined>
        </Grid>
      </GridItem>
      <GridItem {...styles.gridItemStyle}>
        <Heading as="h6" size="lg">
          Lorem Ipsum
        </Heading>
        <Grid gap={4} {...styles.rowListStyle}>
          <LinkUnderlined
            icon={
              <Icon
                as={FaFacebookF}
                {...styles.mediaIcons("brands.facebook")}
              />
            }
          >
            <Text>Lorem Ipsum</Text>
          </LinkUnderlined>
          <LinkUnderlined
            icon={<Icon as={FaVk} {...styles.mediaIcons("brands.vk")} />}
          >
            <Text>Lorem Ipsum</Text>
          </LinkUnderlined>
        </Grid>
      </GridItem>
      <GridItem {...styles.gridItemStyle}>
        <Heading as="h6" size="lg">
          Lorem Ipsum
        </Heading>
        <Grid gap={4} {...styles.rowListStyle}>
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
          <LinkUnderlined>Lorem Ipsum</LinkUnderlined>
        </Grid>
      </GridItem>
    </Grid>
  );
};
