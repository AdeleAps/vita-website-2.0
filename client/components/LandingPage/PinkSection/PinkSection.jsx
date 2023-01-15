import React from "react";
import BioPostIt from "./BioPostIt/BioPostIt";
import LandingFormSection from "./LandingFormSection/LandingFormSection";
import styles from "./PinkSection.module.scss";
import ServicesList from "./ServicesList/ServicesList";

const PinkSection = (props) => {
  return (
    <div className={styles.pinkSection}>
      <ServicesList />
      <BioPostIt />
      <LandingFormSection
        feebackPopup={props.feebackPopup}
        setOpenFeedbackPopup={props.setOpenFeedbackPopup}
        setName={props.setName}
        submitBtn={styles.submitBtn}
      />
    </div>
  );
};

export default PinkSection;
