export const container = {
  maxW: "container.xl",
  pt: 4,
  gap: 4,
  d: "grid",
  gridGap: [4, null, 8],
};

export const leftActions = {
  d: ["none", null, "block"],
  spacing: [0, null, 2, 4, 8],
  fontSize: ["sm", null, null, "md"],
};

export const mediaIcons = (color: string) => ({
  w: [0, null, 5, 7],
  h: [0, null, 5, 7],
  mx: "2px",
  color: "gray.400",
  _hover: { color },
});

export const logoImage = {
  src: "logo.png",
  alt: "Beer of Tomorrow logo",
  h: "auto",
  w: ["150px", "200px", "256px", "320px"],
  minH: ["50px", "65px", "84px", "105px"],
};

export const beersHeader = {
  justifyContent: "space-between",
  alignItems: "center",
  spacing: 4,
  pb: [4, null, 10],
  px: 2,
  fontSize: ["md", null, "lg"],
  minH: "91px",
  className: "scrollbar",
  sx: {
    overflowX: "auto",
  },
};

export const headerBottomFigure = {
  sx: {
    position: "absolute",
    bottom: "-8px",
    left: "calc(50% - 43.5px)",
  },
};
