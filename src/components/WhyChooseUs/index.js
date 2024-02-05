import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Why Choose Us",
//    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        We like to think of ourselves as lifelong students. With the spirit of an Innovative Thinker, we're always looking for ways to better understand and improve chatbot experiences, blending human conversation's nuances with AI's wonders.
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
        <p className={styles.featureBody}>Embrace the journey to your personal Eden with Leafline Garden Design. Together, let's create something beautiful.</p>
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
