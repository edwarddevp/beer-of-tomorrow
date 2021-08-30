export const imageNotAvailable = {
  justifyContent: "center",
  placeItems: "center",
  spacing: 4,
  h: ["250px", "350px"],
};
export const iconButtons = {
  variant: "primary-outline",
  size: "xs",
  borderRadius: "100%",
  // fontSize: ["16px", null, "24px"],
};

export const itemContainer = {};

export const cartItemContainer = (id: number) => ({
  className: `cart-beer-item-${id}`,
  sx: {
    position: "relative",
  },
  transition: "all 0.2s ease",
  bg: "backgrounds.cards",
  borderWidth: 2,
  borderColor: "backgrounds.cardsBorders",
  minH: "150",
  gap: [6, null, null, null, 16],
  pb: [6, null, null, 12],
  pt: [12, null, null, 12],
  px: [6, null, null, 4, 8, 24],
  templateColumns: ["75px 1fr", "75px 1fr 1fr", null, "120px 3fr 2fr 2fr auto"],
  templateRows: ["auto", "auto auto", null, "auto"],
  _hover: { shadow: "primary" },
});

export const colSpan = {
  gridColumnEnd: ["span 2", "span 1"],
};

export const rowSpan = {
  gridRowEnd: ["span 1", "span 2", null, "span 1"],
};

export const image = {
  h: ["150px", null, null, "220px"],
  w: "auto",
};

const buttonSize = {
  minW: [30, null, null, null, 20],
  w: [30, null, null, null, 20],
  h: [30, null, null, null, 20],
};

export const bottonRoundBorder = {
  sx: {
    position: ["absolute", null, null, null, "relative"],
  },
  top: ["-15px", null, null, null, "0px"],
  left: ["-15px", null, null, null, "0px"],
  borderWidth: 2,
  borderColor: "backgrounds.cardsBorders",
  bg: "backgrounds.cards",
  borderRadius: "100%",
  shadow: "secondary",
  ...buttonSize,
};

export const removeFromCart = (id: number) => ({
  opacity: [1, null, null, 0],
  sx: {
    [`.cart-beer-item-${id}:hover &`]: {
      opacity: 1,
    },
    position: "absolute",
  },
  transition: "all 0.2s ease",
  zIndex: "1",
  top: "0",
  left: "0",
  "aria-label": "Go To the Cart",
  variant: "primary",
  size: "sm",
  fontSize: ["18px", null, null, null, "36px"],
  borderRadius: "100%",
  ...buttonSize,
});

export const beerPrice = {
  priceStyles: {
    fontSize: ["2xl", "xl", "4xl"],
  },
  subPriceStyles: {
    fontSize: ["lg", "sm", "xl"],
    pt: [2, 0, 2],
  },
};

export const beerPriceStack = {
  alignItems: "flex-start",
  stackStyles: {
    flexDirection: ["row", "column", "row"],
    spacing: [2, 0, 2],
  },
};

export const plusMinusContainer = {
  shadow: "secondary",
  alignItems: "center",
  justifyContent: "center",
  p: [3, null, null, 6],
  borderRadius: "50px",
  minW: ["190px", "100px", "190px"],
};
