import React from "react";
import { motion } from "framer-motion";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import styles from "./Modal.module.scss";
import CloseButton from "../../CloseButton/CloseButton";

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "fadeIn",
    },
  },
  exit: {
    opacity: 0,
  },
};

const Modal = (props) => {
  return (
    <ModalBackdrop onClick={props.onClick}>
      <motion.div
        className={styles.modal}
        onClick={(event) => {
          event.stopPropagation();
        }}
        variants={dropIn}
        initial={dropIn.hidden}
        animate={dropIn.visible}
        exit={dropIn.exit}
      >
        <CloseButton onClick={props.onClick} />
        {props.children}
      </motion.div>
    </ModalBackdrop>
  );
};

export default Modal;
