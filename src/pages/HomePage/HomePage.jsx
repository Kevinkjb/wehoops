import Contact from "../../components/ContactComponents/Contact"
import EventsComponents from "../../components/EventsComponents/EventsComponents"
import GalleryHome from "../../components/GalleryComponents/GalleryHome"
import ProgramHome from "../../components/ProgramComponents/ProgramHome"
import HomeAbout from "../../components/aboutComponents/HomeAbout"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import './homepage.css'
import certificateTwo from '../../images/icons/NCCP.png'
import certificateFour from '../../images/certificates/commit-kids.png'

const HomePage = () => {
  return (
    <>
    <div className="home-header">
        <Navbar/>
        <div className="hero-section">
           <Hero/>
        </div>
    </div>
    <div className="certificate-icons">
      <div className="certificate-box">
        <a href="https://coach.ca/new-coaching/about-nccp" target="_blank">
          <img className='nccp' src={certificateTwo} alt="NCCP" />
        </a>
        <a  href="https://www.commit2kids.ca/en/" target="_blank">
          <img className='certificate-img' src={certificateFour} alt="commit-kids" />
        </a>
        
      </div>
    </div>
    <HomeAbout/>
    <EventsComponents/>
    <ProgramHome/>
    <GalleryHome/>
    <Contact/>
    <div style={{marginTop: '8rem'}}>
      <Footer/>
    </div>
    </>
  )
}

export default HomePage
