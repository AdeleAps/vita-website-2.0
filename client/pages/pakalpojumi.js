import React from "react";
import WebpageLayout from "./../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "./../components/reusables/WebsiteHead/WebsiteHead";
import ServicePage from "./../components/ServicePage/ServicePage";
import { getServiceData } from "./../data/service-page/getServiceData"

const Pakalpojumi = (props) => {

  return (
    <>
      <WebsiteHead title="Vita Apsīte - Pakalpojumi" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <ServicePage {...getServiceData()} />
      </WebpageLayout>
    </>
  );
};

export default Pakalpojumi;
