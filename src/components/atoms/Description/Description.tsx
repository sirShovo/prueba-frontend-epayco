import React from "react";

interface DescriptionProps {
  text: string;
  className?: string;
}

export const Description: React.FC<DescriptionProps> = ({
  text,
  className,
}) => {
  return <p className={`text-gray-600 ${className}`}>{text}</p>;
};
