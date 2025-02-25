import React, { useState } from "react";
import { Button, ConfigProvider } from 'antd';
import styles from "./styles.module.css";
import WhiteLogo from "../../img/logo-white.svg";

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { key: "about", label: "ABOUT", url: "#about" },
    { key: "services", label: "SERVICES", url: "#services" },
    { key: "projects", label: "PROJECTS", url: "#projects" },
    { key: "contact", label: "CONTACT", url: "mailto:chris@leaflinegarden.design" },
  ];

  return (
    <div className={styles.heroSection}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <a href="/" className={styles.logoContainer}>
            <img
              src={WhiteLogo}
              alt="Company Logo"
              width="240"
              height="80"
            />
          </a>
          
          <div className={styles.desktopNav}>
            {navigationItems.map(item => (
              <a 
                href={item.url} 
                key={item.key}
                className={styles.navLink}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button 
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger} />
          </button>

          <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ''}`}>
            {navigationItems.map(item => (
              <a 
                href={item.url} 
                key={item.key}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>CREATE YOUR</h1>
              <h1 className={`${styles.title} ${styles.highlight}`}>DREAM</h1>
              <h1 className={styles.title}>GARDEN</h1>
            </div>
            <p className={styles.description}>
              Crafting dream gardens with passion, creativity, and sustainability 
              for nearly a decade with our experienced landscape artists and gardener teams.
            </p>
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
            <p className={styles.secondaryButton}>
            (206) 880-0886
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;