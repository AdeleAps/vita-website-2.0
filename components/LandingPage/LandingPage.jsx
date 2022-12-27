import React from "react";
import styles from "./LandingPage.module.scss";
import Intro from "./Intro/Intro";
import PinkSection from "./PinkSection/PinkSection";
const LandingPage = () => {
  return (
    <div className="landingPage">
      <Intro />
      <PinkSection />
    </div>
  );
};

export default LandingPage;
