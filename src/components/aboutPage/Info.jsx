import React from "react";
import styles from "./info.module.css";

const Info = () => {
  return (
    <div className={styles["info-container"]}>
      <div className={styles["text-container"]}>
        <h1 className={styles["title"]}>Welcome to HealthLink Clinic</h1>
        <p className={styles["text"]}>
          Our clinic is dedicated to providing high-quality, personalized
          medical care and our experienced team, ensure each visit is
          comfortable and efficient.
        </p>
        <p className={styles["text"]}>
          We aim to promote health and well-being through compassionate,
          innovative care. Visit us and experience a new standard in healthcare,
          where your health is our priority.
        </p>
      </div>
    </div>
  );
};

export default Info;
