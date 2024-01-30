import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/Homepage";

import styles from "./index.module.css";

import Hero from "../../static/img/chatbot-landing-page-1.svg";

import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";
const style = {
  color: "#fff",
  margin: "30px 40px 10px -50px",
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div class="intro-visual">
        <Row wrap={true}>
          <Col flex="1 1 250px">
            <div class="intro-text">
              <h1 class="intro-visual-header">
                Transform Your Chatbot Dialogue
              </h1>
              <p class="intro-text">
                Crafting bot Conversations, Empowering Users
              </p>
              <h4 class="intro-text">
                Unlock the power of your chatbot's dialogue. At Dialogix Studio,
                we're not just experts — we're passionate about bridging the gap
                between technology and genuine human connection, ensuring every
                interaction with your brand is purposeful, engaging, and
                intuitive.
              </h4>
            </div>
            <div class="intro-text-button">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#86ae22",
                    colorPrimaryHover: "#0476a8",
                    colorTextBase: "#1890ff",
                  },
                }}
              >
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  style={style}
                  href="#"
                >
                  Learn More!
                </Button>
              </ConfigProvider>
            </div>
          </Col>
          <Col flex="0 1 650px">
            <div className="intro-image">
              <Hero />
            </div>
          </Col>
        </Row>
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
