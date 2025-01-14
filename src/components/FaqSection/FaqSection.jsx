import { DownOutlined } from "@ant-design/icons";
import { Col, Collapse, Image, Row, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;
const { Panel } = Collapse;

export const FaqSection = () => {
  return (
    <div style={{ padding: "60px 60px", backgroundColor: "#F4F1DE" }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row justify="space-between" align="top">
            <Col>
              <Title level={1} style={{ color: "#28665556", fontSize: '64px', lineHeight: '1' }}>
                FREQUENTLY
                <br />
                <span style={{ color: "#286655" }}>ASKED</span>
                <br />
                <span style={{ color: "#28665556" }}>QUESTIONS</span>
              </Title>
            </Col>
            <Col>
              <Text
                style={{
                  fontSize: "16px",
                  color: "#286655",
                }}
              >
                [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F.A.Q.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
              </Text>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={10}>
              <Image
                width={431}
                height={368}
                src="/images/landscape-design-1.jpeg"
                preview={false}
                style={{ borderRadius: "20px" }}
              />
            </Col>
            <Col span={14}>
              <Collapse
                expandIcon={({ isActive }) => (
                  <DownOutlined rotate={isActive ? 180 : 0} />
                )}
                bordered={false}
                style={{ background: "none" }}
              >
                <Panel
                  header="What is the process for getting a garden design?"
                  key="1"
                  style={{
                    borderBottom: "1px solid #374836",
                    paddingBottom: "24px",
                  }}
                />
                <Panel
                  header="How long does it take to complete a garden design project?"
                  key="2"
                  style={{
                    borderBottom: "1px solid #374836",
                    paddingBottom: "24px",
                  }}
                >
                  <Text style={{ opacity: 0.75 }}>
                    The timeline varies based on the project's complexity and
                    size. Small projects may take a few weeks, while larger ones
                    could take a few months. During the consultation, we will
                    provide a more accurate estimate. We will design garden
                    based on your own needs, budget, and time constraints.
                  </Text>
                </Panel>
                <Panel
                  header="Do you offer maintenance services after the garden is installed?"
                  key="3"
                  style={{
                    borderBottom: "1px solid #374836",
                    paddingBottom: "24px",
                  }}
                />
                <Panel
                  header="Can I incorporate sustainability values into my garden design?"
                  key="4"
                  style={{
                    borderBottom: "1px solid #374836",
                    paddingBottom: "24px",
                  }}
                />
              </Collapse>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
