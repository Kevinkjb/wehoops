// import programImage from '../../../images/about/basketball.webp'
import './program-page.css';

const ProgramRegistration = () => {
  return (
    <div className="registration-section">
      <div className="registration-list">
        {/* PROGRAM ONE */}
        <div className="program-registration-one">
            <div className="program-registration-info">
              <h2 className='registration-title'>WEHoopS League</h2>
              <button className='registration-btn'>Register Now!</button>
            </div>
          {/* <img className='registration-img' src={programImage} alt="Program registration" /> */}
        </div>
        {/* PROGRAM TWO */}
        <div className="program-registration-two">
            <div className="program-registration-info">
              <h2 className='registration-title'>WEHoopS 3x3</h2>
              <button className='registration-btn'>Register Now!</button>
            </div>
          {/* <img className='registration-img' src={programImage} alt="Program registration" /> */}
        </div>
        {/* PROGRAM THREE */}
        <div className="program-registration-three">
          <div className="program-registration-info">
            <h2 className='registration-title'>WEHoopS Tournaments</h2>
            <button className='registration-btn'>Register Now!</button>
          </div>
          {/* <img className='registration-img' src={programImage} alt="Program registration" /> */}
        </div>
         {/* PROGRAM FOUR */}
         <div className="program-registration-four">
          <div className="program-registration-info">
            <h2 className='registration-title clinic-title'>Basketball Clinic, Camps and Small Groups Training</h2>
            <button className='registration-btn'>Register Now!</button>
          </div>
          {/* <img className='registration-img' src={programImage} alt="Program registration" /> */}
        </div>
        {/* PROGRAM FIVE */}
        <div className="program-registration-five">
          <div className="program-registration-info">
            <h2 className='registration-title'>Fund Raising</h2>
            <button className='registration-btn'>Register Now!</button>
          </div>
          {/* <img className='registration-img' src={programImage} alt="Program registration" /> */}
        </div>
        {/* PROGRAM SIX
        <div className="program-registration-six"> */}
          {/* <h2 className='registration-title'>Program Title</h2>
          <button className='registration-btn'>Register Now!</button> */}
          {/* <img className='registration-img' src={programImage} alt="Program registration" /> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default ProgramRegistration
