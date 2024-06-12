import Navbar from "../../components/navbar/Navbar";
import '../page-main-style.css';
import './aboutpage.css';
import galleryData from "../../components/data/galleryData";
import aboutPageImg from '../../images/about/wehoops image.jpg';
import MemberList from "../../components/MemberListComponents/MemberList";
import GallerAbout from "../../components/GalleryComponents/GallerAbout";
import Footer from '../../components/footer/Footer'
const AboutUsPage = () => {
  return (
    <>
      <div className="sub-pages-header">
          <Navbar/>
          <div className='sub-hero'>
            <div className="sub-hero-container">
                <h1 className='sub-hero-title'>About Us</h1>
            </div>
          </div>
      </div>
      <div className="about-page-section">
        <h2 className="about-page-title">Wehoops History</h2>
        <p className="about-page-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
          Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris  efficitur felis a ultrices lacinia. 
          Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
          Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
          Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris  efficitur felis a ultrices lacinia. 
          Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
          Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam.
        </p>
        <img className="about-image-page" src={aboutPageImg} alt="Wehoops history image" />
      </div>
      <MemberList/>
      <div className="gallery-page-section">
        <div className="gallery-header-section">
          <h2 className="gallery-about-title">Gallery</h2>
        </div>
        <div className="gallery-about-list">
          {
            galleryData.map((item, index) => (
              <GallerAbout
                img={item}
                key={index}
              />
            ))
          }
        </div>
      </div>
      <div style={{marginTop: '12rem'}}>
        <Footer/>
      </div>
    </>

  )
}

export default AboutUsPage
