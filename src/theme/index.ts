import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import components from "./components";

const theme = extendTheme({
  ...foundations,
  components,
});

export default theme;
