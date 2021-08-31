import { calc } from "@chakra-ui/styled-system";
export const mainImage = {
  h: ["70vh", null, null, "90vh"],
  w: "auto",
};

export const subImage = {
  h: "120px",
  w: "auto",
  zIndex: 2,
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
  h: ["50vh", null, null, "65vh"],
  gap: 8,
  pr: 4,
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
