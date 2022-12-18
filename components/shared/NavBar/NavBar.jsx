import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav id={styles["navigation"]}>
      <ul className={styles["ul-top-level"]}>
        <li className={styles["izglitiba-top"]}>
          <a className={styles["link"]}>Izglītība/pieredze &#9662;</a>
          <ul className={styles["izglitiba-sub subsection"]}>
            <li>
              <a className={styles.link} href="./izglitiba.html">
                Izglītība/sertifikācija
              </a>
            </li>
            <li>
              <a className={styles["link"]} href="./pecdiploma-izglitiba.html">
                Pēcdiploma izglītība
              </a>
            </li>
            <li>
              <a className={styles["link"]} href="./darba-pieredze.html">
                Darba pieredze
              </a>
            </li>
          </ul>
        </li>

        <li className={styles["pakalpojumi-top"]}>
          <a className={styles["link"]}>Pakalpojumi &#9662;</a>
          <ul className={styles["pakalpojumi-sub subsection link"]}>
            <li>
              <a
                className={styles["link"]}
                href="./pakalpojumi-html/gimenes-psihoterapija.html"
              >
                Sistēmiskā ģimenes psihoterapija
              </a>
            </li>
            <li>
              <a
                className={styles["link"]}
                href="./pakalpojumi-html/smilsu-spelu-terapija.html"
              >
                Smilšu spēles terapijas
              </a>
            </li>
            <li>
              <a
                className={styles["link"]}
                href="./pakalpojumi-html/traumu-terapija.html"
              >
                Traumu terapija - EMDR metode
              </a>
            </li>
            <li>
              <a
                className={styles["link"]}
                href="./pakalpojumi-html/teraspele.html"
              >
                Teraspēle
              </a>
            </li>
            <li>
              <a
                className={styles["link"]}
                href="./pakalpojumi-html/marte-meo.html"
              >
                Marte Meo terapija
              </a>
            </li>
            <li>
              <a
                className={styles["link"]}
                href="./pakalpojumi-html/diagnostika.html"
              >
                Psiholoģiskā diagnostika
              </a>
            </li>
            <li>
              <a
                className={styles["link"]}
                href="./pakalpojumi-html/grupu-nodarbibas.html"
              >
                Grupu nodarbības
              </a>
            </li>

            <li>
              <a
                className={styles["link"]}
                href="./pakalpojumi-html/attistotas-nodarbibas.html"
              >
                Attīstošās nodarbības bērniem
              </a>
            </li>
            <li>
              <a
                className={styles["link"]}
                href="./pakalpojumi-html/baha-ziedi.html"
              >
                Baha ziedu terapija
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a className={styles["link"]}>Maksa</a>
        </li>
        <li>
          <a className={styles["link"]}>Kontakti</a>
        </li>
        <li className={styles["blogs-top"]}>
          <a className={styles["link"]}>Blogs &#9662;</a>
          <ul className="blogs-sub subsection">
            <li>
              <a className={styles["link"]} href="#">
                Grāmatas
              </a>
            </li>
            <li>
              <a className={styles["link"]} href="#">
                Mūzika
              </a>
            </li>
            <li>
              <a className={styles["link"]} href="#">
                Dzīvnieku terapija
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
