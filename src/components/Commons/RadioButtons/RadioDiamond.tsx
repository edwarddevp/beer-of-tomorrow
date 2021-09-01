import React from "react";
import { DiamondBox } from "@/components/Commons/DiamondBox";
import { useRadio, Box, HStack, Text } from "@chakra-ui/react";

interface RadioDiamondProps {
  value: string | number;
  // onChange?: Function;
}

export const RadioDiamond: React.FC<RadioDiamondProps> = ({
  children,
  ...props
}) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  // @ts-ignore
  const isChecked = input.checked;

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (isChecked) {
      // @ts-ignore
      props.onChange("");
    }
  };

  return (
    <Box as="label">
      <input {...input} onClick={onChangeHandler} />
      <HStack {...checkbox} cursor="pointer" spacing={4}>
        <DiamondBox
          borderWidth="2px"
          bg={isChecked ? "primary.500" : "transparent"}
          transform={isChecked ? "rotate(-45deg)" : "rotate(45deg)"}
          borderColor={isChecked ? "primary.500" : "gold.300"}
          transition="all 0.5s ease"
        />
        <Text>{children}</Text>
      </HStack>
    </Box>
  );
};
