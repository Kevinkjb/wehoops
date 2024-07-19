import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imageOne from '../../images/gallery/gallery-one.jpg'
import imageTwo from '../../images/gallery/gallery-two.jpg'
import imageThree from '../../images/gallery/gallery-three.jpg'
import imageFour from '../../images/gallery/gallery-four.jpg'
import imageFive from '../../images/gallery/kids.jpg'
import imageSix from '../../images/gallery/ladies league.jpg'
import imageSeven from '../../images/gallery/league one.jpg'
import imageEight from '../../images/gallery/league two.jpg'
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
      breakpoint: { max: 767, min: 464 },
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
const LeagueSlide = () => {
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
                  <img src={imageUrl.url} alt="League Image" />
                  </div>
              );
              })}
            </Carousel>
    </div>
  )
}

export default LeagueSlide
