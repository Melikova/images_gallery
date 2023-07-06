import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header(){
    return(
        <>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark" className="mb-3 py-4">
            <Container>
              <Navbar.Brand href="#">Photo Gallery</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Settings
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    settings go here
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
}

export default Header;