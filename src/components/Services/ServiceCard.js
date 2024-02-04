// ServiceCard.js
import React from 'react';
import clsx from "clsx";
import styles from "./styles.module.css";
import { Button, Card, Flex, Typography } from 'antd';



const ServiceCard = ({ title, description, image }) => {
  const cardStyle = {
    width: 620,
  };
  const imgStyle = {
    display: 'block',
    width: 273,
  };
  return (
    <section className={styles.services}>
    <div className="container container-fluid">
      <div className="row">
    <div className={clsx('col col--4')}>
      <div class="card-demo">
        <div class="card">
          <div class="card__image">
          <img className={styles.featureSvg} src={image} />
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
