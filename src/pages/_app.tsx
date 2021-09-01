import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { DefaultSeo } from "next-seo";
import NProgress from "nprogress";
import Router from "next/router";
import MainLayout from "../layouts/MainLayout";
import theme from "@/theme";
import { useStore } from "@/configs/store";
import Fonts from "@/components/Commons/Fonts";
import "nprogress/nprogress.css";
import "leaflet/dist/leaflet.css";
import "../styles/globals.css";

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
          <DefaultSeo />
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
      <Fonts />
    </ChakraProvider>
  );
}
export default MyApp;
