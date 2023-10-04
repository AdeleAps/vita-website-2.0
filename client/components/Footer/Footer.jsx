import React from "react";
import styles from "./Footer.module.scss";
import Button from "../reusables/Button/Button";
const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <div>
          <h3>
            Piesakieties <br /> konsultācijai
          </h3>
          <Button
            onClick={() => {
              props.setOpenFormModal(true);
            }}
            className="footer"
          >
            Pieteikt vizīti
            
          </Button>
        </div>
        <div className={styles.bottomText}>© Vita Apsīte 2023</div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.infoOuterWrapper}>
          <div className={styles.infoWrapper}>
            <span>Adrese</span>
            <span>Rīga, Tallinas iela 95, 213. kabinets</span>
          </div>
          <div className={styles.infoWrapper}>
            <span>Telefons</span>
            <span>+371 29549969</span>
          </div>
          <div className={styles.infoWrapper}>
            <span>E-pasts</span>
            <span>
              <a href="mailto:vita.psihologs@gmail.com">
                vita.psihologs@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className={styles.bottomText}>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/adele-aps%C4%ABte-81693b272/"
            >
              Web izstrāde
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/montakate"
            >
              Dizains
            </a>
          </span>
        </div>
      </div>
      <div className={styles.rightSection}>
        <img src="/svg/flower.svg" />
      </div>
    </footer>
  );
};

export default Footer;
