import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imageOne from './SeasonTwo/image1.png'

import imageTwo from './SeasonTwo/image2.jpg'
import imageThree from './SeasonTwo/image3.png'
import imageFour from './SeasonTwo/image4.png'
import imageFive from './SeasonTwo/image5.jpg'
import imageSix from './SeasonTwo/image6.png'
import imageSeven from './SeasonTwo/image7.png'
import imageEight from './SeasonTwo/image8.png'
import image9 from './SeasonTwo/image9.png'
import image10 from './SeasonTwo/image10.jpg'
import image11 from './SeasonTwo/image11.jpg'
import image12 from './SeasonTwo/image12.png'
import image13 from './SeasonTwo/image13.png'
import image14 from './SeasonTwo/image14.png'
// import image15 from './SeasonOne/basketball7.jpg'
// import image16 from './SeasonOne/basketball8.jpg'
// import image17 from './SeasonOne/basketball9.jpg'

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
      }
      ,
      {
          url:
          image12
      }
      ,
      {
          url:
          image13
      },
      {
          url:
          image14
      },
      // {
      //     url:
      //     image15
      // },
      // {
      //     url:
      //     image16
      // },
      // {
      //     url:
      //     image17
      // }
  
  
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
