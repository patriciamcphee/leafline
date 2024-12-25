import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

export const ServicesSection = () => {
  return (
    <div style={{ padding: "0 20px" }}>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: "16px" }}
      >
        <Col>
          <Title level={2} style={{ margin: 0 }}>
            [&nbsp;&nbsp;&nbsp;&nbsp;SERVICES&nbsp;&nbsp;&nbsp;&nbsp;]
          </Title>
        </Col>
        <Col>
          <Button type="link" style={{ borderBottom: "1px solid #006400" }}>
            <Title level={3} style={{ margin: 0, color: "#006400" }}>
              See More Services
            </Title>
          </Button>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <div
            style={{
              height: "740px",
              padding: "32px",
              borderRadius: "20px",
              backgroundImage: "url(/img/item-1-activated.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Row gutter={16} style={{ marginBottom: "298px" }}>
              <Col>
                <Button
                  shape="round"
                  style={{
                    marginRight: "8px",
                    borderColor: "#fff",
                    color: "#fff",
                  }}
                >
                  Home
                </Button>
                <Button
                  shape="round"
                  style={{ borderColor: "#fff", color: "#fff" }}
                >
                  Garden
                </Button>
              </Col>
              <Col>
                <Button
                  shape="round"
                  style={{
                    marginRight: "8px",
                    borderColor: "#fff",
                    color: "#fff",
                  }}
                >
                  Landscape Design
                </Button>
                <Button
                  shape="round"
                  style={{ borderColor: "#fff", color: "#fff" }}
                >
                  Expert
                </Button>
              </Col>
              <Col>
                <ArrowRightOutlined
                  style={{ fontSize: "24px", color: "#fff" }}
                />
              </Col>
            </Row>
            <div>
              <Title level={1} style={{ color: "#fff" }}>
                HOME
                <br />
                GARDEN
              </Title>
              <Paragraph style={{ color: "#fff", width: "434px" }}>
                Crafting the perfect garden space for your home. Whether indoor
                or outdoor, we got it all ready for your greenery needs.
              </Paragraph>
            </div>
          </div>
        </Col>

        <Col span={6}>
          <div
            style={{
              height: "740px",
              padding: "16px 24px",
              borderRadius: "20px",
              backgroundImage: "url(/img/card.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src="/img/arrow.svg" alt="Arrow" style={{ width: "100%" }} />
            <div style={{ marginTop: "auto" }}>
              <Title level={3} style={{ color: "#fff" }}>
                PLANT
                <br />
                SELECTION
              </Title>
              <Paragraph style={{ color: "#fff" }}>
                Hand-picked greenery for your oasis.
              </Paragraph>
            </div>
          </div>
        </Col>

        <Col span={6}>
          <div
            style={{
              height: "740px",
              padding: "16px 24px",
              borderRadius: "20px",
              backgroundImage: "url(/img/card-1.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src="/img/arrow-2.svg" alt="Arrow" style={{ width: "100%" }} />
            <div style={{ marginTop: "auto" }}>
              <Title level={3} style={{ color: "#fff" }}>
                HARD-
                <br />
                SCAPING
              </Title>
              <Paragraph style={{ color: "#fff" }}>
                Adding structure to your garden landscape.
              </Paragraph>
            </div>
          </div>
        </Col>

        <Col span={6}>
          <div
            style={{
              height: "740px",
              padding: "16px 24px",
              borderRadius: "20px",
              backgroundImage: "url(/img/card-2.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src="/img/arrow-2.svg" alt="Arrow" style={{ width: "100%" }} />
            <div style={{ marginTop: "auto" }}>
              <Title level={3} style={{ color: "#fff" }}>
                PUBLIC
                <br />
                GARDEN
              </Title>
              <Paragraph style={{ color: "#fff" }}>
                Expert advice for public garden and city parks.
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
