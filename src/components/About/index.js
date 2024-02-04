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
        <p>
          <ul>
            <li><b>Free Consultation</b></li>
            <li><b>Content & Writing Mastery</b></li>
            <li><b>Simplifying the Complex</b></li>
            <li><b>Tailored Collaboration</b></li>
          </ul>
        </p>
        <br />
        <h2>Worried about costs?</h2>
        <p>I understand that budgeting is crucial. Rest assured, after our free consultation, you'll have a clear picture of service costs, ensuring no surprises down the road.</p>
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

export default function HomepageAbout() {
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
