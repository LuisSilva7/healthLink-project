import React, { useState } from "react";
import styles from "./faqs.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment online through our website on the bookings page or call our reception directly. We are here to help you find the best time.",
    },
    {
      question: "What types of health insurance do you accept?",
      answer:
        "We accept most health insurance plans. To confirm if we accept your specific plan, please contact our reception.",
    },
    {
      question: "What are the clinic's operating hours?",
      answer:
        "Our clinic is open Monday to Friday from 8 AM to 6 PM, and on Saturdays from 9 AM to 1 PM. We are closed on Sundays and public holidays.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "For your first appointment, please bring a valid ID, your health insurance card, a list of any medications you are taking, and any relevant medical history. This will help us provide the best possible care.",
    },
  ];

  return (
    <div className={styles["faqs-container"]}>
      <h1 className={styles["faqs-title"]}>FAQs</h1>
      <div className={styles["questions-container"]}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles["faq-container"]} ${
              activeIndex === index ? styles["active"] : ""
            }`}
          >
            <div
              className={styles["faqs-question-container"]}
              onClick={() => toggleFaq(index)}
            >
              <p className={styles["faqs-question"]}>{faq.question}</p>
              {activeIndex === index ? (
                <MdKeyboardArrowUp className={styles["arrow-icon"]} />
              ) : (
                <MdKeyboardArrowDown className={styles["arrow-icon"]} />
              )}
            </div>
            <p className={styles["faqs-answer"]}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
