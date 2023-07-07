import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComp } from './components/NavbarComp'
import { HomeComp } from './components/HomeComp';
import { FooterComp } from './components/FooterComp'
import { AboutComp } from './components/AboutComp';
import { SkillsComp } from './components/SkillsComp';
import { ProjectsComp } from './components/ProjectsComp'

function App() {
  return (
    <> 
      <NavbarComp />
      <HomeComp />
      <AboutComp />
      <SkillsComp />
      <ProjectsComp />
      <FooterComp />
    </>
  );
}

export default App;
