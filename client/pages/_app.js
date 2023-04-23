import "../styles/globals.scss";
import { useState, useEffect } from "react";
import PopupForm from "../components/PopupForm/PopupForm";
import PopupFeedback from "../components/PopupFeedback/PopupFeedback";
import { ErrorStateContext } from "../store/ErrorStateContext";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const [openMobileNav, setMobileNav] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [feebackPopup, setOpenFeedbackPopup] = useState(false);
  const [name, setName] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    const handleError = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleError);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleError);
    };
  }, []);

  return (
    <ErrorStateContext.Provider value={{ error, setError }}>
      {loading ? (
        <LoadingPage />
      ) : (
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
      )}
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
    </ErrorStateContext.Provider>
  );
}

export default MyApp;
