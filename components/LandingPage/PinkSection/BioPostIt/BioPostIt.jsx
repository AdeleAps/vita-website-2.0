import React from "react";
import styles from "./BioPostIt.module.scss";

const BioPostIt = () => {
  return (
    <section className={styles.bioNote}>
      <div>
        <img src="/images/bio.jpg" alt="" />
      </div>
      <div>
        <h5>Vita Apsīte, Mg.psych.</h5>
        <p>
          "Nu jau divdesmito gadu strādāju par psihologu, jau vairākus gadus
          esmu sistēmiskā psihoterapeite, kaut arī psihoterapeitiskās metodes
          konsultēšanā esmu izmantojusi visu laiku. Tagad strādāju privātpraksē
          ar individuāliem klientiem un ģimenēm.
        </p>
        <p>
          Esmu pateicīga saviem klientiem - tik dažādiem, ar dažādām dvēseles
          sāpēm. Esmu pateicīga, ka man ir bijis ļauts būt klāt dvēseles
          dziedēšanas skaistajam brīnumam, kas nāk caur stāstiem, atmiņām,
          dažkārt asarām, piedošanu, pieņemšanu, saprašanu un jaunām atklāsmēm."
        </p>
      </div>
    </section>
  );
};

export default BioPostIt;
