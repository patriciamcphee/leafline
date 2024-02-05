import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Why Choose Us",
//    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        At the helm of Leafline Garden Design is a passionate Lake Washington Tech Horticulture graduate with over 5 years of hands-on experience in landscape maintenance and design. This solid foundation of knowledge and experience ensures that your garden is not just designed but crafted with expertise that only comes from a dedication to the art and science of horticulture.
        <p className={styles.featureBodyLeft}>Partner with Leafline Garden Design to transform your garden into a sustainable sanctuary that reflects your personal style and positively contributes to the ecosystem. Your garden becomes more than just a space—it becomes a statement.</p>
      </>
    ),
  },


];

function Feature({ title, description }) {
  return (
    <div className={clsx("col")}>
      <div className="text--center">
        
      </div>
      <div className="text--center padding-horiz--md">
        <h1 className={styles.featureHeading}>{title}</h1>
        <p className={styles.featureBody}>{description}</p>
      </div>
    </div>
  );
}

export default function ContactUs() {
  return (
    <section className={styles.features}>
      
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
