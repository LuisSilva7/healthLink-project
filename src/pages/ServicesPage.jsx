import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Services from "../components/servicesPage/Services";
import Footer from "../components/shared/Footer";
import styles from "../components/shared/layout.module.css";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
