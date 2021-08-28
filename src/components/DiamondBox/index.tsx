import { Box } from "@chakra-ui/react";

interface DiamondBoxProps {
  size?: number | string;
}

export const DiamondBox = ({ size = 2 }: DiamondBoxProps) => {
  return <Box w={size} h={size} transform="rotate(45deg)" bg="primary.500" />;
};
