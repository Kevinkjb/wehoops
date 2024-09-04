import { useState } from 'react';
import './league-gallery.css';
import LeagueSlide from '../carouselSlider/LeagueSlide';
import WehoopsSlide from '../carouselSlider/WehoopsSlide';
import TournamentSlide from '../carouselSlider/TournamentSlide';
import TrainingSlide from '../carouselSlider/TrainingSlide';
import Modal from './Modal/Modal';
import Fundraising from '../carouselSlider/Fundraising';
import SeasonSlide from '../carouselSlider/SeasonSlide';

const LeagueGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);

  const openModal = (slideType) => {
    setActiveSlide(slideType);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveSlide(null);
  };

  return (
    <div className="league-section">
        <div className="season-header">
            <h2 className='season-title'>2023 Wehoops Season 1 </h2>
        </div>

        <div className="season-one-list">
            <SeasonSlide/>
        </div>
      <div className="league-gallery-list">
        <div className="league-content league">
          <div className="league-info">
            <h2 className="league-title">WEHoopS League</h2>
            <button className="league-link" onClick={() => openModal('league')}>
              Click to View Our Image
            </button>
          </div>
        </div>
        <div className="league-content wehoopsthree">
          <div className="league-info">
            <h2 className="league-title">WEHoopS 3v3</h2>
            <button className="league-link" onClick={() => openModal('wehoops')}>
              Click to View Our Image
            </button>
          </div>
        </div>
        <div className="league-content tournament">
          <div className="league-info">
            <h2 className="league-title">WEHoopS Tournaments</h2>
            <button className="league-link" onClick={() => openModal('tournament')}>
              Click to View Our Images
            </button>
          </div>
        </div>
        <div className="league-content clinic">
          <div className="league-info">
            <h2 className="league-title">Basketball Clinic, Camps, and Small Groups Training</h2>
            <button className="league-link" onClick={() => openModal('training')}>
              Click to View Our Image
            </button>
          </div>
        </div>
        <div className="league-content fundraising-content">
          <div className="league-info">
            <h2 className="league-title">WEHoopS Basketball Fundraising</h2>
            <button className="league-link" onClick={() => openModal('fundraising')}>
              Click to View Our Image
            </button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onClose={closeModal}>
        {activeSlide === 'league' && <LeagueSlide />}
        {activeSlide === 'wehoops' && <WehoopsSlide />}
        {activeSlide === 'tournament' && <TournamentSlide />}
        {activeSlide === 'training' && <TrainingSlide />}
        {activeSlide === 'fundraising' && <Fundraising />}
    </Modal>

      {/* VIDEO CONTENT SECTION */}
      <div className="league-video-list">
        <div className="league-video-header">
          <h2 className="video-title">Tournament Videos</h2>
        </div>
        <div className="video-list">
          <div className="video-content">
            <h2 className="video-subtitle">Coming Soon..</h2>
          </div>
          <div className="video-content">
            <h2 className="video-subtitle">Coming Soon..</h2>
          </div>
          <div className="video-content">
            <h2 className="video-subtitle">Coming Soon..</h2>
          </div>
          <div className="video-content">
            <h2 className="video-subtitle">Coming Soon..</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueGallery;
