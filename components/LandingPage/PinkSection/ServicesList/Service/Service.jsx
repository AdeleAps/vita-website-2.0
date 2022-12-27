import React from "react";
import styles from "./Service.module.scss";

const Service = (props) => {
  return (
    <div className={styles.service}>
      <div>
        <img src={props.src} />
      </div>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  );
};

export default Service;
