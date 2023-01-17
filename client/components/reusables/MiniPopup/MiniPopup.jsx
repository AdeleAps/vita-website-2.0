import React from "react";
import styles from "./MiniPopup.module.scss";

const MiniPopup = (props) => {

  return (
      <button onClick={props.onClick} className={styles.miniPopup}>
        {props.children}
      </button>
  );
};

export default MiniPopup;
