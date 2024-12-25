import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const CtaButton = () => {
  return (
    <div className="CTA-button">
      <div className="READY-TO-TRANSFORM">
        READY TO TRANSFORM
        <br />
        YOUR GARDEN?
      </div>

      <Button className="button-instance" property1="ver-1" text="Contact Us" />
    </div>
  );
};
