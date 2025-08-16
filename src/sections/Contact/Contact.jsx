import React from "react";
import styles from "./ContactStyles.module.css";
import email from "../../assets/Email.png";
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
    </section>
  );
}

export default Contact;
