import Navbar from "../../components/navbar/Navbar"
import '../page-main-style.css'
const GalleryPage = () => {
  return (
    <div className="sub-pages-header">
        <Navbar/>
        <div className='sub-hero'>
          <div className="sub-hero-container">
              <h1 className='sub-hero-title'>Gallery</h1>
          </div>
        </div>
    </div>
  )
}

export default GalleryPage
