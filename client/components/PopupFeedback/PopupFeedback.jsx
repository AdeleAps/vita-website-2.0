import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../reusables/PopupModal/Modal/Modal";
import styles from "./PopupFeedback.module.scss";
import { ErrorStateContext } from "../../store/ErrorStateContext";

const PopupFeedback = (props) => {
  const { error, setError } = useContext(ErrorStateContext);
  const name = <span className={styles.name}>{props.name}</span>;
  const mainText = <p>Paldies, {name}. Jūsu pieteikums ir nosūtīts.</p>;
  const errorText = (
    <p>
      Servera kļūda - pieteikums nav nosūtīts. Lūdzu, piesakieties pa tālruni
      vai rakstot e-pastā.
    </p>
  );

  return (
    <AnimatePresence intial={false} mode={"wait"} onExitComplete={() => null}>
      {props.feebackPopup && (
        <Modal
          closeButtonClass="feedbackCloseBtn"
          onClick={() => {
            props.setOpenFeedbackPopup(false);
            setError(false);
          }}
        >
          <div className={styles.popupFeedback}>{error ? errorText : mainText}</div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default PopupFeedback;
