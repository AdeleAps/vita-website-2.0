import Head from "next/head";
import LandingPage from "../components/LandingPage/LandingPage";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";
import { useState } from "react";
import PopupForm from "../components/PopupForm/PopupForm";

export default function Home() {
  const [openMobileNav, setMobileNav] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);

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
        openMobileNav={openMobileNav}
        setMobileNav={setMobileNav}
        setOpenFormModal={setOpenFormModal}
      >
        <LandingPage />
      </WebpageLayout>
      <PopupForm openFormModal={openFormModal} setOpenFormModal={setOpenFormModal} />
    </div>
  );
}
