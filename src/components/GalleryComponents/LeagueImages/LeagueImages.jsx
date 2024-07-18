import './league.css'
import sample from '../../../images/gallery/members.jpg'
const LeagueImages = () => {
  return (
    <div>
        <div className="league-images-list">
            <img className='league-img-gallery' src={sample} alt="League Images" />
            <img className='league-img-gallery' src={sample} alt="League Images" />
            <img className='league-img-gallery' src={sample} alt="League Images" />
            <img className='league-img-gallery' src={sample} alt="League Images" />
            <img className='league-img-gallery' src={sample} alt="League Images" />
            <img className='league-img-gallery' src={sample} alt="League Images" />
            <img className='league-img-gallery' src={sample} alt="League Images" />
            <img className='league-img-gallery' src={sample} alt="League Images" />
        </div>
    </div>
  )
}

export default LeagueImages
