import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/homePage/Hero";
import Services from "../components/homePage/Services";
import Location from "../components/homePage/Location";
import Footer from "../components/shared/Footer";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Location />
      <Footer />
    </>
  );
};

export default HomePage;
