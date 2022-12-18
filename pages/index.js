import Head from "next/head";
import NavBar from "../components/shared/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Psiholoģe Vita Apsīte</title>
        <meta name="description" content="Psiholoģes Vitas Apsītes mājaslapa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>YOOOOOOO</main>

      <footer></footer>
    </div>
  );
}
