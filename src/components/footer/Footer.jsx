import {Link} from 'react-router-dom';
import logoImg from '../../images/icons/logo.png'
import './footer.css';
import { FaSlack, FaFacebook, FaYoutube   } from "react-icons/fa";
const Footer = () => {
  return (
    <>

        <div className='footer-main'>
            <div className="footer-content">
                <div className="footer-logo">

                    <img className='footer-img' src={logoImg} alt="Wehoops Logo" />
                    <div className="footer-info">
                        <p className='footer-text'>Lorem ipsum dolor sit sit amet consectetur  sit amet . </p>
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
                                <Link to="/about"  className='footer-link'>About</Link>
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
                        <FaSlack className='footer-icon'/>
                        <FaFacebook className='footer-icon'/>
                        <FaYoutube className='footer-icon'/>
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
