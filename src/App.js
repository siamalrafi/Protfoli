import './App.css';
import AboutMe from './Components/AboutMe';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Home></Home>

        <AboutMe></AboutMe>

      </div>
    </div>
  );
}

export default App;
