import React from "react";
import styles from "./services.module.css";
import dermatologyImage from "../../assets/images/dermatology-image.png";
import dentistryImage from "../../assets/images/dentistry-image.png";
import ophthalmologyImage from "../../assets/images/ophthalmology-image.png";

const Services = () => {
  const dermatologyServices = [
    {
      name: "Acne Treatment",
      description:
        "Effective treatments tailored to your skin type and severity of acne, promoting clearer and healthier skin.",
    },
    {
      name: "Skin Cancer Screening",
      description:
        "Comprehensive screenings to detect early signs of skin cancer, ensuring timely diagnosis and treatment.",
    },
    {
      name: "Cosmetic Dermatology",
      description:
        "Enhance your natural beauty with non-invasive procedures like Botox, fillers, and laser treatments for smoother, youthful skin.",
    },
  ];

  const dentistryServices = [
    {
      name: "Teeth Whitening",
      description:
        "Professional whitening services to brighten your smile, removing stains and discoloration effectively.",
    },
    {
      name: "Dental Implants",
      description:
        "Permanent solutions for missing teeth, restoring your smile with natural-looking implants that function like real teeth.",
    },
    {
      name: "Routine Check-ups and Cleanings",
      description:
        "Regular dental examinations and cleanings to maintain optimal oral health, preventing cavities and gum disease.",
    },
  ];

  const ophthalmologyServices = [
    {
      name: "LASIK Surgery",
      description:
        "Advanced laser eye surgery to correct vision problems like nearsightedness, farsightedness, and astigmatism, reducing or eliminating the need for glasses or contacts.",
    },
    {
      name: "Cataract Surgery",
      description:
        "Surgical procedure to remove cloudy lenses (cataracts) from the eyes and replace them with clear artificial lenses, restoring vision clarity.",
    },
    {
      name: "Glaucoma Management",
      description:
        "Comprehensive diagnosis and treatment plans for managing glaucoma, a condition that damages the optic nerve and can lead to vision loss if left untreated.",
    },
  ];

  return (
    <div className={styles["services-container"]}>
      <h4>Our Professional Services</h4>
      <h2>Dermatology Services</h2>
      <div className={styles["service-container"]}>
        {dermatologyServices.map((dermatologyService, index) => (
          <div key={index} className={styles["service-box"]}>
            <div className={styles["service-image-container"]}>
              <img src={dermatologyImage} className={styles["service-image"]} />
            </div>
            <div className={styles["service-text-container"]}>
              <h3>{dermatologyService.name}</h3>
              <p>{dermatologyService.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Dentistry Services</h2>
      <div className={styles["service-container"]}>
        {dentistryServices.map((dentistryService, index) => (
          <div key={index} className={styles["service-box"]}>
            <div className={styles["service-image-container"]}>
              <img src={dentistryImage} className={styles["service-image"]} />
            </div>
            <div className={styles["service-text-container"]}>
              <h3>{dentistryService.name}</h3>
              <p>{dentistryService.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Ophthalmology Services</h2>
      <div className={styles["service-container"]}>
        {ophthalmologyServices.map((ophthalmologyService, index) => (
          <div key={index} className={styles["service-box"]}>
            <div className={styles["service-image-container"]}>
              <img
                src={ophthalmologyImage}
                className={styles["service-image"]}
              />
            </div>
            <div className={styles["service-text-container"]}>
              <h3>{ophthalmologyService.name}</h3>
              <p>{ophthalmologyService.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
