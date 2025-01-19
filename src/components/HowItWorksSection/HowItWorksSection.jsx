// HowItWorksSection.js
import React from "react";
import styles from "./styles.module.css";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Design consultation",
      description: "In the initial step, we sit down with you to have a detailed discussion about your gardening vision and preferences."
    },
    {
      number: "02",
      title: "Design & planning",
      description: "Our team of experts meticulously crafts a custom garden design that aligns with your desires and your space characteristics."
    },
    {
      number: "03",
      title: "Implement construction",
      description: "We present the design to you for review. Once approved, we move forward to implement the plan with construction."
    },
    {
      number: "04",
      title: "Garden decorating",
      description: "With your design finalized, we put on our gardening gloves and work, creating your garden to be as beautiful as envisioned."
    }
  ];

  return (
    <section className={styles.timelineSec}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HOW IT WORKS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</h2>
        </div>
        <div className={styles.intro}>
            <h1>
              SIMPLE STEPS FOR OUR <span>LANDSCAPE</span> WORK
            </h1>
          </div>
        
        <div className={styles.timelineContainer}>
          <ol className={styles.timeline}>
            {steps.map((step, index) => (
              <li key={index}>
                <div className={index % 2 === 0 ? styles.handlerTop : styles.handlerBot}>
                  <h3 className={styles.stepTitle}>
                    {step.number}&nbsp;&nbsp;|&nbsp;&nbsp;{step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
                <div className={index % 2 === 0 ? styles.contentBot : styles.contentTop} />
                <span className={index % 2 === 0 ? styles.numberTop : styles.numberBot}>
                  {step.number}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;