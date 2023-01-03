import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";

const Theraplay = (props) => {
  return (
    <WebpageLayout
      openMobileNav={props.openMobileNav}
      setMobileNav={props.setMobileNav}
      setOpenFormModal={props.setOpenFormModal}
    >
      <div>Theraplay page</div>
    </WebpageLayout>
  );
};

export default Theraplay;
