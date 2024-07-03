import React, { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import ServiceContainer from "../components/bookingPage/ServiceContainer";
import DateContainer from "../components/bookingPage/DateContainer";
import ConfirmContainer from "../components/bookingPage/ConfirmContainer";
import Footer from "../components/shared/Footer";

const BookingPage = () => {
  const [selectedContainer, setSelectedContainer] =
    useState("ServiceContainer");
  const [serviceChoosen, setServiceChoosen] = useState({
    category: "",
    name: "",
    price: "",
    date: "",
    time: "",
    user: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateService = (date, time) => {
    let user = "";
    if (JSON.parse(localStorage.getItem("loginUser"))) {
      user = "loginUser";
    } else {
      user = "loginDefault";
    }

    setServiceChoosen({
      ...serviceChoosen,
      date: date,
      time: time,
      user: user,
    });
  };

  const showContainer = () => {
    if (selectedContainer === "ServiceContainer")
      return (
        <ServiceContainer
          setSelectedContainer={setSelectedContainer}
          setServiceChoosen={setServiceChoosen}
        />
      );
    if (selectedContainer === "DateContainer")
      return (
        <DateContainer
          setSelectedContainer={setSelectedContainer}
          updateService={updateService}
        />
      );
    if (selectedContainer === "ConfirmContainer")
      return (
        <ConfirmContainer
          setSelectedContainer={setSelectedContainer}
          serviceChoosen={serviceChoosen}
        />
      );
  };

  return (
    <>
      <Navbar />
      {showContainer()}
      <Footer />
    </>
  );
};

export default BookingPage;
