import React, { useState } from "react";
import styles from "./signupForm.module.css";
import backgroundImage from "../../assets/images/login-background-image.png";
import logo from "../../assets/images/healthLink-logo.png";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("lastName", JSON.stringify(lastName));
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(password));

    navigate("/login");
  };

  return (
    <div className={styles["loginForm-container"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["loginForm-left"]}>
          <div className={styles["top-container"]}>
            <div className={styles["top-container-left"]}>
              <h1 className={styles["text-hello"]}>Hello,</h1>
              <h1 className={styles["text-welcome"]}>welcome!</h1>
            </div>
            <div className={styles["top-container-right"]}>
              <div className={styles["logo-container"]}>
                <img src={logo} className={styles["logo-image"]} />
              </div>
            </div>
          </div>
          <form onSubmit={handleLogin} className={styles["form-container"]}>
            <div className={styles["input-names"]}>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Signup</button>
            <Link to="/login" className={styles["login-link"]}>
              Already have an account? Login now!
            </Link>
          </form>
        </div>
        <div className={styles["loginForm-right"]}>
          <img src={backgroundImage} />
          <h2>
            "Experience compassionate care and innovative medical solutions
            tailored to your needs at our state-of-the-art clinic."
          </h2>
          <h3>
            "Join us in prioritizing your health with expert medical guidance
            and a welcoming environment designed to support your journey."
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
