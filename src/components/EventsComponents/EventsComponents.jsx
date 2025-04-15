// import eventImage from '../../images/gallery/featured-image.png'
import wetaskiwin from '../../images/icons/wetaskiwin icon.png'
import fizo from '../../images/icons/fizo icon.webp'
import BP from '../../images/icons/BP Icon.png'
import AW from '../../images/icons/aw.png'
import WLWS from '../../images/icons/WLWS icon.png';
import NL from '../../images/icons/North lane.jpg';
import legacy from '../../images/icons/legacy dodge.jpg';
import rayden from '../../images/icons/rd logo light trans.png'
import miniHoopers from '../../images/mini-hoopers/Mini Hoopers.png'
// import { Link } from 'react-router-dom'

import './events.css'
const EventsComponents = () => {
  return (
    <div className="main-events">
      <div className="events-section">
        <div className="image-container">
            <img className='event-img' src={miniHoopers} alt="Mini Hoopers" />
        </div>
        <div className="events-info">
            <h3 className='event-title'>Join Our <br /> Mini Hoopers Event</h3>
            <div className="sub-info">
                {/* <h4 className='sub-event-title'>Open & Master Division</h4> */}
                {/* <p>Team Registration:</p> */}
                <p className='event-text-mini'>Join us to help your child grow as a player and build lasting friendships through the sports</p>
                {/* <p style={{fontWeight: '700', marginLeft: '1rem'}}>Closed</p> */}
            </div>
            <a href="https://docs.google.com/forms/d/1uSFm6NqpcmTodF41DeAJEyF2RiG5ZYpEkrCMQQvWcSc/edit" target='_blank' style={{textDecoration: "none", color: '#fff'}}>
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
              <a href="https://www.raydenwebstudio.com/" target='_blank'>
                <img className='sponsor-img sponsor-two' src={rayden} alt="Rayden Web Studio" />
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
