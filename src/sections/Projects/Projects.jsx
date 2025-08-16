import React from "react";
import styles from "./ProjectsStyles.module.css";
import diseaseDefensePoster from "../../assets/DiseaseDefensePoster.png";
import RasberryPI_Stock_Tracker from "../../assets/RasberryPI_Stock_Tracker.jpg";
import cgLogo from "../../assets/CG.png";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.projectItem}>
          <h2>Disease Defense Group Project C#</h2>
          <a href="https://www.youtube.com/watch?v=VhNFPJM2XSc">
            <img
              className={styles.projectImage}
              src={diseaseDefensePoster}
              alt="Image of Disease Defense Poster"
            />
          </a>
          <p>(Click Poster for Game Trailer Video)</p>
          <br></br>
          <p>
            <h3>
              Disease Defense was a group project, with three peers, developed
              using the Unity game engine and C# code using Visual Studio 2022.
            </h3>
            <p>
              <strong>My primary responsibilities included:</strong>{" "}
            </p>
            <ul>
              <li>
                AI Tracking & Custom Animations: I designed and implemented the
                AI behaviors for the zombies, focusing on their movement and
                tracking mechanics, as well as creating custom animations for
                their attacking and movements.
              </li>
              <li>
                HUD System: I also developed and integrated the HUD system,
                ensuring players had access to in-game information.
              </li>
            </ul>
            <p>
              <strong>Key Skills Developed:</strong>{" "}
            </p>
            <ul>
              <li>
                Team Collaboration: Learned how to effectively collaborate
                within a group, maintaining clear communication and coordinating
                tasks to meet project goals.
              </li>
              <li>
                Unity Development: Gained foundational knowledge of Unity,
                including working with its interface, asset management, and the
                game engine's core features.
              </li>
              <li>
                OOP with C#: Applied object-oriented programming principles in
                C# to structure clean, maintainable code.
              </li>
              <li>
                Version Control with GitHub: Gained hands-on experience using
                GitHub for collaborating on code, and managing project
                repositories.
              </li>
              <li>
                Project & Time Management: Developed skills in managing
                deadlines, task prioritization, and working efficiently within a
                team environment.
              </li>
              <li>
                Problem Solving & Debugging: Tackled challenges related to AI
                pathfinding, animation transitions, and UI elements, practicing
                the ability to problem solve and debug code.
              </li>
            </ul>
          </p>
          <br></br>
          <h2>Rasberry PI / Arduino Stock Tracker Project</h2>
          <img
            className={styles.projectImage}
            src={RasberryPI_Stock_Tracker}
            alt="Image of Stock Tracker Project"
          />
          <p>
            <h3>
              Built a real-time stock ticker system that fetches live market
              data using the Alpha Vantage API and Python.
            </h3>
            <ul>
              <li>
                {" "}
                Deployed the solution on a Raspberry Pi, with a Python virtual
                environment for dependency management.
              </li>
              <li>
                {" "}
                Integrated an Arduino + 16x2 LCD to display stock prices in
                rotation (e.g., AAPL, TSLA, MSFT) that updated every 30 seconds.
                With parameters to change the stocks and rotation time.
              </li>
              <li>
                Implemented serial communication between Raspberry Pi and
                Arduino for seamless data transfer.
              </li>
              <li>
                {" "}
                Gained hands-on experience with hardware/software integration,
                REST APIs, and Linux environment management.
              </li>
            </ul>
          </p>
          <br></br>
          <h2>React Responsive Portfolio Website</h2>
          <img
            className={styles.projectImage}
            src={cgLogo}
            alt="Logo of this Portfolio Website"
          />
          <p>
            <ul>
              <li>
                Built a fully responsive personal portfolio using React.js and
                modern CSS techniques (Flexbox, CSS Modules, animations).
              </li>
              <li>
                Implemented a dynamic gradient background and smooth fade-in
                animations for images and sections.
              </li>
              <li>
                Showcases key projects with interactive previews and links to
                external demos (e.g., YouTube trailer)
              </li>
              <li>
                Designed with mobile-first responsiveness, ensuring consistent
                layout across laptops, monitors, and phones.
              </li>
              <li>
                Utilized modular component structure for maintainability and
                scalability.
              </li>
              <li>
                Integrated custom typing effect animation to enhance
                interactivity and user engagement.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
