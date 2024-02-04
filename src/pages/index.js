import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import WhoWeAre from "@site/src/components/Who";
import ContactUs from "@site/src/components/ContactUs";
import Services from '@site/src/components/Services';

import styles from "./index.module.css";

import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";
const style = {
  padding: "0px 30px 10px 30px",
  margin: '60px 10px 0 10px',
  color: '#fff',
  fontWeight: '600',
  fontSize: 22,

};

function HomepageHeader() {

  return (
    <header className={clsx("hero", styles.heroBanner)}>
          <div className={clsx("col", styles.heroBackground)}>
        <h1>Landscape Design<br />Installation<br />Maintenance</h1>
        
        <div class="intro-text-button">
              <Space wrap align='center' direction="vertical">
              <ConfigProvider
              
                theme={{
                  token: {
                      colorPrimary: '#6B4423',
                      colorPrimaryHover: '#A2C523',
                      borderShadow: '0 4px 0 #286655',
                    }
                  }
                }
              >
                <Button type="primary" shape="round" size='large' style={style} href="#">
                Request a Consultation!
                </Button>
              </ConfigProvider>
              </Space>
          </div>

    </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Your garden is a canvas, and our goal is to help you create a masterpiece that reflects your style while respecting and enhancing the natural environment. Let's create something beautiful together!"
    >
      <HomepageHeader />
      <main>
        <WhoWeAre />
        <Divider />
        <Services />
        <Divider />        
        <ContactUs />
      </main>
    </Layout>
  );
}
