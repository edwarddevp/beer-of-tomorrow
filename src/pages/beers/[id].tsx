import type { GetStaticProps, NextPage } from "next";
import { BeerContainer } from "@/containers/BeerContainer";
import { Beer } from "@/utils/types";
import { initializeStore, RootState } from "@/configs/store";
import { getBeerById, getRecomendedBeers } from "src/actions/beerActions";
import { useSelector } from "react-redux";
import { withBeerSeo } from "src/hocs/withBeerSeo";

const api = process.env.NEXT_PUBLIC_PUNK_API || "";

const Home: NextPage = () => {
  const beer = useSelector((state: RootState) => state.getBeers.beer);
  return withBeerSeo(BeerContainer, beer);
};

export async function getStaticPaths() {
  const res = await fetch(api);
  const posts = await res.json();

  const paths = posts.map((post: Beer) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.id) {
    try {
      const reduxStore = initializeStore();
      const { dispatch } = reduxStore;
      await dispatch(getBeerById(params.id));
      const beer = reduxStore.getState().getBeerById.data;
      if (beer?.id) {
        await dispatch(getRecomendedBeers(beer.ingredients.hops[0].name));
        return {
          props: { beer: beer, initialReduxState: reduxStore.getState() },
        };
      }
    } catch (e) {}
  }
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
  return { props: {} };
};

export default Home;
