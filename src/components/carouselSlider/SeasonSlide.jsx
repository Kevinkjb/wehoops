import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imageOne from './SeasonOne/season-image1.jpg'
import imageTwo from './SeasonOne/season-image2.jpg'
import imageThree from './SeasonOne/season-image3.jpg'
import imageFour from './SeasonOne/season-image4.jpg'
import imageFive from './SeasonOne/season-image5.jpg'
import imageSix from './SeasonOne/season-image6.jpg'
import imageSeven from './SeasonOne/season1.jpg'
import imageEight from './SeasonOne/season-image7.jpg'

import './slider.css'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1300, min: 900 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 340 },
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
      }
      ,
      {
          url:
          imageEight
      }
  
  
    ];
const SeasonSlide = () => {
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
                  <img src={imageUrl.url} alt="Wehoops Fundraising" />
                  </div>
              );
              })}
            </Carousel>
          </div>
  )
}

export default SeasonSlide
