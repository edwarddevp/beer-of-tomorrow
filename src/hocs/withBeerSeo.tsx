import { Beer } from "@/utils/types";
import { ProductJsonLd } from "next-seo";

export const withBeerSeo = (Component: Function, beer: Partial<Beer>) => (
  <>
    <ProductJsonLd
      productName={beer?.name || ""}
      images={[beer?.image_url || ""]}
      description={beer?.description || ""}
      brand={"Beer of Tomorrow"}
      color={"Big Dip Oruby"}
      material={"steel"}
      slogan={beer?.tagline || ""}
      releaseDate={beer?.first_brewed || ""}
    />
    <Component />
  </>
);
