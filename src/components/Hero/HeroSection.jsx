// HeroSection.js
import { Button, Col, Row, Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styles from "./styles.module.css";
import WhiteLogo from "./logo-white-1.png";

const HeroSection = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const navigationItems = [
    { key: "about", label: "ABOUT", url: "#about" },
    { key: "services", label: "SERVICES", url: "#services" },
    { key: "projects", label: "PROJECTS", url: "/projects" },
    { key: "faqs", label: "FAQs", url: "#faqs" },
    { key: "contact", label: "CONTACT", url: "/contact" },
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
              maxWidth: "60%", 
              height: "auto", 
              objectFit: "cover" 
            }}
            alt="Logo white"
            src={WhiteLogo}
          />
        </Col>
        
        {/* Desktop Navigation */}
        <Col xs={0} md={16}>
          <Row justify="end" className={styles.navbar}>
            {navigationItems.map(item => (
              <a 
                href={item.url} 
                key={item.key}
                className={styles.navLink}
              >
                {item.label}
              </a>
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
            <div className={styles.dreamGarden}>CREATE YOUR</div>
            <p className={styles.dreamGarden}>
              <span style={{ color: "#e1ebe2", fontWeight: '800' }}>DREAM</span>
              <span style={{ color: "#f9faf3" }}> GARDEN</span>
            </p>
            <p className={styles.craftingDream}>
              Crafting dream gardens with passion, creativity, and sustainability for nearly a decade with our experienced landscape artists and gardener teams.
            </p>
          </div>

          <Row style={{ gap: "22px", marginBottom: "40px", marginLeft: "20px" }}>
            <Button
              type="default"
              className={styles.primaryButton}
            >
              Get Started
            </Button>
            <Button
              type="link"
              className={styles.secondaryButton}
            >
              Explore Projects
            </Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;