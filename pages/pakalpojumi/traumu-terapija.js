import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";

const TraumuTerapija = (props) => {
  return (
    <WebpageLayout
      openMobileNav={props.openMobileNav}
      setMobileNav={props.setMobileNav}
      setOpenFormModal={props.setOpenFormModal}
    >
      <div>Traumu terapija page</div>
    </WebpageLayout>
  );
};

export default TraumuTerapija;
