import eventImage from '../../images/event-image.png'
import icon from '../../images/icons/wetaskiwin icon.png'
import './events.css'
const EventsComponents = () => {
  return (
    <div className="main-events">
      <div className="events-section">
        <div className="image-container">
            <img className='event-img' src={eventImage} alt="3v3 Tournament Event" />
        </div>
        <div className="events-info">
            <h3 className='event-title'>Join Our <br /> 3v3 Tournament</h3>
            <div className="sub-info">
                <h4 className='sub-event-title'>Men & Women Division</h4>
                <p>Team Registration:</p>
                <p style={{fontWeight: '700', marginLeft: '1rem'}}>$250</p>
            </div>
            <button className='event-btn'>Register Now!</button>

        </div>
      </div>
      <div className="sponsors">
        <div className="sponsor-section">
            <h2 className='sponsor-title'>Our Proudly Sponsors</h2>
            <div className="sponsors-icon">
                <img className='sponsor-img' src={icon} alt="Wetaskiwin Sponsor" />
                <img className='sponsor-img' src={icon} alt="Wetaskiwin Sponsor" />
                <img className='sponsor-img' src={icon} alt="Wetaskiwin Sponsor" />
                <img className='sponsor-img' src={icon} alt="Wetaskiwin Sponsor" />
                <img className='sponsor-img' src={icon} alt="Wetaskiwin Sponsor" />
                <img className='sponsor-img' src={icon} alt="Wetaskiwin Sponsor" />
                <img className='sponsor-img' src={icon} alt="Wetaskiwin Sponsor" />
                <img className='sponsor-img' src={icon} alt="Wetaskiwin Sponsor" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default EventsComponents
