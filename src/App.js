import './App.css';
import AboutMe from './Components/AboutMe';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import MySkills from './Components/MySkills';
import Projects from './Components/Projects';

function App() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <AboutMe></AboutMe>
        <MySkills></MySkills>

        <Projects></Projects>

      </div>
    </div>
  );
}

export default App;
