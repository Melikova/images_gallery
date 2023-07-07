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
    // return(
    //     <Container fluid className='px-2 px-sm-3 px-md-4 px-lg-5 my-5'>
    //         <div className='h2 text-center mb-4 fw-bolder'>PROJECTS</div>
    //         <div className='text-center py-5 fs-5' style={{color:'#8D8A88'}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</div>
    //     </Container>
    // );
}