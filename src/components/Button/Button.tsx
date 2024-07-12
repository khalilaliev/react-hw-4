import React from "react";
import { IButtonProps } from "../../interfaces/button-text";

const Button: React.FC<IButtonProps> = ({ text }) => {
  return (
    <>
      <button className="btn btn-primary">{text}</button>
    </>
  );
};

export default Button;
