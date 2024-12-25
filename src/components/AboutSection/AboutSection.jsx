import { Col, Row, Typography } from "antd";
import React from "react";
import styles from './styles.module.css';

const { Title } = Typography;

const ValuesSection = () => {
  return (
    <div style={{ padding: "40px 40px 100px 40px", backgroundColor: "#F4F1DE" }}>
      <Row
        justify="space-between"
        align="top"
      >
        <Col className={styles.sectionTitleLeft}>
          <Title level={5} id="about"> 
            [&nbsp;&nbsp;&nbsp;&nbsp;ABOUT&nbsp;&nbsp;&nbsp;&nbsp;]
          </Title>
        </Col>

      </Row>

      <Row gutter={60} align="top">
        <Col className={styles.crafting} span={10}>
          <h1>CRAFTING <span>DREAM GARDENS</span> INTO REALITY</h1>
          <h3>Led by a passionate horticulture expert from Lake Washington Tech with 5+ years in the field. We craft your garden with precision and horticultural expertise.</h3>
        </Col>
        
            <Col span={13} className={styles.aboutTitle}>
              <h2>Passion in every work</h2>
              <p>
                We are deeply passionate about creating beautiful, sustainable
                green landscapes for our clients.
              </p>

              <h2>Collaboration on top</h2>
              <p>
                We make your dream design come true by combining your ideas with
                our landscape design expertise.
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

              <h2>Personalized services</h2>
              <p>
              We offer tailored services that honor your dreams, with a flexible approach to bring your ideal garden to life.
              </p>
            </Col>
          </Row>
    </div>
  );
};

export default ValuesSection;