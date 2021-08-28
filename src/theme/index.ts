import { extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import Button from "./components/button";
import Link from "./components/Link";

const theme = extendTheme({
  colors,
  components: {
    Button,
    Link,
  },
});

export default theme;
