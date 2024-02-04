import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

// Who we are component
const Who = () => {
  return (
    <header>
      <h1>Leafline Garden Design: Crafting Nature into Art</h1>
      <p>At Leafline Garden Design, we believe that your garden is not just an extension of your home but a living, breathing canvas where your dreams and nature converge to create something truly magical. Based in the heart of the Seattle metro area and extending our green fingers to the East Side, we are a bespoke landscaping service dedicated to transforming your outdoor spaces into vibrant, living masterpieces.</p>
    </header>
  );
};

function Feature({ title, description }) {
  return (
    <div className={clsx("col")}>
      <div className="text--center">
        
      </div>
      <div className="text--center padding-horiz--md">
        <h1 className={styles.featureHeading}>{title}</h1>
        <p className={styles.featureBody}>{description}</p>
      </div>
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <section className={styles.features}>
      
      <div className="container">
        <div className="row">
        <header>
        <h1 className={styles.featureHeading}>Crafting Your Personal Eden in Seattle</h1>

        <p className={styles.featureBody}>At Leafline Garden Design, we believe your garden is more than just an outdoor space; it's a personal sanctuary, a canvas for creativity, and an extension of your home that deserves a bespoke touch. Nestled in the heart of the Seattle metro area, including the vibrant East Side, our boutique landscaping service is dedicated to transforming your garden dreams into reality with precision, care, and a touch of nature's magic.</p>
        <p className={styles.featureBody}>Your garden is a reflection of your personal style, a space where nature meets creativity. At Leafline Garden Design, we're not just landscapers; we're dream weavers dedicated to transforming your outdoor space into a bespoke masterpiece that enhances your home and life. With a commitment to quality, sustainability, and beauty, let us partner with you to create a beautiful, stunning garden that feels uniquely yours.</p>
        <p className={styles.featureBody}>Embrace the journey to your personal Eden with Leafline Garden Design. Together, let's create something beautiful.</p>
    </header>
        </div>
      </div>
    </section>
  );
}
