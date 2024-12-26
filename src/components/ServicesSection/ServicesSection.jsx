import React from "react";
import styles from "./styles.module.css";

const ServicesSection = () => {
  const services = [
    {
      title: "HOME\nGARDEN",
      description: "Crafting the perfect garden space for your home. Whether indoor or outdoor, we got it all ready for your greenery needs.",
      image: "/img/item-1-activated.png",
      tags: ["Home", "Garden", "Landscape Design", "Expert"],
      featured: true
    },
    {
      title: "PLANT\nSELECTION",
      description: "Hand-picked greenery for your oasis.",
      image: "/img/card.png",
      arrowImage: "/img/arrow.svg"
    },
    {
      title: "HARD-\nSCAPING",
      description: "Adding structure to your garden landscape.",
      image: "/img/card-1.png",
      arrowImage: "/img/arrow-2.svg"
    },
    {
      title: "PUBLIC\nGARDEN",
      description: "Expert advice for public garden and city parks.",
      image: "/img/card-2.png",
      arrowImage: "/img/arrow-2.svg"
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h5 id="services">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SERVICES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</h5>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.serviceCard} ${service.featured ? styles.featuredCard : ''}`}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {service.featured ? (
                <>
                  <div className={styles.tags}>
                    <div className={styles.tagGroup}>
                      {service.tags.map((tag, tagIndex) => (
                        <button key={tagIndex} className={styles.tag}>
                          {tag}
                        </button>
                      ))}
                    </div>
                    <span className={styles.arrow}>→</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </>
              ) : (
                <>
                  {service.arrowImage && (
                    <img 
                      src={service.arrowImage} 
                      alt="Direction arrow" 
                      className={styles.arrowImage}
                    />
                  )}
                  <div className={styles.cardContent}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;