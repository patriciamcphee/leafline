import React, { useState } from "react";
import styles from "./styles.module.css";
import BeforeAfterGallery from "../BeforeAfterGallery/BeforeAfterGallery";

const GARDEN = '#286655';
const GARDEN_FADED = '#28665556';
const FLORAL = '#8BA831';
const FLORAL_FADED = '#8BA83156';

const OurWorkSection = () => {
  const [service, setService] = useState('garden');
  const isFlowers = service === 'flowers';
  const accent = isFlowers ? FLORAL : GARDEN;
  const accentFaded = isFlowers ? FLORAL_FADED : GARDEN_FADED;

  return (
    <section className={styles.ourWorkSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h5 id="projects" style={{ color: accent }}>
            [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
          </h5>
        </div>

        {/* Service toggle: Garden Works / Floral Creations */}
        <div className={styles.serviceToggle}>
          <button
            type="button"
            onClick={() => setService('garden')}
            className={styles.toggleButton}
            style={{
              backgroundColor: !isFlowers ? GARDEN : 'transparent',
              color: !isFlowers ? '#fff' : GARDEN,
              borderColor: GARDEN,
            }}
          >
            Garden Works
          </button>
          <button
            type="button"
            onClick={() => setService('flowers')}
            className={styles.toggleButton}
            style={{
              backgroundColor: isFlowers ? FLORAL : 'transparent',
              color: isFlowers ? '#fff' : FLORAL,
              borderColor: FLORAL,
            }}
          >
            Floral Creations
          </button>
        </div>

        <div className={styles.intro}>
          <h1 style={{ color: accent }}>
            {isFlowers ? (
              <>
                <span style={{ color: accentFaded }}>GET TO</span> KNOW{' '}
                <span style={{ color: accentFaded }}>OUR LATEST FLORAL</span> CREATIONS
              </>
            ) : (
              <>
                <span style={{ color: accentFaded }}>GET TO</span> KNOW{' '}
                <span style={{ color: accentFaded }}>OUR LATEST GARDEN</span> WORKS
              </>
            )}
          </h1>
        </div>

        <div className={styles.ourWorkContainer}>
          <BeforeAfterGallery service={service} />
          <div className={styles.item} />
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;