import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imageOne from './WehoopsThree/JUS03196.jpg'
import imageTwo from './WehoopsThree/JUS03238.jpg'
import imageThree from './WehoopsThree/JUS03241.jpg'
import imageFour from './WehoopsThree/JUS03158.jpg'
import imageFive from './WehoopsThree/JUS03245.jpg'
import imageSix from './WehoopsThree/JUS03252.jpg'
import imageSeven from './WehoopsThree/JUS03254.jpg'
import imageEight from './WehoopsThree/JUS03184.jpg'
import image9 from './WehoopsThree/JUS03158.jpg'
import image10 from './WehoopsThree/JUS03159.jpg'
import image11 from './WehoopsThree/JUS03171.jpg'
import image12 from './WehoopsThree/JUS03172.jpg'
import image13 from './WehoopsThree/JUS03176.jpg'
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
          imageEight
      },
      {
        url:
        image9
      },
      {
        url:
        image10
      },
      {
        url:
        image11
      },
      {
        url:
        image12
      },
      {
        url:
        image13
      },
  
    ];
const WehoopsSlide = () => {
  return (
    <div className="parent">
      <h2 className="slide-title">Wehoops 3v3 Gallery</h2>
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
                  <img src={imageUrl.url} alt="Wehoops 3v3" />
                  </div>
              );
              })}
            </Carousel>
          </div>
  )
}

export default WehoopsSlide
