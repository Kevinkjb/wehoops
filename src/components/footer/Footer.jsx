import {Link} from 'react-router-dom'
import './footer.css'
import { FaSlack, FaFacebook, FaYoutube   } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <div className="footer-logo">
            <div className="brand-footer">
                <h2>Logo</h2>
            </div>
        </div>
        <div className='footer-main'>
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-list-item">
                        <ul className='footer-item'>
                            <li className='footer-list'>
                                <Link className='footer-link'>Home</Link>
                            </li>
                            <li className='footer-list'>
                                <Link className='footer-link'>About</Link>
                            </li>
                            <li className='footer-list'>
                                <Link className='footer-link'>Programs</Link>
                            </li>
                            <li className='footer-list'>
                                <Link className='footer-link'>Gallery</Link>
                            </li>
                        </ul>
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
        </div>
    </>
   
  )
}

export default Footer
