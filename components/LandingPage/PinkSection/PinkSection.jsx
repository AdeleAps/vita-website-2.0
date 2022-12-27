import React from 'react'
import BioPostIt from './BioPostIt/BioPostIt'
import styles from "./PinkSection.module.scss"
import ServicesList from './ServicesList/ServicesList'

const PinkSection = () => {
  return (
    <div className={styles.pinkSection}>
        <ServicesList />
        <BioPostIt />
    </div>
  )
}

export default PinkSection