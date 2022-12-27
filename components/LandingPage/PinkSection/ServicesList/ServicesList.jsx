import React from "react";
import styles from "./ServicesList.module.scss";
import Service from "./Service/Service";

class ServiceClass {
  constructor(src, title, description) {
    this.src = src;
    this.title = title;
    this.description = description;
  }
}


// TODO: fix the round thumbnails, make them even
const Services = () => {
  const services = [
    new ServiceClass(
      "/images/service-icon-1.jpg",
      "Smilšu spēļu terapija",
      "Smilšu spēlē ar miniatūrām figūrām-simboliem cilvēka iekšējā pasaule kļūst redzama un var tikt sadziedēta."
    ),
    new ServiceClass(
      "/images/service-icon-2.jpg",
      "Ģimenes sistēmiskā terapija",
      "Ģimenes sistēmiskā terapija palīdz tās locekļiem izprast savas uzvedības iemeslus un atrast jaunus komunikācijas veidus."
    ),
    new ServiceClass(
      "/images/service-icon-3.jpg",
      "Traumu terapija - EMDR metode",
      "EMDR (Eye-Movement Desentization and Reprocessing) - desenbilizācija un psiholoģisko traumu pārstrāde, izmantojot acu kustības."
    ),
  ];

  return (
    <section className={styles.servicesList}>
      <h4>Pakalpojumi</h4>

      {/* TODO: Add a fadein effect on scroll for these */}
      {services.map((service, index) => (
        <Service
          src={service.src}
          title={service.title}
          description={service.description}
          key={index}
        />
      ))}
    </section>
  );
};

export default Services;
