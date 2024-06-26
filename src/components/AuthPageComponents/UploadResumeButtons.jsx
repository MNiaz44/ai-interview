import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`px-3 py-1  ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
