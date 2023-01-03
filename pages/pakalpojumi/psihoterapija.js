import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";

const Psihoterapija = (props) => {
  return (
    <WebpageLayout
      openMobileNav={props.openMobileNav}
      setMobileNav={props.setMobileNav}
      setOpenFormModal={props.setOpenFormModal}
    >
      <div>Ģimenes psihoterapija page</div>
    </WebpageLayout>
  );
};

export default Psihoterapija;
