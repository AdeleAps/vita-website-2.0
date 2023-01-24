import React from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../reusables/PopupModal/Modal/Modal";
import styles from "./PopupFeedback.module.scss";
import { useAxios } from "../../utils/hooks/useAxios";

const PopupFeedback = (props) => {
  const { error } = useAxios();

  const name = <span className={styles.name}>{props.name}</span>;
  const mainText = <p>Paldies, {name}. Jūsu pieteikums ir nosūtīts.</p>;

  return (
    <AnimatePresence intial={false} mode={"wait"} onExitComplete={() => null}>
      {props.feebackPopup && (
        <Modal
          closeButtonClass="feedbackCloseBtn"
          onClick={() => {
            props.setOpenFeedbackPopup(false);
          }}
        >
          {error ? (
            <div>ERROR</div>
          ) : (
            <div className={styles.popupFeedback}>{mainText}</div>
          )}
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default PopupFeedback;
