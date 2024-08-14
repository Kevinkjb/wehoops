import eventImage from '../../images/gallery/featured-image.png'
import wetaskiwin from '../../images/icons/wetaskiwin icon.png'
import fizo from '../../images/icons/fizo icon.webp'
import BP from '../../images/icons/BP Icon.png'
import AW from '../../images/icons/aw.png'
import WLWS from '../../images/icons/WLWS icon.png';
import NL from '../../images/icons/North lane.jpg';
import legacy from '../../images/icons/legacy dodge.jpg';
import dominos from '../../images/icons/dominos.png';
// import { Link } from 'react-router-dom'

import './events.css'
const EventsComponents = () => {
  return (
    <div className="main-events">
      <div className="events-section">
        <div className="image-container">
            <img className='event-img' src={eventImage} alt="3v3 Tournament Event" />
        </div>
        <div className="events-info">
            <h3 className='event-title'>Join Our <br /> Basketball League</h3>
            <div className="sub-info">
                <h4 className='sub-event-title'>Open & Master Division</h4>
                <p>Team Registration:</p>
                <p style={{fontWeight: '700', marginLeft: '1rem'}}>$1500</p>
            </div>
            <a href="#contact">
              <button className='event-btn'>Register Now!</button>
            </a>


        </div>
      </div>
      <div className="sponsors" >
        <div className="sponsor-section">
            <h2 className='sponsor-title'>Our Major Sponsors</h2>
            <div className="sponsors-icon">
              <a href="https://www.wetaskiwin.ca/" target='_blank'>
                <img className='sponsor-img wetaskiwin-img' src={wetaskiwin} alt="Wetaskiwin Sponsor" />
              </a>
              <a href="https://www.fizoautomotive.com/" target='_blank'>
                <img className='sponsor-img fizo-img' src={fizo} alt="Fizo Automotives Sponsor" />
              </a>
              <a href="https://bostonpizza.com/wetaskiwin" target='_blank'>
                <img className='sponsor-img' src={BP} alt="Boston Pizza Sponsor" />
              </a>
              <a href="https://web.aw.ca/en/locations/1527/wetaskiwin/wetaskiwin" target='_blank'>
              <img className='sponsor-img' src={AW} alt="A&W Sponsor" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61554739525516" target='_blank'>
                <img className='sponsor-img' src={WLWS} alt="Wetaskiwin Literacy & Welness Services Sponsor" />
              </a>
              <a href="https://www.linkedin.com/in/north-lane-inc-437ab6200/?originalSubdomain=ca" target='_blank'>
                <img className='sponsor-img sponsor-two' src={NL} alt="North Lane Sponsor" />
              </a>
              <a href="https://www.dominos.ca/en/" target='_blank'>
                <img className='sponsor-img dominos-img' src={dominos} alt="Dominos Sponsor" />
              </a>
              <a href="https://www.legacydodgewetaskiwin.com/" target='_blank'>
                <img className='sponsor-img sponsor-two' src={legacy} alt="Legacy Dodge Sponsor" />
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EventsComponents
