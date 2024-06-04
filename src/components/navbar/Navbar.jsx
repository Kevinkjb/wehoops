import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className='main-nav'>
        <div className="logo">
          <h2>LOGO</h2>
        </div>
        <ul className='nav-item'>
          <li className='nav-list'>
            <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li className='nav-list'>
            <Link to="/about" className='nav-link'>About Us</Link>
          </li>
          <li className='nav-list'>
            <Link to="/programs" className='nav-link'>Programs</Link>
          </li>
          <li className='nav-list'>
            <Link to="/gallery" className='nav-link'>Gallery</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
