import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../../components/reusables/WebsiteHead/WebsiteHead";

const Psihoterapija = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Psihoterapija" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <div>Ģimenes psihoterapija page</div>
      </WebpageLayout>
    </>
  );
};

export default Psihoterapija;
