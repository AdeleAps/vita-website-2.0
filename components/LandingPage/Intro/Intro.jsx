import React from "react";
import styles from "./Intro.module.scss"
import Button from '../../reusables/Button/Button';

const Intro = () => {
  return (
    <main className={styles.intro}>
      <img src="./images/intro.jpg" alt="" />
      <div>

    {/* TODO: Change font for this H1 */}
        <h1>Psihologa, ģimenes psihoterapijas speciālista privātprakse.</h1>
        <p>Esmu sertificēta psiholoģe (izglītības un skolu, klīniskā un veselības, konsultatīvā psiholoģijā), Latvijas Smilšu spēles terapijas biedrības sertificēta praktizētāja kopš 2007. gada, Latvijas Psihoterapeitu biedrības sertificēta psihoterapijas speciāliste (ģimenes psihoterapija) kopš 2018. gada.</p>
        <Button className="introBtn">Pieteikties</Button>
      </div>
    </main>
  );
};

export default Intro;
