// ServiceCard.js
import React from 'react';
import clsx from "clsx";
import styles from "./styles.module.css";


const ServiceCard = ({ title, description }) => {
  return (
    <div className={styles.serviceCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;