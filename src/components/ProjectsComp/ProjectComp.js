import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import Image from 'react-bootstrap/Image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ProjectsComp(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
      return (
        <Container fluid className='px-2 px-sm-3 px-md-4 px-lg-5 my-5'>
        <div className='h2 text-center my-5 py-5 fw-bolder'>PROJECTS</div>
        <Slider {...settings}>
          <div>
            <Image src="https://picsum.photos/id/20/600/400"/>
          </div>
          <div>
            <Image src="https://picsum.photos/id/96/600/400"/>
          </div>
          <div>
            <Image src="https://picsum.photos/id/45/600/400"/>
          </div>
          <div>
            <Image src="https://picsum.photos/id/55/600/400"/>
          </div>
        </Slider>
        </Container>
      );
}