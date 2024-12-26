import React from "react";
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
                  <button className={styles.primaryButton}>
                    Get Started
                  </button>
                </div>
    </section>
  );
};

export default CtaSection;