import { LinkUnderlined } from "@/components/Commons/LinkUnderlined";
import { DiamondBox } from "@/components/DiamondBox";
import {
  Grid,
  HStack,
  Text,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

interface PageHeadingProps {
  title: string;
}

export const PageHeading = ({ title }: PageHeadingProps) => {
  const HeadingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  return (
    <Grid gap={2} placeItems="center" py={16}>
      <HStack
        alignItems="center"
        justifyContent="center"
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
    </Grid>
  );
};
