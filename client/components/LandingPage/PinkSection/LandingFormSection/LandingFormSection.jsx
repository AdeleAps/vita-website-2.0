import React from "react";
import styles from "./LandingFormSection.module.scss";
import EmailForm from "../../../reusables/Form/EmailForm";

const LandingFormSection = (props) => {
  return (
    <div className={styles.landingFormSection}>
      <div className={styles.textContainer}>
        <h4>Piesakieties uz konsultāciju.</h4>
        <p>
          Aizpildiet pieteikuma anketu, sniedzot īsu aprakstu par konsultācijas
          iemeslu.
        </p>
      </div>
      <EmailForm
        submitBtn="submitBtn"
        feebackPopup={props.feebackPopup}
        setOpenFeedbackPopup={props.setOpenFeedbackPopup}
        setName={props.setName}
      />
    </div>
  );
};

export default LandingFormSection;
