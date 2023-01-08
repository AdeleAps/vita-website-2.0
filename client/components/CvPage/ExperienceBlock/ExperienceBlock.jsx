import React from "react";
import styles from "./ExperienceBlock.module.scss";

const ExperienceBlock = (props) => {
  const listItems = props.props.listItems.map((item, index) => (
    <li key={index}>
      <span>
        <img src="/icons/checkmark.png" alt="" />
      </span>
      <span>{item}</span>
    </li>
  ));

  return (
    <section className={`${styles.experienceBlock} ${styles[props.className]}`}>
      <div className={styles.timeLine}>
        <ul>{listItems}</ul>
      </div>
      <div>
        <div
          style={{ transform: props.props.photoRotation }}
          className={styles.polaroid}
        >
          <img src={props.props.photo} alt={props.props.photoAltText} />
          <figcaption>{props.props.photoAltText}</figcaption>
        </div>
      </div>
    </section>
  );
};

export default ExperienceBlock;
