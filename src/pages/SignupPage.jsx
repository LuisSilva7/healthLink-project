import React, { useEffect } from "react";
import SignupForm from "../components/loginPage/SignupForm";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const SignupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <SignupForm />
      <Footer />
    </>
  );
};

export default SignupPage;
