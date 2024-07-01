import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";

const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default BookingPage;
