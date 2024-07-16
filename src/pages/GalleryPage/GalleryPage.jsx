import LeagueGallery from "../../components/LeagueGallery/LeagueGallery"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
// import NavbarTwo from "../../components/navbar/NavbarTwo"

import '../page-main-style.css'
const GalleryPage = () => {
  return (
    <>
      {/* <NavbarTwo/> */}
      <div className="sub-pages-header" >
          <Navbar/>
          <div className='sub-hero'>
            <div className="sub-hero-container">
                <h1 className='sub-hero-title'>Gallery</h1>
            </div>
          </div>
      </div>
      <LeagueGallery/>
      <Footer/>
    </>
    
  )
}

export default GalleryPage
