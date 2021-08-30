import { Data } from "@/utils/types";
import { useRadioGroup, Grid } from "@chakra-ui/react";
import { Control, Path, useController } from "react-hook-form";
import { RadioDiamond } from "./RadioDiamond";

interface RadioButtonsProps<T> {
  control: Control<T>;
  data: Data[];
  name: Path<T>;
}

export function RadioButtons<T>({ control, data, name }: RadioButtonsProps<T>) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    onChange: onChange,
  });

  const group = getRootProps();

  return (
    <Grid gap={4} {...group}>
      {data.map((item) => {
        const radio = getRadioProps({ value: item.value });
        return (
          <RadioDiamond
            key={item.value}
            // onChange={onChange}
            {...radio}
            value={item.value}
          >
            {item.label}
          </RadioDiamond>
        );
      })}
    </Grid>
  );
}
