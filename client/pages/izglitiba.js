import React from "react";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";
import CvPage from "../components/CvPage/CvPage";
import { getEducationData } from "../data/cv-page/getEducation";
import WebsiteHead from "../components/reusables/WebsiteHead/WebsiteHead";

const Izglitiba = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Izglītība" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <CvPage {...getEducationData()} />
      </WebpageLayout>
    </>
  );
};

export default Izglitiba;
