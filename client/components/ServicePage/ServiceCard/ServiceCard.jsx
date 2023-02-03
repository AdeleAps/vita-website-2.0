import React from "react";
import styles from "./ServiceCard.module.scss";
import Button from "../../reusables/Button/Button";
import Link from "next/link"
import { motion } from "framer-motion";

const ServiceCard = (props) => {

  const listItem = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "linear",
      },
    },
  }

  return (
    <motion.div variants={listItem} className={styles.serviceCard}>
      <div>
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className={styles.description}>
        <h3>{props.title}</h3>
        <Link href={`/pakalpojumi/${props.slug}`}>
          <Button className="serviceCardBtn">skatīt</Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
