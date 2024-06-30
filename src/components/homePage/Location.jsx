import React from "react";
import styles from "./location.module.css";

const Location = () => {
  return (
    <div className={styles["location-container"]}>
      <div className={styles["location-title"]}>
        <h2>Our Location</h2>
        <hr />
      </div>
      <div className={styles["location-display"]}>
        <div className={styles["location"]}>
          <h2 className={styles["location-name"]}>HealthLink Clinic</h2>
          <p className={styles["location-address"]}>
            123 Main Street Anytown, USA 12345
          </p>
          <p className={styles["location-number"]}>+1 212-555-7890</p>
        </div>
        <hr className={styles["middle-line"]} />
        <div className={styles["schedual"]}>
          <h4 className={styles["schedual-title"]}>Business Hours</h4>
          <p className={styles["schedual-day"]}>MON - 9:00 AM - 5:00 PM</p>
          <p className={styles["schedual-day"]}>TUE - 9:00 AM - 5:00 PM</p>
          <p className={styles["schedual-day"]}>WED - 9:00 AM - 5:00 PM</p>
          <p className={styles["schedual-day"]}>THU - 9:00 AM - 5:00 PM</p>
          <p className={styles["schedual-day"]}>FRI - 9:00 AM - 5:00 PM</p>
          <p className={styles["schedual-day"]}>SAT - 9:00 AM - 1:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
