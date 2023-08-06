import React from "react";
import styles from "./CvPage.module.scss";
import ExperienceBlock from "./ExperienceBlock/ExperienceBlock";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CvPage = (props) => {
  const experienceBlockVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      transition: {
        duration: 0.5,
        staggerChildren: 1,
      },
    },
    inview: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.cvPage}>
      <div className={styles.introContainer}>
        <div className={styles.intro}>
          <div className={styles.leftBlock}>
            <div>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
            </div>
          </div>
          <div className={styles.rightBlock}>
            <LazyLoadImage
              effect="blur"
              src="/images/cv-page/cv-hero.png"
              alt="CV page hero image"
              height="100%"
            />
          </div>
        </div>
      </div>
      <motion.div
        variants={experienceBlockVariant}
        initial="hidden"
        animate="visible"
        whileInView="inview"
        className={styles.experienceBlockContainer}
      >
        {props.experience.map((block, index) => (
          <ExperienceBlock
            experienceBlockVariant={experienceBlockVariant}
            className={index % 2 === 1 && "reverse"}
            key={index}
            props={props.experience[index]}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CvPage;
