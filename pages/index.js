import Head from "next/head";
import LandingPage from "../components/LandingPage/LandingPage";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Psiholoģe Vita Apsīte</title>
        <meta
          name="description"
          content="Psiholoģes Vitas Apsītes privātprakse"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <LandingPage setOpenFormModal={props.setOpenFormModal} />
      </WebpageLayout>
    </div>
  );
}
