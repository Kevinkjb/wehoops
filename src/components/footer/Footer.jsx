import {Link} from 'react-router-dom';
import logoImg from '../../images/icons/wehoops icon iamge.png'
import './footer.css';
import { FaSlack, FaFacebook, FaYoutube   } from "react-icons/fa";
const Footer = () => {
  return (
    <>

        <div className='footer-main'>
            <div className="footer-content">
                <div className="footer-logo">

                <Link to="/" >
                    <img className='footer-img' src={logoImg} alt="Wehoops Logo" />
                </Link>
 
                    <div className="footer-info">
                        <p className='footer-text'>Join us for fun and skill-building! </p>
                        <button className='footer-btn'>Call Us!</button>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="footer-list-item">
                        <ul className='footer-item'>
                            <li className='footer-list'>
                                <Link to="/" className='footer-link'>Home</Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="/about"  className='footer-link'>About Us</Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="/programs" className='footer-link'>Programs</Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="/gallery" className='footer-link'>Gallery</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social">
                    <h3 className='footer-title'>Follow Us</h3>
                    <div className="social-media">
                        <a href="" className='social-link'>
                            <FaSlack className='footer-icon'/>
                        </a>
                        <a href="" className='social-link'>
                            <FaFacebook className='footer-icon'/>
                        </a>
                        <a href="" className='social-link'>
                            <FaYoutube className='footer-icon'/>
                        </a>

                    </div>
                </div>
            </div>


        </div>
        <div className="copyrights">
            <p>Copyrights @ Wehoops. Designed and Developed by <a className='copyright-link' href="https://raydenwebstudio.com/" target='_blank'>Rayden Web Studio</a></p>
        </div>
    </>
   
  )
}

export default Footer
