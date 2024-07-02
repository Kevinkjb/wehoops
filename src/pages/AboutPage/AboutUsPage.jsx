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
          WEHoopS is a dedicated non-profit organization committed to fostering a love for basketball among young athletes. 
          They offer a comprehensive program that includes kids basketball training, dynamic basketball camps, and personalized small group training sessions. 
          In addition to these core activities, WEHoopS hosts a variety of engaging events such as basketball tournaments, leagues, and 3v3 competitions. 
          Driven by a passionate team of basketball enthusiasts, WEHoopS aims to provide opportunities for everyone to play, improve their skills, 
          and enjoy the game in a supportive and fun environment.
        </p>
        <img className="about-image-page" src={aboutPageImg} alt="Wehoops history image" />
      </div>
      <MemberList/>
      
      {/* GALLERY SECTION */}
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
