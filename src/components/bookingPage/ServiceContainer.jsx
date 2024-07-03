import React from "react";
import styles from "./serviceContainer.module.css";
import ServiceBox from "./ServiceBox";

const TopContainer = ({ setSelectedContainer, setServiceChoosen }) => {
  const dermatologyServices = [
    {
      name: "Acne Treatment",
      price: 75,
      category: "dermatologyServices",
    },
    {
      name: "Skin Cancer Screening",
      price: 100,
      category: "dermatologyServices",
    },
    {
      name: "Cosmetic Dermatology",
      price: 150,
      category: "dermatologyServices",
    },
  ];

  const dentistryServices = [
    {
      name: "Teeth Whitening",
      price: 200,
      category: "dentistryServices",
    },
    {
      name: "Dental Implants",
      price: 2500,
      category: "dentistryServices",
    },
    {
      name: "Routine Check-ups",
      price: 80,
      category: "dentistryServices",
    },
  ];

  const ophthalmologyServices = [
    {
      name: "LASIK Surgery",
      price: 2000,
      category: "ophthalmologyServices",
    },
    {
      name: "Cataract Surgery",
      price: 3500,
      category: "ophthalmologyServices",
    },
    {
      name: "Glaucoma Management",
      price: 200,
      category: "ophthalmologyServices",
    },
  ];

  const displayEventLine = () => {
    return (
      <div className={styles["event-line"]}>
        <div className={styles["event-active-circle"]}>
          <span className={styles["event-active-number"]}>1</span>
          <span className={styles["event-name"]}>Service</span>
        </div>
        <div className={styles["event-link"]}></div>
        <div className={styles["event-circle"]}>
          <span className={styles["event-number"]}>2</span>
          <span className={styles["event-name"]}>Date</span>
        </div>
        <div className={styles["event-link"]}></div>
        <div className={styles["event-circle"]}>
          <span className={styles["event-number"]}>3</span>
          <span className={styles["event-name"]}>Confirm</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles["top-container"]}>
      <h2 className={styles["title"]}>Appointments</h2>
      <hr className={styles["line"]} />
      {displayEventLine()}
      <div className={styles["services-grid"]}>
        <ServiceBox
          service={dermatologyServices}
          setSelectedContainer={setSelectedContainer}
          setServiceChoosen={setServiceChoosen}
        />
        <ServiceBox
          service={dentistryServices}
          setSelectedContainer={setSelectedContainer}
          setServiceChoosen={setServiceChoosen}
        />
        <ServiceBox
          service={ophthalmologyServices}
          setSelectedContainer={setSelectedContainer}
          setServiceChoosen={setServiceChoosen}
        />
      </div>
    </div>
  );
};

export default TopContainer;
