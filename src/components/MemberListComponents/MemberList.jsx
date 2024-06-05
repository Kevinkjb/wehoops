import { FaFacebook, FaInstagram  } from "react-icons/fa";
import comingSoonImage from '../../images/about/coming-soon.png';
import './member-list.css'
const MemberList = () => {
  return (
    <div className="wehoops-members">
    {/* MEMBERS SECTION */}
    <div className="members-section">
      <div className="members-header">
        <h2 className="members-title">Wehoops Members</h2>
      </div>
      {/* MEMBERS LIST */}
      {/* MEMBER ONE */}
      <div className="members-list">
        <div className="member">
          <img className="members-image" src={comingSoonImage} alt="Members Name" />
          <div className="members-info">
            <p className="sub-member-title">Wehoops Members title</p>
            <h3 className="members-name">Member Name</h3>
            <p className="members-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam.
            </p>
            <div className="members-social-media">
              <FaFacebook className="members-social-icon"/>
              <FaInstagram className="members-social-icon"/>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* MEMBER TWO */}
      <div className="members-list">
        <div className="member">
        <div className="members-info">
            <p className="sub-member-title">Wehoops Members title</p>
            <h3 className="members-name">Member Name</h3>
            <p className="members-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam.
            </p>
            <div className="members-social-media">
              <FaFacebook className="members-social-icon"/>
              <FaInstagram className="members-social-icon"/>
            </div>
          </div>
          <img className="members-image" src={comingSoonImage} alt="Members Name" />
        </div>
      </div>
      {/*  */}
      {/* MEMBER THREE */}
      <div className="members-list">
        <div className="member">
          <img className="members-image" src={comingSoonImage} alt="Members Name" />
          <div className="members-info">
            <p className="sub-member-title">Wehoops Members title</p>
            <h3 className="members-name">Member Name</h3>
            <p className="members-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam.
            </p>
            <div className="members-social-media">
              <FaFacebook className="members-social-icon"/>
              <FaInstagram className="members-social-icon"/>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/* MEMBER FOUR */}
      <div className="members-list">
        <div className="member">
        <div className="members-info">
            <p className="sub-member-title">Wehoops Members title</p>
            <h3 className="members-name">Member Name</h3>
            <p className="members-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam.
            </p>
            <div className="members-social-media">
              <FaFacebook className="members-social-icon"/>
              <FaInstagram className="members-social-icon"/>
            </div>
          </div>
          <img className="members-image" src={comingSoonImage} alt="Members Name" />
        </div>
      </div>
      {/*  */}
    </div>
    {/* OTHER MEMBERS LIST */}
    <div className="other-members-section">
      <div className="other-members-header">
        <h2 className="other-member-title">Other Members</h2>
      </div>
      <div className="other-members-list">
        <img className="other-image" src={comingSoonImage} alt="Members Name" />
        <img className="other-image" src={comingSoonImage} alt="Members Name" />
        <img className="other-image" src={comingSoonImage} alt="Members Name" />
        <img className="other-image" src={comingSoonImage} alt="Members Name" />
        <img className="other-image" src={comingSoonImage} alt="Members Name" />
        <img className="other-image" src={comingSoonImage} alt="Members Name" />
      </div>
    </div>
  </div>
  )
}

export default MemberList
