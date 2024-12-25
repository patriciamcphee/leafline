import React from "react";
import "./style.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="company-logo-menu">
        <img
          className="logo-white"
          alt="Logo white"
          src="/img/logo-white-1.png"
        />

        <div className="navbar">
          <div className="text-wrapper">ABOUT</div>

          <div className="text-wrapper">SERVICES</div>

          <div className="text-wrapper">PROJECTS</div>

          <div className="text-wrapper">CONTACT</div>
        </div>
      </div>

      <img className="icons" alt="Icons" src="/img/icons.svg" />
    </div>
  );
};

export default Navigation;
