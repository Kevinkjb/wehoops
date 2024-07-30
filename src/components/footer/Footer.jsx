import {Link} from 'react-router-dom';
import logoImg from '../../images/icons/wehoops-logo.png';
import './footer.css';
import { FaSlack, FaFacebook, FaYoutube   } from "react-icons/fa";
import ruleTwo from '../../images/icons/rule of two.webp';
import rcm from '../../images/icons/rcm pledge.jpg';
import helpline from '../../images/icons/helpline.webp';
import ediPledge from './files/Wehoops pledge.pdf'
import athleteProtection from './files/Copy of Athlete Protection Guidelines.docx.pdf'
import codeConduct from './files/Code of Conduct.docx.pdf'
const Footer = () => {
  return (
    <>

        <div className='footer-main'>
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to="/" >
                        <img className='footer-img' title='Wehoops Logo' src={logoImg} alt="Wehoops Logo" />
                    </Link>
                    <div className="footer-info">
                        <p className='footer-text'>Join us for fun and skill-building! </p>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="footer-list-item">
                        <ul className='footer-item'>
                            <li className='footer-list'>
                                <Link to="/" className='footer-link'>Home</Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="/programs" className='footer-link'>Programs</Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="/gallery" className='footer-link'>Gallery</Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="/about"  className='footer-link'>About Us</Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="/registration" className='footer-link'>Registration</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-list-item-two">
                        <ul className='footer-item-two'>
                            <li className='footer-list'>
                                <a href={codeConduct} className='footer-link' rel="noopener noreferrer" target='_blank'>Code of Conduct</a>
                            </li>
                            <li className='footer-list'>
                                <a href={ediPledge} className='footer-link' rel="noopener noreferrer" target='_blank'>WEHoops EDI Pledge</a>
                            </li>
                            <li className='footer-list'>
                                <a href={athleteProtection} className='footer-link' rel="noopener noreferrer" target='_blank'>Athlete Production Guidelines</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*FOOTER SOCIAL SECTION  */}
                <div className="footer-social">
                    <div className="footer-social-info">
                        <h3 className='footer-title'>Follow Us</h3>
                        <div className="social-media">
                            <a href="/" className='social-link' target='_blank' aria-label="Click icon to direct to Slacks">
                                <FaSlack className='footer-icon' alt="Slack Icon"/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61555168801559" className='social-link' target='_blank' aria-label="Click icon to direct to Facebook Page">
                                <FaFacebook className='footer-icon' alt="Facebook Icon"/>
                            </a>
                            <a href="/" className='social-link' target='_blank' aria-label="Click icon to direct to Youtube channel">
                                <FaYoutube className='footer-icon' alt="Youtube Icon"/>
                            </a>
                        </div>
                    </div>
                    <div className="footer-social-btn">
                        <a href="tel:+7803355238">
                            <button className='footer-btn'>Contact Us</button>
                        </a>
                        <Link to="/registration">
                            <button className='footer-btn-two'>Register Now</button>
                        </Link>
    
                    </div>
                </div>
            </div>


        </div>
        <div className="sample">
            <div className="footer-rules">
                <a href="https://coach.ca/sport-safety/responsible-coaching-movement/rule-two?fbclid=IwY2xjawEVGjJleHRuA2FlbQIxMAABHbXQMuCj8kCBRpa7KyC47UvOV7Og1MzAc5mOFErUJzrTVSvvCEnafTDAWA_aem_eCX50jYtN8-FcURbRpe_dQ" target='_blank'>
                    <img className='rules-img' src={ruleTwo} alt="Rule of Two" />
                </a>
                <a href="https://abuse-free-sport.ca/helpline?fbclid=IwY2xjawEVGlJleHRuA2FlbQIxMAABHQ4bQtp3wm2gkdir4_PT0ddpdQ7fO5_8slVSuvE-Jw5xOZRbGHx6hrCgJA_aem_SX3KKIjPDq0FXRHb-IYVkA" target='_blank'>
                    <img className='rules-img' src={helpline} alt="Help Line" />
                </a>
                <a href="https://coach.ca/sport-safety/responsible-coaching-movement" target='_blank'>
                    <img className='rules-img rcm' src={rcm} alt="RCM" />
                </a>
                
            </div>
            <p className='land-acknowledgement'>
                {`We are located on  Treaty 6 Territory — the ancestral and traditional gathering place of  the Cree, Blackfoot, 
                Métis, Naktoa Sioux, Iroquois, Dene, Ojibway,  Saulteaux, Anishinaabe, and many others whose histories, languages 
                and cultures continue to influence our community and way of life. 
                We are  grateful for the land's blessings and teachings, as well as the Traditional 
                Knowledge keepers and Elders who have always walked in harmony with the spirit of this land since time immemorial. Hai hai.`}
            </p>
        </div>
        <div className="copyrights">
            <p>Copyrights @ Wehoops. Designed and Developed by <a className='copyright-link' href="https://raydenwebstudio.com/" target='_blank'>Rayden Web Studio</a></p>
        </div>
    </>
   
  )
}

export default Footer
