import './App.css';
import AboutMe from './Components/AboutMe';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import MySkills from './Components/MySkills';
import Projects from './Components/Projects';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <MySkills />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
