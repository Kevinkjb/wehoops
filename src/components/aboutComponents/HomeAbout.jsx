import aboutImage from '../../images/about-image.jpg'
import './aboutComponents.css'
import {Link} from 'react-router-dom'
const HomeAbout = () => {
  return (
    <div className='components-about'>
      <div className="about-section">
        <img className='about-image' src={aboutImage} alt="Wehoops Member" />
        <div className="about-info">
            <h3 className='about-title'>About Us</h3>
            <p className='about-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris  efficitur felis a ultrices lacinia. 
                Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
                Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam.
            </p>
            <Link to="/about">
              <button className='about-btn'>Learn More</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
