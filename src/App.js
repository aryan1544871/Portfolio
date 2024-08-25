import Header from './Components/Header.js';
import About from './Components/About.js';
import Experience from './Components/Experience.js';
import Education from './Components/Education.js';
import info from './Components/ComponentAssest/HomeDetails.js';
import infoBodyOne from './Components/ComponentAssest/ExperienceDetails.js';
import infoBodyTwo from './Components/ComponentAssest/EducationDetails.js';
import Project from './Components/Project.js';
import Footer from './Components/Footer.js';
import {BrowserRouter} from  'react-router-dom';


function App() {


  let Style = {
   backgroundColor : '#412c7e2b',
    }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <About Style={Style} title={info.title} details={info.details} />
        <Experience
          title={infoBodyOne.title}
          details={infoBodyOne.details}
          Style={Style}
        />
        <Education
          title={infoBodyTwo.title}
          details={infoBodyTwo.details}
          Style={Style}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
