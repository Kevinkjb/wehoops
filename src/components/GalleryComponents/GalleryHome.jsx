import './gallery-home.css'
import galleryImage from '../../images/gallery.png'
import {Link} from 'react-router-dom'
const GalleryHome = () => {
  return (
    <div className='gallery-home'>
      <div className="galler-home-section">
        <div className="gallery-header">
            <h2 className='gallery-title'>Our Gallery</h2>
            <Link to="/gallery">
                <button className='gallery-btn'>View More</button>
            </Link>

        </div>
        <div className="gallery-list">
            <img className='gallery-img' src={galleryImage} alt="Wehoops Feature Images" />
            <img className='gallery-img' src={galleryImage} alt="Wehoops Feature Images" />
            <img className='gallery-img' src={galleryImage} alt="Wehoops Feature Images" />
        </div>
      </div>
    </div>
  )
}

export default GalleryHome
