import "../styles/globals.scss";
import { useState } from "react";
import PopupForm from "../components/PopupForm/PopupForm";

function MyApp({ Component, pageProps }) {
  const [openMobileNav, setMobileNav] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);
  return (
    <>
      <Component
        openMobileNav={openMobileNav}
        setMobileNav={setMobileNav}
        openFormModal={openFormModal}
        setOpenFormModal={setOpenFormModal}
        {...pageProps}
      />
       <PopupForm
        openFormModal={openFormModal}
        setOpenFormModal={setOpenFormModal}
      />
    </>
  );
}

export default MyApp;
