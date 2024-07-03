import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { UserProvider } from "./UserContext";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

const App = () => {
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("appointments"))) {
      const defaultAppointments = [
        {
          category: "dermatologyServices",
          date: "Wed Jul 03 2024",
          name: "Acne Treatment",
          price: "75",
          time: "09:00 AM",
          user: "loginDefault",
        },
        {
          category: "ophthalmologyServices",
          date: "Tue Jul 09 2024",
          name: "Glaucoma Management",
          price: "200",
          time: "11:00 AM",
          user: "loginDefault",
        },
        {
          category: "dermatologyServices",
          date: "Sun Jul 26 2024",
          name: "Routine Check-ups",
          price: "80",
          time: "14:00 PM",
          user: "loginDefault",
        },
        {
          category: "dentistryServices",
          date: "Sat Ago 03 2024",
          name: "Teeth Whitening",
          price: "200",
          time: "15:00 PM",
          user: "loginDefault",
        },
      ];

      localStorage.setItem("appointments", JSON.stringify(defaultAppointments));
    }
  }, []);

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
