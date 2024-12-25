import { Col, Row, Typography } from "antd";
import React from "react";
import styles from './styles.module.css';

const { Title } = Typography;

const ValuesSection = () => {
  return (
    <div style={{ padding: "40px 40px", backgroundColor: "#F4F1DE" }}>
      <Row
        justify="space-between"
        align="top"
      >
        <Col style={{ color: '#286655' }}>
        <div id="about">
          <Title level={5}> 
            [&nbsp;&nbsp;&nbsp;&nbsp;ABOUT&nbsp;&nbsp;&nbsp;&nbsp;]
          </Title>
          </div>
        </Col>

      </Row>

      <Row gutter={24} align="top">
        <Col className={styles.crafting} span={10}>
          <h1>CRAFTING <span>DREAM GARDENS</span> INTO REALITY</h1>
        </Col>
        
            <Col span={12} className={styles.aboutTitle}>
              <h2>Passion in every work</h2>
              <p>
                We are deeply passionate about creating beautiful, sustainable
                green landscapes for our clients.
              </p>

              <h2>Collaboration on top</h2>
              <p>
                We make your dream design come true by combining your ideas with
                our 10+ years of garden design expertise.
              </p>

              <h2>Sustainability in check</h2>
              <p>
                We love nurturing nature, one garden at a time, so that you can
                enjoy the beautiful landscape of our garden even longer.
              </p>

              <h2>Creativity unleashed</h2>
              <p>
                We make sure to only give you our innovative designs that stand
                out to make sure that your garden is not like the others.
              </p>
            </Col>
          </Row>
    </div>
  );
};

export default ValuesSection;