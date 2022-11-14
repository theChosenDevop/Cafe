import Head from "next/head";
import Image from "next/image";
import Featured from "../Components/Featured";
import PizzaList from "../Components/PizzaList";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Pizza Restaurant In Lagos</title>
        <meta
          name="description"
          content="Best Pizza shop in Central Business District"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Featured /> */}
      <PizzaList />
    </div>
  );
}
