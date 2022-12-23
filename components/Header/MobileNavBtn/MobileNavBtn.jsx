import React from "react";
import styles from "./MobileNavBtn.module.scss";

const MobileNavBtn = (props) => {
  return (
    <button onClick={props.onClick} className={styles.mobileNavBtn}>
      <div className={styles[`${props.className}`]}></div>
      <div className={styles[`${props.className}`]}></div>
      <div className={styles[`${props.className}`]}></div>
    </button>
  );
};

export default MobileNavBtn;
