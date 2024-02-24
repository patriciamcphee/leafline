// src/components/Hero.js
import React from 'react';
import styles from './styles.module.css';

import { Space, Button, ConfigProvider } from "antd";
const style = {
  padding: "2px 30px 10px 30px",
  margin: '20px 10px 0 10px',
  color: '#fff',
  fontWeight: '600',
  fontSize: 22,

};

const Hero = () => (
  <header className={styles.heroBanner}>
          <div className={styles.heroBackground}>
        <h1>Landscape Design<br />Installation<br />Maintenance</h1>
        
        
              <Space wrap align='center' direction="vertical">
              <ConfigProvider
              
                theme={{
                  token: {
                      colorPrimary: '#4b3018',
                      colorPrimaryHover: '#A2C523',
                      borderShadow: '0 6px 0 #286655',
                    }
                  }
                }
              >
                <Button type="primary" shape="round" size='large' style={style} href="https://form.jotform.com/240434453503145" target="_blank">
                Request a Consultation!
                </Button>
              </ConfigProvider>
              </Space>
          

    </div>
    </header>
);

export default Hero;
