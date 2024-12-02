import React from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  type,
  placeholder = "",
  value,
  onChange,
  className,
  disabled = false,
  name
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`${styles.input} ${disabled ? styles.disabled : ""} ${
        className || ""
      }`}
      name={name}
    />
  );
};
