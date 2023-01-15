import React from "react";
import styles from "./ServiceCard.module.scss";
import Button from "../../reusables/Button/Button";
import Link from "next/link"

const ServiceCard = (props) => {

  console.log(props);

  return (
    <div className={styles.serviceCard}>
      <div>
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className={styles.description}>
        <h3>{props.title}</h3>
        <Link href={`/pakalpojumi/${props.slug}`}>
          <Button className="serviceCardBtn">skatīt</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
