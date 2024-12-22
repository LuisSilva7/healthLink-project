import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/homePage/Hero";
import Services from "../components/homePage/Services";
import Location from "../components/homePage/Location";
import Footer from "../components/shared/Footer";
import styles from "../components/shared/layout.module.css";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>
        <Hero />
        <Services />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
