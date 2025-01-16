import React, { useState } from 'react';
import { Card } from 'antd';
import {
  Leaf,
  ClipboardCheck,
  Flower2,
  Recycle,
  Scissors,
  Sprout,
  TreePine,
  Wand2
} from 'lucide-react';
import styles from './styles.module.css';

// Define service data for each tab
const gardenDesignServices = [
  {
    title: "Customized Garden Designs",
    icon: <Leaf className="w-12 h-12" />,
    description: "Expert design services tailored to your vision and space"
  },
  {
    title: "Guaranteed Maintenance Plans",
    icon: <ClipboardCheck className="w-12 h-12" />,
    description: "Regular care and upkeep to ensure your garden thrives"
  },
  {
    title: "Plant Selection and Installation",
    icon: <Flower2 className="w-12 h-12" />,
    description: "Expert plant choices and professional planting"
  },
  {
    title: "Sustainable Eco-Friendly Options",
    icon: <Recycle className="w-12 h-12" />,
    description: "Environmental solutions for responsible gardening"
  }
];

const pruningServices = [
  {
    title: "Artistic Pruning",
    icon: <Scissors className="w-12 h-12" />,
    description: "Expert shaping and maintenance of ornamental trees and shrubs"
  },
  {
    title: "Health Management",
    icon: <Sprout className="w-12 h-12" />,
    description: "Strategic pruning to promote plant health and growth"
  },
  {
    title: "Seasonal Pruning",
    icon: <TreePine className="w-12 h-12" />,
    description: "Timing-specific pruning for optimal plant development"
  },
  {
    title: "Structural Pruning",
    icon: <Wand2 className="w-12 h-12" />,
    description: "Ensuring proper growth patterns and branch structure"
  }
];

const maintenanceServices = [
  {
    title: "Transplanting",
    icon: <Sprout className="w-12 h-12" />,
    description: "Expert relocation of plants with minimal stress"
  },
  {
    title: "Mulching Services",
    icon: <TreePine className="w-12 h-12" />,
    description: "Professional mulch application for soil health"
  },
  {
    title: "Weeding",
    icon: <Flower2 className="w-12 h-12" />,
    description: "Thorough removal of unwanted plants"
  },
  {
    title: "Grass Maintenance",
    icon: <Leaf className="w-12 h-12" />,
    description: "Targeted care for grass areas"
  }
];

const ServiceSection = ({ title, description, services, imageSrc }) => {
  return (
    <div className={styles.serviceSection}>
      <div className={styles.contentArea}>
        <div className={styles.serviceImage}>
          <img
            src={imageSrc}
            alt={`${title} service`}
            className={styles.sectionImage}
          />
        </div>
        <div className={styles.contentText}>
          <h1 className={styles.sectionTitle}>
            <span className={styles.titleLight}>{title.split(' ')[0]}</span>
            <span className={styles.titleDark}>{' ' + title.split(' ')[1]}</span>
          </h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <div className={styles.cardsGrid}>
        {services.map((service, index) => (
          <Card
            key={index}
            className={styles.card}
            bordered={false}
          >
            <div className={styles.cardIcon}>
              {service.icon}
            </div>
            <h3 className={styles.cardTitle}>
              {service.title}
            </h3>
            <p className={styles.cardDescription}>
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ServicesGallery = () => {
  const [activeTag, setActiveTag] = useState('garden-design');

  const tags = [
    { key: 'garden-design', label: 'Garden Design' },
    { key: 'fine-pruning', label: 'Fine Pruning' },
    { key: 'maintenance', label: 'Maintenance Services' }
  ];

  const renderContent = () => {
    switch (activeTag) {
      case 'garden-design':
        return (
          <ServiceSection
            title="GARDEN DESIGN"
            description="Transform your outdoor space with our Garden Design service. Our landscape architects and horticultural experts carefully craft designs that blend artistry with science to create captivating spaces. We consider every aspect of your property—from sustainable native plants to innovative hardscaping—to bring your vision to life. Whether you envision a peaceful meditation garden, a lively entertainment area, or a beautiful edible landscape, our designs harmonize with the natural environment while fulfilling your unique needs."
            services={gardenDesignServices}
            imageSrc="/images/landscape-design-5.jpeg"
          />
        );
      case 'fine-pruning':
        return (
          <ServiceSection
            title="FINE PRUNING"
            description="Our Fine Pruning service combines horticultural expertise with meticulous craftsmanship to shape and maintain your plants. We ensure both optimal health and stunning visual appeal through precise, thoughtful cuts guided by botanical knowledge. Our skilled technicians master the delicate balance between aesthetic refinement and plant vitality, making pruning decisions that enhance your garden's natural beauty while promoting robust, balanced growth. Every cut contributes to both the immediate appearance and long-term health of your valued plants."
            services={pruningServices}
            imageSrc="/images/pruning-4.jpeg"
          />
        );
      case 'maintenance':
        return (
          <ServiceSection
            title="MAINTENANCE SERVICES"
            description="Our garden maintenance services combine expert knowledge with personal dedication to nurture your outdoor spaces throughout every season. We specialize in new plantings, mulching, invasive species management, and edge maintenance, ensuring your garden flourishes with natural beauty and sustained health. Our meticulous approach and unwavering commitment to excellence preserve your garden's vibrancy and vitality year-round."
            services={maintenanceServices}
            imageSrc="/images/mulching-1.jpeg"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.servicesSectionHeader}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h5 id="services">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SERVICES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</h5>
        </div>
        
        <div className={styles.tags}>
          <div className={styles.tagGroup}>
            {tags.map(tag => (
              <button
                key={tag.key}
                className={`${styles.tag} ${activeTag === tag.key ? styles.activeTag : ''}`}
                onClick={() => setActiveTag(tag.key)}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default ServicesGallery;