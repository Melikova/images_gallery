import Container from 'react-bootstrap/Container';
import { Facebook } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';


export function Footer(){
    return(
        <Container fluid className='text-center text-lg-start text-muted bg-light-subtle py-4'>
          <Container fluid className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-dark'>
            <div className='me-5 d-none d-lg-block'>
              <span>Get connected with me on social networks:</span>
            </div>
            <div>
              <a href='#' className='me-4 text-reset'>
                <Facebook color="dark" size={26} />
              </a>
              <a href='#' className='me-4 text-reset'>
                <Linkedin color="dark" size={26} />
              </a>
              <a href='#' className='me-4 text-reset'>
                <Github color="dark" size={26} />
              </a>
            </div>
          </Container>

          <div className='text-center p-4'>
            © 2023 Copyright: 
            <a className='text-reset fw-bold ms-2' href='#'>
              Mehin Melikova
            </a>
          </div>

        </Container>
    );
}