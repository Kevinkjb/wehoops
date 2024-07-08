import {Link} from 'react-router-dom'
import './navbar.css'
import brandLogo from '../../images/icons/wehoops icon iamge.png'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false)
  const closeMobile = () =>{
    scrollToTop()
    setBurgerMenu(false)
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Adds smooth scrolling behavior
    });
  };
  return (
    <div className='nav-container'>
      <nav className='main-nav'>
        <div className="logo">
          <Link to="/"  className='logo-link'>
            <img className='nav-logo' src={brandLogo} alt="Nav Logo" />
          </Link>
        </div>
        <ul className={`nav-item ${burgerMenu ? 'active' : ''}`}>
          <li className='nav-list'>
            <Link to="/" className='nav-link' onClick={closeMobile}>Home</Link>
          </li>
          <li className='nav-list'>
            <Link to="/about" className='nav-link' onClick={closeMobile}>About Us</Link>
          </li>
          <li className='nav-list'>
            <Link to="/programs" className='nav-link' onClick={closeMobile}>Programs</Link>
          </li>
          <li className='nav-list'>
            <Link to="/gallery" className='nav-link' onClick={closeMobile}>Gallery</Link>
          </li>
        </ul>
        <div className='nav-button' onClick={() => setBurgerMenu(!burgerMenu)}>
          {
            burgerMenu ? <IoCloseSharp className='close-menu'/>  : <GiHamburgerMenu className='burger-menu'/>
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
