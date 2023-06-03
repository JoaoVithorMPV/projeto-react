import React from "react";
import "./style-button.css";

const Button = ({ children, VonClick }) => {
  return (
    <button className="button" onClick={VonClick} type="button">
      {children}
    </button>
  );
};

export default Button;
