import React from "react";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../components/reusables/WebsiteHead/WebsiteHead";

const Kontakti = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Kontakti" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <div>Kontakti page</div>
      </WebpageLayout>
    </>
  );
};

export default Kontakti;
