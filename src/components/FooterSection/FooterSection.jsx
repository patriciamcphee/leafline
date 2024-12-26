import React from "react";
import styles from "./styles.module.css";
import ColorLogo from "../../img/logo-color.svg";

const FooterSection = () => {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footerSection}>
        <div className={styles.contents}>
          <div className={styles.logoSection}>
            <img
              className={styles.logo}
              alt="Company Logo"
              src={ColorLogo}
            />
          </div>

          <div className={styles.menuContainer}>
            <div className={styles.menuColumn}>
              <h3 className={styles.menuTitle}>LINKS</h3>
              <nav className={styles.menuItems}>
                <a href="#about">ABOUT US</a>
                <a href="#services">SERVICES</a>
                <a href="#projects">PROJECTS</a>
                <a href="#faqs">FAQs</a>
              </nav>
            </div>

            <div className={styles.menuColumn}>
              <h3 className={styles.menuTitle}>SERVICES</h3>
              <nav className={styles.menuItems}>
                <a href="#landscape">LANDSCAPE DESIGN</a>
                <a href="#home-garden">HOME GARDEN</a>
                <a href="#plant">PLANT SELECTION</a>
                <a href="#public">PUBLIC GARDEN</a>
              </nav>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            COPYRIGHT © 2025. ALL RIGHTS RESERVED.
          </p>
          <div className={styles.legalLinks}>
            <a href="#privacy">PRIVACY POLICY</a>
            <span className={styles.separator}>|</span>
            <a href="#terms">TERMS & CONDITIONS</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;