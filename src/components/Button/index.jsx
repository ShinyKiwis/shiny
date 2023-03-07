import React from "react";
import ButtonStyle from "./Button.module.css";

const Button = ({ text, isPrimary }) => {
  return (
    <button
      className={
        isPrimary ? ButtonStyle.primary_button : ButtonStyle.secondary_button
      }
    >
      {text}
    </button>
  );
};

export default Button;
