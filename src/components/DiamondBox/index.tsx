import { Box } from "@chakra-ui/react";

interface DiamondBoxProps {
  size?: number | string;
  bg?: string;
  [key: string]: string | number | undefined;
}

export const DiamondBox: React.FC<DiamondBoxProps> = ({
  size = 2,
  bg = "primary.500",
  ...rest
}) => {
  return <Box w={size} h={size} transform="rotate(45deg)" bg={bg} {...rest} />;
};
