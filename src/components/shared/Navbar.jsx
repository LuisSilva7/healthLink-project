import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import userLogo from "../../assets/images/user-logo.png";
import healthLinkLogo from "../../assets/images/healthLink-logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    setOpenProfile(!openProfile);
    setUserLoggedIn(false);
    localStorage.setItem("loginDefault", JSON.stringify(false));
    localStorage.setItem("loginUser", JSON.stringify(false));

    navigate("/");
  };

  return (
    <nav className={styles["navbar-container"]}>
      <Link to="/" className={styles["healthLink-container"]}>
        <div className={styles["helthLink-logo-container"]}>
          <img
            src={healthLinkLogo}
            className={styles["helthLink-logo-image"]}
          />
        </div>
        <span className={styles["helthLink-title"]}>HealthLink</span>
      </Link>
      <div className={styles["right-side"]}>
        <div className={styles["navbar-menu-container"]}>
          <div
            className={
              openMenu
                ? styles["menu-icon-container-active"]
                : styles["menu-icon-container"]
            }
            onClick={() => {
              setOpenMenu(!openMenu);
              if (openProfile) setOpenProfile(!openProfile);
            }}
          >
            {openMenu ? (
              <MdClose className={styles["menu-icon"]} />
            ) : (
              <IoMenu className={styles["menu-icon"]} />
            )}
          </div>
          <div
            className={
              openMenu ? styles["navbar-menu-active"] : styles["navbar-menu"]
            }
          >
            <ul className={styles["navbar-menu-items"]}>
              <li className={styles["navbar-menu-item"]}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["navbar-menu-link"]} ${styles["active"]}`
                      : styles["navbar-menu-link"]
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li className={styles["navbar-menu-item"]}>
                <NavLink
                  to="/booking"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["navbar-menu-link"]} ${styles["active"]}`
                      : styles["navbar-menu-link"]
                  }
                >
                  BOOKING
                </NavLink>
              </li>
              <li className={styles["navbar-menu-item"]}>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["navbar-menu-link"]} ${styles["active"]}`
                      : styles["navbar-menu-link"]
                  }
                >
                  SERVICES
                </NavLink>
              </li>
              <li className={styles["navbar-menu-item"]}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["navbar-menu-link"]} ${styles["active"]}`
                      : styles["navbar-menu-link"]
                  }
                >
                  ABOUT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["navbar-profile-container"]}>
          <div
            className={styles["profile-icon-container"]}
            onClick={() => {
              setOpenProfile(!openProfile);
              if (openMenu) setOpenMenu(!openMenu);
            }}
          >
            <img src={userLogo} className={styles["profile-icon"]} />
          </div>
          <div
            className={
              openProfile
                ? styles["navbar-profile-active"]
                : styles["navbar-profile"]
            }
          >
            <ul className={styles["navbar-profile-items"]}>
              {userLoggedIn ? (
                <>
                  <li className={styles["navbar-profile-item"]}>
                    <NavLink
                      to="/profile"
                      className={styles["navbar-profile-link"]}
                    >
                      PROFILE
                    </NavLink>
                  </li>
                  <li className={styles["navbar-profile-item"]}>
                    <div
                      onClick={handleSignOut}
                      className={styles["navbar-profile-link"]}
                    >
                      SIGN OUT
                    </div>
                  </li>
                </>
              ) : (
                <li className={styles["navbar-profile-item"]}>
                  <NavLink
                    to="/login"
                    className={styles["navbar-profile-link"]}
                  >
                    LOGIN
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
