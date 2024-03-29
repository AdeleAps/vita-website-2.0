import React from "react";
import styles from "./ExperienceBlock.module.scss";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ExperienceBlock = (props) => {
  const listItemContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      zIndex: 5,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const listItemVariant = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
      },
    },
  };

  const listItemIconVariant = (variant) => {
    if (variant % 2 === 0) {
      return "/images/services-icons/services-icon-1.png";
    } else {
      return "/images/services-icons/services-icon-2.png";
    }
  };

  const listItems = props.props.listItems.map((item, index) => (
    <motion.li variants={listItemVariant} key={index}>
      <span>
        <img src={listItemIconVariant(index)} alt="List icon" />
      </span>
      <span className={styles.listItemText}>{item}</span>
    </motion.li>
  ));

  return (
    <motion.section
      variants={props.experienceBlockVariant}
      initial="hidden"
      whileInView="inview"
      viewport={{ once: true }}
      className={`${styles.experienceBlock} ${styles[props.className]}`}
    >
      <div className={styles.timeLine}>
        <motion.ul
          variants={listItemContainerVariant}
          initial="hidden"
          animate="show"
        >
          {listItems}
        </motion.ul>
      </div>
      <div className={styles.polaroidContainer}>
        <div
          style={{ transform: props.props.photoRotation }}
          className={styles.polaroid}
        >
          <LazyLoadImage
            effect="blur"
            src={props.props.photo}
            alt={props.props.photoAltText}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceBlock;
