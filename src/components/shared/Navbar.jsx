import React, { useState, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { UserContext } from "../../UserContext";
import styles from "./navbar.module.css";
import healthLinkLogo from "../../assets/images/healthLink-logo.png";
import userLogo from "../../assets/images/user-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setUserLoggedIn(false);
    localStorage.setItem("loginDefault", JSON.stringify(false));
    localStorage.setItem("loginUser", JSON.stringify(false));
    navigate("/");
    setIsProfileOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logoContainer}>
        <img
          src={healthLinkLogo}
          alt="HealthLink Logo"
          className={styles.logo}
        />
        <span className={styles.title}>HealthLink</span>
      </Link>

      <div className={styles.rightSection}>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" className={styles.navLink}>
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={styles.navLink}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.navLink}>
              About
            </NavLink>
          </li>

          {isMenuOpen && (
            <li className={styles.mobileAuth}>
              {userLoggedIn ? (
                <>
                  <div
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate("/profile");
                    }}
                    className={styles.profileOption}
                  >
                    Profile
                  </div>
                  <div onClick={handleSignOut} className={styles.profileOption}>
                    Sign Out
                  </div>
                </>
              ) : (
                <div
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/login");
                  }}
                  className={styles.profileOption}
                >
                  Login
                </div>
              )}
            </li>
          )}
        </ul>

        <div className={styles.profileContainer}>
          <img
            src={userLogo}
            alt="User Avatar"
            className={styles.profileIcon}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          />
          {isProfileOpen && (
            <div className={styles.profileDropdown}>
              {userLoggedIn ? (
                <>
                  <div
                    onClick={() => navigate("/profile")}
                    className={styles.profileOption}
                  >
                    Profile
                  </div>
                  <div onClick={handleSignOut} className={styles.profileOption}>
                    Sign Out
                  </div>
                </>
              ) : (
                <div
                  onClick={() => navigate("/login")}
                  className={styles.profileOption}
                >
                  Login
                </div>
              )}
            </div>
          )}
        </div>

        <div
          className={styles.menuIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdClose /> : <IoMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
