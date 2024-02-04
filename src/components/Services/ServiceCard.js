// ServiceCard.js
import React from 'react';
import styles from "./styles.module.css";
import { Card, Space, Row, Col } from 'antd';

const ServiceCard = ({ title, description }) => {
  return (
<div class="container container-fluid">
  <div class="row">
    <div class="col col--4 margin-bottom--lg">
      <div class="col-demo">
      <div class="card-demo">
        <div class="card">
          <div className={styles.serviceHeadingBackground}>
            <h3 className={styles.serviceHeading}>{title}</h3>
          </div>
          <div class="card__body">
            <p className={styles.serviceBody}>{description}</p>
          </div>
          </div>
        </div>
	    </div>
    </div>
  </div>
</div>
  );
};

export default ServiceCard;
