/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ property1, className, text = "Get Started" }) => {
  return (
    <div className={`button ${property1} ${className}`}>
      <div className="get-started">
        {["ver-1", "ver-3"].includes(property1) && <>{text}</>}

        {property1 === "ver-2" && <>Explore Projects</>}
      </div>
    </div>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["ver-3", "ver-2", "ver-1"]),
  text: PropTypes.string,
};
