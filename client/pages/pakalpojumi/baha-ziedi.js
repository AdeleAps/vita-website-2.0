import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";

const Diagnostika = (props) => {
  return (
    <WebpageLayout
      openMobileNav={props.openMobileNav}
      setMobileNav={props.setMobileNav}
      setOpenFormModal={props.setOpenFormModal}
    >
      <div>Baha ziedi page</div>
    </WebpageLayout>
  );
};

export default Diagnostika;
