import { Grid, HStack, Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import * as styles from "./styles";

interface AboutUsInfoParagraphProps {
  title: string;
  description: JSX.Element | string;
  icon: IconType;
}

export const AboutUsInfoParagraph = ({
  title,
  description,
  icon,
}: AboutUsInfoParagraphProps) => {
  return (
    <Grid gap={4}>
      <HStack alignItems="center">
        <Icon as={icon} {...styles.icon} />
        <Text as="h3" {...styles.title}>
          {title}
        </Text>
      </HStack>
      <Text>{description}</Text>
    </Grid>
  );
};
