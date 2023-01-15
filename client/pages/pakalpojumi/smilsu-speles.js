import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../../components/reusables/WebsiteHead/WebsiteHead";
import ServicePage from "../../components/ServicePage/ServicePage";
import { getServiceData } from "../../data/service-page/getServiceData"

const SmilsuSpeles = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Smilšu Spēle" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
       <ServicePage {...getServiceData().smilsuSpele} />
      </WebpageLayout>
    </>
  );
};

export default SmilsuSpeles;
