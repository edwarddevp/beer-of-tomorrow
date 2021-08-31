import { PageHeading } from "@/components/PageHeading";
import { Grid, Container } from "@chakra-ui/react";
import { AboutUsInfo } from "@/components/AboutUsInfo";
import * as styles from "./styles";
import dynamic from "next/dynamic";

const AboutUsMap = dynamic<{}>(
  import("@/components/AboutUsMap").then((mod) => mod.AboutUsMap),
  {
    ssr: false,
  }
);

export const AboutContainer = () => {
  return (
    <Container {...styles.container}>
      <PageHeading title="About Us" />
      <Grid templateColumns={["1fr", null, "1fr 2fr"]} gap={8}>
        <AboutUsInfo />
        <AboutUsMap />
      </Grid>
    </Container>
  );
};
