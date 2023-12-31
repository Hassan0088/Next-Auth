import Head from "next/head";
import Main from "./Main";
import MainContent from "./MainContent";
export default function Home() {
  return (
    <>
      <Head>
        <title>TechProject</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent />
    </>
  );
}