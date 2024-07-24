import React from "react";
import "./Button.scss";
// className={`button_${className}`}

const Button = ({ children, className }) => {
  return <button className={`button button_${className}`}> {children} </button>;
};

export default Button;
