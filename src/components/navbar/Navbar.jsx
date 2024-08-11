import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import brandLogo from '../../images/icons/wehoops-logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50); // Adjust the value to where you want the effect to start
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobile = () => {
    scrollToTop();
    setBurgerMenu(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="top-nav">
        <div className="top-contact-info">
          <div className="top-email">
            <IoIosMail className='contact-top-icon' />
            <a className='mail-top' href="mailto:we.hoopsociety@gmail.com">
              <p>we.hoopsociety@gmail.com</p>
            </a>
          </div>
          <div className="top-email">
            <FaSquarePhone className='contact-top-icon' />
            <a className='tel-top' href="tel:+7803355238">
              <p>(780) 335-5238</p>
            </a>
          </div>
        </div>

        <div className="top-contact-button">
          <a className='financial-link' href="https://jumpstart.canadiantire.ca/pages/individual-child-grants" target='_blank'>Financial Support</a>
          <Link to='/registration'>
            <button className='top-register-btn'>Register Now!</button>
          </Link>
        </div>
      </div>

      <div className="nav-container">
        <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
          <div className="brand-logo">
            <Link to="/" className='logo-link'>
              <img className='nav-logo' src={brandLogo} alt="Nav Logo" />
            </Link>
          </div>
          <ul className={`nav-item ${burgerMenu ? 'active' : ''}`}>
            <li className='nav-list'>
              <Link to="/" className='nav-link' onClick={closeMobile}>Home</Link>
            </li>
            <li className='nav-list'>
              <Link to="/programs" className='nav-link' onClick={closeMobile}>Programs</Link>
            </li>
            <li className='nav-list logo-list'>
              <div className="logo">
                <Link to="/" className='logo-link'>
                  <img className='nav-logo' src={brandLogo} alt="Nav Logo" />
                </Link>
              </div>
            </li>
            <li className='nav-list'>
              <Link to="/gallery" className='nav-link' onClick={closeMobile}>Gallery</Link>
            </li>
            <li className='nav-list'>
              <Link to="/about" className='nav-link' onClick={closeMobile}>About Us</Link>
            </li>
          {/* MOBILE VERSION BOT NAV */}
            <li>
              <div className="bot-nav">
                  <div className="top-contact-info">
                    <div className="top-email">
                      <IoIosMail className='contact-top-icon'/>
                      <p>we.hoopsociety@gmail.com</p>
                    </div>
                    <div className="top-email">
                      <FaSquarePhone className='contact-top-icon'/>
                      <p>(780) 335-5238</p>
                    </div>
                  </div>
                  <div className="top-contact-button">
                    <a className='financial-link' href="https://jumpstart.canadiantire.ca/pages/individual-child-grants" target='_blank'>Financial Support</a>
                    <Link to='/registration'>
                      <button className='top-register-btn'>Register Now!</button>
                    </Link>
                  </div>
                </div>
              </li>
          </ul>
          <div className='nav-button' onClick={() => setBurgerMenu(!burgerMenu)}>
            {burgerMenu ? <IoCloseSharp className='close-menu' /> : <GiHamburgerMenu className='burger-menu' />}
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;
