import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Info from "../components/aboutPage/Info";
import Faqs from "../components/aboutPage/Faqs";
import Footer from "../components/shared/Footer";
import styles from "../components/shared/layout.module.css";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>
        <Info />
        <Faqs />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
