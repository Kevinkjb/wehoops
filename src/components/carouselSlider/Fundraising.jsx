import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imageOne from './Fundraising/fundraising1.jpg'
import imageTwo from './Fundraising/fundraising2.jpg'
import imageThree from './Fundraising/fundraising3.jpg'
import imageFour from './Fundraising/fundraising4.jpg'
import imageFive from './Fundraising/fundraising5.jpg'
import imageSix from './Fundraising/fundraising6.jpg'
import imageSeven from './Fundraising/fundraising7.jpg'
import imageEight from './Fundraising/fundraising8.jpg'
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
  
  
    ];
const Fundraising = () => {
  return (
    <div className="parent">
      <h2 className="slide-title">Fundraising Gallery</h2>
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

export default Fundraising
