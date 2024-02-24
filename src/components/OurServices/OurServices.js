// src/components/OurServices.js
import React from 'react';
import { Card, Col, Row } from 'antd';
import styles from './styles.module.css';

const serviceData = [
  {
    id: 1,
    title: 'Custom Landscape Design',
    description: 'Explore creativity through our custom design services, tailoring each project to reflect your dreams and meet your needs affordably.',
    image: 'https://images.unsplash.com/photo-1599110906632-28d25094470f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  {
    id: 2,
    title: 'Fine Pruning',
    description: 'Our expert pruning services enhance the beauty and health of your plants, ensuring your garden thrives in every season.',
    image: 'https://plus.unsplash.com/premium_photo-1679260900740-3ae5eba02d5a?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  {
    id: 3,
    title: 'Planting and Transplanting',
    description: 'Whether introducing new life to your garden or giving existing plants a new home, our careful hands ensure they flourish.',
    image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  {
    id: 4,
    title: 'Mulching/Woodchip Spreading',
    description: 'Our mulching services go beyond looks, vital for soil health and plant vigor, enhancing your garden with a polished appearance.',
    image: 'https://images.unsplash.com/photo-1508500351687-8c9e0a4e35f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  {
    id: 5,
    title: 'Weeding',
    description: 'Specializing in removing invasive species, we maintain your garden’s pristine health and beauty, letting its true essence shine through.',
    image: 'https://images.unsplash.com/photo-1599924990790-a8a8bbda726f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  {
    id: 6,
    title: 'Selective Grass Maintenance',
    description: 'Focused on maintaining grass along bed edges, we ensure a seamless blend between lush lawns and landscaped beauty.',
    image: 'https://images.unsplash.com/photo-1649785896092-7b6de6cccf8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image path
    imgAlt: 'Service 1 Image',
  },
  // Add more services here following the same structure
];

const OurServices = () => (
  <div className={styles.servicesContainer}>
    <Row gutter align="top">
      <Col span={24}>
    <h2 className={styles.servicesHeading}>Our Services</h2>
    <p className={styles.servicesBody}>Understanding that each garden has its own soul and each homeowner‘s vision, we offer a suite of flexible services tailored to meet our clients’ unique needs and desires.</p></Col>
    </Row>


    <Row gutter={[24, 36]}  className={styles.section} justify="space-around" align="top">
  {serviceData.map((service, index) => (
    <Col xs={24} sm={12} md={8} key={service.id}>
      <Card
        cover={<img alt={service.imgAlt} src={service.image} className={styles.serviceImage} />}
        className={styles.serviceCard}
      >
        <h3 className={styles.serviceHeading}> {service.title}</h3>
          <p className={styles.serviceBody}>{service.description}</p>
      </Card>
    </Col>
  ))}
</Row>

  </div>
);

export default OurServices;
