import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";

const SmilsuSpeles = (props) => {
  return (
    <WebpageLayout
      openMobileNav={props.openMobileNav}
      setMobileNav={props.setMobileNav}
      setOpenFormModal={props.setOpenFormModal}
    >
      <div>Smilšu spēles page</div>
    </WebpageLayout>
  );
};

export default SmilsuSpeles;
