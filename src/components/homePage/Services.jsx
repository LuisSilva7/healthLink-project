import React from "react";
import styles from "./services.module.css";
import dermatologyImage from "../../assets/images/dermatology-image.png";
import dentistryImage from "../../assets/images/dentistry-image.png";
import ophthalmologyImage from "../../assets/images/ophthalmology-image.png";

const Services = () => {
  return (
    <div className={styles["services-container"]}>
      <div className={styles["services-title"]}>
        <h2>Our Services</h2>
        <hr />
      </div>
      <div className={styles["services-display"]}>
        <div className={styles["service-container"]}>
          <div className={styles["service-image-container"]}>
            <img src={dermatologyImage} className={styles["service-image"]} />
          </div>
          <div className={styles["service-text-container"]}>
            <h3>Dermatology</h3>
            <p>
              Achieve healthier skin with our dermatology services, treating
              acne, eczema, and skin cancer.
            </p>
          </div>
        </div>

        <div className={styles["service-container"]}>
          <div className={styles["service-image-container"]}>
            <img src={dentistryImage} className={styles["service-image"]} />
          </div>
          <div className={styles["service-text-container"]}>
            <h3>Dentistry</h3>
            <p>
              Enhance your smile with our dental care, from cleanings and
              fillings to implants and orthodontics.
            </p>
          </div>
        </div>

        <div className={styles["service-container"]}>
          <div className={styles["service-image-container"]}>
            <img src={ophthalmologyImage} className={styles["service-image"]} />
          </div>
          <div className={styles["service-text-container"]}>
            <h3>Ophthalmology</h3>
            <p>
              Improve your vision with our ophthalmology care, treating
              glaucoma, cataracts, and providing LASIK.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
