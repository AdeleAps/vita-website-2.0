import React from "react";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";

const Maksa = (props) => {
  return (
    <WebpageLayout
      openMobileNav={props.openMobileNav}
      setMobileNav={props.setMobileNav}
      setOpenFormModal={props.setOpenFormModal}
    >
      <div>Maksas page</div>
    </WebpageLayout>
  );
};

export default Maksa;
