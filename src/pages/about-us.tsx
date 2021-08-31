import type { NextPage } from "next";
import Head from "next/head";
import { AboutContainer } from "@/containers/AboutContainer";

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="style"
          href=""
          // @ts-ignore
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          />
        </noscript>
      </Head>
      <AboutContainer />
    </>
  );
};

export default AboutUs;
