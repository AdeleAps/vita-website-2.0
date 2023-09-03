import React from "react";
import styles from "./ServicePage.module.scss";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard/ServiceCard";
import { getServiceData } from "../../data/service-page/getServiceData";

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

  const filteredServicesList = Object.entries({ ...getServiceData() }).filter(
    (item) => item[1].slug !== props.slug
  );

  const servicesCards = filteredServicesList.map((item, index) => (
    <ServiceCard key={index} {...item[1]} />
  ));

  // TODO: Make the image adjust to the size of the description.

  return (
    <div className={styles.servicePage}>
      <section className={styles.otherServices}>
        <div className={styles.titleContainer}>
          <h4>Pakalpojumi</h4>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est
            sunt repudiandae quia dolorum at ratione sed dolore repellat nam
            aspernatur obcaecati magni officia, quam accusantium molestiae porro
            quis nobis? Magni tempore eum et temporibus cupiditate numquam
            veniam mollitia accusamus.
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
      <section className={styles.description}>
        <div className={styles.descriptionContainer}>
          <h2>{props.title}</h2>

          {props.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <div className={styles.imageContainer}>
          <img src={props.imageUrl} alt={props.title} />
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
