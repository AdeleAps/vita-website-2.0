import React from "react";
import WebpageLayout from "../../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../../components/reusables/WebsiteHead/WebsiteHead";
import ServicePage from "../../components/ServicePage/ServicePage";
import { getServiceData } from "../../data/service-page/getServiceData"

const Diagnostika = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Diagnostika" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <ServicePage {...getServiceData().diagnostika} />
      </WebpageLayout>
    </>
  );
};

export default Diagnostika;
