import React from "react";
import styles from "./CvPage.module.scss";
import ExperienceBlock from "./ExperienceBlock/ExperienceBlock";
import { motion } from "framer-motion";
import Image from 'next/image'

const CvPage = (props) => {
  const experienceBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
      },
    }),
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
            <Image
              src={props.backgroundImage}
              alt="CV page hero image"
              priority={true}
              quality={50}
              loading="eager"
              fill={true}
            />
          </div>
        </div>
      </div>
      <div className={styles.experienceBlockContainer}>
        {props.experience.map((block, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={experienceBlockVariants}
            className={index % 2 === 1 ? styles.reverse : ""}
          >
            <ExperienceBlock props={props.experience[index]} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CvPage;
