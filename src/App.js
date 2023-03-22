import './App.css';
import Navbar from "./components/Navbar.jsx"
import AboutMe from "./components/AboutMe.jsx"
import Projects from "./components/Projects.jsx"
import ContactMe from "./components/ContactMe.jsx"
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
