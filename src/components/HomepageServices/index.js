import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ServiceList = [
  {
    title: 'Custom Landscape Design',

    description: (
      <>
          Dive into the realms of creativity with our personalized design services, where each project is a reflection of your dreams, meticulously priced and crafted to suit your individual requirements.

      </>
    ),
  },
  {
    title: 'Fine Pruning',

    description: (
      <>
        Our expert pruning services enhance the beauty and health of your plants, ensuring your garden thrives in every season.
      </>
    ),
  },
  {
    title: 'Planting and Transplanting',

    description: (
      <>
        Whether introducing new life to your garden or giving existing plants a new home, our careful hands ensure they flourish.
      </>
    ),
  },

];

function Service({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ServiceList.map((props, idx) => (
            <Service key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
