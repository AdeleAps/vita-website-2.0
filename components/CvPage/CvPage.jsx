import React from "react";
import styles from "./CvPage.module.scss";

const CvPage = (props) => {
  return (
    <div className={styles.cvPage}>
      <div className={styles.intro}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default CvPage;
