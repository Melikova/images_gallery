import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComp} from './components/NavbarComp'
import { HomeComp } from './components/HomeComp/HomeComp';

function App() {
  return (
    <> 
      <NavbarComp />
      <HomeComp />
    </>
  );
}

export default App;
