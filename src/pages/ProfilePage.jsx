import React, { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ProfileContainer from "../components/profilePage/ProfileContainer";
import AppointmentsList from "../components/profilePage/AppointmentsList";
import styles from "../components/shared/layout.module.css";

const ProfilePage = () => {
  const [appointments, setAppointments] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loginUser"))) {
      let user = { name: "", lastName: "" };
      user.name = JSON.parse(localStorage.getItem("name"));
      user.lastName = JSON.parse(localStorage.getItem("lastName"));
      console.log(user);
      setUserInfo(user);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("appointments")) {
      let appoints = JSON.parse(localStorage.getItem("appointments"));

      if (userInfo == null) {
        appoints = appoints.filter(
          (appointment) => appointment.user === "loginDefault"
        );
      } else {
        appoints = appoints.filter(
          (appointment) => appointment.user === "loginUser"
        );
      }
      console.log(appoints);
      setAppointments(appoints);
    }
  }, [userInfo]);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>
        <ProfileContainer userInfo={userInfo} />
        <AppointmentsList appointments={appointments} />
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
