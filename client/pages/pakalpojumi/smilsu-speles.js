import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../../components/reusables/WebsiteHead/WebsiteHead";

const SmilsuSpeles = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Smilšu Spēle" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <div>Smilšu spēles page</div>
      </WebpageLayout>
    </>
  );
};

export default SmilsuSpeles;
