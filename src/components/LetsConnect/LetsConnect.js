// src/components/LetsConnect.js
import React from 'react';
import { Button, ConfigProvider, Row, Col } from 'antd';
import styles from './styles.module.css';

const style = {
  color: '#fff',
};

const LetsConnect = () => (
  <div className={styles.sectionContainer} id="connect">
    <Row align="top">
      <Col>
    <h2 className={styles.sectionHeading}>Let's Connect</h2>
    <p className={styles.sectionBody}>Dreaming of the perfect garden? Let's make it happen. Whether it's a peaceful retreat or a vibrant garden ecosystem, your outdoor space is a canvas waiting for a touch of creativity and expertise.</p>
    <p className={styles.sectionBody}>Kickstart your garden transformation by sharing your dreams with us.</p>
    <br />
    <p className={styles.sectionBody}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#286655',
            colorPrimaryHover: '#A2C523',
            borderShadow: '0 6px 0 #286655',
          },
        }}
      >
        <Button type="primary" shape="round" size="large" style={style} href="https://form.jotform.com/240434453503145" target="_blank">
          <b>Request a Consultation!</b>
        </Button>
      </ConfigProvider>
    </p>
    </Col>
    </Row>
  </div>
);

export default LetsConnect;
