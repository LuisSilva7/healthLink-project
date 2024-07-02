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
  });

  const updateService = (date, time) => {
    setServiceChoosen({
      ...serviceChoosen,
      date: date,
      time: time,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const showContainer = () => {
    if (selectedContainer === "ServiceContainer")
      return (
        <ServiceContainer
          selectedContainer={selectedContainer}
          setSelectedContainer={setSelectedContainer}
          setServiceChoosen={setServiceChoosen}
        />
      );
    if (selectedContainer === "DateContainer")
      return (
        <DateContainer
          selectedContainer={selectedContainer}
          setSelectedContainer={setSelectedContainer}
          updateService={updateService}
          serviceChoosen={serviceChoosen}
        />
      );
    if (selectedContainer === "ConfirmContainer")
      return (
        <ConfirmContainer
          selectedContainer={selectedContainer}
          setSelectedContainer={setSelectedContainer}
          setServiceChoosen={setServiceChoosen}
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
