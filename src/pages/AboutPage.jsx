import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Info from "../components/aboutPage/Info";
import Faqs from "../components/aboutPage/Faqs";
import Footer from "../components/shared/Footer";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Info />
      <Faqs />
      <Footer />
    </>
  );
};

export default AboutPage;
