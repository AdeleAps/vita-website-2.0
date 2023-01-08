import React from "react";
import styles from "./CvPage.module.scss";
import ExperienceBlock from "./ExperienceBlock/ExperienceBlock";

const CvPage = (props) => {
  return (
    <div className={styles.cvPage}>
      <div
        style={{ backgroundImage: props.backgroundImage }}
        className={styles.introContainer}
      >
        <div className={styles.intro}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
      {props.experience.map((block, index) => (
        <ExperienceBlock className={index % 2 === 1 && "reverse"} key={index} props={props.experience[index]} />
      ))}
    </div>
  );
};

export default CvPage;
