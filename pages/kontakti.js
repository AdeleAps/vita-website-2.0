import React from "react";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";

const Kontakti = (props) => {
  return (
    <WebpageLayout
      openMobileNav={props.openMobileNav}
      setMobileNav={props.setMobileNav}
      setOpenFormModal={props.setOpenFormModal}
    >
      <div>Kontakti page</div>
    </WebpageLayout>
  );
};

export default Kontakti;
