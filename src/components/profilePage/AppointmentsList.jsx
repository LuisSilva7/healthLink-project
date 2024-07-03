import React from "react";
import styles from "./appointmentsList.module.css";

const AppointmentsList = ({ appointments }) => {
  return (
    <div className={styles["appointments-list-container"]}>
      <div className={styles["appointments-title-container"]}>
        <h2 className={styles["appointments-title"]}> My Appointments</h2>
      </div>
      <div className={styles["appointments-grid"]}>
        {appointments.map((appointment, index) => (
          <div key={index} className={styles["appointment-container"]}>
            <div className={styles["appointment-title"]}>
              <p>{appointment.name}</p>
            </div>
            <div className={styles["appointment-info"]}>
              <p>
                {appointment.date} - {appointment.time}
              </p>
              <p>{appointment.price} €</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsList;
