import React from "react";
import Intro from "./Intro/Intro";
import PinkSection from "./PinkSection/PinkSection";
const LandingPage = (props) => {
  return (
    <div>
      <Intro setOpenFormModal={props.setOpenFormModal} />
      <PinkSection
        feebackPopup={props.feebackPopup}
        setOpenFeedbackPopup={props.setOpenFeedbackPopup}
        setName={props.setName}
      />
    </div>
  );
};

export default LandingPage;
