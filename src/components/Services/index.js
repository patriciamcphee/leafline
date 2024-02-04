// src/components/Services.js
import React from 'react';
import ServiceCard from './ServiceCard';
import styles from "./styles.module.css";

const ServiceList = [
  {
    id: 1,
    title: 'Custom Landscape Design',
    description: 'Dive into the realms of creativity with our personalized design services, where each project is a reflection of your dreams, meticulously priced and crafted to suit your individual requirements.',
    image: '', // Placeholder image path
  },
  {
    id: 2,
    title: 'Fine Pruning',
    description: 'Our expert pruning services enhance the beauty and health of your plants, ensuring your garden thrives in every season.',
    image: '', // Placeholder image path
  },
  {
    id: 3,
    title: 'Planting and Transplanting',
    description: 'Whether introducing new life to your garden or giving existing plants a new home, our careful hands ensure they flourish.',
    image: '', // Placeholder image path
  },
  {
    id: 4,
    title: 'Mulching/Woodchip Spreading',
    description: 'Beyond aesthetics, our mulching services are pivotal for soil health and plant vitality, providing a polished look that breathes life into your garden.',
    image: '', // Placeholder image path
  },
  {
    id: 5,
    title: 'Weeding',
    description: 'Specializing in removing invasive species, we maintain your garden’s pristine health and beauty, letting its true essence shine through.',
    image: '', // Placeholder image path
  },
  {
    id: 6,
    title: 'Selective Grass Maintenance',
    description: 'Focused on maintaining grass along bed edges, we ensure a seamless blend between lush lawns and landscaped beauty.',
    image: '', // Placeholder image path
  },
  // Add more services here following the same structure
];

export default function Services() {
  return (
    <section className={styles.features}>
    <div className="container">
      <h1 className={styles.featureHeading}>Our Services</h1>
      <p className={styles.featureBody}>Understanding that each garden has its own soul and each homeowner‘s vision, we offer a suite of flexible services tailored to meet our clients’ unique needs and desires. Our offerings include:</p>
      <div className="text--center padding-horiz--md">
      {ServiceList.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description}></ServiceCard>
      ))}
      </div>
    </div>
    </section>
  );
};

