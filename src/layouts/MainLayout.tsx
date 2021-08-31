import Head from "next/head";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Divider } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/react";
const Footer = dynamic<{}>(
  import("@/components/Footer").then((mod) => mod.Footer)
);
interface MainLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export default function MainLayoutProps({ children }: MainLayoutProps) {
  return (
    <div>
      <Head>
        <title>Beer Of Tomorrow</title>
        <meta name="description" content="Beer Of Tomorrow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <chakra.main bg="backgrounds.main">{children}</chakra.main>
      <Divider />
      <Footer />
    </div>
  );
}
