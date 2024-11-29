import React from "react";
import { Label } from "../../atoms/Label/Label";
import { Input } from "../../atoms/Input/Input";

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelClassName?: string;
  inputClassName?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  labelClassName,
  inputClassName,
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={id} text={label} className={labelClassName} />
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClassName}
      />
    </div>
  );
};
