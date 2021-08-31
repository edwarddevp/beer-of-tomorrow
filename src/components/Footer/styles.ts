export const container = {
  maxW: "container.xl",
  pt: 16,
  pb: 8,
  gap: 16,
  d: "grid",
  gridGap: [16, null, 16],
  color: "gray.600",
};

export const logoImage = {
  src: "/logo.png",
  height: 120,
  width: 300,
};

export const firstRowStyles = {
  templateColumns: ["1fr", null, null, null, "1.5fr 3fr 1fr"],
  gap: 16,
  m: "auto",
  w: ["80%", null, null, null, "100%"],
  justifyItems: ["center", null, null, null, "inherit"],
};

export const firstRowThreeItems = {
  templateColumns: ["1fr", null, "repeat(3,1fr)"],
  justifyItems: [null, null, "center"],
  maxW: ["292px", null, "100%"],
  gap: [16, null, null, null, 8],
};

export const rowStyle = {
  templateRows: "auto 1fr",
  alignContent: "flex-start",
};

export const rowListStyle = {
  alignContent: "flex-start",
};

export const firstRowIcons = {
  w: 6,
  h: 6,
  color: "primary.500",
  mb: 2,
};

export const secondRowStyles = {
  templateColumns: ["1fr", "1fr 1fr", "2fr repeat(3,1fr)"],
  gap: 16,
  w: ["80%", null, null, null, "100%"],
  m: "auto",
};

export const gridItemStyle = {
  gridTemplateRows: "auto 1fr",
  alignContent: "flex-start",
  d: "grid",
  gridGap: 6,
  colSpan: [1, null, null, null, 1],
};

export const footerLinks = {
  borderBottomWidth: "1px",
};

export const footerLink = {
  d: "inline",
  href: "#",
  textDecoration: "underline",
  color: "primary.500",
};

export const footerTopFigure = {
  sx: {
    position: "absolute",
    top: "-16px",
    left: "calc(50% - 43.5px)",
  },
};

export const mediaIcons = (color: string) => ({
  w: [0, null, 5, 7],
  h: [0, null, 5, 7],
  mx: "2px",
  color: color,
  d: "inline",
});
