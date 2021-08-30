import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Control, Path, useController } from "react-hook-form";
import ReactSlider from "react-slider";
import styles from "./Range.module.css";

interface RangeProps<T> {
  control: Control<T>;
  name: Path<T>;
}

export function Range<T>({ name, control }: RangeProps<T>) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  return (
    <>
      <ReactSlider
        className={styles.slider}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        defaultValue={[0, 0]}
        max={20}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props) => <div {...props} />}
        renderTrack={(props) => {
          const middle = props?.className?.includes("-1");
          // @ts-ignore
          return <Box bg={middle ? "primary.500" : "gold.300"} {...props} />;
        }}
        pearling
        minDistance={0}
        onAfterChange={(value) => onChange(value)}
      />
      <Flex fontSize="sm" color="gray.400">
        <Text>
          {/* @ts-ignore */}
          {value[0]}
          {name}
        </Text>
        <Spacer />
        <Text>
          {/* @ts-ignore */}
          {value[1]}
          {name}
        </Text>
      </Flex>
    </>
  );
}
