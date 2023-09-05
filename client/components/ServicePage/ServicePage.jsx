import React, {useEffect}from "react";
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

  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    const section = document.getElementById(hash);

    if (section) {
      const offset = 250;
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      });
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

    {filteredServicesList.map((service, index) =>      <section id={service[1].slug} className={`${styles.description} ${index % 2 === 1 ? styles.reverse : ''}`} key={index}>
        <div className={styles.descriptionContainer}>
          <h2>{service[1].title}</h2>

          { service[1].description.map((para, index) => (
            <p key={index}>{para}</p>
          ))} 
        </div> 
        <div className={styles.imageContainer}>
          <img src={service[1].imageUrl} alt={service.title} />
        </div>
      </section>)}

    </div>
  );
};

export default ServicePage;
