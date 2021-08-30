import React from "react";
import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { AnyObject } from "@/utils/types";

interface InputProps {
  helper?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  register: any;
  registerProps?: AnyObject;
}

export const Input: React.FC<InputProps> = ({
  helper,
  label,
  name,
  placeholder,
  register,
  registerProps,
}) => {
  return (
    <FormControl as="fieldset">
      {label && <FormLabel as="legend">{label}</FormLabel>}
      <ChakraInput
        placeholder={placeholder || helper}
        variant="flushed"
        borderColor="gold.300"
        _focus={{
          borderColor: "gold.300",
        }}
        {...register(name, registerProps)}
      />
      {helper && <FormHelperText fontSize="xs">{helper}</FormHelperText>}
    </FormControl>
  );
};
