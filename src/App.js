import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ImageCard from './components/ImageCard/ImageCard';

function App() {
  return (
    <> 
    <Header />
    <Container className="d-flex">
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </Container>
    <Footer />
    </>
  );
}

export default App;
