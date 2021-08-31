import type { GetStaticProps, NextPage } from "next";
import { BeerContainer } from "@/containers/BeerContainer";
import { Beer } from "@/utils/types";
import { initializeStore } from "@/configs/store";
import { getBeerById, getRecomendedBeers } from "src/actions/beerActions";

const api = process.env.NEXT_PUBLIC_PUNK_API || "";

const Home: NextPage = () => {
  return <BeerContainer />;
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
        console.log("beer", reduxStore.getState());
        await dispatch(getRecomendedBeers(beer.ingredients.hops[0].name));
        return { props: { initialReduxState: reduxStore.getState() } };
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
