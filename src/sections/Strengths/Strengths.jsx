import React from "react";
import styles from "./StrengthsStyles.module.css";
import lightbulb from "../../assets/lightbulb.png";

function Strengths() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Strengths</h1>
      <div className={styles.experienceList}>
        <div className={styles.skillItem}>
          <img
            className={styles.skillImg}
            src={lightbulb}
            alt="Communication"
          />
          <p>Communication</p>
        </div>
        <div className={styles.skillItem}>
          <img
            className={styles.skillImg}
            src={lightbulb}
            alt="Strong Work Ethic"
          />
          <p>Strong Work Ethic</p>
        </div>
        <div className={styles.skillItem}>
          <img
            className={styles.skillImg}
            src={lightbulb}
            alt="Problem-Solving"
          />
          <p>Problem-Solving</p>
        </div>
        <div className={styles.skillItem}>
          <img
            className={styles.skillImg}
            src={lightbulb}
            alt="Quick Learner"
          />
          <p>Quick Learner</p>
        </div>
        <div className={styles.skillItem}>
          <img
            className={styles.skillImg}
            src={lightbulb}
            alt="Time Management"
          />
          <p>Time Management</p>
        </div>
      </div>
    </section>
  );
}
export default Strengths;
