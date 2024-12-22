import React, { useEffect } from "react";
import LoginForm from "../components/loginPage/LoginForm";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import styles from "../components/shared/layout.module.css";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
