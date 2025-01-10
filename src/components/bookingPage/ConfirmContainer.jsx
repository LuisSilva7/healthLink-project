import React from "react";
import styles from "./confirmContainer.module.css";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const ConfirmContainer = ({ setSelectedContainer, serviceChoosen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("loginUser")) ||
      JSON.parse(localStorage.getItem("loginDefault"))
    )
      setIsLoggedIn(true);
  }, []);

  const cancel = () => {
    setSelectedContainer("DateContainer");
  };

  const confirm = () => {
    if (localStorage.getItem("appointments")) {
      const appointments = JSON.parse(localStorage.getItem("appointments"));
      appointments.push(serviceChoosen);
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      const newAppointments = [];

      newAppointments.push(serviceChoosen);
      localStorage.setItem("appointments", JSON.stringify(newAppointments));
    }

    navigate("/");
  };

  const displayEventLine = () => {
    return (
      <div className={styles["event-line"]}>
        <div className={styles["event-active-circle"]}>
          <span className={styles["event-active-number"]}>1</span>
          <span className={styles["event-name"]}>Service</span>
        </div>
        <div className={styles["event-active-link"]}></div>
        <div className={styles["event-active-circle"]}>
          <span className={styles["event-active-number"]}>2</span>
          <span className={styles["event-name"]}>Date</span>
        </div>
        <div className={styles["event-active-link"]}></div>
        <div className={styles["event-active-circle"]}>
          <span className={styles["event-active-number"]}>3</span>
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
      <div className={styles["confirm-container"]}>
        <h3 className={styles["service-group-title"]}>
          {serviceChoosen.category === "dentistryServices" &&
            "Dentistry Services"}
          {serviceChoosen.category === "dermatologyServices" &&
            "Dermatology Services"}
          {serviceChoosen.category === "ophthalmologyServices" &&
            "Ophthalmology Services"}
        </h3>

        <div className={styles["service-info-box"]}>
          <hr className={styles["service-line"]} />
          <div className={styles["service-top-info"]}>
            <p className={styles["service-title"]}>{serviceChoosen.name}</p>
            <p className={styles["service-cost"]}>{serviceChoosen.price} €</p>
          </div>
          <div className={styles["service-bottom-info"]}>
            <p className={styles["service-date"]}>{serviceChoosen.date}</p>
            <p className={styles["service-time"]}>{serviceChoosen.time}</p>
          </div>
          {isLoggedIn ? (
            <div className={styles["buttons"]}>
              <button
                onClick={() => cancel()}
                className={styles["cancel-button"]}
              >
                Cancel
              </button>
              <button
                onClick={() => confirm()}
                className={styles["confirm-button"]}
              >
                Confirm
              </button>
            </div>
          ) : (
            <Link to="/login" className={styles["confirm-button"]}>
              LogIn First
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmContainer;
