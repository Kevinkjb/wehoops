import { useState } from 'react';
// import TrainingCamp from '../GalleryComponents/LeagueImages/TrainingCamp';
// import Tournaments from '../GalleryComponents/LeagueImages/Tournaments';
// import WehoopsThree from '../GalleryComponents/LeagueImages/WehoopsThree';
import './league-gallery.css';
import LeagueSlide from '../carouselSlider/LeagueSlide';
import WehoopsSlide from '../carouselSlider/WehoopsSlide';
import TournamentSlide from '../carouselSlider/TournamentSlide';
import TrainingSlide from '../carouselSlider/TrainingSlide';

const LeagueGallery = () => {
    const [show, setShow] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setshowFour] = useState(false);
    const buttonHandler = () => {
        setShowTwo('');
        setShowThree('');
        setshowFour('');
        setShow(!show)
    }
    const buttonTwo = () => {
        setShow('');
        setShowThree('');
        setshowFour('');
        setShowTwo(!showTwo)
    }
    const buttonThree = () => {
        setShow('');
        setShowTwo('');
        setshowFour('');
        setShowThree(!showThree)
    }
    const buttonFour = () => {
        setShow('');
        setShowTwo('');
        setShowThree('');
        setshowFour(!showFour)
    }
  return (
    <div className="league-section">
      <div className="league-gallery-list">
        <div className="league-content">
            <div className="league-info">
                <h2 className='league-title'>WEHoopS League</h2>
                <button className='league-link' onClick={() => buttonHandler(!show)}>Click to View Our Image</button>
            </div>
        </div>
        <div className="league-content">
            <div className="league-info">
                <h2 className='league-title'>WEHoopS 3v3</h2>
                <button className='league-link ' onClick={() => buttonFour(!showFour)}>Click to View Our Image</button>
            </div>
        </div>
        <div className="league-content">
            <div className="league-info">
                <h2 className='league-title'>WEHoopS Tournaments</h2>
                <button className='league-link' onClick={() => buttonTwo(!showTwo)}>Click to View Our Images</button>
            </div>
        </div>
        <div className="league-content">
            <div className="league-info">
                <h2 className='league-title'>Basketball Clinic, Camps and Small Groups Training</h2>
                <button className='league-link' onClick={() => buttonThree(!showThree)}>Click to View Our Image</button>
            </div>
        </div>
      </div>
      <div className="image-gallery-box">
        {show ? <LeagueSlide/> : ''}
        {showTwo ? <TournamentSlide/> : ''}
        {showThree ? <TrainingSlide/> : ''}
        {showFour? <WehoopsSlide/> : ''}
      </div>
      {/* VIDEO CONTENT SECTION */}
      <div className="league-video-list">
        <div className="league-video-header">
            <h2 className='video-title'>Tournament Videos</h2>
        </div>
        <div className="video-list">
            <div className="video-content">
                <h2 className='video-subtitle'>Coming Soon..</h2>
            </div>
            <div className="video-content">
                <h2 className='video-subtitle'>Coming Soon..</h2>
            </div>
            <div className="video-content">
                <h2 className='video-subtitle'>Coming Soon..</h2>
            </div>
            <div className="video-content">
                <h2 className='video-subtitle'>Coming Soon..</h2>
            </div>

        </div>
      </div>
    </div>
  )
}

export default LeagueGallery
