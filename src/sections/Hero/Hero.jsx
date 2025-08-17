import { useState, useEffect } from "react";

import styles from "./HeroStyles.module.css";
import linkedinIcon from "../../assets/linkedinLogo.png";
import cgLogo from "../../assets/CG2.png";
function Hero() {
  const fullText = "Management Information Systems Major";
  const [displayText, setDisplayText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(timer);
        setIsTypingDone(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={`${styles.hero} ${styles.fadeIn}`}
          src={cgLogo}
          alt="Profile Picture of Cole Gibeau"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Cole <br></br> Gibeau
        </h1>
        <h2 className={styles.typingText}>
          {displayText}
          {!isTypingDone && <span className={styles.cursor}>|</span>}
        </h2>

        <div className={styles.paragraphContainer}>
          <p>
            Hi, I’m Cole — a detail-oriented and motivated aspiring IT
            professional. I have a strong passion for technology,
            problem-solving skills, and a knack for learning quickly. Currently
            studying Management Information Systems at Minnesota State
            University, Mankato, I’m looking to apply my skills in real-world
            projects and grow as a developer.
          </p>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/cole-gibeau-6286722a7/"
            target="_blank"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn Logo"
              className={styles.linkedinIcon}
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
