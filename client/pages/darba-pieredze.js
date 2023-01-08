import React from "react";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";
import CvPage from "../components/CvPage/CvPage";
import { getJobExperienceData } from "../data/cv-page/getJobExperience";
import WebsiteHead from "../components/reusables/WebsiteHead/WebsiteHead";

const DarbaPieredze = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Darba Pieredze" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <CvPage {...getJobExperienceData()} />
      </WebpageLayout>
    </>
  );
};

export default DarbaPieredze;
