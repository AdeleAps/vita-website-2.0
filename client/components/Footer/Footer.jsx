import React from "react";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div>
        Lai pieteiktos uz konsultācijām, <strong>zvaniet</strong> pa tālruni
        29549969,{" "}
        <a href="mailto:vita.psihologs@gmail.com">
          <strong>rakstiet</strong>
        </a>{" "}
        e-pastā vai
        <a
          onClick={() => {
            props.setOpenFormModal(true);
          }}
        >
          <strong> aizpildiet </strong>
        </a>
        pieteikumu.
      </div>
      <div>
        <span> © Vita Apsīte 2023 </span>
        <a className={styles.email} href="mailto:vita.psihologs@gmail.com">
          vita.psihologs@gmail.com
        </a>
      </div>
      <div className={styles.portfolioLinks}>
        <span>
          <a  href="">
            WEB IZSTRĀDE
          </a>
        </span>
        <span>
          <a href="">
            DIZAINS
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
