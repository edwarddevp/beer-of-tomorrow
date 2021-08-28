import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../layouts/MainLayout";
import theme from "@/theme";
import { Provider } from "react-redux";
import { useStore } from "@/configs/store";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </ChakraProvider>
  );
}
export default MyApp;
