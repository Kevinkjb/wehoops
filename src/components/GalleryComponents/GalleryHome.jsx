import './gallery-home.css';
import galleryOne from '../../images/gallery/gallery-one.jpg';
import galleryFour from '../../images/gallery/gallery-four.jpg';
import galleryThree from '../../images/gallery/gallery-three.jpg';
import {Link} from 'react-router-dom';
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
            <img className='gallery-img' src={galleryOne} alt="Wehoops Feature Images" />
            <img className='gallery-img' src={galleryThree} alt="Wehoops Feature Images" />
            <img className='gallery-img' src={galleryFour} alt="Wehoops Feature Images" />

        </div>
      </div>
    </div>
  )
}

export default GalleryHome
