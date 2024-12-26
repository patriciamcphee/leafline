import React from "react";
import styles from "./styles.module.css";

const OurWorkSection = () => {
  return (
    <section className={styles.ourWorkSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h5 id="services">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</h5>
        </div>
            <div className={styles.intro}>
                <h1>
                  <span>GET TO</span> KNOW <span>OUR LATEST GARDEN</span> WORKS
                </h1>
              </div>

    <div className={styles.ourWorkContainer}>
      <div className={styles.itemActivated}>
        <img alt="Our Work" src="../../img/our-work-1.png" />

        <div className={styles.texts}>
          <div className={styles.nameLocation}>
            <div className={styles.div}>
              <div className={styles.textWrapper}>NAME</div>

              <div className={styles.textWrapper2}>SERENE RETREAT</div>
            </div>

            <div className={styles.div}>
              <div className={styles.textWrapper}>LOCATION</div>

              <div className={styles.textWrapper2}>SUNNYVALE, CA</div>
            </div>
          </div>

          <p className={styles.p}>
            A tranquil garden oasis perfect for your relaxation time with family
            or alone within your comfortable home.
          </p>
        </div>
      </div>

      <div className={styles.item} />
    </div>
    </div>
    </section>
  );
};

export default OurWorkSection;