import './hero.css'
// import LogoImage from '../../images/icons/wehoops-logo.png'

const Hero = () => {
  return (
    <div className='main-hero'>
        <div className="hero-container">
            {/* <img className='hero-logo-img' src={LogoImage} alt="" /> */}
            <h1 className='hero-title'><span style={{fontFamily: 'var(--slogan-text)'}}>W</span>etaskiwin Elite Hoopers Society</h1>
            <p className='hero-text'>Sometimes We Win, Sometimes We Learn.</p>
            <a href="#contact">
              <button className='hero-btn'>Contact Us</button>
            </a>
        </div>

    </div>
  )
}

export default Hero
