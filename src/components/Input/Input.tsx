import React, { HTMLInputTypeAttribute } from "react";
import "./Input.css";

type InputProps = {
  value?: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  size: "md" | "lg";
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  min?: number;
  max?: number;
};

const Input = ({
  value,
  handleChange,
  handleKeyDown,
  type,
  size,
  placeholder,
  min,
  max,
}: InputProps) => {
  return (
    <input
      onKeyDown={handleKeyDown}
      className={`input ${size}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
    />
  );
};

export default Input;
