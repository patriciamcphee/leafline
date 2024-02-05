import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const About = () => {
  return (
    <section className={styles.features}>
      
<div class="container">
<h1 className={styles.aboutHeading}>Crafting Your Personal Eden in Seattle</h1>
  <div class="row">
    <div class="col col--5">
      <div class="col-demo padding--md"><p className={styles.featureBodyLeft}>At Leafline Garden Design, we believe your garden should be a personal sanctuary, a canvas for your creativity, and an essential extension of your home. Our boutique landscaping service turns your garden dreams into reality with precision, care, and natural magic.</p>
        <p className={styles.featureBodyLeft}>We are landscapers and dream weavers dedicated to transforming your outdoor space into a unique masterpiece that enhances your home and life. With a focus on quality, sustainability, and beauty, we collaborate with you to create a visually stunning garden that reflects your style.</p>
        </div>
    </div>
    <div class="col">
      <div class="col-demo padding--md"><p className={styles.featureBodyLeft}>Choose Leafline Garden Design for:</p>
      <ul>
        <li><b>Expertise & Experience</b>: Led by a passionate horticulture graduate with over 5 years of experience, we have extensive knowledge and dedication to horticulture.</li>
        <li><b>Sustainable Design</b>: Our projects utilize native and native-like plants to support local ecosystems and promote biodiversity.</li>
        <li><b>Unique Aesthetic Fusion</b>: Our designs blend the elegance of Japanese gardens with the essence of the Pacific Northwest, creating tranquil retreats that are thriving ecosystems full of life. </li>
        <li><b>Ecosystem Focus</b>: We design gardens that foster symbiotic relationships within the soil and its inhabitants, benefiting native wildlife and plant health.</li>
        <li><b>Personalized Service</b>:We offer tailored services that honor your dreams, with a flexible approach to bring your ideal garden to life.</li>
      </ul>
      </div>
    </div>    
  </div>
</div>
    </section>
  );
};

export default About;