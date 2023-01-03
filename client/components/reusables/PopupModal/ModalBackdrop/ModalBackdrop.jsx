import React from "react";
import { motion } from "framer-motion";
import styles from "./ModalBackdrop.module.scss";

const ModalBackdrop = (props) => {
  return (
    <motion.div className={styles.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={props.onClick}
    >
      {props.children}
    </motion.div>
  );
};

export default ModalBackdrop;
