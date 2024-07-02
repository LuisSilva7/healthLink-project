import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const getInitialUserState = () => {
    if (
      JSON.parse(localStorage.getItem("loginUser")) ||
      JSON.parse(localStorage.getItem("loginDefault"))
    ) {
      return true;
    }

    return false;
  };

  const [userLoggedIn, setUserLoggedIn] = useState(getInitialUserState);

  return (
    <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
