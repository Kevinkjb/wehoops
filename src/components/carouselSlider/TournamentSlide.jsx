import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imageOne from './Tournament/JUS09685.jpg'
import imageTwo from './Tournament/JUS09688.jpg'
import imageThree from './Tournament/JUS09692.jpg'
import imageFour from './Tournament/JUS09695.jpg'
import imageFive from './Tournament/JUS09696.jpg'
import image6 from './Tournament/JUS09700.jpg'
import image7 from './Tournament/JUS09701.jpg'
import image8 from './Tournament/JUS09703.jpg'
import './slider.css'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 340 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const sliderImageUrl = [
      //First image url
      {
        url:
        imageOne
      },
      {
        url:
        imageTwo
      },
      //Second image url
      {
        url:
        imageThree
      },
      //Third image url
      {
        url:
        imageFour
      },
    
      //Fourth image url
      {
          url:
          imageFive
      },
      {
        url:
        image6
      }
      ,
      {
        url:
        image7
      }
      ,
      {
        url:
        image8
      }
    ];
const TournamentSlide = () => {
  return (
    <div className="parent">
      <h2 className="slide-title">Tournament Gallery</h2>
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              focusOnSelect={true}
            >
              {sliderImageUrl.map((imageUrl, index) => {
              return (
                  <div className="slider" key={index}>
                  <img src={imageUrl.url} alt="League Image" />
                  </div>
              );
              })}
            </Carousel>
          </div>
  )
}

export default TournamentSlide
