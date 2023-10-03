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
            <div className={`${styles.col} ${styles["col-2"]}`}>Ilgums</div>
            <div className={`${styles.col} ${styles["col-3"]}`}>Cena</div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Smilšu terapija
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="ILGUMS"
            >
              45 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
              <div>
                <span className={styles.priceWrapper}>
                  <strong>
                  50 € </strong>
                  <span> ievadkonsultācija </span>
                  
                </span>
                <span className={styles.priceWrapper}>
                <strong>
                  35 € </strong>
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
              Traumu terapija - EMDR metode
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="ILGUMS"
            >
              90 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
                 <span className={styles.priceWrapper}>
                  <strong>
                  50 € 
                  </strong>
                  <span> ievadkonsultācija </span>
                  
                </span>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Traumu terapija - EMDR metode
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="ILGUMS"
            >
              90 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
                <span className={styles.priceWrapper}>
                  <strong>
                  50 € 
                  </strong>
                  <span> ievadkonsultācija </span>
                  
                </span>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Traumu terapija - EMDR metode
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="ILGUMS"
            >
              90 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
                 <span className={styles.priceWrapper}>
                  <strong>
                  50 € 
                  </strong>
                  <span> ievadkonsultācija </span>
                  
                </span>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Traumu terapija - EMDR metode
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="ILGUMS"
            >
              90 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
                 <span className={styles.priceWrapper}>
                  <strong>
                  50 € 
                  </strong>
                  <span> ievadkonsultācija </span>
                  
                </span>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Traumu terapija - EMDR metode
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="ILGUMS"
            >
              90 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
                <span className={styles.priceWrapper}>
                  <strong>
                  50 € 
                  </strong>
                  <span> ievadkonsultācija </span>
                  
                </span>
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="PAKALPOJUMS"
            >
              Traumu terapija - EMDR metode
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="ILGUMS"
            >
              90 min.
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="CENA"
            >
                <span className={styles.priceWrapper}>
                  <strong>
                  50 € 
                  </strong>
                  <span> ievadkonsultācija </span>
                  
                </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PricingPage;
