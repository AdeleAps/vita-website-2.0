import React from "react";
import Intro from "./Intro/Intro";
import PinkSection from "./PinkSection/PinkSection";
const LandingPage = (props) => {

  return (
    <div>
      <Intro setOpenFormModal={props.setOpenFormModal}  />
      <PinkSection />
    </div>
  );
};

export default LandingPage;
