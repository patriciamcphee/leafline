// src/components/AboutUs.js
import React from 'react';
import { Row, Col } from 'antd';
import styles from './styles.module.css';

const AboutUs = () => (
  <div className={styles.aboutUsContainer} id="about">
    <Row justify="space-around" align="top">
      <Col span={24}>
      <h2 className={styles.aboutUsHeading}>Crafting Your Personal Eden in Seattle</h2>
      </Col>
    </Row>

    <Row gutter={[60]} className={styles.section} justify="space-around" align="top">
      <Col xs={24} sm={12} md={12}>
        <p className={styles.aboutUsBodyLeft}>Led by a passionate horticulture expert from Lake Washington Tech with 5+ years in the field, <b>Leafline Garden Design</b> crafts your garden with precision and horticultural expertise.</p>
        <p className={styles.aboutUsBodyLeft}>Our service transforms your garden into a personal haven, blending creativity with nature to realize your vision.</p>
        <p className={styles.aboutUsBodyLeft}>We turn outdoor spaces into unique masterpieces, focusing on quality, sustainability, and your style, enhancing both home and life.</p>
        <p className={styles.aboutUsBodyLeft}><b>Partner with us because your garden is more than just a space—it's a statement.</b></p>
      </Col>
      <Col xs={24} sm={12} md={12}>
        <p className={styles.aboutUsBodyLeft}>Choose <b>Leafline Garden Design</b> for:</p>
        <ul className={styles.styledBulletList}>
        <li><b>Sustainable Design</b>: Our projects utilize native and native-like plants to support local ecosystems and promote biodiversity.</li>
        <li><b>Unique Aesthetic Fusion</b>: Our designs blend the elegance of Japanese gardens with the essence of the Pacific Northwest, creating tranquil retreats that are thriving ecosystems full of life. </li>
        <li><b>Ecosystem Focus</b>: We design gardens that foster symbiotic relationships within the soil and its inhabitants, benefiting native wildlife and plant health.</li>
        <li><b>Personalized Service</b>:We offer tailored services that honor your dreams, with a flexible approach to bring your ideal garden to life.</li>
      </ul>
      </Col>
    </Row>
  </div>
);

export default AboutUs;
