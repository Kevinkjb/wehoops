import Contact from "../../components/ContactComponents/Contact"
import EventsComponents from "../../components/EventsComponents/EventsComponents"
import GalleryHome from "../../components/GalleryComponents/GalleryHome"
import ProgramHome from "../../components/ProgramComponents/ProgramHome"
import HomeAbout from "../../components/aboutComponents/HomeAbout"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import './homepage.css'

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
      <div className="main-cert-icons">
        <h3>Certificate Icons</h3>
      </div>
    </div>
    <HomeAbout/>
    <EventsComponents/>
    <ProgramHome/>
    <GalleryHome/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default HomePage
