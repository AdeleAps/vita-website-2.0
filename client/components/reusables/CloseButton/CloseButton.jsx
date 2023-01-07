import React from "react";
import styles from "./CloseButton.module.scss";
import { motion } from "framer-motion";

const CloseButton = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${styles.closeButton} ${
        props.className ? styles[className] : ""
      }`}
    >
      <motion.img
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.3, transition: { duration: 0.1 } }}
        src="/svg/close.svg"
        alt="Close button"
      />
    </button>
  );
};

export default CloseButton;
