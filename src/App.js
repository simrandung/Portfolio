import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/experience";
import Navbar from "./components/NavBar/navbar";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import Intro from "./components/intro/intro";

function App() {
  return <div>
  <Navbar />
  <Intro />
  <Experience />
  <Projects />
  <Skills />
  <Contact />
  </div>
}

export default App;
