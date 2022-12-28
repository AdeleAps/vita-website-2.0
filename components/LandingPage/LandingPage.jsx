import React from "react";
import styles from "./LandingPage.module.scss";
import Intro from "./Intro/Intro";
import PinkSection from "./PinkSection/PinkSection";
const LandingPage = (props) => {
  return (
    <div className={styles.landingPage}>
      <Intro />
      <PinkSection />
    </div>
  );
};

export default LandingPage;
