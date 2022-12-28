import Head from "next/head";
import LandingPage from "../components/LandingPage/LandingPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Psiholoģe Vita Apsīte</title>
        <meta name="description" content="Psiholoģes Vitas Apsītes mājaslapa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  );
}
