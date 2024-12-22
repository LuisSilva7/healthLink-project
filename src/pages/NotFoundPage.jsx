import React, { useEffect } from "react";
import styles from "../components/shared/layout.module.css";

const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>NotFoundPage</main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
