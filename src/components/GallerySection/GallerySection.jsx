import { Col, Row } from "antd";
import React from "react";

export const GallerySection = () => {
  return (
    <Row justify="space-between" align="bottom" style={{ padding: "0 20px" }}>
      <Col>
        <Row>
          <Col>
            <div
              style={{
                fontSize: "var(--heading-7-font-size)",
                fontWeight: "var(--heading-7-font-weight)",
                color: "dark-green",
                whiteSpace: "nowrap",
              }}
            >
              [&nbsp;&nbsp;&nbsp;&nbsp;GALLERY&nbsp;&nbsp;&nbsp;&nbsp;]
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              alt="Our WORK"
              src="/img/our-work.png"
              style={{ width: "253.56px" }}
            />
          </Col>
        </Row>
      </Col>

      <Col>
        <Row gutter={[16, 16]}>
          <Col>
            <div
              style={{
                width: "302px",
                height: "694px",
                backgroundImage: "url(/img/left-content.png)",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            />
          </Col>
          <Col>
            <Row gutter={[16, 16]}>
              <Col>
                <div
                  style={{
                    width: "302px",
                    height: "287px",
                    backgroundImage: "url(/img/photo.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </Col>
              <Col>
                <div
                  style={{
                    width: "302px",
                    height: "383px",
                    backgroundImage: "url(/img/photo-1.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row gutter={[16, 16]}>
              <Col>
                <div
                  style={{
                    width: "302px",
                    height: "480px",
                    backgroundImage: "url(/img/photo-activated.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    backgroundColor: "#374836bf",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "126px",
                      height: "126px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100px",
                      border: "1px solid transparent",
                      backdropFilter: "blur(10px) brightness(100%)",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 100%)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "var(--heading-6-font-size)",
                        fontWeight: "var(--heading-6-font-weight)",
                        color: "white",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Project A
                    </div>
                    <div
                      style={{
                        fontSize: "var(--heading-7-font-size)",
                        fontWeight: "var(--heading-7-font-weight)",
                        color: "white",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      2023
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    width: "302px",
                    height: "190px",
                    backgroundImage: "url(/img/photo-2.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
