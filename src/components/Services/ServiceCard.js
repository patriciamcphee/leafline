// ServiceCard.js
import React from 'react';
import clsx from "clsx";
import styles from "./styles.module.css";


const ServiceCard = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <div className={styles.serviceCard}>
      <img src={imgSrc} alt={imgAlt} className={styles.serviceImage} />
      <div className={styles.serviceContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;