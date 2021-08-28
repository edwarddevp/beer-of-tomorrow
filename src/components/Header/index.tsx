import { Fragment } from "react";
import {
  Divider,
  Flex,
  Grid,
  Spacer,
  Text,
  Box,
  Image,
  Button,
  HStack,
  IconButton,
  Icon,
  Link,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Beer } from "@/utils/types";
import { DiamondBox } from "../DiamondBox";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaVk, FaFacebookF } from "react-icons/fa";

interface HeaderProps {
  children?: JSX.Element[] | JSX.Element;
}

export const Header = ({ children }: HeaderProps) => {
  const buttonSize = useBreakpointValue({ base: "sm", sm: "md", lg: "lg" });
  const recommendedBeers: Partial<Beer>[] = [
    {
      name: "Busszz",
    },
    {
      name: "Buzssssz",
    },
    {
      name: "Buzz",
    },
    {
      name: "Buzz",
    },
    {
      name: "Buzddddz",
    },
    {
      name: "Buzz",
    },
    {
      name: "Buzz",
    },
  ];
  return (
    <Box as="header" bg="backgrounds.header" pos="relative">
      <Container
        maxW="container.xl"
        pt={4}
        gap={4}
        d="grid"
        gridGap={[4, null, 8]}
      >
        <Flex alignItems="center" px={4} py={[0, 2]}>
          <HStack
            d={["none", null, "block"]}
            spacing={[0, null, 2, 4, 8]}
            fontSize={["sm", null, null, "md"]}
          >
            <Link href="https://chakra-ui.com" isExternal>
              Lorem Ipsum
            </Link>
            <Link href="https://chakra-ui.com" isExternal>
              Lorem Ipsum
            </Link>
            <Link href="https://chakra-ui.com" isExternal>
              <Icon
                as={FaVk}
                w={[0, null, 5, 7]}
                h={[0, null, 5, 7]}
                mx="2px"
                color="gray.400"
                _hover={{ color: "brands.vk" }}
              />
            </Link>
            <Link href="https://chakra-ui.com" isExternal>
              <Icon
                as={FaFacebookF}
                w={[0, null, 5, 7]}
                h={[0, null, 5, 7]}
                mx="2px"
                color="gray.400"
                _hover={{ color: "brands.facebook" }}
              />
            </Link>
          </HStack>
          <Spacer d={["none", null, "block"]} />
          <Image
            src="logo.png"
            alt="Beer of Tomorrow logo"
            h="auto"
            w={["150px", "200px", "256px", "320px"]}
          />
          <Spacer />
          <HStack spacing={4} pl={[0, null, null, 12]}>
            <Button size={buttonSize}>Lorem Ipsum Lorem</Button>
            <IconButton
              size={buttonSize}
              aria-label="Cart"
              variant="primary-outline"
              fontSize="lg"
              icon={<IoBagHandleOutline />}
            />
          </HStack>
        </Flex>
        <Box px={4}>
          <Divider />
        </Box>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
          pb={[4, null, 16]}
          px={2}
          overflowX="auto"
          fontSize={["md", null, "lg"]}
        >
          {recommendedBeers?.map((item, i) => (
            <Fragment key={i}>
              <Text>{item?.name}</Text>
              {i < recommendedBeers.length - 1 ? (
                <Box>
                  <DiamondBox size="0.30rem" />
                </Box>
              ) : null}
            </Fragment>
          ))}
        </HStack>
      </Container>
      {/* <Box pos="absolute" bottom="-8px" left="calc(50% - 43.5px)">
        asdasdasdas
      </Box> */}
    </Box>
  );
};
