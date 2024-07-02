import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import TopContainer from "../components/bookingPage/TopContainer";

const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <TopContainer />
    </>
  );
};

export default BookingPage;
