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
  cursor: "pointer",
  src: "/logo.png",
  height: 90,
  width: 320,
  // minH: ["50px", "65px", "84px", "105px"],
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

export const cartItemsNumber = {
  sx: {
    position: "absolute",
  },
  justifyContent: "center",
  alignItems: "center",
  w: [4, null, null, 6],
  h: [4, null, null, 6],
  top: ["-8px", null, null, "-12px"],
  right: ["-8px", null, null, "-12px"],
  borderRadius: "100%",
  bg: "primary.500",
  color: "white",
  fontSize: ["10px", null, null, "14px"],
};

export const cartButton = {
  "aria-label": "Go To the Cart",
  variant: "primary-outline",
  fontSize: ["16px", null, "24px"],
};
