import React from "react";
import styles from "./ServiceCard.module.scss";
import Button from "../../reusables/Button/Button";
import Link from "next/link";
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
  };

  const listItemIconVariant = (variant) => {
    if (variant % 2 === 0) {
      return 'url("/images/services-icons/icon-1.svg")';
    } else {
      return 'url("/images/services-icons/icon-2.svg")';
    }
  };

  return (
    <motion.div
      style={{ backgroundImage: listItemIconVariant(props.index) }}
      variants={listItem}
      className={styles.serviceCard}
    >
      <Link href={`/pakalpojumi#${props.slug}`}>
        <div className={styles.description}>
          <h3>{props.title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
