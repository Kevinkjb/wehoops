import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imageOne from './KidsTraining/image-one.jpg'
import imageTwo from './KidsTraining/image-two.jpg'
import imageThree from './KidsTraining/image-three.jpg'
import imageFour from './KidsTraining/image-four.jpg'
import imageFive from './KidsTraining/image-five.jpg'
import imageSix from './KidsTraining/image-six.jpg'
import imageSeven from './KidsTraining/image-seven.jpg'
import imageEight from './KidsTraining/image-eight.jpg'
import './slider.css'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 360 },
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
  
  
    ];
const TrainingSlide = () => {
  return (
    <div className="parent">
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
                  <img src={imageUrl.url} alt="Training Image" />
                  </div>
              );
              })}
            </Carousel>
          </div>
  )
}

export default TrainingSlide
