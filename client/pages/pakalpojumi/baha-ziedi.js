import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../../components/reusables/WebsiteHead/WebsiteHead";

const Diagnostika = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Baha Ziedi" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <div>Baha ziedi page</div>
      </WebpageLayout>
    </>
  );
};

export default Diagnostika;
