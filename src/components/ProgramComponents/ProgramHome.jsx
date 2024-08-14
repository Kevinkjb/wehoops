import './program-home.css'
import {Link} from 'react-router-dom'

const ProgramHome = () => {
  return (
    <>
      <div className="program-home-section">
        <div className="program-header">
            <h2 className='program-title'>Join Our Program</h2>
        </div>
        <div className="program-list">
            <div className="program-content">
                <div className="program-info">
                    <h3 className='sub-program-title'>WEHOOPS Basketball League</h3>
                    <Link to="/programs">
                        <button className='program-btn'>Learn More</button>
                    </Link>

                </div>
            </div>
            <div className="program-content">
                <div className="program-info">
                    <h3 className='sub-program-title'>WEHOOPS 3-on-3 Basketball League</h3>
                    <Link to="/programs">
                        <button className='program-btn'>Learn More</button>
                    </Link>
                </div>
            </div>
      
            <div className="program-content">
                <div className="program-info">
                    <h3 className='sub-program-title'>WEHOOPS Basketball Tournament</h3>
                    <Link to="/programs">
                        <button className='program-btn'>Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProgramHome
