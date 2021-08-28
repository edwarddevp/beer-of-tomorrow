// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    900: "#4E1929",
    800: "#601E31",
    700: "#712239",
    600: "#932A49",
    500: "#972D4D",
    400: "#9A2F51",
    300: "#A13359",
    200: "#B55775",
    100: "#C87A90",
    50: "#CD869A",
  },
  secondary: {
    900: "#993C36",
    800: "#A8423B",
    700: "#B1463E",
    600: "#BF4B43",
    500: "#CC5048",
    400: "#CD534B",
    300: "#CE564E",
    200: "#CF5C54",
    100: "#D1625A",
    50: "#D26760",
  },
  backgrounds: {
    header: "#faf9f7",
    body: "#fff",
    copyright: "#faf9f7",
  },
};
const theme = extendTheme({ colors });

export default theme;
