import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../../components/reusables/WebsiteHead/WebsiteHead";

const TraumuTerapija = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Traumu Terapija" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <div>Traumu terapija page</div>
      </WebpageLayout>
    </>
  );
};

export default TraumuTerapija;
