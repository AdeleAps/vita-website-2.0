import React, { useEffect } from "react";
import styles from "./Service.module.scss";
import { motion } from "framer-motion";

const Service = (props) => {
  const listItem = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "linear",
      },
    },
  };
  return (
    <motion.div className={styles.service} variants={listItem}>
      <div>
        <img src={props.src} />
      </div>
      <div>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </motion.div>
  );
};

export default Service;
