import React from "react";
import PricingPage from "../components/PricingPage/PricingPage";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../components/reusables/WebsiteHead/WebsiteHead";

const Maksa = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Maksa"/>
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <PricingPage />
      </WebpageLayout>
    </>
  );
};

export default Maksa;
