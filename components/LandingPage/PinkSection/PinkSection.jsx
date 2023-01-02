import React from "react";
import BioPostIt from "./BioPostIt/BioPostIt";
import LandingFormSection from "./LandingFormSection/LandingFormSection";
import styles from "./PinkSection.module.scss";
import ServicesList from "./ServicesList/ServicesList";

const PinkSection = () => {
  return (
    <div className={styles.pinkSection}>
      <ServicesList />
      <BioPostIt />
      <LandingFormSection submitBtn={styles.submitBtn}/>
    </div>
  );
};

export default PinkSection;
