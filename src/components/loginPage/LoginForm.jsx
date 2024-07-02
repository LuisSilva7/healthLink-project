import React, { useState } from "react";
import styles from "./loginForm.module.css";
import backgroundImage from "../../assets/images/login-background-image.png";
import logo from "../../assets/images/healthLink-logo.png";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const storedUsername = JSON.parse(localStorage.getItem("username"));
    const storedPassword = JSON.parse(localStorage.getItem("password"));

    if (
      (username == storedUsername || username == "user") &&
      (password == storedPassword || password == "pass")
    ) {
      localStorage.setItem("login", JSON.stringify(true));
      navigate("/");
    }

    setUsername("");
    setPassword("");
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
            <button type="submit">Login</button>
            <Link to="/signup" className={styles["signup-link"]}>
              Don't have an account yet? Sign up now!
            </Link>
            <div className={styles["default-account"]}>
              <p>Default Username: user</p>
              <p>Default Password: pass</p>
            </div>
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

export default LoginForm;
