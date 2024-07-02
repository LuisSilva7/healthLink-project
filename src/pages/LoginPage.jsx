import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import LoginForm from "../components/loginPage/LoginForm";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <LoginForm />
      <Footer />
    </>
  );
};

export default LoginPage;
