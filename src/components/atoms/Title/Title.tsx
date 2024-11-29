import React from "react";

interface TitleProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Title: React.FC<TitleProps> = ({ text, className, as = "h2" }) => {
  const Element = as;
  return (
    <Element className={`text-2xl font-bold ${className}`}>{text}</Element>
  );
};
