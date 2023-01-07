import React from "react";
import styles from "./ExperienceBlock.module.scss";

const ExperienceBlock = (props) => {
  return (
    <section className={styles.experienceBlock}>
      <div>
        <ul>
          {props.props.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={props.props.photo} alt="" />
      </div>
    </section>
  );
};

export default ExperienceBlock;
