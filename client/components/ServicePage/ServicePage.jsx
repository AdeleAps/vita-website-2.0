import React from "react";
import styles from "./ServicePage.module.scss";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard/ServiceCard";
import { getServiceData } from "../../data/service-page/getServiceData";

const ServicePage = (props) => {
  const fadeInVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const paraVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const filteredServicesList = Object.entries({ ...getServiceData() }).filter(
    (item) => item[1].slug !== props.slug
  );

  const servicesCards = filteredServicesList.map((item, index) => (
    <ServiceCard key={index} {...item[1]} />
  ));

  return (
    <div className={styles.servicePage}>
      <section className={styles.description}>
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="show"
          className={styles.descriptionContainer}
        >
          <h2>{props.title}</h2>

          {props.description.map((para, index) => (
            <motion.p variant={paraVariant} key={index}>
              {para}
            </motion.p>
          ))}
        </motion.div>
        <div className={styles.imageContainer}>
          <img loading="lazy" src={props.imageUrl} alt={props.title} />
        </div>
      </section>
      <section className={styles.otherServices}>{servicesCards}</section>
    </div>
  );
};

export default ServicePage;
