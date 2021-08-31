export const cartItemContainer = {
  transition: "all 0.2s ease",
  bg: "backgrounds.cards",
  borderWidth: 2,
  borderColor: "backgrounds.cardsBorders",
  gap: 4,
  px: 6,
  py: 8,
  my: 8,
  templateColumns: ["1fr", null, "1fr 1fr auto"],
  shadow: "secondary",
  alignItems: "center",
  justifyItems: "center",
  sx: {
    position: "relative",
  },
  maxH: ["none", null, null, "120px"],
  maxW: ["none", null, null, "100%"],
};

export const price = {
  fontWeight: "bold",
  fontSize: ["3xl", null, null, "4xl", null, "5xl"],
  color: "primary.500",
};

export const plusMinusContainer = {
  shadow: "secondary",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50px",
  minW: ["190px", "250px", "190px"],
  pl: 6,
};

export const iconButtons = {
  variant: "primary-outline",
  size: "xs",
  borderRadius: "100%",
  // fontSize: ["16px", null, "24px"],
};

export const beerPriceStack = {
  alignItems: "flex-start",
  stackStyles: {
    flexDirection: "column",
    spacing: 0,
  },
  subPriceStyles: {
    fontSize: ["lg", "sm", "xl"],
    pt: 0,
  },
};

export const share = {
  variant: "ghost",
  colorScheme: "gray",
  ml: 4,
  "aria-label": "Share",
  w: 18,
  h: 18,
  fontSize: "3rem",
  sx: {
    position: ["absolute", null, null, null, "relative"],
  },
  top: ["5", null, null, null, "0px"],
  right: ["5px", null, null, null, "0px"],
};

export const addToCart = {
  "aria-label": "Add To Cart",
  fontSize: "1.5rem",
  w: "50px",
  h: "50px",
  borderRadius: "50px",
};
