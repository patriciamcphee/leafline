// src/components/Navbar.js
import React from 'react';
import { Layout, Menu, Row, Col, Button, ConfigProvider } from 'antd';
import styles from './styles.module.css';
const style = {

  color: '#fff',


};

const { Header } = Layout;

const Navbar = () => (
  <Header className={styles.height}>
    <Row justify="space-between" align="middle">
      <Col>
        <img src="/final-logo.png" height="84px" alt="main logo" />
      </Col>
        <Col>
        <Menu mode="horizontal">    
        <Menu.Item>
              <ConfigProvider
                theme={{
                  token: {
                      colorPrimary: '#286655',
                      colorPrimaryHover: '#A2C523',
                      borderShadow: '0 6px 0 #286655',
                    }
                  }
                }
              >
                <Button type="primary" shape="round" style={style} href="https://form.jotform.com/240434453503145" target="_blank">
                Request a Consultation!
                </Button>
              </ConfigProvider>
              </Menu.Item>
          <Menu.Item><b>(206) 880-0886</b></Menu.Item>
          <Menu.Item><a href="mailto:chris@leaflinegarden.design?subject=General%20Inquiry">chris@leaflinegarden.design</a></Menu.Item>
        </Menu>


      </Col>
    </Row>
  </Header>
);

export default Navbar;
