import React from "react";
import styles from "./serviceBox.module.css";

const ServiceBox = ({ service, setSelectedContainer, setServiceChoosen }) => {
  return (
    <div className={styles["service-box-container"]}>
      <h3 className={styles["service-group-title"]}>Dermatology Services</h3>
      <div className={styles["service-info-box"]}>
        <hr className={styles["service-line"]} />
        <div className={styles["service-info"]}>
          <p className={styles["service-title"]}>{service[0].name}</p>
          <p className={styles["service-cost"]}>{service[0].price} €</p>
        </div>
        <button
          onClick={() => {
            setServiceChoosen({
              category: `${service[0].category}`,
              name: `${service[0].name}`,
              price: `${service[0].price}`,
              date: "",
              time: "",
            });
            setSelectedContainer("DateContainer");
          }}
          className={styles["book-now-button"]}
        >
          BOOK NOW
        </button>
      </div>
      <div className={styles["service-info-box"]}>
        <hr className={styles["service-line"]} />
        <div className={styles["service-info"]}>
          <p className={styles["service-title"]}>{service[1].name}</p>
          <p className={styles["service-cost"]}>{service[1].price} €</p>
        </div>
        <button
          onClick={() => {
            setServiceChoosen({
              category: `${service[1].category}`,
              name: `${service[1].name}`,
              price: `${service[1].price}`,
              date: "",
              time: "",
            });
            setSelectedContainer("DateContainer");
          }}
          className={styles["book-now-button"]}
        >
          BOOK NOW
        </button>
      </div>
      <div className={styles["service-info-box"]}>
        <hr className={styles["service-line"]} />
        <div className={styles["service-info"]}>
          <p className={styles["service-title"]}>{service[2].name}</p>
          <p className={styles["service-cost"]}>{service[2].price} €</p>
        </div>
        <button
          onClick={() => {
            setServiceChoosen({
              category: `${service[2].category}`,
              name: `${service[2].name}`,
              price: `${service[2].price}`,
              date: "",
              time: "",
            });
            setSelectedContainer("DateContainer");
          }}
          className={styles["book-now-button"]}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default ServiceBox;
