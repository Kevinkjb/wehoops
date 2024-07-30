import tournament from '../../../images/program/Wehoops Tournament Program.png';
import league from '../../../images/program/Wehoops League Program.png';
import threeOnThree from '../../../images/program/Wehoops 3-on-3 Program.png';
import kids from '../../../images/program/Wehoops kids program.jpg';
import fundraising from '../../../images/program/Wehoops Fundraising.png';
import './program-page.css';
import {Link} from 'react-router-dom'
const ProgramRegistration = () => {
  return (
    <div className="registration-section">
      <div className="program-info-text">
        <p className='program-text-one' style={{color: '#000'}}>
          <strong>WEHOOPS Program </strong> 
          is a community-focused league that promotes fitness, teamwork, and sportsmanship for players of all ages and skill levels. 
          Our mission is to foster a love for basketball while emphasizing health, camaraderie, personal growth, and mental well-being. 
          We are committed to creating an inclusive environment that stands against racism and supports mental health awareness.
        </p>
        <p className='program-text-two' style={{color: 'var(--dark-color)'}}>
          We offer various divisions, including youth, open and master division catering to different age groups and skill levels. 
          Each season features regular games, playoffs, and skill clinics led by experienced coaches to help players improve their abilities.
        </p>
      </div>
      
      <div className="registration-list">
        
        {/* PROGRAM ONE */}
        <div className="program-registration">
            <div className="program-registration-info program-league-info">
              <h2 className='registration-title'>WEHOOPS Basketball League</h2>
              <p className='program-list-text'>
                Features teams from Wetaskiwin and surrounding cities, providing a platform for local talent to shine. 
                The league culminates in an exciting All-Star Weekend, where players showcase their skills in a series of thrilling events and games. 
                The season concludes with the crowning of the champion, who will receive prestigious awards. 
                Additionally, individual players are recognized for their outstanding performances throughout the season, 
                celebrating the best in local basketball and bringing communities together in support of their teams.
              </p>
              <Link to="/registration">
                <button className='registration-btn'>Register Now!</button>
              </Link>
            </div>
          <img className='registration-img' src={league} alt="Program registration" />
        </div>
        {/* PROGRAM TWO */}
        <div className="program-registration">
          {/* <img className='registration-img' src={programImage} alt="Program registration" /> */}
            <div className="program-registration-info">
              <h2 className='registration-title'>WEHOOPS 3-on-3 Basketball League</h2>
              <p className='program-list-text'>
                Is a fast-paced, professional basketball organization that features teams of three players competing in high-energy, half-court games. 
                This format emphasizes speed, skill, and teamwork, offering fans an exciting and dynamic experience. 
                The league is known for its thrilling matches and dedication to promoting the sport in a more accessible and engaging way.
              </p>
              <Link to="/registration">
                <button className='registration-btn'>Register Now!</button>
              </Link>
            </div>
            <img className='registration-img' src={threeOnThree} alt="Program registration" />
        </div>
        {/* PROGRAM THREE */}
        <div className="program-registration">
          <div className="program-registration-info tournament-info">
            <h2 className='registration-title'>WEHOOPS Basketball Tournament</h2>
            <p className='program-list-text'>
              Is a thrilling 1-2 day event featuring an open competitive division. 
              Teams from Wetaskiwin and surrounding cities are invited to showcase their skills and compete for glory. 
              This exciting tournament promises intense matchups, fostering community spirit and a love for the game.
            </p>
            <Link to="/registration">
              <button className='registration-btn'>Register Now!</button>
            </Link>
          </div>
          <img className='registration-img' src={tournament} alt="Program registration" />
        </div>
         {/* PROGRAM FOUR */}
         <div className="program-registration">
          {/* <img className='registration-img' src={programImage} alt="Program registration" /> */}
          <div className="program-registration-info">
            <h2 className='registration-title clinic-title'>WEHOOPS Youth Basketball Clinic, Camps, and Training</h2>
            <p className='program-list-text'>
              Programs are designed to develop young athletes skills, teamwork, and love for the game. 
              Offering expert coaching and engaging drills, these programs provide a fun and supportive environment for kids to improve their basketball abilities. 
              Join us to help your child grow as a player and build lasting friendships through the sport.
            </p>
            <Link to="/registration">
              <button className='registration-btn'>Register Now!</button>
            </Link>
            
          </div>
          <img className='registration-img' src={kids} alt="Program registration" />
        </div>
        {/* PROGRAM FIVE */}
        <div className="program-registration">
          <div className="program-registration-info fundraising">
            <h2 className='registration-title'>WEHOOPS Basketball Fundraising</h2>
            <p className='program-list-text'>
              Events bring the community together to support local teams, individuals and other programs. 
              These events combine the excitement of basketball with activities like auctions, raffles, and friendly games, all aimed at raising essential funds. 
              Your participation helps provide equipment, facilities, and opportunities for athletes to thrive, ensuring the continued growth and success of the sport in our community.
            </p>
          </div>
          <img className='registration-img' src={fundraising} alt="Program registration" />
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
