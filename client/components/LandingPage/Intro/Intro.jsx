import React from "react";
import styles from "./Intro.module.scss";
import Button from "../../reusables/Button/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselStyles from "./Carousel.module.scss";

const Intro = (props) => {
  return (
    <main className={styles.intro}>
      <div className={styles.carouselWrapper}>
        <Carousel
          className={carouselStyles.carousel}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={10000}
          stopOnHover={false}
          infiniteLoop={true}
          showIndicators={false}
          aria-label="Privātprakses attēlu galerija"
          transitionTime={500}
        >
          <div>
            <img
              src="./images/intro-carousel/intro1.jpg"
              alt="Vitas Apsītes privātprakse."
            />
          </div>
          <div>
            <img
              src="./images/intro-carousel/intro2.jpg"
              alt="Vitas Apsītes privātprakse."
            />
          </div>
          <div>
            <img
              src="./images/intro-carousel/intro3.jpg"
              alt="Vitas Apsītes privātprakse."
            />
          </div>
        </Carousel>
      </div>
      <div className={styles.descriptionWrapper}>
      
       <h1>  Kur komforts satiekas <br/> ar rūpēm - Vitas Apsītes psiholoģijas privātpraksē
        </h1>
        <p>
          Sertificēta psiholoģe (izglītības un skolu, klīniskā un
          veselības, konsultatīvā psiholoģijā), Latvijas Smilšu spēles terapijas
          biedrības sertificēta praktizētāja kopš 2007. gada, Latvijas
          Psihoterapeitu biedrības sertificēta psihoterapijas speciāliste
          (ģimenes psihoterapija) kopš 2018. gada.
        </p>
        <Button
          onClick={() => {
            props.setOpenFormModal(true);
          }}
          type="button"
          className="introBtn"
        >
          Pieteikt vizīti
        </Button>
      </div>
    </main>
  );
};

export default Intro;
