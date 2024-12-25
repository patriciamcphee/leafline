import { Button, Col, Row, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

export const ValuesSection = () => {
  return (
    <div style={{ padding: "0 20px", textAlign: "center" }}>
      <Row
        justify="space-between"
        align="top"
        style={{ marginBottom: "100px" }}
      >
        <Col>
          <Title level={2} style={{ margin: 0 }}>
            [&nbsp;&nbsp;&nbsp;&nbsp;VALUES&nbsp;&nbsp;&nbsp;&nbsp;]
          </Title>
        </Col>
        <Col>
          <div>
            <Row
              justify="space-between"
              align="middle"
              style={{
                borderBottom: "1px solid #004d40",
                paddingBottom: "4px",
                marginBottom: "16px",
              }}
            >
              <Col>
                <Paragraph style={{ margin: 0 }}>Landscape Design</Paragraph>
              </Col>
              <Col>
                <Title level={5} style={{ margin: 0 }}>
                  01
                </Title>
              </Col>
            </Row>
            <Row
              justify="space-between"
              align="middle"
              style={{
                borderBottom: "1px solid #004d40",
                paddingBottom: "4px",
              }}
            >
              <Col>
                <Paragraph style={{ margin: 0 }}>Indoor Garden</Paragraph>
              </Col>
              <Col>
                <Title level={5} style={{ margin: 0 }}>
                  02
                </Title>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: "100px" }}
      >
        <Col>
          <img
            src="/img/we-are-different-in-many-ways.png"
            alt="We ARE DIFFERENT IN"
            style={{ width: "735.33px", height: "148.56px" }}
          />
        </Col>
        <Col>
          <Button
            type="primary"
            size="large"
            style={{ backgroundColor: "#004d40", borderColor: "#004d40" }}
          >
            Get Started
          </Button>
        </Col>
      </Row>

      <Row justify="space-between" align="bottom">
        <Col>
          <div
            style={{
              width: "360px",
              height: "612px",
              backgroundImage: "url(/img/photo.png)",
              backgroundSize: "cover",
              borderRadius: "20px",
            }}
          />
        </Col>
        <Col>
          <Row gutter={[0, 16]}>
            <Col span={12}>
              <div
                style={{
                  backgroundImage: "url(/img/icon.png)",
                  backgroundSize: "cover",
                  height: "50px",
                  width: "50px",
                }}
              />
              <Title level={4}>Passion in every work</Title>
              <Paragraph style={{ opacity: 0.5 }}>
                We are deeply passionate about creating beautiful, sustainable
                green landscapes for our clients.
              </Paragraph>
            </Col>
            <Col span={12}>
              <div
                style={{
                  backgroundImage: "url(/img/icon-1.png)",
                  backgroundSize: "cover",
                  height: "50px",
                  width: "50px",
                }}
              />
              <Title level={4}>Collaboration on top</Title>
              <Paragraph style={{ opacity: 0.5 }}>
                We make your dream design come true by combining your ideas with
                our 10+ years of garden design expertise.
              </Paragraph>
            </Col>
            <Col span={12}>
              <div
                style={{
                  backgroundImage: "url(/img/icon-2.png)",
                  backgroundSize: "cover",
                  height: "50px",
                  width: "50px",
                }}
              />
              <Title level={4}>Sustainability in check</Title>
              <Paragraph style={{ opacity: 0.5 }}>
                We love nurturing nature, one garden at a time, so that you can
                enjoy the beautiful landscape of our garden even longer.
              </Paragraph>
            </Col>
            <Col span={12}>
              <div
                style={{
                  backgroundImage: "url(/img/icon-3.png)",
                  backgroundSize: "cover",
                  height: "50px",
                  width: "50px",
                }}
              />
              <Title level={4}>Creativity unleashed</Title>
              <Paragraph style={{ opacity: 0.5 }}>
                We make sure to only give you our innovative designs that stand
                out to make sure that your garden is not like the others.
              </Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
