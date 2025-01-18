import React from "react";
import { Button, ConfigProvider } from 'antd';
import styles from "./styles.module.css";

const CtaSection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div  className={styles.content}>
              <div className={styles.intro}>
                <h1>READY TO TRANSFORM YOUR GARDEN?
                </h1>
                </div>
                </div>
</div>
      <div className={styles.buttonGroup}>
          <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#286655',
            colorPrimaryHover: '#A2C523',
            paddingBlockLG: '10',
          },
        }}
      >
        <Button type="primary" shape="round" size="large"  className={styles.primaryButton} href="landscape-request.html" target="_blank">
          <b>Get a Consultation</b>
        </Button>
      </ConfigProvider>
                </div>
    </section>
  );
};

export default CtaSection;