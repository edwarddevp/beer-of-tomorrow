import Head from "next/head";
import { Header } from "@/components/Header";
import { Divider } from "@chakra-ui/layout";
import { Footer } from "@/components/Footer";
import { chakra } from "@chakra-ui/react";
interface MainLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export default function MainLayoutProps({ children }: MainLayoutProps) {
  return (
    <div>
      <Head>
        <title>Beer Of Tomorrow</title>
        <meta name="description" content="Beer Of Tomorrow" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <chakra.main bg="backgrounds.main">{children}</chakra.main>
      <Divider />
      <Footer />
    </div>
  );
}
