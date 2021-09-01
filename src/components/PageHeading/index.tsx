import { LinkUnderlined } from "@/components/Commons/LinkUnderlined";
import { DiamondBox } from "@/components/Commons/DiamondBox";
import {
  Grid,
  HStack,
  Text,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

interface PageHeadingProps {
  title: string;
  alignItems?: string;
  justifyContent?: string;
  placeItems?: string;
  subTitle?: string;
  [key: string]: string[] | string | number | undefined;
}

export const PageHeading: React.FunctionComponent<PageHeadingProps> = ({
  title,
  alignItems = "center",
  justifyContent = "center",
  placeItems = "center",
  subTitle,
  ...rest
}) => {
  const HeadingSize = useBreakpointValue({ base: "xl", md: "xl", lg: "2xl" });
  return (
    <Grid gap={2} placeItems={placeItems} py={16} {...rest}>
      <HStack
        alignItems={alignItems}
        justifyContent={justifyContent}
        color="gray.600"
        fontSize={["md", null, null, "lg"]}
      >
        <LinkUnderlined>Lorem</LinkUnderlined>
        <DiamondBox bg="gray.500" />
        <Text as="h3">Beer of Tomorrow</Text>
      </HStack>
      <Heading as="h1" size={HeadingSize}>
        {title}
      </Heading>
      {subTitle && (
        <Heading as="h3" size="md" color="gray.500">
          {subTitle}
        </Heading>
      )}
    </Grid>
  );
};
