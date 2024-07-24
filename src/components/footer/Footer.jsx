import {Link} from 'react-router-dom';
import logoImg from '../../images/icons/wehoops-logo.png'
import './footer.css';
import { FaSlack, FaFacebook, FaYoutube   } from "react-icons/fa";
import ruleTwo from '../../images/icons/rule of two.webp'
import rcm from '../../images/icons/rcm pledge.jpg'
import helpline from '../../images/icons/helpline.webp'
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
                                <Link to="/registration"  className='footer-link'>Registration</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-list-item-two">
                        <ul className='footer-item-two'>
                            <li className='footer-list'>
                                <a href="/" className='footer-link'>Code of Conduct</a>
                            </li>
                            <li className='footer-list'>
                                <a href="/programs" className='footer-link'>WEHoops EDI Pledge</a>
                            </li>
                            <li className='footer-list'>
                                <a href="/gallery" className='footer-link'>Athlete Production Guidelines</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*FOOTER SOCIAL SECTION  */}
                <div className="footer-social">
                    <div className="footer-social-info">
                        <h3 className='footer-title'>Follow Us</h3>
                        <div className="social-media">
                            <a href="/" className='social-link' target='_blank' alt="Slack Link">
                                <FaSlack className='footer-icon' />
                            </a>
                            <a href="/" className='social-link' target='_blank' alt="Facebook Link">
                                <FaFacebook className='footer-icon' />
                            </a>
                            <a href="/" className='social-link' target='_blank' alt="Youtube Link">
                                <FaYoutube className='footer-icon' />
                            </a>
                        </div>
                    </div>
                    <div className="footer-social-btn">
                        <button className='footer-btn'>Contact Us</button>
                        <button className='footer-btn-two'>Register Now</button>
                    </div>
                </div>
            </div>


        </div>
        <div className="sample">
            <div className="footer-rules">
                <a href="/" target='_blank'>
                    <img className='rules-img' src={ruleTwo} alt="Rule of Two" />
                </a>
                <a href="/" target='_blank'>
                    <img className='rules-img' src={helpline} alt="Help Line" />
                </a>
                <a href="/" target='_blank'>
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
