import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import Image from 'react-bootstrap/Image';
import { CardComp } from '../CardComp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ProjectsComp(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <Container fluid className='px-2 px-sm-3 px-md-4 px-lg-5 my-5'>
        <div className='h2 text-center my-5 pt-5 fw-bolder'>PROJECTS</div>
        <Slider {...settings}>
          <div>
            <CardComp />
          </div>
          <div>
            <CardComp />
          </div>
          <div>
            <CardComp />
          </div>
          <div>
            <CardComp />
          </div>
        </Slider>
        </Container>
      );
}