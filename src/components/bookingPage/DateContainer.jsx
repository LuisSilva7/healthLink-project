import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./dateContainer.module.css";

const DateContainer = ({ setSelectedContainer, updateService }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.toDateString());
  const [selectedTime, setSelectedTime] = useState("09:00 AM");

  const handleSelectChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date.toDateString());
  };

  const goBack = () => {
    setSelectedContainer("ServiceContainer");
  };

  const confirm = () => {
    updateService(selectedDate, selectedTime);
    setSelectedContainer("ConfirmContainer");
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
      <div className={styles["date-container"]}>
        <h2>Select a Date</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          className={styles["date-picker"]}
          calendarClassName={styles["custom-calendar"]}
          popperClassName={styles["custom-popper"]}
          withPortal
        />
      </div>
      <div className={styles["time-container"]}>
        <h2>Select a Time</h2>
        <select
          className={styles["time-select"]}
          value={selectedTime}
          onChange={handleSelectChange}
        >
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">1:00 PM</option>
          <option value="02:00 PM">2:00 PM</option>
          <option value="03:00 PM">3:00 PM</option>
          <option value="04:00 PM">4:00 PM</option>
        </select>
      </div>
      <div className={styles["buttons"]}>
        <button onClick={() => goBack()} className={styles["button"]}>
          Go back
        </button>
        <button onClick={() => confirm()} className={styles["button"]}>
          Go next
        </button>
      </div>
    </div>
  );
};

export default DateContainer;
