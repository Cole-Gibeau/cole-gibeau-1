import "./App.css";
import Contact from "./sections/Contact/Contact.jsx";
import Experience from "./sections/Experience/Experience.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Strengths from "./sections/Strengths/Strengths.jsx";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Strengths />
      <Contact />
    </>
  );
}

export default App;
