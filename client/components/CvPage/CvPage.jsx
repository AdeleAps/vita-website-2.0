import React from "react";
import styles from "./CvPage.module.scss";
import ExperienceBlock from "./ExperienceBlock/ExperienceBlock";

const CvPage = (props) => {
  return (
    <div className={styles.cvPage}>
      <div className={styles.intro}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className={styles.experienceBlockContainer}>
        {props.experience.map((block, index) => (
          <ExperienceBlock key={index} props={props.experience[index]} />
        ))}
      </div>
    </div>
  );
};

export default CvPage;
