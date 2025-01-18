import React from "react";
import styles from "./styles.module.css";
import BeforeAfterGallery from "../BeforeAfterGallery/BeforeAfterGallery";

const OurWorkSection = () => {
  return (
    <section className={styles.ourWorkSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h5 id="projects">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</h5>
        </div>
            <div className={styles.intro}>
                <h1>
                  <span>GET TO</span> KNOW <span>OUR LATEST GARDEN</span> WORKS
                </h1>
              </div>

    <div className={styles.ourWorkContainer}>
      <BeforeAfterGallery />

      <div className={styles.item} />
    </div>
    </div>
    </section>
  );
};

export default OurWorkSection;