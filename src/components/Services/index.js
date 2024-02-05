// src/components/Services.js
import React from 'react';
import ServiceCard from './ServiceCard';
import styles from "./styles.module.css";
import { Button, Card, Flex, Typography, Space, Row, Col } from 'antd';

const Services = () => {
  const services = [
  {
    id: 1,
    title: 'Custom Landscape Design',
    description: 'Dive into the realms of creativity with our personalized design services, where each project is a reflection of your dreams, meticulously priced and crafted to suit your individual requirements.',
    imgSrc: 'https://images.unsplash.com/photo-1599110906632-28d25094470f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  {
    id: 2,
    title: 'Fine Pruning',
    description: 'Our expert pruning services enhance the beauty and health of your plants, ensuring your garden thrives in every season.',
    imgSrc: 'https://plus.unsplash.com/premium_photo-1679260900740-3ae5eba02d5a?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  {
    id: 3,
    title: 'Planting and Transplanting',
    description: 'Whether introducing new life to your garden or giving existing plants a new home, our careful hands ensure they flourish.',
    imgSrc: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  {
    id: 4,
    title: 'Mulching/Woodchip Spreading',
    description: 'Beyond aesthetics, our mulching services are pivotal for soil health and plant vitality, providing a polished look that breathes life into your garden.',
    imgSrc: 'https://images.unsplash.com/photo-1508500351687-8c9e0a4e35f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  {
    id: 5,
    title: 'Weeding',
    description: 'Specializing in removing invasive species, we maintain your garden’s pristine health and beauty, letting its true essence shine through.',
    imgSrc: 'https://images.unsplash.com/photo-1599924990790-a8a8bbda726f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  {
    id: 6,
    title: 'Selective Grass Maintenance',
    description: 'Focused on maintaining grass along bed edges, we ensure a seamless blend between lush lawns and landscaped beauty.',
    imgSrc: 'https://images.unsplash.com/photo-1649785896092-7b6de6cccf8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  // Add more services here following the same structure
];


  return (
    <section className={styles.features}>
    <div className="container">
      <h1 className={styles.featureHeading}>Our Services</h1>
      <p className={styles.featureBody}>Understanding that each garden has its own soul and each homeowner‘s vision, we offer a suite of flexible services tailored to meet our clients’ unique needs and desires. Our offerings include:</p>

      <div className={styles.servicesContainer}>
      {services.map(service => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          imgSrc={service.imgSrc}
          imgAlt={service.imgAlt}
        />
      ))}
    </div>
    </div>


    </section>
  );
};

export default Services

