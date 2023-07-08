import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavbarComp.module.css';

export function NavbarComp() {
  return (
    <>
      <Navbar expand="lg" bg="light" data-bs-theme="light" className="shadow py-4 px-2 px-sm-3 px-md-4 px-lg-5" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home">Melikova</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={styles["nav-link-ltr"]} >Home</Nav.Link>
              <Nav.Link href="#link" className={styles["nav-link-ltr"]} >About</Nav.Link>
              <Nav.Link href="#link" className={styles["nav-link-ltr"]} >Skills</Nav.Link>
              <Nav.Link href="#link" className={styles["nav-link-ltr"]} >Projects</Nav.Link>
              <Nav.Link href="#link" className={styles["nav-link-ltr"]} >Contact me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}