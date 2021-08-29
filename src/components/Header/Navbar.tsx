import {
  Flex,
  Spacer,
  Image,
  Button,
  HStack,
  IconButton,
  Icon,
  Link,
  Divider,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaVk, FaFacebookF } from "react-icons/fa";
import * as styles from "./styles";

export const Navbar = () => {
  const buttonSize = useBreakpointValue({ base: "sm", sm: "md", lg: "lg" });
  return (
    <Grid px={[0, 4]} gap={[4, null, 8]}>
      <Flex as="nav" alignItems="center" py={[0, 2]}>
        <HStack {...styles.leftActions}>
          <Link href="#" isExternal>
            Lorem Ipsum
          </Link>
          <Link href="#" isExternal>
            Lorem Ipsum
          </Link>
          <Link href="https://vk.com/?lang=es" isExternal>
            <Icon as={FaVk} {...styles.mediaIcons("brands.vk")} />
          </Link>
          <Link href="https://www.facebook.com/" isExternal>
            <Icon as={FaFacebookF} {...styles.mediaIcons("brands.facebook")} />
          </Link>
        </HStack>
        <Spacer d={["none", null, "block"]} />
        <Image {...styles.logoImage} />
        <Spacer />
        <HStack spacing={4} pl={[0, null, null, 12]}>
          <Button size={buttonSize}>Lorem Ipsum Lorem</Button>
          <IconButton
            size={buttonSize}
            aria-label="Go To the Cart"
            variant="primary-outline"
            fontSize="24px"
            icon={<IoBagHandleOutline />}
          />
        </HStack>
      </Flex>
      <Divider />
    </Grid>
  );
};
