import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../../components/reusables/WebsiteHead/WebsiteHead";

const Theraplay = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Theraplay®" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <div>Theraplay page</div>
      </WebpageLayout>
    </>
  );
};

export default Theraplay;
