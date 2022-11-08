import React from "react";
import styles from "./Button.module.css";

const Button: React.FC<{ className?: string }> = ({ className = "" }) => {
  console.log("styles", styles);
  console.log("styles.button", styles.button);
  return (
    <button className={styles.button + " " + className}>
      My Pink Button <span className={styles.buttonIcon}>$</span>
    </button>
  );
};

export default Button;
