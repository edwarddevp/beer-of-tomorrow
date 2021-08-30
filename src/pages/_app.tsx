import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../layouts/MainLayout";
import theme from "@/theme";
import { Provider } from "react-redux";
import { useStore } from "@/configs/store";
import Router from "next/router";
import NProgress from "nprogress";

// Router Events
Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
