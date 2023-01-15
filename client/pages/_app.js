import "../styles/globals.scss";
import { useState } from "react";
import PopupForm from "../components/PopupForm/PopupForm";
import PopupFeedback from "../components/PopupFeedback/PopupFeedback";

function MyApp({ Component, pageProps }) {
  const [openMobileNav, setMobileNav] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [feebackPopup, setOpenFeedbackPopup] = useState(false);
  const [name, setName] = useState();

  return (
    <>
      <Component
        openMobileNav={openMobileNav}
        setMobileNav={setMobileNav}
        openFormModal={openFormModal}
        setOpenFormModal={setOpenFormModal}
        setOpenFeedbackPopup={setOpenFeedbackPopup}
        feebackPopup={feebackPopup}
        setName={setName}
        {...pageProps}
      />
      <PopupForm
        openFormModal={openFormModal}
        setOpenFormModal={setOpenFormModal}
        feebackPopup={feebackPopup}
        setOpenFeedbackPopup={setOpenFeedbackPopup}
        setName={setName}

      />
      <PopupFeedback
        feebackPopup={feebackPopup}
        setOpenFeedbackPopup={setOpenFeedbackPopup}
        name={name}
      />
    </>
  );
}

export default MyApp;
