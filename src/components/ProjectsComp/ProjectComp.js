import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import { CardComp } from '../CardComp';
import weather from './images/weather.png'
import books from './images/books.png'
import food from './images/food.png'
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
            <CardComp upname="javascript" viewsCount={20} reviewsCount={10} commentsCount={15} imageSrc={weather} imageAlt="weather" name="Weather App" desc="The Weather App highlights my expertise in JavaScript programming, showcasing my ability to create functional and visually appealing applications using pure JavaScript."/>
          </div>
          <div>
            <CardComp upname="javascript / firebase" viewsCount={10} reviewsCount={4} commentsCount={3} imageSrc={books} imageAlt="books" name="Book Store App" desc="The Book Store App demonstrates my proficiency in creating responsive and user-friendly frontend interfaces, as well as my experience in seamlessly integrating Firebase services and Google APIs."/>
          </div>
          <div>
            <CardComp upname="react / redux " viewsCount={12} reviewsCount={6} commentsCount={2} imageSrc={food} imageAlt="food" name="Food Delivery App" desc="The Food Delivery App exemplifies my skills in frontend development using React and Redux, showcasing my ability to create engaging and user-friendly interfaces while effectively managing app state."/>
          </div>
          <div>
            <CardComp upname="javascript / firebase" viewsCount={10} reviewsCount={4} commentsCount={3} imageSrc={books} imageAlt="books" name="BookStore App" desc="The Book Store App demonstrates my proficiency in creating responsive and user-friendly frontend interfaces, as well as my experience in seamlessly integrating Firebase services and Google APIs."/>
          </div>
        </Slider>
        </Container>
      );
}