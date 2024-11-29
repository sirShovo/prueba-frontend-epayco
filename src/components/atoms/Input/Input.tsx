import React from "react";

interface InputProps {
  id: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
    />
  );
};
