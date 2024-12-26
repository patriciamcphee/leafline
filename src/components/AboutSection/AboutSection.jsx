import React from "react";
import styles from "./styles.module.css";

const AboutSection = () => {
  const features = [
    {
      title: "Passion in every work",
      description: "We are deeply passionate about creating beautiful, sustainable green landscapes for our clients."
    },
    {
      title: "Collaboration on top",
      description: "We make your dream design come true by combining your ideas with our landscape design expertise."
    },
    {
      title: "Sustainability in check",
      description: "We love nurturing nature so that you can enjoy the beautiful landscape of your garden even longer."
    },
    {
      title: "Creativity unleashed",
      description: "We make sure to only give you our innovative designs that stand out to make sure that your garden is not like the others."
    },
    {
      title: "Personalized services",
      description: "We offer tailored services that honor your dreams, with a flexible approach to bring your ideal garden to life."
    }
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h5 id="about">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABOUT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</h5>
        </div>

        <div className={styles.content}>
          <div className={styles.intro}>
            <h1>
              CRAFTING <span>DREAM GARDENS</span> INTO REALITY
            </h1>
            <h3>
              Led by a passionate horticulture expert from Lake Washington Tech with nearly a decade in the field. We craft your garden with precision and horticultural expertise.
            </h3>
          </div>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;