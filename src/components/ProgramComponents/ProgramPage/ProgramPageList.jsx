import './program-page.css'

const ProgramPageList = () => {
  return (
    <div className='program-page-section'>
        <div className="program-page-list">
            <div className="program-page-header">
                <h2 className='program-page-title'>5v5 Tournament League</h2>
                <h3 className='program-page-subtitle'>Open and Master Division</h3>
            </div>
            <div className="date-location">
                <h4 style={{fontSize: '1.1rem', marginTop: '3rem', marginBottom: '2rem'}}>Dates and Locations:</h4>
                <div className="event-info">
                    <p>Clear Vista School Wetaskiwin</p>
                    <p>Date: <span style={{fontWeight: 'bold'}}>TBA</span></p>
                    <p>4510 47 ST, Wetaskiwin</p>
                </div>

                {/* <button className='program-event-btn'>Register Now!</button> */}
            </div>
        </div>
        <div className="program-page-list">
            <div className="program-page-header">
                <h2 className='program-page-title'>3v3 Street Ball</h2>
                <h3 className='program-page-subtitle'>Men and Women Division</h3>
            </div>
            <div className="date-location">
                <h4 style={{fontSize: '1.1rem', marginTop: '3rem', marginBottom: '2rem'}}>Dates and Locations:</h4>
                <div className="event-info">
                    <p style={{fontWeight: 'bold', textTransform: 'uppercase'}}>Sari-Sari Mercado</p>
                    <p>June 8 & 9</p>
                    <p>Outdoor Event</p>
                    <p>9912-72 Ave Edmonton</p>
                </div>
                <div className="event-info" style={{margin: '3rem 0'}}>
                    <p style={{fontWeight: 'bold', textTransform: 'uppercase'}}>Wetaskiwin United Heritage Festival</p>
                    <p>June 14 & 15</p>
                    <p>Outdoor Event</p>
                    <p>Jubilee Park - 50 Ave, Wetaskiwin</p>
                </div>
                {/* <button className='program-event-btn'>Register Now!</button> */}
            </div>
        </div>
        <div className="program-page-list">
            <div className="program-page-header">
                <h2 className='program-page-title'>Mini Hoopers Basketball Clinic and Practices</h2>
                <h3 className='program-page-subtitle'>Children Ages 5 to 11 Years Old</h3>
            </div>
            <div className="date-location">
                <h4 style={{fontSize: '1.1rem', marginTop: '3rem', marginBottom: '2rem'}}>Dates:</h4>
                <div className="event-info" style={{marginBottom: '2rem'}}>
                    <p>May 18 to June 14, 2024</p>
                    <ul>
                        <li className='event-list-item'>
                            <p style={{fontWeight: 'bold'}}>Practices:</p>
                            <p style={{width: '18rem', display: 'flex', justifyContent: 'start', fontWeight: 'bold'}}>TBA</p>
                        </li>
                        <li className='event-list-item'>
                            <p style={{fontWeight: 'bold'}}>Games:</p>
                            <p style={{width: '18rem', display: 'flex', justifyContent: 'start', fontWeight: 'bold'}}>TBA</p>
                        </li>
                        <li className='event-list-item'>
                            <p style={{fontWeight: 'bold'}}>Tournament:</p>
                            <p style={{width: '18rem', display: 'flex', justifyContent: 'start', fontWeight: 'bold'}}>TBA</p>
                        </li>
                    </ul>
                </div>
                <h4 style={{fontSize: '1.1rem', marginTop: '3rem', marginBottom: '2rem'}}>Location:</h4>
                <div className="event-info" >
                    <p>Clear Vista School Wetaskiwin</p>
                    <p>4510 47 ST, Wetaskiwin</p>
                </div>
                {/* <button className='program-event-btn'>Register Now!</button> */}
            </div>
        </div>
      
    </div>
  )
}

export default ProgramPageList
