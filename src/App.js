import './App.css';
import AboutMe from './Components/AboutMe';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import MySkills from './Components/MySkills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  
  const handleDownload = () => {
    fetch('My-resume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'My-resume.pdf';
        alink.click();
      })
    })
  }

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Home
          handleDownload={handleDownload}
        ></Home>
        <AboutMe
          handleDownload={handleDownload}
        ></AboutMe>
        <MySkills></MySkills>
        <Projects></Projects>
        <Contact></Contact>

      </div>
    </div >
  );
}

export default App;
