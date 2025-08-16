import React from "react";
import styles from "./ExperienceStyles.module.css";
import checkmark from "../../assets/checkmark.png";

function Experience() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.experienceList}>
        <div className={styles.skillItem}>
          <img className={styles.skillImg} src={checkmark} alt="React" />
          <p>React</p>
        </div>
        <div className={styles.skillItem}>
          <img className={styles.skillImg} src={checkmark} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className={styles.skillItem}>
          <img className={styles.skillImg} src={checkmark} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className={styles.skillItem}>
          <img className={styles.skillImg} src={checkmark} alt="C#" />
          <p>C#</p>
        </div>
        <div className={styles.skillItem}>
          <img className={styles.skillImg} src={checkmark} alt="Python" />
          <p>Python</p>
        </div>
        <div className={styles.skillItem}>
          <img
            className={styles.skillImg}
            src={checkmark}
            alt="SQL Server Management Studio"
          />
          <p>SQL Server Management Studio</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
