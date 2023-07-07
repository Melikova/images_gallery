import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComp} from './components/NavbarComp'
import { HomeComp } from './components/HomeComp';
import { Footer } from './components/Footer'

function App() {
  return (
    <> 
      <NavbarComp />
      <HomeComp />
      <Footer />
    </>
  );
}

export default App;
