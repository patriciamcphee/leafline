import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/Homepage";

import styles from "./index.module.css";

import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
          <div className={clsx("col", styles.heroBackground)}>
        <h1>Landscape Design,<br />Installation, and<br />Maintenance</h1>
        <Button>Request a Free Consultation!</Button>

    </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Transform Your Chatbot Dialogue. Unlock the power of your chatbot's dialogue. At Dialogix Studio, we're not just experts — we're passionate about bridging the gap between technology and genuine human connection, ensuring every interaction with your brand is purposeful, engaging, and intuitive."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
