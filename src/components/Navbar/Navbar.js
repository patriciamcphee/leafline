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
        <a href="https://www.leaflinegarden.design"><img src="/final-logo.png" height="84px" alt="main logo" /></a>
      </Col>
        <Col>
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
        <Menu mode="horizontal">  
        <Menu.Item key="link"><a href="#about">About Us</a></Menu.Item>  
        <Menu.Item key="link"><a href="#services">Our Services</a></Menu.Item>
        <Menu.Item key="link">
              
                <Button type="primary" shape="round" style={style} href="https://form.jotform.com/240434453503145" target="_blank">
                Request a Consultation!
                </Button>
              
              </Menu.Item>
          <Menu.Item key="phone"><b>(206) 880-0886</b></Menu.Item>
        </Menu>

        </ConfigProvider>
      </Col>
    </Row>
  </Header>
);

export default Navbar;
