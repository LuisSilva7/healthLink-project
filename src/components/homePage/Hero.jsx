import React from "react";
import styles from "./hero.module.css";

const Teste = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-text"]}>
        <h2 className={styles["hero-title"]}>
          Your Premier Healthcare Provider
        </h2>
        <h3 className={styles["hero-sub-title"]}>
          Book your appointment online today!
        </h3>
        <button className={styles["hero-button"]}>BOOK NOW</button>
      </div>
    </div>
  );
};

export default Teste;
