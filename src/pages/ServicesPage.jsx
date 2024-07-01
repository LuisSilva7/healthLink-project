import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Services from "../components/servicesPage/Services";
import Footer from "../components/shared/Footer";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Services />
      <Footer />
    </>
  );
};

export default ServicesPage;
