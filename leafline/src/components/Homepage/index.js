import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Continual Learning",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        We like to think of ourselves as lifelong students. With the spirit of an Innovative Thinker, we're always looking for ways to better understand and improve chatbot experiences, blending human conversation's nuances with AI's wonders.
      </>
    ),
  },
  {
    title: "The Care in Crafting",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Each project is a new adventure for us. With the heart of an Artisanal Craftsperson, we pour dedication and careful thought into our work. It's not just designing but also connecting, understanding, and narrating.
      </>
    ),
  },
  {
    title: "Bridging Two Worlds",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Our passion is to bring worlds closer. Recognizing the fine balance between technological precision and human warmth, we hope to serve as a modest bridge, making every digital conversation feel just a bit more human.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
