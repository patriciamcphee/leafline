// ServiceCard.js
import React from 'react';
import clsx from "clsx";
import styles from "./styles.module.css";
import { Card, Space, Row, Col } from 'antd';

const ServiceCard = ({ title, description }) => {
  return (
    <section className={styles.services}>
    <div className="container">
      <div className="row">
    <div className={clsx('col col--4')}>
      <div class="card-demo">
        <div class="card">
          <div className={styles.serviceHeadingBackground}>
            
          </div>
          <div class="card__body">
          <h3 className={styles.serviceHeading}>{title}</h3>
            <p className={styles.serviceBody}>{description}</p>
          </div>
          <div className={styles.serviceHeadingBackground}>
            
            </div>
          </div>
        </div>
	    </div>
      </div>
	    </div>
      </section>
  );
};

export default ServiceCard;
