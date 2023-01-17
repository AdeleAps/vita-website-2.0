import React, { useState } from "react";
import styles from "./ContactsPage.module.scss";
import Map from "./Map/Map";
import MiniPopup from "../reusables/MiniPopup/MiniPopup";

const ContactsPage = (props) => {
  const [miniPopupOpen, setMiniPopupOpen] = useState(false);

  const copyNumber = () => {
    navigator.clipboard.writeText("29549969");
    setMiniPopupOpen(true);
  };

  const closeMiniPopup = () => {
    setMiniPopupOpen(false);
  };

  return (
    <div className={styles.contactsPage}>
      <div className={styles.info}>
        <p>
          Prakses vietas adrese ir{" "}
          <strong> Rīga, Tallinas iela 95, 213. kabinets</strong>.
        </p>
        <p>
          Orientieri: blakus mājā atradas Rīgas Stradiņa universitātes Sarkanā
          Krusta medicīnas koledža, gandrīz pretī (ielas pretējā pusē) - Rīgas
          Kristīgā vidusskola.
        </p>
        <p>
          Pie ēkas ir maksas autostāvvieta, taču, ja auto reģistrē pie manis,
          tad par to nav jāmaksā.
        </p>
        <p>
          Tuvākais sabiedriskais transports ir: 5., 11., 13., 22. trolejbuss,
          3., 6., 13., 47., 50., 51. un 52. autobuss.
        </p>
        <h4>
          Lai pieteiktos uz konsultācijām, zvaniet pa tālruni
          <span className={styles.number} onClick={copyNumber}>
            {" "}
            29549969
            {miniPopupOpen && (
              <MiniPopup
                onClick={() => {
                  closeMiniPopup();
                }}
              >
                Nokopēts
              </MiniPopup>
            )}
          </span>
          , aizpildiet
          <button
            onClick={() => {
              props.setOpenFormModal(true);
            }}
          >
            pieteikumu
          </button>
          vai rakstiet uz{" "}
          <a className={styles.email} href="mailto:vita.psihologs@gmail.com">
            vita.psihologs@gmail.com
          </a>
          .
        </h4>
      </div>
      <div className={styles.mapContainer}>
        <Map />
      </div>
    </div>
  );
};

export default ContactsPage;
