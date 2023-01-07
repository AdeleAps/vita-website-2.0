import React from "react";
import styles from "./ServicesList.module.scss";
import Service from "./Service/Service";
import { motion } from "framer-motion";

class ServiceClass {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

const Services = () => {
  const servicesIcons = [
    "/images/services-icons/services-icon-1.png",
    "/images/services-icons/services-icon-2.png",
    "/images/services-icons/services-icon-3.png",
  ];

  const services = [
    new ServiceClass(
      "Smilšu spēles terapija",
      "Smilšu spēlē ar miniatūrām figūrām-simboliem cilvēka iekšējā pasaule kļūst redzama un var tikt sadziedēta."
    ),
    new ServiceClass(
      "Ģimenes sistēmiskā terapija",
      "Ģimenes sistēmiskā terapija palīdz tās locekļiem izprast savas uzvedības iemeslus un atrast jaunus komunikācijas veidus."
    ),
    new ServiceClass(
      "Traumu terapija - EMDR metode",
      "EMDR (Eye-Movement Desentization and Reprocessing) - desenbilizācija un psiholoģisko traumu pārstrāde, izmantojot acu kustības."
    ),
  ];

  // TODO: Refactor framer motion props
  return (
    <section className={styles.servicesList}>
      <h4>Pakalpojumi</h4>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeIn",
          staggerChildren: 0.5,
        }}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <Service
            src={servicesIcons[index]}
            title={service.title}
            description={service.description}
            key={index}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
