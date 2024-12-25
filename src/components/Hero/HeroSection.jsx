// HeroSection.js
import { Button, Col, Row, Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styles from "./styles.module.css";
import WhiteLogo from "./logo-white-1.png";

const HeroSection = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const navigationItems = [
    { key: "about", label: "ABOUT" },
    { key: "services", label: "SERVICES" },
    { key: "projects", label: "PROJECTS" },
    { key: "contact", label: "CONTACT" },
  ];

  return (
    <div className={styles.heroSection}>
      {/* Navigation Bar */}
      <Row 
        style={{
          width: "100%",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Col xs={18} sm={12} md={8}>
          <img
            style={{ 
              maxWidth: "100%", 
              height: "auto", 
              objectFit: "cover" 
            }}
            alt="Logo white"
            src={WhiteLogo}
          />
        </Col>
        
        {/* Desktop Navigation */}
        <Col xs={0} md={16}>
          <Row justify="end" style={{ gap: "48px" }}>
            {navigationItems.map(item => (
              <div key={item.key} style={{ color: "white" }}>
                {item.label}
              </div>
            ))}
          </Row>
        </Col>

        {/* Mobile Menu Button */}
        <Col xs={6} md={0} style={{ textAlign: 'right' }}>
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: 'white', fontSize: '24px' }} />}
            onClick={() => setMobileMenuVisible(true)}
          />
        </Col>

        {/* Mobile Navigation Drawer */}
        <Drawer
          placement="right"
          onClose={() => setMobileMenuVisible(false)}
          open={mobileMenuVisible}
          width={250}
        >
          <Menu mode="vertical">
            {navigationItems.map(item => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Row>

      {/* Main Content */}
      <Row
        style={{
          width: "100%",
          padding: "20px",
          marginTop: "40px"
        }}
      >
        <Col xs={24} md={12}>
          <div style={{ marginBottom: "40px" }}>
            <div style={{ color: "white" }}>CREATE YOUR</div>
            <p style={{ color: "transparent", margin: "8px 0" }}>
              <span style={{ color: "#e1ebe2" }}>DREAM</span>
              <span style={{ color: "#f9faf3" }}> GARDEN</span>
            </p>
            <p style={{ color: "white", opacity: 0.75 }}>
              Crafting dream gardens with passion, creativity, and
              sustainability for over a decade with our experienced landscape
              artists and gardener teams.
            </p>
          </div>

          <Row style={{ gap: "22px", marginBottom: "40px" }}>
            <Button
              type="primary"
              style={{ backgroundColor: "white", color: "dark-green" }}
            >
              Get Started
            </Button>
            <Button
              type="link"
              style={{ color: "white", borderBottom: "1px solid white" }}
            >
              Explore Projects
            </Button>
          </Row>

          <div>
            <Row justify="space-between" style={{ marginBottom: "10px" }}>
              <div style={{ color: "white" }}>01</div>
              <div style={{ color: "white" }}>03</div>
            </Row>
            <Row>
              <div
                style={{
                  width: "25%",
                  height: "1px",
                  backgroundColor: "white",
                }}
              />
              <div
                style={{
                  width: "75%",
                  height: "1px",
                  backgroundColor: "white",
                  opacity: 0.5,
                }}
              />
            </Row>
          </div>
        </Col>

        <Col xs={24} md={12} style={{ marginTop: { xs: '40px', md: '0' } }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              gap: "60px",
              padding: "20px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px) brightness(100%)",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 100%)",
            }}
          >
            <img alt="Icon button" src="../../../static/img/icon-button.svg" />
            <div>
              <div style={{ color: "white", marginBottom: "8px" }}>
                Hachioji Garden
              </div>
              <p style={{ color: "white", opacity: 0.75, margin: 0 }}>
                We design Hachioji Garden as a part of our new Landscape Design
                Commission in the country.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;