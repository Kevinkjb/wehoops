/* eslint-disable react/prop-types */
import './gallery-about.css'

const GallerAbout = ({img}) => {
  return (
    <div className='gallery-about-container'>
      <img className="gallery-image" src={img.imgUrl} alt="Wehoops Images" />
    </div>
  )
}

export default GallerAbout
