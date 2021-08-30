export const cartButtonContainer = (id: number) => ({
  sx: {
    position: "relative",
  },

  className: `list-beer-item-${id}`,
  _hover: { shadow: "primary" },
  transition: "all 0.2s ease",
});

export const bottomRoundBorderContainer = {
  sx: {
    position: "relative",
  },
  overflow: "hidden",
};

export const itemContainer = {
  sx: {
    textAlign: "center",
  },
  cursor: "pointer",
  transition: "all 0.5s ease",
  bg: "backgrounds.cards",
  borderWidth: 2,
  borderColor: "backgrounds.cardsBorders",
  minH: "150",
  justifyContent: "center",
  justifyItems: "center",
  templateRows: "auto 1fr auto auto",
  gap: 6,
  px: 6,
  py: 10,
};

export const bottonRoundBorder = {
  bottom: "-35px",
  left: "calc(50% - 40px)",
  sx: {
    position: "absolute",
  },
  borderWidth: 2,
  borderColor: "backgrounds.cardsBorders",
  bg: "backgrounds.cards",
  w: 20,
  h: 20,
  borderRadius: "100%",
};

export const addToCart = (id: number) => ({
  opacity: [1, null, null, null, 0],
  sx: {
    [`.list-beer-item-${id}:hover &`]: {
      opacity: 1,
    },
    position: "absolute",
  },
  transition: "all 0.2s ease",
  zIndex: "1",
  bottom: "-35px",
  left: "calc(50% - 40px)",
  size: "lg",
  "aria-label": "Go To the Cart",
  variant: "primary",
  fontSize: "36px",
  w: 20,
  h: 20,
  borderRadius: "100%",
});

export const offerMessage = {
  sx: {
    position: "absolute",
  },
  bgGradient: "linear(to-t, primary.200, primary.100, primary.50)",
  top: 4,
  right: 4,
  px: 4,
  py: 1,
  borderRadius: 4,
  color: "white",
};

export const imageNotAvailable = {
  justifyContent: "center",
  placeItems: "center",
  spacing: 4,
  h: ["250px", "350px"],
};
