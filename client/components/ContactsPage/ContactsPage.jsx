import styles from "./ContactsPage.module.scss";
import Map from "./Map/Map";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactsPage = (props) => {

  return (
    <div className={styles.contactsPageContainer}>
      <div className={styles.contactsPage}>
        <div className={styles.info}>
          <h2>Kontakti</h2>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>Telefons</div>
            <div className={styles.gridItem}>+371 29549969</div>
            <div className={styles.gridItem}>E-pasts</div>
            <div className={styles.gridItem}>
              <a href="mailto:vita.psihologs@gmail.com">
                vita.psihologs@gmail.com
              </a>
            </div>
            <div className={styles.gridItem}>Adrese</div>
            <div className={styles.gridItem}>
              <p>Rīga, Tallinas iela 95, 213. kabinets</p>
              <p>
                Orientieri: blakus mājā atrodas Rīgas Stradiņa universitātes
                Sarkanā Krusta medicīnas koledža, gandrīz pretī (ielas pretējā
                pusē) - Rīgas Kristīgā vidusskola.
              </p>
            </div>
            <div className={styles.gridItem}>Kā nokļūt?</div>
            <div className={styles.gridItem}>
              <p>Tuvākais sabiedriskais transports ir:</p>
              <p>
                5., 11., 13., 22. trolejbuss, 3., 6., 13., 47., 50., 51. un 52.
                autobuss.
              </p>
            </div>
            <div className={styles.gridItem}>Stāvvieta</div>
            <div className={styles.gridItem}>
              Pie ēkas ir maksas autostāvvieta, taču reģistrējoties, par to nav
              jāmaksā.
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <LazyLoadImage
            effect="blur"
            src="/images/contacts-page/contacts-page-hero.webp"
          />
        </div>
      </div>
      <div className={styles.map}>
        <Map />
      </div>
    </div>
  );
};

export default ContactsPage;
