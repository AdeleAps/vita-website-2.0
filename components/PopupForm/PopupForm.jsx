import React from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../reusables/PopupModal/Modal/Modal";
import EmailForm from "../reusables/Form/EmailForm";
import styles from "./PopupForm.module.scss";

const PopupForm = (props) => {
  return (
    <AnimatePresence intial={false} mode={"wait"} onExitComplete={() => null}>
      {props.openFormModal && (
        <Modal
          onClick={() => {
            props.setOpenFormModal(false);
          }}
        >
          <div className={styles.popupForm}>
            <p>
              Piesakieties, zvanot pa tālruni <span>29549969</span>, rakstot uz
              epastu{" "}
              <span>
                <a href="mailto:vita.psihologs@gmail.com">
                  vita.psihologs@gmail.com
                </a>
              </span>{" "}
              vai aizpildot šo <span>pieteikumu</span>.
            </p>
            <EmailForm popUpForm="popUpForm" submitBtn="submitBtnPopup" />
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
