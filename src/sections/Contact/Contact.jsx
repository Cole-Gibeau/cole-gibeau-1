import React from "react";
import styles from "./ContactStyles.module.css";
import email from "../../assets/Email.png";
import phone from "../../assets/Phone.png";
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <br></br>
      <br></br>
      <h4>Contact me</h4>
      <div className={styles.contactItem}>
        <img src={email} alt="Email Icon" className={styles.emailIcon} />
        <h3>colegibeau@hotmail.com</h3>
      </div>
      <div className={styles.contactItem}>
        <img src={phone} alt="Phone Icon" className={styles.emailIcon} />
        <h3>763-244-4339</h3>
      </div>
    </section>
  );
}

export default Contact;
