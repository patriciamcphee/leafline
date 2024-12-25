import { Col, Row } from "antd";
import React from "react";

export const HowItWorksSection = () => {
  return (
    <div
      style={{
        width: "1440px",
        padding: "100px 20px",
        background:
          "url(/img/how-it-works-section.png) center center / cover no-repeat",
      }}
    >
      <Row justify="space-between" align="top">
        <Col>
          <img
            alt="Simple STEPS FOR OUR"
            src="/img/simple-steps-for-our-landscape-work.png"
          />
        </Col>
        <Col>
          <div
            style={{
              marginTop: "-1px",
              fontFamily: "var(--heading-7-font-family)",
              fontWeight: "var(--heading-7-font-weight)",
              fontSize: "var(--heading-7-font-size)",
              letterSpacing: "var(--heading-7-letter-spacing)",
              lineHeight: "var(--heading-7-line-height)",
              color: "white",
              whiteSpace: "nowrap",
            }}
          >
            [&nbsp;&nbsp;&nbsp;&nbsp;HOW IT WORKS&nbsp;&nbsp;&nbsp;&nbsp;]
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: "100px" }}>
        <Col span={12}>
          <Row align="top" gutter={12}>
            <Col>
              <div
                style={{
                  width: "2px",
                  height: "100%",
                  border: "1px dashed white",
                  opacity: 0.25,
                }}
              />
            </Col>
            <Col>
              <div
                style={{
                  marginTop: "-1px",
                  fontFamily: "var(--heading-4-font-family)",
                  fontWeight: "var(--heading-4-font-weight)",
                  fontSize: "var(--heading-4-font-size)",
                  letterSpacing: "var(--heading-4-letter-spacing)",
                  lineHeight: "var(--heading-4-line-height)",
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                02&nbsp;&nbsp;|&nbsp;&nbsp;Design &amp; planning
              </div>
              <p
                style={{
                  width: "400px",
                  opacity: 0.5,
                  fontFamily: "var(--paragraph-font-family)",
                  fontWeight: "var(--paragraph-font-weight)",
                  fontSize: "var(--paragraph-font-size)",
                  letterSpacing: "var(--paragraph-letter-spacing)",
                  lineHeight: "var(--paragraph-line-height)",
                  color: "white",
                }}
              >
                Our team of experts meticulously crafts a custom garden design
                that aligns with your desires and your space characteristics.
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <Row align="top" gutter={12}>
            <Col>
              <div
                style={{
                  width: "2px",
                  height: "100%",
                  border: "1px dashed white",
                  opacity: 0.25,
                }}
              />
            </Col>
            <Col>
              <div
                style={{
                  marginTop: "-1px",
                  fontFamily: "var(--heading-4-font-family)",
                  fontWeight: "var(--heading-4-font-weight)",
                  fontSize: "var(--heading-4-font-size)",
                  letterSpacing: "var(--heading-4-letter-spacing)",
                  lineHeight: "var(--heading-4-line-height)",
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                04&nbsp;&nbsp;|&nbsp;&nbsp;Garden decorating
              </div>
              <p
                style={{
                  width: "400px",
                  opacity: 0.5,
                  fontFamily: "var(--paragraph-font-family)",
                  fontWeight: "var(--paragraph-font-weight)",
                  fontSize: "var(--paragraph-font-size)",
                  letterSpacing: "var(--paragraph-letter-spacing)",
                  lineHeight: "var(--paragraph-line-height)",
                  color: "white",
                }}
              >
                With your design finalized, we put on our gardening gloves and
                work, creating your garden to be as beautiful as envisioned.
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <Row align="bottom" gutter={12}>
            <Col>
              <div
                style={{
                  width: "2px",
                  height: "100%",
                  border: "1px dashed white",
                  opacity: 0.25,
                }}
              />
            </Col>
            <Col>
              <div
                style={{
                  marginTop: "-1px",
                  fontFamily: "var(--heading-4-font-family)",
                  fontWeight: "var(--heading-4-font-weight)",
                  fontSize: "var(--heading-4-font-size)",
                  letterSpacing: "var(--heading-4-letter-spacing)",
                  lineHeight: "var(--heading-4-line-height)",
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                01&nbsp;&nbsp;|&nbsp;&nbsp;Design consultation
              </div>
              <p
                style={{
                  width: "400px",
                  opacity: 0.5,
                  fontFamily: "var(--paragraph-font-family)",
                  fontWeight: "var(--paragraph-font-weight)",
                  fontSize: "var(--paragraph-font-size)",
                  letterSpacing: "var(--paragraph-letter-spacing)",
                  lineHeight: "var(--paragraph-line-height)",
                  color: "white",
                }}
              >
                In the initial step, we sit down with you to have a detailed
                discussion about your gardening vision and preferences.
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <Row align="bottom" gutter={12}>
            <Col>
              <div
                style={{
                  width: "2px",
                  height: "100%",
                  border: "1px dashed white",
                  opacity: 0.25,
                }}
              />
            </Col>
            <Col>
              <div
                style={{
                  marginTop: "-1px",
                  fontFamily: "var(--heading-4-font-family)",
                  fontWeight: "var(--heading-4-font-weight)",
                  fontSize: "var(--heading-4-font-size)",
                  letterSpacing: "var(--heading-4-letter-spacing)",
                  lineHeight: "var(--heading-4-line-height)",
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                03&nbsp;&nbsp;|&nbsp;&nbsp;Implement construction
              </div>
              <p
                style={{
                  width: "400px",
                  opacity: 0.5,
                  fontFamily: "var(--paragraph-font-family)",
                  fontWeight: "var(--paragraph-font-weight)",
                  fontSize: "var(--paragraph-font-size)",
                  letterSpacing: "var(--paragraph-letter-spacing)",
                  lineHeight: "var(--paragraph-line-height)",
                  color: "white",
                }}
              >
                We present the design to you for review. Once approved, we move
                forward to implement the plan with construction.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
