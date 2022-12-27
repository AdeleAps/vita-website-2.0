import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        Lai pieteiktos uz konsultācijām, <strong>zvaniet</strong> pa tālruni
        29549969, <a href="mailto:vita.psihologs@gmail.com"><strong>rakstiet</strong></a> e-pastā vai{" "}
        <a href=""><strong>aizpildiet</strong></a> pieteikumu šajā mājaslapā.
      </div>
      <div> © Vita Apsīte 2023</div>
      <a className={styles.email} href="mailto:vita.psihologs@gmail.com">vita.psihologs@gmail.com</a>
    </footer>
  );
};

export default Footer;
