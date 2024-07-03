import React from "react";
import styles from "./profileContainer.module.css";
import profileImage from "../../assets/images/user-logo.png";

const ProfileContainer = ({ userInfo }) => {
  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-image-container"]}>
        <img src={profileImage} className={styles["profile-image"]} />
      </div>
      {userInfo ? (
        <p className={styles["profile-name"]}>
          {userInfo.name} {userInfo.lastName}
        </p>
      ) : (
        <p className={styles["profile-name"]}>Default User</p>
      )}
    </div>
  );
};

export default ProfileContainer;
