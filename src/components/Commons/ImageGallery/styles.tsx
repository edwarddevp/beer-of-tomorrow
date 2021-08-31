import { calc } from "@chakra-ui/styled-system";
export const mainImage = {
  height: 800,
  width: 300,
};

export const subImage = {
  height: 120,
  width: 40,
};

export const pageHeading = {
  textAlign: "center",
  pb: 8,
  subTitle: "Venta Distributions",
  display: ["grid", "grid", "none"],
};

export const subImagesContainer = {
  sx: {
    overflow: "auto",
  },
  my: 16,
  className: "scrollbar",
  h: "80vh",
  gap: 8,
  pr: 8,
  alignContent: "start",
};

export const diamond = {
  sx: {
    pos: "absolute",
  },
  top: "12px",
  left: "-10px",
  transform: "rotate(45deg)",
  borderWidth: "3px",
  borderColor: "gold.800",
  w: "80px",
  h: "80px",
};
