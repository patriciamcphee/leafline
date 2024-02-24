// src/components/Footer.js
import React from 'react';
import styles from './styles.module.css';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const MyFooter = () => (
  <Footer className={styles.footerContainer}>
    <Row align="top">
    <Col span={24}>
        <div className={styles.logo}><img src="/logo-white-full.png" alt="logo white" height="180px" /></div>

        <p className={styles.footerBody}>
        (206) 880-0886 | <a href="mailto:chris@leaflinegarden.deaign">chris@leaflinegarden.deaign</a></p>
      </Col>

    </Row>
    <Row align="top">
      <Col span={24}>
        <p className={styles.footerCopyRight}>©2024 | Leafline Garden Design LLC</p>
      </Col>

    </Row>
  </Footer>
);

export default MyFooter;
