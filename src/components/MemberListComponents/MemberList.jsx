import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import comingSoonImage from '../../images/about/coming-soon.png';
import gerald from './members-img/gerald-member.png'
import xriz from './members-img/xriz-image.jpg'
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
        <div className="member member-one" >
          <img className="members-image" src={gerald} alt="Gerald Achazo" />
          <div className="members-info">
            <p className="sub-member-title">Founder</p>
            <h3 className="members-name">Gerald Achazo</h3>
              <p className="members-info-text">
                Gerald Achazo is a dedicated and passionate sports and organization manager with a profound love for basketball. 
                With years of experience in multiple industries, Gerald has honed his skills in managing teams, organizing events, and fostering a positive and collaborative environment. 
                His ability to connect with people, especially kids, makes him a standout leader and mentor. 
              </p>

              <p className="members-info-text">
                Outside of his work with WEHOOPS, Gerald runs two additional non-profit organizations that focus on giving back to the community of Wetaskiwin. 
                His main professional role is as a Fabrication Supervisor at Vulcraft, Nucor Canada, where he has developed strong leadership and management skills. 
                Gerald is also a professional photographer and videographer, specializing in weddings, corporate events, concerts, and more. 
              </p>

              <p className="members-info-text">
                On a personal level, Gerald is looking forward to welcoming a beautiful daughter this coming summer. 
                His commitment to excellence, genuine care for others, and diverse skill set make him an invaluable asset to any sports organization and the broader community.
              </p>
              <p style={{fontWeight: '700'}}>Connect with Gerald at:</p>
            <div className="members-social-media">
              <a href="" target="_blank" className="member-social-link" aria-label="Links to Gerald's Facebook Account">
                <FaFacebook className="members-social-icon" alt="Gerald Facebook Page"/>
              </a>
              <a href="" target="_blank" className="member-social-link" aria-label="Links to Gerald's Instagram Account">
                <FaInstagram className="members-social-icon" alt="Gerald Instagram" />
              </a>
              <a href=""  target="_blank" className="member-social-link" aria-label="Links to Gerald's Linkedin Account">
                <FaLinkedin className="members-social-icon" alt="Gerald Linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* MEMBER TWO */}
      <div className="members-list">
        <div className="member member-two">
        <div className="members-info">
            <p className="sub-member-title">Founder</p>
            <h3 className="members-name">Xriz Mission</h3>
            <p className="members-info-text">
              Raised on the courts of the urban game, Xriz brings a streetball edge to the sidelines.
            </p>
            <p className="members-info-text">
              With a streetball pedigree and a passion for nurturing young minds, 
              he seamlessly balances his roles as a dedicated coach and a compassionate caregiver.
              As a former streetball player, Xriz brings a unique flair and grit to his coaching style, 
              inspiring his players to reach new heights both physically and mentally.
            </p>
            <p className="members-info-text">
              {`But Xriz talents extend far beyond the basketball court - he's also a dedicated caregiver, armed  with a deep understanding
              of child development that allows him to provide enriching experiences for children of all ages.`}
            </p>
            <p className="members-info-text">
              By day, he leads his team to victory,
              honing their athletic skills and mental toughness. But his true passion lies in his role as a caregiver,
              where he promotes healthy attachments, physical and intellectual development, and social and emotional well-being.
            </p>

            <div className="list-of-details">
              <p className="member-achievement-title">Canada Basketball:</p>
              <ul className="achievement-item">
                <li className="achievement-list">Fundamentals Certified</li>
                <li className="achievement-list">Learn to Train Certified</li>
                <li className="achievement-list">Professional Development Certified</li>
                <li className="achievement-list">In training: Train to train, Train to compete</li>
              </ul>
            </div>
            <div className="members-social-media">
              <a href="" target="_blank" className="member-social-link" aria-label="Links to Xriz's Facebook Account">
                <FaFacebook className="members-social-icon" alt="Xriz Facebook Page"/>
              </a>
              <a href="" target="_blank" className="member-social-link" aria-label="Links to Xriz's Instagram Account">
                <FaInstagram className="members-social-icon" alt="Xriz Instagram Account"/>
              </a>
              <a href=""  target="_blank" className="member-social-link" aria-label="Links to Xriz's Linkedin Account">
                <FaLinkedin className="members-social-icon" alt="Xriz Linkedin" />
              </a>
            </div>
          </div>
          <img className="members-image" src={xriz} alt="Xriz Mission" />
        </div>
      </div>
      {/*  */}
      {/* MEMBER THREE */}
      <div className="members-list">
        <div className="member member-three">
          <img className="members-image" src={comingSoonImage} alt="Alec Tolosa" />
          <div className="members-info">
            <p className="sub-member-title">Director</p>
            <h3 className="members-name">Alec Tolosa</h3>
            <p className="members-info-text">
              {` 
                Alec Tolosa is another individual in our organization who has immense love for the game of basketball. With his easy-going, light-spirited and funny personality, 
                Alec just comes natural with his interpersonal connection with people much more with the youth. 
                `
                }
            </p>
            <p className="members-info-text">
              {`From past and current professional experiences such as being a Junior Sous-Chef at a young age, being in the Sales Industry for a brief period of time, being a Support Worker, 
                being in the Steel Industry and now currently a Shipping/Receiving Coordinator, 
                Diving into Alec's personal life, he is currently a Shipping/Receiving Coordinator at Vulcraft Canada Wetaskiwin. `}
            </p>
            <p className="members-info-text">
              He is happily married to his wife Diane and they are blessed with a beautiful boy Alakai.
              Looking forward to meeting all of you!
            </p>
            <p className="members-info-text">
              Alec was really able to hone these said skills to the fullest and was merged into his personality effortlessly. Being a previous Fitness Enthusiast, Alec has the discipline and the drive to keep being better everyday while having fun. 
              Living these multiple experiences and having different interactions throughout the years makes Alec confident about easily connecting with people through WEHoopS and being able to coordinate/direct the programs they have ahead.
            </p>
            <p className="members-info-text">Looking forward to meeting all of you! - Alec Tolosa</p>
            <div className="members-social-media">
              <a href="" target="_blank" className="member-social-link" aria-label="Links to Alec's Facebook Account">
                <FaFacebook className="members-social-icon"/>
              </a>
              <a href="" target="_blank" className="member-social-link" aria-label="Links to Alec's Instagram Account">
                <FaInstagram className="members-social-icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/* MEMBER FOUR */}
      <div className="members-list">
        <div className="member member-four">
        <div className="members-info">
            <p className="sub-member-title">Director</p>
            <h3 className="members-name">Pierre Munoz</h3>
            <p className="members-info-text">
              {
              `Pierre, who didn't start playing basketball until he moved from his home country to Canada, has always emphasized his lifelong passion for the sport. 
              Despite initially facing rejection from his junior high school team, he used this setback as motivation for improvement. `
              }
            </p>
            <p className="members-info-text">
              {`Pierre's journey led him to the Wetaskiwin Sabres Basketball Club for Youth, 
              where he diligently honed his skills and eventually earned a spot on the Sacred Heart Team. `}
            </p>
            <p className="members-info-text">
              {`Throughout high school, he continued to play for the Wetaskiwin Sabres, further solidifying his dedication to basketball.
              Beyond playing, Pierre's enthusiasm for basketball extends to actively participating in multiple leagues across Central Alberta and pursuing certifications in refereeing and coaching. 
              `}
              </p>
              <p className="members-info-text">
                His diverse roles as a player, referee, and coach have provided him with a deep understanding of the sport, which he eagerly looks forward to sharing with the community through his involvement with WeHoops.
              </p>
            <div className="members-social-media">
              <a href="" target="_blank" className="member-social-link" aria-label="Links to Pierre's Facebook Account">
                <FaFacebook className="members-social-icon"/>
              </a>
              <a href="" target="_blank" className="member-social-link" aria-label="Links to Pierre's Instagram Account">
                <FaInstagram className="members-social-icon"/>
              </a>
            </div>
          </div>
          <img className="members-image" src={comingSoonImage} alt="Pierre Munoz" />
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
        <img className="other-image" src={comingSoonImage} alt="John Renz Quisao" />
        <img className="other-image" src={comingSoonImage} alt="JB Abad" />
        <img className="other-image" src={comingSoonImage} alt="Francis Zapata" />
        <img className="other-image" src={comingSoonImage} alt="Jayson Julian" />
      </div>
    </div>
  </div>
  )
}

export default MemberList
