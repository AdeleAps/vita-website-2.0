import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../../components/reusables/WebsiteHead/WebsiteHead";

const Diagnostika = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Diagnostika" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <div>Diagnostika page</div>
      </WebpageLayout>
    </>
  );
};

export default Diagnostika;
