import "../styles/globals.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [openMobileNav, setMobileNav] = useState(false);

  return (
    <>
      <Header openMobileNav={openMobileNav} setMobileNav={setMobileNav} />
      {!openMobileNav && (
        <>
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;
