import React from "react";
import styles from "./ServiceCard.module.scss";
import Button from "../../reusables/Button/Button";

const ServiceCard = (props) => {
  return (
    <div className={styles.serviceCard}>
      <div>
        <img />
      </div>
      <div>
        <h3></h3>
        <p></p>
        <a href="">
          <Button />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
