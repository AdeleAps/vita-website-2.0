import React, { useEffect, useRef } from "react";
import styles from "./ServicePage.module.scss";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard/ServiceCard";
import { getServiceData } from "../../data/service-page/getServiceData";
import { useRouter } from "next/router";

const ServicePage = (props) => {
  const listVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delay: 0.5,
      },
    },
  };

  const router = useRouter();
  const sectionRefs = {};

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    const section = document.getElementById(hash);

    if (section && sectionRefs[hash]) {
      const offset = 250;
      setTimeout(() => {
        window.scrollTo({
          top: sectionRefs[hash] ? sectionRefs[hash].offsetTop - offset : null,
          behavior: "instant",
        });
      }, 0);
    }
  }, [router.asPath]);

  const filteredServicesList = Object.entries({ ...getServiceData() });

  const servicesCards = filteredServicesList.map((item, index) => (
    <ServiceCard key={index} index={index} {...item[1]} />
  ));

  return (
    <div className={styles.servicePage}>
      <section className={styles.otherServices}>
        <div className={styles.titleContainer}>
          <h4>Pakalpojumi</h4>
          <div>
          Individuāla, pāru un ģimenes psihoterapija, psihologa konsultācijas un psiholoģisko atzinumu rakstīšana (skolai, ārstiem, pedagoģiski medicīniskajai komisijai (PMK), Veselības un darbspēju ekspertīzes ārstu valsts komisijai (VDEĀVK)), supervīzijas un psihologu pārraudzības prakse.
          </div>
        </div>
        <motion.div
          variants={listVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.servicesWrapper}
        >
          {servicesCards}
        </motion.div>
      </section>

      {filteredServicesList.map((service, index) => (
        <section
          ref={(ref) => {
            sectionRefs[service[1].slug] = ref; // Assign a ref for each section
          }}
          id={service[1].slug}
          className={`${styles.description} ${
            index % 2 === 1 ? styles.reverse : ""
          }`}
          key={index}
        >
          <div className={styles.descriptionContainer}>
            <h2>{service[1].title}</h2>

            {service[1].description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
          <div className={styles.imageContainer}>
            <img src={service[1].imageUrl} alt={service.title} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicePage;
