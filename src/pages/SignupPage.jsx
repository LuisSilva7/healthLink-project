import React, { useEffect } from "react";
import SignupForm from "../components/loginPage/SignupForm";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import styles from "../components/shared/layout.module.css";

const SignupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
