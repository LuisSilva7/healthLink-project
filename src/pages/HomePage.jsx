import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/homePage/Hero";
import Services from "../components/homePage/Services";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
};

export default HomePage;
