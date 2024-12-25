import { PlayCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";

export const AboutSection = () => {
  return (
    <div>
      <Row gutter={[16, 16]} style={{ padding: "0 20px" }}>
        <Col span={24}>
          <img
            style={{ width: "274.38px" }}
            alt="Crafting DREAM"
            src="/img/crafting-dream-gardens-into-reality.png"
          />
        </Col>
        <Col span={12}>
          <p style={{ opacity: 0.5 }}>
            At LeafLife, we are passionate about transforming outdoor spaces
            into breathtaking gardens that tell a unique story. Our journey
            began over a decade ago, driven by a shared love for nature
          </p>
        </Col>
        <Col span={12}>
          <p style={{ opacity: 0.5 }}>
            and design. Since then, we have dedicated ourselves to creating
            gardens that enhance your property. Our solid commitment to
            sustainability, innovation, and collaboration has been the
            foundation of our success.
          </p>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ padding: "0 20px" }}>
        <Col span={12}>
          <div
            style={{
              width: "100%",
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              backgroundImage: "url(/img/video.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            >
              <PlayCircleOutlined style={{ fontSize: "24px" }} />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div
            style={{
              width: "100%",
              height: "300px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              padding: "16px",
              borderRadius: "20px",
              backgroundImage: "url(/img/photo.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Button
              type="link"
              style={{ color: "white", borderBottom: "1px solid white" }}
            >
              Explore Projects
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
