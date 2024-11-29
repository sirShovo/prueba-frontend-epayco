import React from "react";
import { Button } from "../../atoms/Button/Button";
import styles from "./ButtonWrapper.module.css";

export const ButtonWrapper: React.FC<{
  buttonText: string;
  onClick: () => void;
}> = ({ buttonText, onClick }) => {
  return (
    <div className={styles.button_container}>
      <Button text={buttonText} onClick={onClick} />
    </div>
  );
};
