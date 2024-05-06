// src/components/Hero.js
import React from 'react';
import styles from './styles.module.css';

import { Row, Col } from "antd";

const Hero = () => (
  <header className={styles.heroBanner}>
      <div className={styles.heroBackground}>
        <Row>
          <Col>
          <h1>Landscape Design<br />Installation<br />Maintenance</h1>
          </Col>
        </Row>
   </div>
    
    </header>
);

export default Hero;
