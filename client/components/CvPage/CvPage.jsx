import React from "react";
import styles from "./CvPage.module.scss";
import ExperienceBlock from "./ExperienceBlock/ExperienceBlock";
import { motion } from "framer-motion";
import Image from "next/image";

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
            <Image
              src={props.backgroundImage}
              alt="CV page hero image"
              priority={true}
              loading="eager"
              fill={true}
            />
          </div>
        </div>
      </div>
      <div className={styles.experienceBlockContainer}>
        {props.experience.map((block, index) => (
          <motion.div
            variants={experienceBlockVariant}
            initial="hidden"
            animate="visible"
            whileInView="inview"
            viewport={{ once: true }}
            key={index}

          >
            <ExperienceBlock
              className={index % 2 === 1 && "reverse"}
              key={index}
              props={props.experience[index]}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CvPage;
