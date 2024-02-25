// src/components/Footer.js
import React from 'react';
import styles from './styles.module.css';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const MyFooter = () => (
  <Footer className={styles.footerContainer}>
    <Row align="top">
    <Col span={24}>
        <p className={styles.footerBody}><a href="https://www.leaflinegarden.design"><img className={styles.logo} src="/logo-white-full.png" alt="logo white" /></a></p>

        <p className={styles.footerBody}>
        (206) 880-0886 &nbsp;&nbsp;<img src="/favicons/favicon-24x24.png" alt="leafline icon" width="14px"  />&nbsp;&nbsp; <a href="mailto:leaflinegardendesign@gmail.com">leaflinegardendesign@gmail.com</a></p>
      </Col>

    </Row>
    <Row align="top">
      <Col span={24}>
        <p className={styles.footerCopyRight}>©2024 &nbsp;&nbsp;<img src="/favicons/favicon-24x24.png" alt="leafline icon" width="14px"  />&nbsp;&nbsp; Leafline Garden Design LLC</p>
      </Col>

    </Row>
  </Footer>
);

export default MyFooter;
