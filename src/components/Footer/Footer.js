// src/components/Footer.js
import React from 'react';
import styles from './styles.module.css';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const MyFooter = () => (
  <Footer className={styles.footerContainer}>
    <Row gutter={[60]} justify="space-around" align="top">
    <Col xs={24} sm={12} md={8}>
        <p className={styles.footerBody}><a href="https://www.leaflinegarden.design"><img className={styles.logo} src="/logo-white-full.png" alt="logo white" /></a></p>
</Col>
<Col xs={24} sm={12} md={8} >
        <p className={styles.footerBody}>
          <ul>
            <li className={styles.phoneNumber}>(206) 880-0886</li>
            <li className={styles.styledBulletList}><a href="www.leaflinegarden.design">www.leaflinegarden.design</a></li>
            <li className={styles.styledBulletList}><a href="mailto:chris@leaflinegarden.design">chris@leaflinegarden.design</a></li>
          </ul>
          
        </p>
        
      </Col>

    </Row>
    <Row>
      <Col span={24}>
        <p className={styles.footerCopyRight}>©2024 &nbsp;&nbsp;<img src="/favicons/favicon-24x24.png" alt="leafline icon" width="14px"  />&nbsp;&nbsp; Leafline Garden Design LLC</p>
        <p className={styles.footerCopyRight}><i>Licensed | Bonded | Insured</i></p>
      </Col>
    </Row>
  </Footer>
);

export default MyFooter;
