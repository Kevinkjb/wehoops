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
              WEHoopS is a dedicated non-profit organization committed to fostering a love for basketball among young athletes. 
              They offer a comprehensive program that includes kids basketball training, dynamic basketball camps, and personalized small group training sessions. 
              In addition to these core activities, WEHoopS hosts a variety of engaging events such as basketball tournaments, leagues, and 3v3 competitions. 
              Driven by a passionate team of basketball enthusiasts, WEHoopS aims to provide opportunities for everyone to play, improve their skills, 
              and enjoy the game in a supportive and fun environment.
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
