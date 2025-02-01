import React from "react";
import styles from "./PricingPage.module.scss";

const PricingPage = () => {
  return (
    <div className={styles.pricingPage}>
      <div className={styles.container}>
        <ul className={styles["responsive-table"]}>
          <li className={styles["table-header"]}>
            <div className={`${styles.col} ${styles["col-1"]}`}>
              Pakalpojums
            </div>
            <div className={`${styles.col} ${styles["col-2"]}`}>Apraksts</div>
            <div className={`${styles.col} ${styles["col-3"]}`}>Cena</div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Smilšu spēles terapija
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="Apraksts"
            >
              Notiek vienu reizi nedēļā. <br /> Sesijas ilgums - 45 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
              <div>
                <span className={styles.priceWrapper}>
                  <strong>70 € </strong>
                  <span> ievadkonsultācija </span>
                </span>
                <span className={styles.priceWrapper}>
                  <strong>60 € </strong>
                  <span> sesija</span>
                </span>
              </div>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Individuāla psihoterapija
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="Apraksts"
            >
              Notiek vienu reizi nedēļā. <br /> Sesijas ilgums - 50 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
              <div>
                <span className={styles.priceWrapper}>
                  <strong>70 €</strong>
                  <span>sesija</span>
                </span>
              </div>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Pāru terapija
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="Apraksts"
            >
              Notiek vienu reizi nedēļā. <br /> Sesijas ilgums - 50 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
              <div>
                <span className={styles.priceWrapper}>
                  <strong>80 €</strong>
                  <span>sesija</span>
                </span>
              </div>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Traumu jeb EMDR terapija
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="Apraksts"
            >
              Notiek vienu reizi nedēļā. <br /> Sesijas ilgums - 90 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
              <div>
                <span className={styles.priceWrapper}>
                  <strong>90 €</strong>
                  <span>sesija</span>
                </span>
              </div>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Baha ziedu terapija
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="Apraksts"
            >
              Sesijas ilgums - 45 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
              <div>
                <span className={styles.priceWrapper}>
                  <strong>70 €</strong>
                  <span>sesija</span>
                </span>
                <span className={styles.priceWrapper}>
                  <strong>5 €</strong>
                  <span> individuāla maisījuma pagatavošana</span>
                </span>
              </div>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Teraspēle jeb terapeitiskās spēles bērnam un vecākiem
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="Apraksts"
            >
              Notiek vienu reizi nedēļā. <br /> Sesijas ilgums - 45 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
              <div>
                <span className={styles.priceWrapper}>
                  <strong>70 €</strong>
                  <span>sesija</span>
                </span>
              </div>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Psiholoģiskā izpēte un atzinuma sagatavošana
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="Apraksts"
            >
              Izpētē iegūto rezultātu apstrāde, rakstiska  <br /> atzinuma sagatavošana, rezultāta mutisks skaidrojums.
              Izpētes ilgums –  <br /> anamnēzes ievākšana 1 stunda, testēšana 2 stundas.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
              <div>
                <span>
                  <strong>150 - 200 €   </strong>
                  <span>sesija</span>
                </span>
              </div>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Maršaka interakciju metode (MIM)
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="Apraksts"
            >
             Vecāku un bērna saskarsmes diagnostika filmējot. 
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
              <div>
                <span className={styles.priceWrapper}>
                  <strong>200 €</strong>
                  <span>sesija</span>
                </span>
              </div>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
             Bērnu attīstības diagnostika ar Minhenes testu
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="Apraksts"
            >
             Maziem bērniem (12 - 8 mēn.)
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
              <div>
                <span className={styles.priceWrapper}>
                  <strong>200 €</strong>
                  <span>sesija</span>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PricingPage;
