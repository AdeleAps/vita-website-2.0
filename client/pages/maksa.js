import React, { Fragment } from "react";
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
        <div>Maksas page</div>
      </WebpageLayout>
    </>
  );
};

export default Maksa;
