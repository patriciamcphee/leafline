import React, { useState } from "react";
import styles from "./styles.module.css";
import WhiteLogo from "../../img/logo-white.svg";

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { key: "about", label: "ABOUT", url: "#about" },
    { key: "services", label: "SERVICES", url: "#services" },
    { key: "projects", label: "PROJECTS", url: "/projects" },
    { key: "faqs", label: "FAQs", url: "#faqs" },
    { key: "contact", label: "CONTACT", url: "/contact" },
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
            <button className={styles.primaryButton}>
              Get Started
            </button>
            <button className={styles.secondaryButton}>
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;