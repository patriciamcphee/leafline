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
      <div class="col-demo padding--md"><p className={styles.featureBodyLeft}>Led by a passionate horticulture expert from Lake Washington Tech with 5+ years in the field, <b>Leafline Garden Design</b> crafts your garden with precision and horticultural expertise.</p>
        <p className={styles.featureBodyLeft}>Our service transforms your garden into a personal haven, blending creativity with nature to realize your vision.</p>
        <p className={styles.featureBodyLeft}>We turn outdoor spaces into unique masterpieces, focusing on quality, sustainability, and your style, enhancing both home and life.</p>
        <p className={styles.featureBody}><b>Partner with us because your garden is more than just a space—it's a statement.</b></p>
        </div>
    </div>
    <div class="col">
      <div class="col-demo padding--md"><p className={styles.featureBodyLeft}>Choose <b>Leafline Garden Design</b> for:</p>
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