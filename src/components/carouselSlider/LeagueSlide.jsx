import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imageOne from './League/DSC09201.jpg'
import imageTwo from './League/DSC09267.jpg'
import imageThree from './League/DSC09238.jpg'
import imageFour from './League/DSC09270.jpg'
import imageFive from './League/DSC09313.jpg'
import imageSix from './League/DSC09387.jpg'
import imageSeven from './League/DSC09409.jpg'
import imageEight from './League/DSC09415.jpg'
import imageNine from './League/JUS00053.jpg'
import imageTen from './League/JUS00070.jpg'
import imageEleven from './League/JUS00107.jpg'
import imageTwelve from './League/JUS00125.jpg'
import image13 from './League/ImageTwo.jpg'
import image14 from './League/JUS00420.jpg'
import image15 from './League/Image.jpg'
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
          imageSix
      },
      {
        url:
        imageSeven
      },
      {
        url:
        imageEight
      },
      
      {
        url:
        imageNine
      },
      
      {
        url:
        imageTen
      },
      
      {
        url:
        imageEleven
      },
      
      {
        url:
        imageTwelve
      },
      {
        url:
        image13
      },
      {
        url:
        image14
      },
      {
        url:
        image15
      },
      

    ];
const LeagueSlide = () => {
  return (
    <div className="parent">
      <h2 className="slide-title">League Slide Content</h2>
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

export default LeagueSlide
