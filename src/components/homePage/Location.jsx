import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
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
          <FaMapMarkerAlt className={styles["icon"]} />
          <h2 className={styles["location-name"]}>HealthLink Clinic</h2>
          <p className={styles["location-address"]}>
            123 Main Street
            <br />
            Anytown, USA 12345
          </p>
          <p className={styles["location-number"]}>
            <FaPhoneAlt className={styles["icon-inline"]} /> +1 212-555-7890
          </p>
        </div>
        <hr className={styles["middle-line"]} />
        <div className={styles["schedule"]}>
          <FaClock className={styles["icon"]} />
          <h4 className={styles["schedule-title"]}>Business Hours</h4>
          <p className={styles["schedule-day"]}>MON - FRI: 9:00 AM - 5:00 PM</p>
          <p className={styles["schedule-day"]}>SAT: 9:00 AM - 1:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
